'use strict';

function Brush() {
    Module.call(this);
    this.type = 'brush';
    this.status = Engine._statusRun;
    this.visible = true;
    this.unique = true;
    this.speed = 1;
    this.basePoint = { x: 10, y: -11, z: 18 };
    this.patterns = [];
    this.background = [];
    this.target = { sx: 0, sy: 0, tx: 0, ty: 0, type: '', callback: null };
    this.drawSequence = [{}];
    this.drawStartPoint = {};
    this.drawEquation = function () { return { x: 0, y: 0 }; };
    this.lineWidth = 1;
    this.completeFired = false;
    this.drawStart = false;
    this.drawing = false;
    this.defaultMaterial = new THREE.MeshPhongMaterial({ color: '#ff0000', shading: THREE.FlatShading });
    this.init();
};

Brush.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Brush
});

Brush.prototype.init = function () {
    var width = 6;
    var height = 100;
    var halfWidth = width / 2;
    var tmpY = width * Math.cos(Math.PI / 6);
    /*
    amount : 拉伸线段的厚度
    bevelThickness :  倒角的厚度,默认6
    bevelSize : 从截面外轮廓倒角的尺寸,默认-2
    bevelSegments : 倒角部分的细分线段数,默认初始化为3 
    bevelEnabled : 是否启用倒角,默认true  
    curveSegments : 曲线上的顶点数量,默认12
    steps : 步数,曲线拉伸的细分线段数,默认1.    
    extrudePath : 拉伸几何体跟随的路径, 倒角不能用在路径跟随的方式生成的拉伸几何体
    extrudePts : 默认false
    extrudeByPath : 拉伸几何体是否跟随路径,默认false    
    material  :正面和背面材质属性  
    extrudeMaterial : 拉伸几何体和斜面的材质属性 
    */
    var options = {
        amount: height,
        bevelThickness: width,
        bevelSegments: width,
        bevelSize: width,
        steps: width
    };
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo(width, 0);
    triangleShape.lineTo(halfWidth, -tmpY);
    triangleShape.lineTo(-halfWidth, -tmpY);
    triangleShape.lineTo(-width, 0);
    triangleShape.lineTo(-halfWidth, tmpY);
    triangleShape.lineTo(halfWidth, tmpY);
    triangleShape.lineTo(width, 0);
    this.torso = new THREE.Mesh(new THREE.ExtrudeGeometry(triangleShape, options), new THREE.MeshPhongMaterial({ color: '#ffff00', shading: THREE.FlatShading }));
    this.neck = new THREE.Mesh(new THREE.CylinderGeometry(9, 3, 20, 20, 5), this.defaultMaterial);
    this.neck.position.z = -16; Engine.render();
    this.neck.rotation.x = Math.PI / 2
    this.body.add(this.torso);
    this.head.add(this.neck);
    this.mesh.add(this.body);
    this.mesh.add(this.head);
    this.mesh.rotation.y = Math.PI / 8;
    this.mesh.rotation.x = Math.PI / 6;
    this.mesh.position.x = this.basePoint.x;
    this.mesh.position.y = this.basePoint.y;
    this.mesh.position.z = this.basePoint.z;
};

Brush.prototype.clearPatterns = function (callback) {
    for (var i = 0; i < this.patterns.length; i++) {
        Engine.scene.remove(this.patterns[i].mesh);
    }

    this.patterns = [];

    if (callback) {
        callback();
    }
};

Brush.prototype.popPatterns = function () {
    Engine.scene.remove(this.patterns.pop());
};

Brush.prototype.setColor = function (color, atOnce) {
    if (typeof atOnce == 'boolean' && atOnce) {
        this.neck.material.setValues(new THREE.MeshPhongMaterial({ color: color, shading: THREE.FlatShading }));
        Engine.render();
    } else {
        this.drawSequence.push({
            c: color,
            type: 'sc'
        });
    }
};

Brush.prototype.setLineWidth = function (width, atOnce) {
    if (typeof atOnce == 'boolean' && atOnce) {
        this.lineWidth = (width < 1 ? 1 : width);
    } else {
        this.drawSequence.push({
            w: width,
            type: 'slw'
        });
    }
};

Brush.prototype.moveTo = function (x, y) {
    this.drawSequence.push({
        tx: x * Engine.params.grid.step,
        ty: y * Engine.params.grid.step,
        type: 'mt'
    });
};

Brush.prototype.lineTo = function (x, y) {
    this.drawSequence.push({
        tx: x * Engine.params.grid.step,
        ty: y * Engine.params.grid.step,
        type: 'lt'
    });
};

Brush.prototype.lineRotate = function (angle, clockwise) {
    this.drawSequence.push({
        a: angle * Math.PI / 180 * (clockwise ? 1 : -1),
        type: 'lr'
    });
};

Brush.prototype.lineLength = function (length) {
    this.drawSequence.push({
        l: length,
        type: 'll'
    });
};

/*
action type:
mt: move to
lt: line to
slw: set lien width
sc: set color
lr: line rotate
*/
Brush.prototype.updatePosition = function () {
    if (!this.drawStart || this.drawing || this.drawSequence.length <= 0) {
        return;
    }

    var tmpItem = this.drawSequence[0];
    var targetObj = this.createTargetObj(tmpItem);
    var _that = this;
    if (this.checkActionComplete(targetObj)) {
        this.drawSequence.shift();
        if (this.drawSequence.length == 0) {
            if (!this.completeFired) {
                this.drawCompleteFn();
                this.completeFired = true;
            }

            this.drawStart = false;
        }
    } else {
        switch (tmpItem.type) {
            case 'mt':
                if (!this.drawing) {
                    this.drawing = true;
                    TweenMax.to(
                        this.mesh.position,
                        3,
                        {
                            x: targetObj.tx + _that.basePoint.x,
                            y: targetObj.ty + _that.basePoint.y,
                            ease: Linear.easeNone,
                            onComplete: function () {
                                _that.drawing = false;
                            }
                        }
                    );
                }
                break;
            case 'lt':
            case 'll':
                if (!this.drawing) {
                    this.drawing = true;
                    var line = new Line(this, targetObj.sx, targetObj.sy, targetObj.tx, targetObj.ty, targetObj.c, targetObj.w);
                    if (tmpItem.type == 'll') {
                        if (this.patterns.length >0) {
                            var lastRadian = this.patterns[this.patterns.length - 1].mesh.rotation.z;
                            line.setRotation(lastRadian);
                        }
                    }

                    this.patterns.push(line);
                    Engine.scene.add(line.mesh);
                    line.resetBodyVertices(1, 0);
                    line.draw(true);
                }

                break;
            case 'lr':
                if (this.patterns.length > 0 && !this.drawing) {
                    var _line = this.patterns[this.patterns.length - 1];
                    var targetAngle = _line.mesh.rotation.z + targetObj.a
                    this.drawing = true;
                    this.mesh.visible = false;
                    TweenMax.to(
                        _line.mesh.rotation,
                        3,
                        {
                            z: targetAngle,
                            ease: Linear.easeNone,
                            onUpdate: function () {
                                _that.mesh.position.x = _line.body.geometry.vertices[0].x + _that.basePoint.x;
                            },
                            onInit: function () {
                                _line.mesh.add(_that.mesh);
                                _that.mesh.position.x = _line.body.geometry.vertices[0].x + _that.basePoint.x;
                                _that.mesh.position.y = _that.basePoint.y;
                                _that.mesh.visible = true;
                            },
                            onComplete: function () {
                                _that.mesh.visible = false;
                                Engine.scene.add(_that.mesh);
                                var tmpVal = Math.sqrt(Math.pow(_line.mesh.geometry.vertices[1].x - _line.mesh.geometry.vertices[0].x, 2) + Math.pow(_line.mesh.geometry.vertices[1].y - _line.mesh.geometry.vertices[0].y, 2));
                                _that.mesh.position.x = tmpVal * Math.cos(_line.mesh.rotation.z) + _line.mesh.geometry.vertices[0].x + _that.basePoint.x;
                                _that.mesh.position.y = tmpVal * Math.sin(_line.mesh.rotation.z) + _line.mesh.geometry.vertices[0].y + _that.basePoint.y;
                                _that.mesh.visible = true;
                                _that.drawing = false;
                            }
                        }
                    );
                }

                break;
            case 'slw':
                this.lineWidth = targetObj.w;
                break;
            case 'sc':
                this.neck.material.setValues(new THREE.MeshPhongMaterial({ color: targetObj.c, shading: THREE.FlatShading }));
                break;
        }
    }
}

Brush.prototype.createTargetObj = function (drawSeqItem) {
    var targetObj = {
        sx: null,
        sy: null,
        tx: null,
        ty: null,
        a: null,
        c: null,
        w: null,
        type: drawSeqItem.type
    };
    switch (drawSeqItem.type) {
        case 'mt':
        case 'lt':
        case 'll':
            targetObj.c = '#' + this.neck.material.color.getHexString();
            targetObj.w = this.lineWidth;
            targetObj.sx = this.mesh.position.x - this.basePoint.x;
            targetObj.sy = this.mesh.position.y - this.basePoint.y;
            targetObj.ty = targetObj.sy;
            if (drawSeqItem.type == 'll') {
                targetObj.tx = drawSeqItem.l * Engine.params.grid.step;
            } else {
                targetObj.tx = drawSeqItem.tx;
                targetObj.ty = drawSeqItem.ty;
            }

            break;
        case 'slw':
            targetObj.w = drawSeqItem.w;
            break;
        case 'sc':
            targetObj.c = drawSeqItem.c; //new THREE.MeshPhongMaterial({ color: drawSeqItem.c, shading:  THREE.FlatShading });
            break;
        case 'lr':
            targetObj.a = drawSeqItem.a;
            break;
    }

    return targetObj;
};

Brush.prototype.checkActionComplete = function (targetObj) {
    var flag = false;
    switch (targetObj.type) {
        case 'mt':
        case 'lt':
        case 'll':
            var currPosX = this.mesh.position.x - this.basePoint.x;
            var currPosY = this.mesh.position.y - this.basePoint.y;
            if (currPosX == targetObj.tx && currPosY == targetObj.ty) {
                flag = true;
            }

            break;
        case 'slw':
            if (this.lineWidth == targetObj.w) {
                flag = true;
            }

            break;
        case 'sc':
            if ('#' + this.neck.material.color.getHexString() == targetObj.c) {
                flag = true;
            }

            break;
        case 'lr':
            if (this.patterns.length > 0) {
                var line = this.patterns[this.patterns.length - 1];
                if (line.mesh.rotation.z == targetObj.a + line.orgRotationZ) {
                    flag = true;
                }
            }

            break;
    }

    return flag;
}

Brush.prototype.reset = function () {
    this.clearPatterns();
    this.drawSequence = [{}];
    this.completeFired = false;
    this.drawStart = false;
    this.neck.material.setValues(this.defaultMaterial);
    this.lineWidth = 1;
    this.mesh.position.x = this.basePoint.x;
    this.mesh.position.y = this.basePoint.y;
    this.mesh.position.z = this.basePoint.z;
    this.target = { sx: 0, sy: 0, tx: 0, ty: 0, type: '', callback: null };
};

Brush.prototype.prepareBackground = function () {
    this.buildBackground();
    Engine.render();
};

Brush.prototype.buildBackground = function () {

};

Brush.prototype.setBuildBackgroundFn = function (fn) {
    this.buildBackground = fn;
};

Brush.prototype.buildBackgroundLine = function (sx, sy, ex, ey, lineWidth, color) {
    var step = Engine.params.grid.step;
    var line = new Line(this, sx * step, sy * step, ex * step, ey * step, color, lineWidth);
    this.background.push(line);
    Engine.scene.add(line.mesh);
    line.resetBodyVertices(1, 0, 0.4);
    line.draw(false);
};

Brush.prototype.setDrawCompleteFn = function (fn) {
    this.drawCompleteFn = fn;
};

Brush.prototype.drawCompleteFn = function () {

};

Brush.prototype.startDraw = function () {
    this.drawStart = true;
    this.drawSequence[0] = {
        tx: this.mesh.position.x - this.basePoint.x,
        ty: this.mesh.position.y - this.basePoint.y,
        type: 'mt'
    }
};

Brush.prototype.preparingToRestart = function () {
    this.reset();
};

Brush.getLineEquation = function (sx, sy, tx, ty) {
    var tmpA = (tx - sx == 0 ? 0 : (ty - sy) / (tx - sx));
    var tmpB = ty - tmpA * tx;
    var that = this;
    return function (currX, currY, targetX, targetY) {
        var tmpVal = 0;
        var tmpPos = {};
        if (targetX == currX) {
            if (targetY > currY) {
                tmpVal = that.mesh.position.y - that.basePoint.y + 1;
            } else {
                tmpVal = that.mesh.position.y - that.basePoint.y - 1;
            }

            tmpPos = { x: targetX, y: tmpVal };
        } else {
            if (targetX > currX) {
                tmpVal = that.mesh.position.x - that.basePoint.x + 1;
            } else {
                tmpVal = that.mesh.position.x - that.basePoint.x - 1;
            }

            tmpPos = { x: tmpVal, y: tmpA * tmpVal + tmpB };
        }

        return tmpPos;
    };
};

function Line(brush, sx, sy, tx, ty, color, width) {
    Module.call(this);
    this.brush = brush;
    this.type = 'line';
    this.status = Engine._statusRun;
    this.visible = true;
    this.unique = false;
    this.speed = 1;
    this.lineWidth = 1;
    this.completeFired = false;
    this.params = {
        sx: Math.abs(sx) < 1e-10 ? 0 : sx,
        sy: Math.abs(sy) < 1e-10 ? 0 : sy,
        tx: Math.abs(tx) < 1e-10 ? 0 : tx,
        ty: Math.abs(ty) < 1e-10 ? 0 : ty,
        a: 0,
        c: color,
        w: width,
        e: Brush.getLineEquation(sx, sy, tx, ty)
    };

    this.init();
};

Line.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Line
});

Line.prototype.init = function () {
    /*
     LineBasicMaterial( parameters )
     Parameters  定义材质外观，包含多个属性来定义材质 : 
     color : 线条的颜色, 默认白色
     linewidth : 线条的宽度, 默认1, 无法设置, 要设置线宽，只能使用three3DExtras.tubeLine
     linecap : 线条两端的外观, 默认是圆角端点
     linejoin : 两个线条的连接点处的外观, 默认是'round', 圆角。
     vertexColors : 线条材质是否使用顶点颜色, boolean值是, 线条各部分的颜色会根据顶点的颜色来进行插值
     fog : 定义材质的颜色是否受全局雾效的影响
     depthTest : false
     depthWrite : false
     transparent : true
    */
    var lineGeometry = new THREE.Geometry();
    lineGeometry.vertices.push(new THREE.Vector3(this.params.sx, this.params.sy, 0));
    lineGeometry.vertices.push(new THREE.Vector3(this.params.tx, this.params.ty, 0));
    var lineMate = new THREE.LineBasicMaterial({ color: this.params.c, transparent: true, opacity: 0 });
    this.mesh = new THREE.Line(lineGeometry, lineMate, THREE.LineSegments);
    var cubeGeometry = new THREE.CubeGeometry(1, this.params.w, 1);
    var cubeMaterial = new THREE.MeshBasicMaterial({ color: this.params.c, shading: THREE.FlatShading });
    this.body = new THREE.Mesh(cubeGeometry, cubeMaterial);
    this.mesh.add(this.body);
    this.mesh.rotation.z = this.getLineAngle();
    this.orgRotationZ = this.mesh.rotation.z;
    this.mesh.position.x = this.params.sx;
    this.mesh.position.y = this.params.sy;
};

Line.prototype.getLengthOfLine = function () {
    return Math.sqrt(Math.pow(this.params.tx - this.params.sx, 2) + Math.pow(this.params.ty - this.params.sy, 2));
};

Line.prototype.getLineAngle = function () {
    if (this.params.sx == 0 && this.params.tx == 0) {
        if (this.params.sy > this.params.ty) {
            return -Math.PI / 2;
        } else {
            return Math.PI / 2;
        }
    } else if (this.params.sy == 0 && this.params.ty == 0) {
        if (this.params.sx > this.params.tx) {
            return -Math.PI;
        } else {
            return 0;
        }
    } else {
        return Math.atan((this.params.ty - this.params.sy) / (this.params.tx - this.params.sx));
    }
};

Line.prototype.resetBodyVertices = function (x1, x2, z) {
    this.body.geometry.vertices[0].x = x1;
    this.body.geometry.vertices[1].x = x1;
    this.body.geometry.vertices[2].x = x1;
    this.body.geometry.vertices[3].x = x1;
    this.body.geometry.vertices[4].x = x2;
    this.body.geometry.vertices[5].x = x2;
    this.body.geometry.vertices[6].x = x2;
    this.body.geometry.vertices[7].x = x2;
    if (typeof z == 'number') {
        this.body.geometry.vertices[0].z = z;
        this.body.geometry.vertices[2].z = z;
        this.body.geometry.vertices[4].z = z;
        this.body.geometry.vertices[6].z = z;
    }

    this.body.geometry.verticesNeedUpdate = true;
};

Line.prototype.draw = function (animation) {
    if (this.params.sx == this.params.tx && this.params.sy == this.params.ty) {
        this.brush.drawing = false;
        return;
    }

    var lineLength = this.getLengthOfLine();
    if (typeof animation == 'boolean' && animation) {
        var updateArr = [
            this.body.geometry.vertices[0],
            this.body.geometry.vertices[1],
            this.body.geometry.vertices[2],
            this.body.geometry.vertices[3]
        ];
        var _that = this;
        this.body.add(this.brush.mesh);
        this.brush.mesh.position.x = 1 + this.brush.basePoint.x;
        this.brush.mesh.position.y = 0 + this.brush.basePoint.y;
        TweenMax.to(
            updateArr,
            3,
            {
                x: lineLength,
                ease: Linear.easeNone,
                onUpdate: function () {
                    _that.body.geometry.verticesNeedUpdate = true;
                    _that.brush.mesh.position.x = _that.body.geometry.vertices[0].x + _that.brush.basePoint.x;
                },
                onComplete: function () {
                    Engine.scene.add(_that.brush.mesh);
                    _that.brush.mesh.position.x = _that.mesh.geometry.vertices[1].x + _that.brush.basePoint.x;
                    _that.brush.mesh.position.y = _that.mesh.geometry.vertices[1].y + _that.brush.basePoint.y;
                    _that.brush.drawing = false;
                }
            });
    } else {
        this.resetBodyVertices(lineLength, 0);
    }
};

Line.prototype.setRotation = function (radian) {
    this.mesh.rotation.z = radian;
}
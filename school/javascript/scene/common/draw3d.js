'use strict';

var _useFullContainer = true;
var _minNumber = 0.0000000001;

function _diffLessThanMin(number1, number2) {
    return Math.abs(number1 - number2) < _minNumber ? true : false;
}

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
    this.prevTargetObj = null
    this.defaultMaterial = new THREE.MeshPhongMaterial({ color: '#ff0000', shading: THREE.FlatShading });
    this.track = [];
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

Brush.prototype.groupPatterns = function (count) {
    this.drawSequence.push({
        amt: count,
        type: 'gp'
    });
};

Brush.prototype.patternGroupRotate = function (angle, clockwise) {
    this.drawSequence.push({
        a: angle * Math.PI / 180 * (clockwise ? 1 : -1),
        type: 'pgr'
    });
};

Brush.prototype.arc = function (centerX, centerY, radius, startAngle, endAngle, clockwise) {
    this.drawSequence.push({
        cx: centerX * Engine.params.grid.step,
        cy: centerY * Engine.params.grid.step,
        r: radius * Engine.params.grid.step,
        sa: startAngle,
        ea: endAngle * (clockwise ? 1 : -1),
        cw: clockwise,
        type: 'arc'
    });
};

Brush.prototype.arcRotate = function (angle, clockwise) {
    this.drawSequence.push({
        a: angle * Math.PI / 180 * (clockwise ? 1 : -1),
        type: 'arcr'
    });
};

Brush.prototype.circle = function (centerX, centerY, radius) {
    this.drawSequence.push({
        cx: centerX * Engine.params.grid.step,
        cy: centerY * Engine.params.grid.step,
        r: radius * Engine.params.grid.step,
        sa: 0,
        ea: 360,
        cw: false,
        type: 'arc'
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
        this.prevTargetObj = targetObj;
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
                    var tmpLength = Line.getLengthOfLine(this.mesh.position.x, this.mesh.position.y, targetObj.tx, targetObj.ty);
                    TweenMax.to(
                        this.mesh.position,
                        3 * tmpLength / 200,
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
                        if (this.prevTargetObj.type == "mt") {
                        } else if (this.patterns.length > 0 && this.patterns[this.patterns.length - 1].type != 'patterngroup') {
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
                                var lineLength = _line.getLengthOfLine();
                                var lineMeshVert = _line.mesh.geometry.vertices;
                                _that.mesh.position.x = _line.mesh.position.x + lineLength * Math.cos(_line.mesh.rotation.z) + _that.basePoint.x;
                                _that.mesh.position.y = _line.mesh.position.y + lineLength * Math.sin(_line.mesh.rotation.z) + _that.basePoint.y;
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
            case 'pgr':
                if (this.patterns.length > 0 && !this.drawing) {
                    var _pGroup = this.patterns[this.patterns.length - 1];
                    var _basePattern = _pGroup.getBasePattern();
                    var targetAngle = _pGroup.mesh.rotation.z + targetObj.a
                    this.drawing = true;
                    this.mesh.visible = false;
                    TweenMax.to(
                        _pGroup.mesh.rotation,
                        3,
                        {
                            z: targetAngle,
                            ease: Linear.easeNone,
                            onUpdate: function () {
                                _that.mesh.position.x = _basePattern.body.geometry.vertices[0].x + _that.basePoint.x;
                            },
                            onInit: function () {
                                _basePattern.mesh.add(_that.mesh);
                                _that.mesh.position.x = _basePattern.body.geometry.vertices[0].x + _that.basePoint.x;
                                _that.mesh.position.y = _that.basePoint.y;
                                _that.mesh.visible = true;
                            },
                            onComplete: function () {
                                _that.mesh.visible = false;
                                Engine.scene.add(_that.mesh);
                                var bplLength = _basePattern.getLengthOfLine();
                                var bplMeshVert = _basePattern.mesh.geometry.vertices;
                                _that.mesh.position.x = _basePattern.mesh.position.x + bplLength * Math.cos(_basePattern.mesh.rotation.z) + _that.basePoint.x;
                                _that.mesh.position.y = _basePattern.mesh.position.y + bplLength * Math.sin(_basePattern.mesh.rotation.z) + _that.basePoint.y;
                                _that.mesh.visible = true;
                                _that.drawing = false;
                            }
                        }
                    );
                }
                break;
            case 'arc':
                if (!this.drawing) {
                    this.drawing = true;
                    var arc = new Arc(this, targetObj.cx, targetObj.cy, targetObj.r, targetObj.sa, targetObj.ea, targetObj.cw);
                    this.patterns.push(arc);
                    Engine.scene.add(arc.mesh);
                    arc.draw(false);
                }

                break;
            case 'arcr':
                if (this.patterns.length > 0 && !this.drawing && this.patterns[this.patterns.length - 1].type == 'arc') {
                    var _arc = this.patterns[this.patterns.length - 1];
                    var targetAngle = _arc.mesh.rotation.z + targetObj.a
                    this.drawing = true;
                    this.mesh.visible = false;
                    TweenMax.to(
                        _arc.mesh.rotation,
                        3,
                        {
                            z: targetAngle,
                            ease: Linear.easeNone,
                            onUpdate: function () {
                                _that.mesh.position.x = _arc.bodyGeometry.vertices[0].x + _that.basePoint.x;
                                _that.mesh.position.y = _arc.bodyGeometry.vertices[0].y + _that.basePoint.y;
                            },
                            onInit: function () {
                                _arc.mesh.add(_that.mesh);
                                _that.mesh.position.x = _arc.bodyGeometry.vertices[0].x + _that.basePoint.x;
                                _that.mesh.position.y = _arc.bodyGeometry.vertices[0].y + _that.basePoint.y;
                                _that.mesh.visible = true;
                            },
                            onComplete: function () {
                                _that.mesh.visible = false;
                                Engine.scene.add(_that.mesh);
                                var tmpVal = _arc.params.r;
                                _that.mesh.position.x = tmpVal * Math.cos(_arc.mesh.rotation.z + _arc.params.sr) + _arc.params.x + _that.basePoint.x;
                                _that.mesh.position.y = tmpVal * Math.sin(_arc.mesh.rotation.z + _arc.params.sr) + _arc.params.y + _that.basePoint.y;
                                _that.mesh.visible = true;
                                _that.drawing = false;
                            }
                        }
                    );
                }
        }
    }
}

Brush.prototype.createTargetObj = function (drawSeqItem) {
    var targetObj = {
        sx: this.mesh.position.x - this.basePoint.x,
        sy: this.mesh.position.y - this.basePoint.y,
        tx: this.mesh.position.x - this.basePoint.x,
        ty: this.mesh.position.y - this.basePoint.y,
        a: null,
        c: null,
        w: null,
        amt: null,
        cx: null,
        cy: null,
        r: null,
        sa: null,
        ea: null,
        cw: null,
        type: drawSeqItem.type
    };
    switch (drawSeqItem.type) {
        case 'mt':
        case 'lt':
        case 'll':
            targetObj.c = '#' + this.neck.material.color.getHexString();
            targetObj.w = this.lineWidth;
            if (drawSeqItem.type == 'mt' || this.patterns.length <= 0) {
                targetObj.sx = this.mesh.position.x - this.basePoint.x;
                targetObj.sy = this.mesh.position.y - this.basePoint.y;
            } else {
                targetObj.sx = this.prevTargetObj.tx;
                targetObj.sy = this.prevTargetObj.ty;
            }

            if (drawSeqItem.type == 'll') {
                var tmpLength = drawSeqItem.l * Engine.params.grid.step;
                if (drawSeqItem.type == 'mt' || this.prevTargetObj.type == 'mt' || this.patterns.length <= 0) {
                    targetObj.tx = targetObj.sx + tmpLength;
                    targetObj.ty = targetObj.sy;
                } else {
                    var prevPattern = this.patterns[this.patterns.length - 1];
                    targetObj.tx = targetObj.sx + tmpLength * Math.cos(prevPattern.mesh.rotation.z);
                    targetObj.ty = targetObj.sy + tmpLength * Math.sin(prevPattern.mesh.rotation.z);
                }
            } else {
                targetObj.tx = drawSeqItem.tx;
                targetObj.ty = drawSeqItem.ty;
            }

            break;
        case 'slw':
            targetObj.w = drawSeqItem.w;
            break;
        case 'sc':
            targetObj.c = drawSeqItem.c;
            break;
        case 'lr':
            targetObj.a = drawSeqItem.a;
            break;
        case 'gp':
            targetObj.amt = drawSeqItem.amt;
            break;
        case 'pgr':
            targetObj.a = drawSeqItem.a;
            break;
        case 'arc':
            targetObj.cx = drawSeqItem.cx;
            targetObj.cy = drawSeqItem.cy;
            targetObj.r = drawSeqItem.r;
            targetObj.sa = drawSeqItem.sa;
            targetObj.ea = drawSeqItem.ea;
            targetObj.cw = drawSeqItem.cw;
            break;
        case 'arcr':
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
            if (_diffLessThanMin(currPosX, targetObj.tx) && _diffLessThanMin(currPosY, targetObj.ty)) {
                flag = true;
                this.track.push({ x: currPosX / Engine.params.grid.step, y: currPosY / Engine.params.grid.step });
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
                    this.track[this.track.length - 1].x = line.mesh.geometry.vertices[1].x;
                    this.track[this.track.length - 1].y = line.mesh.geometry.vertices[1].y;
                    flag = true;
                }
            }

            break;
        case 'gp':
            var pGroup = new PatternGroup(this, targetObj.amt);
            Engine.scene.add(pGroup.mesh);
            flag = true;
            break;
        case 'pgr':
            if (this.patterns.length > 0) {
                var pGroup = this.patterns[this.patterns.length - 1];
                var basePattern = pGroup.getBasePattern();
                if (pGroup.mesh.rotation.z == targetObj.a + pGroup.orgRotationZ) {
                    this.track[this.track.length - 1].x = basePattern.mesh.geometry.vertices[1].x;
                    this.track[this.track.length - 1].y = basePattern.mesh.geometry.vertices[1].y;
                    flag = true;
                }
            }

            break;
        case 'arc':
            if (this.patterns.length > 0 && this.patterns[this.patterns.length - 1].type == 'arc' && this.patterns[this.patterns.length - 1].drawComplete) {
                flag = true;
                var currPosX = this.mesh.position.x - this.basePoint.x;
                var currPosY = this.mesh.position.y - this.basePoint.y;
                this.track.push({ x: currPosX / Engine.params.grid.step, y: currPosY / Engine.params.grid.step });
            }

            break;
        case 'arcr':
            if (this.patterns.length > 0) {
                var arc = this.patterns[this.patterns.length - 1];
                if (arc.mesh.rotation.z == targetObj.a + arc.orgRotationZ) {
                    this.track[this.track.length - 1].x = arc.bodyGeometry.vertices[0].x;
                    this.track[this.track.length - 1].y = arc.bodyGeometry.vertices[0].y;
                    flag = true;
                }
            }

            break;
    }

    return flag;
}

Brush.prototype.reset = function (resetStyle) {
    var _self = this;
    var tmpItem = Engine.scene.children.find(function (item) {
        if (item.uuid == _self.mesh.uuid) {
            return item;
        }
    });

    if (typeof tmpItem == 'undefined' || !tmpItem) {
        Engine.scene.add(this.mesh);
    }

    this.mesh.position.x = this.basePoint.x;
    this.mesh.position.y = this.basePoint.y;
    this.mesh.position.z = this.basePoint.z;

    this.track = [];
    this.clearPatterns();
    this.drawSequence = [{}];
    this.completeFired = false;
    this.drawStart = false;
    this.drawing = false;
    if (typeof (resetStyle) == 'boolean' && resetStyle) {
        this.neck.material.setValues(this.defaultMaterial);
        this.lineWidth = 1;
    }

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
    if (Scene.StepCompleteFn()) {
        Scene.stepComplete();
    } else {
        Scene.stepFaild();
    }

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

Brush.getPatternsTrack = function (parent) {
    var tracks = [];
    var pattern, tmpLength, tmpAngle, tmpVertices, tmpMesh, subItem, tmpFlag, basePattern, tmpValue;
    var tmpSX, tmpSY, tmpTX, tmpTY;
    for (var i = 0; i < parent.patterns.length; i++) {
        pattern = parent.patterns[i];
        var trackItem = {
            type: pattern.type,
            uuid: (pattern.mesh.uuid),
            sx: null,
            sy: null,
            ex: null,
            ey: null,
            cx: null,
            cy: null,
            radius: null,
            sa: null,
            ea: null,
            vertices: [],
            patterns: []
        }

        trackItem.type = pattern.type;
        tmpMesh = pattern.mesh;
        if (pattern.type == 'line') {
            tmpLength = pattern.getLengthOfLine();
            trackItem.sx = tmpMesh.position.x;
            trackItem.sy = tmpMesh.position.y;
            trackItem.ex = tmpLength * Math.cos(tmpMesh.rotation.z) + tmpMesh.position.x;
            trackItem.ey = tmpLength * Math.sin(tmpMesh.rotation.z) + tmpMesh.position.y;
        } else if (pattern.type == 'patterngroup') {
            trackItem.vertices = [];
            trackItem.patterns = Brush.getPatternsTrack(pattern);
            tmpVertices = [];
            basePattern = pattern.getBasePattern();
            for (var j = 0; j < trackItem.patterns.length; j++) {
                subItem = trackItem.patterns[j];
                if (subItem.type == 'line') {
                    if (subItem.uuid == basePattern.mesh.uuid) {
                        tmpSX = subItem.sx;
                        tmpSY = subItem.sy;
                        tmpTX = subItem.ex;
                        tmpTY = subItem.ey;
                    } else {
                        tmpLength = Line.getLengthOfLine(0, 0, subItem.sx, subItem.sy);
                        tmpAngle = basePattern.mesh.rotation.z + Math.atan(subItem.sy / subItem.sx);
                        tmpSX = tmpLength * Math.cos(tmpAngle) + basePattern.mesh.position.x;
                        tmpSY = tmpLength * Math.sin(tmpAngle) + basePattern.mesh.position.y;
                        tmpLength = Line.getLengthOfLine(0, 0, subItem.ex, subItem.ey);
                        tmpAngle = basePattern.mesh.rotation.z + Math.atan(subItem.ey / subItem.ex);
                        tmpTX = tmpLength * Math.cos(tmpAngle) + basePattern.mesh.position.x;
                        tmpTY = tmpLength * Math.sin(tmpAngle) + basePattern.mesh.position.y;
                    }

                    tmpValue = parseInt(new Number(tmpSX).toFixed(11));
                    tmpSX = _diffLessThanMin(tmpSX, tmpValue) ? tmpValue : tmpSX;
                    tmpValue = parseInt(new Number(tmpSY).toFixed(11));
                    tmpSY = _diffLessThanMin(tmpSY, tmpValue) ? tmpValue : tmpSY;
                    tmpValue = parseInt(new Number(tmpTX).toFixed(11));
                    tmpTX = _diffLessThanMin(tmpTX, tmpValue) ? tmpValue : tmpTX;
                    tmpValue = parseInt(new Number(tmpTY).toFixed(11));
                    tmpTY = _diffLessThanMin(tmpTY, tmpValue) ? tmpValue : tmpTY;
                    tmpVertices.push({ x: tmpSX, y: tmpSY });
                    tmpVertices.push({ x: tmpTX, y: tmpTY });
                }
            }

            for (var j = 0; j < tmpVertices.length; j++) {
                tmpFlag = true;
                for (var k = 0; k < trackItem.vertices.length; k++) {
                    if (_diffLessThanMin(trackItem.vertices[k].x, tmpVertices[j].x) && _diffLessThanMin(trackItem.vertices[k].y, tmpVertices[j].y)) {
                        tmpFlag = false;
                        break;
                    }
                }

                if (tmpFlag) {
                    trackItem.vertices.push(tmpVertices[j]);
                }
            }
        } else if (pattern.type == 'arc') {
            trackItem.cx = pattern.params.x;
            trackItem.cy = pattern.params.y;
            trackItem.radius = pattern.params.r;
            //trackItem.sa = tmpMesh.rotation.z * 180 / Math.PI + _arc.params.sa;
            //trackItem.ea = tmpMesh.rotation.z * 180 / Math.PI + _arc.params.ea;
			trackItem.sa = tmpMesh.rotation.z * 180 / Math.PI + pattern.params.sa;
            trackItem.ea = tmpMesh.rotation.z * 180 / Math.PI + pattern.params.ea;
        }

        tracks.push(trackItem);
    }

    return tracks;
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
    var lineLength = this.getLengthOfLine();
    lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
    lineGeometry.vertices.push(new THREE.Vector3(lineLength, 0, 0));
    var lineMate = new THREE.LineBasicMaterial({ color: this.params.c, transparent: true, opacity: 0 });
    //var lineMate = new THREE.LineBasicMaterial({ color: '#00ff00', transparent: true, opacity: 0.5 });
    this.mesh = new THREE.Line(lineGeometry, lineMate, THREE.LineSegments);
    var cubeGeometry = new THREE.CubeGeometry(1, this.params.w, 1);
    var cubeMaterial = new THREE.MeshBasicMaterial({ color: this.params.c, shading: THREE.FlatShading });
    this.body = new THREE.Mesh(cubeGeometry, cubeMaterial);
    this.mesh.add(this.body);
    this.mesh.rotation.z = Line.getLineAngle(this.params);
    this.orgRotationZ = this.mesh.rotation.z;
    this.mesh.position.x = this.params.sx;
    this.mesh.position.y = this.params.sy;
};

Line.prototype.getLengthOfLine = function (params) {
    return Line.getLengthOfLine(this.params.sx, this.params.sy, this.params.tx, this.params.ty);
};

Line.getLengthOfLine = function (sx, sy, tx, ty) {
    return Math.sqrt(Math.pow(tx - sx, 2) + Math.pow(ty - sy, 2));
};

Line.getLineAngle = function (params) {
    if (params.sx == 0 && params.tx == 0) {
        if (params.sy > params.ty) {
            return -Math.PI / 2;
        } else {
            return Math.PI / 2;
        }
    } else if (params.sy == 0 && params.ty == 0) {
        if (params.sx > params.tx) {
            return -Math.PI;
        } else {
            return 0;
        }
    } else {
        var radian = Math.atan((params.ty - params.sy) / (params.tx - params.sx));
        if (params.tx - params.sx < 0) {
            radian += Math.PI;
        }
        return radian
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
                    _that.brush.mesh.position.x = _that.mesh.position.x + lineLength * Math.cos(_that.mesh.rotation.z) + _that.brush.basePoint.x;
                    _that.brush.mesh.position.y = _that.mesh.position.y + lineLength * Math.sin(_that.mesh.rotation.z) + _that.brush.basePoint.y;
                    _that.brush.drawing = false;
                }
            });
    } else {
        this.resetBodyVertices(lineLength, 0);
    }
};

Line.prototype.setRotation = function (radian) {
    this.mesh.rotation.z = radian;
    this.orgRotationZ = radian;
};

Line.prototype.getEndPoint = function () {
    var lineLength = this.getLengthOfLine();
    var x = this.mesh.position.x + lineLength * Math.cos(this.mesh.rotation.z);
    var y = this.mesh.position.y + lineLength * Math.sin(this.mesh.rotation.z);
    return { x: x, y: y };
};

function PatternGroup(brush, count, startIdx) {
    Module.call(this);
    this.brush = brush;
    this.type = 'patterngroup';
    this.status = Engine._statusRun;
    this.visible = true;
    this.unique = false;
    this.speed = 1;
    this.lineWidth = 1;
    this.completeFired = false;
    this.startIndex = (typeof startIdx == 'number' ? (startIdx > this.brush.patterns.length - 2) ? NaN : startIdx : NaN);
    this.count = (this.brush.patterns.length < count ? this.brush.patterns.length : count);
    if (!isNaN(this.startIndex)) {
        if (this.startIndex + count > this.brush.patterns.length) {
            this.count = this.brush.patterns.length - this.startIndex;
        }
    }

    this.orgRotationZ = 0;
    this.patterns = [];
    this.init();
};

PatternGroup.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: PatternGroup
});

PatternGroup.prototype.init = function () {
    var tmpTarget = [];
    var tmpCount = this.brush.patterns.length - 1 - this.count;
    for (var i = this.brush.patterns.length - 1; i > tmpCount; i--) {
        tmpTarget.push(this.brush.patterns.pop());
        this.brush.track.pop();
    }

    this.mesh = tmpTarget[tmpTarget.length - 1].mesh;
    var tmpAngle, tmpLength, tmpX, tmpY;
    for (var i = this.count - 1; i >= 0; i--) {
        this.patterns.push(tmpTarget[i]);
        //this.mesh.add(tmpTarget[i].mesh);
        if (i < this.count - 1) {
            this.mesh.add(tmpTarget[i].mesh);
            this.resetPatterrnMesh(tmpTarget[i]);
        }
    }

    this.brush.patterns.push(this);
};

PatternGroup.prototype.resetPatterrnMesh = function (pattern) {
    var tmpAngle, tmpLength, tmpX, tmpY;
    var pMeshPos = pattern.mesh.position;
    var pMeshRot = pattern.mesh.rotation;
    var bMeshPos = this.mesh.position;
    var bMeshRot = this.mesh.rotation;
    tmpAngle = Line.getLineAngle({ sx: bMeshPos.x, sy: bMeshPos.y, tx: pMeshPos.x, ty: pMeshPos.y });
    tmpAngle -= bMeshRot.z;
    tmpLength = Math.sqrt(Math.pow(pMeshPos.x - bMeshPos.x, 2) + Math.pow(pMeshPos.y - bMeshPos.y, 2));
    tmpX = tmpLength * Math.cos(tmpAngle);
    tmpY = tmpLength * Math.sin(tmpAngle);
    pMeshPos.x = tmpX
    pMeshPos.y = tmpY
    pMeshRot.z = pMeshRot.z - bMeshRot.z;
}

PatternGroup.prototype.setRotation = function (radian) {
    this.mesh.rotation.z = radian;
    this.orgRotationZ = radian;
};

PatternGroup.prototype.getBasePattern = function () {
    return this.patterns[0];
};

PatternGroup.prototype.getEndPoint = function () {
    return this.getBasePattern().getEndPoint();
};

function Arc(brush, centerX, centerY, radius, startAngle, endAngle, clockWise) {
    Module.call(this);
    this.brush = brush;
    this.type = 'arc';
    this.status = Engine._statusRun;
    this.visible = true;
    this.unique = false;
    this.speed = 1;
    this.lineWidth = this.brush.lineWidth;
    this.color = '#' + this.brush.neck.material.color.getHexString();
    this.completeFired = false;
    this.params = {
        x: centerX,
        y: centerY,
        r: radius,
        sa: startAngle,
        ea: endAngle,
        sr: startAngle * Math.PI / 180,
        er: endAngle * Math.PI / 180,
        cw: (typeof clockWise == 'boolean' ? clockWise : true),
        ogv: [],
        igv: [],
        m: new THREE.MeshBasicMaterial({ color: this.color, shading: THREE.FlatShading }),
        op: { amount: 1, bevelEnabled: false, }
    };

    this.drawComplete = false;
    this.orgRotationZ = 0;
    this.init();
};

Arc.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Arc
});

Arc.prototype.init = function () {
    this.mesh.position.x = this.params.x;
    this.mesh.position.y = this.params.y;
    this.mesh.position.z = -0.5;
    var segments = Math.abs(this.params.ea - this.params.sa);
    var outerGeometry = new THREE.CircleGeometry(this.params.r + this.lineWidth / 2, segments, this.params.sr, this.params.er);
    var innerGeometry = new THREE.CircleGeometry(this.params.r - this.lineWidth / 2, segments, this.params.sr, this.params.er);
    this.params.ogv = outerGeometry.vertices.slice(1);
    this.params.ogv.push(outerGeometry.vertices[outerGeometry.vertices.length - 1]);
    this.params.igv = innerGeometry.vertices.slice(1);
    this.params.igv.push(innerGeometry.vertices[innerGeometry.vertices.length - 1]);
    this.bodyGeometry = this.getGeometry((segments < 4 ? 5 : 3));
    this.body = THREE.SceneUtils.createMultiMaterialObject(this.bodyGeometry, [this.params.m]);
    this.mesh.add(this.body);
};

Arc.prototype.draw = function (animation) {
    var segments = Math.abs(this.params.ea - this.params.sa);
    var tmpLoopCount = (segments < 4 ? 5 : 3);
    animation = (segments < 4 ? false : true);
    if (typeof animation == 'boolean' && animation) {
        var _that = this;
        this.mesh.add(this.brush.mesh);
        this.brush.mesh.position.x = (this.params.ogv[0].x + this.params.igv[0].x) / 2 + this.brush.basePoint.x;
        this.brush.mesh.position.y = (this.params.ogv[0].y + this.params.igv[0].y) / 2 + this.brush.basePoint.y;
        this.brush.drawing = true;
        var tmpDelta = { total: this.params.ogv.length - 1, count: tmpLoopCount, c: 0 };
        var freq = 2 * segments / 90;
        TweenMax.to(
            tmpDelta,
            freq,
            {
                count: _that.params.ogv.length - 1,
                ease: Linear.easeNone,
                onUpdate: function () {
                    tmpDelta.c = Math.ceil(tmpDelta.count) > tmpDelta.total ? tmpDelta.total : Math.ceil(tmpDelta.count);
                    _that.mesh.remove(_that.body);
                    _that.bodyGeometry = _that.getGeometry(tmpDelta.c);
                    _that.body = THREE.SceneUtils.createMultiMaterialObject(_that.bodyGeometry, [_that.params.m]);
                    _that.mesh.add(_that.body);
                    _that.brush.mesh.position.x = (_that.params.ogv[tmpDelta.c].x + _that.params.igv[tmpDelta.c].x) / 2 + _that.brush.basePoint.x;
                    _that.brush.mesh.position.y = (_that.params.ogv[tmpDelta.c].y + _that.params.igv[tmpDelta.c].y) / 2 + _that.brush.basePoint.y;
                },
                onComplete: function () {
                    Engine.scene.add(_that.brush.mesh);
                    _that.brush.mesh.position.x = (_that.params.ogv[tmpDelta.c].x + _that.params.igv[tmpDelta.c].x) / 2 + _that.brush.basePoint.x;
                    _that.brush.mesh.position.y = (_that.params.ogv[tmpDelta.c].y + _that.params.igv[tmpDelta.c].y) / 2 + _that.brush.basePoint.y;
                    _that.brush.drawing = false;
                    _that.drawComplete = true;
                }
            });
    } else {
        this.mesh.remove(this.body);
        this.bodyGeometry = this.getGeometry(-1);
        this.body = THREE.SceneUtils.createMultiMaterialObject(this.bodyGeometry, [this.params.m]);
        this.mesh.add(this.body);
    }
};

Arc.prototype.getVertices = function (loopCount) {
    loopCount = (loopCount == -1 ? this.params.ogv.length : loopCount);
    var points = [];
    for (var i = 0; i < loopCount; i++) {
        points.push(this.params.ogv[i]);
    }

    for (var i = loopCount - 1; i >= 0; i--) {
        points.push(this.params.igv[i]);
    }

    points.push(this.params.ogv[0]);
    return points;
};

Arc.prototype.getGeometry = function (loopCount) {
    var shape = new THREE.Shape();
    shape.fromPoints(this.getVertices(loopCount));
    return new THREE.ExtrudeGeometry(shape, this.params.op);
};

Arc.prototype.getEndPoint = function () {
    var x = (this.params.ogv[this.params.ogv.length - 1].x + this.params.igv[this.params.ogv.length - 1].x) / 2;
    var y = (this.params.ogv[this.params.ogv.length - 1].y + this.params.igv[this.params.ogv.length - 1].y) / 2;
    return { x: x, y: y };
};
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
    this.drawstart = false;
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
    this.torso = new THREE.Mesh(new THREE.ExtrudeGeometry(triangleShape, options), new THREE.MeshPhongMaterial({ color: '#ffff00', shading: THREE.GouraudShading }));
    this.neck = new THREE.Mesh(new THREE.CylinderGeometry(9, 3, 20, 20, 5), new THREE.MeshPhongMaterial({ color: '#ff0000', shading: THREE.GouraudShading }));
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

Brush.prototype.setColor = function (color) {
    this.neck.material.setValues(new THREE.MeshPhongMaterial({ color: color, shading: THREE.GouraudShading }));
    Engine.render();
};

Brush.prototype.setLineWidth = function (width) {
    this.lineWidth = (width < 1 ? 1 : width);
};

Brush.prototype.clearPatterns = function (callback) {
    for (var i = 0; i < this.patterns.length; i++) {
        Engine.scene.remove(this.patterns[i]);
    }

    this.patterns = [];

    if (callback) {
        callback();
    }
};

Brush.prototype.popPatterns = function () {
    Engine.scene.remove(this.patterns.pop());
};

Brush.prototype.moveTo = function (x, y) {
    this.drawSequence.push({
        tx: x * Engine.params.grid.step,
        ty: y * Engine.params.grid.step,
        type: 'move'
    });
    //this.target = {
    //    sx: this.mesh.position.x - this.basePoint.x,
    //    sy: this.mesh.position.y - this.basePoint.y,
    //    tx: x * Engine.params.grid.step,
    //    ty: y * Engine.params.grid.step,
    //    type: 'move',
    //    callback: callback
    //};
};

Brush.prototype.lineTo = function (x, y) {
    var line = new Line(
        this.mesh.position.x - this.basePoint.x,
        this.mesh.position.y - this.basePoint.y,
        x * Engine.params.grid.step,
        y * Engine.params.grid.step,
        '#' + this.neck.material.color.getHexString(),
        this.lineWidth
    );
    this.patterns.push(line);
    Engine.scene.add(line.mesh);
    this.patterns[0].resetBodyVertices(1, 0);
    this.patterns[0].draw();
    //this.drawSequence.push({
    //    tx: x * Engine.params.grid.step,
    //    ty: y * Engine.params.grid.step,
    //    type: 'line'
    //});
    //this.target = {
    //    sx: this.mesh.position.x - this.basePoint.x,
    //    sy: this.mesh.position.y - this.basePoint.y,
    //    tx: x * Engine.params.grid.step,
    //    ty: y * Engine.params.grid.step,
    //    type: 'line',
    //    equation: null,
    //    callback: callback
    //};
    //this.target.equation = this.getLineEquation(this.target.sx, this.target.sy, this.target.tx, this.target.ty);
};

Brush.prototype.updatePosition_bak = function () {
    var currPosX = this.mesh.position.x - this.basePoint.x;
    var currPosY = this.mesh.position.y - this.basePoint.y;
    if (currPosX == this.target.tx && currPosY == this.target.ty) {
        if (this.target.callback) {
            this.target.callback(this.target.tx / Engine.params.grid.step, this.target.ty / Engine.params.grid.step);
        }

        return;
    } else {
        if (this.target.type == 'line' || this.target.type == 'move') {
            var tmpPos = {};
            var isFirstTime = false;
            if (this.target.equation) {
                tmpPos = this.target.equation(currPosX, currPosY, this.target.tx, this.target.ty);
            } else {
                tmpPos = { x: this.target.tx, y: this.target.ty };
            }

            if (this.mesh.position.x - this.basePoint.x == this.target.sx && this.mesh.position.y - this.basePoint.y == this.target.sy) {
                isFirstTime = true;
            }

            this.mesh.position.x = tmpPos.x + this.basePoint.x;
            this.mesh.position.y = tmpPos.y + this.basePoint.y;
            if (this.target.type == 'line') {
                /*
                // LineBasicMaterial( parameters )
                // Parameters  定义材质外观，包含多个属性来定义材质 : 
                // color : 线条的颜色, 默认白色
                // linewidth : 线条的宽度, 默认1, 无法设置, 要设置线宽，只能使用three3DExtras.tubeLine
                // linecap : 线条两端的外观, 默认是圆角端点
                // linejoin : 两个线条的连接点处的外观, 默认是'round', 圆角。
                // vertexColors : 线条材质是否使用顶点颜色, boolean值是, 线条各部分的颜色会根据顶点的颜色来进行插值
                // fog : 定义材质的颜色是否受全局雾效的影响
                // depthTest : false
                // depthWrite : false
                // transparent : true
                */
                /*
                //var tmpGeometry = new THREE.TubeGeometry();
                //tmpGeometry.vertices.push(new THREE.Vector3(this.target.sx, this.target.sy, 0));
                //tmpGeometry.vertices.push(new THREE.Vector3(tmpPos.x, tmpPos.y, 0));
                //var color = '#' + this.neck.material.color.getHexString();
                //var lineMate = new THREE.LineBasicMaterial({ color: color, linewidth: this.lineWidth });
                //var line = new THREE.Line(tmpGeometry, lineMate);
                */
                if (!isFirstTime) {
                    this.popPatterns();
                }
                var color = '#' + this.neck.material.color.getHexString();
                var line = new three3DExtras.tubeLine([this.target.sx, this.target.sy, 0], [tmpPos.x, tmpPos.y, 0], this.lineWidth, color);
                var lineMesh = line.getObject3D();
                this.patterns.push(lineMesh);
                Engine.scene.add(lineMesh);
            }
        } else if (true) {
        }
    }
};

Brush.prototype.updatePosition = function () {
    if (this.drawstart == false) {
        return;
    }

    if (this.drawSequence.length > 0) {
        var isFirstTime = false;
        var cx = this.mesh.position.x - this.basePoint.x;
        var cy = this.mesh.position.y - this.basePoint.y;
        if (cx == this.drawSequence[0].tx && cy == this.drawSequence[0].ty) {
            if (this.drawSequence.length > 1) {
                this.drawStartPoint = { x: cx, y: cy };
                this.drawEquation = Brush.getLineEquation(cx, cy, this.drawSequence[1].tx, this.drawSequence[1].ty);
                isFirstTime = true;
                this.drawSequence.shift();
            } else {
                if (!this.completeFired) {
                    this.drawCompleteFn();
                    this.completeFired = true;
                }
            }
        }

        var tmpPos = this.drawEquation(cx, cy, this.drawSequence[0].tx, this.drawSequence[0].ty);
        this.mesh.position.x = tmpPos.x + this.basePoint.x;
        this.mesh.position.y = tmpPos.y + this.basePoint.y;
        if (this.drawSequence[0].type == 'line') {
            /*
            // LineBasicMaterial( parameters )
            // Parameters  定义材质外观，包含多个属性来定义材质 : 
            // color : 线条的颜色, 默认白色
            // linewidth : 线条的宽度, 默认1, 无法设置, 要设置线宽，只能使用three3DExtras.tubeLine
            // linecap : 线条两端的外观, 默认是圆角端点
            // linejoin : 两个线条的连接点处的外观, 默认是'round', 圆角。
            // vertexColors : 线条材质是否使用顶点颜色, boolean值是, 线条各部分的颜色会根据顶点的颜色来进行插值
            // fog : 定义材质的颜色是否受全局雾效的影响
            // depthTest : false
            // depthWrite : false
            // transparent : true
            */
            /*
            //var tmpGeometry = new THREE.TubeGeometry();
            //tmpGeometry.vertices.push(new THREE.Vector3(this.target.sx, this.target.sy, 0));
            //tmpGeometry.vertices.push(new THREE.Vector3(tmpPos.x, tmpPos.y, 0));
            //var color = '#' + this.neck.material.color.getHexString();
            //var lineMate = new THREE.LineBasicMaterial({ color: color, linewidth: this.lineWidth });
            //var line = new THREE.Line(tmpGeometry, lineMate);
            */
            if (!isFirstTime) {
                this.popPatterns();
            }
            var color = '#' + this.neck.material.color.getHexString();
            var line = new three3DExtras.tubeLine([this.drawStartPoint.x, this.drawStartPoint.y, 0], [tmpPos.x, tmpPos.y, 0], this.lineWidth, color);
            var lineMesh = line.getObject3D();
            this.patterns.push(lineMesh);
            Engine.scene.add(lineMesh);
        }
    } else {
        if (!this.completeFired) {
            this.drawCompleteFn();
            this.completeFired = true;
        }
    }
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

Brush.prototype.reset = function () {
    this.clearPatterns();
    this.drawSequence = [{}];
    this.completeFired = false;
    this.drawstart = false;
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
    var line = new three3DExtras.tubeLine([sx * Engine.params.grid.step, sy * Engine.params.grid.step, 0], [ex * Engine.params.grid.step, ey * Engine.params.grid.step, 0], lineWidth, color);
    var lineMesh = line.getObject3D();
    this.background.push(lineMesh);
    Engine.scene.add(lineMesh);
};

Brush.prototype.setDrawCompleteFn = function (fn) {
    this.drawCompleteFn = fn;
};

Brush.prototype.drawCompleteFn = function () {

};

Brush.prototype.startDraw = function () {
    this.drawstart = true;
    this.drawSequence[0] = {
        tx: this.mesh.position.x - this.basePoint.x,
        ty: this.mesh.position.y - this.basePoint.y,
        type: 'move'
    }
};

Brush.prototype.preparingToRestart = function () {
    this.reset();
};

function Line(sx, sy, tx, ty, color, width) {
    Module.call(this);
    this.type = 'line';
    this.status = Engine._statusRun;
    this.visible = true;
    this.unique = false;
    this.speed = 1;
    this.lineWidth = 1;
    this.completeFired = false;
    this.params = {
        sx: sx,
        sy: sy,
        tx: tx,
        ty: ty,
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
    //var cubeGeometry = new THREE.CubeGeometry(this.params.w, 1, 1);
    var cubeGeometry = new THREE.CubeGeometry(10, 1, 1);
    var cubeMaterial = new THREE.MeshBasicMaterial({ color: this.params.c, shading: THREE.FlatShading });
    this.body = new THREE.Mesh(cubeGeometry, cubeMaterial);
    this.mesh.add(this.body);
};

Line.prototype.getLengthOfLine = function () {
    return Math.sqrt(Math.pow(this.params.tx - this.params.sx, 2) + Math.pow(this.params.ty - this.params.sy, 2));
};

Line.prototype.resetBodyVertices = function (y1, y2) {
    this.body.geometry.vertices[0].y = y1;
    this.body.geometry.vertices[1].y = y1;
    this.body.geometry.vertices[2].y = y2;
    this.body.geometry.vertices[3].y = y2;
    this.body.geometry.vertices[4].y = y1;
    this.body.geometry.vertices[5].y = y1;
    this.body.geometry.vertices[6].y = y2;
    this.body.geometry.vertices[7].y = y2;
    this.body.geometry.verticesNeedUpdate = true;
};

Line.prototype.draw = function () {
    var lineLength = this.getLengthOfLine();
    var updateArr = [
        this.body.geometry.vertices[0],
        this.body.geometry.vertices[1],
        this.body.geometry.vertices[4],
        this.body.geometry.vertices[5]
    ];
    var _that = this;
    TweenMax.to(updateArr, 1, { y: lineLength, ease: Linear.easeNone, onUpdate: function () { _that.body.geometry.verticesNeedUpdate = true; } });
};

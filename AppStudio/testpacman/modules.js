'use strict';

var _itemSize = 35;
var _colCount = 10;
var _rowCount = 10;
var _veerMap = { r: 0, u: 1, l: 2, d: 3 };
function Floor() {
    Module.call(this);
    this.unique = true;
    this.type = 'floor';
    this.init();
}

Floor.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Floor
});

Floor.prototype.init = function () {
    var width = 1000;
    var depth = 1000;
    var height = _itemSize;
    var placeWidth = _itemSize * _colCount;
    var placeDepth = _itemSize * _rowCount;
    this.fenceTL = this.createFence(width, height, depth, '#2FA8E1', placeWidth, placeDepth, 'tl');
    this.fenceTR = this.createFence(width, height, depth, '#EA5515', placeWidth, placeDepth, 'tr');
    this.fenceBR = this.createFence(width, height, depth, '#F39700', placeWidth, placeDepth, 'br');
    this.fenceBL = this.createFence(width, height, depth, '#FFF100', placeWidth, placeDepth, 'bl');
    this.mesh.add(this.fenceTL);
    this.mesh.add(this.fenceTR);
    this.mesh.add(this.fenceBR);
    this.mesh.add(this.fenceBL);

    this.plane = new THREE.Mesh(new THREE.BoxGeometry(placeWidth, 1, placeDepth), new THREE.MeshPhongMaterial({ color: '#ffffff', shading: THREE.GouraudShading }));
    this.plane.geometry.receiveShadow = true;
    this.plane.position.y = -5;
    this.mesh.add(this.plane);
};

Floor.prototype.createFence = function (w, h, d, c, sw, sd, type) {
    /*
        THREE.Shape()
        moveTo(x, y) : 将绘图点移动到x，y
        lineTo(x, y) : 从当前位置绘制一条直线到x，y
        quadraticCurveTo(acPx, acPy) : 二次曲线
        bezierCurveTo(acPx1, acPy1, acPx2, acPy2, x, y) : 贝塞尔曲线
        splineThru([THREE.Vector2]) : 沿着所给定的点，绘制一条光滑的曲线，参数是THREE.Vector2的数组
        arc(ax, ay, aRdius, aStartAngle, aEndAngle, aClockwise) : ax, ay圆心与当前位置之间的偏移量, aRadius半径, aStartAngle, aEndAngle开始与结束的弧长, aClockwise 顺/逆时针
        makeGeometry : 从Shape对象返回一个ShapeGeometry对象
        createPointsGeometry(divisions) : 将图形转换为一个点集，参数为返回点的数量，该值越高，返回的点越多，再次绘制图形时曲线越光滑, 参数divisions会分别应用到路径的每一个部分
        createSpacedPointsGeometry(divisions)与createPointsGeometry : 函数功能相同，但是该方法的参数会一次性的应用到整个路径上
    */
    var options = {
        amount: h,
        bevelThickness: h / 2,
        bevelSegments: 10,
        bevelSize: 5,
        steps: 1
    };

    var isTop = (type.indexOf('t') >= 0);
    var isLeft = (type.indexOf('l') >= 0);
    var fenceShape = new THREE.Shape();
    fenceShape.moveTo((isLeft ? -sw / 2 : sw / 2), 0);
    fenceShape.lineTo((isLeft ? -w : w), 0);
    fenceShape.lineTo((isLeft ? -w : w), (isTop ? d : -d));
    fenceShape.lineTo(0, (isTop ? d : -d));
    fenceShape.lineTo(0, (isTop ? sd / 2 : -sd / 2));
    fenceShape.lineTo((isLeft ? -sw / 2 : sw / 2), (isTop ? sd / 2 : -sd / 2));
    fenceShape.lineTo((isLeft ? -sw / 2 : sw / 2), 0);
    var fence = new THREE.Mesh(new THREE.ExtrudeGeometry(fenceShape, options), new THREE.MeshPhongMaterial({ color: c, shading: THREE.GouraudShading }));
    fence.rotation.x = -Math.PI / 2;
    fence.position.z = (isTop ? -5 : 5);
    fence.position.x = (isLeft ? -5 : 5);
    return fence;
};

function PACMan() {
    Module.call(this);
    this.type = 'pacman';
    this.unique = true;
    this.posDelta = 0;
    this.veerDelta = 0;
    this.posFrame = 15;
    this.posCount = 5;
    this.maxMouth = Math.PI / 2;
    /*1:up, 0:right, 3: down, 2:left*/
    this.orientation = 0;
    this.coord = { x: 0, y: 0, px: 0, py: 0 };
    this.init();
};

PACMan.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: PACMan
});

PACMan.prototype.init = function () {
    /*
    //SphereGeometry 三维球体
    //radius：半径，默认50. 
    //widthSegments：指定竖直方向上的分段数。默认是8，最小是3. 
    //heightSegments：指定水平方向上的分段数。默认是6，最小是2. 
    //phiStart：指定从x轴什么地方开始绘制。取值范围是：0-2*PI。默认是0。 
    //phiLength：指定从phiStart开始画多少。2*PI是整个球。 
    //thetaStart：指定从y轴什么地方开始绘制。取值范围：0-PI。默认为0. 
    //thetaLength：指定从thetaStart开始画多少。PI是整个球。0.5*PI只会画上半球。    
    */
    this.torso = new THREE.Mesh(new THREE.SphereGeometry(20, 50, 50, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshPhongMaterial({ color: '#FFF100', shading: THREE.FlatShading }));
    this.torso.geometry.verticesNeedUpdate = true;
    this.torso.geometry.normalsNeedUpdate = true;
    this.torso.geometry.castShadow = true;
    this.torso.rotation.x = Math.PI;
    this.torsoCover = new THREE.Mesh(new THREE.CircleGeometry(20, 50), new THREE.MeshPhongMaterial({ color: '#FFF100', shading: THREE.FlatShading }));
    this.torsoCover.geometry.receiveShadow = true;
    this.torsoCover.rotation.x = -Math.PI / 2;
    this.body.add(this.torso);
    this.body.add(this.torsoCover);

    this.skull = new THREE.Mesh(new THREE.SphereGeometry(20, 50, 50, 0, Math.PI * 2, 0, -Math.PI / 2), new THREE.MeshPhongMaterial({ color: '#FFF100', shading: THREE.FlatShading }));
    this.skull.geometry.verticesNeedUpdate = true;
    this.skull.geometry.normalsNeedUpdate = true;
    this.skull.geometry.castShadow = true;
    this.skullCover = new THREE.Mesh(new THREE.CircleGeometry(20, 50), new THREE.MeshPhongMaterial({ color: '#FFF100', shading: THREE.FlatShading }));
    this.skullCover.geometry.receiveShadow = true;
    this.skullCover.rotation.x = Math.PI / 2;
    this.head.add(this.skull);
    this.head.add(this.skullCover);

    var eyebulbGeometry = new THREE.CylinderGeometry(5, 5, 10, 50, 5);
    this.eyebulbL = new THREE.Mesh(eyebulbGeometry, new THREE.MeshPhongMaterial({ color: '#FFF100', shading: THREE.FlatShading }));
    this.eyebulbR = new THREE.Mesh(eyebulbGeometry, new THREE.MeshPhongMaterial({ color: '#FFF100', shading: THREE.FlatShading }));
    var eyebulbCoverGeometry = new THREE.CircleGeometry(5, 50);
    this.eyebulbCoverL = new THREE.Mesh(eyebulbCoverGeometry, new THREE.MeshPhongMaterial({ color: '#FFFFFF', shading: THREE.FlatShading }));
    this.eyebulbCoverL.rotation.x = -Math.PI / 2;
    this.eyebulbCoverL.position.y = 5.01;
    this.eyebulbCoverR = new THREE.Mesh(eyebulbCoverGeometry, new THREE.MeshPhongMaterial({ color: '#FFFFFF', shading: THREE.FlatShading }));
    this.eyebulbCoverR.rotation.x = -Math.PI / 2;
    this.eyebulbCoverR.position.y = 5.01;
    var pupilGeometry = new THREE.CircleGeometry(3, 18, 0, Math.PI / 180 * 340);
    this.pupilL = new THREE.Mesh(pupilGeometry, new THREE.MeshPhongMaterial({ color: '#000000', shading: THREE.FlatShading }));
    this.pupilL.rotation.x = -Math.PI / 2;
    this.pupilL.rotation.z = -Math.PI / 2;
    this.pupilL.position.y = 5.02
    this.pupilR = new THREE.Mesh(pupilGeometry, new THREE.MeshPhongMaterial({ color: '#000000', shading: THREE.FlatShading }));
    this.pupilR.rotation.x = -Math.PI / 2;
    this.pupilR.rotation.z = Math.PI / 2;
    this.pupilR.position.y = 5.02

    var options = {
        amount: 1,
        bevelThickness: 1,
        bevelSegments: 10,
        bevelSize: 1,
        steps: 1
    };

    var eyebrowShape = new THREE.Shape();
    var sqrt02 = Math.sqrt(0.2);
    var sqrt005 = Math.sqrt(0.05);
    eyebrowShape.moveTo(-5, 0);
    eyebrowShape.lineTo(-2.5, 2.5);
    eyebrowShape.quadraticCurveTo(0, 5, 2.5, 2.5);
    eyebrowShape.quadraticCurveTo(5, -sqrt005, 5 - sqrt005, -sqrt005);
    eyebrowShape.lineTo((5 - sqrt02) / 2, (5 - sqrt02) / 2);
    eyebrowShape.quadraticCurveTo(0, 5 - sqrt02, -(5 - sqrt02) / 2, (5 - sqrt02) / 2);
    eyebrowShape.lineTo(-(5 - sqrt005), -sqrt005);
    eyebrowShape.quadraticCurveTo(-5, -sqrt005, -5, 0);
    this.eyebrowL = new THREE.Mesh(new THREE.ExtrudeGeometry(eyebrowShape, options), new THREE.MeshPhongMaterial({ color: '#000000', shading: THREE.GouraudShading }));
    this.eyebrowL.position.y = 2;
    this.eyebrowL.position.x = -6;
    this.eyebrowL.rotation.x = -Math.PI / 2;
    this.eyebrowL.rotation.z = Math.PI / 2;

    this.eyebrowR = new THREE.Mesh(new THREE.ExtrudeGeometry(eyebrowShape, options), new THREE.MeshPhongMaterial({ color: '#000000', shading: THREE.GouraudShading }));
    this.eyebrowR.position.y = 2;
    this.eyebrowR.position.x = -6;
    this.eyebrowR.rotation.x = -Math.PI / 2;
    this.eyebrowR.rotation.z = Math.PI / 2;

    this.eyeL = new THREE.Group();
    this.eyeR = new THREE.Group();
    this.eyeL.add(this.eyebulbL);
    this.eyeL.add(this.eyebulbCoverL);
    this.eyeL.add(this.pupilL);
    this.eyeL.add(this.eyebrowL);
    this.eyeR.add(this.eyebulbR);
    this.eyeR.add(this.eyebulbCoverR);
    this.eyeR.add(this.pupilR);
    this.eyeR.add(this.eyebrowR);

    this.eyeL.rotation.z = -Math.PI * 70 / 180;
    this.eyeL.position.z = 6;
    this.eyeL.position.y = 12;
    this.eyeL.position.x = 11;
    this.eyeR.rotation.z = -Math.PI * 70 / 180;
    this.eyeR.position.z = -6;
    this.eyeR.position.y = 12;
    this.eyeR.position.x = 11;
    this.head.add(this.eyeL);
    this.head.add(this.eyeR);

    this.mesh.add(this.body);
    this.mesh.add(this.head);
    this.mesh.position.y = 10;
};

PACMan.prototype.updatePose = function () {
    var _self = this;
    var posFrame = Math.ceil(1000 / this.posFrame);
    var maxMouth = this.maxMouth;
    var posCount = this.posCount;
    var modNumber = posCount * 2 + 1;
    var disNumber = modNumber + 1;
    var loop = function () {
        var tmpVal = _self.posDelta % modNumber;
        if (tmpVal > posCount) {
            tmpVal = posCount * 2 - tmpVal;
        }
        _self.head.rotation.z = maxMouth * tmpVal / disNumber;
        _self.body.rotation.z = -maxMouth * tmpVal / disNumber;
        _self.posDelta = (_self.posDelta == modNumber ? 0 : _self.posDelta + 1);
        Engine.render();
        window.setTimeout(loop, posFrame);
    }

    loop();
};

PACMan.prototype.turnTo = function (orientation) {
    orientation = _veerMap[orientation];
    if (orientation != this.orientation) {
        var _self = this;
        var route = Math.PI / 2 * ((orientation == 0 ? 4 : orientation) - this.orientation) / 10;
        var loop = function () {
            _self.mesh.rotation.y = _self.mesh.rotation.y + route;
            _self.veerDelta++;
            Engine.render();
            if (_self.veerDelta == 10) {
                this.orientation = orientation;
                _self.veerDelta = 0;
            } else {
                window.setTimeout(loop, 20);
            }
        }

        loop();
    }
};

PACMan.prototype.turnLeft = function () {
    var orientation = this.orientation + 1;
    orientation = (orientation == 4 ? 0 : orientation);
    this.turnTo(orientation);
};

PACMan.prototype.turnRight = function () {
    var orientation = this.orientation - 1;
    orientation = (orientation == -1 ? 3 : orientation);
    this.turnTo(orientation);
};

function Bean() {
    Module.call(this);
    this.type = 'bean';
    this.init();
};

Bean.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Bean
});

Bean.prototype.init = function () {
    /*
    //SphereGeometry 三维球体
    //radius：半径，默认50. 
    //widthSegments：指定竖直方向上的分段数。默认是8，最小是3. 
    //heightSegments：指定水平方向上的分段数。默认是6，最小是2. 
    //phiStart：指定从x轴什么地方开始绘制。取值范围是：0-2*PI。默认是0。 
    //phiLength：指定从phiStart开始画多少。2*PI是整个球。 
    //thetaStart：指定从y轴什么地方开始绘制。取值范围：0-PI。默认为0. 
    //thetaLength：指定从thetaStart开始画多少。PI是整个球。0.5*PI只会画上半球。    
    */
    this.torso = new THREE.Mesh(new THREE.SphereGeometry(4, 20, 20, 0, Math.PI * 2, 0, Math.PI), new THREE.MeshPhongMaterial({ color: '#FFD700', shading: THREE.FlatShading }));
    this.torso.geometry.verticesNeedUpdate = true;
    this.torso.geometry.normalsNeedUpdate = true;
    this.torso.geometry.castShadow = true;
    this.body.add(this.torso);
    this.mesh.add(this.body);
    this.mesh.position.y = 10;
};

function Goods() {
    Module.call(this);
    this.type = 'goods';
    this.init();
};

Goods.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Goods
});

Goods.prototype.init = function () {
    /*
    //SphereGeometry 三维球体
    //radius：半径，默认50. 
    //widthSegments：指定竖直方向上的分段数。默认是8，最小是3. 
    //heightSegments：指定水平方向上的分段数。默认是6，最小是2. 
    //phiStart：指定从x轴什么地方开始绘制。取值范围是：0-2*PI。默认是0。 
    //phiLength：指定从phiStart开始画多少。2*PI是整个球。 
    //thetaStart：指定从y轴什么地方开始绘制。取值范围：0-PI。默认为0. 
    //thetaLength：指定从thetaStart开始画多少。PI是整个球。0.5*PI只会画上半球。    
    */
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(10, 20, 20, 0, Math.PI * 2, 0, Math.PI), new THREE.MeshPhongMaterial({ color: '#FFA500', shading: THREE.FlatShading }));
    this.mesh.geometry.verticesNeedUpdate = true;
    this.mesh.geometry.normalsNeedUpdate = true;
    this.mesh.geometry.castShadow = true;
    this.mesh.position.y = 15;
};

function Wall() {
    Module.call(this);
    this.type = 'wall';
    this.unique = false;
    this.init();
};

Wall.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Wall
});

Wall.prototype.init = function () {
    var wallGeometry = new THREE.CylinderGeometry(_itemSize / 3, _itemSize / 3, 30, 50, 5);
    this.mesh = new THREE.Mesh(wallGeometry, new THREE.MeshPhongMaterial({ color: '#8B4513', shading: THREE.FlatShading }));
    this.mesh.position.y = 15;
};
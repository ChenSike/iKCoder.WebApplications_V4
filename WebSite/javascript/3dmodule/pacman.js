'use strict';

var _itemSize = 70;
var _colCount = 15;
var _rowCount = 15;
var _veerMap = { r: 0, u: 1, l: 2, d: 3 };
var _moveMap = { 0: 1, 1: -1, 2: -1, 3: 1 };
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
    var width = 2000;
    var depth = 2000;
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

    this.plane = new THREE.Mesh(new THREE.BoxGeometry(placeWidth, 1, placeDepth), new THREE.MeshPhongMaterial({ color: '#ffffff', shading: THREE.FlatShading }));
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
    var fence = new THREE.Mesh(new THREE.ExtrudeGeometry(fenceShape, options), new THREE.MeshPhongMaterial({ color: c, shading: THREE.FlatShading }));
    fence.geometry.receiveShadow = true;
    fence.rotation.x = -Math.PI / 2;
    fence.position.z = (isTop ? -5 : 5);
    fence.position.x = (isLeft ? -5 : 5);
    return fence;
};

function PACMan(moveType, mapData) {
    Module.call(this);
    this.type = 'pacman';
    this.unique = true;
    this.speed = 1;
    this.veerDelta = 0;
    this.poseSpeed = 2;
    this.maxMouth = Math.PI / 2;
    this.mapData = mapData;
    /*0:right, 1:up, 2:left, 3: down*/
    this.orientation = 0;
    this.defaultCoord = { x: 0, y: 0 };
    this.coord = { x: 0, y: 0, px: 0, py: 0 };
    /*game: keep moving; study: move by commond*/
    this._stopToComplete = false;
    this.moveType = 'study';
    this.movePath = [];
    this.movePathTarget = [];
    this.actionForCollideGoodsSeq = [];
    this.actionForCollideWallSeq = [];
    this.doing = false;
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
    var globalMaterial = new THREE.MeshPhongMaterial({ color: '#FFF100', shading: THREE.FlatShading });
    this.torso = new THREE.Mesh(new THREE.SphereGeometry(40, 50, 50, 0, Math.PI * 2, 0, Math.PI / 2), globalMaterial);
    this.torso.geometry.verticesNeedUpdate = true;
    this.torso.geometry.normalsNeedUpdate = true;
    this.torso.geometry.castShadow = true;
    this.torso.rotation.x = Math.PI;
    this.torsoCover = new THREE.Mesh(new THREE.CircleGeometry(40, 50), globalMaterial);
    this.torsoCover.geometry.receiveShadow = true;
    this.torsoCover.rotation.x = -Math.PI / 2;
    this.body.add(this.torso);
    this.body.add(this.torsoCover);

    this.skull = new THREE.Mesh(new THREE.SphereGeometry(40, 50, 50, 0, Math.PI * 2, 0, -Math.PI / 2), globalMaterial);
    this.skull.geometry.verticesNeedUpdate = true;
    this.skull.geometry.normalsNeedUpdate = true;
    this.skull.geometry.castShadow = true;
    this.skullCover = new THREE.Mesh(new THREE.CircleGeometry(40, 50), globalMaterial);
    this.skullCover.geometry.receiveShadow = true;
    this.skullCover.rotation.x = Math.PI / 2;
    this.head.add(this.skull);
    this.head.add(this.skullCover);

    var eyebulbGeometry = new THREE.CylinderGeometry(10, 10, 10, 50, 5);
    this.eyebulbL = new THREE.Mesh(eyebulbGeometry, globalMaterial);
    this.eyebulbR = new THREE.Mesh(eyebulbGeometry, globalMaterial);
    var eyebulbCoverGeometry = new THREE.CircleGeometry(10, 50);
    var eyebulbMaterial = new THREE.MeshPhongMaterial({ color: '#FFFFFF', shading: THREE.FlatShading });
    this.eyebulbCoverL = new THREE.Mesh(eyebulbCoverGeometry, eyebulbMaterial);
    this.eyebulbCoverL.rotation.x = -Math.PI / 2;
    this.eyebulbCoverL.position.y = 10.01;
    this.eyebulbCoverR = new THREE.Mesh(eyebulbCoverGeometry, eyebulbMaterial);
    this.eyebulbCoverR.rotation.x = -Math.PI / 2;
    this.eyebulbCoverR.position.y = 10.01;
    var pupilGeometry = new THREE.CircleGeometry(6, 18, 0, Math.PI / 180 * 340);
    var pupilMaterial = new THREE.MeshPhongMaterial({ color: '#000000', shading: THREE.FlatShading });
    this.pupilL = new THREE.Mesh(pupilGeometry, pupilMaterial);
    this.pupilL.rotation.x = -Math.PI / 2;
    this.pupilL.rotation.z = -Math.PI / 2;
    this.pupilL.position.y = 10.02
    this.pupilR = new THREE.Mesh(pupilGeometry, pupilMaterial);
    this.pupilR.rotation.x = -Math.PI / 2;
    this.pupilR.rotation.z = Math.PI / 2;
    this.pupilR.position.y = 10.02

    var options = {
        amount: 1,
        bevelThickness: 1,
        bevelSegments: 10,
        bevelSize: 1,
        steps: 1
    };

    var eyebrowShape = new THREE.Shape();
    var sqrt02 = Math.sqrt(0.4);
    var sqrt005 = Math.sqrt(0.1);
    eyebrowShape.moveTo(-10, 0);
    eyebrowShape.lineTo(-5, 5);
    eyebrowShape.quadraticCurveTo(0, 10, 5, 5);
    eyebrowShape.quadraticCurveTo(10, -sqrt005, 10 - sqrt005, -sqrt005);
    eyebrowShape.lineTo((10 - sqrt02) / 2, (10 - sqrt02) / 2);
    eyebrowShape.quadraticCurveTo(0, 10 - sqrt02, -(10 - sqrt02) / 2, (10 - sqrt02) / 2);
    eyebrowShape.lineTo(-(10 - sqrt005), -sqrt005);
    eyebrowShape.quadraticCurveTo(-10, -sqrt005, -10, 0);
    var eyebrowGeometry = new THREE.ExtrudeGeometry(eyebrowShape, options);
    var eyebrowMaterial = new THREE.MeshPhongMaterial({ color: '#000000', shading: THREE.FlatShading })
    this.eyebrowL = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial);
    this.eyebrowL.position.y = 4;
    this.eyebrowL.position.x = -10;
    this.eyebrowL.rotation.x = -Math.PI / 2;
    this.eyebrowL.rotation.z = Math.PI / 2;

    this.eyebrowR = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial);
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
    this.eyeL.position.z = 12;
    this.eyeL.position.y = 24;
    this.eyeL.position.x = 22;
    this.eyeR.rotation.z = -Math.PI * 70 / 180;
    this.eyeR.position.z = -12;
    this.eyeR.position.y = 24;
    this.eyeR.position.x = 22;
    this.head.add(this.eyeL);
    this.head.add(this.eyeR);

    this.mesh.add(this.body);
    this.mesh.add(this.head);
    this.mesh.position.y = 30;
};

PACMan.prototype.setPosition = function (x, y) {
    var tmpX = x * _itemSize - _colCount * _itemSize / 2 + _itemSize / 2;
    var tmpZ = y * _itemSize - _rowCount * _itemSize / 2 + _itemSize / 2;
    this.mesh.position.x = tmpX;
    this.mesh.position.z = tmpZ;
    this.coord = { x: x, y: y, px: tmpX, py: tmpZ };
    this.defaultCoord = { x: x, y: y };
}

PACMan.prototype.updatePose = function () {
    TweenMax.fromTo(this.head.rotation, 1 / this.poseSpeed, { z: 0, repeat: -1, overwrite: 2, yoyo: true }, { z: this.maxMouth / 2, repeat: -1, overwrite: 1, yoyo: true });
    TweenMax.fromTo(this.body.rotation, 1 / this.poseSpeed, { z: 0, repeat: -1, overwrite: 2, yoyo: true }, { z: -this.maxMouth / 2, repeat: -1, overwrite: 1, yoyo: true });
};

PACMan.prototype.turnTo = function (orientation, clockwise) {
    this.mesh.rotation.y = Math.PI / 2 * this.orientation;
    orientation = (typeof orientation == 'number' ? orientation : _veerMap[orientation]);
    if (orientation != this.orientation && !this.doing) {
        var _self = this;
        var route = 0;
        if (this.moveType == 'study') {
            var tmpVal = 0;
            if (typeof clockwise == 'boolean') {
                tmpVal = orientation - this.orientation;
                if (clockwise) {
                    tmpVal = (tmpVal > 0 ? tmpVal - 4 : tmpVal);;
                } else {
                    tmpVal = (tmpVal < 0 ? 4 + tmpVal : tmpVal);
                }
            } else {
                tmpVal = orientation - this.orientation;
                if (Math.abs(tmpVal) == 3) {
                    tmpVal = -tmpVal / Math.abs(tmpVal);
                }
            }

            route = this.mesh.rotation.y + Math.PI / 2 * tmpVal;
            TweenMax.killTweensOf(this.mesh.rotation);
            this.doing = true;
            TweenMax.to(
                this.mesh.rotation,
                1,
                {
                    y: route,
                    ease: Linear.easeNone,
                    onComplete: function () {
                        _self.orientation = orientation;
                        _self.doing = false;
                        //_self.mesh.rotation.y = Math.PI / 2 * orientation;
                    }
                }
            );
        } else {
            route = Math.PI / 2 * ((orientation == 0 ? 4 : orientation) - this.orientation);
            this.mesh.rotation.y = this.mesh.rotation.y + route;
        }
    }
};

PACMan.prototype.turnLeft = function (currentOri) {
    var orientation = this.orientation + 1;
    if (currentOri) {
        orientation = currentOri + 1;
    }
    orientation = (orientation == 4 ? 0 : orientation);
    this.turnTo(orientation, false);
};

PACMan.prototype.turnRight = function (currentOri) {
    var orientation = this.orientation - 1;
    if (currentOri) {
        orientation = currentOri - 1;
    }

    orientation = (orientation == -1 ? 3 : orientation);
    this.turnTo(orientation, true);
};

PACMan.prototype.initMovePath = function (type, value) {
    this.movePath = [];
    this.movePathTarget = [];
    this.movePath.push();
};
/*
type: 路径点类型：'m': move/ 'tt': turn to/'tl': turn left/'tr': turn right
value: 路径值：     for move: the steps/for turn to: the orientation(r: 0, u: 1, l: 2, d: 3)
}
*/
PACMan.prototype.addMovePath = function (type, value) {
    this.movePath.push({ t: type, v: value });
};

PACMan.prototype.removeMovePathByIndex = function (index, length) {
    if (typeof index == 'number' && index >= 0 && index < this.movePath.length) {
        var tLenngth = 1;
        if (typeof length == 'number' && length > 0 && index + length <= this.movePath.length) {
            tLenngth = length;
        }

        this.movePath.splice(index, tLenngth);

    }
};

PACMan.prototype.setPathCompleteFn = function (fn) {
    this.pathCompleteFn = fn;
}

PACMan.prototype.pathCompleteFn = function () {
}

PACMan.prototype.prepareForRun = function () {
    this.movePathTarget = [];
    var tmpItem, tempSteps;
    var coord = ModuleUtil.positionToCoord(this.mesh.position.x, this.mesh.position.z)
    var tmpOri = this.orientation;
    var tmpX = coord.x;
    var tmpY = coord.y;
    var tmpPX = this.mesh.position.x;
    var tmpPY = this.mesh.position.z;
    for (var i = 0; i < this.movePath.length; i++) {
        tmpItem = this.movePath[i];
        if (tmpItem.t == 'tt') {
            tmpOri = _veerMap[tmpItem.v];
        } else if (tmpItem.t == 'tr') {
            tmpOri = (tmpOri == 0 ? 3 : tmpOri - 1);
        } else if (tmpItem.t == 'tl') {
            tmpOri = (tmpOri == 3 ? 0 : tmpOri + 1);
        } else if (tmpItem.t == 'm') {
            tempSteps = (tmpItem.v == -1 ? 100 : tmpItem.v);
            if (tmpOri == 0 || tmpOri == 2) {
                tmpX += _moveMap[tmpOri] * tempSteps;
                tmpPX = ModuleUtil.coordToPosition(tmpX, tmpY).px;
            } else {
                tmpY += _moveMap[tmpOri] * tempSteps;
                tmpPY = ModuleUtil.coordToPosition(tmpX, tmpY).py;
            }
        }

        this.movePathTarget.push({ t: tmpItem.t, o: tmpOri, x: tmpX, y: tmpY, px: tmpPX, py: tmpPY });
    }
};

PACMan.prototype.updatePosition = function () {
    if (this.moveType == 'study') {
        this.updatePositionStudy();
    } else {
        if (!this.checkCollide()) {
            if (this.orientation == 0 || this.orientation == 2) {
                this.mesh.position.x += _itemSize / 40 * this.speed * _moveMap[this.orientation];
            } else {
                this.mesh.position.z += _itemSize / 40 * this.speed * _moveMap[this.orientation];
            }
        }
    }
};

PACMan.prototype.updatePositionStudy = function () {
    if (this.movePathTarget.length > 0) {
        var targetObj = this.movePathTarget[0];
        if (targetObj.t != 'm') {
            if (this.orientation == targetObj.o) {
                this.movePathTarget.shift();
            } else {
                var tmpFlagVal = this.mesh.rotation.y / (Math.PI / 2);
                if (parseInt(tmpFlagVal) == tmpFlagVal) {
                    this.turnTo(targetObj.o);
                }
            }
        } else {
            var coord = ModuleUtil.positionToCoord(this.mesh.position.x, this.mesh.position.z);
            this.coord.px = this.mesh.position.x;
            this.coord.py = this.mesh.position.z;
            this.coord.x = (coord.x == parseInt(coord.x) ? coord.x : this.coord.x);
            this.coord.y = (coord.y == parseInt(coord.y) ? coord.y : this.coord.y);
            if (coord.x == targetObj.x && coord.y == targetObj.y) {
                this.coord.x = coord.x;
                this.coord.y = coord.y;
                if (this._stopToComplete) {
                    if (!this.completeFired) {
                        this.pathCompleteFn();
                        this.completeFired = true;
                    }

                    this.movePathTarget.shift();
                } else {
                    this.movePathTarget.shift();
                }
            } else {
                if (!this.checkCollide()) {
                    if (this.orientation == 0 || this.orientation == 2) {
                        this.mesh.position.x += _itemSize / 40 * this.speed * _moveMap[this.orientation];
                    } else {
                        this.mesh.position.z += _itemSize / 40 * this.speed * _moveMap[this.orientation];
                    }
                } else {
                    if (this.mapData[coord.y][coord.x].t == 2 && this._stopToComplete) {
                        if (!this.completeFired) {
                            this.pathCompleteFn();
                            this.completeFired = true;
                        }

                        this.movePathTarget = [];
                    }
                }
            }
        }
    } else {
        if (!this.completeFired) {
            this.pathCompleteFn();
            this.completeFired = true;
        }
    }
};

PACMan.prototype.setActionForCollideWallSeq = function (fn) {
    this.actionForCollideWallSeq.push(fn);
}

PACMan.prototype.setActionForCollideWall = function (fn) {
    this.actionForCollideWall = fn;
    this.actionForCollideWallSeq = [];
};

PACMan.prototype.actionForCollideWall = function () {
    if (this.actionForCollideWallSeq.length > 0) {
        if (this.mesh.rotation.y % (Math.PI / 2) == 0) {
            this.actionForCollideWallSeq[0]();
            this.actionForCollideWallSeq.shift();
        }
    }

    return false;
};

PACMan.prototype.setActionForCollideMonster = function (fn) {
    this.actionForCollideMoonster = fn;
};

PACMan.prototype.actionForCollideMoonster = function () {
    return false;
};

PACMan.prototype.setActionForCollideBean = function (fn) {
    this.actionForCollideBean = fn;
};

PACMan.prototype.actionForCollideBean = function () {
    return false;
};

PACMan.prototype.setActionForCollideGoodsSeq = function (fn) {
    this.actionForCollideGoodsSeq.push(fn);
}

PACMan.prototype.setActionForCollideGoods = function (fn) {
    this.actionForCollideGoods = fn;
    this.actionForCollideGoodsSeq = [];
};

PACMan.prototype.actionForCollideGoods = function () {
    return false;
};

PACMan.prototype.setActionForCollideCountGoods = function (fn) {
    this.actionForCollideCountGoods = fn
};

PACMan.prototype.actionForCollideCountGoods = function () {
    return false;
};

PACMan.prototype.setActionForCollideProp = function (fn) {
    this.actionForCollideProp = fn
};

PACMan.prototype.actionForCollideProp = function () {
    return false;
};

PACMan.prototype.checkCollide = function () {
    var coord = ModuleUtil.positionToCoord(this.mesh.position.x, this.mesh.position.z);
    var nextCoordX = coord.x;
    var nextCoordY = coord.y;
    var tmpItem;
    var onPoint = false;
    if (parseInt(coord.x) == coord.x && parseInt(coord.y) == coord.y) {
        onPoint = true;
        if (this.orientation == 0 || this.orientation == 2) {
            nextCoordX += _moveMap[this.orientation];
        } else {
            nextCoordY += _moveMap[this.orientation];
        }
    }

    if (onPoint) {
        tmpItem = this.mapData[coord.y][coord.x];
        if (tmpItem.t == 2) {
            if (this.actionForCollideGoods() == true) {
                return true;
            }
        }

        tmpItem = this.mapData[nextCoordY][nextCoordX];
        if (tmpItem.t == 1) {
            if (!this.actionForCollideWall(this)) {
                return Engine.modules[tmpItem.s].collideAction(this);
            }
            //} else if (tmpItem.t == 0) {
            //    if (this.actionForCollideBean() == true) {
            //        return true;
            //    }
            //} else if (tmpItem.t == 2) {
            //    if (this.actionForCollideGoods() == true) {
            //        return true;
            //    }
            //} else if (tmpItem.t == 4) {
            //    if (this.actionForCollideCountGoods() == true) {
            //        return true;
            //    }
        }
    } else {
        nextCoordX = (this.orientation == 0 ? Math.ceil(nextCoordX) : this.orientation == 2 ? Math.floor(nextCoordX) : nextCoordX);
        nextCoordY = (this.orientation == 1 ? Math.floor(nextCoordY) : this.orientation == 3 ? Math.ceil(nextCoordY) : nextCoordY);
        var tmpItem = this.mapData[nextCoordY][nextCoordX];
        if (tmpItem.t % 2 == 0 && tmpItem.v) {
            return Engine.modules[tmpItem.s].collideAction(this);
        }
    }

    for (var key in Engine.modules) {
        if (Engine.modules[key].type == 'monster') {
            if (this.actionForCollideMoonster()) {
                return true;
            }

            return Engine.modules[tmpItem.s].collideAction(this);
        } else if (Engine.modules[key].type.indexOf('prop_') == 0) {
            if (this.actionForCollideProp()) {
                return true;
            }

            return Engine.modules[tmpItem.s].collideAction(this);
        }
    }

    return false;
};

PACMan.prototype.reset = function () {
    this.setPosition(this.defaultCoord.x, this.defaultCoord.y);
    this.turnTo(0);
    this.movePath = [];
    this.movePathTarget = [];
    this.actionForCollideGoodsSeq = [];
    this.actionForCollideWallSeq = [];
    this.completeFired = false;
    this.mesh.visible = true;
}

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
    this.torso = new THREE.Mesh(new THREE.SphereGeometry(8, 20, 20, 0, Math.PI * 2, 0, Math.PI), new THREE.MeshPhongMaterial({ color: '#FFD700', shading: THREE.FlatShading }));
    this.torso.geometry.verticesNeedUpdate = true;
    this.torso.geometry.normalsNeedUpdate = true;
    this.torso.geometry.castShadow = true;
    this.body.add(this.torso);
    this.mesh.add(this.body);
    this.mesh.position.y = 20;
};

Bean.prototype.collideAction = function (sourceModule) {
    var targetCoord = ModuleUtil.positionToCoord(this.mesh.position.x, this.mesh.position.z);
    var sourceCoord = ModuleUtil.positionToCoord(sourceModule.mesh.position.x, sourceModule.mesh.position.z);
    var nearX = (targetCoord.y == sourceModule.coord.y && Math.abs(targetCoord.x - sourceCoord.x) <= 0.25);
    var nearY = (targetCoord.x == sourceModule.coord.x && Math.abs(targetCoord.y - sourceCoord.y) <= 0.25);
    if (nearX || nearY) {
        Engine.getModuleObject(this.symbol).mesh.visible = false;
        //sourceModule.mapData[targetCoord.y][targetCoord.x].s = '';
    }

    return false;
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
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(20, 20, 20, 0, Math.PI * 2, 0, Math.PI), new THREE.MeshPhongMaterial({ color: '#FFA500', shading: THREE.FlatShading }));
    this.mesh.geometry.verticesNeedUpdate = true;
    this.mesh.geometry.normalsNeedUpdate = true;
    this.mesh.geometry.castShadow = true;
    this.mesh.position.y = 15;
};

Goods.prototype.collideAction = function (sourceModule) {
    var coord = ModuleUtil.positionToCoord(this.mesh.position.x, this.mesh.position.z);
    var sourceCoord = ModuleUtil.positionToCoord(sourceModule.coord.px, sourceModule.coord.px);
    if ((coord.y == sourceModule.coord.y && Math.abs(coord.x - sourceCoord.x) <= 0.25) || (coord.x == sourceModule.coord.x && Math.abs(coord.y - sourceCoord.y) <= 0.25)) {
        Engine.getModuleObject(this.symbol).mesh.visible = false;
        //sourceModule.mapData[coord.y][coord.x].s = '';
    }

    return false;
};

Goods.updatePose = function (goods) {
    var tmpArr = [];
    for (var i = 0; i < goods.length; i++) {
        tmpArr.push(goods[i].mesh.scale);
    }

    TweenMax.fromTo(tmpArr, 1, { x: 1, y: 1, z: 1, repeat: -1, overwrite: 2, yoyo: true }, { x: 1.25, y: 1.25, z: 1.25, repeat: -1, overwrite: 1, yoyo: true });
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
    var wallGeometry = new THREE.CylinderGeometry(_itemSize * 4 / 9, _itemSize * 4 / 9, 50, 50, 5);
    this.mesh = new THREE.Mesh(wallGeometry, new THREE.MeshPhongMaterial({ color: '#8B4513', shading: THREE.FlatShading }));
    this.mesh.position.y = 25;
};

Wall.prototype.collideAction = function (sourceModule) {
    return true;
};

function Monster(moveType, mapData, color) {
    Module.call(this);
    this.type = 'monster';
    this.unique = false;
    this.color = (color ? color : Math.random() * 0xffffff);
    this.speed = 1;
    this.veerDelta = 0;
    this.mapData = mapData;
    /*1:up, 0:right, 3: down, 2:left*/
    this.orientation = 0;
    this.defaultCoord = { x: 0, y: 0 };
    this.coord = { x: 0, y: 0, px: 0, py: 0 };
    /*game: keep moving; study: move by commond*/
    this.moveType = 'study';
    this.movePath = [];
    this.movePathTarget = [];
    this.init();
};

Monster.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Monster
});

Monster.prototype.init = function () {
    var globalMaterial = new THREE.MeshPhongMaterial({ color: this.color, shading: THREE.FlatShading });
    this.torso = new THREE.Mesh(new THREE.CylinderGeometry(30, 30, 40, 50, 5), globalMaterial);
    this.torso.geometry.verticesNeedUpdate = true;
    this.torso.geometry.normalsNeedUpdate = true;
    this.torso.geometry.castShadow = true;
    this.torso.rotation.x = Math.PI;
    this.torso.position.y = 25;
    this.body.add(this.torso);

    var footGeometry = new THREE.SphereGeometry(10, 50, 50, 0, Math.PI * 2, 0, Math.PI);
    var tmpFVal = Math.sqrt(500 / 2);
    var tmpX, tmpY;
    for (var i = 0; i < 4; i++) {
        var newFoot = new THREE.Mesh(footGeometry, globalMaterial);
        this['foot_' + (i + 1)] = newFoot;
        this.body.add(newFoot);
        tmpX = tmpFVal;
        tmpY = tmpFVal;
        if (i == 1 || i == 2) {
            tmpX = -tmpFVal;
        }

        if (i == 2 || i == 3) {
            tmpY = -tmpFVal;
        }

        newFoot.position.x = tmpX;
        newFoot.position.z = tmpY;
    }

    this.skull = new THREE.Mesh(new THREE.SphereGeometry(30, 50, 50, 0, Math.PI * 2, 0, -Math.PI / 2), globalMaterial);
    this.skull.geometry.verticesNeedUpdate = true;
    this.skull.geometry.normalsNeedUpdate = true;
    this.skull.geometry.castShadow = true;
    this.skull.position.y = 40;
    this.head.add(this.skull);

    var eyebulbGeometry = new THREE.CylinderGeometry(10, 10, 10, 50, 5);
    this.eyebulbL = new THREE.Mesh(eyebulbGeometry, new THREE.MeshPhongMaterial({ color: '#FFFFFF', shading: THREE.FlatShading }));
    this.eyebulbR = new THREE.Mesh(eyebulbGeometry, new THREE.MeshPhongMaterial({ color: '#FFFFFF', shading: THREE.FlatShading }));
    var pupilGeometry = new THREE.CircleGeometry(6, 18, 0, Math.PI / 180 * 340);
    this.pupilL = new THREE.Mesh(pupilGeometry, globalMaterial);
    this.pupilL.rotation.x = -Math.PI / 2;
    this.pupilL.rotation.z = -Math.PI / 2;
    this.pupilL.position.y = 10.1
    this.pupilR = new THREE.Mesh(pupilGeometry, globalMaterial);
    this.pupilR.rotation.x = -Math.PI / 2;
    this.pupilR.rotation.z = Math.PI / 2;
    this.pupilR.position.y = 10.1

    var options = {
        amount: 1,
        bevelThickness: 1,
        bevelSegments: 10,
        bevelSize: 1,
        steps: 1
    };

    var eyebrowShape = new THREE.Shape();
    var sqrt02 = Math.sqrt(0.4);
    var sqrt005 = Math.sqrt(0.1);
    eyebrowShape.moveTo(-10, 0);
    eyebrowShape.lineTo(-5, 5);
    eyebrowShape.quadraticCurveTo(0, 10, 5, 5);
    eyebrowShape.quadraticCurveTo(10, -sqrt005, 10 - sqrt005, -sqrt005);
    eyebrowShape.lineTo((10 - sqrt02) / 2, (10 - sqrt02) / 2);
    eyebrowShape.quadraticCurveTo(0, 10 - sqrt02, -(10 - sqrt02) / 2, (10 - sqrt02) / 2);
    eyebrowShape.lineTo(-(10 - sqrt005), -sqrt005);
    eyebrowShape.quadraticCurveTo(-10, -sqrt005, -10, 0);
    var eyebrowGeometry = new THREE.ExtrudeGeometry(eyebrowShape, options);
    var eyebrowMaterial = new THREE.MeshPhongMaterial({ color: '#000000', shading: THREE.FlatShading });
    this.eyebrowL = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial);
    this.eyebrowL.position.y = 4;
    this.eyebrowL.position.x = -12;
    this.eyebrowL.rotation.x = -Math.PI / 2;
    this.eyebrowL.rotation.z = Math.PI / 2;

    this.eyebrowR = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial);
    this.eyebrowR.position.y = 4;
    this.eyebrowR.position.x = -12;
    this.eyebrowR.rotation.x = -Math.PI / 2;
    this.eyebrowR.rotation.z = Math.PI / 2;

    this.eyeL = new THREE.Group();
    this.eyeR = new THREE.Group();
    this.eyeL.add(this.eyebulbL);
    this.eyeL.add(this.pupilL);
    this.eyeL.add(this.eyebrowL);
    this.eyeR.add(this.eyebulbR);
    this.eyeR.add(this.pupilR);
    this.eyeR.add(this.eyebrowR);

    this.eyeL.rotation.z = -Math.PI / 2;
    this.eyeL.position.z = 12;
    this.eyeL.position.y = 40;
    this.eyeL.position.x = 25;
    this.eyeR.rotation.z = -Math.PI / 2;
    this.eyeR.position.z = -12;
    this.eyeR.position.y = 40;
    this.eyeR.position.x = 25;
    this.head.add(this.eyeL);
    this.head.add(this.eyeR);

    this.mesh.add(this.body);
    this.mesh.add(this.head);
    // this.mesh.position.y = 10;
    this.mesh.rotation.y = -Math.PI / 2;
};

Monster.prototype.setPosition = function (x, y) {
    var tmpX = x * _itemSize - _colCount * _itemSize / 2 + _itemSize / 2;
    var tmpZ = y * _itemSize - _rowCount * _itemSize / 2 + _itemSize / 2;
    this.mesh.position.x = tmpX;
    this.mesh.position.z = tmpZ;
    this.coord = { x: x, y: y, px: tmpX, py: tmpZ };
    this.defaultCoord = { x: x, y: y };
}

Monster.prototype.collideAction = function (sourceModule) {
    return true;
};

Monster.prototype.reset = function () {
    this.setPosition(this.defaultCoord.x, this.defaultCoord.y);
    this.movePath = [];
    this.movePathTarget = [];
    this.mesh.visible = true;
};

function CountGoods(count) {
    Module.call(this);
    this.type = 'countgoods';
    this.count = count;
    this.text = count.toString();
    this.textColor = '#B22222';
    this.unique = true;
    this.init();
};

CountGoods.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: CountGoods
});

CountGoods.prototype.init = function () {
    this.mesh = new THREE.Group();
    this.textMeshs.position.y = 40;
    this.textMeshs.position.x = -13;
    this.createText();
    this.body = new THREE.Mesh(new THREE.SphereGeometry(20, 20, 20, 0, Math.PI * 2, 0, Math.PI), new THREE.MeshPhongMaterial({ color: '#B22222', shading: THREE.FlatShading }));
    this.body.geometry.verticesNeedUpdate = true;
    this.body.geometry.normalsNeedUpdate = true;
    this.body.geometry.castShadow = true;
    this.mesh.add(this.body);
    this.mesh.add(this.textMeshs);
    this.mesh.position.y = 15;
};

CountGoods.prototype.collideAction = function (sourceModule) {
    var coord = ModuleUtil.positionToCoord(this.mesh.position.x, this.mesh.position.z);
    var sourceCoord = ModuleUtil.positionToCoord(sourceModule.coord.px, sourceModule.coord.px);
    if ((coord.y == sourceModule.coord.y && Math.abs(coord.x - sourceCoord.x) <= 1 / 35) || (coord.x == sourceModule.coord.x && Math.abs(coord.y - sourceCoord.y) <= 1 / 35)) {
        if (this.count > 0) {
            this.count--;
            this.text = this.count.toString();
            this.createText();
        } else {
            Engine.getModuleObject(this.symbol).mesh.visible = false;
        }
    }

    return false;
};

var ModuleUtil = {};

ModuleUtil.coordToPosition = function (x, y) {
    var tmpX = x * _itemSize - _colCount * _itemSize / 2 + _itemSize / 2;
    var tmpY = y * _itemSize - _rowCount * _itemSize / 2 + _itemSize / 2;
    return { px: tmpX, py: tmpY };
};

ModuleUtil.positionToCoord = function (px, py) {
    var tmpX = (px - _itemSize / 2 + _colCount * _itemSize / 2) / _itemSize;
    var tmpY = (py - _itemSize / 2 + _rowCount * _itemSize / 2) / _itemSize;
    return { x: tmpX, y: tmpY };
};

Monster._poseSpeed = 2;
Monster.updatePose = function (monsters) {
    if (monsters.length <= 0) {
        return;
    }

    var duration = 1 / (Monster._poseSpeed);
    var footObjs = [];
    for (var i = 1; i < 5; i++) {
        var footObj = { x: monsters[0]['foot_' + i].position.x, z: monsters[0]['foot_' + i].position.z, items: [], symbol: i };
        footObjs.push(footObj);
    }

    for (var i = 0; i < monsters.length; i++) {
        for (var j = 0; j < 4; j++) {
            footObjs[j].items.push(monsters[i]['foot_' + footObjs[j].symbol].position);
        }
    }

    for (var i = 0; i < 4; i++) {
        var xa = (i % 3 == 0 ? 6 : -6);
        var za = (i > 1 ? -6 : 6);
        TweenMax.fromTo(
            footObjs[i].items,
            duration,
            { x: footObjs[i].x, z: footObjs[i].z, repeat: -1, overwrite: 2, yoyo: true },
            { x: footObjs[i].x + xa, z: footObjs[i].z + za, repeat: -1, overwrite: 1, yoyo: true }
        );
    }
};

CountGoods.updatePose = function (countGoods) {
    var tmpArr = [];
    for (var i = 0; i < countGoods.length; i++) {
        tmpArr.push(countGoods[i].mesh.scale);
    }

    TweenMax.fromTo(tmpArr, 1, { x: 1, y: 1, z: 1, repeat: -1, overwrite: 2, yoyo: true }, { x: 1.25, y: 1.25, z: 1.25, repeat: -1, overwrite: 1, yoyo: true });
};
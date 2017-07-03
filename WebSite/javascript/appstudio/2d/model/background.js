'use strict';

function Background(isForest) {
    ObjectBase.call(this);
    this.type = 'background';
    this.images = [];
    this.fillStyle = 1;
    this.orgPosition = new Position(0, 0);
    this.orgSize = new Size(0, 0);
    this.position = new Position(0, 0);
    this.init();
};

Background.prototype = Object.assign(Object.create(ObjectBase.prototype), {
    constructor: Background
});

Background.prototype.init = function () {

}

Background.prototype.method_KeepMoving = function (orientation, speed) {
    //TweenMax.to(_mc, 1, { rotation: 360, repeat: -1, ease: Linear.ease });
}

Background.prototype.method_MoveTo = function (position) {

}

Background.prototype.method_RotateTo = function (clockwise, angle) {
    //TweenMax.to(_mc, 1, {rotation:360,repeat:-1, ease:Linear.ease});
}

Background.prototype.method_ChangeImage = function () {

}

Background.prototype.method_Stop = function () {

}
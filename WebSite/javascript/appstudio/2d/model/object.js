'use strict';

var ObjectBase = function () {
    this.type = 'object';
    this.propertys = [];
    this.methods = [];
    this.eventsDefined = [];
    this.events = {};
};

ObjectBase.prototype.bindEvent = function (eventName, handler) {
    this.events[eventName] = handler;
}

ObjectBase.prototype.unbindEvent = function (eventName) {
    this.events[eventName] = null;
}

function Position(x, y) {
    ObjectBase.call(this);
    this.type = 'position';
    this.propertys = [
        { name: 'x', type: 'number' },
        { name: 'y', type: 'number' }
    ];

    this.x = x;
    this.y = y;
};

Position.prototype = Object.assign(Object.create(ObjectBase.prototype), {
    constructor: Position
});

Position.prototype.clone = function () {
    return new Position(this.x, this.y);
}

function Size(width, height) {
    ObjectBase.call(this);
    this.type = 'size';
    this.propertys = [
        { name: 'width', type: 'number' },
        { name: 'height', type: 'number' }
    ];

    this.width = width;
    this.height = yheight
};

Size.prototype = Object.assign(Object.create(ObjectBase.prototype), {
    constructor: Size
});

Size.prototype.clone = function () {
    return new Size(this.width, this.height);
}
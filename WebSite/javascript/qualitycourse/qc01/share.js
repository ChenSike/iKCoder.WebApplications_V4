'use strict';

var Scene = {};

Scene.init = function () {
    Scene.prepareForRun();
    Engine.setOverEventFn(function () {
        Scene.reset();
    });
};

Scene.getCfgValue = function (node, attr, defVal) {
    var retVal = '';
    if (typeof (node.attr(attr)) == 'string') {
        retVal = node.attr(attr);
        if (typeof (defVal) == 'number') {
            retVal = parseInt(retVal);
        }
    } else {
        retVal = defVal;
    }

    return retVal;
};

Scene.prepareForRun = function () {
    var rabbitNode = $($(_shareData).find('item[module="rabbit"]')[0]);
    var wolfNode = $($(_shareData).find('item[module="wolf"]')[0]);
    var carrotNode = $($(_shareData).find('item[module="carrot"]')[0]);
    var hedgehogNode = $($(_shareData).find('item[module="hedgehog"]')[0]);
    var floor = Scene.getCfgValue($($(_shareData).find('item[role="floor"]')[0]), 'module', '');
    var eventNode = $($(_shareData).find('event')[0]);
    floor = (floor == '' ? 'forest' : floor);
    Engine.initScreenAnd3D('game_container', {
        speed: {
            player: { min: 6, max: 48, freq: 3000, step: 2 },
            monster: { pos: 0.59, tpos: 0.65, acceleration: 0.004, pursue: true }
        },
        modules: {
            rabbit: { head: Scene.getCfgValue(rabbitNode, 'head', 1), body: Scene.getCfgValue(rabbitNode, 'body', 1), ear: Scene.getCfgValue(rabbitNode, 'ear', 1), color: Scene.getCfgValue(rabbitNode, 'color', '#b44b39'), role: Scene.getCfgValue(rabbitNode, 'role', 'player') },
            wolf: { head: Scene.getCfgValue(wolfNode, 'head', 1), body: Scene.getCfgValue(wolfNode, 'head', 1), ear: Scene.getCfgValue(wolfNode, 'head', 1), color: Scene.getCfgValue(wolfNode, 'color', '#100707'), role: Scene.getCfgValue(wolfNode, 'role', 'monster') },
            hedgehog: { role: Scene.getCfgValue(hedgehogNode, 'role', 'obstacle') },
            carrot: { role: Scene.getCfgValue(carrotNode, 'role', 'prop') },
            grass: { role: (floor == 'gress' ? 'floor' : '') },
            forest: { role: (floor == 'forest' ? 'floor' : '') },
        },
        control: { device: eventNode.attr('device'), key: eventNode.attr('key') }
    });

    Engine.setAudio(Scene.getCfgValue($($(_shareData).find('music')[0]), 'path', false));
    Engine.prepareForRun();
    Scene.bindModuleToRole();
    Engine.setControl(Engine.params.control.device, Engine.params.control.key);
    Engine.start();
};

Scene.start = function () {
    Engine.start();
};

Scene.reset = function () {
    TweenMax.killAll();
    Engine.reset();
    Scene.bindModuleToRole();
    Engine.start();
};

Scene.bindModuleToRole = function () {
    if (_shareData) {
        var nodes = $(_shareData).find('item');
        for (var i = 0; i < nodes.length; i++) {
            Engine.changeRoleModule($(nodes[i]).attr('module'), $(nodes[i]).attr('role'));
        }
    } else {
        for (var key in Engine.params.modules) {
            Engine.changeRoleModule(key, Engine.params.modules[key].role);
        }
    }
};

Scene.resetSize = function () {
    Engine.handleWindowResize();
};

window.onresize = function () {
    Engine.handleWindowResize();
};

Scene.init();
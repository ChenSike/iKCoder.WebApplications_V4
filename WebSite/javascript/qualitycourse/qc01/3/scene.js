'use strict';

WorkScene.OutputCodeCallBack = function (code) {
    if (typeof Scene != 'undefined' && Scene) {
        code = code.replace('Scene.settingComplete();', '');
        eval(code);
    }
};

var Scene = {};

Scene.setControl = function (device, eventKey) {
    if (device == 'mouse') {
        device = 'm';
        eventKey = (eventKey == 'left' ? '0' : '2');
    } else {
        device = 'k';
    }

    Engine.setControl(device, eventKey);
};

Scene.init = function () {
    Engine.setOverCallbackFn(function () {
        resetPlayBtn('R');
    });
    //_registerRemoteServer();
    //$.ajax({
    //    type: 'POST',
    //    async: true,
    //    url: _getRequestURL(_gURLMapping.tmp.storeload, { symbol: 'qc01_3_' + (_currentStep - 1), type: 'modulesetting' }),
    //    data: '',
    //    success: function (response, status) {
    //        if ($(response).find('err').length > 0) {
    //            _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Save_QualityCourse');
    //            return;
    //        }

    //        _dataForSave = response;
    //        Scene.prepareForRun();
    //    },
    //    dataType: 'xml',
    //    xhrFields: {
    //        withCredentials: true
    //    },
    //    error: function () {
    //    }
    //});
    _dataForSave = StringToXML(window.localStorage.getItem('qc01_state_storage'));
    Scene.prepareForRun();
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

Scene.prepareForRun = function (data) {
    var rabbitNode = $($(_dataForSave).find('item[module="rabbit"]')[0]);
    var wolfNode = $($(_dataForSave).find('item[module="wolf"]')[0]);
    var carrotNode = $($(_dataForSave).find('item[module="carrot"]')[0]);
    var hedgehogNode = $($(_dataForSave).find('item[module="hedgehog"]')[0]);
    var floor = Scene.getCfgValue($($(_dataForSave).find('item[role="floor"]')[0]), 'module', '');
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
        }
    });

    Engine.setAudio(Scene.getCfgValue($($(_dataForSave).find('music')[0]), 'path', false));
    Engine.prepareForRun();
    Scene.bindModuleToRole();
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
    if (_dataForSave) {
        var nodes = $(_dataForSave).find('item');
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

Scene.settingComplete = function () {
    $(_dataForSave).find('data').append($('<event device="' + Engine.params.control.device + '" key="' + Engine.params.control.key + '"/>'));
    showCompleteAlert();
}
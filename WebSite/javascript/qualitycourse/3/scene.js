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
    _registerRemoteServer();
    $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gURLMapping.tmp.storeload, { symbol: 'qc01_3_' + (_currentStep - 1), type: 'modulesetting' }),
        data: '',
        success: function (response, status) {
            if ($(response).find('err').length > 0) {
                _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Save_QualityCourse');
                return;
            }

            _dataForSave = response;
            Scene.prepareForRun();
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
        }
    });
};

Scene.prepareForRun = function (data) {
    var rabbitNode = $($(_dataForSave).find('item[module="rabbit"]')[0]);
    var wolfNode = $($(_dataForSave).find('item[module="wolf"]')[0]);
    var carrotNode = $($(_dataForSave).find('item[module="carrot"]')[0]);
    var hedgehogNode = $($(_dataForSave).find('item[module="hedgehog"]')[0]);
    var floorNode = $($(_dataForSave).find('item[role="floor"]')[0]);
    Engine.initScreenAnd3D('game_container', {
        speed: {
            player: { min: 6, max: 48, freq: 3000, step: 2 },
            monster: { pos: 0.59, tpos: 0.65, acceleration: 0.004, pursue: true }
        },
        modules: {
            rabbit: { head: parseInt(rabbitNode.attr('head')), body: parseInt(rabbitNode.attr('body')), ear: parseInt(rabbitNode.attr('ear')), color: rabbitNode.attr('color'), role: rabbitNode.attr('role') },
            wolf: { head: parseInt(wolfNode.attr('head')), body: parseInt(wolfNode.attr('body')), ear: parseInt(wolfNode.attr('ear')), color: wolfNode.attr('color'), role: wolfNode.attr('role') },
            hedgehog: { role: hedgehogNode.attr('role') },
            carrot: { role: carrotNode.attr('role') },
            grass: { role: (floorNode.attr('module') == 'gress' ? 'floor' : '') },
            forest: { role: (floorNode.attr('module') == 'forest' ? 'floor' : '') },
        },
        audio: $($(_dataForSave).find('music')[0]).attr('path')
    });

    Engine.prepareForRun();
    Engine.setAudio($($(_dataForSave).find('music')[0]).attr('path'));
    Scene.bindModuleToRole();
    Engine.start();
};

Scene.start = function () {
    Engine.start();
};

Scene.reset = function () {
    Engine.reset();
    Scene.bindModuleToRole();
    Engine.start();
};

Scene.bindModuleToRole = function () {
    var nodes = $(_dataForSave).find('item');
    for (var i = 0; i < nodes.length; i++) {
        Engine.changeRoleModule($(nodes[i]).attr('module'), $(nodes[i]).attr('role'));
    }
};

Scene.resetSize = function () {
    Engine.handleWindowResize();
};

'use strict';

var _dataForSaveTemp = '';

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
    _dataForSaveTemp = '';
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
    //        Scene.prepareForRun(_dataForSave);
    //    },
    //    dataType: 'xml',
    //    xhrFields: {
    //        withCredentials: true
    //    },
    //    error: function () {
    //    }
    //});
    Scene.prepareForRun();
};

Scene.prepareForRun = function (data) {
    Engine.initScreenAnd3D('game_container', {
        speed: {
            player: { min: 6, max: 48, freq: 3000, step: 2 },
            monster: { pos: 0.59, tpos: 0.65, acceleration: 0.004, pursue: true }
        },
    });

    Engine.prepareForRun();
    Engine.setAudio(false);
    Scene.bindModuleToRole();
    Engine.start();
};

Scene.start = function () {
    Engine.start();
};

Scene.reset = function () {
    _dataForSaveTemp = '';
    Engine.reset();
    Scene.bindModuleToRole();
    Engine.start();
};

Scene.bindModuleToRole = function () {
    Engine.changeRoleModule('rabbit', 'player');
    Engine.changeRoleModule('wolf', 'monster');
    Engine.changeRoleModule('hedgehog', 'obstacle');
    Engine.changeRoleModule('carrot', 'prop');
    Engine.changeRoleModule('forest', 'floor');
};

Scene.resetSize = function () {
    Engine.handleWindowResize();
};

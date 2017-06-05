'use strict';

WorkScene.OutputCodeCallBack = function (code) {
    if (typeof Scene != 'undefined' && Scene) {
        code = code.replace('Scene.settingComplete();', '');
        eval(code);
    }
};

var Scene = {};

Scene.init = function () {
    _registerRemoteServer();
    $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gURLMapping.tmp.storeload, { symbol: 'qc01_3_' + (_currentStep - 1), type: 'modulesetting'}),
        data: '',
        success: function (response, status) {
            if ($(response).find('err').length > 0) {
                _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Save_QualityCourse');
                return;
            }

            _dataForSave = response;
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
        }
    });

    Engine.initScreenAnd3D('game_container', {
        speed: {
            player: { min: 6, max: 48, freq: 3000, step: 2 },
            monster: { pos: 0.59, tpos: 0.65, acceleration: 0.004, pursue: false }
        },
    });

    Engine.prepareForRun();
    Engine.setAudio(false);
    Engine.changeRoleModule('rabbit', 'player');
    Engine.changeRoleModule('wolf', 'monster');
    Engine.modules['player'].mesh.rotation.y = Math.PI / 4;
    Engine.modules['player'].mesh.position.y = 60;
    Engine.modules['monster'].positionType = 'player';
    Engine.modules['monster'].mesh.position.x = -10;
    Engine.modules['monster'].mesh.position.z = 0;
    Engine.start();
};

Scene.start = function () {
    Engine.start();
};

Scene.reset = function () {
    Engine.reset();
    Engine.changeRoleModule('rabbit', 'player');
    Engine.changeRoleModule('wolf', 'monster');
    Engine.modules['player'].mesh.rotation.y = Math.PI / 4;
    Engine.modules['player'].mesh.position.y = 60;
    Engine.modules['monster'].positionType = 'player';
    Engine.modules['monster'].mesh.position.x = -10;
    Engine.modules['monster'].mesh.position.z = 0;
    Engine.start();
};

Scene.resetSize = function () {
    Engine.handleWindowResize();
};

Scene.settingComplete = function () {
    _dataForSave;
    showCompleteAlert();
};

Scene.setRoleModuleShape = function (moduleType, head, body, ear, color) {
    head = (head == 'max' ? 1.5 : head == 'middle' ? 1 : head == 'min' ? 0.5 : 1);
    body = (body == 'max' ? 1.5 : body == 'middle' ? 1 : body == 'min' ? 0.5 : 1);
    ear = (ear == 'max' ? 2 : ear == 'middle' ? 1 : ear == 'min' ? 0.5 : 1);
    Engine.moduleLib[moduleType].head.scale.set(head, head, head);
    Engine.moduleLib[moduleType].torso.scale.set(body, body, body);
    Engine.moduleLib[moduleType].earL.scale.set(ear, ear, ear);
    Engine.moduleLib[moduleType].earR.scale.set(ear, ear, ear);
    var newMaterial = new THREE.MeshPhongMaterial({ color: color, shading: THREE.GouraudShading });
    Engine.moduleLib[moduleType].head.material.setValues(newMaterial);
    Engine.moduleLib[moduleType].torso.material.setValues(newMaterial);
    Engine.moduleLib[moduleType].earL.material.setValues(newMaterial);
    Engine.moduleLib[moduleType].earR.material.setValues(newMaterial);
}

Scene.setRabbitShape = function (head, body, ear, color) {
    Scene.setRoleModuleShape('rabbit', head, body, ear, color);
};

Scene.setWolfShape = function (head, body, ear, color) {
    Scene.setRoleModuleShape('wolf', head, body, ear, color);
};

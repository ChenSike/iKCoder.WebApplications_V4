'use strict';

WorkScene.OutputCodeCallBack = function (code) {
    if (typeof Scene != 'undefined' && Scene) {
        eval(code);
    }
};

var Scene = {};

Scene.init = function () {
    Engine.initScreenAnd3D('game_container', {
        speed: {
            player: { min: 6, max: 48, freq: 3000, step: 2 },
            monster: { pos: 0.59, tpos: 0.65, acceleration: 0.004, pursue: false }
        },
    });
    Engine.prepareForRun();
};

Scene.start = function () {
    Engine.start();
    for (var key in Engine.modules) {
        if (!Engine.modules[key]) {
            return;
        }
    }

    if (!Engine.audio || Engine.audio.paused) {
        return;
    }

    _dataForSave = [];
    _dataForSave.push('<data>');
    for (var key in Engine.modules) {
        if (key != 'bonus') {
            _dataForSave.push('<item role="' + key + '" module="' + (Engine.modules[key] ? Engine.modules[key].type : '') + '"></item>');
        }
    }

    _dataForSave.push('<music path="' + Engine.audio.src + '"></music>');
    _dataForSave.push('</data>');
    _dataForSave = _dataForSave.join('');
    Scene.stepComplete();
};

Scene.reset = function () {
    Engine.reset();
    Engine.start();
    _dataForSave = '';
};

Scene.SetMusic = function (music) {
    Engine.setAudio(music == '' ? false : music);
};

Scene.SetRoleModule = function (moduleType, role) {
    if (role == '') {
        return;
    }

    Engine.changeRoleModule(moduleType, role);
};

Scene.resetSize = function () {
    Engine.handleWindowResize();
};
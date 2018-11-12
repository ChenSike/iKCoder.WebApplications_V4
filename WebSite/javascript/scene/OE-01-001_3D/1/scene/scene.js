'use strict';

var _dataForSave = '';
_useFullContainer = true;
_forceReset = false;
WorkScene.OutputCodeCallBack = function (code) {
    if (typeof Scene != 'undefined' && Scene) {
        eval(code);
    }
};

var Scene = {};

Scene.init = function () {
    var container = $('#game_container');
    var wrap = $('.siderbar-content');
    container.height(wrap.height() - 20);
    container.width(wrap.width() - 20);

    Engine.initScreenAnd3D('game_container', {
        speed: {
            player: { min: 6, max: 48, freq: 3000, step: 2 },
            monster: { pos: 0.59, tpos: 0.65, acceleration: 0.004, pursue: false }
        },
    });

    $('#game_container canvas').css('background-color','#dbe6e6');
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
            _dataForSave.push('<item role="' + key + '" module="' + (Engine.modules[key] ? Engine.modules[key].type : '') + '"/>');
        }
    }

    _dataForSave.push('<music path="' + Engine.audio.src + '"/>');
    _dataForSave.push('</data>');
    _dataForSave = _dataForSave.join('');
    window.localStorage.setItem(getQueryString('scene') + '_state_storage', _dataForSave);
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
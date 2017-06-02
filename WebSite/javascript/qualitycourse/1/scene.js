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
}

Scene.start = function () {    
    Engine.start();
}

Scene.reset = function () {
    Engine.reset();
    Engine.start();
}

Scene.SetMusic = function (music) {
    Engine.setAudio(music == '' ? false : music);
};

Scene.SetRoleModule = function (moduleType, role) {
    if (role == '') {
        return;
    }

    Engine.changeRoleModule(moduleType, role);
}

Scene.resetSize = function () {
    Engine.handleWindowResize();
}
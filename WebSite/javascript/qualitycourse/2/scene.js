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
    Engine.setAudio(false);
    Engine.changeRoleModule('rabbit', 'player');
    Engine.changeRoleModule('wolf', 'monster');
    Engine.modules['player'].mesh.rotation.y = Math.PI / 4;
    Engine.modules['player'].mesh.position.y = 50;
    Engine.modules['monster'].positionType = 'player';
    Engine.modules['monster'].mesh.position.x = -10;
    Engine.modules['monster'].mesh.position.z = 0;
    Engine.start();
};

Scene.start = function () {
    Engine.start();
    

    //Scene.stepComplete();
};

Scene.reset = function () {
    Engine.reset();
    Engine.start();
};

Scene.resetSize = function () {
    Engine.handleWindowResize();
};
'use strict';

WorkScene.OutputCodeCallBack = function (code) {
    Scene.ResetConfig();
    eval(code);
    resetGame();
    if (code == '') {
        var a = 0;
    }
};

var Scene = {};

Scene.reset = function () {
    reinitGameParam();
    gamePause();
}

Scene.startGame = function () {
    gameStart();
}

Scene.ResetConfig = function () {
    Scene.reset();
}

Scene.initSceneEnvironment = function () {

}

Scene.RabbitRun = function () {
    _params_HeroStatus = "running";
}

Scene.WolfRun = function () {
    _params_MonsterStatus = "running";
}

Scene.PlayMusic = function () {
    _params_MusicPlay = true;
}

Scene.CreateWolf = function () {
    _params_MonsterStatus = "pause";
}

Scene.CreateRabbit = function () {
    _params_HeroStatus = "pause";
}

Scene.SetBackground = function () {
    _params_BsackgroundShow = true;
}

Scene.SetMusic = function () {
    _params_MusicPlay = true;
}
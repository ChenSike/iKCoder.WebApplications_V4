'use strict';

var Scene = {};

Scene.reset = function () {
    reinitGameParam();
    gamePause();
}

Scene.startGame = function () {
    gameStart();
}

Scene.ResetConfig = function () {
    reinitGameParam();
    gamePause();
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
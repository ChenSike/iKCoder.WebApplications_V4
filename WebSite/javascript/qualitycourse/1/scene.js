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
    var _params_GameStatus = "pause";
    var _params_HeroStatus = "pause";
    var _params_MonsterStatus = "pause";
    var _params_MusicPlay = false;
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
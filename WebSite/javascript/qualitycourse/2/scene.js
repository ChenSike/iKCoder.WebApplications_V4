'use strict';

var Scene = {};
var currMonsterParams = $.extend(true, {}, monsterDefault);
var currHeroParams = $.extend(true, {}, heroDefault);

Scene.init = function () {
    gameInit();
    monsterPos = .59;
    monster.pause();
}

Scene.PrepareStatus = function () {
    _params_HeroStatus = "pause";
    _params_MonsterStatus = "pause";
};

Scene.reset = function () {
    reinitGameParam();
    gamePause();
};

Scene.startGame = function () {
    gameStart();
};

Scene.ResetConfig = function () {
    Scene.reset();
};

Scene.SetMonsterProperty = function (symbol, w, h, d, color) {
    if (symbol == 'tail' || symbol == 'paw') {
        monsterDefault[symbol].rt = w;
        monsterDefault[symbol].rb = h;
        monsterDefault[symbol].h = d;
    } else {
        monsterDefault[symbol].w = w;
        monsterDefault[symbol].h = h;
        monsterDefault[symbol].d = d;
    }

    monsterDefault[symbol].c = new THREE.MeshPhongMaterial({
        color: color,
        shading: THREE.FlatShading,
    });
};

Scene.ReinitMonsterProperty = function (symbol, w, h, d, color) {
};

Scene.UpdateMonsterProperty = function (symbol, w, h, d, color) {
    if (!paramsEquals(currMonsterParams, monsterDefault)) {
        reCreateMonster();
        monster.pause();
        currMonsterParams = $.extend(true, {}, monsterDefault);
    }
};

Scene.SetHeroProperty = function (symbol, w, h, d, color) {
    heroDefault[symbol].w = w;
    heroDefault[symbol].h = h;
    heroDefault[symbol].d = d;
    heroDefault[symbol].c = new THREE.MeshPhongMaterial({
        color: color,
        shading: THREE.FlatShading,
    });
};

Scene.ReinitHeroProperty = function (symbol, w, h, d, color) {
};

Scene.UpdateHeroProperty = function (symbol, w, h, d, color) {
    if (!paramsEquals(currHeroParams, heroDefault)) {
        reCreateHero();
        hero.pause();
        currHeroParams = $.extend(true, {}, heroDefault);
    }
};

WorkScene.OutputCodeCallBack = function (code) {
    eval(code);
};
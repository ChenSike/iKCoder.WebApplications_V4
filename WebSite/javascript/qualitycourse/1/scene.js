'use strict';

WorkScene.outputCode = function () {
    var code = '';
    try {
        var topBlocks = WorkScene.workspace.topBlocks_;
        for (var i = 0; i < topBlocks.length; i++) {
            if (topBlocks[i].type == 'scene_setting') {
                var content = $('#txt_Code_Content');
                code = Blockly.JavaScript['scene_setting'](topBlocks[i]);
                content.text(code);
                content.data("autoRowsNumbers").updateLine(code.match(/\n/g).length + 1);
                break;
            }
        }
    }
    catch (ex) {
    }

    if (typeof scene != 'undefined' && scene) {
        eval(code);
    }
};

var Scene = {};

Scene.init = function () {
    gameInit();
}

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

Scene.SetHeroModule = function (module) {
    if (module != '') {
        _params_HeroStatus = "pause";
        setHeroModule(module);
        reCreateHero();
        hero.mesh.position.y = 30;
    } else {
        _params_HeroStatus = "hidden";
    }
}

Scene.SetMonsterModule = function (module) {
    if (module != '') {
        _params_MonsterStatus = "pause";
        setMonsterModule(module);
        reCreateMonster();
        monsterPos = .59;
        monster.pause();
    } else {
        _params_MonsterStatus = "hidden";
    }
}

Scene.SetObstacleModule = function (module) {
    if (module != '') {
        _params_ObstacleStatus = "pause";
        setObstacleModule(module);
        reCreateObstacle();
    } else {
        _params_ObstacleStatus = "hidden";
    }
}

Scene.SetPropModule = function (module) {
    if (module != '') {
        _params_PropStatus = "pause";
        setPropModule(module);
        reCreateProp();
        prop.mesh.position.y = 70;
    } else {
        _params_PropStatus = "hidden";
    }
}

Scene.SetBackground = function (bg) {
    _params_BsackgroundShow = (bg == '' ? false : true);
}

Scene.SetMusic = function (music) {
    _params_MusicPlay = (music == '' ? false : true);
}

Scene.initSceneEnvironment = function () {
    reinitGameParam();
    gamePause();
}
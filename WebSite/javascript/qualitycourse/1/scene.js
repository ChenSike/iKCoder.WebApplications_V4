'use strict';

var needBlocks = ['scene_object_wolf', 'scene_object_rabbit', 'scene_background', 'scene_music', ];
WorkScene.outputCode = function (eventObj) {
    try {
        var childBlocks = [];
        var checkDuplicateBlock = function (tmpBlock) {
            for (var k = 0; k < childBlocks.length; k++) {
                if (tmpBlock.type == childBlocks[k].type) {
                    return true;
                }
            }

            return false;
        }

        var completeCount = 0;
        var topBlocks = WorkScene.workspace.topBlocks_;
        var duplicateBlocks = [];
        for (var i = 0; i < topBlocks.length; i++) {
            if (topBlocks[i].type == 'scene_setting') {
                var tmpChild = topBlocks[i];
                while (tmpChild.childBlocks_.length > 0) {
                    tmpChild = tmpChild.getChildren()[0];
                    if (!checkDuplicateBlock(tmpChild)) {
                        childBlocks.push(tmpChild);
                    } else {
                        duplicateBlocks.push(tmpChild);
                    }
                }

                break;
            }
        }

        for (var j = 0; j < childBlocks.length; j++) {
            for (var i = 0; i < needBlocks.length; i++) {
                if (childBlocks[j].type == needBlocks[i]) {
                    completeCount++;
                    break;
                }
            }
        }

        for (var i = 0; i < topBlocks.length; i++) {
            if (topBlocks[i].type == 'scene_setting') {
                var content = $('#txt_Code_Content');
                var code = Blockly.JavaScript['scene_setting'](topBlocks[i]);
                content.text(code);
                content.data("autoRowsNumbers").updateLine(code.match(/\n/g).length + 1);
                Scene.ResetConfig();
                eval(code);
                resetGame();
                break;
            }
        }

        if (completeCount == needBlocks.length && duplicateBlocks.length==0) {
            setTimeout(showCompleteAlert, 3000);
        }

        //console.log(duplicateBlocks);
    }
    catch (ex) {

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
'use strict';

var needBlocks = ['scene_setting', 'scene_object_wolf', 'scene_object_rabbit', 'scene_background', 'scene_music', ];
WorkScene.outputCode = function (eventObj) {
        resetToolboxBlockStatus(eventObj);
    try {

        var completeCount = 0;
        var topBlocks = WorkScene.workspace.topBlocks_;
        var childBlocks = [];
        for (var i = 0; i < topBlocks.length; i++) {
            if (topBlocks[i].type == 'scene_setting') {
                var tmpChild = topBlocks[i];
                while (tmpChild.childBlocks_.length > 0) {
                    tmpChild = tmpChild.getChildren()[0]
                    childBlocks.push(tmpChild);
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
                return;
            }
        }

        if (completeCount == needBlocks.length) {
            setTimeout(showCompleteAlert, 3000);
        }
    }
    catch (ex) {

    }
};

var _prevEventType = '';
var _createXml = null;
function resetToolboxBlockStatus(eventObj) {
    if (eventObj.type == 'create') {
        var toolboxBlocks = WorkScene.workspace.flyout_.blocks_;
        var tt = $(eventObj.xml).attr('type')
        for (var i = 0; i < toolboxBlocks.length; i++) {
            if (tt == toolboxBlocks[i].type) {
                toolboxBlocks[i].dragMode_ = Blockly.DRAG_NONE;
                break;
            }
        }
        
    }
    
    //console.log('1. event=' + eventObj.type);
    //console.log('1. prev_event=' + _prevEventType);
    //var currentXml = (eventObj.type == 'delete' ? eventObj.oldXml : _prevEventType == 'createui' && eventObj.type == 'move' ? _createXml : null);
    //if (currentXml) {
    //    var toolboxBlocks = WorkScene.workspace.flyout_.blocks_;
    //    var currType = $(currentXml).attr('type');
    //    var currBlock = null;
    //    for (var i = 0; i < toolboxBlocks.length; i++) {
    //        if (currType == toolboxBlocks[i].type) {
    //            currBlock = toolboxBlocks[i];
    //            break;
    //        }
    //    }

    //    var tmpFlag = (_prevEventType == "delete" ? false : true);
    //    currBlock.disabled = tmpFlag;
    //    currBlock.updateDisabled(tmpFlag);
    //    _createXml = null;
    //    _prevEventType = '';
    //}

    //if (eventObj.type == 'create') {
    //    _prevEventType = 'create';
    //    _createXml = eventObj.xml;
    //} else if (_prevEventType != '') {
    //    _prevEventType += eventObj.type;
    //}

    //console.log('2. event=' + eventObj.type);
    //console.log('2. prev_event=' + _prevEventType);

}

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
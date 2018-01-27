'use strict';

var currSceneSymbol = '';
var _globalLibs = [];

function loadSceneLib() {
    var tmpArr = [];
    for (var i = 0; i < _gStageData.blockly.lib.length; i++) {
        tmpArr.push(_gStageData.blockly.lib[i]);
    }

    loadSceneLib_Do(tmpArr);
}

function loadSceneLib_Do(libArr) {
    if (libArr.length > 0) {
        $.getScript(libArr[0], function () {
            libArr.shift();
            loadSceneLib_Do(libArr);
        });
    } else {
        WorkScene.init();
    }
}

function bindEventsToScene(playBtn, shareBtn, fullScreenBtn, refereshBtn) {
    playBtn.click(_playScene);
    shareBtn.click(_shareScene);
    fullScreenBtn.click(_fullScreen);
    refereshBtn.click(_refereshScene);
}

function _shareScene() {
    alert("'Share' will coming soon!");
};

function _fullScreen() {
    WorkScene.fullScreen();
}

function _playScene() {
    if (WorkScene.playableScene()) {
        if ($(this).hasClass('fa-play')) {
            WorkScene.startGame();
            resetPlayBtn('R');
        } else if ($(this).hasClass('fa-undo')) {
            WorkScene.resetScene();
            resetPlayBtn('P');
        }
    }
};

function _playSceneFullScreen() {
    if (WorkScene.playableScene) {
        if ($('.run-scene-fullscreen-play-button').hasClass('fa-play-circle-o')) {
            WorkScene.startGame();
            resetPlayBtn('R');
        } else if ($('.run-scene-fullscreen-play-button').hasClass('fa-undo')) {
            WorkScene.resetScene();
            resetPlayBtn('P');
        }
    }
};

function resetPlayBtn(operation) {
    var toolboxBtn = $('.workspace-tool-item.workspace-play-button');
    var screenBtn = $('.run-scene-fullscreen-play-button');
    if (operation == 'P') {
        toolboxBtn.removeClass('fa-undo');
        screenBtn.removeClass('fa-undo');
        toolboxBtn.addClass('fa-play');
        screenBtn.addClass('fa-play-circle-o');
        toolboxBtn.attr('title', '开始运行');
        screenBtn.attr('title', '开始运行');
    } else {
        toolboxBtn.removeClass('fa-play');
        screenBtn.removeClass('fa-play-circle-o');
        toolboxBtn.addClass('fa-undo');
        screenBtn.addClass('fa-undo');
        toolboxBtn.attr('title', '重新开始');
        screenBtn.attr('title', '重新开始');
    }
}

function _refereshScene() {
    WorkScene.reset(true);
};

var _blockExample = [];
var _highlightCount = 0;
function hightlightExampleBlock() {
    var blocks = WorkScene.workspace.flyout_.blocks_;
    var targetBtn = $(arguments[0].target);
    _highlightCount = 0;
    for (var i = 0; i < blocks.length; i++) {
        if (blocks[i].type == targetBtn.attr("data-target")) {
            _blockExample.push(blocks[i]);
            blocks[i].removeSelect();
        }
    }

    selectBlockExample();
};

function selectBlockExample() {
    if (_highlightCount < 3) {
        for (var i = 0; i < _blockExample.length; i++) {
            _blockExample[i].addSelect();
        }

        setTimeout('unselectBlockExample();', 500);
    }
};

function unselectBlockExample() {
    _highlightCount++;
    for (var i = 0; i < _blockExample.length; i++) {
        _blockExample[i].removeSelect();
    }


    setTimeout('selectBlockExample();', 500);
};
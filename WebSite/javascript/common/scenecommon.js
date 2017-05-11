'use strict';

var currSceneSymbol = '';

function LoadSceneLib(data) {
    if (data.lib.length > 0) {
        $.getScript(data.lib[0], function () {
            data.lib.shift();
            LoadSceneLib(data);
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
    var flag = WorkScene.startGame();
    if (flag) {
        if ($(this).hasClass('fa-play')) {
            $(this).removeClass('fa-play');
            $(this).addClass('fa-undo');
            $(this).attr('title', '重新开始');
            //} else if ($(this).hasClass('fa-stop')) {
            //    $(this).removeClass('fa-stop');
            //    $(this).addClass('fa-undo');
            //    $(this).attr('title', '重新开始');
        } else if ($(this).hasClass('fa-undo')) {
            $(this).removeClass('fa-undo');
            $(this).addClass('fa-play');
            $(this).attr('title', '开始运行');
        }
    }
};

function _playSceneFullScreen() {
    var flag = WorkScene.startGame();
    if (flag) {
        if ($(this).hasClass('fa-play-circle-o')) {
            $(this).removeClass('fa-play-circle-o');
            $(this).addClass('fa-undo');
            $(this).attr('title', '重新开始');
            //} else if ($(this).hasClass('fa-stop-circle-o')) {
            //    $(this).removeClass('fa-stop-circle-o');
            //    $(this).addClass('fa-undo');
            //    $(this).attr('title', '重新开始');
        } else if ($(this).hasClass('fa-undo')) {
            $(this).removeClass('fa-undo');
            $(this).addClass('fa-play-circle-o');
            $(this).attr('title', '开始运行');
        }
    }
};

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
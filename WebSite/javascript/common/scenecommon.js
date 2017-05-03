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
    $('.run-scene-fullscreen').append($('#game_container'));
    $('.run-scene-fullscreen').show("slow", function () {
        setsizeWhenFullScreen();
        addOperatorButton();
    });
};

function setsizeWhenFullScreen() {
    var canvas = $('#game_container').find('canvas');
    $('.run-scene-fullscreen-close-button').attr('data-content', canvas.width() + ',' + canvas.height());
    var tmpHeight = $('.run-scene-fullscreen').height();
    var tmpWidth = $('.run-scene-fullscreen').width();
    $('#game_container').height(tmpHeight);
    $('#game_container').width(tmpWidth);
    var tmpSize = (tmpHeight > tmpWidth) ? tmpWidth : tmpHeight;
    var tmpRate = canvas.height() / canvas.width();
    canvas.height(tmpRate * tmpSize);
    canvas.width(tmpSize);
    $('#game_container').css('padding-left', (tmpWidth - tmpSize) / 2 + 'px');
}

function addOperatorButton() {

}

function _playScene() {
    if (typeof (_blocklyFn) != 'undefined' && _blocklyFn != null) {
        WorkScene.startGame_Fn();
    } else {
        WorkScene.startGame();
    }

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
};

function _playSceneFullScreen() {
    if (typeof (_blocklyFn) != 'undefined' && _blocklyFn != null) {
        WorkScene.startGame_Fn();
    } else {
        WorkScene.startGame();
    }

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
};


function _refereshScene() {
    WorkScene.workspace.clear();
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
'use strict';

var Scene = {
    resetSize: function () {
        var container = $('#game_container');
        window.app.resize(container.width(), container.height());
    },

    reset: function () {
        app.screenManager.gotoScreenByID("GAME");
        app.screenManager.currentScreen.game.setBackground();
    },

    setBackground: function (reset) {
        app.screenManager.currentScreen.game.setBackground("game/toon_pitch_full.jpg");
    },

    startGame: function () {
        if (Blockly.JavaScript.workspaceToCode(WorkScene.WORKSPACE).indexOf("Scene.setBackground();") >= 0) {
            window.setTimeout("showCompleteAlert();", 3000);
        }
    }
};
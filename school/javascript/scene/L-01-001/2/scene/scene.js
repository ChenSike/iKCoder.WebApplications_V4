'use strict';

_gSettings.background_game = "game/toon_pitch_full.jpg";

var Scene = {
    resetSize: function () {
        var container = $('#game_container');
        window.app.resize(container.width(), container.height());
    },

    reset: function () {
        _gloablObj.app.screenManager.gotoScreenByID("GAME");
        _gTeamManager.A.hideAll();
        _gTeamManager.B.hideAll();
    },

    setPlayers: function (reset) {
        _gloablObj.app.game.setAllPlayers();
    },

    startGame: function () {
        if (Blockly.JavaScript.workspaceToCode(WorkScene.WORKSPACE).indexOf("Scene.setPlayers();") >= 0) {
            window.setTimeout("showCompleteAlert();", 3000);
        }
    }
};
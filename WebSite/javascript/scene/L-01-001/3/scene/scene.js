'use strict';

_gSettings.background_game = "game/toon_pitch_full.jpg";
_gSettings.soundMute = false;
_gSettings.neverOver = false;
_gSettings.hideAllTeams = false;
_gSettings.enablePickUP = true;
_gSettings.enablePlay = true;

var Scene = {
    resetSize: function () {
        var container = $('#game_container');
        window.app.resize(container.width(), container.height());
    },

    reset: function () {
        _gloablObj.app.screenManager.gotoScreenByID("GAME");
        _gloablObj.app.game.finish();
        _gloablObj.app.game.reset();
        _gloablObj.app.game.pause();
    },

    startGame: function () {
        _gloablObj.app.game.resume();
    }
};
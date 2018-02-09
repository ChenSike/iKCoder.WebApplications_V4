'use strict';

var Scene = {
    resetSize: function () {
        var container = $('#game_container');
        window.app.resize(container.width(), container.height());
    },

    reset: function () {
        app.screenManager.gotoScreenByID("GAME");
    }
};
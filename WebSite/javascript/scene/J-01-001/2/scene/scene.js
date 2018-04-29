'use strict';
_gSettings.showBall = false;
_gSettings.background_game = "game/toon_pitch_full.jpg";
_gSettings.showHud = false;

var Scene = {
    resetSize: function () {
        var container = $('#game_container');
        window.app.resize(container.width(), container.height());
    },

    reset: function () {
        _gSettings.showBall = false;
        app.screenManager.gotoScreenByID("GAME");
        app.game.teamManagerA.hideAll();
        app.game.teamManagerB.hideAll();
    },

    figures: { panda_bear: 0, grup: 1, fourarms: 2, prohyas: 3, vambre: 4, ben10: 5 },
    setPlayerFigure: function (figure) {
        app.game.teamManagerA.hideAll();
        app.game.teamManagerB.hideAll();
        var tmpIdx = figures[figure] % 3;
        var tmpTeam = figures[figure] > 2 ? 'teamManagerB' : 'teamManagerA';
        app.game[tmpTeam].team.children[tmpIdx].show();
        app.game[tmpTeam].team.children[tmpIdx].position.set(300, 300);
    },

    startGame: function () {

    }
};
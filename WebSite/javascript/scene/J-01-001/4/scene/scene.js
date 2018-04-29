'use strict';

_gSettings.background_game = "game/toon_pitch_full.jpg";
_gSettings.soundMute = true;
_gSettings.neverOver = true;
_gSettings.hideAllTeams = true;
_gSettings.enablePickUP = false;
_gSettings.enablePlay = false;
_gSettings.showBall = true;
_gSettings.showHud = false;
_gSettings.onlyPlayRun = false;
_gSettings.customEvent = true;
_gSettings.customEventTarget = '';
_gSettings.customEventMap = { space: '', ctrl: '', shift: '' };
_gSettings.customEventCharacter = null;
_gSettings.customEventPartner = null;
var Scene = {
    figures: { panda_bear: 0, grup: 1, fourarms: 2, prohyas: 3, vambre: 4, ben10: 5 },
    character: null,
    partner: null,
    moveKeys: { left: '37', right: '39', up: '38', down: '40' },
    actionKeys: { space: '32', ctrl: '17', shift: '16' },
    resetSize: function () {
        var container = $('#game_container');
        window.app.resize(container.width(), container.height());
    },

    initEvents: function () {
        app.game.controller.keyboard._keyCodes['37'].label = '';
        app.game.controller.keyboard._keyCodes['38'].label = '';
        app.game.controller.keyboard._keyCodes['39'].label = '';
        app.game.controller.keyboard._keyCodes['40'].label = '';
    },

    reset: function () {
        _gloablObj.app.screenManager.gotoScreenByID("GAME");
        _gSettings.customEventTarget = '';
        _gSettings.customEventCharacter = null;
        _gSettings.customEventPartner = null;
        app.game.controller.keyboard._keyCodes['37'].label = '';
        app.game.controller.keyboard._keyCodes['38'].label = '';
        app.game.controller.keyboard._keyCodes['39'].label = '';
        app.game.controller.keyboard._keyCodes['40'].label = '';
        app.game.teamManagerA.hideAll();
        app.game.teamManagerA.hideAll();
        Scene.character = null;
        Scene.partner = null;
    },

    setEventTarget: function (figure) {
        _gSettings.customEventTarget = figure;
        var tmpIdx = Scene.figures[figure] % 3;
        var tmpTeam = Scene.figures[figure] > 2 ? 'teamManagerB' : 'teamManagerA';
        Scene.character = app.game[tmpTeam].team.children[tmpIdx];
        _gSettings.customEventCharacter = Scene.character;
        tmpIdx = tmpIdx == 2 ? 0 : tmpIdx + 1;
        Scene.partner = app.game[tmpTeam].team.children[tmpIdx];
        _gSettings.customEventPartner = Scene.partner;

        Scene.character.show();
        Scene.character.position.set(600, 445);
        Scene.character.ballSkills.pickupBall(app.game.ball);

        Scene.partner.show();
        Scene.partner.position.set(800, 445);
    },

    bindMoveEvent: function (key, action) {
        app.game.controller.keyboard._keyCodes[Scene.moveKeys[key]].label = action;
    },

    bindActionEvent: function (key, action) {
        _gSettings.customEventMap[key] = action;
    },

    startGame: function (code) {
    }
};
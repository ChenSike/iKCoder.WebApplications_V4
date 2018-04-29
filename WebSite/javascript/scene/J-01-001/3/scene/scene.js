'use strict';

_gSettings.background_game = "game/toon_pitch_full.jpg";
_gSettings.soundMute = true;
_gSettings.neverOver = true;
_gSettings.hideAllTeams = true;
_gSettings.enablePickUP = false;
_gSettings.enablePlay = false;
_gSettings.showBall = true;
_gSettings.showHud = false;
_gSettings.onlyPlayRun = true;

var Scene = {
    figures: { panda_bear: 0, grup: 1, fourarms: 2, prohyas: 3, vambre: 4, ben10: 5 },
    character: null,
    resetSize: function () {
        var container = $('#game_container');
        window.app.resize(container.width(), container.height());
    },

    reset: function () {
        _gloablObj.app.screenManager.gotoScreenByID("GAME");
        app.screenManager.gotoScreenByID("GAME");
        app.game.teamManagerA.hideAll();
        app.game.teamManagerB.hideAll();
    },

    addPlayer: function (playerObj) {
        var tmpIdx = Scene.figures[playerObj.figure] % 3;
        var tmpTeam = Scene.figures[playerObj.figure] > 2 ? 'teamManagerB' : 'teamManagerA';
        Scene.character = app.game[tmpTeam].team.children[tmpIdx];
        Scene.character.show();
        Scene.character.view3d.animation.play("run");
        Scene.character.position.set(playerObj.position.x, playerObj.position.y);
        Scene.character.ballSkills.pickupBall(app.game.world.game.ball);
        TweenLite.to(Scene.character.position, 2, {
            x: Scene.character.position.x + 1,
            ease: Sine.easeInOut
        });
    },

    timeoutCount: 0,
    startGame: function (code) {
        Scene.timeoutCount = 0;
        var codes = code.split(';\n');
        var funs = [];
        for (var i = 0; i < codes.length; i++) {
            window.setTimeout(codes[i], Scene.timeoutCount);
            if (codes[i].indexOf("Scene.addPlayer") >= 0) {
                Scene.timeoutCount += 1000;
            } else if (codes[i].indexOf("playerObject.runTo") >= 0) {
                Scene.timeoutCount += 5500;
            } else if (codes[i].indexOf("playerObject.shot") >= 0) {
                Scene.timeoutCount += 10000;
            } else if (codes[i].indexOf("playerObject.tackle") >= 0) {
                Scene.timeoutCount += 1000;
            }
        }
    }
};

var playerClass = function (figure, ix, iy) {
    this.figure = figure;
    this.position = { x: ix, y: iy };
}

playerClass.prototype.runTo = function (x, y) {
    Scene.character.ballSkills.pickupBall(app.game.world.game.ball);
    TweenLite.to(Scene.character.body.position, 5, {
        x: x,
        y: y,
        ease: Sine.easeInOut
    });
};

playerClass.prototype.shot = function (level) {
    level = level > 10 ? 2000 : 200 * level;
    Scene.character.shootBegin(app.game.goalRight);
    window.setTimeout('Scene.character.shootRelease(app.game.goalRight);', level);
};

playerClass.prototype.tackle = function () {
    Scene.character.ballSkills.pickupBall(app.game.world.game.ball);
    Scene.character.slideTackle();
};

WorkScene.startGame = function () {
    try {
        var code = $('#iframe_CodeEditor')[0].contentWindow.editor.getValue();
        if (code == "") {
            code = Blockly.JavaScript.workspaceToCode(this.WORKSPACE);
        }

        Scene.startGame(code);
    }
    catch (ex) {

    }
};
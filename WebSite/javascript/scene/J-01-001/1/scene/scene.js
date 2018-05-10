'use strict';
_gSettings.showBall = false;
_gSettings.positionCount = 6;
_gSettings.showHud = false;
_gSettings.background_game = "game/toon_pitch_full_1.jpg";

var Scene = {
    resetSize: function () {
        var container = $('#game_container');
        window.app.resize(container.width(), container.height());
    },

    reset: function () {
        _gSettings.showBall = false;
        app.screenManager.gotoScreenByID("GAME");
        app.screenManager.currentScreen.game.setBackground();
        app.game.teamManagerA.hideAll();
        app.game.teamManagerB.hideAll();
    },

    setBackground: function (reset) {
        app.screenManager.currentScreen.game.setBackground("game/toon_pitch_full.jpg");
    },

    setFootball: function () {
        _gSettings.showBall = true;
    },

    startGame: function () {
        //var code_bg = "Scene.setBackground();";
        //var code_ball = "Scene.setFootball();";
        //var code_pos = "Scene.setPlayer(";
        //var posArr = app.game.positionSymbols;
        //var code = Blockly.JavaScript.workspaceToCode(WorkScene.WORKSPACE);
        //if (code.indexOf(code_bg) >= 0) {
        //    if (code.indexOf(code_ball) >= 0) {
        //        var posX, posY, tmpCode, flag, conFlag;
        //        var passPos = [];
        //        for (var i = 0; i < 6; i++) {
        //            flag = false;
        //            for (var j = 0; j < 6; j++) {
        //                conFlag = false;
        //                for (var k = 0; k < passPos.length; k++) {
        //                    if (j == passPos[k]) {
        //                        conFlag = true;
        //                        break;
        //                    }
        //                }

        //                if (conFlag) {
        //                    continue;
        //                }

        //                posX = posArr[j].params.x;
        //                posY = posArr[j].params.y;
        //                tmpCode = code_pos + i + ', ' + posX + ', ' + posY + ')';
        //                if (code.indexOf(tmpCode) >= 0) {
        //                    flag = true;
        //                    passPos.push(j);
        //                }
        //            }

        //            if (!flag) {
        //                showFaildAlert();
        //                return;
        //            }
        //        }

        //        window.setTimeout("showCompleteAlert();", 3000);
        //    }
        //}

        //showFaildAlert();
    },

    setPlayer: function (index, x, y) {
        var tmpIdx = index % 3;
        var tmpTeam = index > 2 ? 'teamManagerA' : 'teamManagerA';
        app.game[tmpTeam].team.children[tmpIdx].show()
        app.game[tmpTeam].team.children[tmpIdx].position.set(x, y);
    }
};
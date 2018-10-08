function getGlobalSettingFn(t, e) {
    "use strict";
    t.exports = {
        GAME: {
            TIME: 0.1
        },
        PLAYER_STATE: {
            IDLE: 0,
            RUN: 1,
            FREE_RUN: 2,
            WIN: 3,
            LOSE: 4,
            TACKLE: 5,
            FALL: 6,
            KICK_CHARGE: 7,
            KICK: 8,
            HIDE: 9,
            SHOW: 10
        },
        KEEPER_STATE: {
            IDLE: 0,
            DIVE: 1,
            CLOSING_DOWN: 2
        },
        TEAM_STATE: {
            ATTACKING: 0,
            DEFENDING: 1,
            ATTACK_IDLE: 2,
            KICK_OFF: 3,
            DEFEND_IDLE: 4,
            SCORED: 5,
            LOST: 6,
            TUTORIAL_TACKLE: 7,
            TUTORIAL_IDLE: 8
        },
        END_STATE: {
            WIN: 0,
            LOSE: 1,
            DRAW: 2
        }
    }
}

var URL_HEADER = {
    IMAGE: 'football/image/',
    SOUND: 'football/media/',
    CSS: 'style/',
    FONT: 'fonts/',
    DATA: 'football/data/'
};
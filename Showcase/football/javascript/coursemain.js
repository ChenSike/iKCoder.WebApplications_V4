'use strict';

var ENV = window.ENV = {};
globalWrapFn(argumentFn);
function startGame() {
    if (_gloablObj && _gloablObj.app) {
        window.SoundManager.music.mute();
        hideLoadingMask();
        _gloablObj.app.titleScreen.alpha = 0;
        _gloablObj.app.breadcrumb.next();
        _gloablObj.app.breadcrumb.next();
        _gloablObj.app.breadcrumb.next();
        _gloablObj.app.breadcrumb.next();
        _gloablObj.app.screenManager.gotoScreenByID("GAME");
        _gloablObj.app.breadcrumb.hide();
    } else {
        window.setTimeout(startGame, 500);
    }
}

window.setTimeout(startGame, 500);
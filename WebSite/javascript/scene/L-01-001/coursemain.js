'use strict';

var ENV = window.ENV = {};
window.ENV = {};
globalWrapFn(argumentFn);

function startGame() {
    if (_gloablObj && _gloablObj.app) {
        ////_gloablObj.app.titleScreen.alpha = 0
        _gloablObj.app.breadcrumb.next();
        _gloablObj.app.breadcrumb.next();
        _gloablObj.app.breadcrumb.next();
        _gloablObj.app.breadcrumb.next();
        _gloablObj.app.teamReviewScreen.playButton.mouseup();
    } else {
        window.setTimeout(startGame, 500);
    }
}

window.setTimeout(startGame,1000);
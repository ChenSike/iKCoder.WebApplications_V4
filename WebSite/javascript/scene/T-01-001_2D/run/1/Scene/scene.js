Scene = {};
Scene.Game = null;


Scene.init = function (containerId, model, configs) {
    //this.container = document.getElementById(containerId);
    //if (this.container != null) {
    //    var height = $(this.container).height();
    //    var width = $(this.container).width();
    //    var newSize = Scene.adjustSize(width, height);
    //    onInitRun(newSize.w, newSize.h);
    //}
};

Scene.adjustSize = function (width, height) {
    var minRate = Math.min(1286 / width, 640 / height);
    width = 1286 / minRate;
    height = 640 / minRate;
    return { w: width, h: height };
};

Scene.resetSize = function () {
    var container = $(this.container);
    Scene.adjustSize(container.width(), container.height());
};

Scene.start = function () {

};

Scene.reset = function () {
    IKCoderSenceRun_Reset();
};

Scene.restart = function () {
    Scene.Game.restart();
};

Scene.startGame = function () {
    IKCoderSenceRun_RunActions();
};

Scene.pause = function () {
    Scene.Game.pause();
};

Scene.AllowStart = function () {
    //IKCoderSenceRun_Set_SwitchToStart();
    this.container = document.getElementById('game_container');
    if (this.container != null) {
        if ($(this.container).find('canvas').length > 0) {
            $(this.container).find('canvas').remove();
        }

        var height = $(this.container).height();
        var width = $(this.container).width();
        var newSize = Scene.adjustSize(width, height);
        onInitRun(newSize.w, newSize.h);
        i_status_control = "1";
    }
};

Scene.CallIKCoderRun_Set_RunningStep = function () {
    IKCoderSenceRun_Set_AddRun();
};

Scene.CallIKCoderRun_Set_JumpStep = function () {
    IKCoderSenceRun_Set_AddJump();
};

Scene.CallIKCoderRun_Set_JudegeMent = function (callbackparam) {
    IKCoderSenceRun_Set_AddJudegBarrier(callbackparam);
};

Scene.ResetConfig = function () {
    _loadBackground = false;
    _loadPlayer = false;
    _loadProps = false;
    _loadObstacle = false;
};

Scene.SetBackground = function () {
    _loadBackground = true;
};

Scene.SetRandomObstacle = function () {
    _loadObstacle = true;
};

Scene.SetRandomProp = function () {
    _loadProps = true;
};

Scene.SetPlayer = function () {
    _loadPlayer = true;
};
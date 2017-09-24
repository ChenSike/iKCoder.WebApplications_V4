Scene = {};
Scene.Game = null;

Scene.init = function (containerId, model, configs) {
    _loadBackground = false;
    _loadPlayer = false;
    _loadProps = false;
    _loadObstacle = false;
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
    this.container = document.getElementById('game_container');
    if (this.container != null) {
        if ($(this.container).find('canvas').length > 0) {
            $(this.container).find('canvas').remove();
        }

        var height = $(this.container).height();
        var width = $(this.container).width();
        var newSize = Scene.adjustSize(width, height);
        onReady(newSize.w, newSize.h);
    }
};

Scene.reset = function () {
    this.container = document.getElementById('game_container');
    if (this.container != null) {
        if ($(this.container).find('canvas').length > 0) {
            $(this.container).find('canvas').remove();
        }

        Scene.ResetConfig();
        game = null;
        loadInterval = false;
        loadCount = 0;
        gameMode = 0;
    }
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
'use strict';

var _gApplication = null;
var _gWidth = 800;
var _gHeight = 600;
var _gLoadingRes = { bg: null, barFill: null, barFrame: null, bar: null };
var _gStage = [];
var _gResource = {};
var _gContainer = null;
var _gConfig = { containerId: '', bgColor: '', transparent: null, resources: null, ticker: null, loading: null };
var _gLoadedCount = 0;
var _gResTotalCount = 0;

function initEnvironment(config) {
    _gConfig = parseConfig(config);
    _gContainer = $('#' + _gConfig.containerId);
    _gWidth = _gContainer.width();
    _gHeight = _gContainer.height();
    _gApplication = new PIXI.Application(_gWidth, _gHeight, {
        backgroundColor: _gConfig.bgColor,
        transparent: _gConfig.transparent
    });

    _gContainer.append(_gApplication.view);

    _gApplication.ticker.add(function (delta) {
        _gConfig.ticker(delta);
    });

    _gStage = _gApplication.stage;
    showLoadingScreen();
    _gResource = loadResource(_gConfig.resources);
};

//if you want to custom the loading screen, please override the showLoadingScreen;
function showLoadingScreen() {
    _gLoadingRes = { bg: null, barFill: null, barFrame: null, bar: null };
    _gLoadingRes.bg = createResourceObj(_gConfig.loading.bg);
    _gLoadingRes.bg.sprite.width = +_gWidth;
    _gLoadingRes.bg.sprite.height = _gHeight;
    _gStage.addChild(_gLoadingRes.bg.sprite);

    _gLoadingRes.barFrame = createResourceObj(_gConfig.loading.barFrame);
    _gLoadingRes.barFrame.sprite.position.set(_gWidth / 2, _gHeight / 2);
    _gStage.addChild(_gLoadingRes.barFrame.sprite);

    _gLoadingRes.bar = createResourceObj(_gConfig.loading.bar);
    _gLoadingRes.bar.sprite.position.set(_gWidth / 2, _gHeight / 2);
    _gStage.addChild(_gLoadingRes.bar.sprite);

    _gLoadingRes.barFill = createResourceObj(_gConfig.loading.barFill);
    var tmpX = (_gWidth - _gLoadingRes.bar.sourceSize.w) / 2;
    var tmpY = (_gHeight - _gLoadingRes.bar.sourceSize.h + _gLoadingRes.barFill.sourceSize.h) / 2;
    _gLoadingRes.barFill.sprite.position.set(tmpX, tmpY);
    _gLoadingRes.barFill.sprite.width = _gLoadingRes.bar.barMin;
    _gStage.addChild(_gLoadingRes.barFill.sprite);
};

//if you want to custom the loading process screen, please override the loadingProcess;
function loadingProcess() {
    if (_gLoadedCount < _gResTotalCount) {
        if (_gLoadingRes && _gLoadingRes.bg && _gLoadingRes.barFill && _gLoadingRes.barFrame && _gLoadingRes.bar) {
            _gLoadingRes.barFill.sprite.width += _gLoadingRes.barFill.step;
            _gLoadingRes.barFill.sprite.position.set(_gLoadingRes.barFill.sprite.position.x + _gLoadingRes.barFill.step / 2, _gLoadingRes.barFill.sprite.position.y);
        }
    } else {
        //showStartScreen();
    }

    _gLoadedCount++;
};

function parseConfig(config) {
    if (typeof (config) == "string") {
        config = jQuery.parseJSON(config);
    }

    var newConfig = jQuery.extend(true, _gConfig, config);
    if (newConfig.containerId == '') {
        newConfig.containerId = "container_pixi_app";
    }

    if (newConfig.bgColor == '') {
        newConfig.bgColor = 0xffffff;
    }

    if (!newConfig.resources) {
        newConfig.resources = {};
    }

    if (!newConfig.ticker) {
        newConfig.ticker = function (delta) { };
    }

    if (newConfig.transparent == null) {
        newConfig.transparent = true;
    }

    if (newConfig.loadingFn == null) {
        newConfig.loadingFn = function () { };
    }

    return newConfig;
};

function getResourceCount(resources) {
    var retVal = 0;
    for (var key in resources) {
        if (typeof (resources[key].path) == "string") {
            retVal++;
        } else {
            retVal += getResourceCount(resources[key]);
        }
    }

    return retVal;
};

function loadResource(resources) {
    _gResTotalCount = getResourceCount(resources);
    _gLoadingRes.barFill.step = (_gLoadingRes.bar.barMax - _gLoadingRes.bar.barMin) / _gResTotalCount;
    return loadResourceDo(resources);
};

function loadResourceDo(resources, resourceCount) {
    var retVal = {};
    for (var key in resources) {
        retVal[key] = {};
        retVal[key] = createResourceObj(resources[key]);
        if (typeof (resources[key].path) == "string" && resources[key].path != "") {
            retVal[key].children = [];
            loadingProcess();
        } else {
            retVal[key].children = loadResourceDo(resources[key]);
        }
    }

    return retVal;
};

function createResourceObj(resourceObj) {
    var retObj = {
        sprite: null,
        anchor: { x: 0, y: 0 },
        frame: { x: 0, y: 0, w: 0, h: 0 },
        rotated: false,
        trimmed: false,
        sourceSize: { w: 0, h: 0 },
        position: { x: 0, y: 0 },
        pivot: { x: 0, y: 0 }
    };

    retObj = jQuery.extend(true, retObj, resourceObj);

    if (typeof (resourceObj.anchor) == 'number') {
        retObj.anchor = { x: resourceObj.anchor, y: resourceObj.anchor };
    } else if (typeof (resourceObj.anchor) == 'object') {
        if (resourceObj.anchor != null && typeof (resourceObj.anchor.x) == 'number' && typeof (resourceObj.anchor.y) == 'number') {
            retObj.anchor = { x: resourceObj.anchor.x, y: resourceObj.anchor.y };
        }
    }

    if (typeof (resourceObj.frame) == 'object') {
        if (typeof (resourceObj.frame.x) == 'number') {
            retObj.frame.x = resourceObj.frame.x;
        }

        if (typeof (resourceObj.frame.y) == 'number') {
            retObj.frame.y = resourceObj.frame.y;
        }

        if (typeof (resourceObj.frame.w) == 'number') {
            retObj.frame.w = resourceObj.frame.w;
        }

        if (typeof (resourceObj.frame.h) == 'number') {
            retObj.frame.h = resourceObj.frame.h;
        }
    }

    if (typeof (resourceObj.sourceSize) == 'object') {
        if (typeof (resourceObj.sourceSize.w) == 'number') {
            retObj.sourceSize.w = resourceObj.sourceSize.w;
        }

        if (typeof (resourceObj.sourceSize.h) == 'number') {
            retObj.sourceSize.h = resourceObj.sourceSize.h;
        }
    }

    if (typeof (resourceObj.position) == 'object') {
        if (typeof (resourceObj.position.x) == 'number') {
            retObj.position.x = resourceObj.position.x;
        }

        if (typeof (resourceObj.position.y) == 'number') {
            retObj.position.y = resourceObj.position.y;
        }
    }

    if (typeof (resourceObj.pivot) == 'object') {
        if (typeof (resourceObj.pivot.x) == 'number') {
            retObj.pivot.x = resourceObj.pivot.x;
        }

        if (typeof (resourceObj.pivot.y) == 'number') {
            retObj.pivot.y = resourceObj.pivot.y;
        }
    } else {
        retObj.pivot.x = retObj.sourceSize.w / 2;
        retObj.pivot.y = retObj.sourceSize.h / 2;
    }

    if (resourceObj.rotated === true) {
        retObj.rotated = true;
    }

    if (resourceObj.trimmed === true) {
        retObj.trimmed = true;
    }

    if (typeof (resourceObj.path) == "string" && resourceObj.path != "") {
        var texture = PIXI.Texture.fromImage(resourceObj.path);
        var sprite = new PIXI.Sprite(texture);
        sprite.anchor.set(retObj.anchor.x, retObj.anchor.y);
        sprite.position.set(retObj.position.x, retObj.position.y);
        sprite.pivot.set(retObj.pivot.x, retObj.pivot.y);
        retObj.sprite = sprite;
    } else {
        retObj.sprite = null;
    }

    return retObj;
};

function addResourceToStage(resources, container) {
    for (var key in resources) {
        if (resources[key].children.length == 0) {
            container.addChild(resources[key].sprite);
        } else {
            var tmpContainer = new PIXI.Container();
            container.addChild(tmpContainer);
            addResourceToStage(resources[key], tmpContainer);
        }
    }
};

function clearStage() {
    _gStage.removeChild();
    _gStage.removeAllListeners();
};

function loadNewStage(config) {
    clearStage();
    _gConfig = parseConfig(config);
    _gResource = loadResource(_gConfig.resources);
    addResourceToStage(_gResource, _gStage);
};

//if you want to custom the start screen, please override the showStartScreen;
function showStartScreen() {
    _gApplication.stage.removeAllListeners();
    _gApplication.stage.removeChildren();

};
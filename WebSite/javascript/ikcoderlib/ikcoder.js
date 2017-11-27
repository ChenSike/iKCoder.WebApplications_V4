'use strict';

var _gApplication = null;
var _gWidth = 800;
var _gHeight = 600;
var _gLoadingRes = {};
var _gStage = [];
var _gResource = {};
var _gContainer = null;
var _gConfig = { containerId: '', bgColor: '', transparent: null, resources: null, ticker: null, loading: null };
var _gLoadedCount = 0;
var _gTotalCount = 0;


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
    _gLoadingRes = initLoading();
    _gResource = loadResource(_gConfig.resources);
};

function initLoading() {
    var loadingRes = { bg: {}, bar: {}, barWrap: {} };
    loadingRes.bg.sprite = createSprite(config.loading.bg);
    loadingRes.bg.sprite.width = _gWidth;
    loadingRes.bg.sprite.height = _gHeight;
    _gStage.addChild(loadingRes.bg.sprite);

    loadingRes.barWrap.sprite = createSprite(config.loading.barWrap);    
    loadingRes.barWrap.sprite.x = _gWidth/2;
    loadingRes.barWrap.sprite.y = _gHeight/2;
    _gStage.addChild(loadingRes.barWrap.sprite);

    loadingRes.bar.sprite = createSprite(config.loading.bar);
    loadingRes.bar.sprite.x = wrapPosX - loadingRes.barWrap.sprite.width / 2;
    loadingRes.bar.sprite.y = wrapPosY;
    loadingRes.bar.sprite.width = 20;
    //loadingRes.bar.sprite.anchor.set(0.5);
    _gStage.addChild(loadingRes.bar.sprite);

    return loadingRes;
}

function loadingFunction() {
    //_gLoadingRes.bar.sprite.width += 20;
}

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
}

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
}

function loadResource(resources) {
    _gTotalCount = getResourceCount(resources);
    return loadResourceDo(resources);
}

function loadResourceDo(resources, resourceCount) {
    var retVal = {};
    for (var key in resources) {
        retVal[key] = {};
        if (typeof (resources[key].path) == "string") {
            retVal[key].sprite = createSprite(resources[key]);
            retVal[key].children = [];
            _gLoadedCount++;
            loadingFunction();
        } else {
            retVal[key].sprite = null;
            retVal[key].children = loadResourceDo(resources[key]);
            retVal[key].anchor = (typeof (resources[key].anchor) != 'undefined' && resources[key].anchor ? resources[key].anchor : 1);
            retVal[key].x = (typeof (resources[key].x) != 'undefined' && resources[key].x ? resources[key].x : 0);
            retVal[key].y = (typeof (resources[key].y) != 'undefined' && resources[key].y ? resources[key].y : 0);
        }
    }

    return retVal;
};

function createSprite(resourceObj) {
    var texture = PIXI.Texture.fromImage(resourceObj.path);
    var sprite = new PIXI.Sprite(texture);
    if (typeof (resourceObj.anchor) == 'number') {
        sprite.anchor.set(resourceObj.anchor);
    } else if (typeof (resourceObj.anchor) == 'object') {
        if (resourceObj.anchor != null && typeof (resourceObj.anchor.x) == 'number' && typeof (resourceObj.anchor.y) == 'number') {
            sprite.anchor.set(resourceObj.anchor.x, resourceObj.anchor.y);
        }
    } else if (typeof (resourceObj.anchor) == 'undefined') {
        sprite.anchor.set(0.5);
    }

    sprite.x = (typeof (resourceObj.x) != 'undefined' && resourceObj.x ? resourceObj.x : 0);
    sprite.y = (typeof (resourceObj.y) != 'undefined' && resourceObj.y ? resourceObj.y : 0);
    return sprite;
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
'use strict';

var Scene = {};

Scene.defaultDATA = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

Scene.mapDATA = [];

Scene.initEnvironment = function (containerId) {
    Engine.params = {
        fog: null,
        camera: {
            fov: 45,
            aspect: 1,
            near: 1,
            far: 2000,
            px: 0,
            py: _itemSize * _rowCount - 50,
            pz: _itemSize * _rowCount + 50,
            vector: { x: 0, y: 0, z: 0 }
        },
        renderer: {
            antialias: true,
            precision: 'highp',
            alpha: true,
            premultipliedAlpha: false,
            stencil: false,
            preserveDrawingBuffer: true,
            maxLights: 1,
            enableShadowMap: true,
            shadowMapType: null,
            clearColor: '#b44b39',
            clearAlpha: 0
        },
        lights: {
            globalLight: { type: 'ambient', color: '#ffffff', intensity: 0.25, adjustFn: null },
            pointLight: {
                type: 'point',
                color: '#ffffff',
                intensity: 0.85,
                distance: 0,
                adjustFn: function (pointLight) {
                    pointLight.position.x = 0;
                    pointLight.position.y = 200;
                    pointLight.position.z = 200;
                }
            }
        },
        modules: [
            Floor
        ],
        //backgroundAudio: ['../resource/sounds/sound_1.mp3'],
        grid: {
            type: 'xz',
            line: '#000000',
            base: '#FF0000',
            step: 20,
            scope: 500
        }
    };

    Engine.initScreenAnd3D(containerId);
    Engine.prepareForStart();
    Scene.initMap();
    Scene.initPlayer(5, 5);
};

Scene.initMap = function () {
    var tmpX, tmpZ, tmpKey;
    var halfWidth = _colCount * _itemSize / 2;
    var halfHeight = _rowCount * _itemSize / 2;
    for (var i = 0; i < Scene.defaultDATA.length; i++) {
        tmpZ = i * _itemSize - halfWidth + _itemSize / 2;
        var rowData = [];
        for (var j = 0; j < Scene.defaultDATA[i].length; j++) {
            tmpX = j * _itemSize - halfHeight + _itemSize / 2;
            tmpKey = '';
            if (Scene.defaultDATA[i][j] == 0) {
                tmpKey = Engine.addModuleObject(new Bean(), tmpX, null, tmpZ);
            } else if (Scene.defaultDATA[i][j] == 1) {
                tmpKey = Engine.addModuleObject(new Wall(), tmpX, null, tmpZ);
            } else if (Scene.defaultDATA[i][j] == 2) {
                tmpKey = Engine.addModuleObject(new Goods(), tmpX, null, tmpZ);
            }

            rowData.push({ t: Scene.defaultDATA[i][j], s: tmpKey });
        }

        Scene.mapDATA.push(rowData);
    }
};

Scene.initPlayer = function (x, y) {
    var tmpX = x * _itemSize - _colCount * _itemSize / 2 + _itemSize / 2;
    var tmpZ = y * _itemSize - _rowCount * _itemSize / 2 + _itemSize / 2;
    var tmpKey = Engine.addModuleObject(new PACMan(), tmpX, null, tmpZ);
    Scene.getPlayer.coord = { x: x, y: y, px: tmpX, py: tmpZ };
    if (Scene.mapDATA[y][x].t == 0 || Scene.mapDATA[y][x].t == 2) {
        Engine.removeModuleObject(Scene.mapDATA[y][x].s);
    }

    Scene.mapDATA[y][x] = { t: '', s: tmpKey };
};

Scene.initGlobalParams = function (defaultData) {
    if (typeof mapData != 'undefined') {
        Scene.defaultDATA = defaultData;
    }

    _colCount = Scene.defaultDATA[0].length;
    _rowCount = Scene.defaultDATA.length;
};

Scene.coordToPosition = function (x, y) {
    var tmpX = x * _itemSize - _colCount * _itemSize / 2 + _itemSize / 2;
    var tmpY = y * _itemSize - _rowCount * _itemSize / 2 + _itemSize / 2;
    return { px: tmpX, py: tmpY };
};

Scene.positionToCoord = function (px, py) {
    var tmpX = (px - _itemSize / 2 + _colCount * _itemSize / 2) / _itemSize;
    var tmpY = (py - _itemSize / 2 + _rowCount * _itemSize / 2) / _itemSize;
    return { x: tmpX, y: tmpY };
};

Scene.checkCollide = function (px, py) {

}

Scene.getPlayer = function () {
    return Engine.modules['pacman'];
};

Scene.start = function (containerId) {
    //Engine.startScene();
};
'use strict';

var Scene = {};
Scene.initEnvironment = function (containerId) {
    var params = {
        fog: null,
        camera: {
            fov: 45,
            aspect: 1,
            near: 1,
            far: 2000,
            px: 0,
            py: 35 * 15 * 0.9,
            pz: 35 * 15 * 1.2,
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
                    pointLight.position.y = 720;
                    pointLight.position.z = 720;
                }
            }
        },
        modules: [
        ],
        //backgroundAudio: ['../resource/sounds/sound_1.mp3'],
        //grid: {
        //    type: 'xz',
        //    line: '#000000',
        //    base: '#FF0000',
        //    step: 35,
        //    scope: 700
        //}
        grid: null,
        sizes: { w: 1440, h: 1440 }
    };

    Engine.initScreenAnd3D(containerId, params);
    Engine.prepareForStart();
};

Scene.start = function () {
    Engine.startScene();
};

Scene.reset = function () {
    Engine.resetScene();
};

Scene.end = function () {
    Engine.sceneOver();
};

Scene.pause = function () {
    Engine.pauseScene();
};

Scene.resetSize = function () {
    try {
        Engine.calcWorldScale();
    }
    catch (ex) {
    }
};

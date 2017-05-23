'use strict';

function adjustPointLight(pointLight) {
    pointLight.position.x = 0;
    pointLight.position.y = 0;
    pointLight.position.z = 500;
}

function initEnvironment(containerId) {
    var params = {
        fog: null,
        camera: {
            fov: 90,
            aspect: 1,
            near: 1,
            far: 2000,
            px: 0,
            py: 0,
            pz: 500,
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
            clearColor: 'rgb(213,213,213)',
            clearAlpha: 0
        },
        lights: {
            globalLight: { type: 'ambient', color: '#ffffff', intensity: 0.3, adjustFn: null },
            pointLight: { type: 'point', color: '#ffffff', intensity: 0.8, distance: 0, adjustFn: adjustPointLight }
        },
        modules: [
            Brush
        ],
        backgroundAudio: [],//['../resource/sounds/sound_1.mp3'],
        audios: {},
        intervals: {},
        grid: {
            type: 'xy',
            line: '#000000',
            base: '#FF0000',
            step: 20,
            scope: 500
        }
    };

    Engine.initParams(params);
    Engine.initScreenAnd3D(containerId);
    Engine.prepareForStart();
    Engine.startScene();
}

function getBrush(){
    for (var key in Engine.modules) {
        if (Engion.modules[key].type == 'brush') {
            return Engion.modules[key];
        }
    }

    return null;
}
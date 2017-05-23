'use strict';

function initEnvironment(containerId) {
    Engine.params = {
        fog: null,
        camera: {
            fov: 45,
            aspect: 1,
            near: 1,
            far: 2000,
            px: 0,
            py: 300,
            pz: 300,
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
            globalLight: { type: 'ambient', color: '#ffffff', intensity: 0.2, adjustFn: null },
            pointLight: { type: 'point', color: '#ffffff', intensity: 0.8, distance: 0, adjustFn: adjustPointLight }
        },
        modules: [
            Floor
        ],
        backgroundAudio: ['../resource/sounds/sound_1.mp3'],
        grid: {
            type: 'xz',
            line: '#000000',
            base: '#FF0000',
            step: 10,
            scope: 500
        }
    };

    Engine.initScreenAnd3D(containerId);
    Engine.prepareForStart();
    //Engine.startScene();
}

function adjustPointLight(pointLight) {
    pointLight.position.x = 0;
    pointLight.position.y = 200;
    pointLight.position.z = 200;
    //pointLight.position.set(20, 30, 50);
}

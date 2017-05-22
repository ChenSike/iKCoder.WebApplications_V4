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
            py: 200,
            pz: 200,
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
            globalLight: { type: 'ambient', color: '#ffffff', intensity: 0.5, adjustFn: null },
            //shadowLight: { type: 'directional', color: '#ffffff', intensity: 1, adjustFn: adjustShadowLight }
            //pointLight: { type: 'point', color: '#ffffff', intensity: 1, distance: 0, adjustFn: adjustPintLight }
            spotLight: { type: 'spot', color: '#ffffff', intensity: 1, angle: Math.PI / 4, exponent: 0, distance: 0, adjustFn: adjustSpotLight }
        },
        modules: [
            Floor
        ],
        backgroundAudio: ['../resource/sounds/sound_1.mp3']
    };

    Engine.initScreenAnd3D(containerId);
    Engine.startScene();
}

function adjustShadowLight(shadowLight) {
    //shadowLight.position.set(-30, 40, 20);
    //shadowLight.castShadow = true;
    //shadowLight.shadow.camera.left = -400;
    //shadowLight.shadow.camera.right = 400;
    //shadowLight.shadow.camera.top = 400;
    //shadowLight.shadow.camera.bottom = -400;
    //shadowLight.shadow.camera.near = 1;
    //shadowLight.shadow.camera.far = 2000;
    //shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2048;
}

function adjustPintLight(pointLight) {
    pointLight.position.x = 0;
    pointLight.position.y = 10;
    pointLight.position.z = 50;
}

function adjustSpotLight(spotLight) {
    spotLight.castShadow = true;
    spotLight.position.y = 10;
    spotLight.position.z = 50;
    spotLight.position.x = 10;
}
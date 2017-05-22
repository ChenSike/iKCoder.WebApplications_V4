'use strict';

function initEnvironment() {
    Engine.params = {
        fog: {
            color: '#d6eae6',
            near: 160,
            far: 350,
            start: null,
            end: null,
            ratio: null,
            conc: null
        },
        camera: {
            fov: 50,
            aspect: 1,
            near: 1,
            far: 2000,
            px: 0,
            py: 160,
            pz: 30,
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
            globalLight: { type: 'ambient', color: '#ffffff', intensity: 0.9, adjustFn: null },
            shadowLight: { type: 'directional', color: '#ffffff', intensity: 1, adjustFn: adjustShadowLight }
        },
        modules: [],
        backgroundAudio: ['resource/sounds/sound_1.mp3']
    };


}

function adjustShadowLight(shadowLight) {
    shadowLight.position.set(-30, 40, 20);
    shadowLight.castShadow = true;
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 2000;
    shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2048;
}
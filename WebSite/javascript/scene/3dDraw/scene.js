'use strict';

var Scene = {};
var tubeMesh;
Scene.initEnvironment = function (containerId) {
    Scene.initGlobalParams();
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
            clearAlpha: 1
        },
        lights: {
            globalLight: { type: 'ambient', color: '#ffffff', intensity: 0.3, adjustFn: null },
            pointLight: {
                type: 'point',
                color: '#ffffff',
                intensity: 0.85,
                distance: 0,
                adjustFn: function (pointLight) {
                    pointLight.position.x = 0;
                    pointLight.position.y = 0;
                    pointLight.position.z = 500;
                }
            }
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
            scope: 1000
        }
    };

    Engine.initScreenAnd3D(containerId, params);
    Engine.prepareForStart();
    Scene.Brush = Scene.getBrush();
    Scene.Brush.setBuildBackgroundFn(function () {
        Scene.Brush.buildBackgroundLine(0, 0, 10, 5, 5, '#000000');
        Scene.Brush.buildBackgroundLine(0, 0, 10, -5, 5, '#000000');
        Scene.Brush.buildBackgroundLine(0, 0, -10, -5, 5, '#000000');
        Scene.Brush.buildBackgroundLine(0, 0, -10, 5, 5, '#000000');
        //Scene.Brush.buildBackgroundLine(-10, -5,0, 0,  5, '#000000');


    });
    Scene.Brush.prepareBackground();
};

Scene.initGlobalParams = function () {
};

Scene.initModuelPath = function (moduleType) {
    //Engine.modules[moduleType].initMovePath();
};

Scene.addModuelPath = function (moduleType, type, value) {
};

Scene.getBrush = function () {
    return Engine.modules['brush'];
}

Scene.start = function () {
    Engine.startScene();
};

Scene.reset = function () {
    Scene.Brush.reset();
    Engine.resetScene();
};

Scene.resetMap = function () {
};

Scene.resetSize = function () {
    try {
        Engine.calcWorldScale();
    }
    catch (ex) {

    }
};

Scene.move = function (orientation, steps) {
};

Scene.startGame = function () {
    Scene.start();
    Scene.Brush.moveTo(5, 5);
    Scene.Brush.lineTo(10, 10);
    Scene.Brush.setColor('#00ff00');
    Scene.Brush.lineTo(10, 5);
    Scene.Brush.setLineWidth(10);
    Scene.Brush.lineTo(5, 10);
    Scene.Brush.lineRotate(60, true);
    Scene.Brush.startDraw();
};

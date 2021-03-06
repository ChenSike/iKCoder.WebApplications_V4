﻿'use strict';

var Scene = {};
var patternPoint = [-15, 0, -7, 0,-7, 0, -11, 6.928, -11, 6.928, -15, 0, -15, 0, -7, 0,-7, 0, -11, -6.928, -11, -6.928, -15, 0, -15, 0, -7, 0, -7, 0, 1, 0, 1, 0, -3, 6.928, -3, 6.928, -7, 0,-7, 0, 1, 0, 1, 0, -3, -6.928, -3, -6.928, -7, 0, -7, 0, 1, 0, 1, 0, 9, 0, 9, 0, 5, 6.928,5, 6.928, 1, 0, 1, 0, 9, 0, 9, 0, 5, -6.928, 5, -6.928, 1, 0,1, 0, 9, 0, 9, 0, 17, 0, 17, 0, 13, 6.928, 13, 6.928, 9, 0,9, 0, 17, 0, 17, 0, 13, -6.928, 13, -6.928, 9, 0, 9, 0, 17, 0];

Scene.initEnvironment = function (containerId) {
    var browserWidth = $(window).width();
    changeSiderBarWidth(browserWidth/2);
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
            base: '#FF6666',//FF0000
            step: 20,
            scope: 500
        }
    };

    Engine.initScreenAnd3D(containerId, params);
    Engine.prepareForStart();
    Scene.Brush = Scene.getBrush();
    Scene.Brush.setBuildBackgroundFn(function () {
        //4个正方形---边长 = 8
        Scene.Brush.buildBackgroundLine(-15, 0, -7, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-7, 0, -11, 6.928, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-11, 6.928, -15, 0, 4, '#919191');
        //-15, 0, -7, 0,-7, 0, -11, 6.928, -11, 6.928, -15, 0, 
        Scene.Brush.buildBackgroundLine(-15, 0, -7, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-7, 0, -11, -6.928, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-11, -6.928, -15, 0, 4, '#919191');
        //-15, 0, -7, 0,-7, 0, -11, -6.928, -11, -6.928, -15, 0, -15, 0, -7, 0, 
        Scene.Brush.buildBackgroundLine(-7, 0, 1, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(1, 0, -3, 6.928, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-3, 6.928, -7, 0, 4, '#919191');
        //-7, 0, 1, 0, 1, 0, -3, 6.928, -3, 6.928, -7, 0,
        Scene.Brush.buildBackgroundLine(-7, 0, 1, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(1, 0, -3, -6.928, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-3, -6.928, -7, 0, 4, '#919191');
        //-7, 0, 1, 0, 1, 0, -3, -6.928, -3, -6.928, -7, 0, -7, 0, 1, 0, 
        Scene.Brush.buildBackgroundLine(1, 0, 9, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(9, 0, 5, 6.928, 4, '#919191');
        Scene.Brush.buildBackgroundLine(5, 6.928, 1, 0, 4, '#919191');
       //1, 0, 9, 0, 9, 0, 5, 6.928,5, 6.928, 1, 0, 
        Scene.Brush.buildBackgroundLine(1, 0, 9, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(9, 0, 5, -6.928, 4, '#919191');
        Scene.Brush.buildBackgroundLine(5, -6.928, 1, 0, 4, '#919191');
        //1, 0, 9, 0, 9, 0, 5, -6.928, 5, -6.928, 1, 0,1, 0, 9, 0, 
        Scene.Brush.buildBackgroundLine(9, 0, 17, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(17, 0, 13, 6.928, 4, '#919191');
        Scene.Brush.buildBackgroundLine(13, 6.928, 9, 0, 4, '#919191');
        //9, 0, 17, 0, 17, 0, 13, 6.928, 13, 6.928, 9, 0,
        Scene.Brush.buildBackgroundLine(9, 0, 17, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(17, 0, 13, -6.928, 4, '#919191');
        Scene.Brush.buildBackgroundLine(13, -6.928, 9, 0, 4, '#919191');
        //9, 0, 17, 0, 17, 0, 13, -6.928, 13, -6.928, 9, 0, 9, 0, 17, 0
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
    // Engine.resetScene();
    TweenMax.killAll();
    Scene.Brush.reset();
    Scene.Brush.clearPatterns();
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
    /*Scene.Brush.setColor('#cc33cc');
     Scene.Brush.setLineWidth(5);
    //Scene.Brush.moveTo(5, 5);
   Scene.Brush.lineRotate(90, false);*/
    Scene.Brush.startDraw();
    

};

Scene.MoveForward = function (px) {
    Scene.Brush.lineLength(px);
};

Scene.MoveBrush = function () {
    Scene.Brush.moveTo(-15, 0);
};

Scene.SetColor = function (color) {
    Scene.Brush.setColor(color);
};

Scene.SetLineWidth = function (width) {
    Scene.Brush.setLineWidth(width);
};

Scene.RotateLine = function (degree, direction) {
    Scene.Brush.lineRotate(degree, direction);
};

Scene.GetLinePoint = function () {
    var pattern;
    var targetPattern = [];
    var patternsTrack = Brush.getPatternsTrack(Scene.getBrush());
    for (var i = 0; i < patternsTrack.length; i ++){
        pattern = patternsTrack[i];
        if (pattern.type == 'line'){
            var sx = parseFloat((pattern.sx/20).toFixed(3));
            var sy = parseFloat((pattern.sy/20).toFixed(3));
            var ex = parseFloat((pattern.ex/20).toFixed(3));
            var ey = parseFloat((pattern.ey/20).toFixed(3));
            targetPattern.push (sx);
            targetPattern.push (sy);
            targetPattern.push (ex);
            targetPattern.push (ey);
        }
    }
    return targetPattern;
};

Scene.StepCompleteFn = function (){
    var actualLinePoint = Scene.GetLinePoint();
    if (actualLinePoint.length == '112' && ((patternPoint.sort(function(a,b){ return b-a}).toString() == actualLinePoint.sort(function(a,b){ return b-a}).toString()))){
        return true;
    }else{
        return false;
    }
};


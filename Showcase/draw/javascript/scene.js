'use strict';

var Scene = {};
var patternPoint = [-5, 0, 5, 0,5, 0, 5, 10, 5, 10, -5, 10,-5, 10, -5, 0];

Scene.initEnvironment = function (containerId) {
    var browserWidth = $(window).width();
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
            base: '#FF6666',//FF0000//CACACA
            step: 20,
            scope: 500
        }
    };

    Engine.initScreenAnd3D(containerId, params);
    Engine.prepareForStart();
    Scene.Brush = Scene.getBrush();
    Scene.Brush.setBuildBackgroundFn(function () {
        //正三角形---边长 = 8
        Scene.Brush.buildBackgroundLine(-20, 0, -16, 6.928, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-16, 6.928, -12, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-12, 0, -20, 0, 4, '#919191');
		//倒三角形---边长 = 8
		Scene.Brush.buildBackgroundLine(-20, 3.928, -12, 3.928, 4, '#919191');
		Scene.Brush.buildBackgroundLine(-12, 3.928, -16, -3, 4, '#919191');
		Scene.Brush.buildBackgroundLine(-16, -3, -20, 3.928, 4, '#919191');
        //-----------------------------------------------------------
        //正五边形 -- 边长 = 6
		Scene.Brush.buildBackgroundLine(-8, 0, -9.854, 5.706, 4, '#919191');
		Scene.Brush.buildBackgroundLine(-9.854, 5.706, -5, 9.233, 4, '#919191');
		Scene.Brush.buildBackgroundLine(-5, 9.233, -0.146, 5.706, 4, '#919191');
		Scene.Brush.buildBackgroundLine(-0.146, 5.706, -2, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-2, 0, -8, 0, 4, '#919191');

        //五角星 -- 边长 = 9.708， （旋转144度）

        Scene.Brush.buildBackgroundLine(-9.854, 5.706, -0.146, 5.706, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-0.146, 5.706, -8, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-8, 0, -5, 9.233, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-5, 9.233, -2, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(-2, 0, -9.854, 5.706, 4, '#919191');


        //-----------------------------------------------------------
        //组合正六边形 -- 边长 = 6
		Scene.Brush.buildBackgroundLine(2, 0, 5, 5.196, 4, '#919191');
		Scene.Brush.buildBackgroundLine(5, 5.196, 11, 5.196, 4, '#919191');
		Scene.Brush.buildBackgroundLine(11, 5.196, 14, 0, 4, '#919191');
		Scene.Brush.buildBackgroundLine(14, 0, 11, -5.196, 4, '#919191');
		Scene.Brush.buildBackgroundLine(11, -5.196, 5, -5.196, 4, '#919191');
		Scene.Brush.buildBackgroundLine(5, -5.196, 2, 0, 4, '#919191');
		
		Scene.Brush.buildBackgroundLine(8, 0, 2, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(8, 0, 5, 5.196, 4, '#919191');
        Scene.Brush.buildBackgroundLine(8, 0, 11, 5.196, 4, '#919191');
        Scene.Brush.buildBackgroundLine(8, 0, 14, 0, 4, '#919191');
        Scene.Brush.buildBackgroundLine(8, 0, 11, -5.196, 4, '#919191');
        Scene.Brush.buildBackgroundLine(8, 0, 5, -5.196, 4, '#919191');
        

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
    //正三角形
    Scene.Brush.setColor('#000000');
    Scene.Brush.setLineWidth(5);
    Scene.Brush.moveTo(-20, 0);
    Scene.Brush.lineTo(-12, 0);
    Scene.Brush.lineTo(-4, 0);
    Scene.Brush.lineRotate(120, true);
    Scene.Brush.lineTo(-20,13.856);
    Scene.Brush.lineRotate(120, true);
    //倒三角形
    Scene.Brush.moveTo(-20, 4);
    Scene.Brush.lineTo(-12, 4);
    Scene.Brush.lineTo(-4, 4);
    Scene.Brush.lineRotate(120, false);
    Scene.Brush.lineTo(-20, -9.856);
    Scene.Brush.lineRotate(120, false);
    
    //正五边形
    Scene.Brush.setColor('#ff0097');
    Scene.Brush.moveTo(-8, 0);
    Scene.Brush.lineTo(-2, 0);
    Scene.Brush.lineTo(4, 0);
    Scene.Brush.lineRotate(72, true);
    Scene.Brush.lineTo(1.708, 11.413);
    Scene.Brush.lineRotate(72, true);
    Scene.Brush.lineTo(-9.861, 12.76);
    Scene.Brush.lineRotate(72, true);
    Scene.Brush.lineTo(-14.9, 2.11);
    Scene.Brush.lineRotate(72, true);

    //五角星
    Scene.Brush.setColor('#0eb83a');
    Scene.Brush.moveTo(-9.854, 5.706)
    Scene.Brush.lineTo(-0.146, 5.706);
    Scene.Brush.lineTo(9.562, 5.706);
    Scene.Brush.lineRotate(144, false);
    Scene.Brush.lineTo(-15.854, -5.706);
    Scene.Brush.lineRotate(144, false);
    Scene.Brush.lineTo(-2, 18.466);
    Scene.Brush.lineRotate(144, false);
    Scene.Brush.lineTo(1, -9.232);
    Scene.Brush.lineRotate(144, false);
    
    //----------------------------------------
    //组合图形---正六边形
    Scene.Brush.setColor('#cc33cc');
    for (var i = 1; i < 4; i++){
        Scene.Brush.moveTo(8, 0);
        Scene.Brush.lineTo(14, 0);
        Scene.Brush.lineTo(20, 0);
        Scene.Brush.lineRotate(120, true);
        Scene.Brush.lineTo(8, 10.392);
        Scene.Brush.lineRotate(120, true);
        Scene.Brush.groupPatterns(3);
        Scene.Brush.patternGroupRotate(60*i, true);
    }
    for (var i = 1; i < 3; i++){
        Scene.Brush.moveTo(8, 0);
        Scene.Brush.lineTo(14, 0);
        Scene.Brush.lineTo(20, 0);
        Scene.Brush.lineRotate(120, true);
        Scene.Brush.lineTo(8, 10.392);
        Scene.Brush.lineRotate(120, true);
        Scene.Brush.groupPatterns(3);
        Scene.Brush.patternGroupRotate(60*i, false);
    }
    Scene.Brush.moveTo(8, 0);
    Scene.Brush.lineTo(14, 0);
    Scene.Brush.lineTo(20, 0);
    Scene.Brush.lineRotate(120, true);
    Scene.Brush.lineTo(8, 10.392);
    Scene.Brush.lineRotate(120, true);
//=====================================================================================
    //正三角形
    // Scene.Brush.setColor('#000000');
    // Scene.Brush.setLineWidth(5);
    // Scene.Brush.moveTo(-20, 0);
    // Scene.Brush.lineTo(-12, 0);
    // Scene.Brush.lineTo(-16, 6.928);
    // Scene.Brush.lineTo(-20, 0);

    //倒三角形
    // Scene.Brush.moveTo(-20, 3.928);
    // Scene.Brush.lineTo(-12, 3.928);
    // Scene.Brush.lineTo(-16, -3);
    // Scene.Brush.lineTo(-20, 3.928);

    //-------------------------------------------------
    //正五边形
    // Scene.Brush.setColor('#ff0097');
    // Scene.Brush.moveTo(-8, 0);
    // Scene.Brush.lineTo(-2, 0);
    // Scene.Brush.lineTo(-0.146, 5.706);
    // Scene.Brush.lineTo(-5, 9.233);
    // Scene.Brush.lineTo(-9.854, 5.706);
    // Scene.Brush.lineTo(-8, 0);

    //-------------------------------------------------
    //五角星
    // Scene.Brush.setColor('#0eb83a');
    // Scene.Brush.moveTo(-9.854, 5.706);
    // Scene.Brush.lineTo(-0.146, 5.706);
    // Scene.Brush.lineTo(-8, 0);
    // Scene.Brush.lineTo(-5, 9.233);
    // Scene.Brush.lineTo(-2, 0);
    // Scene.Brush.lineTo(-9.854, 5.706);

    //-------------------------------------------------
    //组合图形--正六边形
    // Scene.Brush.setColor('#cc33cc');
    //  Scene.Brush.moveTo(8, 0);
    // Scene.Brush.lineTo(2, 0);
    // Scene.Brush.lineTo(5, 5.196);
    // Scene.Brush.lineTo(8,0);

    // Scene.Brush.lineTo(5, 5.196);
    // Scene.Brush.lineTo(11, 5.196);
    // Scene.Brush.lineTo(8,0);

    // Scene.Brush.lineTo(11, 5.196);
    // Scene.Brush.lineTo(14,0);
    // Scene.Brush.lineTo(8,0);

    // Scene.Brush.lineTo(14,0);
    // Scene.Brush.lineTo(11, -5.196);
    // Scene.Brush.lineTo(8,0);

    // Scene.Brush.lineTo(11, -5.196);
    // Scene.Brush.lineTo(5, -5.196);
    // Scene.Brush.lineTo(8,0);
    
    // Scene.Brush.lineTo(5, -5.196);
    // Scene.Brush.lineTo(2, 0);
    // Scene.Brush.lineTo(8,0);

    Scene.Brush.startDraw();
};

Scene.MoveForward = function (px) {
    Scene.Brush.lineLength(px);
};

Scene.jump = function () {
    Scene.Brush.moveTo();
}

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
    //if (actualLinePoint.length == '16' && ((patternPoint.sort(function(a,b){ return b-a}).toString() == actualLinePoint.sort(function(a,b){ return b-a}).toString()))){
    if (actualLinePoint.length == '76' ){
        return true;
    }else{
        return false;
    }
};
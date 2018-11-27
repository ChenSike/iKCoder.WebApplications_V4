'use strict';

var Scene = {};
var patternPoint = [0, 0, 10.6,0, 10.6,0, 0, 10.6, 0,10.6,-10.6, 0, -10.6, 0, 0, 0, 0, 0, 8, 0, 8, 0, 8 ,-12, 8 ,-12, -8 ,-12, -8 ,-12, -8 ,0, -8 ,0, 0, 0, -2 ,-2, -6, -2, -6 ,-2, -6, -6, -6 ,-6, -2, -6,-2 ,-6, -2, -2, 2 ,-8, 6, -8,6 ,-8, 6, -12, 6 ,-12, 2, -12, 2 ,-12, 2, -8];
var expectedArc = {cx : 4, cy : -4, radius : 2};
var arcCount = 0;

Scene.initEnvironment = function (containerId) {
    changeSiderBarWidth($(window).width()/2);
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
            scope: 500
        }
    };

    Engine.initScreenAnd3D(containerId, params);
    Engine.prepareForStart();
    Scene.Brush = Scene.getBrush();
    Scene.Brush.setBuildBackgroundFn(function () {
    
    //房子
      //房顶----等腰直角三角形，底边 = 15*根号2 = 21.2，直角边15, 顶角90，底角45，高 = 10.6
        Scene.Brush.buildBackgroundLine(0,10.6,-10.6, 0, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-10.6,0,10.6, 0, 6, '#919191');
        Scene.Brush.buildBackgroundLine(10.6,0, 0, 10.6, 6, '#919191');

        //墙 ---- 长方形，长 = 16， 宽 = 12
       Scene.Brush.buildBackgroundLine(-8 ,0, -8, -12, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-8 ,-12, 8, -12, 6, '#919191');
        Scene.Brush.buildBackgroundLine(8 ,-12, 8, 0, 6, '#919191');
        
        //窗子---正方形， 边长=4
       Scene.Brush.buildBackgroundLine(-2 ,-2, -6, -2, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-6 ,-2, -6, -6, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-6 ,-6, -2, -6, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-2 ,-6, -2, -2, 6, '#919191');

      
      //画圆---圆心坐标为(4, -4), 半径为2， 根据圆的标准方程(x－a)²+(y－b)²=r² 计算圆上每点的坐标
        var a = 4, b = -4, r = 2;
        var preX = 4, preY = -2;
        var step = 0.1;
        for (var x = 4;  x <= 6; x += step){
            var y = Math.sqrt(r*r - (x-a)*(x-a)) + b;
            Scene.Brush.buildBackgroundLine(preX,preY, x, y, 6, '#919191');
            preX = x;
            preY = y;
        }
        
        var step = -0.1;
        for (var x = 6;  x >= 2; x += step){
            var y = -Math.sqrt(r*r - (x-a)*(x-a)) + b;
            Scene.Brush.buildBackgroundLine(preX,preY, x, y, 6, '#919191');
            preX = x;
            preY = y;
        }

        var step = 0.1;
        for (var x = 2;  x <= 4; x += step){
            var y = Math.sqrt(r*r - (x-a)*(x-a)) + b;
            Scene.Brush.buildBackgroundLine(preX,preY, x, y, 6, '#919191');
            preX = x;
            preY = y;
        }

        //门----正方形， 长 = 4， 宽 = 4
        Scene.Brush.buildBackgroundLine(2 ,-8, 6, -8, 6, '#919191');
        Scene.Brush.buildBackgroundLine(6 ,-8, 6, -12, 6, '#919191');
        Scene.Brush.buildBackgroundLine(6 ,-12, 2, -12, 6, '#919191');
        Scene.Brush.buildBackgroundLine(2 ,-12, 2, -8, 6, '#919191');
        
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
     arcCount = 0;
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

Scene.startGame = function () {
    Scene.start();
    // Scene.Brush.setColor('#00ff00');
    // Scene.Brush.setLineWidth(6);
    // Scene.Brush.moveTo(-10,-2);
    // Scene.Brush.lineLength(10);
    // Scene.Brush.lineLength(10);
    // Scene.Brush.lineRotate(90, false);
    // Scene.Brush.lineLength(10);
    // Scene.Brush.lineRotate(90, false);
    // Scene.Brush.lineLength(10);
    // Scene.Brush.lineRotate(90, false);

    // Scene.Brush.moveTo(5,-2);
    // Scene.Brush.lineLength(10);
    // Scene.Brush.lineLength(10);
    // Scene.Brush.lineRotate(90, false);
    // Scene.Brush.lineLength(10);
    // Scene.Brush.lineRotate(90, false);
    // Scene.Brush.lineLength(10);
    // Scene.Brush.lineRotate(90, false);

    Scene.Brush.startDraw();
};

Scene.MoveForward = function (px) {
    Scene.Brush.lineLength(px);
};

Scene.MoveTo = function (x, y){
    Scene.Brush.moveTo(x, y);
}


Scene.jump = function (jump_steps, jump_direction) {
    if (jump_direction == "up"){
        Scene.Brush.moveTo(Scene.movePoint.sx, Scene.movePoint.sy + jump_steps);
    }else if (jump_direction == "down") {
        Scene.Brush.moveTo(Scene.movePoint.sx, Scene.movePoint.sy - jump_steps);
    }else if (jump_direction == "left") {
        Scene.Brush.moveTo(Scene.movePoint.sx - jump_steps, Scene.movePoint.sy);
    }else if (jump_direction == "right") {
        Scene.Brush.moveTo(Scene.movePoint.sx + jump_steps, Scene.movePoint.sy);
    }
        
};

Scene.SetColor = function (color) {
    Scene.Brush.setColor(color);
};

Scene.SetLineWidth = function (width) {
    Scene.Brush.setLineWidth(width);
};

Scene.RotateLine = function (degree, direction){
    Scene.Brush.lineRotate(degree, direction);
};

Scene.RotateDiamond = function (degree, direction) {
    var code = Blockly.JavaScript.workspaceToCode(WorkScene.workspace);
    var targetString = getSubString(code);
    var searchString = eval("/"+"MoveForward"+"/ig");
    var len = targetString.match(searchString).length;

    Scene.Brush.groupPatterns(len);
    Scene.Brush.patternGroupRotate(degree, direction);
    Scene.Brush.moveTo(0, 0);
};

Scene.DrawCircle = function (x, y , r){
    Scene.Brush.circle(x, y, r);
};

function getSubString(code) {
	var strtmp = code.replace(/"/, "\"");
	var strtmp1 = strtmp.replace(/  /,'');
	var strtmp2 = strtmp1.replace(/ /,'');
	var sourceStr = strtmp2.replace(/\n/g,'');
	
	var start =  findStringPostion(sourceStr, "{", 0) + 1;
	var end =  findStringPostion(sourceStr, "}", 0);
	var tarString = sourceStr.substring(start, end);
    return tarString;
};

function findStringPostion (searchString, searchedString, num) {
	var x = searchString.indexOf(searchedString);
    for (var i = 0; i < num; i++) {
        x = searchString.indexOf(searchedString, x + 1);
    }
return x;
};

Scene.GetLinePoint = function () {
    var pattern;
    var targetPattern = [];
    var patternsTrack = Brush.getPatternsTrack(Scene.getBrush());
    for (var i = 0; i < patternsTrack.length; i ++){
        pattern = patternsTrack[i];
        if (pattern.type == 'line'){
            var sx = parseFloat((pattern.sx/20).toFixed(1));
            var sy = parseFloat((pattern.sy/20).toFixed(1));
            var ex = parseFloat((pattern.ex/20).toFixed(1));
            var ey = parseFloat((pattern.ey/20).toFixed(1));
            targetPattern.push (sx);
            targetPattern.push (sy);
            targetPattern.push (ex);
            targetPattern.push (ey);
        }
    }
    return targetPattern;
};

Scene.GetArcPoint = function () {
    var pattern;
    var targetPattern = [];
    var patternItem = {
        cx : 0,
        cy : 0,
        radius : 0
    };
    var patternsTrack = Brush.getPatternsTrack(Scene.getBrush());
    for (var i = 0; i < patternsTrack.length; i ++){
        pattern = patternsTrack[i];
        if (pattern.type == 'arc'){
            arcCount += 1;
            var cx = parseFloat((pattern.cx/20).toFixed(2));
            var cy = parseFloat((pattern.cy/20).toFixed(2));
            var radius = parseFloat((pattern.radius/20).toFixed(2));
            patternItem.cx = cx;
            patternItem.cy = cy;
            patternItem.radius = radius;
            targetPattern.push(patternItem);

        }
    }
    return targetPattern;
};

Scene.StepCompleteFn = function (){
    var actualArc = Scene.GetArcPoint();
    var actualLinePoint = Scene.GetLinePoint();
    if (actualLinePoint.length == '68' && ((patternPoint.sort(function(a,b){ return b-a}).toString() == actualLinePoint.sort(function(a,b){ return b-a}).toString())) && arcCount == 1 && actualArc[0].cx == expectedArc.cx && actualArc[0].cy == expectedArc.cy && actualArc[0].radius == expectedArc.radius){
        return true;
    }else{
        return false;
    }
};
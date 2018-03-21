'use strict';

var Scene = {};
var expectedArc = {cx : 0, cy : 0, radius : 10};
var patternCount = 0;

Scene.initEnvironment = function (containerId) {
    changeSiderBarWidth(700);
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

        //圆形---圆心坐标为(0, 0), 半径为10， 根据圆的标准方程(x)²+(y)²=r² 计算圆上每点的坐标
        var preX = 0, preY = 10;
        var step = 0.1;
        for (var x = 0;  x <= 10; x += step){
            var y = Math.sqrt(100 - x*x);
            Scene.Brush.buildBackgroundLine(preX,preY, x, y, 6, '#919191');
            preX = x;
            preY = y;
        }
        var step = -0.1;
        for (var x = 10;  x >= 0; x += step){
            var y = Math.sqrt(100 - x*x);
            Scene.Brush.buildBackgroundLine(preX,-preY, x, -y, 6, '#919191');
            preX = x;
            preY = y;
        }

        var step = 0.1;
        for (var x = 0;  x <= 10; x += step){
            var y = Math.sqrt(100 - x*x);
            Scene.Brush.buildBackgroundLine(-preX,-preY, -x, -y, 6, '#919191');
            preX = x;
            preY = y;
        }
        var step = -0.1;
        for (var x = 10;  x >= 0; x += step){
            var y = Math.sqrt(100 - x*x);
            Scene.Brush.buildBackgroundLine(-preX,preY,- x, y, 6, '#919191');
            preX = x;
            preY = y;
        }

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
     patternCount = 0;
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
    Scene.Brush.startDraw();
};

Scene.MoveForward = function (px) {
    Scene.Brush.lineLength(px);
};

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
            patternCount += 1;
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
    if (patternCount == 1 && actualArc[0].cx == expectedArc.cx && actualArc[0].cy == expectedArc.cy && actualArc[0].radius == expectedArc.radius){
        return true;
    }else{
        return false;
    }
};
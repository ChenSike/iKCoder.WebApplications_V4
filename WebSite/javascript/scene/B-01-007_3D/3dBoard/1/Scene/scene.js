'use strict';

var Scene = {};
var patternPoint = [0, 0, -6, 10.39, 6, 10.39, 0, 0, 6, 10.39, 12, 0, 0, 0, 12, 0, 6, -10.39,0, 0, 6, -10.39,  -6, -10.39, 0, 0, -6, -10.39,  -12, 0, 0, 0, -12, 0, -6, 10.39];
var patternCount = 0;

Scene.initEnvironment = function (containerId) {
    //changeSiderBarWidth(700);
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
        //等边三角形---边长 = 16
        // Scene.Brush.buildBackgroundLine(0, 0, 6, 10.39, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(6, 10.39, 12, 0, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(12, 0, 0, 0, 4, '#ff0000');

        //长方形 --- 长 = 16，宽 = 8
        // Scene.Brush.buildBackgroundLine(0, 0, 0, 8, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(0, 8, 12, 8, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(12, 8, 12, 0, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(12, 0, 0, 0, 4, '#ff0000');

        //正方形---边长 = 14
        // Scene.Brush.buildBackgroundLine(0, 0, 0, 14, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(0, 14, 14, 14, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(14, 14, 14, 0, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(14, 0, 0, 0, 4, '#ff0000');

        //6个等边三角形组成的正六边形，正六边形边长 = 6个等边三角形的边长 = 12
        Scene.Brush.buildBackgroundLine(0, 0, -6, 10.39, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-6, 10.39, 6, 10.39, 6, '#919191');
        Scene.Brush.buildBackgroundLine(6, 10.39, 0, 0, 6, '#919191');

        Scene.Brush.buildBackgroundLine(0, 0, 6, 10.39, 6, '#919191');
        Scene.Brush.buildBackgroundLine(6, 10.39, 12, 0, 6, '#919191');
        Scene.Brush.buildBackgroundLine(12, 0, 0, 0, 6, '#919191');

        Scene.Brush.buildBackgroundLine(0, 0, 12, 0, 6, '#919191');
        Scene.Brush.buildBackgroundLine(12, 0, 6, -10.39, 6, '#919191');
        Scene.Brush.buildBackgroundLine(6, -10.39, 0, 0, 6, '#919191');

        Scene.Brush.buildBackgroundLine(0, 0, 6, -10.39, 6, '#919191');
        Scene.Brush.buildBackgroundLine(6, -10.39, -6, -10.39, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-6, -10.39, 0, 0, 6, '#919191');

        Scene.Brush.buildBackgroundLine(0, 0, -6, -10.39, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-6, -10.39, -12, 0, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-12, 0, 0, 0, 6, '#919191');

        Scene.Brush.buildBackgroundLine(0, 0, -12, 0, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-12, 0, -6, 10.39, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-6, 10.39, 0, 0, 6, '#919191');


        //正六边形---边长 = 8，每个内角 = 120
        /*Scene.Brush.buildBackgroundLine(0, 0, 4, 6.8, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(4, 6.8, 12, 6.8, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(12, 6.8, 16, 0, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(16, 0, 12, -6.8, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(12, -6.8, 4, -6.8, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(4, -6.8, 0, 0, 4, '#ff0000');*/

        //6个菱形 -- 边长 = 10， 内角 = 60， 120
       /* Scene.Brush.buildBackgroundLine(0, 0, 5, 8.5, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(5, 8.5, 0, 17, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(0, 17, -5, 8.5, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(-5, 8.5, 0, 0, 4, '#ff0000');

        Scene.Brush.buildBackgroundLine(0, 0, 5, 8.5, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(5, 8.5, 15, 8.5, 4, '#FF7F00');
        Scene.Brush.buildBackgroundLine(15, 8.5, 10, 0, 4, '#FF7F00');
        Scene.Brush.buildBackgroundLine(10, 0, 0, 0, 4, '#FF7F00');

        Scene.Brush.buildBackgroundLine(0, 0, 10, 0, 4, '#FF7F00');
        Scene.Brush.buildBackgroundLine(10, 0, 15, -8.5, 4, '#EE1289');
        Scene.Brush.buildBackgroundLine(15, -8.5, 5, -8.5, 4, '#EE1289');
        Scene.Brush.buildBackgroundLine(5, -8.5, 0, 0, 4, '#EE1289');

        Scene.Brush.buildBackgroundLine(0, 0, 5, -8.5, 4, '#EE1289');
        Scene.Brush.buildBackgroundLine(5, -8.5, 0, -17, 4, '#FFD700');
        Scene.Brush.buildBackgroundLine(0, -17, -5, -8.5, 4, '#FFD700');
        Scene.Brush.buildBackgroundLine(-5, -8.5, 0, 0, 4, '#FFD700');

        Scene.Brush.buildBackgroundLine(0, 0, -5, -8.5, 4, '#FFD700');
        Scene.Brush.buildBackgroundLine(-5, -8.5, -15, -8.5, 4, '#00CD00');
        Scene.Brush.buildBackgroundLine(-15, -8.5, -10, 0, 4, '#00CD00');
        Scene.Brush.buildBackgroundLine(-10, 0, 0, 0, 4, '#00CD00');

        Scene.Brush.buildBackgroundLine(0, 0, -5, 8.5, 4, '#00C5CD');
        Scene.Brush.buildBackgroundLine(-5, 8.5, -15, 8.5, 4, '#00C5CD');
        Scene.Brush.buildBackgroundLine(-15, 8.5, -10, 0, 4, '#00C5CD');
        Scene.Brush.buildBackgroundLine(-10, 0, 0, 0, 4, '#00CD00');*/

        //================================
        //楼梯， 长 = 4， 高 = 2
         /*Scene.Brush.buildBackgroundLine(0, 0, 4, 0, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(4, 0, 4, 2, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(4, 2, 8, 2, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(8, 2, 8, 4, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(8, 4, 12, 4, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(12, 4, 12, 6, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(12, 6, 16, 6, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(16, 6, 16, 8, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(16, 8, 20, 8, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(20, 8, 20, 10, 4, '#ff0000');*/

        //圆形---圆心坐标为(0, 0), 半径为16， 根据圆的标准方程(x)²+(y)²=r² 计算圆上每点的坐标
        /*var preX = 0, preY = 16;
        var step = 0.5;
        for (var x = 0;  x <= 16; x += step){
            var y = Math.sqrt(256 - x*x);
            Scene.Brush.buildBackgroundLine(preX,preY, x, y, 4, '#ff0000');
            preX = x;
            preY = y;
        }
        var step = -0.5;
        for (var x = 16;  x >= 0; x += step){
            var y = Math.sqrt(256 - x*x);
            Scene.Brush.buildBackgroundLine(preX,-preY, x, -y, 4, '#ff0000');
            preX = x;
            preY = y;
        }

        var step = 0.5;
        for (var x = 0;  x <= 16; x += step){
            var y = Math.sqrt(256 - x*x);
            Scene.Brush.buildBackgroundLine(-preX,-preY, -x, -y, 4, '#ff0000');
            preX = x;
            preY = y;
        }
        var step = -0.5;
        for (var x = 16;  x >= 0; x += step){
            var y = Math.sqrt(256 - x*x);
            Scene.Brush.buildBackgroundLine(-preX,preY,- x, y, 4, '#ff0000');
            preX = x;
            preY = y;
        }*/

   /* //房子
      //房顶----等腰三角形，底边 = 32，顶角120，底角30，高 = 9
        Scene.Brush.buildBackgroundLine(0,9,-16, 0, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(-16,0,16, 0, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(16,0, 0, 9, 4, '#ff0000');

        //墙 ---- 长方形，长 = 24， 宽 = 16
        Scene.Brush.buildBackgroundLine(-12 ,0, -12, -16, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(-12 ,-16, 12, -16, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(12 ,-16, 12, 0, 4, '#ff0000');
        //窗子---正方形， 边长=4
        Scene.Brush.buildBackgroundLine(-4 ,-2, -8, -2, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(-8 ,-2, -8, -6, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(-8 ,-6, -4, -6, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(-4 ,-6, -4, -2, 4, '#ff0000');
      
      //画圆---圆心坐标为(6, -4), 半径为2， 根据圆的标准方程(x－a)²+(y－b)²=r² 计算圆上每点的坐标
        var a = 6, b = -4, r = 2;
        var preX = 6, preY = -2;
        var step = 0.5;
        for (var x = 6;  x <= 8; x += step){
            var y = Math.sqrt(r*r - (x-a)*(x-a)) + b;
            Scene.Brush.buildBackgroundLine(preX,preY, x, y, 4, '#ff0000');
            preX = x;
            preY = y;
        }
        
        var step = -0.5;
        for (var x = 8;  x >= 4; x += step){
            var y = -Math.sqrt(r*r - (x-a)*(x-a)) + b;
            Scene.Brush.buildBackgroundLine(preX,preY, x, y, 4, '#ff0000');
            preX = x;
            preY = y;
        }

        var step = 0.5;
        for (var x = 4;  x <= 6; x += step){
            var y = Math.sqrt(r*r - (x-a)*(x-a)) + b;
            Scene.Brush.buildBackgroundLine(preX,preY, x, y, 4, '#ff0000');
            preX = x;
            preY = y;
        }

        //门----正方形， 长 = 6， 宽 = 6
        Scene.Brush.buildBackgroundLine(3 ,-10, 9, -10, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(9 ,-10, 9, -16, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(3 ,-16, 3, -10, 4, '#ff0000');*/
        

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

Scene.RotateTriangle = function (degree, direction) {
    var code = Blockly.JavaScript.workspaceToCode(WorkScene.workspace);
    var targetString = getSubString(code);
    var searchString = eval("/"+"MoveForward"+"/ig");
    var len = targetString.match(searchString).length;
    //Scene.Brush.groupPatterns(len);
    Scene.Brush.patternGroupRotate(degree, direction);
    Scene.Brush.moveTo(0, 0);
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

Scene.GetPatternsPoint = function () {
    var pattern;
    var targetPattern = [];
    var patternsTrack = Brush.getPatternsTrack(Scene.getBrush());
    for (var i = 0; i < patternsTrack.length; i ++){
        pattern = patternsTrack[i];
        if (pattern.type == 'patterngroup'){
            patternCount += 1;
            for (var j = 0; j < pattern.vertices.length; j ++ ){
                var sx = parseFloat((pattern.vertices[j].x/20).toFixed(2));
                var sy = parseFloat((pattern.vertices[j].y/20).toFixed(2));
                targetPattern.push (sx);
                targetPattern.push (sy);
            }
        }
    }
    return targetPattern;
};

Scene.StepCompleteFn = function (){
    var actualLinePoint = Scene.GetPatternsPoint();
    if (patternCount == 6 && actualLinePoint.length == '36' && ((patternPoint.sort(function(a,b){ return b-a}).toString() == actualLinePoint.sort(function(a,b){ return b-a}).toString()))){
        return true;
    }else{
        return false;
    }
};
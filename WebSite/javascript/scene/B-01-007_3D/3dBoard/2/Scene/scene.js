'use strict';

var Scene = {};
var patternPoint = [0, 0, 5, 8.66, 0, 17.32,-5, 8.66, 0, 0, 5, 8.66,15, 8.66,10, 0, 0, 0, 10, 0, 15, -8.66, 5, -8.66, 0, 0, 5, -8.66,0, -17.32, -5, -8.66, 0, 0, -5, -8.66, -15, -8.66, -10, 0, 0, 0, -5, 8.66, -15, 8.66, -10, 0];
var patternCount = 0;

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

        //6个菱形 -- 边长 = 10， 内角 = 60， 120
        Scene.Brush.buildBackgroundLine(0, 0, 5, 8.66,  6, '#919191');
        Scene.Brush.buildBackgroundLine(5, 8.66, 0, 17.32,  6, '#919191');
        Scene.Brush.buildBackgroundLine(0, 17.32, -5, 8.66,  6, '#919191');
        Scene.Brush.buildBackgroundLine(-5, 8.66, 0, 0,  6, '#919191');

        Scene.Brush.buildBackgroundLine(0, 0, 5, 8.66, 6, '#919191');
        Scene.Brush.buildBackgroundLine(5, 8.66, 15, 8.66, 6, '#919191');
        Scene.Brush.buildBackgroundLine(15, 8.66, 10, 0, 6, '#919191');
        Scene.Brush.buildBackgroundLine(10, 0, 0, 0, 6, '#919191');

        Scene.Brush.buildBackgroundLine(0, 0, 10, 0, 6, '#919191');
        Scene.Brush.buildBackgroundLine(10, 0, 15, -8.66, 6, '#919191');
        Scene.Brush.buildBackgroundLine(15, -8.66, 5, -8.66, 6, '#919191');
        Scene.Brush.buildBackgroundLine(5, -8.66, 0, 0, 6, '#919191');

        Scene.Brush.buildBackgroundLine(0, 0, 5, -8.66, 6, '#919191');
        Scene.Brush.buildBackgroundLine(5, -8.66, 0, -17.32, 6, '#919191');
        Scene.Brush.buildBackgroundLine(0, -17.32, -5, -8.66, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-5, -8.66, 0, 0, 6, '#919191');

        Scene.Brush.buildBackgroundLine(0, 0, -5, -8.66, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-5, -8.66, -15, -8.66, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-15, -8.66, -10, 0, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-10, 0, 0, 0, 6, '#919191');

        Scene.Brush.buildBackgroundLine(0, 0, -5, 8.66, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-5, 8.66, -15, 8.66, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-15, 8.66, -10, 0, 6, '#919191');
        Scene.Brush.buildBackgroundLine(-10, 0, 0, 0, 6, '#919191');

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
    if (patternCount == 6 && actualLinePoint.length == '48' && ((patternPoint.sort(function(a,b){ return b-a}).toString() == actualLinePoint.sort(function(a,b){ return b-a}).toString()))){
        return true;
    }else{
        return false;
    }
};
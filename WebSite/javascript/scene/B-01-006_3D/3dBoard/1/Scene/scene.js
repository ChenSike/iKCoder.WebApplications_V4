'use strict';

var Scene = {};
Scene.movePoint = { sx: 0, sy: 0, len: 0, lineAngle: 90, rotateAngle: 0 };
Scene.moveLength = 0;
Scene.rotatePoint = [{ x: 0, y: 0 }];
var patternPoint = [0, 0, 6, 10.392, 6, 10.392, 12, 0, 12, 0, 0 , 0];

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
        //等边三角形---边长 = 12
        Scene.Brush.buildBackgroundLine(0, 0, 6, 10.392, 6, '#919191');
        Scene.Brush.buildBackgroundLine(6, 10.392, 12, 0, 6, '#919191');
        Scene.Brush.buildBackgroundLine(12, 0, 0, 0, 6, '#919191');

        //长方形 --- 长 = 16，宽 = 8
        // Scene.Brush.buildBackgroundLine(0, 0, 0, 8, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(0, 8, 16, 8, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(16, 8, 16, 0, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(16, 0, 0, 0, 4, '#ff0000');

        //正方形---边长 = 14
        // Scene.Brush.buildBackgroundLine(0, 0, 0, 14, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(0, 14, 14, 14, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(14, 14, 14, 0, 4, '#ff0000');
        // Scene.Brush.buildBackgroundLine(14, 0, 0, 0, 4, '#ff0000');

        //6个等边三角形组成的正六边形，正六边形边长 = 6个等边三角形的边长 = 16
        /*Scene.Brush.buildBackgroundLine(0, 0, -8, 13.6, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(-8, 13.6, 8, 13.6, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(8, 13.6, 0, 0, 4, '#ff0000');

        Scene.Brush.buildBackgroundLine(0, 0, 8, 13.6, 4, '#FF7F00');
        Scene.Brush.buildBackgroundLine(8, 13.6, 16, 0, 4, '#FF7F00');
        Scene.Brush.buildBackgroundLine(16, 0, 0, 0, 4, '#FF7F00');

        Scene.Brush.buildBackgroundLine(0, 0, 16, 0, 4, '#EE1289');
        Scene.Brush.buildBackgroundLine(16, 0, 8, -13.6, 4, '#EE1289');
        Scene.Brush.buildBackgroundLine(8, -13.6, 0, 0, 4, '#EE1289');

        Scene.Brush.buildBackgroundLine(0, 0, 8, -13.6, 4, '#FFD700');
        Scene.Brush.buildBackgroundLine(8, -13.6, -8, -13.6, 4, '#FFD700');
        Scene.Brush.buildBackgroundLine(-8, -13.6, 0, 0, 4, '#FFD700');

        Scene.Brush.buildBackgroundLine(0, 0, -8, -13.6, 4, '#00CD00');
        Scene.Brush.buildBackgroundLine(-8, -13.6, -16, 0, 4, '#00CD00');
        Scene.Brush.buildBackgroundLine(-16, 0, 0, 0, 4, '#00CD00');

        Scene.Brush.buildBackgroundLine(0, 0, -16, 0, 4, '#00C5CD');
        Scene.Brush.buildBackgroundLine(-16, 0, -8, 13.6, 4, '#00C5CD');
        Scene.Brush.buildBackgroundLine(-8, 13.6, 0, 0, 4, '#00C5CD');*/


        //正六边形---边长 = 8，每个内角 = 120
        /*Scene.Brush.buildBackgroundLine(0, 0, 4, 6.8, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(4, 6.8, 12, 6.8, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(12, 6.8, 16, 0, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(16, 0, 12, -6.8, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(12, -6.8, 4, -6.8, 4, '#ff0000');
        Scene.Brush.buildBackgroundLine(4, -6.8, 0, 0, 4, '#ff0000');*/

        //6个菱形 -- 边长 = 10， 内角 = 60， 120
        /*Scene.Brush.buildBackgroundLine(0, 0, 5, 8.5, 4, '#ff0000');
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
    Scene.movePoint = { sx: 0, sy: 0, len: 0, lineAngle: 90, rotateAngle: 0 };
    Scene.rotatePoint = [{ x: 0, y: 0 }];
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
    Scene.Brush.lineTo(10, 0);
    Scene.Brush.lineRotate(90, true);
    Scene.Brush.lineTo(0, 20);
    Scene.Brush.lineRotate(90, false);
   Scene.Brush.lineTo(20, 10);
   Scene.Brush.lineRotate(90, false);
   Scene.Brush.lineTo(10, -10);
   Scene.Brush.lineRotate(90, false);*/
    Scene.Brush.startDraw();
    

};

Scene.MoveForward = function (px) {
    /*var tmpPx = parseFloat(px*(12/100).toFixed(2));
    Scene.movePoint.len = tmpPx;
    var targetPoint = Scene.calcEndPoint();
    Scene.Brush.lineTo(targetPoint.x, targetPoint.y);
    Scene.movePoint.sx = targetPoint.x;
    Scene.movePoint.sy = targetPoint.y;*/
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

// Scene.calcEndPoint = function () {
//     var sx = Scene.movePoint.sx;
//     var sy = Scene.movePoint.sy;
//     var length = Scene.movePoint.len;
//     var angle = Scene.movePoint.lineAngle;
//     var ex = sx + length * (Math.sin(Math.PI / 180 * angle));
//     var ey = sy + length * (Math.cos(Math.PI / 180 * angle));
//     ex = parseFloat(ex.toFixed(2));
//     ey = parseFloat(ey.toFixed(2));
//     var endPoint = { x: ex, y: ey };
//     return endPoint;
// };

// Scene.calcRotateEndPoint = function () {
//     var sx = Scene.movePoint.sx;
//     var sy = Scene.movePoint.sy;
//     var length = Scene.movePoint.len;
//     var angle = Scene.movePoint.rotateAngle;

//     var ox = Scene.rotatePoint[Scene.rotatePoint.length-1].x;
//     var oy = Scene.rotatePoint[Scene.rotatePoint.length-1].y;

//     if (angle < 180){
//         var ex =((sx-ox) * (Math.cos(Math.PI / 180 * angle)) - (sy-oy)*(Math.sin(Math.PI / 180 * angle))+ox);
//         var ey = ((sy-oy) * (Math.cos(Math.PI / 180 * angle)) + (sx-ox)*(Math.sin(Math.PI / 180 * angle))+oy);

//     }else if (angle > 180){
//         var ex = ((sx-ox) * (Math.cos(Math.PI / 180 * angle)) - (sy-oy)*(Math.sin(Math.PI / 180 * angle))+ox);
//         var ey = ((sy-oy) * (Math.cos(Math.PI / 180 * angle)) + (sx-ox)*(Math.sin(Math.PI / 180 * angle))+oy);
//     }
//     ex = parseFloat(ex.toFixed(2));
//     ey = parseFloat(ey.toFixed(2));
//     var endPoint = { x: ex, y: ey };
//     Scene.rotatePoint.push(endPoint);
//     return endPoint;
// };

Scene.RotateLine = function (degree, direction) {
    // if (direction===true) {
    //     Scene.movePoint.lineAngle =  90 - degree;
    //     Scene.movePoint.rotateAngle = degree;

    // }else if (direction===false){
    //     if (Scene.movePoint.lineAngle == 0){
    //         Scene.movePoint.lineAngle = degree;
    //     }else{
    //         Scene.movePoint.lineAngle =  Scene.movePoint.lineAngle +  degree;
    //     }
    //     Scene.movePoint.rotateAngle = 360-degree;
    // }                   

    // var targetPoint = Scene.calcRotateEndPoint();
    // Scene.movePoint.sx = targetPoint.x;
    // Scene.movePoint.sy = targetPoint.y;

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
    if (actualLinePoint.length == '12' && ((patternPoint.sort(function(a,b){ return b-a}).toString() == actualLinePoint.sort(function(a,b){ return b-a}).toString()))){
        return true;
    }else{
        return false;
    }
};


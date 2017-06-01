'use strict';

WorkScene.OutputCodeCallBack = function (code) {
    //var code = '';
    try {
        //var topBlocks = WorkScene.workspace.topBlocks_;
        //for (var i = 0; i < topBlocks.length; i++) {
        //    if (topBlocks[i].type == 'scene_setting') {
        //        var content = $('#txt_Code_Content');
        //        code = Blockly.JavaScript['scene_setting'](topBlocks[i]);
        //        content.text(code);
        //        content.data("autoRowsNumbers").updateLine(code.match(/\n/g).length + 1);
        //        break;
        //    }
        //}
    }
    catch (ex) {
    }

    if (typeof Scene != 'undefined' && Scene) {
        eval(code);
    }
};

var Scene = {};

Scene.init = function () {
    Engine.initScreenAnd3D('game_container', {});
    Engine.prepareForRun();
}

Scene.start = function () {
    Engine.start();
}

Scene.reset = function () {
    Engine.reset();
    Engine.start();
}

Scene.SetMusic = function (music) {
    Engine.setAudio(music == '' ? false : music);
};

Scene.SetRoleModule = function (moduleType, role) {
    if (moduleType == '' || role == '') {
        return;
    }

    Engine.changeRoleModule(moduleType, role);
}
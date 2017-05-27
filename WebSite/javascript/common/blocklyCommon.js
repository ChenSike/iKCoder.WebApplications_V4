'use strict';

var WorkScene = {};
WorkScene.workspace = null;
WorkScene.SCORE = 0;

WorkScene.loadBlocks = function (defaultXml) {
    try {
        var loadOnce = window.sessionStorage.loadOnceBlocks;
    } catch (e) {
        var loadOnce = null;
    }
    if ('BlocklyStorage' in window && window.location.hash.length > 1) {
        BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    } else if (loadOnce) {
        delete window.sessionStorage.loadOnceBlocks;
        var xml = Blockly.Xml.textToDom(loadOnce);
        Blockly.Xml.domToWorkspace(xml, WorkScene.workspace);
    } else if (defaultXml) {
        var xml = Blockly.Xml.textToDom(defaultXml);
        Blockly.Xml.domToWorkspace(xml, WorkScene.workspace);
    } else if ('BlocklyStorage' in window) {
        window.setTimeout(BlocklyStorage.restoreBlocks, 0);
    }
};

WorkScene.bindClick = function (el, func) {
    if (typeof el == 'string') {
        el = document.getElementById(el);
    }
    //el.addEventListener('click', func, true);
    //el.addEventListener('touchend', func, true);
};

WorkScene.importPrettify = function () {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'style/prettify.css');
    document.head.appendChild(link);
    var script = document.createElement('script');
    script.setAttribute('src', 'javascript/common/prettify.js');
    document.head.appendChild(script);
};

WorkScene.init = function () {
    if (_workspaceCfg.toolbox == '') {
        WorkScene.init_Static();
        return;
    }

    var container = document.getElementById('wrap_WorkSpace');
    var onresize = function (e) {
        var el = $('#content_WorkSpace');
        var body = $('body');
        var footer = $('footer');
        el.height(body.height() - el.offset().top - footer.height() - 20);
        el.width = (body.width() - 5);
    };

    window.addEventListener('resize', onresize, false);
    var blocksXMLDoc = Blockly.Xml.textToDom(_workspaceCfg.toolbox);
    //var blocksXMLDoc = Blockly.Xml.textToDom('<xml id="toolbox" style="display: none"></xml>');
    //blocksXMLDoc = Blockly.Xml.textToDom(XMLToString(LoadXMLFile(_workspaceCfg.toolbox)));

    WorkScene.workspace = Blockly.inject('content_WorkSpace',
        {
            scrollbars: true,
            collapse: false,
            media: 'media/',
            rtl: false,
            toolbox: blocksXMLDoc,
            customCfg: {
                background_path: {
                    spacing: 10,
                    color: 'rgb(245,245,245)',
                    path: {
                        color: 'rgb(245,245,245)',
                        path: ''
                    }
                },
                background_color: 'rgb(245,245,245)',
                toolbox_collapse: {
                    border: {
                        stroke: 'rgb(209,207,204)',
                        width: 1
                    },
                    fill: 'rgb(223, 228, 231)',
                    opacity: 1,
                    radius: 0
                }
            },
            zoom: {
                controls: true,
                wheel: false
            }
        }
    );

    Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');
    var defaultXml = (!_workspaceCfg.workspace ? '<xml></xml>' : _workspaceCfg.workspace);
    //defaultXml = XMLToString(LoadXMLFile(_workspaceCfg.workspace));
    //WorkScene.loadBlocks(_workspaceCfg.workspace);
    WorkScene.loadBlocks(defaultXml);
    WorkScene.workspace.addChangeListener(WorkScene.outputCode);

    if ('BlocklyStorage' in window) {
        BlocklyStorage.backupOnUnload(WorkScene.workspace);
    }

    WorkScene.renderContent();
    WorkScene.workspace.setVisible(true);
    Blockly.svgResize(WorkScene.workspace);
    //WorkScene.bindClick('startRunBtn', WorkScene.runJS);
    //WorkScene.bindClick('resetButton', WorkScene.resetScene);
    onresize();
    Blockly.svgResize(WorkScene.workspace);
    window.setTimeout(WorkScene.importPrettify, 1);
    CheckSceneObject();
    if (Scene.initEnvironment) {
        Scene.initEnvironment('game_container');
    } else {
        Scene.init('game_container', '0', { RowCol: { row: 9, col: 9 } });
    }
};

WorkScene.init_Static = function () {
    window.ComputerScene = new Scene(configuration);
    ComputerScene.start();
    CheckSceneObject();
};

WorkScene.runJS = function () {
    Blockly.JavaScript.INFINITE_LOOP_TRAP = '  checkTimeout();\n';
    var timeouts = 0;
    var checkTimeout = function () {
        if (timeouts++ > 1000000) {
            throw 'timeout';
        }
    };
    var code = Blockly.JavaScript.workspaceToCode(WorkScene.workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        eval(code);
        Scene.UpdateConfig();
    } catch (e) {
        alert('badCode: %1'.replace('%1', e));
    }
};

WorkScene.discard = function () {
    var count = WorkScene.workspace.getAllBlocks().length;
    if (count < 2 ||
        window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace('%1', count))) {
        WorkScene.workspace.clear();
        if (window.location.hash) {
            window.location.hash = '';
        }
    }
};

WorkScene.renderContent = function () {
    try {
        var content = document.getElementById('txt_Code_Content');
        var code = Blockly.JavaScript.workspaceToCode(WorkScene.workspace);
        content.textContent = code;
        if (typeof prettyPrintOne == 'function') {
            code = content.innerHTML;
            code = prettyPrintOne(code, 'js');
            content.innerHTML = code;
        }
    }
    catch (ex) {

    }
};

WorkScene.changeSceneCfg = function (cfgObj) {
    Scene.changeConfig(cfgObj);
}

WorkScene.outputCode = function () {
    try {
        var content = $('#txt_Code_Content');
        var code = Blockly.JavaScript.workspaceToCode(WorkScene.workspace);
        content.text(code);
        content.data("autoRowsNumbers").updateLine(code.match(/\n/g).length + 1);
        WorkScene.OutputCodeCallBack(code);
    }
    catch (ex) {

    }
};

WorkScene.resetScene = function () {
    Scene.reset();
};

WorkScene.pauseScene = function () {
    Scene.pause();
};

WorkScene.startGame_Fn = function () {
    var code = Blockly.JavaScript.workspaceToCode(WorkScene.workspace);
    var fnCode = "";
    fnCode += "_blocklyFn.fn=function (){" + code + "}";
    Scene.ResetConfig();
    eval(fnCode);
    Scene.startGame();
};

WorkScene.startGame = function () {
    if (typeof (_blocklyFn) != 'undefined' && _blocklyFn != null) {
        WorkScene.startGame_Fn();
    } else {
        var code = Blockly.JavaScript.workspaceToCode(WorkScene.workspace);
        Scene.ResetConfig();
        eval(code);
        Scene.startGame();
    }
};

WorkScene.playableScene = function () {
    if (_workspaceCfg.toolbox == '') {
        return false;
    } else {
        return true;
    }
}

WorkScene.endGame = function () {
    Scene.endGame();
};

WorkScene.reset = function (force) {
    if (WorkScene.workspace && WorkScene.workspace.clear) {
        WorkScene.workspace.clear();
        if (force !== true) {
            var defaultXml = (!_workspaceCfg.workspace ? '<xml></xml>' : _workspaceCfg.workspace);
            //defaultXml = XMLToString(LoadXMLFile(_workspaceCfg.workspace));
            WorkScene.loadBlocks(defaultXml);
        }

        Scene.reset();
    } else {
        Scene.reset();
    }
};

WorkScene.saveStatus = function (flag) {
    if (_workspaceCfg.toolbox == '') {
        return;
    }

    var tempXML = XMLToString(Blockly.Xml.workspaceToDom(WorkScene.workspace));
    _registerRemoteServer();
    $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gURLMapping.bus.saveworkspace, { symbol: _currentStage, stage: _currentStep }),
        data: tempXML,
        success: function (response, status) {
            if ($(response).find('err').length > 0) {
                _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Save_CurrentStepWorspaceStatus');
                return;
            } else {
                if (typeof flag == 'boolean' && flag) {
                    window.setTimeout('WorkScene.saveStatus(true);', 60000);
                }
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
        }
    });
};

WorkScene.fullScreen = function () {
    if (_workspaceCfg.toolbox != '') {
        showFullScreen();
    }
};

WorkScene.OutputCodeCallBack = function (code) {

}

function CheckSceneObject() {
    if (typeof Scene == "undefined" || Scene == null) {
        window.Scene = {};
    }

    if (!Scene.init) {
        Scene.init = function () { };
    }

    if (!Scene.changeConfig) {
        Scene.changeConfig = function () { };
    }

    if (!Scene.UpdateConfig) {
        Scene.UpdateConfig = function () { };
    }

    if (!Scene.reset) {
        Scene.reset = function () {
            Scene.Game.stop();
            Scene.Game.getCurentStage().reset();
            Scene.Game.start();
        };
    }

    if (!Scene.pause) {
        Scene.pause = function () { };
    }

    if (!Scene.startGame) {
        Scene.startGame = function () { };
    }

    if (!Scene.endGame) {
        Scene.endGame = function () { };
    }

    if (!Scene.ResetConfig) {
        Scene.ResetConfig = function () { };
    }

    Scene.stepComplete = function () {
        showCompleteAlert();
    }

    Scene.stepFaild = function () {
        showFaildAlert();
    }
}
'use strict';

var WorkScene = {
    WORKSPACE: null,
    SCORE: 0,

    loadBlocks: function (defaultXml) {
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
            Blockly.Xml.domToWorkspace(xml, this.WORKSPACE);
        } else if (defaultXml) {
            var xml = Blockly.Xml.textToDom(defaultXml);
            Blockly.Xml.domToWorkspace(xml, this.WORKSPACE);
        } else if ('BlocklyStorage' in window) {
            window.setTimeout(BlocklyStorage.restoreBlocks, 0);
        }
    },

    bindClick: function (el, func) {
        if (typeof el == 'string') {
            el = document.getElementById(el);
        }
    },

    importPrettify: function () {
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'style/prettify.css');
        document.head.appendChild(link);
        var script = document.createElement('script');
        script.setAttribute('src', 'javascript/common/prettify.js');
        document.head.appendChild(script);
    },

    init: function () {
        if (_workspaceCfg.toolbox == '') {
            this.init_Static();
        } else {
            this.init_Dynamic();
        }
    },

    init_Dynamic: function () {
        var container = document.getElementById('wrap_WorkSpace');
        var onresize = function (e) {
            var el = $('#content_WorkSpace');
            el.height("100%");
            el.width = ("100%");
        };

        window.addEventListener('resize', onresize, false);
        var blocksXMLDoc = Blockly.Xml.textToDom(_workspaceCfg.toolbox);
        this.WORKSPACE = Blockly.inject('content_WorkSpace',
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
        this.loadBlocks(defaultXml);
        this.WORKSPACE.addChangeListener(this.outputCode);
        if ('BlocklyStorage' in window) {
            BlocklyStorage.backupOnUnload(this.WORKSPACE);
        }

        this.renderContent();
        this.WORKSPACE.setVisible(true);
        Blockly.svgResize(this.WORKSPACE);
        onresize();
        Blockly.svgResize(this.WORKSPACE);
        window.setTimeout(this.importPrettify, 1);
        CheckSceneObject();
        if (Scene.initEnvironment) {
            Scene.initEnvironment('game_container');
            if (Scene.resetSize) {
                Scene.resetSize();
                adjustCanvasSize(true);
            }
        } else {
            Scene.init('game_container', '0', { RowCol: { row: 9, col: 9 } });
        }
    },

    init_Static: function () {
        window.ComputerScene = new Scene(configuration);
        ComputerScene.start();
        CheckSceneObject();
    },

    runJS: function () {
        Blockly.JavaScript.INFINITE_LOOP_TRAP = '  checkTimeout();\n';
        var timeouts = 0;
        var checkTimeout = function () {
            if (timeouts++ > 1000000) {
                throw 'timeout';
            }
        };
        var code = Blockly.JavaScript.workspaceToCode(this.WORKSPACE);
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        try {
            eval(code);
            Scene.UpdateConfig();
        } catch (e) {
            alert('badCode: %1'.replace('%1', e));
        }
    },

    discard: function () {
        var count = this.WORKSPACE.getAllBlocks().length;
        if (count < 2 ||
            window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace('%1', count))) {
            this.WORKSPACE.clear();
            if (window.location.hash) {
                window.location.hash = '';
            }
        }
    },

    renderContent: function () {
        try {
            var editor = $('#iframe_CodeEditor')[0].contentWindow.editor;
            var code = Blockly.JavaScript.workspaceToCode(this.WORKSPACE);
            editor.setValue(code);
        }
        catch (ex) {
        }
    },

    changeSceneCfg: function (cfgObj) {
        Scene.changeConfig(cfgObj);
    },

    outputCode: function () {
        try {
            var editor = $('#iframe_CodeEditor')[0].contentWindow.editor;
            var code = Blockly.JavaScript.workspaceToCode(this.WORKSPACE);
            editor.setValue(code);
            WorkScene.OutputCodeCallBack(code);
        }
        catch (ex) {
        }
    },

    playableScene: function () {
        return (_workspaceCfg.toolbox == '' ? false : true);
    },

    fullScreen: function () {
        if (_workspaceCfg.toolbox != '') {
            showFullScreen();
        }
    },

    OutputCodeCallBack: function (code) {

    },

    saveStatus: function (flag) {
        if (!this.playableScene()) {
            var dataXML = XMLToString(Blockly.Xml.workspaceToDom(this.WORKSPACE));
            var url = _getRequestURL(_gURLMapping.bus.saveworkspace, { symbol: _gStageData.course.id, stage: _gStageData.course.current });
            var successFn = function (response, status) {
                if ($(response).find('err').length > 0) {
                    _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Save_CurrentStepWorspaceStatus');
                    return;
                } else {
                    if (typeof flag == 'boolean' && flag) {
                        window.setTimeout('WorkScene.saveStatus(true);', 60000);
                    }
                }
            };

            ajaxFn('POST', url, dataXML, successFn, _gEmptyFn);
        }
    },

    startGame_Fn: function () {
        var code = Blockly.JavaScript.workspaceToCode(this.WORKSPACE);
        var fnCode = "";
        fnCode += "_blocklyFn.fn=function (){" + code + "}";
        Scene.ResetConfig();
        eval(fnCode);
        Scene.startGame();
    },

    startGame: function () {
        if (typeof (_blocklyFn) != 'undefined' && _blocklyFn != null) {
            this.startGame_Fn();
        } else {
            try {
                var code = $('#iframe_CodeEditor')[0].contentWindow.editor.getValue();
                if (code == "") {
                    code = Blockly.JavaScript.workspaceToCode(this.WORKSPACE);
                }

                Scene.ResetConfig();
                eval(code);
                Scene.startGame();
            }
            catch (ex) {

            }
        }
    },

    endGame: function () {
        Scene.endGame();
    },

    resetScene: function () {
        Scene.reset();
    },

    pauseScene: function () {
        Scene.pause();
    },

    reset: function (force) {
        if (this.WORKSPACE && this.WORKSPACE.clear) {
            this.WORKSPACE.clear();
            if (force !== true) {
                var defaultXml = (!_workspaceCfg.workspace ? '<xml></xml>' : _workspaceCfg.workspace);
                this.loadBlocks(defaultXml);
            }

            Scene.reset();
        } else {
            Scene.reset();
        }
    }
};

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

    Scene.stepComplete = showCompleteAlert;
    Scene.stepFaild = showFaildAlert;
};

function showCompleteAlert() {
    buildStatusAlertWindow();
    $('.wrap-workstatus-alert').show();
    $('.wrap-alert-content.completed').show();
    $('.wrap-alert-content.failed').hide();
    $('.wrap-alert-content.completed .step-status-title').html(_gStageData.course.msg.success);
    $('.wrap-alert-content.completed .step-status-button.next span').text((_gStageData.course.current == _gStageData.course._totalSteps ? '去挑战下一课' : '去挑战下一步'));
    $('.wrap-alert-content.completed .step-status-button.restart span').text((_gStageData.course.current == _gStageData.course._totalSteps ? '重新开始本课' : '重新开始本步'));
    WorkScene.saveStatus();
};

function showFaildAlert() {
    buildStatusAlertWindow();
    $('.wrap-workstatus-alert').show();
    $('.wrap-alert-content.completed').hide();
    $('.wrap-alert-content.failed').show();
    $('.wrap-alert-content.failed .step-status-title').html(_gStageData.course.msg.failed);
};

function buildStatusAlertWindow() {
    if ($('.wrap-workstatus-alert').length <= 0) {
        var tmppHTMLStr = [];
        tmppHTMLStr.push('<div class="wrap-workstatus-alert">');
        tmppHTMLStr.push('    <div class="wrap-alert-content completed">');
        tmppHTMLStr.push('        <div class="container">');
        tmppHTMLStr.push('            <div class="row justify-content-center">');
        tmppHTMLStr.push('                <div class="col-8 text-center container-status-title">');
        tmppHTMLStr.push('                    <i class="fa fa-check-circle-o fa-5x" aria-hidden="true"></i>');
        tmppHTMLStr.push('                    <div class="step-status-title"></div>');
        tmppHTMLStr.push('                </div>');
        tmppHTMLStr.push('            </div>');
        tmppHTMLStr.push('            <div class="row justify-content-center my-3">');
        tmppHTMLStr.push('                <div class="col-2 text-center">');
        tmppHTMLStr.push('                    <div class="step-status-button restart">');
        tmppHTMLStr.push('                      <i class="fa fa-undo"></i><span>重新开始</span>');
        tmppHTMLStr.push('                    </div>');
        tmppHTMLStr.push('                </div>');
        tmppHTMLStr.push('                <div class="col-2">');
        tmppHTMLStr.push('                    <div class="step-status-button next">');
        tmppHTMLStr.push('                      <i class="fa fa-hand-o-right"></i><span>挑战下一步</span>');
        tmppHTMLStr.push('                    </div>');
        tmppHTMLStr.push('                </div>');
        tmppHTMLStr.push('            </div>');
        tmppHTMLStr.push('            <div class="row">');
        tmppHTMLStr.push('                <div class="col text-center step-evaluate-wrap">');
        tmppHTMLStr.push('                    <span>喜欢这个课程吗?</span>');
        tmppHTMLStr.push('                    <span class="fa fa-thumbs-o-up step-evaluate-button yes" data-target="1" title="喜欢"></span>');
        tmppHTMLStr.push('                    <span class="fa fa-thumbs-o-down step-evaluate-button no" data-target="0" title="不喜欢"></span>');
        tmppHTMLStr.push('                </div>');
        tmppHTMLStr.push('            </div>');
        tmppHTMLStr.push('        </div>');
        tmppHTMLStr.push('    </div>');
        tmppHTMLStr.push('    <div class="wrap-alert-content failed my-5">');
        tmppHTMLStr.push('        <div class="container my-5">');
        tmppHTMLStr.push('            <div class="row justify-content-center">');
        tmppHTMLStr.push('                <div class="col-6 text-center container-status-title">');
        tmppHTMLStr.push('                    <i class="fa fa-exclamation-circle fa-5x" aria-hidden="true"></i>');
        tmppHTMLStr.push('                    <div class="step-status-title" id="title_StepFaild">非常抱歉，您的工作出现错误，请检查后继续运行.</div>');
        tmppHTMLStr.push('                </div>');
        tmppHTMLStr.push('            </div>');
        tmppHTMLStr.push('            <div class="row justify-content-center">');
        tmppHTMLStr.push('                <div class="col-4 text-center">');
        tmppHTMLStr.push('                    <div class="step-status-button find-error">');
        tmppHTMLStr.push('                      <i class="fa fa-hand-o-right"></i>查找问题');
        tmppHTMLStr.push('                    </div>');
        tmppHTMLStr.push('                </div>');
        tmppHTMLStr.push('            </div>');
        tmppHTMLStr.push('        </div>');
        tmppHTMLStr.push('    </div>');
        tmppHTMLStr.push('</div>');
        $('body').append($(tmppHTMLStr.join('')));
    }
};

function showCourseMsg(titleText, contentText) {
    $('#title_WorkPlatform_Msg').text(titleText);
    $('#content_WorkPlatform_Msg').text(contentText);
    $('#wrap_WorkPlatform_Msg').show();
    adjustCourseMsgSize(titleText);
    drawMsgAlertLogo();
    var container = $('#container_WorkPlatform_Msg');
    var title = $('#title_WorkPlatform_Msg');
    var content = $('#content_WorkPlatform_Msg');
    var button = $('#btn_Close_WorkPlatform_Msg');
    var trBtn = $('#btn_WorkPlatform_Msg_Close');
    var tmpHeight = container.height() - (trBtn.parent().parent().height() + title.parent().parent().height() + button.parent().parent().height() + 30);
    content.height(tmpHeight);
};

function adjustCourseMsgSize(titleText) {
    var bodyWidth = $('body').width();
    var bodyHeight = $('body').height();
    var ratioRateH = bodyWidth / 1920;
    var ratioRateV = bodyHeight / 1080;
    var wrap = $('#wrap_WorkPlatform_Msg');
    var orgWrapWidth = 525;
    var orgWrapHeight = 315;
    wrap.width(orgWrapWidth * ratioRateH);
    wrap.height(orgWrapHeight * ratioRateV);
    var container = $('#container_WorkPlatform_Msg');
    var orgContainerWidth = 485;
    var orgContainerHeight = 270;
    container.width(orgContainerWidth * ratioRateH);
    container.height(orgContainerHeight * ratioRateV);
    wrap.css('top', (bodyHeight - wrap.height()) / 2 + 'px');
    wrap.css('left', ((bodyWidth - wrap.width()) / 2 - (wrap.width() - container.width())) + 'px');
    var logoContainer = $('#container_WorkPlatform_Msg_Logo');
    var orgLogoContainerSize = 120;
    logoContainer.width(orgLogoContainerSize * (ratioRateV > ratioRateH ? ratioRateH : ratioRateV));
    logoContainer.height(orgLogoContainerSize * (ratioRateV > ratioRateH ? ratioRateH : ratioRateV));
    var logoWrap = $('#wrap_WorkPlatform_Msg_Logo');
    logoWrap.width(logoContainer.width() + 2);
    logoWrap.height(logoContainer.width() + 2);
    var logo = $('#logo_WorkPlatform_Msg');
    var orgLogoWidth = 63;
    var orgLogoHeight = 58;
    var logoWidth = orgLogoWidth * ratioRateH;
    var logoHeight = orgLogoHeight * ratioRateV;
    var shadowX = 3 * ratioRateH;
    var shadowY = 6 * ratioRateV;
    logo.width(logoWidth + shadowX);
    logo.height(logoHeight + shadowY);
    logo.css('top', (logoContainer.height() - logo.height()) / 2 + 'px');
    logo.css('left', (logoContainer.width() - logo.width()) / 2 + 'px');
    logo.attr('width', logo.width());
    logo.attr('height', logo.height());
    var logoCopy = $('#logo_WorkPlatform_Msg_Copy');
    logoCopy.width(logoWidth);
    logoCopy.height(logoHeight);
    logoCopy.attr('width', logoWidth);
    logoCopy.attr('height', logoHeight);
    var title = $('#title_WorkPlatform_Msg');
    var titlePadding = 75 * ratioRateH;
    title.css('padding', '0px ' + titlePadding + 'px');
    var titleWidth = container.width() - 30 - titlePadding * 2;
    var fontSize = 10;
    while (testTextWidth(titleText, fontSize, '', '', '') < titleWidth && fontSize < 30) {
        fontSize++;
    }

    title.css('font-size', fontSize + 'px');
};

function drawMsgAlertLogo() {
    var tmpImg = new Image();
    tmpImg.src = "image/logotop.png";
    tmpImg.onload = function () {
        var logo = $('#logo_WorkPlatform_Msg');
        var logoCopy = $('#logo_WorkPlatform_Msg_Copy');
        var copyCtx = logoCopy[0].getContext('2d');
        var logoCtx = logo[0].getContext('2d');
        copyCtx.drawImage(tmpImg, 0, 0, tmpImg.width, tmpImg.height, 0, 0, logoCopy.width(), logoCopy.height());
        var copyImg = new Image();
        copyImg.src = logoCopy[0].toDataURL("image/png");
        copyImg.onload = function () {
            logoCtx.shadowBlur = 3;
            logoCtx.shadowOffsetX = 3 * $('body').width() / 1920;
            logoCtx.shadowOffsetY = 5 * $('body').height() / 1080;
            logoCtx.shadowColor = "rgb(213,169,114)";
            var ptrn = logoCtx.createPattern(copyImg, 'no-repeat');
            logoCtx.fillStyle = ptrn;
            logoCtx.fillRect(0, 0, logo.width(), logo.height());
        }
    }

    tmpImg.onerror = function () {
        tmpImg.src = "image/logotop.png?rnd=" + Date.now();
    }
};
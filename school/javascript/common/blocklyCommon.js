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
    $('.wrap-alert-content.completed .step-status-button.next span').text((_gStageData.course.current == _gStageData.course._totalSteps ? '挑战下一课' : '挑战下一步'));
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
        initStatusAlertEvents();
    }
};

function initStatusAlertEvents() {
    $('.step-status-button.restart').on('click', function (e) {
        WorkScene.reset(true);
        $('.wrap-workstatus-alert').hide();
    });
    //for dynamic code
    /*
    $('.step-status-button.next').on('click', function (e) {
        var url = _getRequestURL(_gURLMapping.bus.setfinishstep, { symbol: _gStageData.course.id });
        var successFn = function (response, status) {
            if ($(response).find('err').length > 0) {
                _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Finish_CurrentStep');
            } else {
                var tmpURL = _getRequestURL(_gURLMapping.bus.setcurrentstep, { stage: _gStageData.course.next, symbol: _gStageData.course.id });
                var tmpSuccessFn = function (response1, status1) {
                    if ($(response1).find('err').length > 0) {
                        _showGlobalMessage($(response1).find('err').attr('msg'), 'danger', 'alert_Set_CurrentStep');
                    } else {
                        if (_gStageData.isLastScene()) {
                            var tURL = _getRequestURL(_gURLMapping.bus.setfinishscene, { symbol: _gStageData.course.id });
                            ajaxFn('GET', tURL, '<root></root>', _gEmptyFn, _gEmptyFn);
                        }

                        var tmpParam = '&scene=' + (_gStageData.isLastScene() ? _gStageData.course.nextid : _gStageData.course.id);
                        window.location.href = "workplatform.html?rnd=" + Date.now() + tmpParam;
                    }
                };

                ajaxFn('POST', tmpURL, '<root></root>', tmpSuccessFn, _gEmptyFn);
            }
        };

        ajaxFn('GET', url, '<root></root>', successFn, _gEmptyFn);
    });
    */

    //for static code
    $('.step-status-button.next').on('click', function (e) {
        window.location.href = "workplatform.html?scene=" + _gStageData.course.id + "&step=" + _gStageData.course.next;
    });

    $('.step-status-button.find-error').on('click', function (e) {
        $('.wrap-workstatus-alert').hide();
    });

    $('.step-evaluate-button').on('click', function () {
        var currBtn = $(arguments[0].target);
        if (currBtn.hasClass('yes')) {

        } else {

        }
    });
}

function showCourseMsg(titleText, contentText) {
    buildCourseMsgWindow();
    $('.course-msg-alert-title').text(titleText);
    $('.course-msg-alert-content').text(contentText);
    $('.mask-course-msg-alert').show();
    adjustCourseMsgSize();
};

function buildCourseMsgWindow() {
    if ($('.mask-course-msg-alert').length <= 0) {
        var tmppHTMLStr = [];
        tmppHTMLStr.push('<div class="mask-course-msg-alert">');
        tmppHTMLStr.push('  <div class="wrap-course-msg-alert">');
        tmppHTMLStr.push('    <div class="back-course-msg-alert-logo"></div>');
        tmppHTMLStr.push('    <div class="container-course-msg-alert">');
        tmppHTMLStr.push('        <div class="container-fluid h-100">');
        tmppHTMLStr.push('            <div class="row justify-content-end">');
        tmppHTMLStr.push('                <div class="col text-right no-padding">');
        tmppHTMLStr.push('                    <i class="fa fa-close course-msg-alert-btn close" title="Close"></i>');
        tmppHTMLStr.push('                </div>');
        tmppHTMLStr.push('            </div>');
        tmppHTMLStr.push('            <div class="row">');
        tmppHTMLStr.push('                <div class="col">');
        tmppHTMLStr.push('                    <p class="text-center course-msg-alert-title"></p>');
        tmppHTMLStr.push('                </div>');
        tmppHTMLStr.push('            </div>');
        tmppHTMLStr.push('            <div class="row course-msg-alert-content-row">');
        tmppHTMLStr.push('                <div class="col">');
        tmppHTMLStr.push('                    <p class="text-center course-msg-alert-content"></p>');
        tmppHTMLStr.push('                </div>');
        tmppHTMLStr.push('            </div>');
        tmppHTMLStr.push('            <div class="row course-msg-alert-footer-row">');
        tmppHTMLStr.push('                <div class="col text-center">');
        tmppHTMLStr.push('                    <button type="button" class="btn btn-sm btn-success course-msg-alert-btn ok">我知道了</button>');
        tmppHTMLStr.push('                </div>');
        tmppHTMLStr.push('            </div>');
        tmppHTMLStr.push('        </div>');
        tmppHTMLStr.push('    </div>');
        tmppHTMLStr.push('    <div class="front-course-msg-alert-logo">');
        tmppHTMLStr.push('      <img src="image/logotop.png">');
        tmppHTMLStr.push('    </div>');
        tmppHTMLStr.push('  </div>');
        tmppHTMLStr.push('</div>');
        $('body').append($(tmppHTMLStr.join('')));
        $('.course-msg-alert-btn').on('click', function () {
            $('.mask-course-msg-alert').hide();
        });
    }
};

function adjustCourseMsgSize() {
    var sizeRate = 55 / 1160;
    var hwRate = 51 / 55;
    var offsetRate = -25 / 1160;
    var imgWidth = $('body').width() * sizeRate;
    var imgHeight = imgWidth * hwRate;
    $('.front-course-msg-alert-logo img').attr('width', imgWidth);
    var offset = $('body').width() * offsetRate;
    $('.back-course-msg-alert-logo').width(imgWidth + 22);
    $('.back-course-msg-alert-logo').height(imgHeight + 22);
    $('.front-course-msg-alert-logo').css('top', offset + 'px');
    $('.front-course-msg-alert-logo').css('left', offset + 'px');
    $('.back-course-msg-alert-logo').css('top', offset - 1 + 'px');
    $('.back-course-msg-alert-logo').css('left', offset - 1 + 'px');
};
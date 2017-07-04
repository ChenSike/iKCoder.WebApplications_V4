'use strict';

var _workspaceCfg = {};
var _globalTree = null;
var _globalTreeRoot = null;
var _globalProjectType = '';
var _useFullContainer = false;
var Scene = {};

function initPage() {
    //_registerRemoteServer();
    //$.ajax({
    //    type: 'GET',
    //    async: true,
    //    url: _getRequestURL(_gURLMapping.account.signstatus),
    //    data: '<root></root>',
    //    success: function (data_1, status) {
    //        if ($(data_1).find('err').length > 0) {
    //            window.location.href = "signin.html?rnd=" + Date.now();
    //            return;
    //        } else {
    //            $.ajax({
    //                type: 'POST',
    //                async: true,
    //                url: _getRequestURL(_gURLMapping.bus.getworkspace, { symbol: getQueryString() }),
    //                data: '<root></root>',
    //                success: function (response, status) {
    //                    if ($(response).find('err').length > 0) {
    //                        _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Input_OldPWD');
    //                        return;
    //                    }
    //                    var data = initData(response);
    //                    _workspaceCfg = data.blockly;
    //                    updateUserInfo(data.user);
    //                    $('#mask_Page_Loading').hide();
    //                    $('#mask_Page_Loading').css('visibility', 'hidden');
    //                    window.setTimeout('adjustSceneContainerSize();', 2000);
    //                    window.setTimeout('WorkScene.saveStatus(true);', 60000);
    //                },
    //                dataType: 'xml',
    //                xhrFields: {
    //                    withCredentials: true
    //                },
    //                error: function () {
    //                }
    //            });
    //        }
    //    },
    //    dataType: 'xml',
    //    xhrFields: {
    //        withCredentials: true
    //    },
    //    error: function () {
    //        window.location.href = "signin.html?rnd=" + Date.now();
    //    }
    //});

    var dataXML = Blockly.Xml.textToDom('<root>' +
        '   <basic>' +
        '		<usr id="42" nickname=""/>' +
        '	</basic>' +
        '	<workspacestatus>' +
        '		<xml xmlns="http://www.w3.org/1999/xhtml"/>' +
        '	</workspacestatus>' +
        '</root>');
    var data = initData(dataXML);
    _workspaceCfg = data.blockly;
    updateUserInfo(data.user);
    LoadSceneLib(data.blockly);
    $('#mask_Page_Loading').hide();
    $('#mask_Page_Loading').css('visibility', 'hidden');
    window.setTimeout('WorkScene.saveStatus(true);', 60000);
    initEvents();
    adjustSceneContainerSize();
    resetWPBtnPosition();
    initSiderTree();
    initContextMenu();
};

function initEvents() {
    document.oncontextmenu = function () { return false; };
    //$('#game_container').oncontextmenu = function () { return false; };
    $('.workspace-tool-item.workspace-play-button.fa.fa-play').on('click', function () {
        if (WorkScene.playableScene()) {
            if ($(this).hasClass('fa-play')) {
                WorkScene.startGame();
                resetPlayBtn('R');
            } else if ($(this).hasClass('fa-undo')) {
                WorkScene.resetScene();
                resetPlayBtn('P');
            }
        }
    });

    $('.workspace-tool-item.workspace-share-button.fa.fa-share-alt').on('click', function () {
        alert("'Share' will coming soon!");
    });

    $('.workspace-tool-item.workspace-fullscreen-button.fa.fa-arrows-alt').on('click', function () {
        showFullScreen();
    });

    $('.run-scene-fullscreen-full-button').on('click', function () {
        showFullScreen();
    });

    $('.workspace-tool-item.workspace-referesh-button.fa.fa-repeat').on('click', function () {
        WorkScene.reset(true);
    });

    $(document).keydown(function () {
        if (arguments[0].keyCode == '27' && $('.run-scene-fullscreen').css('width') == '100%') {
            $('.run-scene-fullscreen').width('30%');
            $('.run-scene-fullscreen').height('30%');
        }
    });

    $(".sider-bar-drag-proxy").mouseup(function () {
        $(document).unbind("mousemove");
        var dragProxy = $(".sider-bar-drag-proxy")
        if (dragProxy.css("display") != "none") {
            var left = dragProxy.offset().left;
            var tmpWidth = $('#content_WorkSpace').width() - left - $(".sider-bar-drag").width();
            tmpWidth = (tmpWidth < 100 ? 100 : tmpWidth);
            $(".sider-bar-wrap").width(tmpWidth);
            $(".sider-bar-wrap").css("left", $("body").width() - tmpWidth + "px");
            $(".sider-bar-drag-proxy").css("display", "none");
            $(".sider-bar-drag-proxy").css("visibility", "hidden");
            resetWPBtnPosition();
            adjustSceneContainerSize();
        }
    });

    $(".sider-bar-drag").mousedown(function (e) {
        if ($(".sider-bar-drag").hasClass('expanded')) {
            $(".sider-bar-drag-proxy").css("display", "block");
            $(".sider-bar-drag-proxy").css("visibility", "visible");
            $(".sider-bar-drag-proxy").height($(".sider-bar-drag").height());
            $(".sider-bar-drag-proxy").css("left", $(".sider-bar-drag").offset().left + "px");
            siderBarDrag(e);
        }
    });

    $(".content_WorkSpace").focus(function () {
        $('#wrap_Sider_Bar').hide();
    });

    $('.run-scene-fullscreen-close-button').on('click', function (e) {
        var wrap = $('.run-scene-fullscreen');
        if ($('.run-scene-fullscreen-full-button').css('display') == 'none') {
            adjustSceneContainerSize();
        } else {
            wrap.width(30);
            wrap.height(30);
            var contentEl = $('#content_WorkSpace')
            var tmpLeft = contentEl.width() - wrap.width();
            if ($('#wrap_Sider_Bar').css('display') != 'none') {
                tmpLeft -= $('#wrap_Sider_Bar').width() + 4;
            }

            wrap.css('top', contentEl.offset().top + 'px');
            wrap.css('left', tmpLeft + 'px');
            $('.run-scene-fullscreen-full-button').hide();
            $('.run-scene-fullscreen-close-button').hide();
            $('.run-scene-fullscreen-expand-button').show();
        }
    });

    $('.run-scene-fullscreen-expand-button').on('click', function (e) {
        adjustSceneContainerSize();
    });

    $('.run-scene-fullscreen-play-button').on('click', function () {
        if (WorkScene.playableScene) {
            if ($(this).hasClass('fa-play-circle-o')) {
                WorkScene.startGame();
                resetPlayBtn('R');
            } else if ($(this).hasClass('fa-undo')) {
                WorkScene.resetScene();
                resetPlayBtn('P');
            }
        }
    });

    $('#btn_Close_WorkPlatform_Msg').on('click', function (e) {
        $('#wrap_WorkPlatform_Msg').hide();
        $('#title_WorkPlatform_Msg').text('');
        $('#content_WorkPlatform_Msg').text('');
    });

    $('#btn_WorkPlatform_Msg_Close').on('click', function (e) {
        $('#wrap_WorkPlatform_Msg').hide();
        $('#title_WorkPlatform_Msg').text('');
        $('#content_WorkPlatform_Msg').text('');

    });

    $(window).resize(function () {
        adjustSceneContainerSize();
    });

    $(window).on('beforeunload', function () {
        WorkScene.saveStatus();
    });

    initVSEvent();
};

function initData(response) {
    var userItem = $($(response).find("basic").find("usr")[0]);
    var data = {
        user: {
            id: userItem.attr('id'),
            name: userItem.attr('nickname'),
            img: _getRequestURL(userItem.attr('header'), {})
        },
        blockly: {
            workspace: $(response).find("workspacestatus").html(),
            lib: []
        }
    }

    var addLibPath = function (node) {
        var tmpAttr = node.attr('src');
        if (tmpAttr && tmpAttr != '') {
            data.blockly.lib.push('javascript/scene/' + tmpAttr);
        }
    }

    var tmpPaths = $(response).find("game").find('script');
    for (var i = 0; i < tmpPaths.length ; i++) {
        addLibPath($(tmpPaths[i]));
    }

    return data;
};

function updateUserInfo(data) {
    $('.header-user-image').attr('src', _getRequestURL(_gURLMapping.account.getheader, {}));
    $('.header-user-name-text').text(data.name);
    $('.header-user-name-text').text(data.name);
};

function playSoundMark(eventObj) {
    var soundSource = $(eventObj.target).attr('data-target');
    $("#audio_Soundmark").attr('src', soundSource);
    $("#audio_Soundmark")[0].play();
};

function adjustSceneContainerSize() {
    var wrap = $('.run-scene-fullscreen');
    wrap.width('30%');
    wrap.height('30%');
    var contentEl = $('#content_WorkSpace')
    wrap.css('top', contentEl.offset().top + 'px');
    var tmpLeft = contentEl.width() - wrap.width();
    if ($('#wrap_Sider_Bar').css('display') != 'none') {
        tmpLeft -= $('#wrap_Sider_Bar').width() + 4;
    }

    wrap.css('left', tmpLeft + 'px');
    adjustCanvasSize();
    if (typeof Scene == 'object' && Scene.resetSize) {
        Scene.resetSize();
    }

    resizePlayButton();
    $('.run-scene-fullscreen-full-button').show();
    $('.run-scene-fullscreen-close-button').show();
    $('.run-scene-fullscreen-expand-button').hide();
};

function resizePlayButton() {
    var wrap = $('.run-scene-fullscreen');
    var playButton = $('.run-scene-fullscreen-play-button');
    var fontSize = Math.floor(wrap.height() * 20 / 100);
    playButton.css('font-size', fontSize + 'px');
    playButton.css('left', ((wrap.width() - fontSize) / 2) + 'px)');
    playButton.css('top', ((wrap.height() - fontSize) / 2) + 'px');
};

function showFullScreen() {
    var wrap = $('.run-scene-fullscreen');
    wrap.width('100%');
    wrap.height('100%');
    wrap.css('left', '0px');
    wrap.css('top', '0px');
    $('.run-scene-fullscreen-full-button').hide();
    $('.run-scene-fullscreen-close-button').show();
    $('.run-scene-fullscreen-expand-button').hide();
    adjustCanvasSize($('.run-scene-fullscreen'));
    resizePlayButton();
    if (typeof Scene == 'object' && Scene.resetSize) {
        Scene.resetSize();
    }
};

function adjustCanvasSize() {
    var currentWrap = $('.run-scene-fullscreen');
    var container = $('#game_container');
    var canvas = container.find('canvas');
    var tmpRate = canvas.height() / canvas.width();
    var tmpHeight = currentWrap.height();
    var tmpWidth = currentWrap.width();
    var newWidth = tmpWidth;
    var newHeight = tmpHeight;
    if (!_useFullContainer) {
        //var tmpSize = (tmpHeight > tmpWidth) ? tmpWidth : tmpHeight;
        if (tmpHeight / tmpWidth < tmpRate) {
            newWidth = tmpHeight / tmpRate;
        } else {
            newHeight = tmpWidth * tmpRate;
        }

        container.height(newHeight);
        container.width(newWidth);
        container.css('margin-left', (tmpWidth - newWidth) / 2 + 'px');
    } else {
        container.css('width', '100%');
        container.css('height', '100%');
        container.css('margin-left', '0px');
    }

    canvas.height(newHeight);
    canvas.width(newWidth);
};

function getQueryString() {
    var tempArr = window.location.search.substr(1).split('&');
    for (var i = 0; i < tempArr.length; i++) {
        var strArr = tempArr[i].split('=');
        if (strArr[0] == 'scene') {
            return strArr[1];
        }
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

function LoadSceneLib(data) {
    if (data.lib.length > 0) {
        $.getScript(data.lib[0], function () {
            data.lib.shift();
            LoadSceneLib(data);
        });
    } else {
        WorkScene.init();
    }
};

function resetPlayBtn(operation) {
    var toolboxBtn = $('.workspace-tool-item.workspace-play-button');
    var screenBtn = $('.run-scene-fullscreen-play-button');
    if (operation == 'P') {
        toolboxBtn.removeClass('fa-undo');
        screenBtn.removeClass('fa-undo');
        toolboxBtn.addClass('fa-play');
        screenBtn.addClass('fa-play-circle-o');
        toolboxBtn.attr('title', '开始运行');
        screenBtn.attr('title', '开始运行');
    } else {
        toolboxBtn.removeClass('fa-play');
        screenBtn.removeClass('fa-play-circle-o');
        toolboxBtn.addClass('fa-undo');
        screenBtn.addClass('fa-undo');
        toolboxBtn.attr('title', '重新开始');
        screenBtn.attr('title', '重新开始');
    }
};

function resetWPBtnPosition() {
    try {
        var left = $('#content_WorkSpace').width() - $('#wrap_Sider_Bar').width() - 10;
        var top = $('.blocklyZoom')[0].transform.animVal[0].matrix.f;
        $('.blocklyZoom').attr('transform', 'translate(' + (left - 40) + ',' + top + ')');
        var top = $('.blocklyTrash')[0].transform.animVal[0].matrix.f;
        $('.blocklyTrash').attr('transform', 'translate(' + (left - 45) + ',' + top + ')');
    } catch (ex) {
    }
};

function siderBarDrag(e) {
    var _sidebarDragStarX = e.pageX;
    $(document).bind("mousemove", function (ev) {
        $(".sider-bar-drag-proxy").css("left", ev.pageX - 2 + "px");
    });
};
//blockly common
var WorkScene = {};
WorkScene.workspace = null;
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
    var container = document.getElementById('wrap_WorkSpace');
    var onresize = function (e) {
        var contentEl = $('#content_WorkSpace');
        contentEl.height($('body').height() - $('#menu_NavBar').height() - $('#tool_NavBar').height() - $('.card-header').height() - $('#toolbar_Wrap_Workspace').height());
        contentEl.width = ($('.card.cord-wrap').width());
    };

    window.addEventListener('resize', onresize, false);
    var blocksXMLDoc = Blockly.Xml.textToDom(XMLToString(LoadXMLFile('javascript/appstudio/2d/blocks/background/toolbox.xml')));
    //var blocksXMLDoc = Blockly.Xml.textToDom('<xml id="toolbox" style="display: none"><category></category></xml>');
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
    //var defaultXml = (!_workspaceCfg.workspace ? '<xml></xml>' : _workspaceCfg.workspace);
    var defaultXml = ('<xml></xml>');
    WorkScene.loadBlocks(defaultXml);
    WorkScene.workspace.addChangeListener(WorkScene.outputCode);

    if ('BlocklyStorage' in window) {
        BlocklyStorage.backupOnUnload(WorkScene.workspace);
    }

    WorkScene.renderContent();
    WorkScene.workspace.setVisible(true);
    Blockly.svgResize(WorkScene.workspace);
    onresize();
    Blockly.svgResize(WorkScene.workspace);
    window.setTimeout(WorkScene.importPrettify, 1);
    if (Scene && Scene.initEnvironment) {
        Scene.initEnvironment('game_container');
        Scene.resetSize();
    }
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

WorkScene.outputCode = function () {
    try {
        var content = $('#txt_Code_Content');
        var code = Blockly.JavaScript.workspaceToCode(WorkScene.workspace);
        content.text(code);
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

WorkScene.startScene = function () {
    try {
        var code = Blockly.JavaScript.workspaceToCode(WorkScene.workspace);
        eval(code);
        Scene.start();
    }
    catch (ex) {

    }
};

WorkScene.endScene = function () {
    Scene.end();
};

WorkScene.reset = function (force) {
    if (WorkScene.workspace && WorkScene.workspace.clear) {
        WorkScene.workspace.clear();
        if (force !== true) {
            var defaultXml = (!_workspaceCfg.workspace ? '<xml></xml>' : _workspaceCfg.workspace);
            //defaultXml = XMLToString(LoadXMLFile(_workspaceCfg.workspace));
            WorkScene.loadBlocks(defaultXml);
        }
    }

    Scene.reset();
};

WorkScene.saveStatus = function (flag) {
    return;
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

WorkScene.OutputCodeCallBack = function (code) {
};

function _generateGUID() {
    var length = 20;
    var soupLength = _generateGUID.soup_.length;
    var id = [];
    for (var i = 0; i < length; i++) {
        id[i] = _generateGUID.soup_.charAt(Math.random() * soupLength);
    }
    return id.join('');
};

_generateGUID.soup_ = '!#$%()*+,-./:;=?@[]^_`{|}~' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//
function initVSEvent() {
    var projectType = '';
    var projectName = '';
    var targetType = '';
    $('#modal_Input_FieldName').on('show.bs.modal', function (e) {
        $('#txt_Field_Name').val('');
        var title = '项目名称';
        projectType = '';
        targetType = '';
        if (typeof e.relatedTarget == 'undefined' || !e.relatedTarget) {
            targetType = $(e.target).attr('data-targettype');
            switch (targetType) {
                case 'stage':
                    title = '场景名称';
                    break;
                case 'object':
                    title = '对象名称';
                    break;
            }
        } else {
            var source = $(e.relatedTarget);
            var pType = source.attr('data-p-type');
            if (pType.indexOf('proj-') == 0) {
                projectType = pType;
            } else if (pType.indexOf('obj-') == 0) {
                targetType = pType;
                var nodeId = $('#modal_Create_Object').attr('data-targetid');
                if (pType.indexOf('background') > 0) {
                    var sourceNode = _globalTree.findNodes(nodeId, 'nodeId')[0];
                    if (typeof (sourceNode.nodes) == 'object' && sourceNode.nodes && sourceNode.nodes.length > 0) {
                        for (var i = 0; i < sourceNode.nodes.length; i++) {
                            if (sourceNode.nodes[i].itemType == pType) {
                                _showGlobalMessage('每个场景只能包含一个背景对象！', 'warning', 'warning_Create_Background');
                                return false;
                            }
                        }
                    }
                }

                $(this).attr('data-targetid', nodeId);
            }
        }

        $('#title_Modal_Input_FieldName').text(title);
        $('#modal_Create_Object').hide();
        $('#modal_Create_Project').hide();
    });

    $('#modal_Create_Object').on('show.bs.modal', function (e) {
        var type = _globalTree.findNodes($(this).attr('data-targetid'), 'nodeId')[0].itemType;
    });

    $('#btn_OK_Input_FieldName').on('click', function () {
        projectName = $('#txt_Field_Name').val().trim();
        if (projectName != '') {
            if (projectType != '') {
                createProject(projectType, projectName);
                $('#modal_Create_Project').modal('hide');
                _globalProjectType = projectType;
            } else {
                switch (targetType) {
                    case 'stage':
                        createStage(projectName);
                        break;
                    case 'obj-background-2d':
                    case 'obj-player-2d':
                    case 'obj-npc-2d':
                    case 'obj-prop-2d':
                        $('#modal_Create_Object').modal('hide');
                        createObject(targetType, projectName, $('#modal_Input_FieldName').attr('data-targetid'));
                        break;
                }
            }

            $('#modal_Input_FieldName').modal('hide');
        }
    });

    $('#btn_OK_Remove_TreeNode').on('click', function () {
        var tmpNode = _globalTree.findNodes($('#modal_Create_Object').attr('data-targetid'), 'nodeId')[0];
        $("#tree").treeview("removeNode", [tmpNode]);
    });
};

function initSiderTree() {
    var tree = [{
        text: "Story",
        nodes: [{
            text: "Stage 1",
            state: { expanded: true },
            guid: _generateGUID(),
            itemType: 'project',
            ptype: 'project',
            icon: "fa fa-cogs",
            nodes: [{
                text: "background 1",
                guid: _generateGUID(),
                itemType: 'obj-background-2d',
                ptype: 'obj-background-2d',
                icon: 'fa fa-file-image-o'
            }, {
                text: "background audio 1",
                guid: _generateGUID(),
                itemType: 'obj-backgroundaudio-2d',
                ptype: 'obj-backgroundaudio-2d',
                icon: 'fa fa-music'
            }, {
                text: "player 1",
                guid: _generateGUID(),
                itemType: 'obj-player-2d',
                ptype: 'obj-player-2d',
                icon: 'fa fa-gamepad'
            }, {
                text: "npc 1",
                guid: _generateGUID(),
                itemType: 'obj-npc-2d',
                ptype: 'obj-npc-2d',
                icon: 'fa fa-paw'
            }, {
                text: "prop 1",
                guid: _generateGUID(),
                itemType: 'obj-prop-2d',
                ptype: 'obj-prop-2d',
                icon: 'fa fa-wrench'
            }],
            itemType: 'stage',
            ptype: 'stage',
            icon: "fa fa-folder-open"
        }]
    }];
    $('#tree').treeview({ data: tree, showBorder: false });
    $('#tree').on('nodeSelected', function (event, data) {
        resetTBAndWS(event, data);
    });

    _globalTree = $('#tree').treeview(true);
    loadLibForProject('game2d');
};

function initContextMenu() {
    $('#tree').contextmenu({
        target: '#menu_Tree_Context',
        before: function (e) {
            e.preventDefault();
            if (e.target.tagName != 'LI' || e.target.innerText == '') {
                e.preventDefault();
                this.closemenu();
                return false;
            } else {
                $('#menu_Tree_Context .dropdown-menu .dropdown-item').hide();
                $('#menu_Tree_Context .dropdown-menu .dropdown-item').attr('data-targetid', '');
                var nodeId = $(e.target).attr('data-nodeid');
                var tmpNode = _globalTree.findNodes(nodeId, 'nodeId')[0];
                switch (tmpNode.itemType) {
                    case 'project':
                        $('#item_ContextMenu_AddStage').show();
                        $('#item_ContextMenu_AddStage').attr('data-targetid', nodeId);
                        break;
                    case 'stage':
                        $('#item_ContextMenu_DeleteStage').show();
                        $('#item_ContextMenu_DeleteStage').attr('data-targetid', nodeId);
                        $('#item_ContextMenu_DeleteStage').text('删除场景: ' + tmpNode.text);
                        $('#item_ContextMenu_AddObject').show();
                        $('#item_ContextMenu_AddObject').attr('data-targetid', nodeId);
                        break;
                    default:
                        if (tmpNode.itemType.indexOf('obj-') == 0) {
                            $('#item_ContextMenu_DeleteObject').show();
                            $('#item_ContextMenu_DeleteObject').attr('data-targetid', nodeId);
                            $('#item_ContextMenu_DeleteObject').text('删除对象: ' + tmpNode.text);
                            $('#item_ContextMenu_AddSubObject').show();
                            $('#item_ContextMenu_AddSubObject').attr('data-targetid', nodeId);
                        }
                        break;
                }
            }

            return true;
        }
    });

    $('#item_ContextMenu_AddStage').on('click', function (eventObj) {
        $('#modal_Input_FieldName').attr('data-targettype', 'stage');
        $('#modal_Input_FieldName').modal('show');
    });

    $('#item_ContextMenu_AddObject').on('click', function (eventObj) {
        $('#modal_Create_Object').attr('data-targetid', $('#item_ContextMenu_AddObject').attr('data-targetid'));
        $('#modal_Create_Object').modal('show');
    });

    $('#item_ContextMenu_AddSubObject').on('click', function (eventObj) {

    });

    $('#item_ContextMenu_DeleteObject').on('click', function (eventObj) {
        openRemoveConfirmWindow($('#item_ContextMenu_DeleteObject').attr('data-targetid'));
    });

    $('#item_ContextMenu_DeleteStage').on('click', function (eventObj) {
        openRemoveConfirmWindow($('#item_ContextMenu_DeleteStage').attr('data-targetid'));
    });
};

function createProject(type, name) {
    if (!_globalTreeRoot) {
        _globalTreeRoot = _globalTree.getNodes('0.0')[0];
    }

    _globalTreeRoot.$el.text(name);
    _globalTreeRoot.text = name;
    _globalTreeRoot.itemType = 'project';
    _globalTreeRoot.guid = _generateGUID();
    loadLibForProject(type);
};

function createStage(stageName) {
    var newNode = {
        text: stageName,
        id: _generateGUID(),
        itemType: 'stage',
        ptype: 'stage',
        icon: "fa fa-folder-open"
    };

    $("#tree").treeview("addNode", [newNode, _globalTreeRoot]);
};

function createObject(objType, objName, parentNodeId) {
    var icon = '';
    switch (objType) {
        case 'obj-background-2d':
            icon = 'fa fa-file-image-o';
            break;
        case 'obj-backgroundaudio-2d':
            icon = 'fa fa-music';
            break;
        case 'obj-player-2d':
            icon = 'fa fa-gamepad';
            break;
        case 'obj-npc-2d':
            icon = 'fa fa-paw';
            break;
        case 'obj-prop-2d':
            icon = 'fa fa-wrench';
            break;
    }

    var newNode = {
        text: objName,
        guid: _generateGUID(),
        itemType: objType,
        ptype: objType,
        icon: icon
    };

    $("#tree").treeview("addNode", [newNode, _globalTree.findNodes(parentNodeId, 'nodeId')[0]]);
};

function openRemoveConfirmWindow(nodeId) {
    var tmpNode = _globalTree.findNodes(nodeId, 'nodeId')[0];
    var text = '';
    switch (tmpNode.itemType) {
        case 'stage':
            text = '场景';
            break;
        case 'obj-background-2d':
            text = '背景';
            break;
        case 'obj-backgroundaudio-2d':
            text = '背景音乐';
            break;
        case 'obj-player-2d':
            text = '玩家角色对象';
            break;
        case 'obj-npc-2d':
            text = '非玩家角色对象';
            break;
        case 'obj-prop-2d':
            text = '道具对象';
            break;
    }

    $('#modal_Create_Object').attr('data-targetid', nodeId);
    $('#title_Modal_Remove_TreeNode').text('确认删除' + text);
    $('#modal_Remove_TreeNode').find('.modal-body').find('p').text('确认要删除【' + text + '】: ' + tmpNode.text + ' 吗?');
    $('#modal_Remove_TreeNode').modal('show');
};

function resetTBAndWS(eventObj, node) {
    WorkScene.workspace.clear();
    var toolbox = '<xml id="toolbox" style="display: none"><category></category></xml>';
    var workspace = '<xml></xml>';
    if (node.itemType.indexOf('obj-') == 0) {
        var folderArr = node.itemType.split('-');
        toolbox = $(XMLToString(LoadXMLFile('javascript/appstudio/' + folderArr[2] + '/blocks/' + folderArr[1] + '/toolbox.xml')));
        workspace = XMLToString(LoadXMLFile('javascript/appstudio/' + folderArr[2] + '/blocks/' + folderArr[1] + '/default.xml'));
        var nodes = _globalTree.findNodes(node.parentId, 'nodeId')[0].nodes;
        var tmpToolbox, tmpCateNode, tmpCateNodes, tmpBlockNodes;
        for (var i = 0; i < nodes.length; i++) {
            if (node.nodeId == nodes[i].nodeId) {
                continue;
            }

            folderArr = nodes[i].itemType.split('-');
            tmpToolbox = $(XMLToString(LoadXMLFile('javascript/appstudio/' + folderArr[2] + '/blocks/' + folderArr[1] + '/toolbox.xml')));
            tmpCateNodes = tmpToolbox.find('category');
            tmpCateNode = null;
            for (var j = 0; j < tmpCateNodes.length; j++) {
                tmpCateNode = $(tmpCateNodes[j]);
                if (tmpCateNode.attr('id').indexOf('_method') > 0) {
                    tmpCateNode.attr('name', nodes[i].text);
                    tmpCateNode.attr('id', tmpCateNode.attr('id') + '_' + nodes[i].guid);
                    tmpBlockNodes = tmpCateNode.find('block');
                    for (var k = 0; k < tmpBlockNodes.length; k++) {
                        $(tmpBlockNodes[k]).attr('sourceobj', nodes[i].guid);
                    }

                    toolbox.append(tmpCateNode);
                }
            }
        }
    }

    toolbox = Blockly.Xml.textToDom(toolbox[0].outerHTML);
    WorkScene.loadBlocks(workspace);
    Blockly.updateToolbox(toolbox);
};

function LoadLibs(libs) {
    if (libs.length > 0) {
        $.getScript(libs[0], function () {
            libs.shift();
            LoadLibs(libs);
        });
    }
};

function loadLibForProject(type) {
    var libs = [];
    var object2d = ['background', 'backgroundaudio', 'player', 'npc', 'prop', 'global'];
    var subTypes = ['property', 'method', 'event'];
    switch (type) {
        case 'story2d':
        case 'game2d':
            //libs.push('javascript/common/pixi.js');
            //libs.push('javascript/appstudio/2d/blocks/global/object.js');
            //for (var i = 0; i < object2d.length; i++) {
            //    for (var j = 0; j < subTypes.length; j++) {
            //        libs.push('javascript/appstudio/2d/blocks/' + object2d[i] + '/' + subTypes [j]+ '.js');
            //    }
            //}
            break;
    }

    LoadLibs(libs);
};

function showBlocklyPopup(title, body, handler, args) {
    $('#title_Modal_Blockly_Popup').text(title);
    $('#body_Modal_Blockly_Popup').html(body);
    $('#btn_OK_Modal_Blockly_Popup').unbind();
    $('#btn_OK_Modal_Blockly_Popup').on('click', function (eventObj) {
        $('#modal_Blockly_Popup').modal('hide');
        handler(args);
    });

    $('#modal_Blockly_Popup').modal('show');
}
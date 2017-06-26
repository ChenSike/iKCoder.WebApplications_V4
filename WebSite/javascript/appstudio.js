'use strict';

var _workspaceCfg = {};
var _globalTree = null;
var _globalTreeRoot = null;

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
    createTree();
};

function createTree() {
    var tree = [{ text: "工程", nodes: [] }];
    $('#tree').treeview({ data: tree, showBorder: false });
    _globalTree = $('#tree').treeview(true);
};

function initEvents() {
    document.oncontextmenu = function () { return false; };
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
        $(".sider-bar-drag-proxy").css("left", ev.pageX + "px");
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
    var blocksXMLDoc = Blockly.Xml.textToDom(XMLToString(LoadXMLFile('javascript/appstudio/toolbox.xml')));
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
    if (Scene.initEnvironment) {
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
//
function initVSEvent() {
    var projectType = '';
    var projectName = '';
    $('#modal_Input_FieldName').on('show.bs.modal', function (e) {
        var source = $(e.relatedTarget);
        projectType = source.attr('data-p-type');

    });

    $('#btn_OK_Input_FieldName').on('click', function () {
        projectName = $('#txt_Field_Name').val().trim();
        if (projectName != '') {
            createProject(projectType, projectName);
            $('#modal_Input_FieldName').modal('hide');
            $('#modal_Create_Project').modal('hide');
        }
    });
}

function createProject(type, name) {
    switch (type) {
        case 'story2d':
            break;
        case 'game2d':
            break;
    }

    if (!_globalTreeRoot) {
        _globalTreeRoot = _globalTree.getNodes('0.0')[0];
    }

    _globalTreeRoot.$el.text(name);
    _globalTreeRoot.text = name;
    _globalTreeRoot.itemType = 'project';
};
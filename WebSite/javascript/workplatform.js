'use strict';

var _useFullContainer = false;
var _gStageData = {
    user: { id: '', name: '', img: '' },
    course: { id: '', nextid: '', name: '', total: 0, current: 0, next: 0, complete: 0, note: [], words: [], kps: [], msg: {} },
    blockly: { toolbox: '', workspace: '', lib: [] },
    isLastScene: function () {
        return this.course.current == this.course.total;
    }
};
var _workspaceCfg = {};
var _codeEditor_HTML = null;
var _codeEditor_JS = null;
var _forceReset = true;
var _topTooltip = [];

function initPage() {
    $('#mask_Page_Loading').hide();
    $('#mask_Page_Loading').css('visibility', 'hidden');
    var tmpStage = getQueryString('scene');
    var tmpStep = getQueryString('step');
    adjustMainSize(tmpStep == '' ? true : false);
    //var url = _getRequestURL(_gURLMapping.account.signstatus);
    //var successFn = function (response, status) {
    //    if ($(response).find('err').length > 0) {
    //        window.location.href = "signin.html?rnd=" + Date.now();
    //        return;
    //    } else {
    //        var tmpURL = _getRequestURL(_gURLMapping.bus.getworkspace, { symbol: getQueryString('scene') });
    //        var tmpSuccessFn = function (tmpResponse, tmpStatus) {
    //            if ($(tmpResponse).find('err').length > 0) {
    //                _showGlobalMessage($(tmpResponse).find('err').attr('msg'), 'danger', 'alert_Input_OldPWD');                    
    //            } else {
    //                initData(dataXML);
    //                buildHeaderHTML();
    //                buildCourseTips();
    //                hideLoadingMask();
    //                resetWorkSpace();
    //                loadSceneLib();
    //                initEvents();
    //                //window.setTimeout('WorkScene.saveStatus(true);', 60000);
    //            }
    //        };
    //        ajaxFn('POST', tmpURL, '<root></root>', tmpSuccessFn, _gEmptyFn);
    //    }
    //};
    //var failedFn = function () {
    //    window.location.href = "signin.html?rnd=" + Date.now();
    //};
    //ajaxFn('GET', url, '<root></root>', successFn, failedFn);

    //for test football
    adjustDisplayPart(tmpStep == '' ? true : false);
    if (tmpStep != "") {
        var dataXML = LoadXMLFile('javascript/scene/datadoc/' + tmpStage + tmpStep + '.xml');
        initData(dataXML);
        buildHeaderHTML();
        buildCourseTips();
        hideLoadingMask();
        resetWorkSpace();
        loadSceneLib();
        //window.setTimeout('WorkScene.saveStatus(true);', 60000);
    } else {
        initialCodeModalComp();
    }

    initEvents(tmpStep == '' ? true : false);
};

function initialCodeModalComp() {
    var wrapHeight = $('#wrap_Workspace_CodeModal').height();
    $('.edoitor-tabs-wrap-col').height(wrapHeight * 0.7 - 30);
    $('#Toolbar_Workspace_CodeModal').parent().height(30);
    var tmpHeight = wrapHeight - $('.edoitor-tabs-wrap-col').parent().height() - $('#Toolbar_Workspace_CodeModal').parent().height();
    $('#Console_Workspace_CodeModal').parent().height(tmpHeight);
    tmpHeight = $('.edoitor-tabs-wrap-col').height() - $('.edoitor-tabs-wrap-col nav.nav.nav-tabs').height();
    var editorEl = $('.editor-workspace-codemodal');
    var editorParent = editorEl.parent();
    editorParent.height(tmpHeight);
    editorEl.height(tmpHeight);

    _codeEditor_HTML = ace.edit("HTML_Editor_Workspace_CodeModal");
    _codeEditor_HTML.setTheme("ace/theme/monokai");
    _codeEditor_HTML.getSession().setMode("ace/mode/html");
    _codeEditor_HTML.setFontSize(16);
    _codeEditor_JS = ace.edit("JS_Editor_Workspace_CodeModal");
    _codeEditor_JS.setTheme("ace/theme/monokai");
    _codeEditor_JS.getSession().setMode("ace/mode/javascript");
    _codeEditor_JS.setFontSize(16);

    $('#wrap_Workspace_CodeModal .cm-toolbar-wrap-row .cm-toolbar-buttons-item').on('click', onClickCodeModalToolbarBtn);
    $('.header-course-name').html('L1 JavaScript基础');
    $('.header-course-name').css('line-height', ($('.header-container').height() - parseInt($('.header-course-name').css('padding-top')) * 2) + 'px')
}

function onClickCodeModalToolbarBtn(eventObj) {
    var btn = $(eventObj.currentTarget);
    if (btn.hasClass('fa-play')) {
        executeEditCode(false);
    } else if (btn.hasClass('fa-expand')) {
        var frame = $('#iframe_Console_Editor_Full');
        var modal = $('#full_Console_Modal');
        var modalContent = $('#full_Console_Modal .modal-content');
        var modalHeader = $('#full_Console_Modal .modal-header');
        modal.modal('show');
        modalContent.height($('body').height() * 0.7);
        executeEditCode(true);
    } else if (btn.hasClass('fa-trash')) {
        _codeEditor_HTML.setValue('');
        _codeEditor_JS.setValue('');
        executeEditCode(false);
    }
};

function executeEditCode(isFull) {
    var frameId = isFull ? '#iframe_Console_Editor_Full' : '#iframe_Console_Editor';
    var html = _codeEditor_HTML.getValue();
    var code = _codeEditor_JS.getValue();
    var frameDocument = $(frameId)[0].contentDocument;
    var frameWindow = $(frameId)[0].contentWindow;
    frameDocument.body.innerHTML = '';
    html.trim() == '' ? null : frameDocument.write(html.trim());
    frameWindow.eval(code);
};

/*
var strA = 'Hello World';
var strB = 'iKCoder';
document.write(strA + ' ' + strB);
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.attributes['height'] =200;
canvas.attributes['width'] =200;
canvas.style.backgroundColor='red';
var ctx = canvas.getContext("2d");
ctx.lineWidth = 5;
ctx.setLineDash([25, 5]);
ctx.strokeStyle = "#000000";//"#e8e8e8";    
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.stroke();
*/

function adjustDisplayPart(isCodeModal) {
    if (isCodeModal) {
        $('#Course_Stage_Container').hide();
        $('.siderbar-wrap').hide();
        $('.course-tip-container-row').hide();
        $('.toolbar-container-row').hide();
        $('#wrap_Workspace_Blockly').hide();
        $('#wrap_Workspace_Static').hide();
        $('#wrap_Workspace_CodeModal').show();
        $('#Toolbar_Workspace_CodeModal').show();
        $('.bottom-toolbar-container-row .fa-code').parent().parent().hide();
        $('.bottom-toolbar-container-row .fa-file-code').parent().parent().hide();
        $('.bottom-toolbar-container-row .bottom-toolbar-item-col').removeClass('col-2');
        $('.bottom-toolbar-container-row .bottom-toolbar-item-col').addClass('col-4');
    } else {
        $('#Course_Stage_Container').show();
        $('.siderbar-wrap').show();
        $('.course-tip-container-row').show();
        $('.toolbar-container-row').show();
        $('#wrap_Workspace_Blockly').show();
        $('#wrap_Workspace_Static').show();
        $('#wrap_Workspace_CodeModal').hide();
        $('.bottom-toolbar-container-row .fa-code').parent().parent().show();
        $('.bottom-toolbar-container-row .fa-file-code').parent().parent().show();
        $('.bottom-toolbar-container-row .bottom-toolbar-item-col').removeClass('col-4');
        $('.bottom-toolbar-container-row .bottom-toolbar-item-col').addClass('col-2');

    }
};

function loadSceneLib() {
    var tmpArr = [];
    for (var i = 0; i < _gStageData.blockly.lib.length; i++) {
        tmpArr.push(_gStageData.blockly.lib[i]);
    }

    loadSceneLib_Do(tmpArr);
};

function loadSceneLib_Do(libArr) {
    if (libArr.length > 0) {
        $.getScript(libArr[0], function () {
            libArr.shift();
            loadSceneLib_Do(libArr);
        });
    } else {
        WorkScene.init();
    }
};

function initEvents(isCodeModal) {
    if (!isCodeModal) {
        initHeaderEvents();
        initToolbarEvents();
        initBottomTBEvents();
        initSiderBarEvents();
        initDetailPanelsEvents();
        $(window).resize(function () {
            adjustMainSize(getQueryString('step') == '' ? true : false);
        });

        $(window).on('beforeunload', function () {
            WorkScene.saveStatus();
        });

        if (_gStageData.course.note.length == 0) {
            //adjustMainSize(getQueryString('step') == '' ? true : false);
            $('.course-tip-container-row').hide();
            //Blockly.svgResize(WorkScene.WORKSPACE);
            adjustMainSize(getQueryString('step') == '' ? true : false);
        }
    } else {
        initBottomTBEvents();
        initDetailPanelsEvents();
        $('#full_Console_Modal').on('shown.bs.modal', function (e) {
            $('#iframe_Console_Editor_Full').height($('#full_Console_Modal .modal-content').height() - $('#full_Console_Modal .modal-header').height());
        })
    }
};

function adjustMainSize(isCodeModal) {
    var headerHeight = $('.header-container').height();
    var footerHeight = $('footer').height();
    var tipHeight = 0;
    if ($('.course-tip-container-row').css('display') != 'none') {
        //$('.course-tip-loading-col').height();
        tipHeight = $('.course-tip-container-row').height();
    }
    
    var toolbarHeight = $('.toolbar-container-row').height();
    toolbarHeight = toolbarHeight >= 30 ? toolbarHeight : toolbarHeight + 8;
    var bbarHeight = $('.bottom-toolbar-container-row').height();
    var tmpHeight = headerHeight + footerHeight + bbarHeight;
    tmpHeight += (isCodeModal ? 0 : tipHeight + toolbarHeight);
    $('.wrap-container .main-container-col').height($('.wrap-container').height() - tmpHeight + 1);
    $('.siderbar-wrap').height($('.wrap-container .main-container-col').height());
    $('.siderbar-wrap').css('top', $('.wrap-container .main-container-col').offset().top + 'px');
};

function showLoadingMask() {
    $('#mask_Page_Loading').show();
    $('#mask_Page_Loading').css('visibility', 'visible');
};

function hideLoadingMask() {
    $('#mask_Page_Loading').hide();
    $('#mask_Page_Loading').css('visibility', 'hidden');
};

function initData(response) {
    initDataUserInfo(response);
    initDataCourse(response);
    initDataBlockly(response);
};

function initDataCourse(response) {
    var sceneItem = $($(response).find("sence")[0]);
    _gStageData.course.id = sceneItem.attr('symbol');
    _gStageData.course.name = sceneItem.attr('name');
    _gStageData.course.nextid = sceneItem.attr('next');
    _gStageData.course.current = parseInt(sceneItem.attr('currentstage'));
    _gStageData.course.total = parseInt(sceneItem.attr('totalstage'));
    _gStageData.course.next = (_gStageData.course.current < _gStageData.course.total ? _gStageData.course.current + 1 : _gStageData.course.current);
    _gStageData.course.complete = (!isNaN(sceneItem.attr('finishstage')) && sceneItem.attr('finishstage') != '' ? parseInt(sceneItem.attr('finishstage')) : _gStageData.course.current);
    _gStageData.course.words = [];
    var wordsItems = $(response).find("words").find('stage').find('word');
    for (var i = 0; i < wordsItems.length; i++) {
        var tmpObj = {};
        tmpObj.word = $(wordsItems[i]).attr('value');
        tmpObj.star = parseInt(!$(wordsItems[i]).attr('star') ? '0' : $(wordsItems[i]).attr('star'));
        tmpObj.note = $(wordsItems[i]).attr('note');
        var tmpItems = $(wordsItems[i]).find('soundmark').find('item');
        tmpObj.soundmark = [];
        for (var j = 0; j < tmpItems.length; j++) {
            tmpObj.soundmark.push([
                $(tmpItems[j]).attr('value'),
                _getRequestURL(_gURLMapping.data.getaudio, { operation: 'AllowedOperation', symbol: $(tmpItems[j]).attr('sound') }),
                $(tmpItems[j]).attr('type')
            ]);
        }

        tmpItems = $(wordsItems[i]).find('paraphrase').find('item');
        tmpObj.paraphrase = [];
        for (var j = 0; j < tmpItems.length; j++) {
            tmpObj.paraphrase.push($(tmpItems[j]).html());
        }

        tmpItems = $(wordsItems[i]).find('variant').find('item');
        tmpObj.variant = {};
        for (var j = 0; j < tmpItems.length; j++) {
            tmpObj.variant[$(tmpItems[j]).attr('name')] = $(tmpItems[j]).attr('value');
        }

        _gStageData.course.words.push(tmpObj);
    }

    _gStageData.course.kps = [];
    var kpsItems = $(response).find("kps").find('item');
    for (var i = 0; i < kpsItems.length; i++) {
        _gStageData.course.kps.push($(kpsItems[i]).text());
    }

    _gStageData.course.note = [];
    var notesItems = $(response).find("tips").find('item');
    var tmpItem, contents, tmpContent;
    for (var i = 0; i < notesItems.length; i++) {
        tmpItem = $(notesItems[i]);
        var newNoteObj = { idx: -1, content: [] };
        newNoteObj.idx = tmpItem.attr('index');
        contents = tmpItem.find('content');
        for (var j = 0; j < contents.length; j++) {
            tmpContent = $(contents[j]);
            var newContentObj = { text: '', btype: '' };
            newContentObj.btype = tmpContent.attr('blocktype');
            newContentObj.text = tmpContent.attr('chinese');
            newNoteObj.content.push(newContentObj);
        }

        _gStageData.course.note.push(newNoteObj);
    }

    _gStageData.course.msg.success = $($(response).find("message").find('suc')[0]).attr('msg');
    _gStageData.course.msg.failed = $($(response).find("message").find('faild')[0]).attr('msg');
};

function initDataUserInfo(response) {
    var userItem = $($(response).find("basic").find("usr")[0]);
    _gStageData.user.id = userItem.attr('id');
    _gStageData.user.name = userItem.attr('nickname');
    _gStageData.user.img = _getRequestURL(userItem.attr('header'), {});
};

function initDataBlockly(response) {
    _gStageData.blockly.toolbox = $(response).find("toolbox").html();
    _gStageData.blockly.workspace = $(response).find("workspacestatus").html();
    _gStageData.blockly.lib = [];
    var currStageId = _gStageData.course.id.toLowerCase();
    if (currStageId == 'a_01_001' || currStageId == 'a_01_002' || currStageId == 'a_01_003') {
        _topTooltip = _gStageData.course.note;
        loadStageLibs_1(currStageId);
    } else if (currStageId == 'a_02_001' || currStageId == 'a_02_002' || currStageId == 'a_02_003') {
        _topTooltip = _gStageData.course.note;
        loadStageLibs_2(currStageId);
    } else {
        loadStageLibs_3(response);
    }

    _workspaceCfg = _gStageData.blockly;
};

function loadStageLibs_1(currStageId) {
    var pathHeader = 'javascript/scene/' + currStageId.replace(/_/g, '-') + '/intrcourse/1/';
    _gStageData.blockly.lib.push(pathHeader + 'konvas.js');
    _gStageData.blockly.lib.push(pathHeader + 'components.js');
    _gStageData.blockly.lib.push(pathHeader + 'level1.js');
    if (currStageId == 'a_01_003') {
        _gStageData.blockly.lib.push(pathHeader + 'Blocks/blocks.js');
        _gStageData.blockly.toolbox = XMLToString(LoadXMLFile(pathHeader + 'toolbox.xml'));
    }
};

function loadStageLibs_2(currStageId) {
    //_globalLibs[i].toLowerCase().replace(/\\/g, '/');
};

function loadStageLibs_3(response) {
    //return;
    var tmpPaths = $(response).find("game").find('script');
    var include3D = false;
    for (var i = 0; i < tmpPaths.length ; i++) {
        if ($(tmpPaths[i]).attr('src').toLowerCase().indexOf('_3d') >= 0) {
            include3D = true;
            break;
        }
    }

    var currStageId = _gStageData.course.id.toLowerCase();
    if (_gStageData.course.id.toLowerCase().indexOf('l') == 0) {

    } else if (include3D) {
        _gStageData.blockly.lib.push('javascript/common/three.min.js');
        _gStageData.blockly.lib.push('javascript/common/TweenMax.min.js');
        _gStageData.blockly.lib.push('javascript/common/threeengine.js');
    } else {
        _gStageData.blockly.lib.push('javascript/common/pixi.js');
    }

    var addLibPathFn = function (node) {
        var tmpAttr = node.attr('src');
        if (tmpAttr && tmpAttr != '') {
            _gStageData.blockly.lib.push('javascript/scene/' + tmpAttr);
        }
    }

    addLibPathFn($($(response).find("toolbox")[0]));
    for (var i = 0; i < tmpPaths.length ; i++) {
        addLibPathFn($(tmpPaths[i]));
    }
};

function buildHeaderHTML() {
    buildStageTitleHTML();
    buildStageStepHTML();
    buildUserInfoHTML();
}

function buildStageTitleHTML() {
    var titleText = _gStageData.course.name;
    var tmpWrap = $('.header-course-name');
    var titleWidth = testTextWidth(titleText, '16px', 'bold', '', '2px');
    if (titleWidth > $('#wrap_Head_Course_Name').width()) {
        tmpWrap.css('line-height', '25px');
        titleText = titleText.replace('：', ':').replace(':', '<br/>');
    } else {
        tmpWrap.css('line-height', '50px');
    }

    tmpWrap.html(titleText);
};

function buildStageStepHTML() {
    var data = _gStageData.course;
    var container = $('#Course_Stage_Container .wrap-head-stage-steps');
    var isFuture = false;
    var labelClass = "";
    var itemClass = "";
    var innerTxt = "";
    var style = '';
    data.total = parseInt(data.total);
    data.complete = parseInt(data.complete);
    var itemWidth = Math.floor(100 / data.total);
    var labelStyle = '';
    for (var i = 1; i < data.total + 1; i++) {
        labelClass = "";
        itemClass = 'future-item';
        innerTxt = '';
        style = '';
        labelStyle = '';
        if (i <= data.complete + 1) {
            itemClass = "complete-item";
            if (i == data.complete + 1) {
                labelClass = "show-stage-index";
                style = "line-height: 27px;";
                innerTxt = i;
            }
        }

        if (i == data.current) {
            labelClass = "show-stage-index";
            itemClass = "current-item";

            innerTxt = data.current;
            style = '';
            if (data.total == 1) {
                labelStyle = ' style="margin-top: 5px"';
            }
        }

        var tmpItem = $('<div class="head-stage-label ' + labelClass + '" ' + labelStyle + '><div class="' + itemClass + '" data-target="' + i + '" style="' + style + '">' + innerTxt + '</div></div>');
        tmpItem.css('width', itemWidth + '%');
        container.append(tmpItem);
    }

    var background = $('.head-stage-background');
    var parent = $('#Course_Stage_Container');

    var tmpWidth = itemWidth * (data.total - 1);
    background.css('width', tmpWidth + '%');
    tmpWidth = 100 / (data.total - 1) * (data.complete);
    tmpWidth = (tmpWidth > 100 ? 100 : tmpWidth);
    $('.head-stage-space').css('width', tmpWidth + '%');
    var tmpLeft = (parent.width() - background.width()) / 2;
    background.css('left', tmpLeft + 'px');
    container.css('left', 'calc(' + (-itemWidth / 2) + '% + ' + tmpLeft + 'px)');
    if (data.total == 1) {
        container.css('top', "-5px");
    }
};

function buildUserInfoHTML() {
    $('.header-user-image').attr('src', _getRequestURL(_gURLMapping.account.getheader, {}));
    $('.header-user-info-name').text(_gStageData.user.name);
};

function buildCourseTips() {
    $('.course-stage-note').empty();
    var data = _gStageData.course.note;
    if (typeof (data) == 'string') {
        $('.course-stage-note').html(data);
    } else {
        data = (data == null ? _topTooltip : data);
        var needEvent = false;
        var tmpStrArr = [];
        for (var i = 0; i < data.length; i++) {
            tmpStrArr.push('<strong style="padding-right:5px;">');
            tmpStrArr.push(data[i].idx);
            tmpStrArr.push('.</strong>');

            for (var j = 0; j < data[i].content.length; j++) {
                if (data[i].content[j].btype != '') {
                    needEvent = true;
                    tmpStrArr.push('<strong>');
                    tmpStrArr.push('   <a href="#" class="link-button-block-example" data-target="' + data[i].content[j].btype + '" title="点击查看对应的块">');
                    tmpStrArr.push(data[i].content[j].text);
                    tmpStrArr.push('   </a>');
                    tmpStrArr.push('</strong>');
                } else {
                    tmpStrArr.push('<span>');
                    tmpStrArr.push(data[i].content[j].text);
                    tmpStrArr.push('</span>');
                }
            }

            tmpStrArr.push('</br>');
        }

        $('.course-stage-note').html(tmpStrArr.join(''));
        if (needEvent) {
            $(".link-button-block-example").click(hightlightExampleBlock);
        }
    }
};

function resetWorkSpace(flag) {
    var siderbar = $('.siderbar-wrap');
    var blocklyWrap = $('#wrap_Workspace_Blockly');
    var staticWrap = $('#wrap_Workspace_Static');
    if ((typeof (flag) != 'undefined' && flag === true) || _gStageData.blockly.toolbox == '') {
        siderbar.hide();
        blocklyWrap.hide();
        staticWrap.show();
        staticWrap.height('100%');
        //siderBarCollapse();
    } else {
        siderbar.show();
        blocklyWrap.show();
        staticWrap.hide();
    }
};

function initHeaderEvents() {
    $('div.head-stage-label .complete-item').on('click', function () {
        gotoSpecialStep($(arguments[0].target).attr('data-target'));
    });

    $('.sign-out-button').on('click', function () {
        WorkScene.saveStatus();
        _signOut();
        window.close();
    });
};

function gotoSpecialStep(step) {
    //var url = _getRequestURL(_gURLMapping.bus.setcurrentstep, { stage: step, symbol: _gStageData.course.id });
    //var successFn = function (response) {
    //    if ($(response).find('err').length > 0) {
    //        _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Save_CurrentStepSymbol');
    //        return;
    //    }
    //    window.location.href = 'workplatform.html?scene=' + _gStageData.course.id + '&rnd=' + Date.now();
    //}
    //ajaxFn('POST', url, '<root></root>', successFn, _gEmptyFn);
    window.location.href = 'workplatform.html?scene=' + _gStageData.course.id + '&step=' + step;
};

function initToolbarEvents() {
    //$('.toolbar-button-play').on('click', playScence);

    $('.toolbar-button-share').on('click', function (e) {
        alert("'Share' will coming soon!");
    });

    $('.toolbar-button-fullscreen').on('click', function (e) {
        $('.run-scene-fullscreen').show("slow", function () {
            $('.run-scene-fullscreen').append($('#game_container'));
            adjustCanvasSize(true);
        });
    });

    $('.toolbar-button-referesh').on('click', function (e) {
        WorkScene.reset(_forceReset);
    });

    $('.run-scene-fullscreen-close-button').on('click', function (e) {
        $('.run-scene-fullscreen').hide("slow", function () {
            $('.siderbar-content').append($('#game_container'));
            adjustCanvasSize(true);
        });
    });
};

function adjustCanvasSize(keepRate) {
    var container = $('#game_container');
    var currentWrap = container.parent();
    var canvas = container.find('canvas');
    var tmpRate = canvas.height() / canvas.width();
    var wrapHeight = currentWrap.height();
    var wrapWidth = currentWrap.width();
    var newHeight = wrapHeight - parseInt(currentWrap.css('padding')) * 2;
    var newWidth = wrapWidth - parseInt(currentWrap.css('padding')) * 2;
    if (keepRate && !_useFullContainer) {
        if (wrapHeight / wrapWidth < tmpRate) {
            newWidth = wrapHeight / tmpRate;
        } else {
            newHeight = wrapWidth * tmpRate;
        }
    }

    container.height(newHeight);
    container.width(newWidth);
    //container.css('margin-left', (wrapWidth - newWidth) / 2 + 'px');

    canvas.height(newHeight);
    canvas.width(newWidth);
    canvas.attr('height', newHeight);
    canvas.attr('width', newWidth);

    var playButton = $('.siderbar-button-run');
    var fontSize = newWidth * 30 / 100;
    playButton.height(fontSize);
    playButton.width(fontSize);
    playButton.css('font-size', fontSize + 'px');
    playButton.css('line-height', fontSize + 'px');
    playButton.css('left', (parseInt(container.css('margin-left')) + 10) + 'px');
    playButton.css('top', (newHeight - 10 - fontSize) + 'px');

    if (typeof Scene == 'object' && Scene.resetSize) {
        Scene.resetSize();
    }
};

function playScence() {
    if (WorkScene.playableScene) {
        var currentBtn = null;
        //if (typeof arguments[0] != "undefined" && arguments[0].target) {
        //    if (arguments[0].target.nodeName == "path") {
        //        currentBtn = $(arguments[0].target.parentElement);
        //    } else {
        //        currentBtn = $(arguments[0].target);
        //    }

        //    if (currentBtn.hasClass('fa-play-circle') || currentBtn.hasClass('fa-play')) {
        //        WorkScene.startGame();
        //        resetPlayBtn('R');
        //    } else if (currentBtn.hasClass('fa-undo-alt')) {
        //        WorkScene.resetScene();
        //        resetPlayBtn('P');
        //    }
        //}
        if (typeof arguments[0] != "undefined" && arguments[0].target) {
            if (arguments[0].target.nodeName == "path") {
                currentBtn = $(arguments[0].target.parentElement);
            } else {
                currentBtn = $(arguments[0].target);
            }
        } else if ($(arguments[0]).hasClass('toolbar-button-play')) {
            currentBtn = $(arguments[0]);
        }

        if (currentBtn) {
            if (currentBtn.hasClass('fa-play-circle') || currentBtn.hasClass('fa-play')) {
                WorkScene.startGame();
                resetPlayBtn('R');
            } else if (currentBtn.hasClass('fa-undo-alt')) {
                WorkScene.resetScene();
                resetPlayBtn('P');
            }
        }
    }
};

function resetPlayBtn(operation) {
    var toolboxBtn = $('.toolbar-button-play');
    var screenBtn = $('.siderbar-button-run svg');
    if (operation == 'P') {
        toolboxBtn.removeClass('fa-undo-alt');
        screenBtn.removeClass('fas');
        screenBtn.removeClass('fa-undo-alt');
        toolboxBtn.addClass('fa-play');
        screenBtn.addClass('far');
        screenBtn.addClass('fa-play-circle');
        toolboxBtn.attr('title', '开始运行');
        screenBtn.attr('title', '开始运行');
    } else {
        toolboxBtn.removeClass('fa-play');
        screenBtn.removeClass('far');
        screenBtn.removeClass('fa-play-circle');
        toolboxBtn.addClass('fa-undo-alt');
        screenBtn.addClass('fas');
        screenBtn.addClass('fa-undo-alt');
        toolboxBtn.attr('title', '重新开始');
        screenBtn.attr('title', '重新开始');
    }
};

function initSiderBarEvents() {
    $('.siderbar-expand-button').on('click', function () {
        siderBarExpand();
    });

    $(document).mouseup(function () {
        $(document).unbind("mousemove");
        var dragProxy = $(".siderbar-drag-proxy");
        var bodyWidth = $("body").width();
        var minWidth = bodyWidth * 30 / 100;
        if (dragProxy.css("display") != "none") {
            var left = dragProxy.offset().left;
            var tmpWidth = bodyWidth - left - dragProxy.width() - $(".siderbar-drag").width() - $('.siderbar-expand-button').width();
            tmpWidth = (tmpWidth < minWidth ? minWidth : tmpWidth);
            $(".siderbar-wrap").width(tmpWidth);
            $(".siderbar-wrap").css("left", $("body").width() - tmpWidth + "px");
            $(".siderbar-drag-proxy").css("display", "none");
            $(".siderbar-drag-proxy").css("visibility", "hidden");
            adjustCanvasSize(true);
        }
    });

    $(".siderbar-drag").mousedown(function (e) {
        if ($(".siderbar-drag").hasClass('expanded')) {
            $(".siderbar-drag-proxy").css("display", "block");
            $(".siderbar-drag-proxy").css("visibility", "visible");
            $(".siderbar-drag-proxy").height($(".siderbar-drag").height());
            $(".siderbar-drag-proxy").css("top", $(".siderbar-drag").offset().top + "px");
            $(".siderbar-drag-proxy").css("left", $(".siderbar-drag").offset().left + "px");
            dragFn(e);
        }
    });

    var dragFn = function siderBarDrag(e) {
        var _sidebarDragStarX = e.pageX;
        $(document).bind("mousemove", function (ev) {
            $(".siderbar-drag-proxy").css("left", ev.pageX + "px");
        });
    };

    $(document).keydown(function () {
        if (arguments[0].keyCode == '27') {
            if ($('.run-scene-fullscreen').css('display') != 'none') {
                $('.run-scene-fullscreen').hide("slow", function () {
                    $('.siderbar-content').append($('#game_container'));
                    adjustCanvasSize(true);
                });
            }

            if ($('.detail-panel').css('display') != 'none') {
                gotoCreativeMode();
            }
        }
    });

    $('.siderbar-button-run').on('click', playScence);
};

function siderBarExpand() {
    var tmpObj = $(".siderbar-wrap");
    var tmpLeft = $('body').width();
    if (!tmpObj.hasClass('expanded')) {
        tmpLeft -= tmpObj.width();
    }

    tmpObj.toggleClass('expanded');
    tmpObj.animate({ left: tmpLeft + 'px' }, 'slow', function () {

        $('#icon_SiderBar_Expand').toggleClass('fa-angle-double-left').toggleClass('fa-angle-double-right');
    });

    $('.siderbar-drag').toggleClass('expanded');
};

function initBottomTBEvents() {
    if (_gStageData.course.kps.length == 0) {
        var tmpItem = $('.bottom-toolbar-item.fa-book');
        tmpItem.removeClass('bottom-toolbar-item');
        tmpItem.addClass('bottom-toolbar-item-disabled');
        tmpItem.parent().removeClass('bottom-toolbar-item-wrap');
        tmpItem.parent().addClass('bottom-toolbar-item-wrap-disabled');
    }

    if (_gStageData.course.words.length == 0) {
        var tmpItem = $('.bottom-toolbar-item.fa-globe');
        tmpItem.removeClass('bottom-toolbar-item');
        tmpItem.addClass('bottom-toolbar-item-disabled');
        tmpItem.parent().removeClass('bottom-toolbar-item-wrap');
        tmpItem.parent().addClass('bottom-toolbar-item-wrap-disabled');
    }


    $('.bottom-toolbar-item-wrap').on('click', function (e) {
        $('.bottom-toolbar-item').removeClass('active');
        $('.bottom-toolbar-item-wrap').removeClass('active');
        var targetWrap = $(e.currentTarget);
        targetWrap.addClass('active');
        var targetBtn = $(targetWrap.find('svg')[0]);
        if (targetBtn.hasClass('fa-gamepad')) {
            gotoCreativeMode();
        } else {
            popupAttaPanel(targetBtn);
        }
    });
};

function gotoCreativeMode() {
    $('.detail-panel').hide("slow");
    $('.bottom-toolbar-item').removeClass('active');
    $('.bottom-toolbar-item-wrap').removeClass('active');
    $('.bottom-toolbar-item.fa-gamepad').addClass('active');
    $('.bottom-toolbar-item.fa-gamepad').parent().addClass('active');
};

function popupAttaPanel(targetBtn) {
    if (targetBtn.hasClass('fa-book')) {
        showDetailPanel('kps');
    } else if (targetBtn.hasClass('fa-globe')) {
        showDetailPanel('word');
    } else if (targetBtn.hasClass('fa-code')) {
        showCodeEditorWin();
    } else if (targetBtn.hasClass('fa-file-code')) {
        showCoreCodeWin();
    }
};

function showDetailPanel(type) {
    var panel = $('.detail-panel');
    if (panel.css('display') != 'none') {
        gotoCreativeMode();
    } else {
        type == 'kps' ? loadKPSContent() : loadWordContent();
        var tmpTop = $('.bottom-toolbar-container-row').offset().top - panel.height();
        var tmpLeft = $('.bottom-toolbar-item.fa-' + (type == 'kps' ? 'book' : 'globe')).offset().left;
        panel.css('top', tmpTop + "px");
        panel.css('left', "auto");
        panel.css('right', "auto");
        panel.width() > ($('body').width() - tmpLeft) ? panel.css('right', "0px") : panel.css('left', tmpLeft + "px");
        panel.show('slow');
    }
};

function loadKPSContent() {
    $('.detail-panel-content.container').empty();
    $('.detail-panel-content.container').append(buildKPSListHTML());
};

function buildKPSListHTML() {
    var htmlStringArr = [];
    htmlStringArr.push('<div class="row">');
    htmlStringArr.push('    <div class="col kps-list-item">');
    htmlStringArr.push('        <div class="container no-padding">');
    htmlStringArr.push('            <div class="row">');
    htmlStringArr.push('                <div class="col word-word">');
    htmlStringArr.push('                    <ul>');
    for (var i = 0; i < _gStageData.course.kps.length; i++) {
        htmlStringArr.push('                    <li>' + _gStageData.course.kps[i] + '</li>');
    }
    htmlStringArr.push('                    </ul>');
    htmlStringArr.push('                </div>');
    htmlStringArr.push('            </div>');
    htmlStringArr.push('        </div>');
    htmlStringArr.push('    </div>');
    htmlStringArr.push('</div>');
    return htmlStringArr.join('');
};

function loadWordContent() {
    $('.detail-panel-content.container').empty();
    $('.detail-panel-content.container').append(buildWordListHTML());
    $('.play-soundmark-button').on('mouseover', function (e) {
        playSoundMark(e);
    });
};

function buildWordListHTML() {
    var data = _gStageData.course.words;
    var htmlStringArr = [];
    htmlStringArr.push('<div class="row">');
    for (var i = 0; i < data.length; i++) {
        htmlStringArr.push('<div class="col word-list-item">');
        htmlStringArr.push('    <div class="container no-padding">');
        htmlStringArr.push('        <div class="row">');
        htmlStringArr.push('            <div class="col word-word">');
        htmlStringArr.push(data[i].word);
        htmlStringArr.push('            </div>');
        htmlStringArr.push('        </div>');
        htmlStringArr.push('        <div class="row word-soundmark">');
        for (var j = 0; j < data[i].soundmark.length; j++) {
            htmlStringArr.push('            <div class="col-6" style="padding-right: 0px;">');
            htmlStringArr.push('[' + data[i].soundmark[j][2] + ']' + data[i].soundmark[j][0]);
            htmlStringArr.push('                <i class="fa fa-volume-up play-soundmark-button" aria-hidden="true" data-target="' + data[i].soundmark[j][1] + '"></i>');
            htmlStringArr.push('            </div>');
        }

        htmlStringArr.push('        </div>');
        htmlStringArr.push('        <div class="row word-soundmark">');
        htmlStringArr.push('            <div class="col-4">');
        for (var j = 0; j < 5; j++) {
            if (j < data[i].star - 1) {
                htmlStringArr.push('<i class="fa fa-star" aria-hidden="true"></i>');
            } else {
                htmlStringArr.push('<i class="fa fa-star-o" aria-hidden="true"></i>');
            }
        }

        htmlStringArr.push('            </div>');
        htmlStringArr.push('            <div class="col">');
        htmlStringArr.push(data[i].note);
        htmlStringArr.push('            </div>');
        htmlStringArr.push('        </div>');
        htmlStringArr.push('        <div class="row word-paraphrase">');
        for (var j = 0; j < data[i].paraphrase.length; j++) {
            htmlStringArr.push('            <div class="col">');
            htmlStringArr.push(data[i].paraphrase[j]);
            htmlStringArr.push('            </div>');
        }

        if (data[i].variant && data[i].variant.length > 0) {
            htmlStringArr.push('        </div>');
            htmlStringArr.push('        <div class="row">');
            htmlStringArr.push('            <div class="col-12 word-variant-header">');
            htmlStringArr.push('变形');
            htmlStringArr.push('            </div>');
            for (var key in data[i].variant) {
                htmlStringArr.push('            <div class="col-3 word-variant-header">');
                htmlStringArr.push(key + ': ');
                htmlStringArr.push('            </div>');
                htmlStringArr.push('            <div class="col-9 word-variant-content">');
                htmlStringArr.push(data[i].variant[key]);
                htmlStringArr.push('            </div>');
            }
        } else {
            htmlStringArr.push('        </div>');
            htmlStringArr.push('        <div class="row">');
            htmlStringArr.push('            <div class="col-12 my-1">');
            htmlStringArr.push('            </div>');
        }

        htmlStringArr.push('        </div>');
        htmlStringArr.push('    </div>');
        htmlStringArr.push('</div>');
    }

    htmlStringArr.push('</div>');
    return htmlStringArr.join('');
};

function playSoundMark(eventObj) {
    var soundSource = $(eventObj.target).attr('data-target');
    $("#audio_Soundmark").attr('src', soundSource);
    $("#audio_Soundmark")[0].play();
};

function showCodeEditorWin(e) {
    $('.detail-panel').hide("slow");
    $('#win_CoreCode').hide('show');
    $('#win_CodeEditor').modal('show');
    WorkScene.outputCode();
};

function showCoreCodeWin() {
    $('.detail-panel').hide("slow");
    $('#win_CodeEditor').hide('show');
    $('#win_CoreCode').modal('show');
};

function initDetailPanelsEvents() {
    $('.detail-panel-close-button').on('click', function (e) {
        gotoCreativeMode();
    });

    $('.detail-panel').draggable({ containment: "body", scroll: false }).resizable();

    $('#win_CodeEditor').on('hidden.bs.modal', function () {
        gotoCreativeMode();
    });

    $('#win_CodeEditor').on('shown.bs.modal', function () {
        adjustPopupWinSize('CodeEditor');
    });

    $('#win_CoreCode').on('hidden.bs.modal', function () {
        gotoCreativeMode();
    });

    $('#win_CoreCode').on('shown.bs.modal', function () {
        adjustPopupWinSize('CoreCode');
    });

    $('.core-code-view-btn').on('click', function () {
        loadCodeText($(arguments[0].target).attr('data-target'));
    });

    $('#btn_Eval_CoreCode').on('click', function (e) {
        alert('building');
    });
};

function adjustPopupWinSize(symbol) {
    var winId = '#win_' + symbol;
    var frameId = '#iframe_' + symbol;
    var dialog = $(winId + ' .modal-dialog');
    $(frameId).width(dialog.width() - 10 - 2);
    $(frameId).height($('body').height() * 80 / 100 - $(winId + ' .modal-header').height() - $(winId + ' .modal-footer').height())
};

function loadCodeText(symbol) {
    var currLib = (symbol == '' || symbol == 'core' ? [] : '');
    var editor = $('#iframe_CoreCode')[0].contentWindow.editor;
    editor.setValue('', -1);
    for (var i = 0; i < _gStageData.blockly.lib.length; i++) {
        var tmpPath = _gStageData.blockly.lib[i].toLowerCase().replace(/\\/g, '/');
        var tmpArr = tmpPath.split('/');
        if (symbol == '' || symbol == 'core') {
            if (tmpArr[tmpArr.length - 1].indexOf('blocks') < 0 && tmpArr[tmpArr.length - 1].indexOf('scene') < 0) {
                currLib.push(tmpPath);
            }
        } else {
            if (tmpArr[tmpArr.length - 1].indexOf(symbol) == 0) {
                currLib = tmpPath;
                break;
            }
        }
    }

    if (typeof currLib == 'string') {
        if (currLib != '') {
            $.get(tmpPath, function (data, status) {
                $('#iframe_CoreCode')[0].contentWindow.editor.setValue(data, -1);
            });
        }
    } else {
        for (var i = 0; i < currLib.length; i++) {
            if (currLib[i].indexOf('coursemain.js') < 0) {
                $.get(currLib[i], function (data, status) {
                    editor.setValue(editor.getValue() + '\n\r' + data, -1);
                });
            }
        }
    }
};

/*course note highlight*/
var _blockExample = [];
var _highlightCount = 0;
function hightlightExampleBlock() {
    var blocks = WorkScene.workspace.flyout_.blocks_;
    var targetBtn = $(arguments[0].target);
    _highlightCount = 0;
    for (var i = 0; i < blocks.length; i++) {
        if (blocks[i].type == targetBtn.attr("data-target")) {
            _blockExample.push(blocks[i]);
            blocks[i].removeSelect();
        }
    }

    selectBlockExample();
};

function selectBlockExample() {
    if (_highlightCount < 3) {
        for (var i = 0; i < _blockExample.length; i++) {
            _blockExample[i].addSelect();
        }

        setTimeout('unselectBlockExample();', 500);
    }
};

function unselectBlockExample() {
    _highlightCount++;
    for (var i = 0; i < _blockExample.length; i++) {
        _blockExample[i].removeSelect();
    }


    setTimeout('selectBlockExample();', 500);
};
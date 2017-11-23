'use strict';

var _useFullContainer = false;
var _wordsData = [];
var _knowledgeData = [];
var _workspaceCfg = {};
var _currentStage = '';
var _nextStage = '';
var _currentStep = '';
var _nextStep = '';
var _totalSteps = '';
var _topTooltip = [];
var _Editor = null;
var _messages = {
    success: '',
    faild: ''
};

function initPage() {
    var sceneSymbol = getQueryString('scene').toUpperCase();
    var sceneStep = getQueryString('step').toUpperCase();
    var dataXML = LoadXMLFile('javascript/scene/datadoc/' + sceneSymbol + sceneStep + '.xml');
    var data = initData(dataXML);
    _wordsData = data.course.words;
    _knowledgeData = data.course.kps;
    buildStageHTML(data.course);
    updateUserInfo(data.user);
    $('.siderbar-wrap').show();
    $('#mask_Page_Loading').hide();
    $('#mask_Page_Loading').css('visibility', 'hidden');
    window.setTimeout('adjustAfterSiderBarResize();', 2000);
    window.setTimeout('WorkScene.saveStatus(true);', 60000);

    initEvents();
    $('.siderbar-wrap').width($('body').width() / 3);
    onWindowResize();
    adjustAfterSiderBarResize();

    $('#editor').height($(".siderbar-wrap").height() - 20);
    _Editor = ace.edit("editor");
    _Editor.setTheme("ace/theme/monokai");
    _Editor.getSession().setMode("ace/mode/javascript");
    _Editor.setFontSize(16);
};

function initEvents() {
    $('#btn_Footer_Logo').on('click', function (e) {
        WorkScene.saveStatus();
        window.location.href = "index.html?rnd=" + Date.now();
    });

    $('#btn_SiderBar_Expand').on('click', function () {
        siderBarExpand();
    });
    $('.goto-profile-image-button').on('click', function () {
        WorkScene.saveStatus();
        window.location.href = "profile.html?rnd=" + Date.now();
    });

    $(document).mouseup(function () {
        $(document).unbind("mousemove");
        var dragProxy = $(".siderbar-drag-proxy")
        if (dragProxy.css("display") != "none") {
            var left = dragProxy.offset().left;
            var tmpWidth = $("body").width() - left - dragProxy.width() - $(".siderbar-drag").width() - $('#btn_SiderBar_Expand').width();
            if (tmpWidth < 425) {
                tmpWidth = 425;
            }

            $(".siderbar-wrap").width(tmpWidth);
            $(".siderbar-wrap").css("left", $("body").width() - tmpWidth + "px");
            $(".siderbar-drag-proxy").css("display", "none");
            $(".siderbar-drag-proxy").css("visibility", "hidden");
            adjustAfterSiderBarResize();
        }
    });

    $(".siderbar-drag").mousedown(function (e) {
        if ($(".siderbar-drag").hasClass('expanded')) {
            $(".siderbar-drag-proxy").css("display", "block");
            $(".siderbar-drag-proxy").css("visibility", "visible");
            $(".siderbar-drag-proxy").height($(".siderbar-drag").height());
            $(".siderbar-drag-proxy").css("top", $(".siderbar-drag").offset().top + "px");
            $(".siderbar-drag-proxy").css("left", $(".siderbar-drag").offset().left + "px");
            siderBarDrag(e);
        }
    });

    $('.footer-tool-item').on('click', function (e) {
        $('.footer-tool-item').removeClass('selected');
        $(e.currentTarget).addClass('selected');
        if ($(e.currentTarget).attr('id') == 'btn_Footer_CodeMode') {
            showCodePanel(e);
        } else if ($(e.currentTarget).attr('id') == 'btn_Footer_WordMode') {
            showWordPanel(e);
        } else if ($(e.currentTarget).attr('id') == 'btn_Footer_KnowledgeMode') {
            showKnowledgePanel(e);
        } else if ($(e.currentTarget).attr('id') == 'btn_Footer_ViewMode') {
            showCodeViewerPanel(e);
        }
    });

    $('.footer-tool-item').on('mouseover ', function (e) {
        var tipObj = $('.modle-tip');
        var targetObj = $(e.target);
        tipObj.css('display', "block");
        var tmpLeft = targetObj.offset().left + (targetObj.width() - tipObj.width() - 20) / 2;
        tipObj.css('left', tmpLeft + "px");
        tipObj.text(targetObj.attr("data-tip"));
    });

    $('.footer-tool-item').on(' mouseout ', function (e) {
        $('.modle-tip').css('display', "none");
    });

    //$('.code-panel-header-close').on('click', function (e) {
    //    //$('#panel_CodeMode').css('display', 'none');
    //    //$('#panel_CodeMode').hide("slow");
    //    $('#panel_CodeMode').modal('hide');
    //    $('#panel_WordMode').modal('hide');
    //    $('.footer-tool-item').removeClass('selected');
    //    $('#btn_Footer_CreateMode').addClass('selected');
    //});

    $('#panel_CodeMode').on('hidden.bs.modal', function () {
        $('.footer-tool-item').removeClass('selected');
        $('#btn_Footer_CreateMode').addClass('selected');
    });

    $('#panel_CodeMode').on('shown.bs.modal', function () {
        adjustModelPanelSize('#panel_CodeMode', '#iframe_CodeEditor');
    });

    $('#panel_ViewMode').on('hidden.bs.modal', function () {
        $('.footer-tool-item').removeClass('selected');
        $('#btn_Footer_CreateMode').addClass('selected');

    });

    $('#panel_ViewMode').on('shown.bs.modal', function () {
        adjustModelPanelSize('#panel_ViewMode', '#iframe_CodeViewer');
    });

    $('#btn_Eval_Panel_ViewMode').on('click', function (e) {
        _showGlobalMessage('功能演示版本不提供执行功能！', 'warning', 'alert_Finish_CurrentStep');
        $('#panel_ViewMode').modal('hide');
    });

    $('.word-panel-header-close').on('click', function (e) {
        //$('#panel_WordMode').css('display', 'none');
        $('#panel_WordMode').hide("slow");
        $('.footer-tool-item').removeClass('selected');
        $('#btn_Footer_CreateMode').addClass('selected');
    });

    $('.knowledge-panel-header-close').on('click', function (e) {
        //$('#panel_WordMode').css('display', 'none');
        $('#panel_KnowledgeMode').hide("slow");
        $('.footer-tool-item').removeClass('selected');
        $('#btn_Footer_CreateMode').addClass('selected');
    });

    //$('#panel_CodeMode').draggable({ containment: "body", scroll: false }).resizable();

    $('#panel_WordMode').draggable({ containment: "body", scroll: false }).resizable();

    $('#panel_KnowledgeMode').draggable({ containment: "body", scroll: false }).resizable();

    $('.step-evaluate-button').on('click', function (e) {

    });

    $('#btn_Step_Restart').on('click', function (e) {
        if (_currentStep == _totalSteps) {
            WorkScene.saveStatus();
            window.location.href = "profile.html?rnd=" + Date.now();
        } else {
            WorkScene.reset(true);
            resetPlayBtn('P');
            $('.wrap-workstatus-alert').hide();
        }
    });

    $('#btn_Step_GoNext').on('click', function (e) {
        var tmpParam = '&scene=';
        if (_currentStep == _totalSteps) {
            tmpParam += _nextStage + '&step=1';
        } else {
            tmpParam += _currentStage + '&step=' + (parseInt(_currentStep) + 1);
        }

        window.location.href = "workplatform.html?rnd=" + Date.now() + tmpParam;
    });

    $('#btn_Step_FindError').on('click', function (e) {
        $('.wrap-workstatus-alert').hide();
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

    $('#btn_Viewer_Block').on('click', function (e) {
        loadScriptText('blocks');
    });

    $('#btn_Viewer_Scene').on('click', function (e) {
        loadScriptText('scene');
    });

    $('#btn_Viewer_Core').on('click', function (e) {
        loadScriptText('');
    });

    $('#menu_Item_Save').on('click', function (e) {
        alert("save code to sever");
    });

    $('#menu_Item_Load').on('click', function (e) {
        alert("load saved code from sever");
    });

    $('#menu_Item_Execute').on('click', function (e) {
        eval(_Editor.getValue());
    });

    $('#menu_Item_Debug').on('click', function (e) {
        var wrap = $("#wrap_Debug");
        if (wrap.length == 0) {
            var tmpHTMLStr = [];
            tmpHTMLStr.push('<div id="wrap_Debug" style="display:none; position: absolute; top:-1000px; left:-1000px;">');
            tmpHTMLStr.push('   <form id="form_Debug"  action="codedebug.aspx" method="post" target="_blank">');
            tmpHTMLStr.push('       <input type="hidden" id="field_Code_Debug" name="field_Code_Debug">');
            tmpHTMLStr.push('</form>');
            tmpHTMLStr.push('</div>');
            $('body').append($(tmpHTMLStr.join('')));
        }

        $("#field_Code_Debug").val(_Editor.getValue());
        $("#form_Debug")[0].submit();
    });

    $(window).resize(function () {
        onWindowResize();
    });

    $(window).on('beforeunload', function () {
        WorkScene.saveStatus();
    });
};

function loadScriptText(symbol) {
    var currLib = '';
    for (var i = 0; i < _globalLibs.length; i++) {
        var tmpPath = _globalLibs[i].toLowerCase().replace(/\\/g, '/');
        var tmpArr = tmpPath.split('/');
        if (symbol == '') {
            if (tmpArr[tmpArr.length - 1].indexOf('blocks') < 0 && tmpArr[tmpArr.length - 1].indexOf('scene') < 0) {
                currLib = tmpPath;
                break;
            }
        } else {
            if (tmpArr[tmpArr.length - 1].indexOf(symbol) == 0) {
                currLib = tmpPath;
                break;
            }
        }
    }

    if (currLib != '') {
        $.get(tmpPath, function (data, status) {
            $('#iframe_CodeViewer')[0].contentWindow.editor.setValue(data, -1);
        });
    }
}

function siderBarExpand() {
    var tmpObj = $(".siderbar-wrap");
    var tmpLeft = $('body').width();
    if (!tmpObj.hasClass('expanded')) {
        tmpLeft -= tmpObj.width();
        tmpObj.toggleClass('expanded');
        tmpObj.animate({ left: tmpLeft + 'px' }, 'slow', adjustAfterSiderBarResize);
        $('#icon_SiderBar_Expand').toggleClass('fa-angle-double-left').toggleClass('fa-angle-double-right');
        $('.siderbar-drag').toggleClass('expanded');
    } else {
        siderBarCollapse();
    }
};

function siderBarCollapse() {
    var tmpObj = $(".siderbar-wrap");
    var tmpLeft = $('body').width();
    tmpObj.removeClass('expanded');
    tmpObj.animate({ left: tmpLeft + 'px' }, 'slow', adjustAfterSiderBarResize);
    $('#icon_SiderBar_Expand').toggleClass('fa-angle-double-left').toggleClass('fa-angle-double-right');
    $('.siderbar-drag').removeClass('expanded');
};

var _workspaceDatas = null;
function siderBarDrag(e) {
    var _sidebarDragStarX = e.pageX;
    $(document).bind("mousemove", function (ev) {
        $(".siderbar-drag-proxy").css("left", ev.pageX + "px");
    });
};

function buildStageHTML(data) {
    var container = $('#Course_Stage_Container .wrap-head-stage-steps');
    var isFuture = false;
    var labelClass = "";
    var itemClass = "";
    var innerTxt = "";
    var style = '';
    data.stage_count = parseInt(data.stage_count);
    data.complete_count = parseInt(data.complete_count);
    var itemWidth = Math.floor(100 / data.stage_count);
    var labelStyle = '';
    for (var i = 1; i < data.stage_count + 1; i++) {
        labelClass = "";
        itemClass = 'future-item';
        innerTxt = '';
        style = '';
        labelStyle = '';
        if (i <= data.complete_count + 1) {
            itemClass = "complete-item";
            if (i == data.complete_count + 1) {
                labelClass = "show-stage-index";
                style = "line-height: 27px;";
                innerTxt = i;
            }
        }

        if (i == data.current_stage) {
            labelClass = "show-stage-index";
            itemClass = "current-item";

            innerTxt = data.current_stage;
            style = '';
            if (data.stage_count == 1) {
                labelStyle = ' style="margin-top: 5px"';
            }
        }

        var tmpItem = $('<div class="head-stage-label ' + labelClass + '" ' + labelStyle + '><div class="' + itemClass + '" data-target="' + i + '" style="' + style + '">' + innerTxt + '</div></div>');
        tmpItem.css('width', itemWidth + '%');
        container.append(tmpItem);
    }

    var background = $('.head-stage-background');
    var parent = $('#Course_Stage_Container');
    $('.head-course-name').text(data.name);
    var titleWidth = testTextWidthFromEl($('.head-course-name'));
    if (titleWidth > $('#wrap_Head_Course_Name').width()) {
        $('#wrap_Head_Course_Name').css('padding-top', '0px');
    } else {
        $('#wrap_Head_Course_Name').css('padding-top', '15px');
    }

    var tmpWidth = itemWidth * (data.stage_count - 1);
    background.css('width', tmpWidth + '%');
    tmpWidth = 100 / (data.stage_count - 1) * (data.complete_count);
    tmpWidth = (tmpWidth > 100 ? 100 : tmpWidth);
    $('.head-stage-space').css('width', tmpWidth + '%');
    var tmpLeft = (parent.width() - background.width()) / 2;
    background.css('left', tmpLeft + 'px');
    container.css('left', 'calc(' + (-itemWidth / 2) + '% + ' + tmpLeft + 'px)');
    if (data.stage_count == 1) {
        container.css('top', "-5px");
    }

    updateTipsText(data.note);

    $('div.head-stage-label .complete-item').on('click', function () {
        gotoSpecialStep($(arguments[0].target).attr('data-target'));
    })
};

function updateTipsText(data) {
    var wrap = $('#ul_Guide_List');
    wrap.empty();
    for (var i = 0; i < _topTooltip.length; i++) {
        wrap.append($('<li class="list-group-item">' + _topTooltip[i] + '</li>'));
    }
}

function initTopTooltips(notesItems) {
    var note = [];
    var tmpItem, contents, tmpContent;
    for (var i = 0; i < notesItems.length; i++) {
        tmpItem = $(notesItems[i]);
        contents = tmpItem.find('content');
        if (contents.length > 0 && $(contents[0]).attr('chinese').length > 0) {
            note.push($(contents[0]).attr('chinese'));
        }
    }

    return note;
};

function initData(response) {
    var userItem = $($(response).find("basic").find("usr")[0]);
    var sceneItem = $($(response).find("sence")[0]);
    _currentStage = sceneItem.attr('symbol');
    _currentStep = sceneItem.attr('currentstage');
    _totalSteps = sceneItem.attr('totalstage');
    _nextStage = sceneItem.attr('next');
    _nextStep = parseInt(_currentStep);
    if (parseInt(_currentStep) < parseInt(_totalSteps)) {
        _nextStep += 1;
    }

    var completeCount = _currentStep;
    if (!isNaN(sceneItem.attr('finishstage')) && sceneItem.attr('finishstage') != '') {
        completeCount = parseInt(sceneItem.attr('finishstage'));
    }

    var words = [];
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

        words.push(tmpObj);
    }

    var knowledge = [];
    var kpsItems = $(response).find("kps").find('item');
    for (var i = 0; i < kpsItems.length; i++) {
        knowledge.push($(kpsItems[i]).text());
    }

    _topTooltip = initTopTooltips($(response).find("tips").find('item'));
    var data = {
        user: {
            id: userItem.attr('id'),
            name: userItem.attr('nickname'),
            img: _getRequestURL(userItem.attr('header'), {})
        },
        course: {
            id: _currentStage,
            name: sceneItem.attr('name'),
            stage_count: _totalSteps,
            current_stage: _currentStep,
            complete_count: completeCount,
            note: _topTooltip,
            words: words,
            kps: knowledge
        },
        blockly: {
            toolbox: "",
            workspace: "",
            lib: []
        }
    }

    _messages.success = $($(response).find("message").find('suc')[0]).attr('msg');
    _messages.faild = $($(response).find("message").find('faild')[0]).attr('msg');
    return data;
};

function updateUserInfo(data) {
    $('.header-user-image').attr('src', 'image/tmpheader.jpg');
    $('.header-user-name-text').text(data.name);
    $('.header-user-name-text').text(data.name);
};

function showCodeViewerPanel(e) {
    var viewPanel = $('#panel_ViewMode');
    viewPanel.modal('toggle');
    if (!viewPanel.hasClass('show')) {
        $('#panel_WordMode').hide("slow");
        $('#panel_KnowledgeMode').hide("slow");
    } else {
        $('.footer-tool-item').removeClass('selected');
        $('#btn_Footer_CreateMode').addClass('selected');
    }

    loadScriptText('blocks');
};

var _wordPanelInit = false;
function showWordPanel(e) {
    var wordPanel = $('#panel_WordMode');
    if (wordPanel.css('display') == 'none') {
        //$('#panel_CodeMode').hide("slow");
        $('#panel_KnowledgeMode').hide("slow");
        wordPanel.show('slow');
        if (!_wordPanelInit) {
            $('.word-panel-content.container').empty();
            $('.word-panel-content.container').append(buildWordListHTML());
            $('.play-soundmark-button').on('mouseover', function (e) {
                playSoundMark(e);
            });
        }

        adjustCodePanelSize(wordPanel, _wordPanelInit);
        adjustCodePanelPosition(wordPanel, e, _wordPanelInit);
    } else {
        wordPanel.width(400);
        wordPanel.height(300);
        wordPanel.hide("slow");
        $('.footer-tool-item').removeClass('selected');
        $('#btn_Footer_CreateMode').addClass('selected');
    }
};

function buildWordListHTML() {
    var data = _wordsData;
    var htmlStringArr = [];
    htmlStringArr.push('<div class="row">');
    for (var i = 0; i < data.length; i++) {
        htmlStringArr.push('<div class="col-12 workspace-word-list-item">');
        htmlStringArr.push('    <div class="container padding-bottom20" style="padding: 0px;">');
        htmlStringArr.push('        <div class="row">');
        htmlStringArr.push('            <div class="col-12 word-word">');
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
        htmlStringArr.push('            <div class="col-4" style="color: rgb(254,186,0);">');
        for (var j = 0; j < 5; j++) {
            if (j < data[i].star - 1) {
                htmlStringArr.push('<i class="fa fa-star" aria-hidden="true"></i>');
            } else {
                htmlStringArr.push('<i class="fa fa-star-o" aria-hidden="true"></i>');
            }
        }

        htmlStringArr.push('            </div>');
        htmlStringArr.push('            <div class="col-7">');
        htmlStringArr.push(data[i].note);
        htmlStringArr.push('            </div>');
        htmlStringArr.push('        </div>');
        htmlStringArr.push('        <div class="row word-paraphrase">');
        for (var j = 0; j < data[i].paraphrase.length; j++) {
            htmlStringArr.push('            <div class="col-12">');
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

var _knowledgePanelInit = false;
function showKnowledgePanel(e) {
    var knowledgePanel = $('#panel_KnowledgeMode');
    if (knowledgePanel.css('display') == 'none') {
        //$('#panel_CodeMode').hide("slow");
        $('#panel_WordMode').hide("slow");
        knowledgePanel.show('slow');
        if (!_wordPanelInit) {
            $('.knowledge-panel-content.container').empty();
            $('.knowledge-panel-content.container').append(buildKnowledgeHTML());
        }

        adjustCodePanelSize(knowledgePanel, _knowledgePanelInit);
        adjustCodePanelPosition(knowledgePanel, e, _knowledgePanelInit);
    } else {
        knowledgePanel.width(400);
        knowledgePanel.height(300);
        knowledgePanel.hide("slow");
        $('.footer-tool-item').removeClass('selected');
        $('#btn_Footer_CreateMode').addClass('selected');
    }
};

function buildKnowledgeHTML() {
    var htmlStringArr = [];
    htmlStringArr.push('<div class="row">');
    htmlStringArr.push('<div class="col-12 workspace-word-list-item">');
    htmlStringArr.push('    <div class="container padding-bottom20" style="padding: 0px;">');
    htmlStringArr.push('        <div class="row">');
    htmlStringArr.push('            <div class="col-12 word-word" style="font-size:15px; font-weight:500;">');
    htmlStringArr.push('                <ul>');
    for (var i = 0; i < _knowledgeData.length; i++) {
        htmlStringArr.push('                <li style="list-style: circle;">' + _knowledgeData[i] + '</li>');
    }
    htmlStringArr.push('                </ul>');
    htmlStringArr.push('            </div>');
    htmlStringArr.push('        </div>');
    htmlStringArr.push('    </div>');
    htmlStringArr.push('</div>');

    htmlStringArr.push('</div>');
    return htmlStringArr.join('');
};

function adjustCodePanelSize(codePanel, panelInited) {
    var minLeft = 20;
    var minTop = 20;
    var maxWidth = $('body').width() - minLeft * 2;
    var maxHeight = $('body').height() - $('header').height() - $('footer').height() - minTop * 2;
    var minWidth = 400;
    var minHeight = 300;
    if (!panelInited) {
        codePanel.height(minHeight);
        codePanel.width(minWidth);
    } else {
        if (codePanel.height() > maxHeight) {
            codePanel.height(maxHeight);
        } else if (codePanel.height() < minHeight) {
            codePanel.height(minHeight);
        }

        if (codePanel.width() > maxWidth) {
            codePanel.width(maxWidth);
        } else if (codePanel.width() < minWidth) {
            codePanel.width(minWidth);
        }
    }
};

function adjustCodePanelPosition(codePanel, e, panelInited) {
    var targetOffset = $(e.currentTarget).offset();
    var sourceOffset = codePanel.offset();
    var minLeft = 20;
    var minTop = 20;
    var maxLeft = $('body').width() - codePanel.width() - 20;
    var maxTop = $('body').height() - codePanel.height() - 20;
    if (!panelInited) {
        codePanel.css('top', (targetOffset.top - 20 - codePanel.height()) + "px");
        codePanel.css('left', (targetOffset.left - codePanel.width() / 4) + "px");
        panelInited = true;
    } else {
        if (sourceOffset.top < minTop) {
            codePanel.css('top', minTop + "px");
        } else if (sourceOffset.top > maxTop) {
            codePanel.css('top', maxTop + "px");
        }

        if (sourceOffset.left < minLeft) {
            codePanel.css('left', minLeft + "px");
        } else if (sourceOffset.left > maxLeft) {
            codePanel.css('left', maxLeft + "px");
        }
    }
};

function adjustAfterSiderBarResize() {
    var tmpWidth = $('#wrap_Workspace_Toolbar').parent().width()
    if ($('.siderbar-wrap').hasClass('expanded')) {
        tmpWidth = tmpWidth - $('.siderbar-wrap').width();
    } else {
        tmpWidth = tmpWidth - 15;
    }

    $("#card_Guide").height($('.siderbar-content').height() - 20);
};

function onWindowResize() {
    var siderBarWrap = $('.siderbar-wrap');
    if (siderBarWrap.hasClass('expanded')) {
        siderBarWrap.css('left', ($('body').width() - siderBarWrap.width()) + 'px');
    } else {
        siderBarWrap.css('left', $('body').width() + 'px');
    }

    var header = $('#wrap_TopPanel');
    siderBarWrap.css('top', header.height() + 'px');
    siderBarWrap.css('height', 'calc(100% - ' + header.height() + 'px - 60px)');
    siderBarWrap.css('height', '-moz-calc(100% - ' + header.height() + 'px - 60px)');
    siderBarWrap.css('height', '-webkit-calc(100% - ' + header.height() + 'px - 60px)');
    $('#col_CodeEditor_Wrap').height(siderBarWrap.height());
    $('#editor').height(siderBarWrap.height() - 20);
    $("#card_Guide").height($('.siderbar-content').height() - 20);
};

function gotoSpecialStep(step) {
    _registerRemoteServer();
    $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gURLMapping.bus.setcurrentstep, { stage: step, symbol: _currentStage }),
        data: '<root></root>',
        success: function (response, status) {
            if ($(response).find('err').length > 0) {
                _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Save_CurrentStepSymbol');
                return;
            }

            window.location.href = 'workplatform.html?scene=' + _currentStage + '&rnd=' + Date.now();
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
        }
    });
};

function showCompleteAlert() {
    if (_currentStep < _totalSteps) {
        var tmpParam = '&scene=';
        if (_currentStep == _totalSteps) {
            tmpParam += _nextStage + '&step=1';
        } else {
            tmpParam += _currentStage + '&step=' + (parseInt(_currentStep) + 1);
        }

        window.location.href = "workplatform.html?rnd=" + Date.now() + tmpParam;
    } else {
        $('.wrap-workstatus-alert').show();
        $('.wrap-complete-alert').show();
        $('.wrap-faild-alert').hide();
        $('#title_StepComplete').html(_messages.success);
        $('#btn_Step_GoNext').text((_currentStep == _totalSteps ? '挑战下一课' : '挑战下一步'));
        $('#btn_Step_Restart').text((_currentStep == _totalSteps ? '返回个人中心' : '重新开始'));
        WorkScene.saveStatus();
    }
};

function showFaildAlert() {
    $('.wrap-workstatus-alert').show();
    $('.wrap-complete-alert').hide();
    $('.wrap-faild-alert').show();
    $('#title_StepFaild').html(_messages.faild);
};

(function ($) {
    var AutoRowsNumbers = function (element, config) {
        this.$element = $(element);
        this.$group = $('<div/>', { 'class': "textarea-group" });
        this.$ol = $('<div/>', { 'class': 'textarea-rows' });
        this.$wrap = $('<div/>', { 'class': 'textarea-wrap' });
        this.$group.css({
            //"width": this.$element.outerWidth(true) + 'px',
            "width": '100%',
            "height": '100%',
            "display": config.display,
            "background-color": 'transparent'
        });
        this.$ol.css({
            "color": 'rgb(106,103,101)',
            "width": config.width,
            //"height": this.$element.height(),
            "height": '100%',
            "font-size": this.$element.css("font-size"),
            "line-height": this.$element.css("line-height"),
            "position": "absolute",
            "overflow": "hidden",
            "margin": 0,
            "padding": 0,
            "padding-top": '5px',
            "text-align": "right",
            "font-family": this.$element.css("font-family")
        });
        this.$wrap.css({
            "padding": ((this.$element.outerHeight() - this.$element.height()) / 2) + 'px 0',
            "background-color": 'transparent',
            //"background-color": config.bgColor,
            "position": "absolute",
            "box-sizing": "border-box",
            "margin": 0,
            "width": config.width,
            //"height": this.$element.height() + 'px'
            "height": '100%'
        });
        this.$element.css({
            "white-space": "pre",
            "resize": "none",
            "margin": 0,
            "box-sizing": "border-box",
            "padding-left": (parseInt(config.width) - parseInt(this.$element.css("border-left-width")) + parseInt(this.$element.css("padding-left"))) + 'px',
            "padding-right": '10px',
            //"width": (this.$element.width() - parseInt(config.width)) + 'px'
            "width": '100%',
            "height": '100%',
            "background-color": 'transparent'
        });
    }

    AutoRowsNumbers.prototype = {
        constructor: AutoRowsNumbers,

        init: function () {
            var that = this;
            that.$element.wrap(that.$group);
            that.$ol.insertBefore(that.$element);
            this.$ol.wrap(that.$wrap)
            that.$element.on('keydown', { that: that }, that.inputText);
            that.$element.on('scroll', { that: that }, that.syncScroll);
            that.inputText({ data: { that: that } });
        },

        inputText: function (event) {
            var that = event.data.that;

            setTimeout(function () {
                var value = that.$element.val();
                value.match(/\n/g) ? that.updateLine(value.match(/\n/g).length + 1) : that.updateLine(1);
                that.syncScroll({ data: { that: that } });
            }, 0);
        },

        updateLine: function (count) {
            var that = this;
            that.$element;
            that.$ol.html('');

            for (var i = 1; i <= count; i++) {
                that.$ol.append("<div>" + i + "</div>");
            }
        },

        syncScroll: function (event) {
            var that = event.data.that;
            that.$ol.children().eq(0).css("margin-top", -(that.$element.scrollTop()) + "px");
        }
    }

    $.fn.setTextareaCount = function (option) {
        var config = {};
        var option = arguments[0] ? arguments[0] : {};
        config.color = option.color ? option.color : "#FFF";
        config.width = option.width ? option.width : "30px";
        config.bgColor = option.bgColor ? option.bgColor : "#999";
        config.display = option.display ? option.display : "block";

        return this.each(function () {
            var $this = $(this);
            var data = $this.data('autoRowsNumbers');
            if (!data) {
                $this.data('autoRowsNumbers', (data = new AutoRowsNumbers($this, config)));
            }

            if (typeof option === 'string') {
                return false;
            } else {
                data.init();
            }
        });
    }
})(jQuery);

function getQueryString(key) {
    var tempArr = window.location.search.substr(1).split('&');
    for (var i = 0; i < tempArr.length; i++) {
        var strArr = tempArr[i].split('=');
        if (strArr[0] == key) {
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

function changeSiderBarWidth(newWidth) {
    $('.siderbar-wrap').width(newWidth);
    adjustAfterSiderBarResize();
};

function adjustModelPanelSize(panelId, frameId) {
    var dialog = $(panelId + ' .modal-dialog');
    dialog.css('max-width', '80%');
    $(frameId).width(dialog.width() - 30);
    $(frameId).height($('body').height() - 280)
}
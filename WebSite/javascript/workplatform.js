'use strict';

var _wordsData = [];
var _workspaceCfg = {};
var _currentStage = '';
var _nextStage = '';
var _currentStep = '';
var _nextStep = '';
var _totalSteps = '';
var _topTooltip = []
var _messages = {
    success: '',
    faild: ''
};

function initPage() {
    _registerRemoteServer();
    $.ajax({
        type: 'GET',
        async: true,
        url: _getRequestURL(_gURLMapping.account.signstatus),
        data: '<root></root>',
        success: function (data_1, status) {
            if ($(data_1).find('err').length > 0) {
                window.location.href = "signin.html";
                return;
            } else {
                $.ajax({
                    type: 'POST',
                    async: true,
                    url: _getRequestURL(_gURLMapping.bus.getworkspace, { symbol: getQueryString() }),
                    data: '<root></root>',
                    success: function (response, status) {
                        if ($(response).find('err').length > 0) {
                            _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Input_OldPWD');
                            return;
                        }

                        var data = initData(response);
                        _wordsData = data.course.words;
                        _workspaceCfg = data.blockly;
                        buildStageHTML(data.course);
                        updateUserInfo(data.user);
                        adjustWorkSpaceType(data);
                        adjustAfterSiderBarResize();
                        $("#txt_Code_Content").setTextareaCount({ color: "rgb(176,188,177)", });
                        LoadSceneLib(data.blockly);
                        $('#mask_Page_Loading').hide();
                        $('#mask_Page_Loading').css('visibility', 'hidden');
                    },
                    dataType: 'xml',
                    xhrFields: {
                        withCredentials: true
                    },
                    error: function () {
                    }
                });
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            window.location.href = "signin.html";
        }
    });

    initEvents();
    var playBtn = $('.workspace-tool-item.fa.fa-play');
    var shareBtn = $('.workspace-tool-item.fa.fa-share-alt');
    var fullScreenBtn = $('.workspace-tool-item.fa.fa-arrows-alt');
    var refereshBtn = $('.workspace-tool-item.fa.fa-repeat');
    bindEventsToScene(playBtn, shareBtn, fullScreenBtn, refereshBtn);
    //siderBarExpand();
    adjustAfterSiderBarResize();
};

function initEvents() {
    $('#btn_Footer_Logo').on('click', function (e) {
        window.location.href = "index.html";
    });

    $('#btn_SiderBar_Expand').on('click', function () {
        siderBarExpand();
    });

    $('.goto-profile-image-button').on('click', function () {
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

    $(document).keydown(function () {
        if (arguments[0].keyCode == '27' && $('.run-scene-fullscreen').css('display') != 'none') {
            $('.run-scene-fullscreen').hide("slow", function () {
                $('.siderbar-scene-container').append($('#game_container'));
            });
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
        } else {
            activeCreativeMode();
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

    $('.code-panel-header-close').on('click', function (e) {
        //$('#panel_CodeMode').css('display', 'none');
        $('#panel_CodeMode').hide("slow");
        $('.footer-tool-item').removeClass('selected');
        $('#btn_Footer_CreateMode').addClass('selected');
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

    $('.run-scene-fullscreen-close-button').on('click', function (e) {
        //$('.run-scene-fullscreen').css('display', 'none');
        $('.run-scene-fullscreen').hide("slow", function () {
            $('.siderbar-scene-container').append($('#game_container'));
        });
    });

    $('#panel_CodeMode').draggable({ containment: "body", scroll: false }).resizable();

    $('#panel_WordMode').draggable({ containment: "body", scroll: false }).resizable();

    $('#panel_KnowledgeMode').draggable({ containment: "body", scroll: false }).resizable();

    $('.step-evaluate-button').on('click', function (e) {

    });

    $('#btn_Step_Restart').on('click', function (e) {
        WorkScene.reset();
        $('.wrap-workstatus-alert').hide();
    });

    $('#btn_Step_GoNext').on('click', function (e) {
        _registerRemoteServer();
        $.ajax({
            type: 'POST',
            async: true,
            url: _getRequestURL(_gURLMapping.bus.setfinishscene, { symbol: _currentStage }),
            data: '<root></root>',
            success: function (response, status) {
            },
            dataType: 'xml',
            xhrFields: {
                withCredentials: true
            },
            error: function () {
            }
        });

        var tmpParam = '';
        if (_currentStep == _totalSteps) {
            tmpParam = '&scene=' + _nextStage;
        }

        window.location.href = "workplatform.html?rnd=" + Date.now() + tmpParam;
    });

    $('#btn_Step_FindError').on('click', function (e) {
        $('.wrap-workstatus-alert').hide();
    });

    $(window).resize(function () {
        onWindowResize();
    });
};

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
    var container = $('#Course_Stage_Container');
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
        itemClass = "future-item";
        innerTxt = "";
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
        tmpItem.css('width', itemWidth + "%");
        container.append(tmpItem);
    }

    $('.head-course-name').text(data.name);
    var tmpWidth = itemWidth * (data.stage_count - 1);
    $('.head-stage-background').css('width', tmpWidth + "%");
    tmpWidth = 100 / (data.stage_count - 1) * (data.complete_count);
    $('.head-stage-space').css('width', tmpWidth + "%");
    updateTipsText(data.note);

    $("#btn_Step_GoNext").text((data.stage_count == data.complete_count ? '挑战下一课' : '挑战下一步'));
    $('div.head-stage-label .complete-item').on('click', function () {
        gotoSpecialStep($(arguments[0].target).attr('data-target'));
    })
};

function updateTipsText(data) {
    $('.course-stage-note').empty();
    if (typeof (data) == 'string') {
        $('.course-stage-note').html(data);
    } else {
        var needEvent = false;
        for (var i = 0; i < data.length; i++) {
            var tmpStrArr = [];
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
            $('.course-stage-note').html(tmpStrArr.join(''));
        }

        if (needEvent) {
            $(".link-button-block-example").click(hightlightExampleBlock);
        }
    }
}

function initTopTooltips(notesItems) {
    var note = [];
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

        note.push(newNoteObj);
    }

    return note;
}

function initData(response) {
    var userItem = $($(response).find("basic").find("usr")[0]);
    var sceneItem = $($(response).find("sence")[0]);
    _currentStage = sceneItem.attr('symbol');
    _currentStep = sceneItem.attr('currentstage');
    _totalSteps = sceneItem.attr('totalstage');
    _nextStage = sceneItem.attr('next');
    if (parseInt(_currentStep) < parseInt(_totalSteps)) {
        _nextStep = parseInt(_currentStep) + 1;
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
        tmpObj.star = !$(wordsItems[i]).attr('value') ? '0' : $(wordsItems[i]).attr('value');
        tmpObj.note = $(wordsItems[i]).attr('note');
        var tmpItems = $(wordsItems[i]).find('soundmark').find('item');
        tmpObj.soundmark = [];
        for (var j = 0; j < tmpItems.length; j++) {
            tmpObj.soundmark.push([$(tmpItems[j]).attr('value'), _getRequestURL(_gURLMapping.data.getbinresource, { symbol: $(tmpItems[j]).attr('sound') })]);
        }

        tmpItems = $(wordsItems[i]).find('paraphrase').find('item');
        tmpObj.paraphrase = [];
        for (var j = 0; j < tmpItems.length; j++) {
            tmpObj.paraphrase.push([$(tmpItems[j]).val()]);
        }

        tmpItems = $(wordsItems[i]).find('variant').find('item');
        tmpObj.variant = {};
        for (var j = 0; j < tmpItems.length; j++) {
            tmpObj.variant[$(tmpItems[j]).attr('name')] = $(tmpItems[j]).attr('value');
        }

        words.push(tmpObj);
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
            words: words
        },
        blockly: {
            toolbox: $(response).find("toolbox").html(),
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

    addLibPath($($(response).find("toolbox")[0]));
    var tmpPaths = $(response).find("game").find('script');
    for (var i = 0; i < tmpPaths.length ; i++) {
        addLibPath($(tmpPaths[i]));
    }

    if (_currentStage.toLowerCase() == "a_01_001" || _currentStage.toLowerCase() == "a_01_002") {
        var tmpSymbol = _currentStage.replace('_', "-").replace('_', "-");
        data.blockly.lib.push('javascript/scene/' + tmpSymbol + '/intrcourse/1/konvas.js');
        data.blockly.lib.push('javascript/scene/' + tmpSymbol + '/intrcourse/1/components.js');
        data.blockly.lib.push('javascript/scene/' + tmpSymbol + '/intrcourse/1/level1.js');
    }

    _messages.success = $($(response).find("message").find('suc')[0]).attr('msg');
    _messages.faild = $($(response).find("message").find('faild')[0]).attr('msg');

    return data;
};

function updateUserInfo(data) {
    $('.header-user-image').attr('src', _getRequestURL(_gURLMapping.account.getheader, {}));
    $('.header-user-name-text').text(data.name);
    $('.header-user-name-text').text(data.name);
};

function activeCreativeMode() {
    $('#panel_CodeMode').hide("slow");
    $('#panel_WordMode').hide("slow");
    $('#panel_KnowledgeMode').hide("slow");
    $('.footer-tool-item').removeClass('selected');
    $('#btn_Footer_CreateMode').addClass('selected');
};

var _codePanelInit = false;
function showCodePanel(e) {
    var codePanel = $('#panel_CodeMode');
    if (codePanel.css('display') == 'none') {
        $('#panel_WordMode').hide("slow");
        $('#panel_KnowledgeMode').hide("slow");
        codePanel.show('slow');
        adjustCodePanelSize(codePanel, _codePanelInit);
        adjustCodePanelPosition(codePanel, e, _codePanelInit);
    } else {
        codePanel.width(400);
        codePanel.height(300);
        codePanel.hide("slow");
        $('.footer-tool-item').removeClass('selected');
        $('#btn_Footer_CreateMode').addClass('selected');
    }
};

var _wordPanelInit = false;
function showWordPanel(e) {
    var wordPanel = $('#panel_WordMode');
    if (wordPanel.css('display') == 'none') {
        $('#panel_CodeMode').hide("slow");
        $('#panel_KnowledgeMode').hide("slow");
        wordPanel.show('slow');
        if (!_wordPanelInit) {
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

function playSoundMark(eventObj) {
    var soundSource = $(eventObj.target).attr('data-target');
    $("#audio_Soundmark").attr('src', soundSource);
    $("#audio_Soundmark")[0].play();
};

var _knowledgePanelInit = false;
function showKnowledgePanel(e) {
    var knowledgePanel = $('#panel_KnowledgeMode');
    if (knowledgePanel.css('display') == 'none') {
        $('#panel_CodeMode').hide("slow");
        $('#panel_WordMode').hide("slow");
        knowledgePanel.show('slow');
        if (!_wordPanelInit) {
            $('.word-panel-content.container').append('waiting for create.');
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

function buildWordListHTML() {
    var data = _wordsData;
    var htmlStringArr = [];
    htmlStringArr.push('<div class="row">');
    for (var i = 0; i < data.length; i++) {
        htmlStringArr.push('<div class="col-xs-12 workspace-word-list-item">');
        htmlStringArr.push('    <div class="container padding-bottom20" style="padding: 0px;">');
        htmlStringArr.push('        <div class="row">');
        htmlStringArr.push('            <div class="col-xs-12 word-word">');
        htmlStringArr.push(data[i].word);
        htmlStringArr.push('            </div>');
        htmlStringArr.push('        </div>');
        htmlStringArr.push('        <div class="row word-soundmark">');
        for (var j = 0; j < data[i].soundmark.length; j++) {
            htmlStringArr.push('            <div class="col-xs-6" style="padding-right: 0px;">');
            htmlStringArr.push(data[i].soundmark[j][0]);
            htmlStringArr.push('                <i class="glyphicon glyphicon-volume-up play-soundmark-button" aria-hidden="true" data-target="' + data[i].soundmark[j][1] + '"></i>');
            htmlStringArr.push('            </div>');
        }

        htmlStringArr.push('        </div>');
        htmlStringArr.push('        <div class="row word-soundmark">');
        htmlStringArr.push('            <div class="col-xs-4" style="color: rgb(254,186,0);">');
        for (var j = 0; j < 5; j++) {
            if (j < data[i].star - 1) {
                htmlStringArr.push('<i class="glyphicon glyphicon-star" aria-hidden="true"></i>');
            } else {
                htmlStringArr.push('<i class="glyphicon glyphicon-star-empty" aria-hidden="true"></i>');
            }
        }

        htmlStringArr.push('            </div>');
        htmlStringArr.push('            <div class="col-xs-7">');
        htmlStringArr.push(data[i].note);
        htmlStringArr.push('            </div>');
        htmlStringArr.push('        </div>');
        htmlStringArr.push('        <div class="row word-paraphrase">');
        for (var j = 0; j < data[i].paraphrase.length; j++) {
            htmlStringArr.push('            <div class="col-xs-12">');
            htmlStringArr.push(data[i].paraphrase[j]);
            htmlStringArr.push('            </div>');
        }

        if (data[i].variant) {
            htmlStringArr.push('        </div>');
            htmlStringArr.push('        <div class="row">');
            htmlStringArr.push('            <div class="col-xs-12">');
            htmlStringArr.push('变形');
            htmlStringArr.push('            </div>');
            for (var key in data[i].variant) {
                htmlStringArr.push('            <div class="col-xs-3 word-variant-header">');
                htmlStringArr.push(key + ': ');
                htmlStringArr.push('            </div>');
                htmlStringArr.push('            <div class="col-xs-9 word-variant-content">');
                htmlStringArr.push(data[i].variant[key]);
                htmlStringArr.push('            </div>');
            }
        }

        htmlStringArr.push('        </div>');
        htmlStringArr.push('    </div>');
        htmlStringArr.push('</div>');
    }

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
    var wrap = $('#wrap_Workspace_Toolbar');
    var tmpWidth = $('#wrap_Workspace_Toolbar').parent().width()
    if ($('.siderbar-wrap').hasClass('expanded')) {
        wrap.css('margin-left', '0px');
        tmpWidth = tmpWidth - $('.siderbar-wrap').width() + 15;
    } else {
        tmpWidth = tmpWidth - 15;
    }

    wrap.animate({ width: tmpWidth + 'px' });

    var helpWrap = $('#wrap_Scene_Help_Content');
    wrap = $('.siderbar-content');
    $('#game_container').height(wrap.height() - helpWrap.height() - 30);
};

function onWindowResize() {
    var siderBarWrap = $('.siderbar-wrap');
    if (siderBarWrap.hasClass('expanded')) {
        siderBarWrap.css('left', ($('body').width() - siderBarWrap.width()) + 'px');
    } else {
        siderBarWrap.css('left', $('body').width() + 'px');
    }

    var header = $('header');
    siderBarWrap.css('top', header.height() + 'px');
    siderBarWrap.css('height', 'calc(100% - ' + header.height() + 'px - 60px)');
    siderBarWrap.css('height', '-moz-calc(100% - ' + header.height() + 'px - 60px)');
    siderBarWrap.css('height', '-webkit-calc(100% - ' + header.height() + 'px - 60px)');
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
}

function showCompleteAlert() {
    _registerRemoteServer();
    $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gURLMapping.bus.setcurrentstep, { stage: _nextStep, symbol: _currentStage }),
        data: '<root></root>',
        success: function (response, status) {
            if ($(response).find('err').length > 0) {
                _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Save_CurrentStepSymbol');
                return;
            }

            $('.wrap-workstatus-alert').show();
            $('.wrap-complete-alert').show();
            $('.wrap-faild-alert').hide();
            $('#title_StepComplete').html(_messages.success);
            WorkScene.saveStatus();
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
        }
    });
};

function showFaildAlert() {
    $('.wrap-workstatus-alert').show();
    $('.wrap-complete-alert').hide();
    $('.wrap-faild-alert').show();
    $('#title_StepFaild').html(_messages.faild);
};

var _staticSelectFrameInterval = '';
function showTooltip(eventObj) {
    if (!eventObj) {
        window.clearInterval(_staticSelectFrameInterval);
        $('#tooltip_Component').hide();
        $('.tooltip-warning-wrap').hide();
        updateTipsText(_topTooltip);
    } else {
        var target = eventObj.currentTarget;
        var wrap = $('#container_Static_Stage');
        var tip = $('#tooltip_Component');
        var tipFrame = $('.tooltip-warning-wrap');
        var html = '<p style="font-family: 微软雅黑; font-size: 15px;"><strong <%style%>>' + target.cn + ': </strong><span>(' + target.en + ')' + target.dt + '</span></p>';
        updateTipsText(html.replace('<%style%>', 'style="color:rgb(2,117,216);"'));
        $('#tooltip_Component .tooltip-inner').html(html.replace('<%style%>', ''));
        var offset = wrap.offset();
        var x = target.x() + offset.left + target.width() / 2 - tip.width() / 2;
        var y = target.y() + offset.top - tip.height() - 20;
        tip.css('left', x + 'px');
        tip.css('top', y + 'px');
        tip.show();

        tipFrame.width(target.width() + 20);
        tipFrame.height(target.height() + 20);
        tipFrame.css('left', (target.x() + offset.left - 10) + 'px');
        tipFrame.css('top', (target.y() + offset.top - 10) + 'px');
        tipFrame.show();
        _staticSelectFrameInterval = window.setInterval("$('.tooltip-warning-wrap').toggleClass('hidden');", 300);
    }
}

function adjustWorkSpaceType(data) {
    var siderbar = $('.siderbar-wrap');
    var blocklyWrap = $('#wrap_Workspace_Blockly');
    var staticWrap = $('#wrap_Workspace_Static');
    if (data.blockly.toolbox == '') {
        siderbar.hide();
        blocklyWrap.hide();
        staticWrap.show();
        staticWrap.height('calc(100% - ' + ($('footer').height() + staticWrap.offset().top) + 'px)');
        siderBarCollapse();
    } else {
        siderbar.show();
        blocklyWrap.show();
        staticWrap.hide();
    }
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

function getQueryString() {
    var tempArr = window.location.search.substr(1).split('&');
    for (var i = 0; i < tempArr.length; i++) {
        var strArr = tempArr[i].split('=');
        if (strArr[0] == 'scene') {
            return strArr[1];
        }
    }
};
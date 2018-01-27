'use strict';

var _useFullContainer = false;
var _gStageData = {
    user: { id: '', name: '', img: '' },
    course: { id: '', nextid: '', name: '', total: 0, current: 0, next: 0, complete: 0, note: [], words: [], kps: [], msg: {} },
    blockly: { toolbox: '', workspace: '', lib: [] }
};
var _workspaceCfg = {};

function initPage() {
    $('#mask_Page_Loading').hide();
    $('#mask_Page_Loading').css('visibility', 'hidden');
    adjustMainSize();

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
    //                    _wordsData = data.course.words;
    //                    _knowledgeData = data.course.kps;
    //                    _workspaceCfg = data.blockly;
    //                    buildStageHTML(data.course);
    //                    updateUserInfo(data.user);
    //                    adjustWorkSpaceType(data);
    //                    //$("#txt_Code_Content").setTextareaCount({ color: "rgb(176,188,177)", });                        
    //                    LoadSceneLib(data.blockly);
    //                    $('#mask_Page_Loading').hide();
    //                    $('#mask_Page_Loading').css('visibility', 'hidden');
    //                    window.setTimeout('adjustAfterSiderBarResize();', 2000);
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
        '		<usr id="42" nickname="Alice"/>' +
        '	</basic>' +
        '	<sence name="初级第一课：模式设别" symbol="b_01_002" id="" totalstage="4" currentstage="2" finishstage="1" next="b_01_003"/>' +
        '	<tips>' +
        '		<item index="1">' +
        '			<content chinese="向正确的方向移动足够的步数，最后吃到橙色的豆子。" english="" blocktype=""/>' +
        '		</item>' +
        '		<item index="2">' +
        '			<content chinese="向正确的方向移动足够的步数，最后吃到橙色的豆子。" english="" blocktype=""/>' +
        '		</item>' +
        '		<item index="3">' +
        '			<content chinese="向正确的方向移动足够的步数，最后吃到橙色的豆子。" english="" blocktype=""/>' +
        '		</item>' +
        '		<item index="4">' +
        '			<content chinese="向正确的方向移动足够的步数，最后吃到橙色的豆子。" english="" blocktype=""/>' +
        '		</item>' +
        '		<item index="5">' +
        '			<content chinese="向正确的方向移动足够的步数，最后吃到橙色的豆子。" english="" blocktype=""/>' +
        '		</item>' +
        '		<item index="6">' +
        '			<content chinese="向正确的方向移动足够的步数，最后吃到橙色的豆子。" english="" blocktype=""/>' +
        '		</item>' +
        '	</tips>' +
        '	<toolbox src="B-01-001_3D/pacman/1/Blocks/blocks.JS">' +
        '		<xml id="toolbox" style="display: none">' +
        '			<block type="event_start"/>' +
        '			<block type="move_onestep_up"/>' +
        '			<block type="move_onestep_down"/>' +
        '			<block type="move_onestep_left"/>' +
        '			<block type="move_onestep_right"/>' +
        '		</xml>' +
        '	</toolbox>' +
        '	<workspacestatus>' +
        '		<xml xmlns="http://www.w3.org/1999/xhtml"/>' +
        '	</workspacestatus>' +
        '	<game>' +
        '		<script src="common/pacman.js"/>' +
        '		<script src="B-01-001_3D/pacman/1/Scene/scene.JS"/>' +
        '	</game>' +
        '	<message>' +
        '		<faild msg="非常抱歉，您的工作出现错误，请检查后继续运行."/>' +
        '		<suc msg="恭喜你，你已经完成了第 1 步了.距离成为一个工程师已经不远了."/>' +
        '	</message>' +
        '	<words>' +
        '		<stage value="1">' +
        '			<word value="move" note="儿童英语/CET4/计算机英语" star="4">' +
        '				<soundmark>' +
        '					<item type="us" value="美 [kəm"pjutɚ]" sound="sound_word_computer_us"/>' +
        '					<item type="uk" value="英 [kəm"pjuːtə]" sound="sound_word_computer_uk"/>' +
        '				</soundmark>' +
        '				<paraphrase>' +
        '					<item>v.移动</item>' +
        '				</paraphrase>' +
        '				<variant>' +
        '				<item name="复数" value="computers"/>' +
        '				</variant>' +
        '			</word>' +
        '		</stage>' +
        '	</words>' +
        '</root>');
    initData(dataXML);
    buildHeaderHTML();
    buildCourseTips();
    hideLoadingMask();
    resetWorkSpace();
    //adjustSizeBySiderBar();
    loadSceneLib();
    //$("#txt_Code_Content").setTextareaCount({ color: "rgb(176,188,177)", });
    //window.setTimeout('WorkScene.saveStatus(true);', 60000);
    initEvents();
    //var playBtn = $('.workspace-tool-item.workspace-play-button.fa.fa-play');
    //var shareBtn = $('.workspace-tool-item.workspace-share-button.fa.fa-share-alt');
    //var fullScreenBtn = $('.workspace-tool-item.workspace-fullscreen-button.fa.fa-arrows-alt');
    //var refereshBtn = $('.workspace-tool-item.workspace-referesh-button.fa.fa-repeat');
    //bindEventsToScene(playBtn, shareBtn, fullScreenBtn, refereshBtn);
    //$('.siderbar-wrap').width($('body').width() / 3);
    //adjustAfterSiderBarResize();
};

function initEvents() {
    initHeaderEvents();
    initToolbarEvents();
    initBottomTBEvents();
    initSiderBarEvents();
    initDetailPanelsEvents();
    $(window).resize(function () {
        onWindowResize();
    });

    $(window).on('beforeunload', function () {
        WorkScene.saveStatus();
    });
};

function adjustMainSize() {
    var headerHeight = $('.header-container').height();
    var footerHeight = $('footer').height();
    var tipHeight = $('.course-tip-loading-col').height();
    var toolbarHeight = $('.toolbar-container-row').height();
    var bbarHeight = $('.bottom-toolbar-container-row').height();
    var tmpHeight = headerHeight + footerHeight + tipHeight + toolbarHeight + bbarHeight;
    $('.wrap-container .main-container-col').height($('.wrap-container').height() - tmpHeight + 1);
    $('.siderbar-wrap').height($('.wrap-container .main-container-col').height());
    $('.siderbar-wrap').css('top', $('.wrap-container .main-container-col').offset().top + 'px');
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
    _gStageData.course.msg.faild = $($(response).find("message").find('faild')[0]).attr('msg');
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
        loadStageLibs_1(currStageId);
    } else if (currStageId == 'a_02_001' || currStageId == 'a_02_002' || currStageId == 'a_02_003') {
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
    var tmpPaths = $(response).find("game").find('script');
    var include3D = false;
    for (var i = 0; i < tmpPaths.length ; i++) {
        if ($(tmpPaths[i]).attr('src').toLowerCase().indexOf('_3d') >= 0) {
            include3D = true;
            break;
        }
    }

    if (include3D) {
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
    $('.header-user-name-text').text(_gStageData.user.name);
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
        window.close();
    });
};

function initToolbarEvents() {
    $('.toolbar-button-play').on('click', function (e) {

    });

    $('.toolbar-button-share').on('click', function (e) {

    });

    $('.toolbar-button-fullscreen').on('click', function (e) {
        var value = $('.run-scene-fullscreen-close-button').attr('data-content').split(',');
        var width = parseInt(value[0]);
        var height = parseInt(value[1]);
        $('.run-scene-fullscreen').hide("slow", function () {
            var container = $('#game_container');
            $('.siderbar-content').append(container);
            adjustAfterSiderBarResize();
            container.find('canvas').height(height);
            container.find('canvas').width(width);
            container.css('margin-left', '0px');
            var playButton = $('.run-scene-fullscreen-play-button');
            var fontSize = width * 30 / 100;
            playButton.css('font-size', fontSize + 'px');
            //playButton.css('left', 'calc(50% - ' + (fontSize / 2) + 'px');
            //playButton.css('top', ((height - fontSize) / 2) + 'px');
            //playButton.css('top', ((container.find('canvas').height() - fontSize) / 2) + 'px');
            playButton.css('left', (fontSize + 10) + 'px');
            playButton.css('top', (container.find('canvas').height() - fontSize - 10) + 'px');
        });
    });

    $('.toolbar-button-referesh').on('click', function (e) {
        _playSceneFullScreen();
    });
};

function initBottomTBEvents() {
    $('.bottom-toolbar-item').on('click', function (e) {
        $('.bottom-toolbar-item').removeClass('active');
        $(e.currentTarget).addClass('active');
        if ($(e.currentTarget).hasClass('fa-book')) {
            showKPSPanel(e);
        } else if ($(e.currentTarget).hasClass('fa-code')) {
            showCodePanel(e);
        } else if ($(e.currentTarget).hasClass('fa-language')) {
            showWordPanel(e);
        } else if ($(e.currentTarget).hasClass('fa-file-code-o')) {
            showCoreCodePanel(e);
        } else {
            activeCreativeMode();
        }
    });
};

function initSiderBarEvents() {
    $('.siderbar-expand-button').on('click', function () {
        siderBarExpand();
    });

    $(document).mouseup(function () {
        $(document).unbind("mousemove");
        var dragProxy = $(".siderbar-drag-proxy")
        if (dragProxy.css("display") != "none") {
            var left = dragProxy.offset().left;
            var tmpWidth = $("body").width() - left - dragProxy.width() - $(".siderbar-drag").width() - $('.siderbar-expand-button').width();
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
                $('.siderbar-content').append($('#game_container'));
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
};

function initDetailPanelsEvents() {
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

    
    $('#btn_Viewer_Block').on('click', function (e) {
        loadScriptText('blocks');
    });

    $('#btn_Viewer_Scene').on('click', function (e) {
        loadScriptText('scene');
    });

    $('#btn_Viewer_Core').on('click', function (e) {
        loadScriptText('');
    });

};

function initCompleteMsgEvents() {

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
        _registerRemoteServer();
        $.ajax({
            type: 'GET',
            async: true,
            url: _getRequestURL(_gURLMapping.bus.setfinishstep, { symbol: _currentStage }),
            data: '',
            success: function (response, status) {
                if ($(response).find('err').length > 0) {
                    _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Finish_CurrentStep');
                    return;
                }

                $.ajax({
                    type: 'POST',
                    async: true,
                    url: _getRequestURL(_gURLMapping.bus.setcurrentstep, { stage: _nextStep, symbol: _currentStage }),
                    data: '<root></root>',
                    success: function (response, status) {
                        if ($(response).find('err').length > 0) {
                            _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Set_CurrentStep');
                            return;
                        }

                        if (_currentStep == _totalSteps) {
                            $.ajax({
                                type: 'GET',
                                async: true,
                                url: _getRequestURL(_gURLMapping.bus.setfinishscene, { symbol: _currentStage }),
                                data: '',
                                success: function (response, status) {
                                },
                                dataType: 'xml',
                                xhrFields: {
                                    withCredentials: true
                                },
                                error: function () {
                                }
                            });
                        }

                        var tmpParam = '&scene=';
                        if (_currentStep == _totalSteps) {
                            tmpParam += _nextStage;
                        } else {
                            tmpParam += _currentStage;
                        }

                        window.location.href = "workplatform.html?rnd=" + Date.now() + tmpParam;
                    },
                    dataType: 'xml',
                    xhrFields: {
                        withCredentials: true
                    },
                    error: function () {
                    }
                });
            },
            dataType: 'xml',
            xhrFields: {
                withCredentials: true
            },
            error: function () {
            }
        });
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
};

function gotoSpecialStep(step) {
    var url = _getRequestURL(_gURLMapping.bus.setcurrentstep, { stage: step, symbol: _gStageData.course.id });
    var successFn = function (response) {
        if ($(response).find('err').length > 0) {
            _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Save_CurrentStepSymbol');
            return;
        }

        window.location.href = 'workplatform.html?scene=' + _gStageData.course.id + '&rnd=' + Date.now();
    }

    ajaxFn('POST', url, '<root></root>', successFn, emptyFn);
};

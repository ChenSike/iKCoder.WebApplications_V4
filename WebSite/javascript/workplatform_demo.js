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
var _topTooltip = []
var _messages = {
    success: '',
    faild: ''
};

function initPage() {
    var dataXML = Blockly.Xml.textToDom('<root>' +
        '   <basic>' +
        '		<usr id="" nickname=""/>' +
        '	</basic>' +
        '	<sence name="课件演示" symbol="b_01_001" id="" totalstage="1" currentstage="1" finishstage="0" next=""/>' +
        '	<tips>' +
        '		<item index="1">' +
        '			<content chinese="此课件仅为演示课件" english="" blocktype=""/>' +
        '		</item>' +
        '	</tips>' +
        '	<toolbox>' +
        '		<xml id="toolbox" style="display: none">' +
        '           <block type="event_setting"/>' +
        '           <block type="block_background"></block>' +
        '           <block type="block_obstacle"></block>' +
        '           <block type="block_prop"></block>' +
        '           <block type="block_player"></block>' +
        '			<block type="event_start"/>' +
        '		</xml>' +
        '	</toolbox>' +
        '	<workspacestatus>' +
        '		<xml id="toolbox" style="display: none">' +
        '         <block type="event_setting" id="temp_setting_block" x="63" y="63">' +
        '           <next>' +
        '               <block type="event_start" id="temp_event_start_block"></block>' +
        '           </next>' +
        '         </block>' +
        '       </xml>' +
        '	</workspacestatus>' +
        '	<game>' +
        //'		<script src="T-01-001_2D/run/1/Scene/game_engine.JS"/>' +
        //'		<script src="T-01-001_2D/run/1/Scene/scene.JS"/>' +
        '	</game>' +
        '	<message>' +
        '		<faild msg="非常抱歉，您的工作出现错误，请检查后继续运行."/>' +
        '		<suc msg="恭喜你，你已经完成了第 1 步了.距离成为一个工程师已经不远了."/>' +
        '	</message>' +
        '	<words>' +
        '		<stage value="1">' +
        '		</stage>' +
        '	</words>' +
        '</root>');
    var data = initData(dataXML);
    _wordsData = data.course.words;
    _knowledgeData = data.course.kps;
    _workspaceCfg = data.blockly;
    buildStageHTML(data.course);
    updateUserInfo(data.user);
    adjustWorkSpaceType(data);
    adjustAfterSiderBarResize();
    //$("#txt_Code_Content").setTextareaCount({ color: "rgb(176,188,177)", });
    LoadSceneLib(data.blockly);
    $('#mask_Page_Loading').hide();
    $('#mask_Page_Loading').css('visibility', 'hidden');
    window.setTimeout('adjustAfterSiderBarResize();', 2000);

    initEvents();
    var playBtn = $('.workspace-tool-item.workspace-play-button.fa.fa-play');
    var shareBtn = $('.workspace-tool-item.workspace-share-button.fa.fa-share-alt');
    var fullScreenBtn = $('.workspace-tool-item.workspace-fullscreen-button.fa.fa-arrows-alt');
    var refereshBtn = $('.workspace-tool-item.workspace-referesh-button.fa.fa-repeat');
    bindEventsToScene(playBtn, shareBtn, fullScreenBtn, refereshBtn);
    $('.siderbar-wrap').width($('body').width() / 3);
    adjustAfterSiderBarResize();
};

function initEvents() {
    $('#btn_Footer_Logo').on('click', function (e) {
        window.location.href = "index.html?rnd=" + Date.now();
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

    $('#panel_CodeMode').on('hidden.bs.modal', function () {
        $('.footer-tool-item').removeClass('selected');
        $('#btn_Footer_CreateMode').addClass('selected');
    })

    $('#panel_CodeMode').on('shown.bs.modal', function () {
        adjustModelPanelSize('#panel_CodeMode', '#iframe_CodeEditor');
    })

    $('#panel_ViewMode').on('hidden.bs.modal', function () {
        $('.footer-tool-item').removeClass('selected');
        $('#btn_Footer_CreateMode').addClass('selected');

    })

    $('#panel_ViewMode').on('shown.bs.modal', function () {
        adjustModelPanelSize('#panel_ViewMode', '#iframe_CodeViewer');
    })

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

    $('.run-scene-fullscreen-play-button').on('click', _playSceneFullScreen);

    $('#panel_WordMode').draggable({ containment: "body", scroll: false }).resizable();

    $('#panel_KnowledgeMode').draggable({ containment: "body", scroll: false }).resizable();

    $('.step-evaluate-button').on('click', function (e) {

    });

    $('#btn_Step_Restart').on('click', function (e) {
        if (_currentStep == _totalSteps) {
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

    $('#btn_Viewer_Block').on('click', function (e) {
        loadScriptText('blocks');
    });

    $('#btn_Viewer_Scene').on('click', function (e) {
        loadScriptText('scene');
    });

    $('#btn_Viewer_Core').on('click', function (e) {
        loadScriptText('');
    });

    $(window).resize(function () {
        onWindowResize();
    });

    $(window).on('beforeunload', function () {
    });
};

function loadScriptText(symbol) {
    _globalLibs = [
        "javascript/scene/T-01-001_2D/run/1/blocks/blocks.js",
        "javascript/scene/T-01-001_2D/run/1/Scene/game_engine.js",
        "javascript/scene/T-01-001_2D/run/1/Scene/scene.js"
    ];

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
            //name: userItem.attr('nickname'),
            //img: _getRequestURL(userItem.attr('header'), {})
            name: '演示用户',
            img: 'image/logotop.png'
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
            toolbox: $(response).find("toolbox").html(),
            workspace: $(response).find("workspacestatus").html(),
            lib: []
        }
    }

    //var addLibPath = function (node) {
    //    var tmpAttr = node.attr('src');
    //    if (tmpAttr && tmpAttr != '') {
    //        data.blockly.lib.push('javascript/scene/' + tmpAttr);
    //    }
    //}
    _globalLibs = [];
    var addLibPath = function (node) {
        var tmpAttr = node.attr('src');
        if (tmpAttr && tmpAttr != '') {
            data.blockly.lib.push('javascript/scene/' + tmpAttr);
            _globalLibs.push('javascript/scene/' + tmpAttr);
        }
    }

    if (_currentStage.toLowerCase().indexOf('a_01_00') >= 0) {
        if (_currentStage.toLowerCase().indexOf('3') >= 0) {
            data.blockly.lib.push('javascript/scene/a-01-003/intrcourse/1/Blocks/blocks.js');
            data.blockly.toolbox = XMLToString(LoadXMLFile('javascript/scene/a-01-003/intrcourse/1/toolbox.xml'));
        }

        var tmpSymbol = _currentStage.replace('_', "-").replace('_', "-");
        data.blockly.lib.push('javascript/scene/' + tmpSymbol + '/intrcourse/1/konvas.js');
        data.blockly.lib.push('javascript/scene/' + tmpSymbol + '/intrcourse/1/components.js');
        data.blockly.lib.push('javascript/scene/' + tmpSymbol + '/intrcourse/1/level1.js');
    } else {
        var tmpPaths = $(response).find("game").find('script');
        var include3D = false;
        for (var i = 0; i < tmpPaths.length ; i++) {
            if ($(tmpPaths[i]).attr('src').toLowerCase().indexOf('_3d') >= 0) {
                include3D = true;
                break;
            }
        }

        if (include3D) {
            data.blockly.lib.push('javascript/common/three.min.js');
            data.blockly.lib.push('javascript/common/TweenMax.min.js');
            data.blockly.lib.push('javascript/common/threeengine.js');
        } else {
            //data.blockly.lib.push('javascript/common/pixi.js');
        }

        addLibPath($($(response).find("toolbox")[0]));
        for (var i = 0; i < tmpPaths.length ; i++) {
            addLibPath($(tmpPaths[i]));
        }
    }

    _messages.success = $($(response).find("message").find('suc')[0]).attr('msg');
    _messages.faild = $($(response).find("message").find('faild')[0]).attr('msg');
    return data;
};

function updateUserInfo(data) {
    //$('.header-user-image').attr('src', _getRequestURL(_gURLMapping.account.getheader, {}));
    //$('.header-user-name-text').text(data.name);
    $('.header-user-image').attr('src', data.img);
    $('.header-user-name-text').text(data.name);
};

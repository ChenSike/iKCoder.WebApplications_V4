'use strict';

var _gUserInfoObj = { header: '', nickName: '' };
var _gLessonData = null;
var _gOpenTypeMap = {
    S: {
        icon: 'fas fa-chalkboard-teacher',
    },
    C: {
        icon: 'far fa-question-circle',
    },
    G: {
        icon: 'fas fa-walking',
    },
    O: {
        icon: 'fas fa-user-edit',
    }
};

var _gContentAttrMap = {
    d: {
        icon: 'fas fa-exclamation',
    },
    q: {
        icon: 'fas fa-question',
    }
};

function initPage() {
    var successFn = function (response) {
        if (_getExcuted(response)) {
            loadCourseData();
            $('#mask_Page_Loading').hide();
            $('#mask_Page_Loading').css('visibility', 'hidden');
            updateUserInfo();
            adjustMainSize();
            buildKeyPoint();
            initEditor();
            initEvents();
        } else {

        }
    };

    ajaxFn('GET', _getRequestURL(_gURLMapping.account.signstatus, {}), '', successFn);
};

function showLoadingMask() {
    $('#mask_Page_Loading').show();
    $('#mask_Page_Loading').css('visibility', 'visible');
};

function hideLoadingMask() {
    $('#mask_Page_Loading').hide();
    $('#mask_Page_Loading').css('visibility', 'hidden');
};

function updateUserInfo() {
    $('.header-user-image').attr('src', _CookieUtils.get("logined_user_header"));
    $('.header-user-info-name').text(_CookieUtils.get("logined_user_nickname"));
    $('.header-course-name').text(decodeURIComponent(getQueryString("title")));
};

function adjustMainSize() {
    var headerHeight = $('.header-wrap-row').height();
    var footerHeight = $('.footer-wrap-row').height();
    var toolbarHeight = $('.toolbar-wrap-row').height();
    var tmpHeight = $('.wrap-container').height() - (headerHeight + footerHeight + toolbarHeight) + 1;
    $('.main-container-col').height(tmpHeight);
    $('.keypoint-container-col').height(tmpHeight);
    $('.siderbar-wrap').height(tmpHeight);
    $('.siderbar-wrap').css('top', $('.main-container-col').offset().top + 'px');
};

function loadCourseData() {
    var itemsDoc = $(LoadXMLFile('javascript/scene/datadoc/' + getQueryString("scene") + getQueryString("step") + '.xml'));
    var basicNode = $(itemsDoc.find('basic')[0]);
    var contentNode = $(itemsDoc.find('content')[0]);
    var stepNodes = contentNode.find('step');
    _gLessonData = {
        basic: {
            lesson_code: basicNode.attr('lesson_code'),
            language: typeof basicNode.attr('language') == 'undefined' ? 'javascript' : basicNode.attr('language')
        },
        steps: []
    };
    var tmpStepNode, tmpStep, tmpItemNodes, tmpItemNode, tmpItem, tmpContentNodes, tmpContentNode, tmpContent, tmpOptNodes, tmpOptNode, tmpOpt;
    for (var i = 0; i < stepNodes.length; i++) {
        tmpStepNode = $(stepNodes[i]);
        tmpStep = { title: '', items: [] };
        tmpStep.title = tmpStepNode.attr('title');
        tmpItemNodes = tmpStepNode.children('item');
        for (var j = 0; j < tmpItemNodes.length; j++) {
            tmpItemNode = $(tmpItemNodes[j]);
            tmpItem = {
                title: tmpItemNode.attr('title'),
                opentype: tmpItemNode.attr('opentype').toUpperCase(),
                contents: []
            }

            tmpContentNodes = tmpItemNode.find('conetnt');
            for (var k = 0; k < tmpContentNodes.length; k++) {
                tmpContentNode = $(tmpContentNodes[k]);
                tmpContent = {
                    type: tmpContentNode.attr('type'),
                    attr: tmpContentNode.attr('attr'),
                    isclick: typeof tmpContentNode.attr('isclick') != 'undefined' ? tmpContentNode.attr('attr') == 'true' ? true : false : false,
                    txt: $(tmpContentNode.find('txt')).text().replace(/{%/g, '<').replace(/%}/g, '>').replace(/{\$/g, '</').replace(/\$}/g, '>'),
                    img: $(tmpContentNode.find('img')).text(),
                    ques: $(tmpContentNode.find('ques')).text(),
                    ans: $(tmpContentNode.find('ans')).text(),
                    options: []
                }

                if (tmpContentNode.find('options').length > 0) {
                    tmpOptNodes = $(tmpContentNode.find('options')[0]).find('item');
                    for (var m = 0; m < tmpOptNodes.length; m++) {
                        tmpOptNode = $(tmpOptNodes[m]);
                        tmpContent.options.push({
                            value: tmpOptNode.attr('value'),
                            text: tmpOptNode.attr('text')
                        });
                    }
                }

                tmpItem.contents.push(tmpContent);
            }

            tmpStep.items.push(tmpItem);
        }

        _gLessonData.steps.push(tmpStep);
    }
};

function buildKeyPoint() {
    var steps = _gLessonData.steps;
    var htmlStrArr = [];
    htmlStrArr.push('<div id="accordion_keypoint">');
    for (var i = 0; i < steps.length; i++) {
        htmlStrArr.push('    <div class="card' + (i == 0 ? ' current' : '') + '" id="card_keypoint_' + i + '">');
        htmlStrArr.push('        <div class="card-header" id="heading_keypoint_' + i + '">');
        htmlStrArr.push('            <div class="mb-0">');
        htmlStrArr.push('                <div class="item-mark"></div>');
        htmlStrArr.push('                <button class="btn btn-link btn-sm' + (i == 0 ? '' : ' collapsed') + '" data-toggle="collapse" data-target="#collapse_keypoint_' + i + '" aria-expanded="' + (i == 0 ? ' true' : 'false') + '" aria-controls="collapse_keypoint_' + i + '"' + (i == 0 ? '' : ' disabled ') + '>');
        htmlStrArr.push(steps[i].title);
        htmlStrArr.push('                </button>');
        htmlStrArr.push('            </div>');
        htmlStrArr.push('        </div>');
        htmlStrArr.push('        <div id="collapse_keypoint_' + i + '" class="collapse' + (i == 0 ? ' show' : '') + '" aria-labelledby="heading_keypoint_' + i + '" data-parent="#accordion_keypoint">');
        htmlStrArr.push('            <div class="card-body text-right">');
        htmlStrArr.push('                <ul class="list-group text-left text-13">');
        for (var j = 0; j < steps[i].items.length; j++) {
            htmlStrArr.push('                    <li class="list-group-item keypoint-step-item" data-step="' + i + '" data-item="' + j + '">');
            htmlStrArr.push('                       <i class="' + _gOpenTypeMap[steps[i].items[j].opentype].icon + '"></i>');
            htmlStrArr.push(steps[i].items[j].title);
            htmlStrArr.push('                    </li>');
        }

        htmlStrArr.push('                </ul>');
        htmlStrArr.push('                <button type="button" class="btn btn-success btn-sm" data-target="' + i + '">完成</button>');
        htmlStrArr.push('            </div>');
        htmlStrArr.push('        </div>');
        htmlStrArr.push('    </div>');
    }

    htmlStrArr.push('</div>');
    $('.keypoint-container-col').append($(htmlStrArr.join('')));
    $('#accordion_keypoint .card-body button').on('click', function () {
        var tmpIdx = $(arguments[0].currentTarget).attr('data-target');
        var tmpCard = $('#card_keypoint_' + tmpIdx);
        var tmpCollapse = $('#collapse_keypoint_' + tmpIdx);
        tmpCard.removeClass('current');
        tmpCard.addClass('complete');
        tmpCollapse.on('hidden.bs.collapse', function () {
            var nextCard = tmpCard.next();
            $(nextCard.find('.card-header button')).removeAttr('disabled');
            if (nextCard.length > 0) {
                nextCard.addClass('current');
                $('#collapse_keypoint_' + (parseInt(tmpIdx) + 1)).collapse('show');
            } else {
                alert('全部完成');
            }

            tmpCollapse.unbind();
        });

        tmpCollapse.collapse('hide');
    });
    $('.keypoint-step-item').on('click', function () {
        var target = $(arguments[0].currentTarget);
        buildStepItemShow(target.attr('data-step'), target.attr('data-item'));
    });
};

function buildStepItemShow(stepIdx, itemIdx) {
    /*
type: tmpContentNode.attr('type'),
attr: tmpContentNode.attr('attr'),
isclick: typeof tmpContentNode.attr('isclick') != 'undefined' ? tmpContentNode.attr('attr') == 'true' ? true : false : false,
txt: $(tmpContentNode.find('txt')).text().replace(/{%/g, '<').replace(/%}/g, '>').replace(/{$/g, '</').replace(/%$/g, '>'),
img: $(tmpContentNode.find('img')).text(),
ques: $(tmpContentNode.find('ques')).text(),
ans: $(tmpContentNode.find('ans')).text(),
options: []
    */
    var step = _gLessonData.steps[stepIdx];
    var item = step.items[itemIdx];
    $('.lesson-step-item-content-board').remove();
    if (item.opentype == 'G' || item.opentype == 'O') {
        return;
    }

    var contents = item.contents;
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="lesson-step-item-content-board">');
    tmpHTMLStr.push('   <div class="container-fluid">');
    for (var i = 0; i < contents.length; i++) {
        tmpHTMLStr.push('       <div class="row no-wrap">');
        tmpHTMLStr.push('           <div class="col no-wrap col-lesson-step-item-content">');
        if (contents[i].type == 'text') {
            if (contents[i].attr == 'q') {
                tmpHTMLStr.push(buildQuestionHTMLStr(contents[i], stepIdx, itemIdx, i));
            } else if (contents[i].attr == 'd') {
                tmpHTMLStr.push('<i class="' + _gContentAttrMap[contents[i].attr].icon + ' lesson-step-item-content-symbol"></i>');
                tmpHTMLStr.push(contents[i].txt);
            }
        } else if (contents[i].type == 'img') {
            //tmpHTMLStr.push('<img class="img-fluid lesson-step-item-content-img" src="' + contents[i].img + '"></img>');
            tmpHTMLStr.push('<img class="img-fluid lesson-step-item-content-img" src="image/gaosiback.jpg"></img>');
        }

        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('       </div>');
    }

    tmpHTMLStr.push('   </div>');
    tmpHTMLStr.push('</div>');
    var board = $(tmpHTMLStr.join(''))
    $('body').append(board);
    $('.lesson-step-item-content-submit').on('click', function () {

    });
    adjustPosition(board);
};

function buildFlipHTMLStr(img) {
    var tmpArr = [];
    tmpArr.push('<div class="flip-wrap">');
    tmpArr.push('   <div class="flip-container">');
    tmpArr.push('       <div class="flip-front">');
    tmpArr.push('           <img src="' + img + '" alt="">');
    tmpArr.push('       </div>');
    tmpArr.push('       <div class="flip-back">');
    tmpArr.push('           <img src="' + img + '" alt="">');
    tmpArr.push('       </div>');
    tmpArr.push('   </div>');
    tmpArr.push('</div>');
    return tmpArr.join('');
}

function buildQuestionHTMLStr(content, stepIdx, itemIdx, contentIdx) {
    var tmpArr = [];
    var specialId = 'Lesson_Step_' + stepIdx + '_Item_' + itemIdx + '_Content_' + contentIdx;
    var dataTarget = stepIdx + '|' + itemIdx + '|' + contentIdx;
    tmpArr.push('<div id="acc_' + specialId + '" class="lesson-step-item-content-qus-acc">');
    tmpArr.push('   <div class="card">');
    tmpArr.push('       <div class="card-header" id="heading_' + specialId + '">');
    tmpArr.push('           <h5 class="mb-0">');
    tmpArr.push('               <div class="flip-wrap">');
    tmpArr.push('                   <div class="flip-container">');
    tmpArr.push('                       <div class="flip-front">');
    tmpArr.push('                           <img src="image/question-circle-regular.svg" alt="">');
    tmpArr.push('                       </div>');
    tmpArr.push('                       <div class="flip-back">');
    tmpArr.push('                           <img src="image/question-circle-regular.svg" alt="">');
    tmpArr.push('                       </div>');
    tmpArr.push('                   </div>');
    tmpArr.push('               </div>');
    tmpArr.push('               <button class="btn btn-link" data-toggle="collapse" data-target="#collapse_' + specialId + '" aria-expanded="true" aria-controls="collapse_' + specialId + '">');
    tmpArr.push(content.ques);
    tmpArr.push('               </button>');
    tmpArr.push('           </h5>');
    tmpArr.push('       </div>');
    tmpArr.push('       <div id="collapse_' + specialId + '" class="collapse" aria-labelledby="heading_' + specialId + '" data-parent="#acc_' + specialId + '">');
    tmpArr.push('           <div class="card-body">');
    if (content.options.length == 0) {
        tmpArr.push('<form>');
        tmpArr.push('   <div class="row">');
        tmpArr.push('       <div class="col-8">');
        tmpArr.push('           <input type="text" class="form-control form-control-sm" id="txt_' + specialId + '" value="" placeholder="请输入你的回答...">');
        tmpArr.push('       </div>');
        tmpArr.push('       <div class="col-2">');
        tmpArr.push('           <button type="button" class="btn btn-sm btn-primary mb-2 lesson-step-item-content-submit" style="margin-left:10px;" data-target="' + dataTarget + '">提交</button>');
        tmpArr.push('       </div>');
        tmpArr.push('   </div>');
        tmpArr.push('</form>');
    } else {

    }
    tmpArr.push('           </div>');
    tmpArr.push('       </div>  ');
    tmpArr.push('   </div>');
    tmpArr.push('</div>');
    return tmpArr.join('');
}

function adjustPosition(board) {
    var posEl = $('.main-container-col')
    var offset = posEl.offset();
    var width = posEl.width();
    var height = posEl.height();
    board.css('top', offset.top + 'px');
    board.css('left', offset.left + 'px');
    board.width(width - 21);
    board.height(height - 21);
};

function initEditor() {
    var editor = ace.edit("content_Editor");
    editor.setTheme("ace/theme/monokai");
    //var tmpLanguage = getQueryString('language');
    //editor.getSession().setMode('ace/mode/' + (tmpLanguage == '' ? 'javascript' : tmpLanguage));
    editor.getSession().setMode('ace/mode/' + _gLessonData.basic.language);
};

function initEvents(isCodeModal) {
    initHeaderEvents();
    initToolbarEvents();
    initSiderBarEvents();
    $(window).resize(function () {
        adjustMainSize();
    });
};

function initHeaderEvents() {
    $('.sign-out-button').on('click', function () {
        saveStatus();
        _signOut();
        window.location.href = 'http://www.ikcoder.com/index.html';
    });
};

function initToolbarEvents() {
    $('.toolbar-buttons-item .toolbar-button-save').on('click', function (e) {
        alert("'Save' will coming soon!");
    });

    $('.toolbar-buttons-item .toolbar-button-load').on('click', function (e) {
        alert("'Load' will coming soon!");
    });

    $('.toolbar-buttons-item .toolbar-button-run').on('click', function (e) {
        alert("'Run' will coming soon!");
    });

    $('.toolbar-buttons-item .toolbar-button-clear').on('click', function (e) {
        alert("'Clear' will coming soon!");
    });
};

function initSiderBarEvents() {
    $('.sidebar-content-wrap .btn-expand').on('click', function () {
        siderBarExpand();
    });

    $(document).mouseup(function () {
        $(document).unbind("mousemove");
        var dragProxy = $(".siderbar-drag-proxy");
        var bodyWidth = $("body").width();
        var minWidth = 100;
        if (dragProxy.css("display") != "none") {
            var left = dragProxy.offset().left;
            var tmpWidth = bodyWidth - left - dragProxy.width() - $(".siderbar-drag").width();
            tmpWidth = (tmpWidth < minWidth ? minWidth : tmpWidth);
            $(".siderbar-wrap").width(tmpWidth);
            $(".siderbar-wrap").css("left", $("body").width() - tmpWidth + "px");
            $(".siderbar-drag-proxy").css("display", "none");
            $(".siderbar-drag-proxy").css("visibility", "hidden");
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
};

function siderBarExpand() {
    var tmpObj = $(".siderbar-wrap");
    var tmpLeft = $('body').width();
    if (!tmpObj.hasClass('expanded')) {
        tmpLeft -= tmpObj.width();
        $('.sidebar-expand-bar').hide();
    }

    tmpObj.toggleClass('expanded');
    tmpObj.animate({ left: tmpLeft + 'px' }, 'slow', function () {
        if (!tmpObj.hasClass('expanded')) {
            $('.sidebar-expand-bar').show();
        }
    });

    $('.siderbar-drag').toggleClass('expanded');
};
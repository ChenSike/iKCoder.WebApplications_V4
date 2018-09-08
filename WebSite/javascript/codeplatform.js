'use strict';

var _gUserInfoObj = { header: '', nickName: '' };

function initPage() {
    var successFn = function (response) {
        var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
        if (!success) {
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

function buildKeyPoint() {
    var items = [
        { title: 'Key Point 1', items: ['items 1 of Key Point 1', 'items 2 of Key Point 1', 'items 3 of Key Point 1', 'items 4 of Key Point 1', 'items 5 of Key Point 1'] },
        { title: 'Key Point 2', items: ['items 1 of Key Point 2', 'items 2 of Key Point 2', 'items 3 of Key Point 2', 'items 4 of Key Point 2', 'items 5 of Key Point 2'] },
        { title: 'Key Point 3', items: ['items 1 of Key Point 3', 'items 2 of Key Point 3', 'items 3 of Key Point 3', 'items 4 of Key Point 3', 'items 5 of Key Point 3'] },
        { title: 'Key Point 4', items: ['items 1 of Key Point 4', 'items 2 of Key Point 4', 'items 3 of Key Point 4', 'items 4 of Key Point 4', 'items 5 of Key Point 4'] },
        { title: 'Key Point 5', items: ['items 1 of Key Point 5', 'items 2 of Key Point 5', 'items 3 of Key Point 5', 'items 4 of Key Point 5', 'items 5 of Key Point 5'] }
    ];

    var htmlStrArr = [];
    htmlStrArr.push('<div id="accordion_keypoint">');
    for (var i = 0; i < items.length; i++) {
        htmlStrArr.push('    <div class="card' + (i == 0 ? ' current' : '') + '" id="card_keypoint_' + i + '">');
        htmlStrArr.push('        <div class="card-header" id="heading_keypoint_' + i + '">');
        htmlStrArr.push('            <div class="mb-0">');
        htmlStrArr.push('                <div class="item-mark"></div>');
        htmlStrArr.push('                <button class="btn btn-link btn-sm' + (i == 0 ? '' : ' collapsed') + '" data-toggle="collapse" data-target="#collapse_keypoint_' + i + '" aria-expanded="' + (i == 0 ? ' true' : 'false') + '" aria-controls="collapse_keypoint_' + i + '"' + (i == 0 ? '' : ' disabled ') + '>');
        htmlStrArr.push(items[i].title);
        htmlStrArr.push('                </button>');
        htmlStrArr.push('            </div>');
        htmlStrArr.push('        </div>');
        htmlStrArr.push('        <div id="collapse_keypoint_' + i + '" class="collapse' + (i == 0 ? ' show' : '') + '" aria-labelledby="heading_keypoint_' + i + '" data-parent="#accordion_keypoint">');
        htmlStrArr.push('            <div class="card-body text-right">');
        htmlStrArr.push('                <ul class="list-group text-left text-13">');
        for (var j = 0; j < items[i].items.length; j++) {
            htmlStrArr.push('                    <li class="list-group-item">' + items[i].items[j] + '</li>');
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
};

function initEditor() {
    var editor = ace.edit("content_Editor");
    editor.setTheme("ace/theme/monokai");
    var tmpLanguage = getQueryString('language');
    editor.getSession().setMode('ace/mode/' + (tmpLanguage == '' ? 'javascript' : tmpLanguage));
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
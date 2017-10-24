﻿'use strict';

var _ajaxObj = null;
var _distributionMap = {
    S: { name: '科学', color: 'rgb(36,90,186)' },
    T: { name: '技术', color: 'rgb(236,15,33)' },
    E: { name: '工程', color: 'rgb(165,165,165)' },
    M: { name: '数学', color: 'rgb(255,191,0)' },
    L: { name: '语言', color: 'rgb(71,143,208)' }
};

function initPage() {
    $('.navbar.navbar-expand-lg.navbar-light').css('background-color', 'rgb(246,246,246)');
    //$('#sideBar_Page_Left').height($('body').height() - $('.navbar.navbar-expand-lg.navbar-light').height() - 16 - $('footer').height());
    $('.container-fluid.main-content-wrap').height($('body').height() - $('nav').height() - $('footer').height());
    $('.row.justify-content-start.main-content-row').height($('.container-fluid.main-content-wrap').height());
    loadHeaderImg();
    loadSiderbarData();
    //getUnreadMsgCount();
    //getUncompleteCount();
    initEvents();
    $('#wrap_Category_Title').show();
    rebuildContent('overview');
    getUnreadMsgCount();
};

function loadSiderbarData() {
    $('#txt_NickName_Profile_Title').text('Alice');
    $('#txt_Title_Profile_Title').text('Level  1');
};

function getUnreadMsgCount() {
    var count = '3';
    $('.left-bar-message-count').text(count);
    $('.left-bar-message-count').css('background-color', 'rgb(236,64,122)');
    window.setTimeout(getUnreadMsgCount, 15000);
}

function initEvents() {
    $('.left-bar-category-item').on('click', function () {
        resetCategoryItemCSS($(arguments[0].currentTarget));
        rebuildContent($(arguments[0].currentTarget).attr('data-target'));
    })
};

function resetCategoryItemCSS(current) {
    $('.left-bar-category-item').css('background-color', 'rgb(38,50,56)');
    $($('.left-bar-category-item').find('div').find('i')).css('color', 'rgb(85,103,110)');
    current.css('background-color', 'rgb(46,60,66)');
    $(current.find('div').find('i')[0]).css('color', 'rgb(236,64,122)');
};

function showLoadingMask() {
    var mask = $('#mask_Page_Loading');
    mask.css('top', $('#wrap_Category_Title').offset().top);
    mask.css('left', $('#wrap_Category_Title').offset().left);
    mask.height($('body').height() - $('#wrap_Category_Title').offset().top);
    mask.width(Math.min($('body').width(), $('body')[0].scrollWidth) - $('#wrap_Category_Title').offset().left);
    mask.show();
    mask.css('diaplay', 'flex !important');
    mask.css('visibility', 'visible');
}

function hideLoadingMask() {
    var mask = $('#mask_Page_Loading');
    mask.width(0);
    mask.height(0);
    mask.hide();
    mask.css('visibility', 'hidden');
    mask.css('diaplay', 'none !important');
}

function rebuildContent(symbol) {
    if (symbol == 'teamsuit') {
        _showGlobalMessage('演示版本，此功能暂不开放！', 'warning', 'alert_ForgetPWD_Success');
        return;
    }

    if (symbol == 'workplatform' || symbol == 'appshop') {
        switch (symbol) {
            case 'workplatform':
                window.open("appstudio/index.html");
                break;
            case 'appshop':
                window.open("appshop.html");
                break;
        }

        return;
    }

    showLoadingMask();
    $('.row.justify-content-start.main-content-row')[0].scrollTop = 0;
    //var contentHeight = $('body').height() - $('nav').height() - 16 - $('footer').height();
    var contentHeight = $('#sideBar_Page_Left .container-fluid.left-sidebar-wrap').height();
    $('#wrap_Category_Title').empty();
    $('#wrap_Category_Title').show();
    var contertWrap = $('#wrap_Category_Content');
    contertWrap.empty();
    if (contertWrap.hasClass('col-9')) {
        contertWrap.removeClass = 'col-9';
    }

    if (contertWrap.hasClass('col')) {
        contertWrap.removeClass = 'col';
    }

    if (_ajaxObj) {
        _ajaxObj.abort();
    }

    var currentItem = null;
    $('#list_Overview_Course').hide();
    switch (symbol) {
        case 'overview':
            currentItem = $($('.left-bar-category-item')[0]);
            contertWrap.addClass('col');
            rebuildOverviewPanel(contentHeight);
            break;
        case 'homework':
            currentItem = $($('.left-bar-category-item')[1]);
            contertWrap.addClass('col');
            rebuildHomeworkPanel(contentHeight);
            break;
        case 'exam':
            currentItem = $($('.left-bar-category-item')[2]);
            contertWrap.addClass('col-9');
            rebuildExamPanel(contentHeight);
            break;
        case 'message':
            currentItem = $($('.left-bar-category-item')[3]);
            contertWrap.addClass('col');
            rebuildMesagesPanel(contentHeight);
            break;
        case 'report':
            currentItem = $($('.left-bar-category-item')[4]);
            contertWrap.addClass('col-9');
            rebuildReportPanel(contentHeight);
            break;
        case 'settings':
            currentItem = $($('.left-bar-category-item')[5]);
            contertWrap.addClass('col');
            rebuildSettingsPanel(contentHeight);
            break;
        default:
            break;
    }

    resetCategoryItemCSS(currentItem);
};

window.onresize = function () {
    $('.container-fluid.main-content-wrap').height($('body').height() - $('nav').height() - $('footer').height());
    $('.row.justify-content-start.main-content-row').height($('.container-fluid.main-content-wrap').height());
}

/*Overview panel*/
function rebuildOverviewPanel(contentHeight) {
    var tmpHeight = calcOverviewItemheight(contentHeight);
    var data = formatOverviewData("");
    rebuildOverviewTitles(data, contentHeight, tmpHeight);
    rebuildOverviewContents(data, contentHeight, tmpHeight);
    hideLoadingMask();
};

var _courseListOverview = null;
function formatOverviewData(response) {
    var data = {
        honor: [
            { id: 1, title: '算法专家', img: 'image/honor/a.png' },
            { id: 2, title: '语言大师', img: 'image/honor/b.png' },
            { id: 3, title: '空间大师', img: 'image/honor/c.png' },
            { id: 4, title: '数学大师', img: 'image/honor/a.png' }
        ],
        course: [
            { id: 'enlighten', title: '当前课程', course: '【B_01_002】路径跟随', img: 'image/course/course_1.png', color: 'rgb(86,181,34)', symbol: 'B_01_002' },
            { id: 'primary', title: '历史课程', course: '【B_01_001】模式识别', img: 'image/course/course_2.png', color: 'rgb(100,124,185)', symbol: 'B_01_001' }
        ],
        experience: {
            distribution: [
                { id: "science", name: "科学", value: 250, color: "rgb(36,90,186)" },
                { id: "skill", name: "技术", value: 400, color: "rgb(236,15,33)" },
                { id: "engineering", name: "工程", value: 550, color: "rgb(165,165,165)" },
                { id: "math", name: "数学", value: 700, color: "rgb(255,191,0)" },
                { id: "language", name: "语言", value: 700, color: "rgb(71,143,208)" }
            ],
            level: {
                primary: { name: "初级课程", id: "Primary", value: 2.5 },
                middle: { name: "中级课程", id: "Middle", value: 0 },
                advance: { name: "高级课程", id: "Advance", value: 0 },
                plus: { name: "拓展课程", id: "plus", value: 0 }
            }
        },
        codetimes: {
            total: 21,
            over: 62,
            times: [
                { date: "2017-10-1", time: 1 },
                { date: "2017-10-2", time: 2 },
                { date: "2017-10-3", time: 1 },
                { date: "2017-10-4", time: 3 },
                { date: "2017-10-5", time: 2 },
                { date: "2017-10-6", time: 2 },
                { date: "2017-10-7", time: 1 },
                { date: "2017-10-8", time: 2 },
                { date: "2017-10-9", time: 1 }
            ]
        }
    }

    return data;
}

function calcOverviewItemheight(contentHeight) {
    var minHeight = Math.floor(150 / 1200 * contentHeight);
    var bigHeight = Math.floor(350 / 1200 * contentHeight);
    var tmpHeightArr = [];
    if (minHeight < 115) {
        minHeight = 115;
    }

    bigHeight = Math.floor((contentHeight - minHeight) / 3);
    //return { s: minHeight, l: bigHeight, e: contentHeight - minHeight - bigHeight * 3 + bigHeight };
    return { s: 150, l: 350, e: 350 };
};

function buildOverviewHonor(datas, height) {
    var itemCount = datas.length;
    var padding = Math.floor(20 / 150 * height);
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid" id="Content_Overview_Honor" style="background-color:rgb(255,255,255); border-bottom:solid 1px rgb(236,239,241);">');
    tmpHTMLArr.push('    <div class="row align-items-center" id="" style="height:' + (height - 1) + 'px;">');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('           <div class="overview-list-arrow honor" id="arrow_Overview_Honor_Left">');
    tmpHTMLArr.push('               <i class="fa fa-chevron-left"></i>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-10 align-items-center" id="wrap_Overview_Honor_Items" style="height:100%; overflow: hidden;">');
    tmpHTMLArr.push('            <div id="container_Overview_Honor_Items" style="height:100%;">');
    for (var i = 0; i < itemCount; i++) {
        tmpHTMLArr.push('                <div class="text-center profile-overview-honor-item" style="' + (i == itemCount - 1 ? '' : 'padding-right:10px;') + '">');
        tmpHTMLArr.push('                    <div style="height:100%; padding:' + padding + 'px 0px; min-width:140px;">');
        tmpHTMLArr.push('                        <img src="' + datas[i].img + '" style="height: calc(100% - 30px);" />');
        tmpHTMLArr.push('                        <p class="overview-honor-item-text active-item">' + datas[i].title + '</p>');
        tmpHTMLArr.push('                    </div>');
        tmpHTMLArr.push('                </div>');
    }

    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('           <div class="overview-list-arrow honor" id="arrow_Overview_Honor_Right">');
    tmpHTMLArr.push('               <i class="fa fa-chevron-right"></i>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');

    $('#wrap_Category_Content').prepend($(tmpHTMLArr.join('')));
    //var itemWidth = height - Math.floor(20 / 150 * height * 2) - 30 + 13;
    var itemWidth = 140 + padding;
    $('#container_Overview_Honor_Items').width(itemWidth * itemCount);
    var funData = { id: "container_Overview_Honor_Items", step: itemWidth };
    $('#arrow_Overview_Honor_Left').on('click', funData, listMovePrev);
    $('#arrow_Overview_Honor_Right').on('click', funData, listMoveNext);
    if ($('#wrap_Overview_Honor_Items').width() > $('#container_Overview_Honor_Items').width()) {
        $('.overview-list-arrow.honor').hide();
    }
};

function buildOverviewCourse(datas, containerHeight) {
    var orgPaddingTop = 35;
    var orgContainerHeight = 350;
    var orgHeight = 290;
    var orgWidth = 215;
    var orgImgHeight = 190;
    var orgSpace = 90;
    var orgProgWidth = 130;
    var orgProgHeight = 10;
    var orgProgTextWidth = 100;
    var orgTitleWidth = 90;

    var padding = Math.floor(orgPaddingTop / orgContainerHeight * containerHeight);
    var scale = padding / orgPaddingTop;
    var itemCount = datas.length;
    var height = Math.floor(scale * orgHeight);
    var width = Math.floor(scale * orgWidth);
    var imgHeight = Math.floor(scale * orgImgHeight);
    var progWidth = Math.floor(scale * orgProgWidth);
    var progHeight = Math.floor(scale * orgProgHeight);
    var progTextWidth = Math.floor(scale * orgProgTextWidth);
    var progTextSize = 10;
    for (var i = progTextSize; i < 50; i++) {
        if (testTextWidth('已学习99/99课时', i + 'px', 'normal', '微软雅黑') >= progTextWidth - 5) {
            progTextSize = i;
            break;
        }
    }

    var titleWidth = Math.floor(scale * orgTitleWidth);
    var titleSize = 10;
    for (var i = titleSize; i < 50; i++) {
        if (testTextWidth('启蒙课程', i + 'px', 'normal', '微软雅黑') >= titleWidth - 5) {
            titleSize = i;
            break;
        }
    }

    var symbolWidth = (width - progWidth) / 2 - progHeight;
    var symbolSize = 10;
    for (var i = symbolSize; i < 50; i++) {
        if (testTextWidth('A', i + 'px', 'normal', '微软雅黑') >= symbolWidth - 3) {
            symbolSize = i;
            break;
        }
    }

    var space = Math.floor(scale * orgSpace);
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid" id="Content_Overview_Course" style="background-color:rgb(255,255,255); border-bottom:solid 1px rgb(236,239,241);">');
    tmpHTMLArr.push('    <div class="row align-items-center" style="height:' + (containerHeight - 1) + 'px;">');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('           <div class="overview-list-arrow course" id="arrow_Overview_Course_Left">');
    tmpHTMLArr.push('               <i class="fa fa-chevron-left"></i>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-10" id="wrap_Overview_Course_Items" style="height:100%; overflow: hidden;">');
    tmpHTMLArr.push('            <div id="container_Overview_Course_Items" style="height:100%;">');
    for (var i = 0; i < itemCount; i++) {
        tmpHTMLArr.push('<div class="text-center" style="display: inline-block; height:100%; padding-right:' + (i == itemCount - 1 ? 0 : space) + 'px;">');
        tmpHTMLArr.push('    <div class="d-flex align-items-center" style="height:100%;">');
        tmpHTMLArr.push('        <div class="container-fluid overview-course-item-wrap" style="width:' + (width - 2) + 'px; height:' + height + 'px; cursor:pointer;" data-target="' + datas[i].symbol + '">');
        tmpHTMLArr.push('            <div class="row" style="margin:0px;">');
        tmpHTMLArr.push('                <div class="col-12" style="padding:0px;">');
        tmpHTMLArr.push('                    <img class="img-fluid" src="' + datas[i].img + '" style="height:' + imgHeight + 'px;" />');
        tmpHTMLArr.push('                </div>');
        tmpHTMLArr.push('            </div>');
        tmpHTMLArr.push('            <div class="row" style="margin:0px;">');
        tmpHTMLArr.push('                <div class="col no-padding">');
        tmpHTMLArr.push('                   <div class="container-fluid no-padding">');
        tmpHTMLArr.push('                       <div class="row no-margin">');
        tmpHTMLArr.push('                           <div class="col-12 no-padding">');
        tmpHTMLArr.push('                               <p class="text-center profile-overview-course-item-title" style="color:' + datas[i].color + '; font-size:' + titleSize + 'px;padding:' + progHeight + 'px 0px;" title="' + datas[i].title + '">' + datas[i].title + '</p>');
        tmpHTMLArr.push('                           </div>');
        tmpHTMLArr.push('                       </div>');
        tmpHTMLArr.push('                       <div class="row no-margin">');
        tmpHTMLArr.push('                           <div class="col-12 no-padding">');
        tmpHTMLArr.push('                               <p class="text-center profile-overview-course-item-title" style="color:' + datas[i].color + '; font-size:14px;padding: 0px;" title="' + datas[i].course + '">' + datas[i].course + '</p>');
        tmpHTMLArr.push('                           </div>');
        tmpHTMLArr.push('                       </div>');
        tmpHTMLArr.push('                   </div>');
        tmpHTMLArr.push('                </div>');
        tmpHTMLArr.push('            </div>');
        tmpHTMLArr.push('        </div>');
        tmpHTMLArr.push('    </div>');
        tmpHTMLArr.push('</div>');
    }

    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('           <div class="overview-list-arrow course" id="arrow_Overview_Course_Right">');
    tmpHTMLArr.push('               <i class="fa fa-chevron-right"></i>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');

    $('#Content_Overview_Honor').after($(tmpHTMLArr.join('')));
    var itemWidth = width + space + 3;
    $('#container_Overview_Course_Items').width(itemWidth * itemCount - space);
    var funData = { id: "container_Overview_Course_Items", step: itemWidth };
    $('#arrow_Overview_Course_Left').on('click', funData, listMovePrev);
    $('#arrow_Overview_Course_Right').on('click', funData, listMoveNext);
    if ($('#wrap_Overview_Course_Items').width() > $('#container_Overview_Course_Items').width()) {
        $('.overview-list-arrow.course').hide();
    }

    $('.overview-course-item-wrap').on('click', function (eventObj) {
        var target = $(eventObj.currentTarget);
        var tipWrap = $('#list_Overview_Course');
        if (target.attr('data-target') != '') {
            window.location.href = "workplatform.html?scene=" + target.attr('data-target');
        }
    });
};

function buildOverviewExperience(data, height) {
    var idArr = ['Distribution']
    for (var key in data.level) {
        idArr.push(data.level[key].id);
    }

    var itemCount = idArr.length;
    var padding = Math.floor(40 / 350 * height);
    var width = Math.floor(padding / 40 * 225);
    var spaceWidth = Math.floor(padding / 40 * 40);
    var disWidth = Math.max(width, data.distribution.length * 35);
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid" id="Content_Overview_Experience" style="background-color:rgb(255,255,255); border-bottom:solid 1px rgb(236,239,241);">');
    tmpHTMLArr.push('    <div class="row align-items-center" id="" style="height:' + (height - 1) + 'px;">');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('            <div class="overview-list-arrow experience" id="arrow_Overview_Experience_Left">');
    tmpHTMLArr.push('                <i class="fa fa-chevron-left"></i>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-10 align-items-center" id="wrap_Overview_Experience_Items" style="height:100%; overflow: hidden;">');
    tmpHTMLArr.push('            <div id="container_Overview_Experience_Items" style="height:100%;">');
    for (var i = 0; i < itemCount; i++) {
        tmpHTMLArr.push('<div class="text-center" style="display: inline-block; height:100%; padding-right:' + (i == itemCount - 1 ? 0 : spaceWidth) + 'px;">');
        tmpHTMLArr.push('   <div id="size_parent_canvas_' + idArr[i] + '" style="height:100%; padding:' + padding + 'px 0px;">');
        var tmpWidth = (idArr[i] == 'Distribution' ? disWidth : width);
        tmpHTMLArr.push('       <div class="container-fluid overview-experience-item-wrap" style="padding:0px; width:' + (tmpWidth - 2) + 'px;">');
        tmpHTMLArr.push('           <div class="row" style="margin:0px;">');
        tmpHTMLArr.push('               <div class="col-12" style="padding:0px; ">');
        tmpHTMLArr.push('                   <canvas id="canvas_Overview_Experience_' + idArr[i] + '"></canvavs>');
        tmpHTMLArr.push('               </div>');
        tmpHTMLArr.push('           </div>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('    </div>');
        tmpHTMLArr.push('</div>');
    }

    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('       <div class="col-1 text-center">');
    tmpHTMLArr.push('            <div class="overview-list-arrow experience" id="arrow_Overview_Experience_Right">');
    tmpHTMLArr.push('                <i class="fa fa-chevron-right"></i>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');

    $('#Content_Overview_Course').after($(tmpHTMLArr.join('')));
    var itemWidth = width + spaceWidth + 1;
    $('#container_Overview_Experience_Items').width(disWidth + itemWidth * (itemCount - 1));
    var funData = { id: "container_Overview_Experience_Items", step: itemWidth };
    $('#arrow_Overview_Experience_Left').on('click', funData, listMovePrev);
    $('#arrow_Overview_Experience_Right').on('click', funData, listMoveNext);
    if ($('#wrap_Overview_Experience_Items').width() > $('#container_Overview_Experience_Items').width()) {
        $('.overview-list-arrow.experience').hide();
    }
};

function buildOverviewTimes(data, height) {
    var padding = Math.floor(20 / 350 * height);
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid" id="Content_Overview_Times" style="background-color:rgb(255,255,255); border-bottom:solid 1px rgb(236,239,241);">');
    tmpHTMLArr.push('    <div class="row align-items-center" id="" style="height:' + (height - 1) + 'px;">');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('            <div class="overview-list-arrow times" id="arrow_Overview_Times_Left">');
    tmpHTMLArr.push('                <i class="fa fa-chevron-left"></i>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-10 align-items-center" id="wrap_Overview_Times_Items" style="height:100%; overflow: hidden;">');
    tmpHTMLArr.push('            <div id="container_Overview_Times_Items" style="height:100%; padding:' + padding + 'px 0px;">');
    tmpHTMLArr.push('               <canvas id="canvas_Overview_Time"></canvavs>');
    tmpHTMLArr.push('           </div>');
    //tmpHTMLArr.push('            <div id="container_Overview_Times_Items" style="height:100%;">');
    //tmpHTMLArr.push('               <div style="display: inline-block; height:100%; width: 100%;">');
    //tmpHTMLArr.push('                  <div style="height:100%; padding:' + padding + 'px 0px;">');
    //tmpHTMLArr.push('                      <div class="container-fluid no-padding overview-times-item-wrap" style="height:100%;">');
    //tmpHTMLArr.push('                          <div class="row no-margin" style="height:100%;">');
    //tmpHTMLArr.push('                              <div class="col-12 no-padding">');
    //tmpHTMLArr.push('                                   <canvas id="canvas_Overview_Time"></canvavs>');
    //tmpHTMLArr.push('                              </div>');
    //tmpHTMLArr.push('                           </div>');
    //tmpHTMLArr.push('                       </div>');
    //tmpHTMLArr.push('                   </div>');
    //tmpHTMLArr.push('               </div>');
    //tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('       <div class="col-1 text-center">');
    tmpHTMLArr.push('            <div class="overview-list-arrow times" id="arrow_Overview_Times_Right">');
    tmpHTMLArr.push('                <i class="fa fa-chevron-right"></i>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');

    $('#Content_Overview_Experience').after($(tmpHTMLArr.join('')));
};

function rebuildOverviewContents(data, contentHeight, itemHeight) {
    buildOverviewHonor(data.honor, itemHeight.s);
    buildOverviewCourse(data.course, itemHeight.l);
    buildOverviewExperience(data.experience, itemHeight.l);
    drawExpDistributionGraph('Distribution', data.experience.distribution);
    for (var key in data.experience.level) {
        drawExpCourseLevelGraph(data.experience.level[key].id, data.experience.level[key]);
    }

    buildOverviewTimes(data.codetimes, itemHeight.e);
    //drawTimesGraph(data.codetimes.times);
    drawTimeBarGraph(data.codetimes.times, 'canvas_Overview_Time');
    var funData = { id: "container_Overview_Times_Items", step: 100 };
    $('#arrow_Overview_Times_Left').on('click', funData, listMovePrev);
    $('#arrow_Overview_Times_Right').on('click', funData, listMoveNext);
    if ($('#canvas_Overview_Time').width() <= $('#wrap_Overview_Times_Items').width()) {
        $('.overview-list-arrow.times').hide();
    }

    //$('#wrap_Category_Content').css('width', '100%');
    $('#wrap_Category_Content').width($('body').width() - $('#sideBar_Page_Left').width() - $('#wrap_Category_Title').width() - 18);
};

function rebuildOverviewTitles(data, contentHeight, itemHeight) {
    var totalCourse = 0;
    var completeCourse = 0;
    for (var i = 0; i < data.course.length; i++) {
        completeCourse += data.course[i].complete;
        totalCourse += data.course[i].total;
    }

    var totalExp = data.experience.total;
    //for (var i = 0; i < data.experience.distribution.length; i++) {
    //    totalExp += data.experience.distribution[i].value;
    //}

    var totalTime = (isNaN(data.codetimes.total) ? 0 : data.codetimes.total);
    //for (var i = 0; i < data.codetimes.times.length; i++) {
    //    totalTime += data.codetimes.times[i].time;
    //}

    //totalTime = Math.round(totalTime * 100) / 100;
    var constArr = [
        {
            id: 'Honor',
            height: itemHeight.s,
            bgColor: 'rgb(236,239,241)',
            color: 'rgb(255,192,0)',
            icon: 'thumbs-up',
            text: '<p class="overview-title-item-text">荣誉墙</p>'
        }, {
            id: 'Course',
            height: itemHeight.l,
            bgColor: 'rgb(248,250,251)', color: 'rgb(117,180,76)',
            icon: 'gamepad',
            text: '<p class="overview-title-item-text">已完成</p><p class="overview-title-item-data">1/40</ｐ><p class="overview-title-item-text">个课程</p>'
        }, {
            id: 'Experience',
            height: itemHeight.l,
            bgColor: 'rgb(236,239,241)',
            color: 'rgb(77,208,225)',
            icon: 'star',
            text: '<p class="overview-title-item-text"><span class="overview-title-item-data">50</span></p><p class="overview-title-item-text">经验值</p>'
        }, {
            id: 'Times',
            height: itemHeight.e,
            bgColor: 'rgb(248,250,251)',
            color: 'rgb(124,77,255)',
            icon: 'clock-o',
            text: '<p class="overview-title-item-text">编程<span class="overview-title-item-data">' +
                 totalTime +
                '</span>小时</p>'
        }
    ];

    for (var i = 0; i < constArr.length; i++) {
        var id = 'title_Overview_' + constArr[i].id;
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<div class="container" id="' + id + '_Container" style="background-color:' + constArr[i].bgColor + ';">');
        tmpHTMLArr.push('   <div class="row align-items-center" id="' + id + '_Row" style="height:' + constArr[i].height + 'px;">');
        tmpHTMLArr.push('       <div class="col-12 text-center no-padding">');
        tmpHTMLArr.push('           <i class="fa fa-' + constArr[i].icon + ' aria-hidden="true" style="font-size:48px; color:' + constArr[i].color + '"></i>');
        tmpHTMLArr.push('           <p>' + constArr[i].text + '</p>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
        $('#wrap_Category_Title').append($(tmpHTMLArr.join('')));
    }
};

function drawExpDistributionGraph(canvasId, datas) {
    var canvas = $('#canvas_Overview_Experience_' + canvasId);
    //var parent = $($('.overview-experience-item-wrap').parent());
    var parent = $('#size_parent_canvas_' + canvasId);
    var width = parent.width();
    var height = parent.height();
    canvas.attr('height', height);
    canvas.attr('width', width);
    canvas[0].width = width;
    canvas[0].height = height;
    var context = canvas[0].getContext('2d');
    context.clearRect(0, 0, width, height);
    //var lineWidth = width / 215 * 30;
    var lineWidth = 30;
    var tmpWidth = width;
    if (width / height > 210 / 250) {
        tmpWidth = Math.floor(210 / 250 * height);
    }

    var radius = Math.floor(tmpWidth / 2) - lineWidth + lineWidth / 2;
    var centerX = Math.floor(width / 2);
    var centerY = Math.floor(radius + lineWidth / 2);
    var total = 0;
    for (var i = 0; i < datas.length; i++) {
        total += datas[i].value;
    }

    var startRadian = 0;
    var endRadian = 0;
    var tmpRadian = 0;
    var tmpX = 0;
    var tmpY = 0;
    var legendItemWidth = Math.floor(width / datas.length);
    //var legendItemWidth = 35;
    var legendWidth = width / 215 * 8;
    var fontSize = 10;

    for (var i = 0; i < datas.length; i++) {
        startRadian = endRadian;
        if (total != 0) {
            tmpRadian = datas[i].value / total * Math.PI * 2;
        } else {
            tmpRadian = 20 / 100 * Math.PI * 2;
        }

        endRadian += tmpRadian;
        context.beginPath();
        context.strokeStyle = datas[i].color;
        context.arc(centerX, centerY, radius, startRadian, endRadian);
        context.lineWidth = lineWidth;
        context.stroke();
        context.closePath();

        tmpX = centerX + radius * Math.cos(startRadian + tmpRadian / 2) - 8;
        tmpY = centerY + radius * Math.sin(startRadian + tmpRadian / 2);
        context.font = 'normal normal normal ' + fontSize + 'px \"微软雅黑\"';
        context.fillStyle = "rgb(255,255,255)";
        context.fillText(datas[i].value, tmpX, tmpY);

        tmpX = legendItemWidth * i;
        //tmpY = (radius + lineWidth / 2) * 2 + 20;
        tmpY = tmpWidth + 15;
        context.beginPath();
        context.rect(tmpX, tmpY, legendWidth, legendWidth);
        context.fillStyle = datas[i].color;
        context.fill();
        context.closePath();

        context.font = 'normal normal normal ' + fontSize + 'px \"微软雅黑\"';
        context.fillStyle = "rgb(71,71,71)";
        context.fillText(datas[i].name, tmpX + legendWidth + 2, tmpY + 9);
    }
};

function drawExpCourseLevelGraph(canvasId, data) {
    var canvas = $('#canvas_Overview_Experience_' + canvasId);
    //var parent = $($('.overview-experience-item-wrap').parent());
    var parent = $('#size_parent_canvas_' + canvasId);
    var width = parent.width();
    var height = parent.height();
    canvas.attr('height', height);
    canvas.attr('width', width);
    canvas[0].width = width;
    canvas[0].height = height;
    var context = canvas[0].getContext('2d');
    context.clearRect(0, 0, width, height);
    var lineWidth = width / 215 * 10;
    var radius = Math.floor(width / 2) - lineWidth + lineWidth / 2;
    var centerX = Math.floor(width / 2);
    var centerY = Math.floor(width / 2);
    var total = 100;
    var tmpX = 0;
    var tmpY = 0;
    var fontSize = Math.floor(width / 215 * 20);
    var bigFontSize = Math.floor(width / 215 * 36);
    context.beginPath();
    context.strokeStyle = 'rgb(230,230,230)';
    context.arc(centerX, centerY, radius, 0, Math.PI * 2);
    context.lineWidth = lineWidth;
    context.stroke();
    context.closePath();
    data.value = (isNaN(data.value) ? 0 : data.value);
    context.beginPath();
    context.strokeStyle = 'rgb(124,218,36)';
    context.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + data.value / 100 * Math.PI * 2);
    context.lineWidth = lineWidth;
    context.stroke();
    context.closePath();
    data.name = (typeof (data.name) == 'string' ? data.name : '');
    tmpY = (radius + lineWidth / 2) * 2 + 15;
    context.font = 'normal normal bold ' + fontSize + 'px \"微软雅黑\"';
    context.fillStyle = "rgb(71,71,71)";
    context.fillText(data.name, (width - (fontSize) * data.name.length) / 2, tmpY + fontSize / 2);

    tmpY = radius + lineWidth / 2;
    context.font = 'normal normal bold ' + bigFontSize + 'px \"微软雅黑\"';
    context.fillStyle = "rgb(71,71,71)";
    context.fillText(data.value + '%', (width - bigFontSize * ((data.value + '%').length - 1)) / 2, tmpY + bigFontSize / 2);
};

/*Settings panel*/
function rebuildSettingsPanel(contentHeight) {
    var mapping = [
        { n: 'name', p: '/root/usrbasic/usr_nickname' },
        { n: 'gender', p: '/root/usrbasic/sex' },
        { n: 'birthday', p: '/root/usrbasic/birthday' },
        { n: 'province', p: '/root/usrbasic/state' },
        { n: 'city', p: '/root/usrbasic/city' },
        { n: 'school', p: '/root/usrbasic/school' }
    ];
    contentHeight = $('#sideBar_Page_Left').height() - 1;
    var tmpHeight = calcSettingsItemheight(contentHeight);
    var data = {
        header: 'image/tmpheader.jpg',
        name: 'Alice',
        gender: '1',
        birthday: '2006-08-08',
        province: '广东',
        city: '深圳',
        school: '深圳市竹园小学'
    };
    rebuildSettingsTitles(tmpHeight);
    rebuildSettingsContents(data, tmpHeight);
    hideLoadingMask();
};

function calcSettingsItemheight(contentHeight) {
    var profileHeight = Math.floor(700 / 1050 * contentHeight);
    var pwdHeight = Math.floor(350 / 1050 * contentHeight);

    if (profileHeight < 440) {
        profileHeight = 440;
    }

    if (pwdHeight + profileHeight < contentHeight) {
        pwdHeight = contentHeight - profileHeight;
    }

    if (pwdHeight < 285) {
        if (profileHeight > 440) {
            profileHeight = profileHeight - (285 - pwdHeight);
            if (profileHeight < 440) {
                profileHeight = 440;
            }
        }

        pwdHeight = 285;
    }

    return { p: profileHeight, c: pwdHeight };
};

function buildSettingsProfile(data, tmpHeight) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid" id="wrap_Settings_Profile" style="background-color:rgb(255,255,255); border-bottom:solid 1px rgb(236,239,241);">');
    tmpHTMLArr.push('    <div class="row justify-content-start align-items-center" style="height:' + tmpHeight + 'px">');
    tmpHTMLArr.push('        <div class="col-10 offset-1">');
    tmpHTMLArr.push('            <form class="my-3">');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <label for="img_Settings_Profile_Header" class="col-2 col-form-label">头像</label>');
    tmpHTMLArr.push('                    <div class="col-7">');
    //tmpHTMLArr.push('                        <img id="img_Settings_Profile_Header" src="' + _getRequestURL(_gURLMapping.account.getheader, {}) + '" style="width: 100px; height: 100px;">');
    tmpHTMLArr.push('                        <img id="img_Settings_Profile_Header" src="image/circles.svg" style="width: 100px; height: 100px; background-color:rgb(76,76,76)">');
    tmpHTMLArr.push('                        <button type="button" class="btn btn-outline-info" id="btn_Settings_Profile_Upload_Header" style="margin-left:20px;margin-bottom: -60px;" data-toggle="modal" data-target="#mWindow_customHeaderModal">上传新头像</button>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <label for="txt_Settings_Profile_User_Name" class="col-2 col-form-label">姓名</label>');
    tmpHTMLArr.push('                    <div class="col-8">');
    tmpHTMLArr.push('                        <input type="text" class="form-control" id="txt_Settings_Profile_User_Name" placeholder="请输入姓名">');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <label class="col-2">性别</label>');
    tmpHTMLArr.push('                    <div class="col-2">');
    tmpHTMLArr.push('                        <div class="form-check">');
    tmpHTMLArr.push('                            <label class="form-check-label">');
    tmpHTMLArr.push('                                <input type="radio" class="form-check-input" name="settings_profile_user_gender" id="radio_Settings_Profile_User_Gender_Male" value="1" checked disabled>男');
    tmpHTMLArr.push('                            </label>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                    <div class="col-1">');
    tmpHTMLArr.push('                        <div class="form-check">');
    tmpHTMLArr.push('                            <label class="form-check-label">');
    tmpHTMLArr.push('                                <input type="radio" class="form-check-input" name="settings_profile_user_gender" id="radio_Settings_Profile_User_Genderr_Female" value="0" checked disabled>女');
    tmpHTMLArr.push('                            </label>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                   <label for="datetime_Settings_Profile_User_Birthday" class="col-2 col-form-label">生日</label>');
    tmpHTMLArr.push('                   <div class="col-8">');
    tmpHTMLArr.push('                       <input class="form-control" type="date" value="' + formatDate(new Date()) + '" id="datetime_Settings_Profile_User_Birthday" readonly>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <label class="col-2" style="line-height: 38px;">所在城市</label>');
    tmpHTMLArr.push('                    <div class="col-3">');
    tmpHTMLArr.push('                        <select class="form-control" id="select_Settings_Profile_User_City_Province" disabled>');
    for (var i = 0; i < _gCitys.length; i++) {
        tmpHTMLArr.push('                            <option value="' + _gCitys[i].p + '">' + _gCitys[i].p + '</option>');
    }

    tmpHTMLArr.push('                        </select>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                    <label class="col-1" id="title_Settings_Profile_User_City_Province" style="line-height: 38px;">市</label>');
    tmpHTMLArr.push('                    <div class="col-3" style="padding: 0px;">');
    tmpHTMLArr.push('                        <select class="form-control" id="select_Settings_Profile_User_City_City" disabled>');
    for (var i = 0; i < _gCitys[0].c.length; i++) {
        tmpHTMLArr.push('                            <option value="' + _gCitys[0].c[i] + '">' + _gCitys[0].c[i] + '</option>');
    }
    tmpHTMLArr.push('                        </select>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                    <label class="col-1" id="title_Settings_Profile_User_City_City" style="line-height: 38px;">区</label>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <label for="txt_Settings_Profile_User_School" class="col-2 col-form-label">就读学校</label>');
    tmpHTMLArr.push('                    <div class="col-8">');
    tmpHTMLArr.push('                        <input type="text" class="form-control" id="txt_Settings_Profile_User_School" placeholder="请输入就读的学校名称" readonly>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <div class="col text-center">');
    tmpHTMLArr.push('                        <button type="button" class="btn btn-outline-info col-3" id="btn_Settings_Profile_Save_Profile">保存</button>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('            </form>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
};

function updateProfileValue(data) {
    var headerImg = new Image();
    headerImg.src = 'image/tmpheader.jpg';
    headerImg.onload = function () {
        $('#img_Settings_Profile_Header').attr('src', headerImg.src);
    }

    $('#txt_Settings_Profile_User_Name').val(data.name);
    data.gender = (data.gender == '' ? '1' : data.gender);
    $("[name='settings_profile_user_gender']").each(function () {
        $(this).removeAttr("checked");
        if ($(this).attr("value") == data.gender) {
            $(this).prop("checked", true);
        }
    });

    data.birthday = formatDate(data.birthday);
    $('#datetime_Settings_Profile_User_Birthday').val(data.birthday);
    data.province = (data.province == '' ? '北京' : data.province);
    $("#select_Settings_Profile_User_City_Province").val(data.province).trigger("change");
    if (data.city != '') {
        $('#select_Settings_Profile_User_City_City').val(data.city);
    }

    $('#txt_Settings_Profile_User_School').val(data.school);
};

function buildSettingsChangePWD(tmpHeight) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid" id="wrap_Settings_PWD" style="background-color:rgb(255,255,255); border-bottom:solid 1px rgb(236,239,241);">');
    tmpHTMLArr.push('    <div class="row justify-content-start align-items-center" style="height:' + tmpHeight + 'px">');
    tmpHTMLArr.push('        <div class="col-10 offset-1">');
    tmpHTMLArr.push('            <form class="my-3">');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <h4 style="color:rgb(107,129,140);">密码修改</h4>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-inline row">');
    tmpHTMLArr.push('                    <label for="txt_Settings_PWD_Old_PWD" class="col-3 col-form-label" style="justify-content: flex-start;">旧密码</label>');
    tmpHTMLArr.push('                    <div class="input-group col-5">');
    tmpHTMLArr.push('                       <input class="form-control js-password-settings-control" id="txt_Settings_PWD_Old_PWD" name="settings_old_password" type="password" placeholder="请输入旧密码">');
    tmpHTMLArr.push('                       <div class="input-group-addon js-password-settings-btn">');
    tmpHTMLArr.push('                           <i class="label-pwd-intension" id="lb_Settings_Old_Pwd_Intension">&nbsp;&nbsp;&nbsp;&nbsp;</i>');
    tmpHTMLArr.push('                           <i class="fa fa-eye-slash" name="btn_Settings_Show_Hide_Pwd" style="width:15px; height:15px;"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-inline row my-2">');
    tmpHTMLArr.push('                    <label for="txt_Settings_PWD_New_PWD" class="col-3 col-form-label" style="justify-content: flex-start;">新密码</label>');
    tmpHTMLArr.push('                    <div class="input-group col-5">');
    tmpHTMLArr.push('                       <input class="form-control js-password-settings-control" id="txt_Settings_PWD_New_PWD" name="settings_new_password" type="password" placeholder="请输入新密码">');
    tmpHTMLArr.push('                       <div class="input-group-addon js-password-settings-btn">');
    tmpHTMLArr.push('                           <i class="label-pwd-intension" id="lb_Settings_New_Pwd_Intension">&nbsp;&nbsp;&nbsp;&nbsp;</i>');
    tmpHTMLArr.push('                           <i class="fa fa-eye-slash" name="btn_Settings_Show_Hide_Pwd" style="width:15px; height:15px;"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-inline row">');
    tmpHTMLArr.push('                    <label for="txt_Settings_PWD_Confirm_PWD" class="col-3 col-form-label" style="justify-content: flex-start;">确认新密码</label>');
    tmpHTMLArr.push('                    <div class="input-group col-5">');
    tmpHTMLArr.push('                       <input class="form-control js-password-settings-control" id="txt_Settings_PWD_Confirm_PWD" name="settings_confirm_password" type="password" placeholder="请确认新密码">');
    tmpHTMLArr.push('                       <div class="input-group-addon js-password-settings-btn">');
    tmpHTMLArr.push('                           <i class="label-pwd-intension" id="lb_SignUp_Pwd_Intension">&nbsp;&nbsp;&nbsp;&nbsp;</i>');
    tmpHTMLArr.push('                           <i class="fa fa-eye-slash" name="btn_Settings_Show_Hide_Pwd" style="width:15px; height:15px;"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row my-3">');
    tmpHTMLArr.push('                    <div class="col text-center">');
    tmpHTMLArr.push('                        <button type="button" class="btn btn-outline-info col-3" id="btn_Settings_PWD_Save_PWD">保存</button>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('            </form>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
};

var _UploadHeaderHandle = '';
function initSettingsEvents() {
    $("#select_Settings_Profile_User_City_Province").change(function () {
        var pVal = $("#select_Settings_Profile_User_City_Province").val();
        var item = {};
        for (var i = 0; i < _gCitys.length; i++) {
            item = _gCitys[i];
            if (item.p == pVal) {
                break;
            }
        }

        var tmpPt = '省';
        if (item.pt && item.pt != '') {
            tmpPt = item.pt;
        }

        var tmpCt = '市';
        if (item.ct && item.ct != '') {
            tmpCt = item.ct;
        }

        $("#title_Settings_Profile_User_City_Province").text(tmpPt);
        $("#title_Settings_Profile_User_City_City").text(tmpCt);
        var tmpHTMLArr = [];
        for (var i = 0; i < item.c.length; i++) {
            tmpHTMLArr.push('<option value="' + item.c[i] + '">' + item.c[i] + '</option>');
        }

        $("#select_Settings_Profile_User_City_City").empty();
        $("#select_Settings_Profile_User_City_City").append(tmpHTMLArr.join(''));
    });

    $(".js-password-settings-btn").on('click', function () {
        if ($(".js-password-settings-control").attr("type") == 'text') {
            $(".js-password-settings-control").attr("type", "password");
            $("[name='btn_Settings_Show_Hide_Pwd']").addClass('fa-eye-slash');
            $("[name='btn_Settings_Show_Hide_Pwd']").removeClass('fa-eye');
        } else {
            $(".js-password-settings-control").attr("type", "text");
            $("[name='btn_Settings_Show_Hide_Pwd']").addClass('fa-eye');
            $("[name='btn_Settings_Show_Hide_Pwd']").removeClass('fa-eye-slash');
        }
    });

    $("#txt_Settings_PWD_New_PWD").on('blur', function () {
        _checkPwdIntension($("#txt_Settings_PWD_New_PWD").val().trim(), $('#lb_Settings_New_Pwd_Intension'));
    });

    $('#mWindow_customHeaderModal').on('show.bs.modal', function () {
        $('#progress_HeaderUpload').show();
        $('#warnning_HeaderUpload').hide();
        $('#wrap_CropBox_Header').hide();
        initCustomHeaderImg();
    });

    $('#mWindow_customHeaderModal').on('hide.bs.modal', function () {
        $('#progress_HeaderUpload').hide();
        $('#warnning_HeaderUpload').hide();
        $('#wrap_CropBox_Header').hide();
    });

    $('#linkBtn_Upload_HeaderFile').on('click', function () {
        $('#progress_HeaderUpload').hide();
        $('#warnning_HeaderUpload').hide();
        //$('#wrap_CropBox_Header').hide();
        $('#file_Upload').click();
    });

    $('#file_Upload').on('change', function () {
        var regExp = /(\.|\/)(gif|jpe?g|png|bmp)$/i;
        var fileName = $(this).val();
        if (fileName != '' && !regExp.test(fileName)) {
            $('#warnning_HeaderUpload').show();
            $('#warnning_HeaderUpload').text("仅支持.jpg .jpeg .gif .png .bmp格式的图片");
            //var tmpSize = calcExhibitionSize(_currentHeaderImage);
            //fnImageCropRot(_currentHeaderImage, { w: tmpSize.nw, h: tmpSize.nh });
            return;
        } else if (this.files[0].size / 1024 > 4096) {
            $('#warnning_HeaderUpload').show();
            $('#warnning_HeaderUpload').text("图片大小不能超过4M");
            //var tmpSize = calcExhibitionSize(_currentHeaderImage);
            //fnImageCropRot(_currentHeaderImage, { w: tmpSize.nw, h: tmpSize.nh });
            return;
        } else {
            $('#progress_HeaderUpload').show();
            _registerRemoteServer();
            var fileType = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
            //$('#form_Upload').attr('action', _getRequestURL(_gURLMapping.account.updateheader, { sumitdata: 1, }));
            //$('#form_Upload').submit();
            var timeout = 2000;
            if (this.files[0].size / 1024 > 3072) {
                timeout = 8000;
            } else if (this.files[0].size / 1024 > 2048) {
                timeout = 5000;
            } else if (this.files[0].size / 1024 > 1024) {
                timeout = 3000;
            }

            //_UploadHeaderHandle = setTimeout('initCustomHeaderImg()', timeout);
            $('#btn_Form_File_Upload').click();
        }
    });

    $('#btn_CustomHeader_Save').on('click', function () {
        _showGlobalMessage('功能演示版本，不支持数据修改！', 'warning', 'alert_ForgetPWD_Success');
    });

    $("#btn_Settings_Profile_Save_Profile").click(function () {
        updateProfile();
    });

    $("#btn_Settings_PWD_Save_PWD").click(function () {
        updatePWD();
    });
};

function updateProfile() {
    _showGlobalMessage('功能演示版本，不支持数据修改！', 'warning', 'alert_ForgetPWD_Success');
}

function updatePWD() {
    if ($("#txt_Settings_PWD_Old_PWD").val().trim() == "") {
        _showGlobalMessage('请输入旧密码', 'danger', 'alert_Settings_OldPWD');
        return;
    }

    if ($("#txt_Settings_PWD_New_PWD").val().trim() == "") {
        _showGlobalMessage('请输入密码', 'danger', 'alert_Settings_PWD');
        return;
    } else {
        var checkVal = _checkPassword($("#txt_Settings_PWD_New_PWD").val().trim());
        if (checkVal < 0) {
            _showGlobalMessage('密码不符合要求，请重新输入!', 'danger', 'alert_Settings_PWD');
            return;
        }
    }

    if ($("#txt_Settings_PWD_Confirm_PWD").val() != $("#txt_Settings_PWD_New_PWD").val()) {
        _showGlobalMessage('两次输入的密码不一致，请重新输入', 'danger', 'alert_Settings_Confirm');
        return;
    }

    _showGlobalMessage('功能演示版本，不支持数据修改！', 'warning', 'alert_ForgetPWD_Success');
}

var _currentHeaderImageSrc = '';
var _currentHeaderImage = null;
function initCustomHeaderImg(uploadType) {
    var canvas = document.getElementById("canvas_CustomHeader");
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 320, 320);
    var image = new Image();
    if (!uploadType && _currentHeaderImageSrc == '') {
        image.src = 'image/tmpheader.jpg';
    } else if (typeof uploadType == 'string' && uploadType != '') {
        image.src = 'image/tmpheader.jpg';
        //image.src = "images/head/head_11.jpg";
    } else {
        image.src = _currentHeaderImageSrc;
    }

    image.onload = function () {
        var tmpSize = calcExhibitionSize(image);
        ctx.drawImage(image, 0, 0, tmpSize.w, tmpSize.h, (320 - tmpSize.nw) / 2, (320 - tmpSize.nh) / 2, tmpSize.nw, tmpSize.nh);
        fnImageCropRot(image, { w: tmpSize.nw, h: tmpSize.nh });
        $('#progress_HeaderUpload').hide();
    };

    image.onerror = function () {
        var tmpSize = calcExhibitionSize(_currentHeaderImage);
        ctx.drawImage(_currentHeaderImage, 0, 0, tmpSize.w, tmpSize.h, (320 - tmpSize.nw) / 2, (320 - tmpSize.nh) / 2, tmpSize.nw, tmpSize.nh);
        fnImageCropRot(_currentHeaderImage, { w: tmpSize.nw, h: tmpSize.nh });
        $('#progress_HeaderUpload').hide();
    };

    _currentHeaderImageSrc = image.src;
    _currentHeaderImage = image;
    var tmpSize = calcExhibitionSize(image);
    fnImageCropRot(image, { w: tmpSize.nw, h: tmpSize.nh });
}

var _eventBinded = false;
var fnImageCropRot = function (o, newSize) {
    var ID = function (id) {
        return document.getElementById(id);
    };

    var oCanvas = ID("canvas_CustomHeader");
    oCanvas.onselectstart = function () {
        return false;
    };

    var oCreateImg = o;
    var iOrigWidth = (oCreateImg.width > 320 ? 320 : oCreateImg.width);
    var iOrigHeight = (oCreateImg.height > 320 ? 320 : oCreateImg.height);
    if ($('#wrap_CropBox_Header').length == 0) {
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<div id="wrap_CropBox_Header" style="width:' + iOrigWidth + 'px; height:' + iOrigHeight + 'px;">');
        tmpHTMLArr.push('   <div id="CropBox_Header">');
        tmpHTMLArr.push('       <div id="DragBg_Header"></div>');
        tmpHTMLArr.push('       <div id="dragRightBot" ></div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
        $("#canvas_CustomHeader").after(tmpHTMLArr.join(""));
    }

    var tmpParams = {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        currentX: 0,
        currentY: 0,
        flag: false,
        kind: "drag"
    };
    $('#wrap_CropBox_Header').show();
    var cropWidth = (iOrigWidth > 100 ? 100 : iOrigWidth);
    var cropHeight = (iOrigHeight > 100 ? 100 : iOrigHeight);
    var orgLeft = (320 - cropWidth) / 2;
    var orgTop = (320 - cropHeight) / 2;
    $("#CropBox_Header").width(cropWidth);
    $("#CropBox_Header").height(cropHeight);
    $("#CropBox_Header").css('top', orgTop + "px");
    $("#CropBox_Header").css('left', orgLeft + "px");
    showSampleImage(o, orgLeft, orgTop, cropWidth, cropHeight, newSize);
    startDrag.image = o;
    startDrag.newSize = newSize;
    if (!_eventBinded) {
        startDrag(ID("DragBg_Header"), ID("CropBox_Header"), "drag", tmpParams);
        startDrag(ID("dragRightBot"), ID("CropBox_Header"), "se", tmpParams);
        _eventBinded = true;
    }
};

var startDrag = function (point, target, kind, params) {
    params.width = $(target).width();
    params.height = $(target).height();
    params.left = $(target).position().left;
    params.top = $(target).position().top;

    point.onmousedown = function (event) {
        params.kind = kind;
        params.flag = true;
        if (!event) {
            event = window.event;
        }

        var e = event;
        params.currentX = e.clientX;
        params.currentY = e.clientY;
        point.onselectstart = function () {
            return false;
        }

        return false;
    };

    document.onmouseup = function () {
        params.flag = false;
        params.left = $(target).position().left;
        params.top = $(target).position().top;
        params.width = $(target).width();
        params.height = $(target).height();
        showSampleImage(startDrag.image, params.left, params.top, params.width, params.height, startDrag.newSize);
    };

    document.onmousemove = function (event) {
        var e = event ? event : window.event;
        if (params.flag) {
            var nowX = e.clientX, nowY = e.clientY;
            var disX = nowX - params.currentX;
            var disY = nowY - params.currentY;
            var tmpWidth = parseInt(params.width);
            var tmpHeighth = parseInt(params.height);
            var tmpLeft = parseInt(params.left);
            var tmpTop = parseInt(params.top);
            if (params.kind === "se") {
                var newWidth = tmpWidth + disX;
                var newHeight = tmpHeighth + disX;
                newWidth = (newWidth + tmpLeft > 320 ? 320 - tmpLeft : newWidth);
                newHeight = (newHeight + tmpTop > 320 ? 320 - tmpTop : newHeight);
                if (newWidth != newHeight) {
                    return;
                }

                $(target).width(newWidth);
                $(target).height(newHeight);
            } else {
                var newLeft = tmpLeft + disX;
                var newTop = tmpTop + disY;
                newLeft = (newLeft < 0 ? 0 : newLeft);
                newTop = (newTop < 0 ? 0 : newTop);
                newLeft = (newLeft + tmpWidth > 320 ? 320 - tmpWidth : newLeft);
                newTop = (newTop + tmpHeighth > 320 ? 320 - tmpHeighth : newTop);
                $(target).css('left', newLeft + "px");
                $(target).css('top', newTop + "px");
            }
        }
    }
}

startDrag.image = null;
startDrag.newSize = null;
function calcExhibitionSize(image) {
    var imgHeight = image.height;
    var imgWidth = image.width;
    var newWidth = imgWidth;
    var newHeight = imgHeight;
    var scaleX = imgWidth / 320;
    var scaleY = imgHeight / 320;
    if (imgHeight > imgWidth) {
        newHeight = 320;
        newWidth = imgWidth / imgHeight * newHeight;
    } else {
        newWidth = 320;
        newHeight = imgHeight / imgWidth * newWidth;
    }

    return { w: imgWidth, h: imgHeight, nw: newWidth, nh: newHeight };
};

function transCropBoxSizeToRealSize(image, left, top, width, height, newSize) {
    var tmpSpaceH = (320 - newSize.w) / 2;
    var tmpSpaceV = (320 - newSize.h) / 2;
    var tmpLeft = left - tmpSpaceH;
    var tmpTop = top - tmpSpaceV;
    var tmpWidth = width;
    var tmpHeight = height;
    if (tmpLeft < 0) {
        tmpWidth = tmpWidth + tmpLeft;
        tmpLeft = 0;
    }

    if (tmpWidth > newSize.w) {
        tmpWidth = newSize.w;
    } else if (tmpLeft + tmpWidth > newSize.w) {
        tmpWidth = tmpWidth - (tmpLeft + tmpWidth - newSize.w);
    }

    if (tmpTop < 0) {
        tmpHeight = tmpHeight + tmpTop;
        tmpTop = 0;
    }

    if (tmpHeight > newSize.h) {
        tmpHeight = newSize.h;
    } else if (tmpTop + tmpHeight > newSize.h) {
        tmpHeight = tmpHeight - (tmpTop + tmpHeight - newSize.h);
    }

    var scaleX = image.width / newSize.w;
    var scaleY = image.height / newSize.h;
    left = tmpLeft * scaleX;
    top = tmpTop * scaleY;
    width = tmpWidth * scaleX;
    height = tmpHeight * scaleY;
    return { l: left, t: top, w: width, h: height };
};

function showSampleImage(image, left, top, width, height, newSize) {
    var sizeObj = transCropBoxSizeToRealSize(image, left, top, width, height, newSize)
    var ctx = document.getElementById("canvas_Sample_1").getContext('2d');
    ctx.clearRect(0, 0, 100, 100);
    ctx.drawImage(image, sizeObj.l, sizeObj.t, sizeObj.w, sizeObj.h, 0, 0, 100, 100);
    ctx = document.getElementById("canvas_Sample_2").getContext('2d');
    ctx.clearRect(0, 0, 64, 64);
    ctx.drawImage(image, sizeObj.l, sizeObj.t, sizeObj.w, sizeObj.h, 0, 0, 64, 64);
    ctx = document.getElementById("canvas_Sample_3").getContext('2d');
    ctx.clearRect(0, 0, 24, 24);
    ctx.drawImage(image, sizeObj.l, sizeObj.t, sizeObj.w, sizeObj.h, 0, 0, 24, 24);
    $('#btn_CustomHeader_Save').attr('data-content', sizeObj.l + ',' + sizeObj.t + ',' + sizeObj.w + ',' + sizeObj.h)
};

function rebuildSettingsContents(data, tmpHeight) {
    buildSettingsProfile(data, tmpHeight.p);
    buildSettingsChangePWD(tmpHeight.c - 1);
    initSettingsEvents();
    updateProfileValue(data);
};

function rebuildSettingsTitles(tmpHeight) {
    var constArr = [
        {
            id: 'profile',
            height: tmpHeight.p,
            bgColor: 'rgb(248,250,251)',
            color: 'rgb(73,208,227)',
            icon: 'user-o',
            text: '<p class="settings-title-item-text">个人信息</p>'
        }, {
            id: 'changepwd',
            height: tmpHeight.c,
            bgColor: 'rgb(236,239,241)',
            color: 'rgb(235,168,103)',
            icon: 'unlock-alt',
            text: '<p class="settings-title-item-text">账号密码</p>'
        }
    ];

    for (var i = 0; i < constArr.length; i++) {
        var id = 'title_Settings_' + constArr[i].id;
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<div class="container" id="' + id + '_Container" style="background-color:' + constArr[i].bgColor + ';">');
        tmpHTMLArr.push('   <div class="row align-items-center" id="' + id + '_Row" style="height:' + constArr[i].height + 'px;">');
        tmpHTMLArr.push('       <div class="col-12 text-center">');
        tmpHTMLArr.push('           <i class="fa fa-' + constArr[i].icon + ' aria-hidden="true" style="font-size:48px; color:' + constArr[i].color + '"></i>');
        tmpHTMLArr.push('           <p>' + constArr[i].text + '</p>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
        $('#wrap_Category_Title').append($(tmpHTMLArr.join('')));
    }
};

/*Report panel*/
function rebuildReportPanel() {
    var data = {
        user: {
            header: 'image/tmpheader.jpg',
            name: 'Alice',
            title: 'Level 1',
            exp: 2.5,
            over: 65,
            course: 1,
            date: '2017-10-20',
            qr: 'image/qr_wechat.png'
        },
        achieve: [
            { id: 1, title: '初步接触编程', content: '顺利完成了计算机原理的所有基础课程，对现代计算机的系统组成，运行方式和编程原理有了系统性的认知；' },
            { id: 2, title: '分享小达人', content: '分享了18个已完成作品， 这些作品已被565人次浏览；' },
            { id: 3, title: '计算机小专家', content: '顺利完成了计算机原理的所有基础课程，对现代计算机的系统组成，运行方式和编程原理有了系统性的认知；' }
        ],
        ability: {
            type: [
                { name: '科学', value: 700 },
                { name: '技术', value: 400 },
                { name: '工程', value: 550 },
                { name: '数学', value: 700 },
                { name: '语言', value: 450 }
            ],
            course: 1,
            time: 21,
            items: [
                '模式设别'
            ]
        },
        time: {
            over: 0,
            total: 21,
            times: [
                { date: "2017-10-1", time: 1 },
                { date: "2017-10-2", time: 2 },
                { date: "2017-10-3", time: 1 },
                { date: "2017-10-4", time: 3 },
                { date: "2017-10-5", time: 2 },
                { date: "2017-10-6", time: 2 },
                { date: "2017-10-7", time: 1 },
                { date: "2017-10-8", time: 2 },
                { date: "2017-10-9", time: 1 }
            ],
            course: [
                { id: '1', rate: 2.5, name: '初级课程' },
                { id: '２', rate: 0, name: '中级课程' },
                { id: '３', rate: 0, name: '高级课程' },
                { id: '4', rate: 0, name: '拓展课程' }
            ]
        },
        potential: [
            { name: '科学', value: 100 },
            { name: '数学', value: 80 },
            { name: '技术', value: 55 },
            { name: '工程', value: 20 },
            { name: '语言', value: 10 }
        ]
    }

    rebuildReportTitles();
    rebuildReportContents(data);
    hideLoadingMask();
};

function formatReportData(response) {
    var tmpNode = $($(response).find('overview')[0]);
    var basicData = {
        header: _getRequestURL(_gURLMapping.account.getheader, {}),
        name: tmpNode.attr('usr_nickname') == '' ? $.cookie('logined_user_nickname') : tmpNode.attr('usr_nickname'),
        title: tmpNode.attr('usr_title'),
        exp: parseInt(tmpNode.attr('exprate')),
        over: parseInt(tmpNode.attr('overrate')),
        course: parseInt(tmpNode.attr('finish')),
        date: $($(response).find('report')[0]).attr('date'),
        qr: 'image/qr_wechat.png'
    };

    var tmpNodes = $(response).find('honor').find('item');
    var honorData = [];
    for (var i = 0; i < tmpNodes.length; i++) {
        tmpNode = $(tmpNodes[i]);
        honorData.push({
            id: i + 1,
            title: tmpNode.attr('name'),
            content: typeof tmpNode.attr('content') == 'undefined' ? '' : tmpNode.attr('content')
        });
    }

    tmpNode = $($(response).find('ability')[0]);
    var abilityData = {
        type: [],
        items: [],
        course: isNaN(tmpNode.attr('course')) ? 0 : parseInt(tmpNode.attr('course')),
        time: isNaN(tmpNode.attr('time')) ? 0 : parseInt(tmpNode.attr('time')),
    };

    tmpNode = $($(response).find('ability').find('steml')[0]);
    for (var key in _distributionMap) {
        abilityData.type.push({
            name: _distributionMap[key].name,
            value: tmpNode.attr(key.toLowerCase())
        });
    }

    tmpNodes = $(response).find('ability').find('finishedcourse').find('item');
    for (var i = 0; i < tmpNodes.length; i++) {
        abilityData.items.push($(tmpNodes[i]).attr('title'));
    }

    tmpNode = $($(response).find('level')[0]);
    var timeData = {
        over: isNaN(tmpNode.attr('over')) ? 0 : parseInt(tmpNode.attr('over')),
        total: isNaN(tmpNode.attr('total')) ? 0 : parseInt(tmpNode.attr('total')),
        times: [],
        course: []
    };

    tmpNodes = $(response).find('level').find('item');
    for (var i = 0; i < tmpNodes.length; i++) {
        timeData.course.push({
            id: $(tmpNodes[i]).attr('id'),
            rate: $(tmpNodes[i]).attr('value') == '' ? 0 : parseInt($(tmpNodes[i]).attr('value')),
            name: typeof $(tmpNodes[i]).attr('name') == 'undefined' ? $(tmpNodes[i]).attr('id') : $(tmpNodes[i]).attr('name')
        });
    }

    tmpNodes = $(response).find('codetimes').find('item');
    for (var i = 0; i < tmpNodes.length; i++) {
        timeData.times.push({
            date: $(tmpNodes[i]).attr('date'),
            time: new Number($(tmpNodes[i]).attr('value')).toFixed(2)
        });
    }

    tmpNode = $($(response).find('codetimes')[0]);
    var tmpVal = isNaN(tmpNode.attr('totaltime')) ? 0 : new Number(tmpNode.attr('totaltime'));
    timeData.total = (Math.round(tmpVal / 60 * 100) / 100).toFixed(2);
    var data = {
        user: basicData,
        achieve: honorData,
        ability: abilityData,
        time: timeData
    };

    return data;
};

function rebuildReportTitles() {
    $('#wrap_Category_Title').hide();
};

function rebuildReportContents(data) {
    var minWidth = $('#sideBar_Page_Left').width() + 800;
    if ($('body').width < minWidth) {
        $('body').width = minWidth;
    }

    $('#wrap_Category_Content').width($('body').width() - $('#sideBar_Page_Left').width() - 18);
    buildReportOverviewPanel(data.user);
    buildReportAchievePanel(data.achieve);
    buildReportAbilityPanel(data.ability);
    buildReportTimePanel(data.time);
    //buildReportPotentialPanel(data.potential);
    //buildReportWorksPanel(data.works);
    buildReportAttentionPanel(data.user);
    drawAbilityGraph(data.ability.type);
    drawTimeGraph(data.time);
    //drawPotentialGraph(data.potential);
    adjustAttentionImg();
    _loadIMG(data.user.header, function () {
        $('.report-overview-header').attr('src', data.user.header);
        $('.report-attention-header').attr('src', data.user.header);
    });
};

function buildReportOverviewPanel(data) {
    var tmpCount = Math.round(data.over / 5);
    var width_1 = (33 - 0.4) * tmpCount;
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid wrap-profile-report-section" style="background-color:rgb(255,255,255);">');
    tmpHTMLArr.push('    <div class="row" style="padding-top:15px;">');
    tmpHTMLArr.push('        <div class="col-12 text-right">');
    tmpHTMLArr.push('            <p class="text-size-11 text-color-smart">报告生成日期: ' + data.date + '</p>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col-12 text-left">');
    tmpHTMLArr.push('            <h2 class="report-section-title">概览</h2>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:60px;">');
    tmpHTMLArr.push('        <div class="col-10 offset-1">');
    tmpHTMLArr.push('            <div class="container-fluid">');
    tmpHTMLArr.push('                <div class="row">');
    tmpHTMLArr.push('                    <div class="col-12">');
    tmpHTMLArr.push('                        <div class="d-flex align-items-center" id="report_overview_userinfor" style="position: relative; left: 269px; width: 420px;">');
    tmpHTMLArr.push('                            <div class="text-size-13 text-right">');
    tmpHTMLArr.push('                                超越<span class="text-size-21 text-color-data">' + data.over + '%</span>的全国学员');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                            <div style="padding:10px 20px;">');
    tmpHTMLArr.push('                                <img class="report-overview-header" src="image/circles.svg"  />');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                            <div>');
    tmpHTMLArr.push('                                <div class="container-fluid no-padding">');
    tmpHTMLArr.push('                                    <div class="row no-margin">');
    tmpHTMLArr.push('                                        <div class="col-12 no-padding">');
    tmpHTMLArr.push('                                            <p class="text-size-10">' + data.name + ',' + data.title + '</p>');
    tmpHTMLArr.push('                                            <p class="text-size-10" style="min-width: 120px;">当前课程经验值: <span class="text-size-12 text-color-data">' + data.exp + '%</span></p>');
    tmpHTMLArr.push('                                            <hr style="height:2px; color:rgb(239,239,239); margin: 5px 0px;" />');
    tmpHTMLArr.push('                                        </div>');
    tmpHTMLArr.push('                                    </div>');
    tmpHTMLArr.push('                                    <div class="row no-margin">');
    //tmpHTMLArr.push('                                        <div class="col-4 no-padding">');
    //tmpHTMLArr.push('                                            <p class="text-size-12 text-color-data text-center">' + data.work + '</p>');
    //tmpHTMLArr.push('                                        </div>');
    //tmpHTMLArr.push('                                        <div class="col-4 no-padding">');
    //tmpHTMLArr.push('                                            <p class="text-size-12 text-color-data text-center">' + data.friend + '</p>');
    //tmpHTMLArr.push('                                        </div>');
    //tmpHTMLArr.push('                                    </div>');
    //tmpHTMLArr.push('                                    <div class="row no-margin">');
    //tmpHTMLArr.push('                                        <div class="col-4 no-padding text-center">');
    //tmpHTMLArr.push('                                            <p class="text-size-10">作品</p>');
    //tmpHTMLArr.push('                                        </div>');
    tmpHTMLArr.push('                                        <div class="col-10 no-padding text-left">');
    tmpHTMLArr.push('                                            <p class="text-size-10">已经完成的课程:</p>');
    tmpHTMLArr.push('                                        </div>');
    tmpHTMLArr.push('                                        <div class="col-2 no-padding">');
    tmpHTMLArr.push('                                            <p class="text-size-10 text-color-data text-center">' + data.course + '</p>');
    tmpHTMLArr.push('                                        </div>');
    //tmpHTMLArr.push('                                        <div class="col-4 no-padding text-center">');
    //tmpHTMLArr.push('                                            <p class="text-size-10">小伙伴</p>');
    //tmpHTMLArr.push('                                        </div>');
    tmpHTMLArr.push('                                    </div>');
    tmpHTMLArr.push('                                </div>');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="row justify-content-center">');
    tmpHTMLArr.push('                    <div class="col" style="width:677px; max-width:677px;">');
    tmpHTMLArr.push('                        <div class="d-flex align-items-baseline">');
    tmpHTMLArr.push('                            <div class="report-overview-rank-part-1" style="width:' + width_1 + 'px;max-width:' + width_1 + 'px;min-width:' + width_1 + 'px;">');
    tmpHTMLArr.push('                                <div style="background-image:url(image/smlperson.png); background-size:33px 77px; height:77px; width:100%;"></div>');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                            <div class="report-overview-rank-part-2">');
    tmpHTMLArr.push('                                <div style="background-image:url(image/smlperson.png); height:115px; width:50px;"></div>');
    tmpHTMLArr.push('                            </div>');
    var width_2 = (33 - 0.4) * (19 - tmpCount);
    tmpHTMLArr.push('                            <div class="report-overview-rank-part-3" style="width: ' + width_2 + 'px; max-width: ' + width_2 + 'px; min-width: ' + width_2 + 'px;">');
    tmpHTMLArr.push('                                <div style="background-image:url(image/smlperson.png); background-size:33px 77px; height:77px; width:100%;"></div>');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
    var left = $('.report-overview-rank-part-1').parent().parent().position().left + width_1 + 25;
    var tmpPos = $('.report-overview-header').position().left + $('.report-overview-header').width() / 2 + 20;
    left = left - tmpPos;
    $('#report_overview_userinfor').css('left', left + 'px');
};

function buildReportAchievePanel(data) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid wrap-profile-report-section" style="background-color:rgb(255,255,255);">');
    tmpHTMLArr.push('    <div class="row" style="padding-top:40px; padding-bottom:40px;">');
    tmpHTMLArr.push('        <div class="col-12 text-left">');
    tmpHTMLArr.push('            <h2 class="report-section-title">成就</h2>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    //for (var i = 0; i < data.length; i += 2) {
    //    var tmpId = (data[i].id < 10 ? '0' + data[i].id : data[i].id);
    //    tmpHTMLArr.push('    <div class="row" style="padding-bottom:60px;">');
    //    tmpHTMLArr.push('        <div class="col-5 offset-1">');
    //    tmpHTMLArr.push('            <div class="container-fluid">');
    //    tmpHTMLArr.push('                <div class="row">');
    //    tmpHTMLArr.push('                    <div class="col-3 text-size-75 text-color-index">' + tmpId + '</div>');
    //    tmpHTMLArr.push('                    <div class="col-8">');
    //    tmpHTMLArr.push('                        <p class="text-size-13 text-color-smart">' + data[i].title + '</p>');
    //    tmpHTMLArr.push('                        <p class="text-size-10">' + data[i].content + '</p>');
    //    tmpHTMLArr.push('                    </div>');
    //    tmpHTMLArr.push('                </div>');
    //    tmpHTMLArr.push('            </div>');
    //    tmpHTMLArr.push('        </div>');
    //    if (i + 1 < data.length) {
    //        tmpId = (data[i + 1].id < 10 ? '0' + data[i + 1].id : data[i + 1].id);
    //        tmpHTMLArr.push('        <div class="col-5">');
    //        tmpHTMLArr.push('            <div class="container-fluid">');
    //        tmpHTMLArr.push('                <div class="row">');
    //        tmpHTMLArr.push('                    <div class="col-3 text-size-75 text-color-index">' + tmpId + '</div>');
    //        tmpHTMLArr.push('                    <div class="col-8">');
    //        tmpHTMLArr.push('                        <p class="text-size-13 text-color-smart">' + data[i + 1].title + '</p>');
    //        tmpHTMLArr.push('                        <p class="text-size-10">' + data[i + 1].content + '</p>');
    //        tmpHTMLArr.push('                    </div>');
    //        tmpHTMLArr.push('                </div>');
    //        tmpHTMLArr.push('            </div>');
    //        tmpHTMLArr.push('        </div>');
    //        tmpHTMLArr.push('    </div>');
    //    }
    //}
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:60px;">');
    for (var i = 0; i < data.length; i++) {
        var tmpId = (data[i].id < 10 ? '0' + data[i].id : data[i].id);
        tmpHTMLArr.push('        <div class="col-4 ">');
        tmpHTMLArr.push('            <div class="container-fluid no-padding">');
        tmpHTMLArr.push('                <div class="row">');
        tmpHTMLArr.push('                    <div class="col-3 no-padding text-size-75 text-color-index">' + tmpId + '</div>');
        tmpHTMLArr.push('                    <div class="col-7 no-padding">');
        tmpHTMLArr.push('                        <p class="text-size-13 text-color-smart" style="padding-left: 10px;">' + data[i].title + '</p>');
        tmpHTMLArr.push('                        <p class="text-size-10" style="padding-left: 10px;">' + data[i].content + '</p>');
        tmpHTMLArr.push('                    </div>');
        tmpHTMLArr.push('                </div>');
        tmpHTMLArr.push('            </div>');
        tmpHTMLArr.push('        </div>');
    }
    tmpHTMLArr.push('</div>');

    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
};

function buildReportAbilityPanel(data) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid wrap-profile-report-section" style="background-color:rgb(255,255,255);">');
    tmpHTMLArr.push('    <div class="row" style="padding-top:40px; padding-bottom:40px;">');
    tmpHTMLArr.push('        <div class="col-12 text-left">');
    tmpHTMLArr.push('            <h2 class="report-section-title">能力</h2>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:30px;">');
    tmpHTMLArr.push('        <div class="col-7">');
    tmpHTMLArr.push('            <div class="container-fluid">');
    tmpHTMLArr.push('                <div class="row" style="padding-bottom:50px;">');
    tmpHTMLArr.push('                    <div class="col-12">');
    tmpHTMLArr.push('                        <p class="text-size-10">');
    tmpHTMLArr.push('                            基于艾酷为中国孩子开发的STEML课程体系，目前您的孩子已经进行了');
    tmpHTMLArr.push('<span>' + data.type.length + '</span>');
    tmpHTMLArr.push('大类，');
    tmpHTMLArr.push('<span>' + data.course + '</span>');
    tmpHTMLArr.push('个课程');
    tmpHTMLArr.push('，');
    tmpHTMLArr.push('<span>' + data.time + '</span>');
    tmpHTMLArr.push('个课时的学习；在');
    var tmpStr = [];
    for (var i = 0; i < data.type.length - 1; i++) {
        tmpStr.push(data.type[i].name);
    }

    tmpStr = tmpStr.join('、');
    if (tmpStr.length > 0) {
        tmpStr += '和' + data.type[data.type.length - 1].name;
    }

    tmpHTMLArr.push(tmpStr);
    tmpHTMLArr.push('等各个领域都获得了显著的能力提升。');
    tmpHTMLArr.push('                        </p>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="row">');
    tmpHTMLArr.push('                    <div class="col-12">');
    tmpHTMLArr.push('                        <p class="text-size-13 text-color-smart">已完成课程列表</p>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="row">');
    tmpHTMLArr.push('                    <div class="col-12">');
    tmpHTMLArr.push('                        <div class="container-fluid">');
    tmpHTMLArr.push('                            <div class="row" style="padding-top:10px;">');
    for (var i = 0; i < data.items.length; i++) {
        tmpHTMLArr.push('                                <div class="col-4 text-size-10"><span>');
        tmpHTMLArr.push('                                    【' + (i + 1) + '】' + data.items[i]);
        tmpHTMLArr.push('                                </span></div>');
    }

    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-5">');
    tmpHTMLArr.push('            <canvas id="canvas_Report_Ability"></canvas>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));

};

function buildReportTimePanel(data) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid wrap-profile-report-section" style="background-color:rgb(255,255,255);">');
    tmpHTMLArr.push('    <div class="row" style="padding-top:40px; padding-bottom:40px;">');
    tmpHTMLArr.push('        <div class="col-12 text-left">');
    tmpHTMLArr.push('            <h2 class="report-section-title">时间</h2>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:30px;">');
    tmpHTMLArr.push('        <div class="col-12" style="padding-left:30px;">');
    tmpHTMLArr.push('            <p class="text-size-10">');
    tmpHTMLArr.push('               到今天为止，您的孩子已经累计学习编程 ');
    tmpHTMLArr.push('               <span class="text-size-16 text-color-data">' + data.total + '</span>');
    tmpHTMLArr.push('                小时');
    tmpHTMLArr.push('            </p>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:30px;">');
    tmpHTMLArr.push('        <div class="col-12 text-center text-size-13 text-color-smart">');
    tmpHTMLArr.push('            本月学习时间及趋势');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:30px;">');
    tmpHTMLArr.push('        <div class="col-12" style="height:210px; padding-left:30px;">');
    tmpHTMLArr.push('           <div class="container-fluid no-padding">');
    tmpHTMLArr.push('               <div class="row align-items-center">');
    tmpHTMLArr.push('                   <div class="col-1 no-padding">');
    tmpHTMLArr.push('                       <div class="report-list-arrow time" id="arrow_Report_Time_Left">');
    tmpHTMLArr.push('                           <i class="fa fa-chevron-left"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <div class="col-10 no-padding" style="height:210px;">');
    tmpHTMLArr.push('                       <div id="container_Report_Time_Graph" style="height:100%; overflow: hidden;">');
    tmpHTMLArr.push('                           <canvas id="canvas_Report_Time_Time"></canvas>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <div class="col-1 no-padding">');
    tmpHTMLArr.push('                       <div class="report-list-arrow time" id="arrow_Report_Time_Right">');
    tmpHTMLArr.push('                           <i class="fa fa-chevron-right"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>')
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:30px;">');
    tmpHTMLArr.push('        <div class="col-12 text-center text-size-13 text-color-smart">');
    tmpHTMLArr.push('            各级课程完成率');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:60px;">');
    tmpHTMLArr.push('        <div class="col-12" style="height:210px; padding-left:30px;">');
    tmpHTMLArr.push('           <canvas id="canvas_Report_Time_Course"></canvas>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
};

function buildReportPotentialPanel(data) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid wrap-profile-report-section" style="background-color:rgb(255,255,255);">');
    tmpHTMLArr.push('    <div class="row" style="padding-top:40px; padding-bottom:40px;">');
    tmpHTMLArr.push('        <div class="col-12 text-left">');
    tmpHTMLArr.push('            <h2 class="report-section-title">潜力</h2>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:60px;">');
    tmpHTMLArr.push('        <div class="col-4">');
    tmpHTMLArr.push('            <div class="container-fluid">');
    tmpHTMLArr.push('                <div class="row" style="padding-bottom:100px;">');
    tmpHTMLArr.push('                    <div class="col-12 text-center">');
    tmpHTMLArr.push('                        <p class="text-size-10">');
    tmpHTMLArr.push('                            通过目前已经完成的课程，您的孩子在');
    tmpHTMLArr.push('                        </p>');
    tmpHTMLArr.push('                        <p class="text-size-16 text-color-data">');
    tmpHTMLArr.push(data[0].name);
    tmpHTMLArr.push('                            <span class="text-size-10 text-color-text">以及</span>');
    tmpHTMLArr.push(data[1].name);
    tmpHTMLArr.push('                        </p>');
    tmpHTMLArr.push('                        <p class="text-size-10">');
    tmpHTMLArr.push('                            这两个领域体现出了过人的潜力。');
    tmpHTMLArr.push('                        </p>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="row">');
    tmpHTMLArr.push('                    <div class="col-12">');
    tmpHTMLArr.push('                        <p class="text-size-10">');
    tmpHTMLArr.push('                            【1】分析结果基于艾酷PTAS潜力感知模型计算得出，模型计算准确率与孩子的课程参与数据量成正比；');
    tmpHTMLArr.push('                        </p>');
    tmpHTMLArr.push('                        <p class="text-size-10">');
    tmpHTMLArr.push('                            【2】潜力分析结果可能随孩子年龄和知识结构变化而改变，因此谨供参考。');
    tmpHTMLArr.push('                        </p>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-8" style="padding-right:30px;">');
    tmpHTMLArr.push('            <canvas id="canvas_Report_Potential"></canvas>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
};

function buildReportWorksPanel(data) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid wrap-profile-report-section" style="background-color:rgb(255,255,255);">');
    tmpHTMLArr.push('    <div class="row" style="padding-top:40px; padding-bottom:40px;">');
    tmpHTMLArr.push('        <div class="col-12 text-left">');
    tmpHTMLArr.push('            <h2 class="report-section-title">作品</h2>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:40px;">');
    tmpHTMLArr.push('        <div class="col-12 text-left" style="padding-left:30px;">');
    tmpHTMLArr.push('            <p class="text-size-10"><span class="text-size-13 text-color-smart">只要有梦想，谁都可以创造非凡。</span>您的孩子在学习期间创造出了许多有趣的作品。</p>');
    tmpHTMLArr.push('            <p class="text-size-10">这些作品背后体现了您孩子独一无二的创造力、理解力，以及在艾酷教育所学到的编程知识。和您一样，我们为孩子的成就而感到无比骄傲。</p>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:40px; padding-left:30px;">');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLArr.push('        <div class="col-4 wrap-report-works-item">');
        tmpHTMLArr.push('           <div class="container-fluid container-report-works-item">');
        tmpHTMLArr.push('               <div class="row">');
        tmpHTMLArr.push('                   <div class="col-12 no-padding" style="height:125px">');
        tmpHTMLArr.push('                       <img src="' + data[i].img + '"/>');
        tmpHTMLArr.push('                       <div class="report-works-item-hits">' + data[i].hits + '</div>');
        tmpHTMLArr.push('                       <div class="d-flex align-items-center justify-content-center report-works-item-mask">');
        //tmpHTMLArr.push('                       <div class="report-works-item-button"><i class="fa fa-play" aria-hidden="true" title="运行"></i></div>');
        //tmpHTMLArr.push('                       <div class="report-works-item-button"><i class="fa fa-share-alt" aria-hidden="true" title="运行"></i></div>');
        tmpHTMLArr.push('                           <i class="report-works-item-button fa fa-play" aria-hidden="true" title="运行"></i>');
        tmpHTMLArr.push('                           <i class="report-works-item-button fa fa-share-alt" aria-hidden="true" title="分享"></i>');
        tmpHTMLArr.push('                       </div>');
        tmpHTMLArr.push('                   </div>');
        tmpHTMLArr.push('               </div>');
        tmpHTMLArr.push('               <div class="row" style="background-color:rgb(21,21,21);">');
        tmpHTMLArr.push('                   <div class="col-12" style="height:25px">');
        tmpHTMLArr.push('                       <p class="text-size-10 text-bold text-color-white">' + data[i].title + '</p>');
        tmpHTMLArr.push('                   </div>');
        tmpHTMLArr.push('               </div>');
        tmpHTMLArr.push('           </div>');
        tmpHTMLArr.push('        </div>');
    }

    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
    $('.container-report-works-item').mouseenter(function () {
        $(this).find('.report-works-item-mask').show();
        $(this).find('.report-works-item-mask').css('visibility', 'visible');
    });

    $('.container-report-works-item').mouseleave(function () {
        $(this).find('.report-works-item-mask').hide();
        $(this).find('.report-works-item-mask').css('visibility', 'hidden');
    });
};

function buildReportAttentionPanel(data) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid wrap-profile-report-section" style="background-color:rgb(255,255,255); border:none;">');
    tmpHTMLArr.push('    <div class="row" style="padding-top:40px; padding-bottom:40px;">');
    tmpHTMLArr.push('        <div class="col-12 text-left">');
    tmpHTMLArr.push('            <h2 class="report-section-title">关注</h2>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col-6 text-left" style="padding-left:30px;">');
    tmpHTMLArr.push('            <p class="text-size-10" style="padding-bottom:20px;">');
    tmpHTMLArr.push('               感谢您阅读');
    tmpHTMLArr.push('               的艾酷学习报告。我们为您孩子的进步和成就感到同样骄傲。</p>');
    tmpHTMLArr.push('            <p class="text-size-10" style="padding-bottom:30px;">您可以通过点击下面的链接下载本报告全文。</p>');
    tmpHTMLArr.push('            <p class="text-center">');
    tmpHTMLArr.push('               <img src="image/pdf.png" class="report-attention-pdf-button" width="60" height="80" />');
    tmpHTMLArr.push('            </p>');
    tmpHTMLArr.push('            <p class="text-size-10 text-center report-attention-pdf-button" style="padding-bottom:40px;">');
    tmpHTMLArr.push(data.name + '的艾酷学习报告');
    tmpHTMLArr.push('            </p>');
    tmpHTMLArr.push('            <p class="text-center text-size-10" style="padding-bottom:40px;">');
    tmpHTMLArr.push('                或者，您可以扫描添加艾酷微信号，让我们可以第一时间把孩子的信息推送到您的指尖。');
    tmpHTMLArr.push('            </p>');
    tmpHTMLArr.push('            <p class="text-center">');
    tmpHTMLArr.push('                <img src="' + data.qr + '" width="100" height="100" />');
    tmpHTMLArr.push('            </p>');
    tmpHTMLArr.push('            <p class="text-center text-size-10 text-color-smart" style="padding-bottom:40px;">艾酷教育，为中国孩子学习编程而生</p>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-6" style="padding-left:30px;">');
    tmpHTMLArr.push('            <img src="image/iphone7.png" class="img-fluid  report-attention-bakcground" />');
    tmpHTMLArr.push('            <img src="image/circles.svg"  class="report-overview-header report-attention-header"/>');
    tmpHTMLArr.push('            <div class="report-attention-header-point"></div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
    $('.report-attention-pdf-button').on('click', function () {
        alert('start download report');
    });
};

function drawAbilityGraph(datas) {
    //var fontSize = 28;
    //var valFontSize = 20;
    var fontSize = 20;
    var valFontSize = 16;
    var canvas = document.getElementById('canvas_Report_Ability');
    var parent = $($(canvas).parent());
    var height = parent.height() - 10;
    var width = parent.width();
    var tmpSize = (height > width ? width : (width > 300) ? 300 : width);
    canvas.width = tmpSize;
    canvas.height = tmpSize;
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, tmpSize, tmpSize);
    var tmpSpaceUnit = Math.ceil(fontSize / 10) * 10;
    var tmpCtxWidth = tmpSize - tmpSpaceUnit * 4;
    //var border = (tmpCtxWidth / 2) / Math.sin(Math.PI / 180 * 54);
    var radius = (tmpCtxWidth / 2) / Math.sin(Math.PI / 180 * 72);
    var lightStyle = 'rgb(247,247,247)';
    var boldStyle = 'rgb(230,230,230)';
    var centerX = tmpSize / 2;
    var centerY = tmpSize / 2;
    var maxValue = datas[0].value;
    for (var i = 0; i < datas.length; i++) {
        maxValue = (maxValue < datas[i].value ? datas[i].value : maxValue);
    }

    maxValue = maxValue == 0 ? 200 : maxValue;
    maxValue = Math.ceil(maxValue / 100) * 100;
    var tmpSteps = maxValue / 20;
    var tmpRadius = radius / tmpSteps;
    var vertex = [];
    for (var i = 1; i <= tmpSteps; i++) {
        var tmpStyle = lightStyle;
        if (i % 5 == 0) {
            tmpStyle = boldStyle;
        }

        vertex.push(drawPolygon(context, datas.length, centerX, centerY, tmpRadius * i, 0, false, null, tmpStyle));
    }

    var tmpX, tmpY, tmpTextWidth;
    for (var i = 0; i < datas.length; i++) {
        tmpX = vertex[vertex.length - 1][i].x;
        tmpY = vertex[vertex.length - 1][i].y;
        switch (i) {
            case 0:
                tmpX -= fontSize;
                tmpY -= fontSize / 2;
                break;
            case 1:
                tmpX += 2;
                tmpY += fontSize / 2;
                break;
            case 2:
                tmpY += fontSize;
                break;
            case 3:
                tmpX -= tmpSpaceUnit * 2;
                tmpY += fontSize;
                break;
            case 4:
                tmpX -= fontSize * 2;
                tmpY += fontSize / 2;
                break;
        }

        context.font = fontSize + "px '微软雅黑'";
        context.fillStyle = "rgb(86,86,86)";
        context.fillText(datas[i].name, tmpX, tmpY);
        context.restore();
    }

    var tmpVertex = [];
    for (var i = 0; i < datas.length; i++) {
        var tmpIdx = Math.floor(datas[i].value / 20);
        if (tmpIdx > 0) {
            tmpVertex.push(vertex[tmpIdx - 1][i]);
        } else {
            tmpVertex.push(vertex[0][i]);
        }
    }

    context.strokeStyle = 'rgb(64,112,196)';
    context.lineWidth = 3;
    context.font = valFontSize + "px '微软雅黑'";
    context.fillStyle = "rgb(252,136,35)";
    context.beginPath();
    context.moveTo(tmpVertex[0].x, tmpVertex[0].y);
    tmpTextWidth = testTextWidth(datas[0].value, valFontSize + 'px', '', '微软雅黑', '');
    tmpX = tmpVertex[0].x - tmpTextWidth / 2;
    tmpY = tmpVertex[0].y - 3;
    context.fillText(datas[0].value, tmpX, tmpY);
    for (var i = 1; i < tmpVertex.length; i++) {
        context.lineTo(tmpVertex[i].x, tmpVertex[i].y);
        tmpTextWidth = testTextWidth(datas[i].value, valFontSize + 'px', '', '微软雅黑', '');
        switch (i) {
            case 1:
                tmpX = tmpVertex[i].x + 3;
                tmpY = tmpVertex[i].y + 3;
                break;
            case 2:
                tmpX = tmpVertex[i].x + 3;
                tmpY = tmpVertex[i].y + valFontSize / 2;
                break;
            case 3:
                tmpX = tmpVertex[i].x - tmpTextWidth - 3;
                tmpY = tmpVertex[i].y + valFontSize / 2;
                break;
            case 4:
                tmpX = tmpVertex[i].x - tmpTextWidth - 3;
                tmpY = tmpVertex[i].y + 3;
                break;
        }

        context.fillText(datas[i].value, tmpX, tmpY);
    }
    context.closePath();
    context.stroke();
};

function drawPolygon(context, n, x, y, r, a, c, fillStyle, strokeStyle) {
    var angle = a || 0;
    var counterclockwise = c || false;
    var vertex = [];
    if (fillStyle) {
        context.fillStyle = fillStyle;
    }

    if (strokeStyle) {
        context.strokeStyle = strokeStyle;
    }

    var tmpX = x + r * Math.sin(angle);
    var tmpY = y - r * Math.cos(angle);
    context.moveTo(tmpX, tmpY);
    vertex.push({ x: tmpX, y: tmpY });
    context.beginPath();
    var delta = 2 * Math.PI / n;
    for (var i = 0; i < n; i++) {
        angle += counterclockwise ? -delta : delta;
        tmpX = x + r * Math.sin(angle);
        tmpY = y - r * Math.cos(angle);
        context.lineTo(tmpX, tmpY);
        vertex.push({ x: tmpX, y: tmpY });
    }

    context.closePath();
    if (strokeStyle) {
        context.stroke();
    }

    if (fillStyle) {
        context.fill();
    }

    context.restore();
    return vertex;
};

function drawTimeGraph(data) {
    var step = drawTimeBarGraph(data.times, 'canvas_Report_Time_Time');
    var funData = { id: "canvas_Report_Time_Time", step: step };
    $('#arrow_Report_Time_Left').on('click', funData, listMovePrev);
    $('#arrow_Report_Time_Right').on('click', funData, listMoveNext);
    if ($('#canvas_Report_Time_Time').width() <= $('#container_Report_Time_Graph').width()) {
        $('.report-list-arrow.time').hide();
    }

    drawTimeBarGraph(data.times, 'canvas_Report_Time_Time');
    drawTimeCompleteRate(data.course);
};

function drawTimeCompleteRate(datas) {
    var lineWidth = 6;
    var rateFontSize = 20;
    var textFontSize = 16;
    var id = 'canvas_Report_Time_Course';
    var canvas = document.getElementById(id);
    var parent = $($(canvas).parent());
    var width = parent.width() - 45;
    var height = parent.height();
    canvas.width = Math.floor(width);
    canvas.height = Math.floor(height)
    width = (width - 20 * (datas.length - 1)) / datas.length;
    var radius = Math.floor(Math.min(width, height - textFontSize - 10) / 2) - lineWidth;

    var context = canvas.getContext('2d');
    for (var i = 0; i < datas.length; i++) {
        var centerX = (width + 20) * i + Math.floor(width / 2);
        var centerY = radius + lineWidth / 2;// Math.floor(height / 2);
        var startRadian = 0
        var endRadian = Math.PI * 2;
        context.lineWidth = lineWidth;
        context.strokeStyle = 'rgb(230,230,230)';
        context.beginPath();
        context.arc(centerX, centerY, radius, startRadian, endRadian);
        context.stroke();
        context.closePath();
        startRadian = Math.PI * 2 * 3 / 4;
        endRadian = startRadian + datas[i].rate / 100 * Math.PI * 2;
        context.strokeStyle = 'rgb(124,218,36)';
        context.beginPath();
        context.arc(centerX, centerY, radius, startRadian, endRadian);
        context.stroke();
        context.closePath();
        //context.strokeStyle = 'rgb(230,230,230)';
        //context.moveTo(width/2, 0);
        //context.lineTo(width / 2, height);
        //context.stroke();
        var tmpTextWidth = testTextWidth(datas[i].rate + '%', rateFontSize + 'px', 'bold', '微软雅黑', '');
        var tmpX = centerX - tmpTextWidth / 2;
        //if (datas[i].rate < 10) {
        //    tmpX = centerX - rateFontSize * 0.5;
        //} else {
        //    tmpX = centerX - rateFontSize * 1;
        //}

        var tmpY = centerY + rateFontSize / 2;
        context.font = "normal normal bolder " + rateFontSize + "px \"微软雅黑\"";
        context.fillStyle = "rgb(105,105,105)";
        context.fillText(datas[i].rate + '%', tmpX, tmpY);

        tmpTextWidth = testTextWidth(datas[i].name, textFontSize + 'px', 'bold', '微软雅黑', '');
        //tmpX = centerX - textFontSize * 1.5;
        tmpX = centerX - tmpTextWidth / 2;
        tmpY = radius * 2 + lineWidth + textFontSize + 10; //(height - radius * 2 - lineWidth);
        context.font = "normal normal bold " + textFontSize + "px \"微软雅黑\"";
        context.fillStyle = "rgb(61,61,61)";
        context.fillText(datas[i].name, tmpX, tmpY);
    }
};

function drawPotentialGraph(datas) {
    var shadowStyles = ['rgb(158,163,168)', 'rgb(178,182,186)', 'rgb(194,196,199)', 'rgb(209,211,213)', 'rgb(244,244,244)'];
    var titleFontSize = 14;
    var valueFontSize = 12;
    var shadowHeight = 2;
    var barCount = datas.length;
    var canvas = document.getElementById('canvas_Report_Potential');
    var parent = $($(canvas).parent());
    var width = parent.width();
    var height = parent.height();
    var barHeight = Math.max(parseInt((height - shadowHeight * barCount) / barCount), 45);
    height = barHeight * barCount;
    var maxWidth = Math.max((405 / 45) * barHeight, width - shadowHeight - 20 - titleFontSize * 2);
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, width, height);
    var startX = 10 + titleFontSize * 2 + 10;
    var barUnit = maxWidth / datas[0].value;
    context.textBaseline = "middle";
    var titleX, titleY, lineStartX, lineStartY, lineEndX, tmpBarWidth;
    for (var i = 0; i < datas.length; i++) {
        //draw title
        titleX = 10;
        titleY = (barHeight) * i + barHeight / 2 + shadowHeight;
        context.fillStyle = "rgb(74,74,74)";
        context.font = 'normal normal bolder ' + titleFontSize + "px '微软雅黑'";
        context.fillText(datas[i].name, titleX, titleY);
        context.restore();
        //draw bar
        tmpBarWidth = barUnit * datas[i].value;
        lineStartX = startX + (maxWidth - tmpBarWidth) / 2;
        lineStartY = (barHeight + shadowHeight) * i + barHeight / 2;
        lineEndX = lineStartX + tmpBarWidth;
        context.beginPath();
        context.lineWidth = barHeight;
        context.strokeStyle = 'rgb(91,155,213)';
        context.shadowColor = "rgb(195,195,195)";
        context.shadowBlur = 10;
        context.shadowOffsetX = 3;
        context.shadowOffsetY = 3;
        context.moveTo(lineStartX, lineStartY);
        context.lineTo(lineEndX, lineStartY);
        context.closePath();
        context.stroke();
        //draw Value
        titleX = startX + maxWidth / 2;
        titleX -= (datas[i].value < 10 ? valueFontSize * 0.5 : valueFontSize * 1);
        context.fillStyle = (i == 0 ? 'rgb(252,136,35)' : "rgb(255,255,255)");
        context.font = 'normal normal bolder ' + valueFontSize + "px '微软雅黑'";
        context.fillText(datas[i].value + '%', titleX, titleY);
        context.restore();
    }

    //draw Y Line
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'rgb(241,241,241)';
    context.moveTo(startX, 0);
    context.lineTo(startX, (barHeight + shadowHeight) * datas.length);
    context.closePath();
    context.stroke();
};

function adjustAttentionImg() {
    var currWidth = $('.report-attention-bakcground').parent().width();
    var position = $('.report-attention-bakcground').position();
    var headImg = $('.report-attention-header');
    var pointer = $('.report-attention-header-point');
    var rate = currWidth / 360;
    var size = rate * 60;
    var left = rate * 15 + position.left;
    var top = rate * 50 + position.top;
    headImg.width(size);
    headImg.height(size);
    headImg.css('left', left + 'px');
    headImg.css('top', top + 'px');
    size = rate * 15;
    left = left - rate * 5;
    top = top - rate * 5;
    pointer.width(size);
    pointer.height(size);
    pointer.css('left', left + 'px');
    pointer.css('top', top + 'px');
};

/*Message*/
function rebuildMesagesPanel(contentHeight) {
    clearUnreadState();
    rebuildMessageTitles(contentHeight);
    displayMessageByType('');
};

function rebuildMessageTitles(contentHeight) {
    var messageTypeMap = [
        { type: '', id: 'all', name: '全部消息', icon: 'list' },
        { type: '1', id: 'system', name: '系统消息', icon: 'desktop' },
        { type: '2', id: 'q_a', name: '问答消息', icon: 'question', }
    ];
    var height = contentHeight / messageTypeMap.length;
    var minWidth = $('#sideBar_Page_Left').width() + 550;
    if ($('body').width < minWidth) {
        $('body').width = minWidth;
    }

    $('#wrap_Category_Content').width($('body').width() - $('#sideBar_Page_Left').width() - 18);
    for (var i = 0; i < messageTypeMap.length; i++) {
        var id = 'title_Message_' + messageTypeMap[i].id + '_Title';
        var bgColor = (i == 0 ? 'rgb(237,87,138)' : 'rgb(130, 138, 142)');
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<div class="container profile-message-title" id="' + id + '" style="background-color:' + bgColor + ';" data-target="' + messageTypeMap[i].type + '">');
        tmpHTMLArr.push('   <div class="row align-items-center" id="' + id + '_Row" style="height:' + height + 'px;">');
        tmpHTMLArr.push('       <div class="col-12 text-center">');
        tmpHTMLArr.push('           <i class="fa fa-' + messageTypeMap[i].icon + '" aria-hidden="true" style="font-size:48px; cursor: pointer; color:rgb(255,255,255);"></i>');
        tmpHTMLArr.push('           <p class="overview-title-item-text" style="color:rgb(255,255,255);">' + messageTypeMap[i].name + '</p>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
        $('#wrap_Category_Title').append($(tmpHTMLArr.join('')));
    }

    $('.profile-message-title').on('click', function (eventObj) {
        var titleItems = $('.profile-message-title');
        for (var i = 0; i < titleItems.length; i++) {
            $(titleItems[i]).css('background-color', 'rgb(130,138,142)');
        }

        $(eventObj.currentTarget).css('background-color', 'rgb(237,87,138)');
        displayMessageByType($(eventObj.currentTarget).attr('data-target'));
    });
};

function displayMessageByType(type) {
    var data = [
            { id: '1', top: 1, type: '1', content: '系统消息: 欢迎来到iKCoder的编程世界！', time: '2017-10-1', answer: null },
            { id: '2', top: 1, type: '1', content: '系统消息: 课件版本已更新至最新版本！', time: '2017-10-20', answer: null },
            { id: '3', top: 1, type: '2', content: '提问: 如果在代码状态进行参数修改是否有效？', time: '2017-10-7', answer: { id: '4', type: '21', content: '解答: 你好，Alice，在代码状态进行参数修改是有效的。', time: '2017-10-8', owner: '1' } }
    ];

    var tmpDatas = data;
    if (type != '') {
        tmpDatas = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].type == type) {
                tmpDatas.push(data[i]);
            }
        }
    }

    rebuildMessageContents(tmpDatas, type);
    hideLoadingMask();
};

function rebuildMessageContents(data, type) {
    var tmpHeight = $('.container-fluid.left-sidebar-wrap').height();
    $('#wrap_Category_Content').empty();
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid wrap-message-section" style="background-color:rgb(255,255,255); border-left: solid 5px rgb(237,87,138); height: ' + tmpHeight + 'px;">');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col-12 no-padding">');
    tmpHTMLArr.push('           <div class="container-fluid wrap-message-items no-padding" style="background-color:rgb(255,255,255);">');
    tmpHTMLArr.push('               <div class="row no-margin">');
    tmpHTMLArr.push('                   <div class="col-12 no-padding">');
    tmpHTMLArr.push('                       <table class="table table-striped">');
    tmpHTMLArr.push('                           <tbody>');
    if (type == '2') {
        tmpHTMLArr.push('                               <tr>');
        tmpHTMLArr.push('                                   <th></th>');
        tmpHTMLArr.push('                                   <td class="" colspan="2" style="padding:5px;vertical-align:middle;">');
        tmpHTMLArr.push('            <form>');
        tmpHTMLArr.push('                <div class="form-group row" style="margin:0px;">');
        tmpHTMLArr.push('                    <div class="col-12">');
        tmpHTMLArr.push('                        <input type="text" class="form-control" id="txt_Message_QA_Input" placeholder="请输入问题">');
        tmpHTMLArr.push('                    </div>');
        tmpHTMLArr.push('                </div>');
        tmpHTMLArr.push('            </form>');
        tmpHTMLArr.push('                                   </td>');
        tmpHTMLArr.push('                                   <td class="profile-message-remove-button"><button type="button" class="btn btn-primary" id="btn_Message_QA_Input">提问</button></td>');
        tmpHTMLArr.push('                               </tr>');
    }

    for (var i = 0; i < data.length; i++) {
        var tHeader = '';
        var contentCss = '';
        if (data[i].top == '1' || data[i].isread == '0') {
            if (data[i].top == '1') {
                tHeader = '<i class="fa fa-exclamation profile-message-top-symbol"></i>';
            }

            contentCss = 'profile-message-top-content';
        }

        tmpHTMLArr.push('                               <tr>');
        tmpHTMLArr.push('                                   <th>' + tHeader + '</th>');
        tmpHTMLArr.push('                                   <td class="' + contentCss + '">' + data[i].content + '</td>');
        tmpHTMLArr.push('                                   <td class="profile-message-date-text">' + data[i].time + '</td>');
        tmpHTMLArr.push('                                   <td class="profile-message-remove-button" data-msgid="' + data[i].id + '" data-optid="' + data[i].optid + '"><i class="fa fa-remove"></i></td>');
        tmpHTMLArr.push('                               </tr>');
        if (data[i].type == '2' && data[i].answer) {
            tmpHTMLArr.push('                               <tr>');
            tmpHTMLArr.push('                                   <th></th>');
            tmpHTMLArr.push('                                   <td class="profile-message-answer-text" style="padding-left:50px;">' + data[i].answer.content + '</td>');
            tmpHTMLArr.push('                                   <td class="profile-message-date-text">' + data[i].answer.time + '</td>');
            tmpHTMLArr.push('                                   <td></td>');
            tmpHTMLArr.push('                               </tr>');
        }
    }

    tmpHTMLArr.push('                           </tbody>');
    tmpHTMLArr.push('                       </table>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');

    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
    $('.profile-message-remove-button').on('click', function (eventObj) {
        _registerRemoteServer();
        $.ajax({
            type: 'GET',
            async: true,
            url: _getRequestURL(_gURLMapping.bus.removemsg, { id: eventObj.target.attr('data-msgid'), operationid: eventObj.target.attr('data-optid') }), //ID=MESSAGEID OPERATIONID=OPERATONID
            data: '<root></root>',
            success: function (responseData, status) {
                if ($(responseData).find('err').length > 0) {
                    _showGlobalMessage($(responseData).find('err').attr('msg'), 'danger', 'alert_RemoveMessages_Error');
                    return;
                } else {
                    $(eventObj.target).parent().parent().remove();
                }
            },
            dataType: 'xml',
            xhrFields: {
                withCredentials: true
            },
            error: function () {
                _showGlobalMessage('无法删除消息，请联系技术支持！', 'danger', 'alert_RemoveMessages_Error');
            }
        });
    });
    $('#btn_Message_QA_Input').on('click', function () {
        _showGlobalMessage('功能演示版本，不支持数据修改！', 'warning', 'alert_ForgetPWD_Success');
    });
};

function clearUnreadState() {
    $('.left-bar-message-count').text('0');
    //$('.left-bar-message-count').hide();
    $('.left-bar-message-count').css('background-color', 'rgb(185,185,185)');
};

/*Homework*/
var _currentHomeWorkItem = null;
function rebuildHomeworkPanel(contentHeight) {
    clearUncompleteState();
    rebuildHomeworkTitles(contentHeight);
    displayHomeworkByType('1');
};

function rebuildHomeworkTitles(contentHeight) {
    var homeworkTypeMap = [
        { type: '1', id: 'objective', name: '客观题', icon: 'question' },
        { type: '2', id: 'experimental', name: '实验题', icon: 'flask' }
    ];
    var height = contentHeight / homeworkTypeMap.length;
    var minWidth = $('#sideBar_Page_Left').width() + 550;
    if ($('body').width < minWidth) {
        $('body').width = minWidth;
    }

    $('#wrap_Category_Content').width($('body').width() - $('#sideBar_Page_Left').width() - 18);
    for (var i = 0; i < homeworkTypeMap.length; i++) {
        var id = 'title_Homework_' + homeworkTypeMap[i].id + '_Title';
        var bgColor = (i == 0 ? 'rgb(237,87,138)' : 'rgb(130, 138, 142)');
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<div class="container profile-homework-title" id="' + id + '" style="background-color:' + bgColor + ';" data-target="' + homeworkTypeMap[i].type + '">');
        tmpHTMLArr.push('   <div class="row align-items-center" id="' + id + '_Row" style="height:' + height + 'px;">');
        tmpHTMLArr.push('       <div class="col-12 text-center">');
        tmpHTMLArr.push('           <i class="fa fa-' + homeworkTypeMap[i].icon + '" aria-hidden="true" style="font-size:48px; cursor: pointer; color:rgb(255,255,255);"></i>');
        tmpHTMLArr.push('           <p class="overview-title-item-text" style="color:rgb(255,255,255);">' + homeworkTypeMap[i].name + '</p>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
        $('#wrap_Category_Title').append($(tmpHTMLArr.join('')));
    }

    $('.profile-homework-title').on('click', function (eventObj) {
        var titleItems = $('.profile-homework-title');
        for (var i = 0; i < titleItems.length; i++) {
            $(titleItems[i]).css('background-color', 'rgb(130,138,142)');
        }

        $(eventObj.currentTarget).css('background-color', 'rgb(237,87,138)');
        displayHomeworkByType($(eventObj.currentTarget).attr('data-target'));
    });
};

function displayHomeworkByType(type) {
    var data = [
        {
            id: '1',
            type: '1',
            date: '2017-10-1',
            teacher: 'Teacher 1',
            status: '0',
            title: 'B-01-001: 模式识别',
            total: 6,
            correct: 2,
            incorrect: 1
        },
        {
            id: '2',
            type: '1',
            date: '2017-10-2',
            teacher: 'Teacher 2',
            status: '1',
            title: 'B-01-002: 路径识别',
            total: 5,
            correct: 5,
            incorrect: 0
        },
        {
            id: '3',
            type: '2',
            date: '2017-10-2',
            teacher: 'Teacher 2',
            status: '',
            title: 'B-01-001: 模式识别',
            content: 'Experimental topics 1, Content of experimental topics.',
            attach: ['image/tankback.jpg', 'image/TrailBack.png', 'image/gaosiback.jpg', 'image/ikcoderkid.png'],
            correct: "",
            incorrect: ""
        }
    ];

    var tmpDatas = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].type == type) {
            tmpDatas.push(data[i]);
        }
    }

    rebuildHomeworkContents(tmpDatas, type);
    hideLoadingMask();
};

function rebuildHomeworkContents(data, type) {
    $('#wrap_Category_Content').empty();
    var tmpHTMLArr = [];
    var tHeader = '';
    var blockPadding = 10;
    tmpHTMLArr.push('<div class="container-fluid wrap-homework-section" style="background-color:rgb(255,255,255); height:100%; border-left: solid 5px rgb(237,87,138);">');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col-12 no-padding">');
    tmpHTMLArr.push('           <div class="container-fluid wrap-homework-items no-padding" style="background-color:rgb(255,255,255);">');
    tmpHTMLArr.push('               <div class="row no-margin">');
    tmpHTMLArr.push('                   <div class="col-12 no-padding" id="wrap_col_profile_homework_items" style="overflow:auto;">');
    tmpHTMLArr.push('                       <div id="accordion" role="tablist">');
    for (var i = 0; i < data.length; i++) {
        if (type == '1') {
            tHeader = '<i class="fa fa-pause profile-homework-top-symbol uncomplete" id="icon_Homework_Item_Header_' + data[i].id + '"></i>';
            if (data[i].status == '1') {
                tHeader = '<i class="fa fa-check profile-homework-top-symbol complete"></i>';
            }
            blockPadding = 0;
        } else {
            tHeader = '<i class="fa fa-flask profile-homework-top-symbol complete"></i>';
            blockPadding = 10;
        }

        tmpHTMLArr.push('<div class="card" style="border-radius: 0px;">');
        tmpHTMLArr.push('   <div class="card-header" role="tab" id="heading_' + data[i].id + '" style="padding:0px;">');
        tmpHTMLArr.push('       <table class="table table-striped" style="margin-bottom: 0px;">');
        tmpHTMLArr.push('           <tbody>');
        tmpHTMLArr.push('               <tr>');
        tmpHTMLArr.push('                   <th>' + tHeader + '</th>');
        tmpHTMLArr.push('                   <td><a data-toggle="collapse" href="#collapse_' + data[i].id + '" aria-expanded="true" aria-controls="collapse_' + data[i].id + '">' + data[i].title + '</a></td>');
        tmpHTMLArr.push('                   <td class="profile-message-date-text">' + data[i].date + '</td>');
        tmpHTMLArr.push('                   <td class="profile-message-date-text">' + data[i].teacher + '</td>');
        if (type == '1') {
            tmpHTMLArr.push('                   <td class="profile-message-date-text homework-item-correct-count-' + data[i].id + '" style="min-width:20px; color: rgb(34,139,34);"><i class="fa fa-check"></i><span>' + data[i].correct + '</span></td>');
            tmpHTMLArr.push('                   <td class="profile-message-date-text homework-item-question-count-' + data[i].id + '" style="min-width:20px; color: rgb(243,151,0);"><i class="fa fa-question"></i><span>' + (data[i].total - data[i].incorrect - data[i].correct) + '</span</td>');
            tmpHTMLArr.push('                   <td class="profile-message-date-text homework-item-incorrect-count-' + data[i].id + '" style="min-width:20px; color: rgb(255,0,0);"><i class="fa fa-remove"></i><span>' + data[i].incorrect + '</span</td>');
        }

        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('           </tbody>');
        tmpHTMLArr.push('       </table>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div id="collapse_' + data[i].id + '" class="collapse profile-homework-item" role="tabpanel" aria-labelledby="heading_' + data[i].id + '" data-parent="#accordion" data-target="' + type + '|' + data[i].id + '">');
        tmpHTMLArr.push('       <div class="card-block" id="wrap_profile_homework_card_block_' + data[i].id + '" style="padding:' + blockPadding + 'px; border: solid 2px rgb(188, 188, 188);;">');
        if (type == '2') {
            tmpHTMLArr.push('       <table class="table table-sm" style="margin-bottom: 0px;font-size: 14px;">');
            tmpHTMLArr.push('           <tbody>');
            if (data[i].attach.length > 0) {
                tmpHTMLArr.push('               <tr>');
                tmpHTMLArr.push('                   <td class="profile-message-date-text" style="font-weight:bold; border: none;background-color: orange;border-radius: 10px; padding-left: 20px;">');
                tmpHTMLArr.push('                       <a href="#" id="lbtn_profile_homework_attach" data-target="' + data[i].id + '">共有' + data[i].attach.length + '个附件，点击查看。</a>');
                tmpHTMLArr.push('                   </td>');
                tmpHTMLArr.push('               <tr>');
            }
            tmpHTMLArr.push('               <tr>');
            tmpHTMLArr.push('                   <td class="profile-message-date-text" style="border: none;">' + data[i].content + '</td>');
            tmpHTMLArr.push('               <tr>');
            tmpHTMLArr.push('           <tbody>');
            tmpHTMLArr.push('       <table class="table" style="margin-bottom: 0px;">');
        }

        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
    }
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');

    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
    //$('#wrap_col_profile_exam_items').height($('#sideBar_Page_Left').height() + 16);
    var wrapSection = $('.container-fluid.wrap-homework-section');
    var wrapItems = $('.container-fluid.wrap-homework-items');
    var expTitleRow = $('#title_Homework_experimental_Title_Row');
    var tmpHeight = $('.container-fluid.left-sidebar-wrap').height();
    if (wrapSection.height() < tmpHeight) {
        wrapSection.height(tmpHeight);
    }
    //$('#wrap_col_profile_homework_items').height($('.container-fluid.wrap-homework-section').height());
    $('#lbtn_profile_homework_attach').on('click', function () {
        var dataId = $(arguments[0].target).attr('data-target');
        var attachs = [];
        for (var i = 0; i < data.length; i++) {
            if (dataId == data[i].id) {
                attachs = data[i].attach;
            }
        }

        showHomeworkAttachs(attachs);
    });

    if (type == '1') {
        var tmpItem = $('.collapse.profile-homework-item');
        tmpItem.on('show.bs.collapse', function () {
            var itemDetail = $(arguments[0].target).attr('data-target').split('|');
            if (itemDetail[0] == '1') {
                loadHomeworkById(itemDetail[1]);
            }
        });

        tmpItem.on('shown.bs.collapse', function () {
            wrapSection.height(Math.max(wrapItems.height(), tmpHeight));
            expTitleRow.height(expTitleRow.height() + Math.abs(wrapItems.height() - tmpHeight));
        });

        tmpItem.on('hidden.bs.collapse', function () {
            wrapSection.height(Math.max(wrapItems.height(), tmpHeight));
            expTitleRow.height(tmpHeight / 2);
        });
    }
};

function loadHomeworkById(itemId) {
    _currentHomeWorkItem = [
        {
            id: '1',
            content: 'Objective Questions 1',
            correct: ['1'],
            options: [
                { id: '1', content: 'Option 1' },
                { id: '2', content: 'Option 2' },
                { id: '3', content: 'Option 3' }
            ],
            answer: ['1']
        }, {
            id: '2',
            content: 'Objective Questions 2',
            correct: ['5', '6'],
            options: [
                { id: '4', content: 'Option 4' },
                { id: '5', content: 'Option 5' },
                { id: '6', content: 'Option 6' }
            ],
            answer: ['5']
        }, {
            id: '3',
            content: 'Objective Questions 3',
            correct: ['25'],
            options: [
                { id: '24', content: 'Option 24' },
                { id: '25', content: 'Option 25' },
                { id: '26', content: 'Option 26' }
            ],
            answer: ['25']
        }, {
            id: '4',
            content: 'Objective Questions 4',
            correct: ['7', '8', '9', '10'],
            options: [
                { id: '7', content: 'Option 7' },
                { id: '8', content: 'Option 8' },
                { id: '9', content: 'Option 9' },
                { id: '10', content: 'Option 10' }
            ],
            answer: []
        }, {
            id: '5',
            content: 'Objective Questions 5',
            correct: ['12'],
            options: [
                { id: '11', content: 'Option 11' },
                { id: '12', content: 'Option 12' },
                { id: '13', content: 'Option 13' }
            ],
            answer: []
        }, {
            id: '6',
            content: 'Objective Questions 6',
            correct: ['14', '16'],
            options: [
                { id: '14', content: 'Option 14' },
                { id: '15', content: 'Option 15' },
                { id: '16', content: 'Option 16' },
                { id: '17', content: 'Option 17' }
            ],
            answer: []
        }
    ];
    if (itemId != '1') {
        _currentHomeWorkItem = [
            {
                id: '1',
                content: 'Objective Questions 1',
                correct: ['1'],
                options: [
                    { id: '1', content: 'Option 1' },
                    { id: '2', content: 'Option 2' },
                    { id: '3', content: 'Option 3' }
                ],
                answer: ['1']
            }, {
                id: '2',
                content: 'Objective Questions 2',
                correct: ['5', '6'],
                options: [
                    { id: '4', content: 'Option 4' },
                    { id: '5', content: 'Option 5' },
                    { id: '6', content: 'Option 6' }
                ],
                answer: ['5', '6'],
            }, {
                id: '3',
                content: 'Objective Questions 3',
                correct: ['25'],
                options: [
                    { id: '24', content: 'Option 24' },
                    { id: '25', content: 'Option 25' },
                    { id: '26', content: 'Option 26' }
                ],
                answer: ['25']
            }, {
                id: '4',
                content: 'Objective Questions 4',
                correct: ['7', '8', '9', '10'],
                options: [
                    { id: '7', content: 'Option 7' },
                    { id: '8', content: 'Option 8' },
                    { id: '9', content: 'Option 9' },
                    { id: '10', content: 'Option 10' }
                ],
                answer: ['7', '8', '9', '10']
            }, {
                id: '5',
                content: 'Objective Questions 5',
                correct: ['12'],
                options: [
                    { id: '11', content: 'Option 11' },
                    { id: '12', content: 'Option 12' },
                    { id: '13', content: 'Option 13' }
                ],
                answer: ['12']
            }
        ];
    }

    var data = _currentHomeWorkItem;
    var wrap = $('#wrap_profile_homework_card_block_' + itemId);
    wrap.empty();
    var tmpHTMLArr = [];
    var btnTemplate = '<button type="button" class="btn btn-%btntype% btn-sm btn-submit-homework-item" id="btn_homework_item_%itemsymbol%" data-correct="%datacorrect%" data-symbols="%datasymbol%">提交</button>';
    var tHeader = '';
    var tButton = '';
    var chkName = '';
    var chkId = '';
    var checkAnswer = false;
    var tmpChecked = false;
    tmpHTMLArr.push('<table class="table table-striped">');
    tmpHTMLArr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tHeader = '';
        tButton = '';
        checkAnswer = false;
        if (data[i].answer.length == 0) {
            tHeader = '<i class="fa fa-question profile-homework-top-symbol uncomplete" id="i_status_homework_item_' + itemId + '_' + data[i].id + '"></i>';
            tButton = btnTemplate.replace('%itemsymbol%', itemId + '_' + data[i].id).replace('%btntype%', 'warning').replace('%datacorrect%', data[i].correct.join('|')).replace('%datasymbol%', itemId + '|' + data[i].id);
        } else {
            checkAnswer = checkAnswersDo(data[i].answer, data[i].correct);
            if (checkAnswer) {
                tHeader = '<i class="fa fa-check profile-homework-top-symbol complete" id="i_status_homework_item_' + itemId + '_' + data[i].id + '"></i>';
            } else {
                tHeader = '<i class="fa fa-remove profile-homework-top-symbol incorrect" id="i_status_homework_item_' + itemId + '_' + data[i].id + '"></i>';
                tButton = btnTemplate.replace('%itemsymbol%', itemId + '_' + data[i].id).replace('%btntype%', 'danger').replace('%datacorrect%', data[i].correct.join('|')).replace('%datasymbol%', itemId + '|' + data[i].id);
            }
        }

        tmpHTMLArr.push('<tr>');
        tmpHTMLArr.push('   <td style="padding: 5px 10px;">');
        tmpHTMLArr.push('       <table style="border: none; width:100%;">');
        tmpHTMLArr.push('           <tbody style="border: none;">');
        tmpHTMLArr.push('               <tr style="border: none;background-color: transparent;">');
        tmpHTMLArr.push('                   <th style="padding: 5px 10px;border: none; width:50px; ">' + (i + 1) + '</th>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; font-size:15px;">' + data[i].content + '</td>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; width:50px;">' + tHeader + '</td>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; width:80px;">' + tButton + '</td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('               <tr style="border: none;">');
        tmpHTMLArr.push('                   <th style="padding: 5px 10px;border: none;"></th>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none;" col-spac="3">');
        tmpHTMLArr.push('                       <form>');
        if (checkAnswer) {
            tmpHTMLArr.push('                           <fieldset class="form-group" id="fs_homework_item_' + itemId + '_' + data[i].id + '" style="margin:0px;" disabled>');
        } else {
            tmpHTMLArr.push('                           <fieldset class="form-group" id="fs_homework_item_' + itemId + '_' + data[i].id + '" style="margin:0px;">');
        }

        for (var j = 0; j < data[i].options.length; j++) {
            chkName = 'chk-homework-item-' + itemId + '-' + data[i].id;
            chkId = 'chk_Homework_Item_' + itemId + '_' + data[i].id + '_' + j;
            tmpHTMLArr.push('                           <div class="form-check" style="margin:0px;">');
            tmpHTMLArr.push('                               <label class="form-check-label" style="font-size:14px;">');
            tmpChecked = false;
            for (var k = 0; k < data[i].answer.length; k++) {
                if (data[i].answer[k] == data[i].options[j].id) {
                    tmpChecked = true;
                    break;
                }
            }

            if (tmpChecked) {
                tmpHTMLArr.push('                                   <input type="checkbox" class="form-check-input" name="' + chkName + '" id="' + chkId + '" value="' + data[i].options[j].id + '" checked>');
            } else {
                tmpHTMLArr.push('                                   <input type="checkbox" class="form-check-input" name="' + chkName + '" id="' + chkId + '" value="' + data[i].options[j].id + '">');
            }
            tmpHTMLArr.push('                                   <span style="padding-left:10px;">' + data[i].options[j].content + '</span>');
            tmpHTMLArr.push('                               </label>');
            tmpHTMLArr.push('                           </div>');
        }

        tmpHTMLArr.push('                           </fieldset>');
        tmpHTMLArr.push('                       </form>');
        tmpHTMLArr.push('                   </td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('           </tbody>');
        tmpHTMLArr.push('       </table>');
        tmpHTMLArr.push('   </td>');
        tmpHTMLArr.push('</tr>');
    }

    tmpHTMLArr.push('   </tbody>');
    tmpHTMLArr.push('</table>');
    wrap.append($(tmpHTMLArr.join('')));
    $('.btn.btn-sm.btn-submit-homework-item').on('click', function () {
        var target = $(arguments[0].target);
        var itemSymbol = target.attr('data-symbols').split('|');
        var correct = target.attr('data-correct').split('|');
        var answer = [];
        $("[name='chk-homework-item-" + itemSymbol[0] + "-" + itemSymbol[1] + "']").each(function () {
            if ($(this).is(':checked')) {
                answer.push($(this).val());
            }
        });

        for (var i = 0; i < _currentHomeWorkItem.length; i++) {
            if (_currentHomeWorkItem[i].id == itemSymbol[1]) {
                _currentHomeWorkItem[i].answer = answer;
                break;
            }
        }

        var checkResult = checkAnswersDo(answer, correct);
        resetHWCmpsStatus(itemSymbol[0], itemSymbol[1], checkResult);
        resetHWStatusCounts(itemSymbol[0]);
    });
};

function resetHWCmpsStatus(itemId, subId, checkResult) {
    var itemIcon = $('#i_status_homework_item_' + itemId + "_" + subId);
    var itemBtn = $('#btn_homework_item_' + itemId + "_" + subId);
    if (checkResult == null) {
        itemBtn.removeClass('btn-danger');
        itemBtn.addClass('btn-warning');
        itemIcon.removeClass('fa-remove');
        itemIcon.addClass('fa-question');
        itemIcon.removeClass('incorrect');
        itemIcon.addClass('uncomplete');
    } else if (checkResult === true) {
        $('#fs_homework_item_' + itemId + "_" + subId).attr('disabled', '1');
        itemBtn.remove();
        itemIcon.removeClass('fa-question');
        itemIcon.removeClass('fa-remove');
        itemIcon.addClass('fa-check');
        itemIcon.removeClass('uncomplete');
        itemIcon.removeClass('incorrect');
        itemIcon.addClass('complete');
    } else {
        itemBtn.removeClass('btn-warning');
        itemBtn.addClass('btn-danger');
        itemIcon.removeClass('fa-question');
        itemIcon.addClass('fa-remove');
        itemIcon.removeClass('uncomplete');
        itemIcon.addClass('incorrect');
    }
};

function resetHWStatusCounts(itemId) {
    var cCount = 0;
    var iCount = 0;
    for (var i = 0; i < _currentHomeWorkItem.length; i++) {
        if (_currentHomeWorkItem[i].answer.length > 0) {
            if (checkAnswersDo(_currentHomeWorkItem[i].answer, _currentHomeWorkItem[i].correct)) {
                cCount++;
            } else {
                iCount++;
            }
        }
    }

    $('.profile-message-date-text.homework-item-correct-count-' + itemId + ' span').text(cCount);
    $('.profile-message-date-text.homework-item-question-count-' + itemId + ' span').text(_currentHomeWorkItem.length - cCount - iCount);
    $('.profile-message-date-text.homework-item-incorrect-count-' + itemId + ' span').text(iCount);

    if (cCount == _currentHomeWorkItem.length) {
        var tmpHeaderIcon = $('#icon_Homework_Item_Header_' + data[i].id);
        tmpHeaderIcon.removeClass('pause');
        tmpHeaderIcon.addClass('check');
        tmpHeaderIcon.removeClass('uncomplete');
        tmpHeaderIcon.addClass('complete');
    }
};

function checkAnswersDo(answer, correct) {
    if (answer.length == 0) {
        return null;
    }

    var cCount = correct.length;
    for (var i = 0; i < correct.length; i++) {
        for (var j = 0; j < answer.length; j++) {
            if (answer[j] == correct[i]) {
                cCount--;
                break;
            }
        }
    }

    return (cCount == 0 ? true : false);
}

function clearUncompleteState() {
    $('.left-bar-homework-count').css('background-color', 'rgb(185,185,185)');
    //$('.left-bar-homework-count').hide();
};

function showHomeworkAttachs(attachs) {
    if ($('#modal_Profile_HW_Attachs').length == 0) {
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<div class="modal fade" id="modal_Profile_HW_Attachs" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;max-width: 70%; max-height: 70%;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title" id="exampleModalLabel">题目附件</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('                <div id="carousel_Profile_HW_Attachs" class="carousel slide" data-ride="carousel" data-interval="90000" data-keyboard="true" data-wrap="false" data-ride="true">');
        tmpHTMLStr.push('                    <div class="carousel-inner">');
        tmpHTMLStr.push('                    </div>');
        tmpHTMLStr.push('                    <a class="carousel-control-prev" href="#carousel_Profile_HW_Attachs" role="button" data-slide="prev">');
        tmpHTMLStr.push('                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>');
        tmpHTMLStr.push('                        <span class="sr-only" style="color:darkred">Previous</span>');
        tmpHTMLStr.push('                    </a>');
        tmpHTMLStr.push('                    <a class="carousel-control-next" href="#carousel_Profile_HW_Attachs" role="button" data-slide="next">');
        tmpHTMLStr.push('                        <span class="carousel-control-next-icon" aria-hidden="true"></span>');
        tmpHTMLStr.push('                        <span class="sr-only">Next</span>');
        tmpHTMLStr.push('                    </a>');
        tmpHTMLStr.push('                </div>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
        $('#carousel_Profile_HW_Attachs .carousel-inner').empty();
        var tmpItemStr = '';
        for (var i = 0; i < attachs.length; i++) {
            if (i == 0) {
                tmpItemStr += '<div class="carousel-item active">';
            } else {
                tmpItemStr += '<div class="carousel-item">';
            }

            tmpItemStr += '<img class="d-block w-100" src="' + attachs[i] + '" alt="Second slide">';
            tmpItemStr += '</div>';
        }
        $('#carousel_Profile_HW_Attachs .carousel-inner').append($(tmpItemStr));

    }

    $('#modal_Profile_HW_Attachs').modal('show');
};

/*Exam*/
var _currentExamItem = null;
function rebuildExamPanel(contentHeight) {
    clearUncompleteState();
    rebuildExamTitles(contentHeight);
    displayExamContent();
};

function rebuildExamTitles(contentHeight) {
    $('#wrap_Category_Title').hide();
    $('#wrap_Category_Content').removeClass('col-9');
    $('#wrap_Category_Content').addClass('col-12');
};

function displayExamContent() {
    _currentExamItem = {
        id: '1',
        date: '2017-10-3',
        time: 20,
        teacher: 'Teacher 1',
        title: 'B-01-001: 模式识别',
        total: 6,
        correct: 0,
        incorrect: 0,
        items: [
            {
                id: '1',
                content: 'Objective Questions 1',
                correct: ['1'],
                options: [
                    { id: '1', content: 'Option 1' },
                    { id: '2', content: 'Option 2' },
                    { id: '3', content: 'Option 3' }
                ],
                answer: []
            }, {
                id: '2',
                content: 'Objective Questions 2',
                correct: ['5', '6'],
                options: [
                    { id: '4', content: 'Option 4' },
                    { id: '5', content: 'Option 5' },
                    { id: '6', content: 'Option 6' }
                ],
                answer: []
            }, {
                id: '3',
                content: 'Objective Questions 3',
                correct: ['25'],
                options: [
                    { id: '24', content: 'Option 24' },
                    { id: '25', content: 'Option 25' },
                    { id: '26', content: 'Option 26' }
                ],
                answer: []
            }, {
                id: '4',
                content: 'Objective Questions 4',
                correct: ['7', '8', '9', '10'],
                options: [
                    { id: '7', content: 'Option 7' },
                    { id: '8', content: 'Option 8' },
                    { id: '9', content: 'Option 9' },
                    { id: '10', content: 'Option 10' }
                ],
                answer: []
            }
        ]
    };

    rebuildExamContents();
    hideLoadingMask();
};

function rebuildExamContents() {
    $('#wrap_Category_Content').empty();
    var tmpHTMLArr = [];
    var tHeader = '';
    var data = _currentExamItem;
    var blockPadding = 10;
    tmpHTMLArr.push('<div class="container-fluid wrap-exam-section" style="background-color:rgb(255,255,255); height:100%;">');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col-12 no-padding">');
    tmpHTMLArr.push('           <div class="container-fluid wrap-exam-items no-padding" style="background-color:rgb(255,255,255);">');
    tmpHTMLArr.push('               <div class="row no-margin">');
    tmpHTMLArr.push('                   <div class="col-12 no-padding" id="wrap_col_profile_exam_items" style="overflow:auto;">');
    tmpHTMLArr.push('                       <div class="card" style="border-radius: 0px;">');
    tmpHTMLArr.push('                           <div class="card-header" role="tab" id="heading_' + data.id + '" style="padding:0px;">');
    tmpHTMLArr.push('                               <table class="table table-striped" style="margin-bottom: 0px;">');
    tmpHTMLArr.push('                                   <tbody>');
    tmpHTMLArr.push('                                       <tr>');
    tmpHTMLArr.push('                                           <th style="width: 50px; padding-left:20px;line-height: 20px;">');
    tmpHTMLArr.push('                                               <i class="fa fa-lg fa-superscript profile-homework-top-symbol complete"></i>');
    tmpHTMLArr.push('                                           </th>');
    tmpHTMLArr.push('                                           <td><p style="font-weight:bold; color: rgb(47, 168, 225)">' + data.title + '</p></td>');
    tmpHTMLArr.push('                                           <td class="profile-exam-date-text">' + data.date + '</td>');
    tmpHTMLArr.push('                                           <td class="profile-exam-date-text" id="td_Profile_Exam_Timer">');
    tmpHTMLArr.push('                                               <button type="button" class="btn btn-sm btn-success" id="btn_Profile_Exam_Begin">开始测试</button>');
    tmpHTMLArr.push('                                           </td>');
    tmpHTMLArr.push('                                           <td class="profile-exam-date-text" style="width: 100px;">');
    tmpHTMLArr.push('                                               <button type="button" class="btn btn-sm btn-warning" id="btn_Profile_Exam_Submit" style="display:none;">完成测试</button>');
    tmpHTMLArr.push('                                           </td>');
    tmpHTMLArr.push('                                           <td class="profile-exam-date-text" style="min-width:20px; color: rgb(34,139,34); display:none;">');
    tmpHTMLArr.push('                                               <i class="fa fa-check"></i><span class="exam-item-correct-count"></span>');
    tmpHTMLArr.push('                                           </td>');
    tmpHTMLArr.push('                                           <td class="profile-exam-date-text" style="min-width:20px; color: rgb(255,0,0);display:none;">');
    tmpHTMLArr.push('                                               <i class="fa fa-remove"></i><span class="exam-item-incorrect-count"></span>');
    tmpHTMLArr.push('                                           </td>');
    tmpHTMLArr.push('                                       </tr>');
    tmpHTMLArr.push('                                   </tbody>');
    tmpHTMLArr.push('                               </table>');
    tmpHTMLArr.push('                           </div>');
    tmpHTMLArr.push('                           <div id="collapse_exam_' + data.id + '" class="collapse profile-exam-item" role="tabpanel" aria-labelledby="heading_exam_' + data.id + '" data-parent="#accordion">');
    tmpHTMLArr.push('                               <div class="card-block" id="wrap_profile_exam_card_block_' + data.id + '" style="padding: 0px; border: solid 2px rgb(188, 188, 188);;">');
    loadExamItems(tmpHTMLArr);
    tmpHTMLArr.push('                               </div>');
    tmpHTMLArr.push('                           </div>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');

    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
    //$('#wrap_col_profile_exam_items').height($('#sideBar_Page_Left').height() + 16);
    var tmpHeight = $('.container-fluid.left-sidebar-wrap').height();
    if ($('.container-fluid.wrap-exam-section').height() < tmpHeight) {
        $('.container-fluid.wrap-exam-section').height(tmpHeight);
    }

    $('#btn_Profile_Exam_Begin').on('click', function () {
        beginExam(data.time, 'collapse_exam_' + data.id);
    });
};

function formatTimeForTiming(seconds, type) {
    var mins = 0;
    var secs = 0;
    if (type == 1) {
        if (seconds < 0) {
            var wrap = $('#span_Profile_Exam_Time');
            var times = wrap.text().split(':');
            seconds = parseInt(times[0]) * 60 + parseInt(times[1]) - 1;
        }
    } else {
        var wrap = $('#span_Profile_Exam_Time');
        var times = wrap.text().split(':');
        var pSecs = parseInt(times[0]) * 60 + parseInt(times[1]);
        if (type == 2) {
            seconds = seconds - pSecs;
        } else {
            seconds = pSecs;
        }
    }

    var mins = parseInt(seconds / 60);
    var secs = seconds % 60;
    var retVal = {
        min: mins,
        sec: secs,
        text: (mins < 10 ? '0' + mins : mins) + ':' + (secs < 10 ? '0' + secs : secs)
    };

    return retVal;
};

var _gTimeoutSymbol = 0;
function beginExam(startTime, collapseId) {
    if ($('#span_Profile_Exam_Time').length == 0) {
        $('#td_Profile_Exam_Timer').empty();
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<i class="fa fa-spinner fa-pulse fa-lg fa-fw timer-profile-exam-progress"></i>');
        tmpHTMLArr.push('<span id="span_Profile_Exam_Time" style="padding-left:10px;">' + formatTimeForTiming(startTime * 60, 1).text + '</span>');
        $('#td_Profile_Exam_Timer').append($(tmpHTMLArr.join('')));
        $('#btn_Profile_Exam_Submit').show();
        $('#' + collapseId).addClass('show');
        $('#btn_Profile_Exam_Submit').on('click', function () {
            var text = formatTimeForTiming(startTime * 60, 3).text;
            var tmpAlertStr = [];
            tmpAlertStr.push('<div class="alert alert-warning" id="alert_Profile_Exam_MoreTimeLeft" role="alert">');
            tmpAlertStr.push('  <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.');
            tmpAlertStr.push('  <button type="button" class="btn btn-primary">Primary</button>');
            tmpAlertStr.push('  <button type="button" class="btn btn-success">success</button>');
            tmpAlertStr.push('</div>');
            $('body').append(tmpAlertStr.join(''));
            completeExam(startTime * 60);
        });
    }

    var timerObj = formatTimeForTiming(-1, 1);
    $('#span_Profile_Exam_Time').text(timerObj.text);
    if (timerObj.min <= 0 && timerObj.sec <= 0) {
        window.clearTimeout(_gTimeoutSymbol);
        $('#form_Profile_Exam').find('fieldset').prop('disabled', true);
    } else {
        _gTimeoutSymbol = window.setTimeout('beginExam();', 1000);
    }
}

function completeExam(totalTime) {
    window.clearTimeout(_gTimeoutSymbol);
    $('#form_Profile_Exam').find('fieldset').prop('disabled', true);
    $('.timer-profile-exam-progress').removeClass('fa-pulse');
    //$('#btn_Profile_Exam_Submit').hide();
    $('#btn_Profile_Exam_Submit').parent().remove();
    var timerObj = formatTimeForTiming(totalTime, 2);
    $('#td_Profile_Exam_Timer').empty();
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<i class="fa fa-clock-o fa-pulse fa-lg fa-fw timer-profile-exam-progress" style="color:rgb(34,139,34);"></i>');
    tmpHTMLArr.push('<span id="span_Profile_Exam_Time_Cost" style="padding-left:10px;">共用时:' + timerObj.text + '</span>');
    $('#td_Profile_Exam_Timer').append($(tmpHTMLArr.join('')));

    var answerFileds = $('#form_Profile_Exam fieldset');
    var subjectId = '';
    var inputs = [];
    var answers = [];
    var retCorrect = 0;
    var retTotal = _currentExamItem.items.length;
    for (var i = 0; i < answerFileds.length; i++) {
        subjectId = $(answerFileds[i]).attr('data-target');
        for (var j = 0; j < retTotal; j++) {
            if (_currentExamItem.items[j].id == subjectId) {
                answers = [];
                inputs = $(answerFileds[i]).find('.form-check-input');
                for (var k = 0; k < inputs.length; k++) {
                    if ($(inputs[k]).prop('checked')) {
                        answers.push($(inputs[k]).val());
                    }
                }

                if (answers.length > 0 && checkAnswersDo(answers, _currentExamItem.items[j].correct)) {
                    retCorrect++
                }

                break;
            }
        }
    }

    $('span.exam-item-correct-count').text(retCorrect);
    $('span.exam-item-correct-count').parent().show();
    $('span.exam-item-incorrect-count').text(retTotal - retCorrect);
    $('span.exam-item-incorrect-count').parent().show();
    //$('#btn_Profile_Exam_Submit').parent().append('<span>共用时: ' + timerObj.text + '</span>');
}

function loadExamItems(tmpHTMLArr) {
    var data = _currentExamItem.items;
    var itemId = _currentExamItem.id;
    var wrap = $('#wrap_profile_exam_card_block_' + itemId);
    wrap.empty();
    var chkName = '';
    var chkId = '';
    tmpHTMLArr.push('<form id="form_Profile_Exam">');
    tmpHTMLArr.push('<table class="table table-striped">');
    tmpHTMLArr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLArr.push('<tr>');
        tmpHTMLArr.push('   <td style="padding: 5px 10px;">');
        tmpHTMLArr.push('       <table style="border: none; width:100%;">');
        tmpHTMLArr.push('           <tbody style="border: none;">');
        tmpHTMLArr.push('               <tr style="border: none;background-color: transparent;">');
        tmpHTMLArr.push('                   <th style="padding: 5px 10px;border: none; width:50px; ">' + (i + 1) + '</th>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; font-size:15px;">' + data[i].content + '</td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('               <tr style="border: none;">');
        tmpHTMLArr.push('                   <th style="padding: 5px 10px;border: none;"></th>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none;">');
        tmpHTMLArr.push('                           <fieldset class="form-group" id="fs_exam_item_' + itemId + '_' + data[i].id + '" style="margin:0px;" data-target="' + data[i].id + '">');
        for (var j = 0; j < data[i].options.length; j++) {
            chkName = 'chk-exam-item-' + itemId + '-' + data[i].id;
            chkId = 'chk_Exam_Item_' + itemId + '_' + data[i].id + '_' + j;
            tmpHTMLArr.push('                           <div class="form-check" style="margin:0px;">');
            tmpHTMLArr.push('                               <label class="form-check-label" style="font-size:14px;">');
            tmpHTMLArr.push('                                   <input type="checkbox" class="form-check-input" name="' + chkName + '" id="' + chkId + '" value="' + data[i].options[j].id + '">');
            tmpHTMLArr.push('                                   <span style="padding-left:10px;">' + data[i].options[j].content + '</span>');
            tmpHTMLArr.push('                               </label>');
            tmpHTMLArr.push('                           </div>');
        }

        tmpHTMLArr.push('                           </fieldset>');
        tmpHTMLArr.push('                   </td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('           </tbody>');
        tmpHTMLArr.push('       </table>');
        tmpHTMLArr.push('   </td>');
        tmpHTMLArr.push('</tr>');
    }

    tmpHTMLArr.push('   </tbody>');
    tmpHTMLArr.push('</table>');
    tmpHTMLArr.push('</form>');
};

/*Global*/
var _headerImgSrc = '';
function loadHeaderImg() {
    _headerImgSrc = 'image/tmpheader.jpg';
    _loadIMG(_headerImgSrc, loadHeaderImg_Do);
};

function loadHeaderImg_Do() {
    $('#img_Profile_Title').attr('src', _headerImgSrc);
    $('#img_Settings_Profile_Header').attr('src', _headerImgSrc);
    $('#img_Page_Header_Navbar').attr('src', _headerImgSrc);
}

function formatDate(date) {
    if (typeof (date) == 'number' || typeof (date) == 'string') {
        date = new Date(date);
    }

    if (date == 'Invalid Date') {
        date = new Date();
    }

    var dateArr = [date.getFullYear().toString()];
    var tmpVal = date.getMonth() + 1;
    if (tmpVal < 10) {
        tmpVal = '0' + tmpVal;
    }

    dateArr.push(tmpVal);
    tmpVal = date.getDate();
    if (tmpVal < 10) {
        tmpVal = '0' + tmpVal;
    }

    dateArr.push(tmpVal);
    return dateArr.join('-');
};

function drawTimeBarGraph(datas, canvasId) {
    var barWidth = 24;
    var barSpace = 14;
    var lineWidth = 1;
    var canvas = document.getElementById(canvasId);
    var parent = $($(canvas).parent());
    var width = Math.max(Math.floor((barWidth + barSpace) * datas.length), parent.width());
    var height = parent.height() - parseInt(parent.css('padding-top')) - parseInt(parent.css('padding-bottom'));
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, width, height);
    var maxValue = 0;
    for (var i = 0; i < datas.length; i++) {
        maxValue = Math.max(maxValue, datas[i].time);
    }

    var unit = (maxValue == 0 ? 0 : Math.floor((height - 30) / maxValue));
    var startX = 0;
    var startY = height - 15;
    var linearGradient, barHeight, barX, tmpX, tmpY, lineRTX, lineRTY, tmpDate, tmpMonth, tmpTextWidth;
    for (var i = 0; i < datas.length; i++) {
        if (datas[i].time > 0) {
            //draw bar
            barHeight = datas[i].time * unit;
            barX = startX + barSpace / 2;
            lineRTX = barX + barWidth;
            lineRTY = startY - barHeight;
            linearGradient = context.createLinearGradient(barX, lineRTY, 0, barHeight);
            linearGradient.addColorStop(0, "rgb(98,163,54)");
            linearGradient.addColorStop(1, "rgb(128,184,95)");
            context.fillStyle = linearGradient;
            context.fillRect(barX, lineRTY, barWidth, barHeight);
            //draw border
            context.strokeStyle = 'rgba(210,210,210,0.5)';
            context.lineWidth = lineWidth;
            context.moveTo(barX, startY);
            context.lineTo(barX, lineRTY);
            context.lineTo(lineRTX, lineRTY);
            context.lineTo(lineRTX, startY);
            context.stroke();
            //draw time label
            //tmpX = barX + 4;
            tmpTextWidth = testTextWidth(datas[i].time, '10px', 'bold', '微软雅黑', '');
            tmpX = startX + (barWidth + barSpace - tmpTextWidth) / 2;
            tmpY = lineRTY - 2;
            context.font = "normal normal normal 10px \"微软雅黑\"";
            context.fillStyle = "rgb(97,97,97)";
            context.fillText(datas[i].time, tmpX, tmpY);
            //draw date label
            tmpX = startX + 2;
            tmpY = startY + 12;
            context.font = "normal normal normal 10px \"微软雅黑\"";
            context.fillStyle = "rgb(97,97,97)";
            tmpDate = new Date(datas[i].date);
            tmpMonth = (tmpDate.getMonth() + 1 < 10 ? '0' + (tmpDate.getMonth() + 1) : tmpDate.getMonth() + 1);
            tmpDate = (tmpDate.getDate() < 10 ? '0' + tmpDate.getDate() : tmpDate.getDate());
            context.fillText(tmpMonth + '-' + tmpDate, tmpX, tmpY);
        }

        startX += barWidth + barSpace;
    }
    //draw base line
    context.strokeStyle = 'rgba(210,210,210,0.5)';
    context.lineWidth = lineWidth;
    context.moveTo(0, startY);
    context.lineTo(canvas.width, startY);
    context.stroke();
    return (barWidth + barSpace) * 3;
};
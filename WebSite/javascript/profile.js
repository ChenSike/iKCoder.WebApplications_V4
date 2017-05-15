'use strict';

var _ajaxObj = null;

function initPage() {
    $('.navbar.navbar-expand-lg.navbar-light').css('background-color', 'rgb(246,246,246)');
    $('.img-header-logo').attr('src', 'image/logo-new-gray.png');
    $('#sideBar_Page_Left').height($('body').height() - $('.navbar.navbar-expand-lg.navbar-light').height() - 16 - $('footer').height());
    loadHeaderImg();
    //loadSiderbarData();
    //getUnreadMsgCount();
    initEvents();
    $('#wrap_Category_Title').show();
    preloadPageImg();
};

function preloadPageImg() {
    var tmpArr = [
        'image/honor/a.png',
        'image/honor/b.png',
        'image/honor/b.png',
        'image/course/course_1.png',
        'image/course/course_2.png',
        'image/course/course_3.png',
        'image/course/course_4.png',
        'image/qr_wechat.png'
    ];

    _preloadCount = tmpArr.length;
    for (var i = 0; i < tmpArr.length; i++) {
        _loadIMG(tmpArr[i], initPage_Do);
    }
}

var _preloadCount = 1;
function initPage_Do() {
    _preloadCount--;
    if (_preloadCount == 0) {
        rebuildContent('overview');
        //rebuildContent('settings');
        //rebuildContent('report');    
        getUnreadMsgCount();
        window.setInterval(getUnreadMsgCount, 5000);
    }
}

function loadSiderbarData() {
    var mapping = [
        { n: 'name', p: '/root/usrbasic/usr_nickname' }
    ];
    _registerRemoteServer();
    $.ajax({
        type: 'GET',
        async: true,
        url: _getRequestURL(_gURLMapping.bus.getcenterinfo),
        data: '<root></root>',
        success: function (responseData, status) {
            if ($(responseData).find('err').length > 0) {
                _showGlobalMessage($(responseData).find('err').attr('msg'), 'danger', 'alert_GetBasicInfo_Error');
                return;
            } else {
                var tmpNodes = $(responseData).find('msg');
                var data = { name: '', title: '' };
                for (var i = 0; i < tmpNodes.length; i++) {
                    var tmpNode = $(tmpNodes[i]);
                    if (tmpNode.attr('xpath')) {
                        for (var j = 0; j < mapping.length; j++) {
                            if (mapping[j].p == tmpNode.attr('xpath')) {
                                data[mapping[j].n] = tmpNode.attr('value');
                            }
                        }
                    }
                }

                $('#txt_NickName_Profile_Title').text(data.name);
                $('#txt_Title_Profile_Title').text(data.title);
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            _showGlobalMessage('无法获取信息，请联系技术支持！', 'danger', 'alert_GetBasicInfo_Error');
        }
    });
};

function getUnreadMsgCount() {
    _registerRemoteServer();
    $.ajax({
        type: 'GET',
        async: true,
        url: _getRequestURL(_gURLMapping.bus.getunreadmsgcount),
        data: '<root></root>',
        success: function (responseData, status) {
            if ($(responseData).find('err').length > 0) {
                _showGlobalMessage($(responseData).find('err').attr('msg'), 'danger', 'alert_GetUnReadsMsgCount_Error');
                return;
            } else {
                var count = 0;
                var tmpNodes = $(responseData).find('msg');
                for (var i = 0; i < tmpNodes.length; i++) {
                    if ($(tmpNodes[i]).attr('type') != '1') {
                        count = parseInt($(tmpNodes[i]).attr('msg'));
                        break;
                    }
                }

                count = (isNaN(count) ? '0' : count > 99 ? '99+' : count);
                $('.left-bar-message-count').text(count);
                $('.left-bar-message-count').css('background-color', (count == 0 ? 'rgb(185,185,185)' : 'rgb(236,64,122)'));
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            _showGlobalMessage('无法获取未读消息的数量！', 'danger', 'alert_GetUnReadsMsgCount_Error');
        }
    });
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
    showLoadingMask();
    var contentHeight = $('body').height() - $('.navbar.navbar-expand-lg.navbar-light').height() - 16 - $('footer').height();
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
    switch (symbol) {
        case 'overview':
            currentItem = $($('.left-bar-category-item')[0]);
            contertWrap.addClass('col');
            rebuildOverviewPanel(contentHeight);
            break;
        case 'message':
            currentItem = $($('.left-bar-category-item')[1]);
            contertWrap.addClass('col');
            rebuildMesagesPanel(contentHeight);
            break;
        case 'report':
            currentItem = $($('.left-bar-category-item')[2]);
            contertWrap.addClass('col-9');
            rebuildReportPanel(contentHeight);
            break;
        case 'settings':
            currentItem = $($('.left-bar-category-item')[3]);
            contertWrap.addClass('col');
            rebuildSettingsPanel(contentHeight);
            break;
        default:
            break;
    }

    resetCategoryItemCSS(currentItem);
};

/*Overview panel*/
function rebuildOverviewPanel(contentHeight) {
    var tmpHeight = calcOverviewItemheight(contentHeight);
    _registerRemoteServer();
    _ajaxObj = $.ajax({
        type: 'GET',
        async: true,
        url: _getRequestURL(_gURLMapping.bus.getcenterinfo),
        data: '',
        success: function (responseData, status) {
            if ($(responseData).find('err').length > 0) {
                _showGlobalMessage($(responseData).find('err').attr('msg'), 'danger', 'alert_GetOverviewInfo_Error');
                return;
            } else {
                var data = formatOverviewData(responseData);
                rebuildOverviewTitles(data, contentHeight, tmpHeight);
                rebuildOverviewContents(data, contentHeight, tmpHeight);
                hideLoadingMask();
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            _showGlobalMessage('无法获取信息，请联系技术支持！', 'danger', 'alert_GetOverviewInfo_Error');
        }
    });
};

function formatOverviewData(response) {
    var data = {
        honor: [],
        course: [],
        experience: { distribution: [], level: {} },
        codetimes: { over: 0, times: [] }
    };

    var tmpNodes = $(response).find('honor').find('item');
    for (var i = 0; i < tmpNodes.length; i++) {
        var tmpObj = $(tmpNodes[i]);
        data.honor.push({ id: i + 1, title: tmpObj.attr('name'), img: 'image/honor/' + tmpObj.attr('image') });
    }

    tmpNodes = $(response).find('course').find('item');
    var courseMap = [
        { color: 'rgb(86,181,34)', symbol: 'A' },
        { color: 'rgb(100,124,185)', symbol: 'B' },
        { color: 'rgb(43,93,126)', symbol: 'C' },
        { color: 'rgb(228,88,76)', symbol: 'D' },
        { color: 'rgb(228,88,76)', symbol: 'E' }
    ];
    for (var i = 0; i < tmpNodes.length; i++) {
        var tmpObj = $(tmpNodes[i]);
        var newItemObj = {};
        newItemObj.id = tmpObj.attr('id');
        newItemObj.title = tmpObj.attr('title');
        newItemObj.total = parseInt(tmpObj.attr('total'));
        newItemObj.complete = parseInt(tmpObj.attr('complete'));
        newItemObj.img = 'image/course/course_' + (i + 1) + '.png';
        newItemObj.color = courseMap[i].color;
        newItemObj.symbol = courseMap[i].symbol;
        data.course.push(newItemObj);
    }

    tmpNodes = $(response).find('distributio').find('item');
    var distributionMap = {
        S: { name: '科学', color: 'rgb(36,90,186)' },
        T: { name: '技术', color: 'rgb(236,15,33)' },
        E: { name: '工程', color: 'rgb(165,165,165)' },
        M: { name: '数学', color: 'rgb(255,191,0)' },
        L: { name: '语言', color: 'rgb(71,143,208)' }
    };

    for (var i = 0; i < tmpNodes.length; i++) {
        var tmpObj = $(tmpNodes[i]);
        var tmpItem = distributionMap[tmpObj.attr('id')];
        data.experience.distribution.push({ id: tmpObj.attr('id'), name: tmpItem.name, color: tmpItem.color, value: parseInt(tmpObj.attr('value')) });
    }

    tmpNodes = $(response).find('level').find('item');
    var level = {};
    for (var i = 0; i < tmpNodes.length; i++) {
        var tmpObj = $(tmpNodes[i]);
        level[tmpObj.attr('id')] = {
            name: tmpObj.attr('name'),
            id: tmpObj.attr('id'),
            value: parseInt(tmpObj.attr('value'))
        };
    }

    data.experience.total = parseInt($(response).find('level').attr('total'));
    data.experience.level = level;

    var tmpNode = $(response).find('codetimes');
    data.codetimes.over = parseInt($(tmpNode[0]).attr('over'));
    tmpNodes = $(response).find('codetimes').find('item');
    for (var i = 0; i < tmpNodes.length; i++) {
        var tmpObj = $(tmpNodes[i]);
        var tmpValue = parseFloat(tmpObj.attr('value'));
        data.codetimes.times.push({ date: tmpObj.attr('date'), time: (isNaN(tmpValue) ? 0 : tmpValue) });
    }

    //var data = {
    //    honor: [
    //        { id: 1, title: '算法小达人', img: 'image/honor/copper.png' },
    //        { id: 2, title: '计算机小专家', img: 'image/honor/gold.png' },
    //        { id: 3, title: '语言大师', img: 'image/honor/silver.png' },
    //        { id: 4, title: '小画家', img: 'image/honor/copper.png' },
    //        { id: 5, title: '小小数学家', img: 'image/honor/gold.png' },
    //        { id: 6, title: '音乐家', img: 'image/honor/silver.png' },
    //        { id: 7, title: '科学智多星', img: 'image/honor/copper.png' },
    //        { id: 8, title: '分享达人', img: 'image/honor/gold.png' },
    //        { id: 9, title: '无人机小飞手', img: 'image/honor/silver.png' }
    //    ],
    //    course: [
    //        { id: 'enlighten', title: '启蒙课程', total: 32, complete: 4, img: 'image/course/course_1.png', color: 'rgb(86,181,34)', symbol: 'A' },
    //        { id: 'primary', title: '初级课程', total: 32, complete: 3, img: 'image/course/course_2.png', color: 'rgb(100,124,185)', symbol: 'B' },
    //        { id: 'middle', title: '中级课程', total: 32, complete: 2, img: 'image/course/course_3.png', color: 'rgb(43,93,126)', symbol: 'C' },
    //        { id: 'advance', title: '高级课程', total: 32, complete: 1, img: 'image/course/course_4.png', color: 'rgb(228,88,76)', symbol: 'D' }
    //    ],
    //    experience: {
    //        distribution: [
    //            { id: "science", name: "科学", value: 250, color: "rgb(36,90,186)" },
    //            { id: "skill", name: "技术", value: 400, color: "rgb(236,15,33)" },
    //            { id: "engineering", name: "工程", value: 550, color: "rgb(165,165,165)" },
    //            { id: "math", name: "数学", value: 700, color: "rgb(255,191,0)" },
    //            { id: "language", name: "语言", value: 700, color: "rgb(71,143,208)" }
    //        ],
    //        level: {
    //            primary: { name: "初级课程", id: "Primary", value: 85 },
    //            middle: { name: "中级课程", id: "Middle", value: 11 },
    //            advance: { name: "高级课程", id: "Advance", value: 5 }
    //        }
    //    },
    //    codetimes: {
    //        over: 95,
    //        times: [
    //            { date: "2017-1-1", time: 3 },
    //            { date: "2017-1-2", time: 2 },
    //            { date: "2017-1-3", time: 4 }
    //        ]
    //    }
    //}

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
    return { s: minHeight, l: bigHeight, e: contentHeight - minHeight - bigHeight * 3 + bigHeight };
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
        tmpHTMLArr.push('        <div class="container-fluid overview-course-item-wrap" style="width:' + (width - 2) + 'px; height:' + height + 'px">');
        tmpHTMLArr.push('            <div class="row" style="margin:0px;">');
        tmpHTMLArr.push('                <div class="col-12" style="padding:0px;">');
        tmpHTMLArr.push('                    <img class="img-fluid" src="' + datas[i].img + '" style="height:' + imgHeight + 'px;" />');
        tmpHTMLArr.push('                </div>');
        tmpHTMLArr.push('            </div>');
        tmpHTMLArr.push('            <div class="row" style="margin:0px;">');
        tmpHTMLArr.push('                <div class="col no-padding" style="width:' + ((width - progWidth) / 2) + 'px">');
        tmpHTMLArr.push('                </div>');
        tmpHTMLArr.push('                <div class="col no-padding" style="width:' + progWidth + 'px">');
        tmpHTMLArr.push('                   <div class="container-fluid no-padding">');
        tmpHTMLArr.push('                       <div class="row no-margin">');
        tmpHTMLArr.push('                           <div class="col-12 no-padding">');
        tmpHTMLArr.push('                               <p class="text-center profile-overview-course-item-title" style="color:' + datas[i].color + '; font-size:' + titleSize + 'px;padding:' + progHeight + 'px 0px;" title="' + datas[i].title + '">' + datas[i].title + '</p>');
        tmpHTMLArr.push('                           </div>');
        tmpHTMLArr.push('                       </div>');
        tmpHTMLArr.push('                       <div class="row no-margin">');
        tmpHTMLArr.push('                           <div class="col-12 no-padding d-flex justify-content-center">');
        tmpHTMLArr.push('                               <div style="width:' + progWidth + 'px; height:' + progHeight + 'px; background-color:rgb(216,216,216);">');
        tmpHTMLArr.push('                                   <div style="height:' + progHeight + 'px; background-color:rgb(73,175,79); width:' + (datas[i].complete / (datas[i].total == 0 ? 1 : datas[i].total) * 100) + '%;"></div>');
        tmpHTMLArr.push('                               </div>');
        tmpHTMLArr.push('                           </div>');
        tmpHTMLArr.push('                       </div>');
        tmpHTMLArr.push('                       <div class="row no-margin">');
        tmpHTMLArr.push('                           <div class="col-12  no-padding" style="padding-top:5px;color:rgb(73,175,79);">');
        tmpHTMLArr.push('                               <p class="text-center profile-overview-course-item-title" style="font-size:' + progTextSize + 'px">已学习' + datas[i].complete + '/' + datas[i].total + '课时</p>');
        tmpHTMLArr.push('                           </div>');
        tmpHTMLArr.push('                       </div>');
        tmpHTMLArr.push('                   </div>');
        tmpHTMLArr.push('                </div>');
        tmpHTMLArr.push('                <div class="col no-padding" style="width:' + ((width - progWidth) / 2) + 'px">');
        tmpHTMLArr.push('                   <div class="profile-overview-course-item-symbol" style="right:' + progHeight + 'px; font-size:' + symbolSize + 'px;line-height: ' + symbolSize + 'px;">' + datas[i].symbol + '</div>');
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
    var itemWidth = width + space;
    $('#container_Overview_Course_Items').width(itemWidth * itemCount - space);
    var funData = { id: "container_Overview_Course_Items", step: itemWidth };
    $('#arrow_Overview_Course_Left').on('click', funData, listMovePrev);
    $('#arrow_Overview_Course_Right').on('click', funData, listMoveNext);
    if ($('#wrap_Overview_Course_Items').width() > $('#container_Overview_Course_Items').width()) {
        $('.overview-list-arrow.course').hide();
    }
};

function buildOverviewExperience(data, height) {
    var idArr = ['Distribution']
    for (var key in data.level) {
        idArr.push(data.level[key].id);
    }

    var itemCount = idArr.length;
    var padding = Math.floor(40 / 350 * height);
    var width = Math.floor(padding / 40 * 225);
    var spaceWidth = Math.floor(padding / 40 * 90);
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
    var itemWidth = width + spaceWidth;
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
    var step = drawTimeBarGraph(data.codetimes.times, 'canvas_Overview_Time');
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

    var totalTime = 0;
    for (var i = 0; i < data.codetimes.times.length; i++) {
        totalTime += data.codetimes.times[i].time;
    }

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
            text: '<p class="overview-title-item-text">已完成</p><p class="overview-title-item-data">' + completeCourse + '/' + totalCourse + '</ｐ><p class="overview-title-item-text">个课程</p>'
        }, {
            id: 'Experience',
            height: itemHeight.l,
            bgColor: 'rgb(236,239,241)',
            color: 'rgb(77,208,225)',
            icon: 'star',
            text: '<p class="overview-title-item-text"><span class="overview-title-item-data">' + totalExp + '</span></p><p class="overview-title-item-text">经验值</p>'
        }, {
            id: 'Times',
            height: itemHeight.e,
            bgColor: 'rgb(248,250,251)',
            color: 'rgb(124,77,255)',
            icon: 'clock-o',
            text: '<p class="overview-title-item-text">编程<span class="overview-title-item-data">' +
                totalTime +
                '</span>小时</p><p class="overview-title-item-text">超了<span class="overview-title-item-data">' +
                (isNaN(data.codetimes.over) ? 0 : data.codetimes.over) +
                '%</span>同学</p>'
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
        context.fillText(datas[i].name, tmpX + legendWidth + 2, tmpY + 6);
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
    var tmpHeight = calcSettingsItemheight(contentHeight);
    _registerRemoteServer();
    _ajaxObj = $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gURLMapping.account.util),
        data: '<root>' +
                '<select>' +
                '<items value="/root/usrbasic/usr_nickname"></items>' +
                '<items value="/root/usrbasic/sex"></items>' +
                '<items value="/root/usrbasic/birthday"></items>' +
                '<items value="/root/usrbasic/state"></items>' +
                '<items value="/root/usrbasic/city"></items>' +
                '<items value="/root/usrbasic/school"></items>' +
                '</select>' +
                '</root>',
        success: function (responseData, status) {
            if ($(responseData).find('err').length > 0) {
                _showGlobalMessage($(responseData).find('err').attr('msg'), 'danger', 'alert_GetOverviewInfo_Error');
                return;
            } else {
                var tmpNodes = $(responseData).find('msg');
                var data = { profile: {} };
                for (var i = 0; i < tmpNodes.length; i++) {
                    var tmpNode = $(tmpNodes[i]);
                    if (tmpNode.attr('xpath')) {
                        for (var j = 0; j < mapping.length; j++) {
                            if (mapping[j].p == tmpNode.attr('xpath')) {
                                data.profile[mapping[j].n] = tmpNode.attr('value');
                            }
                        }
                    }
                }

                rebuildSettingsTitles(tmpHeight);
                rebuildSettingsContents(data, tmpHeight);
                hideLoadingMask()
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            _showGlobalMessage('无法获取信息，请联系技术支持！', 'danger', 'alert_GetOverviewInfo_Error');
        }
    });
    //var data = {
    //    profile: {
    //        header: _getRequestURL(_gURLMapping.account.getheader, {}),
    //        name: 'Terry',
    //        gender: '1',
    //        birthday: '2009-10-01',
    //        province: '广东',
    //        city: '深圳',
    //        school: '深圳实验小学'
    //    }
    //}

    //rebuildSettingsTitles(tmpHeight);
    //rebuildSettingsContents(data, tmpHeight);
};

function calcSettingsItemheight(contentHeight) {
    var profileHeight = Math.floor(700 / 1050 * contentHeight);
    var pwdHeight = Math.floor(350 / 1050 * contentHeight);

    if (profileHeight < 440) {
        profileHeight = 440;
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
    tmpHTMLArr.push('                    <div class="col-1">');
    tmpHTMLArr.push('                        <div class="form-check">');
    tmpHTMLArr.push('                            <label class="form-check-label">');
    tmpHTMLArr.push('                                <input type="radio" class="form-check-input" name="settings_profile_user_gender" id="radio_Settings_Profile_User_Gender_Male" value="1" checked>男');
    tmpHTMLArr.push('                            </label>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                    <div class="col-1">');
    tmpHTMLArr.push('                        <div class="form-check">');
    tmpHTMLArr.push('                            <label class="form-check-label">');
    tmpHTMLArr.push('                                <input type="radio" class="form-check-input" name="settings_profile_user_gender" id="radio_Settings_Profile_User_Genderr_Female" value="0" checked>女');
    tmpHTMLArr.push('                            </label>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                   <label for="datetime_Settings_Profile_User_Birthday" class="col-2 col-form-label">生日</label>');
    tmpHTMLArr.push('                   <div class="col-8">');
    tmpHTMLArr.push('                       <input class="form-control" type="date" value="' + formatDate(new Date()) + '" id="datetime_Settings_Profile_User_Birthday">');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <label class="col-2" style="line-height: 38px;">所在城市</label>');
    tmpHTMLArr.push('                    <div class="col-3">');
    tmpHTMLArr.push('                        <select class="form-control" id="select_Settings_Profile_User_City_Province">');
    for (var i = 0; i < _gCitys.length; i++) {
        tmpHTMLArr.push('                            <option value="' + _gCitys[i].p + '">' + _gCitys[i].p + '</option>');
    }

    tmpHTMLArr.push('                        </select>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                    <label class="col-1" id="title_Settings_Profile_User_City_Province" style="line-height: 38px;">市</label>');
    tmpHTMLArr.push('                    <div class="col-3" style="padding: 0px;">');
    tmpHTMLArr.push('                        <select class="form-control" id="select_Settings_Profile_User_City_City">');
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
    tmpHTMLArr.push('                        <input type="text" class="form-control" id="txt_Settings_Profile_User_School" placeholder="请输入就读的学校名称">');
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
    headerImg.src = _getRequestURL(_gURLMapping.account.getheader, {});
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
            $('#form_Upload').attr('action', _getRequestURL(_gURLMapping.account.updateheader, { sumitdata: 1, }));
            $('#form_Upload').submit();
            var timeout = 2000;
            if (this.files[0].size / 1024 > 3072) {
                timeout = 8000;
            } else if (this.files[0].size / 1024 > 2048) {
                timeout = 5000;
            } else if (this.files[0].size / 1024 > 1024) {
                timeout = 3000;
            }

            _UploadHeaderHandle = setTimeout('initCustomHeaderImg()', timeout);
            $('#btn_Form_File_Upload').click();
        }
    });

    $('#btn_CustomHeader_Save').on('click', function () {
        var tmpStr = $('#btn_CustomHeader_Save').attr('data-content');
        var tmpParams = tmpStr.split(',');
        if (tmpStr != '' && tmpParams.length == 4) {
            tmpParams = {
                startx: tmpParams[0],
                starty: tmpParams[1],
                width: tmpParams[2],
                height: tmpParams[3]
            };
            _registerRemoteServer();
            $.ajax({
                type: 'POST',
                async: true,
                url: _getRequestURL(_gURLMapping.account.clipheaderimg, tmpParams),
                data: '',
                success: function (data, status) {
                    if ($(data).find('err').length > 0) {
                        _showGlobalMessage($(data).find('err').attr('msg'), 'danger', 'alert_Save_CustHead_Error');
                        return;
                    } else {
                        $('#mWindow_customHeaderModal').modal('hide');
                        loadHeaderImg();
                    }
                },
                dataType: 'xml',
                xhrFields: {
                    withCredentials: true
                },
                error: function () {

                }
            });
        }
    });

    $("#btn_Settings_Profile_Save_Profile").click(function () {
        updateProfile();
    });

    $("#btn_Settings_PWD_Save_PWD").click(function () {
        updatePWD();
    });
};

function updateProfile() {
    var tSex = '1';
    $('[name="settings_profile_user_gender"]').each(function () {
        if ($(this).is(':checked')) {
            tSex = $(this).val();
        }
    });


    _registerRemoteServer();
    $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gURLMapping.account.updateutil),
        data: '<root>' +
            '<parent>/root/usrbasic</parent>' +
            '<newnodes>' +
            '<item name="usr_nickname" value="' + $('#txt_Settings_Profile_User_Name').val() + '" ></item>' +
            '<item name="sex" value="' + tSex + '" ></item>' +
            '<item name="birthday" value="' + $('#datetime_Settings_Profile_User_Birthday').val() + '" ></item>' +
            '<item name="state" value="' + $('#select_Settings_Profile_User_City_Province').val() + '" ></item>' +
            '<item name="city" value="' + $('#select_Settings_Profile_User_City_City').val() + '" ></item>' +
            '<item name="school" value="' + $('#txt_Settings_Profile_User_School').val() + '" ></item>' +
            '</newnodes>' +
            '</root>',
        success: function (data, status) {
            if ($(data).find('err').length > 0) {
                _showGlobalMessage($(data).find('err').attr('msg'), 'danger', 'alert_ForgetPWD_Error');
            } else if ($(data).find('msg').length > 0) {
                var tmpNodes = $(data).find('msg');
                for (var i = 0; i < tmpNodes.length; i++) {
                    if (!$(tmpNodes[i]).attr('type') || $(tmpNodes[i]).attr('type') != '1') {
                        $('body').append($('<div class="alert alert-success" role="alert"  data-dismiss="alert"><strong>' + $(tmpNodes[i]).attr('msg') + '</strong></div>'));

                    }
                }


            } else {
                _showGlobalMessage('发生未知的错误, 请联系客服!', 'danger', 'alert_ForgetPWD_Error');
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            _showGlobalMessage('修改密码失败, 请联系客服!', 'danger', 'alert_ForgetPWD_Error');
        }
    });
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

    _registerRemoteServer();
    $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gURLMapping.account.updatepwd),
        data: '<root>' +
            '<oldpassword>' + $("#txt_Settings_PWD_Old_PWD").val() + '</oldpassword>' +
            '<newpassword>' + $("#txt_Settings_PWD_New_PWD").val() + '</newpassword>' +
            '</root>',
        success: function (data, status) {
            if ($(data).find('err').length > 0) {
                _showGlobalMessage($(data).find('err').attr('msg'), 'danger', 'alert_ForgetPWD_Error');
            } else if ($(data).find('msg').length > 0) {

            } else {
                _showGlobalMessage('发生未知的错误, 请联系客服!', 'danger', 'alert_ForgetPWD_Error');
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            _showGlobalMessage('修改密码失败, 请联系客服!', 'danger', 'alert_ForgetPWD_Error');
        }
    });
}

var _currentHeaderImageSrc = '';
var _currentHeaderImage = null;
function initCustomHeaderImg(uploadType) {
    var canvas = document.getElementById("canvas_CustomHeader");
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 320, 320);
    var image = new Image();
    if (!uploadType && _currentHeaderImageSrc == '') {
        image.src = _getRequestURL(_gURLMapping.account.getheader);
    } else if (typeof uploadType == 'string' && uploadType != '') {
        image.src = _getRequestURL(_gURLMapping.account.getheader, {});
        //image.src = "images/head/head_11.jpg";
    } else {
        image.src = _currentHeaderImageSrc + "&rnd=" + Date.now();
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
    buildSettingsProfile(data.profile, tmpHeight.p);
    buildSettingsChangePWD(tmpHeight.c - 1);
    initSettingsEvents();
    updateProfileValue(data.profile);
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
    //var mapping = [
    //{ n: 'name', p: '/root/usrbasic/usr_nickname' },
    //{ n: 'gender', p: '/root/usrbasic/sex' },
    //{ n: 'birthday', p: '/root/usrbasic/birthday' },
    //{ n: 'province', p: '/root/usrbasic/state' },
    //{ n: 'city', p: '/root/usrbasic/city' },
    //{ n: 'school', p: '/root/usrbasic/school' }
    //];
    //_registerRemoteServer();
    //_ajaxObj = $.ajax({
    //    type: 'POST',
    //    async: true,
    //    url: _getRequestURL(_gURLMapping.account.util),
    //    data: '<root>' +
    //            '<select>' +
    //            '<items value="/root/usrbasic/usr_nickname"></items>' +
    //            '<items value="/root/usrbasic/sex"></items>' +
    //            '<items value="/root/usrbasic/birthday"></items>' +
    //            '<items value="/root/usrbasic/state"></items>' +
    //            '<items value="/root/usrbasic/city"></items>' +
    //            '<items value="/root/usrbasic/school"></items>' +
    //            '</select>' +
    //            '</root>',
    //    success: function (responseData, status) {
    //        if ($(responseData).find('err').length > 0) {
    //            _showGlobalMessage($(responseData).find('err').attr('msg'), 'danger', 'alert_GetOverviewInfo_Error');
    //            return;
    //        } else {
    //            var tmpNodes = $(responseData).find('msg');
    //            var data = { profile: {} };
    //            for (var i = 0; i < tmpNodes.length; i++) {
    //                var tmpNode = $(tmpNodes[i]);
    //                if (tmpNode.attr('xpath')) {
    //                    for (var j = 0; j < mapping.length; j++) {
    //                        if (mapping[j].p == tmpNode.attr('xpath')) {
    //                            data.profile[mapping[j].n] = tmpNode.attr('value');
    //                        }
    //                    }
    //                }
    //            }

    //            rebuildSettingsTitles(tmpHeight);
    //            rebuildSettingsContents(data, tmpHeight);
    //            hideLoadingMask()
    //        }
    //    },
    //    dataType: 'xml',
    //    xhrFields: {
    //        withCredentials: true
    //    },
    //    error: function () {
    //        _showGlobalMessage('无法获取信息，请联系技术支持！', 'danger', 'alert_GetOverviewInfo_Error');
    //    }
    //});
    var data = {
        user: {
            header: _getRequestURL(_gURLMapping.account.getheader, {}),
            name: 'Terry',
            title: '高级工程师',
            exp: 55,
            over: 88,
            work: 20,
            course: 18,
            friend: 30,
            date: '2017-5-1',
            qr: 'image/qr_wechat.png'
        },
        achieve: [
            { id: 1, title: '计算机小专家', content: '顺利完成了计算机原理的所有基础课程，对现代计算机的系统组成，运行方式和编程原理有了系统性的认知；' },
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
            course: 25,
            time: 125,
            items: [
                '计算机原理',
                '空间概念和有序移动',
                '基础数据结构',
                '键盘及鼠标控制',
                '数学输入与输出',
                '条件循环',
                '条件判断语句',
                '音乐播放原理',
                '基本绘图指令'
            ]
        },
        time: {
            over: 95,
            times: [
                { date: '20070-01-01', time: 2 },
                { date: '20070-01-02', time: 6 },
                { date: '20070-01-03', time: 3 }
            ],
            course: [
                { id: '1', rate: 85, name: '初级课程' },
                { id: '２', rate: 45, name: '中级课程' },
                { id: '３', rate: 15, name: '高级课程' }
            ]
        },
        potential: [
            { name: '科学', value: 100 },
            { name: '数学', value: 80 },
            { name: '技术', value: 55 },
            { name: '工程', value: 20 },
            { name: '语言', value: 10 }
        ],
        works: [
            { id: '1', title: 'test 1', img: 'image/course_simple.png', content: 'content 1', hits: 1 },
            { id: '2', title: 'test 2', img: 'image/course_simple.png', content: 'content 2', hits: 2 },
            { id: '3', title: 'test 3', img: 'image/course_simple.png', content: 'content 3', hits: 3 },
            { id: '4', title: 'test 4', img: 'image/course_simple.png', content: 'content 4', hits: 4 },
            { id: '5', title: 'test 5', img: 'image/course_simple.png', content: 'content 5', hits: 5 },
            { id: '6', title: 'test 6', img: 'image/course_simple.png', content: 'content 6', hits: 6 }
        ]
    }

    rebuildReportTitles();
    rebuildReportContents(data);
    hideLoadingMask();
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
    buildReportWorksPanel(data.works);
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
    tmpHTMLArr.push('                        <div class="d-flex align-items-center" id="report_overview_userinfor" style="position: relative; left: 269px; width: 380px;">');
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
        tmpHTMLArr.push('                                <div class="col-4 text-size-10">');
        tmpHTMLArr.push('                                    【' + (i + 1) + '】' + data.items[i]);
        tmpHTMLArr.push('                                </div>');
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
    var total = 0;
    for (var i = 0; i < data.times.length; i++) {
        total += data.times[i].time;
    }

    tmpHTMLArr.push('               <span class="text-size-16 text-color-data">' + total + '</span>');
    tmpHTMLArr.push('                小时，超过 ');
    tmpHTMLArr.push('               <span class="text-size-16 text-color-data">' + data.over + '%</span> 的小伙伴。');
    tmpHTMLArr.push('            </p>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:30px;">');
    tmpHTMLArr.push('        <div class="col-6 text-center text-size-13 text-color-smart">');
    tmpHTMLArr.push('            本月学习时间及趋势');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-6 text-center text-size-13 text-color-smart">');
    tmpHTMLArr.push('            各级课程完成率');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row" style="padding-bottom:60px;">');
    tmpHTMLArr.push('        <div class="col-6" style="height:210px; padding-left:30px;">');
    tmpHTMLArr.push('           <div class="container-fluid no-padding">');
    tmpHTMLArr.push('               <div class="row align-items-center">');
    tmpHTMLArr.push('                   <div class="col-1 no-padding">');
    tmpHTMLArr.push('                       <div class="report-list-arrow time" id="arrow_Report_Time_Left">');
    tmpHTMLArr.push('                           <i class="fa fa-chevron-left"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <div class="col-10 no-padding" style="height:210px;">');
    tmpHTMLArr.push('                       <div id="container_Report_Time_Graph" style="height:100%;">');
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
    tmpHTMLArr.push('        <div class="col-6" style="padding-left:30px;">');
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

    maxValue = Math.ceil(maxValue / 100) * 100;
    var tmpSteps = maxValue / 20;
    var tmpRadius = radius / tmpSteps;
    var vertex = [];
    for (var i = 1; i < 36; i++) {
        var tmpStyle = lightStyle;
        if (i % 5 == 0) {
            tmpStyle = boldStyle;
        }

        vertex.push(drawPolygon(context, datas.length, centerX, centerY, tmpRadius * i, 0, false, null, tmpStyle));
    }

    var tmpX, tmpY;
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
        tmpVertex.push(vertex[tmpIdx - 1][i]);
    }

    context.strokeStyle = 'rgb(64,112,196)';
    context.lineWidth = 3;
    context.font = valFontSize + "px '微软雅黑'";
    context.fillStyle = "rgb(252,136,35)";
    context.beginPath();
    context.moveTo(tmpVertex[0].x, tmpVertex[0].y);
    context.fillText(datas[0].value, tmpVertex[0].x, tmpVertex[0].y);
    for (var i = 1; i < tmpVertex.length; i++) {
        context.lineTo(tmpVertex[i].x, tmpVertex[i].y);
        context.fillText(datas[i].value, tmpVertex[i].x, tmpVertex[i].y);
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

    drawTimeCompleteRate(data.course);
};

function drawTimeCompleteRate(datas) {
    var lineWidth = 6;
    var rateFontSize = 20;
    var textFontSize = 16;
    var id = 'canvas_Report_Time_Course';
    var canvas = document.getElementById(id);
    var parent = $($(canvas).parent());
    var width = parent.width();
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
        var tmpX = centerX;
        if (datas[i].rate < 10) {
            tmpX = centerX - rateFontSize * 0.5;
        } else {
            tmpX = centerX - rateFontSize * 1;
        }

        var tmpY = centerY + rateFontSize / 2;
        context.font = "normal normal bolder " + rateFontSize + "px \"微软雅黑\"";
        context.fillStyle = "rgb(105,105,105)";
        context.fillText(datas[i].rate + '%', tmpX, tmpY);

        tmpX = centerX - textFontSize * 1.5;
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
    _registerRemoteServer();
    _ajaxObj = $.ajax({
        type: 'GET',
        async: true,
        url: _getRequestURL(type == '' ? _gURLMapping.bus.getallmsglist : type == '1' ? _gURLMapping.bus.getsysmsglist : _gURLMapping.bus.getqamsglist),
        data: '<root></root>',
        success: function (responseData, status) {
            if ($(responseData).find('err').length > 0) {
                _showGlobalMessage($(responseData).find('err').attr('msg'), 'danger', 'alert_GetMessages_Error');
                return;
            } else {
                var tmpNodes = $(responseData).find('msg');
                var tmpDatasObj = {};
                for (var i = 0; i < tmpNodes.length; i++) {
                    var tmpNode = $(tmpNodes[i]);
                    if (tmpNode.attr('type') != '1') {
                        tmpDatasObj[tmpNode.attr('index')] = {
                            id: tmpNode.attr('messageid'),
                            top: tmpNode.attr('istop'),
                            type: tmpNode.attr('messagetype'),
                            content: tmpNode.attr('message'),
                            time: tmpNode.attr('datetime'),
                            answer: '',
                            username: tmpNode.attr('username'),
                            isread: tmpNode.attr('isread'),
                            optid: tmpNode.attr('operationid')
                        }
                    }
                }

                var indexArr = [];
                for (var key in tmpDatasObj) {
                    indexArr.push(key);
                }

                indexArr.sort(function (a, b) {
                    return a - b
                });

                var datas = [];
                for (var i = 0; i < indexArr.length; i++) {
                    datas.push(tmpDatasObj[indexArr[i]]);
                }

                rebuildMessageContents(datas);
                hideLoadingMask()
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            _showGlobalMessage('无法获取消息，请联系技术支持！', 'danger', 'alert_GetMessages_Error');
        }
    });
    //var data = [
    //        { id: '1', top: 1, type: '1', content: 'System Message, Test 1, ID=1, 2017-5-2System Message, Test 1, ID=1, 2017-5-1System Message, Test 1, ID=1, 2017-5-1System Message, Test 1, ID=1, 2017-5-1System Message, Test 1, ID=1, 2017-5-1', time: '2017-5-2', answer: null },
    //        { id: '2', top: 1, type: '1', content: 'System Message, Test 2, ID=1, 2017-5-1', time: '2017-5-1', answer: null },
    //        { id: '3', top: 1, type: '2', content: 'Questions and Answers, Test 1, ID=3, 2017-5-1', time: '2017-5-1', answer: { id: '8', type: '21', content: 'Answers, Test 1, ID=8, 2017-5-8', time: '2017-5-8', owner: '1' } },
    //        { id: '4', top: 0, type: '1', content: 'System Message, Test 3, ID=4, 2017-5-4', time: '2017-5-4', answer: null },
    //        { id: '5', top: 0, type: '1', content: 'System Message, Test 4, ID=5, 2017-5-3', time: '2017-5-3', answer: null },
    //        { id: '6', top: 0, type: '2', content: 'Questions and Answers, Test 2, ID=6, 2017-5-3', time: '2017-5-3', answer: null },
    //        { id: '7', top: 0, type: '2', content: 'Questions and Answers, Test 3, ID=7, 2017-5-2', time: '2017-5-2', answer: { id: '9', type: '21', content: 'Answers, Test 3, ID=7, 2017-5-2', time: '2017-5-9', owner: '1' } }
    //];

    //var tmpDatas = data;
    //if (type != '') {
    //    tmpDatas = [];
    //    for (var i = 0; i < data.length; i++) {
    //        if (data[i].type == type) {
    //            tmpDatas.push(data[i]);
    //        }
    //    }
    //}

    //rebuildMessageContents(tmpDatas);
    //hideLoadingMask();
};

function rebuildMessageContents(data) {
    $('#wrap_Category_Content').empty();
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid wrap-message-section" style="background-color:rgb(255,255,255); height:100%">');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col-12 no-padding">');
    tmpHTMLArr.push('           <div class="container-fluid wrap-message-items no-padding" style="background-color:rgb(255,255,255);">');
    tmpHTMLArr.push('               <div class="row no-margin">');
    tmpHTMLArr.push('                   <div class="col-12 no-padding">');
    tmpHTMLArr.push('                       <table class="table table-striped">');
    tmpHTMLArr.push('                           <tbody>');
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
};

function clearUnreadState() {
    $('.left-bar-message-count').text('0');
    //$('.left-bar-message-count').hide();
    $('.left-bar-message-count').css('background-color', 'rgb(185,185,185)');
};

/*Global*/
var _headerImgSrc = '';
function loadHeaderImg() {
    _headerImgSrc = _getRequestURL(_gURLMapping.account.getheader, {});
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
    var height = parent.height();
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
'use strict';

function initPage() {
    $('.navbar.navbar-expand-lg.navbar-light').css('background-color', 'rgb(246,246,246)');
    $('.img-header-logo').attr('src', 'image/logo-new-gray.png');
    initEvents();
    //rebuildContent('overview');
    rebuildContent('settings');
    refereshMessage();
}

function initEvents() {
    $('.left-bar-category-item').on('click', function () {
        resetCategoryItemCSS($(arguments[0].currentTarget));
        rebuildContent($(arguments[0].currentTarget).attr('data-target'));
    })
}

function resetCategoryItemCSS(current) {
    $('.left-bar-category-item').css('background-color', 'rgb(38,50,56)');
    $($('.left-bar-category-item').find('div').find('i')).css('color', 'rgb(85,103,110)');
    current.css('background-color', 'rgb(46,60,66)');
    $(current.find('div').find('i')[0]).css('color', 'rgb(236,64,122)');
}

function rebuildContent(symbol) {
    var contentHeight = $('body').height() - $('.navbar.navbar-expand-lg.navbar-light').height() - 16 - $('footer').height();
    $('#wrap_Category_Title').empty();
    $('#wrap_Category_Content').empty();
    var currentItem = null;
    switch (symbol) {
        case 'overview':
            rebuildOverviewPanel(contentHeight);
            currentItem = $($('.left-bar-category-item')[0]);
            break;
        case 'message':
            currentItem = $($('.left-bar-category-item')[1]);
            break;
        case 'report':
            currentItem = $($('.left-bar-category-item')[2]);
            break;
        case 'settings':
            rebuildSettingsPanel(contentHeight);
            currentItem = $($('.left-bar-category-item')[3]);
            break;
        default:
            break;
    }

    resetCategoryItemCSS(currentItem);
}

function rebuildOverviewPanel(contentHeight) {
    var tmpHeight = calcOverviewItemheight(contentHeight);
    //_registerRemoteServer();
    //$.ajax({
    //    type: 'POST',
    //    async: true,
    //    url: _getRequestURL(_gURLMapping.data.studentcenter, { symbol: 'config_student_index' }),
    //    data: '',
    //    success: function (responseData, status) {
    //        if ($(responseData).find('err').length > 0) {
    //            _showGlobalMessage($(responseData).find('err').attr('msg'), 'danger', 'alert_GetOverviewInfo_Error');
    //            return;
    //        } else {
    //            rebuildOverviewTitles(responseData, contentHeight, itemHeight);
    //            rebuildOverviewContents(responseData, contentHeight, itemHeight);
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
        honor: [
            { id: 1, title: '算法小达人', img: 'image/honor/h_1_a.png' },
            { id: 2, title: '计算机小专家', img: 'image/honor/h_2_u.png' },
            { id: 3, title: '语言大师', img: 'image/honor/h_3_a.png' },
            { id: 4, title: '小画家', img: 'image/honor/h_4_u.png' },
            { id: 5, title: '小小数学家', img: 'image/honor/h_5_a.png' },
            { id: 6, title: '音乐家', img: 'image/honor/h_6_a.png' },
            { id: 7, title: '科学智多星', img: 'image/honor/h_7_u.png' },
            { id: 8, title: '分享达人', img: 'image/honor/h_8_a.png' },
            { id: 9, title: '无人机小飞手', img: 'image/honor/h_9_u.png' }
        ],
        course: [
            { id: 'primary', title: '跟着博士学Scratch编程(初级)', total: 32, complete: 20, img: 'image/course_simple.png' },
            { id: 'middle', title: '跟着博士学Scratch编程(中级)', total: 64, complete: 8, img: 'image/course_simple.png' },
            { id: 'advance', title: '跟着博士学Scratch编程(高级)', total: 96, complete: 3, img: 'image/course_simple.png' }
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
                primary: { name: "初级课程", id: "Primary", value: 85 },
                middle: { name: "中级课程", id: "Middle", value: 11 },
                advance: { name: "高级课程", id: "Advance", value: 5 }
            }
        },
        codetimes: {
            beyond: 95,
            times: [
                { date: "2017-1-1", value: 3 },
                { date: "2017-1-2", value: 2 },
                { date: "2017-1-3", value: 4 }
            ]
        }
    }

    rebuildOverviewTitles(data, contentHeight, tmpHeight);
    rebuildOverviewContents(data, contentHeight, tmpHeight);
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
}

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
        tmpHTMLArr.push('                <div class="text-center" style="display: inline-block; height:100%; padding-right:' + (i == itemCount - 1 ? 0 : 10) + 'px;">');
        tmpHTMLArr.push('                    <div style="height:100%; padding:' + padding + 'px 0px;">');
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
    var itemWidth = height - Math.floor(20 / 150 * height * 2) - 30 + 13;
    $('#container_Overview_Honor_Items').width(itemWidth * itemCount);
    var funData = { id: "container_Overview_Honor_Items", step: itemWidth };
    $('#arrow_Overview_Honor_Left').on('click', funData, listMovePrev);
    $('#arrow_Overview_Honor_Right').on('click', funData, listMoveNext);
    if ($('#wrap_Overview_Honor_Items').width() > $('#container_Overview_Honor_Items').width()) {
        $('.overview-list-arrow.honor').hide();
    }
}

function buildOverviewCourse(datas, height) {
    var itemCount = datas.length;
    var padding = Math.floor(60 / 350 * height);
    var width = Math.floor(padding / 60 * 225);
    var imgHeight = Math.floor(padding / 60 * 95);
    var spaceWidth = Math.floor(padding / 60 * 85);
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid" id="Content_Overview_Course" style="background-color:rgb(255,255,255); border-bottom:solid 1px rgb(236,239,241);">');
    tmpHTMLArr.push('    <div class="row align-items-center" style="height:' + (height - 1) + 'px;">');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('           <div class="overview-list-arrow course" id="arrow_Overview_Course_Left">');
    tmpHTMLArr.push('               <i class="fa fa-chevron-left"></i>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-10 align-items-center" id="wrap_Overview_Course_Items" style="height:100%; overflow: hidden;">');
    tmpHTMLArr.push('            <div id="container_Overview_Course_Items" style="height:100%;">');
    for (var i = 0; i < itemCount; i++) {
        tmpHTMLArr.push('<div class="text-center" style="display: inline-block; height:100%; padding-right:' + (i == itemCount - 1 ? 0 : spaceWidth) + 'px;">');
        tmpHTMLArr.push('    <div style="height:100%; padding:' + padding + 'px 0px;">');
        tmpHTMLArr.push('        <div class="container-fluid overview-course-item-wrap" style="width:' + (width - 2) + 'px;">');
        tmpHTMLArr.push('            <div class="row" style="margin:0px;">');
        tmpHTMLArr.push('                <div class="col-12" style="padding:0px;">');
        tmpHTMLArr.push('                    <img class="img-fluid" src="' + datas[i].img + '" style="height:' + imgHeight + 'px;" />');
        tmpHTMLArr.push('                </div>');
        tmpHTMLArr.push('            </div>');
        tmpHTMLArr.push('            <div class="row mx-1" style="margin:0px;">');
        tmpHTMLArr.push('                <div class="col-12" style="padding:0px; font-size:13px;">');
        tmpHTMLArr.push('                    <p class="text-left">' + datas[i].title + '</p>');
        tmpHTMLArr.push('                </div>');
        tmpHTMLArr.push('            </div>');
        tmpHTMLArr.push('            <div class="row mx-1" style="margin:0px;">');
        tmpHTMLArr.push('                <div class="col-12" style="padding:0px;background-color:rgb(216,216,216);">');
        tmpHTMLArr.push('                    <div style="height:2px; background-color:rgb(73,175,79); width:' + (datas[i].complete / datas[i].total * 100) + '%;"></div>');
        tmpHTMLArr.push('                </div>');
        tmpHTMLArr.push('            </div>');
        tmpHTMLArr.push('            <div class="row mx-1" style="margin:0px;">');
        tmpHTMLArr.push('                <div class="col-12" style="padding:0px; padding-top:5px;color:rgb(73,175,79); font-size:13px;">');
        tmpHTMLArr.push('                    <p class="text-left">已学习' + datas[i].complete + '/' + datas[i].total + '课时</p>');
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
    var itemWidth = width + spaceWidth;
    $('#container_Overview_Course_Items').width(itemWidth * itemCount - spaceWidth);
    var funData = { id: "container_Overview_Course_Items", step: itemWidth };
    $('#arrow_Overview_Course_Left').on('click', funData, listMovePrev);
    $('#arrow_Overview_Course_Right').on('click', funData, listMoveNext);
    if ($('#wrap_Overview_Course_Items').width() > $('#container_Overview_Course_Items').width()) {
        $('.overview-list-arrow.course').hide();
    }
}

function buildOverviewExperience(data, height) {
    var idArr = ['Distribution']
    for (var key in data.level) {
        idArr.push(data.level[key].id);
    }

    var itemCount = idArr.length;
    var padding = Math.floor(40 / 350 * height);
    var width = Math.floor(padding / 40 * 215);
    var spaceWidth = Math.floor(padding / 40 * 110);
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
        tmpHTMLArr.push('   <div style="height:100%; padding:' + padding + 'px 0px;">');
        tmpHTMLArr.push('       <div class="container-fluid overview-experience-item-wrap" style="padding:0px; width:' + (width - 2) + 'px;">');
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
    $('#container_Overview_Experience_Items').width(itemWidth * itemCount - spaceWidth);
    var funData = { id: "container_Overview_Experience_Items", step: itemWidth };
    $('#arrow_Overview_Experience_Left').on('click', funData, listMovePrev);
    $('#arrow_Overview_Experience_Right').on('click', funData, listMoveNext);
    if ($('#wrap_Overview_Experience_Items').width() > $('#container_Overview_Experience_Items').width()) {
        $('.overview-list-arrow.experience').hide();
    }
}

function drawExpDistributionGraph(canvasId, datas) {
    var canvas = $('#canvas_Overview_Experience_' + canvasId);
    var parent = $($('.overview-experience-item-wrap').parent());
    var width = parent.width();
    var height = parent.height();
    canvas.attr('height', height);
    canvas.attr('width', width);
    canvas[0].width = width;
    canvas[0].height = height;
    var context = canvas[0].getContext('2d');
    context.clearRect(0, 0, width, height);
    var lineWidth = width / 215 * 30;
    var radius = Math.floor(width / 2) - lineWidth + lineWidth / 2;
    var centerX = Math.floor(width / 2);
    var centerY = Math.floor(width / 2);
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
    var legendWidth = width / 215 * 8;
    var fontSize = legendWidth / 8 * 12;
    for (var i = 0; i < datas.length; i++) {
        startRadian = endRadian;
        tmpRadian = datas[i].value / total * Math.PI * 2;
        endRadian += tmpRadian;
        context.beginPath();
        context.strokeStyle = datas[i].color;
        context.arc(centerX, centerY, radius, startRadian, endRadian);
        context.lineWidth = lineWidth;
        context.stroke();
        context.closePath();

        tmpX = centerX + radius * Math.cos(startRadian + tmpRadian / 2) - legendWidth;
        tmpY = centerY + radius * Math.sin(startRadian + tmpRadian / 2);
        context.font = 'normal normal bold  ' + fontSize + 'px \"微软雅黑\"';
        context.fillStyle = "rgb(255,255,255)";
        context.fillText(datas[i].value, tmpX, tmpY);

        tmpX = legendItemWidth * i;
        tmpY = (radius + lineWidth / 2) * 2 + 20;
        context.beginPath();
        context.rect(tmpX, tmpY, legendWidth, legendWidth);
        context.fillStyle = datas[i].color;
        context.fill();
        context.closePath();

        context.font = 'normal normal bold ' + fontSize + 'px \"微软雅黑\"';
        context.fillStyle = "rgb(71,71,71)";
        context.fillText(datas[i].name, tmpX + legendWidth + legendWidth / 2, tmpY + legendWidth);
    }
}

function drawExpCourseLevelGraph(canvasId, data) {
    var canvas = $('#canvas_Overview_Experience_' + canvasId);
    var parent = $($('.overview-experience-item-wrap').parent());
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
    var fontSize = Math.floor(width / 215 * 16);
    var bigFontSize = Math.floor(width / 215 * 36);
    context.beginPath();
    context.strokeStyle = 'rgb(230,230,230)';
    context.arc(centerX, centerY, radius, 0, Math.PI * 2);
    context.lineWidth = lineWidth;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'rgb(124,218,36)';
    context.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + data.value / 100 * Math.PI * 2);
    context.lineWidth = lineWidth;
    context.stroke();
    context.closePath();

    tmpY = (radius + lineWidth / 2) * 2 + 20;
    context.font = 'normal normal bold ' + fontSize + 'px \"微软雅黑\"';
    context.fillStyle = "rgb(71,71,71)";
    context.fillText(data.name, (width - (fontSize) * data.name.length) / 2, tmpY + fontSize / 2);

    tmpY = radius + lineWidth / 2;
    context.font = 'normal normal bold ' + bigFontSize + 'px \"微软雅黑\"';
    context.fillStyle = "rgb(71,71,71)";
    context.fillText(data.value + '%', (width - (bigFontSize) * ((data.value + '%').length - 1)) / 2, tmpY + bigFontSize / 2);
}

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
    tmpHTMLArr.push('            <div id="container_Overview_Times_Items" style="height:100%;">');
    tmpHTMLArr.push('               <div style="display: inline-block; height:100%; width: 100%;">');
    tmpHTMLArr.push('                  <div style="height:100%; padding:0px; padding-top:' + padding + 'px;">');
    tmpHTMLArr.push('                      <div class="container-fluid overview-times-item-wrap" style="padding:0px;">');
    tmpHTMLArr.push('                          <div class="row" style="margin:0px;">');
    tmpHTMLArr.push('                              <div class="col-12" style="padding:0px; ">');
    tmpHTMLArr.push('                                   <canvas id="canvas_Overview_Time"></canvavs>');
    tmpHTMLArr.push('                              </div>');
    tmpHTMLArr.push('                           </div>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('       <div class="col-1 text-center">');
    tmpHTMLArr.push('            <div class="overview-list-arrow times" id="arrow_Overview_Times_Right">');
    tmpHTMLArr.push('                <i class="fa fa-chevron-right"></i>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');

    $('#Content_Overview_Experience').after($(tmpHTMLArr.join('')));
    var funData = { id: "container_Overview_Times_Items", step: 100 };
    $('#arrow_Overview_Times_Left').on('click', funData, listMovePrev);
    $('#arrow_Overview_Times_Right').on('click', funData, listMoveNext);
}

function drawTimesGraph(datas) {
    var barWidth = 15;
    var barSpace = 10;
    var lineWidth = 1;
    var canvas = $('#canvas_Overview_Time');
    var parent = $($('.overview-times-item-wrap').parent());
    var width = (barWidth + barSpace) * datas.length;
    var height = parent.height();
    $('#container_Overview_Times_Items').width(width);
    if ($('#wrap_Overview_Times_Items').width() > $('#container_Overview_Times_Items').width()) {
        $('.overview-list-arrow.times').hide();
    }

    canvas.attr('height', height);
    canvas.attr('width', width);
    canvas[0].width = width;
    canvas[0].height = height;
    var context = canvas[0].getContext('2d');
    context.clearRect(0, 0, width, height);
    var maxValue = datas[0].value;
    for (var i = 0; i < datas.length; i++) {
        maxValue = Math.max(maxValue, datas[i].value);
    }

    var unit = Math.floor((height - 10 - 20) / maxValue);
    var startX = 0;
    var startY = height - 20;
    var ltX, ltY, rtX, rtY, rbX, rbY, linearGradient, bHeight, bWidth, tmpX, tmpY, tmpArr, tmpData;
    for (var i = 0; i < datas.length; i++) {
        tmpData = datas[i];
        if (tmpData.value <= 0) {
            startX = rtX + barSpace;
            continue;
        }

        ltX = startX;
        ltY = startY - tmpData.value * unit - lineWidth * 2;
        rtX = startX + barWidth + lineWidth;
        rtY = ltY;
        rbX = rtX;
        rbY = startY;
        bHeight = tmpData.value * unit + lineWidth * 2;
        bWidth = barWidth + lineWidth * 2;
        //draw bar
        linearGradient = context.createLinearGradient(ltX, ltY, 0, bHeight);
        linearGradient.addColorStop(0, "rgb(98,163,54)");
        linearGradient.addColorStop(1, "rgb(128,184,95)");
        context.fillStyle = linearGradient;
        context.fillRect(ltX, ltY, bWidth, bHeight);
        //draw border
        context.strokeStyle = 'rgb(167,196,150)';
        context.lineWidth = 1;
        context.moveTo(startX, startY);
        context.lineTo(ltX, ltY);
        context.lineTo(rtX, rtY);
        context.lineTo(rbX, rbY);
        context.lineTo(startX, startY);
        context.stroke();
        //draw time label
        tmpX = ltX + 4;
        tmpY = ltY - 2;
        context.font = "normal normal bold 11px \"微软雅黑\"";
        context.fillStyle = "rgb(97,97,97)";
        context.fillText(tmpData.value, tmpX, tmpY);
        //draw date label
        tmpX = startX;
        tmpY = startY + 12;
        context.font = "normal normal 600 8px \"微软雅黑\"";
        context.fillStyle = "rgb(97,97,97)";
        tmpArr = tmpData.date.split('-');
        context.fillText(tmpArr[1] + '-' + tmpArr[2], tmpX, tmpY);
        //calculate next X
        startX = rtX + barSpace;
    }
}

function rebuildOverviewContents(data, contentHeight, itemHeight) {
    buildOverviewHonor(data.honor, itemHeight.s);
    buildOverviewCourse(data.course, itemHeight.l);
    buildOverviewExperience(data.experience, itemHeight.l);
    drawExpDistributionGraph('Distribution', data.experience.distribution);
    for (var key in data.experience.level) {
        drawExpCourseLevelGraph(data.experience.level[key].id, data.experience.level[key]);
    }

    buildOverviewTimes(data.codetimes, itemHeight.e);
    drawTimesGraph(data.codetimes.times);
}

function rebuildOverviewTitles(data, contentHeight, itemHeight) {
    var totalCourse = 0;
    var completeCourse = 0;
    for (var i = 0; i < data.course.length; i++) {
        completeCourse += data.course[i].complete;
        totalCourse += data.course[i].total;
    }

    var totalExp = 0;
    for (var i = 0; i < data.experience.distribution.length; i++) {
        totalExp += data.experience.distribution[i].value;
    }

    var totalTime = 0;
    for (var i = 0; i < data.codetimes.times.length; i++) {
        totalTime += data.codetimes.times[i].value;
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
            text: '<p class="overview-title-item-text">已完成<span class="overview-title-item-data">' + completeCourse + '/' + totalCourse + '</span>个课程</p>'
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
            text: '<p class="overview-title-item-text">累计编程<span class="overview-title-item-data">' + totalTime +
                '</span>小时</p><p class="overview-title-item-text">超过了<span class="overview-title-item-data">' + data.codetimes.beyond +
                '%</span>的小伙伴</p>'
        }
    ];

    for (var i = 0; i < constArr.length; i++) {
        var id = 'title_Overview_' + constArr[i].id;
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

function refereshMessage() {
    return;
    _registerRemoteServer();
    $.ajax({
        type: 'GET',
        async: true,
        url: _getRequestURL(_gURLMapping.data.studentcenter, { symbol: 'config_student_index' }),
        data: '',
        success: function (responseData, status) {
            if ($(responseData).find('err').length > 0) {
                _showGlobalMessage($(responseData).find('err').attr('msg'), 'danger', 'alert_GetMessage_Error');
                return;
            } else {
                $('.left-bar-message-count').text($(responseData).find('msg').length);
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            _showGlobalMessage('无法获取消息，请联系技术支持！', 'danger', 'alert_GetOverviewInfo_Error');
        }
    });

    window.setTimeout(refereshMessage, 15000);
}

function rebuildSettingsPanel(contentHeight) {
    var tmpHeight = calcSettingsItemheight(contentHeight);
    //_registerRemoteServer();
    //$.ajax({
    //    type: 'POST',
    //    async: true,
    //    url: _getRequestURL(_gURLMapping.data.studentcenter, { symbol: 'config_student_index' }),
    //    data: '',
    //    success: function (responseData, status) {
    //        if ($(responseData).find('err').length > 0) {
    //            _showGlobalMessage($(responseData).find('err').attr('msg'), 'danger', 'alert_GetOverviewInfo_Error');
    //            return;
    //        } else {
    //            rebuildOverviewTitles(responseData, contentHeight, itemHeight);
    //            rebuildOverviewContents(responseData, contentHeight, itemHeight);
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
        profile: {
            header: 'image/ikcoderkid.png',
            name: 'Terry',
            gender: '男',
            birthday: '2009-10-1',
            city: '广东-深圳',
            school: '深圳实验小学'
        }
    }

    rebuildSettingsTitles(tmpHeight);
    rebuildSettingsContents(data, tmpHeight);
}

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
}

function buildSettingsProfile(data, tmpHeight) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid" id="wrap_Settings_Profile" style="background-color:rgb(255,255,255); border-bottom:solid 1px rgb(236,239,241);">');
    tmpHTMLArr.push('    <div class="row justify-content-start align-items-center" style="height:' + tmpHeight + 'px">');
    tmpHTMLArr.push('        <div class="col-10 offset-1">');
    tmpHTMLArr.push('            <form class="my-3">');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <label for="img_Settings_Profile_Header" class="col-2 col-form-label">头像</label>');
    tmpHTMLArr.push('                    <div class="col-7">');
    tmpHTMLArr.push('                        <img id="img_Settings_Profile_Header" style="width: 100px; height: 100px;">');
    tmpHTMLArr.push('                        <button type="button" class="btn btn-info" id="btn_Settings_Profile_Upload_Header" style="margin-bottom: -60px;" data-toggle="modal" data-target="#mWindow_customHeaderModal">上传新头像</button>');
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
    tmpHTMLArr.push('                    <label class="col-2">生日</label>');
    tmpHTMLArr.push('                    <div class="col-2">');
    tmpHTMLArr.push('                        <select class="form-control" id="select_Settings_Profile_User_Birthday_Year" style="height: calc(1.85rem) !important;"></select>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                    <label class="col-1">年</label>');
    tmpHTMLArr.push('                    <div class="col-1" style="padding: 0px;">');
    tmpHTMLArr.push('                        <select class="form-control" id="select_Settings_Profile_User_Birthday_Month" style="height: calc(1.85rem) !important;">');
    tmpHTMLArr.push('                            <option selected>1</option>');
    tmpHTMLArr.push('                            <option>2</option>');
    tmpHTMLArr.push('                            <option>3</option>');
    tmpHTMLArr.push('                            <option>4</option>');
    tmpHTMLArr.push('                            <option>5</option>');
    tmpHTMLArr.push('                            <option>6</option>');
    tmpHTMLArr.push('                            <option>7</option>');
    tmpHTMLArr.push('                            <option>8</option>');
    tmpHTMLArr.push('                            <option>9</option>');
    tmpHTMLArr.push('                            <option>10</option>');
    tmpHTMLArr.push('                            <option>11</option>');
    tmpHTMLArr.push('                            <option>12</option>');
    tmpHTMLArr.push('                        </select>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                    <label class="col-1">月</label>');
    tmpHTMLArr.push('                    <div class="col-1" style="padding: 0px;">');
    tmpHTMLArr.push('                        <select class="form-control" id="select_Settings_Profile_User_City_Province" style="height: calc(1.85rem) !important;"></select>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                    <label class="col-1"> 日</label>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <label class="col-2">所在城市</label>');
    tmpHTMLArr.push('                    <div class="col-2">');
    tmpHTMLArr.push('                        <select class="form-control" id="select_Settings_Profile_User_City_Province" style="height: calc(1.85rem) !important;"></select>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                    <label class="col-1" id="title_Settings_Profile_User_City_Province"></label>');
    tmpHTMLArr.push('                    <div class="col-2" style="padding: 0px;">');
    tmpHTMLArr.push('                        <select class="form-control" id="select_Settings_Profile_User_City_City" style="height: calc(1.85rem) !important;"></select>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                    <label class="col-1" id="title_Settings_Profile_User_City_City"></label>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <label for="txt_Settings_Profile_User_School" class="col-2 col-form-label">就读学校</label>');
    tmpHTMLArr.push('                    <div class="col-8">');
    tmpHTMLArr.push('                        <input type="text" class="form-control" id="txt_Settings_Profile_User_School" placeholder="请输入就读的学校名称">');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <div class="col text-center">');
    tmpHTMLArr.push('                        <button type="button" class="btn btn-info col-3" id="btn_Settings_Profile_Save_Profile">保存</button>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('            </form>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
}

function buildSettingsChangePWD(tmpHeight) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid" id="wrap_Settings_PWD" style="background-color:rgb(255,255,255); border-bottom:solid 1px rgb(236,239,241);">');
    tmpHTMLArr.push('    <div class="row justify-content-start align-items-center" style="height:' + tmpHeight + 'px">');
    tmpHTMLArr.push('        <div class="col-10 offset-1">');
    tmpHTMLArr.push('            <form class="my-3">');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <h4 style="color:rgb(107,129,140);">密码修改</h4>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <label for="txt_Settings_PWD_Old_PWD" class="col-3 col-form-label">旧密码</label>');
    tmpHTMLArr.push('                    <div class="col-8">');
    tmpHTMLArr.push('                        <input type="password" class="form-control" id="txt_Settings_PWD_Old_PWD" placeholder="请输入姓名">');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <label for="txt_Settings_PWD_New_PWD" class="col-3 col-form-label">新密码</label>');
    tmpHTMLArr.push('                    <div class="col-8">');
    tmpHTMLArr.push('                        <input type="password" class="form-control" id="txt_Settings_PWD_New_PWD" placeholder="请输入姓名">');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <label for="txt_Settings_PWD_Confirm_PWD" class="col-3 col-form-label">确认新密码</label>');
    tmpHTMLArr.push('                    <div class="col-8">');
    tmpHTMLArr.push('                        <input type="password" class="form-control" id="txt_Settings_PWD_Confirm_PWD" placeholder="请输入姓名">');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="form-group row">');
    tmpHTMLArr.push('                    <div class="col text-center">');
    tmpHTMLArr.push('                        <button type="button" class="btn btn-info col-3" id="btn_Settings_PWD_Save_PWD">保存</button>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('            </form>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
}

function rebuildSettingsContents(data, tmpHeight) {
    buildSettingsProfile(data.profile, tmpHeight.p - 1);
    buildSettingsChangePWD(tmpHeight.c - 1);
}

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
}

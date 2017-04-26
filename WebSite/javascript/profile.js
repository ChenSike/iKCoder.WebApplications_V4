'use strict';

function initPage() {
    $('.navbar.navbar-expand-lg.navbar-light').css('background-color', 'rgb(246,246,246)');
    $('.img-header-logo').attr('src', 'image/logo-new-gray.png');
    initEvents();
    resetCategoryItemCSS($($('.left-bar-category-item')[0]));
    rebuildContent('overview');
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
    //$('#wrap_Category_Content').empty();
    switch (symbol) {
        case 'overview':
            rebuildOverviewPanel(contentHeight);
            break;
        case 'message':

            break;
        case 'report':

            break;
        case 'settings':

            break;
        default:
            break;
    }
}

function calcItemheight(contentHeight) {
    var minHeight = Math.floor(150 / 1200 * contentHeight);
    var bigHeight = Math.floor(350 / 1200 * contentHeight);
    var tmpHeightArr = [];
    if (minHeight < 115) {
        minHeight = 115;
    }

    bigHeight = Math.floor((contentHeight - minHeight) / 3);
    return { s: minHeight, l: bigHeight };
}

function rebuildOverviewPanel(contentHeight) {
    var tmpHeight = calcItemheight(contentHeight);
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
    rebuildOverviewTitles({}, contentHeight, tmpHeight);
    rebuildOverviewContents({}, contentHeight, tmpHeight);
}

function buildOverviewHonor(data, height) {
    var itemCount = 9;
    var nameArr = ['算法小达人', '计算机小专家', '语言大师', '小画家', '小小数学家', '音乐家', '科学智多星', '分享达人', '无人机小飞手'];
    var padding = Math.floor(20 / 150 * height);
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid" id="Content_Overview_Honor" style="background-color:rgb(255,255,255); border-bottom:solid 1px rgb(236,239,241);">');
    tmpHTMLArr.push('    <div class="row align-items-center" id="" style="height:' + (height - 1) + 'px;">');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('           <div class="overview-honor-list-arrow" id="arrow_Overview_Honor_Left">');
    tmpHTMLArr.push('               <i class="fa fa-chevron-left"></i>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-10 align-items-center" id="wrap_Overview_Honor_Items" style="height:100%; overflow: hidden;">');
    tmpHTMLArr.push('            <div id="container_Overview_Honor_Items" style="height:100%;">');
    for (var i = 1; i < itemCount + 1; i++) {
        tmpHTMLArr.push('                <div class="text-center" style="display: inline-block; height:100%; padding-right:10px;">');
        tmpHTMLArr.push('                    <div style="height:100%; padding:' + padding + 'px 0px;">');
        tmpHTMLArr.push('                        <img src="image/honor/h_' + i + '_u.png" style="height: calc(100% - 30px);" />');
        tmpHTMLArr.push('                        <p class="overview-honor-item-text active-item">' + nameArr[i] + '</p>');
        tmpHTMLArr.push('                    </div>');
        tmpHTMLArr.push('                </div>');
    }

    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('           <div class="overview-honor-list-arrow" id="arrow_Overview_Honor_Right">');
    tmpHTMLArr.push('               <i class="fa fa-chevron-right"></i>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');

    $('#wrap_Category_Content').prepend($(tmpHTMLArr.join('')));
    var itemWidth = height - Math.floor(20 / 150 * height * 2) - 30 + 14;
    $('#container_Overview_Honor_Items').width(itemWidth * itemCount);
    var funData = { id: "container_Overview_Honor_Items", step: itemWidth };
    $('#arrow_Overview_Honor_Left').on('click', funData, listMovePrev);
    $('#arrow_Overview_Honor_Right').on('click', funData, listMoveNext);
    if ($('#wrap_Overview_Honor_Items').width() > $('#container_Overview_Honor_Items').width()) {
        $('.overview-honor-list-arrow').hide();
    }
}

function buildOverviewCourse(data, height) {
    var itemCount = 9;
    var nameArr = ['算法小达人', '计算机小专家', '语言大师', '小画家', '小小数学家', '音乐家', '科学智多星', '分享达人', '无人机小飞手'];
    var padding = Math.floor(65 / 350 * height);
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid" id="Content_Overview_Course" style="background-color:rgb(255,255,255); border-bottom:solid 1px rgb(236,239,241);">');
    tmpHTMLArr.push('    <div class="row align-items-center" style="height:' + (height - 1) + 'px;">');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('           <div class="overview-course-list-arrow" id="arrow_Overview_Course_Left">');
    tmpHTMLArr.push('               <i class="fa fa-chevron-left"></i>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-10 align-items-center" id="wrap_Overview_Course_Items" style="height:100%; overflow: hidden;">');
    tmpHTMLArr.push('            <div id="container_Overview_Course_Items" style="height:100%;">');
    for (var i = 1; i < itemCount + 1; i++) {
        tmpHTMLArr.push('                <div class="text-center" style="display: inline-block; height:100%; padding-right:10px;">');
        tmpHTMLArr.push('                    <div style="height:100%; padding:' + padding + 'px 0px;">');
        tmpHTMLArr.push('                        <img src="image/honor/h_' + i + '_u.png" style="height: calc(100% - 30px);" />');
        tmpHTMLArr.push('                    </div>');
        tmpHTMLArr.push('                </div>');
    }

    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('           <div class="overview-course-list-arrow" id="arrow_Overview_Course_Right">');
    tmpHTMLArr.push('               <i class="fa fa-chevron-right"></i>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');

    $('#wrap_Category_Content').append($(tmpHTMLArr.join('')));
    var itemWidth = height - Math.floor(65 / 350 * height) + 10;
    $('#container_Overview_Course_Items').width(itemWidth * itemCount);
    var funData = { id: "container_Overview_Course_Items", step: itemWidth };
    $('#arrow_Overview_Course_Left').on('click', funData, listMovePrev);
    $('#arrow_Overview_Course_Right').on('click', funData, listMoveNext);
    if ($('#wrap_Overview_Course_Items').width() > $('#container_Overview_Course_Items').width()) {
        $('.overview-course-list-arrow').hide();
    }
}


function rebuildOverviewContents(datas, contentHeight, itemHeight) {
    buildOverviewHonor({}, itemHeight.s);
    //buildOverviewCourse({}, itemHeight.l);
}

function rebuildOverviewTitles(datas, contentHeight, itemHeight) {
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
            text: '<p class="overview-title-item-text">已完成<span class="overview-title-item-data">12/150</span>个课程</p>'
        }, {
            id: 'Empirical',
            height: itemHeight.l,
            bgColor: 'rgb(236,239,241)',
            color: 'rgb(77,208,225)',
            icon: 'star',
            text: '<p class="overview-title-item-text"><span class="overview-title-item-data">4650</span></p><p class="overview-title-item-text">经验值</p>'
        }, {
            id: 'Times',
            height: itemHeight.l,
            bgColor: 'rgb(248,250,251)',
            color: 'rgb(124,77,255)',
            icon: 'clock-o',
            text: '<p class="overview-title-item-text">累计编程<span class="overview-title-item-data">136</span>小时</p><p class="overview-title-item-text">超过了<span class="overview-title-item-data">95%</span>的小伙伴</p>'
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
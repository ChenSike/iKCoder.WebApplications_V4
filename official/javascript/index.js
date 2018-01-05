'use strict';

var _gSections = [
    [
        { icon: 'fa-graduation-cap', img: 'curriculum', text: '精选全球顶尖课程' },
        { icon: 'fa-desktop', img: 'plat', text: '全程配套专有平台' },
        { icon: 'fa-id-card-o', img: 'personal', text: '个性化渐进式学习' },
        { icon: 'fa-pie-chart', img: 'reportcircle', text: '全方位详细报告' },
        { icon: 'fa-users', img: 'project', text: '线上线下项目实战' },
        { icon: 'fa-language', img: 'language', text: '英文词汇同步学习' },
        { icon: 'fa-share-square-o', img: 'share', text: '孩子作品随时分享' },
        { icon: 'fa-space-shuttle', img: 'intelaccess', text: '智能外设辅助学习' }
    ]
];

var _gImages = [];

function initPage() {
    prevInitTipImg();
    initPageEvent();
};

function buildHTMLSection_1() {
    var items = _gSections[0];
    var tmpStrArr = [];
    for (var i = 0; i < items.length; i++) {
        tmpStrArr = [];
        tmpStrArr.push('<div class="col-12 col-sm-4 col-md-3 marginTop-30">');
        tmpStrArr.push('    <div class="row">');
        tmpStrArr.push('        <div class="col">');
        tmpStrArr.push('            <i class="fa ' + items[i].icon + ' fa-5x text-5BC0DE feature-item" data-target="' + items[i].img + '"></i>');
        tmpStrArr.push('        </div>');
        tmpStrArr.push('    </div>');
        tmpStrArr.push('    <div class="row">');
        tmpStrArr.push('        <div class="col">');
        tmpStrArr.push('            <p>' + items[i].text + '</p>');
        tmpStrArr.push('        </div>');
        tmpStrArr.push('    </div>');
        tmpStrArr.push('</div>');
        $('#wrap_Section_1').append($(tmpStrArr.join('')));
    }

    $('#wrap_Section_1 .feature-item').on('mouseenter', function () {
        var wrap = $('.wrap-section-1-item-tip');
        $('.wrap-section-1-item-tip .image-tip').attr('src', 'image/tips/' + $(arguments[0].target).attr('data-target') + '.png');
        wrap.css('top', $(arguments[0].target).offset().top - wrap.height() + 'px');
        wrap.css('left', $(arguments[0].target).offset().left + $(arguments[0].target).width() / 2 - wrap.width() / 2 + 'px');
        wrap.fadeIn();
    });

    $('#wrap_Section_1 .feature-item').on('mouseleave', function () {
        $('.wrap-section-1-item-tip').fadeOut();
    });

    _adjustPageSize();
};

function initPageEvent() {
    $('#btn_ShowDetail').on('click', function () {
    });
};

function prevInitTipImg() {
    var items = _gSections[0];
    _gImages = [];
    _gLoadImgCallBack = buildHTMLSection_1;
    for (var i = 0; i < items.length; i++) {
        _gImages.push('image/tips/' + items[i].img + '.png');
    }

    _loadImages();
};

function _adjustPageSize() {
    $('#wrap_Main').css('top', '0px');
    $('#col_Wrap_Main').height('auto');
    $('footer').css('top', $('#wrap_Main').height() + 'px');
    $('header').css('background-color', 'transparent');
};
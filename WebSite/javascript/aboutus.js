'use strict';

function initPage() {
    $('.img-header-logo').attr('src', 'image/logo-new-gray.png');
    adjustTitleFont();
    $(window).resize(function () {
        adjustTitleFont();
    });
};

function adjustTitleFont() {
    var orgWidth = 1920;
    var orgHeight = 750;
    var orgTop = 300;
    var orgLeft = 800;
    var orgSpace = 170;

    var wrap = $('#wrap_section_1_title');
    var currHeight = wrap.height();
    var currWidth = wrap.width();
    var currTop = Math.floor(currHeight / orgHeight * orgTop);
    var currLeft = Math.floor(currWidth / orgWidth * orgLeft);
    var currSpace = Math.floor(currWidth / orgWidth * orgSpace);
    var tmpWidth = currWidth - currSpace - currLeft;

    if ($('#temp_Div_Test_Font').length <= 0) {
        var tmpHTML = '<div id="temp_Div_Test_Font" style="display:none; position:absolute; top: -10000px; left:-10000px;">只要有梦想, 谁都可以创造非凡</div>';
        $('body').append($(tmpHTML));
    }

    var testDiv = $('#temp_Div_Test_Font');
    var title = $('.wrap-section-1-title');
    for (var i = 10; i < 100; i++) {
        testDiv.css('font-size', i + 'px');
        if (testDiv.width() >= tmpWidth) {
            title.css('font-size', i + 'px');
            break;
        }
    }

    title.css('top', currTop + 'px');
    title.css('left', currLeft + 'px');
};
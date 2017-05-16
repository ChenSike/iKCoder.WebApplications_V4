'use strict';

function initPage() {
    adjustPositions();
    $(window).resize(function () {
        adjustPositions();
    });

    $('#btn_StartPlay').on('click', function () {
        window.location.href = "qualitycourse.html?scene=p_3_1&rnd=" + Date.now();
    });
};

function adjustPositions() {
    $('.wrap-background-body').css('width', '100%');
    $('.wrap-background-body').css('height', '100%');
    var bodyWidth = Math.max($('body').width(), $('html').width(), $('body')[0].scrollWidth);
    var bodyHeight = Math.max($('body').height(), $('html').height(), $('body')[0].scrollHeight);
    var background = $('.wrap-background-body img');
    var tRate = 1;
    if (bodyWidth > 1920 || bodyHeight > 1080) {
        if (bodyWidth / 1920 > bodyHeight / 1080) {
            tRate = bodyWidth / 1920;
        } else {
            tRate = bodyHeight / 1080;
        }
    }

    var imgWidth = 1920 * tRate;
    var imgHeight = 1080 * tRate;
    background.width(imgWidth);
    background.height(imgHeight);
    var tTop = (imgHeight - bodyHeight) / 2;
    var tLeft = (imgWidth - bodyWidth) / 2;
    var tRight = (tRate > 1 ? tLeft + bodyWidth : 1920);
    var tBottom = (tRate > 1 ? tTop + bodyHeight : 1080);
    background.css('clip', 'rect(' + tTop + 'px ' + imgWidth + 'px ' + imgHeight + 'px ' + tLeft + 'px)');
    background.css('left', (-tLeft) + 'px');
    background.css('top', (-tTop) + 'px');

    $('.wrap-background-body').width(bodyWidth);
    $('.wrap-background-body').height(Math.max($('body').height(), $('html').height(), $('body')[0].scrollHeight));

    $('#wrap_Page_Content').css('margin-top', (280 / 1080 * bodyHeight) + 'px');
    $('#wrap_Page_Content').css('margin-left', (330 / 1920 * bodyWidth) + 'px');

}
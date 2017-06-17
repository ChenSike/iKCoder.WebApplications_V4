'use strict';

function initPage() {
    //$('.wrap-vadio').hide();
    //$('.mask-vadio').hide();
    $('.fa.fa-volume-up').hide();
    adjustPositions();
    $(window).resize(function () {
        adjustPositions();
        handleWindowResize();
    });

    $('#btn_Start').on('click', function () {
        window.location.href = "qualitycourse.html?scene=qc01_3_1&rnd=" + Date.now();
    });

    $('#btn_Volume').on('click', function (eventObj) {
        //if ($('#vadio_Content')[0].muted) {
        if (audio.muted) {
            $('.fa-stack.fa-lg').show();
            $('.fa.fa-volume-up').hide();
            //$('#vadio_Content')[0].muted = false;
            audio.muted = false;
        } else {
            $('.fa-stack.fa-lg').hide();
            $('.fa.fa-volume-up').show();
            //$('#vadio_Content')[0].muted = true;
            audio.muted = true;
        }
    });

    init();
    //$('#vadio_Content').on('loadstart', function () {
    //    vadioProgress(0);
    //});

    //$('#vadio_Content').on('play', function () {
    //    vadioProgress(100);
    //});

    //$('#vadio_Content').attr('src', 'media/qc01.mp4');
};


function adjustPositions() {
    var wrap = $('.wrap-background');
    var img = $('.img-background');
    var content = $('#wrap_Page_Content');
    var bodyWidth = $('body').width();
    var bodyHeight = $('body').height();
    var aHeight = bodyHeight - $('nav').height();
    var imgOrgW = 969;
    var imgOrgH = 475;
    var bodyOrgW = 1960;
    var bodyOrgH = 1080;
    var rate = 1;
    var hRate = bodyHeight / bodyOrgH;
    if (bodyHeight / bodyWidth > bodyOrgH / bodyOrgW) {
        rate = bodyWidth / bodyOrgW;
    } else {
        rate = bodyHeight / bodyOrgH;
    }
    img.width(imgOrgW * rate);
    img.height(imgOrgH * rate);
    wrap.css('top', ((aHeight - img.height()) / 2) + 'px');
    wrap.css('left', ((bodyWidth - img.width()) / 2) + 'px');
    content.height(img.height());
    content.width(img.width());
    var fontSize = Math.floor(36 * rate);
    $('#title_Content').css('font-size', fontSize + 'px');
    $('#title_Content').css('margin-bottom', Math.floor(60 * rate) + 'px');
    fontSize = Math.ceil(14 * rate);
    $('.text-content').css('font-size', fontSize < 12 ? '12px' : fontSize + 'px');
    $('.text-content').css('margin-bottom', Math.floor(30 * rate) + 'px');

    $('#wrap_Page_Content').show();
    $('.wrap-scene').width($('body').width());
    $('.wrap-scene').height($('body').height());
    $('.contianer-scene').width($('body').width()-3);
    $('.contianer-scene').height($('body').height()-3);
    //var wrapProg = $('.wrap-progress');
    //wrapProg.width(500 * rate);
    //wrapProg.css('top', (wrap.offset().top + img.height()) + 'px');
    //wrapProg.css('left', ((bodyWidth - wrapProg.width()) / 2) + 'px');
    //wrapProg.css('margin-top', 80 * rate + 'px');
};

function vadioProgress(value) {
    var pbar = $('.progress-bar');
    var tmpValue = (typeof (value) == 'number' ? value : parseInt(pbar.attr('aria-valuenow')));
    pbar.width((100 - tmpValue) / 10 + '%');
    pbar.attr('aria-valuenow', parseInt(pbar.width()));
    if (tmpValue == 100) {
        $('.wrap-vadio').show();
        $('.mask-vadio').show();
        $('#img_Background').hide();
        $('#vadio_Content')[0].volume = 0.3;
    }

    window.setTimeout('vadioProgress();', 10);
}
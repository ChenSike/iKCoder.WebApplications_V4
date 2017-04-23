'use strict';

function initPageEvents() {
    $('#btn_Fast_FreeSignUp').on('click', function () {
        openSignUp($('#txt_Fast_FreeSignUp').val());
    });

    $('#btn_Fast_HelpVideo').on('click', function () {
        alert('Help Video');
    });

    $('#btn_ShowDetail').on('click', function () {
        window.location.href = "detailedintroduce.html?cid=" + _gCID;
    });

    $('.feature-item').on('mouseenter', function (event) {
        var wrap = $('.wrap_section_1_tip');
        wrap.css('top', $(event.target).offset().top - wrap.height() + 'px');
        wrap.css('left', $(event.target).offset().left + $(event.target).width() / 2 - wrap.width() / 2 + 'px');
        $('.img-tip-bakcground').attr('src', 'image/tips/' + $(event.target).attr('data-target') + '.png');
        wrap.fadeIn();
    });

    $('.feature-item').on('mouseleave', function () {
        $('.wrap_section_1_tip').fadeOut();
    });
}

function initPage() {
    initPageEvents();
}
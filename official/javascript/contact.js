'use strict';

var _gImages = ['image/background/contact_1.png'];

function initPage() {
    _loadImages();
    initPageEvent();
};

function initPageEvent() {
};

_gLoadImgCallBack = function _adjustPageSize(setHeight) {
    $('#wrap_Main').css('top', $('header').height() + 'px');
    $('#col_Wrap_Main').height('auto');
    $('footer').css('top', ($('header').height() + $('#wrap_Main').height() - 10) + 'px');
};
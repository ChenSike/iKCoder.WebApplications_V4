'use strict';

var _gImages = [
    'image/background/product_1.png',
    'image/background/product_2.png',
    'image/background/product_3.png',
    'image/background/product_4.png',
    'image/background/product_5.png'
];

function initPage() {
    _loadImages(_adjustPageSize);
    initPageEvent();
};

function initPageEvent() {
    $('#btn_OnlineExperience').on('click', function () {
        window.open('/ikcoder/workplatform.html?scene=OE_01_001&step=1', 'workplatform', "")
    });
};
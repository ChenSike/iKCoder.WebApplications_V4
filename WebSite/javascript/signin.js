'use strict';

function initPage() {
    $('.img-header-logo').attr('src', 'image/logo-new-gray.png');
    $(window).resize(function () {
        //adjustFooter();
    });

    //adjustFooter();
}


function adjustFooter() {
    var bodyHeight = $('html').height();
    var contentHeight = $("#section_Content").height();
    var headerHeight = $("#navbar_Header").height();
    var footerHeight = $("footer").height();
    var tmpHeight = (bodyHeight - contentHeight - headerHeight - footerHeight) / 2;
    $(".space-row-content").height(tmpHeight > 0 ? tmpHeight : 0);
};
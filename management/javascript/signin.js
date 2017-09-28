'use strict';

function initPage() {
    $("#image_page_bg").css("height", $("body").height() + 'px');
    $('#btn_Login').on('click', function () {
        window.location.href = "main.html";
    });
    $("#input-b9").fileinput({
        showPreview: false,
        showUpload: false,
        elErrorContainer: '#kartik-file-errors',
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

}
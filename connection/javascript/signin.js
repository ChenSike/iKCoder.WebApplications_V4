'use strict';

function initPage() {
    $("#image_page_bg").css("height", $("body").height() + 'px');
    $('#btn_SignIn').on('click', function () {
        signin();
    });
    $('#btn_SignUp').on('click', function () {
        window.location.href = "signup.html";
    });
};

function signin() {
    if ($("#txt_SignIn").val().trim() == "") {
        _showGlobalMessage('请输入用户名', 'danger', 'alert_SignIn_UserName');
        return;
    }

    if ($("#pwd_SignIn").val().trim() == "") {
        _showGlobalMessage('请输入密码', 'danger', 'alert_SignIn_PWD');
        return;
    }

    var successFn = function (data, status) {
        if ($(data).find('err').length > 0) {
            _showGlobalMessage($(data).find('err').attr('msg'), 'danger', 'alert_SignIn_CannotSignIn');
            return;
        }

        var userName = $($(data).find('msg')[0]).attr('logined_user_name');
        $.cookie('logined_user_name', userName);
        window.location.href = 'management.html';
    };

    ajaxFn(
        'GET',
        _getRequestURL(_gURLMapping.account.signin, {
            name: $("#txt_SignIn").val().trim(),
            pwd: $("#pwd_SignIn").val().trim()
        }),
        '',
        successFn,
        function () {
            _showGlobalMessage('无法登录, 请联系客服!', 'danger', 'alert_SignIn_CannotSignIn');
        }
    );
}
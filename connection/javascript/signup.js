'use strict';

function initPage() {
    $("#image_page_bg").css("height", $("body").height() + 'px');
    $('#btn_SignUp').on('click', function () {
        signup();
    });
    $('#btn_SignIn').on('click', function () {
        window.location.href = "index.html";
    });
};

function signup() {
    if ($("#txt_SignUp").val().trim() == "") {
        _showGlobalMessage('请输入用户名', 'danger', 'alert_SignUp_UserName');
        return;
    }

    if ($("#pwd_SignUp").val().trim() == "") {
        _showGlobalMessage('请输入密码', 'danger', 'alert_SignUp_PWD');
        return;
    }

    if ($("#pwd_Confirm").val().trim() == "") {
        _showGlobalMessage('请再次输入密码', 'danger', 'alert_Confirm_PWD');
        return;
    }

    if ($("#pwd_Confirm").val().trim() != $("#pwd_SignUp").val().trim()) {
        _showGlobalMessage('两次输入的密码不一致，请重新输入', 'danger', 'alert_Confirm_PWD');
        return;
    }

    var successFn = function (data, status) {
        if ($(data).find('err').length > 0) {
            _showGlobalMessage($(data).find('err').attr('msg'), 'danger', 'alert_SignUp_CannotSignIn');
            return;
        }

        var userName = $($(data).find('msg')[0]).attr('logined_user_name');
        $.cookie('logined_user_name', userName);
        window.location.href = 'index.html';
    };

    ajaxFn(
        'GET',
        _getRequestURL(_gURLMapping.account.signup, {
            name: $("#txt_SignUp").val().trim(),
            pwd: $("#pwd_SignUp").val().trim()
        }),
        '',
        successFn,
        function () {
            _showGlobalMessage('无法注册, 请联系客服!', 'danger', 'alert_SignUp_CannotSignIn');
        }
    );
}
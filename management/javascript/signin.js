﻿'use strict';

function initPage() {
    $("#image_page_bg").css("height", $("body").height() + 'px');
    $('#btn_Login').on('click', function () {
        signin();
    });
};

function getRoelObject(role) {
    switch (role) {
        case '1':
            return _roleValue.admin;
            break;
        case '2':
            return _roleValue.teacher;
            break;
        case '3':
            return _roleValue.advisor;
            break;
        case '4':
            return _roleValue.tm;
            break;
        default:
            return null;
    }
}

function signin() {
    if ($("#txt_SignIn").val().trim() == "") {
        _showGlobalMessage('请输入用户名', 'danger', 'alert_SignIn_UserName');
        return;
    }

    if ($("#pwd_SignIn").val().trim() == "") {
        _showGlobalMessage('请输入密码', 'danger', 'alert_SignIn_PWD');
        return;
    }

    var role = $('#sel_Role').val();
    if (role == _roleValue.teacher) {
        if ($("#txt_Key").val().trim() == "") {
            _showGlobalMessage('请输入授权KEY', 'danger', 'alert_SignIn_Key');
            return;
        }
    }

    _gRoleObj = getRoelObject(role);
    if (_gRoleObj == null) {
        return;
    }

    _registerRemoteServer();
    $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gRoleObj.url.signin),
        data: '<root>' +
            '<symbol>' + $("#txt_SignIn").val().trim() + '</symbol>' +
            '<password>' + $("#pwd_SignIn").val().trim() + '</password>' +
            '<licence>' + $("#txt_Key").val().trim() + '</licence>' +
            '</root>',
        success: function (data, status) {
            if ($(data).find('err').length > 0) {
                _showGlobalMessage($(data).find('err').attr('msg'), 'danger', 'alert_SignIn_CannotSignIn');
                return;
            }

            var userName = $($(data).find('msg')[0]).attr('logined_user_name');
            $.cookie('logined_user_name', userName);
            window.location.href = _gRoleObj.target + '?rnd=' + Date.now() + '&needcheckstate=1';
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            _showGlobalMessage('无法登录, 请联系客服!', 'danger', 'alert_SignIn_CannotSignIn');
        }
    });
}
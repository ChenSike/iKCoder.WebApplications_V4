'use strict';

var _checkCodeParams = {
    length: 4,
    name: 'signincode',
    width: 70,
    height: 30
};

function initPage() {
    $('.img-header-logo').attr('src', 'image/logo-new-gray.png');
    _refereshCheckCode('img_SignIn_CheckCode');
    $("#img_SignIn_CheckCode").on('click', function () {
        _refereshCheckCode('img_SignIn_CheckCode');
    });

    $("#btn_SignIn").on('click', function () {
        signIn();
    });
    
    $(window).resize(function () {
        //adjustFooter();
    });

    //adjustFooter();
}

function signIn() {
    if ($("#txt_SignIn_PhoneNumber").val().trim() == "") {
        _showGlobalMessage('请输入手机号码', 'danger', 'alert_SignIn_PhoneNumber');
        return;
    } else if (!_checkPhoneNumber($("#txt_SignIn_PhoneNumber").val().trim())) {
        _showGlobalMessage('不正确的手机号码', 'danger', 'alert_SignIn_PhoneNumber'); 
        return;
    }

    if ($("#txt_SignIn_Password").val().trim() == "") {
        _showGlobalMessage('请输入密码', 'danger', 'alert_SignIn_PWD');
        return;
    }

    if ($("#txt_SignIn_CheckCode").val().trim() == "") {
        _showGlobalMessage('请输入验证码', 'danger', 'alert_SignIn_CheckCode');
        return;
    }

    _registerRemoteServer();
    $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gURLMapping.account.signwithcode),
        data: '<root>' +
            '<symbol>' + $("#txt_SignIn_PhoneNumber").val() + '</symbol>' +
            '<password>' + $("#txt_SignIn_Password").val() + '</password>' +
            '<codename>signincode</codename>' +
            '<codevalue>' + $("#txt_SignIn_CheckCode").val() + '</codevalue>' +
            '</root>',
        success: function (data, status) {
            if ($(data).find('err').length > 0) {
                _showGlobalMessage($(data).find('err').attr('msg'), 'danger', 'alert_SignIn_CannotSignIn');
                return;
            }

            $.cookie('logined_user_name', $($(data).find('msg')[0]).attr('logined_user_name'));
            $.cookie('logined_user_nickname', $($(data).find('msg')[0]).attr('logined_nickname'));
            window.history.back();
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

function checkPwdIntension(txtField, lbField) {
    var checkVal = _checkPassword(txtField.val().trim());
    if (checkVal == 1) {
        lbField.text('弱');
        lbField.css('color', 'rgb(255,0,0)');
    } else if (checkVal == 2) {
        lbField.text('中');
        lbField.css('color', 'rgb(255,215,0)');
    } else if (checkVal == 3) {
        lbField.text('强');
        lbField.css('color', 'rgb(50,205,50)');
    }
};

function adjustFooter() {
    var bodyHeight = $('html').height();
    var contentHeight = $("#section_Content").height();
    var headerHeight = $("#navbar_Header").height();
    var footerHeight = $("footer").height();
    var tmpHeight = (bodyHeight - contentHeight - headerHeight - footerHeight) / 2;
    $(".space-row-content").height(tmpHeight > 0 ? tmpHeight : 0);
};
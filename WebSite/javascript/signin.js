'use strict';

var _timeoutRefereshCC = '';
var _prevPage = '';
var _bodyMinWidth = 330;
var _gCurrentPanel = 'signin';
var _checkCodeParams = {
    length: 4,
    name: 'signincode',
    width: 70,
    height: 30
};

function buildAgreementWindow() {
    var tmpHtmlStrArr = [];
    tmpHtmlStrArr.push('<div class="modal fade" id="mWindow_Agreement" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">');
    tmpHtmlStrArr.push('    <div class="modal-dialog" role="document">');
    tmpHtmlStrArr.push('        <div class="modal-content">');
    tmpHtmlStrArr.push('            <div class="modal-header">');
    tmpHtmlStrArr.push('                <h5 class="modal-title" id="exampleModalLongTitle" style="text-align: center; width: calc(100% - 50px);">《艾酷用户用户协议》</h5>');
    tmpHtmlStrArr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
    tmpHtmlStrArr.push('                    <span aria-hidden="true">&times;</span>');
    tmpHtmlStrArr.push('                </button>');
    tmpHtmlStrArr.push('            </div>');
    tmpHtmlStrArr.push('            <div class="modal-body">');
    tmpHtmlStrArr.push('                <div class="wrap-ifram-agreement" style="overflow-y: scroll;">');
    tmpHtmlStrArr.push('                    <iframe src="agreement.html?rnd=' + Date.now() + '" id="iframe_Agreement" scrolling="no" frameborder="0" width="100%"></iframe>');
    tmpHtmlStrArr.push('                </div>');
    tmpHtmlStrArr.push('            </div>');
    tmpHtmlStrArr.push('            <div class="modal-footer">');
    tmpHtmlStrArr.push('                <button type="button" class="btn btn-secondary"  id="btn_Close_Agreement" data-dismiss="modal">关闭</button>');
    tmpHtmlStrArr.push('                <button type="button" class="btn btn-primary disabled" id="btn_Agree_Agreement" disabled>同意</button>');
    tmpHtmlStrArr.push('            </div>');
    tmpHtmlStrArr.push('        </div>');
    tmpHtmlStrArr.push('    </div>');
    tmpHtmlStrArr.push('</div>');
    $('body').append($(tmpHtmlStrArr.join('')));

    $('#mWindow_Agreement').css('display', 'block');
    $('#mWindow_Agreement').css('display', 'none');

    $('#mWindow_Agreement').on('shown.bs.modal', function () {
        var tmpTotalHeight = $('#mWindow_Agreement').height();
        var tmpTop = $('#mWindow_Agreement .modal-dialog').offset().top;
        var tmpHeadHeight = $('#mWindow_Agreement .modal-dialog .modal-header').height();
        var tmpFootHeight = $('#mWindow_Agreement .modal-dialog .modal-footer').height();
        $('.wrap-ifram-agreement').height(Math.floor((tmpTotalHeight - tmpTop - tmpHeadHeight - tmpFootHeight) * 0.65));
        $('#iframe_Agreement').height($($('#iframe_Agreement')[0].contentWindow.document.body).height());
        if ($('#chk_Agree_Agreement').prop('checked') == false) {
            $('.wrap-ifram-agreement').scrollTop(0);
            if (!$('#btn_Agree_Agreement').hasClass('disabled')) {
                $('#btn_Agree_Agreement').addClass('disabled');
                $('#btn_Agree_Agreement').attr('disabled', 'true');
            }
        }

        $('body').css('padding', '0px');
    });

    $('#mWindow_Agreement').on('show.bs.modal', function (e) {
        $('body').css('padding', '0px');
    });

    $('.wrap-ifram-agreement').scroll(function () {
        var bodyHeight = $($('#iframe_Agreement')[0].contentWindow.document.body).height();
        var wrap = $('.wrap-ifram-agreement');
        if (wrap[0].scrollTop + wrap.height() > bodyHeight) {
            if ($('#btn_Agree_Agreement').hasClass('disabled')) {
                $('#btn_Agree_Agreement').removeClass('disabled');
                $('#btn_Agree_Agreement').removeAttr('disabled');
            }
        }
    });

    $('#btn_Agree_Agreement').on('click', function () {
        $('#chk_Agree_Agreement').prop('checked', true);
        $('#mWindow_Agreement').modal('hide');
    });
}

function initPage() {
    buildAgreementWindow();
    showCurrentPanel();
    initEvents();
    adjustPositions();
};

function showCurrentPanel() {
    var opt = getQueryString('opt');
    var signInWrap = $('#wrap_SignIn_Panel');
    var signUpWrap = $('#wrap_SignUp_Panel');
    var changeWrap = $('#wrap_ForgetPWD_Panel');
    switch (opt) {
        case 'signup':
            signInWrap.hide(1);
            changeWrap.hide(1);
            signUpWrap.show(1, resetSignUpFields);
            _refereshCheckCode('img_SignUp_CheckCode');
            break;
        case 'change':
            signInWrap.hide(1);
            signUpWrap.hide(1);
            changeWrap.show(1, resetForgetPWDFields);
            _refereshCheckCode('img_ForgetPWD_CheckCode');
            break;
        case 'signin':
        default:
            opt = 'signin';
            signUpWrap.hide(1);
            changeWrap.hide(1);
            signInWrap.show(1, resetSignInFields);
            _refereshCheckCode('img_SignIn_CheckCode');
            if ($('#chk_SignIn_Remember').is(':checked')) {
                $('#form_SignIn_Section').attr('autocomplete', 'on');
            } else {
                $('#form_SignIn_Section').attr('autocomplete', 'off');
            }

            break;
    }

    _gCurrentPanel = opt;
}

function resetSignUpFields() {
    $('#txt_SignUp_PhoneNumber').val('');
    $('#txt_SignUp_CheckCode').val('');
    _refereshCheckCode('img_SignUp_CheckCode');
    $('#txt_SignUp_NoteCode').val('');
    $('#txt_SignUp_Nickname').val('');
    $('#txt_SignUp_New_PWD').val('');
    _checkPwdIntension('', $('#lb_SignUp_NewPwd_Intension'));
    var number = getQueryString('number');
    if (number != '') {
        $('#txt_SignUp_PhoneNumber').val(number);
    }
};

function resetSignInFields() {
    //$('#txt_SignIn_PhoneNumber').val('');
    //$('#txt_SignIn_Password').val('');
    $('#txt_SignIn_CheckCode').val('');
    _refereshCheckCode('img_SignIn_CheckCode');
};

function resetForgetPWDFields() {
    $('#txt_ForgetPWD_PhoneNumber').val('');
    $('#txt_ForgetPWD_NoteCode').val('');
    $('#txt_ForgetPWD_CheckCode').val('');
    _refereshCheckCode('img_ForgetPWD_CheckCode');
    $('#txt_ForgetPWD_New_PWD').val('');
    $('#txt_ForgetPWD_Confirm_PWD').val('');
    _checkPwdIntension('', $('#lb_ForgetPWD_NewPwd_Intension'));
};

function initEvents() {
    $(".img-header-logo").on('click', function () {
        window.location.href = "../index.html?rnd=" + Date.now();
    });
    initSignInEvent();
    initSignUpEvent();
    initForgetPWDEvent();
    $(window).resize(function () {
        adjustPositions();
    });
};

function initSignInEvent() {
    $('#img_SignIn_CheckCode').on('click', function () {
        _refereshCheckCode('img_SignIn_CheckCode');
    });

    $('#linkBtn_SignIn_Goto_ForgetPWD').on('click', function () {
        $('#wrap_SignIn_Panel').hide();
        $('#wrap_SignUp_Panel').hide();
        $('#wrap_ForgetPWD_Panel').show(1, resetForgetPWDFields);
        _refereshCheckCode('img_ForgetPWD_CheckCode');
        _gCurrentPanel = 'change';
        adjustPositions();
    });

    $('#linkBtn_Goto_SignUp').on('click', function () {
        $('#wrap_SignIn_Panel').hide();
        $('#wrap_ForgetPWD_Panel').hide();
        $('#wrap_SignUp_Panel').show(1, resetSignUpFields);
        _refereshCheckCode('img_SignUp_CheckCode');
        _gCurrentPanel = 'signup';
        adjustPositions();
    });

    $("#txt_SignIn_PhoneNumber").keydown(function (event) {
        if (event.which == 13) {
            doSignIn();
        }
    });

    $("#txt_SignIn_Password").keydown(function (event) {
        if (event.which == 13) {
            doSignIn();
        }
    });

    $("#txt_SignIn_CheckCode").keydown(function (event) {
        if (event.which == 13) {
            doSignIn();
        }
    });

    $('#btn_SignIn').on('click', function () {
        doSignIn();
    });
};

function initSignUpEvent() {
    $('#img_SignUp_CheckCode').on('click', function () {
        _refereshCheckCode('img_SignUp_CheckCode');
    });

    $('#btn_SignUp_Send_NoteCode').on('click', function () {
        sendNoteCode('SignUp');
    });

    $(".js-password-signup-btn").on('click', function () {
        if ($(".js-password-signup-control").attr("type") == 'text') {
            $(".js-password-signup-control").attr("type", "password");
            $('[name="btn_signup_toggle"]').addClass('fa-eye-slash');
            $('[name="btn_signup_toggle"]').removeClass('fa-eye');
        } else {
            $(".js-password-signup-control").attr("type", "text");
            $('[name="btn_signup_toggle"]').addClass('fa-eye');
            $('[name="btn_signup_toggle"]').removeClass('fa-eye-slash');
        }
    });

    $("#txt_SignUp_New_PWD").on('blur', function () {
        _checkPwdIntension($("#txt_SignUp_New_PWD").val().trim(), $('#lb_SignUp_NewPwd_Intension'));
    });

    //$("#txt_SignUp_PhoneNumber").on('blur', function () {
    //});

    $('#linkBtn_Agree_Agreement').on('click', function () {
        $('#mWindow_Agreement').modal('show');
    });

    $('#linkBtn_SignUp_Goto_SignIn').on('click', function () {
        $('#wrap_SignUp_Panel').hide();
        $('#wrap_ForgetPWD_Panel').hide();
        $('#wrap_SignIn_Panel').show(1, resetSignInFields);
        _refereshCheckCode('img_SignIn_CheckCode');
        _gCurrentPanel = 'signin';
        adjustPositions();
    });

    $('#btn_SignUp').on('click', function () {
        doSignUp();
    });
};

var intervalCode = '';
function sendNoteCode(symbol) {
    $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gURLMapping.account.sendnotecode),
        data: '<root><username>' + $('#txt_' + symbol + '_PhoneNumber').val().trim() + '</username></root>',
        success: function (data, status) {
            var tmpBtn = $('#btn_' + symbol + '_Send_NoteCode');
            tmpBtn.empty();
            tmpBtn.append('<strong id="lbl_' + symbol + '_Send_NoteCode">60</strong>秒后重发');
            intervalCode = window.setInterval(function () { updateCountDown('lbl_' + symbol + '_Send_NoteCode'); }, 1000);
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            _showGlobalMessage('发送验证码失败, 请重新尝试!', 'danger', 'alert_' + symbol + '_Send_NoteCode');
        }
    });
};

function updateCountDown(lblId) {
    var value = parseInt($('#' + lblId).text());
    if (value == 0) {
        var tmpBtn = $('#btn_' + symbol + '_Send_NoteCode');
        tmpBtn.empty();
        tmpBtn.text('获取验证码');
        window.clearInterval(intervalCode);
        intervalCode = '';
    } else {
        value -= 1;
        $('#' + lblId).text(value + '');
    }
};

function initForgetPWDEvent() {
    $('#img_ForgetPWD_CheckCode').on('click', function () {
        _refereshCheckCode('img_ForgetPWD_CheckCode');
    });

    $('#btn_ForgetPWD_Send_NoteCode').on('click', function () {
        sendNoteCode('ForgetPWD');
    });

    $(".js-password-forgetpwd-btn").on('click', function () {
        if ($(".js-password-forgetpwd-control").attr("type") == 'text') {
            $(".js-password-forgetpwd-control").attr("type", "password");
            $('[name="btn_forgetpwd_toggle"]').addClass('fa-eye-slash');
            $('[name="btn_forgetpwd_toggle"]').removeClass('fa-eye');
        } else {
            $(".js-password-forgetpwd-control").attr("type", "text");
            $('[name="btn_forgetpwd_toggle"]').addClass('fa-eye');
            $('[name="btn_forgetpwd_toggle"]').removeClass('fa-eye-slash');
        }
    });

    $("#txt_ForgetPWD_New_PWD").on('blur', function () {
        _checkPwdIntension($("#txt_ForgetPWD_New_PWD").val().trim(), $('#lb_ForgetPWD_NewPwd_Intension'));
    });

    $('#linkBtn_ForgetPWD_Goto_SignIn').on('click', function () {
        $('#wrap_SignUp_Panel').hide();
        $('#wrap_ForgetPWD_Panel').hide();
        $('#wrap_SignIn_Panel').show(1, resetSignInFields);
        _refereshCheckCode('img_SignIn_CheckCode');
        _gCurrentPanel = 'signin';
        adjustPositions();
    });

    $('#btn_UpdatePWD').on('click', function () {
        updatePWD();
    });
};

function doSignIn() {
    if ($("#txt_SignIn_PhoneNumber").val().trim() == "") {
        _showGlobalMessage('请输入手机号码', 'danger', 'alert_SignIn_PhoneNumber');
        return;
    }

    if ($("#txt_SignIn_Password").val().trim() == "") {
        _showGlobalMessage('请输入密码', 'danger', 'alert_SignIn_PWD');
        return;
    }

    if ($("#txt_SignIn_CheckCode").val().trim() == "") {
        _showGlobalMessage('请输入图片识别码', 'danger', 'alert_SignIn_CheckCode');
        return;
    }

    var successFn = function (response) {
        if (!_getExcuted(response)) {
            _showGlobalMessage('无法登录！', 'warning', 'alert_Wrong_SignIn');
        } else {
            if ($($(response).find('msgcode')).text() == 'TOKEN') {
                _CookieUtils.set('student_token', $($(response).find('msg')).text());
                window.location.href = "profile.html";
            } else {
                _showGlobalMessage('无法获取用户信息，请重新登录！', 'warning', 'alert_Wrong_SignIn');
            }
        }
    };

    var data = {
        name: $('#txt_SignIn_PhoneNumber').val().trim(),
        pwd: $('#txt_SignIn_Password').val().trim(),
        checkcode: $("#txt_SignIn_CheckCode").val().trim()
    };

    ajaxFn('GET', _getRequestURL(_gURLMapping.account.signinwithcode, data), '', successFn);

    if ($('#chk_SignIn_Remember').is(':checked')) {
        if ($('#iframe_for_autocomplete').length <= 0) {
            $('body').append($('<iframe id="iframe_for_autocomplete" name="iframe_for_autocomplete" style="display:none;"></iframe>'));
        }

        $('#btn_AutoComplete').click();
    }
};

function doSignUp() {
    if ($('#chk_Agree_Agreement').prop('checked') == false) {
        _showGlobalMessage('必须同意《鹏博教育用户协议》！', 'warning', 'alert_Wrong_Phone');
        return;
    }

    if ($("#txt_SignUp_PhoneNumber").val().trim() == "") {
        _showGlobalMessage('请输入手机号码', 'danger', 'alert_SignUp_PhoneNumber');
    } else if (!_checkPhoneNumber($("#txt_SignUp_PhoneNumber").val().trim())) {
        _showGlobalMessage('不正确的手机号码!', 'danger', 'alert_SignUp_PhoneNumber');
    } else {
        var existSuccFn = function (responseExist) {
            var exist = _getExcuted(responseExist);
            if (exist) {
                _showGlobalMessage('该手机号码已经被注册！', 'warning', 'alert_Wrong_Phone');
                $("#txt_SignUp_PhoneNumber").focus();
            } else {
                if ($("#txt_SignUp_CheckCode").val().trim() == "") {
                    _showGlobalMessage('请输入图片识别码', 'danger', 'alert_SignUp_CheckCode');
                    return;
                }

                //if ($("#txt_SignUp_NoteCode").val().trim() == "") {
                //    _showGlobalMessage('请输入收到的短信验证码', 'danger', 'alert_SignUp_NoteCode');
                //    return;
                //}

                //if ($("#txt_SignUp_Nickname").val().trim() == "") {
                //    _showGlobalMessage('请输入一个具有辨识度的用户名', 'danger', 'alert_SignUp_NickName');
                //    return;
                //}

                if ($("#txt_SignUp_New_PWD").val().trim() == "") {
                    _showGlobalMessage('请输入密码', 'danger', 'alert_SignUp_PWD');
                    return;
                } else {
                    var checkVal = _checkPassword($("#txt_SignUp_New_PWD").val().trim());
                    if (checkVal < 0) {
                        _showGlobalMessage('密码不符合要求，请重新输入!', 'danger', 'alert_SignUp_PWD');
                        return;
                    }
                }

                var successFn = function (response) {
                    var success = _getExcuted(response);
                    if (success) {
                        var sFn = function (tmpRes) {
                            var success = _getExcuted(tmpRes);
                            if (!success) {
                                _showGlobalMessage('无法登录！', 'warning', 'alert_Wrong_SignIn');
                            } else {
                                //<root><executed>true</executed><msgcode>TOKEN</msgcode><msg>bdffaa7f-fc10-4be0-acdc-fd24b7a706ee</msg></root>
                                if ($($(tmpRes).find('msgcode')).text() == 'TOKEN') {
                                    _CookieUtils.set('student_token', $($(tmpRes).find('msg')).text());
                                    window.location.href = "profile.html";
                                } else {
                                    _showGlobalMessage('无法获取用户信息，请重新登录！', 'warning', 'alert_Wrong_SignIn');
                                }
                            }
                        };

                        var tmpData = {
                            name: $('#txt_SignUp_PhoneNumber').val().trim(),
                            pwd: $('#txt_SignUp_New_PWD').val().trim(),
                        };
                        ajaxFn('GET', _getRequestURL(_gURLMapping.account.signin, tmpData), '', sFn);
                    } else {
                        _showGlobalMessage('无法创建用户！', 'warning', 'alert_Wrong_SignUp');
                    }
                };

                var data = {
                    uid: $('#txt_SignUp_PhoneNumber').val().trim(),
                    pwd: $('#txt_SignUp_New_PWD').val().trim(),
                    checkcode: $('#txt_SignUp_CheckCode').val().trim(),
                    status: '0',
                    level: '0'
                };

                ajaxFn('GET', _getRequestURL(_gURLMapping.account.signupwithcode, data), '', successFn);
            }
        };

        ajaxFn('GET', _getRequestURL(_gURLMapping.account.existed, { name: $("#txt_SignUp_PhoneNumber").val().trim() }), '', existSuccFn);
    }
};

function updatePWD() {
    if ($("#txt_ForgetPWD_PhoneNumber").val().trim() == "") {
        _showGlobalMessage('请输入手机号码', 'danger', 'alert_ForgetPWD_PhoneNumber');
        return;
    } else if (!_checkPhoneNumber($("#txt_ForgetPWD_PhoneNumber").val().trim())) {
        _showGlobalMessage('不正确的手机号码!', 'danger', 'alert_ForgetPWD_PhoneNumber');
        return;
    }

    if ($("#txt_ForgetPWD_CheckCode").val().trim() == "") {
        _showGlobalMessage('请输入图片识别码', 'danger', 'alert_ForgetPWD_CheckCode');
        return;
    }

    //if ($("#txt_ForgetPWD_NoteCode").val().trim() == "") {
    //    _showGlobalMessage('请输入收到的短信验证码', 'danger', 'alert_ForgetPWD_NoteCode');
    //    return;
    //}

    if ($("#txt_ForgetPWD_New_PWD").val().trim() == "") {
        _showGlobalMessage('请输入密码', 'danger', 'alert_ForgetPWD_PWD');
        return;
    } else {
        var checkVal = _checkPassword($("#txt_ForgetPWD_New_PWD").val().trim());
        if (checkVal < 0) {
            _showGlobalMessage('密码不符合要求，请重新输入!', 'danger', 'alert_ForgetPWD_PWD');
            return;
        }
    }

    if ($("#txt_ForgetPWD_Confirm_PWD").val() != $("#txt_ForgetPWD_New_PWD").val()) {
        _showGlobalMessage('两次输入的密码不一致，请重新输入', 'danger', 'alert_ForgetPWD_Confirm');
        return;
    }

    _registerRemoteServer();
    $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gURLMapping.account.updatepwd),
        data: '<root>' +
            '<symbol>' + $("#txt_ForgetPWD_PhoneNumber").val() + '</symbol>' +
            '<password>' + $("#txt_ForgetPWD_New_PWD").val() + '</password>' +
            '<codename>signincode</codename>' +
            '<codevalue>' + $("#txt_ForgetPWD_CheckCode").val() + '</codevalue>' +
            '<notecode>' + $("#txt_ForgetPWD_NoteCode").val() + '</notecode>' +
            '</root>',
        success: function (data, status) {
            if ($(data).find('err').length > 0) {
                _showGlobalMessage($(data).find('err').attr('msg'), 'danger', 'alert_ForgetPWD_Error');
            } else if ($(data).find('msg').length > 0) {
                $('#wrap_SignUp_Panel').hide();
                $('#wrap_ForgetPWD_Panel').hide();
                $('#wrap_SignIn_Panel').show(1, resetSignInFields);
                _refereshCheckCode('img_SignIn_CheckCode');
            } else {
                _showGlobalMessage('发生未知的错误, 请联系客服!', 'danger', 'alert_ForgetPWD_Error');
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            _showGlobalMessage('修改密码失败, 请联系客服!', 'danger', 'alert_ForgetPWD_Error');
        }
    });
};

function adjustPositions() {
    var rateMap = {
        signup: { id: '#wrap_SignUp_Panel', rate: 80 / 1080 },
        change: { id: '#wrap_ForgetPWD_Panel', rate: 80 / 1080 },
        signin: { id: '#wrap_SignIn_Panel', rate: 115 / 1080 }
    }

    var colWrap = $('#col_Page_Wrap');
    var title = $('#title_PageTop');
    var header = $('#navbar_Header');
    var body = $('body');
    var backWrap = $('.wrap-background-body');
    var background = $('.wrap-background-body img');

    var titleWidthRate = 560 / 1920;
    var panelWidthRate = 320 / 1920;
    var bodyWidth = Math.max(body.width(), $('html').width(), body[0].scrollWidth);
    var titleWidth = titleWidthRate * bodyWidth;
    titleWidth = (titleWidth < _bodyMinWidth ? _bodyMinWidth : titleWidth);
    for (var i = 10; i < 199; i++) {
        if (testTextWidth('Hello, world.', i + 'px', 'normal', '微软雅黑') >= titleWidth - 5) {
            title.css('font-size', i + 'px');
            title.css('line-height', i + 'px');
            break;
        }
    }

    title.css('padding-top', '0px');
    $(rateMap[_gCurrentPanel].id).css('padding-bottom', '0px');

    var headerHeight = header.height();
    var titalHeight = title.height();
    var contentHeight = $(rateMap[_gCurrentPanel].id).height();
    var padding = 20;
    var wrapHeight = colWrap.height();
    var totalHeight = headerHeight + titalHeight + contentHeight + padding * 2;
    if (totalHeight < wrapHeight) {
        padding = (wrapHeight - totalHeight) / 2;
    }

    title.css('padding-top', padding + 'px');
    $(rateMap[_gCurrentPanel].id).css('padding-bottom', padding + 'px');

    var bodyHeight = Math.max($('body').height(), $('html').height(), $('body')[0].scrollHeight);
    var tRate = 1;
    if (bodyWidth > 1920 || bodyHeight > 1080) {
        if (bodyWidth / 1920 > bodyHeight / 1080) {
            tRate = bodyWidth / 1920;
        } else {
            tRate = bodyHeight / 1080;
        }
    }

    var imgWidth = 1920 * tRate;
    var imgHeight = 1080 * tRate;
    background.width(imgWidth);
    background.height(imgHeight);

    var tTop = (imgHeight - bodyHeight) / 2;
    var tLeft = (imgWidth - bodyWidth) / 2;
    var tRight = (tRate > 1 ? tLeft + bodyWidth : 1920);
    var tBottom = (tRate > 1 ? tTop + bodyHeight : 1080);
    background.css('clip', 'rect(' + tTop + 'px ' + imgWidth + 'px ' + imgHeight + 'px ' + tLeft + 'px)');
    background.css('left', (-tLeft) + 'px');
    background.css('top', (-tTop) + 'px');

    if (colWrap[0].clientWidth < colWrap[0].offsetWidth) {
        backWrap.width(parseInt(colWrap[0].clientWidth));
        backWrap.height(parseInt(colWrap[0].scrollHeight));
    } else {
        backWrap.width(colWrap.width());
        backWrap.height(colWrap.height());
    }
}
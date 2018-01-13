'use strict';

var _timeoutRefereshCC = '';
var _prevPage = '';
var _bodyMinWidth = 330;
var _checkCodeParams = {
    length: 4,
    name: 'signincode',
    width: 70,
    height: 30
};

function initPage() {
    _refereshCheckCode('img_SignIn_CheckCode');
    if ($('#chk_SignIn_Remember').is(':checked')) {
        $('#form_SignIn_Section').attr('autocomplete', 'on');
    } else {
        $('#form_SignIn_Section').attr('autocomplete', 'off');
    }

    initEvents();
    adjustPositions()
};

function resetSignInFields() {
    $('#txt_SignIn_CheckCode').val('');
    _refereshCheckCode('img_SignIn_CheckCode');
};

function initEvents() {
    $(".img-header-logo").on('click', function () {
        window.location.href = "/index.html?rnd=" + Date.now();
    });

    $('#img_SignIn_CheckCode').on('click', function () {
        _refereshCheckCode('img_SignIn_CheckCode');
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

    $(window).resize(function () {
        adjustPositions();
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

            var userName = $($(data).find('msg')[0]).attr('logined_user_name');
            var nickname = $($(data).find('msg')[0]).attr('logined_user_nickname');
            if (typeof nickname != 'string' || nickname == '') {
                nickname = $($(data).find('msg')[0]).attr('logined_nickname');
            }

            if (typeof nickname != 'string' || nickname == '') {
                nickname = userName;
            }

            $.cookie('logined_user_name', userName);
            $.cookie('logined_user_nickname', nickname);
            var needcheckstate = '&needcheckstate=1';
            //if (window.history.length == 0) {
            //    window.location.href = "index.html?rnd=" + Date.now() + needcheckstate;
            //} else {
            //    var referrer = document.referrer.toLowerCase();
            //    if (referrer.indexOf('sign.html')) {
            //        referrer = 'index.html?rnd=' + Date.now();
            //    } else {
            //        if (referrer.indexOf('rnd') > 0) {
            //            referrer.replace('rnd=', 'rnd=0');
            //        } else {
            //            if (referrer.indexOf('?') < 0) {
            //                referrer += '?';
            //            }

            //            referrer += 'rnd=' + Date.now();
            //        }
            //    }
            //}
            //    window.location.href = referrer + needcheckstate;
            window.location.href = 'profile.html?rnd=' + Date.now() + needcheckstate;
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            _showGlobalMessage('无法登录, 请联系客服!', 'danger', 'alert_SignIn_CannotSignIn');
        }
    });

    if ($('#chk_SignIn_Remember').is(':checked')) {
        if ($('#iframe_for_autocomplete').length <= 0) {
            $('body').append($('<iframe id="iframe_for_autocomplete" name="iframe_for_autocomplete" style="display:none;"></iframe>'));
        }

        $('#btn_AutoComplete').click();
    }
};
};

function adjustPositions() {
    $('.wrap-background-body').css('width', '100%');
    $('.wrap-background-body').css('height', '100%');
    var titleWidthRate = 560 / 1920;
    var titleTopRate = 185 / 1920;
    var panelTopRate = 60 / 1920;
    var panelWidthRate = 320 / 1920;
    var bodyWidth = Math.max($('body').width(), $('html').width(), $('body')[0].scrollWidth);
    var title = $('#title_PageTop');
    var titleWidth = titleWidthRate * bodyWidth;
    titleWidth = (titleWidth < _bodyMinWidth ? _bodyMinWidth : titleWidth);
    for (var i = 10; i < 199; i++) {
        if (testTextWidth('Hello, world.', i + 'px', 'normal', '微软雅黑') >= titleWidth - 5) {
            title.css('font-size', i + 'px');
            title.css('line-height', i + 'px');
            break;
        }
    }

    var titleTop = titleTopRate * bodyWidth - title.offset().top;
    titleTop = (titleTop < 0 ? 0 : titleTop);
    $('#wrap_Page_Content').css('padding-top', titleTop + 'px');

    title.css('padding-bottom', panelTopRate * bodyWidth + 'px');
    $('.col-12.text-center.title-panel').css('width', panelWidthRate * bodyWidth + 'px');

    var bodyHeight = Math.max($('body').height(), $('html').height(), $('body')[0].scrollHeight);
    var background = $('.wrap-background-body img');
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

    $('.wrap-background-body').width(bodyWidth);
    $('.wrap-background-body').height(Math.max($('body').height(), $('html').height(), $('body')[0].scrollHeight));
};

function checkStatus() {
    _registerRemoteServer();
    $.ajax({
        type: 'GET',
        async: true,
        url: _getRequestURL(_gURLMapping.account.signstatus),
        data: '<root></root>',
        success: function (responseData, status) {
            if ($(responseData).find('err').length > 0) {
                $.removeCookie('logined_user_name');
                $.removeCookie('logined_user_nickname');
                return;
            } else {
                if ($(responseData).find('msg').length > 0 && $($(responseData).find('msg')[0]).attr('logined_marked') == '1') {
                    $.cookie("logined_user_name", $($(responseData).find('msg')[0]).attr('logined_user_name'), { path: '/', expires: 0.125 });
                    if (!$.cookie("logined_user_nickname") || $.cookie("logined_user_nickname") == '') {
                        $.ajax({
                            type: 'POST',
                            async: true,
                            url: _getRequestURL(_gURLMapping.account.util),
                            data: '<root>' +
                                '<select>' +
                                '<items value="/root/usrbasic/usr_nickname"></items>' +
                                '</select>' +
                                '</root>',
                            success: function (responseData_2, status) {
                                if ($(responseData_2).find('err').length > 0) {
                                    $.removeCookie('logined_user_name');
                                    $.removeCookie('logined_user_nickname');
                                    return;
                                } else {
                                    var nickName = '';
                                    var tmpObject = $(responseData_2).find('msg');
                                    for (var i = 0; i < tmpObject.length; i++) {
                                        if ((!$(tmpObject[i]).attr('type') || $(tmpObject[i]).attr('type') != '1') && $(tmpObject[i]).attr('xpath') == '/root/usrbasic/usr_nickname') {
                                            nickName = $(tmpObject[i]).attr('value');
                                        }
                                    }

                                    if (nickName) {
                                        $.cookie("logined_user_nickname", nickName, { path: '/', expires: 0.125 });
                                        window.location.href = "profile.html";
                                    }
                                }
                            },
                            dataType: 'xml',
                            xhrFields: {
                                withCredentials: true
                            },
                            error: function () {
                                $.removeCookie('logined_user_name');
                                $.removeCookie('logined_user_nickname');
                            }
                        });
                    }
                } else {
                    $.removeCookie('logined_user_name');
                    $.removeCookie('logined_user_nickname');
                }
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            $.removeCookie('logined_user_name');
            $.removeCookie('logined_user_nickname');
        }
    });
};
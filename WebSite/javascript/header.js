﻿'use strict';

function buildHeaderHTML(isIndexPage) {
    var tmpHtmlStrArr = [];
    tmpHtmlStrArr.push('<nav class="navbar navbar-expand-lg navbar-light" id="navbar_Header" style="background-color:transparent;z-index: 1040; padding:5px;">');
    tmpHtmlStrArr.push('    <a class="navbar-brand" href="#" style="padding:0px 20px;">');
    tmpHtmlStrArr.push('        <img src="image/logo-new-black.png" width="225" height="30" class="d-inline-block align-top img-header-logo" alt="">');
    tmpHtmlStrArr.push('    </a>');
    tmpHtmlStrArr.push('    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">');
    tmpHtmlStrArr.push('        <span class="navbar-toggler-icon"></span>');
    tmpHtmlStrArr.push('    </button>');
    tmpHtmlStrArr.push('    <div class="container-fluid" style="padding-right: 5px;">');
    tmpHtmlStrArr.push('        <div class="row w-100 justify-content-end">');
    tmpHtmlStrArr.push('            <div class="col-12 col-md-12 col-lg-10 col-xl-5 nav-ul-container" style="padding-right:0px;">');
    tmpHtmlStrArr.push('                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">');
    tmpHtmlStrArr.push('                    <ul class="navbar-nav" id="ul_NavBar_Container">');
    tmpHtmlStrArr.push('                        <li class="nav-item">');
    tmpHtmlStrArr.push('                            <button type="button" class="btn btn-sm btn-primary" id="btn_Student_SignIn" style="border-radius: 10px;">点击签到</button>');
    tmpHtmlStrArr.push('                        </li>');
    tmpHtmlStrArr.push('                    </ul>');
    tmpHtmlStrArr.push('                </div>');
    tmpHtmlStrArr.push('            </div>');
    tmpHtmlStrArr.push('        </div>');
    tmpHtmlStrArr.push('    </div>');
    tmpHtmlStrArr.push('</nav>');
    if (isIndexPage) {
        $('header').append($(tmpHtmlStrArr.join('')));
    } else {
        $('body').prepend($(tmpHtmlStrArr.join('')));
    }
};

function initHeader(isIndexPage) {
    buildHeaderHTML(isIndexPage);
    initNavBarEvent();
    updateUserInfor();
    if (navigator.userAgent.toLowerCase().indexOf("ipad") >= 0) {
        $("#linkBtn_Course").parent().hide();
        $("#linkBtn_Price").parent().hide();
        $("#linkBtn_Help").parent().hide();
        $("#section_Partner").hide();
    }
};

function initNavBarEvent() {
    $("#img_HomeLogo").on('click', function () {
        window.location.href = "index.html?qid=" + _gCID;
    });

    $("#linkBtn_Course").on('click', function () {
        //window.location.href = "index.html?qid=" + _gCID;
        alert('go to course');
    });

    $("#linkBtn_OnlineCourse").on('click', function () {
        window.location.href = "OnlineExperience.html?qid=" + _gCID;
    });

    $("#linkBtn_Price").on('click', function () {
        //window.location.href = "parents.html?qid=" + _gCID;
        alert('go to price');
    });

    $("#linkBtn_Help").on('click', function () {
        //window.location.href = "studentcenter.html?qid=" + _gCID;
        alert('go to help');
    });

    $("#linkBtn_Blog").on('click', function () {
        //window.location.href = "product.html?qid=" + _gCID;
        alert('go to blog');
    });

    $("#linkBtn_About").on('click', function () {
        window.location.href = "aboutus.html?rnd=" + Date.now();
    });

    $("#btn_SignIn").on('click', function () {
        var sUserAgent = navigator.userAgent.toLowerCase();
        if (sUserAgent.indexOf("ipad") > -1) {
            window.location.href = "isignin.html?opt=signin&rnd=" + Date.now();
        } else {
            window.location.href = "signin.html?opt=signin&rnd=" + Date.now();
        }
    });

    $("#btn_FreeSignUp").on('click', function () {
        var sUserAgent = navigator.userAgent.toLowerCase();
        if (sUserAgent.indexOf("ipad") > -1) {
            window.location.href = "isignin.html?opt=signup&rnd=" + Date.now();
        } else {
            window.location.href = "signin.html?opt=signup&rnd=" + Date.now();
        }
    });
};

function updateUserInfor() {
    return;
    removeUserInfoItem();
    //if ($.cookie('logined_user_name') && $.cookie('logined_user_nickname') && $.cookie('logined_user_name') != "" && $.cookie('logined_user_nickname') != "") {
    if ($.cookie('logined_user_nickname') && $.cookie('logined_user_nickname') != "") {
        var nickName = $.cookie('logined_user_nickname');
        $('#ul_NavBar_Container').append(
            $(
                '<li class="nav-item dropdown" id="nav_UserInfo_Item">' +
                '   <a href="#" class="nav-link dropdown-toggle" id="dd_Nav_UserInfo_Item"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                '       <img class="rounded-circle" id="img_Page_Header_Navbar" src="' + _getRequestURL(_gURLMapping.account.getheader, {}) + '" width="24" height="24"/>' +
                '       <span class="text-header-userinfo">' + nickName + '</span>' +
                '       <b class="caret"></b>' +
                '   </a>' +
                '   <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">' +
                '       <a href="workplatform.html?scene=b_01_001" class="dropdown-item" id="linkBtn_TestWorkPlatform" style="font-weight:100;">测试-进入工作台</a>' +
                '       <a href="#" class="dropdown-item" id="linkBtn_UserInfo" style="font-weight:100;">个人中心</a>' +
                '       <a href="#" class="dropdown-item" id="linkBtn_SignOut" style="font-weight:100;">退出登录</a>' +
                '   </div>' +
                '</li>'
            )
        );

        if (!$('#form_NavBar_Sign').hasClass('hidden')) {
            $('#form_NavBar_Sign').addClass('hidden');
        }

        $("#linkBtn_UserInfo").on('click', function () {
            window.location.href = "profile.html?rnd=" + Date.now();
        });

        $("#linkBtn_SignOut").on('click', function () {
            _registerRemoteServer();
            $.ajax({
                type: 'GET',
                async: true,
                url: _getRequestURL(_gURLMapping.account.logout),
                data: '<root></root>',
                success: function (data_2, status) {
                    if ($(data_2).find('err').length > 0) {
                        _showGlobalMessage($(data_2).find('err').attr('msg'), 'danger', 'alert_Logout_Error');
                    }

                    removeUserInfoItem();
                    $.removeCookie('logined_user_name');
                    $.removeCookie('logined_user_nickname');
                    //_needCheckState = false;
                    var sUserAgent = navigator.userAgent.toLowerCase();

                    if (sUserAgent.indexOf("ipad") > -1) {
                        window.location.href = 'isignin.html?rnd=' + Date.now();
                    } else {
                        window.location.href = 'index.html?rnd=' + Date.now();
                    }
                },
                dataType: 'xml',
                xhrFields: {
                    withCredentials: true
                },
                error: function () {
                    removeUserInfoItem();
                    $.removeCookie('logined_user_name');
                    $.removeCookie('logined_user_nickname');
                }
            });
        });

        _startCheckState();
    }
};

function removeUserInfoItem() {
    $('li#nav_UserInfo_Item').remove();
    if ($('#form_NavBar_Sign').hasClass('hidden')) {
        $('#form_NavBar_Sign').removeClass('hidden');
    }
}
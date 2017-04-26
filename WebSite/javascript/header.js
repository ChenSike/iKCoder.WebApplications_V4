'use strict';

function buildHeaderHTML(isIndexPage) {
    var tmpHtmlStrArr = [];
    tmpHtmlStrArr.push('<nav class="navbar navbar-expand-lg navbar-light" id="navbar_Header" style="background-color:transparent;">');
    tmpHtmlStrArr.push('    <a class="navbar-brand" href="index.html">');
    tmpHtmlStrArr.push('        <img src="image/logo-new-white.png" width="150" height="50" class="d-inline-block align-top img-header-logo" alt="">');
    tmpHtmlStrArr.push('    </a>');
    tmpHtmlStrArr.push('    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">');
    tmpHtmlStrArr.push('        <span class="navbar-toggler-icon"></span>');
    tmpHtmlStrArr.push('    </button>');
    tmpHtmlStrArr.push('    <div class="container-fluid">');
    tmpHtmlStrArr.push('        <div class="row w-100 justify-content-end">');
    tmpHtmlStrArr.push('            <div class="col-12 col-md-12 col-lg-10 col-xl-5 nav-ul-container">');
    tmpHtmlStrArr.push('                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">');
    tmpHtmlStrArr.push('                    <ul class="navbar-nav" id="ul_NavBar_Container">');
    tmpHtmlStrArr.push('                        <li class="nav-item">');
    tmpHtmlStrArr.push('                            <a class="nav-link" href="#" id="linkBtn_Course">' + _getLabel('课程') + '</a>');
    tmpHtmlStrArr.push('                        </li>');
    tmpHtmlStrArr.push('                        <li class="nav-item">');
    tmpHtmlStrArr.push('                            <a class="nav-link" href="#" id="linkBtn_OnlineCourse">' + _getLabel('在线体验课') + '</a>');
    tmpHtmlStrArr.push('                        </li>');
    tmpHtmlStrArr.push('                        <li class="nav-item">');
    tmpHtmlStrArr.push('                            <a class="nav-link" href="#" id="linkBtn_Price">' + _getLabel('价格') + '</a>');
    tmpHtmlStrArr.push('                        </li>');
    tmpHtmlStrArr.push('                        <li class="nav-item">');
    tmpHtmlStrArr.push('                            <a class="nav-link" href="#" id="linkBtn_Help">' + _getLabel('帮助') + '</a>');
    tmpHtmlStrArr.push('                        </li>');
    tmpHtmlStrArr.push('                        <li class="nav-item">');
    tmpHtmlStrArr.push('                            <a class="nav-link" href="#" id="linkBtn_About">' + _getLabel('关于') + '</a>');
    tmpHtmlStrArr.push('                        </li>');
    tmpHtmlStrArr.push('                        <li class="nav-item">');
    tmpHtmlStrArr.push('                            <a class="nav-link" href="#" id="linkBtn_Blog">' + _getLabel('博客') + '</a>');
    tmpHtmlStrArr.push('                        </li>');
    tmpHtmlStrArr.push('                    </ul>');
    tmpHtmlStrArr.push('                    <form class="form-inline my-2 my-lg-0  justify-content-center" id="form_NavBar_Sign">');
    tmpHtmlStrArr.push('                        <button class="btn btn-outline-secondary my-2 my-sm-1 ml-md-5 mr-3" id="btn_SignIn" type="button">' + _getLabel('登录') + '</button>');
    tmpHtmlStrArr.push('                        <button class="btn btn-outline-info my-2 my-sm-1" id="btn_FreeSignUp" type="button" data-toggle="modal" data-target="#mWindow_SignUp">' + _getLabel('免费注册') + '</button>');
    tmpHtmlStrArr.push('                    </form>');
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

function buildSignUpWindowHTML() {
    var tmpHtmlStrArr = [];
    tmpHtmlStrArr.push('<div class="modal fade " id="mWindow_SignUp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">');
    tmpHtmlStrArr.push('    <div class="modal-dialog" id="mWindow_SignUp_Dialog" role="document">');
    tmpHtmlStrArr.push('        <div class="modal-content">');
    tmpHtmlStrArr.push('            <div class="modal-header d-flex justify-content-end" style="border:none;">');
    tmpHtmlStrArr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="margin-top: -10px;">');
    tmpHtmlStrArr.push('                    <span aria-hidden="true">&times;</span>');
    tmpHtmlStrArr.push('                </button>');
    tmpHtmlStrArr.push('            </div>');
    tmpHtmlStrArr.push('            <div class="modal-body">');
    tmpHtmlStrArr.push('                <div class="container">');
    tmpHtmlStrArr.push('                    <div class="row justify-content-center" style="padding-bottom:20px;">');
    tmpHtmlStrArr.push('                        <div class="col-4 col-sm-2 col-sm-offset-3">');
    tmpHtmlStrArr.push('                            <img src="image/Addicon.png" />');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                        <div class="col-7 col-sm-4">');
    tmpHtmlStrArr.push('                            <h4 style="line-height:60px;">' + _getLabel('艾酷通行证') + '</h4>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                    </div>');
    tmpHtmlStrArr.push('                    <form class="form-horizontal" role="form">');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-12">');
    tmpHtmlStrArr.push('                                <input type="text" class="form-control" id="txt_SignUp_PhoneNumber" placeholder="' + _getLabel('请输入用于登录的手机号码') + '" />');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-12">');
    tmpHtmlStrArr.push('                                <div class="input-group" style="width:100%;">');
    tmpHtmlStrArr.push('                                    <input type="text" class="form-control" id="txt_SignUp_CheckCode" placeholder="' + _getLabel('图片识别码') + '" />');
    tmpHtmlStrArr.push('                                    <span class="input-group-addon" style="width:75px; padding:0px 2px;">');
    tmpHtmlStrArr.push('                                        <img class="cursor-hand check-code-image" id="img_SignUp_CheckCode" src="" title="' + _getLabel('点击刷新验证码') + '">');
    tmpHtmlStrArr.push('                                    </span>');
    tmpHtmlStrArr.push('                                </div>');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-12">');
    tmpHtmlStrArr.push('                                <div class="input-group" style="width:100%;">');
    tmpHtmlStrArr.push('                                    <input type="text" class="form-control" id="txt_SignUp_NoteCode" placeholder="' + _getLabel('输入短信中的验证码') + '" />');
    tmpHtmlStrArr.push('                                    <span class="input-group-addon" style="width:100px; padding:0px;margin-right:1px;">');
    tmpHtmlStrArr.push('                                        <div class="m-window-buttton" id="btn_SignUp_NoteCode" style="width:100%; height:100%;line-height: 35px;">' + _getLabel('发送验证码') + '</div>');
    tmpHtmlStrArr.push('                                    </span>');
    tmpHtmlStrArr.push('                                </div>');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-12">');
    tmpHtmlStrArr.push('                                <input type="text" class="form-control" id="txt_SignUp_UserName" placeholder="' + _getLabel('起一个具有辨识度的用户名') + '" />');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-12">');
    tmpHtmlStrArr.push('                                <div class="input-group">');
    tmpHtmlStrArr.push('                                    <input class="form-control js-password-signup-control" id="txt_SignUp_Pwd" name="signup_pwd_new_pwd" type="password" placeholder="' + _getLabel('输入8-16位密码，需包含字母及数字') + '" aria-describedby="basic-addon1">');
    tmpHtmlStrArr.push('                                    <span class="input-group-addon js-password-signup-btn">');
    tmpHtmlStrArr.push('                                        <i class="label-pwd-intension" id="lb_SignUp_Pwd_Intension"></i>');
    tmpHtmlStrArr.push('                                        <i class="fa fa-eye-slash" id="btn_SignUp_Show_Hide_Pwd" style="width:15px; height:15px;"></i>');
    tmpHtmlStrArr.push('                                    </span>');
    tmpHtmlStrArr.push('                                </div>');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-12">');
    tmpHtmlStrArr.push('                                <div class="m-window-buttton" id="btn_SignUpOK">' + _getLabel('注册艾酷通行证') + '</div>');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-12">');
    tmpHtmlStrArr.push('                                <p class="text-center">');
    tmpHtmlStrArr.push(_getLabel('已有艾酷通行证?'));
    tmpHtmlStrArr.push('                                    <a href="#" id="linkBtn_Goto_Login"> ' + _getLabel('登录') + '</a>');
    tmpHtmlStrArr.push('                                </p>');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                            <div class="col-sm-12">');
    tmpHtmlStrArr.push('                                <p class="text-center">');
    tmpHtmlStrArr.push(_getLabel('同意'));
    tmpHtmlStrArr.push('                                    <a href="#" id="linkBtn_IKCoder_Agreement" data-toggle="modal" data-target="#mWindow_Agreement" data-flag="0"> ' + _getLabel('《艾酷用户协议》') + '</a>');
    tmpHtmlStrArr.push('                                </p>');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                    </form>');
    tmpHtmlStrArr.push('                </div>');
    tmpHtmlStrArr.push('            </div>');
    tmpHtmlStrArr.push('            <div class="modal-footer bg-white" style="border:none; padding:0px;">');
    tmpHtmlStrArr.push('                <img class="img-fluid" src="image/footersub.png"/>');
    tmpHtmlStrArr.push('            </div>');
    tmpHtmlStrArr.push('        </div>');
    tmpHtmlStrArr.push('    </div>');
    tmpHtmlStrArr.push('</div>');

    $('body').append($(tmpHtmlStrArr.join('')));
};

function buildAgreementWindowHTML() {
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
    tmpHtmlStrArr.push('                    <iframe src="agreement.html" id="iframe_Agreement" scrolling="no" frameborder="0" width="100%"></iframe>');
    tmpHtmlStrArr.push('                </div>');
    tmpHtmlStrArr.push('            </div>');
    tmpHtmlStrArr.push('            <div class="modal-footer">');
    tmpHtmlStrArr.push('                <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>');
    tmpHtmlStrArr.push('                <button type="button" class="btn btn-primary disabled" id="btn_Agree_Agreement">同意</button>');
    tmpHtmlStrArr.push('            </div>');
    tmpHtmlStrArr.push('        </div>');
    tmpHtmlStrArr.push('    </div>');
    tmpHtmlStrArr.push('</div>');
    $('body').append($(tmpHtmlStrArr.join('')));
}

function buildCheckPhoneWindowHTML() {
    var tmpHtmlStrArr = [];
    tmpHtmlStrArr.push('<div class="modal fade" id="mWindow_CheckPhoneNumber" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">');
    tmpHtmlStrArr.push('    <div class="modal-dialog" id="mWindow_CheckPhone_Dialog">');
    tmpHtmlStrArr.push('        <div class="modal-content">');
    tmpHtmlStrArr.push('            <div class="modal-header" style="border:none; padding:0px;"></div>');
    tmpHtmlStrArr.push('            <div class="modal-body">');
    tmpHtmlStrArr.push('                <div class="container border-form-modal-dialog">');
    tmpHtmlStrArr.push('                    <form role="form">');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-12">');
    tmpHtmlStrArr.push('                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-12">');
    tmpHtmlStrArr.push('                                <h4 class="text-center">' + _getLabel('验证手机') + '</h4>');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-12">');
    tmpHtmlStrArr.push('                                <p class="text-center">' + _getLabel('请输入您收到的6位数字手机验证码') + '</p>');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-12" style="padding-bottom: 15px;">');
    tmpHtmlStrArr.push('                                <input type="text" class="form-control" id="txt_CheckPhoneNumber_Number" disabled placeholder="">');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-12">');
    tmpHtmlStrArr.push('                                <div class="input-group">');
    tmpHtmlStrArr.push('                                    <input type="text" class="form-control" id="txt_CheckPhoneNumber_CheckCode" placeholder="' + _getLabel('6位数字验证码') + '" />');
    tmpHtmlStrArr.push('                                    <div class="input-group-addon" id="btn_CheckPhoneNumber_CountDown">' + _getLabel('获取验证码') + '</div>');
    tmpHtmlStrArr.push('                                </div>');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                        <div class="form-group">');
    tmpHtmlStrArr.push('                            <div class="col-sm-4 col-sm-offset-4 padding-top30 padding-bottom30 text-center">');
    tmpHtmlStrArr.push('                                <div class="m-window-buttton" id="btn_CheckPhoneOK">' + _getLabel('进入艾酷') + '</div>');
    tmpHtmlStrArr.push('                            </div>');
    tmpHtmlStrArr.push('                        </div>');
    tmpHtmlStrArr.push('                    </form>');
    tmpHtmlStrArr.push('                </div>');
    tmpHtmlStrArr.push('            </div>');
    tmpHtmlStrArr.push('            <div class="modal-footer" style="border:none; padding:0px;"></div>');
    tmpHtmlStrArr.push('        </div>');
    tmpHtmlStrArr.push('    </div>');
    tmpHtmlStrArr.push('</div>');
    $('body').append($(tmpHtmlStrArr.join('')));
};

function initHeader(isIndexPage) {
    buildHeaderHTML(isIndexPage);
    buildSignUpWindowHTML();
    buildAgreementWindowHTML();
    buildCheckPhoneWindowHTML();
    initHeaderEvent();
    updateUserInfor();
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
        //window.location.href = "index.html?qid=" + _gCID;
        alert('go to online course');
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
        window.location.href = "aboutus.html?qid=" + _gCID;
    });

    $("#btn_SignIn").on('click', function () {
        window.location.href = "signin.html?qid=" + _gCID;
    });
};

function initSignUpWindowEvent() {
    $("#linkBtn_Goto_Login").on('click', function () {
        window.location.href = "signin.html?qid=" + _gCID;
    });

    $("#btn_SignUpOK").on('click', function () {
        if ($('#linkBtn_IKCoder_Agreement').attr('data-flag') == '0') {
            showAlertMessage('mWindow_SignUp_Dialog', 'signupAlert', '请先阅读《艾酷用户用户协议》并确认!');
        } else {
            signUp();
        }
    });

    $("#img_SignUp_CheckCode").on('click', function () {
        $("#img_SignUp_CheckCode").attr("src", _getRequestURL(_gURLMapping.account.checkcode, _checkCodeParams));
    });

    $("#txt_SignUp_Pwd").on('blur', function () {
        checkPwdIntension($("#txt_SignUp_Pwd"), $('#lb_SignUp_Pwd_Intension'));
    });

    $(".js-password-signup-btn").on('click', function () {
        if ($(".js-password-signup-control").attr("type") == 'text') {
            $(".js-password-signup-control").attr("type", "password");
            $("#btn_SignUp_Show_Hide_Pwd").addClass('fa-eye-slash');
            $("#btn_SignUp_Show_Hide_Pwd").removeClass('fa-eye');
        } else {
            $(".js-password-signup-control").attr("type", "text");
            $("#btn_SignUp_Show_Hide_Pwd").addClass('fa-eye');
            $("#btn_SignUp_Show_Hide_Pwd").removeClass('fa-eye-slash');
        }
    });

    $('#mWindow_SignUp').on('show.bs.modal', function () {
        reinitSignUpFileds();
    });

    $('#mWindow_SignUp').on('hide.bs.modal', function () {
        $("#signupAlert").alert('close');
    });

    $('#mWindow_Agreement').on('show.bs.modal', function () {
        var tmpHeight = $('#mWindow_Agreement').height() - $('#mWindow_Agreement .modal-dialog').offset().top - $('#mWindow_Agreement .modal-dialog .modal-header').height() - $('#mWindow_Agreement .modal-dialog .modal-footer').height();
        $('.wrap-ifram-agreement').height(Math.floor(tmpHeight * 0.65));
        $('#iframe_Agreement').height($($('#iframe_Agreement')[0].contentWindow.document.body).height());
        if ($('#linkBtn_IKCoder_Agreement').attr('data-flag') == '0') {
            $('.wrap-ifram-agreement').scrollTop(0);
            if (!$('#btn_Agree_Agreement').hasClass('disabled')) {
                $('#btn_Agree_Agreement').addClass('disabled');
            }
        }
    });

    $('.wrap-ifram-agreement').scroll(function () {
        var bodyHeight = $($('#iframe_Agreement')[0].contentWindow.document.body).height();
        var wrap = $('.wrap-ifram-agreement');
        if (wrap[0].scrollTop + wrap.height() > bodyHeight) {
            if ($('#btn_Agree_Agreement').hasClass('disabled')) {
                $('#btn_Agree_Agreement').removeClass('disabled');
            }
        }
    });

    $('#btn_Agree_Agreement').on('click', function () {
        $('#mWindow_Agreement').modal('hide');
        $('#linkBtn_IKCoder_Agreement').attr('data-flag', '1');
    });

    var cpnParames = {
        buttonId: 'btn_SignUp_NoteCode',
        labelId: 'lb_SignUp_NoteCode_CountDown',
        textId: 'txt_SignUp_PhoneNumber',
        alertId: 'signupAlert',
        containerId: 'mWindow_SignUp_Dialog'
    };
    $('#btn_SignUp_NoteCode').on('click', cpnParames, sendNoteCode);
};

function initHeaderEvent() {
    initNavBarEvent();
    initSignUpWindowEvent();
};

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

function signUp() {
    //$('#mWindow_CheckPhoneNumber').modal('show');
    //$('#txt_CheckPhoneNumber_Number').attr('placeholder', $("#txt_SignUp_PhoneNumber").val() + '');
    //return;
    $("#signupAlert").alert('close');
    if ($("#txt_SignUp_PhoneNumber").val().trim() == "") {
        showAlertMessage('mWindow_SignUp_Dialog', 'signupAlert', '请输入用于登录的手机号码!');
        return;
    } else if (!_checkPhoneNumber($("#txt_SignUp_PhoneNumber").val().trim())) {
        showAlertMessage('mWindow_SignUp_Dialog', 'signupAlert', '不正确的手机号码!');
        return;
    }

    if ($("#txt_SignUp_CheckCode").val().trim() == "") {
        showAlertMessage('mWindow_SignUp_Dialog', 'signupAlert', '请输入图片识别码!');
        return;
    }

    if ($("#txt_SignUp_NoteCode").val().trim() == "") {
        showAlertMessage('mWindow_SignUp_Dialog', 'signupAlert', '请输入短信验证码!');
        return;
    }

    if ($("#txt_SignUp_UserName").val().trim() == "") {
        showAlertMessage('mWindow_SignUp_Dialog', 'signupAlert', '请输入用户名!');
        return;
    }

    if ($("#txt_SignUp_Pwd").val().trim() == "") {
        showAlertMessage('mWindow_SignUp_Dialog', 'signupAlert', '请输入密码!');
        return;
    } else {
        var checkVal = _checkPassword($("#txt_SignUp_Pwd").val().trim());
        if (checkVal < 0) {
            showAlertMessage('mWindow_SignUp_Dialog', 'signupAlert', '密码不符合要求，请重新输入!');
            return;
        }
    }

    var params = {
        symbol: $("#txt_SignUp_PhoneNumber").val(),
        password: $("#txt_SignUp_Pwd").val(),
        codename: 'signincode',
        nickname: $("#txt_SignUp_UserName").val().trim(),
        codevalue: $("#txt_SignUp_CheckCode").val()
    }

    _registerRemoteServer();
    $.ajax({
        type: 'POST',
        async: false,
        url: _getRequestURL(_gURLMapping.account.reg),
        data: '<root>' +
            '<symbol>' + $("#txt_SignUp_PhoneNumber").val() + '</symbol>' +
            '<password>' + $("#txt_SignUp_Pwd").val() + '</password>' +
            '<codename>signincode</codename>' +
            '<codevalue>' + $("#txt_SignUp_CheckCode").val() + '</codevalue>' +
            '<nickname>' + $("#txt_SignUp_UserName").val().trim() + '</nickname>' +
            '<notecode>' + $("#txt_SignUp_NoteCode").val() + '</notecode>' +
            '</root>',
        success: function (data, status) {
            if ($(data).find('err').length > 0) {
                showAlertMessage('mWindow_SignUp_Dialog', 'signupAlert', $(data).find('err').attr('msg'));
                return;
            } else if ($(data).find('msg').length > 0) {
                $("#signupAlert").alert('close');
                $('#mWindow_SignUp').modal('hide');
                $.ajax({
                    type: 'POST',
                    async: false,
                    url: _getRequestURL(_gURLMapping.account.sign),
                    data: '<root>' +
                        '<symbol>' + $("#txt_SignUp_PhoneNumber").val() + '</symbol>' +
                        '<password>' + $("#txt_SignUp_Pwd").val() + '</password>' +
                        '</root>',
                    success: function (data, status) {
                        if ($(data).find('err').length > 0) {
                            window.location.href = "signin.html?qid=" + _gCID;
                            return;
                        }

                        $.cookie('logined_user_name', $($(data).find('msg')[0]).attr('logined_user_name'));
                        $.cookie('logined_user_nickname', $($(data).find('msg')[0]).attr('logined_nickname'));
                        updateUserInfor(data);
                    },
                    dataType: 'xml',
                    xhrFields: {
                        //withCredentials: true
                    },
                    error: function () {
                        window.location.href = "signin.html?qid=" + _gCID;
                    }
                });
            }
        },
        dataType: 'xml',
        xhrFields: {
            //withCredentials: true
        },
        error: function () {
            $("#signupAlert").alert('close');
            showAlertMessage('mWindow_SignUp_Dialog', 'signupAlert', '注册失败, 请联系客服!');
        }
    });
};

function openSignUp(phoneNumber) {
    $('#mWindow_SignIn').modal('hide');
    $('#mWindow_SignUp').modal('show');
    $('#txt_SignUp_PhoneNumber').val(!phoneNumber ? '' : phoneNumber);
};

function updatePassword() {
    $("#signinAlert").alert('close');
    if ($("#txt_ForgetPWD_PhoneNumber").val().trim() == "") {
        showAlertMessage('mWindow_SignIn_Dialog', 'signinAlert', '请输入手机号码!');
        return;
    } else if (!_checkPhoneNumber($("#txt_ForgetPWD_PhoneNumber").val().trim())) {
        showAlertMessage('mWindow_SignIn_Dialog', 'signinAlert', '不正确的手机号码!');
        return;
    }

    if ($("#txt_ForgetPWD_CheckCode").val().trim() == "") {
        showAlertMessage('mWindow_SignIn_Dialog', 'signinAlert', '请输入验证码!');
        return;
    }

    if ($("#txt_ForgetPWD_NewPwd").val().trim() == "") {
        showAlertMessage('mWindow_SignIn_Dialog', 'signinAlert', '请输入新密码!');
        return;
    }

    if ($("#txt_ForgetPWD_ConfirmPwd").val().trim() == "") {
        showAlertMessage('mWindow_SignIn_Dialog', 'signinAlert', '请确认新密码!');
        return;
    } else if ($("#txt_ForgetPWD_ConfirmPwd").val().trim() != $("#txt_ForgetPWD_NewPwd").val().trim()) {
        showAlertMessage('mWindow_SignIn_Dialog', 'signinAlert', '两次输入的密码不一致!');
        return;
    }

    $.ajax({
        type: 'POST',
        async: false,
        url: _getRequestURL(_gURLMapping.account.sign),
        data: '<root>' +
            '<username>' + $("#txt_ForgetPWD_PhoneNumber").val() + '</username>' +
            '<password>' + $("#txt_ForgetPWD_NewPwd").val() + '</password>' +
            '<codename>signincode</codename>' +
            '<codename>' + $("#txt_ForgetPWD_CheckCode").val() + '</codename>' +
            '</root>',
        success: function (data, status) {
            $("#signinAlert").alert('close');
            $('.sign-in-form').css('display', 'block');
            $('.sign-in-forget-pwd-form').css('display', 'none');
        },
        dataType: 'xml',
        xhrFields: {
            //withCredentials: true
        },
        error: function () {
            $("#signinAlert").alert('close');
            showAlertMessage('mWindow_SignIn_Dialog', 'signinAlert', '无法登录, 请联系客服!');
        }
    });
};

var intervalCode = {};
function sendNoteCode() {
    var data = arguments[0].data;
    if (!intervalCode[data.buttonId] || intervalCode[data.buttonId] == 0) {
        $('#' + data.buttonId).empty();
        $('#' + data.buttonId).append('<strong id="' + data.labelId + '">60</strong>' + _getLabel('秒后重发'));
        intervalCode[data.buttonId] = window.setInterval(function () {
            updateCountDown(data);
        }, 1000);
        $.ajax({
            type: 'POST',
            async: false,
            url: _getRequestURL(_gURLMapping.account.sign),
            data: '<root><username>' + $("#" + data.textId).val() + '</username></root>',
            success: function (data, status) {
                $("#" + data.alertId).alert('close');
            },
            dataType: 'xml',
            xhrFields: {
                //withCredentials: true
            },
            error: function () {
                $("#" + data.alertId).alert('close');
                showAlertMessage(data.containerId, data.alertId, '发送验证码失败, 请重新尝试!');
            }
        });
    }
};

function updateCountDown(data) {
    var value = parseInt($('#' + data.labelId).text());
    if (value == 0) {
        $('#' + data.buttonId).empty();
        $('#' + data.buttonId).text(_getLabel('获取验证码'));
        window.clearInterval(intervalCode[data.buttonId]);
        intervalCode[data.buttonId] = 0;
    } else {
        value -= 1;
        $('#' + data.labelId).text(value + '');
    }
};

function updateUserInfor() {
    removeUserInfoItem();
    if ($.cookie('logined_user_name') && $.cookie('logined_user_nickname') && $.cookie('logined_user_name') != "" && $.cookie('logined_user_nickname') != "") {
        var nickName = $.cookie('logined_user_nickname');
        if (nickName != '') {
            $('#ul_NavBar_Container').append(
                $(
                    '<li class="nav-item dropdown" id="nav_UserInfo_Item">' +
                    '   <a href="#" class="nav-link dropdown-toggle" id="dd_Nav_UserInfo_Item"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                    '       Welcome back &nbsp;' +
                    '       <i class="fa fa-user-circle" aria-hidden="true"></i>' +
                    '       <span class="text-header-userinfo">' + nickName + '</span>' +
                    '       <b class="caret"></b>' +
                    '   </a>' +
                    '   <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">' +
                    '       <a href="workplatform.html?scene=b_01_001" class="dropdown-item" id="linkBtn_TestWorkPlatform" style="font-weight:100;">测试-进入工作台</a>' +
                    '       <a href="#" class="dropdown-item" id="linkBtn_UserInfo" style="font-weight:100;">用户信息</a>' +
                    '       <a href="#" class="dropdown-item" id="linkBtn_SignOut" style="font-weight:100;">退出登录</a>' +
                    '   </div>' +
                    '</li>'
                )
            );

            if (!$('#form_NavBar_Sign').hasClass('hidden')) {
                $('#form_NavBar_Sign').addClass('hidden');
            }

            $("#linkBtn_UserInfo").on('click', function () {
                window.location.href = "profile.html?qid=" + _gCID;
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
                        } else {
                            removeUserInfoItem();
                            $.removeCookie('logined_user_name');
                            $.removeCookie('logined_user_nickname');
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
        }
    }
};

function removeUserInfoItem() {
    $('li#nav_UserInfo_Item').remove();
    if ($('#form_NavBar_Sign').hasClass('hidden')) {
        $('#form_NavBar_Sign').removeClass('hidden');
    }
}

function reinitSignUpFileds() {
    $("#txt_SignUp_UserName").val('');
    $("#txt_SignUp_PhoneNumber").val('');
    $("#txt_SignUp_Pwd").val('');
    $("#lb_SignUp_Pwd_Intension").text('');
    $("#txt_SignUp_CheckCode").val('');
    _refereshCheckCode('img_SignUp_CheckCode');
};

function showAlertMessage(containerId, alertId, message) {
    $('#' + containerId).prepend(
        $(
            '<div id="' + alertId + '" class="alert alert-danger alert-dismissable">' +
            '   <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                message +
            '</div>'
        )
    );
};
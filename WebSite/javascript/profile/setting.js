'use strict';

function buildContent_Setting(response) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="card h-100 text-center card-settings">');
    tmpHTMLArr.push('   <div class="card-header">');
    tmpHTMLArr.push('       <ul class="nav nav-tabs card-header-tabs">');
    tmpHTMLArr.push('           <li class="nav-item setting-nav-item-infor">');
    tmpHTMLArr.push('               <div class="nav-link active"><i class="far fa-user-circle nav-item-icon"></i>个人信息</div>');
    tmpHTMLArr.push('           </li>');
    tmpHTMLArr.push('           <li class="nav-item setting-nav-item-change">');
    tmpHTMLArr.push('               <div class="nav-link"><i class="fas fa-unlock-alt nav-item-icon"></i>修改密码</div>');
    tmpHTMLArr.push('           </li>');
    tmpHTMLArr.push('       </ul>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="card-body h-100 body-settings-card">');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');
    $('.col-main-content').append($(tmpHTMLArr.join('')));
    settingFormatData(response);
    settingBuildInfors();
    initEvents_Settings();
};

function initEvents_Settings() {
    $('.card-settings .card-header-tabs .nav-item').on('click', function (eventObj) {
        $('.card-settings .card-header-tabs .nav-item .nav-link').removeClass('active');
        var currentItem = $(eventObj.currentTarget)
        $(currentItem.find('.nav-link')[0]).addClass('active');
        if (currentItem.hasClass('setting-nav-item-infor')) {
            settingBuildInfors();
        } else {
            settingBuildChange();
        }
    });
};

function settingFormatData(response) {
    var tmpMap = {
        nickname: 'nickName',
        realname: 'userName',
        birthday: 'birthday',
        country: 'country',
        state: 'province',
        city: 'city',
        school: 'school',
        gender: 'gender',
        uid: 'userId'
    };

    var items = $(response).find('item');
    var tmpItem, tmpKey;
    for (var i = 0; i < items.length; i++) {
        tmpItem = $(items[i]);
        _gUserInfoObj[tmpMap[tmpItem.attr('attr')]] = tmpItem.attr('value');
    }
};

function settingBuildInfors() {
    $('.body-settings-card').empty();
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid">');
    tmpHTMLArr.push('   <div class="row justify-content-start align-items-center">');
    tmpHTMLArr.push('       <div class="col-10 offset-1">');
    tmpHTMLArr.push('           <form class="my-3">');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <label for="img_Settings_Profile_Header_B" class="col-2 col-form-label">头像</label>');
    tmpHTMLArr.push('                   <div class="col text-left wrap-settings-profile-header">');
    tmpHTMLArr.push('                       <img id="img_Settings_Profile_Header_B" src="image/circles.svg" data-toggle="modal" data-target="#modalCustomHeader"/>');
    tmpHTMLArr.push('                       <img id="img_Settings_Profile_Header_M" src="image/circles.svg" data-toggle="modal" data-target="#modalCustomHeader"/>');
    tmpHTMLArr.push('                       <img id="img_Settings_Profile_Header_S" src="image/circles.svg" data-toggle="modal" data-target="#modalCustomHeader"/>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <label for="txt_Settings_Profile_NickName" class="col-2 col-form-label">昵称</label>');
    tmpHTMLArr.push('                   <div class="col-8">');
    tmpHTMLArr.push('                       <input type="text" class="form-control" id="txt_Settings_Profile_NickName" placeholder="请输入昵称">');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <label for="txt_Settings_Profile_Name" class="col-2 col-form-label">姓名</label>');
    tmpHTMLArr.push('                   <div class="col-8">');
    tmpHTMLArr.push('                       <input type="text" class="form-control" id="txt_Settings_Profile_Name" placeholder="请输入姓名">');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <label class="col-2 col-form-label">性别</label>');
    tmpHTMLArr.push('                   <div class="col-2">');
    tmpHTMLArr.push('                       <div class="form-check">');
    tmpHTMLArr.push('                           <label class="form-check-label">');
    tmpHTMLArr.push('                               <input type="radio" class="form-check-input" name="settings_profile_gender" id="rb_Settings_Profile_Gender_Male" value="1" checked>男');
    tmpHTMLArr.push('                           </label>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <div class="col-2">');
    tmpHTMLArr.push('                       <div class="form-check">');
    tmpHTMLArr.push('                           <label class="form-check-label">');
    tmpHTMLArr.push('                               <input type="radio" class="form-check-input" name="settings_profile_gender" id="rb_Settings_Profile_Gender_Female" value="0">女');
    tmpHTMLArr.push('                           </label>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <label for="dt_Settings_Profile_Birthday" class="col-2 col-form-label">生日</label>');
    tmpHTMLArr.push('                   <div class="col-8">');
    tmpHTMLArr.push('                       <input class="form-control" type="date" value="' + formatDate(new Date()) + '" id="dt_Settings_Profile_Birthday">');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row row-settings-form-city">');
    tmpHTMLArr.push('                   <label class="col-2 col-form-label">所在城市</label>');
    tmpHTMLArr.push('                   <div class="col-3">');
    tmpHTMLArr.push('                       <select class="form-control" id="sel_Settings_Profile_Province">');
    for (var i = 0; i < _gCitys.length; i++) {
        tmpHTMLArr.push('                            <option value="' + _gCitys[i].p + '">' + _gCitys[i].p + '</option>');
    }

    tmpHTMLArr.push('                       </select>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <label class="col-1 symbol-label" id="title_Settings_Profile_Province">省</label>');
    tmpHTMLArr.push('                   <div class="col-3 no-padding">');
    tmpHTMLArr.push('                       <select class="form-control" id="sel_Settings_Profile_City">');
    for (var i = 0; i < _gCitys[0].c.length; i++) {
        tmpHTMLArr.push('                            <option value="' + _gCitys[0].c[i] + '">' + _gCitys[0].c[i] + '</option>');
    }

    tmpHTMLArr.push('                        </select>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <label class="col-1 symbol-label" id="title_Settings_Profile_City">' + _gCitys[0].ct + '</label>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <label for="txt_Settings_Profile_School" class="col-2 col-form-label">就读学校</label>');
    tmpHTMLArr.push('                   <div class="col-8">');
    tmpHTMLArr.push('                       <input type="text" class="form-control" id="txt_Settings_Profile_School" placeholder="请输入就读的学校名称">');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <div class="col text-center">');
    tmpHTMLArr.push('                       <button type="button" class="btn btn-outline-primary col-3" id="btn_Settings_Profile_Save_Profile">保存</button>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </form>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');

    $('.body-settings-card').append($(tmpHTMLArr.join('')));

    $("#sel_Settings_Profile_Province").change(function () {
        var pVal = $("#sel_Settings_Profile_Province").val();
        var item = {};
        for (var i = 0; i < _gCitys.length; i++) {
            item = _gCitys[i];
            if (item.p == pVal) {
                break;
            }
        }

        var tmpPt = (item.pt && item.pt != '' ? item.pt : '省');
        var tmpCt = (item.ct && item.ct != '' ? item.ct : '市');
        $("#title_Settings_Profile_Province").text(tmpPt);
        $("#title_Settings_Profile_City").text(tmpCt);
        var tmpHTMLArr = [];
        for (var i = 0; i < item.c.length; i++) {
            tmpHTMLArr.push('<option value="' + item.c[i] + '">' + item.c[i] + '</option>');
        }

        $("#sel_Settings_Profile_City").empty();
        $("#sel_Settings_Profile_City").append(tmpHTMLArr.join(''));
    });

    $("#btn_Settings_Profile_Save_Profile").click(function () {
        settingUpdateProfile();
    });

    settingsLoadUserProfile();
};

function settingsLoadUserProfile() {
    $('#img_Settings_Profile_Header_B').attr('src', _gUserInfoObj.header);
    $('#img_Settings_Profile_Header_M').attr('src', _gUserInfoObj.header);
    $('#img_Settings_Profile_Header_S').attr('src', _gUserInfoObj.header);
    $('#txt_Settings_Profile_NickName').val(_gUserInfoObj.nickName);
    $('#txt_Settings_Profile_Name').val(_gUserInfoObj.userName);
    _gUserInfoObj.gender = (_gUserInfoObj.gender == '' ? '1' : _gUserInfoObj.gender);
    $("[name='settings_profile_gender']").each(function () {
        $(this).removeAttr("checked");
        if ($(this).attr("value") == _gUserInfoObj.gender) {
            $(this).prop("checked", true);
        }
    });

    $('#dt_Settings_Profile_Birthday').val(_gUserInfoObj.birthday);
    _gUserInfoObj.province = (_gUserInfoObj.province == '' ? '广东' : _gUserInfoObj.province);
    $('#sel_Settings_Profile_Province').val(_gUserInfoObj.province);
    $('#sel_Settings_Profile_Province').trigger("change");
    _gUserInfoObj.city = (_gUserInfoObj.city == '' ? '深圳' : _gUserInfoObj.city);
    $('#sel_Settings_Profile_City').val(_gUserInfoObj.city);
    $('#txt_Settings_Profile_School').val(_gUserInfoObj.school);
};

function settingBuildChange() {
    $('.body-settings-card').empty();
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid wrap-settings-change-pwd">');
    tmpHTMLArr.push('   <div class="row justify-content-start align-items-center">');
    tmpHTMLArr.push('       <div class="col-10 offset-1">');
    tmpHTMLArr.push('           <form class="my-3">');
    tmpHTMLArr.push('               <div class="form-inline row">');
    tmpHTMLArr.push('                   <label for="txt_Settings_PWD_Old_PWD"  id="lb_Settings_PWD_Old_PWD" class="col-3 col-form-label">旧密码</label>');
    tmpHTMLArr.push('                   <div class="input-group col">');
    tmpHTMLArr.push('                       <input class="form-control js-password-settings-control" id="txt_Settings_PWD_Old_PWD" type="password" placeholder="请输入旧密码"> ');
    tmpHTMLArr.push('                       <div class="input-group-addon js-password-settings-btn">');
    tmpHTMLArr.push('                           <i class="label-pwd-intension" id="lb_Settings_Old_Pwd_Intension"></i>');
    tmpHTMLArr.push('                           <i class="far fa-eye-slash" name="btn_Settings_Show_Hide_Pwd"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-inline row my-2">');
    tmpHTMLArr.push('                   <label for="txt_Settings_PWD_New_PWD" class="col-3 col-form-label">新密码</label>');
    tmpHTMLArr.push('                   <div class="input-group col">');
    tmpHTMLArr.push('                       <input class="form-control js-password-settings-control" id="txt_Settings_PWD_New_PWD" type="password" placeholder="请输入新密码">');
    tmpHTMLArr.push('                       <div class="input-group-addon js-password-settings-btn">');
    tmpHTMLArr.push('                           <i class="label-pwd-intension" id="lb_Settings_New_Pwd_Intension"></i>');
    tmpHTMLArr.push('                           <i class="far fa-eye-slash" name="btn_Settings_Show_Hide_Pwd"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-inline row">');
    tmpHTMLArr.push('                   <label for="txt_Settings_PWD_Confirm_PWD" class="col-3 col-form-label">确认新密码</label>');
    tmpHTMLArr.push('                   <div class="input-group col">');
    tmpHTMLArr.push('                       <input class="form-control js-password-settings-control" id="txt_Settings_PWD_Confirm_PWD" type="password" placeholder="请确认新密码">');
    tmpHTMLArr.push('                       <div class="input-group-addon js-password-settings-btn">');
    tmpHTMLArr.push('                           <i class="label-pwd-intension" id="lb_SignUp_Pwd_Intension"></i>');
    tmpHTMLArr.push('                           <i class="far fa-eye-slash" name="btn_Settings_Show_Hide_Pwd"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row my-3">');
    tmpHTMLArr.push('                   <div class="col text-center">');
    tmpHTMLArr.push('                       <button type="button" class="btn btn-outline-primary col-3" id="btn_Settings_PWD_Save_PWD">保存</button>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </form>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');

    $('.body-settings-card').append($(tmpHTMLArr.join('')));

    $(".js-password-settings-btn").on('click', function () {
        if ($(".js-password-settings-control").attr("type") == 'text') {
            $(".js-password-settings-control").attr("type", "password");
            $("[name='btn_Settings_Show_Hide_Pwd']").addClass('fa-eye-slash');
            $("[name='btn_Settings_Show_Hide_Pwd']").removeClass('fa-eye');
        } else {
            $(".js-password-settings-control").attr("type", "text");
            $("[name='btn_Settings_Show_Hide_Pwd']").addClass('fa-eye');
            $("[name='btn_Settings_Show_Hide_Pwd']").removeClass('fa-eye-slash');
        }
    });

    $("#txt_Settings_PWD_New_PWD").on('blur', function () {
        _checkPwdIntension($("#txt_Settings_PWD_New_PWD").val().trim(), $('#lb_Settings_New_Pwd_Intension'));
    });

    $("#btn_Settings_PWD_Save_PWD").on('click', function () {
        if ($("#txt_Settings_PWD_Old_PWD").val().trim() == "") {
            _showGlobalMessage('请输入旧密码', 'danger', 'alert_Settings_OldPWD');
            return;
        }

        if ($("#txt_Settings_PWD_New_PWD").val().trim() == "") {
            _showGlobalMessage('请输入密码', 'danger', 'alert_Settings_PWD');
            return;
        } else {
            var checkVal = _checkPassword($("#txt_Settings_PWD_New_PWD").val().trim());
            if (checkVal < 0) {
                _showGlobalMessage('密码不符合要求，请重新输入!', 'danger', 'alert_Settings_PWD');
                return;
            }
        }

        if ($("#txt_Settings_PWD_Confirm_PWD").val() != $("#txt_Settings_PWD_New_PWD").val()) {
            _showGlobalMessage('两次输入的密码不一致，请重新输入', 'danger', 'alert_Settings_Confirm');
            return;
        }

        var successFn = function (response) {
            var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
            if (success) {
                _showGlobalMessage('修改密码成功!', 'success', 'alert_ForgetPWD_Success');
            } else {
                _showGlobalMessage('修改密码失败, 请联系客服!', 'danger', 'alert_ForgetPWD_Error');
            }

            $("#txt_Settings_PWD_Old_PWD").val('');
            $("#txt_Settings_PWD_New_PWD").val('');
            $("#txt_Settings_PWD_Confirm_PWD").val('');
        };

        var data = { oldpwd: $("#txt_Settings_PWD_Old_PWD").val(), newpwd: $("#txt_Settings_PWD_New_PWD").val() };
        ajaxFn('GET', _getRequestURL(_gURLMapping.account.updatepwd, data), '', successFn);
    });
};

function settingUpdateProfile() {
    var tSex = '1';
    $('[name="settings_profile_gender"]').each(function () {
        if ($(this).is(':checked')) {
            tSex = $(this).val();
        }
    });

    var newVal = {
        sex: tSex,
        nickname: $('#txt_Settings_Profile_NickName').val(),
        realname: $('#txt_Settings_Profile_Name').val(),
        birthday: $('#dt_Settings_Profile_Birthday').val(),
        state: $('#sel_Settings_Profile_Province').val(),
        city: $('#sel_Settings_Profile_City').val(),
        school: $('#txt_Settings_Profile_School').val(),
        country: 'China'
    };

    var successFn = function (response) {
        if (_getExcuted(response)) {
            _showGlobalMessage('更新个人信息成功!', 'success', 'alert_UpdateProfile_Success');
            _CookieUtils.set("logined_user_nickname", $('#txt_Settings_Profile_NickName').val());
            _gUserInfoObj.nickName = $('#txt_Settings_Profile_NickName').val();
            updateUserInfo();
        } else {
            _showGlobalMessage('更新个人信息失败，请重试!', 'warning', 'alert_UpdateProfile_Error');
        }
    };

    ajaxFn('GET', _getRequestURL(_gURLMapping.account.setinfo, newVal), '', successFn);
};

function formatDate(date) {
    if (typeof (date) == 'number' || typeof (date) == 'string') {
        date = new Date(date);
    }

    if (date == 'Invalid Date') {
        date = new Date();
    }

    var dateArr = [date.getFullYear().toString()];
    var tmpVal = date.getMonth() + 1;
    if (tmpVal < 10) {
        tmpVal = '0' + tmpVal;
    }

    dateArr.push(tmpVal);
    tmpVal = date.getDate();
    if (tmpVal < 10) {
        tmpVal = '0' + tmpVal;
    }

    dateArr.push(tmpVal);
    return dateArr.join('-');
};

function initCustomHeaderImg(path) {
    var successFn = function (response) {
        if (response != '') {
            var canvas = document.getElementById("canvas_CustomHeader");
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 320, 320);
            var image = new Image();
            image.setAttribute('crossOrigin', 'anonymous');
            image.src = response;
            image.onload = function () {
                var tmpSize = calcExhibitionSize(image);
                ctx.drawImage(image, 0, 0, tmpSize.w, tmpSize.h, (320 - tmpSize.nw) / 2, (320 - tmpSize.nh) / 2, tmpSize.nw, tmpSize.nh);
                fnImageCropRot(image, { w: tmpSize.nw, h: tmpSize.nh });
                $('#progress_HeaderUpload').hide();
            };
            image.onerror = function () {
                var img = new Image();
                img.setAttribute('crossOrigin', 'anonymous');
                img.src = 'image/tmpheader.jpg';
                var tmpSize = calcExhibitionSize(img);
                ctx.drawImage(img, 0, 0, tmpSize.w, tmpSize.h, (320 - tmpSize.nw) / 2, (320 - tmpSize.nh) / 2, tmpSize.nw, tmpSize.nh);
                fnImageCropRot(img, { w: tmpSize.nw, h: tmpSize.nh });
                $('#progress_HeaderUpload').hide();
            };

            var tmpSize = calcExhibitionSize(image);
            fnImageCropRot(image, { w: tmpSize.nw, h: tmpSize.nh });
        } else {
            $('#progress_HeaderUpload').hide();
            $('#warnning_HeaderUpload').show();
            $('#wrap_CropBox_Header').show();
        }
    };

    ajaxFn('GET', _getRequestURL(_gURLMapping.account.getheader64, {}), '', successFn);
}

var _eventBinded = false;
var fnImageCropRot = function (o, newSize) {
    var ID = function (id) {
        return document.getElementById(id);
    };

    var oCanvas = ID("canvas_CustomHeader");
    oCanvas.onselectstart = function () {
        return false;
    };

    var oCreateImg = o;
    var iOrigWidth = (oCreateImg.width > 320 ? 320 : oCreateImg.width);
    var iOrigHeight = (oCreateImg.height > 320 ? 320 : oCreateImg.height);
    if ($('#wrap_CropBox_Header').length == 0) {
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<div id="wrap_CropBox_Header" style="width:' + iOrigWidth + 'px; height:' + iOrigHeight + 'px;">');
        tmpHTMLArr.push('   <div id="CropBox_Header">');
        tmpHTMLArr.push('       <div id="DragBg_Header"></div>');
        tmpHTMLArr.push('       <div id="dragRightBot" ></div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
        $("#canvas_CustomHeader").after(tmpHTMLArr.join(""));
    }

    var tmpParams = {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        currentX: 0,
        currentY: 0,
        flag: false,
        kind: "drag"
    };
    $('#wrap_CropBox_Header').show();
    var cropWidth = (iOrigWidth > 100 ? 100 : iOrigWidth);
    var cropHeight = (iOrigHeight > 100 ? 100 : iOrigHeight);
    var orgLeft = (320 - cropWidth) / 2;
    var orgTop = (320 - cropHeight) / 2;
    $("#CropBox_Header").width(cropWidth);
    $("#CropBox_Header").height(cropHeight);
    $("#CropBox_Header").css('top', orgTop + "px");
    $("#CropBox_Header").css('left', orgLeft + "px");
    showSampleImage(o, orgLeft, orgTop, cropWidth, cropHeight, newSize);
    startDrag.image = o;
    startDrag.newSize = newSize;
    if (!_eventBinded) {
        startDrag(ID("DragBg_Header"), ID("CropBox_Header"), "drag", tmpParams);
        startDrag(ID("dragRightBot"), ID("CropBox_Header"), "se", tmpParams);
        _eventBinded = true;
    }
};

var startDrag = function (point, target, kind, params) {
    params.width = $(target).width();
    params.height = $(target).height();
    params.left = $(target).position().left;
    params.top = $(target).position().top;

    point.onmousedown = function (event) {
        params.kind = kind;
        params.flag = true;
        if (!event) {
            event = window.event;
        }

        var e = event;
        params.currentX = e.clientX;
        params.currentY = e.clientY;
        point.onselectstart = function () {
            return false;
        }

        return false;
    };

    document.onmouseup = function () {
        params.flag = false;
        params.left = $(target).position().left;
        params.top = $(target).position().top;
        params.width = $(target).width();
        params.height = $(target).height();
        showSampleImage(startDrag.image, params.left, params.top, params.width, params.height, startDrag.newSize);
    };

    document.onmousemove = function (event) {
        var e = event ? event : window.event;
        if (params.flag) {
            var nowX = e.clientX, nowY = e.clientY;
            var disX = nowX - params.currentX;
            var disY = nowY - params.currentY;
            var tmpWidth = parseInt(params.width);
            var tmpHeighth = parseInt(params.height);
            var tmpLeft = parseInt(params.left);
            var tmpTop = parseInt(params.top);
            if (params.kind === "se") {
                var newWidth = tmpWidth + disX;
                var newHeight = tmpHeighth + disX;
                newWidth = (newWidth + tmpLeft > 320 ? 320 - tmpLeft : newWidth);
                newHeight = (newHeight + tmpTop > 320 ? 320 - tmpTop : newHeight);
                if (newWidth != newHeight) {
                    return;
                }

                $(target).width(newWidth);
                $(target).height(newHeight);
            } else {
                var newLeft = tmpLeft + disX;
                var newTop = tmpTop + disY;
                newLeft = (newLeft < 0 ? 0 : newLeft);
                newTop = (newTop < 0 ? 0 : newTop);
                newLeft = (newLeft + tmpWidth > 320 ? 320 - tmpWidth : newLeft);
                newTop = (newTop + tmpHeighth > 320 ? 320 - tmpHeighth : newTop);
                $(target).css('left', newLeft + "px");
                $(target).css('top', newTop + "px");
            }
        }
    }
};

startDrag.image = null;
startDrag.newSize = null;
function calcExhibitionSize(image) {
    var imgHeight = image.height;
    var imgWidth = image.width;
    var newWidth = imgWidth;
    var newHeight = imgHeight;
    var scaleX = imgWidth / 320;
    var scaleY = imgHeight / 320;
    if (imgHeight > imgWidth) {
        newHeight = 320;
        newWidth = imgWidth / imgHeight * newHeight;
    } else {
        newWidth = 320;
        newHeight = imgHeight / imgWidth * newWidth;
    }

    return { w: imgWidth, h: imgHeight, nw: newWidth, nh: newHeight };
};

function transCropBoxSizeToRealSize(image, left, top, width, height, newSize) {
    var tmpSpaceH = (320 - newSize.w) / 2;
    var tmpSpaceV = (320 - newSize.h) / 2;
    var tmpLeft = left - tmpSpaceH;
    var tmpTop = top - tmpSpaceV;
    var tmpWidth = width;
    var tmpHeight = height;
    if (tmpLeft < 0) {
        tmpWidth = tmpWidth + tmpLeft;
        tmpLeft = 0;
    }

    if (tmpWidth > newSize.w) {
        tmpWidth = newSize.w;
    } else if (tmpLeft + tmpWidth > newSize.w) {
        tmpWidth = tmpWidth - (tmpLeft + tmpWidth - newSize.w);
    }

    if (tmpTop < 0) {
        tmpHeight = tmpHeight + tmpTop;
        tmpTop = 0;
    }

    if (tmpHeight > newSize.h) {
        tmpHeight = newSize.h;
    } else if (tmpTop + tmpHeight > newSize.h) {
        tmpHeight = tmpHeight - (tmpTop + tmpHeight - newSize.h);
    }

    var scaleX = image.width / newSize.w;
    var scaleY = image.height / newSize.h;
    left = tmpLeft * scaleX;
    top = tmpTop * scaleY;
    width = tmpWidth * scaleX;
    height = tmpHeight * scaleY;
    return { l: left, t: top, w: width, h: height };
};

function showSampleImage(image, left, top, width, height, newSize) {
    var sizeObj = transCropBoxSizeToRealSize(image, left, top, width, height, newSize)
    var ctx = document.getElementById("canvas_Sample_1").getContext('2d');
    ctx.clearRect(0, 0, 100, 100);
    ctx.drawImage(image, sizeObj.l, sizeObj.t, sizeObj.w, sizeObj.h, 0, 0, 100, 100);
    ctx = document.getElementById("canvas_Sample_2").getContext('2d');
    ctx.clearRect(0, 0, 64, 64);
    ctx.drawImage(image, sizeObj.l, sizeObj.t, sizeObj.w, sizeObj.h, 0, 0, 64, 64);
    ctx = document.getElementById("canvas_Sample_3").getContext('2d');
    ctx.clearRect(0, 0, 24, 24);
    ctx.drawImage(image, sizeObj.l, sizeObj.t, sizeObj.w, sizeObj.h, 0, 0, 24, 24);
    $('#btn_CustomHeader_Save').attr('data-content', sizeObj.l + ',' + sizeObj.t + ',' + sizeObj.w + ',' + sizeObj.h)
};
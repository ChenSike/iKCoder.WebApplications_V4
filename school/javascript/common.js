'use strict';

var _gCID = null;
var _gExpires = 15;
var _gLabelMap = {};
var _gRoleObj = null;
var _gHostName = 'http://www.ikcoder.com/ikcoderapi';
var _gURLMapping = {
    server: {
        reg: '/Sys/api_iKCoder_Sys_Set_RegDomain.aspx'
    },
    account: {
        signstatus: '/Account/Common/api_iKCoder_Common_Get_SignStatus.aspx',
        util: '/Account/Profile/api_iKCoder_Profile_Get_SelectNodes.aspx',
        teachchgpwd: '/Account/Teacher/api_iKCoder_Teacher_Set_ChangePassword.aspx',
        logout: '/Account/Common/api_iKCoder_Common_Set_Logout.aspx',
        getheader: '/Account/Profile/api_iKCoder_Profile_Get_HeaderImg.aspx',
        updateheader: '/Account/Profile/api_iKCoder_Profile_Set_UploadTmpHeaderImg.aspx',
        clipheaderimg: '/Account/Profile/api_iKCoder_Profile_Set_ClipHeaderImg.aspx',
        updateutil: '/Account/Profile/api_iKCoder_Profile_Set_Nodes.aspx',
        teachersignin: '/Account/Teacher/api_iKCoder_Teacher_Set_Sign.aspx'//?symbol=&password=&licence=
    },
    data: {
        getwordlist: '/data/get_checkcodenua.aspx',
        getaudio: '/Data/api_iKCoder_Data_Get_Audio.aspx',
        getimage: '/Data/api_iKCoder_Data_Get_Image.aspx',
        setremovebindata: '/Data/api_iKCoder_Data_Set_RemoveBinData.aspx'
    },
    bus: {
        getworkspace: '/Bus/Workspace/api_iKCoder_Workspace_Get_Workspace.aspx',
        getcurrentdoc: '/BUS/LessonsNav/api_iKCoder_LessonNav_GetCurentDoc.aspx'//?symbol=B_01_001'
    }
};

var _roleValue = {
    teacher: {
        role: '2',
        url: {
            sign: _gURLMapping.account.teachersignin,
            chgpwd: _gURLMapping.account.teachchgpwd
        },
        target: 'teacher.html'
    }
}

function _initURLMapping() {
    $.ajax({
        type: 'GET',
        async: false,
        url: _gHostName + '/data/get_UrlMap.aspx?showall=1&qid=' + _gCID,
        success: function (xml, status) {
            for (var key in _gURLMapping) {
                $(xml).find("item[group='" + key + "']").each(function (index, ele) {
                    _gURLMapping[key][$(ele).attr('key')] = $(ele).attr('value');
                });
            }
        },
        dataType: 'xml',
        xhrFields: {
            //withCredentials: true
        },
        error: function () {
            alert('Fail to load URL Mapping.');
        }
    });
};

function _registerRemoteServer() {
    return true;
    $.ajax({
        type: 'GET',
        async: true,
        data: '<root></root>',
        url: _getRequestURL(_gURLMapping.server.reg, { domain: window.location.origin }),
        success: function (xml, status) {
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
        }
    });
};

function _loadLabels() {

};

function _getLabel(key) {
    return _gLabelMap[key] ? _gLabelMap[key] : key;
};

function _getRequestURL(page, params) {
    var url = _gHostName + page;
    url += '?qid=' + _gCID;
    if (params) {
        for (var key in params) {
            url += '&' + key + '=' + params[key];
        }
    }

    url += '&rnd=' + Date.now();
    return url;
};

function _getOffsetPosition(target, topParentClass) {
    var offsetPos = { left: 0, top: 0 };
    var flag = true;
    while (flag) {
        var pLeft = parseInt(target.css('padding-left'));
        var pTop = parseInt(target.css('padding-top'));
        offsetPos.top += pTop;
        offsetPos.left += pLeft;
        if (target.hasClass(topParentClass)) {
            flag = false;
        } else {
            var mLeft = parseInt(target.css('margin-left'));
            var mTop = parseInt(target.css('margin-top'));
            offsetPos.top += mTop;
            offsetPos.left += mLeft;
            target = target.parent();
        }
    }

    return offsetPos;
};

function _startCheckState() {
    return true;
    _registerRemoteServer();
    $.ajax({
        type: 'GET',
        async: true,
        url: _getRequestURL(_gURLMapping.account.signstatus),
        data: '<root></root>',
        success: function (responseData, status) {
            if ($(responseData).find('err').length > 0) {
                window.location.href = "signin.html?rnd=" + Date.now();
                $.removeCookie('logined_user_name');
                return;
            } else {
                if ($(responseData).find('msg').length > 0 && $($(responseData).find('msg')[0]).attr('logined_marked') != '') {
                    $.cookie("logined_user_name", $($(responseData).find('msg')[0]).attr('logined_user_name'), { path: '/', expires: 0.125 });
                    window.setTimeout(_startCheckState, 30000);
                } else {
                    $.removeCookie('logined_user_name');
                    window.location.href = "signin.html?rnd=" + Date.now();
                }
            }
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            window.location.href = "signin.html?rnd=" + Date.now();
            $.removeCookie('logined_user_name');
        }
    });
};

function _loadIMG(src, callback) {
    var img = new Image();
    img.src = src;
    img.onload = function () {
        if (callback) {
            callback();
        }
    };

    img.onerror = function () {
        _loadIMG(src);
    };
};

function listMovePrev() {
    if (arguments[0] && arguments[0].data) {
        var targetId = arguments[0].data.id;
        var step = arguments[0].data.step;
        var container = $('#' + targetId);
        var wrap = container.parent();
        var left = parseInt(container.css('margin-left').replace('px', ''));
        var width = container.width();
        var wrapWidth = wrap.width();
        if (left < 0) {
            var tmpStep = step;
            if (Math.abs(left) < step) {
                tmpStep = Math.abs(left);
            }

            container.animate({ marginLeft: left + tmpStep + 'px', });
        }
    }
};

function listMoveNext() {
    if (arguments[0] && arguments[0].data) {
        var targetId = arguments[0].data.id;
        var step = arguments[0].data.step;
        var container = $('#' + targetId);
        var wrap = container.parent();
        var left = parseInt(container.css('margin-left').replace('px', ''));
        var width = container.width();
        var wrapWidth = wrap.width();
        if (width + left > wrapWidth) {
            var tmpStep = step;
            if (width + left - wrapWidth < step) {
                tmpStep = width + left - wrapWidth;
            }

            container.animate({ marginLeft: left - tmpStep + 'px', });
        }
    }
};

function _startIntroJs() {
    var flag = true;
    $('head').find('link').each(function (index, ele) {
        if ($(ele).attr('href').indexOf('introjs.css') >= 0) {
            flag = false;
        }
    });

    if (flag) {
        $('head').append('<link rel="stylesheet" href="intro.js-2.4.0/introjs.css">');
        $('head').append('<link rel="stylesheet" href="intro.js-2.4.0/themes/introjs-modern.css">');
        $.getScript("intro.js-2.4.0/intro.js", function () {
            introJs().setOptions({
                'showButtons': true,
                "nextLabel": "下一步",
                "prevLabel": "上一步",
                "skipLabel": "跳过",
                "doneLabel": "完成",
                "exitOnEsc": true,
                "keyboardNavigation": true
            }).start();
        });
    }
};

function _showGlobalMessage(msg, type, id) {
    if ($('.alert-mask-custom').length == 0) {
        $('body').append($('<div class="alert-mask-custom"></div>'));
    }
    $('.alert-mask-custom').show();
    //$('.alert-mask-custom').height($('body')[0].scrollHeight);
    $('body').append($('<div class="alert alert-' + type + '  alert-dismissable custom-global-alert" id="' + id + '"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + msg + '</div>'));
    $('#' + id).bind('close.bs.alert', function () {
        $('.alert-mask-custom').hide();
        $('body').remove('#' + id);
    });
};

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) { }
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '',
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        var result = key ? undefined : {};
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                result = read(cookie, value);
                break;
            }

            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };
}));

function getQueryString(key) {
    var tempArr = window.location.search.substr(1).split('&');
    for (var i = 0; i < tempArr.length; i++) {
        var strArr = tempArr[i].split('=');
        if (strArr[0] == key) {
            return strArr[1];
        }
    }
};

function ajaxFn(type, url, data, success, failed) {
    _registerRemoteServer();
    $.ajax({
        type: type,
        async: true,
        url: url,
        data: data,
        success: function (response, status) {
            success(response);
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            failed();
        }
    });
};

function _logout() {
    _registerRemoteServer();
    $.ajax({
        type: 'GET',
        async: true,
        url: _getRequestURL(_gURLMapping.account.logout),
        data: '<root></root>',
        success: function (data, status) {
            if ($(data).find('err').length > 0) {
                _showGlobalMessage($(data).find('err').attr('msg'), 'danger', 'alert_Logout_Error');
            }

            $.removeCookie('logined_user_name');
            window.location.href = 'signin.html?rnd=' + Date.now();
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            $.removeCookie('logined_user_name');
        }
    });
};

function _showChgPWDPopup() {
    if ($('#modal_ChangePWD').length == 0) {
        var tmpHTMLStr = '<div class="modal fade" id="modal_ChangePWD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '    <div class="modal-dialog" role="document">' +
        '        <div class="modal-content">' +
        '            <div class="modal-header">' +
        '                <h5 class="modal-title" id="exampleModalLabel">修改密码</h5>' +
        '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '                    <span aria-hidden="true">&times;</span>' +
        '                </button>' +
        '            </div>' +
        '            <div class="modal-body">' +
        '                <form>' +
        '                    <div class="form-group">' +
        '                        <label for="txt_PWD" class="form-control-label">新密码</label>' +
        '                        <input type="password" class="form-control" id="txt_ChangePWD_New" placeholder="请输入一个6到20位的新密码">' +
        '                    </div>' +
        '                </form>' +
        '            </div>' +
        '            <div class="modal-footer">' +
        '                <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>' +
        '                <button type="button" class="btn btn-primary" id="btn_ChangePWD">确定</button>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';
        $('body').append($(tmpHTMLStr));
        $('#btn_ChangePWD').on('click', function () {
            var newPWD = $('#txt_ChangePWD_New').val().trim();
            if (newPWD.length < 6 || newPWD.length > 20) {
                _showGlobalMessage('新密码的长度超过限制！', 'warning', 'alert_ChangePWD_NewLength');
                return;
            }

            _registerRemoteServer();
            $.ajax({
                type: 'GET',
                async: true,
                url: _getRequestURL(_gRoleObj.url.chgpwd),
                data: '<root><password>' + newPWD + '</password></root>',
                success: function (data, status) {
                    if ($(data).find('err').length > 0) {
                        _showGlobalMessage($(data).find('err').attr('msg'), 'danger', 'alert_ChangePWD_Error');
                        return;
                    }

                    $('#modal_ChangePWD').modal('hide');
                    _logout();
                },
                dataType: 'xml',
                xhrFields: {
                    withCredentials: true
                },
                error: function () {
                }
            });

        });
    }

    $('#modal_ChangePWD').modal('show');
};

function testTextWidth(text, fontSize, fontWeight, fontFamily, letterSpaceing) {
    var testDiv = $("#div_test_text_width");
    if (!testDiv || testDiv.length == 0) {
        $('body').append($('<div id="div_test_text_width" style="position:absolute;left:-10000px; top:-10000px;width:auto;"></div>'));
        testDiv = $("#div_test_text_width");
    }

    testDiv.css('font-size', fontSize);
    testDiv.css('font-weight', fontWeight == '' ? 'normal' : fontWeight);
    testDiv.css('font-family', fontFamily == '' ? '微软雅黑' : fontFamily);
    testDiv.css('letter-spacing', letterSpaceing == '' ? 'normal' : letterSpaceing);
    testDiv.text(text);

    return testDiv.width();
};

function testTextWidthFromElId(sourceTagId) {
    var sourceTag = document.getElementById(sourceTagId);
    if (!sourceTag) {
        return -1;
    }

    return testTextWidth(sourceTag.innerHTML, sourceTag.style.fontSize, sourceTag.style.fontWeight, sourceTag.style.fontFamily);
};

function testTextWidthFromEl(source) {
    if (!source) {
        return -1;
    }

    return testTextWidth(source.text(), source.css('font-size'), source.css('font-weight'), source.css('font-family'), source.css('letter-spacing'));
};

/*Date Time*/
function isLeapYear(year) {
    if ((tmpYear % 100 != 0 && tmpYear % 4 == 0) || (tmpYear % 100 == 0 && tmpYear % 400 == 0)) {
        return true;
    }

    return false;
};

function getDaysOfMonth(date) {
    var tmpDays = 31;
    var tmpYear = date.getFullYear();
    var tmpMonth = date.getMonth();
    if (tmpMonth == 1) {
        if (isLeapYear(tmpYear)) {
            tmpDays = 29;
        } else {
            tmpDays = 28;
        }
    } else if (tmpMonth == 3 || tmpMonth == 5 || tmpMonth == 8 || tmpMonth == 10) {
        tmpDays = 30;
    }

    return tmpDays;
}

function formatForDateInput(sourceDate) {
    if (sourceDate == null) {
        sourceDate = new Date();
    }

    var year = sourceDate.getFullYear();
    var month = sourceDate.getMonth() + 1;
    var day = sourceDate.getDate();
    month = (month < 10 ? '0' + month : month);
    day = (day < 10 ? '0' + day : day);
    return year + '-' + month + '-' + day;
};

function getDateByPeriod(sourceDate, period, periodType) {
    if (sourceDate == null) {
        sourceDate = new Date();
    }

    var retVal = null;
    if (periodType == 's') {
        retVal = new Date(sourceDate.valueOf() + period * 1000);
    } else if (periodType == 'm') {
        retVal = new Date(sourceDate.valueOf() + period * 60 * 1000);
    } else if (periodType == 'h') {
        retVal = new Date(sourceDate.valueOf() + period * 60 * 60 * 1000);
    } else if (periodType == 'D') {
        retVal = new Date(sourceDate.valueOf() + period * 24 * 60 * 60 * 1000);
    } else {
        var tmpYear = sourceDate.getFullYear();
        var tmpMonth = sourceDate.getMonth();
        var tmpDay = sourceDate.getDate();
        if (periodType == 'M') {
            retVal = new Date(new Date(sourceDate.setDate(1)).setMonth(tmpMonth + period));
            var totalDays = getDaysOfMonth(retVal);
            if (tmpDay < totalDays) {
                retVal = new Date(retVal.setDate(tmpDay));
            } else {
                retVal = new Date(retVal.setDate(totalDays));
            }
        } else if (periodType == 'Y') {
            if (isLeapYear(tmpYear) && tmpMonth == 1 && tmpDay == getDaysOfMonth(sourceDate)) {
                retVal = new Date(new Date(sourceDate.setDate(1)).setFullYear(tmpYear + period));
                retVal = new Date(retVal.setDate(getDaysOfMonth(retVal)));
            } else {
                retVal = new Date(sourceDate.setFullYear(tmpYear + period));
            }
        }
    }

    return retVal;
};

/*XML Operation*/
function LoadXMLFile(fileName) {
    var xmlDom = null;
    if (window.ActiveXObject) {
        xmlDom = new ActiveXObject("Microsoft.XMLDOM");
        xmlDom.async = "false";
        xmlDom.load(fileName);
    } else if (document.implementation && document.implementation.createDocument) {
        var xmlhttp = new window.XMLHttpRequest();
        xmlhttp.open("GET", fileName, false);
        xmlhttp.send(null);
        xmlDom = xmlhttp.responseXML;
    } else {
        xmlDom = null;
    }
    return xmlDom;
};

function XMLToString(xmlDoc) {
    if (window.ActiveXObject) {
        return xmlDoc.xml;
    } else {
        return (new XMLSerializer()).serializeToString(xmlDoc);
    }
};

function StringToXML(str) {
    if (window.ActiveXObject) {
        var xmlDom = new ActiveXObject("Microsoft.XMLDOM");
        xmlDom.loadXML(str);
        return xmlDom;
    } else {
        var retDoc = new DOMParser().parseFromString(str, "text/xml");
        if (XMLToString(retDoc) != str) {
            retDoc = null;
        }

        return retDoc;
    }
};
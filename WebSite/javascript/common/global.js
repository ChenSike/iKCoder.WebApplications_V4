﻿'use strict';

var _cssPrefixArr = ['', '-moz-', '-o-', '-webkit-', 'ms'];
//get date now
if (!Date.now) {
    Date.now = function () {
        return new Date().getTime();
    };
}
//defined requestAnimationFrame and cancelAnimationFrame
(function () {
    'use strict';
    var tmpPrefixArr = ['webkit', 'moz', 'o', 'ms'];
    for (var i = 0; i < tmpPrefixArr.length && !window.requestAnimationFrame; ++i) {
        var vp = tmpPrefixArr[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(
                function () {
                    callback(lastTime = nextTime);
                },
                nextTime - now
            );
        };

        window.c = window.clearTimeout;
    }
}());
//defined host name
var _gHostName = {
    Basic: 'http://www.ikcoder.com/corebasic/api',
    App: 'http://www.ikcoder.com/coreapp/api',
};
//defined url mapping
var _gURLMapping = {
    account: {
        //Get	string uid, string pwd, string status = "0", string level = "0"
        signup: _gHostName.Basic + '/Account_Students_Create',
        //Get	string uid, string pwd, string checkcode, string status = "0", string level = "0"
        signupwithcode: _gHostName.Basic + '/Account_Students_CreateWithCheckCode',
        //Get	string uid
        existed: _gHostName.Basic + '/Account_Students_Existed',
        //Get	string name, string pwd
        signin: _gHostName.Basic + '/Account_Students_Login',
        //Get	string name, string pwd,string checkcode
        signinwithcode: _gHostName.Basic + '/Account_Students_LoginWithCheckCode',
        //Get
        signout: _gHostName.Basic + '/Account_Students_Logout',
        //Get
        signstatus: _gHostName.Basic + '/Account_Students_SignStatus',
        //Get
        checkcode: _gHostName.Basic + '/Common_Services_NewCheckCode',
        //Get	string oldpwd,string newpwd
        updatepwd: _gHostName.Basic + '/Account_Students_ChangePWD',
        //Get	string withpath="1"
        getheader: _gHostName.Basic + '/Profiles_Students_GetHeader',
        //Post
        setheader: _gHostName.Basic + '/Profiles_Students_SetHeader',
        //Get	string sex, string nickname, string birthday, string state, string city , string country = "China"
        setinfo: _gHostName.Basic + '/Profiles_Students_SetTextInfo',
        //Get
        getinfo: _gHostName.Basic + '/Profiles_Students_GetTextInfo',
    }
};
//merge url
function _getRequestURL(page, params) {
    var url = page + '?rnd=' + Date.now();;
    if (params) {
        for (var key in params) {
            url += '&' + key + '=' + params[key];
        }
    }

    return url;
};
//cover image to base64
function ConvertImgToBase64(url, callback, outputFormat) {
    var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this, dataURL);
        canvas = null;
    };

    img.src = url;
};
//test text width
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
//test text width
function testTextWidthFromElId(sourceTagId) {
    var sourceTag = document.getElementById(sourceTagId);
    if (!sourceTag) {
        return -1;
    }

    return testTextWidth(sourceTag.innerHTML, sourceTag.style.fontSize, sourceTag.style.fontWeight, sourceTag.style.fontFamily);
};
//test text width
function testTextWidthFromEl(source) {
    if (!source) {
        return -1;
    }

    return testTextWidth(source.text(), source.css('font-size'), source.css('font-weight'), source.css('font-family'), source.css('letter-spacing'));
};
//test text height
function testTextHeight(text, fontSize, fontWeight, fontFamily, letterSpaceing) {
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

    return testDiv.height();
}
//get random int
function randomInt(minVal, maxVal) {
    var rand = parseInt(Math.random() * (maxVal - minVal + 1) + minVal);
    return rand;
}
//check sign in state
function _startCheckState() {
    var checkSuccessFn = function (responseData) {
        if ($(responseData).find('err').length > 0) {
            _signOut();
        } else {
            if ($(responseData).find('msg').length > 0 && $($(responseData).find('msg')[0]).attr('logined_marked') == '1') {
                _CookieUtils.set("logined_user_name", $($(responseData).find('msg')[0]).attr('logined_user_name'), { path: '/', expires: 0.125 });
                if (!_CookieUtils.get("logined_user_nickname") || _CookieUtils.get("logined_user_nickname") == '') {
                    var getNickNameSuccessFn = function (responseData_2) {
                        if ($(responseData_2).find('err').length > 0) {
                            _signOut();
                        } else {
                            var nickName = '';
                            var tmpObject = $(responseData_2).find('msg');
                            for (var i = 0; i < tmpObject.length; i++) {
                                if ((!$(tmpObject[i]).attr('type') || $(tmpObject[i]).attr('type') != '1') && $(tmpObject[i]).attr('xpath') == '/root/usrbasic/usr_nickname') {
                                    nickName = $(tmpObject[i]).attr('value');
                                }
                            }

                            if (nickName) {
                                _CookieUtils.set("logined_user_nickname", nickName, { path: '/', expires: 0.125 });
                            }
                        }
                    }

                    ajaxFn('GET', _getRequestURL(_gURLMapping.account.getinfo), '', getNickNameSuccessFn, _signOut);
                }

                window.setTimeout(_startCheckState, 30000);
            } else {
                _signOut();
            }
        }
    };

    ajaxFn('GET', _getRequestURL(_gURLMapping.account.signstatus), '', checkSuccessFn, _signOut);
};
//sign out
function _signOut() {
    ajaxFn('GET', _getRequestURL(_gURLMapping.account.signout), '', function () {
        //window.location.href = "http://www.ikcoder.com/signin.html?rnd=" + Date.now();
        window.location.href = "http://ikcoder.ikcoder.com/ikcoderv4/sign.html?rnd=" + Date.now();
        _CookieUtils.delete('logined_user_name');
        _CookieUtils.delete('logined_user_nickname');
    });
};
//format ajax request
function ajaxFn(type, url, data, success, failed, async) {
    var asyncType = true;
    if (typeof async != 'undefined' && async === false) {
        asyncType = false;
    }

    var failedFn = typeof failed == 'function' ? failed : _gEmptyFn;
    var errorFn = typeof error == 'function' ? error : _gEmptyFn;
    $.ajax({
        type: type,
        async: asyncType,
        url: url,
        data: data,
        success: function (response, status) {
            success(response);
        },
        dataType: 'text',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            errorFn();
        }
    });
};

function _gEmptyFn() {
};
//referesh check code
var _timeoutRefereshCC;
function _refereshCheckCode(checkCodeId, notClear) {
    if (typeof notClear == 'undefined' || notClear != '1') {
        window.clearTimeout(_timeoutRefereshCC);
    }

    $("#" + checkCodeId).attr("src", _getRequestURL(_gURLMapping.account.checkcode, {}));
    _timeoutRefereshCC = window.setTimeout('_refereshCheckCode("' + checkCodeId + '", "1");', 540000);
};
//load image
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
//get query string in url
function getQueryString(key) {
    var retValue = '';
    var tempArr = window.location.search.substr(1).split('&');
    for (var i = 0; i < tempArr.length; i++) {
        var strArr = tempArr[i].split('=');
        if (strArr[0] == key) {
            retValue = strArr[1];
        }
    }

    return retValue;
};
//start introduce
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
//show global message
function _showGlobalMessage(msg, type, id) {
    if ($('.alert-mask-custom').length == 0) {
        $('body').append($('<div class="alert-mask-custom"></div>'));
    }
    $('.alert-mask-custom').show();
    $('.alert-mask-custom').height($('html').height());
    $('body').append($('<div class="alert alert-' + type + '  alert-dismissable custom-global-alert" id="' + id + '"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + msg + '</div>'));
    $('#' + id).bind('close.bs.alert', function () {
        $('.alert-mask-custom').hide();
        $('body').remove('#' + id);
    });
};
//defined cookie operation
var _CookieUtils = {
    get: function (name) {
        var cookieName = encodeURIComponent(name) + "=";
        //只取得最匹配的name，value
        var cookieStart = document.cookie.indexOf(cookieName);
        var cookieValue = null;

        if (cookieStart > -1) {
            // 从cookieStart算起
            var cookieEnd = document.cookie.indexOf(';', cookieStart);
            //从=后面开始
            if (cookieEnd > -1) {
                cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
            } else {
                cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, document.cookie.length));
            }
        }

        return cookieValue;
    },
    set: function (name, val, options) {
        if (!name) {
            throw new Error("coolie must have name");
        }
        var enc = encodeURIComponent;
        var parts = [];

        val = (val !== null && val !== undefined) ? val.toString() : "";
        options = options || {};
        parts.push(enc(name) + "=" + enc(val));
        // domain中必须包含两个点号
        if (options.domain) {
            parts.push("domain=" + options.domain);
        }
        if (options.path) {
            parts.push("path=" + options.path);
        }
        // 如果不设置expires和max-age浏览器会在页面关闭时清空cookie
        if (options.expires) {
            parts.push("expires=" + options.expires.toGMTString());
        }
        if (options.maxAge && typeof options.maxAge === "number") {
            parts.push("max-age=" + options.maxAge);
        }
        if (options.httpOnly) {
            parts.push("HTTPOnly");
        }
        if (options.secure) {
            parts.push("secure");
        }

        document.cookie = parts.join(";");
    },
    delete: function (name, options) {
        options.expires = new Date(0);// 设置为过去日期
        this.set(name, null, options);
    }
};
/*XML Operation*/
//load xml file
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
//xml to string
function XMLToString(xmlDoc) {
    if (window.ActiveXObject) {
        return xmlDoc.xml;
    } else {
        return (new XMLSerializer()).serializeToString(xmlDoc);
    }
};
//string to xml
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
'use strict';

var _cssPrefixArr = ['', '-moz-', '-o-', '-webkit-', 'ms'];

if (!Date.now) {
    Date.now = function () {
        return new Date().getTime();
    };
}

(function () {
    'use strict';
    var _cssPrefixArr = ['webkit', 'moz', 'o', 'ms'];
    for (var i = 0; i < _cssPrefixArr.length && !window.requestAnimationFrame; ++i) {
        var vp = _cssPrefixArr[i];
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

        window.cancelAnimationFrame = window.clearTimeout;
    }
}());

var _gHostName = {
    Basic: 'http://www.ikcoder.com/corebasic/api',
    App: 'http://www.ikcoder.com/coreapp/api',
};

var _gURLMapping = {
    account: {
        //Get	string uid, string pwd, string status = "0", string level = "0"
        signup: _gHostName.Basic + '/Account_Students_Create',
        //Get	string uid, string pwd, string checkcode, string status = "0", string level = "0"
        signupwithcode: _gHostName.Basic + '/Account_Students_CreateWithCheckCode',
        //Get	string uid
        existed: _gHostName.Basic + '/Account_Students_Existed	',
        //Get	string name, string pwd
        signin: _gHostName.Basic + '/Account_Students_Login',
        //Get	string name, string pwd,string checkcode
        signinwithcode: _gHostName.Basic + '/Account_Students_LoginWithCheckCode',
        //Get
        signout: _gHostName.Basic + '/Account_Students_Logout	Get',
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


function _getRequestURL(page, params) {
    var url = page + '?rnd=' + Date.now();;
    if (params) {
        for (var key in params) {
            url += '&' + key + '=' + params[key];
        }
    }

    return url;
};

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

function randomInt(minVal, maxVal) {
    var rand = parseInt(Math.random() * (maxVal - minVal + 1) + minVal);
    return rand;
}

function _startCheckState() {
    $.ajax({
        type: 'GET',
        async: true,
        url: _getRequestURL(_gURLMapping.account.signstatus),
        data: '<root></root>',
        success: function (responseData, status) {
            if ($(responseData).find('err').length > 0) {
                var tmpIndex = window.location.href.indexOf("/appstudio/");
                if (tmpIndex > 0) {
                    window.location.href = window.location.href.substring(0, tmpIndex + 1) + "signin.html?rnd=" + Date.now();
                } else {
                    window.location.href = "signin.html?rnd=" + Date.now();
                }

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
                                    window.location.href = "signin.html?rnd=" + Date.now();
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
                                $.removeCookie('logined_user_nickname');
                            }
                        });
                    }

                    window.setTimeout(_startCheckState, 30000);
                } else {
                    $.removeCookie('logined_user_name');
                    $.removeCookie('logined_user_nickname');
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
            $.removeCookie('logined_user_nickname');
        }
    });
};

function _signOut() {
    alert('Sign Out Building');
}

function _gEmptyFn() {
};

var _timeoutRefereshCC;
function _refereshCheckCode(checkCodeId, notClear) {
    if (typeof notClear == 'undefined' || notClear != '1') {
        window.clearTimeout(_timeoutRefereshCC);
    }

    var _checkCodeParams = {
        length: 4,
        name: 'signincode',
        width: 70,
        height: 30
    };

    $("#" + checkCodeId).attr("src", _getRequestURL(_gURLMapping.account.checkcode, _checkCodeParams));
    _timeoutRefereshCC = window.setTimeout('_refereshCheckCode("' + checkCodeId + '", "1");', 540000);
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
    $('.alert-mask-custom').height($('html').height());
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
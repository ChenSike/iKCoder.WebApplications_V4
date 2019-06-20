'use strict';

var _gCID = null;
var _gExpires = 15;
var _gLabelMap = {};
var _gRoleObj = null;
//var _gHostName = 'http://119.23.233.224/';
var _gHostName = 'http://10.86.18.67/';
var _gURLMapping = {
    account: {
        signin: 'ikcoder/account/advisor/signin', //?name=XXX&pwd=XXXXXX  <root><name></name><pwd></pwd></root>
        signup: 'ikcoder/account/advisor/signup'
    }
};

var _gCitys = [{
        p: '北京',
        pt: '市',
        c: ['东城', '西城', '崇文', '宣武', '朝阳', '海淀', '丰台', '石景山'],
        ct: '区'
    },
    {
        p: '上海',
        pt: '市',
        c: ['宝山', '金山', '南市', '长宁', '静安', '青浦', '崇明', '卢湾', '松江', '奉贤', '浦东', '杨浦', '虹口', '普陀', '闸北', '黄浦', '闵行', '徐汇', '嘉定', '南汇'],
        ct: '区'
    },
    {
        p: '重庆',
        pt: '市',
        c: ['渝中', '江北', '沙坪坝', '南岸', '九龙坡', '大渡口'],
        ct: '区'
    },
    {
        p: '天津',
        pt: '市',
        c: ['和平', '河北', '河西', '河东', '南开', '红桥', '塘沽', '汉沽', '大港', '东丽', '西青', '津南', '北辰', '武清', '滨海'],
        ct: '区'
    },
    {
        p: '广东',
        c: ['广州', '深圳', '珠海', '中山', '佛山', '东莞', '清远', '肇庆', '阳江', '湛江', '韶关', '惠州', '河源', '汕尾', '汕头', '梅州']
    },
    {
        p: '河北',
        c: ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '张家口', '承德', '廊坊', '沧州', '保定', '衡水']
    },
    {
        p: '山西',
        c: ['太原', '大同', '阳泉', '朔州', '长治', '临汾', '晋城']
    },
    {
        p: '内蒙古',
        pt: '自治区',
        c: ['呼和浩特', '包头', '乌海', '临河', '东胜', '集宁', '锡林浩特', '通辽', '赤峰', '海拉尔', '乌兰浩特']
    },
    {
        p: '辽宁',
        c: ['沈阳', '大连', '鞍山', '锦州', '丹东', '盘锦', '铁岭', '抚顺', '营口', '辽阳', '阜新', '本溪', '朝阳', '葫芦岛']
    },
    {
        p: '吉林',
        c: ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边']
    },
    {
        p: '黑龙江',
        c: ['哈尔滨', '齐齐哈尔', '牡丹江', '佳木斯', '大庆', '伊春', '黑河', '鸡西', '鹤岗', '双鸭山', '七台河', '绥化', '大兴安岭']
    },
    {
        p: '江苏',
        c: ['南京', '苏州', '无锡', '常州', '镇江', '连云港 ', '扬州', '徐州 ', '南通', '盐城', '淮阴', '泰州', '宿迁']
    },
    {
        p: '浙江',
        c: ['杭州', '湖州', '丽水', '温州', '绍兴', '舟山', '嘉兴', '金华', '台州', '衢州', '宁波']
    },
    {
        p: '安徽',
        c: ['合肥  ', '芜湖 ', '蚌埠 ', '滁州 ', '安庆 ', '六安 ', '黄山 ', '宣城 ', '淮南 ', '宿州 ', '马鞍山 ', '铜陵', '淮北 ', '阜阳 ', '池州 ', '巢湖 ', '亳州']
    },
    {
        p: '福建',
        c: ['福州 ', '厦门 ', '泉州 ', '漳州 ', '龙岩 ', '南平 ', '宁德 ', '莆田 ', '三明']
    },
    {
        p: '江西',
        c: ['南昌', '景德镇', '九江', '萍乡', '新余', '鹰潭', '赣州', '宜春', '吉安', '上饶', '抚州']
    },
    {
        p: '山东',
        c: ['济南', '青岛', '淄博', '德州', '烟台', '潍坊', '济宁', '泰安', '临沂', '菏泽', '威海', '枣庄', '日照', '莱芜', '聊城', '滨州', '东营']
    },
    {
        p: '河南',
        c: ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '周口', '驻马店', '信阳', '济源']
    },
    {
        p: '湖北',
        c: ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '恩施', '随州', '仙桃', '天门', '潜江', '神农架']
    },
    {
        p: '湖南',
        c: ['长沙', '株州', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '郴州', '益阳', '永州', '怀化', '娄底', '湘西']
    },
    {
        p: '广西',
        pt: '自治区',
        c: ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '贺州', '百色', '河池']
    },
    {
        p: '海南',
        c: ['海口 ', '三亚', '通什', '琼海', '琼山', '文昌', '万宁', '东方', '儋州']
    },
    {
        p: '四川',
        c: ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充  ', '宜宾', '广安', '达川', '巴中', '雅安', '眉山  ', '阿坝 ', '甘孜 ', '凉山']
    },
    {
        p: '贵州',
        c: ['贵阳 ', '六盘水', '遵义', '铜仁', '毕节', '安顺', '黔西南 ', '黔东南', '黔南']
    },
    {
        p: '云南',
        c: ['昆明', '东川', '曲靖', '玉溪', '昭通', '思茅', '临沧', '保山', '丽江', '文山 ', '红河 ', '西双版纳 ', '楚雄 ', '大理 ', '德宏 ', '怒江', '迪庆']
    },
    {
        p: '西藏',
        pt: '自治区',
        c: ['拉萨', '那曲', '昌都', '山南', '日喀则', '阿里', '林芝']
    },
    {
        p: '陕西',
        c: ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '商洛', '安康']
    },
    {
        p: '甘肃',
        c: ['兰州', '金昌', '白银', '天水', '嘉峪关', '定西', '平凉', '庆阳', '陇南', '武威', '张掖', '酒泉', '甘南 ', '临夏']
    },
    {
        p: '青海',
        c: ['西宁', '海东', ' 海北 ', '黄南', '海南', '果洛', '玉树', '海西']
    },
    {
        p: '宁夏',
        pt: '自治区',
        c: ['银川', '石嘴山', '银南', '固原']
    },
    {
        p: '新疆',
        pt: '自治区',
        c: ['乌鲁木齐', '克拉玛依', '石河子', '吐鲁番', '哈密', '和田', '阿克苏', '喀什', '克孜勒苏', '巴音郭楞', '昌吉', '博尔塔拉', '伊犁']
    },
    {
        p: '香港',
        pt: '特区',
        c: []
    },
    {
        p: '澳门',
        pt: '特区',
        c: []
    },
    {
        p: '台湾',
        c: []
    }
];

function _loadLabels() {

};

function _getLabel(key) {
    return _gLabelMap[key] ? _gLabelMap[key] : key;
};

function _getRequestURL(page, params) {
    var url = _gHostName + page;
    url += '?';
    if (params) {
        for (var key in params) {
            url += '&' + key + '=' + params[key];
        }
    }

    url += '&rnd=' + Date.now();
    return url;
};

function _checkUserName(name) {
    if (!(/^[a-zA-Z]{1}[0-9a-zA-Z_]{3,}$/.test(phone))) {
        return false;
    }

    return true;
};

function _checkPhoneNumber(phone) {
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
        return false;
    }

    return true;
};

function _checkPassword(pwd) {
    pwd = pwd.trim();
    if (pwd.length < 8) {
        if (pwd.length == 0) {
            return -100;
        } else {
            return -200;
        }
    } else if (pwd.length > 16) {
        return -300;
    } else {
        if (/^((?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+){8}$/.test(pwd)) {
            return 3;
        } else if (/^((?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+){8}$/.test(pwd)) {
            return 2;
        } else if (/^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+){8}$/.test(pwd)) {
            return 1;
        } else {
            return -1;
        }
    }
};

function _checkPwdIntension(value, lbField) {
    var checkVal = _checkPassword(value);
    if (checkVal == 1) {
        lbField.text('弱');
        lbField.css('color', 'rgb(255,0,0)');
    } else if (checkVal == 2) {
        lbField.text('中');
        lbField.css('color', 'rgb(255,215,0)');
    } else if (checkVal == 3) {
        lbField.text('强');
        lbField.css('color', 'rgb(50,205,50)');
    } else if (checkVal == -100) {
        lbField.html('&nbsp;&nbsp;&nbsp;&nbsp;');
        lbField.css('color', 'rgb(255,255,255)');
    } else if (checkVal == -200) {
        lbField.text('过短');
        lbField.css('color', 'rgb(255,0,0)');
    } else if (checkVal == -300) {
        lbField.text('过长');
        lbField.css('color', 'rgb(255,0,0)');
    }
};

function _getCSSRule(ruleName) {
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        for (var j = 0; j < sheet.rules.length; j++) {
            var rule = sheet.rules[j];
            if (rule.selectorText == ruleName) {
                return rule;
            }
        }
    }

    return null;
};

function _setCssRuleStyle(rule, style, value) {
    if (typeof rule == 'string') {
        rule = _getCSSRule(rule);
    }

    if (rule) {
        rule.style[style] = value;
    }
};

function _getOffsetPosition(target, topParentClass) {
    var offsetPos = {
        left: 0,
        top: 0
    };
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
    var successFn = function (responseData, status) {
        if ($(responseData).find('err').length > 0) {
            window.location.href = "signin.html?rnd=" + Date.now();
            $.removeCookie('logined_user_name');
            return;
        } else {
            if ($(responseData).find('msg').length > 0 && $($(responseData).find('msg')[0]).attr('logined_marked') != '') {
                $.cookie("logined_user_name", $($(responseData).find('msg')[0]).attr('logined_user_name'), {
                    path: '/',
                    expires: 0.125
                });
                window.setTimeout(_startCheckState, 30000);
            } else {
                $.removeCookie('logined_user_name');
                window.location.href = "signin.html?rnd=" + Date.now();
            }
        }
    };

    var faildFn = function () {
        window.location.href = "signin.html?rnd=" + Date.now();
        $.removeCookie('logined_user_name');
    };

    ajaxFn('GET', _getRequestURL(_gRoleObj.url.verify), '', successFn, faildFn);
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

function _getSearchValue(key) {
    var tmpArr = window.location.search.substr(1).split('&');
    for (var i = 0; i < tmpArr.length; i++) {
        var tmpOptArr = tmpArr[i].split('=');
        if (tmpOptArr[0] == key) {
            return tmpOptArr[1];
        }
    }

    return '';
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

            container.animate({
                marginLeft: left + tmpStep + 'px',
            });
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

            container.animate({
                marginLeft: left - tmpStep + 'px',
            });
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
/*
    //Chrome
    //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
    //Safari
    //"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2"
    //IE
    //"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko"
*/
function _isSafari() {
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('safari/') > 0) {
        return true;
    }

    return false;
}

function _isIE() {
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('trident/') > 0) {
        return true;
    }

    return false;
}

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(
    function ($) {
        var pluses = /\+/g;

        function encode(s) {
            return config.raw ? s : encodeURIComponent(s);
        };

        function decode(s) {
            return config.raw ? s : decodeURIComponent(s);
        };

        function stringifyCookieValue(value) {
            return encode(config.json ? JSON.stringify(value) : String(value));
        };

        function parseCookieValue(s) {
            if (s.indexOf('"') === 0) {
                s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
            }

            try {
                s = decodeURIComponent(s.replace(pluses, ' '));
                return config.json ? JSON.parse(s) : s;
            } catch (e) {}
        };

        function read(s, converter) {
            var value = config.raw ? s : parseCookieValue(s);
            return $.isFunction(converter) ? converter(value) : value;
        };

        var config = $.cookie = function (key, value, options) {
            if (value !== undefined && !$.isFunction(value)) {
                options = $.extend({}, config.defaults, options);
                if (typeof options.expires === 'number') {
                    var days = options.expires,
                        t = options.expires = new Date();
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

            $.cookie(key, '', $.extend({}, options, {
                expires: -1
            }));
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

function _logout() {
    var successFn = function (data, status) {
        if ($(data).find('err').length > 0) {
            _showGlobalMessage($(data).find('err').attr('msg'), 'danger', 'alert_Logout_Error');
        }

        $.removeCookie('logined_user_name');
        window.location.href = 'signin.html?rnd=' + Date.now();
    };

    ajaxFn('GET', _getRequestURL(_gRoleObj.url.logout), '', successFn, function () {
        $.removeCookie('logined_user_name')
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

            var successFn = function (data, status) {
                if ($(data).find('err').length > 0) {
                    _showGlobalMessage($(data).find('err').attr('msg'), 'danger', 'alert_ChangePWD_Error');
                    return;
                }

                $('#modal_ChangePWD').modal('hide');
                _logout();
            };

            ajaxFn('GET', _getRequestURL(_gRoleObj.url.chgpwd), '<root><password>' + newPWD + '</password></root>', successFn, _gEmptyFn);
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

function reloadCityList(provinceEl, cityEl) {
    var province = provinceEl.val();
    var item = {};
    for (var i = 0; i < _gCitys.length; i++) {
        item = _gCitys[i];
        if (item.p == province) {
            break;
        }
    }

    var tmpPt = '省';
    if (item.pt && item.pt != '') {
        tmpPt = item.pt;
    }

    var tmpCt = '市';
    if (item.ct && item.ct != '') {
        tmpCt = item.ct;
    }

    var tmpId = provinceEl.attr('id').replace('select', 'title');
    $("#" + tmpId).text(tmpPt);
    tmpId = cityEl.attr('id').replace('select', 'title');
    $("#" + tmpId).text(tmpCt);
    var tmpHTMLArr = [];
    for (var i = 0; i < item.c.length; i++) {
        tmpHTMLArr.push('<option value="' + item.c[i] + '">' + item.c[i] + '</option>');
    }

    cityEl.empty();
    cityEl.append(tmpHTMLArr.join(''));
}
/*DOC*/
function openLessonDoc() {
    var tempArr = $(arguments[0].currentTarget).attr('data-target').split('|');
    var symbol = tempArr[0];
    var step = tempArr.length == 2 ? tempArr[1] : 1;
    //_registerRemoteServer();
    //$.ajax({
    //    type: 'GET',
    //    async: true,
    //    url: _getRequestURL(_gURLMapping.bus.getcurrentdoc, { symbol: symbol }),
    //    data: '<root></root>',
    //    success: function (response, status) {
    //        if ($(response).find('err').length > 0) {
    //            _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_GetCurrentDoc');
    //            return;
    //        }

    //        var data = initData_LessonDoc(response);
    //        showLessonDoc(data);
    //    },
    //    dataType: 'xml',
    //    xhrFields: {
    //        withCredentials: true
    //    },
    //    error: function () {
    //    }
    //});
    var data = initData_LessonDoc(symbol);
    showLessonDoc(data);
};

function initData_LessonDoc(responseXML) {
    /*
    <root>
    <lesson symbol="b_01_001" >
        <page index="1" symbol=""></page>
    </lesson>
</root>
    */
    var data = [
        'image/docs/' + responseXML + '/p_0.fw.png',
        'image/docs/' + responseXML + '/p_1.fw.png',
        'image/docs/' + responseXML + '/p_2.fw.png',
        'image/docs/' + responseXML + '/p_3.fw.png',
        'image/docs/' + responseXML + '/p_4.fw.png',
        'image/docs/' + responseXML + '/p_5.fw.png',
        'image/docs/' + responseXML + '/p_6.fw.png',
        'image/docs/' + responseXML + '/p_7.fw.png',
        'image/docs/' + responseXML + '/p_8.fw.png',
        'image/docs/' + responseXML + '/p_9.fw.png',
        'image/docs/' + responseXML + '/p_10.fw.png',
        'image/docs/' + responseXML + '/p_11.fw.png',
        'image/docs/' + responseXML + '/p_12.fw.png',
        'image/docs/' + responseXML + '/p_13.fw.png',
        'image/docs/' + responseXML + '/p_14.fw.png',
        'image/docs/' + responseXML + '/p_15.fw.png',
        'image/docs/' + responseXML + '/p_16.fw.png',
        'image/docs/' + responseXML + '/p_17.fw.png'
    ];
    return data;
};

function showLessonDoc(data) {
    if ($('#modal_LessonDoc').length == 0) {
        var tmpHTMLStr = '<div class="modal fade" id="modal_LessonDoc" style="" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
            '    <div class="modal-dialog" role="document" style="margin:0px;max-width: 100%;">' +
            '        <div class="modal-content" style="width: 100%; height: 100%; max-width: 100%;">' +
            '            <div class="modal-body" style="width: 100%;">' +
            '                <div id="carousel_LessonDoc" class="carousel slide" data-ride="carousel" data-interval="90000" data-keyboard="true" data-wrap="false" data-ride="true">' +
            '                    <div class="carousel-inner">' +
            '                    </div>' +
            '                    <a class="carousel-control-prev" href="#carousel_LessonDoc" role="button" data-slide="prev">' +
            '                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
            '                        <span class="sr-only" style="color:darkred">Previous</span>' +
            '                    </a>' +
            '                    <a class="carousel-control-next" href="#carousel_LessonDoc" role="button" data-slide="next">' +
            '                        <span class="carousel-control-next-icon" aria-hidden="true"></span>' +
            '                        <span class="sr-only">Next</span>' +
            '                    </a>' +
            '                </div>' +
            '            </div>' +
            '            <div class="modal-footer">' +
            '                <button type="button" class="btn btn-success" data-dismiss="modal">关闭</button>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';
        $('body').append($(tmpHTMLStr));
    }
    //max-width:100%; max-height:100%; width:100%; height:100%; margin:0px;

    $('#modal_LessonDoc .carousel-inner').empty();
    var tmpItemStr = '';
    for (var i = 0; i < data.length; i++) {
        if (i == 0) {
            tmpItemStr += '<div class="carousel-item active">';
        } else {
            tmpItemStr += '<div class="carousel-item">';
        }

        //tmpItemStr += '<img class="d-block w-100" src="' + data[i] + '" alt="Second slide">';
        tmpItemStr += '<img class="rounded mx-auto d-block" src="' + data[i] + '" alt="Second slide">';
        tmpItemStr += '</div>';
    }
    $('#modal_LessonDoc .carousel-inner').append($(tmpItemStr));

    $('#modal_LessonDoc').modal('show');
    $('#modal_LessonDoc').on('shown.bs.modal', function (e) {
        var modalDialog = $('#modal_LessonDoc .modal-dialog');
        modalDialog.height($('body').height() - 1);
        modalDialog.width($('body').width() - 1);
        var parent = $($('#carousel_LessonDoc').parent());
        //$('#carousel_LessonDoc').height(parent.height() - 30);
        //$('#carousel_LessonDoc').width(parent.width() - 30);
        $('#carousel_LessonDoc').height(modalDialog.height() - 80);
        $('#carousel_LessonDoc').width(parent.width() - 30);
        $('#carousel_LessonDoc').carousel();
        $('.carousel-control-next').focus();
    })
};
/*Workplatform*/
function openWorkplatform() {
    var tempArr = $(arguments[0].currentTarget).attr('data-target').split('|');
    var symbol = tempArr[0];
    var step = tempArr.length == 2 ? tempArr[1] : 1;
    window.open('/ikcoder/workplatform.html?scene=' + symbol + '&step=' + step, 'workplatform', "")
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
};

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

function ajaxFn(type, url, data, success, failed) {
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

function _gEmptyFn() {};

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
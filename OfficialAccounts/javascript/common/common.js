'use strict';

var _gIsMobile = false;
var _gExpires = 15;
var _gLabelMap = {};
var _gHostName = 'http://119.23.233.224/ikcoderapi';
var _cssPrefixArr = ['', '-moz-', '-o-', '-webkit-', 'ms'];
var _gURLMapping = {
    server: {
        reg: '/Sys/api_iKCoder_Sys_Set_RegDomain.aspx'
    },
    account: {
        reg: '/Account/User/api_iKCoder_User_Set_Reg.aspx',
        sign: '/Account/User/api_iKCoder_User_Set_Sign.aspx',
        signwithcode: '/Account/User/api_iKCoder_User_Set_SignWithCheckCode.aspx',
        checkcode: '/Util/api_iKCoder_Util_Get_CheckCode.aspx',
        signstatus: '/Account/User/api_iKCoder_User_Get_SignStatus.aspx',
        util: '/Account/Profile/api_iKCoder_Profile_Get_SelectNodes.aspx',
        updatepwd: '/Account/User/api_iKCoder_User_Set_ResetPassword.aspx',
        logout: '/Account/User/api_iKCoder_User_Set_Logout.aspx',
        getheader: '/Account/Profile/api_iKCoder_Profile_Get_HeaderImg.aspx',
        updateheader: '/Account/Profile/api_iKCoder_Profile_Set_UploadTmpHeaderImg.aspx',
        clipheaderimg: '/Account/Profile/api_iKCoder_Profile_Set_ClipHeaderImg.aspx',
        updateutil: '/Account/Profile/api_iKCoder_Profile_Set_Nodes.aspx'
    },
    data: {
        getwordlist: '/data/get_checkcodenua.aspx',
        getaudio: '/Data/api_iKCoder_Data_Get_Audio.aspx',
        getimage: '/Data/api_iKCoder_Data_Get_Image.aspx',
        setremovebindata: '/Data/api_iKCoder_Data_Set_RemoveBinData.aspx'
    },
    bus: {
        getworkspace: '/Bus/Workspace/api_iKCoder_Workspace_Get_Workspace.aspx',
        saveworkspace: '/Bus/Workspace/api_iKCoder_Workspace_Set_WorkspaceStatus.aspx',
        setcurrentstep: '/Bus/Workspace/api_iKCoder_Workspace_Set_CurrentStage.aspx',
        setfinishscene: '/Bus/Workspace/api_iKCoder_Workspace_Set_FinishSence.aspx',
        setfinishstep: '/Bus/Workspace/api_iKCoder_Workspace_Set_FinishStage.aspx',
        getscenelist: '/Bus/Center/api_iKCoder_Center_Get_SencesList.aspx',
        getcenterinfo: '/Bus/Center/api_iKCoder_Center_Get_CenterInfo.aspx',
        getunreadmsgcount: '/Bus/Message/api_iKCoder_Workspace_Get_CountOfUnreadMessage.aspx',
        getmsgcontent: '/Bus/Message/api_iKCoder_Workspace_Get_MessageContent.aspx?id=',
        getallmsglist: '/Bus/Message/api_iKCoder_Workspace_Get_AllMessageList.aspx',
        getsysmsglist: '/Bus/Message/api_iKCoder_Workspace_Get_SysMessageList.aspx',
        getqamsglist: '/Bus/Message/api_iKCoder_Workspace_Get_QAMessageList.aspx',
        removemsg: '/Bus/Message/api_iKCoder_Workspace_Set_RemoveMessage.aspx',
        gethtmlreport: '/Bus/Report/api_iKCoder_Report_Get_HtmlReport.aspx',
        setexpreport: '/Bus/Report/api_iKCoder_Report_Set_ExpReport.aspx',
        appstudiosave: '/BUS/APPSTUDIO/api_iKCoder_AppSudio_Set_Save.aspx',
        appstudioload: '/BUS/APPSTUDIO/api_iKCoder_AppSudio_Set_Load.aspx',
        appstudiolist: '/BUS/APPSTUDIO/api_iKCoder_AppSudio_Get_SavedList.aspx'
    },
    tmp: {
        storesave: '/bus/store/api_iKCoder_Store_Save.aspx', //type : 自定义字符串,istextreq： 1 表示发送的POST数据是字符串，0表示发送的是XML,timeout：设定有效时间，120是分钟，默认值。
        storeload: '/bus/store/api_iKCoder_Store_Load.aspx'   //?symbol=XXX&type=XXXX'
    },
    share: {
        sharesave: '/bus/share/api_iKCoder_Share_Save.aspx',//<root><sencesymbol>可选参数，默认DEFAULT，多个体验课进行区别的</sencesymbol><config> 保存的内容</config><serverpath>服务器路径前缀</serverpath></root>
        shareload: '/bus/share/api_iKCoder_Share_Load.aspx'
    }
};
var _gCitys = [
    { p: '北京', pt: '市', c: ['东城', '西城', '崇文', '宣武', '朝阳', '海淀', '丰台', '石景山'], ct: '区' },
    { p: '上海', pt: '市', c: ['宝山', '金山', '南市', '长宁', '静安', '青浦', '崇明', '卢湾', '松江', '奉贤', '浦东', '杨浦', '虹口', '普陀', '闸北', '黄浦', '闵行', '徐汇', '嘉定', '南汇'], ct: '区' },
    { p: '重庆', pt: '市', c: ['渝中', '江北', '沙坪坝', '南岸', '九龙坡', '大渡口'], ct: '区' },
    { p: '天津', pt: '市', c: ['和平', '河北', '河西', '河东', '南开', '红桥', '塘沽', '汉沽', '大港', '东丽', '西青', '津南', '北辰', '武清', '滨海'], ct: '区' },
    { p: '广东', c: ['广州', '深圳', '珠海', '中山', '佛山', '东莞', '清远', '肇庆', '阳江', '湛江', '韶关', '惠州', '河源', '汕尾', '汕头', '梅州'] },
    { p: '河北', c: ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '张家口', '承德', '廊坊', '沧州', '保定', '衡水'] },
    { p: '山西', c: ['太原', '大同', '阳泉', '朔州', '长治', '临汾', '晋城'] },
    { p: '内蒙古', pt: '自治区', c: ['呼和浩特', '包头', '乌海', '临河', '东胜', '集宁', '锡林浩特', '通辽', '赤峰', '海拉尔', '乌兰浩特'] },
    { p: '辽宁', c: ['沈阳', '大连', '鞍山', '锦州', '丹东', '盘锦', '铁岭', '抚顺', '营口', '辽阳', '阜新', '本溪', '朝阳', '葫芦岛'] },
    { p: '吉林', c: ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边'] },
    { p: '黑龙江', c: ['哈尔滨', '齐齐哈尔', '牡丹江', '佳木斯', '大庆', '伊春', '黑河', '鸡西', '鹤岗', '双鸭山', '七台河', '绥化', '大兴安岭'] },
    { p: '江苏', c: ['南京', '苏州', '无锡', '常州', '镇江', '连云港 ', '扬州', '徐州 ', '南通', '盐城', '淮阴', '泰州', '宿迁'] },
    { p: '浙江', c: ['杭州', '湖州', '丽水', '温州', '绍兴', '舟山', '嘉兴', '金华', '台州', '衢州', '宁波'] },
    { p: '安徽', c: ['合肥  ', '芜湖 ', '蚌埠 ', '滁州 ', '安庆 ', '六安 ', '黄山 ', '宣城 ', '淮南 ', '宿州 ', '马鞍山 ', '铜陵', '淮北 ', '阜阳 ', '池州 ', '巢湖 ', '亳州'] },
    { p: '福建', c: ['福州 ', '厦门 ', '泉州 ', '漳州 ', '龙岩 ', '南平 ', '宁德 ', '莆田 ', '三明'] },
    { p: '江西', c: ['南昌', '景德镇', '九江', '萍乡', '新余', '鹰潭', '赣州', '宜春', '吉安', '上饶', '抚州'] },
    { p: '山东', c: ['济南', '青岛', '淄博', '德州', '烟台', '潍坊', '济宁', '泰安', '临沂', '菏泽', '威海', '枣庄', '日照', '莱芜', '聊城', '滨州', '东营'] },
    { p: '河南', c: ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '周口', '驻马店', '信阳', '济源'] },
    { p: '湖北', c: ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '恩施', '随州', '仙桃', '天门', '潜江', '神农架'] },
    { p: '湖南', c: ['长沙', '株州', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '郴州', '益阳', '永州', '怀化', '娄底', '湘西'] },
    { p: '广西', pt: '自治区', c: ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '贺州', '百色', '河池'] },
    { p: '海南', c: ['海口 ', '三亚', '通什', '琼海', '琼山', '文昌', '万宁', '东方', '儋州'] },
    { p: '四川', c: ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充  ', '宜宾', '广安', '达川', '巴中', '雅安', '眉山  ', '阿坝 ', '甘孜 ', '凉山'] },
    { p: '贵州', c: ['贵阳 ', '六盘水', '遵义', '铜仁', '毕节', '安顺', '黔西南 ', '黔东南', '黔南'] },
    { p: '云南', c: ['昆明', '东川', '曲靖', '玉溪', '昭通', '思茅', '临沧', '保山', '丽江', '文山 ', '红河 ', '西双版纳 ', '楚雄 ', '大理 ', '德宏 ', '怒江', '迪庆'] },
    { p: '西藏', pt: '自治区', c: ['拉萨', '那曲', '昌都', '山南', '日喀则', '阿里', '林芝'] },
    { p: '陕西', c: ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '商洛', '安康'] },
    { p: '甘肃', c: ['兰州', '金昌', '白银', '天水', '嘉峪关', '定西', '平凉', '庆阳', '陇南', '武威', '张掖', '酒泉', '甘南 ', '临夏'] },
    { p: '青海', c: ['西宁', '海东', ' 海北 ', '黄南', '海南', '果洛', '玉树', '海西'] },
    { p: '宁夏', pt: '自治区', c: ['银川', '石嘴山', '银南', '固原'] },
    { p: '新疆', pt: '自治区', c: ['乌鲁木齐', '克拉玛依', '石河子', '吐鲁番', '哈密', '和田', '阿克苏', '喀什', '克孜勒苏', '巴音郭楞', '昌吉', '博尔塔拉', '伊犁'] },
    { p: '香港', pt: '特区', c: [] },
    { p: '澳门', pt: '特区', c: [] },
    { p: '台湾', c: [] }
];

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

function Extend(target, settings, params) {
    for (var i in settings) {
        target[i] = params[i] || settings[i];
    }

    return target;
};

function CloneObject(source) {
    return $.extend(true, {}, source);
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

function randomInt(minVal, maxVal) {
    var rand = parseInt(Math.random() * (maxVal - minVal + 1) + minVal);
    return rand;
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

function _loadLabels() {

};

function _getLabel(key) {
    return _gLabelMap[key] ? _gLabelMap[key] : key;
};

var _gLoadImgCallBack = _adjustPageSize;
function _loadImages() {
    if (_gImages.length == 1) {
        _loadImage(_gImages[0], _gLoadImgCallBack);
    } else {
        var tmpSrc = _gImages[0];
        _gImages.shift();
        _loadImage(tmpSrc, _loadImages);
    }
};

function _loadImage(src, callback) {
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

/*for bootstrap list*/
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

/*get query string from url*/
function getQueryString(key) {
    var tempArr = window.location.search.substr(1).split('&');
    for (var i = 0; i < tempArr.length; i++) {
        var strArr = tempArr[i].split('=');
        if (strArr[0] == key) {
            return strArr[1];
        }
    }
};

/*check input value*/
function _checkUserName(name) {
    if (!(/^[a-zA-Z]{1}[0-9a-zA-Z_]{3,}$/.test(name))) {
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

/*CSS Operation*/
function ChangeStyleSheet(selector, newStyle) {
    var flag = false;
    var sheets = document.styleSheets;
    try {
        for (var j = 0; j < sheets.length; j++) {
            for (var i = 0; i < sheets[j].rules.length; i++) {
                if (sheets[j].rules[i].selectorText && sheets[j].rules[i].selectorText == selector) {
                    var style = sheets[j].rules[i].style;
                    for (var key in newStyle) {
                        style[key] = newStyle[key];
                    }

                    flag = true;
                }
            }
        }

        if (!flag) {
            var sheet = sheets[sheets.length - 1];
            var newRuleStr = "";
            for (var key in newStyle) {
                newRuleStr += key + ":" + newStyle[key] + ";";
            }

            sheet.addRule(selector, newRuleStr, sheet.rules.length);
        }
    }
    catch (ex) {
        var message = ex;
    }
};

function CreateNewStyleSheet() {
    if (document.all) {
        window.style = "body{}";
        return document.createStyleSheet("javascript:style");
    } else {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = "body{}";
        document.getElementsByTagName('HEAD').item(0).appendChild(style);
        return document.styleSheets[document.styleSheets.length - 1];
    }
};

function CreateNewStyleRule(key, rule) {
    document.styleSheets[document.styleSheets.length - 1].addRule(key, rule);
}

function GetKeyframesRuleInfo(keyframesName) {
    var currRule = null;
    var currRules = null;
    var currentSheet = null;
    for (var i = 0; i < document.styleSheets.length; i++) {
        currentSheet = document.styleSheets[i];
        currRules = currentSheet.rules;
        for (var j = currRules.length - 1; j >= 0 ; j--) {
            currRule = currRules[j];
            if (currRule.type == 7 && currRule.name == keyframesName) {
                return { sheet: currentSheet, rule: currRule, index: j };
            }
        }
    }

    if (currentSheet == null) {
        currentSheet = CreateNewStyleSheet();
    }

    return { sheet: currentSheet, rule: currRule, index: -1 };
};

function DeleteKeyframesRule(keyframesName) {
    var tmpobj = GetKeyframesRuleInfo(keyframesName);
    if (tmpobj.sheet && tmpobj.rule && tmpobj.index >= 0) {
        tmpobj.deleteRule(tmpobj.index);
    }

    return tmpobj.sheet;
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

/*check browser type*/
function _isSafari() {
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('safari/') > 0 && userAgent.indexOf('chrome/') < 0) {
        return true;
    }

    return false;
};

function _isIE() {
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('trident/') > 0) {
        return true;
    }

    return false;
};

/*function for get the width of text in single line*/
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

/*For Cookie*/
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

/*page base*/
function _adjustPageSize(setHeight) {
    //$('#wrap_Main').css('top', $('header').height() + 'px');
    // $('#col_Wrap_Main').height('auto');
    // if (typeof setHeight == 'boolean' && setHeight == true) {
    //     var wrapHeight = $('#wrap_Main').height();
    //     var bodyHeight = $('body').height();
    //     if (wrapHeight < bodyHeight) {
    //         $('#col_Wrap_Main').height(bodyHeight - $('header').height() - $('footer').height());
    //     } else {
    //         $('#col_Wrap_Main').height("auto");
    //     }
    // }

    //$('footer').css('top', ($('header').height() + $('#wrap_Main').height()) + 'px');
    //if ($('body').width() < 750) {
    //    $('footer .socials').hide();
    //} else {
    //    $('footer .socials').show();
    //}
};

function _browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsAndroid || bIsWM) {
        _gIsMobile = true;
    }
}

_browserRedirect();

window.onresize = function () {
    _adjustPageSize(true);
}
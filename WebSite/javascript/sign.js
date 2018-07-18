'use strict';

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

function _checkPhoneNumber(phone) {
    var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!phoneReg.test(phone)) {
        return false;
    } else {
        return true;
    }
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

function initPage() {
    wrapResize();
    initEvents();
    clearCanvas();
    initSignInPanel();
};

function initEvents() {
    $(window).resize(wrapResize);
    $('#wrap_Logo img').on('click', function () {
        window.location.href = "http://www.ikcoder.com/index.html";
    });
    $('#signin_UserName_Next_Btn').on('click', function () {
        $('.signin-username-row').fadeToggle(1000, function () {
            $('.signin-password-row').fadeToggle(1000);
        });
    });

    $('#signin_Password_Prev_Btn').on('click', function () {
        $('.signin-password-row').fadeToggle(1000, function () {
            $('.signin-username-row').fadeToggle(1000);
        });
    });

    $('#signin_Password_Next_Btn').on('click', function () {
        var successFn = function (response) {
            var error = false;
            if (!error) {
                window.location.href = "profile.html";
            } else {
                _showGlobalMessage('无法登录！', 'warning', 'alert_Wrong_SignIn');
            }
        };

        var data = {
            name: $('#txt_Signin_UserName').val().trim(),
            pwd: $('#txt_Signin_Password').val().trim(),
        };
        ajaxFn('GET', _getRequestURL(_gURLMapping.account.signin, data), '', successFn);
    });

    $('#signin_ForgetPWD_Btn').on('click', function () {
        if ($('#wrap_Forget').css('display') == 'none') {
            if ($('#wrap_SignUp').css('display') != 'none') {
                $('#canvas_BG_SignUp').fadeOut(500);
                $('#wrap_SignUp').fadeOut(500, function () {
                    $('#wrap_Forget').fadeIn(500);
                    $('#signin_Go_SignUp_Btn').fadeOut(300, function () {
                        $('#signin_Go_SignUp_Btn').text('创建新用户').fadeIn(300);
                    });
                });
            } else if ($('#wrap_SignIn').css('display') != 'none') {
                $('#canvas_BG_SignIn').fadeOut(500);
                $('#wrap_SignIn').fadeOut(500, function () {
                    $('#wrap_Forget').fadeIn(500);
                });
            }

            $('#signin_ForgetPWD_Btn').fadeOut(300, function () {
                $('#signin_ForgetPWD_Btn').text('用户登录').fadeIn(300);
            });
        } else {
            $('#wrap_Forget').fadeOut(500, function () {
                $('#wrap_Forget').hide();
                initSignInPanel();
                $('#wrap_SignIn').fadeIn(500);
                $('#signin_ForgetPWD_Btn').fadeOut(300, function () {
                    $('#signin_ForgetPWD_Btn').text('找回密码').fadeIn(300);
                });
            });
        }
    });

    $('#forget_UserName_Next_Btn').on('click', function () {
        var successFn = function (response) {
            var error = false;
            if (!error) {
                $('#wrap_Forget').fadeOut(500, function () {
                    $('#wrap_SignIn').fadeIn(500, function () { });
                });
                
                if ($('#signin_ForgetPWD_Btn').text() != '找回密码') {
                    $('#signin_ForgetPWD_Btn').fadeOut(300, function () {
                        $('#signin_ForgetPWD_Btn').text('找回密码').fadeIn(300);
                    });
                }
            } else {
                _showGlobalMessage('找回密码失败！', 'warning', 'alert_Wrong_Forget');
            }
        };

        ajaxFn('GET', _getRequestURL(_gURLMapping.account.updatepwd, { name: $('#txt_Forget_UserName').val().trim() }), '', successFn);
    });

    $('#signin_Go_SignUp_Btn').on('click', function () {
        if ($('#wrap_SignUp').css('display') == 'none') {
            if ($('#wrap_SignIn').css('display') != 'none') {
                $('#wrap_SignIn').fadeOut(500);
            } else if ($('#wrap_Forget').css('display') != 'none') {
                $('#wrap_Forget').fadeOut(500);
            }

            var height = window.innerHeight;
            $('#modal_Agreement .modal-content .modal-body').height(height * 0.8 - 90);
            $('#modal_Agreement').modal('show');
        } else {
            $('#wrap_SignUp').fadeOut(500, function () {
                $('#signin_Go_SignUp_Btn').fadeOut(300);
                initSignInPanel();
                $('#wrap_SignUp').hide();
                $('#wrap_Forget').hide();
                $('#wrap_SignIn').fadeIn(500, function () {
                    $('#signin_Go_SignUp_Btn').text('创建新用户').fadeIn(300);
                });
            });
        }
    });

    $('#btn_Cancel_Agreement_Modal').on('click', function () {
        $('#wrap_SignIn').fadeIn(500, function () { });
        if ($('#signin_ForgetPWD_Btn').text() != '找回密码') {
            $('#signin_ForgetPWD_Btn').fadeOut(300, function () {
                $('#signin_ForgetPWD_Btn').text('找回密码').fadeIn(300);
            });
        }
    });

    $('#btn_OK_Agreement_Modal').on('click', function () {
        $('#signin_Go_SignUp_Btn').fadeOut(300);
        initSignUpPanel();
        $('#wrap_SignIn').hide();
        $('#wrap_Forget').hide();
        $('#wrap_SignUp').fadeIn(500, function () {
            $('#signin_Go_SignUp_Btn').text('用户登录').fadeIn(300);
        });
    });

    $('#signup_UserName_Next_Btn').on('click', function () {
        var phone = $('#txt_SignUp_UserName').val().trim();
        if (_checkPhoneNumber(phone)) {
            var successFn = function (response) {
                var error = false;
                //<root><executed>false</executed></root>
                if (!error) {
                    $('.signup-username-row').fadeOut(500, function () {
                        $('.signup-password-row').fadeIn(500);
                    });
                } else {
                    _showGlobalMessage('该手机号码已经被注册！', 'warning', 'alert_Wrong_Phone');
                }
            };

            ajaxFn('GET', _getRequestURL(_gURLMapping.account.existed, { name: phone }), '', successFn);
        } else {
            _showGlobalMessage('请输入正确的手机号码！', 'warning', 'alert_Wrong_Phone');
        }
    });

    $('#signup_Password_Next_Btn').on('click', function () {
        $('.signup-password-row').fadeOut(500, function () {
            $('.signup-cfgpwd-row').fadeIn(500);
        });
    });

    $('#signup_CfgPwd_Next_Btn').on('click', function () {
        if ($('#txt_SignUp_Password').val().trim() != $('#txt_SignUp_CfgPwd').val().trim()) {
            _showGlobalMessage('两次输入的密码不一致，请重新输入！', 'warning', 'alert_Wrong_Password');
            //$('.signup-cfgpwd-row').fadeOut(500, function () {
            //    $('.signup-password-row').fadeIn(500);
            //});
        } else {
            $('.signup-cfgpwd-row').fadeOut(500, function () {
                $('.signup-checkcode-row').fadeIn(500);
                _refereshCheckCode('img_SignUp_CheckCode', 1);
            });
        }
    });

    $('#signup_CheckCode_Next_Btn').on('click', function () {
        var successFn = function (response) {
            var error = false;
            if (!error) {
                window.location.href = "profile.html";
            } else {
                _showGlobalMessage('无法创建用户！', 'warning', 'alert_Wrong_SignUp');
            }
        };

        var data = {
            uid: $('#txt_SignUp_UserName').val().trim(),
            pwd: $('#txt_SignUp_Password').val().trim(),
            checkcode: $('#txt_SignUp_CheckCode').val().trim(),
            status: '0',
            level: '0'
        };
        ajaxFn('GET', _getRequestURL(_gURLMapping.account.signupwithcode, data), '', successFn);
    });
};

function wrapResize() {
    var width = window.innerWidth;
    var height = window.innerHeight - 5;
    $('#wrap_Global').height(height);
    $('#wrap_Global').width(width);
    $('#col_Wrap_Global').height(height);
    $('#col_Wrap_Global').width(width);
    if (signInBackground.canvaObj != null) {
        signInBackground.resize();
    }
};

function clearCanvas() {
    $('canvas').remove();
    signInBackground.clear();
};

function initSignInPanel() {
    var container = $('#col_Wrap_Global');
    var canvas = $('#canvas_BG_SignIn');
    if (canvas.length == 0) {
        canvas = $('<canvas id="canvas_BG_SignIn"></canvas>');
        container.append(canvas);
        signInBackground.initHeader();
        signInBackground.initAnimation();
        signInBackground.addListeners();
    } else {
        canvas.fadeIn(500);
    }

    $('#canvas_BG_SignUp').fadeOut(500);
    $('.signin-username-row').show();
    $('.signin-password-row').hide();
    $('#txt_Signin_UserName').val('');
    $('#txt_Signin_Password').val('');
};

var signInBackground = {
    width: 0,
    height: 0,
    largeHeader: null,
    canvas: null,
    ctx: null,
    points: [],
    target: null,
    animateHeader: true,
    image: null,
    canvaObj: null,
    animationId: '',

    initHeader: function () {
        this.canvaObj = $('#canvas_BG_SignIn');
        this.width = Math.floor(this.canvaObj.parent().width());
        this.height = Math.floor(this.canvaObj.parent().height() - 5);
        this.target = { x: this.width / 2, y: this.height / 2 };
        this.canvas = this.canvaObj[0];
        this.canvaObj.width(this.width);
        this.canvaObj.height(this.height);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');
        // create points
        this.calcPoints();
    },

    clear: function () {
        this.width = 0;
        this.height = 0;
        this.largeHeader = null;
        this.canvas = null;
        this.ctx = null;
        this.points = [];
        this.target = null;
        this.animateHeader = true;
        this.image = null;
        this.canvaObj = null;
        this.animationId = '';
    },

    calcPoints: function () {
        this.points = [];
        for (var x = 0; x < this.width; x = x + this.width / 20) {
            for (var y = 0; y < this.height; y = y + this.height / 20) {
                var px = x + Math.random() * this.width / 20;
                var py = y + Math.random() * this.height / 20;
                var p = { x: px, originX: px, y: py, originY: py };
                this.points.push(p);
            }
        }

        // for each point find the 5 closest points
        for (var i = 0; i < this.points.length; i++) {
            var closest = [];
            var p1 = this.points[i];
            for (var j = 0; j < this.points.length; j++) {
                var p2 = this.points[j]
                if (!(p1 == p2)) {
                    var placed = false;
                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (this.getDistance(p1, p2) < this.getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }

            p1.closest = closest;
        }

        // assign a circle to each point
        for (var i in this.points) {
            var c = new Circle(this.ctx, this.points[i], 4 + Math.random() * 2, 'rgba(255,255,255,1)');
            this.points[i].circle = c;
        }
    },

    addListeners: function () {
        var _this = this;
        if (!('ontouchstart' in window)) {
            $(window).mousemove(function (e) {
                var posx = 0;
                var posy = 0;
                if (e.pageX || e.pageY) {
                    posx = e.pageX;
                    posy = e.pageY;
                } else if (e.clientX || e.clientY) {
                    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                }

                _this.target.x = posx;
                _this.target.y = posy;
            });
        }

        //$(window).scroll(_this.scrollCheck);
        //$(window).resize(_this.resize);
    },

    scrollCheck: function () {
        if (document.body.scrollTop > signInBackground.height) {
            signInBackground.animateHeader = false;
        } else {
            signInBackground.animateHeader = true;
        }
    },

    resize: function () {
        this.width = Math.floor(this.canvaObj.parent().width());
        this.height = Math.floor(this.canvaObj.parent().height() - 5);
        this.canvaObj.width(this.width);
        this.canvaObj.height(this.height);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.target = { x: this.width / 2, y: this.height / 2 };
        this.calcPoints();
        cancelAnimationFrame(this.animationId);
        this.initAnimation();
    },

    initAnimation: function () {
        this.animate();
        for (var i in this.points) {
            this.shiftPoint(this.points[i]);
        }
    },

    animate: function () {
        if (signInBackground.animateHeader) {
            signInBackground.ctx.clearRect(0, 0, signInBackground.width, signInBackground.height);
            for (var i in signInBackground.points) {
                if (Math.abs(signInBackground.getDistance(signInBackground.target, signInBackground.points[i])) < 4000) {
                    signInBackground.points[i].active = 0.3;
                    signInBackground.points[i].circle.active = 0.6;
                } else if (Math.abs(signInBackground.getDistance(signInBackground.target, signInBackground.points[i])) < 20000) {
                    signInBackground.points[i].active = 0.1;
                    signInBackground.points[i].circle.active = 0.3;
                } else if (Math.abs(signInBackground.getDistance(signInBackground.target, signInBackground.points[i])) < 40000) {
                    signInBackground.points[i].active = 0.02;
                    signInBackground.points[i].circle.active = 0.1;
                } else {
                    signInBackground.points[i].active = 0;
                    signInBackground.points[i].circle.active = 0;
                }

                signInBackground.drawLines(signInBackground.points[i]);
                signInBackground.points[i].circle.draw();
            }
        }

        signInBackground.animationId = requestAnimationFrame(signInBackground.animate);
    },

    shiftPoint: function (p) {
        var _this = this;
        TweenLite.to(p, 1 + 1 * Math.random(), {
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100, ease: Circ.easeInOut,
            onComplete: function () {
                _this.shiftPoint(p);
            }
        });
    },

    drawLines: function (p) {
        if (!p.active) return;
        for (var i in p.closest) {
            this.ctx.beginPath();
            this.ctx.lineWidth = 2;
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p.closest[i].x, p.closest[i].y);
            //ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
            this.ctx.strokeStyle = 'rgba(255,255,255,' + p.active + ')';
            this.ctx.stroke();
        }
    },

    getDistance: function (p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    },
};

function Circle(ctx, pos, rad, color) {
    var _this = this;
    // constructor
    (function () {
        _this.ctx = ctx || null;
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
    })();

    this.draw = function () {
        if (!_this.active) {
            return;
        }

        _this.ctx.beginPath();
        _this.ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        //ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
        _this.ctx.fillStyle = 'rgba(255,255,255,' + _this.active + ')';
        _this.ctx.fill();
    };
};

function initSignUpPanel() {
    var container = $('#col_Wrap_Global');
    var canvas = $('#canvas_BG_SignUp');
    if (canvas.length == 0) {
        canvas = $('<canvas id="canvas_BG_SignUp"></canvas>');
        container.append(canvas);
        init();
        createLights();
        createFloor();
        createLion();
        createFan();
        loop();
    } else {
        canvas.fadeIn(500);
    }

    $('#canvas_BG_SignIn').fadeOut(500);
    $('.signup-username-row').show();
    $('.signup-password-row').hide();
    $('.signup-cfgpwd-row').hide();
    $('.signup-checkcode-row').hide();
    $('#txt_SignUp_UserName').val('');
    $('#txt_SignUp_Password').val('');
    $('#txt_SignUp_ConfirmPWD').val('');
    $('#txt_SignUp_CheckCode').val('');
};
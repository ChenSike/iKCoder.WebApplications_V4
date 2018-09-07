'use strict';

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
            var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
            if (!success) {
                _showGlobalMessage('无法登录！', 'warning', 'alert_Wrong_SignIn');
            } else {
                if ($($(response).find('msgcode')).text() == 'TOKEN') {
                    _CookieUtils.set('student_token', $($(response).find('msg')).text());
                    window.location.href = "profile.html";
                } else {
                    _showGlobalMessage('无法获取用户信息，请重新登录！', 'warning', 'alert_Wrong_SignIn');
                }
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
                    $('#canvas_BG_SignIn').fadeIn(500);
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
            var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
            if (!success) {
                _showGlobalMessage('找回密码失败！', 'warning', 'alert_Wrong_Forget');
            } else {
                $('#wrap_Forget').fadeOut(500, function () {
                    $('#wrap_SignIn').fadeIn(500, function () { });
                });

                if ($('#signin_ForgetPWD_Btn').text() != '找回密码') {
                    $('#signin_ForgetPWD_Btn').fadeOut(300, function () {
                        $('#signin_ForgetPWD_Btn').text('找回密码').fadeIn(300);
                    });
                }
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
        initSignInPanel();
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
            $('#signin_ForgetPWD_Btn').text('找回密码');
            $('#signin_Go_SignUp_Btn').text('用户登录').fadeIn(300);
        });
    });

    $('#signup_UserName_Next_Btn').on('click', function () {
        var phone = $('#txt_SignUp_UserName').val().trim();
        if (_checkPhoneNumber(phone)) {
            var successFn = function (response) {
                var exist = _getExcuted(response);
                if (exist) {
                    _showGlobalMessage('该手机号码已经被注册！', 'warning', 'alert_Wrong_Phone');
                } else {
                    $('.signup-username-row').fadeOut(500, function () {
                        $('.signup-password-row').fadeIn(500);
                    });
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
            var success = _getExcuted(response);
            if (success) {
                var sFn = function (tmpRes) {
                    var success = ($($(tmpRes).find('executed')[0]).text() == 'true' ? true : false);
                    if (!success) {
                        _showGlobalMessage('无法登录！', 'warning', 'alert_Wrong_SignIn');
                    } else {
                        if ($($(response).find('msgcode')).text() == 'TOKEN') {
                            _CookieUtils.set('student_token', $($(response).find('msg')).text());
                            window.location.href = "profile.html";
                        } else {
                            _showGlobalMessage('无法获取用户信息，请重新登录！', 'warning', 'alert_Wrong_SignIn');
                        }
                    }
                };

                var tmpData = {
                    name: $('#txt_SignUp_UserName').val().trim(),
                    pwd: $('#txt_SignUp_Password').val().trim(),
                };
                ajaxFn('GET', _getRequestURL(_gURLMapping.account.signin, tmpData), '', sFn);
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
    $('#canvas_BG_SignIn').fadeOut(500);
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

    $('.signup-username-row').show();
    $('.signup-password-row').hide();
    $('.signup-cfgpwd-row').hide();
    $('.signup-checkcode-row').hide();
    $('#txt_SignUp_UserName').val('');
    $('#txt_SignUp_Password').val('');
    $('#txt_SignUp_ConfirmPWD').val('');
    $('#txt_SignUp_CheckCode').val('');
};
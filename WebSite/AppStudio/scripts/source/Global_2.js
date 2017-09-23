(function (b) {
    function c(c, e) {
        this.$element = b(c);
        this.options = e;
        this.enabled = true;
        this.fixTitle()
    }
    c.prototype = {
        show: function () {
            var c = this.getTitle();
            if (c && this.enabled) {
                var e = this.tip();
                e.find(".tipsy-inner")[this.options.html ? "html" : "text"](c);
                e[0].className = "tipsy";
                e.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).prependTo(document.body);
                var c = b.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                }),
                    f = e[0].offsetWidth,
                    g = e[0].offsetHeight,
                    h = typeof this.options.gravity == "function" ? this.options.gravity.call(this.$element[0]) : this.options.gravity,
                    j;
                switch (h.charAt(0)) {
                    case "n":
                        j = {
                            top: c.top + c.height + this.options.offset,
                            left: c.left + c.width / 2 - f / 2
                        };
                        break;
                    case "s":
                        j = {
                            top: c.top - g - this.options.offset,
                            left: c.left + c.width / 2 - f / 2
                        };
                        break;
                    case "e":
                        j = {
                            top: c.top + c.height / 2 - g / 2,
                            left: c.left - f - this.options.offset
                        };
                        break;
                    case "w":
                        j = {
                            top: c.top + c.height / 2 - g / 2,
                            left: c.left + c.width + this.options.offset
                        }
                }
                if (h.length == 2) j.left = h.charAt(1) == "w" ? c.left + c.width / 2 -
                    15 : c.left + c.width / 2 - f + 15;
                e.css(j).addClass("tipsy-" + h);
                e.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + h.charAt(0);
                this.options.className && e.addClass(typeof this.options.className == "function" ? this.options.className.call(this.$element[0]) : this.options.className);
                this.options.fade ? e.stop().css({
                    opacity: 0,
                    display: "block",
                    visibility: "visible"
                }).animate({
                    opacity: this.options.opacity
                }) : e.css({
                    visibility: "visible",
                    opacity: this.options.opacity
                })
            }
        },
        hide: function () {
            this.options.fade ? this.tip().stop().fadeOut(function () {
                b(this).remove()
            }) :
                this.tip().remove()
        },
        fixTitle: function () {
            var b = this.$element;
            if (b.attr("title") || typeof b.attr("original-title") != "string") b.attr("original-title", b.attr("title") || "").removeAttr("title")
        },
        getTitle: function () {
            var b, c = this.$element,
                f = this.options;
            this.fixTitle();
            f = this.options;
            typeof f.title == "string" ? b = c.attr(f.title == "title" ? "original-title" : f.title) : typeof f.title == "function" && (b = f.title.call(c[0]));
            return (b = ("" + b).replace(/(^\s*|\s*$)/, "")) || f.fallback
        },
        tip: function () {
            if (!this.$tip) {
                this.$tip =
                    b('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
                this.$tip.data("tipsy-pointee", this.$element[0])
            }
            return this.$tip
        },
        validate: function () {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.options = this.$element = null
            }
        },
        enable: function () {
            this.enabled = true
        },
        disable: function () {
            this.enabled = false
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        }
    };
    b.fn.tipsy = function (d) {
        function e(e) {
            var f = b.data(e, "tipsy");
            if (!f) {
                f = new c(e, b.fn.tipsy.elementOptions(e,
                    d));
                b.data(e, "tipsy", f)
            }
            return f
        }

        function f() {
            var b = e(this);
            b.hoverState = "in";
            if (d.delayIn == 0) b.show();
            else {
                b.fixTitle();
                setTimeout(function () {
                    b.hoverState == "in" && b.show()
                }, d.delayIn)
            }
        }

        function g() {
            var b = e(this);
            b.hoverState = "out";
            d.delayOut == 0 ? b.hide() : setTimeout(function () {
                b.hoverState == "out" && b.hide()
            }, d.delayOut)
        }
        if (d === true) return this.data("tipsy");
        if (typeof d == "string") {
            var h = this.data("tipsy");
            if (h) h[d]();
            return this
        }
        d = b.extend({}, b.fn.tipsy.defaults, d);
        d.live || this.each(function () {
            e(this)
        });
        if (d.trigger != "manual") {
            var h = d.live ? "live" : "bind",
                j = d.trigger == "hover" ? "mouseleave" : "blur";
            this[h](d.trigger == "hover" ? "mouseenter" : "focus", f)[h](j, g)
        }
        return this
    };
    b.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: "",
        gravity: "n",
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: "title",
        trigger: "hover"
    };
    b.fn.tipsy.revalidate = function () {
        b(".tipsy").each(function () {
            var c = b.data(this, "tipsy-pointee"),
                e;
            if (!(e = !c)) {
                a: {
                    for (; c = c.parentNode;)
                        if (c == document) {
                            c = true;
                            break a
                        }
                    c = false
                }
                e = !c
            }
            e && b(this).remove()
        })
    };
    b.fn.tipsy.elementOptions = function (c, e) {
        return b.metadata ? b.extend({}, e, b(c).metadata()) : e
    };
    b.fn.tipsy.autoNS = function () {
        return b(this).offset().top > b(document).scrollTop() + b(window).height() / 2 ? "s" : "n"
    };
    b.fn.tipsy.autoWE = function () {
        return b(this).offset().left > b(document).scrollLeft() + b(window).width() / 2 ? "e" : "w"
    };
    b.fn.tipsy.autoBounds = function (c, e) {
        return function () {
            var f = e[0],
                g = e.length > 1 ? e[1] : false,
                h = b(document).scrollTop() + c,
                j = b(document).scrollLeft() + c,
                k = b(this);
            k.offset().top <
                h && (f = "n");
            k.offset().left < j && (g = "w");
            b(window).width() + b(document).scrollLeft() - k.offset().left < c && (g = "e");
            b(window).height() + b(document).scrollTop() - k.offset().top < c && (f = "s");
            return f + (g ? g : "")
        }
    }
})(jQuery);
(function () {
    angular.module("common.account", ["common"])
})();
(function () {
    angular.module("common", ["common.account", "common.projects", "common.rating", "common.sharing"])
})();
(function () {
    angular.module("common.projects", [])
})();
(function () {
    angular.module("common.rating", [])
})();
(function () {
    angular.module("common.sharing", [])
})();
(function () {
    angular.module("ide", ["ui.router", "common", "components", "ide.account"])
})();
angular.element(document).ready(function () {
    angular.bootstrap(".ide-app", ["ide"])
});
(function () {
    angular.module("common.account").controller("AccountCtrl", ["$scope", "$http", "$state", "api", "externalAuth", function (b, c, d, e, f) {
        b.state = d;
        b.error = null;
        b.busy = false;
        b.signupUser = function (c) {
            b.busy = true;
            return e.addUser(c).then(function () {
                b.busy = false;
                b.onLoginSuccess()
            }, function (c) {
                b.busy = false;
                b.error = c
            })
        };
        b.validateUsername = function (b, d) {
            b ? b.length < 6 ? d("Screen name must have at least 6 characters") : c({
                method: "GET",
                url: "/api/validateusername",
                params: {
                    u: b
                }
            }).success(function (b) {
                b == "true" ?
                    d("Looking good!") : d("Sorry, that screen name is already taken.")
            }) : d("You must provide a screen name")
        };
        b.validatePassword = function (b, c) {
            b ? b.length < 6 ? c("Password must have at least 6 characters") : c("Ok!") : c("You must provide a password.")
        };
        b.validateEmail = function (b, d) {
            b ? b.indexOf("@") == -1 ? d("Doesn't look like a valid email") : c({
                method: "GET",
                url: "/api/validateemail?email=" + b
            }).success(function (b) {
                b.is_valid ? d("Ok") : d("Doesn't look like a valid email")
            }) : d("You must provide a valid email address")
        };
        b.googleLogin = function () {
            f.googleLogin().then(function () {
                b.onLoginSuccess()
            }, function (c) {
                b.error = c
            })
        };
        b.onLoginSuccess = function () {
            $(document).trigger("common.account.loggedIn")
        };
        b.$on("$viewContentLoaded", function () {
            setTimeout(function () {
                $("#signup-view > .modal").modal()
            }, 0)
        })
    }])
})();
(function () {
    angular.module("common.account").controller("AskParentCtrl", ["$scope", "$stateParams", "api", function (b, c, d) {
        b.activitySlug = c.activitySlug ? c.activitySlug : null;
        b.error = null;
        b.parentEmail = null;
        b.sent = false;
        b.askParent = function (c, f) {
            b.error = null;
            b.isLoading = true;
            d.sendParentPermissionRequest(c, f).then(function () {
                b.isLoading = false;
                b.sent = true;
                angular.element.cookie("submitted_ask_parent", true, {
                    expires: 3650,
                    path: "/"
                })
            }, function (c) {
                b.isLoading = false;
                b.error = c
            })
        }
    }]).controller("JoinNewsletterCtrl", ["$scope", "$stateParams", "api", function (b, c, d) {
        b.email = null;
        b.error = null;
        b.role = c.role ? c.role : "parent";
        b.sent = false;
        b.steps = ["join", "profile", "thanks"];
        b.step = "join";
        b.fname = null;
        b.lname = null;
        b.joined = false;
        b.joining = false;
        b.init = function (c) {
            b.email = c
        };
        b.join = function (c) {
            d.addSubscription({
                email: c.email,
                role: c.role,
                strict: false,
                type: "email-collector-modal"
            }).then(function (c) {
                b.subscriptionId = c;
                b.step = "profile";
                b.error = null;
                ga("send", "event", "Join Newsletter Modal", "Submit");
                angular.element.cookie("submitted_join_newsletter",
                    true, {
                        expires: 3650
                    })
            }, function (c) {
                b.error = c
            })
        };
        b.updateProfile = function (c) {
            d.updateSubscription(b.subscriptionId, {
                fname: c.fname,
                lname: c.lname,
                email: c.email,
                role: c.role,
                strict: false,
                type: "email-collector-modal"
            }).then(function () {
                b.error = null;
                b.step = "thanks";
                ga("send", "event", "Join Newsletter Modal", "Complete")
            })
        };
        b.joinFull = function () {
            b.joining = true;
            d.addSubscription({
                email: b.email,
                role: b.role,
                strict: false,
                type: "email-collector-modal"
            }).then(function () {
                console.info("worked");
                b.error = null;
                b.joining =
                    false;
                b.joined = true;
                ga("send", "event", "Hour of Code Congrats Page", "Join Newsletter")
            }, function (c) {
                console.info(c);
                b.error = c;
                b.joining = false
            })
        }
    }])
})();
(function () {
    angular.module("common").factory("externalAuth", ["$http", "$q", function (b, c) {
        function d() {
            return c(function (c) {
                b({
                    method: "GET",
                    url: "/api/isloggedin"
                }).success(function (b) {
                    c(b.is_logged_in)
                }).error(function () {
                    c(false)
                })
            })
        }
        return {
            _externalLogin: function (b, f, g) {
                var g = g !== void 0 ? g : {},
                    h = g.popup !== void 0 ? g.popup : false,
                    j = g.childConfCode !== void 0 ? g.childConfCode : null,
                    k = g.next !== void 0 ? g.next : null,
                    l = g.role !== void 0 ? g.role : null,
                    m = g.campaign !== void 0 ? g.campaign : null,
                    g = g.source !== void 0 ? g.source : null;
                h && k && console.warn('Popup mode invoked with next "' + k + '", will be ignored');
                h && (k = "/api/closewindow");
                var n = [];
                j && n.push("childConfCode=" + encodeURIComponent(j));
                k && n.push("next=" + encodeURIComponent(k));
                l && n.push("role=" + encodeURIComponent(l));
                m && n.push("campaign=" + encodeURIComponent(m));
                g && n.push("source=" + encodeURIComponent(g));
                var q = n.join("&").replace(/%20/g, "+");
                if (h) return c(function (c, g) {
                    b = b + ("?next=" + encodeURIComponent("/auth/externallogin?" + q));
                    var h = window.open(b, f, "width=580, height=496"),
                        j = window.setInterval(function () {
                            if (h.closed) {
                                clearInterval(j);
                                d().then(function (b) {
                                    b === true ? c() : g("Could not log-in, please try again")
                                })
                            }
                        }, 500)
                });
                if (l || g || m) b = b + ("?next=" + encodeURIComponent("/auth/externallogin?" + q));
                else if (k) {
                    h = "/auth/externallogin?next=" + encodeURIComponent(k);
                    b = b + ("?next=" + encodeURIComponent(h))
                }
                window.location = b
            },
            facebookLogin: function (b) {
                return this._externalLogin("/auth/facebooklogin", "Facebook Login", b)
            },
            googleLogin: function (b) {
                return this._externalLogin("/auth/googlelogin",
                    "Google Login", b)
            }
        }
    }])
})();
(function () {
    function b(b) {
        return {
            open: function (e) {
                e = e !== void 0 ? e : {};
                return b.open({
                    controller: c,
                    controllerAs: "vm",
                    templateUrl: "/js/ng-app/common/account/modal-forgot-password.factory.html",
                    locals: {
                        useRoutes: e.useRoutes !== void 0 ? e.useRoutes : false
                    }
                })
            }
        }
    }

    function c(b, c, f, g) {
        var h = this;
        h.busy = false;
        h.error = null;
        h.userId = null;
        h.resetEmail = null;
        h.email = null;
        h.resetCode = null;
        h.password = null;
        h.confirmPassword = null;
        h.step = "generate_reset_code";
        h.changePassword = function () {
            if (h.password != h.confirmPassword) h.error =
                "Passwords do not match!";
            else {
                h.busy = true;
                c.changePassword(h.userId, h.resetCode, h.password).then(function () {
                    h.busy = false;
                    h.error = null;
                    h.step = "success";
                    setTimeout(function () {
                        h.onLoginSuccess()
                    }, 500)
                }, function (b) {
                    h.busy = false;
                    h.error = b == "invalid_password" ? "Invalid password please try again" : b ? b : "Could not validate the reset code. Please try again."
                })
            }
        };
        h.generateResetCode = function () {
            h.busy = true;
            c.generateResetCode(h.email).then(function (b) {
                h.busy = false;
                h.error = null;
                h.userId = b.userId;
                h.resetEmail = b.resetEmail;
                h.step = "validate_reset_code"
            }, function (b) {
                h.busy = false;
                h.error = b == "invalid_email" ? "Sorry, this email address is not registered." : b == "google_account" ? "You used Google when creating your account. We are not able to change the password." : b == "facebook_account" ? "You used Facebook when creating your account. We are not able to change the password." : b ? "We are not able to change the password: " + b : "Could not initiate the recovery process. Please review your email address and try again."
            })
        };
        h.signIn = function () {
            g ?
                b.go("signIn") : f.open()
        };
        h.validateResetCode = function () {
            h.busy = true;
            c.validateResetCode(h.userId, h.resetCode).then(function () {
                h.busy = false;
                h.error = null;
                h.step = "reset_password"
            }, function (b) {
                h.busy = false;
                h.error = b == "invalid_reset_code" ? "Invalid reset code. Please find your code in the email you've received" : b ? b : "Could not validate the reset code. Please try again."
            })
        }
    }
    angular.module("common.account").factory("modalForgotPassword", b);
    b.$inject = ["modal"];
    c.$inject = ["$state", "api", "modalSignIn", "useRoutes"]
})();
(function () {
    function b(b) {
        return {
            open: function (e) {
                e = e !== void 0 ? e : {};
                return b.open({
                    controller: c,
                    controllerAs: "vm",
                    templateUrl: "/js/ng-app/common/account/modal-join.factory.html",
                    locals: {
                        options: {
                            role: e.role !== void 0 ? e.role : null,
                            source: e.source !== void 0 ? e.source : null,
                            useRoutes: e.useRoutes !== void 0 ? e.useRoutes : false
                        }
                    }
                })
            }
        }
    }

    function c(b, c, f, g, h, j) {
        var k = this,
            l = j.useRoutes;
        k.init = function () {
            j.role == "parent" ? k.joinParent() : j.role == "student" ? k.joinStudent() : j.role == "teacher" && k.joinTeacher()
        };
        k.signIn = function () {
            l ?
                b.go("signIn") : h.open()
        };
        k.source = j.source;
        k.joinParent = function () {
            l ? b.go("joinParent") : c.open()
        };
        k.joinStudent = function (c) {
            l ? b.go("joinStudent", c) : f.open(c)
        };
        k.joinTeacher = function () {
            l ? b.go("joinTeacher") : g.open()
        };
        k.init()
    }
    angular.module("common.account").factory("modalJoin", b);
    b.$inject = ["modal"];
    c.$inject = ["$state", "modalJoinParent", "modalJoinStudent", "modalJoinTeacher", "modalSignInSelectRole", "options"]
})();
(function () {
    function b(b) {
        return {
            open: function (e) {
                e = e !== void 0 ? e : {};
                return b.open({
                    controller: c,
                    controllerAs: "vm",
                    templateUrl: "/js/ng-app/common/account/modal-join-parent.factory.html",
                    locals: {
                        campaign: e.campaign,
                        email: e.email,
                        fireRemarketingTag: e.fireRemarketingTag,
                        source: e.source,
                        useRoutes: e.useRoutes
                    }
                })
            }
        }
    }

    function c(b, c, f, g, h, j, k, l, m, n, q, p, s) {
        var r = this;
        r.addUser = function () {
            r.loading = true;
            return g.addUser(r.user).then(function () {
                r.onLoginSuccess();
                try {
                    f.optimizely = f.optimizely || [];
                    f.optimizely.push(["trackEvent",
                        user.role + "_account_created"
                    ])
                } catch (b) {
                    console.log(b)
                }
            }, function (b) {
                r.step = r.steps[0];
                r.error = b;
                r.loading = false
            })
        };
        r.facebookLogin = function (b) {
            b = b !== void 0 ? b : {};
            b.source = b.source !== void 0 ? b.source : "join";
            h.facebookLogin(b).then(function () {
                r.onLoginSuccess()
            }, function (b) {
                r.error = b
            })
        };
        r.googleLogin = function (b) {
            b = b !== void 0 ? b : {};
            b.source = b.source !== void 0 ? b.source : "join";
            h.googleLogin(b).then(function () {
                r.onLoginSuccess()
            }, function (b) {
                r.error = b
            })
        };
        r.hasPrevious = function () {
            return r.steps.indexOf(r.step) >
                -1
        };
        r.hasNext = function () {
            return r.steps.indexOf(r.step) + 1 < r.steps.length
        };
        r.init = function () {
            r.loading = true;
            g.getAddUserFlash().then(function (b) {
                r.error = b.error;
                if (b.user) {
                    if (b.user.username) r.user.username = b.user.username;
                    if (b.user.password) {
                        r.user.password = b.user.password;
                        r.user.confirm_password = b.user.password
                    }
                    if (b.user.fname) r.user.fname = b.user.fname;
                    if (b.user.lname) r.user.lname = b.user.lname
                }
                r.loading = false
            }, function (b) {
                r.error = b;
                r.loading = false
            });
            q && f.google_trackConversion({
                google_conversion_id: 981959151,
                google_custom_params: f.google_tag_params,
                google_remarketing_only: true
            })
        };
        r.join = function () {
            s ? c.go("join") : j.open({
                campaign: m,
                email: n,
                fireRemarketingTag: q,
                source: p
            })
        };
        r.joinStudent = function () {
            s ? c.go("joinStudent") : k.open({
                campaign: m,
                email: n,
                fireRemarketingTag: q,
                source: p
            })
        };
        r.next = function () {
            var b = r.steps.indexOf(r.step);
            b == r.steps.length - 1 ? r.addUser() : r.step = r.steps[b + 1]
        };
        r.onLoginSuccess = function (b) {
            angular.element(document).trigger("common.account.loggedIn", [b])
        };
        r.previous = function () {
            var b = r.steps.indexOf(r.step);
            b == 0 && r.join();
            r.step = r.steps[b - 1]
        };
        r.setShowTynkerSignup = function (c) {
            r.showTynkerSignup = c;
            b(function () {
                $.modal.resize()
            })
        };
        r.signIn = function () {
            s ? c.go("signIn") : l.open({
                role: "parent"
            })
        };
        r.showPassword = false;
        r.showTynkerSignup = false;
        r.steps = ["account", "details"];
        r.step = "account";
        r.user = {
            campaign: m !== void 0 ? m : null,
            username: n,
            role: "parent",
            log_in: true,
            convert: true,
            source: p !== void 0 ? p : "join"
        };
        r.init()
    }
    angular.module("common").factory("modalJoinParent", b);
    b.$inject = ["modal"];
    c.$inject = ["$timeout", "$state",
        "$window", "api", "externalAuth", "modalJoin", "modalJoinStudent", "modalSignIn", "campaign", "email", "fireRemarketingTag", "source", "useRoutes"
    ]
})();
(function () {
    function b(b) {
        return {
            open: function (e) {
                var e = e !== void 0 ? e : {},
                    f = e.activitySlug,
                    g = e.skinId,
                    h = e.source,
                    j = e.useRoutes,
                    k = e.unlockMessage,
                    l = "/js/ng-app/common/account/modal-join-student.factory.html";
                e.templateModifier ? l = "/js/ng-app/common/account/modal-join-student-" + e.templateModifier + ".factory.html" : e.activitySlug && (l = "/js/ng-app/common/account/modal-join-student-puzzles.factory.html");
                return b.open({
                    closeOnClick: e.closeOnClick,
                    closeOnEsc: e.closeOnEsc,
                    controller: c,
                    controllerAs: "vm",
                    templateUrl: l,
                    locals: {
                        activitySlug: f,
                        skinId: g,
                        source: h,
                        useRoutes: j,
                        unlockMessage: k
                    }
                })
            }
        }
    }

    function c(b, c, f, g, h, j, k, l, m, n, q, p, s, r) {
        var o = this;
        o.activitySlug = n;
        o.addUser = function () {
            o.loading = true;
            var b = JSON.parse(JSON.stringify(o.user));
            if (b.age >= 13) {
                delete b.parent_name;
                delete b.parent_email
            } else delete b.email;
            return h.addUser(b).then(function () {
                o.onLoginSuccess();
                try {
                    g.optimizely = g.optimizely || [];
                    g.optimizely.push(["trackEvent", b.role + "_account_created"])
                } catch (c) {
                    console.log(c)
                }
            }, function (b) {
                o.step = o.steps[0];
                o.error = b;
                o.loading = false
            })
        };
        o.checkForBlockImgRender = function () {
            $(".canvas-frame-modal").length > 0 ? o.skinId ? setupBlockViewer(o.skinId, o.skinId, {}, ".canvas-frame-modal") : window.g_paramData && setupBlockViewer(g_paramData.id, g_paramData.blockid, g_paramData.blockData, ".canvas-frame-modal") : setTimeout(o.checkForBlockImgRender, 1E3)
        };
        o.checkForEntityImgRender = function () {
            $(".canvas-frame-modal").length > 0 ? o.skinId ? setupEntityViewer(o.skinId, ".canvas-frame-modal") : window.g_paramData && setupEntityViewer(g_paramData.model,
                g_paramData.imageid, g_paramData.dist, ".canvas-frame-modal") : setTimeout(o.checkForEntityImgRender, 1E3)
        };
        o.checkForItemImgRender = function () {
            $(".canvas-frame-modal").length > 0 ? o.skinId ? setupItemViewer(o.skinId, o.skinId, [], ".canvas-frame-modal") : window.g_paramData && setupItemViewer(g_paramData.id, g_paramData.itemid, g_paramData.itemData, ".canvas-frame-modal") : setTimeout(o.checkForItemImgRender, 1E3)
        };
        o.checkForSkinImgRender = function () {
            $(".canvas-frame-modal").length > 0 ? o.skinId ? setupSkinViewer(o.skinId, ".canvas-frame-modal") :
                window.g_paramData && setupSkinViewer(g_paramData.skinid, ".canvas-frame-modal") : setTimeout(o.checkForSkinImgRender, 1E3)
        };
        o.skinId = q;
        o.activity = null;
        o.generateUsernameAvatar = function () {
            o.generateUsername();
            o.generateAvatar()
        };
        o.generateUsername = function () {
            m.fetchRandom().then(function (b) {
                o.user.username = b
            })
        };
        o.generateAvatar = function () {
            o.selectAvatar(j.getRandom())
        };
        o.googleLogin = function () {
            var b = {
                role: o.user.role
            };
            if (o.user.campaign) b.campaign = o.user.campaign;
            if (o.user.source) b.source = o.user.source;
            k.googleLogin(b)
        };
        o.hasNext = function () {
            return o.steps.indexOf(o.step) + 1 < o.steps.length
        };
        o.hasPrevious = function () {
            return o.steps.indexOf(o.step) > 0
        };
        o.init = function () {
            c.$watch("step", function () {
                $(".tipsy").remove();
                b(function () {
                    $.modal.resize()
                })
            });
            c.$watch("activitySlug", function () {
                if (o.user.sourceActivity = o.activitySlug) {
                    o.isLoading = true;
                    o.activity = {
                        slug: o.activitySlug,
                        title: o.activitySlug.replace(/-/g, " ")
                    };
                    h.getActivity(o.activitySlug).then(function (b) {
                        o.isLoading = false;
                        o.activity = b
                    }, function () {
                        o.isLoading =
                            false
                    })
                } else o.activity = null
            });
            o.loading = true;
            h.getUser().then(function (f) {
                if (f.user) {
                    o.user.preferences.avatar = f.user.preferences.avatar;
                    o.user.preferences["user-avatar"] = f.user.preferences["user-avatar"]
                }
                o.hasAvatarChooser && AvatarChooser.init();
                o.hasAvatarChooser && c.$watch("userAvatarCharacter", function () {
                    if (o.userAvatarCharacter) {
                        var c = o.userAvatarCharacter.type,
                            e = o.userAvatarCharacter.parts,
                            f = angular.element(".avatar-selector-current");
                        b(function () {
                            AvatarChooser.showAvatar(c, e, f)
                        })
                    }
                });
                o.user.preferences["user-avatar"] ||
                    o.generateAvatar();
                $(".editor .skin").length > 0 ? o.loadSkinViewer() : $(".editor .item").length > 0 ? o.loadItemViewer() : $(".editor .block").length > 0 ? o.loadBlockViewer() : $(".editor .entity").length > 0 && o.loadEntityViewer();
                o.loading = false
            })
        };
        o.isLoading = false;
        o.loadBlockViewer = function () {
            $.getScript("/minecraft/js/blockviewer.js").done(function () {
                o.checkForBlockImgRender()
            })
        };
        o.loadEntityViewer = function () {
            $.getScript("/minecraft/js/entityviewer.js").done(function () {
                o.checkForEntityImgRender()
            })
        };
        o.loadItemViewer =
            function () {
                $.getScript("/minecraft/js/itemviewer.js").done(function () {
                    o.checkForItemImgRender()
                })
            };
        o.loadSkinViewer = function () {
            $.getScript("/minecraft/js/skinviewer.js").done(function () {
                o.checkForSkinImgRender()
            })
        };
        o.next = function () {
            var b = o.steps.indexOf(o.step);
            b == o.steps.length - 1 ? o.addUser() : o.step = o.steps[b + 1]
        };
        o.onLoginSuccess = function (b) {
            angular.element(document).trigger("common.account.loggedIn", [b])
        };
        o.previous = function () {
            var b = o.steps.indexOf(o.step);
            b == 0 ? o.activitySlug ? f.go("joinUnlock", {
                activitySlug: o.activitySlug
            }) : f.go("join") : o.step = o.steps[b - 1]
        };
        o.selectAvatar = function (b) {
            o.user.preferences.avatar = b;
            if (b = j.mapCharacter(b)) {
                o.user.preferences["user-avatar"] = JSON.stringify(b);
                o.userAvatarCharacter = b
            } else {
                o.user.preferences["user-avatar"] = null;
                o.userAvatarCharacter = null
            }
        };
        o.setShowTynkerSignup = function (c) {
            o.showTynkerSignup = c;
            b(function () {
                $.modal.resize()
            })
        };
        o.signInStudent = function () {
            s ? f.go("signInStudent") : l.open({
                role: "student",
                useRoutes: s
            })
        };
        o.user = {
            age: null,
            preferences: {
                avatar: null,
                "user-avatar": null
            },
            role: "student",
            log_in: true,
            convert: true,
            source: p ? p : "join",
            sourceActivity: o.activitySlug
        };
        o.showPassword = true;
        o.safeUsernames = [];
        o.safeUsernameIndex = 0;
        o.steps = ["profile", "consent_contact"];
        o.step = "profile";
        o.avatarChoices = j.getAll();
        o.lockedAvatarChoices = j.getLocked();
        o.userAvatarCharacter = null;
        o.hasAvatarChooser = false;
        o.hasProfileIcon = false;
        o.showTynkerSignup = false;
        o.unlockMessage = r;
        o.init()
    }
    angular.module("common").factory("modalJoinStudent", b);
    b.$inject = ["modal"];
    c.$inject = ["$timeout",
        "$scope", "$state", "$window", "api", "avatar", "externalAuth", "modalSignIn", "username", "activitySlug", "skinId", "source", "useRoutes", "unlockMessage"
    ]
})();
(function () {
    function b(b) {
        return {
            open: function (e) {
                var e = e !== void 0 ? e : {},
                    f = e.campaign,
                    g = e.source;
                return b.open({
                    controller: c,
                    controllerAs: "vm",
                    templateUrl: g == "camp" ? "/js/ng-app/common/account/modal-join-teacher-camp.factory.html" : f == "edcamp" ? "/js/ng-app/common/account/modal-join-teacher-campaign-edcamp.factory.html" : "/js/ng-app/common/account/modal-join-teacher.factory.html",
                    locals: {
                        campaign: f,
                        email: e.email,
                        fireRemarketingTag: e.fireRemarketingTag,
                        source: g,
                        useRoutes: e.useRoutes
                    }
                })
            }
        }
    }

    function c(b, c,
        f, g, h, j, k, l, m, n, q, p, s) {
        var r = this;
        r.addUser = function () {
            r.loading = true;
            return g.addUser(r.user).then(function () {
                r.onLoginSuccess();
                try {
                    f.optimizely = f.optimizely || [];
                    f.optimizely.push(["trackEvent", user.role + "_account_created"])
                } catch (b) {
                    console.log(b)
                }
            }, function (b) {
                r.step = r.steps[0];
                r.error = b;
                r.loading = false
            })
        };
        r.facebookLogin = function () {
            var b = {
                role: r.user.role
            };
            if (r.user.campaign) b.campaign = r.user.campaign;
            if (r.user.source) b.source = r.user.source;
            h.facebookLogin(b).then(function () {
                r.onLoginSuccess()
            },
                function (b) {
                    r.error = b
                })
        };
        r.googleLogin = function () {
            var b = {
                role: r.user.role
            };
            if (r.user.campaign) b.campaign = r.user.campaign;
            if (r.user.source) b.source = r.user.source;
            h.googleLogin(b).then(function () {
                r.onLoginSuccess()
            }, function (b) {
                r.error = b
            })
        };
        r.hasPrevious = function () {
            return r.steps.indexOf(r.step) > -1
        };
        r.hasNext = function () {
            return r.steps.indexOf(r.step) + 1 < r.steps.length
        };
        r.init = function () {
            r.loading = true;
            g.getAddUserFlash().then(function (b) {
                r.error = b.error;
                if (b.user) {
                    if (b.user.username) r.user.username =
                        b.user.username;
                    if (b.user.password) {
                        r.user.password = b.user.password;
                        r.user.confirm_password = b.user.password
                    }
                    if (b.user.fname) r.user.fname = b.user.fname;
                    if (b.user.lname) r.user.lname = b.user.lname
                }
                r.loading = false
            }, function (b) {
                r.error = b;
                r.loading = false
            });
            q && f.google_trackConversion({
                google_conversion_id: 981959151,
                google_custom_params: f.google_tag_params,
                google_remarketing_only: true
            })
        };
        r.joinStudent = function () {
            s ? c.go("joinStudent") : k.open()
        };
        r.next = function () {
            var b = r.steps.indexOf(r.step);
            b == r.steps.length -
                1 ? r.addUser() : r.step = r.steps[b + 1]
        };
        r.onLoginSuccess = function (b) {
            angular.element(document).trigger("common.account.loggedIn", [b])
        };
        r.previous = function () {
            var b = r.steps.indexOf(r.step);
            b == 0 ? s ? c.go("join") : j.open() : r.step = r.steps[b - 1]
        };
        r.setShowTynkerSignup = function (c) {
            r.showTynkerSignup = c;
            b(function () {
                $.modal.resize()
            })
        };
        r.signIn = function () {
            s ? c.go("signIn") : l.open({
                role: "teacher"
            })
        };
        r.showPassword = false;
        r.showTynkerSignup = false;
        r.steps = ["account", "profile"];
        r.step = "account";
        r.user = {
            campaign: m !== void 0 ?
                m : null,
            username: n,
            role: "teacher",
            log_in: true,
            convert: true,
            source: p !== void 0 ? p : "join"
        };
        r.init()
    }
    angular.module("common").factory("modalJoinTeacher", b);
    b.$inject = ["modal"];
    c.$inject = ["$timeout", "$state", "$window", "api", "externalAuth", "modalJoin", "modalJoinStudent", "modalSignIn", "campaign", "email", "fireRemarketingTag", "source", "useRoutes"]
})();
(function () {
    function b(b) {
        return {
            open: function (e) {
                e = e !== void 0 ? e : {};
                return b.open({
                    controller: c,
                    controllerAs: "vm",
                    templateUrl: "/js/ng-app/common/account/modal-sign-in.factory.html",
                    locals: {
                        next: e.next !== void 0 ? e.next : null,
                        role: e.role !== void 0 ? e.role : null,
                        useRoutes: e.useRoutes !== void 0 ? e.useRoutes : false
                    }
                })
            }
        }
    }

    function c(b, c, f, g, h, j, k, l, m) {
        var n = this;
        n.busy = false;
        n.error = null;
        n.role = l;
        n.user = {};
        n.facebookLogin = function (b) {
            b = b !== void 0 ? b : {};
            if (!b.next && k) b.next = k;
            g.facebookLogin(b).then(function () {
                n.onLoginSuccess(k)
            },
                function (b) {
                    n.error = b
                })
        };
        n.forgotPassword = function () {
            m ? b.go("forgotPassword") : h.open()
        };
        n.googleLogin = function (b) {
            b = b !== void 0 ? b : {};
            if (!b.next && k) b.next = k;
            g.googleLogin(b).then(function () {
                n.onLoginSuccess(k)
            }, function (b) {
                n.error = b
            })
        };
        n.join = function () {
            m ? b.go("join") : j.open()
        };
        n.login = function () {
            n.busy = true;
            f.login(n.user.u, n.user.p).then(function () {
                n.onLoginSuccess(k)
            }, function (b) {
                n.busy = false;
                n.error = b
            })
        };
        n.onLoginSuccess = function (b) {
            angular.element(document).trigger("common.account.loggedIn", [b])
        }
    }
    angular.module("common.account").factory("modalSignIn", b);
    b.$inject = ["modal"];
    c.$inject = ["$state", "$window", "api", "externalAuth", "modalForgotPassword", "modalJoin", "next", "role", "useRoutes"]
})();
(function () {
    function b(b) {
        return {
            open: function (e) {
                e = e !== void 0 ? e : {};
                return b.open({
                    controller: c,
                    controllerAs: "vm",
                    templateUrl: "/js/ng-app/common/account/modal-sign-in-select-role.factory.html",
                    locals: {
                        useRoutes: e.useRoutes !== "undefined" ? e.useRoutes : false
                    }
                })
            }
        }
    }

    function c(b, c, f, g) {
        this.join = function () {
            g ? b.go("join") : c.open()
        };
        this.signInParent = function () {
            g ? b.go("signInParent") : f.open({
                role: "parent"
            })
        };
        this.signInStudent = function () {
            g ? b.go("signInStudent") : f.open({
                role: "student"
            })
        };
        this.signInTeacher =
            function () {
                g ? b.go("signInTeacher") : f.open({
                    role: "teacher"
                })
            }
    }
    angular.module("common.account").factory("modalSignInSelectRole", b);
    b.$inject = ["modal"];
    c.$inject = ["$state", "modalJoin", "modalSignIn", "useRoutes"]
})();
(function () {
    function b(b, d, e) {
        var f = this;
        f.showStarted = d;
        f.showCompleted = e;
        f.hocStartedImageUrl = "/image/certificate-thumbnail/certificate-getting-started.jpg";
        f.hocCompletedImageUrl = "/image/certificate-thumbnail/certificate-hoc-2016.jpg";
        f.suggestedActivities = [];
        f.loading = false;
        f.missingStarted = 0;
        f.missingCompleted = 0;
        f.missing = 0;
        f.init = function () {
            f.loading = true;
            b.hocGetStatus().then(function (b) {
                f.suggestedActivities = b.suggested_activities;
                f.missingStarted = b.missing_started;
                f.missingCompleted = b.missing_completed;
                if (f.showStarted) f.missing = f.missingStarted;
                else if (f.showCompleted) f.missing = f.missingCompleted;
                f.loading = false
            })
        };
        f.init()
    }
    angular.module("common.account").factory("modalStudentCertificateEarn", ["api", "modal", function (c, d) {
        return {
            open: function (c, f) {
                return d.open({
                    controller: b,
                    controllerAs: "vm",
                    locals: {
                        showStarted: c,
                        showCompleted: f
                    },
                    templateUrl: "/js/ng-app/common/account/modal-student-certificate-earn.factory.html"
                })
            }
        }
    }]);
    b.$inject = ["api", "showStarted", "showCompleted"]
})();
(function () {
    function b(b, d, e, f, g, h, j, k, l, m, n) {
        var q = this;
        q.activitySlug = e.activitySlug ? e.activitySlug : null;
        q.skinId = e.skinId ? e.skinId : null;
        q.activity = null;
        q.isLoading = false;
        q.user = {
            age: null,
            preferences: {
                avatar: null,
                "user-avatar": null
            },
            role: "student",
            log_in: true,
            convert: true,
            source: "join",
            sourceActivity: q.activitySlug
        };
        q.showPassword = true;
        q.safeUsernames = [];
        q.safeUsernameIndex = 0;
        q.steps = ["personalize", "share", "profile", "consent_contact"];
        q.step = null;
        q.avatarChoices = h.getAll();
        q.lockedAvatarChoices =
            h.getLocked();
        q.userAvatarCharacter = null;
        q.hasAvatarChooser = false;
        q.hasProfileIcon = false;
        q.showTynkerSignup = false;
        q.hocStarted = false;
        q.hocCompleted = false;
        q.hocCertificateId = null;
        q.hocStartedVisible = false;
        q.hocCompletedVisible = false;
        q.hocStartedImageUrl = "/image/certificate-thumbnail/certificate-getting-started.jpg";
        q.hocCompletedImageUrl = "/image/certificate-thumbnail/certificate-hoc-2016.jpg";
        q.hocParentEmail = null;
        q.hocShareEmail = "";
        q.hocShareEmailEditable = true;
        q.hocStartedShared = false;
        q.hocCompletedShared =
            false;
        q.hocSharingCertificate = false;
        q.hocPersonalizingCertificate = false;
        q.name = "";
        q.anonymous = false;
        q.loggedIn = false;
        q.init = function () {
            q.hasAvatarChooser && AvatarChooser.init();
            b.$watch("step", function () {
                $(".tipsy").remove();
                f(function () {
                    $.modal.resize()
                })
            });
            b.$watch("activitySlug", function () {
                if (q.user.sourceActivity = q.activitySlug) {
                    q.isLoading = true;
                    q.activity = {
                        slug: q.activitySlug,
                        title: q.activitySlug.replace(/-/g, " ")
                    };
                    g.getActivity(q.activitySlug).then(function (b) {
                        q.isLoading = false;
                        q.activity = b
                    },
                        function () {
                            q.isLoading = false
                        })
                } else q.activity = null
            });
            q.hasAvatarChooser && b.$watch("userAvatarCharacter", function () {
                if (q.userAvatarCharacter) {
                    var b = q.userAvatarCharacter.type,
                        c = q.userAvatarCharacter.parts,
                        d = angular.element(".avatar-selector-current");
                    f(function () {
                        AvatarChooser.showAvatar(b, c, d)
                    })
                }
            });
            q.generateAvatar();
            $(".editor .skin").length > 0 ? q.loadSkinViewer() : $(".editor .item").length > 0 ? q.loadItemViewer() : $(".editor .block").length > 0 ? q.loadBlockViewer() : $(".editor .entity").length > 0 && q.loadEntityViewer();
            g.hocGetStatus().then(function (b) {
                q.hocStarted = b.started;
                q.hocCompleted = b.completed;
                q.hocCertificateId = b.certificate_id;
                q.hocCertificateType = b.certificate_type;
                q.name = b.full_name;
                q.anonymous = b.anonymous;
                q.loggedIn = b.logged_in;
                q.hocParentEmail = b.parent_email;
                if (!q.hocParentEmail) q.hocParentEmail = "";
                q.step = !q.name ? "personalize" : "share";
                q.hocStartedVisible = q.hocCompleted ? false : l;
                q.hocCompletedVisible = q.hocCompleted ? m : false;
                if (!q.hocStartedVisible && !q.hocCompletedVisible) q.hocStartedVisible = true;
                q.hocShareEmailEditable =
                    q.hocParentEmail ? false : true;
                q.hocShareEmail = q.hocParentEmail
            })
        };
        q.generateUsernameAvatar = function () {
            q.generateUsername();
            q.generateAvatar()
        };
        q.generateUsername = function () {
            k.fetchRandom().then(function (b) {
                q.user.username = b
            })
        };
        q.generateAvatar = function () {
            q.selectAvatar(h.getRandom())
        };
        q.loadSkinViewer = function () {
            $.getScript("/minecraft/js/skinviewer.js").done(function () {
                q.checkForSkinImgRender()
            })
        };
        q.checkForSkinImgRender = function () {
            $(".canvas-frame-modal").length > 0 ? q.skinId ? setupSkinViewer(q.skinId,
                ".canvas-frame-modal") : window.g_paramData && setupSkinViewer(g_paramData.skinid, ".canvas-frame-modal") : setTimeout(q.checkForSkinImgRender, 1E3)
        };
        q.loadItemViewer = function () {
            $.getScript("/minecraft/js/itemviewer.js").done(function () {
                q.checkForItemImgRender()
            })
        };
        q.checkForItemImgRender = function () {
            $(".canvas-frame-modal").length > 0 ? q.skinId ? setupItemViewer(q.skinId, q.skinId, [], ".canvas-frame-modal") : window.g_paramData && setupItemViewer(g_paramData.id, g_paramData.itemid, g_paramData.itemData, ".canvas-frame-modal") :
                setTimeout(q.checkForItemImgRender, 1E3)
        };
        q.loadBlockViewer = function () {
            $.getScript("/minecraft/js/blockviewer.js").done(function () {
                q.checkForBlockImgRender()
            })
        };
        q.checkForBlockImgRender = function () {
            $(".canvas-frame-modal").length > 0 ? q.skinId ? setupBlockViewer(q.skinId, q.skinId, {}, ".canvas-frame-modal") : window.g_paramData && setupBlockViewer(g_paramData.id, g_paramData.blockid, g_paramData.blockData, ".canvas-frame-modal") : setTimeout(q.checkForBlockImgRender, 1E3)
        };
        q.loadEntityViewer = function () {
            $.getScript("/minecraft/js/entityviewer.js").done(function () {
                q.checkForEntityImgRender()
            })
        };
        q.checkForEntityImgRender = function () {
            $(".canvas-frame-modal").length > 0 ? q.skinId ? setupEntityViewer(q.skinId, ".canvas-frame-modal") : window.g_paramData && setupEntityViewer(g_paramData.model, g_paramData.imageid, g_paramData.dist, ".canvas-frame-modal") : setTimeout(q.checkForEntityImgRender, 1E3)
        };
        q.previous = function () {
            var b = q.steps.indexOf(q.step);
            b == 0 ? q.activitySlug ? d.go("joinUnlock", {
                activitySlug: q.activitySlug
            }) : d.go("join") : q.step = q.steps[b - 1]
        };
        q.move = function (b) {
            b = q.steps.indexOf(b);
            q.step = q.steps[b]
        };
        q.next = function () {
            var b = q.steps.indexOf(q.step);
            q.step == "personalize" ? q.name && q.personalizeCertificate(function () {
                q.step = q.steps[b + 1]
            }) : q.step == "share" ? q.hocShareEmail && q.shareCertificate() : q.step == "consent_contact" ? q.signup() : q.step = q.steps[b + 1]
        };
        q.hasPrevious = function () {
            return q.steps.indexOf(q.step) > 1
        };
        q.hasNext = function () {
            return q.steps.indexOf(q.step) + 1 < q.steps.length
        };
        q.selectAvatar = function (b) {
            q.user.preferences.avatar = b;
            if (b = h.mapCharacter(b)) {
                q.user.preferences["user-avatar"] = JSON.stringify(b);
                q.userAvatarCharacter = b
            } else {
                q.user.preferences["user-avatar"] = null;
                q.userAvatarCharacter = null
            }
        };
        q.setShowTynkerSignup = function (b) {
            q.showTynkerSignup = b;
            f(function () {
                $.modal.resize()
            })
        };
        q.showHocStarted = function () {
            q.hocCompletedVisible = false;
            q.hocStartedVisible = true
        };
        q.showHocCompleted = function () {
            q.hocStartedVisible = false;
            q.hocCompletedVisible = true
        };
        q.signup = function () {
            q.busy = true;
            return g.addUser(q.user).then(function () {
                n.sendEvent("Action", "Signed Up", "Certificates Redeem Modal: Signup");
                q.busy =
                    false;
                $(document).trigger("common.account.loggedIn")
            }, function (b) {
                q.busy = false;
                q.error = b
            })
        };
        q.shareCertificate = function () {
            q.hocSharingCertificate = true;
            var b = q.hocStartedVisible ? "default" : "2016";
            g.hocSendCertificate(b, q.hocShareEmail).then(function () {
                n.sendEvent("Action", "Shared", "Certificates Redeem Modal: Share");
                if (b == "default") q.hocStartedShared = true;
                if (b == "2016") q.hocCompletedShared = true;
                q.hocSharingCertificate = false
            }, function () {
                q.hocSharingCertificate = false
            })
        };
        q.shareStartedAgain = function () {
            q.hocShareEmail =
                "";
            q.hocStartedShared = false
        };
        q.shareCompletedAgain = function () {
            q.hocShareEmail = "";
            q.hocCompletedShared = false
        };
        q.personalizeCertificate = function (b) {
            q.hocPersonalizingCertificate = true;
            g.hocPersonalizeCertificate(q.name).then(function () {
                n.sendEvent("Action", "Personalized", "Certificates Redeem Modal: Personalize");
                q.hocPersonalizingCertificate = false;
                b ? b() : q.next()
            }, function () {
                q.hocPersonalizingCertificate = false
            })
        };
        q.googleLogin = function () {
            j.googleLogin().then(function () {
                q.onLoginSuccess()
            }, function (b) {
                q.error =
                    b
            })
        };
        q.init()
    }
    angular.module("common.account").factory("modalStudentCertificateRedeem", ["api", "modal", function (c, d) {
        return {
            open: function (c, f) {
                return d.open({
                    controller: b,
                    controllerAs: "vm",
                    locals: {
                        initStarted: c,
                        initCompleted: f
                    },
                    templateUrl: "/js/ng-app/common/account/modal-student-certificate-redeem.factory.html"
                })
            }
        }
    }]);
    b.$inject = ["$scope", "$state", "$stateParams", "$timeout", "api", "avatar", "externalAuth", "username", "initStarted", "initCompleted", "googleAnalytics"]
})();
(function () {
    function b() {
        return {
            controller: c,
            controllerAs: "vm",
            restrict: "A",
            link: function (b, c, f, g) {
                c.click(function () {
                    g.open({
                        role: f.openModalJoin
                    })
                })
            }
        }
    }

    function c(b) {
        this.open = function (c) {
            b.open(c)
        }
    }
    angular.module("common.account").directive("openModalJoin", b);
    b.$inject = [];
    c.$inject = ["modalJoin"]
})();
(function () {
    function b() {
        return {
            controller: c,
            controllerAs: "vm",
            restrict: "A",
            link: function (b, c, f, g) {
                c.click(function () {
                    g.open()
                })
            }
        }
    }

    function c(b) {
        this.open = function () {
            b.open()
        }
    }
    angular.module("common.account").directive("openModalSignIn", b);
    b.$inject = [];
    c.$inject = ["modalSignInSelectRole"]
})();
(function () {
    function b(b, d, e, f) {
        var g = this;
        g.facebookLogin = function () {
            f.facebookLogin({
                childConfCode: g.user.childConfCode,
                role: "parent",
                source: "verify-parent"
            }).then(function () {
                g.onLoginSuccess()
            }, function (b) {
                g.error = b
            })
        };
        g.googleLogin = function () {
            f.googleLogin({
                childConfCode: g.user.childConfCode,
                role: "parent",
                source: "verify-parent"
            }).then(function () {
                g.onLoginSuccess()
            }, function (b) {
                g.error = b
            })
        };
        g.hasNext = function () {
            return g.steps.indexOf(g.step) + 1 < g.steps.length
        };
        g.hasPrevious = function () {
            return g.steps.indexOf(g.step) >
                0
        };
        g.init = function (d, f) {
            e.ga("send", "event", "Sign-up Modal", "Parent Verified Student");
            g.step = "welcome";
            g.user.username = d;
            g.user.childConfCode = f;
            b.$watch("step", function () {
                angular.element("body").animate({
                    scrollTop: 0
                }, "slow")
            })
        };
        g.next = function () {
            var b = g.steps.indexOf(g.step);
            b == g.steps.length - 1 ? g.signupUser(g.user) : g.step = g.steps[b + 1]
        };
        g.previous = function () {
            var b = g.steps.indexOf(g.step);
            b == 0 ? d.go("join") : g.step = g.steps[b - 1]
        };
        g.setShowTynkerSignup = function (b) {
            g.showTynkerSignup = b
        };
        g.showTynkerSignup =
            false;
        g.steps = ["welcome", "account", "details"];
        g.step = null;
        g.user = {
            role: "parent",
            log_in: true,
            convert: true,
            confirmed: true,
            source: "verify-parent"
        }
    }
    angular.module("common.account").controller("ParentVerifyController", b);
    b.$inject = ["$scope", "$state", "$window", "externalAuth"]
})();
(function () {
    function b(b, d, e) {
        var f = this;
        f.activitySlug = d.activitySlug ? d.activitySlug : null;
        f.activity = null;
        f.init = function () {
            b.$watch("activitySlug", function () {
                f.activitySlug ? e.getActivity(f.activitySlug).then(function (b) {
                    f.activity = b
                }) : f.activity = null
            })
        };
        f.init()
    }
    angular.module("common.account").controller("UnlockController", b);
    b.$inject = ["$scope", "$stateParams", "api"]
})();
(function () {
    angular.module("common.account").controller("VerifyEmailCtrl", ["$scope", "api", function (b, c) {
        b.email = null;
        b.error = null;
        b.userId = null;
        b.busy = false;
        b.isEditing = false;
        b.firstEdit = true;
        b.init = function (d) {
            b.userId = d;
            c.getMyEmail().then(function (c) {
                b.email = c;
                b.error = null
            }, function (c) {
                b.email = "Could not retrieve email";
                b.error = "Problem retrieving email: " + c;
                b.busy = true
            })
        };
        b.resend = function () {
            b.busy = true;
            c.resendVerificationEmail(b.userId, b.email).then(function () {
                b.busy = false;
                b.error = null;
                b.notice =
                    "Sent!";
                b.isEditing = false
            }, function (c) {
                b.busy = false;
                b.error = c
            })
        };
        b.edit = function () {
            b.isEditing = true;
            b.firstEdit = false;
            b.error = false;
            b.notice = false
        }
    }])
})();
(function () {
    function b(b, d, e, f, g, h, j, k, l) {
        var m = this;
        m.areControlsVisible = false;
        m.createdOnDate = m.project.createdOn ? new Date(m.project.createdOn * 1E3) : null;
        m.enableOptions = m.enableOptions !== void 0 ? m.enableOptions : true;
        m.enableLike = m.enableLike !== void 0 ? m.enableLike : true;
        m.enableShare = true;
        m.init = function () { };
        m.like = function () {
            m.project.userLiked || (m.project.projectActivity ? f.likeProjectActivity(m.project.cid).then(function () {
                m.project.userLiked = true;
                m.project.likes = m.project.likes + 1
            }) : f.communityProjects.like(m.project.cid).then(function () {
                m.project.userLiked =
                    true;
                m.project.likes = m.project.likes + 1
            }))
        };
        m.onMouseleave = function () {
            if (m.areControlsVisible) m.areControlsVisible = false
        };
        m.play = function () {
            j(m.project, {
                embeddedShowViewCode: true,
                enableGoToProjectPage: true,
                enableOpen: false,
                enableSharing: true,
                showProjectConcepts: true,
                showProjectInformation: true,
                projects: m.projects
            })
        };
        m.remix = function () {
            e.location = "/ide?p=" + m.project.id
        };
        m.report = function () {
            m.project.projectActivity ? h.confirm('You can report projects that use bad words, contain personal information, or are rude or mean. Are you sure you want to report <strong>"' +
                m.project.name + '"</strong>?').then(function () {
                    f.reportProject(m.project.id).then(function () {
                        b.$emit("projectReported", m.project);
                        g("We will review this project based on our publishing guidelines.", "Thank you for your feedback")
                    })
                }) : l.confirm("project", m.project).then(function () {
                    b.$emit("projectReported", m.project)
                })
        };
        m.share = function () {
            k(m.project.id, m.project.name)
        };
        m.toggleControls = function (b) {
            m.areControlsVisible = !m.areControlsVisible;
            if (m.areControlsVisible) angular.element("body").one("click",
                function () {
                    d(function () {
                        m.areControlsVisible = false
                    })
                });
            b.stopPropagation()
        };
        m.unlike = function () {
            m.project.userLiked && (m.project.projectActivity ? f.unlikeProjectActivity(m.project.cid).then(function () {
                m.project.userLiked = false;
                m.project.likes = m.project.likes - 1
            }) : f.communityProjects.unlike(m.project.cid).then(function () {
                m.project.userLiked = false;
                m.project.likes = m.project.likes - 1
            }))
        };
        m.getPublisherName = function () {
            if (m.project.publisherName) return m.project.publisherName;
            var b = m.project.username,
                c = b.indexOf("@");
            return c == -1 ? b : b.slice(0, c)
        };
        m.isFeatured = function () {
            return m.forceFeatured != null ? m.forceFeatured : false
        };
        m.init()
    }
    angular.module("common.projects").directive("communityProject", function () {
        return {
            bindToController: {
                project: "=",
                enableLike: "=?",
                enableOptions: "=?",
                forceFeatured: "=?"
            },
            controller: b,
            controllerAs: "vm",
            restrict: "E",
            scope: {},
            templateUrl: "/js/ng-app/common/projects/community-project.directive.html"
        }
    }).directive("communityProjectOld", function () {
        return {
            bindToController: {
                project: "=",
                projects: "=?",
                enableLike: "=?",
                enableOptions: "=?"
            },
            controller: b,
            controllerAs: "vm",
            restrict: "E",
            scope: {},
            templateUrl: "/js/ng-app/common/projects/community-project-old.directive.html"
        }
    });
    b.$inject = ["$scope", "$timeout", "$window", "api", "modalAlert", "modalConfirm", "modalPlayProject", "modalShareProject", "modalReportCommunityAsset"]
})();
(function () {
    function b(b, d, e, f, g, h, j) {
        var k = this;
        k.areControlsVisible = false;
        k.createdOnDate = k.notebook.createdOn ? new Date(k.notebook.createdOn * 1E3) : null;
        k.enableOptions = k.enableOptions !== void 0 ? k.enableOptions : true;
        k.enableLike = k.enableLike !== void 0 ? k.enableLike : true;
        k.enableShare = true;
        k.getImageUrl = function () {
            return j(k.notebook)
        };
        k.init = function () { };
        k.like = function () {
            k.notebook.userLiked || f.communityNotebooks.like(k.notebook.cid).then(function () {
                k.notebook.userLiked = true;
                k.notebook.likes = k.notebook.likes +
                    1
            })
        };
        k.onMouseleave = function () {
            if (k.areControlsVisible) k.areControlsVisible = false
        };
        k.remix = function () {
            f.redirectExperienceTop("/nb/project/" + k.notebook.id + "/")
        };
        k.report = function () {
            h.confirm("notebook", k.notebook).then(function () {
                b.$emit("notebookReported", k.notebook)
            })
        };
        k.share = function () {
            g(k.notebook)
        };
        k.toggleControls = function (b) {
            k.areControlsVisible = !k.areControlsVisible;
            if (k.areControlsVisible) angular.element("body").one("click", function () {
                d(function () {
                    k.areControlsVisible = false
                })
            });
            b.stopPropagation()
        };
        k.unlike = function () {
            k.notebook.userLiked && +f.communityNotebooks.unlike(k.notebook.cid).then(function () {
                k.notebook.userLiked = false;
                k.notebook.likes = k.notebook.likes - 1
            })
        };
        k.init()
    }
    angular.module("common.projects").directive("communityNotebook", function () {
        return {
            bindToController: {
                notebook: "=",
                enableLike: "=?",
                enableOptions: "=?"
            },
            controller: b,
            controllerAs: "vm",
            restrict: "E",
            scope: {},
            templateUrl: "/js/ng-app/common/projects/community-notebook.directive.html"
        }
    });
    b.$inject = ["$scope", "$timeout", "$window", "api",
        "modalShareNotebook", "modalReportCommunityAsset", "renderNotebook"
    ]
})();
(function () {
    function b(b, e) {
        return {
            confirm: function (f, g) {
                return b(function (b, d) {
                    var k = false;
                    e.open({
                        controller: c,
                        controllerAs: "vm",
                        templateUrl: "/js/ng-app/common/projects/modal-report-community-asset.factory.html",
                        locals: {
                            assetType: f,
                            asset: g,
                            resolve: function () {
                                k = true;
                                b()
                            },
                            reject: function () {
                                d()
                            }
                        }
                    }).closed.then(function () {
                        k || d()
                    })
                })
            }
        }
    }

    function c(b, c, f, g) {
        var h = this;
        h.reason = null;
        h.asset = f;
        h.report = function () {
            c == "project" ? b.communityProjects.report(h.asset.cid, h.reason).then(function () {
                h.reported = true;
                g()
            }) : c == "notebook" ? b.communityNotebooks.report(h.asset.cid, h.reason).then(function () {
                h.reported = true;
                g()
            }) : console.warn("Reporting not implemented for asset type '" + c + "'")
        };
        h.reported = false
    }
    angular.module("common.projects").factory("modalReportCommunityAsset", b);
    b.$inject = ["$q", "modal"];
    c.$inject = ["api", "assetType", "asset", "resolve", "reject"]
})();
(function () {
    function b(b, d, e, f, g, h, j) {
        var k = this;
        k.addToHomeGallery = function (b) {
            f.addToGallery(b.id, "home", null).then(function () {
                b.in_gallery = true
            }, function (b) {
                k.error = b
            })
        };
        k.areControlsVisible = false;
        k.confirmDelete = function () {
            g.confirm('Are you sure you want to delete <strong>"' + k.project.name + '"</strong>?').then(function () {
                f.deleteProject(k.project.id).then(function () {
                    b.$emit("project.deleted", [k.project.id])
                }, function (b) {
                    alert("Failed to remove project: " + b)
                })
            })
        };
        k.defaultAction = k.defaultAction !==
            void 0 ? k.defaultAction : "play";
        k.enableLike = k.enableLike !== void 0 ? k.enableLike : false;
        k.enableOptions = k.enableOptions !== void 0 ? k.enableOptions : true;
        k.enablePublish = k.enablePublish !== void 0 ? k.enablePublish : false;
        k.enableToggleInHomeGallery = k.enableToggleInHomeGallery !== void 0 ? k.enableToggleInHomeGallery : false;
        k.enableView = k.enableView !== void 0 ? k.enableView : false;
        k.edit = function () {
            f.redirectExperienceTop("ide/?p=" + k.project.id, k.editReturnUrl)
        };
        k.getLikesString = function () {
            var b = k.project.likes;
            if (b <
                1E3) return b;
            b = (b / 100).toFixed(1);
            b.endsWith(".0") && (b = b.slice(0, b.length - 2));
            return b + "k"
        };
        k.getViewsString = function () {
            var b = k.project.views;
            if (b < 1E3) return b;
            b = (b / 100).toFixed(1);
            b.endsWith(".0") && (b = b.slice(0, b.length - 2));
            return b + "k"
        };
        k.like = function () {
            k.enableLike && (k.project.userLiked || f.communityProjects.like(k.project.id).then(function () {
                k.project.userLiked = true;
                k.project.likes = k.project.likes + 1
            }))
        };
        k.onClick = function () {
            k.defaultAction == "edit" ? k.edit() : k.play()
        };
        k.onMouseleave = function () {
            if (k.areControlsVisible) k.areControlsVisible =
                false
        };
        k.play = function () {
            h(k.project, {
                enableEdit: true,
                enableLike: false,
                enableRemix: false,
                enableReport: false,
                showProjectInformation: true
            })
        };
        k.publish = function () {
            k.share()
        };
        k.removeFromHomeGallery = function (b) {
            f.removeFromGallery("home", null, b.id, null).then(function () {
                b.in_gallery = false
            }, function (b) {
                k.error = b
            })
        };
        k.share = function () {
            j(k.project.id, k.project.name, k.project.published)
        };
        k.showLikes = true;
        k.showViews = true;
        k.toggleControls = function (b) {
            k.areControlsVisible = !k.areControlsVisible;
            if (k.areControlsVisible) angular.element("body").one("click",
                function () {
                    d(function () {
                        k.areControlsVisible = false
                    })
                });
            b.stopPropagation()
        };
        k.togglePublish = function () {
            k.project.published ? k.unpublish() : k.publish()
        };
        k.unlike = function () {
            k.enableLike && k.project.userLiked && f.communityProjects.unlike(k.project.id).then(function () {
                k.project.userLiked = false;
                k.project.likes = k.project.likes - 1
            })
        };
        k.unpublish = function () {
            e.ga("send", "event", "Project Card", "Unshare", "Community");
            k.busy = true;
            f.unshareFromCommunity(k.project.id).then(function () {
                k.busy = false;
                k.error = "";
                k.success =
                    "Successfully unpublished!";
                k.project.published = false;
                b.$emit("project.unpublished", [k.project.id])
            }, function (b) {
                k.busy = false;
                k.success = "";
                k.error = b
            })
        }
    }
    angular.module("common.projects").directive("projectCard", function () {
        return {
            bindToController: {
                defaultAction: "@?",
                editReturnUrl: "=?",
                enableLike: "=?",
                enableOptions: "=?",
                enablePublish: "=?",
                enableToggleInHomeGallery: "=?",
                enableView: "=?",
                project: "=",
                userId: "@",
                userAvatar: "@"
            },
            controller: b,
            controllerAs: "vm",
            restrict: "E",
            scope: {},
            templateUrl: "/js/ng-app/common/projects/project-card.directive.html"
        }
    }).directive("projectCardOld",
        function () {
            return {
                bindToController: {
                    enablePublish: "=?",
                    enableToggleInHomeGallery: "=?",
                    project: "=",
                    userId: "@",
                    userAvatar: "@"
                },
                controller: b,
                controllerAs: "vm",
                restrict: "E",
                scope: {},
                templateUrl: "/js/ng-app/common/projects/project-card-old.directive.html"
            }
        });
    b.$inject = ["$rootScope", "$timeout", "$window", "api", "modalConfirm", "modalPlayProject", "modalShareProject"]
})();
(function () {
    function b(b) {
        this.report = function (d, e) {
            return b.confirm(d, e)
        }
    }
    angular.module("common.projects").directive("reportCommunityAsset", function () {
        return {
            controller: b,
            restrict: "A",
            link: function (b, d, e, f) {
                d.click(function () {
                    f.report(e.assetType, {
                        cid: e.reportCommunityAsset
                    }).then(function () {
                        d.parents(".project-card").detach()
                    })
                })
            }
        }
    });
    b.$inject = ["modalReportCommunityAsset"]
})();
(function () {
    function b(b, d, e, f, g) {
        var h = this;
        h.activity = f;
        h.busy = false;
        h.done = function () {
            h.rate().then(function () {
                g()
            })
        };
        h.rating = {};
        h.rate = function () {
            return b(function (b, c) {
                e.rateActivity(h.activity.type, h.activity.id, h.rating).then(function () {
                    h.busy = false;
                    h.sent = true;
                    b()
                }, function () {
                    h.busy = false;
                    h.error = "Problem sending feedback";
                    c()
                })
            })
        };
        h.rateOverall = function (b) {
            d.ga("send", "event", "Rate Activity Modal", "Rate", h.activity.title, b);
            h.rating.overall = b;
            h.rate()
        }
    }
    angular.module("common.rating").factory("modalRateActivity", ["$q", "$window", "api", "modal", function (c, d, e, f) {
        return function (e) {
            return c(function (c, j) {
                var k = f.open({
                    controller: b,
                    controllerAs: "vm",
                    templateUrl: "/js/ng-app/common/rating/modalRateActivity.factory.html",
                    locals: {
                        activity: e,
                        resolve: c
                    }
                });
                k.opened.then(function () {
                    d.ga("send", "event", "Rate Activity Modal", "Open", e.title)
                });
                k.closed.then(function () {
                    d.ga("send", "event", "Rate Activity Modal", "Close", e.title);
                    j()
                })
            })
        }
    }]);
    b.$inject = ["$q", "$window", "api", "activity", "resolve"]
})();
(function () {
    angular.module("common.rating").directive("rateActivity", ["$window", function (b) {
        return {
            controller: ["modalRateActivity", function (b) {
                var d = this;
                d.doneUrl = null;
                d.setDoneUrl = function (b) {
                    d.doneUrl = b
                };
                d.open = function (e, f, g) {
                    b({
                        type: e,
                        id: f,
                        title: g
                    }).then(function () {
                        window.location = d.doneUrl
                    }, function () {
                        window.location = d.doneUrl
                    })
                }
            }],
            restrict: "A",
            link: function (c, d, e, f) {
                d.unbind("click");
                d.click(function (c) {
                    c.preventDefault();
                    c.stopPropagation();
                    var d = e.activityId ? e.activityId : null;
                    if (!d && b.IDE &&
                        b.IDE.currentProjectId) d = b.IDE.currentProjectId;
                    if (!d && b.WinLessons && b.WinLessons.lessonId) d = b.WinLessons.lessonId;
                    var j = e.activityTitle != void 0 ? e.activityTitle : null;
                    if (!j && b.IDE && b.IDE.currentProjectName) j = b.IDE.currentProjectName;
                    var k = angular.element(".editor-title > h1");
                    k.size() && (j = k.text().trim());
                    j || (j = "this activity");
                    c.delegateTarget ? f.setDoneUrl($(c.delegateTarget).attr("href")) : f.setDoneUrl(e.href);
                    f.open(e.rateActivity, d, j)
                })
            }
        }
    }])
})();
(function () {
    angular.module("common.sharing").controller("PuzzleSharingCtrl", ["$scope", "$http", "$location", function (b, c, d) {
        b.shareUrl = null;
        b.screenShot = null;
        b.facebookAppId = null;
        b.imageKey = null;
        b.init = function (c) {
            b.facebookAppId = c
        };
        b.show = function (c, d, g) {
            b.puzzleTitle = c;
            b.shareUrl = d;
            b.screenShot = g;
            $("#sharing").modal()
        };
        b.hide = function () {
            $.modal.close()
        };
        b.reset = function () {
            b.error = null;
            b.success = null
        };
        b.facebookShare = function () {
            shareFacebook(b.shareUrl, {
                appId: b.facebookAppId,
                serverName: d.host()
            })
        };
        b.twitterShare = function () {
            shareTwitter(b.shareUrl, "I enjoyed solving " + b.puzzleTitle + ", a coding puzzle. Try it here", {
                serverName: d.host(),
                hashTags: "hourofcode,tynker"
            })
        };
        b.googlePlusShare = function () {
            shareGooglePlus(b.shareUrl, {
                serverName: d.host()
            })
        }
    }])
})();
(function () {
    angular.module("common.sharing").directive("shareNotebook", function () {
        return {
            controller: ["modalShareNotebook", function (b) {
                this.share = function (c, d) {
                    b({
                        id: c,
                        name: d
                    })
                }
            }],
            restrict: "A",
            link: function (b, c, d, e) {
                c.click(function () {
                    e.share(d.shareNotebook, d.notebookName)
                })
            }
        }
    })
})();
(function () {
    angular.module("common.sharing").directive("shareProject", [function () {
        return {
            controller: ["modalShareProject", function (b) {
                this.share = function (c, d) {
                    b(c, d)
                }
            }],
            restrict: "A",
            link: function (b, c, d, e) {
                c.click(function () {
                    e.share(d.shareProject, d.projectName)
                })
            }
        }
    }])
})();
(function () {
    angular.module("common.sharing").controller("ShareAssetPopupCtrl", ["$scope", "$http", "$location", "$window", "api", function (b, c, d, e, f) {
        function g(b) {
            b = b.trim().toLowerCase();
            b = b.replace(/[^a-zA-Z0-9]/g, "-");
            (b = b.replace(/--+/g, "-")) || (b = "default");
            return b
        }

        function h(b, c, d, e) {
            switch (b) {
                case "skin":
                    return "/minecraft/skins/view/" + g(d) + "/" + c;
                case "item":
                    return "/minecraft/texture-packs/items/view/" + e + "/" + g(d) + "/" + c;
                case "block":
                    return "/minecraft/texture-packs/blocks/view/" + e + "/" + g(d) + "/" + c;
                case "entity":
                    return "/minecraft/texture-packs/mobs/view/" +
                        e + "/" + g(d) + "/" + c
            }
        }

        function j(b, c) {
            switch (b) {
                case "skin":
                    return "/minecraft/api/skin?id=" + c + "&w=40&h=35";
                case "block":
                    return "/minecraft/api/block?id=" + c + "&w=40&h=35";
                case "item":
                    return "/minecraft/api/item?id=" + c + "&w=40&h=35";
                case "entity":
                    if (e.g_entityCapture) return e.g_entityCapture();
                default:
                    return null
            }
        }
        b.assetId = null;
        b.assetName = null;
        b.assetTitle = null;
        b.assetType = null;
        b.assetImage = null;
        b.shared = false;
        b.captchaCode = null;
        b.captchaRandom = null;
        b.currentTab = null;
        b.tabs = {};
        b.serverName = null;
        b.busy = false;
        b.generateCaptcha = function () {
            b.captchaRandom = "/api/captcha?r=" + Math.random();
            b.captchaCode = null
        };
        b.init = function (c, e, f, g, h) {
            b.facebookAppId = c;
            b.serverName = d.host();
            if (e == "student" && !f) {
                b.tabs = {
                    community: "Community"
                };
                b.currentTab = "community";
                if (g || h) b.tabs.connections = "Connected to Me"
            } else {
                b.tabs = {
                    social: "Social"
                };
                b.currentTab = "social"
            }
        };
        b.show = function (c, d, g, n, q) {
            e.ga("send", "event", "Minecraft Share Modal", "Open", c == "entity" ? "mob" : c);
            b.error = "";
            b.success = "";
            b.assetId = d;
            b.assetName = q;
            b.assetTitle =
                g;
            b.assetType = c;
            b.assetImage = n ? n : j(c, d);
            b.assetShareUrl = "https://" + b.serverName + h(c, d, g, q);
            b.generateCaptcha();
            c == "entity" ? f.saveImage(d, b.assetImage).then(function () {
                $("#share-asset-popup").modal()
            }, function () {
                $("#share-asset-popup").modal()
            }) : $("#share-asset-popup").modal()
        };
        b.hide = function () {
            $.modal.close()
        };
        b.reset = function () {
            b.error = null;
            b.success = null
        };
        b.setCurrentTab = function (c) {
            b.currentTab = c
        };
        b.communityShare = function () {
            e.ga("send", "event", "Minecraft Share Modal", "Share", "Community");
            b.busy =
                true;
            f.shareAssetToCommunity(b.assetType, b.assetId).then(function () {
                b.busy = false;
                b.error = "";
                b.success = "Successfully published!";
                b.shared = true
            }, function (c) {
                b.busy = false;
                b.success = "";
                b.error = c
            })
        };
        b.communityUnshare = function () {
            e.ga("send", "event", "Minecraft Share Modal", "Unshare", "Community");
            b.busy = true;
            f.unshareAssetFromCommunity(b.assetType, b.assetId).then(function () {
                b.busy = false;
                b.error = "";
                b.success = "Successfully unpublished!";
                b.shared = false
            }, function (c) {
                b.busy = false;
                b.success = "";
                b.error = c
            })
        };
        b.emailParent =
            function () {
                e.ga("send", "event", "Minecraft Share Modal", "Share", "Email Parent");
                b.busy = true;
                f.sendMinecraftAssetEmail(b.assetId).then(function () {
                    b.busy = false;
                    b.error = "";
                    b.success = "Shared successfully!"
                }, function (c) {
                    b.busy = false;
                    b.success = "";
                    b.error = c
                })
            };
        b.emailShare = function () {
            e.ga("send", "event", "Minecraft Share Modal", "Share", "Email");
            b.busy = true;
            f.sendMinecraftAssetEmail(b.assetId, b.displayName, b.email, b.captchaCode, b.assetShareUrl, b.assetImage).then(function () {
                b.busy = false;
                b.success = "Shared successfully!"
            },
                function (c) {
                    b.busy = false;
                    b.error = c;
                    b.generateCaptcha()
                })
        };
        b.facebookShare = function () {
            e.ga("send", "event", "Minecraft Share Modal", "Share", "Facebook");
            shareFacebook(b.assetShareUrl, {
                appId: b.facebookAppId,
                serverName: d.host()
            })
        };
        b.twitterShare = function () {
            e.ga("send", "event", "Minecraft Share Modal", "Share", "Twitter");
            shareTwitter(b.assetShareUrl, b.assetTitle, {
                serverName: d.host(),
                hashTags: "tynker,minecraft," + (b.assetType == "entity" ? "mob" : b.assetType)
            })
        };
        b.googlePlusShare = function () {
            e.ga("send", "event", "Minecraft Share Modal",
                "Share", "Google+");
            shareGooglePlus(b.assetShareUrl)
        }
    }])
})();
(function () {
    angular.module("common.sharing").directive("shareBar", [function () {
        return {
            controller: ["$scope", function (b) {
                b.shareEmail = function () {
                    shareEmail(b.text, b.url)
                };
                b.shareFacebook = function () {
                    shareFacebook(b.url, {
                        appId: b.facebookAppId
                    })
                };
                b.shareGooglePlus = function () {
                    shareGooglePlus(b.url)
                };
                b.shareTwitter = function () {
                    shareTwitter(b.url, b.text, {
                        serverName: b.serverName
                    })
                }
            }],
            restrict: "E",
            scope: {
                facebookAppId: "@",
                serverName: "@",
                text: "=",
                url: "="
            },
            templateUrl: "/js/ng-app/common/sharing/shareBar.directive.html"
        }
    }])
})();
(function () {
    angular.module("common.sharing").directive("sharePageEmail", [function () {
        return {
            controller: ["$location", "social", function (b, c) {
                this.share = function (d, e, f) {
                    d = d ? d : b.absUrl();
                    c.shareEmail(e, f + ("\n" + d))
                }
            }],
            restrict: "A",
            link: function (b, c, d, e) {
                c.click(function () {
                    e.share(d.url, d.subject, d.body)
                })
            }
        }
    }])
})();
(function () {
    angular.module("common.sharing").directive("sharePageFacebook", [function () {
        return {
            controller: ["$location", "social", function (b, c) {
                this.share = function (d) {
                    d = d ? d : b.absUrl();
                    c.shareFacebook(d)
                }
            }],
            restrict: "A",
            link: function (b, c, d, e) {
                c.click(function () {
                    e.share(d.url)
                })
            }
        }
    }])
})();
(function () {
    angular.module("common.sharing").directive("sharePageGooglePlus", [function () {
        return {
            controller: ["$location", "social", function (b, c) {
                this.share = function (d) {
                    d = d ? d : b.absUrl();
                    c.shareGooglePlus(d)
                }
            }],
            restrict: "A",
            link: function (b, c, d, e) {
                c.click(function () {
                    e.share(d.url)
                })
            }
        }
    }])
})();
(function () {
    angular.module("common.sharing").directive("sharePageTwitter", [function () {
        return {
            controller: ["$location", "social", function (b, c) {
                this.share = function (d, e, f) {
                    var d = d ? d : b.absUrl(),
                        g = {};
                    if (f) g.hashTags = f;
                    c.shareTwitter(d, e, g)
                }
            }],
            restrict: "A",
            link: function (b, c, d, e) {
                c.click(function () {
                    e.share(d.url, d.text, d.hashTags)
                })
            }
        }
    }])
})();
(function () {
    angular.module("common.sharing").controller("SharePopupCtrl", ["$scope", "$http", "$location", "$window", "api", function (b, c, d, e, f) {
        b.projectId = null;
        b.projectName = null;
        b.projectScreenShot = null;
        b.currentTab = null;
        b.tabs = {};
        b.captchaCode = null;
        b.captchaRandom = null;
        b.displayName = null;
        b.email = null;
        b.serverName = null;
        b.facebookAppId = null;
        b.stageWidth = 660;
        b.stageHeight = 408;
        b.shared = false;
        b.busy = false;
        b.init = function (c, e, f, k, l) {
            b.facebookAppId = c;
            b.serverName = d.host();
            if (e == "student") {
                b.tabs = {
                    embed: "Embed"
                };
                b.currentTab = "email";
                if (k || l) {
                    b.tabs.connections = "Connected to Me";
                    b.currentTab = "connections"
                }
                b.tabs.community = "Community";
                b.currentTab = "community";
                f && (b.tabs.email = "Email")
            } else {
                b.tabs = {
                    community: "Community",
                    email: "Email",
                    embed: "Embed",
                    social: "Social"
                };
                b.currentTab = "social"
            }
        };
        b.show = function (c, d, f) {
            f = f ? f : "https://" + b.serverName + "/play?p=" + c;
            e.ga("send", "event", "Project Share Modal", "Open", d);
            b.error = "";
            b.success = "";
            b.projectId = c;
            b.projectName = d;
            b.projectShareUrl = f;
            b.projectScreenShot = "/assets/pscreenshot/" +
                c + ".png?f=true";
            b.generateCaptcha();
            $("#share-popup").modal()
        };
        b.hide = function () {
            $.modal.close()
        };
        b.reset = function () {
            b.error = null;
            b.success = null;
            b.email = null;
            b.generateCaptcha()
        };
        b.setCurrentTab = function (c) {
            b.currentTab = c
        };
        b.emailParent = function () {
            e.ga("send", "event", "Project Share Modal", "Share", "Email Parent");
            b.busy = true;
            f.sendProjectEmail(b.projectId).then(function () {
                b.busy = false;
                b.error = "";
                b.success = "Shared successfully!"
            }, function (c) {
                b.busy = false;
                b.success = "";
                b.error = c
            })
        };
        b.communityShare = function () {
            e.ga("send",
                "event", "Project Share Modal", "Share", "Community");
            b.busy = true;
            f.shareToCommunity(b.projectId).then(function () {
                b.busy = false;
                b.error = "";
                b.success = "Successfully published!";
                b.shared = true
            }, function (c) {
                b.busy = false;
                b.success = "";
                b.error = c
            })
        };
        b.communityUnshare = function () {
            e.ga("send", "event", "Project Share Modal", "Unshare", "Community");
            b.busy = true;
            f.unshareFromCommunity(b.projectId).then(function () {
                b.busy = false;
                b.error = "";
                b.success = "Successfully unpublished!";
                b.shared = false
            }, function (c) {
                b.busy = false;
                b.success =
                    "";
                b.error = c
            })
        };
        b.parentShare = function () {
            e.ga("send", "event", "Project Share Modal", "Share", "Parent");
            b.busy = true;
            f.addToGallery(b.projectId, "home").then(function () {
                b.busy = false;
                b.error = "";
                b.success = "Shared successfully!"
            }, function (c) {
                b.busy = false;
                b.success = "";
                b.error = c
            })
        };
        b.classShare = function () {
            e.ga("send", "event", "Project Share Modal", "Share", "Class");
            b.busy = true;
            f.addToGallery(b.projectId, "class").then(function () {
                b.busy = false;
                b.error = "";
                b.success = "Shared successfully!"
            }, function (c) {
                b.busy = false;
                b.success = "";
                b.error = c
            })
        };
        b.emailShare = function () {
            e.ga("send", "event", "Project Share Modal", "Share", "Email");
            b.busy = true;
            f.sendProjectEmail(b.projectId, b.displayName, b.email, b.captchaCode, b.projectShareUrl).then(function () {
                b.busy = false;
                b.success = "Shared successfully!"
            }, function (c) {
                b.busy = false;
                b.error = c;
                b.generateCaptcha()
            })
        };
        b.facebookShare = function () {
            e.ga("send", "event", "Project Share Modal", "Share", "Facebook");
            shareProjectFacebook(b.projectId, {
                appId: b.facebookAppId,
                serverName: d.host(),
                shareUrl: b.projectShareUrl
            })
        };
        b.twitterShare = function () {
            e.ga("send", "event", "Project Share Modal", "Share", "Twitter");
            shareProjectTwitter(b.projectId, b.projectName, b.projectDescription, {
                serverName: d.host(),
                shareUrl: b.projectShareUrl
            })
        };
        b.googlePlusShare = function () {
            e.ga("send", "event", "Project Share Modal", "Share", "Google+");
            shareProjectGooglePlus(b.projectId, {
                serverName: d.host(),
                shareUrl: b.projectShareUrl
            })
        };
        b.generateCaptcha = function () {
            b.captchaRandom = "/api/captcha?r=" + Math.random();
            b.captchaCode = null
        }
    }])
})();
(function () {
    angular.module("common.sharing").controller("SharingCtrl", ["$scope", "$http", "$location", "api", function (b, c, d, e) {
        b.projectId = null;
        b.projectName = null;
        b.projectScreenShot = null;
        b.currentTab = null;
        b.tabs = {};
        b.captchaCode = null;
        b.captchaRandom = null;
        b.displayName = null;
        b.email = null;
        b.facebookAppId = null;
        b.stageWidth = null;
        b.stageHeight = null;
        b.busy = false;
        b.init = function (c, d) {
            b.facebookAppId = c;
            if (d == "student") {
                b.tabs = {
                    community: "Community",
                    embed: "Embed"
                };
                b.currentTab = "email";
                if (prefs.defaultGalleryId) {
                    b.tabs.gallery =
                        "Showcase";
                    b.currentTab = "gallery"
                }
                if (prefs.hasClass || prefs.hasParent) {
                    b.tabs.connections = "Connected to Me";
                    b.currentTab = "connections"
                }
                prefs.isAnon && (b.tabs.email = "Email")
            } else {
                b.tabs = {
                    community: "Community",
                    email: "Email",
                    embed: "Embed",
                    social: "Social"
                };
                b.currentTab = "social";
                if (prefs.defaultGalleryId) {
                    b.tabs.gallery = "Showcase";
                    b.currentTab = "gallery"
                }
            }
            b.currentTab = "community"
        };
        b.show = function () {
            if (!IDE.currentProjectId || !IDE.currentProjectName) {
                var c = $("#sharing-set-title").scope();
                c && c.show()
            } else if (IDE.isDirty) {
                Runtime.stage.selectActor(null);
                c = Runtime.stage.captureScreenshot();
                IDE._doProjectSave(null, null, c, true, true, function (c) {
                    c && d.search({
                        p: IDE.currentProjectId
                    });
                    b._show()
                })
            } else b._show()
        };
        b._show = function () {
            Runtime.stage.selectActor(null);
            var c = Runtime.stage.captureScreenshot();
            b.generateCaptcha();
            b.stageWidth = Runtime.stage.getWidth();
            b.stageHeight = Runtime.stage.getHeight();
            b.projectId = IDE.currentProjectId;
            b.projectName = IDE.currentProjectName;
            b.projectDescription = IDE.currentProjectDescription;
            b.projectScreenShot = c;
            $("#sharing").modal()
        };
        b.hide = function () {
            $.modal.close()
        };
        b.reset = function () {
            b.error = null;
            b.success = null;
            b.email = null;
            b.generateCaptcha()
        };
        b.setCurrentTab = function (c) {
            b.currentTab = c
        };
        b.communityShare = function (c) {
            b.busy = true;
            e.shareToCommunity(b.projectId, c).then(function () {
                b.busy = false;
                b.error = "";
                b.success2 = "Successfully published!";
                b.published = true
            }, function (c) {
                b.busy = false;
                b.success2 = "";
                b.error = c
            })
        };
        b.ideCommunityShare = function () {
            IDE.cmdProjectSubmitEntry()
        };
        b.communityUnshare = function () {
            b.busy = true;
            e.unshareFromCommunity(b.projectId).then(function () {
                b.busy =
                    false;
                b.error = "";
                b.success2 = "Successfully unpublished!";
                b.published = false
            }, function (c) {
                b.busy = false;
                b.success2 = "";
                b.error = c
            })
        };
        b.emailParent = function () {
            b.busy = true;
            e.sendProjectEmail(b.projectId).then(function () {
                b.busy = false;
                b.error = "";
                b.success = "Shared successfully!"
            }, function (c) {
                b.busy = false;
                b.success = "";
                b.error = c
            })
        };
        b.parentShare = function () {
            b.busy = true;
            e.addToGallery(b.projectId, "home").then(function () {
                b.busy = false;
                b.error = "";
                b.success = "Shared successfully!"
            }, function (c) {
                b.busy = false;
                b.success =
                    "";
                b.error = c
            })
        };
        b.classShare = function () {
            b.busy = true;
            e.addToGallery(b.projectId, "class").then(function () {
                b.busy = false;
                b.error = "";
                b.success = "Shared successfully!"
            }, function (c) {
                b.busy = false;
                b.success = "";
                b.error = c
            })
        };
        b.defaultGalleryShare = function () {
            b.busy = true;
            e.addToGallery(b.projectId, "gallery", prefs.defaultGalleryId).then(function () {
                b.busy = false;
                b.error = "";
                b.success = "Shared successfully!"
            }, function (c) {
                b.busy = false;
                b.success = "";
                b.error = c
            })
        };
        b.emailShare = function () {
            b.busy = true;
            e.sendProjectEmail(b.projectId,
                b.displayName, b.email, b.captchaCode).then(function () {
                    b.busy = false;
                    b.success = "Shared successfully!"
                }, function (c) {
                    b.busy = false;
                    b.error = c;
                    b.generateCaptcha()
                })
        };
        b.facebookShare = function () {
            shareProjectFacebook(b.projectId, {
                appId: b.facebookAppId,
                serverName: d.host()
            })
        };
        b.twitterShare = function () {
            shareProjectTwitter(b.projectId, b.projectName, b.projectDescription, {
                serverName: d.host()
            })
        };
        b.googlePlusShare = function () {
            shareProjectGooglePlus(b.projectId, {
                serverName: d.host()
            })
        };
        b.generateCaptcha = function () {
            b.captchaRandom =
                "/api/captcha?r=" + Math.random();
            b.captchaCode = null
        }
    }])
})();
(function () {
    angular.module("common.sharing").controller("SharingSetTitleCtrl", ["$scope", "$location", function (b, c) {
        b.show = function () {
            $("#sharing-set-title").modal()
        };
        b.setTitle = function (b) {
            IDE.setTitle(b);
            Runtime.stage.selectActor(null);
            var e = Runtime.stage.captureScreenshot();
            IDE._doProjectSave(b, null, e, true, true, function (b) {
                b && c.search({
                    p: IDE.currentProjectId
                });
                b = $("#sharing").scope();
                b.show();
                b.$apply()
            })
        }
    }])
})();
(function () {
    angular.module("common").factory("social", ["$location", "facebookAppId", function (b, c) {
        function d(d, e) {
            var e = e ? e : {},
                f = e.appId ? e.appId : c,
                g = e.serverName ? e.serverName : b.host(),
                f = "https://www.facebook.com/dialog/share?" + $.param({
                    app_id: f,
                    display: "popup",
                    href: d,
                    redirect_uri: "http://" + g + "/api/closewindow"
                });
            window.open(f, "Share", "toolbar=0,status=0,width=626,height=436")
        }

        function e(b, c, d) {
            d = d ? d : {};
            d = d.hashTags !== void 0 ? d.hashTags : "HourOfCode";
            b = {
                url: b,
                text: c
            };
            d && (b.hashtags = d);
            b = "https://twitter.com/intent/tweet?" +
                $.param(b);
            window.open(b, "Tweet", "toolbar=0,status=0,width=626,height=436")
        }

        function f(b) {
            b = "https://plus.google.com/share?" + $.param({
                url: b
            });
            window.open(b, "Share on Google+", "toolbar=0,status=0,width=626,height=436")
        }

        function g(b, c) {
            var d = "mailto:?subject=" + encodeURIComponent(b) + "&body=" + encodeURIComponent(c);
            window.open(d, "Share using e-mail", "toolbar=0,status=0,width=626,height=436")
        }
        return {
            shareFacebook: d,
            shareTwitter: e,
            shareGooglePlus: f,
            shareEmail: g,
            shareProjectEmail: function (c, d, e, f) {
                var f =
                    f ? f : {},
                    m = f.serverName ? f.serverName : b.host();
                g(d, "\n\nTynker project made by " + e + "\n" + (f.shareUrl ? f.shareUrl : "http://" + m + "/play?p=" + c) + "\n")
            },
            shareProjectFacebook: function (c, e) {
                var e = e ? e : {},
                    f = e.serverName ? e.serverName : b.host();
                d(e.shareUrl ? e.shareUrl : "http://" + f + "/play?p=" + c, e)
            },
            shareProjectTwitter: function (c, d, f, g) {
                g = g ? g : {};
                f = g.serverName ? g.serverName : b.host();
                g.hashTags = g.hashTags ? g.hashTags : "tynker";
                e(g.shareUrl ? g.shareUrl : "http://" + f + "/play?p=" + c, "Check out " + d + " a coding project created with Tynker",
                    g)
            },
            shareProjectGooglePlus: function (c, d) {
                var d = d ? d : {},
                    e = d.serverName ? d.serverName : b.host();
                f(d.shareUrl ? d.shareUrl : "http://" + e + "/play?p=" + c)
            },
            shareMyHocProjectTwitter: function (c, d, f, g) {
                g = g ? g : {};
                g.hashTags = g.hashTags ? g.hashTags : "hourofcode,tynker";
                g.serverName || b.host();
                f = g.serverName;
                e(g.shareUrl ? g.shareUrl : "http://" + f + "/play?p=" + c, "I made " + d + " using code. Try it at", g)
            },
            shareMyHocProjectEmail: function (c, d, e, f) {
                f = f ? f : {};
                f.serverName = f.serverName ? f.serverName : b.host();
                e = f.serverName;
                g(d, "\n\nI made " +
                    d + " using code. Try it at " + (f.shareUrl ? f.shareUrl : "http://" + e + "/play?p=" + c))
            }
        }
    }])
})();
(function () {
    angular.module("common").value("facebookAppId", "682472498534700").factory("api", ["$http", "$q", "$window", "$timeout", "resourceCache", "requests", function (b, c, d, e, f, g) {
        return {
            SHOP_URL: "/courses/",
            SUBSCRIBE_URL: "/courses/#/#pricing-plans",
            addImportedDistrict: function (d) {
                return c(function (c, e) {
                    var f = new FormData;
                    f.append("f", d);
                    b.post("/admin/api/add-imported-district", f, {
                        withCredentials: true,
                        transformRequest: angular.identity,
                        headers: {
                            "Content-Type": void 0
                        }
                    }).success(function (b) {
                        if (b.status ==
                            "error") e(b.error);
                        else {
                            b.valid || e(b.error);
                            c(b.message)
                        }
                    }).error(function (b) {
                        e(b)
                    })
                })
            },
            validateDistrictCsv: function (d) {
                return c(function (c, e) {
                    var f = new FormData;
                    f.append("f", d);
                    b.post("/admin/api/validate-district-csv", f, {
                        withCredentials: true,
                        transformRequest: angular.identity,
                        headers: {
                            "Content-Type": void 0
                        }
                    }).success(function (b) {
                        (new FormData).append("f", d.f);
                        b.status == "error" ? e(b.error) : c(b)
                    }).error(function (b) {
                        e(b)
                    })
                })
            },
            addLead: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/api/leads/new",
                        data: $.param(d),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "error" ? e(b.error) : c()
                    }).error(function (b) {
                        e(b.error)
                    })
                })
            },
            addLesson: function (d, e, f) {
                return c(function (c, g) {
                    b({
                        method: "POST",
                        url: "/api/addlesson",
                        data: $.param({
                            id: d,
                            classid: e,
                            lessonid: f
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.result ? c() : g()
                    }).error(function () {
                        g()
                    })
                })
            },
            addSubscription: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/forms/subscribe",
                        data: $.param(d),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.error ? e(b.error) : c(b.subscription_id)
                    }).error(function (b) {
                        e(b.error)
                    })
                })
            },
            shareToCommunity: function (d, e) {
                return c(function (c, f) {
                    var g = {
                        c: "publish",
                        id: d
                    };
                    e && (g.t = e);
                    b({
                        method: "POST",
                        url: "/api/publishproject",
                        type: "json",
                        data: $.param(g),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b && b.success ? c() : f(b.message)
                    }).error(function (b) {
                        f(b)
                    })
                })
            },
            unshareFromCommunity: function (d) {
                return c(function (c,
                    e) {
                    b({
                        method: "POST",
                        url: "/api/publishproject",
                        type: "json",
                        data: $.param({
                            c: "unpublish",
                            id: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b && b.success ? c() : e(b.message)
                    }).error(function (b) {
                        e(b)
                    })
                })
            },
            shareAssetToCommunity: function (b, c) {
                return g.post("/api/publishasset", {
                    c: "publish",
                    id: c,
                    t: b
                })
            },
            unshareAssetFromCommunity: function (b, c) {
                return g.post("/api/publishasset", {
                    c: "unpublish",
                    id: c,
                    t: b
                })
            },
            addToGallery: function (d, e, f, g) {
                f = f !== void 0 ? f : null;
                return c(function (c,
                    n) {
                    var q = {
                        pid: d,
                        c: e
                    };
                    if (f) q.gid = f;
                    g = g !== void 0 ? g : {};
                    for (var p in g) q[p] = g[p];
                    b({
                        method: "POST",
                        url: "/api/addtogallery",
                        type: "json",
                        data: $.param(q),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b ? c(b) : n("Already shared")
                    }).error(function (b) {
                        n(b)
                    })
                })
            },
            addUser: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/api/adduser",
                        data: $.param(d),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c(b.userId) : e(b.error)
                    }).error(function (b) {
                        e(b.error)
                    })
                })
            },
            assignProject: function (b, c, d, e) {
                return this.saveLessonSend(c, d, [{
                    projectid: b,
                    name: c,
                    message: d,
                    screenshot: ""
                }], [], e)
            },
            canSend: function (d, e) {
                return c(function (c, f) {
                    b({
                        url: "/api/cansend",
                        method: "GET",
                        params: {
                            emailTemplate: d,
                            toEmail: e
                        }
                    }).success(function (b) {
                        b.status == "success" ? c(b.canSend) : f(b.error)
                    }).error(function () {
                        f()
                    })
                })
            },
            changeDisplayName: function (d) {
                return c(function (c, e) {
                    b({
                        url: "/myclasses/api/changedisplayname",
                        method: "POST",
                        data: $.param({
                            nickname: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status ==
                            "success" ? c() : e(b.error)
                    }).error(function () {
                        e()
                    })
                })
            },
            changeMyPassword: function (d, e, f) {
                console.log(d, e, f);
                return c(function (c, g) {
                    b({
                        url: "/myclasses/api/changepassword",
                        method: "POST",
                        data: $.param({
                            cpass: d,
                            newpass: e,
                            confpass: f
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c() : g(b.error)
                    }).error(function () {
                        g()
                    })
                })
            },
            changePassword: function (d, e, f) {
                return c(function (c, g) {
                    b({
                        method: "POST",
                        url: "/api/changepasswordjson",
                        data: $.param({
                            id: d,
                            reset_code: e,
                            password: f
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c() : g(b.error)
                    }).error(function () {
                        g()
                    })
                })
            },
            checkoutRedeemParent: function () {
                return g.get("/api/store/checkoutredeemparent", {}, f)
            },
            checkoutRedeemStudent: function () {
                return g.get("/api/store/checkoutredeemstudent", {}, f)
            },
            communityNotebooks: {
                list: function (d, e, f, g) {
                    var m = {
                        c: "list",
                        page: d,
                        limit: e,
                        type: f
                    },
                        g = g !== void 0 ? g : {},
                        n;
                    for (n in g) m[n] = g[n];
                    return c(function (c, d) {
                        b({
                            method: "GET",
                            url: "/api/communitynotebooks",
                            params: m,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Cache-Control": "no-cache"
                            }
                        }).success(function (b) {
                            b ? c(b) : d()
                        }).error(function () {
                            d()
                        })
                    })
                },
                like: function (d) {
                    return c(function (c, e) {
                        b({
                            method: "GET",
                            url: "/api/communitynotebooks",
                            params: {
                                c: "like",
                                cid: d,
                                t: "xhr"
                            },
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).success(function (b) {
                            b ? c(b) : e()
                        }).error(function () {
                            e()
                        })
                    })
                },
                report: function (b, c) {
                    return g.get("/api/communitynotebooks", {
                        c: "report",
                        cid: b,
                        desc: c,
                        t: "xhr"
                    })
                },
                unlike: function (d) {
                    return c(function (c,
                        e) {
                        b({
                            method: "GET",
                            url: "/api/communitynotebooks",
                            params: {
                                c: "unlike",
                                cid: d,
                                t: "xhr"
                            },
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).success(function (b) {
                            b ? c(b) : e()
                        }).error(function () {
                            e()
                        })
                    })
                }
            },
            communityProjects: {
                list: function (d, e, f, g) {
                    var m = {
                        c: "list",
                        page: d,
                        limit: e,
                        type: f
                    },
                        g = g !== void 0 ? g : {},
                        n;
                    for (n in g) m[n] = g[n];
                    return c(function (c, d) {
                        b({
                            method: "GET",
                            url: "/api/communityprojects",
                            params: m,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Cache-Control": "no-cache"
                            }
                        }).success(function (b) {
                            b ?
                                c(b) : d()
                        }).error(function () {
                            d()
                        })
                    })
                },
                like: function (d) {
                    return c(function (c, e) {
                        b({
                            method: "GET",
                            url: "/api/communityprojects",
                            params: {
                                c: "like",
                                cid: d,
                                t: "xhr"
                            },
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).success(function (b) {
                            b ? c(b) : e()
                        }).error(function () {
                            e()
                        })
                    })
                },
                report: function (d, e) {
                    return c(function (c, f) {
                        b({
                            method: "GET",
                            url: "/api/communityprojects",
                            params: {
                                c: "report",
                                cid: d,
                                desc: e,
                                t: "xhr"
                            },
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).success(function (b) {
                            b.success ? c() :
                                f(b.error)
                        }).error(function (b) {
                            f(b.error)
                        })
                    })
                },
                unlike: function (d) {
                    return c(function (c, e) {
                        b({
                            method: "GET",
                            url: "/api/communityprojects",
                            params: {
                                c: "unlike",
                                cid: d,
                                t: "xhr"
                            },
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).success(function (b) {
                            b ? c(b) : e()
                        }).error(function () {
                            e()
                        })
                    })
                }
            },
            deleteLesson: function (d, e, f) {
                return c(function (c, g) {
                    b({
                        method: "POST",
                        url: "/api/deletelesson",
                        data: $.param({
                            id: d,
                            cid: e,
                            lessonid: f.join(",")
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.result ?
                            c() : g()
                    }).error(function () {
                        g()
                    })
                })
            },
            deleteNotebook: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/nb/api/notebooks",
                        data: $.param({
                            c: "delete",
                            id: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.result ? c() : e()
                    }).error(function () {
                        e()
                    })
                })
            },
            deleteProject: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/api/projectdelete",
                        data: $.param({
                            p: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.result ? c() : e()
                    }).error(function () {
                        e()
                    })
                })
            },
            generateResetCode: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/api/generateresetcode",
                        data: $.param({
                            email: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c({
                            userId: b.user_id,
                            resetEmail: b.reset_email
                        }) : e(b.error)
                    }).error(function () {
                        e(null)
                    })
                })
            },
            getActivities: function (d, e) {
                var d = d !== void 0 ? d : null,
                    e = e !== void 0 ? e : null,
                    f = {};
                if (d) f.search = d;
                if (e) f.type = e;
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/api/getactivities",
                        params: f
                    }).success(function (b) {
                        c(b)
                    }).error(function () {
                        d()
                    })
                })
            },
            getActivity: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/home/api/get-activity",
                        params: {
                            s: d
                        }
                    }).success(function (b) {
                        c(b.activity)
                    }).error(function () {
                        e()
                    })
                })
            },
            getBadge: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "GET",
                        url: "/home/api/get-badge",
                        params: {
                            n: d,
                            cat: e
                        }
                    }).success(function (b) {
                        c(b)
                    }).error(function () {
                        f()
                    })
                })
            },
            getBadgesByType: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/home/api/get-badges-by-type",
                        params: {
                            cat: d
                        }
                    }).success(function (b) {
                        c(b.badges_by_type)
                    }).error(function (b,
                        c) {
                        e(c)
                    })
                })
            },
            getBundle: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/home/api/get-bundle",
                        params: {
                            s: d
                        }
                    }).success(function (b) {
                        c(b.bundle)
                    }).error(function () {
                        e()
                    })
                })
            },
            getChildDisplayName: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/api/getchilddisplayname",
                        params: {
                            cid: d
                        }
                    }).success(function (b) {
                        c(b.child_display_name)
                    }).error(function () {
                        e()
                    })
                })
            },
            getSchoolBundle: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/school/api/get-bundle",
                        params: {
                            s: d
                        }
                    }).success(function (b) {
                        c(b.bundle)
                    }).error(function () {
                        e()
                    })
                })
            },
            getClassLesson: function (d, e, f) {
                return c(function (c, g) {
                    b({
                        method: "GET",
                        url: "/myclasses/api/getclasslesson",
                        params: {
                            id: d,
                            lessonid: e,
                            chapterid: f
                        }
                    }).success(function (b) {
                        b.lesson || g();
                        c(b.lesson)
                    }).error(function () {
                        g()
                    })
                })
            },
            getClassLessons: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/myclasses/api/getclasslessons",
                        params: {
                            id: d
                        }
                    }).success(function (b) {
                        c(b)
                    }).error(function () {
                        e()
                    })
                })
            },
            getClassName: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/myclasses/api/getclassname",
                        params: {
                            id: d
                        }
                    }).success(function (b) {
                        c(b.classname)
                    }).error(function () {
                        e()
                    })
                })
            },
            getIsExternal: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/myclasses/api/getisexternal",
                        params: {
                            id: d
                        }
                    }).success(function (b) {
                        c(b.isExternal)
                    }).error(function () {
                        e()
                    })
                })
            },
            getCourses: function (d, e, f) {
                return c(function (c, g) {
                    b({
                        method: "GET",
                        url: "/api/getcourses",
                        params: {
                            category: d,
                            page: e,
                            limit: f
                        }
                    }).success(function (b) {
                        c(b)
                    }).error(function () {
                        g()
                    })
                })
            },
            getCourse: function (d, e) {
                var e = e !== void 0 ? e : null,
                    f = {
                        s: d
                    };
                if (e) f.cid = e;
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/home/api/get-course",
                        params: f
                    }).success(function (b) {
                        c(b.course)
                    }).error(function () {
                        d()
                    })
                })
            },
            getRequiredPlanForCourse: function (d) {
                var e = {
                    courseSlug: d
                };
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/home/api/get-required-plan-for-course",
                        params: e
                    }).success(function (b) {
                        c(b.requiredPlan)
                    }).error(function () {
                        d()
                    })
                })
            },
            getDistrictClasses: function (d, e, f, g) {
                return c(function (c, n) {
                    b({
                        method: "GET",
                        url: "/admin/api/get-district-classes?" + $.param({
                            limit: g,
                            page: f,
                            search: d,
                            sort: e
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "error" ? n(b.status) : c({
                            district_classes: b.district_classes,
                            total: b.total
                        })
                    }).error(function (b, c) {
                        n(c)
                    })
                })
            },
            getNotebookTemplates: function (d) {
                d = d !== void 0 ? d : "default";
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/nb/api/notebooktemplates",
                        params: {
                            id: d
                        },
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        c(b)
                    }).error(function () {
                        e("Problem retrieving notebook templates")
                    })
                })
            },
            getProjectInfo: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/api/projectinfo",
                        data: $.param({
                            p: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.error ?
                            e(b.error) : c(b)
                    }).error(function () {
                        e("Problem loading project info")
                    })
                })
            },
            getProjectTemplates: function (d) {
                d = d !== void 0 ? d : "default";
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "api/templates.aspx",
                        params: {
                            id: d
                        },
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        c(b)
                    }).error(function () {
                        e("Problem retrieving project templates")
                    })
                })
            },
            getSchoolClasses: function () {
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/myclasses/admin/api/get-school-classes",
                        data: $.param({})
                    }).success(function (b) {
                        b.status ==
                            "error" ? d(b.status) : c(b.school_classes)
                    }).error(function (b, c) {
                        d(c)
                    })
                })
            },
            getTeacherAccountType: function () {
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/myclasses/api/getteacheraccounttype"
                    }).success(function (b) {
                        c(b.teacherAccountType)
                    }).error(function () {
                        d()
                    })
                })
            },
            getTrainingVideos: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/api/dashboard/trainingvideos",
                        params: {
                            section: d
                        }
                    }).success(function (b) {
                        c(b)
                    }).error(function () {
                        e()
                    })
                })
            },
            getDistrictSchools: function () {
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/admin/api/get-district-schools",
                        data: $.param({})
                    }).success(function (b) {
                        b.status == "error" ? d(b.status) : c(b.district_schools)
                    }).error(function (b, c) {
                        d(c)
                    })
                })
            },
            getDistrictStudents: function (d, e, f, g) {
                return c(function (c, n) {
                    b({
                        method: "GET",
                        url: "/admin/api/get-district-students?" + $.param({
                            limit: g,
                            page: f,
                            search: d,
                            sort: e
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "error" ? n(b.status) : c({
                            district_students: b.district_students,
                            total: b.total
                        })
                    }).error(function (b,
                        c) {
                        n(c)
                    })
                })
            },
            checkoutPayment: function () {
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/api/store/checkoutpayment",
                        data: $.param({}),
                        cache: f
                    }).success(function (b) {
                        b.status == "error" ? d(b.status) : c(b)
                    }).error(function (b, c) {
                        d(c)
                    })
                })
            },
            getSchoolStudents: function () {
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/myclasses/admin/api/get-school-students",
                        data: $.param({})
                    }).success(function (b) {
                        b.status == "error" ? d(b.status) : c(b.school_students)
                    }).error(function (b, c) {
                        d(c)
                    })
                })
            },
            getDistrictTeachers: function () {
                return c(function (c,
                    d) {
                    b({
                        method: "GET",
                        url: "/admin/api/get-district-teachers",
                        data: $.param({})
                    }).success(function (b) {
                        b.status == "error" ? d(b.status) : c(b.district_teachers)
                    }).error(function (b, c) {
                        d(c)
                    })
                })
            },
            getProjectActivities: function (d, e, f) {
                return c(function (c, g) {
                    b({
                        method: "GET",
                        url: "/api/hour-of-code/getprojectactivities",
                        params: {
                            cat: d,
                            limit: e,
                            skip: f
                        },
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        if (b.status == "success") {
                            b.project_activities || c([]);
                            c(b.project_activities)
                        } else g(b)
                    }).error(function (b) {
                        g(b)
                    })
                })
            },
            getSchoolTeachers: function () {
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/myclasses/admin/api/get-school-teachers",
                        data: $.param({})
                    }).success(function (b) {
                        b.status == "error" ? d(b.status) : c(b.school_teachers)
                    }).error(function (b, c) {
                        d(c)
                    })
                })
            },
            getDontShowAgain: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/api/dontshowagain?name=" + d
                    }).success(function (b) {
                        c(b.value)
                    }).error(function () {
                        e()
                    })
                })
            },
            getExploreCategories: function () {
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/api/getexplorecategories"
                    }).success(function (b) {
                        c(b.categories)
                    }).error(function () {
                        d()
                    })
                })
            },
            getClassGallery: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/api/getclassgallery?id=" + d
                    }).success(function (b) {
                        c(b)
                    }).error(function () {
                        e()
                    })
                })
            },
            getGalleryProjects: function (d, e, f, g, m) {
                var e = e !== void 0 ? e : null,
                    f = f !== void 0 ? f : null,
                    g = g !== void 0 ? g : null,
                    m = m !== void 0 ? m : null,
                    n = {
                        id: d
                    };
                if (e) n.query = e;
                if (f) n.sort = f;
                if (g) n.skip = g;
                if (m) n.limit = m;
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/api/getgalleryprojects?" + $.param(n)
                    }).success(function (b) {
                        c(b)
                    }).error(function () {
                        d()
                    })
                })
            },
            getHomeGalleryInfo: function () {
                return c(function (c,
                    d) {
                    b({
                        method: "GET",
                        url: "/api/gethomegalleryinfo"
                    }).success(function (b) {
                        b.status == "error" ? d(b.error) : c(b.gallery)
                    }).error(function () {
                        d()
                    })
                })
            },
            getLessonPlan: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/myclasses/api/getlessonplan",
                        params: {
                            courseid: d
                        }
                    }).success(function (b) {
                        c(b.lessons)
                    }).error(function () {
                        e()
                    })
                })
            },
            getLicense: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/api/getlicense",
                        params: {
                            licenseid: d
                        }
                    }).success(function (b) {
                        b.error ? e(b.error) : c(b.license)
                    }).error(function () {
                        e()
                    })
                })
            },
            globalFeedback: function (d, e, f, g) {
                return c(function (c, n) {
                    b({
                        method: "POST",
                        url: "/api/globalfeedback",
                        data: $.param({
                            e: d,
                            s: e,
                            m: f,
                            c: g
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function () {
                        c()
                    }).error(function () {
                        n()
                    })
                })
            },
            joinClass: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/api/dashboard/student/joinclass",
                        data: $.param({
                            groupCode: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.error ? e(b.error) : c()
                    }).error(function () {
                        e()
                    })
                })
            },
            redirectExperienceTop: function (b, c) {
                e(function () {
                    var e = "/api/redirectexperiencetop?next=" + d.encodeURIComponent(b);
                    c && (e = e + ("&experienceTop=" + d.encodeURIComponent(c)));
                    d.location = e
                })
            },
            getAddUserFlash: function () {
                return g.get("/api/getadduserflash")
            },
            getTeacherGuideByChapterId: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/api/teacher-guides/get-teacher-guide-by-chapter-id?chapterid=" + d
                    }).success(function (b) {
                        c(b.teacher_guide)
                    }).error(function () {
                        e()
                    })
                })
            },
            getUserBadges: function (d, e, f, g) {
                return c(function (c,
                    n) {
                    b({
                        method: "GET",
                        url: "/home/api/get-user-badges",
                        params: {
                            cat: d,
                            m: e,
                            me: f,
                            ml: g
                        }
                    }).success(function (b) {
                        c(b.badges)
                    }).error(function () {
                        n()
                    })
                })
            },
            getMyEmail: function () {
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/api/getmyemail"
                    }).success(function (b) {
                        b.error && d(b.error);
                        c(b.email)
                    }).error(function () {
                        d()
                    })
                })
            },
            getMyParentEmail: function () {
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/api/getmyparentemail"
                    }).success(function (b) {
                        b.error && d(b.error);
                        c(b.email)
                    }).error(function () {
                        d()
                    })
                })
            },
            getPlans: function () {
                return c(function (c,
                    d) {
                    b({
                        method: "GET",
                        url: "/api/getsubscriptionplans"
                    }).success(function (b) {
                        b.error && d(b.error);
                        c(b.subscription_plans)
                    }).error(function () {
                        d()
                    })
                })
            },
            getDiscounts: function () {
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/api/getdiscounts"
                    }).success(function (b) {
                        b.error && d(b.error);
                        c(b)
                    }).error(function () {
                        d()
                    })
                })
            },
            importCourse: function (d, e, f, g) {
                return c(function (c, n) {
                    b({
                        method: "POST",
                        url: "/api/importcourse",
                        data: $.param({
                            assetid: e,
                            classid: d,
                            licenseid: f,
                            voucher_licenseid: g
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status ==
                            "success" ? c(b) : n(b.error)
                    }).error(function () {
                        n("Problem importing courses")
                    })
                })
            },
            likeProject: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/api/likeproject",
                        data: $.param({
                            id: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.result == false && e(b.error);
                        b.status == "error" && e(b.error);
                        c()
                    }).error(function () {
                        e("Could not like project. Please try again.")
                    })
                })
            },
            unlikeProject: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/api/unlikeproject",
                        data: $.param({
                            id: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.result == false && e(b.error);
                        b.status == "error" && e(b.error);
                        c()
                    }).error(function () {
                        e("Could not like project. Please try again.")
                    })
                })
            },
            likeProjectActivity: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/hour-of-code/api/likeprojectactivity",
                        params: {
                            id: d
                        },
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c() : e(b)
                    }).error(function (b) {
                        e(b)
                    })
                })
            },
            unlikeProjectActivity: function (d) {
                return c(function (c,
                    e) {
                    b({
                        method: "GET",
                        url: "/hour-of-code/api/unlikeprojectactivity",
                        params: {
                            id: d
                        },
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c() : e(b)
                    }).error(function (b) {
                        e(b)
                    })
                })
            },
            updateParent: function (d, e, f) {
                return c(function (c, g) {
                    b({
                        method: "GET",
                        url: "/api/updateparent",
                        params: {
                            child_username: d,
                            child_password: e,
                            parentid: f
                        },
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c(b.childid) : g(b.error)
                    }).error(function (b) {
                        g(b)
                    })
                })
            },
            login: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "POST",
                        url: "/api/login",
                        data: $.param({
                            u: d,
                            p: e
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c(b.userinfo) : f(b.error)
                    }).error(function () {
                        f("Could not log-in, please try again")
                    })
                })
            },
            logMessage: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/myclasses/api/logMessage",
                        data: $.param({
                            message: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status ==
                            "success" ? c() : e(b.error)
                    }).error(function () {
                        e("Could not log message, please try again")
                    })
                })
            },
            mobileExplore: function (d, e, f, g) {
                g = g !== void 0 ? g : null;
                return c(function (c, n) {
                    b({
                        method: "POST",
                        url: "/api/mobileexplore",
                        params: {
                            cat: d,
                            page: e,
                            limit: f,
                            templates: g
                        }
                    }).success(function (b) {
                        c(b)
                    }).error(function () {
                        n()
                    })
                })
            },
            mobileChildList: function () {
                return c(function (c, d) {
                    b({
                        method: "POST",
                        url: "/api/mobilechildlist"
                    }).success(function (b) {
                        c(b)
                    }).error(function () {
                        d()
                    })
                })
            },
            mobileClassList: function (d) {
                d = d !== void 0 ? d : null;
                return c(function (c, e) {
                    var f = {};
                    if (d) f.id = d;
                    b({
                        method: "POST",
                        url: "/api/mobileclasslist",
                        params: f
                    }).success(function (b) {
                        c(b)
                    }).error(function () {
                        e()
                    })
                })
            },
            mobileFavoriteList: function (d, e, f, g, m) {
                return c(function (c, q) {
                    var p = {
                        page: f,
                        limit: g
                    };
                    d && (p.id = d);
                    e && (p.cid = e);
                    m && (p.q = m);
                    b({
                        method: "POST",
                        url: "/api/mobilefavoritelist",
                        params: p
                    }).success(function (b) {
                        c({
                            list: b.list,
                            current: b.current,
                            total: b.total,
                            username: b.username
                        })
                    }).error(function (b) {
                        q(b)
                    })
                })
            },
            mobileProjectList: function (d, e, f, g, m, n, q, p) {
                return c(function (c,
                    r) {
                    var o = {
                        page: f,
                        limit: g
                    };
                    d && (o.id = d);
                    e && (o.cid = e);
                    m && (o.q = m);
                    n && (o.t = n);
                    q != null && (o.pub = q ? "1" : "0");
                    p = p !== void 0 ? p : {};
                    for (var t in p) o[t] = p[t];
                    b({
                        method: "POST",
                        url: "/api/mobileprojectlist",
                        params: o
                    }).success(function (b) {
                        c(b)
                    }).error(function (b) {
                        r(b)
                    })
                })
            },
            modalShare: function (b, c) {
                return g.get("/api/components/modalshare", {
                    assetId: b,
                    assetType: c !== void 0 ? c : "project"
                })
            },
            moveClass: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "POST",
                        url: "/myclasses/admin/api/move-class",
                        data: $.param({
                            id: d,
                            classid: e
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.error && f(b.error);
                        c(b.message)
                    }).error(function () {
                        f()
                    })
                })
            },
            orderLessons: function (b, d) {
                return c(function (c, e) {
                    $.ajax({
                        url: "/api/orderlessons",
                        type: "POST",
                        data: {
                            classid: b,
                            lessonids: JSON.stringify(d)
                        },
                        success: function (b) {
                            c(b)
                        },
                        error: function () {
                            e()
                        }
                    })
                })
            },
            payOrder: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "POST",
                        url: "/api/orders/pay",
                        data: $.param({
                            method: d,
                            options: e
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status ==
                            "error" && f(b.error);
                        c(b.order)
                    }).error(function () {
                        f()
                    })
                })
            },
            rateActivity: function (d, e, f) {
                return c(function (c, g) {
                    b({
                        method: "POST",
                        url: "/api/activityrate",
                        data: $.param({
                            activityType: d,
                            activityId: e,
                            rating: f
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.error ? g(b.error) : c()
                    }).error(function (b) {
                        g(b)
                    })
                })
            },
            removeFromGallery: function (d, e, f, g) {
                return c(function (c, n) {
                    b({
                        method: "POST",
                        url: "/api/removefromgallery",
                        data: $.param({
                            c: d,
                            classid: e,
                            pid: f,
                            gid: g
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.error ?
                            n(b.error) : c()
                    }).error(function (b) {
                        n(b)
                    })
                })
            },
            removeSchool: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/admin/api/remove-school",
                        data: $.param({
                            id: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.error ? e(b.error) : c()
                    }).error(function (b) {
                        e(b)
                    })
                })
            },
            removeLesson: function (d, e, f) {
                return c(function (c, g) {
                    b({
                        method: "POST",
                        url: "/api/removelesson",
                        data: $.param({
                            id: d,
                            classid: e,
                            lessonid: f
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.result ?
                            c() : b.error ? g(b.error) : g()
                    }).error(function () {
                        g()
                    })
                })
            },
            removeTeacher: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/myclasses/admin/api/remove-teacher",
                        data: $.param({
                            id: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.error ? e(b.error) : c()
                    }).error(function (b) {
                        e(b)
                    })
                })
            },
            reportProject: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/api/reportproject",
                        data: $.param({
                            pid: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.error ?
                            e(b.error) : c()
                    }).error(function (b) {
                        e(b)
                    })
                })
            },
            resendParentVerificationEmail: function (b, c, d, e) {
                var d = d !== void 0 ? d : null,
                    e = e !== void 0 ? e : null,
                    f = {};
                if (b) f.userId = b;
                if (d) f.fname = d;
                if (e) f.parentName = e;
                if (c) f.parentEmail = c;
                return g.post("/api/resendparentverificationemail", f)
            },
            resendVerificationEmail: function (d, e) {
                var f = {
                    id: d,
                    email: e
                };
                return c(function (c, d) {
                    b({
                        method: "POST",
                        url: "/api/resendverificationemail",
                        data: $.param(f),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status ==
                            "success" ? c() : d(b.error)
                    }).error(function () {
                        d("Could not resend, please check and try again")
                    })
                })
            },
            addLessonAssign: function (d, e, f) {
                var g = {
                    c: "assign",
                    lessonid: d,
                    classid: e,
                    courseid: f !== void 0 ? f : null
                };
                return c(function (c, d) {
                    b({
                        method: "POST",
                        url: "/api/addlesson-assign",
                        data: $.param(g),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        if (b.status == "error") d();
                        else {
                            b.list && b.list.length > 0 && b.list.forEach(function (b) {
                                postAssignment(b.classid, b.chapterid, b.lessonid, b.externalid,
                                    b.lesson_number, b.title, b.description, true)
                            });
                            c(b)
                        }
                    }).error(function () {
                        d()
                    })
                })
            },
            saveLessonAssign: function (d, e) {
                var f = {
                    c: "assign",
                    lessonid: d,
                    to: e
                };
                return c(function (c, d) {
                    b({
                        method: "POST",
                        url: "/api/savelesson",
                        data: $.param(f),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        if (b.error) d();
                        else {
                            b.list && b.list.length > 0 && b.list.forEach(function (b) {
                                postAssignment(b.classid, b.chapterid, b.lessonid, b.externalid, b.lesson_number, b.title, b.description, false)
                            });
                            c(b)
                        }
                    }).error(function () {
                        d()
                    })
                })
            },
            saveImage: function (d, e) {
                var f = {
                    c: "save",
                    i: e,
                    k: d
                };
                return c(function (c, d) {
                    b({
                        method: "POST",
                        url: "/api/image",
                        data: $.param(f),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.error ? d() : c(b)
                    }).error(function () {
                        d()
                    })
                })
            },
            saveLessonSend: function (d, e, f, g, m, n, q) {
                var n = n !== void 0 ? n : null,
                    q = q !== void 0 ? q : null,
                    p = {
                        c: "send",
                        name: d,
                        desc: e,
                        to: m,
                        watch: JSON.stringify(f),
                        "do": JSON.stringify(g)
                    };
                n && (p.message = n);
                q && (p.tags = JSON.stringify(q));
                return c(function (c, d) {
                    b({
                        method: "POST",
                        url: "/api/savelesson",
                        data: $.param(p),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        if (b.error) d();
                        else {
                            b.list && b.list.length > 0 && b.list.forEach(function (b) {
                                postAssignment(b.classid, b.chapterid, b.lessonid, b.externalid, b.lesson_number, b.title, b.description, true)
                            });
                            c(b)
                        }
                    }).error(function () {
                        d()
                    })
                })
            },
            savePreference: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "POST",
                        url: "/api/savepreference",
                        data: $.param({
                            name: d,
                            value: e
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status ==
                            "success" ? c() : f(b.error)
                    }).error(function () {
                        f("Could not save preference")
                    })
                })
            },
            saveTurnIn: function (d, e, f, g, m) {
                return c(function (c, q) {
                    b({
                        method: "POST",
                        url: "/myclasses/api/saveturnin",
                        data: $.param({
                            id: d,
                            classid: e,
                            lessonid: f,
                            studentid: g,
                            submissionid: m
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c() : q(b.error)
                    }).error(function () {
                        q("Could not save turn in")
                    })
                })
            },
            saveUserFile: function (d, e, f) {
                return c(function (c, g) {
                    b({
                        method: "POST",
                        url: "/api/system-media/save-user-file",
                        data: $.param({
                            name: d,
                            content: e,
                            contentType: f
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c(b.file_id) : g(b.error)
                    }).error(function () {
                        g("Could not save file")
                    })
                })
            },
            searchClassroom: function (d) {
                return c(function (c, e) {
                    b.get("/api/searchclassroom", {
                        params: {
                            q: d
                        }
                    }).success(c).error(e)
                })
            },
            searchSchool: function (d) {
                return c(function (c, e) {
                    b.get("/api/searchschool", {
                        params: {
                            q: d,
                            i: "true"
                        }
                    }).success(c).error(e)
                })
            },
            sendMinecraftAssetEmail: function (d, e,
                f, g, m, n) {
                var q = {
                    id: d
                };
                if (e !== void 0) q.name = e;
                if (f !== void 0) q.email = f;
                if (g !== void 0) q.code = g;
                if (m !== void 0) q.url = m;
                if (n !== void 0) q.image = n;
                return c(function (c, d) {
                    b({
                        method: "POST",
                        url: "api/sendminecraftassetemail.aspx",
                        data: $.param(q),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b == "OK" ? c() : d(b)
                    }).error(function (b) {
                        d(b)
                    })
                })
            },
            sendParentJoinRequest: function (d, e) {
                return c(function (c, f) {
                    b({
                        url: "/api/sendparentjoinrequest",
                        method: "POST",
                        data: $.param({
                            courseSlug: e,
                            parentEmail: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c() : f(b.error)
                    }).error(function () {
                        f()
                    })
                })
            },
            sendParentPermissionRequest: function (d, e) {
                return c(function (c, f) {
                    b({
                        url: "/api/sendparentpermissionrequest",
                        method: "POST",
                        data: $.param({
                            courseSlug: e,
                            parentEmail: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c() : f(b.error)
                    }).error(function () {
                        f()
                    })
                })
            },
            sendParentSubscriptionRequest: function (d, e, f) {
                return c(function (c,
                    g) {
                    b({
                        url: "/api/sendparentsubscriptionrequest",
                        method: "POST",
                        data: $.param({
                            courseSlug: e,
                            parentEmail: d,
                            requiredPlanId: f
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c() : g(b.error)
                    }).error(function () {
                        g()
                    })
                })
            },
            sendNotebookEmail: function (b, c, d, e, f) {
                b = {
                    p: b
                };
                if (c !== void 0) b.name = c;
                if (d !== void 0) b.email = d;
                if (e !== void 0) b.code = e;
                if (f !== void 0) b.url = f;
                return g.post("api/sendnotebookemail.aspx", b)
            },
            sendProjectEmail: function (d, e, f, g, m) {
                var n = {
                    p: d
                };
                if (e !== void 0) n.name = e;
                if (f !== void 0) n.email = f;
                if (g !== void 0) n.code = g;
                if (m !== void 0) n.url = m;
                return c(function (c, d) {
                    b({
                        method: "POST",
                        url: "api/sendprojectemail.aspx",
                        data: $.param(n),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b == "OK" ? c() : d(b)
                    }).error(function (b) {
                        d(b)
                    })
                })
            },
            setDontShowAgain: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "POST",
                        url: "/api/dontshowagain",
                        data: $.param({
                            name: d,
                            value: e
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status ==
                            "success" ? c() : f(b.error)
                    }).error(function () {
                        f(null)
                    })
                })
            },
            showCaseName: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "POST",
                        url: "/home/api/showcasename",
                        data: $.param({
                            id: d,
                            name: e
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function () {
                        c()
                    }).error(function () {
                        f(null)
                    })
                })
            },
            showCaseDesc: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "POST",
                        url: "/home/api/showcasedesc",
                        data: $.param({
                            id: d,
                            desc: e
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function () {
                        c()
                    }).error(function () {
                        f(null)
                    })
                })
            },
            sylvan: {
                convergenceAuthenticateUser: function (d, e) {
                    return c(function (c, f) {
                        b({
                            method: "POST",
                            url: "/partners/sylvan/api/convergence-authenticate-user",
                            data: $.param({
                                u: d,
                                p: e
                            }),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).success(function (b) {
                            b.convergence_authenticate_user_result && b.convergence_authenticate_user_result.IsValidUser ? c(b.convergence_authenticate_user_result) : f(b.error)
                        }).error(function () {
                            f("Could not log-in, please try again")
                        })
                    })
                },
                loginCenter: function (d) {
                    return c(function (c,
                        e) {
                        b({
                            method: "POST",
                            url: "/partners/sylvan/api/login-center",
                            params: {
                                center_number: d
                            },
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).success(function (b) {
                            b.status == "success" ? c() : e(b.error)
                        }).error(function () {
                            $scope.error = "Could not log-in, please try again"
                        })
                    })
                }
            },
            tagProjectActivity: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "GET",
                        url: "/hour-of-code/api/tagprojectactivity",
                        params: {
                            id: d,
                            tag: e
                        },
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status ==
                            "success" ? c(b.tags) : f(b.error)
                    }).error(function (b) {
                        f(b.error)
                    })
                })
            },
            unassignLesson: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "GET",
                        url: "/api/unassignlesson?" + $.param({
                            cid: d,
                            lid: e
                        })
                    }).success(function (b) {
                        b.result ? c() : f()
                    }).error(function () {
                        f("Problem unassigning lesson")
                    })
                })
            },
            updateChildPassword: function (d, e, f) {
                return c(function (c, g) {
                    b({
                        method: "POST",
                        url: "/home/api/updatechildpassword",
                        data: $.param({
                            cid: d,
                            p: e,
                            cp: f
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status ==
                            "error" ? g(b.error) : c()
                    }).error(function () {
                        g("Problem updating password")
                    })
                })
            },
            updateMyParentEmail: function (d) {
                return c(function (c, e) {
                    b({
                        method: "POST",
                        url: "/home/api/updatemyparentemail",
                        data: $.param({
                            parentEmail: d
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "error" ? e(b.error) : c()
                    }).error(function () {
                        e("Problem updating parent email")
                    })
                })
            },
            updateSubscription: function (d, e) {
                var f = $.param({
                    id: d
                }) + "&" + $.param(e);
                return c(function (c, d) {
                    b({
                        method: "POST",
                        url: "/forms/subscribe",
                        data: f,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.error ? d(b.error) : c(b.subscription_id)
                    }).error(function (b) {
                        d(b)
                    })
                })
            },
            updateTeacherGuideHtml: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "POST",
                        url: "/api/teacher-guides/update-teacher-guide-html",
                        data: $.param({
                            chapterid: d,
                            html: e
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "error" ? f(b.error) : c(b.teacher_guide)
                    }).error(function () {
                        f("Problem updating teacher guide")
                    })
                })
            },
            validateEmail: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/api/validateemail?email=" + d
                    }).success(function (b) {
                        b.is_valid ? c() : e()
                    })
                })
            },
            validateResetCode: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "POST",
                        url: "/api/validateresetcode",
                        data: $.param({
                            id: d,
                            reset_code: e
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c() : f(b.error)
                    }).error(function () {
                        f()
                    })
                })
            },
            validateUsername: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/api/validateusername",
                        params: {
                            u: d
                        }
                    }).success(function (b) {
                        b == "true" ? c() : e()
                    })
                })
            },
            notebookCommunityList: function (d, e, f, g) {
                return c(function (c, n) {
                    b({
                        method: "POST",
                        url: "/nb/api/notebooks",
                        data: $.param({
                            c: "list",
                            page: d,
                            limit: e,
                            type: f,
                            query: g
                        }),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        c({
                            list: b.list,
                            current: b.current,
                            total: b.total,
                            username: b.username
                        })
                    }).error(function (b) {
                        n(b)
                    })
                })
            },
            verifyUsernamePassword: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "POST",
                        url: "/api/verifyusernamepassword",
                        params: {
                            u: d,
                            p: e
                        }
                    }).success(function (b) {
                        b.status == "error" && f(b.error);
                        b.userId || f("Username and password do not match");
                        c(b.userId)
                    }).error(function () {
                        f("Error checking username and password")
                    })
                })
            },
            minecraftAssetsList: function (b, c, d, e, f) {
                var f = f !== void 0 ? f : {},
                    b = {
                        skip: b,
                        limit: c,
                        type: d,
                        query: e
                    },
                    n;
                for (n in f) b[n] = f[n];
                return g.get("/api/dashboard/student/minecraft/assets", b)
            },
            communityAssetsList: function (b, c, d, e) {
                return g.get("/api/dashboard/student/community/assets", {
                    skip: b,
                    limit: c,
                    type: d,
                    query: e,
                    ignoreLikes: false,
                    markViewed: true
                })
            },
            modsCommunityList: function (d, e, f, g, m) {
                return c(function (c, q) {
                    var p = {
                        c: "list",
                        page: d,
                        limit: e,
                        type: f,
                        query: g
                    };
                    m = m !== void 0 ? m : {};
                    for (var s in m) p[s] = m[s];
                    b({
                        method: "GET",
                        url: "/minecraft/api/communitymods",
                        params: p,
                        headers: {
                            "Cache-Control": "no-cache"
                        }
                    }).success(function (b) {
                        c({
                            list: b.list,
                            current: b.current,
                            total: b.total,
                            username: b.username,
                            has_server: b.has_server,
                            has_verified_parent: b.has_verified_parent
                        })
                    }).error(function (b) {
                        q(b)
                    })
                })
            },
            skinsCommunityList: function (d, e, f, g, m) {
                return c(function (c,
                    q) {
                    var p = {
                        c: "list",
                        page: d,
                        limit: e,
                        type: f,
                        query: g
                    };
                    m = m !== void 0 ? m : {};
                    for (var s in m) p[s] = m[s];
                    b({
                        method: "GET",
                        url: "/minecraft/api/communityskins",
                        params: p,
                        headers: {
                            "Cache-Control": "no-cache"
                        }
                    }).success(function (b) {
                        c({
                            list: b.list,
                            current: b.current,
                            total: b.total,
                            username: b.username,
                            has_server: b.has_server,
                            has_verified_parent: b.has_verified_parent
                        })
                    }).error(function (b) {
                        q(b)
                    })
                })
            },
            itemsCommunityList: function (d, e, f, g, m) {
                return c(function (c, q) {
                    var p = {
                        c: "list",
                        page: d,
                        limit: e,
                        type: f,
                        query: g
                    };
                    m = m !== void 0 ? m : {};
                    for (var s in m) p[s] = m[s];
                    b({
                        method: "GET",
                        url: "/minecraft/api/communityitems",
                        params: p,
                        headers: {
                            "Cache-Control": "no-cache"
                        }
                    }).success(function (b) {
                        c({
                            list: b.list,
                            current: b.current,
                            total: b.total,
                            username: b.username,
                            has_server: b.has_server,
                            has_verified_parent: b.has_verified_parent
                        })
                    }).error(function (b) {
                        q(b)
                    })
                })
            },
            blocksCommunityList: function (d, e, f, g, m) {
                return c(function (c, q) {
                    var p = {
                        c: "list",
                        page: d,
                        limit: e,
                        type: f,
                        query: g
                    };
                    m = m !== void 0 ? m : {};
                    for (var s in m) p[s] = m[s];
                    b({
                        method: "GET",
                        url: "/minecraft/api/communityblocks",
                        params: p,
                        headers: {
                            "Cache-Control": "no-cache"
                        }
                    }).success(function (b) {
                        c({
                            list: b.list,
                            current: b.current,
                            total: b.total,
                            username: b.username,
                            has_server: b.has_server,
                            has_verified_parent: b.has_verified_parent
                        })
                    }).error(function (b) {
                        q(b)
                    })
                })
            },
            entityCommunityList: function (d, e, f, g, m) {
                return c(function (c, q) {
                    var p = {
                        c: "list",
                        page: d,
                        limit: e,
                        type: f,
                        query: g
                    };
                    m = m !== void 0 ? m : {};
                    for (var s in m) p[s] = m[s];
                    b({
                        method: "GET",
                        url: "/minecraft/api/communityentities",
                        params: p,
                        headers: {
                            "Cache-Control": "no-cache"
                        }
                    }).success(function (b) {
                        c({
                            list: b.list,
                            current: b.current,
                            total: b.total,
                            username: b.username,
                            has_server: b.has_server,
                            has_verified_parent: b.has_verified_parent
                        })
                    }).error(function (b) {
                        q(b)
                    })
                })
            },
            getDashboardActivityLogEntries: function (b) {
                var c = {};
                if (b) c.id = b;
                return g.get("/api/dashboard/activitylogentries", c)
            },
            getDashboardBadges: function (d, e) {
                var f = {};
                if (d) f.id = d;
                e !== void 0 && (f.showRecent = e);
                return c(function (c, d) {
                    b({
                        cache: false,
                        method: "GET",
                        url: "/api/dashboard/badges",
                        params: f
                    }).success(function (b) {
                        c(b)
                    }).error(function (b) {
                        d(b)
                    })
                })
            },
            getDashboardCertificates: function (d) {
                var e = {};
                if (d) e.id = d;
                return c(function (c, d) {
                    b({
                        cache: false,
                        method: "GET",
                        url: "/api/dashboard/certificates",
                        params: e
                    }).success(function (b) {
                        b.status != "success" ? d(b.error) : c(b)
                    }).error(function (b) {
                        d(b)
                    })
                })
            },
            getDashboardConcepts: function (d) {
                var e = {};
                if (d) e.id = d;
                return c(function (c, d) {
                    b({
                        cache: false,
                        method: "GET",
                        url: "/api/dashboard/concepts",
                        params: e
                    }).success(function (b) {
                        b.status != "success" ? d(b.error) : c(b)
                    }).error(function (b) {
                        d(b)
                    })
                })
            },
            getDashboardEditProfile: function () {
                return c(function (c, d) {
                    b({
                        cache: false,
                        method: "GET",
                        url: "/api/dashboard/editprofile"
                    }).success(function (b) {
                        c(b.result)
                    }).error(function (b) {
                        d(b)
                    })
                })
            },
            getLaunchpadActivities: function () {
                return g.get("/api/dashboard/student/launchpadactivities")
            },
            studentDashboardMarkMissionsRewardsShown: function (b) {
                b = {
                    missionIds: b.join(";")
                };
                return g.post("/api/dashboard/student/markmissionsrewardsshown", b)
            },
            studentDashboardGetCompletedMissions: function () {
                return g.get("/api/dashboard/student/getcompletedmissions")
            },
            studentDashboardGetCompletedMissionsWithRewardsNotShown: function () {
                return g.get("/api/dashboard/student/getcompletedmissionswithrewardsnotshown")
            },
            studentDashboardExtendSession: function () {
                return g.get("/api/dashboard/student/extendsession")
            },
            getStudentDashboardUserMeta: function (b, c) {
                return g.get("/api/dashboard/student/getusermeta", {
                    key: b,
                    value: c
                })
            },
            setStudentDashboardUserMeta: function (b, c) {
                return g.post("/api/dashboard/student/setusermeta", {
                    key: b,
                    value: c
                })
            },
            getUser: function () {
                return g.get("/api/user")
            },
            getStudentDashboardUser: function () {
                return g.get("/api/dashboard/student/user")
            },
            getStudentDashboardRewards: function () {
                return g.get("/api/dashboard/student/rewards")
            },
            getStudentDashboardLaunchpad: function () {
                return g.get("/api/dashboard/student/launchpad")
            },
            getStudentDashboardLearn: function () {
                return g.get("/api/dashboard/student/learn")
            },
            getStudentDashboardClasses: function () {
                return c(function (c, d) {
                    b({
                        cache: false,
                        method: "GET",
                        url: "/api/dashboard/student/classes"
                    }).success(function (b) {
                        c({
                            classes: b.classes,
                            externalStudentId: b.externalStudentId,
                            currentClassId: b.currentClassId
                        })
                    }).error(function (b) {
                        d(b)
                    })
                })
            },
            getStudentDashboardClassGallery: function (d) {
                return c(function (c,
                    e) {
                    b({
                        cache: false,
                        method: "GET",
                        url: "/api/dashboard/student/classgallery?id=" + d
                    }).success(function (b) {
                        b.status != "success" && e(b.error);
                        c(b.gallery)
                    }).error(function (b) {
                        e(b)
                    })
                })
            },
            getStudentDashboardCommunityFeaturedProjects: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "GET",
                        url: "/api/dashboard/student/community/featuredprojects?page=" + d + "&limit=" + e,
                        headers: {
                            "Cache-Control": "no-cache"
                        }
                    }).success(function (b) {
                        b.status != "success" && f(b.error);
                        c({
                            list: b.list
                        })
                    }).error(function (b) {
                        f(b)
                    })
                })
            },
            getStudentDashboardCourses: function (b,
                c) {
                var d = {
                    grouped: b !== void 0 ? b : false
                },
                    c = c !== void 0 ? c : {},
                    e;
                for (e in c) d[e] = c[e];
                return g.get("/api/dashboard/student/courses", d)
            },
            getStudentDashboardDailyMissions: function () {
                return c(function (c, d) {
                    b({
                        cache: false,
                        method: "GET",
                        url: "/api/dashboard/student/dailymissions"
                    }).success(function (b) {
                        c({
                            list: b.list
                        })
                    }).error(function (b) {
                        d(b)
                    })
                })
            },
            getStudentDashboardDiys: function () {
                return g.get("/api/dashboard/student/diys")
            },
            getStudentDashboardLessons: function (d) {
                return c(function (c, e) {
                    b({
                        cache: false,
                        method: "GET",
                        url: "/api/dashboard/student/lessons?classId=" + d
                    }).success(function (b) {
                        c({
                            list: b.list
                        })
                    }).error(function (b) {
                        e(b)
                    })
                })
            },
            getStudentDashboardMinecraftCourses: function () {
                return c(function (c, d) {
                    b({
                        cache: false,
                        method: "GET",
                        url: "/api/dashboard/student/minecraft/courses"
                    }).success(function (b) {
                        c({
                            list: b.list
                        })
                    }).error(function (b) {
                        d(b)
                    })
                })
            },
            getStudentDashboardMinecraftServer: function () {
                return g.get("/api/dashboard/student/minecraft/server")
            },
            getStudentDashboardPuzzles: function () {
                return g.get("/api/dashboard/student/puzzles")
            },
            getStudentDashboardProfile: function () {
                return g.get("/api/dashboard/student/profile")
            },
            getStudentDashboardVerificationBanner: function () {
                return g.get("/api/dashboard/student/verificationbanner")
            },
            getStudentDashboardGoogleApi: function () {
                return c(function (c, d) {
                    b({
                        cache: false,
                        method: "GET",
                        url: "/api/dashboard/student/googleapi"
                    }).success(function (b) {
                        b.status != "success" ? d(b.error) : c(b)
                    }).error(function (b) {
                        d(b)
                    })
                })
            },
            getStudentDashboardCourseLessons: function (d) {
                return c(function (c, e) {
                    b({
                        cache: false,
                        method: "GET",
                        url: "/api/dashboard/student/courselessons",
                        params: {
                            courseid: d
                        }
                    }).success(function (b) {
                        b.status != "success" ? e(b.error) : c(b)
                    }).error(function (b) {
                        e(b)
                    })
                })
            },
            getStudentDashboardProfileWizard: function (b) {
                return g.get("/api/dashboard/student/profilewizard", {
                    ignoreCache: b
                })
            },
            getParentDashboardSubscriptions: function (b) {
                return g.get("/api/dashboard/parent/subscriptions", {
                    ignoreCache: b
                })
            },
            getParentDashboardPayments: function (b) {
                return g.get("/api/dashboard/parent/payments", {
                    ignoreCache: b
                })
            },
            getParentDashboardManageSubscriptionData: function (b) {
                return g.get("/api/dashboard/parent/getmanagesubscriptiondata", {
                    subscription_id: b
                })
            },
            pauseSubscription: function (b) {
                return g.post("/api/dashboard/parent/pausesubscription", {
                    subscription_id: b
                })
            },
            subscriptionFeedback: function (b, c, d) {
                return g.post("/api/dashboard/parent/subscriptionfeedback", {
                    subscription_id: b,
                    reason: c,
                    comments: d
                })
            },
            resumeSubscription: function (b) {
                return g.post("/api/dashboard/parent/resumesubscription", {
                    subscription_id: b
                })
            },
            studentDashboardProfileUpdateUsername: function (b) {
                return g.post("/api/dashboard/student/profile/updateusername", {
                    username: b
                })
            },
            upgradeSubscription: function (b, c) {
                return g.post("/api/dashboard/parent/upgradesubscription", {
                    subscription_id: b,
                    upgrade_plan_id: c
                })
            },
            previewUpgradeSubscription: function (b, c) {
                return g.post("/api/dashboard/parent/previewupgradesubscription", {
                    subscription_id: b,
                    upgrade_plan_id: c
                })
            },
            hocSendCertificate: function (d, e) {
                return c(function (c, f) {
                    b({
                        method: "GET",
                        url: "/hour-of-code/api/sendcertificate",
                        params: {
                            ct: d,
                            email: e,
                            json: true
                        },
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status ==
                            "success" ? c(b) : f(b.error)
                    }).error(function (b) {
                        f(b.error)
                    })
                })
            },
            hocGetStatus: function () {
                return c(function (c, d) {
                    b({
                        method: "GET",
                        url: "/hour-of-code/api/getstatus",
                        params: {},
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status == "success" ? c(b) : d(b.error)
                    }).error(function (b) {
                        d(b.error)
                    })
                })
            },
            hocPersonalizeCertificate: function (d) {
                return c(function (c, e) {
                    b({
                        method: "GET",
                        url: "/hour-of-code/api/personalizecertificate",
                        params: {
                            name: d
                        },
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).success(function (b) {
                        b.status ==
                            "success" ? c(b) : e(b.error)
                    }).error(function (b) {
                        e(b.error)
                    })
                })
            }
        }
    }])
})();
(function () {
    angular.module("common").factory("requests", ["$http", "$q", function (b, c) {
        function d(d, f, g, h, j) {
            j = j !== void 0 ? j : false;
            return c(function (c, l) {
                var m = {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    cache: h !== void 0 ? h : false,
                    method: d,
                    url: f,
                    params: g !== void 0 ? g : {}
                };
                if (d == "GET") {
                    m["Content-Type"] = "application/x-www-form-urlencoded";
                    m.params = g !== void 0 ? g : {}
                } else if (d == "POST") {
                    m["Content-Type"] = "application/json";
                    m.data = JSON.stringify(g !== void 0 ? g : {})
                }
                b(m).success(function (b) {
                    if (j) return c(b);
                    b.status == "success" ? c(b) : b.data && b.data.status == "error" ? l(b.data.error) : l(b.error)
                }).error(function (b) {
                    l(b)
                })
            })
        }
        return {
            get: function (b, c, g, h) {
                return d("GET", b, c, g, h)
            },
            post: function (b, c, g, h) {
                return d("POST", b, c, g, h)
            },
            request: function (b, c, g, h, j) {
                return d(b, c, g, h, j)
            }
        }
    }])
})();
(function () {
    angular.module("common").directive("autoFocus", ["$timeout", function (b) {
        return {
            restrict: "AC",
            link: function (c, d) {
                b(function () {
                    d[0].focus()
                }, 0)
            }
        }
    }])
})();
(function () {
    angular.module("common").factory("avatar", [function () {
        return {
            getAll: function () {
                return ["/image/avatar/girl-native.png", "/image/avatar/girl-school.png", "/image/avatar/girl-trooper.png", "/image/avatar/girl-princess.png", "/image/avatar/girl-witch.png", "/image/avatar/boy-cowboy.png", "/image/avatar/boy-prince.png", "/image/avatar/boy-regular.png", "/image/avatar/green-zombie.png", "/image/avatar/pink-dragon.png", "/image/avatar/red-troll.png", "/image/avatar/codey.png"]
            },
            getLocked: function () {
                return ["/image/avatar/blue-hawk.png",
                    "/image/avatar/blue-trooper.png", "/image/avatar/green-dragon.png", "/image/avatar/purple-troll.png", "/image/avatar/knight-troll.png", "/image/avatar/yellow-troll.png", "/image/avatar/boy-adventurer.png", "/image/avatar/boy-cop.png", "/image/avatar/boy-native.png", "/image/avatar/boy-ninja.png", "/image/avatar/boy-pirate.png", "/image/avatar/boy-superhero.png", "/image/avatar/girl-adventurer.png", "/image/avatar/girl-fairy.png", "/image/avatar/girl-mummy.png", "/image/avatar/girl-pirate.png", "/image/avatar/girl-robinhood.png",
                    "/image/avatar/girl-superhero.png", "/image/avatar/troll-ant.png", "/image/avatar/troll-antbot.png", "/image/avatar/troll-bat.png", "/image/avatar/troll-block-head.png", "/image/avatar/troll-disgust.png", "/image/avatar/troll-fly-guy.png", "/image/avatar/troll-flybot.png", "/image/avatar/troll-happy-girl.png", "/image/avatar/troll-mischief.png", "/image/avatar/troll-ponytail-girl.png", "/image/avatar/troll-slug.png", "/image/avatar/troll-spider.png", "/image/avatar/troll-spiderbot.png", "/image/avatar/troll-tv-head.png"
                ]
            },
            getRandom: function () {
                var b = this.getAll(),
                    c = Math.floor(Math.random() * 12 - 1) + 1;
                return b[c]
            },
            mapCharacter: function (b) {
                return (b = {
                    "/image/avatar/girl-native.png": '{"type":"Female","parts":{"Left Arm":"native","Right Arm":"native","Left Hand":"native","Right Hand":"native","Legs":"native","Feet":"native","Chest":"native","Head":"native","Mouth":"native","Eyes":"native","Ears":"native","Hair":"native","Nose":"native","Hats":"native","Eyeware":"native","Capes":"native","Left Props":"blank","Right Props":"blank"}}',
                    "/image/avatar/girl-school.png": '{"type":"Female","parts":{"Left Arm":"regular","Right Arm":"regular","Left Hand":"regular","Right Hand":"regular","Legs":"regular","Feet":"regular","Chest":"regular","Head":"regular","Mouth":"regular","Eyes":"regular","Ears":"regular","Hair":"regular","Nose":"regular","Hats":"regular","Eyeware":"regular","Capes":"regular","Left Props":"blank","Right Props":"blank"}}',
                    "/image/avatar/girl-trooper.png": '{"type":"Female","parts":{"Left Arm":"trooperred","Right Arm":"trooperred","Left Hand":"trooperred","Right Hand":"trooperred","Legs":"trooperred","Feet":"trooperred","Chest":"trooperred","Head":"trooperred","Mouth":"trooperred","Eyes":"trooperred","Ears":"trooperred","Hair":"trooperred","Nose":"trooperred","Hats":"trooperred","Eyeware":"trooperred","Capes":"trooperred","Left Props":"blank","Right Props":"blank"}}',
                    "/image/avatar/girl-princess.png": '{"type":"Female","parts":{"Left Arm":"valkyrie","Right Arm":"valkyrie","Left Hand":"valkyrie","Right Hand":"valkyrie","Legs":"valkyrie","Feet":"valkyrie","Chest":"valkyrie","Head":"valkyrie","Mouth":"valkyrie","Eyes":"valkyrie","Ears":"valkyrie","Hair":"valkyrie","Nose":"valkyrie","Hats":"valkyrie","Eyeware":"valkyrie","Capes":"valkyrie","Left Props":"blank","Right Props":"blank"}}',
                    "/image/avatar/girl-witch.png": '{"type":"Female","parts":{"Left Arm":"witch","Right Arm":"witch","Left Hand":"witch","Right Hand":"witch","Legs":"witch","Feet":"witch","Chest":"witch","Head":"witch","Mouth":"witch","Eyes":"witch","Ears":"witch","Hair":"witch","Nose":"witch","Hats":"witch","Eyeware":"witch","Capes":"witch","Left Props":"blank","Right Props":"blank"}}',
                    "/image/avatar/boy-cowboy.png": '{"type":"Male","parts":{"Left Arm":"cowboy","Right Arm":"cowboy","Left Hand":"cowboy","Right Hand":"cowboy","Legs":"cowboy","Feet":"cowboy","Chest":"cowboy","Head":"cowboy","Mouth":"cowboy","Eyes":"cowboy","Ears":"cowboy","Hair":"cowboy","Nose":"cowboy","Beard":"cowboy","Hats":"cowboy","Eyeware":"cowboy","Capes":"cowboy","Left Props":"blank","Right Props":"blank"}}',
                    "/image/avatar/boy-prince.png": '{"type":"Male","parts":{"Left Arm":"knight","Right Arm":"knight","Left Hand":"knight","Right Hand":"knight","Legs":"knight","Feet":"knight","Chest":"knight","Head":"knight","Mouth":"knight","Eyes":"knight","Ears":"knight","Hair":"knight","Nose":"knight","Beard":"knight","Hats":"knight","Eyeware":"knight","Capes":"knight","Left Props":"blank","Right Props":"blank"}}',
                    "/image/avatar/boy-regular.png": '{"type":"Male","parts":{"Left Arm":"regular","Right Arm":"regular","Left Hand":"regular","Right Hand":"regular","Legs":"regular","Feet":"regular","Chest":"regular","Head":"regular","Mouth":"regular","Eyes":"regular","Ears":"regular","Hair":"regular","Nose":"regular","Beard":"regular","Hats":"regular","Eyeware":"regular","Capes":"regular","Left Props":"blank","Right Props":"blank"}}',
                    "/image/avatar/boy-trooper.png": '{"type":"Male","parts":{"Left Arm":"trooperred","Right Arm":"trooperred","Left Hand":"trooperred","Right Hand":"trooperred","Legs":"trooperred","Feet":"trooperred","Chest":"trooperred","Head":"trooperred","Mouth":"trooperred","Eyes":"trooperred","Ears":"trooperred","Hair":"trooperred","Nose":"trooperred","Beard":"trooperred","Hats":"trooperred","Eyeware":"trooperred","Capes":"trooperred","Left Props":"blank","Right Props":"blank"}}',
                    "/image/avatar/green-zombie.png": '{"type":"Male","parts":{"Left Arm":"zombie","Right Arm":"zombie","Left Hand":"zombie","Right Hand":"zombie","Legs":"zombie","Feet":"zombie","Chest":"zombie","Head":"zombie","Mouth":"zombie","Eyes":"zombie","Ears":"zombie","Hair":"zombie","Nose":"zombie","Beard":"zombie","Hats":"zombie","Eyeware":"zombie","Capes":"zombie","Left Props":"blank","Right Props":"blank"}}',
                    "/image/avatar/pink-dragon.png": '{"type":"Quadruped","parts":{"Head":"Cute Pink","Ears Horns":"Cute Pink","Torso":"Cute Pink","Front Legs":"Cute Pink","Back Legs":"Cute Pink","Front Feet":"Cute Pink","Back Feet":"Cute Pink","Wings":"Cute Pink","Tail":"Cute Pink","Breath":"Cute Pink"}}',
                    "/image/avatar/red-troll.png": '{"type":"Troll","parts":{"Eyes":"Anger","Hat":"Anger","Head":"Anger","Horns":"Anger","Left Arm":"Anger","Left Leg":"Anger","Left Wing":"blank","Right Arm":"Anger","Right Leg":"Anger","Right Wing":"blank","Mouth":"Anger","Torso":"Anger"}}',
                    "/image/avatar/codey.png": '{"type":"Troll","parts":{"Eyes":"Codey","Hat":"Codey","Head":"Codey","Horns":"Codey","Left Arm":"Codey","Left Leg":"Codey","Left Wing":"blank","Right Arm":"Codey","Right Leg":"Codey","Right Wing":"blank","Mouth":"Codey","Torso":"Codey"}}'
                }[b]) ?
                    JSON.parse(b) : null
            }
        }
    }])
})();
(function () {
    angular.module("common").filter("billingInterval", function () {
        return function (b) {
            return b == "year" ? "annually" : b + "ly"
        }
    })
})();
(function () {
    angular.module("common").directive("bind", function () {
        return {
            restrict: "A",
            link: function (b, c, d) {
                b.vm[d.bind] = c
            }
        }
    })
})();
(function () {
    function b() {
        return {
            ensureArray: function (b) {
                if (Array.isArray(b)) return b;
                return b = Object.keys(b).map(function (d) {
                    return b[d]
                })
            },
            shuffle: function (b) {
                var d, e, f;
                for (f = b.length; f; f--) {
                    d = Math.floor(Math.random() * f);
                    e = b[f - 1];
                    b[f - 1] = b[d];
                    b[d] = e
                }
                return b
            }
        }
    }
    angular.module("common").factory("arrayUtils", b);
    b.$inject = []
})();
(function () {
    function b(b, d, e) {
        return {
            getContext: function (b) {
                var c = b.getContext("2d");
                c == null && (c = b.getContext("webgl"));
                return c
            },
            isImage: function (b) {
                return b.nodeName.toLowerCase() === "img"
            },
            getImageData: function (b) {
                return this.getContext(b).getImageData(0, 0, b.width, b.height)
            },
            create: function (d, e) {
                var h = document.createElement("canvas");
                h._id = b.v4();
                if (d !== void 0) h.width = d;
                if (e !== void 0) h.height = e;
                return h
            },
            clone: function (b, c) {
                var c = c !== void 0 ? c : true,
                    d = this.getRegion(b, 0, 0, b.width, b.height);
                if (c &&
                    b._id !== void 0) d._id = b._id;
                return d
            },
            resize: function (b, c, d) {
                console.assert(c % 1 === 0 && d % 1 === 0);
                if (!(b.width == c && b.height == d)) {
                    var e = this.clone(b);
                    b.width = c;
                    b.height = d;
                    this.getContext(b).drawImage(e, 0, 0, b.width, b.height);
                    return b
                }
            },
            getRegion: function (b, c, d, e, k) {
                console.assert(c % 1 === 0 && d % 1 === 0 && e % 1 === 0 && k % 1 === 0);
                var l = document.createElement("canvas");
                l.width = e;
                l.height = k;
                this.getContext(l).drawImage(b, c, d, e, k, 0, 0, e, k);
                return l
            },
            getColorHex: function (b, c, e) {
                if (!(c < 0 || c >= b.width))
                    if (!(e < 0 || e >= b.height)) {
                        b =
                            this.getContext(b).getImageData(c, e, 1, 1).data;
                        return d.rgbaToHex({
                            r: b[0],
                            g: b[1],
                            b: b[2],
                            a: b[3]
                        })
                    }
            },
            setColorHex: function (b, c, e, j) {
                if (!(c < 0 || c >= b.width))
                    if (!(e < 0 || e >= b.height)) {
                        b = this.getContext(b);
                        j = d.hexToRgba(j);
                        j = "rgba(" + j.r + ", " + j.g + ", " + j.b + ", " + j.a / 255 + ")";
                        b.strokeStyle = j;
                        b.fillStyle = j;
                        b.fillRect(c, e, 1, 1)
                    }
            },
            getPositionOfColorInCanvas: function (b, c) {
                var d = this.getImageData(b);
                return e.getPositionOfColorInCanvas(d, c, b.width)
            },
            getIndexOfColorInCanvas: function (b, c) {
                var d = this.getImageData(b);
                return e.getIndexOfColorInCanvas(d,
                    c)
            },
            getGradientCanvas: function (b, c, d) {
                var e = document.createElement("canvas");
                e.width = c;
                e.height = d;
                for (var c = this.getContext(e), d = c.createLinearGradient(0, 0, e.width, e.height), k = 0; k < b.length; k++) {
                    var l = k / (b.length - 1),
                        m = "#" + b[k].slice(0, 6);
                    d.addColorStop(l, m)
                }
                c.fillStyle = d;
                c.fillRect(0, 0, e.width, e.height);
                return e
            },
            crawlPixels: function (b, c, d, j, k, l) {
                b = this.getImageData(b);
                e.crawlPixels(b, c, d, j, k, l)
            },
            cropImage: function (b) {
                var c = b.width,
                    d = b.height,
                    e = [],
                    k = [],
                    l = this.getImageData(b),
                    m, n, q;
                for (n = 0; n < d; n++)
                    for (m =
                        0; m < c; m++) {
                        q = (n * c + m) * 4;
                        if (l.data[q + 3] > 0) {
                            e.push(m);
                            k.push(n)
                        }
                    }
                e.sort(function (b, c) {
                    return b - c
                });
                k.sort(function (b, c) {
                    return b - c
                });
                d = e.length - 1;
                c = e[d] - e[0];
                d = k[d] - k[0];
                e = this.getContext(b).getImageData(e[0], k[0], c, d);
                k = document.createElement("canvas");
                b = this.getContext(b);
                k.width = c;
                k.height = d;
                b.putImageData(e, 0, 0);
                return k
            }
        }
    }
    angular.module("common").factory("canvasUtils", b);
    b.$inject = ["uuid", "colorUtils", "imageDataUtils"]
})();
(function () {
    function b() {
        return {
            applyOpacity: function (b, d) {
                var e = this.hexToRgba(b);
                e.a = d * 255;
                return this.rgbaToHex(e)
            },
            getRandomColor: function () {
                return this.rgbaToHex({
                    r: Math.random() * 255,
                    g: Math.random() * 255,
                    b: Math.random() * 255,
                    a: 255
                })
            },
            getColorsDistanceHex: function (b, d) {
                var b = this.hexToRgba(b),
                    d = this.hexToRgba(d),
                    e = b.r > d.r ? b.r - d.r : d.r - b.r,
                    e = e + (b.g > d.g ? b.g - d.g : d.g - b.g),
                    e = e + (b.b > d.b ? b.b - d.b : d.b - b.b);
                return e = e + (b.a > d.a ? b.a - d.a : d.a - b.a)
            },
            getColorsSimilarityHex: function (b, d) {
                return 1 - this.getColorsDistanceHex(b,
                    d) / 1020
            },
            isColorSimilarHex: function (b, d, e) {
                return this.getColorsSimilarityHex(b, d) >= (e !== void 0 ? e : 1)
            },
            isTransparentHex: function (b) {
                return this.hexToRgba(b).a == 0
            },
            isTranslucentHex: function (b) {
                return this.hexToRgba(b).a != 255
            },
            isOpaqueHex: function (b) {
                return this.isTranslucentHex(b) === false
            },
            lighter: function (b, d) {
                var d = d !== void 0 ? d : 0.1,
                    e = this.hexToRgba(b);
                e.r = e.r + Math.round(e.r * d);
                if (e.r > 255) e.r = 255;
                e.g = e.g + Math.round(e.g * d);
                if (e.g > 255) e.g = 255;
                e.b = e.b + Math.round(e.b * d);
                if (e.b > 255) e.b = 255;
                return this.rgbaToHex(e)
            },
            darker: function (b, d) {
                var d = d !== void 0 ? d : 0.1,
                    e = this.hexToRgba(b);
                e.r = e.r - Math.round(e.r * d);
                if (e.r < 0) e.r = 0;
                e.g = e.g - Math.round(e.g * d);
                if (e.g < 0) e.g = 0;
                e.b = e.b - Math.round(e.b * d);
                if (e.b < 0) e.b = 0;
                return this.rgbaToHex(e)
            },
            hexToInt: function (b, d) {
                d !== void 0 && d || (b = b.slice(0, 6));
                return parseInt(b, 16)
            },
            rgbToHex: function (b) {
                var d = parseInt(b.r).toString(16),
                    e = parseInt(b.g).toString(16),
                    b = parseInt(b.b).toString(16),
                    d = d.length == 2 ? d : "0" + d,
                    e = e.length == 2 ? e : "0" + e,
                    b = b.length == 2 ? b : "0" + b;
                return d + e + b
            },
            rgbaToHex: function (b) {
                var d =
                    parseInt(b.r).toString(16),
                    e = parseInt(b.g).toString(16),
                    f = parseInt(b.b).toString(16),
                    b = parseInt(b.a).toString(16),
                    d = d.length == 2 ? d : "0" + d,
                    e = e.length == 2 ? e : "0" + e,
                    f = f.length == 2 ? f : "0" + f,
                    b = b.length == 2 ? b : "0" + b;
                return d + e + f + b
            },
            hexToRgb: function (b) {
                return (b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b)) ? {
                    r: parseInt(b[1], 16),
                    g: parseInt(b[2], 16),
                    b: parseInt(b[3], 16)
                } : null
            },
            hexToRgba: function (b) {
                return (b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b)) ? {
                    r: parseInt(b[1], 16),
                    g: parseInt(b[2],
                        16),
                    b: parseInt(b[3], 16),
                    a: parseInt(b[4], 16)
                } : null
            },
            hueToRgb: function (b, d, e) {
                e < 0 && (e = e + 1);
                e > 1 && (e = e - 1);
                return e < 1 / 6 ? b + (d - b) * 6 * e : e < 0.5 ? d : e < 2 / 3 ? b + (d - b) * (2 / 3 - e) * 6 : b
            },
            hexToHsl: function (b) {
                b = this.hexToRgba(b);
                return this.rgbToHsl(b.r, b.g, b.b)
            },
            hslToHex: function (b) {
                return this.rgbaToHex(this.hslToRgba(b.h, b.s, b.l))
            },
            rgbToHsl: function (b, d, e) {
                var b = b / 255,
                    d = d / 255,
                    e = e / 255,
                    f = Math.max(b, d, e),
                    g = Math.min(b, d, e),
                    h, j = (f + g) / 2;
                if (f == g) h = g = 0;
                else {
                    var k = f - g,
                        g = j > 0.5 ? k / (2 - f - g) : k / (f + g);
                    switch (f) {
                        case b:
                            h = (d - e) / k + (d < e ? 6 :
                                0);
                            break;
                        case d:
                            h = (e - b) / k + 2;
                            break;
                        case e:
                            h = (b - d) / k + 4
                    }
                    h = h / 6
                }
                return {
                    h: h,
                    s: g,
                    l: j
                }
            },
            hslToRgba: function (b, d, e) {
                if (d == 0) e = d = b = e;
                else var f = e < 0.5 ? e * (1 + d) : e + d - e * d,
                    g = 2 * e - f,
                    e = this.hueToRgb(g, f, b + 1 / 3),
                    d = this.hueToRgb(g, f, b),
                    b = this.hueToRgb(g, f, b - 1 / 3);
                return {
                    r: e * 255,
                    g: d * 255,
                    b: b * 255,
                    a: 255
                }
            },
            rgbToHsv: function (b, d, e) {
                var b = b / 255,
                    d = d / 255,
                    e = e / 255,
                    f = Math.max(b, d, e),
                    g = Math.min(b, d, e),
                    h, j = f - g;
                if (f == g) h = 0;
                else {
                    switch (f) {
                        case b:
                            h = (d - e) / j + (d < e ? 6 : 0);
                            break;
                        case d:
                            h = (e - b) / j + 2;
                            break;
                        case e:
                            h = (b - d) / j + 4
                    }
                    h = h / 6
                }
                return {
                    h: h,
                    s: f ==
                        0 ? 0 : j / f,
                    v: f
                }
            },
            hsvToHex: function (b) {
                return this.rgbToHex(this.hsvToRgb(b.h, b.s, b.v)) + "ff"
            },
            hexToHsv: function (b) {
                b = this.hexToRgba(b);
                return this.rgbToHsv(b.r, b.g, b.b)
            },
            hsvToRgb: function (b, d, e) {
                var f, g, h, j = Math.floor(b * 6),
                    k = b * 6 - j,
                    b = e * (1 - d),
                    l = e * (1 - k * d),
                    d = e * (1 - (1 - k) * d);
                switch (j % 6) {
                    case 0:
                        f = e;
                        g = d;
                        h = b;
                        break;
                    case 1:
                        f = l;
                        g = e;
                        h = b;
                        break;
                    case 2:
                        f = b;
                        g = e;
                        h = d;
                        break;
                    case 3:
                        f = b;
                        g = l;
                        h = e;
                        break;
                    case 4:
                        f = d;
                        g = b;
                        h = e;
                        break;
                    case 5:
                        f = e;
                        g = b;
                        h = l
                }
                return {
                    r: f * 255,
                    g: g * 255,
                    b: h * 255
                }
            }
        }
    }
    angular.module("common").factory("colorUtils",
        b);
    b.$inject = []
})();
(function () {
    function b(b) {
        return {
            getColorHex: function (d, e, f) {
                if (!(e < 0 || e >= d.width))
                    if (!(f < 0 || f >= d.height)) {
                        e = (f * d.width + e) * 4;
                        d = d.data;
                        return b.rgbaToHex({
                            r: d[e],
                            g: d[e + 1],
                            b: d[e + 2],
                            a: d[e + 3]
                        })
                    }
            },
            setColorHex: function (d, e, f, g, h) {
                if (!(e < 0 || e >= d.width))
                    if (!(f < 0 || f >= d.height)) {
                        if (h !== void 0 && h && this.getColorHex(d, e, f) == g) return false;
                        e = (f * d.width + e) * 4;
                        g = b.hexToRgba(g);
                        d = d.data;
                        d[e] = g.r;
                        d[e + 1] = g.g;
                        d[e + 2] = g.b;
                        d[e + 3] = g.a;
                        return true
                    }
            },
            getPositionOfColorInCanvas: function (b, c, f) {
                b = this.getIndexOfColorInCanvas(b, c);
                if (b != -1) {
                    b = b / 4;
                    return {
                        x: b % f,
                        y: b / f
                    }
                }
            },
            getIndexOfColorInCanvas: function (d, e) {
                for (var f = b.hexToRgba(e), g = d.data, h = 0, j = false, h = 0; h < g.length; h = h + 4) {
                    var k = g[h + 1],
                        l = g[h + 2],
                        m = g[h + 3];
                    if (g[h] == f.r && k == f.g && l == f.b && m == f.a) {
                        j = true;
                        break
                    }
                }
                if (!j) {
                    console.assert(false, "color not found");
                    return -1
                }
                return h
            },
            crawlPixels: function (b, c, f, g, h, j, k) {
                this._crawlPixels(b, c, f, g, h, j, k, void 0, 0, {})
            },
            _crawlPixels: function (d, e, f, g, h, j, k, l, m, n) {
                var j = j !== void 0 ? j : true,
                    q = e + "," + f;
                if (n[q] === void 0) {
                    n[q] = true;
                    if (q = this.getColorHex(d,
                            e, f)) {
                        l === void 0 && (l = q);
                        if ((!j || !b.isTransparentHex(q)) && b.isColorSimilarHex(l, q, g)) {
                            k(e, f);
                            var e = {
                                top: {
                                    position: [e, f - 1],
                                    increment: 1
                                },
                                "top-right": {
                                    position: [e + 1, f - 1],
                                    increment: 1
                                },
                                right: {
                                    position: [e + 1, f],
                                    increment: 1
                                },
                                "bottom-right": {
                                    position: [e + 1, f + 1],
                                    increment: 1
                                },
                                bottom: {
                                    position: [e, f + 1],
                                    increment: 1
                                },
                                "bottom-left": {
                                    position: [e - 1, f + 1],
                                    increment: 1
                                },
                                left: {
                                    position: [e - 1, f],
                                    increment: 1
                                },
                                "top-left": {
                                    position: [e - 1, f - 1],
                                    increment: 1
                                }
                            },
                                p;
                            for (p in e) {
                                var q = e[p],
                                    f = q.position,
                                    q = q.increment !== void 0 ? q.increment :
                                    1,
                                    s = f[0],
                                    f = f[1];
                                h !== void 0 && m + q >= h - 1 || this._crawlPixels(d, s, f, g, h, j, k, l, m + q, n)
                            }
                        }
                    }
                }
            }
        }
    }
    angular.module("common").factory("imageDataUtils", b);
    b.$inject = ["colorUtils"]
})();
(function () {
    angular.module("common").filter("currency", function () {
        return function (b) {
            b = b / 100;
            try {
                var c = b.toFixed(2)
            } catch (d) {
                c = parseFloat(b)
            }
            return c = c.replace(".00", "")
        }
    })
})();
(function () {
    function b() {
        return {
            bindToController: {
                endsOn: "@"
            },
            controller: c,
            controllerAs: "vm",
            restrict: "E",
            scope: {},
            templateUrl: "/js/ng-app/common/countdown.directive.html"
        }
    }

    function c(b) {
        function c() {
            g = moment.duration(g - h, "milliseconds");
            f.timeLeft = g.humanize()
        }
        var f = this,
            g = null,
            h = 1E3;
        f.daysLeft = null;
        f.hoursLeft = null;
        f.init = function () {
            var j = Date.now(),
                j = parseFloat(f.endsOn) * 1E3 - j;
            g = moment.duration(j, "milliseconds");
            b(c, h);
            c()
        };
        f.minutesLeft = null;
        f.secondsLeft = null;
        f.init()
    }
    angular.module("common").directive("countdown",
        b);
    b.$inject = [];
    c.$inject = ["$interval", "$window"]
})();
(function () {
    angular.module("common").directive("myDdslick", ["$parse", function (b) {
        return {
            restrict: "A",
            link: function (c, d, e) {
                var f = b(e.ngModel),
                    g = f.assign,
                    h = true;
                d.ddslick({
                    showSelectedHTML: false,
                    onSelected: function (b) {
                        if (h) h = false;
                        else if (f(c) != b.selectedData.value) {
                            g(c, b.selectedData.value);
                            c.load()
                        }
                    }
                });
                c.$watch(e.ngModel, function (b) {
                    var c = d.attr("id") + "-dd-placeholder";
                    $("#" + c).ddslick("select", {
                        id: b
                    })
                })
            }
        }
    }])
})();
(function () {
    angular.module("common").directive("fileRead", [function () {
        return {
            scope: {
                fileRead: "="
            },
            link: function (b, c) {
                c.bind("change", function (c) {
                    b.$apply(function () {
                        b.fileRead = c.target.files[0]
                    })
                })
            }
        }
    }])
})();
(function () {
    function b() {
        return {
            bindToController: {
                gaEventClickCategory: "=?",
                gaEventClickLabel: "=?",
                gaEventClickPostUrl: "=?",
                gaEventClickPostHandler: "=?"
            },
            controller: c,
            controllerAs: "vm",
            restrict: "A",
            scope: {},
            link: function (b, c) {
                b.vm.element = c
            }
        }
    }

    function c(b, c, f, g) {
        var h = this;
        h.eventsRegistered = false;
        h.init = function () {
            f.$watch("vm.element", function () {
                if (h.element && !h.eventsRegistered) {
                    h.eventsRegistered = true;
                    h.element.bind("click", function () {
                        var c = h.gaEventClickCategory !== void 0 ? h.gaEventClickCategory :
                            "UI Element",
                            e = h.gaEventClickLabel !== void 0 ? h.gaEventClickLabel : null;
                        h.assertCategory(c);
                        g.sendEvent(c, "Clicked", e, function () {
                            h.gaEventClickPostUrl ? b.location = h.gaEventClickPostUrl : h.gaEventClickPostHandler && h.gaEventClickPostHandler()
                        })
                    })
                }
            })
        };
        h.assertCategory = function (b) {
            console.assert(["UI Element", "Activity Tile", "Mission"].indexOf(b) != -1, "unknown ga event category: " + b)
        };
        h.init()
    }
    angular.module("common").directive("gaEventClick", b);
    b.$inject = [];
    c.$inject = ["$window", "$timeout", "$scope", "googleAnalytics"]
})();
(function () {
    function b() {
        return {
            bindToController: {
                gaEventModalInitialize: "=?",
                gaEventModalLabel: "="
            },
            controller: c,
            controllerAs: "vm",
            restrict: "A",
            scope: {},
            link: function (b, c) {
                b.vm.element = c
            }
        }
    }

    function c(b, c) {
        var f = this;
        f.registeredEvents = false;
        f.init = function () {
            f.gaEventModalInitialize = f.gaEventModalInitialize !== void 0 ? f.gaEventModalInitialize : true;
            b.$watch("vm.element", function () {
                f.element && f.gaEventModalInitialize && f._initEvents()
            });
            b.$watch("vm.gaEventModalInitialize", function () {
                f.gaEventModalInitialize &&
                    f.element && f._initEvents()
            })
        };
        f._initEvents = function () {
            if (!f.registeredEvents) {
                f.registeredEvents = true;
                var b = f.gaEventModalLabel !== void 0 ? f.gaEventModalLabel : null;
                c.sendEvent("Modal", "Opened", b);
                angular.element("[data-close]", f.element).bind("click", function () {
                    c.sendEvent("Modal", "Closed", b)
                })
            }
        };
        f.init()
    }
    angular.module("common").directive("gaEventModal", b);
    b.$inject = [];
    c.$inject = ["$scope", "googleAnalytics"]
})();
(function () {
    var b = /^\-?\d+$/;
    angular.module("common").directive("integer", function () {
        return {
            require: "ngModel",
            link: function (c, d, e, f) {
                f.$validators.integer = function (c, d) {
                    return f.$isEmpty(c) || b.test(d) ? true : false
                }
            }
        }
    })
})();
(function () {
    function b(b, e, f) {
        return {
            open: function () {
                return b(function (b, d) {
                    function j(e) {
                        e = f.open({
                            controller: c,
                            controllerAs: "vm",
                            templateUrl: "/js/ng-app/common/modal-feedback-form.factory.html",
                            locals: {
                                email: e
                            }
                        });
                        e.opened.then(b);
                        e.closed.then(d)
                    }
                    e.getMyEmail().then(function (b) {
                        j(b)
                    }, function () {
                        j(null)
                    })
                })
            }
        }
    }

    function c(b, c) {
        var f = this;
        f.busy = false;
        f.email = c !== void 0 ? c : null;
        f.hasEmail = c != null;
        f.error = null;
        f.send = function () {
            f.busy = true;
            b.globalFeedback(f.email, f.subject, f.message, f.context).then(function () {
                f.busy =
                    false;
                f.sent = true
            }, function () {
                f.busy = false;
                f.error = "Problem sending feedback"
            })
        }
    }
    angular.module("common").factory("modalFeedbackForm", b);
    b.$inject = ["$q", "api", "modal"];
    c.$inject = ["api", "email"]
})();
(function () {
    function b(b) {
        return {
            open: function () {
                return b.open({
                    controller: c,
                    controllerAs: "vm",
                    templateUrl: "/js/ng-app/common/modal-plans.factory.html"
                })
            }
        }
    }

    function c(b, c) {
        var f = this;
        f.loading = false;
        f.sessionCoupons = [];
        f.getCallout = function (b) {
            if (b.amount_off) return "$" + c(b.amount_off) + " OFF";
            if (b.percent_off) return b.percent_off + "% OFF";
            if (b.savings_percent) {
                f.needsDisclaimer = true;
                return "*Save " + b.savings_percent + "%"
            }
            return null
        };
        f.hasAnyCoupon = function (b) {
            for (var c in b)
                if (f.hasCoupon(b[c])) return true;
            return false
        };
        f.hasCoupon = function (b) {
            for (var c in f.sessionCoupons)
                if (f.sessionCoupons[c] == b) return true;
            return false
        };
        f.init = function () {
            f.loading = true;
            b.getPlans().then(function (c) {
                f.plansMap = c;
                f.plans = [f.plansMap["quarterly-48"], f.plansMap["yearly-96"], f.plansMap.lifetime];
                f.plansForSmall = [f.plansMap["yearly-96"], f.plansMap["quarterly-48"], f.plansMap.lifetime];
                b.getDiscounts().then(function (b) {
                    f.globalSale = b.global_sale;
                    f.globalSaleCoupons = b.global_sale_coupons;
                    f.globalSaleName = b.global_sale_name;
                    f.globalSaleDiscount = b.global_sale_discount;
                    f.globalSaleEndDate = b.global_sale_end_date;
                    f.globalSaleEndsOn = b.global_sale_ends_on;
                    f.globalSaleMonthlyPrice = b.global_sale_monthly_price;
                    f.sessionCoupons = b.session_coupons;
                    f.loading = false
                })
            })
        };
        f.needsDisclaimer = false;
        f.init()
    }
    angular.module("common").factory("modalPlans", b);
    b.$inject = ["modal"];
    c.$inject = ["api", "currencyFilter"]
})();
(function () {
    function b(b) {
        return {
            open: function (e) {
                var e = e !== void 0 ? e : {},
                    f = {
                        closeOnClick: e.closeOnClick,
                        controller: c,
                        controllerAs: "vm",
                        templateUrl: "/js/ng-app/common/modal-unlock.factory.html",
                        locals: {
                            close: function () {
                                h.close()
                            },
                            showCloseButton: e.showCloseButton !== void 0 ? e.showCloseButton : true,
                            activitiesRemaining: e.activitiesRemaining !== void 0 ? e.activitiesRemaining : null
                        }
                    },
                    g;
                for (g in e) f[g] = e[g];
                var h = b.open(f)
            }
        }
    }

    function c(b, c, f, g) {
        this.showPlans = function () {
            c();
            b.open()
        };
        this.showCloseButton = f;
        this.images = [{
            url: "/image/dashboard/student/placeholder/unlock-everything.png",
            caption: "Access Minecraft, and all home courses with a premium plan."
        }, {
            videoUrl: "//www.youtube.com/embed/m0b5rcutFpU",
            caption: "Minecraft Block Editor"
        }, {
            videoUrl: "//www.youtube.com/embed/EzDoEFi7mP8",
            caption: "Minecraft Make it Rain Mod"
        }, {
            videoUrl: "//www.youtube.com/embed/qYJM2ppZwKo",
            caption: "Tynker Minecraft Mini-Games"
        }, {
            videoUrl: "//www.youtube.com/embed/YLixZnZfBEU",
            caption: "Glitch Manor"
        }, {
            videoUrl: "//www.youtube.com/embed/GoVHUVbYw9M",
            caption: "Goblin Quest"
        }, {
            videoUrl: "//www.youtube.com/embed/1ztO3F-2QhA",
            caption: "Turing's Tower"
        }, {
            url: "/image/course/school/P411-Promo-4.png",
            caption: "Python / JavaScript"
        }, {
            url: "/image/course/school/programming-301-puzzle.jpg",
            caption: "Puzzles"
        }];
        this.activitiesRemaining = g
    }
    angular.module("common").factory("modalUnlock", b);
    b.$inject = ["modal"];
    c.$inject = ["modalPlans", "close", "showCloseButton", "activitiesRemaining"]
})();
(function () {
    function b() {
        return {
            bindToController: {
                items: "="
            },
            controller: c,
            controllerAs: "vm",
            scope: {},
            templateUrl: "/js/ng-app/common/modal-unlock-gallery.directive.html"
        }
    }

    function c(b, c) {
        var f = this;
        f.videoUrl = null;
        f.hasVideo = false;
        f.init = function () {
            c.$watch("vm.items", function () {
                for (var b in f.items) {
                    var c = f.items[b];
                    if (c.videoUrl && c.videoUrl.indexOf("youtube.com") != -1) {
                        var d = c.videoUrl.replace(/\/\/www.youtube.com\/embed\//, "");
                        c.thumbnailUrl = "//img.youtube.com/vi/" + d + "/0.jpg"
                    }
                }
                if (f.items) f.item =
                    f.items[0]
            });
            c.$watch("vm.item", function () {
                if (f.item && f.item.videoUrl) {
                    var c = {
                        autoplay: 1
                    };
                    if (f.item.videoUrl.indexOf("youtube.com") != -1) {
                        c.controls = 1;
                        c.rel = 1;
                        c.showinfo = 1
                    }
                    var e = f.item.videoUrl,
                        e = e + ("?" + angular.element.param(c));
                    f.hasVideo = true;
                    f.videoUrl = b.trustAsResourceUrl(e)
                } else {
                    f.hasVideo = false;
                    f.videoUrl = "ide/imgs/blank.png"
                }
            })
        };
        f.item = null;
        f.init()
    }
    angular.module("common").directive("modalUnlockGallery", b);
    b.$inject = [];
    c.$inject = ["$sce", "$scope"]
})();
(function () {
    angular.module("common").directive("ngTooltipValidator", ["$parse", function (b) {
        return {
            restrict: "A",
            link: function (c, d, e) {
                b(e.ngModel);
                var f = b(e.ngTooltipValidator);
                d.tipsy({
                    trigger: "manual",
                    gravity: "w"
                });
                c.$watch(e.ngModel, function (b) {
                    f(c) && b && f(c)(b, function (b) {
                        d.attr("title", b);
                        d.tipsy("show")
                    })
                })
            }
        }
    }])
})();
(function () {
    angular.module("common").directive("openFeedbackForm", function () {
        return {
            controller: ["modalFeedbackForm", function (b) {
                this.open = function () {
                    b.open()
                }
            }],
            restrict: "A",
            link: function (b, c, d, e) {
                c.click(function () {
                    e.open()
                })
            }
        }
    })
})();
(function () {
    function b() {
        return {
            controller: c,
            restrict: "A",
            link: function (b, c, f, g) {
                console.log(arguments);
                c.click(function () {
                    var b = angular.element("#" + f.openLightbox);
                    b.find(".slider").slick("slickGoTo", f.slide);
                    angular.element(window).resize();
                    b.foundation("open")
                })
            }
        }
    }

    function c() { }
    angular.module("common").directive("openLightbox", b);
    b.$inject = [];
    c.$inject = []
})();
(function () {
    function b() {
        return {
            controller: c,
            restrict: "A",
            link: function (b, c, f, g) {
                c.click(function () {
                    g.show()
                })
            }
        }
    }

    function c(b) {
        this.show = function () {
            b.open()
        }
    }
    angular.module("common").directive("openModalUpgrade", b);
    b.$inject = [];
    c.$inject = ["modalUnlock"]
})();
(function () {
    angular.module("common").directive("preloadResource", ["resourceCache", function (b) {
        return {
            link: function (c, d, e) {
                b.put(e.preloadResource, d.html())
            }
        }
    }])
})();
(function () {
    angular.module("common").factory("resourceCache", ["$cacheFactory", function (b) {
        return b("resourceCache")
    }])
})();
(function () {
    angular.module("common").directive("studentActivityPreview", [function () {
        return {
            controller: ["$scope", "$timeout", "api", function (b, c, d) {
                b.activity = null;
                b.isLoading = false;
                b.showActivity = function (e, f) {
                    b.isLoading = true;
                    d.getActivity(e).then(function (d) {
                        b.isLoading = false;
                        b.isLocked = f ? true : false;
                        b.activity = d;
                        $(".activity-preview").modal();
                        c(function () {
                            $.modal.resize()
                        });
                        $(document).one($.modal.CLOSE, function () {
                            b.activity = null;
                            b.$apply()
                        })
                    }, function () {
                        b.isLoading = false
                    })
                };
                b.resendParentVerificationEmail =
                    function () {
                        ga("send", "event", "Account Verification", "Verification Request", "U13 Account Verification Request: " + b.activity.slug);
                        b.isLoading = true;
                        d.resendParentVerificationEmail().then(function () {
                            b.isLoading = false;
                            b.sent = true
                        }, function () {
                            b.isLoading = false
                        })
                    }
            }],
            restrict: "E",
            scope: {
                sent: "="
            },
            templateUrl: "/js/ng-app/common/studentActivityPreview.directive.html"
        }
    }])
})();
(function () {
    angular.module("common").directive("studentCoursePreview", [function () {
        return {
            controller: ["$scope", "$timeout", "api", "modalPlans", function (b, c, d, e) {
                b.course = null;
                b.sent = false;
                b.requiredPlan = null;
                b.addToCart = function () {
                    ga("send", "event", "Student Course Popup", "Link Click", "Add to Cart: " + b.course.slug);
                    window.location = "/cart/api/addtocart?sku=" + b.course.licenseid
                };
                b.buy = function () {
                    ga("send", "event", "Student Course Popup", "Link Click", "Buy: " + b.course.slug);
                    window.location = "/purchase/?c=buy&licenseid=" +
                        b.course.licenseid
                };
                b.showCourse = function (e, g) {
                    b.isLoading = true;
                    d.getCourse(e).then(function (h) {
                        d.getRequiredPlanForCourse(e).then(function (d) {
                            b.isLoading = false;
                            b.isSubscription = g ? true : false;
                            b.course = h;
                            b.galleryItems = h.kid_screenshots ? h.kid_screenshots : h.screenshots;
                            b.requiredPlan = d;
                            $(".course-preview").modal();
                            c(function () {
                                $.modal.resize()
                            });
                            $(document).one($.modal.CLOSE, function () {
                                b.course = null;
                                b.galleryItems = null;
                                b.$apply()
                            })
                        })
                    }, function () {
                        b.isLoading = false
                    })
                };
                b.showCourseDetails = function () {
                    ga("send",
                        "event", "Student Course Popup", "Button Click", "Course Details: " + b.course.slug);
                    window.location = "/courses/show?s=" + b.course.slug
                };
                b.showPlans = function () {
                    ga("send", "event", "Course Detail Page", "Link Click", "Subscribe: " + b.course.slug);
                    e.open()
                };
                b.subscribe = function () {
                    ga("send", "event", "Student Course Popup", "Button Click", "Subscribe Now");
                    window.location = d.SHOP_URL
                };
                b.sendParentSubscriptionRequest = function (c) {
                    ga("send", "event", "Student Course Popup", "Button Click", "Ask Parents to Enroll: " + b.course.slug);
                    b.isLoading = true;
                    d.sendParentSubscriptionRequest(c, b.course.slug).then(function () {
                        b.isLoading = false;
                        b.sent = true
                    }, function () {
                        b.isLoading = false
                    })
                };
                d.getMyParentEmail().then(function (c) {
                    b.parentEmail = c
                })
            }],
            restrict: "E",
            templateUrl: "/js/ng-app/common/studentCoursePreview.directive.html"
        }
    }])
})();
(function () {
    function b(b) {
        return {
            open: function (e, f) {
                return b.open({
                    controller: c,
                    controllerAs: "vm",
                    templateUrl: "/js/ng-app/common/modal-course-details-student.factory.html",
                    locals: {
                        slug: e,
                        showRequestForm: f
                    }
                })
            }
        }
    }

    function c(b, c, f, g, h, j) {
        var k = this;
        k.initialized = false;
        k.course = null;
        k.init = function () {
            k.loading = true;
            c.getCourse(g).then(function (b) {
                c.getRequiredPlanForCourse(g).then(function (c) {
                    k.course = b;
                    k.course.points = b.kid_subgoals && b.kid_subgoals.length > 0 ? b.kid_subgoals : b.mini_selling_points && b.mini_selling_points.length >
                        0 ? b.mini_selling_points : b.selling_points;
                    k.galleryItems = [];
                    var d = b.kid_screenshots ? b.kid_screenshots : b.screenshots,
                        e;
                    for (e in d) {
                        var f = d[e];
                        k.galleryItems.push({
                            url: f.image,
                            caption: f.caption,
                            videoUrl: f.video
                        })
                    }
                    k.requiredPlan = c;
                    k.loading = false;
                    k.initialized = true
                })
            })
        };
        k.loading = false;
        k.galleryItems = [];
        k.requiredPlan = null;
        k.showCourseDetails = function () {
            ga("send", "event", "Student Course Quick Look", "Button Click", "Course Details: " + k.course.slug);
            window.location = "/courses/" + k.course.slug
        };
        k.showPlans =
            function () {
                ga("send", "event", "Course Detail Page", "Link Click", "Subscribe: " + k.course.slug);
                f.open()
            };
        k.showRequestForm = h !== void 0 ? h : true;
        k.subscribeUrl = c.SUBSCRIBE_URL;
        k.signup = function () {
            b.get("joinStudent", {
                activitySlug: k.course.slug
            }) ? b.go("joinStudent", {
                activitySlug: k.course.slug
            }) : j.open({
                role: "student"
            })
        };
        k.init()
    }
    angular.module("common").factory("modalCourseDetailsStudent", b);
    b.$inject = ["modal"];
    c.$inject = ["$state", "api", "modalPlans", "slug", "showRequestForm", "modalJoin"]
})();
(function () {
    function b() {
        return {
            bindToController: {
                endsOn: "@"
            },
            controller: c,
            controllerAs: "vm",
            restrict: "E",
            scope: {},
            templateUrl: "/js/ng-app/common/sale-countdown.directive.html"
        }
    }

    function c(b) {
        function c() {
            g = g - h;
            if (g < 1) {
                f.isOver = true;
                b.cancel(f.promise)
            } else f.isOver = false
        }
        var f = this,
            g = null,
            h = 1E3;
        f.init = function () {
            var j = Date.now();
            g = parseFloat(f.endsOn) * 1E3 - j;
            f.promise = b(c, h);
            c()
        };
        f.isOver = null;
        f.init()
    }
    angular.module("common").directive("saleCountdown", b);
    b.$inject = [];
    c.$inject = ["$interval", "$timeout"]
})();
(function () {
    angular.module("common").directive("submitButton", function () {
        return {
            link: function (b, c) {
                c.attr("class", null)
            },
            restrict: "E",
            templateUrl: "scripts/ng-app/common/submit-button.directive.html",
            scope: {
                busy: "=",
                "class": "@",
                disabledClass: "@",
                enabledClass: "@",
                form: "=",
                value: "@"
            }
        }
    })
})();
(function () {
    function b(b, d, e) {
        b.autoPlay = false;
        b.currentIndex = null;
        b.hasVideo = false;
        b.items = [];
        b.slideShowPromise = null;
        b.slideShow = b.slideShow !== void 0 ? b.slideShow : true;
        b.videoUrl = "ide/imgs/blank.png";
        b.iframeWidth = 360;
        b.iframeHeight = 240;
        b.youtubeRelated = false;
        b.youtubeControls = false;
        b.youtubeShowinfo = false;
        b.addToGallery = function (d, e, h, j) {
            j = j !== void 0 ? j : false;
            b.items.push({
                image: d,
                caption: e,
                video: h
            });
            j && b._select(b.items.length - 1)
        };
        b.init = function () {
            b.reset();
            b.$watch("items", b.reset)
        };
        b.reset =
            function () {
                b._select(0);
                b.slideShow && b.startSlideShow()
            };
        b.select = function (e) {
            b.slideShowPromise && d.cancel(b.slideShowPromise);
            b._select(e)
        };
        b._select = function (d) {
            b.currentIndex = d;
            if ((d = b.items ? b.items[b.currentIndex] : null) && d.video) {
                b.hasVideo = true;
                var d = d.video,
                    g = d.indexOf("youtube.com") != -1,
                    h = {};
                h.autoplay = b.autoPlay ? 0 : 1;
                if (g) {
                    h.controls = b.youtubeControls ? 0 : 1;
                    h.rel = b.youtubeRelated ? 0 : 1;
                    h.showinfo = b.youtubeShowinfo ? 0 : 1
                }
                d = d + ("?" + $.param(h));
                b.videoUrl = e.trustAsResourceUrl(d)
            } else {
                b.hasVideo = false;
                b.videoUrl = "ide/imgs/blank.png"
            }
            return false
        };
        b.startSlideShow = function () {
            b.slideShowPromise && d.cancel(b.slideShowPromise);
            if (b.items && !(b.items.length < 1)) b.slideShowPromise = d(function () {
                b.currentIndex = b.currentIndex < b.items.length ? b.currentIndex + 1 : 0;
                b._select(b.currentIndex)
            }, 8E3)
        };
        b.init()
    }
    angular.module("common").directive("thumbnailGallery", function () {
        return {
            controller: ["$scope", "$interval", "$sce", b],
            scope: {
                autoPlay: "@",
                items: "=",
                iframeWidth: "@",
                iframeHeight: "@",
                slideShow: "=?"
            },
            restrict: "E",
            templateUrl: "/js/ng-app/common/thumbnailGallery.directive.html"
        }
    }).directive("thumbnailGalleryImg", function () {
        return {
            controller: ["$scope", "$interval", "$sce", b],
            link: function (b, d, e) {
                console.log(e);
                d.find("ng-transclude > img").each(function (d, e) {
                    b.addToGallery(e.attributes.src.nodeValue, e.attributes.caption ? e.attributes.caption.nodeValue : null, e.attributes.video ? e.attributes.video.nodeValue : null, e.attributes.selected != null);
                    e.remove()
                })
            },
            restrict: "E",
            scope: {
                autoPlay: "@",
                iframeWidth: "@",
                iframeHeight: "@",
                slideShow: "="
            },
            templateUrl: "/js/ng-app/common/thumbnailGalleryImg.directive.html",
            transclude: true
        }
    })
})();
(function () {
    angular.module("common").filter("trustAsHtml", ["$sce", function (b) {
        return function (c) {
            return b.trustAsHtml(c)
        }
    }])
})();
(function () {
    angular.module("common").directive("uniqueUsername", ["api", function (b) {
        return {
            require: "ngModel",
            link: function (c, d, e, f) {
                f.$asyncValidators.uniqueUsername = function (c, d) {
                    return b.validateUsername(c || d)
                }
            }
        }
    }])
})();
(function () {
    function b() {
        return {
            buildUrl: function (b, d) {
                var e = this.buildQuery(d);
                return b + "?" + e
            },
            buildQuery: function (b) {
                return jQuery.param(b)
            }
        }
    }
    angular.module("common").factory("urlHelper", b);
    b.$inject = []
})();
(function () {
    angular.module("common").factory("uuid", function () {
        return {
            v4: function () {
                var b = "",
                    c;
                for (c = 0; c < 36; c++) b = c === 14 ? b + "4" : c === 19 ? b + "89ab".charAt(Math.random() * 4) : c === 8 || c === 13 || c === 18 || c === 23 ? b + "-" : b + "0123456789abcdef".charAt(Math.random() * 16);
                return b
            }
        }
    })
})();
(function () {
    angular.module("common").factory("username", ["$http", "$q", function (b, c) {
        return {
            safeUsernameIndex: 0,
            safeUsernames: [],
            fetchSafeUsernames: function () {
                var d = c.defer();
                b({
                    method: "GET",
                    url: "/api/generateusernames",
                    data: $.param({
                        n: 20
                    }),
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).success(function (b) {
                    if (b.status == "success") {
                        this.safeUsernames = b.safe_usernames;
                        d.resolve()
                    } else d.reject()
                }.bind(this)).error(function () {
                    d.reject()
                });
                return d.promise
            },
            fetchRandom: function () {
                var b =
                    c.defer();
                this.safeUsernameIndex++;
                this.safeUsernameIndex >= this.safeUsernames.length ? this.fetchSafeUsernames().then(function () {
                    this.safeUsernameIndex = 0;
                    b.resolve(this.safeUsernames[this.safeUsernameIndex])
                }.bind(this)) : b.resolve(this.safeUsernames[this.safeUsernameIndex]);
                return b.promise
            }
        }
    }])
})();
(function () {
    angular.module("common").directive("wizardActions", function () {
        return {
            restrict: "E",
            templateUrl: "/js/ng-app/common/wizardActions.directive.html",
            scope: {
                busy: "=",
                hasPrevious: "=",
                hasNext: "=",
                previous: "=",
                next: "=",
                form: "="
            }
        }
    })
})();
(function () {
    angular.module("components", [])
})();
(function () {
    angular.module("common").directive("codeySlider", [function () {
        return {
            controller: ["$scope", "$timeout", function (b, c) {
                b.labels = [];
                b.values = [];
                b.value = null;
                b.index = null;
                b.cursorMarginLeft = null;
                b.cursorLeft = null;
                b.cursorX = null;
                b.draggingCursor = false;
                b.cursorMousedown = function (d) {
                    b.draggingCursor = true;
                    b.lastX = d.pageX;
                    angular.element("body").one("mouseup", function () {
                        c(function () {
                            b.draggingCursor = false;
                            b.cursorMouseup()
                        })
                    })
                };
                b.cursorMouseup = function () {
                    b.draggingCursor = false;
                    var d = Math.round(b.cursorX /
                        100 * b.values.length);
                    c(function () {
                        b.setIndex(d)
                    })
                };
                b.cursorMousemove = function (d) {
                    if (b.draggingCursor) {
                        c(function () {
                            b.deltaX = (d.pageX - b.lastX) / b.lastX;
                            b.lastX = d.pageX;
                            b.setCursorX(b.cursorX + b.deltaX * 100)
                        });
                        console.log(b.cursorX)
                    }
                };
                b.init = function () {
                    b.index = 0;
                    angular.element("body").keyup(function (d) {
                        var e = b.index;
                        d.keyCode == 37 && e--;
                        d.keyCode == 39 && e++;
                        c(function () {
                            b.setIndex(e)
                        })
                    })
                };
                b.setCursorX = function (c) {
                    c < 0 && (c = 0);
                    c > 100 && (c = 100);
                    b.cursorX = c
                };
                b.setIndex = function (c) {
                    c < 0 && (c = 0);
                    c > b.values.length - 1 &&
                        (c = b.values.length - 1);
                    b.value = b.values[c];
                    b.cursorX = b.index / (b.values.length - 1) * 100
                };
                b.$watch("value", function () {
                    b.index = b.values.indexOf(b.value);
                    b.label = b.labels[b.index];
                    b.model = b.value
                });
                b.$watch("model", function () {
                    b.value = b.model
                });
                b.$watch("index", function () {
                    b.cursorX = b.index / (b.values.length - 1) * 100
                });
                b.$watch("cursorX", function () {
                    b.cursorLeft = b.cursorX + "%";
                    b.cursorMarginLeft = "0 0 0 " + -8 * (6 + b.index) + "px"
                });
                b.init()
            }],
            link: function (b, c) {
                b.sticky && c.find(".codey-slider").waypoint("sticky", {
                    offset: 60
                })
            },
            restrict: "E",
            scope: {
                model: "=",
                sticky: "="
            },
            transclude: true,
            templateUrl: "/js/ng-app/components/codeySlider.directive.html"
        }
    }]).directive("codeySliderOption", function () {
        return {
            controller: ["$scope", function (b) {
                b.setSliderValue = function (c) {
                    b.$parent.$parent.value = c
                };
                b.$watch("$parent.$parent.value", function (c) {
                    b.selected = c == b.value
                })
            }],
            link: function (b, c, d) {
                c = c.find("[ng-transclude]").find("span").text();
                b.$parent.$parent.values.push(b.value);
                b.$parent.$parent.labels.push(c);
                d.selected !== void 0 && d.selected !==
                    "false" && b.setSliderValue(b.value)
            },
            restrict: "E",
            scope: {
                value: "@"
            },
            transclude: true,
            templateUrl: "/js/ng-app/components/codeySliderOption.directive.html"
        }
    })
})();
(function () {
    angular.module("common").directive("collapsiblePanel", function () {
        return {
            controller: ["$scope", "$parse", function (b, c) {
                var d = c(b.collapse),
                    e = c(b.expand);
                b.collapsePanel = function () {
                    b.collapsed = true;
                    d(b.$parent)
                };
                b.expandPanel = function () {
                    b.collapsed = false;
                    e(b.$parent)
                };
                b.init = function () {
                    b.collapsed = angular.isDefined(b.collapsed) ? b.collapsed : false;
                    b.collapseLabel = angular.isDefined(b.collapseLabel) ? b.collapseLabel : "Collapse";
                    b.expandLabel = angular.isDefined(b.expandLabel) ? b.expandLabel : "Expand"
                };
                b.init()
            }],
            transclude: true,
            restrict: "E",
            scope: {
                collapseIconClass: "@",
                collapseLabel: "@",
                expandLabel: "@",
                expandIconClass: "@",
                collapse: "@",
                collapsed: "=?",
                expand: "@"
            },
            templateUrl: "/js/ng-app/components/collapsiblePanel.directive.html"
        }
    })
})();
(function () {
    angular.module("common").directive("collectEmail", ["collectEmail", function (b) {
        return {
            restrict: "A",
            link: function (c, d) {
                d.click(function () {
                    b.open()
                })
            }
        }
    }])
})();
(function () {
    function b(b, e) {
        return {
            open: function (f) {
                f = e.open({
                    controller: c,
                    controllerAs: "vm",
                    templateUrl: "/js/ng-app/components/collect-email-v3.factory.html",
                    locals: {
                        role: f !== void 0 ? f : "parent"
                    }
                });
                f.opened.then(function () {
                    b.ga("send", "event", "Email Collector Modal", "Show");
                    new Foundation.Equalizer(angular.element(".collect-email-v2 > .zf-row"))
                });
                f.closed.then(function () {
                    b.ga("send", "event", "Email Collector Modal", "Dismiss");
                    angular.element.cookie("dismissed_email_collector_modal", true)
                });
                return f
            }
        }
    }

    function c(b, c, f, g) {
        var h = this;
        c.optimizely = c.optimizely || [];
        h.join = function () {
            f.addSubscription({
                email: h.email,
                role: h.role,
                strict: false,
                type: "email-collector-modal"
            }).then(function (b) {
                h.subscriptionId = b;
                h.step = "profile";
                h.error = null;
                c.ga("send", "event", "Email Collector Modal", "Submit");
                angular.element.cookie("submitted_email_collector_modal", true, {
                    expires: 3650
                })
            }, function (b) {
                h.error = b
            });
            c.optimizely.push(["trackEvent", "emailCollectorFormSubmitted"]);
            c.optimizely.push(["trackEvent", h.role + " EmailCollectorFormSubmitted"])
        };
        h.role = g;
        h.step = "join";
        h.steps = ["join", "profile", "thanks"];
        h.subscriptionId = null;
        h.updateProfile = function () {
            f.updateSubscription(h.subscriptionId, {
                fname: h.fname,
                lname: h.lname,
                email: h.email,
                role: h.role,
                strict: false,
                type: "email-collector-modal"
            }).then(function () {
                h.error = null;
                h.step = "thanks";
                c.ga("send", "event", "Email Collector Modal", "Complete")
            });
            c.optimizely.push(["trackEvent", "emailCollectorFormCompleted"]);
            c.optimizely.push(["trackEvent", b.role + "EmailCollectorFormCompleted"])
        }
    }
    angular.module("common").factory("collectEmail",
        b);
    b.$inject = ["$window", "modal"];
    c.$inject = ["$scope", "$window", "api", "role"]
})();
(function () {
    function b(b, d, e) {
        var f = this;
        b.optimizely = b.optimizely || [];
        var g, h = f.mouseout !== void 0 ? f.mouseout != "false" : true,
            j;
        if (f.timeout === void 0) {
            g = 45;
            j = true
        } else if (f.timeout === "true") {
            g = 45;
            j = true
        } else if (f.timeout === "false") j = false;
        else if (f.timeout) {
            g = f.timeout;
            j = true
        }
        f.canOpen = function () {
            var b = angular.element("meta[name=enable_collector_modal]").attr("content") == "false" ? false : true,
                c = angular.element.cookie("dismissed_email_collector_modal") || angular.element.cookie("submitted_email_collector_modal"),
                d = angular.element.modal.isActive() || angular.element("body").hasClass("is-reveal-open");
            return b && !c && !d
        };
        f.init = function () {
            if (f.canOpen()) {
                f.isOpen = false;
                h && angular.element(document).bind("mouseout", function (b) {
                    b = b ? b : window.event;
                    b = b.relatedTarget || b.toElement;
                    (!b || b.nodeName === "HTML") && f.openModal()
                });
                j && setTimeout(function () {
                    f.openModal()
                }, g * 1E3)
            }
        };
        f.onClose = function () {
            f.isOpen = false
        };
        f.openModal = function () {
            if (!f.isOpen && f.canOpen()) {
                f.isOpen = true;
                e.open(f.role).closed.then(f.onClose)
            }
        };
        f.init()
    }
    angular.module("common").directive("collectEmailOnEvent", function () {
        return {
            bindToController: {
                role: "@",
                mouseout: "@?",
                timeout: "@?"
            },
            controller: b,
            controllerAs: "vm",
            restrict: "E"
        }
    });
    b.$inject = ["$window", "api", "collectEmail"]
})();
(function () {
    function b(b, d, e) {
        d.optimizely = d.optimizely || [];
        b.subscriptionId = null;
        b.steps = ["join", "profile", "thanks"];
        b.step = "join";
        b.role = "parent";
        b.join = function () {
            e.addSubscription({
                email: b.email,
                role: b.role,
                strict: false,
                type: "email-collector-banner"
            }).then(function (d) {
                b.subscriptionId = d;
                b.step = "profile";
                b.error = null;
                ga("send", "event", "Email Collector Banner", "Submit")
            }, function (d) {
                b.error = d
            });
            d.optimizely.push(["trackEvent", "emailCollectorFormSubmitted"]);
            d.optimizely.push(["trackEvent", b.role +
                "EmailCollectorFormSubmitted"
            ])
        };
        b.updateProfile = function () {
            e.updateSubscription(b.subscriptionId, {
                fname: b.fname,
                lname: b.lname,
                email: b.email,
                role: b.role,
                strict: false,
                type: "email-collector-banner"
            }).then(function () {
                b.error = null;
                b.step = "thanks";
                ga("send", "event", "Email Collector Banner", "Complete")
            });
            d.optimizely.push(["trackEvent", "emailCollectorFormCompleted"]);
            d.optimizely.push(["trackEvent", b.role + "EmailCollectorFormCompleted"])
        }
    }
    angular.module("common").directive("emailCollectorBanner", function () {
        return {
            controller: ["$scope",
                "$window", "api", b
            ],
            templateUrl: "/js/ng-app/components/emailCollectorBanner.directive.html",
            restrict: "E",
            scope: {
                role: "@"
            }
        }
    })
})();
(function () {
    angular.module("components").directive("floatingLabelText", function () {
        function b(b) {
            var e = b.prev("label");
            b.val() !== "" ? e.addClass(c) : e.removeClass(c)
        }
        var c = "show";
        return {
            link: function (c, e, f) {
                e.attr("placeholder", f.floatingLabelText);
                e.wrap('<div class="input-floating-label"></div>');
                e.parent().prepend("<label>" + f.floatingLabelText + "</label>");
                e.bind("checkval", function () {
                    var c = $(this);
                    b(c)
                }).on("keyup", function () {
                    var c = $(this);
                    b(c)
                }).on("focus", function () {
                    $(this).prev("label").addClass("focus")
                }).on("blur",
                    function () {
                        $(this).prev("label").removeClass("focus")
                    });
                b(e)
            },
            restrict: "A"
        }
    })
})();
(function () {
    function b() { }
    angular.module("common").directive("loadingIndicator", function () {
        return {
            bindToController: {},
            controller: b,
            controllerAs: "vm",
            restrict: "E",
            scope: {},
            templateUrl: "/js/ng-app/components/loading-indicator.directive.html"
        }
    });
    b.$inject = []
})();
(function () {
    angular.module("components").factory("modal", ["$compile", "$controller", "$http", "$q", "$rootScope", "$timeout", "$templateCache", function (b, c, d, e, f, g, h) {
        return {
            open: function (j) {
                var k = e.defer(),
                    l = null,
                    m = e.defer(),
                    n = j.controller,
                    q = j.controllerAs,
                    p = j.templateUrl,
                    s = {};
                if (j.locals)
                    for (var r in j.locals) s[r] = j.locals[r];
                var o = {};
                if (j.closeOnClick !== void 0) o.closeOnClick = j.closeOnClick;
                if (j.closeOnEsc !== void 0) o.closeOnEsc = j.closeOnEsc;
                var t = j.initFoundation !== void 0 ? j.initFoundation : false;
                d.get(p, {
                    cache: h
                }).then(function (d) {
                    var e = f.$new();
                    if (n) {
                        s.$scope = e;
                        var h = c(n, s);
                        q && (e[q] = h)
                    }
                    var j = b(d.data)(e);
                    g(function () {
                        var b = $(j);
                        l = new Foundation.Reveal(b, o);
                        l.open();
                        l.$element.one("closed.zf.reveal", function () {
                            k.resolve();
                            g(function () {
                                var b = l.$element;
                                l.destroy();
                                b.remove()
                            })
                        });
                        t && l.$element.find("> *").foundation();
                        m.resolve(l.$element)
                    })
                }, function () {
                    k.reject();
                    m.reject()
                });
                return {
                    close: function () {
                        l.close()
                    },
                    closed: k.promise,
                    opened: m.promise
                }
            }
        }
    }])
})();
(function () {
    function b(b, d, e) {
        this.message = b.trustAsHtml(d);
        this.title = e
    }
    angular.module("components").factory("modalAlert", ["$q", "$window", "modal", function (c, d, e) {
        return function (d, g) {
            g = g !== void 0 ? g : "Alert";
            return c(function (c, j) {
                var k = e.open({
                    controller: b,
                    controllerAs: "vm",
                    templateUrl: "/js/ng-app/components/modalAlert.factory.html",
                    locals: {
                        message: d,
                        title: g
                    }
                });
                k.opened.then(function () {
                    c()
                }, function () {
                    j()
                });
                k.closed.then(function () {
                    c()
                })
            })
        }
    }]);
    b.$inject = ["$sce", "message", "title"]
})();
(function () {
    function b(b, e, f) {
        return {
            confirm: function (g, h) {
                return b(function (b, d) {
                    var l = false,
                        m = {
                            controller: c,
                            controllerAs: "vm",
                            templateUrl: "/js/ng-app/components/modal-confirm.factory.html",
                            locals: {
                                confirm: function () {
                                    l = true;
                                    n.close();
                                    b()
                                },
                                message: g,
                                options: h
                            }
                        };
                    h = h !== void 0 ? h : {};
                    if (h.closeOnClick !== void 0) m.closeOnClick = h.closeOnClick;
                    if (h.closeOnEsc !== void 0) m.closeOnEsc = h.closeOnEsc;
                    var n = f.open(m);
                    n.opened.then(function () { }, function () {
                        e.confirm(g) ? b() : d()
                    });
                    n.closed.then(function () {
                        angular.element(".reveal-overlay").hide();
                        l || d()
                    })
                })
            }
        }
    }

    function c(b, c, f, g) {
        this.options = g !== void 0 ? g : {};
        this.title = this.options.title !== void 0 ? this.options.title : "Please Confirm";
        this.confirmLabel = this.options.confirmLabel !== void 0 ? this.options.confirmLabel : "OK";
        this.cancelLabel = this.options.cancelLabel !== void 0 ? this.options.cancelLabel : "Cancel";
        this.showCloseButton = this.options.showCloseButton !== void 0 ? this.options.showCloseButton : true;
        this.message = b.trustAsHtml(f);
        this.confirm = c
    }
    angular.module("components").factory("modalConfirm", b);
    b.$inject = ["$q", "$window", "modal"];
    c.$inject = ["$sce", "confirm", "message", "options"]
})();
(function () {
    function b(b, d, e, f, g, h, j, k, l) {
        function m() {
            e.location = "/ide?p=" + n.project.id
        }
        var n = this,
            l = l != null ? l : {};
        n.edit = m;
        n.embeddedShowViewCode = l.embeddedShowViewCode != null ? l.embeddedShowViewCode : null;
        n.enableGoToProjectPage = l.enableGoToProjectPage !== void 0 ? l.enableGoToProjectPage : null;
        n.enableEdit = l.enableEdit !== void 0 ? l.enableEdit : false;
        n.enableLike = l.enableLike !== void 0 ? l.enableLike : true;
        n.enableNavigation = l.projects && l.projects.length > 1;
        n.enableOpen = l.enableOpen !== void 0 ? l.enableOpen : true;
        n.enableRemix = l.enableRemix !== void 0 ? l.enableRemix : true;
        n.enableReport = l.enableReport !== void 0 ? l.enableReport : true;
        n.project = k;
        n.hasPrevious = function () {
            return n.projects.indexOf(n.project) > 0
        };
        n.hasNext = function () {
            return n.projects.indexOf(n.project) < n.projects.length - 1
        };
        n.iframeSrc = "ide/imgs/blank.png";
        n.iframeHeight = 392;
        n.like = function () {
            n.project.userLiked || (n.project.projectActivity ? f.likeProjectActivity(n.project.cid).then(function () {
                n.project.userLiked = true;
                n.project.likes = n.project.likes + 1
            }) :
                f.likeProject(n.project.id).then(function () {
                    n.project.userLiked = true;
                    n.project.likes = n.project.likes + 1
                }))
        };
        n.next = function () {
            if (n.projects) {
                var b = n.projects.indexOf(n.project);
                if (n.hasNext()) n.project = n.projects[b + 1]
            }
        };
        n.openProject = function () {
            window.location = "ide/?p=" + n.project.id
        };
        n.openProjectPage = function () {
            window.location = "/play?p=" + n.project.id
        };
        n.previous = function () {
            if (n.projects) {
                var b = n.projects.indexOf(n.project);
                if (n.hasPrevious) n.project = n.projects[b - 1]
            }
        };
        n.projects = l.projects != null ?
            l.projects : null;
        n.remix = function () {
            m()
        };
        n.report = function () {
            n.project.projectActivity ? g.confirm('You can report projects that use bad words, contain personal information, or are rude or mean. Are you sure you want to report <strong>"' + n.project.name + '"</strong>?').opened.then(function () {
                f.reportProject(n.project.id).then(function () {
                    d.$emit("projectReported", n.project);
                    modalAlert("We will review this project based on our publishing guidelines.", "Thank you for your feedback")
                })
            }) : j.confirm("project",
                n.project).then(function () {
                    d.$emit("projectReported", n.project)
                })
        };
        n.share = function () {
            h(n.project.id, n.project.name)
        };
        n.showProjectConcepts = l.showProjectConcepts != null ? l.showProjectConcepts : true;
        n.showProjectInformation = l.showProjectInformation != null ? l.showProjectInformation : true;
        n.showProjectOverview = l.showProjectOverview != null ? l.showProjectOverview : true;
        n.unlike = function () {
            n.project.userLiked && (n.project.projectActivity ? f.unlikeProjectActivity(n.project.cid).then(function () {
                n.project.userLiked =
                    false;
                n.project.likes = n.project.likes - 1
            }) : f.unlikeProject(n.project.id).then(function () {
                n.project.userLiked = false;
                n.project.likes = n.project.likes - 1
            }))
        };
        n.getPublisherName = function () {
            if (n.project.publisherName) return n.project.publisherName;
            var b = n.project.username,
                c = b.indexOf("@");
            return c == -1 ? b : b.slice(0, c)
        };
        d.$watch("vm.project.id", function () {
            var d = {
                p: n.project.id
            };
            if (n.embeddedShowViewCode !== null) d.svc = n.embeddedShowViewCode;
            n.iframesrc = "ide/embedded?" + b(d);
            n.showProjectInformation && f.getProjectInfo(n.project.id).then(function (b) {
                n.project.details =
                    b.details;
                n.project.description = !(!b.description || b.description == "Please add a description for your lesson" || b.description == "Enter your project description here") ? b.description : null;
                if (n.showProjectConcepts && b.concepts) {
                    var c = "  ",
                        d = 0;
                    $.each(b.concepts, function (b) {
                        c = c + (b + ", ");
                        d++
                    });
                    if (d > 0) n.conceptsStr = c
                }
                n.project.actors = b.actors;
                n.project.costumer = b.costumes;
                n.project.lines = b.lines;
                n.project.scripts = b.scripts;
                n.project.tynkerblocks = b.tynkerblocks;
                n.showOverview = n.project.actors || n.project.costumes ||
                    n.project.lines || n.project.scripts || n.project.tynkerblocks
            })
        })
    }
    angular.module("components").factory("modalPlayProject", ["$q", "modal", function (c, d) {
        return function (e, f) {
            return c(function () {
                d.open({
                    controller: b,
                    controllerAs: "vm",
                    templateUrl: "/js/ng-app/components/modal-play-project.factory.html",
                    locals: {
                        project: e,
                        options: f
                    }
                })
            })
        }
    }]);
    b.$inject = ["$httpParamSerializer", "$scope", "$window", "api", "modalConfirm", "modalShareProject", "modalReportCommunityAsset", "project", "options"]
})();
(function () {
    function b(b, e, f) {
        return function (g, h, j) {
            return b(function (b, d) {
                f.open({
                    controllerAs: "vm",
                    controller: c,
                    templateUrl: "/js/ng-app/components/modal-share-minecraft-resource.factory.html",
                    locals: {
                        resourceType: g,
                        resource: h,
                        isAnon: false,
                        hasClass: false,
                        hasParent: false,
                        role: "parent",
                        shared: j
                    }
                }).opened.then(function () {
                    e.ga("send", "event", "Minecraft Share Modal", "Open", g != "entity" ? "mob" : g);
                    b.apply(arguments)
                }, d)
            })
        }
    }

    function c(b, c, f, g, h, j, k, l, m, n, q, p) {
        function s(b) {
            b = b.trim().toLowerCase();
            b = b.replace(/[^a-zA-Z0-9]/g,
                "-");
            (b = b.replace(/--+/g, "-")) || (b = "default");
            return b
        }

        function r() {
            switch (o.resourceType) {
                case "block":
                    return "/minecraft/texture-packs/blocks/view/" + o.resource.blockid + "/" + s(o.resource.name) + "/" + o.resource.id;
                case "entity":
                    return "/minecraft/texture-packs/mobs/view/" + o.resource.entityid + "/" + s(o.resource.name) + "/" + o.resource.id;
                case "item":
                    return "/minecraft/texture-packs/items/view/" + o.resource.itemid + "/" + s(o.resource.name) + "/" + o.resource.id;
                case "skin":
                    return "/minecraft/skins/view/" + s(o.resource.name) +
                        "/" + o.resource.id
            }
        }
        var o = this;
        o.assetId = n.id;
        o.assetName = null;
        o.assetTitle = n.name;
        o.assetType = q;
        o.assetImage = null;
        o.busy = false;
        o.facebookAppId = k;
        o.captchaCode = null;
        o.captchaRandom = null;
        o.currentTab = null;
        o.tabs = {};
        o.resource = n;
        o.resourceType = q;
        o.resourceTypeDisplay = q == "entity" ? "mob" : q;
        o.shared = p !== void 0 ? p : false;
        o.communityShare = function () {
            g.ga("send", "event", "Minecraft Share Modal", "Share", "Community");
            o.busy = true;
            o.assetType == "mod" ? h.shareToCommunity(o.assetId).then(function () {
                o.busy = false;
                o.error =
                    "";
                o.success = "Successfully published!";
                o.shared = true;
                b.$emit("minecraftResource.shared", o.assetType, o.assetId)
            }, function (b) {
                o.busy = false;
                o.success = "";
                o.error = b
            }) : h.shareAssetToCommunity(o.assetType, o.assetId).then(function () {
                o.busy = false;
                o.error = "";
                o.success = "Successfully published!";
                o.shared = true;
                b.$emit("minecraftResource.shared", o.assetType, o.assetId)
            }, function (b) {
                o.busy = false;
                o.success = "";
                o.error = b
            })
        };
        o.communityUnshare = function () {
            g.ga("send", "event", "Minecraft Share Modal", "Unshare", "Community");
            o.busy = true;
            o.assetType == "mod" ? h.unshareFromCommunity(o.assetId).then(function () {
                o.busy = false;
                o.error = "";
                o.success = "Successfully unpublished!";
                o.shared = false;
                b.$emit("minecraftResource.unshared", o.assetType, o.assetId)
            }, function (b) {
                o.busy = false;
                o.success = "";
                o.error = b
            }) : h.unshareAssetFromCommunity(o.assetType, o.assetId).then(function () {
                o.busy = false;
                o.error = "";
                o.success = "Successfully unpublished!";
                o.shared = false;
                b.$emit("minecraftResource.unshared", o.assetType, o.assetId)
            }, function (b) {
                o.busy = false;
                o.success =
                    "";
                o.error = b
            })
        };
        o.emailParent = function () {
            g.ga("send", "event", "Minecraft Share Modal", "Share", "Email Parent");
            o.busy = true;
            h.sendMinecraftAssetEmail(o.resource.id).then(function () {
                o.busy = false;
                o.error = "";
                o.success = "Shared successfully!"
            }, function (b) {
                o.busy = false;
                o.success = "";
                o.error = b
            })
        };
        o.emailShare = function () {
            g.ga("send", "event", "Minecraft Share Modal", "Share", "Email");
            o.busy = true;
            h.sendMinecraftAssetEmail(o.assetId, o.displayName, o.email, o.captchaCode, o.resourceShareUrl, o.assetImage).then(function () {
                o.busy =
                    false;
                o.success = "Shared successfully!"
            }, function (b) {
                o.busy = false;
                o.error = b;
                o.generateCaptcha()
            })
        };
        o.facebookShare = function () {
            g.ga("send", "event", "Minecraft Share Modal", "Share", "Facebook");
            shareFacebook(o.resourceShareUrl, {
                appId: o.facebookAppId,
                serverName: f.host()
            })
        };
        o.generateCaptcha = function () {
            o.captchaRandom = "/api/captcha?r=" + Math.random();
            o.captchaCode = null
        };
        o.googlePlusShare = function () {
            g.ga("send", "event", "Minecraft Share Modal", "Share", "Google+");
            shareGooglePlus(o.resourceShareUrl)
        };
        o.init =
            function () {
                o.busy = true;
                h.modalShare().then(function (b) {
                    o.hasClass = b.hasClass;
                    o.hasParent = b.hasParent;
                    o.isAnon = b.isAnonymous;
                    o.role = b.role;
                    if (o.role == "student" && !o.isAnon) {
                        o.tabs = {
                            community: "Community"
                        };
                        o.currentTab = "community"
                    } else {
                        o.tabs = {
                            social: "Social"
                        };
                        o.currentTab = "social"
                    }
                    o.busy = false
                });
                o._updateResourceImageUrl();
                o._updateResourceShareUrl()
            };
        o.setCurrentTab = function (b) {
            o.currentTab = b
        };
        o.twitterShare = function () {
            g.ga("send", "event", "Minecraft Share Modal", "Share", "Twitter");
            var b = q != "entity" ?
                "mob" : q;
            shareTwitter(o.resourceShareUrl, o.assetTitle, {
                serverName: f.host(),
                hashTags: "tynker,minecraft," + b
            })
        };
        o.supportsPocket = function () {
            return o.resource.versions ? o.resource.versions.indexOf("pocket") != -1 : o.version == "pocket"
        };
        o._updateResourceImageUrl = function () {
            var b = "/minecraft/api/" + o.resourceType + "?id=" + o.resource.id;
            o.resource.snapshotId ? o.resourceImageUrl = "/api/minecraft-editor/getfile?fileId=" + o.resource.snapshotId : o.resourceType == "skin" ? m(o.resource).then(function (b) {
                o.resourceImageUrl = b
            }) :
                o.resourceType == "entity" ? l(o.resource).then(function (b) {
                    o.resourceImageUrl = b
                }) : o.resourceImageUrl = o.resourceType == "mod" ? o.resource.screenshot ? o.resource.screenshot : "/assets/pscreenshot/" + o.resource.id + ".png" : b
        };
        o._updateResourceShareUrl = function () {
            if (o.supportsPocket()) {
                var b = o.resourceType;
                b == "entity" && (b = "mob");
                b = {
                    resourceType: b,
                    resourceId: o.resource.resourceId,
                    resourceAssetId: o.resource.id,
                    resourceName: o.resource.name,
                    version: "pocket"
                };
                o.resourceShareUrl = "https://" + f.host() + j.buildUrl("/minecraft/editor/",
                    b)
            } else o.resourceShareUrl = "https://" + f.host() + r()
        };
        o.init()
    }
    angular.module("components").factory("modalShareMinecraftResource", b);
    b.$inject = ["$q", "$window", "modal"];
    c.$inject = ["$rootScope", "$http", "$location", "$window", "api", "urlHelper", "facebookAppId", "renderMinecraftEntity", "renderMinecraftSkin", "resource", "resourceType", "shared"]
})();
(function () {
    function b(b, e) {
        return function (f) {
            return b(function (b, d) {
                e.open({
                    controllerAs: "vm",
                    controller: c,
                    templateUrl: "/js/ng-app/components/modal-share-notebook.factory.html",
                    locals: {
                        notebook: f
                    }
                }).opened.then(b, d)
            })
        }
    }

    function c(b, c, f, g, h, j, k) {
        var l = this;
        l.busy = false;
        l.captchaCode = null;
        l.captchaRandom = null;
        l.currentTab = null;
        l.displayName = null;
        l.email = null;
        l.hasClass = null;
        l.hasParent = null;
        l.isAnonymous = null;
        l.isOwner = false;
        l.notebook = j;
        l.role = null;
        l.serverName = null;
        l.stageWidth = 660;
        l.stageHeight =
            408;
        l.tabs = {};
        l.communityShare = function () {
            f.ga("send", "event", "Notebook Share Modal", "Share", "Community");
            l.busy = true;
            g.shareAssetToCommunity("notebook", l.notebook.id).then(function () {
                l.busy = false;
                l.error = "";
                l.success = "Successfully published!";
                l.notebook.likes = 0;
                l.notebook.published = true;
                l.notebook.views = 0;
                b.$emit("project.published", [l.notebook.id])
            }, function (b) {
                l.busy = false;
                l.success = "";
                l.error = b
            })
        };
        l.communityUnshare = function () {
            f.ga("send", "event", "Notebook Share Modal", "Unshare", "Community");
            l.busy = true;
            g.unshareAssetFromCommunity("notebook", l.notebook.id).then(function () {
                l.busy = false;
                l.error = "";
                l.success = "Successfully unpublished!";
                l.notebook.likes = null;
                l.notebook.published = false;
                l.notebook.views = null;
                b.$emit("project.unpublished", [l.notebook.id])
            }, function (b) {
                l.busy = false;
                l.success = "";
                l.error = b
            })
        };
        l.emailShare = function () {
            f.ga("send", "event", "Notebook Share Modal", "Share", "Email");
            l.busy = true;
            g.sendNotebookEmail(l.notebook.id, l.displayName, l.email, l.captchaCode, l.shareUrl).then(function () {
                l.busy =
                    false;
                l.error = "";
                l.success = "Shared successfully!"
            }, function (b) {
                l.busy = false;
                l.error = b;
                l.generateCaptcha()
            })
        };
        l.facebookShare = function () {
            f.ga("send", "event", "Notebook Share Modal", "Share", "Facebook");
            h.shareProjectFacebook(l.notebook.id)
        };
        l.getImageUrl = function () {
            return k(l.notebook)
        };
        l.googlePlusShare = function () {
            f.ga("send", "event", "Notebook Share Modal", "Share", "Google+");
            h.shareProjectGooglePlus(l.notebook.id)
        };
        l.init = function () {
            l.busy = true;
            l.error = "";
            l.success = "";
            g.modalShare(l.notebook.id, "notebook").then(function (b) {
                l.notebook =
                    b.asset;
                l.hasClass = b.hasClass;
                l.hasParent = b.hasParent;
                l.isAnonymous = b.isAnonymous;
                l.role = b.role;
                l.isOwner = b.isOwner;
                if (l.role == "student") {
                    l.tabs = [];
                    if (l.isOwner) {
                        l.tabs.push({
                            id: "community",
                            title: "Community"
                        });
                        l.currentTab = "community"
                    }
                    l.isAnonymous && l.tabs.push({
                        id: "email",
                        title: "Email"
                    });
                    l.tabs.push({
                        id: "embed",
                        title: "Embed"
                    });
                    l.currentTab = l.tabs[0].id
                } else {
                    l.tabs = [{
                        id: "community",
                        title: "Community"
                    }, {
                        id: "email",
                        title: "Email"
                    }, {
                        id: "embed",
                        title: "Embed"
                    }, {
                        id: "social",
                        title: "Social"
                    }];
                    l.currentTab =
                        "social"
                }
                l.busy = false;
                f.ga("send", "event", "Notebook Share Modal", "Open", l.notebook.name)
            });
            l.serverName = c.host();
            l.shareUrl = "https://" + l.serverName + "/nb/project/" + l.notebook.id + "/";
            l.generateCaptcha()
        };
        l.reset = function () {
            l.error = null;
            l.success = null;
            l.email = null;
            l.generateCaptcha()
        };
        l.setCurrentTab = function (b) {
            l.currentTab = b
        };
        l.twitterShare = function () {
            f.ga("send", "event", "Notebook Share Modal", "Share", "Twitter");
            h.shareProjectTwitter(l.notebook.id, l.notebook.name, "")
        };
        l.generateCaptcha = function () {
            l.captchaRandom =
                "/api/captcha?r=" + Math.random();
            l.captchaCode = null
        };
        l.init()
    }
    angular.module("components").factory("modalShareNotebook", b);
    b.$inject = ["$q", "modal"];
    c.$inject = ["$rootScope", "$location", "$window", "api", "social", "notebook", "renderNotebook"]
})();
(function () {
    function b(b, e) {
        return function (f, g, h) {
            h = h !== void 0 ? h : false;
            return b(function (b, d) {
                e.open({
                    controllerAs: "vm",
                    controller: c,
                    templateUrl: "/js/ng-app/components/modal-share-project.factory.html",
                    locals: {
                        projectName: g,
                        projectId: f,
                        published: h
                    }
                }).opened.then(b, d)
            })
        }
    }

    function c(b, c, f, g, h, j, k, l, m, n, q) {
        var p = this;
        p.busy = false;
        p.captchaCode = null;
        p.captchaRandom = null;
        p.currentTab = null;
        p.displayName = null;
        p.email = null;
        p.hasClass = null;
        p.hasParent = null;
        p.isAnonymous = null;
        p.isOwner = false;
        p.projectId = m;
        p.projectName = n;
        p.projectScreenShot = null;
        p.role = null;
        p.serverName = null;
        p.stageWidth = 660;
        p.stageHeight = 408;
        p.published = q !== void 0 ? q : false;
        p.tabs = {};
        p.classShare = function () {
            h.ga("send", "event", "Project Share Modal", "Share", "Class");
            p.busy = true;
            j.addToGallery(p.projectId, "class", null, {
                resolveClass: true
            }).then(function () {
                p.busy = false;
                p.error = "";
                p.success = "Shared successfully!";
                b.$emit("project.shared.class", [p.projectId])
            }, function (b) {
                p.busy = false;
                p.success = "";
                p.error = b
            })
        };
        p.communityShare = function (c) {
            h.ga("send",
                "event", "Project Share Modal", "Share", "Community");
            p.busy = true;
            j.shareToCommunity(p.projectId, c).then(function () {
                p.busy = false;
                p.error = "";
                p.success = "Successfully published!";
                p.published = true;
                b.$emit("project.published", [p.projectId])
            }, function (b) {
                p.busy = false;
                p.success = "";
                p.error = b
            })
        };
        p.communitySubmitEntry = function () {
            h.ga("send", "event", "Project Share Modal", "Share", "Community");
            p.busy = true;
            k.getData("summer-code-a-thon-2017").then(function (c) {
                j.shareToCommunity(p.projectId, "system-summer-code-a-thon-2017,system-summer-code-a-thon-2017-week-" +
                    c.data.currentStage).then(function () {
                        p.busy = false;
                        p.error = "";
                        p.success = "Successfully published!";
                        p.published = true;
                        b.$emit("project.published", [p.projectId])
                    }, function (b) {
                        p.busy = false;
                        p.success = "";
                        p.error = b
                    })
            })
        };
        p.communityUnshare = function () {
            h.ga("send", "event", "Project Share Modal", "Unshare", "Community");
            p.busy = true;
            j.unshareFromCommunity(p.projectId).then(function () {
                p.busy = false;
                p.error = "";
                p.success = "Successfully unpublished!";
                p.published = false;
                b.$emit("project.unpublished", [p.projectId])
            }, function (b) {
                p.busy =
                    false;
                p.success = "";
                p.error = b
            })
        };
        p.emailParent = function () {
            h.ga("send", "event", "Project Share Modal", "Share", "Email Parent");
            p.busy = true;
            j.sendProjectEmail(p.projectId).then(function () {
                p.busy = false;
                p.error = "";
                p.success = "Shared successfully!"
            }, function (b) {
                p.busy = false;
                p.success = "";
                p.error = b
            })
        };
        p.emailShare = function () {
            h.ga("send", "event", "Project Share Modal", "Share", "Email");
            p.busy = true;
            j.sendProjectEmail(p.projectId, p.displayName, p.email, p.captchaCode, p.shareUrl).then(function () {
                p.busy = false;
                p.error =
                    "";
                p.success = "Shared successfully!"
            }, function (b) {
                p.busy = false;
                p.error = b;
                p.generateCaptcha()
            })
        };
        p.facebookShare = function () {
            h.ga("send", "event", "Project Share Modal", "Share", "Facebook");
            l.shareProjectFacebook(p.projectId)
        };
        p.googlePlusShare = function () {
            h.ga("send", "event", "Project Share Modal", "Share", "Google+");
            l.shareProjectGooglePlus(p.projectId)
        };
        p.init = function () {
            p.busy = true;
            j.modalShare(p.projectId).then(function (b) {
                p.hasClass = b.hasClass;
                p.hasParent = b.hasParent;
                p.isAnonymous = b.isAnonymous;
                p.role =
                    b.role;
                p.isOwner = b.isOwner;
                if (p.role == "student") {
                    p.tabs = [];
                    if (p.isOwner) {
                        p.tabs.push({
                            id: "community",
                            title: "Community"
                        });
                        p.currentTab = "community"
                    }
                    p.isOwner && (p.hasClass || p.hasParent) && p.tabs.push({
                        id: "connections",
                        title: "Connected to Me"
                    });
                    p.isAnonymous && p.tabs.push({
                        id: "email",
                        title: "Email"
                    });
                    p.tabs.push({
                        id: "embed",
                        title: "Embed"
                    });
                    p.currentTab = p.tabs[0].id
                } else {
                    p.tabs = [{
                        id: "community",
                        title: "Community"
                    }, {
                        id: "email",
                        title: "Email"
                    }, {
                        id: "embed",
                        title: "Embed"
                    }, {
                        id: "social",
                        title: "Social"
                    }];
                    p.currentTab =
                        "social"
                }
                p.busy = false
            });
            p.serverName = g.host();
            var b = b ? b : "https://" + p.serverName + "/play?p=" + m;
            h.ga("send", "event", "Project Share Modal", "Open", n);
            p.error = "";
            p.success = "";
            p.projectId = m;
            p.projectName = n;
            p.shareUrl = b;
            p.projectScreenShot = "/assets/pscreenshot/" + m + ".png?f=true";
            p.generateCaptcha()
        };
        p.parentShare = function () {
            h.ga("send", "event", "Project Share Modal", "Share", "Parent");
            p.busy = true;
            j.addToGallery(p.projectId, "home").then(function () {
                p.busy = false;
                p.error = "";
                p.success = "Shared successfully!"
            }, function (b) {
                p.busy =
                    false;
                p.success = "";
                p.error = b
            })
        };
        p.reset = function () {
            p.error = null;
            p.success = null;
            p.email = null;
            p.generateCaptcha()
        };
        p.setCurrentTab = function (b) {
            p.currentTab = b
        };
        p.twitterShare = function () {
            h.ga("send", "event", "Project Share Modal", "Share", "Twitter");
            l.shareProjectTwitter(p.projectId, p.projectName, p.projectDescription)
        };
        p.generateCaptcha = function () {
            p.captchaRandom = "/api/captcha?r=" + Math.random();
            p.captchaCode = null
        };
        p.init()
    }
    angular.module("components").factory("modalShareProject", b);
    b.$inject = ["$q", "modal"];
    c.$inject = ["$rootScope", "$scope", "$http", "$location", "$window", "api", "hackathonApi", "social", "projectId", "projectName", "published"]
})();
(function () {
    function b(b, d, e, f, g, h) {
        e = e.replace("youtube.com", "youtube-nocookie.com");
        d = e.replace("http://", "//");
        d = d + (d.indexOf("?") > -1 ? "&" : "?") + "autoplay=1&modestbranding=1&rel=0&showinfo=0";
        f != null && (g != null && h != null) && ga("send", "event", f, g, h);
        this.iframeSrc = b.trustAsResourceUrl(d)
    }
    angular.module("components").factory("modalVideo", ["$q", "$window", "modal", function (c, d, e) {
        return {
            play: function (c, g, h, j) {
                g = g !== void 0 ? g : "Site";
                c = e.open({
                    controller: b,
                    controllerAs: "vm",
                    templateUrl: "/js/ng-app/components/modal-video.factory.html",
                    locals: {
                        videoUrl: c,
                        gaCategory: g,
                        gaAction: h !== void 0 ? h : "Link Click",
                        gaLabel: j !== void 0 ? j : "Modal: Video Play"
                    }
                });
                c.closed.then(function () {
                    d.ga("send", "event", g, "Link Click", "Close Video Modal")
                });
                return c
            }
        }
    }]);
    b.$inject = ["$sce", "$window", "videoUrl", "gaCategory", "gaAction", "gaLabel"]
})();
(function () {
    function b(b) {
        var d = this;
        d.play = function () {
            b.play(d.video, "Hour of Code Teacher Page")
        }
    }
    angular.module("common").directive("videoThumbnail", function () {
        return {
            bindToController: {
                thumb: "@",
                video: "@",
                comment: "@"
            },
            controller: b,
            controllerAs: "vm",
            replace: true,
            restrict: "E",
            templateUrl: "/js/ng-app/components/videoThumbnail.directive.html",
            scope: {}
        }
    });
    b.$inject = ["modalVideo"]
})();
(function () {
    angular.module("ide").config(["$locationProvider", "$stateProvider", function (b, c) {
        b.html5Mode({
            enabled: true,
            requireBase: false
        });
        c.state("index", {
            onEnter: ["$timeout", function (b) {
                b(function () {
                    $.modal.close()
                })
            }]
        }).state("signIn", {
            data: {
                modalInstance: null
            },
            onEnter: ["$state", "$timeout", "modalSignInSelectRole", function (b, c, f) {
                var g = f.open({
                    useRoutes: true
                });
                c(function () {
                    b.current.data.modalInstance = g
                });
                g.closed.then(function () {
                    b.current.name == this.name && b.go("index")
                }.bind(this))
            }],
            onExit: ["$state",
                function (b) {
                    b.current.data.modalInstance.close()
                }
            ]
        }).state("signInParent", {
            data: {
                modalInstance: null
            },
            onEnter: ["$state", "$stateParams", "$timeout", "$window", "modalSignIn", function (b, c, f, g, h) {
                g.ga("send", "event", "Sign-in Parent Modal", "Open");
                var j = h.open({
                    next: c.next,
                    role: "parent",
                    useRoutes: true
                });
                f(function () {
                    b.current.data.modalInstance = j
                });
                j.closed.then(function () {
                    b.current.name == this.name && b.go("index")
                }.bind(this))
            }],
            onExit: ["$state", "$window", function (b, c) {
                c.ga("send", "event", "Sign-in Parent Modal",
                    "Close");
                b.current.data.modalInstance.close()
            }]
        }).state("signInStudent", {
            data: {
                modalInstance: null
            },
            onEnter: ["$state", "$stateParams", "$timeout", "$window", "modalSignIn", function (b, c, f, g, h) {
                g.ga("send", "event", "Sign-in Student Modal", "Open");
                var j = h.open({
                    next: c.next,
                    role: "student",
                    useRoutes: true
                });
                f(function () {
                    b.current.data.modalInstance = j
                });
                j.closed.then(function () {
                    b.current.name == this.name && b.go("index")
                }.bind(this))
            }],
            onExit: ["$state", "$window", function (b, c) {
                c.ga("send", "event", "Sign-in Student Modal",
                    "Close");
                b.current.data.modalInstance.close()
            }]
        }).state("signInTeacher", {
            data: {
                modalInstance: null
            },
            onEnter: ["$state", "$stateParams", "$timeout", "$window", "modalSignIn", function (b, c, f, g, h) {
                g.ga("send", "event", "Sign-in Teacher Modal", "Open");
                var j = h.open({
                    next: c.next,
                    role: "teacher",
                    useRoutes: true
                });
                f(function () {
                    b.current.data.modalInstance = j
                });
                j.closed.then(function () {
                    b.current.name == this.name && b.go("index")
                }.bind(this))
            }],
            onExit: ["$state", "$window", function (b, c) {
                c.ga("send", "event", "Sign-in Teacher Modal",
                    "Close");
                b.current.data.modalInstance.close()
            }]
        }).state("join", {
            data: {
                modalInstance: null
            },
            url: "/join/?source",
            onEnter: ["$state", "$stateParams", "$timeout", "$window", "modalJoin", function (b, c, f, g, h) {
                g.ga("send", "event", "Sign-up Modal", "Open");
                var j = h.open({
                    source: c.source,
                    useRoutes: true
                });
                f(function () {
                    b.current.data.modalInstance = j
                });
                j.closed.then(function () {
                    b.current.name == this.name && b.go("index")
                }.bind(this))
            }],
            onExit: ["$state", "$window", function (b, c) {
                c.ga("send", "event", "Sign-up Modal", "Close");
                b.current.data.modalInstance.close()
            }]
        }).state("joinStudent", {
            data: {
                modalInstance: null
            },
            onEnter: ["$state", "$compile", "$http", "$timeout", "$window", "modalJoinStudent", function (b, c, f, g, h, j) {
                h.ga("send", "event", "Sign-up Modal", "Open", "Student");
                var k = j.open({
                    useRoutes: true
                });
                g(function () {
                    b.current.data.modalInstance = k
                });
                k.closed.then(function () {
                    b.current.name == this.name && b.go("index")
                }.bind(this))
            }],
            onExit: ["$state", "$window", function (b, c) {
                c.ga("send", "event", "Sign-up Modal", "Close", "Student");
                b.current.data.modalInstance.close()
            }]
        }).state("joinTeacher", {
            data: {
                modalInstance: null
            },
            onEnter: ["$state", "$timeout", "$window", "modalJoinTeacher", function (b, c, f, g) {
                f.ga("send", "event", "Sign-up Modal", "Open", "Teacher");
                var h = g.open();
                c(function () {
                    b.current.data.modalInstance = h
                });
                h.closed.then(function () {
                    b.current.name == this.name && b.go("index")
                }.bind(this))
            }],
            onExit: ["$state", "$window", function (b, c) {
                c.ga("send", "event", "Sign-up Modal", "Close", "Teacher");
                b.current.data.modalInstance.close()
            }]
        }).state("joinParent", {
            data: {
                modalInstance: null
            },
            onEnter: ["$state", "$timeout", "$window", "modalJoinParent",
                function (b, c, f, g) {
                    f.ga("send", "event", "Sign-up Modal", "Open", "Parent");
                    var h = g.open();
                    c(function () {
                        b.current.data.modalInstance = h
                    });
                    h.closed.then(function () {
                        b.current.name == this.name && b.go("index")
                    }.bind(this))
                }
            ],
            onExit: ["$state", "$window", function (b, c) {
                c.ga("send", "event", "Sign-up Modal", "Close", "Parent");
                b.current.data.modalInstance.close()
            }]
        }).state("joinUnlock", {
            data: {
                modalInstance: null
            },
            onEnter: ["$state", "$timeout", "$window", "modal", function (b, c, f, g) {
                f.ga("send", "event", "Sign-up Modal", "Open");
                var h = g.open({
                    controller: "UnlockController",
                    controllerAs: "vm",
                    templateUrl: "/join/index.html",
                    locals: {}
                });
                c(function () {
                    b.current.data.modalInstance = h
                })
            }],
            onExit: ["$state", "$window", function (b, c) {
                c.ga("send", "event", "Sign-up Modal", "Close");
                b.current.data.modalInstance.close()
            }]
        }).state("forgotPassword", {
            data: {
                modalInstance: null
            },
            onEnter: ["$state", "$timeout", "modalForgotPassword", function (b, c, f) {
                var g = f.open({
                    useRoutes: true
                });
                c(function () {
                    b.current.data.modalInstance = g
                });
                g.closed.then(function () {
                    b.current.name ==
                        this.name && b.go("index")
                }.bind(this))
            }],
            onExit: ["$state", function (b) {
                b.current.data.modalInstance.close()
            }]
        }).state("upgradeUnlock", {
            data: {
                modalInstance: null
            },
            onEnter: ["$state", "$timeout", "$window", "modalUnlock", function (b, c, f, g) {
                f.ga("send", "event", "Upgrade Modal", "Open");
                var h = g.open({
                    closeOnClick: false,
                    closeOnEsc: false,
                    showCloseButton: false
                });
                c(function () {
                    b.current.data.modalInstance = h
                })
            }],
            onExit: ["$state", "$window", function (b, c) {
                c.ga("send", "event", "Sign-up Modal", "Close");
                b.current.data.modalInstance.close()
            }]
        })
    }]);
    angular.element(document).bind("common.account.loggedIn", function (b, c) {
        window.location = c ? c : "/"
    }).bind($.modal.BEFORE_CLOSE, function (b, c) {
        if (!$("#join-view").find(c.elm).size() > 0) return true;
        $("#join-view").scope().$parent.state.go("index")
    })
})();
(function () {
    angular.module("ide.account", [])
})();
(function () {
    angular.module("ide.account").controller("JoinCtrl", ["$scope", "$http", "$state", "$window", "api", "externalAuth", function (b, c, d, e, f, g) {
        b.state = d;
        b.error = null;
        b.busy = false;
        b.signupUser = function (c) {
            b.busy = true;
            return f.addUser(c).then(function () {
                b.onLoginSuccess();
                try {
                    e.optimizely = e.optimizely || [];
                    e.optimizely.push(["trackEvent", c.role + "_account_created"])
                } catch (d) {
                    console.log(d)
                }
            }, function (c) {
                b.busy = false;
                b.error = c
            })
        };
        b.validateUsername = function (b, d) {
            b ? b.length < 6 ? d("Screen name must have at least 6 characters") :
                c({
                    method: "GET",
                    url: "/api/validateusername",
                    params: {
                        u: b
                    }
                }).success(function (b) {
                    b == "true" ? d("Looking good!") : d("Sorry, that screen name is already taken.")
                }) : d("You must provide a screen name")
        };
        b.validatePassword = function (b, c) {
            b ? b.length < 6 ? c("Password must have at least 6 characters") : c("Ok!") : c("You must provide a password.")
        };
        b.validateEmail = function (b, d) {
            b ? b.indexOf("@") == -1 ? d("Doesn't look like a valid email") : c({
                method: "GET",
                url: "/api/validateemail?email=" + b
            }).success(function (b) {
                b.is_valid ?
                    d("Ok") : d("Doesn't look like a valid email")
            }) : d("You must provide a valid email address")
        };
        b.googleLogin = function (c) {
            c = c !== void 0 ? c : {};
            c.popup = true;
            c.source = c.source !== void 0 ? c.source : "join";
            g.googleLogin(c).then(function () {
                b.onLoginSuccess()
            }, function (c) {
                b.error = c
            })
        };
        b.facebookLogin = function (c) {
            c = c !== void 0 ? c : {};
            c.popup = true;
            c.source = c.source !== void 0 ? c.source : "join";
            g.facebookLogin(c).then(function () {
                b.onLoginSuccess()
            }, function (c) {
                b.error = c
            })
        };
        b.onLoginSuccess = function () {
            $(document).trigger("common.account.loggedIn")
        };
        b.$on("$viewContentLoaded", function () {
            setTimeout(function () {
                $("#join-view > .modal").modal()
            }, 0)
        })
    }])
})();
(function () {
    angular.module("ide.account").controller("SignInCtrl", ["$scope", "$http", "api", "externalAuth", function (b, c, d, e) {
        b.error = null;
        b.user = {};
        b.busy = false;
        b.login = function () {
            b.busy = true;
            d.login(b.user.u, b.user.p).then(function () {
                b.onLoginSuccess()
            }, function (c) {
                b.busy = false;
                b.error = c
            })
        };
        b.googleLogin = function () {
            e.googleLogin({
                popup: true
            }).then(function () {
                b.onLoginSuccess()
            }, function (c) {
                b.error = c
            })
        };
        b.facebookLogin = function () {
            e.facebookLogin({
                popup: true
            }).then(function () {
                b.onLoginSuccess()
            }, function (c) {
                b.error =
                    c
            })
        }
    }])
})();
AvatarChooser = {
    currentType: null,
    currentParts: null,
    init: function () {
        _startCheckState();
        $.ajax({
            url: "api/userpref.aspx",
            data: {
                n: "user-avatar"
            },
            success: function (b) {
                if (b) {
                    b = JSON.parse(b);
                    b.type && b.parts && AvatarChooser.showAvatar(b.type, b.parts)
                }
            }
        });
        $("#win-spine").on($.modal.OPEN, function () {
            AvatarChooser.updateId && window.clearInterval(AvatarChooser.updateId);
            AvatarChooser.poseId && window.clearInterval(AvatarChooser.poseId);
            WinSpine.init();
            WinSpine.showCreator(function (b, c) {
                $.modal.close();
                AvatarChooser.currentType = b;
                AvatarChooser.currentParts =
                    c;
                $.ajax({
                    url: "api/userpref.aspx",
                    type: "POST",
                    data: {
                        n: "user-avatar",
                        v: JSON.stringify({
                            type: b,
                            parts: c
                        })
                    }
                });
                AvatarChooser.showAvatar(b, c)
            }, AvatarChooser.currentType, AvatarChooser.currentParts);
            WinSpine.adjustWindow()
        }).on($.modal.CLOSE, function () {
            AvatarChooser.showAvatar(AvatarChooser.currentType, AvatarChooser.currentParts)
        })
    },
    showAvatar: function (b, c, d) {
        d = (d = d && d.length > 0 ? d : $("a[href='#win-spine']")) && d.length > 0 ? d : $(".avatar-selector-current");
        AvatarChooser.currentType = WinSpine.currentType = b;
        AvatarChooser.currentParts =
            WinSpine.currentParts = c;
        WinSpine.loadCharacter(function () {
            AvatarChooser.updateId && window.clearInterval(AvatarChooser.updateId);
            AvatarChooser.poseId && window.clearInterval(AvatarChooser.poseId);
            var c = b == "Troll" ? $('<canvas width="600" height="600"></canvas>') : $('<canvas width="1000" height="1000"></canvas>'),
                f = c[0].getContext("2d");
            if (d.length > 0) {
                d.empty().append(c);
                AvatarChooser.updateId = window.setInterval(function () {
                    WinSpine.updateSkeleton(f)
                }, 1E3 / 60);
                AvatarChooser.poseId = window.setInterval(function () {
                    for (; ;) {
                        var b =
                            WinSpine.skeletonData.animations[Math.floor(Math.random() * WinSpine.skeletonData.animations.length)].name;
                        if (b.indexOf("Fall") < 0 && b.indexOf("Back 3/4") < 0) {
                            WinSpine.state.setAnimationByName(1, b, false);
                            WinSpine.state.addAnimationByName(0, WinSpine.defaultAnimation, true, 0);
                            break
                        }
                    }
                }, 3E3)
            }
        })
    }
};
$(document).ready(AvatarChooser.init);
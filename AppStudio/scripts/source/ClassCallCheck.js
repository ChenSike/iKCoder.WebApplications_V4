(function (b) {
    b.fn.jqte = function (c) {
        function d(b, c, d, e, f) {
            return h.push({
                name: b,
                cls: h.length + 1,
                command: c,
                key: d,
                tag: e,
                emphasis: f
            })
        }
        var e = ["0,0,0", "68,68,68", "102,102,102", "153,153,153", "204,204,204", "238,238,238", "243,243,243", "255,255,255", null, "255,0,0", "255,153,0", "255,255,0", "0,255,0", "0,255,255", "0,0,255", "153,0,255", "255,0,255", null, "244,204,204", "252,229,205", "255,242,204", "217,234,211", "208,224,227", "207,226,243", "217,210,233", "234,209,220", "234,153,153", "249,203,156", "255,229,153", "182,215,168",
                "162,196,201", "159,197,232", "180,167,214", "213,166,189", "224,102,102", "246,178,107", "255,217,102", "147,196,125", "118,165,175", "111,168,220", "142,124,195", "194,123,160", "204,0,0", "230,145,56", "241,194,50", "106,168,79", "69,129,142", "61,133,198", "103,78,167", "166,77,121", "153,0,0", "180,95,6", "191,144,0", "56,118,29", "19,79,92", "11,83,148", "53,28,117", "116,27,71", "102,0,0", "120,63,4", "127,96,0", "39,78,19", "12,52,61", "7,55,99", "32,18,77", "76,17,48"
        ],
            f = b.extend({
                status: !0,
                css: "jqte",
                title: !0,
                titletext: [{
                    title: "Text Format"
                },
                    {
                        title: "Font Size"
                    }, {
                        title: "Color"
                    }, {
                        title: "Bold",
                        hotkey: "B"
                    }, {
                        title: "Italic",
                        hotkey: "I"
                    }, {
                        title: "Underline",
                        hotkey: "U"
                    }, {
                        title: "Ordered List",
                        hotkey: "."
                    }, {
                        title: "Unordered List",
                        hotkey: ","
                    }, {
                        title: "Subscript",
                        hotkey: "down arrow"
                    }, {
                        title: "Superscript",
                        hotkey: "up arrow"
                    }, {
                        title: "Outdent",
                        hotkey: "left arrow"
                    }, {
                        title: "Indent",
                        hotkey: "right arrow"
                    }, {
                        title: "Justify Left"
                    }, {
                        title: "Justify Center"
                    }, {
                        title: "Justify Right"
                    }, {
                        title: "Strike Through",
                        hotkey: "K"
                    }, {
                        title: "Add Link",
                        hotkey: "L"
                    }, {
                        title: "Remove Link"
                    },
                    {
                        title: "Cleaner Style",
                        hotkey: "Delete"
                    }, {
                        title: "Horizontal Rule",
                        hotkey: "H"
                    }, {
                        title: "Source"
                    }
                ],
                button: "OK",
                format: !0,
                formats: [
                    ["p", "Normal"],
                    ["h1", "Header 1"],
                    ["h2", "Header 2"],
                    ["h3", "Header 3"],
                    ["h4", "Header 4"],
                    ["h5", "Header 5"],
                    ["h6", "Header 6"],
                    ["pre", "Preformatted"]
                ],
                fsize: !0,
                fsizes: "10 12 16 18 20 24 28".split(" "),
                funit: "px",
                color: !0,
                linktypes: ["Web Address", "E-mail Address", "Picture URL"],
                b: !0,
                i: !0,
                u: !0,
                ol: !0,
                ul: !0,
                sub: !0,
                sup: !0,
                outdent: !0,
                indent: !0,
                left: !0,
                center: !0,
                right: !0,
                strike: !0,
                link: !0,
                unlink: !0,
                remove: !0,
                rule: !0,
                source: !0,
                placeholder: !1,
                br: !0,
                p: !0,
                change: "",
                focus: "",
                blur: ""
            }, c);
        b.fn.jqteVal = function (c) {
            b(this).closest("." + f.css).find("." + f.css + "_editor").html(c)
        };
        var g = navigator.userAgent.toLowerCase();
        /msie [1-7]./.test(g) && (f.title = !1);
        var h = [];
        d("format", "formats", "", "", !1);
        d("fsize", "fSize", "", "", !1);
        d("color", "colors", "", "", !1);
        d("b", "Bold", "B", ["b", "strong"], !0);
        d("i", "Italic", "I", ["i", "em"], !0);
        d("u", "Underline", "U", ["u"], !0);
        d("ol", "insertorderedlist", "\u00be", ["ol"], !0);
        d("ul", "insertunorderedlist", "\u00bc", ["ul"], !0);
        d("sub", "subscript", "(", ["sub"], !0);
        d("sup", "superscript", "&", ["sup"], !0);
        d("outdent", "outdent", "%", ["blockquote"], !1);
        d("indent", "indent", "'", ["blockquote"], !0);
        d("left", "justifyLeft", "", "", !1);
        d("center", "justifyCenter", "", "", !1);
        d("right", "justifyRight", "", "", !1);
        d("strike", "strikeThrough", "K", ["strike"], !0);
        d("link", "linkcreator", "L", ["a"], !0);
        d("unlink", "unlink", "", ["a"], !1);
        d("remove", "removeformat", ".", "", !1);
        d("rule", "inserthorizontalrule",
            "H", ["hr"], !1);
        d("source", "displaysource", "", "", !1);
        return this.each(function () {
            function c() {
                if (window.getSelection) return window.getSelection();
                if (document.selection && document.selection.createRange && document.selection.type != "None") return document.selection.createRange()
            }

            function d(b, e) {
                var f, h = c();
                if (window.getSelection) {
                    h.anchorNode && h.getRangeAt && (f = h.getRangeAt(0));
                    if (f) {
                        h.removeAllRanges();
                        h.addRange(f)
                    }
                    g.match(/msie/) || document.execCommand("StyleWithCSS", false, false);
                    document.execCommand(b,
                        false, e)
                } else if (document.selection && document.selection.createRange && document.selection.type != "None") {
                    f = document.selection.createRange();
                    f.execCommand(b, false, e)
                }
                m(false, false)
            }

            function l(d, e, f) {
                E.not(":focus") && E.focus();
                if (window.getSelection) {
                    var g = c(),
                        h, k;
                    if (g.anchorNode && g.getRangeAt) {
                        h = g.getRangeAt(0);
                        d = document.createElement(d);
                        b(d).attr(e, f);
                        k = h.extractContents();
                        d.appendChild(k);
                        h.insertNode(d);
                        g.removeAllRanges();
                        e == "style" ? m(b(d), f) : m(b(d), false)
                    }
                } else if (document.selection && document.selection.createRange &&
                    document.selection.type != "None") {
                    g = document.selection.createRange().htmlText;
                    document.selection.createRange().pasteHTML("<" + d + " " + e + '="' + f + '">' + g + "</" + d + ">")
                }
            }

            function m(b, c) {
                var d = V();
                if ((d = d ? d : b) && c == false) {
                    d.parent().is("[style]") && d.attr("style", d.parent().attr("style"));
                    d.is("[style]") && d.find("*").attr("style", d.attr("style"))
                } else if (b && c && b.is("[style]")) {
                    d = c.split(";");
                    d = d[0].split(":");
                    b.is("[style*=" + d[0] + "]") && b.find("*").css(d[0], d[1]);
                    n(b)
                }
            }

            function n(c) {
                if (c) {
                    c = c[0];
                    if (document.body.createTextRange) {
                        var d =
                            document.body.createTextRange();
                        d.moveToElementText(c);
                        d.select()
                    } else if (window.getSelection) {
                        var e = window.getSelection(),
                            d = document.createRange();
                        if (c != "undefined" && c != null) {
                            d.selectNodeContents(c);
                            e.removeAllRanges();
                            e.addRange(d);
                            if (b(c).is(":empty")) {
                                b(c).append("&nbsp;");
                                n(b(c))
                            }
                        }
                    }
                }
            }

            function q() {
                if (Q.data("sourceOpened")) s(false);
                else {
                    var c = V(),
                        d = "http://";
                    s(true);
                    if (c)
                        if (c.prop("tagName").toLowerCase() == "a" && c.is("[href]")) {
                            d = c.attr("href");
                            c.attr(ba, "")
                        } else l("a", ba, "");
                    else M.val(d).focus();
                    O.click(function (c) {
                        (b(c.target).hasClass(f.css + "_linktypetext") || b(c.target).hasClass(f.css + "_linktypearrow")) && r(true)
                    });
                    aa.find("a").click(function () {
                        var c = b(this).attr(f.css + "-linktype");
                        aa.data("linktype", c);
                        Y.find("." + f.css + "_linktypetext").html(aa.find("a:eq(" + aa.data("linktype") + ")").text());
                        o(d);
                        r()
                    });
                    o(d);
                    M.focus().val(d).bind("keypress keyup", function (b) {
                        if (b.keyCode == 13) {
                            p(U.find("[" + ba + "]"));
                            return false
                        }
                    });
                    X.click(function () {
                        p(U.find("[" + ba + "]"))
                    })
                }
            }

            function p(c) {
                M.focus();
                n(c);
                c.removeAttr(ba);
                if (aa.data("linktype") != "2") d("createlink", M.val());
                else {
                    d("insertImage", M.val());
                    E.find("img").each(function () {
                        var c = b(this).prev("a"),
                            d = b(this).next("a");
                        c.length > 0 && c.html() == "" ? c.remove() : d.length > 0 && d.html() == "" && d.remove()
                    })
                }
                s();
                E.trigger("change")
            }

            function s(b) {
                w("[" + ba + "]:not([href])");
                U.find("[" + ba + "][href]").removeAttr(ba);
                if (b) {
                    Q.data("linkOpened", true);
                    B.show()
                } else {
                    Q.data("linkOpened", false);
                    B.hide()
                }
                r()
            }

            function r(b) {
                b ? aa.show() : aa.hide()
            }

            function o(b) {
                var c = aa.data("linktype");
                c == "1" &&
                    (M.val() == "http://" || M.is("[value^=http://]") || !M.is("[value^=mailto]")) ? M.val("mailto:") : c != "1" && !M.is("[value^=http://]") ? M.val("http://") : M.val(b)
            }

            function t(c) {
                if (Q.data("sourceOpened")) u(styleField, false);
                else {
                    c == "fSize" ? styleField = oa : c == "colors" && (styleField = pa);
                    u(styleField, true);
                    styleField.find("a").unbind("click").click(function () {
                        var d = b(this).attr(f.css + "-styleval");
                        if (c == "fSize") {
                            styleType = "font-size";
                            d = d + f.funit
                        } else if (c == "colors") {
                            styleType = "color";
                            d = "rgb(" + d + ")"
                        }
                        var e;
                        e = styleType;
                        var g = V();
                        if (g && g.is("[style]") && g.css(e) != "") {
                            var h = g.css(e);
                            g.css(e, "");
                            var j = g.attr("style");
                            g.css(e, h);
                            e = j
                        } else e = "";
                        l("span", "style", styleType + ":" + d + ";" + e);
                        u("", false);
                        b("." + f.css + "_title").remove();
                        E.trigger("change")
                    })
                }
                s(false)
            }

            function u(b, c) {
                var d = "",
                    e = [{
                        d: "fsizeOpened",
                        f: oa
                    }, {
                        d: "cpallOpened",
                        f: pa
                    }];
                if (b != "")
                    for (var f = 0; f < e.length; f++) b == e[f].f && (d = e[f]);
                if (c) {
                    Q.data(d.d, true);
                    d.f.slideDown(100);
                    for (f = 0; f < e.length; f++)
                        if (d.d != e[f].d) {
                            Q.data(e[f].d, false);
                            e[f].f.slideUp(100)
                        }
                } else
                    for (f = 0; f <
                        e.length; f++) {
                        Q.data(e[f].d, false);
                        e[f].f.slideUp(100)
                    }
            }

            function w(c) {
                U.find(c).each(function () {
                    b(this).before(b(this).html()).remove()
                })
            }

            function z() {
                A(true);
                ka.find("a").click(function () {
                    b("*", this).click(function (b) {
                        b.preventDefault();
                        return false
                    });
                    C(b(this).text());
                    var c = b(this).attr(f.css + "-formatval");
                    d("formatBlock", "<" + c + ">");
                    A(false)
                })
            }

            function A(b) {
                var c = b ? true : false;
                (c = b && ka.data("status") ? true : false) || !b ? ka.data("status", false).slideUp(200) : ka.data("status", true).slideDown(200)
            }

            function C(b) {
                var c =
                    ka.closest("." + f.css + "_tool").find("." + f.css + "_tool_label").find("." + f.css + "_tool_text");
                b.length > 10 && (b = b.substr(0, 7) + "...");
                c.html(b)
            }

            function G(b) {
                var c, d, b = b.replace(/\n/gim, "").replace(/\r/gim, "").replace(/\t/gim, "").replace(/&nbsp;/gim, " ");
                c = [/\<span(|\s+.*?)><span(|\s+.*?)>(.*?)<\/span><\/span>/gim, /\<pre(|\s+.*?)><pre(|\s+.*?)>(.*?)<\/pre><\/pre>/gim, /<(\w*[^p])\s*[^\/>]*>\s*<\/\1>/gim, /\<div(|\s+.*?)>(.*?)\<\/div>/gim, /\<strong(|\s+.*?)>(.*?)\<\/strong>/gim, /\<em(|\s+.*?)>(.*?)\<\/em>/gim];
                d = ["<span$2>$3</span>", "<pre$2>$3</pre>", "", "<p$1>$2</p>", "<b$1>$2</b>", "<i$1>$2</i>"];
                for (ra = 0; ra < 5; ra++)
                    for (var e = 0; e < c.length; e++) b = b.replace(c[e], d[e]);
                f.p || (b = b.replace(/\<p(|\s+.*?)>(.*?)\<\/p>/ig, "<br/>$2"));
                if (!f.br) {
                    c = [/\<br>(.*?)/ig, /\<br\/>(.*?)/ig];
                    d = ["<p>$1</p>", "<p>$1</p>"];
                    for (e = 0; e < c.length; e++) b = b.replace(c[e], d[e])
                } !f.p && !f.br && (b = b.replace(/\<p>(.*?)\<\/p>/ig, "<div>$1</div>"));
                return b
            }

            function H() {
                var b = E.text() == "" && E.html().length < 12 ? "" : E.html();
                N.val(G(b))
            }

            function K() {
                E.html(G(N.val()))
            }

            function P(c) {
                var d = false,
                    e = V(),
                    f;
                if (e) {
                    b.each(c, function (c, g) {
                        f = e.prop("tagName").toLowerCase();
                        f == g ? d = true : e.parents().each(function () {
                            f = b(this).prop("tagName").toLowerCase();
                            f == g && (d = true)
                        })
                    });
                    return d
                }
                return false
            }

            function T() {
                for (var c = 0; c < h.length; c++) f[h[c].name] && (h[c].emphasis && h[c].tag != "") && (P(h[c].tag) ? Q.find("." + f.css + "_tool_" + h[c].cls).addClass(Z) : b("." + f.css + "_tool_" + h[c].cls).removeClass(Z));
                if (f.format && b.isArray(f.formats)) {
                    for (var c = false, d = 0; d < f.formats.length; d++) {
                        var e = [];
                        e[0] =
                            f.formats[d][0];
                        if (f.formats[d][0].length > 0 && P(e)) {
                            C(f.formats[d][1]);
                            c = true;
                            break
                        }
                    }
                    c || C(f.formats[0][1])
                }
                u("", false);
                A(false)
            } !b(this).data("jqte") || b(this).data("jqte") == null || b(this).data("jqte") == "undefined" ? b(this).data("jqte", true) : b(this).data("jqte", false);
            if (!f.status || !b(this).data("jqte")) {
                if (b(this).closest("." + f.css).length > 0) {
                    var D = b(this).closest("." + f.css).find("." + f.css + "_editor").html(),
                        F = "";
                    b(b(this)[0].attributes).each(function () {
                        this.nodeName != "style" && (F = F + " " + this.nodeName +
                            '="' + this.nodeValue + '"')
                    });
                    var I = b(this).is("[data-origin]") && b(this).attr("data-origin") != "" ? b(this).attr("data-origin") : "textarea",
                        J = ">" + D;
                    if (I == "input" || I == "option") {
                        D = D.replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                        J = 'value="' + D + '">'
                    }
                    D = b(this).clone();
                    b(this).data("jqte", false).closest("." + f.css).before(D).remove();
                    D.replaceWith("<" + I + F + J + "</" + I + ">")
                }
            } else {
                var N = b(this),
                    I = b(this).prop("tagName").toLowerCase();
                b(this).attr("data-origin", I);
                J = b(this).is("[value]") ||
                    I == "textarea" ? b(this).val() : b(this).html();
                J = J.replace(/&#34;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
                b(this).after('<div class="' + f.css + '"></div>');
                var U = b(this).next("." + f.css);
                U.html('<div class="' + f.css + '_toolbar" role="toolbar" unselectable></div><div class="' + f.css + '_linkform" style="display:none" role="dialog"></div><div class="' + f.css + '_editor"></div>');
                var Q = U.find("." + f.css + "_toolbar"),
                    B = U.find("." + f.css + "_linkform"),
                    E = U.find("." + f.css +
                        "_editor"),
                    Z = f.css + "_tool_depressed";
                B.append('<div class="' + f.css + '_linktypeselect" unselectable></div><input class="' + f.css + '_linkinput" type="text/css" value=""><div class="' + f.css + '_linkbutton" unselectable>' + f.button + '</div> <div style="height:1px;float:none;clear:both"></div>');
                var O = B.find("." + f.css + "_linktypeselect"),
                    M = B.find("." + f.css + "_linkinput"),
                    X = B.find("." + f.css + "_linkbutton");
                O.append('<div class="' + f.css + '_linktypeview" unselectable></div><div class="' + f.css + '_linktypes" role="menu" unselectable></div>');
                var aa = O.find("." + f.css + "_linktypes"),
                    Y = O.find("." + f.css + "_linktypeview"),
                    ba = f.css + "-setlink";
                E.after('<div class="' + f.css + "_source " + f.css + '_hiddenField"></div>');
                var da = U.find("." + f.css + "_source");
                N.appendTo(da);
                if (I != "textarea") {
                    F = "";
                    b(N[0].attributes).each(function () {
                        this.nodeName != "type" && this.nodeName != "value" && (F = F + " " + this.nodeName + '="' + this.nodeValue + '"')
                    });
                    I = b("<textarea " + F + "></textarea>");
                    I.val(J);
                    N.replaceWith(I);
                    N = da.find("textarea")
                }
                E.attr("contenteditable", "true").html(J);
                for (I = 0; I <
                    h.length; I++)
                    if (f[h[I].name]) {
                        J = h[I].key.length > 0 ? f.titletext[I].hotkey != null && f.titletext[I].hotkey != "undefined" && f.titletext[I].hotkey != "" ? " (Ctrl+" + f.titletext[I].hotkey + ")" : "" : "";
                        J = f.titletext[I].title != null && f.titletext[I].title != "undefined" && f.titletext[I].title != "" ? f.titletext[I].title + J : "";
                        Q.append('<div class="' + f.css + "_tool " + f.css + "_tool_" + h[I].cls + '" role="button" data-tool="' + I + '" unselectable><a class="' + f.css + '_tool_icon" unselectable></a></div>');
                        Q.find("." + f.css + "_tool[data-tool=" +
                            I + "]").data({
                                tag: h[I].tag,
                                command: h[I].command,
                                emphasis: h[I].emphasis,
                                title: J
                            });
                        if (h[I].name == "format" && b.isArray(f.formats)) {
                            J = f.formats[0][1].length > 0 && f.formats[0][1] != "undefined" ? f.formats[0][1] : "";
                            Q.find("." + f.css + "_tool_" + h[I].cls).find("." + f.css + "_tool_icon").replaceWith('<a class="' + f.css + '_tool_label" unselectable><span class="' + f.css + '_tool_text" unselectable>' + J + '</span><span class="' + f.css + '_tool_icon" unselectable></span></a>');
                            Q.find("." + f.css + "_tool_" + h[I].cls).append('<div class="' +
                                f.css + '_formats" unselectable></div>');
                            for (J = 0; J < f.formats.length; J++) Q.find("." + f.css + "_formats").append("<a " + f.css + '-formatval="' + f.formats[J][0] + '" class="' + f.css + "_format " + f.css + "_format_" + J + '" role="menuitem" unselectable>' + f.formats[J][1] + "</a>");
                            Q.find("." + f.css + "_formats").data("status", false)
                        } else if (h[I].name == "fsize" && b.isArray(f.fsizes)) {
                            Q.find("." + f.css + "_tool_" + h[I].cls).append('<div class="' + f.css + '_fontsizes" unselectable></div>');
                            for (J = 0; J < f.fsizes.length; J++) Q.find("." + f.css + "_fontsizes").append("<a " +
                                f.css + '-styleval="' + f.fsizes[J] + '" class="' + f.css + '_fontsize" style="font-size:' + f.fsizes[J] + f.funit + '" role="menuitem" unselectable>Abcdefgh...</a>')
                        } else if (h[I].name == "color" && b.isArray(e)) {
                            Q.find("." + f.css + "_tool_" + h[I].cls).append('<div class="' + f.css + '_cpalette" unselectable></div>');
                            for (var ra = 0; ra < e.length; ra++) e[ra] != null ? Q.find("." + f.css + "_cpalette").append("<a " + f.css + '-styleval="' + e[ra] + '" class="' + f.css + '_color" style="background-color: rgb(' + e[ra] + ')" role="gridcell" unselectable></a>') :
                                Q.find("." + f.css + "_cpalette").append('<div class="' + f.css + '_colorSeperator"></div>')
                        }
                    }
                aa.data("linktype", "0");
                for (I = 0; I < 3; I++) {
                    aa.append("<a " + f.css + '-linktype="' + I + '" unselectable>' + f.linktypes[I] + "</a>");
                    Y.html('<div class="' + f.css + '_linktypearrow" unselectable></div><div class="' + f.css + '_linktypetext">' + aa.find("a:eq(" + aa.data("linktype") + ")").text() + "</div>")
                }
                I = "";
                I = /msie/.test(g) ? "-ms-" : /chrome/.test(g) || /safari/.test(g) || /yandex/.test(g) ? "-webkit-" : /mozilla/.test(g) ? "-moz-" : /opera/.test(g) ?
                    "-o-" : /konqueror/.test(g) ? "-khtml-" : "";
                if (f.placeholder && f.placeholder != "") {
                    U.prepend('<div class="' + f.css + '_placeholder" unselectable><div class="' + f.css + '_placeholder_text">' + f.placeholder + "</div></div>");
                    var x = U.find("." + f.css + "_placeholder");
                    x.click(function () {
                        E.focus()
                    })
                }
                U.find("[unselectable]").css(I + "user-select", "none").addClass("unselectable").attr("unselectable", "on").on("selectstart mousedown", false);
                var ja = Q.find("." + f.css + "_tool"),
                    ka = Q.find("." + f.css + "_formats"),
                    oa = Q.find("." + f.css + "_fontsizes"),
                    pa = Q.find("." + f.css + "_cpalette"),
                    V = function () {
                        var c;
                        if (window.getSelection) {
                            c = getSelection();
                            c = c.anchorNode
                        }
                        if (!c && document.selection && document.selection.createRange && document.selection.type != "None") {
                            c = document.selection;
                            c = c.getRangeAt ? c.getRangeAt(0) : c.createRange();
                            c = c.commonAncestorContainer ? c.commonAncestorContainer : c.parentElement ? c.parentElement() : c.item(0)
                        }
                        return c ? c.nodeName == "#text" ? b(c.parentNode) : b(c) : false
                    };
                ja.unbind("click").click(function (c) {
                    if (b(this).data("command") == "displaysource" &&
                        !Q.data("sourceOpened")) {
                        Q.find("." + f.css + "_tool").addClass(f.css + "_hiddenField");
                        b(this).removeClass(f.css + "_hiddenField");
                        Q.data("sourceOpened", true);
                        N.css("height", E.outerHeight());
                        da.removeClass(f.css + "_hiddenField");
                        E.addClass(f.css + "_hiddenField");
                        N.focus();
                        s(false);
                        u("", false);
                        A();
                        f.placeholder && f.placeholder != "" && x.hide()
                    } else {
                        if (Q.data("sourceOpened")) {
                            Q.data("sourceOpened", false);
                            Q.find("." + f.css + "_tool").removeClass(f.css + "_hiddenField");
                            da.addClass(f.css + "_hiddenField");
                            E.removeClass(f.css +
                                "_hiddenField")
                        } else if (b(this).data("command") == "linkcreator")
                            if (Q.data("linkOpened")) {
                                s(false);
                                A(false)
                            } else q();
                        else if (b(this).data("command") == "formats") {
                            b(this).data("command") == "formats" && !b(c.target).hasClass(f.css + "_format") && z();
                            u("", false);
                            E.not(":focus") && E.focus()
                        } else if (b(this).data("command") == "fSize" || b(this).data("command") == "colors") {
                            (b(this).data("command") == "fSize" && !b(c.target).hasClass(f.css + "_fontsize") || b(this).data("command") == "colors" && !b(c.target).hasClass(f.css + "_color")) &&
                            t(b(this).data("command"));
                            A(false);
                            E.not(":focus") && E.focus()
                        } else {
                            E.not(":focus") && E.focus();
                            d(b(this).data("command"), null);
                            u("", false);
                            A(false);
                            r();
                            b(this).data("emphasis") == true && !b(this).hasClass(Z) ? b(this).addClass(Z) : b(this).removeClass(Z);
                            da.addClass(f.css + "_hiddenField");
                            E.removeClass(f.css + "_hiddenField")
                        }
                        f.placeholder && f.placeholder != "" && (E.html() != "" ? x.hide() : x.show())
                    }
                    E.trigger("change")
                }).hover(function (c) {
                    if (f.title && b(this).data("title") != "" && (b(c.target).hasClass(f.css + "_tool") ||
                            b(c.target).hasClass(f.css + "_tool_icon"))) {
                        b("." + f.css + "_title").remove();
                        U.append('<div class="' + f.css + '_title"><div class="' + f.css + '_titleArrow"><div class="' + f.css + '_titleArrowIcon"></div></div><div class="' + f.css + '_titleText">' + b(this).data("title") + "</div></div>");
                        c = b("." + f.css + "_title:first");
                        c.find("." + f.css + "_titleArrowIcon");
                        var d = b(this).position(),
                            e = d.left + b(this).outerWidth() - c.outerWidth() / 2 - b(this).outerWidth() / 2,
                            d = d.top + b(this).outerHeight() + 5;
                        c.delay(400).css({
                            top: d,
                            left: e
                        }).fadeIn(200)
                    }
                },
                    function () {
                        b("." + f.css + "_title").remove()
                    });
                var va = null;
                E.bind("keypress keyup keydown drop cut copy paste DOMCharacterDataModified DOMSubtreeModified", function () {
                    Q.data("sourceOpened") || b(this).trigger("change");
                    r();
                    b.isFunction(f.change) && f.change();
                    f.placeholder && f.placeholder != "" && (b(this).text() != "" ? x.hide() : x.show())
                }).bind("change", function () {
                    if (!Q.data("sourceOpened")) {
                        clearTimeout(va);
                        va = setTimeout(H, 10)
                    }
                }).keydown(function (b) {
                    if (b.ctrlKey)
                        for (var c = 0; c < h.length; c++)
                            if (f[h[c].name] && b.keyCode ==
                                h[c].key.charCodeAt(0)) {
                                h[c].command != "" && h[c].command != "linkcreator" ? d(h[c].command, null) : h[c].command == "linkcreator" && q();
                                return false
                            }
                }).bind("mouseup keyup", T).focus(function () {
                    b.isFunction(f.focus) && f.focus();
                    U.addClass(f.css + "_focused");
                    if (/opera/.test(g)) {
                        var c = document.createRange();
                        c.selectNodeContents(E[0]);
                        c.collapse(false);
                        var d = window.getSelection();
                        d.removeAllRanges();
                        d.addRange(c)
                    }
                }).focusout(function () {
                    ja.removeClass(Z);
                    u("", false);
                    A(false);
                    r();
                    b.isFunction(f.blur) && f.blur();
                    U.removeClass(f.css +
                        "_focused");
                    b.isArray(f.formats) && C(f.formats[0][1])
                });
                N.bind("keydown keyup", function () {
                    setTimeout(K, 0);
                    b(this).height(b(this)[0].scrollHeight);
                    b(this).val() == "" && b(this).height(0)
                }).focus(function () {
                    U.addClass(f.css + "_focused")
                }).focusout(function () {
                    U.removeClass(f.css + "_focused")
                })
            }
        })
    }
})(jQuery);
! function (b) {
    function c(b) {
        return void 0 === Function.prototype.name ? (b = /function\s([^(]{1,})\(/.exec(b.toString())) && 1 < b.length ? b[1].trim() : "" : void 0 === b.prototype ? b.constructor.name : b.prototype.constructor.name
    }

    function d(b) {
        return b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    var e = {
        version: "6.2.3",
        _plugins: {},
        _uuids: [],
        rtl: function () {
            return "rtl" === b("html").attr("dir")
        },
        plugin: function (b, e) {
            var h = e || c(b);
            this._plugins[d(h)] = this[h] = b
        },
        registerPlugin: function (b, e) {
            var h = e ? d(e) : c(b.constructor).toLowerCase();
            b.uuid = this.GetYoDigits(6, h);
            b.$element.attr("data-" + h) || b.$element.attr("data-" + h, b.uuid);
            b.$element.data("zfPlugin") || b.$element.data("zfPlugin", b);
            b.$element.trigger("init.zf." + h);
            this._uuids.push(b.uuid)
        },
        unregisterPlugin: function (b) {
            var e = d(c(b.$element.data("zfPlugin").constructor));
            this._uuids.splice(this._uuids.indexOf(b.uuid), 1);
            b.$element.removeAttr("data-" + e).removeData("zfPlugin").trigger("destroyed.zf." + e);
            for (var h in b) b[h] = null
        },
        reInit: function (c) {
            var e = c instanceof b;
            try {
                if (e) c.each(function () {
                    b(this).data("zfPlugin")._init()
                });
                else {
                    var h = this;
                    ({
                        object: function (c) {
                            c.forEach(function (c) {
                                c = d(c);
                                b("[data-" + c + "]").foundation("_init")
                            })
                        },
                        string: function () {
                            c = d(c);
                            b("[data-" + c + "]").foundation("_init")
                        },
                        undefined: function () {
                            this.object(Object.keys(h._plugins))
                        }
                    })[typeof c](c)
                }
            } catch (j) {
                console.error(j)
            } finally {
                return c
            }
        },
        GetYoDigits: function (b, c) {
            b = b || 6;
            return Math.round(Math.pow(36, b + 1) - Math.random() * Math.pow(36, b)).toString(36).slice(1) + (c ? "-" + c : "")
        },
        reflow: function (c, d) {
            "undefined" === typeof d ? d = Object.keys(this._plugins) : "string" ===
                typeof d && (d = [d]);
            var e = this;
            b.each(d, function (d, g) {
                var l = e._plugins[g];
                b(c).find("[data-" + g + "]").addBack("[data-" + g + "]").each(function () {
                    var c = b(this),
                        d = {};
                    if (c.data("zfPlugin")) console.warn("Tried to initialize " + g + " on an element that already has a Foundation plugin.");
                    else {
                        c.attr("data-options") && c.attr("data-options").split(";").forEach(function (b) {
                            b = b.split(":").map(function (b) {
                                return b.trim()
                            });
                            b[0] && (d[b[0]] = /true/.test(b[1]) ? !0 : /false/.test(b[1]) ? !1 : !isNaN(1 * b[1]) ? parseFloat(b[1]) : b[1])
                        });
                        try {
                            c.data("zfPlugin", new l(b(this), d))
                        } catch (e) {
                            console.error(e)
                        } finally { }
                    }
                })
            })
        },
        getFnName: c,
        transitionend: function (b) {
            var c = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            },
                d = document.createElement("div"),
                e, k;
            for (k in c) "undefined" !== typeof d.style[k] && (e = c[k]);
            if (e) return e;
            e = setTimeout(function () {
                b.triggerHandler("transitionend", [b])
            }, 1);
            return "transitionend"
        },
        util: {
            throttle: function (b, c) {
                var d = null;
                return function () {
                    var e =
                        this,
                        k = arguments;
                    null === d && (d = setTimeout(function () {
                        b.apply(e, k);
                        d = null
                    }, c))
                }
            }
        }
    };
    window.Foundation = e;
    b.fn.foundation = function (d) {
        var g = typeof d,
            h = b("meta.foundation-mq"),
            j = b(".no-js");
        h.length || b('<meta class="foundation-mq">').appendTo(document.head);
        j.length && j.removeClass("no-js");
        if ("undefined" === g) e.MediaQuery._init(), e.reflow(this);
        else if ("string" === g) {
            var k = Array.prototype.slice.call(arguments, 1),
                l = this.data("zfPlugin");
            if (void 0 !== l && void 0 !== l[d]) 1 === this.length ? l[d].apply(l, k) : this.each(function (c,
                e) {
                l[d].apply(b(e).data("zfPlugin"), k)
            });
            else throw new ReferenceError("We're sorry, '" + d + "' is not an available method for " + (l ? c(l) : "this element") + ".");
        } else throw new TypeError("We're sorry, " + g + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
        return this
    };
    (function () {
        if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
            return (new Date).getTime()
        };
        for (var b = ["webkit", "moz"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) {
            var d = b[c];
            window.requestAnimationFrame = window[d + "RequestAnimationFrame"];
            window.cancelAnimationFrame = window[d + "CancelAnimationFrame"] || window[d + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var e = 0;
            window.requestAnimationFrame = function (b) {
                var c = Date.now(),
                    d = Math.max(e + 16, c);
                return setTimeout(function () {
                    b(e = d)
                }, d - c)
            };
            window.cancelAnimationFrame = clearTimeout
        }
        if (!window.performance || !window.performance.now) window.performance = {
            start: Date.now(),
            now: function () {
                return Date.now() - this.start
            }
        }
    })();
    Function.prototype.bind || (Function.prototype.bind = function (b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = function () { },
            k = function () {
                return d.apply(this instanceof e ? this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        this.prototype && (e.prototype = this.prototype);
        k.prototype = new e;
        return k
    })
}(jQuery);
"use strict";
! function () {
    function b(b) {
        b = b.length ? b[0] : b;
        if (b === window || b === document) throw Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var d = b.getBoundingClientRect(),
            b = b.parentNode.getBoundingClientRect(),
            e = document.body.getBoundingClientRect(),
            f = window.pageYOffset,
            g = window.pageXOffset;
        return {
            width: d.width,
            height: d.height,
            offset: {
                top: d.top + f,
                left: d.left + g
            },
            parentDims: {
                width: b.width,
                height: b.height,
                offset: {
                    top: b.top + f,
                    left: b.left + g
                }
            },
            windowDims: {
                width: e.width,
                height: e.height,
                offset: {
                    top: f,
                    left: g
                }
            }
        }
    }
    Foundation.Box = {
        ImNotTouchingYou: function (c, d, e, f) {
            var c = b(c),
                g, h;
            if (d) {
                var j = b(d);
                g = c.offset.top + c.height <= j.height + j.offset.top;
                d = c.offset.top >= j.offset.top;
                h = c.offset.left >= j.offset.left;
                c = c.offset.left + c.width <= j.width + j.offset.left
            } else g = c.offset.top + c.height <= c.windowDims.height + c.windowDims.offset.top, d = c.offset.top >= c.windowDims.offset.top, h = c.offset.left >= c.windowDims.offset.left, c = c.offset.left + c.width <= c.windowDims.width;
            return e ? !0 === (h === c) : f ? !0 === (d === g) : -1 === [g, d, h, c].indexOf(!1)
        },
        GetDimensions: b,
        GetOffsets: function (c, d, e, f, g, h) {
            c = b(c);
            d = d ? b(d) : null;
            switch (e) {
                case "top":
                    return {
                        left: Foundation.rtl() ? d.offset.left - c.width + d.width : d.offset.left,
                        top: d.offset.top - (c.height + f)
                    };
                case "left":
                    return {
                        left: d.offset.left - (c.width + g),
                        top: d.offset.top
                    };
                case "right":
                    return {
                        left: d.offset.left + d.width + g,
                        top: d.offset.top
                    };
                case "center top":
                    return {
                        left: d.offset.left + d.width / 2 - c.width / 2,
                        top: d.offset.top - (c.height + f)
                    };
                case "center bottom":
                    return {
                        left: h ? g : d.offset.left + d.width / 2 - c.width / 2,
                        top: d.offset.top +
                            d.height + f
                    };
                case "center left":
                    return {
                        left: d.offset.left - (c.width + g),
                        top: d.offset.top + d.height / 2 - c.height / 2
                    };
                case "center right":
                    return {
                        left: d.offset.left + d.width + g + 1,
                        top: d.offset.top + d.height / 2 - c.height / 2
                    };
                case "center":
                    return {
                        left: c.windowDims.offset.left + c.windowDims.width / 2 - c.width / 2,
                        top: c.windowDims.offset.top + c.windowDims.height / 2 - c.height / 2
                    };
                case "reveal":
                    return {
                        left: (c.windowDims.width - c.width) / 2,
                        top: c.windowDims.offset.top + f
                    };
                case "reveal full":
                    return {
                        left: c.windowDims.offset.left,
                        top: c.windowDims.offset.top
                    };
                case "left bottom":
                    return {
                        left: d.offset.left - (c.width + g),
                        top: d.offset.top + d.height
                    };
                case "right bottom":
                    return {
                        left: d.offset.left + d.width + g - c.width,
                        top: d.offset.top + d.height
                    };
                default:
                    return {
                        left: Foundation.rtl() ? d.offset.left - c.width + d.width : d.offset.left,
                        top: d.offset.top + d.height + f
                    }
            }
        }
    }
}(jQuery);
"use strict";
! function (b) {
    var c = {
        9: "TAB",
        13: "ENTER",
        27: "ESCAPE",
        32: "SPACE",
        37: "ARROW_LEFT",
        38: "ARROW_UP",
        39: "ARROW_RIGHT",
        40: "ARROW_DOWN"
    },
        d = {},
        e = {
            keys: function (b) {
                var c = {},
                    d;
                for (d in b) c[b[d]] = b[d];
                return c
            }(c),
            parseKey: function (b) {
                var d = c[b.which || b.keyCode] || String.fromCharCode(b.which).toUpperCase();
                b.shiftKey && (d = "SHIFT_" + d);
                b.ctrlKey && (d = "CTRL_" + d);
                b.altKey && (d = "ALT_" + d);
                return d
            },
            handleKey: function (c, e, h) {
                e = d[e];
                c = this.parseKey(c);
                if (!e) return console.warn("Component not defined!");
                e = "undefined" === typeof e.ltr ?
                    e : Foundation.rtl() ? b.extend({}, e.ltr, e.rtl) : b.extend({}, e.rtl, e.ltr);
                (c = h[e[c]]) && "function" === typeof c ? (c = c.apply(), (h.handled || "function" === typeof h.handled) && h.handled(c)) : (h.unhandled || "function" === typeof h.unhandled) && h.unhandled()
            },
            findFocusable: function (c) {
                return c.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function () {
                    return !b(this).is(":visible") ||
                        0 > b(this).attr("tabindex") ? !1 : !0
                })
            },
            register: function (b, c) {
                d[b] = c
            }
        };
    Foundation.Keyboard = e
}(jQuery);
"use strict";
! function (b) {
    function c(b) {
        var c = {};
        if ("string" !== typeof b) return c;
        b = b.trim().slice(1, -1);
        return !b ? c : c = b.split("&").reduce(function (b, c) {
            var d = c.replace(/\+/g, " ").split("="),
                e = d[0],
                d = d[1],
                e = decodeURIComponent(e),
                d = void 0 === d ? null : decodeURIComponent(d);
            b.hasOwnProperty(e) ? Array.isArray(b[e]) ? b[e].push(d) : b[e] = [b[e], d] : b[e] = d;
            return b
        }, {})
    }
    var d = {
        queries: [],
        current: "",
        _init: function () {
            var d = b(".foundation-mq").css("font-family"),
                d = c(d),
                f;
            for (f in d) d.hasOwnProperty(f) && this.queries.push({
                name: f,
                value: "only screen and (min-width: " +
                    d[f] + ")"
            });
            this.current = this._getCurrentSize();
            this._watcher()
        },
        atLeast: function (b) {
            return (b = this.get(b)) ? window.matchMedia(b).matches : !1
        },
        get: function (b) {
            for (var c in this.queries)
                if (this.queries.hasOwnProperty(c)) {
                    var d = this.queries[c];
                    if (b === d.name) return d.value
                }
            return null
        },
        _getCurrentSize: function () {
            for (var b, c = 0; c < this.queries.length; c++) {
                var d = this.queries[c];
                window.matchMedia(d.value).matches && (b = d)
            }
            return "object" === typeof b ? b.name : b
        },
        _watcher: function () {
            var c = this;
            b(window).on("resize.zf.mediaquery",
                function () {
                    var d = c._getCurrentSize(),
                        g = c.current;
                    d !== g && (c.current = d, b(window).trigger("changed.zf.mediaquery", [d, g]))
                })
        }
    };
    Foundation.MediaQuery = d;
    window.matchMedia || (window.matchMedia = function () {
        var b = window.styleMedia || window.media;
        if (!b) {
            var c = document.createElement("style"),
                d = document.getElementsByTagName("script")[0],
                h = null;
            c.type = "text/css";
            c.id = "matchmediajs-test";
            d.parentNode.insertBefore(c, d);
            h = "getComputedStyle" in window && window.getComputedStyle(c, null) || c.currentStyle;
            b = {
                matchMedium: function (b) {
                    b =
                        "@media " + b + "{ #matchmediajs-test { width: 1px; } }";
                    c.styleSheet ? c.styleSheet.cssText = b : c.textContent = b;
                    return "1px" === h.width
                }
            }
        }
        return function (c) {
            return {
                matches: b.matchMedium(c || "all"),
                media: c || "all"
            }
        }
    }());
    Foundation.MediaQuery = d
}(jQuery);
"use strict";
! function (b) {
    function c(c, g, h, j) {
        function k() {
            c || g.hide();
            l();
            j && j.apply(g)
        }

        function l() {
            g[0].style.transitionDuration = 0;
            g.removeClass(m + " " + n + " " + h)
        }
        g = b(g).eq(0);
        if (g.length) {
            var m = c ? d[0] : d[1],
                n = c ? e[0] : e[1];
            l();
            g.addClass(h).css("transition", "none");
            requestAnimationFrame(function () {
                g.addClass(m);
                c && g.show()
            });
            requestAnimationFrame(function () {
                g[0].offsetWidth;
                g.css("transition", "").addClass(n)
            });
            g.one(Foundation.transitionend(g), k)
        }
    }
    var d = ["mui-enter", "mui-leave"],
        e = ["mui-enter-active", "mui-leave-active"];
    Foundation.Move = function (b, c, d) {
        function e(n) {
            m || (m = window.performance.now());
            l = n - m;
            d.apply(c);
            l < b ? k = window.requestAnimationFrame(e, c) : (window.cancelAnimationFrame(k), c.trigger("finished.zf.animate", [c]).triggerHandler("finished.zf.animate", [c]))
        }
        var k, l, m = null;
        k = window.requestAnimationFrame(e)
    };
    Foundation.Motion = {
        animateIn: function (b, d, e) {
            c(!0, b, d, e)
        },
        animateOut: function (b, d, e) {
            c(!1, b, d, e)
        }
    }
}(jQuery);
"use strict";
! function (b) {
    Foundation.Nest = {
        Feather: function (c) {
            var d = 1 >= arguments.length || void 0 === arguments[1] ? "zf" : arguments[1];
            c.attr("role", "menubar");
            var e = c.find("li").attr({
                role: "menuitem"
            }),
                f = "is-" + d + "-submenu",
                g = f + "-item",
                h = "is-" + d + "-submenu-parent";
            c.find("a:first").attr("tabindex", 0);
            e.each(function () {
                var c = b(this),
                    d = c.children("ul");
                d.length && (c.addClass(h).attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1,
                    "aria-label": c.children("a:first").text()
                }), d.addClass("submenu " + f).attr({
                    "data-submenu": "",
                    "aria-hidden": !0,
                    role: "menu"
                }));
                c.parent("[data-submenu]").length && c.addClass("is-submenu-item " + g)
            })
        },
        Burn: function (b, d) {
            b.find("li").removeAttr("tabindex");
            var e = "is-" + d + "-submenu",
                f = e + "-item",
                g = "is-" + d + "-submenu-parent";
            b.find("*").removeClass(e + " " + f + " " + g + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
        }
    }
}(jQuery);
"use strict";
! function (b) {
    Foundation.Timer = function (b, d, e) {
        var f = this,
            g = d.duration,
            h = Object.keys(b.data())[0] || "timer",
            j = -1,
            k, l;
        this.isPaused = !1;
        this.restart = function () {
            j = -1;
            clearTimeout(l);
            this.start()
        };
        this.start = function () {
            this.isPaused = !1;
            clearTimeout(l);
            j = 0 >= j ? g : j;
            b.data("paused", !1);
            k = Date.now();
            l = setTimeout(function () {
                d.infinite && f.restart();
                e()
            }, j);
            b.trigger("timerstart.zf." + h)
        };
        this.pause = function () {
            this.isPaused = !0;
            clearTimeout(l);
            b.data("paused", !0);
            var d = Date.now();
            j -= d - k;
            b.trigger("timerpaused.zf." +
                h)
        }
    };
    Foundation.onImagesLoaded = function (c, d) {
        function e() {
            f--;
            0 === f && d()
        }
        var f = c.length;
        0 === f && d();
        c.each(function () {
            if (this.complete) e();
            else if ("undefined" !== typeof this.naturalWidth && 0 < this.naturalWidth) e();
            else b(this).one("load", function () {
                e()
            })
        })
    }
}(jQuery);
(function (b) {
    function c() {
        this.removeEventListener("touchmove", d);
        this.removeEventListener("touchend", c);
        j = !1
    }

    function d(d) {
        b.spotSwipe.preventDefault && d.preventDefault();
        if (j) {
            var e = f - d.touches[0].pageX,
                m;
            h = (new Date).getTime() - g;
            Math.abs(e) >= b.spotSwipe.moveThreshold && h <= b.spotSwipe.timeThreshold && (m = 0 < e ? "left" : "right");
            m && (d.preventDefault(), c.call(this), b(this).trigger("swipe", m).trigger("swipe" + m))
        }
    }

    function e(b) {
        1 == b.touches.length && (f = b.touches[0].pageX, j = !0, g = (new Date).getTime(), this.addEventListener("touchmove",
            d, !1), this.addEventListener("touchend", c, !1))
    }
    b.spotSwipe = {
        version: "1.0.0",
        enabled: "ontouchstart" in document.documentElement,
        preventDefault: !1,
        moveThreshold: 75,
        timeThreshold: 200
    };
    var f, g, h, j = !1;
    b.event.special.swipe = {
        setup: function () {
            this.addEventListener && this.addEventListener("touchstart", e, !1)
        }
    };
    b.each(["left", "up", "down", "right"], function () {
        b.event.special["swipe" + this] = {
            setup: function () {
                b(this).on("swipe", b.noop)
            }
        }
    })
})(jQuery);
! function (b) {
    b.fn.addTouch = function () {
        this.each(function (c, d) {
            b(d).bind("touchstart touchmove touchend touchcancel", function () {
                var b = event.changedTouches[0],
                    c = {
                        touchstart: "mousedown",
                        touchmove: "mousemove",
                        touchend: "mouseup"
                    }[event.type],
                    d;
                "MouseEvent" in window && "function" === typeof window.MouseEvent ? d = new window.MouseEvent(c, {
                    bubbles: !0,
                    cancelable: !0,
                    screenX: b.screenX,
                    screenY: b.screenY,
                    clientX: b.clientX,
                    clientY: b.clientY
                }) : (d = document.createEvent("MouseEvent"), d.initMouseEvent(c, !0, !0, window, 1, b.screenX,
                    b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null));
                b.target.dispatchEvent(d)
            })
        })
    }
}(jQuery);
"use strict";
! function (b) {
    function c() {
        g();
        e();
        f();
        d()
    }

    function d(c) {
        var d = b("[data-yeti-box]"),
            e = ["dropdown", "tooltip", "reveal"];
        c && ("string" === typeof c ? e.push(c) : "object" === typeof c && "string" === typeof c[0] ? e.concat(c) : console.error("Plugin names must be strings"));
        d.length && (c = e.map(function (b) {
            return "closeme.zf." + b
        }).join(" "), b(window).off(c).on(c, function (c, d) {
            var e = c.namespace.split(".")[0];
            b("[data-" + e + "]").not('[data-yeti-box="' + d + '"]').each(function () {
                var c = b(this);
                c.triggerHandler("close.zf.trigger", [c])
            })
        }))
    }

    function e(c) {
        var d = void 0,
            e = b("[data-resize]");
        if (e.length) b(window).off("resize.zf.trigger").on("resize.zf.trigger", function () {
            d && clearTimeout(d);
            d = setTimeout(function () {
                h || e.each(function () {
                    b(this).triggerHandler("resizeme.zf.trigger")
                });
                e.attr("data-events", "resize")
            }, c || 10)
        })
    }

    function f(c) {
        var d = void 0,
            e = b("[data-scroll]");
        if (e.length) b(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function () {
            d && clearTimeout(d);
            d = setTimeout(function () {
                h || e.each(function () {
                    b(this).triggerHandler("scrollme.zf.trigger")
                });
                e.attr("data-events", "scroll")
            }, c || 10)
        })
    }

    function g() {
        if (!h) return !1;
        var c = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),
            d = function (c) {
                c = b(c[0].target);
                switch (c.attr("data-events")) {
                    case "resize":
                        c.triggerHandler("resizeme.zf.trigger", [c]);
                        break;
                    case "scroll":
                        c.triggerHandler("scrollme.zf.trigger", [c, window.pageYOffset]);
                        break;
                    default:
                        return !1
                }
            };
        if (c.length)
            for (var e = 0; e <= c.length - 1; e++) (new h(d)).observe(c[e], {
                attributes: !0,
                childList: !1,
                characterData: !1,
                subtree: !1,
                attributeFilter: ["data-events"]
            })
    }
    var h = function () {
        for (var b = ["WebKit", "Moz", "O", "Ms", ""], c = 0; c < b.length; c++)
            if (b[c] + "MutationObserver" in window) return window[b[c] + "MutationObserver"];
        return !1
    }(),
        j = function (c, d) {
            c.data(d).split(" ").forEach(function (e) {
                b("#" + e)["close" === d ? "trigger" : "triggerHandler"](d + ".zf.trigger", [c])
            })
        };
    b(document).on("click.zf.trigger", "[data-open]", function () {
        j(b(this), "open")
    });
    b(document).on("click.zf.trigger", "[data-close]", function () {
        b(this).data("close") ? j(b(this), "close") : b(this).trigger("close.zf.trigger")
    });
    b(document).on("click.zf.trigger", "[data-toggle]", function () {
        j(b(this), "toggle")
    });
    b(document).on("close.zf.trigger", "[data-closable]", function (c) {
        c.stopPropagation();
        c = b(this).data("closable");
        "" !== c ? Foundation.Motion.animateOut(b(this), c, function () {
            b(this).trigger("closed.zf")
        }) : b(this).fadeOut().trigger("closed.zf")
    });
    b(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function () {
        var c = b(this).data("toggle-focus");
        b("#" + c).triggerHandler("toggle.zf.trigger", [b(this)])
    });
    b(window).load(function () {
        c()
    });
    Foundation.IHearYou = c
}(jQuery);
"use strict";
var _createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e) {
            var f = 1 >= arguments.length || void 0 === arguments[1] ? {} : arguments[1];
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this._init();
            Foundation.registerPlugin(this, "Abide")
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                this.$inputs = this.$element.find("input, textarea, select");
                this._events()
            }
        }, {
            key: "_events",
            value: function () {
                var c = this;
                this.$element.off(".abide").on("reset.zf.abide", function () {
                    c.resetForm()
                }).on("submit.zf.abide",
                    function () {
                        return c.validateForm()
                    });
                if ("fieldChange" === this.options.validateOn) this.$inputs.off("change.zf.abide").on("change.zf.abide", function (d) {
                    c.validateInput(b(d.target))
                });
                if (this.options.liveValidate) this.$inputs.off("input.zf.abide").on("input.zf.abide", function (d) {
                    c.validateInput(b(d.target))
                })
            }
        }, {
            key: "_reflow",
            value: function () {
                this._init()
            }
        }, {
            key: "requiredCheck",
            value: function (b) {
                if (!b.attr("required")) return !0;
                var c = !0;
                switch (b[0].type) {
                    case "checkbox":
                        c = b[0].checked;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        b =
                            b.find("option:selected");
                        if (!b.length || !b.val()) c = !1;
                        break;
                    default:
                        if (!b.val() || !b.val().length) c = !1
                }
                return c
            }
        }, {
            key: "findFormError",
            value: function (b) {
                var c = b.siblings(this.options.formErrorSelector);
                c.length || (c = b.parent().find(this.options.formErrorSelector));
                return c
            }
        }, {
            key: "findLabel",
            value: function (b) {
                var c = this.$element.find('label[for="' + b[0].id + '"]');
                return !c.length ? b.closest("label") : c
            }
        }, {
            key: "findRadioLabels",
            value: function (c) {
                var d = this,
                    c = c.map(function (c, e) {
                        var j = d.$element.find('label[for="' +
                            e.id + '"]');
                        j.length || (j = b(e).closest("label"));
                        return j[0]
                    });
                return b(c)
            }
        }, {
            key: "addErrorClasses",
            value: function (b) {
                var c = this.findLabel(b),
                    d = this.findFormError(b);
                c.length && c.addClass(this.options.labelErrorClass);
                d.length && d.addClass(this.options.formErrorClass);
                b.addClass(this.options.inputErrorClass).attr("data-invalid", "")
            }
        }, {
            key: "removeRadioErrorClasses",
            value: function (b) {
                var b = this.$element.find(':radio[name="' + b + '"]'),
                    c = this.findRadioLabels(b),
                    d = this.findFormError(b);
                c.length && c.removeClass(this.options.labelErrorClass);
                d.length && d.removeClass(this.options.formErrorClass);
                b.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "removeErrorClasses",
            value: function (b) {
                if ("radio" == b[0].type) return this.removeRadioErrorClasses(b.attr("name"));
                var c = this.findLabel(b),
                    d = this.findFormError(b);
                c.length && c.removeClass(this.options.labelErrorClass);
                d.length && d.removeClass(this.options.formErrorClass);
                b.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "validateInput",
            value: function (b) {
                var c =
                    this.requiredCheck(b),
                    d = !1,
                    h = !0,
                    j = b.attr("data-validator"),
                    k = !0;
                if (b.is("[data-abide-ignore]") || b.is('[type="hidden"]')) return !0;
                switch (b[0].type) {
                    case "radio":
                        d = this.validateRadio(b.attr("name"));
                        break;
                    case "checkbox":
                        d = c;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        d = c;
                        break;
                    default:
                        d = this.validateText(b)
                }
                j && (h = this.matchValidation(b, j, b.attr("required")));
                b.attr("data-equalto") && (k = this.options.validators.equalTo(b));
                c = -1 === [c, d, h, k].indexOf(!1);
                d = (c ? "valid" : "invalid") + ".zf.abide";
                this[c ? "removeErrorClasses" : "addErrorClasses"](b);
                b.trigger(d, [b]);
                return c
            }
        }, {
            key: "validateForm",
            value: function () {
                var c = [],
                    d = this;
                this.$inputs.each(function () {
                    c.push(d.validateInput(b(this)))
                });
                var g = -1 === c.indexOf(!1);
                this.$element.find("[data-abide-error]").css("display", g ? "none" : "block");
                this.$element.trigger((g ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]);
                return g
            }
        }, {
            key: "validateText",
            value: function (b, c) {
                var c = c || b.attr("pattern") || b.attr("type"),
                    d = b.val(),
                    h = !1;
                d.length ? h = this.options.patterns.hasOwnProperty(c) ?
                    this.options.patterns[c].test(d) : c !== b.attr("type") ? RegExp(c).test(d) : !0 : b.prop("required") || (h = !0);
                return h
            }
        }, {
            key: "validateRadio",
            value: function (c) {
                var c = this.$element.find(':radio[name="' + c + '"]'),
                    d = !1,
                    g = !1;
                c.each(function (c, d) {
                    b(d).attr("required") && (g = !0)
                });
                g || (d = !0);
                d || c.each(function (c, e) {
                    b(e).prop("checked") && (d = !0)
                });
                return d
            }
        }, {
            key: "matchValidation",
            value: function (b, c, d) {
                var h = this,
                    d = d ? !0 : !1;
                return -1 === c.split(" ").map(function (c) {
                    return h.options.validators[c](b, d, b.parent())
                }).indexOf(!1)
            }
        },
            {
                key: "resetForm",
                value: function () {
                    var c = this.$element,
                        d = this.options;
                    b("." + d.labelErrorClass, c).not("small").removeClass(d.labelErrorClass);
                    b("." + d.inputErrorClass, c).not("small").removeClass(d.inputErrorClass);
                    b(d.formErrorSelector + "." + d.formErrorClass).removeClass(d.formErrorClass);
                    c.find("[data-abide-error]").css("display", "none");
                    b(":input", c).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid");
                    b(":input:radio", c).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid");
                    b(":input:checkbox", c).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid");
                    c.trigger("formreset.zf.abide", [c])
                }
            }, {
                key: "destroy",
                value: function () {
                    var c = this;
                    this.$element.off(".abide").find("[data-abide-error]").css("display", "none");
                    this.$inputs.off(".abide").each(function () {
                        c.removeErrorClasses(b(this))
                    });
                    Foundation.unregisterPlugin(this)
                }
            }
        ]);
        return c
    }();
    c.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        liveValidate: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        validators: {
            equalTo: function (c) {
                return b("#" + c.attr("data-equalto")).val() === c.val()
            }
        }
    };
    Foundation.plugin(c, "Abide")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this._init();
            Foundation.registerPlugin(this, "Accordion");
            Foundation.Keyboard.register("Accordion", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_DOWN: "next",
                ARROW_UP: "previous"
            })
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                this.$element.attr("role", "tablist");
                this.$tabs = this.$element.children("li, [data-accordion-item]");
                this.$tabs.each(function (c, d) {
                    var e = b(d),
                        j = e.children("[data-tab-content]"),
                        k = j[0].id || Foundation.GetYoDigits(6, "accordion"),
                        l = d.id || k + "-label";
                    e.find("a:first").attr({
                        "aria-controls": k,
                        role: "tab",
                        id: l,
                        "aria-expanded": !1,
                        "aria-selected": !1
                    });
                    j.attr({
                        role: "tabpanel",
                        "aria-labelledby": l,
                        "aria-hidden": !0,
                        id: k
                    })
                });
                var c = this.$element.find(".is-active").children("[data-tab-content]");
                c.length && this.down(c, !0);
                this._events()
            }
        }, {
            key: "_events",
            value: function () {
                var c = this;
                this.$tabs.each(function () {
                    var d = b(this),
                        g = d.children("[data-tab-content]");
                    if (g.length) d.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function (b) {
                        b.preventDefault();
                        d.hasClass("is-active") ? (c.options.allowAllClosed || d.siblings().hasClass("is-active")) && c.up(g) : c.down(g)
                    }).on("keydown.zf.accordion", function (b) {
                        Foundation.Keyboard.handleKey(b, "Accordion", {
                            toggle: function () {
                                c.toggle(g)
                            },
                            next: function () {
                                var b = d.next().find("a").focus();
                                c.options.multiExpand || b.trigger("click.zf.accordion")
                            },
                            previous: function () {
                                var b = d.prev().find("a").focus();
                                c.options.multiExpand || b.trigger("click.zf.accordion")
                            },
                            handled: function () {
                                b.preventDefault();
                                b.stopPropagation()
                            }
                        })
                    })
                })
            }
        }, {
            key: "toggle",
            value: function (b) {
                b.parent().hasClass("is-active") ? (this.options.allowAllClosed || b.parent().siblings().hasClass("is-active")) && this.up(b) : this.down(b)
            }
        }, {
            key: "down",
            value: function (c, d) {
                var g = this;
                if (!this.options.multiExpand && !d) {
                    var h = this.$element.children(".is-active").children("[data-tab-content]");
                    h.length && this.up(h)
                }
                c.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active");
                c.slideDown(this.options.slideSpeed, function () {
                    g.$element.trigger("down.zf.accordion", [c])
                });
                b("#" + c.attr("aria-labelledby")).attr({
                    "aria-expanded": !0,
                    "aria-selected": !0
                })
            }
        }, {
            key: "up",
            value: function (c) {
                var d = c.parent().siblings(),
                    g = this,
                    d = this.options.multiExpand ? d.hasClass("is-active") : c.parent().hasClass("is-active");
                if (this.options.allowAllClosed || d) c.slideUp(g.options.slideSpeed, function () {
                    g.$element.trigger("up.zf.accordion", [c])
                }), c.attr("aria-hidden", !0).parent().removeClass("is-active"), b("#" +
                    c.attr("aria-labelledby")).attr({
                        "aria-expanded": !1,
                        "aria-selected": !1
                    })
            }
        }, {
            key: "destroy",
            value: function () {
                this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", "");
                this.$element.find("a").off(".zf.accordion");
                Foundation.unregisterPlugin(this)
            }
        }]);
        return c
    }();
    c.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1
    };
    Foundation.plugin(c, "Accordion")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            Foundation.Nest.Feather(this.$element, "accordion");
            this._init();
            Foundation.registerPlugin(this, "AccordionMenu");
            Foundation.Keyboard.register("AccordionMenu", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_RIGHT: "open",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "close",
                ESCAPE: "closeAll",
                TAB: "down",
                SHIFT_TAB: "up"
            })
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                this.$element.find("[data-submenu]").not(".is-active").slideUp(0);
                this.$element.attr({
                    role: "tablist",
                    "aria-multiselectable": this.options.multiOpen
                });
                this.$menuLinks = this.$element.find(".is-accordion-submenu-parent");
                this.$menuLinks.each(function () {
                    var c = this.id || Foundation.GetYoDigits(6, "acc-menu-link"),
                        d = b(this),
                        e = d.children("[data-submenu]"),
                        f = e[0].id || Foundation.GetYoDigits(6, "acc-menu"),
                        l = e.hasClass("is-active");
                    d.attr({
                        "aria-controls": f,
                        "aria-expanded": l,
                        role: "tab",
                        id: c
                    });
                    e.attr({
                        "aria-labelledby": c,
                        "aria-hidden": !l,
                        role: "tabpanel",
                        id: f
                    })
                });
                var c = this.$element.find(".is-active");
                if (c.length) {
                    var d = this;
                    c.each(function () {
                        d.down(b(this))
                    })
                }
                this._events()
            }
        }, {
            key: "_events",
            value: function () {
                var c = this;
                this.$element.find("li").each(function () {
                    var d = b(this).children("[data-submenu]");
                    if (d.length) b(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function (b) {
                        b.preventDefault();
                        c.toggle(d)
                    })
                }).on("keydown.zf.accordionmenu", function (d) {
                    var g = b(this),
                        h = g.parent("ul").children("li"),
                        j, k, l = g.children("[data-submenu]");
                    h.each(function (c) {
                        b(this).is(g) && (j =
                            h.eq(Math.max(0, c - 1)).find("a").first(), k = h.eq(Math.min(c + 1, h.length - 1)).find("a").first(), b(this).children("[data-submenu]:visible").length && (k = g.find("li:first-child").find("a").first()), b(this).is(":first-child") ? j = g.parents("li").first().find("a").first() : j.children("[data-submenu]:visible").length && (j = j.find("li:last-child").find("a").first()), b(this).is(":last-child") && (k = g.parents("li").first().next("li").find("a").first()))
                    });
                    Foundation.Keyboard.handleKey(d, "AccordionMenu", {
                        open: function () {
                            l.is(":hidden") &&
                                (c.down(l), l.find("li").first().find("a").first().focus())
                        },
                        close: function () {
                            l.length && !l.is(":hidden") ? c.up(l) : g.parent("[data-submenu]").length && (c.up(g.parent("[data-submenu]")), g.parents("li").first().find("a").first().focus())
                        },
                        up: function () {
                            j.attr("tabindex", -1).focus();
                            return !0
                        },
                        down: function () {
                            k.attr("tabindex", -1).focus();
                            return !0
                        },
                        toggle: function () {
                            g.children("[data-submenu]").length && c.toggle(g.children("[data-submenu]"))
                        },
                        closeAll: function () {
                            c.hideAll()
                        },
                        handled: function (b) {
                            b && d.preventDefault();
                            d.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "hideAll",
            value: function () {
                this.$element.find("[data-submenu]").slideUp(this.options.slideSpeed)
            }
        }, {
            key: "toggle",
            value: function (b) {
                b.is(":animated") || (b.is(":hidden") ? this.down(b) : this.up(b))
            }
        }, {
            key: "down",
            value: function (b) {
                var c = this;
                this.options.multiOpen || this.up(this.$element.find(".is-active").not(b.parentsUntil(this.$element).add(b)));
                b.addClass("is-active").attr({
                    "aria-hidden": !1
                }).parent(".is-accordion-submenu-parent").attr({
                    "aria-expanded": !0
                });
                b.slideDown(c.options.slideSpeed,
                    function () {
                        c.$element.trigger("down.zf.accordionMenu", [b])
                    })
            }
        }, {
            key: "up",
            value: function (b) {
                var c = this;
                b.slideUp(c.options.slideSpeed, function () {
                    c.$element.trigger("up.zf.accordionMenu", [b])
                });
                b.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", !0).parent(".is-accordion-submenu-parent").attr("aria-expanded", !1)
            }
        }, {
            key: "destroy",
            value: function () {
                this.$element.find("[data-submenu]").slideDown(0).css("display", "");
                this.$element.find("a").off("click.zf.accordionMenu");
                Foundation.Nest.Burn(this.$element,
                    "accordion");
                Foundation.unregisterPlugin(this)
            }
        }]);
        return c
    }();
    c.defaults = {
        slideSpeed: 250,
        multiOpen: !0
    };
    Foundation.plugin(c, "AccordionMenu")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            Foundation.Nest.Feather(this.$element, "drilldown");
            this._init();
            Foundation.registerPlugin(this, "Drilldown");
            Foundation.Keyboard.register("Drilldown", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close",
                TAB: "down",
                SHIFT_TAB: "up"
            })
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                this.$submenuAnchors =
                    this.$element.find("li.is-drilldown-submenu-parent").children("a");
                this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]");
                this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "menuitem").find("a");
                this._prepareMenu();
                this._keyboardEvents()
            }
        }, {
            key: "_prepareMenu",
            value: function () {
                var c = this;
                this.$submenuAnchors.each(function () {
                    var d = b(this),
                        g = d.parent();
                    c.options.parentLink && d.clone().prependTo(g.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>');
                    d.data("savedHref", d.attr("href")).removeAttr("href");
                    d.children("[data-submenu]").attr({
                        "aria-hidden": !0,
                        tabindex: 0,
                        role: "menu"
                    });
                    c._events(d)
                });
                this.$submenus.each(function () {
                    var d = b(this);
                    d.find(".js-drilldown-back").length || d.prepend(c.options.backButton);
                    c._back(d)
                });
                this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = b(this.options.wrapper).addClass("is-drilldown"), this.$wrapper = this.$element.wrap(this.$wrapper).parent().css(this._getMaxDims()))
            }
        }, {
            key: "_events",
            value: function (c) {
                var d =
                    this;
                c.off("click.zf.drilldown").on("click.zf.drilldown", function (g) {
                    b(g.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (g.stopImmediatePropagation(), g.preventDefault());
                    d._show(c.parent("li"));
                    if (d.options.closeOnClick) {
                        var h = b("body");
                        h.off(".zf.drilldown").on("click.zf.drilldown", function (c) {
                            if (!(c.target === d.$element[0] || b.contains(d.$element[0], c.target))) {
                                c.preventDefault();
                                d._hideAll();
                                h.off(".zf.drilldown")
                            }
                        })
                    }
                })
            }
        }, {
            key: "_keyboardEvents",
            value: function () {
                var c = this;
                this.$menuItems.add(this.$element.find(".js-drilldown-back > a")).on("keydown.zf.drilldown", function (d) {
                    var g = b(this),
                        h = g.parent("li").parent("ul").children("li").children("a"),
                        j, k;
                    h.each(function (c) {
                        b(this).is(g) && (j = h.eq(Math.max(0, c - 1)), k = h.eq(Math.min(c + 1, h.length - 1)))
                    });
                    Foundation.Keyboard.handleKey(d, "Drilldown", {
                        next: function () {
                            if (g.is(c.$submenuAnchors)) return c._show(g.parent("li")), g.parent("li").one(Foundation.transitionend(g), function () {
                                g.parent("li").find("ul li a").filter(c.$menuItems).first().focus()
                            }), !0
                        },
                        previous: function () {
                            c._hide(g.parent("li").parent("ul"));
                            g.parent("li").parent("ul").one(Foundation.transitionend(g), function () {
                                setTimeout(function () {
                                    g.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }, 1)
                            });
                            return !0
                        },
                        up: function () {
                            j.focus();
                            return !0
                        },
                        down: function () {
                            k.focus();
                            return !0
                        },
                        close: function () {
                            c._back()
                        },
                        open: function () {
                            g.is(c.$menuItems) ? g.is(c.$submenuAnchors) && (c._show(g.parent("li")), g.parent("li").one(Foundation.transitionend(g), function () {
                                g.parent("li").find("ul li a").filter(c.$menuItems).first().focus()
                            })) :
                                (c._hide(g.parent("li").parent("ul")), g.parent("li").parent("ul").one(Foundation.transitionend(g), function () {
                                    setTimeout(function () {
                                        g.parent("li").parent("ul").parent("li").children("a").first().focus()
                                    }, 1)
                                }));
                            return !0
                        },
                        handled: function (b) {
                            b && d.preventDefault();
                            d.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "_hideAll",
            value: function () {
                var b = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
                b.one(Foundation.transitionend(b), function () {
                    b.removeClass("is-active is-closing")
                });
                this.$element.trigger("closed.zf.drilldown")
            }
        },
            {
                key: "_back",
                value: function (b) {
                    var c = this;
                    b.off("click.zf.drilldown");
                    b.children(".js-drilldown-back").on("click.zf.drilldown", function (d) {
                        d.stopImmediatePropagation();
                        c._hide(b)
                    })
                }
            }, {
                key: "_menuLinkEvents",
                value: function () {
                    var b = this;
                    this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function () {
                        setTimeout(function () {
                            b._hideAll()
                        }, 0)
                    })
                }
            }, {
                key: "_show",
                value: function (b) {
                    b.children("[data-submenu]").addClass("is-active");
                    this.$element.trigger("open.zf.drilldown", [b])
                }
            }, {
                key: "_hide",
                value: function (b) {
                    b.addClass("is-closing").one(Foundation.transitionend(b), function () {
                        b.removeClass("is-active is-closing");
                        b.blur()
                    });
                    b.trigger("hide.zf.drilldown", [b])
                }
            }, {
                key: "_getMaxDims",
                value: function () {
                    var c = 0,
                        d = {};
                    this.$submenus.add(this.$element).each(function () {
                        var d = b(this).children("li").length;
                        c = d > c ? d : c
                    });
                    d["min-height"] = c * this.$menuItems[0].getBoundingClientRect().height + "px";
                    d["max-width"] = this.$element[0].getBoundingClientRect().width + "px";
                    return d
                }
            }, {
                key: "destroy",
                value: function () {
                    this._hideAll();
                    Foundation.Nest.Burn(this.$element, "drilldown");
                    this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role");
                    this.$submenuAnchors.each(function () {
                        b(this).off(".zf.drilldown")
                    });
                    this.$element.find("a").each(function () {
                        var c = b(this);
                        c.data("savedHref") && c.attr("href",
                            c.data("savedHref")).removeData("savedHref")
                    });
                    Foundation.unregisterPlugin(this)
                }
            }
        ]);
        return c
    }();
    c.defaults = {
        backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
        wrapper: "<div></div>",
        parentLink: !1,
        closeOnClick: !1
    };
    Foundation.plugin(c, "Drilldown")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this._init();
            Foundation.registerPlugin(this, "Dropdown");
            Foundation.Keyboard.register("Dropdown", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close",
                TAB: "tab_forward",
                SHIFT_TAB: "tab_backward"
            })
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                var c = this.$element.attr("id");
                this.$anchor = b('[data-toggle="' + c + '"]') || b('[data-open="' + c + '"]');
                this.$anchor.attr({
                    "aria-controls": c,
                    "data-is-focus": !1,
                    "data-yeti-box": c,
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                });
                this.options.positionClass = this.getPositionClass();
                this.counter = 4;
                this.usedPositions = [];
                this.$element.attr({
                    "aria-hidden": "true",
                    "data-yeti-box": c,
                    "data-resize": c,
                    "aria-labelledby": this.$anchor[0].id || Foundation.GetYoDigits(6, "dd-anchor")
                });
                this._events()
            }
        }, {
            key: "getPositionClass",
            value: function () {
                var b = this.$element[0].className.match(/(top|left|right|bottom)/g),
                    b = b ? b[0] : "",
                    c = /float-(\S+)\s/.exec(this.$anchor[0].className);
                return (c = c ? c[1] : "") ? c + " " + b : b
            }
        }, {
            key: "_reposition",
            value: function (b) {
                this.usedPositions.push(b ? b : "bottom");
                !b && 0 > this.usedPositions.indexOf("top") ? this.$element.addClass("top") : "top" === b && 0 > this.usedPositions.indexOf("bottom") ? this.$element.removeClass(b) : "left" === b && 0 > this.usedPositions.indexOf("right") ? this.$element.removeClass(b).addClass("right") : "right" === b && 0 > this.usedPositions.indexOf("left") ? this.$element.removeClass(b).addClass("left") : !b && -1 < this.usedPositions.indexOf("top") && 0 > this.usedPositions.indexOf("left") ?
                    this.$element.addClass("left") : "top" === b && -1 < this.usedPositions.indexOf("bottom") && 0 > this.usedPositions.indexOf("left") ? this.$element.removeClass(b).addClass("left") : ("left" === b && -1 < this.usedPositions.indexOf("right") && 0 > this.usedPositions.indexOf("bottom") || "right" === b && -1 < this.usedPositions.indexOf("left") && this.usedPositions.indexOf("bottom"), this.$element.removeClass(b));
                this.classChanged = !0;
                this.counter--
            }
        }, {
            key: "_setPosition",
            value: function () {
                if ("false" === this.$anchor.attr("aria-expanded")) return !1;
                var b = this.getPositionClass(),
                    c = Foundation.Box.GetDimensions(this.$element);
                Foundation.Box.GetDimensions(this.$anchor);
                if (c.width >= c.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.$element)) return this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                    width: c.windowDims.width - 2 * this.options.hOffset,
                    height: "auto"
                }), this.classChanged = !0, !1;
                for (this.$element.offset(Foundation.Box.GetOffsets(this.$element,
                        this.$anchor, b, this.options.vOffset, this.options.hOffset)) ; !Foundation.Box.ImNotTouchingYou(this.$element, !1, !0) && this.counter;) this._reposition(b), this._setPosition()
            }
        }, {
            key: "_events",
            value: function () {
                var c = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": this._setPosition.bind(this)
                });
                if (this.options.hover && (this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",
                        function () {
                            clearTimeout(c.timeout);
                            c.timeout = setTimeout(function () {
                                c.open();
                                c.$anchor.data("hover", !0)
                }, c.options.hoverDelay)
                }).on("mouseleave.zf.dropdown", function () {
                        clearTimeout(c.timeout);
                        c.timeout = setTimeout(function () {
                            c.close();
                            c.$anchor.data("hover", !1)
                }, c.options.hoverDelay)
                }), this.options.hoverPane)) this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function () {
                    clearTimeout(c.timeout)
                }).on("mouseleave.zf.dropdown", function () {
                    clearTimeout(c.timeout);
                    c.timeout = setTimeout(function () {
                        c.close();
                        c.$anchor.data("hover", !1)
                    }, c.options.hoverDelay)
                });
                this.$anchor.add(this.$element).on("keydown.zf.dropdown", function (d) {
                    var g = b(this),
                        h = Foundation.Keyboard.findFocusable(c.$element);
                    Foundation.Keyboard.handleKey(d, "Dropdown", {
                        tab_forward: function () {
                            c.$element.find(":focus").is(h.eq(-1)) && (c.options.trapFocus ? (h.eq(0).focus(), d.preventDefault()) : c.close())
                        },
                        tab_backward: function () {
                            if (c.$element.find(":focus").is(h.eq(0)) || c.$element.is(":focus")) c.options.trapFocus ?
                                (h.eq(-1).focus(), d.preventDefault()) : c.close()
                        },
                        open: function () {
                            g.is(c.$anchor) && (c.open(), c.$element.attr("tabindex", -1).focus(), d.preventDefault())
                        },
                        close: function () {
                            c.close();
                            c.$anchor.focus()
                        }
                    })
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function () {
                var c = b(document.body).not(this.$element),
                    d = this;
                c.off("click.zf.dropdown").on("click.zf.dropdown", function (b) {
                    !d.$anchor.is(b.target) && !d.$anchor.find(b.target).length && !d.$element.find(b.target).length && (d.close(), c.off("click.zf.dropdown"))
                })
            }
        }, {
            key: "open",
            value: function () {
                this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id"));
                this.$anchor.addClass("hover").attr({
                    "aria-expanded": !0
                });
                this._setPosition();
                this.$element.addClass("is-open").attr({
                    "aria-hidden": !1
                });
                if (this.options.autoFocus) {
                    var b = Foundation.Keyboard.findFocusable(this.$element);
                    b.length && b.eq(0).focus()
                }
                this.options.closeOnClick && this._addBodyHandler();
                this.$element.trigger("show.zf.dropdown", [this.$element])
            }
        }, {
            key: "close",
            value: function () {
                if (!this.$element.hasClass("is-open")) return !1;
                this.$element.removeClass("is-open").attr({
                    "aria-hidden": !0
                });
                this.$anchor.removeClass("hover").attr("aria-expanded", !1);
                if (this.classChanged) {
                    var b = this.getPositionClass();
                    b && this.$element.removeClass(b);
                    this.$element.addClass(this.options.positionClass).css({
                        height: "",
                        width: ""
                    });
                    this.classChanged = !1;
                    this.counter = 4;
                    this.usedPositions.length = 0
                }
                this.$element.trigger("hide.zf.dropdown", [this.$element])
            }
        }, {
            key: "toggle",
            value: function () {
                this.$element.hasClass("is-open") ? this.$anchor.data("hover") || this.close() :
                    this.open()
            }
        }, {
            key: "destroy",
            value: function () {
                this.$element.off(".zf.trigger").hide();
                this.$anchor.off(".zf.dropdown");
                Foundation.unregisterPlugin(this)
            }
        }]);
        return c
    }();
    c.defaults = {
        hoverDelay: 250,
        hover: !1,
        hoverPane: !1,
        vOffset: 1,
        hOffset: 1,
        positionClass: "",
        trapFocus: !1,
        autoFocus: !1,
        closeOnClick: !1
    };
    Foundation.plugin(c, "Dropdown")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            Foundation.Nest.Feather(this.$element, "dropdown");
            this._init();
            Foundation.registerPlugin(this, "DropdownMenu");
            Foundation.Keyboard.register("DropdownMenu", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close"
            })
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                var b = this.$element.find("li.is-dropdown-submenu-parent");
                this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub");
                this.$menuItems = this.$element.find('[role="menuitem"]');
                this.$tabs = this.$element.children('[role="menuitem"]');
                this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass);
                this.$element.hasClass(this.options.rightClass) || "right" === this.options.alignment || Foundation.rtl() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", b.addClass("opens-left")) :
                    b.addClass("opens-right");
                this.changed = !1;
                this._events()
            }
        }, {
            key: "_events",
            value: function () {
                var c = this,
                    d = "ontouchstart" in window || "undefined" !== typeof window.ontouchstart,
                    g = function (g) {
                        var j = b(g.target).parentsUntil("ul", ".is-dropdown-submenu-parent"),
                            k = j.hasClass("is-dropdown-submenu-parent"),
                            l = "true" === j.attr("data-is-click");
                        j.children(".is-dropdown-submenu");
                        if (k)
                            if (l) {
                                if (c.options.closeOnClick && !(!c.options.clickOpen && !d || c.options.forceFollow && d)) g.stopImmediatePropagation(), g.preventDefault(),
                                    c._hide(j)
                            } else g.preventDefault(), g.stopImmediatePropagation(), c._show(j.children(".is-dropdown-submenu")), j.add(j.parentsUntil(c.$element, ".is-dropdown-submenu-parent")).attr("data-is-click", !0)
                    };
                if (this.options.clickOpen || d) this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", g);
                if (!this.options.disableHover) this.$menuItems.on("mouseenter.zf.dropdownmenu", function () {
                    var d = b(this);
                    d.hasClass("is-dropdown-submenu-parent") && (clearTimeout(c.delay), c.delay = setTimeout(function () {
                        c._show(d.children(".is-dropdown-submenu"))
                    },
                        c.options.hoverDelay))
                }).on("mouseleave.zf.dropdownmenu", function () {
                    var d = b(this);
                    if (d.hasClass("is-dropdown-submenu-parent") && c.options.autoclose) {
                        if ("true" === d.attr("data-is-click") && c.options.clickOpen) return !1;
                        clearTimeout(c.delay);
                        c.delay = setTimeout(function () {
                            c._hide(d)
                        }, c.options.closingTime)
                    }
                });
                this.$menuItems.on("keydown.zf.dropdownmenu", function (d) {
                    var f = b(d.target).parentsUntil("ul", '[role="menuitem"]'),
                        g = -1 < c.$tabs.index(f),
                        l = g ? c.$tabs : f.siblings("li").add(f),
                        m, n;
                    l.each(function (c) {
                        b(this).is(f) &&
                            (m = l.eq(c - 1), n = l.eq(c + 1))
                    });
                    var q = function () {
                        f.is(":last-child") || (n.children("a:first").focus(), d.preventDefault())
                    },
                        p = function () {
                            m.children("a:first").focus();
                            d.preventDefault()
                        },
                        s = function () {
                            var b = f.children("ul.is-dropdown-submenu");
                            b.length && (c._show(b), f.find("li > a:first").focus(), d.preventDefault())
                        },
                        r = function () {
                            var b = f.parent("ul").parent("li");
                            b.children("a:first").focus();
                            c._hide(b);
                            d.preventDefault()
                        },
                        o = {
                            open: s,
                            close: function () {
                                c._hide(c.$element);
                                c.$menuItems.find("a:first").focus();
                                d.preventDefault()
                            },
                            handled: function () {
                                d.stopImmediatePropagation()
                            }
                        };
                    g ? c.$element.hasClass(c.options.verticalClass) ? "left" === c.options.alignment ? b.extend(o, {
                        down: q,
                        up: p,
                        next: s,
                        previous: r
                    }) : b.extend(o, {
                        down: q,
                        up: p,
                        next: r,
                        previous: s
                    }) : b.extend(o, {
                        next: q,
                        previous: p,
                        down: s,
                        up: r
                    }) : "left" === c.options.alignment ? b.extend(o, {
                        next: s,
                        previous: r,
                        down: q,
                        up: p
                    }) : b.extend(o, {
                        next: r,
                        previous: s,
                        down: q,
                        up: p
                    });
                    Foundation.Keyboard.handleKey(d, "DropdownMenu", o)
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function () {
                var c = b(document.body),
                    d = this;
                c.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function (b) {
                    d.$element.find(b.target).length || (d._hide(), c.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
                })
            }
        }, {
            key: "_show",
            value: function (c) {
                var d = this.$tabs.index(this.$tabs.filter(function (d, f) {
                    return 0 < b(f).find(c).length
                }));
                this._hide(c.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent"), d);
                c.css("visibility", "hidden").addClass("js-dropdown-active").attr({
                    "aria-hidden": !1
                }).parent("li.is-dropdown-submenu-parent").addClass("is-active").attr({
                    "aria-expanded": !0
                });
                var g = Foundation.Box.ImNotTouchingYou(c, null, !0);
                g || (g = "left" === this.options.alignment ? "-right" : "-left", d = c.parent(".is-dropdown-submenu-parent"), d.removeClass("opens" + g).addClass("opens-" + this.options.alignment), (g = Foundation.Box.ImNotTouchingYou(c, null, !0)) || d.removeClass("opens-" + this.options.alignment).addClass("opens-inner"), this.changed = !0);
                c.css("visibility", "");
                this.options.closeOnClick && this._addBodyHandler();
                this.$element.trigger("show.zf.dropdownmenu", [c])
            }
        }, {
            key: "_hide",
            value: function (b,
                c) {
                var d;
                d = b && b.length ? b : void 0 !== c ? this.$tabs.not(function (b) {
                    return b === c
                }) : this.$element;
                if (d.hasClass("is-active") || 0 < d.find(".is-active").length) {
                    d.find("li.is-active").add(d).attr({
                        "aria-expanded": !1,
                        "data-is-click": !1
                    }).removeClass("is-active");
                    d.find("ul.js-dropdown-active").attr({
                        "aria-hidden": !0
                    }).removeClass("js-dropdown-active");
                    if (this.changed || d.find("opens-inner").length) {
                        var h = "left" === this.options.alignment ? "right" : "left";
                        d.find("li.is-dropdown-submenu-parent").add(d).removeClass("opens-inner opens-" +
                            this.options.alignment).addClass("opens-" + h);
                        this.changed = !1
                    }
                    this.$element.trigger("hide.zf.dropdownmenu", [d])
                }
            }
        }, {
            key: "destroy",
            value: function () {
                this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner");
                b(document.body).off(".zf.dropdownmenu");
                Foundation.Nest.Burn(this.$element, "dropdown");
                Foundation.unregisterPlugin(this)
            }
        }]);
        return c
    }();
    c.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "left",
        closeOnClick: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    };
    Foundation.plugin(c, "DropdownMenu")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this._init();
            Foundation.registerPlugin(this, "Equalizer")
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                var c = this.$element.attr("data-equalizer") || "",
                    d = this.$element.find('[data-equalizer-watch="' + c + '"]');
                this.$watched = d.length ? d : this.$element.find("[data-equalizer-watch]");
                this.$element.attr("data-resize", c || Foundation.GetYoDigits(6, "eq"));
                this.hasNested =
                    0 < this.$element.find("[data-equalizer]").length;
                this.isNested = 0 < this.$element.parentsUntil(document.body, "[data-equalizer]").length;
                this.isOn = !1;
                this._bindHandler = {
                    onResizeMeBound: this._onResizeMe.bind(this),
                    onPostEqualizedBound: this._onPostEqualized.bind(this)
                };
                var c = this.$element.find("img"),
                    g;
                this.options.equalizeOn ? (g = this._checkMQ(), b(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events();
                if (void 0 !== g && !1 === g || void 0 === g)
                    if (c.length) Foundation.onImagesLoaded(c, this._reflow.bind(this));
                    else this._reflow()
            }
        }, {
            key: "_pauseEvents",
            value: function () {
                this.isOn = !1;
                this.$element.off({
                    ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                    "resizeme.zf.trigger": this._bindHandler.onResizeMeBound
                })
            }
        }, {
            key: "_onResizeMe",
            value: function () {
                this._reflow()
            }
        }, {
            key: "_onPostEqualized",
            value: function (b) {
                b.target !== this.$element[0] && this._reflow()
            }
        }, {
            key: "_events",
            value: function () {
                this._pauseEvents();
                if (this.hasNested) this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound);
                else this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound);
                this.isOn = !0
            }
        }, {
            key: "_checkMQ",
            value: function () {
                var b = !Foundation.MediaQuery.atLeast(this.options.equalizeOn);
                b ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events();
                return b
            }
        }, {
            key: "_killswitch",
            value: function () { }
        }, {
            key: "_reflow",
            value: function () {
                if (!this.options.equalizeOnStack && this._isStacked()) return this.$watched.css("height", "auto"), !1;
                this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) :
                    this.getHeights(this.applyHeight.bind(this))
            }
        }, {
            key: "_isStacked",
            value: function () {
                return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
            }
        }, {
            key: "getHeights",
            value: function (b) {
                for (var c = [], d = 0, h = this.$watched.length; d < h; d++) this.$watched[d].style.height = "auto", c.push(this.$watched[d].offsetHeight);
                b(c)
            }
        }, {
            key: "getHeightsByRow",
            value: function (c) {
                var d = this.$watched.length ? this.$watched.first().offset().top : 0,
                    g = [],
                    h = 0;
                g[h] = [];
                for (var j = 0, k = this.$watched.length; j <
                    k; j++) {
                    this.$watched[j].style.height = "auto";
                    var l = b(this.$watched[j]).offset().top;
                    l != d && (h++, g[h] = [], d = l);
                    g[h].push([this.$watched[j], this.$watched[j].offsetHeight])
                }
                d = 0;
                for (h = g.length; d < h; d++) j = b(g[d]).map(function () {
                    return this[1]
                }).get(), j = Math.max.apply(null, j), g[d].push(j);
                c(g)
            }
        }, {
            key: "applyHeight",
            value: function (b) {
                b = Math.max.apply(null, b);
                this.$element.trigger("preequalized.zf.equalizer");
                this.$watched.css("height", b);
                this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "applyHeightByRow",
            value: function (c) {
                this.$element.trigger("preequalized.zf.equalizer");
                for (var d = 0, g = c.length; d < g; d++) {
                    var h = c[d].length,
                        j = c[d][h - 1];
                    if (2 >= h) b(c[d][0][0]).css({
                        height: "auto"
                    });
                    else {
                        this.$element.trigger("preequalizedrow.zf.equalizer");
                        for (var k = 0, h = h - 1; k < h; k++) b(c[d][k][0]).css({
                            height: j
                        });
                        this.$element.trigger("postequalizedrow.zf.equalizer")
                    }
                }
                this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "destroy",
            value: function () {
                this._pauseEvents();
                this.$watched.css("height", "auto");
                Foundation.unregisterPlugin(this)
            }
        }]);
        return c
    }();
    c.defaults = {
        equalizeOnStack: !0,
        equalizeByRow: !1,
        equalizeOn: ""
    };
    Foundation.plugin(c, "Equalizer")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, f);
            this.rules = [];
            this.currentPath = "";
            this._init();
            this._events();
            Foundation.registerPlugin(this, "Interchange")
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                this._addBreakpoints();
                this._generateRules();
                this._reflow()
            }
        }, {
            key: "_events",
            value: function () {
                b(window).on("resize.zf.interchange", Foundation.util.throttle(this._reflow.bind(this), 50))
            }
        }, {
            key: "_reflow",
            value: function () {
                var b,
                    c;
                for (c in this.rules)
                    if (this.rules.hasOwnProperty(c)) {
                        var d = this.rules[c];
                        window.matchMedia(d.query).matches && (b = d)
                    }
                b && this.replace(b.path)
            }
        }, {
            key: "_addBreakpoints",
            value: function () {
                for (var b in Foundation.MediaQuery.queries)
                    if (Foundation.MediaQuery.queries.hasOwnProperty(b)) {
                        var f = Foundation.MediaQuery.queries[b];
                        c.SPECIAL_QUERIES[f.name] = f.value
                    }
            }
        }, {
            key: "_generateRules",
            value: function () {
                var b = [],
                    f;
                f = this.options.rules ? this.options.rules : this.$element.data("interchange").match(/\[.*?\]/g);
                for (var g in f)
                    if (f.hasOwnProperty(g)) {
                        var h =
                            f[g].slice(1, -1).split(", "),
                            j = h.slice(0, -1).join(""),
                            h = h[h.length - 1];
                        c.SPECIAL_QUERIES[h] && (h = c.SPECIAL_QUERIES[h]);
                        b.push({
                            path: j,
                            query: h
                        })
                    }
                this.rules = b
            }
        }, {
            key: "replace",
            value: function (c) {
                if (this.currentPath !== c) {
                    var d = this;
                    "IMG" === this.$element[0].nodeName ? this.$element.attr("src", c).load(function () {
                        d.currentPath = c
                    }).trigger("replaced.zf.interchange") : c.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? this.$element.css({
                        "background-image": "url(" + c + ")"
                    }).trigger("replaced.zf.interchange") : b.get(c,
                        function (g) {
                            d.$element.html(g).trigger("replaced.zf.interchange");
                            b(g).foundation();
                            d.currentPath = c
                        })
                }
            }
        }, {
            key: "destroy",
            value: function () { }
        }]);
        return c
    }();
    c.defaults = {
        rules: null
    };
    c.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    };
    Foundation.plugin(c, "Interchange")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this._init();
            Foundation.registerPlugin(this, "Magellan")
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                var c = this.$element[0].id || Foundation.GetYoDigits(6, "magellan");
                this.$targets = b("[data-magellan-target]");
                this.$links = this.$element.find("a");
                this.$element.attr({
                    "data-resize": c,
                    "data-scroll": c,
                    id: c
                });
                this.$active = b();
                this.scrollPos = parseInt(window.pageYOffset,
                    10);
                this._events()
            }
        }, {
            key: "calcPoints",
            value: function () {
                var c = this,
                    d = document.body,
                    g = document.documentElement;
                this.points = [];
                this.winHeight = Math.round(Math.max(window.innerHeight, g.clientHeight));
                this.docHeight = Math.round(Math.max(d.scrollHeight, d.offsetHeight, g.clientHeight, g.scrollHeight, g.offsetHeight));
                this.$targets.each(function () {
                    var d = b(this),
                        f = Math.round(d.offset().top - c.options.threshold);
                    d.targetPoint = f;
                    c.points.push(f)
                })
            }
        }, {
            key: "_events",
            value: function () {
                var c = this;
                b("html, body");
                b(window).one("load",
                    function () {
                        c.options.deepLinking && location.hash && c.scrollToLoc(location.hash);
                        c.calcPoints();
                        c._updateActive()
                    });
                this.$element.on({
                    "resizeme.zf.trigger": this.reflow.bind(this),
                    "scrollme.zf.trigger": this._updateActive.bind(this)
                }).on("click.zf.magellan", 'a[href^="#"]', function (b) {
                    b.preventDefault();
                    b = this.getAttribute("href");
                    c.scrollToLoc(b)
                })
            }
        }, {
            key: "scrollToLoc",
            value: function (c) {
                c = Math.round(b(c).offset().top - this.options.threshold / 2 - this.options.barOffset);
                b("html, body").stop(!0).animate({
                    scrollTop: c
                },
                    this.options.animationDuration, this.options.animationEasing)
            }
        }, {
            key: "reflow",
            value: function () {
                this.calcPoints();
                this._updateActive()
            }
        }, {
            key: "_updateActive",
            value: function () {
                var b = parseInt(window.pageYOffset, 10),
                    c;
                if (b + this.winHeight === this.docHeight) c = this.points.length - 1;
                else if (b < this.points[0]) c = 0;
                else {
                    var d = this.scrollPos < b,
                        h = this;
                    c = this.points.filter(function (c) {
                        return d ? c - h.options.barOffset <= b : c - h.options.barOffset - h.options.threshold <= b
                    });
                    c = c.length ? c.length - 1 : 0
                }
                this.$active.removeClass(this.options.activeClass);
                this.$active = this.$links.eq(c).addClass(this.options.activeClass);
                this.options.deepLinking && (c = this.$active[0].getAttribute("href"), window.history.pushState ? window.history.pushState(null, null, c) : window.location.hash = c);
                this.scrollPos = b;
                this.$element.trigger("update.zf.magellan", [this.$active])
            }
        }, {
            key: "destroy",
            value: function () {
                this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass);
                if (this.options.deepLinking) {
                    var b = this.$active[0].getAttribute("href");
                    window.location.hash.replace(b, "")
                }
                Foundation.unregisterPlugin(this)
            }
        }]);
        return c
    }();
    c.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "active",
        deepLinking: !1,
        barOffset: 0
    };
    Foundation.plugin(c, "Magellan")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this.$lastTrigger = b();
            this.$triggers = b();
            this._init();
            this._events();
            Foundation.registerPlugin(this, "OffCanvas")
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                var c = this.$element.attr("id");
                this.$element.attr("aria-hidden", "true");
                this.$triggers = b(document).find('[data-open="' + c + '"], [data-close="' + c + '"], [data-toggle="' + c + '"]').attr("aria-expanded", "false").attr("aria-controls",
                    c);
                this.options.closeOnClick && (b(".js-off-canvas-exit").length ? this.$exiter = b(".js-off-canvas-exit") : (c = document.createElement("div"), c.setAttribute("class", "js-off-canvas-exit"), b("[data-off-canvas-content]").append(c), this.$exiter = b(c)));
                this.options.isRevealed = this.options.isRevealed || RegExp(this.options.revealClass, "g").test(this.$element[0].className);
                this.options.isRevealed && (this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2],
                    this._setMQChecker());
                this.options.transitionTime || (this.options.transitionTime = 1E3 * parseFloat(window.getComputedStyle(b("[data-off-canvas-wrapper]")[0]).transitionDuration))
            }
        }, {
            key: "_events",
            value: function () {
                this.$element.off(".zf.trigger .zf.offcanvas").on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
                });
                if (this.options.closeOnClick && this.$exiter.length) this.$exiter.on({
                    "click.zf.offcanvas": this.close.bind(this)
                })
            }
        },
            {
                key: "_setMQChecker",
                value: function () {
                    var c = this;
                    b(window).on("changed.zf.mediaquery", function () {
                        Foundation.MediaQuery.atLeast(c.options.revealOn) ? c.reveal(!0) : c.reveal(!1)
                    }).one("load.zf.offcanvas", function () {
                        Foundation.MediaQuery.atLeast(c.options.revealOn) && c.reveal(!0)
                    })
                }
            }, {
                key: "reveal",
                value: function (b) {
                    var c = this.$element.find("[data-close]");
                    b ? (this.close(), this.isRevealed = !0, this.$element.off("open.zf.trigger toggle.zf.trigger"), c.length && c.hide()) : (this.isRevealed = !1, this.$element.on({
                        "open.zf.trigger": this.open.bind(this),
                        "toggle.zf.trigger": this.toggle.bind(this)
                    }), c.length && c.show())
                }
            }, {
                key: "open",
                value: function (c, d) {
                    if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                        var g = this;
                        b(document.body);
                        this.options.forceTop && b("body").scrollTop(0);
                        Foundation.Move(this.options.transitionTime, this.$element, function () {
                            b("[data-off-canvas-wrapper]").addClass("is-off-canvas-open is-open-" + g.options.position);
                            g.$element.addClass("is-open")
                        });
                        this.$triggers.attr("aria-expanded", "true");
                        this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas");
                        this.options.closeOnClick && this.$exiter.addClass("is-visible");
                        d && (this.$lastTrigger = d);
                        if (this.options.autoFocus) this.$element.one(Foundation.transitionend(this.$element), function () {
                            g.$element.find("a, button").eq(0).focus()
                        });
                        this.options.trapFocus && (b("[data-off-canvas-content]").attr("tabindex", "-1"), this._trapFocus())
                    }
                }
            }, {
                key: "_trapFocus",
                value: function () {
                    var b = Foundation.Keyboard.findFocusable(this.$element),
                        c = b.eq(0),
                        d = b.eq(-1);
                    b.off(".zf.offcanvas").on("keydown.zf.offcanvas", function (b) {
                        if (9 ===
                            b.which || 9 === b.keycode)
                            if (b.target === d[0] && !b.shiftKey && (b.preventDefault(), c.focus()), b.target === c[0] && b.shiftKey) b.preventDefault(), d.focus()
                    })
                }
            }, {
                key: "close",
                value: function () {
                    this.$element.hasClass("is-open") && !this.isRevealed && (b("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-" + this.options.position), this.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), this.options.closeOnClick && this.$exiter.removeClass("is-visible"),
                        this.$triggers.attr("aria-expanded", "false"), this.options.trapFocus && b("[data-off-canvas-content]").removeAttr("tabindex"))
                }
            }, {
                key: "toggle",
                value: function (b, c) {
                    this.$element.hasClass("is-open") ? this.close(b, c) : this.open(b, c)
                }
            }, {
                key: "_handleKeyboard",
                value: function (b) {
                    27 === b.which && (b.stopPropagation(), b.preventDefault(), this.close(), this.$lastTrigger.focus())
                }
            }, {
                key: "destroy",
                value: function () {
                    this.close();
                    this.$element.off(".zf.trigger .zf.offcanvas");
                    this.$exiter.off(".zf.offcanvas");
                    Foundation.unregisterPlugin(this)
                }
            }
        ]);
        return c
    }();
    c.defaults = {
        closeOnClick: !0,
        transitionTime: 0,
        position: "left",
        forceTop: !0,
        isRevealed: !1,
        revealOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    };
    Foundation.plugin(c, "OffCanvas")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this._init();
            Foundation.registerPlugin(this, "Orbit");
            Foundation.Keyboard.register("Orbit", {
                ltr: {
                    ARROW_RIGHT: "next",
                    ARROW_LEFT: "previous"
                },
                rtl: {
                    ARROW_LEFT: "next",
                    ARROW_RIGHT: "previous"
                }
            })
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                this.$wrapper = this.$element.find("." + this.options.containerClass);
                this.$slides = this.$element.find("." + this.options.slideClass);
                var b = this.$element.find("img");
                this.$slides.filter(".is-active").length || this.$slides.eq(0).addClass("is-active");
                this.options.useMUI || this.$slides.addClass("no-motionui");
                if (b.length) Foundation.onImagesLoaded(b, this._prepareForOrbit.bind(this));
                else this._prepareForOrbit();
                this.options.bullets && this._loadBullets();
                this._events();
                this.options.autoPlay && 1 < this.$slides.length && this.geoSync();
                this.options.accessible && this.$wrapper.attr("tabindex", 0)
            }
        }, {
            key: "_loadBullets",
            value: function () {
                this.$bullets =
                    this.$element.find("." + this.options.boxOfBullets).find("button")
            }
        }, {
            key: "geoSync",
            value: function () {
                var b = this;
                this.timer = new Foundation.Timer(this.$element, {
                    duration: this.options.timerDelay,
                    infinite: !1
                }, function () {
                    b.changeSlide(!0)
                });
                this.timer.start()
            }
        }, {
            key: "_prepareForOrbit",
            value: function () {
                var b = this;
                this._setWrapperHeight(function (c) {
                    b._setSlideHeight(c)
                })
            }
        }, {
            key: "_setWrapperHeight",
            value: function (c) {
                var d = 0,
                    g, h = 0;
                this.$slides.each(function () {
                    g = this.getBoundingClientRect().height;
                    b(this).attr("data-slide",
                        h);
                    h && b(this).css({
                        position: "relative",
                        display: "none"
                    });
                    d = g > d ? g : d;
                    h++
                });
                h === this.$slides.length && (this.$wrapper.css({
                    height: d
                }), c(d))
            }
        }, {
            key: "_setSlideHeight",
            value: function (c) {
                this.$slides.each(function () {
                    b(this).css("max-height", c)
                })
            }
        }, {
            key: "_events",
            value: function () {
                var c = this;
                if (1 < this.$slides.length) {
                    if (this.options.swipe) this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function (b) {
                        b.preventDefault();
                        c.changeSlide(!0)
                    }).on("swiperight.zf.orbit", function (b) {
                        b.preventDefault();
                        c.changeSlide(!1)
                    });
                    if (this.options.autoPlay && (this.$slides.on("click.zf.orbit", function () {
                            c.$element.data("clickedOn", c.$element.data("clickedOn") ? !1 : !0);
                            c.timer[c.$element.data("clickedOn") ? "pause" : "start"]()
                    }), this.options.pauseOnHover)) this.$element.on("mouseenter.zf.orbit", function () {
                        c.timer.pause()
                    }).on("mouseleave.zf.orbit", function () {
                        c.$element.data("clickedOn") || c.timer.start()
                    });
                    if (this.options.navButtons) this.$element.find("." + this.options.nextClass + ", ." + this.options.prevClass).attr("tabindex",
                        0).on("click.zf.orbit touchend.zf.orbit", function (d) {
                            d.preventDefault();
                            c.changeSlide(b(this).hasClass(c.options.nextClass))
                        });
                    if (this.options.bullets) this.$bullets.on("click.zf.orbit touchend.zf.orbit", function () {
                        if (/is-active/g.test(this.className)) return !1;
                        var d = b(this).data("slide"),
                            g = d > c.$slides.filter(".is-active").data("slide"),
                            h = c.$slides.eq(d);
                        c.changeSlide(g, h, d)
                    });
                    this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function (d) {
                        Foundation.Keyboard.handleKey(d, "Orbit", {
                            next: function () {
                                c.changeSlide(!0)
                            },
                            previous: function () {
                                c.changeSlide(!1)
                            },
                            handled: function () {
                                b(d.target).is(c.$bullets) && c.$bullets.filter(".is-active").focus()
                            }
                        })
                    })
                }
            }
        }, {
            key: "changeSlide",
            value: function (b, c, d) {
                var h = this.$slides.filter(".is-active").eq(0);
                if (/mui/g.test(h[0].className)) return !1;
                var j = this.$slides.first(),
                    k = this.$slides.last(),
                    l = b ? "Right" : "Left",
                    m = b ? "Left" : "Right",
                    n = this,
                    q;
                q = c ? c : b ? this.options.infiniteWrap ? h.next("." + this.options.slideClass).length ? h.next("." + this.options.slideClass) : j : h.next("." + this.options.slideClass) :
                    this.options.infiniteWrap ? h.prev("." + this.options.slideClass).length ? h.prev("." + this.options.slideClass) : k : h.prev("." + this.options.slideClass);
                q.length && (this.options.bullets && (d = d || this.$slides.index(q), this._updateBullets(d)), this.options.useMUI ? (Foundation.Motion.animateIn(q.addClass("is-active").css({
                    position: "absolute",
                    top: 0
                }), this.options["animInFrom" + l], function () {
                    q.css({
                        position: "relative",
                        display: "block"
                    }).attr("aria-live", "polite")
                }), Foundation.Motion.animateOut(h.removeClass("is-active"),
                    this.options["animOutTo" + m],
                    function () {
                        h.removeAttr("aria-live");
                        n.options.autoPlay && !n.timer.isPaused && n.timer.restart()
                    })) : (h.removeClass("is-active is-in").removeAttr("aria-live").hide(), q.addClass("is-active is-in").attr("aria-live", "polite").show(), this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), this.$element.trigger("slidechange.zf.orbit", [q]))
            }
        }, {
            key: "_updateBullets",
            value: function (b) {
                var c = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur().find("span:last").detach();
                this.$bullets.eq(b).addClass("is-active").append(c)
            }
        }, {
            key: "destroy",
            value: function () {
                this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide();
                Foundation.unregisterPlugin(this)
            }
        }]);
        return c
    }();
    c.defaults = {
        bullets: !0,
        navButtons: !0,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: !0,
        timerDelay: 5E3,
        infiniteWrap: !0,
        swipe: !0,
        pauseOnHover: !0,
        accessible: !0,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous",
        useMUI: !0
    };
    Foundation.plugin(c, "Orbit")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(d) {
            _classCallCheck(this, c);
            this.$element = b(d);
            this.rules = this.$element.data("responsive-menu");
            this.currentPlugin = this.currentMq = null;
            this._init();
            this._events();
            Foundation.registerPlugin(this, "ResponsiveMenu")
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                if ("string" === typeof this.rules) {
                    for (var c = {}, e = this.rules.split(" "), h = 0; h < e.length; h++) {
                        var j = e[h].split("-"),
                            k = 1 < j.length ? j[0] : "small",
                            j = 1 < j.length ? j[1] : j[0];
                        null !== d[j] && (c[k] = d[j])
                    }
                    this.rules = c
                }
                b.isEmptyObject(this.rules) ||
                    this._checkMediaQueries()
            }
        }, {
            key: "_events",
            value: function () {
                var c = this;
                b(window).on("changed.zf.mediaquery", function () {
                    c._checkMediaQueries()
                })
            }
        }, {
            key: "_checkMediaQueries",
            value: function () {
                var c, e = this;
                b.each(this.rules, function (b) {
                    Foundation.MediaQuery.atLeast(b) && (c = b)
                });
                c && !(this.currentPlugin instanceof this.rules[c].plugin) && (b.each(d, function (b, c) {
                    e.$element.removeClass(c.cssClass)
                }), this.$element.addClass(this.rules[c].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin =
                    new this.rules[c].plugin(this.$element, {}))
            }
        }, {
            key: "destroy",
            value: function () {
                this.currentPlugin.destroy();
                b(window).off(".zf.ResponsiveMenu");
                Foundation.unregisterPlugin(this)
            }
        }]);
        return c
    }();
    c.defaults = {};
    var d = {
        dropdown: {
            cssClass: "dropdown",
            plugin: Foundation._plugins["dropdown-menu"] || null
        },
        drilldown: {
            cssClass: "drilldown",
            plugin: Foundation._plugins.drilldown || null
        },
        accordion: {
            cssClass: "accordion-menu",
            plugin: Foundation._plugins["accordion-menu"] || null
        }
    };
    Foundation.plugin(c, "ResponsiveMenu")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = b(e);
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this._init();
            this._events();
            Foundation.registerPlugin(this, "ResponsiveToggle")
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                var c = this.$element.data("responsive-toggle");
                c || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar.");
                this.$targetMenu = b("#" + c);
                this.$toggler = this.$element.find("[data-toggle]");
                this._update()
            }
        }, {
            key: "_events",
            value: function () {
                this._updateMqHandler = this._update.bind(this);
                b(window).on("changed.zf.mediaquery", this._updateMqHandler);
                this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this))
            }
        }, {
            key: "_update",
            value: function () {
                Foundation.MediaQuery.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide())
            }
        }, {
            key: "toggleMenu",
            value: function () {
                Foundation.MediaQuery.atLeast(this.options.hideFor) || (this.$targetMenu.toggle(0), this.$element.trigger("toggled.zf.responsiveToggle"))
            }
        },
            {
                key: "destroy",
                value: function () {
                    this.$element.off(".zf.responsiveToggle");
                    this.$toggler.off(".zf.responsiveToggle");
                    b(window).off("changed.zf.mediaquery", this._updateMqHandler);
                    Foundation.unregisterPlugin(this)
                }
            }
        ]);
        return c
    }();
    c.defaults = {
        hideFor: "medium"
    };
    Foundation.plugin(c, "ResponsiveToggle")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this._init();
            Foundation.registerPlugin(this, "Reveal");
            Foundation.Keyboard.register("Reveal", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close",
                TAB: "tab_forward",
                SHIFT_TAB: "tab_backward"
            })
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                this.id = this.$element.attr("id");
                this.isActive = !1;
                this.cached = {
                    mq: Foundation.MediaQuery.current
                };
                this.isMobile = /iP(ad|hone|od).*OS/.test(window.navigator.userAgent) ||
                    /Android/.test(window.navigator.userAgent);
                this.$anchor = b('[data-open="' + this.id + '"]').length ? b('[data-open="' + this.id + '"]') : b('[data-toggle="' + this.id + '"]');
                this.$anchor.attr({
                    "aria-controls": this.id,
                    "aria-haspopup": !0,
                    tabindex: 0
                });
                if (this.options.fullScreen || this.$element.hasClass("full")) this.options.fullScreen = !0, this.options.overlay = !1;
                this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id));
                this.$element.attr({
                    role: "dialog",
                    "aria-hidden": !0,
                    "data-yeti-box": this.id,
                    "data-resize": this.id
                });
                this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(b("body")), this.$element.addClass("without-overlay"));
                this._events();
                if (this.options.deepLink && window.location.hash === "#" + this.id) b(window).one("load.zf.reveal", this.open.bind(this))
            }
        }, {
            key: "_makeOverlay",
            value: function () {
                return b("<div></div>").addClass("reveal-overlay").appendTo("body")
            }
        }, {
            key: "_updatePosition",
            value: function () {
                var c = this.$element.outerWidth(),
                    d = b(window).width(),
                    g = this.$element.outerHeight(),
                    h = b(window).height(),
                    c = "auto" === this.options.hOffset ? parseInt((d - c) / 2, 10) : parseInt(this.options.hOffset, 10);
                this.$element.css({
                    top: ("auto" === this.options.vOffset ? g > h ? parseInt(Math.min(100, h / 10), 10) : parseInt((h - g) / 4, 10) : parseInt(this.options.vOffset, 10)) + "px"
                });
                if (!this.$overlay || "auto" !== this.options.hOffset) this.$element.css({
                    left: c + "px"
                }), this.$element.css({
                    margin: "0px"
                })
            }
        }, {
            key: "_events",
            value: function () {
                var c = this,
                    d = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": function (g,
                        h) {
                        if (g.target === d.$element[0] || b(g.target).parents("[data-closable]")[0] === h) return c.close.apply(c)
                    },
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": function () {
                        d._updatePosition()
                    }
                });
                if (this.$anchor.length) this.$anchor.on("keydown.zf.reveal", function (b) {
                    if (13 === b.which || 32 === b.which) b.stopPropagation(), b.preventDefault(), d.open()
                });
                if (this.options.closeOnClick && this.options.overlay) this.$overlay.off(".zf.reveal").on("click.zf.reveal", function (c) {
                    c.target === d.$element[0] || b.contains(d.$element[0],
                        c.target) || d.close()
                });
                if (this.options.deepLink) b(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this))
            }
        }, {
            key: "_handleState",
            value: function () {
                window.location.hash === "#" + this.id && !this.isActive ? this.open() : this.close()
            }
        }, {
            key: "open",
            value: function () {
                var c = this;
                if (this.options.deepLink) {
                    var d = "#" + this.id;
                    window.history.pushState ? window.history.pushState(null, null, d) : window.location.hash = d
                }
                this.isActive = !0;
                this.$element.css({
                    visibility: "hidden"
                }).show().scrollTop(0);
                this.options.overlay &&
                    this.$overlay.css({
                        visibility: "hidden"
                    }).show();
                this._updatePosition();
                this.$element.hide().css({
                    visibility: ""
                });
                this.$overlay && (this.$overlay.css({
                    visibility: ""
                }).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow"));
                this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id);
                this.options.animationIn ? function () {
                    c.options.overlay && Foundation.Motion.animateIn(c.$overlay, "fade-in");
                    Foundation.Motion.animateIn(c.$element,
                        c.options.animationIn,
                        function () {
                            c.focusableElements = Foundation.Keyboard.findFocusable(c.$element);
                            c.$element.attr({
                                "aria-hidden": false,
                                tabindex: -1
                            }).focus();
                            console.log("focus")
                        })
                }() : (this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay));
                this.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                }).focus();
                this.$element.trigger("open.zf.reveal");
                this.isMobile ? (this.originalScrollPos = window.pageYOffset, b("html, body").addClass("is-reveal-open")) : b("body").addClass("is-reveal-open");
                setTimeout(function () {
                    c._extraHandlers()
                }, 0)
            }
        }, {
            key: "_extraHandlers",
            value: function () {
                var c = this;
                this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);
                if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) b("body").on("click.zf.reveal", function (d) {
                    d.target === c.$element[0] || b.contains(c.$element[0], d.target) || c.close()
                });
                if (this.options.closeOnEsc) b(window).on("keydown.zf.reveal", function (b) {
                    Foundation.Keyboard.handleKey(b, "Reveal", {
                        close: function () {
                            c.options.closeOnEsc &&
                                (c.close(), c.$anchor.focus())
                        }
                    })
                });
                this.$element.on("keydown.zf.reveal", function (d) {
                    var g = b(this);
                    Foundation.Keyboard.handleKey(d, "Reveal", {
                        tab_forward: function () {
                            if (c.$element.find(":focus").is(c.focusableElements.eq(-1))) return c.focusableElements.eq(0).focus(), !0;
                            if (0 === c.focusableElements.length) return !0
                        },
                        tab_backward: function () {
                            if (c.$element.find(":focus").is(c.focusableElements.eq(0)) || c.$element.is(":focus")) return c.focusableElements.eq(-1).focus(), !0;
                            if (0 === c.focusableElements.length) return !0
                        },
                        open: function () {
                            c.$element.find(":focus").is(c.$element.find("[data-close]")) ? setTimeout(function () {
                                c.$anchor.focus()
                            }, 1) : g.is(c.focusableElements) && c.open()
                        },
                        close: function () {
                            c.options.closeOnEsc && (c.close(), c.$anchor.focus())
                        },
                        handled: function (b) {
                            b && d.preventDefault()
                        }
                    })
                })
            }
        }, {
            key: "close",
            value: function () {
                function c() {
                    d.isMobile ? (b("html, body").removeClass("is-reveal-open"), d.originalScrollPos && (b("body").scrollTop(d.originalScrollPos), d.originalScrollPos = null)) : b("body").removeClass("is-reveal-open");
                    d.$element.attr("aria-hidden", !0);
                    d.$element.trigger("closed.zf.reveal")
                }
                if (!this.isActive || !this.$element.is(":visible")) return !1;
                var d = this;
                this.options.animationOut ? (this.options.overlay ? Foundation.Motion.animateOut(this.$overlay, "fade-out", c) : c(), Foundation.Motion.animateOut(this.$element, this.options.animationOut)) : (this.options.overlay ? this.$overlay.hide(0, c) : c(), this.$element.hide(this.options.hideDelay));
                this.options.closeOnEsc && b(window).off("keydown.zf.reveal");
                !this.options.overlay && this.options.closeOnClick &&
                    b("body").off("click.zf.reveal");
                this.$element.off("keydown.zf.reveal");
                this.options.resetOnClose && this.$element.html(this.$element.html());
                this.isActive = !1;
                d.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.pathname) : window.location.hash = "")
            }
        }, {
            key: "toggle",
            value: function () {
                this.isActive ? this.close() : this.open()
            }
        }, {
            key: "destroy",
            value: function () {
                this.options.overlay && (this.$element.appendTo(b("body")), this.$overlay.hide().off().remove());
                this.$element.hide().off();
                this.$anchor.off(".zf");
                b(window).off(".zf.reveal:" + this.id);
                Foundation.unregisterPlugin(this)
            }
        }]);
        return c
    }();
    c.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: "auto",
        hOffset: "auto",
        fullScreen: !1,
        btmOffsetPct: 10,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1
    };
    Foundation.plugin(c, "Reveal")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this._init();
            Foundation.registerPlugin(this, "Slider");
            Foundation.Keyboard.register("Slider", {
                ltr: {
                    ARROW_RIGHT: "increase",
                    ARROW_UP: "increase",
                    ARROW_DOWN: "decrease",
                    ARROW_LEFT: "decrease",
                    SHIFT_ARROW_RIGHT: "increase_fast",
                    SHIFT_ARROW_UP: "increase_fast",
                    SHIFT_ARROW_DOWN: "decrease_fast",
                    SHIFT_ARROW_LEFT: "decrease_fast"
                },
                rtl: {
                    ARROW_LEFT: "increase",
                    ARROW_RIGHT: "decrease",
                    SHIFT_ARROW_LEFT: "increase_fast",
                    SHIFT_ARROW_RIGHT: "decrease_fast"
                }
            })
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                this.inputs = this.$element.find("input");
                this.handles = this.$element.find("[data-slider-handle]");
                this.$handle = this.handles.eq(0);
                this.$input = this.inputs.length ? this.inputs.eq(0) : b("#" + this.$handle.attr("aria-controls"));
                this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
                var c = !1,
                    d = this;
                if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) this.options.disabled = !0, this.$element.addClass(this.options.disabledClass);
                this.inputs.length || (this.inputs = b().add(this.$input), this.options.binding = !0);
                this._setInitAttr(0);
                this._events(this.$handle);
                this.handles[1] && (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(1), this.$input2 = 1 < this.inputs.length ? this.inputs.eq(1) : b("#" + this.$handle2.attr("aria-controls")), this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), c = !0, this._setHandlePos(this.$handle, this.options.initialStart, !0, function () {
                    d._setHandlePos(d.$handle2,
                        d.options.initialEnd, true)
                }), this._setInitAttr(1), this._events(this.$handle2));
                c || this._setHandlePos(this.$handle, this.options.initialStart, !0)
            }
        }, {
            key: "_setHandlePos",
            value: function (b, c, d, h) {
                if (!this.$element.hasClass(this.options.disabledClass)) {
                    c = parseFloat(c);
                    c < this.options.start ? c = this.options.start : c > this.options.end && (c = this.options.end);
                    var j = this.options.doubleSided;
                    if (j)
                        if (0 === this.handles.index(b)) var k = parseFloat(this.$handle2.attr("aria-valuenow")),
                            c = c >= k ? k - this.options.step : c;
                        else k =
                            parseFloat(this.$handle.attr("aria-valuenow")), c = c <= k ? k + this.options.step : c;
                    this.options.vertical && !d && (c = this.options.end - c);
                    var l = this,
                        m = (d = this.options.vertical) ? "height" : "width",
                        n = d ? "top" : "left",
                        d = b[0].getBoundingClientRect()[m],
                        k = this.$element[0].getBoundingClientRect()[m],
                        q = ((c - this.options.start) / (this.options.end - this.options.start)).toFixed(2),
                        p = (100 * ((k - d) * q / k)).toFixed(this.options.decimal),
                        c = parseFloat(c.toFixed(this.options.decimal)),
                        s = {};
                    this._setValues(b, c);
                    j && (c = 0 === this.handles.index(b),
                        j = ~~(100 * (d / k)), c ? (s[n] = p + "%", c = parseFloat(this.$handle2[0].style[n]) - p + j, h && "function" === typeof h && h()) : (h = parseFloat(this.$handle[0].style[n]), c = p - (isNaN(h) ? this.options.initialStart / ((this.options.end - this.options.start) / 100) : h) + j), s["min-" + m] = c + "%");
                    this.$element.one("finished.zf.animate", function () {
                        l.$element.trigger("moved.zf.slider", [b])
                    });
                    h = this.$element.data("dragging") ? 1E3 / 60 : this.options.moveTime;
                    Foundation.Move(h, b, function () {
                        b.css(n, p + "%");
                        l.options.doubleSided ? l.$fill.css(s) : l.$fill.css(m,
                            q * 100 + "%")
                    });
                    clearTimeout(l.timeout);
                    l.timeout = setTimeout(function () {
                        l.$element.trigger("changed.zf.slider", [b])
                    }, l.options.changedDelay)
                }
            }
        }, {
            key: "_setInitAttr",
            value: function (b) {
                var c = this.inputs.eq(b).attr("id") || Foundation.GetYoDigits(6, "slider");
                this.inputs.eq(b).attr({
                    id: c,
                    max: this.options.end,
                    min: this.options.start,
                    step: this.options.step
                });
                this.handles.eq(b).attr({
                    role: "slider",
                    "aria-controls": c,
                    "aria-valuemax": this.options.end,
                    "aria-valuemin": this.options.start,
                    "aria-valuenow": 0 === b ? this.options.initialStart : this.options.initialEnd,
                    "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                    tabindex: 0
                })
            }
        }, {
            key: "_setValues",
            value: function (b, c) {
                this.inputs.eq(this.options.doubleSided ? this.handles.index(b) : 0).val(c);
                b.attr("aria-valuenow", c)
            }
        }, {
            key: "_handleEvent",
            value: function (c, d, g) {
                var h;
                if (g) h = this._adjustValue(null, g), c = !0;
                else {
                    c.preventDefault();
                    var j = this.options.vertical,
                        g = j ? "height" : "width",
                        k = j ? "top" : "left",
                        l = j ? c.pageY : c.pageX;
                    this.$handle[0].getBoundingClientRect();
                    h = this.$element[0].getBoundingClientRect()[g];
                    var j = j ? b(window).scrollTop() : b(window).scrollLeft(),
                        m = this.$element.offset()[k];
                    c.clientY === c.pageY && (l += j);
                    c = l - m;
                    l = 0 > c ? 0 : c > h ? h : c;
                    offsetPct = l / h;
                    h = (this.options.end - this.options.start) * offsetPct + this.options.start;
                    Foundation.rtl() && !this.options.vertical && (h = this.options.end - h);
                    h = this._adjustValue(null, h);
                    c = !1;
                    d || (d = Math.abs(this.$handle.position()[k] + this.$handle[g]() / 2 - l), g = Math.abs(this.$handle2.position()[k] + this.$handle2[g]() / 2 - l), d = d <= g ? this.$handle : this.$handle2)
                }
                this._setHandlePos(d, h, c)
            }
        },
            {
                key: "_adjustValue",
                value: function (b, c) {
                    var d, h = this.options.step,
                        j = parseFloat(h / 2),
                        k, l;
                    d = b ? parseFloat(b.attr("aria-valuenow")) : c;
                    k = d % h;
                    l = d - k;
                    return 0 === k ? d : d >= l + j ? l + h : l
                }
            }, {
                key: "_events",
                value: function (c) {
                    var d = this,
                        g;
                    this.inputs.off("change.zf.slider").on("change.zf.slider", function (c) {
                        var e = d.inputs.index(b(this));
                        d._handleEvent(c, d.handles.eq(e), b(this).val())
                    });
                    if (this.options.clickSelect) this.$element.off("click.zf.slider").on("click.zf.slider", function (c) {
                        if (d.$element.data("dragging")) return !1;
                        b(c.target).is("[data-slider-handle]") || (d.options.doubleSided ? d._handleEvent(c) : d._handleEvent(c, d.$handle))
                    });
                    if (this.options.draggable) {
                        this.handles.addTouch();
                        var h = b("body");
                        c.off("mousedown.zf.slider").on("mousedown.zf.slider", function (j) {
                            c.addClass("is-dragging");
                            d.$fill.addClass("is-dragging");
                            d.$element.data("dragging", !0);
                            g = b(j.currentTarget);
                            h.on("mousemove.zf.slider", function (b) {
                                b.preventDefault();
                                d._handleEvent(b, g)
                            }).on("mouseup.zf.slider", function (b) {
                                d._handleEvent(b, g);
                                c.removeClass("is-dragging");
                                d.$fill.removeClass("is-dragging");
                                d.$element.data("dragging", !1);
                                h.off("mousemove.zf.slider mouseup.zf.slider")
                            })
                        }).on("selectstart.zf.slider touchmove.zf.slider", function (b) {
                            b.preventDefault()
                        })
                    }
                    c.off("keydown.zf.slider").on("keydown.zf.slider", function (c) {
                        var e = b(this),
                            g = d.options.doubleSided ? d.handles.index(e) : 0,
                            h = parseFloat(d.inputs.eq(g).val()),
                            n;
                        Foundation.Keyboard.handleKey(c, "Slider", {
                            decrease: function () {
                                n = h - d.options.step
                            },
                            increase: function () {
                                n = h + d.options.step
                            },
                            decrease_fast: function () {
                                n =
                                    h - 10 * d.options.step
                            },
                            increase_fast: function () {
                                n = h + 10 * d.options.step
                            },
                            handled: function () {
                                c.preventDefault();
                                d._setHandlePos(e, n, !0)
                            }
                        })
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    this.handles.off(".zf.slider");
                    this.inputs.off(".zf.slider");
                    this.$element.off(".zf.slider");
                    Foundation.unregisterPlugin(this)
                }
            }
        ]);
        return c
    }();
    c.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: !1,
        clickSelect: !0,
        vertical: !1,
        draggable: !0,
        disabled: !1,
        doubleSided: !1,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled",
        invertVertical: !1,
        changedDelay: 500
    };
    Foundation.plugin(c, "Slider")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this._init();
            Foundation.registerPlugin(this, "Sticky")
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                var c = this.$element.parent("[data-sticky-container]"),
                    d = this.$element[0].id || Foundation.GetYoDigits(6, "sticky"),
                    g = this;
                c.length || (this.wasWrapped = !0);
                this.$container = c.length ? c : b(this.options.container).wrapInner(this.$element);
                this.$container.addClass(this.options.containerClass);
                this.$element.addClass(this.options.stickyClass).attr({
                    "data-resize": d
                });
                this.scrollCount = this.options.checkEvery;
                this.isStuck = !1;
                b(window).one("load.zf.sticky", function () {
                    g.options.anchor !== "" ? g.$anchor = b("#" + g.options.anchor) : g._parsePoints();
                    g._setSizes(function () {
                        g._calc(false)
                    });
                    g._events(d.split("-").reverse().join("-"))
                })
            }
        }, {
            key: "_parsePoints",
            value: function () {
                for (var c = ["" == this.options.topAnchor ? 1 : this.options.topAnchor, "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor],
                        d = {}, g = 0, h = c.length; g < h && c[g]; g++) {
                    var j;
                    if ("number" === typeof c[g]) j = c[g];
                    else {
                        var k = c[g].split(":"),
                            l = b("#" + k[0]);
                        j = l.offset().top;
                        k[1] && "bottom" === k[1].toLowerCase() && (j += l[0].getBoundingClientRect().height)
                    }
                    d[g] = j
                }
                this.points = d
            }
        }, {
            key: "_events",
            value: function (c) {
                var d = this,
                    g = this.scrollListener = "scroll.zf." + c;
                this.isOn || (this.canStick && (this.isOn = !0, b(window).off(g).on(g, function () {
                    0 === d.scrollCount ? (d.scrollCount = d.options.checkEvery, d._setSizes(function () {
                        d._calc(!1, window.pageYOffset)
                    })) : (d.scrollCount--,
                        d._calc(!1, window.pageYOffset))
                })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function () {
                    d._setSizes(function () {
                        d._calc(false);
                        d.canStick ? d.isOn || d._events(c) : d.isOn && d._pauseListeners(g)
                    })
                }))
            }
        }, {
            key: "_pauseListeners",
            value: function (c) {
                this.isOn = !1;
                b(window).off(c);
                this.$element.trigger("pause.zf.sticky")
            }
        }, {
            key: "_calc",
            value: function (b, c) {
                b && this._setSizes();
                if (!this.canStick) return this.isStuck && this._removeSticky(!0), !1;
                c || (c = window.pageYOffset);
                c >= this.topPoint ? c <= this.bottomPoint ?
                    this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0)
            }
        }, {
            key: "_setSticky",
            value: function () {
                var b = this,
                    c = this.options.stickTo,
                    d = "top" === c ? "marginTop" : "marginBottom",
                    h = "top" === c ? "bottom" : "top",
                    j = {};
                j[d] = this.options[d] + "em";
                j[c] = 0;
                j[h] = "auto";
                j.left = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"], 10);
                this.isStuck = !0;
                this.$element.removeClass("is-anchored is-at-" + h).addClass("is-stuck is-at-" + c).css(j).trigger("sticky.zf.stuckto:" +
                    c);
                this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
                    b._setSizes()
                })
            }
        }, {
            key: "_removeSticky",
            value: function (b) {
                var c = this.options.stickTo,
                    d = {},
                    h = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                    j = b ? "top" : "bottom";
                d["top" === c ? "marginTop" : "marginBottom"] = 0;
                d.bottom = "auto";
                d.top = b ? 0 : h;
                d.left = "";
                this.isStuck = !1;
                this.$element.removeClass("is-stuck is-at-" + c).addClass("is-anchored is-at-" + j).css(d).trigger("sticky.zf.unstuckfrom:" +
                    j)
            }
        }, {
            key: "_setSizes",
            value: function (b) {
                (this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn)) || b();
                var c = this.$container[0].getBoundingClientRect().width,
                    d = window.getComputedStyle(this.$container[0]),
                    h = parseInt(d["padding-right"], 10);
                this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints();
                this.$element.css({
                    "max-width": c - h + "px"
                });
                c = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                "none" == this.$element.css("display") &&
                    (c = 0);
                this.containerHeight = c;
                this.$container.css({
                    height: c
                });
                this.elemHeight = c;
                this.isStuck && this.$element.css({
                    left: this.$container.offset().left + parseInt(d["padding-left"], 10)
                });
                this._setBreakPoints(c, function () {
                    b && b()
                })
            }
        }, {
            key: "_setBreakPoints",
            value: function (b, c) {
                if (!this.canStick)
                    if (c) c();
                    else return !1;
                var d = parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * this.options.marginTop,
                    h = parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * this.options.marginBottom,
                    j = this.points ?
                    this.points[0] : this.$anchor.offset().top,
                    k = this.points ? this.points[1] : j + this.anchorHeight,
                    l = window.innerHeight;
                "top" === this.options.stickTo ? (j -= d, k -= b + d) : "bottom" === this.options.stickTo && (j -= l - (b + h), k -= l - h);
                this.topPoint = j;
                this.bottomPoint = k;
                c && c()
            }
        }, {
            key: "destroy",
            value: function () {
                this._removeSticky(!0);
                this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
                    height: "",
                    top: "",
                    bottom: "",
                    "max-width": ""
                }).off("resizeme.zf.trigger");
                this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky");
                b(window).off(this.scrollListener);
                this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                    height: ""
                });
                Foundation.unregisterPlugin(this)
            }
        }]);
        return c
    }();
    c.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    };
    Foundation.plugin(c, "Sticky")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this._init();
            Foundation.registerPlugin(this, "Tabs");
            Foundation.Keyboard.register("Tabs", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "previous",
                ARROW_DOWN: "next",
                ARROW_LEFT: "previous"
            })
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                var c = this;
                this.$tabTitles = this.$element.find("." + this.options.linkClass);
                this.$tabContent = b('[data-tabs-content="' +
                    this.$element[0].id + '"]');
                this.$tabTitles.each(function () {
                    var d = b(this),
                        f = d.find("a"),
                        j = d.hasClass("is-active"),
                        k = f[0].hash.slice(1),
                        l = f[0].id ? f[0].id : k + "-label",
                        m = b("#" + k);
                    d.attr({
                        role: "presentation"
                    });
                    f.attr({
                        role: "tab",
                        "aria-controls": k,
                        "aria-selected": j,
                        id: l
                    });
                    m.attr({
                        role: "tabpanel",
                        "aria-hidden": !j,
                        "aria-labelledby": l
                    });
                    j && c.options.autoFocus && f.focus()
                });
                if (this.options.matchHeight) {
                    var d = this.$tabContent.find("img");
                    if (d.length) Foundation.onImagesLoaded(d, this._setHeight.bind(this));
                    else this._setHeight()
                }
                this._events()
            }
        },
            {
                key: "_events",
                value: function () {
                    this._addKeyHandler();
                    this._addClickHandler();
                    this._setHeightMqHandler = null;
                    this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), b(window).on("changed.zf.mediaquery", this._setHeightMqHandler))
                }
            }, {
                key: "_addClickHandler",
                value: function () {
                    var c = this;
                    this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function (d) {
                        d.preventDefault();
                        d.stopPropagation();
                        b(this).hasClass("is-active") || c._handleTabChange(b(this))
                    })
                }
            }, {
                key: "_addKeyHandler",
                value: function () {
                    var c = this;
                    c.$element.find("li:first-of-type");
                    c.$element.find("li:last-of-type");
                    this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function (d) {
                        if (9 !== d.which) {
                            var g = b(this),
                                h = g.parent("ul").children("li"),
                                j, k;
                            h.each(function (d) {
                                b(this).is(g) && (c.options.wrapOnKeys ? (j = 0 === d ? h.last() : h.eq(d - 1), k = d === h.length - 1 ? h.first() : h.eq(d + 1)) : (j = h.eq(Math.max(0, d - 1)), k = h.eq(Math.min(d + 1, h.length - 1))))
                            });
                            Foundation.Keyboard.handleKey(d, "Tabs", {
                                open: function () {
                                    g.find('[role="tab"]').focus();
                                    c._handleTabChange(g)
                                },
                                previous: function () {
                                    j.find('[role="tab"]').focus();
                                    c._handleTabChange(j)
                                },
                                next: function () {
                                    k.find('[role="tab"]').focus();
                                    c._handleTabChange(k)
                                },
                                handled: function () {
                                    d.stopPropagation();
                                    d.preventDefault()
                                }
                            })
                        }
                    })
                }
            }, {
                key: "_handleTabChange",
                value: function (c) {
                    var d = c.find('[role="tab"]'),
                        g = this.$tabContent.find(d[0].hash),
                        h = this.$element.find("." + this.options.linkClass + ".is-active").removeClass("is-active").find('[role="tab"]').attr({
                            "aria-selected": "false"
                        });
                    b("#" + h.attr("aria-controls")).removeClass("is-active").attr({
                        "aria-hidden": "true"
                    });
                    c.addClass("is-active");
                    d.attr({
                        "aria-selected": "true"
                    });
                    g.addClass("is-active").attr({
                        "aria-hidden": "false"
                    });
                    this.$element.trigger("change.zf.tabs", [c])
                }
            }, {
                key: "selectTab",
                value: function (b) {
                    b = "object" === typeof b ? b[0].id : b;
                    0 > b.indexOf("#") && (b = "#" + b);
                    this._handleTabChange(this.$tabTitles.find('[href="' + b + '"]').parent("." + this.options.linkClass))
                }
            }, {
                key: "_setHeight",
                value: function () {
                    var c = 0;
                    this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function () {
                        var d = b(this),
                            g = d.hasClass("is-active");
                        g || d.css({
                            visibility: "hidden",
                            display: "block"
                        });
                        var h = this.getBoundingClientRect().height;
                        g || d.css({
                            visibility: "",
                            display: ""
                        });
                        c = h > c ? h : c
                    }).css("height", c + "px")
                }
            }, {
                key: "destroy",
                value: function () {
                    this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide();
                    this.options.matchHeight && null != this._setHeightMqHandler && b(window).off("changed.zf.mediaquery", this._setHeightMqHandler);
                    Foundation.unregisterPlugin(this)
                }
            }
        ]);
        return c
    }();
    c.defaults = {
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        linkClass: "tabs-title",
        panelClass: "tabs-panel"
    };
    Foundation.plugin(c, "Tabs")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, e.data(), f);
            this.className = "";
            this._init();
            this._events();
            Foundation.registerPlugin(this, "Toggler")
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                var c;
                this.options.animate ? (c = this.options.animate.split(" "), this.animationIn = c[0], this.animationOut = c[1] || null) : (c = this.$element.data("toggler"), this.className = "." === c[0] ? c.slice(1) : c);
                c = this.$element[0].id;
                b('[data-open="' + c + '"], [data-close="' +
                    c + '"], [data-toggle="' + c + '"]').attr("aria-controls", c);
                this.$element.attr("aria-expanded", this.$element.is(":hidden") ? !1 : !0)
            }
        }, {
            key: "_events",
            value: function () {
                this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
            }
        }, {
            key: "toggle",
            value: function () {
                this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
            }
        }, {
            key: "_toggleClass",
            value: function () {
                this.$element.toggleClass(this.className);
                var b = this.$element.hasClass(this.className);
                b ? this.$element.trigger("on.zf.toggler") :
                    this.$element.trigger("off.zf.toggler");
                this._updateARIA(b)
            }
        }, {
            key: "_toggleAnimate",
            value: function () {
                var b = this;
                this.$element.is(":hidden") ? Foundation.Motion.animateIn(this.$element, this.animationIn, function () {
                    b._updateARIA(!0);
                    this.trigger("on.zf.toggler")
                }) : Foundation.Motion.animateOut(this.$element, this.animationOut, function () {
                    b._updateARIA(!1);
                    this.trigger("off.zf.toggler")
                })
            }
        }, {
            key: "_updateARIA",
            value: function (b) {
                this.$element.attr("aria-expanded", b ? !0 : !1)
            }
        }, {
            key: "destroy",
            value: function () {
                this.$element.off(".zf.toggler");
                Foundation.unregisterPlugin(this)
            }
        }]);
        return c
    }();
    c.defaults = {
        animate: !1
    };
    Foundation.plugin(c, "Toggler")
}(jQuery);
"use strict";
_createClass = function () {
    function b(b, d) {
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            f.enumerable = f.enumerable || !1;
            f.configurable = !0;
            "value" in f && (f.writable = !0);
            Object.defineProperty(b, f.key, f)
        }
    }
    return function (c, d, e) {
        d && b(c.prototype, d);
        e && b(c, e);
        return c
    }
}();

function _classCallCheck(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
} ! function (b) {
    var c = function () {
        function c(e, f) {
            _classCallCheck(this, c);
            this.$element = e;
            this.options = b.extend({}, c.defaults, this.$element.data(), f);
            this.isClick = this.isActive = !1;
            this._init();
            Foundation.registerPlugin(this, "Tooltip")
        }
        _createClass(c, [{
            key: "_init",
            value: function () {
                var c = this.$element.attr("aria-describedby") || Foundation.GetYoDigits(6, "tooltip");
                this.options.positionClass = this.options.positionClass || this._getPositionClass(this.$element);
                this.options.tipText = this.options.tipText || this.$element.attr("title");
                this.template = this.options.template ? b(this.options.template) : this._buildTemplate(c);
                this.template.appendTo(document.body).text(this.options.tipText).hide();
                this.$element.attr({
                    title: "",
                    "aria-describedby": c,
                    "data-yeti-box": c,
                    "data-toggle": c,
                    "data-resize": c
                }).addClass(this.triggerClass);
                this.usedPositions = [];
                this.counter = 4;
                this.classChanged = !1;
                this._events()
            }
        }, {
            key: "_getPositionClass",
            value: function (b) {
                return !b ? "" : b = (b = b[0].className.match(/\b(top|left|right)\b/g)) ? b[0] : ""
            }
        }, {
            key: "_buildTemplate",
            value: function (c) {
                var d =
                    (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim();
                return b("<div></div>").addClass(d).attr({
                    role: "tooltip",
                    "aria-hidden": !0,
                    "data-is-active": !1,
                    "data-is-focus": !1,
                    id: c
                })
            }
        }, {
            key: "_reposition",
            value: function (b) {
                this.usedPositions.push(b ? b : "bottom");
                !b && 0 > this.usedPositions.indexOf("top") ? this.template.addClass("top") : "top" === b && 0 > this.usedPositions.indexOf("bottom") ? this.template.removeClass(b) : "left" === b && 0 > this.usedPositions.indexOf("right") ? this.template.removeClass(b).addClass("right") :
                    "right" === b && 0 > this.usedPositions.indexOf("left") ? this.template.removeClass(b).addClass("left") : !b && -1 < this.usedPositions.indexOf("top") && 0 > this.usedPositions.indexOf("left") ? this.template.addClass("left") : "top" === b && -1 < this.usedPositions.indexOf("bottom") && 0 > this.usedPositions.indexOf("left") ? this.template.removeClass(b).addClass("left") : ("left" === b && -1 < this.usedPositions.indexOf("right") && 0 > this.usedPositions.indexOf("bottom") || "right" === b && -1 < this.usedPositions.indexOf("left") && this.usedPositions.indexOf("bottom"),
                        this.template.removeClass(b));
                this.classChanged = !0;
                this.counter--
            }
        }, {
            key: "_setPosition",
            value: function () {
                var b = this._getPositionClass(this.template),
                    c = Foundation.Box.GetDimensions(this.template),
                    d = Foundation.Box.GetDimensions(this.$element);
                if (c.width >= c.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.template)) return this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                    width: d.windowDims.width -
                        2 * this.options.hOffset,
                    height: "auto"
                }), !1;
                for (this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center " + (b || "bottom"), this.options.vOffset, this.options.hOffset)) ; !Foundation.Box.ImNotTouchingYou(this.template) && this.counter;) this._reposition(b), this._setPosition()
            }
        }, {
            key: "show",
            value: function () {
                if ("all" !== this.options.showOn && !Foundation.MediaQuery.atLeast(this.options.showOn)) return !1;
                this.template.css("visibility", "hidden").show();
                this._setPosition();
                this.$element.trigger("closeme.zf.tooltip",
                    this.template.attr("id"));
                this.template.attr({
                    "data-is-active": !0,
                    "aria-hidden": !1
                });
                this.isActive = !0;
                this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function () { });
                this.$element.trigger("show.zf.tooltip")
            }
        }, {
            key: "hide",
            value: function () {
                var b = this;
                this.template.stop().attr({
                    "aria-hidden": !0,
                    "data-is-active": !1
                }).fadeOut(this.options.fadeOutDuration, function () {
                    b.isActive = !1;
                    b.isClick = !1;
                    b.classChanged && (b.template.removeClass(b._getPositionClass(b.template)).addClass(b.options.positionClass),
                        b.usedPositions = [], b.counter = 4, b.classChanged = !1)
                });
                this.$element.trigger("hide.zf.tooltip")
            }
        }, {
            key: "_events",
            value: function () {
                var b = this,
                    c = !1;
                if (!this.options.disableHover) this.$element.on("mouseenter.zf.tooltip", function () {
                    b.isActive || (b.timeout = setTimeout(function () {
                        b.show()
                    }, b.options.hoverDelay))
                }).on("mouseleave.zf.tooltip", function () {
                    clearTimeout(b.timeout);
                    (!c || b.isClick && !b.options.clickOpen) && b.hide()
                });
                if (this.options.clickOpen) this.$element.on("mousedown.zf.tooltip", function (c) {
                    c.stopImmediatePropagation();
                    b.isClick || (b.isClick = !0, (b.options.disableHover || !b.$element.attr("tabindex")) && !b.isActive && b.show())
                });
                else this.$element.on("mousedown.zf.tooltip", function (c) {
                    c.stopImmediatePropagation();
                    b.isClick = !0
                });
                if (!this.options.disableForTouch) this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function () {
                    b.isActive ? b.hide() : b.show()
                });
                this.$element.on({
                    "close.zf.trigger": this.hide.bind(this)
                });
                this.$element.on("focus.zf.tooltip", function () {
                    c = !0;
                    if (b.isClick) return b.options.clickOpen || (c = !1), !1;
                    b.show()
                }).on("focusout.zf.tooltip",
                    function () {
                        c = !1;
                        b.isClick = !1;
                        b.hide()
                    }).on("resizeme.zf.trigger", function () {
                        b.isActive && b._setPosition()
                    })
            }
        }, {
            key: "toggle",
            value: function () {
                this.isActive ? this.hide() : this.show()
            }
        }, {
            key: "destroy",
            value: function () {
                this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tootip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize");
                this.template.remove();
                Foundation.unregisterPlugin(this)
            }
        }]);
        return c
    }();
    c.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        positionClass: "",
        vOffset: 10,
        hOffset: 12
    };
    Foundation.plugin(c, "Tooltip")
}(jQuery);
var UIUtil = {
    showDialog: function (b, c, d, e) {
        $(".dialog-modal-bg").detach();
        var f = $('<div class="dialog-modal-bg"></div>');
        f.css("z-index", "100000").css("opacity", 0);
        d || f.click(function () {
            UIUtil.hideAllDialogs();
            c && c()
        });
        b.after(f);
        b.removeClass("hidden").css("z-index", "100001").css("opacity", 0).css("top", "100px");
        b.css("left", (window.innerWidth - b.outerWidth()) / 2);
        e || (d = $('<a class="button-close" href="#">X</a>'), b.append(d), b.find(".button-close").unbind().click(function () {
            _log("dialog", "close");
            UIUtil.hideDialog(b,
                c);
            return !1
        }));
        b.find("input[type=submit]").unbind().click(function () {
            _log("dialog", "close by submit");
            var b = $(this);
            UIUtil.hideDialog($(this).parents("div.dialog-modal"), function () {
                $(b.parents("form")[0]).submit()
            });
            return false
        });
        b.css("top", -b.outerHeight());
        b.outerHeight();
        f.fadeTo(200, 0.8);
        b.css({
            top: "100px"
        });
        b.fadeTo(500, 1);
        $(window).bind("keyup", function () {
            if (!event.metaKey && event.which == 27) {
                _log("dialog", "close by escape");
                UIUtil.hideDialog(b)
            }
        })
    },
    hideAllDialogs: function () {
        $(window).unbind("keyup");
        $(".dialog-modal").each(function (b, c) {
            var c = $(c),
                d = c.next();
            d.hasClass("dialog-modal-bg") && d.fadeTo(250, 0, function () {
                d.detach()
            });
            c.outerHeight();
            c.css({
                top: "-99999px"
            });
            c.fadeTo(500, 0)
        })
    },
    hideDialog: function (b, c) {
        $(window).unbind("keyup");
        var d = b.next();
        d.hasClass("dialog-modal-bg") && d.fadeTo(250, 0, function () {
            d.detach()
        });
        b.css({
            top: "-99999px"
        });
        c && c();
        b.fadeTo(200, 0)
    }
},
    g_timeoutId;
$(document).ready(function () {
    g_standalone || (g_timeoutId = window.setInterval(function () {
        if (IDE.isDirty && IDE.autosave && IDE.currentProjectId) {
            var b = Runtime.stage.captureScreenshot();
            IDE._doProjectSave(null, null, b, !1, !0, null)
        } else sendKeepAlive("");
        0 < $(".messages").length && Assignments.initMessaging()
    }, 3E5))
});

function sendKeepAlive(b) {
    $.ajax({
        type: "POST",
        url: "api/keepalive.aspx",
        data: b,
        success: function (b) {
            "OK" != b && (window.clearInterval(g_timeoutId), $("body").append('<div id="timedout" class="idedialog"><span class="title">Oops</span><p>Sorry, your session has ended. Please login again from another tab to save.</p></div>'), $("#timedout").modal())
        }
    })
}
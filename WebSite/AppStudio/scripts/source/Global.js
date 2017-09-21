function shareFacebook(b, c) {
    var c = c ? c : {},
        d = "https://www.facebook.com/dialog/share?" + $.param({
            app_id: c.appId,
            display: "popup",
            href: b,
            redirect_uri: "http://" + (c.serverName ? c.serverName : "www.tynker.com") + "/api/closewindow"
        });
    window.open(d, "Share", "toolbar=0,status=0,width=626,height=436")
}

function shareTwitter(b, c, d) {
    d = d ? d : {};
    d = void 0 !== d.hashTags ? d.hashTags : "stem,hourofcode";
    b = {
        url: b,
        text: c
    };
    d && (b.hashtags = d);
    b = "https://twitter.com/intent/tweet?" + $.param(b);
    window.open(b, "Tweet", "toolbar=0,status=0,width=626,height=436")
}

function shareGooglePlus(b) {
    b = "https://plus.google.com/share?" + $.param({
        url: b
    });
    window.open(b, "Share on Google+", "toolbar=0,status=0,width=626,height=436")
}

function shareEmail(b, c) {
    window.open("mailto:?subject=" + encodeURIComponent(b) + "&body=" + encodeURIComponent(c), "Share using e-mail", "toolbar=0,status=0,width=626,height=436")
}

function shareProjectFacebook(b, c) {
    var d = c.serverName ? c.serverName : "www.tynker.com";
    shareFacebook(c.shareUrl ? c.shareUrl : "http://" + d + "/play?p=" + b, c)
}

function shareProjectTwitter(b, c, d, e) {
    e = e ? e : {};
    d = e.serverName ? e.serverName : "www.tynker.com";
    e.hashTags = e.hashTags ? e.hashTags : "tynker";
    shareTwitter(e.shareUrl ? e.shareUrl : "http://" + d + "/play?p=" + b, "Check out " + c + " a coding project created with Tynker", e)
}

function shareProjectGooglePlus(b, c) {
    var c = c ? c : {},
        d = c.serverName ? c.serverName : "www.tynker.com";
    shareGooglePlus(c.shareUrl ? c.shareUrl : "http://" + d + "/play?p=" + b)
}

function shareProjectEmail(b, c, d, e) {
    var e = e ? e : {},
        f = e.serverName ? e.serverName : "www.tynker.com";
    shareEmail(c, "\n\nTynker project made by " + d + "\n" + (e.shareUrl ? e.shareUrl : "http://" + f + "/play?p=" + b) + "\n")
}

function shareMyHocProjectTwitter(b, c, d, e) {
    e = e ? e : {};
    e.hashTags = e.hashTags ? e.hashTags : "hourofcode,tynker";
    e.serverName ? e.serverName : "www.tynker.com";
    d = e.serverName;
    shareTwitter(e.shareUrl ? e.shareUrl : "http://" + d + "/play?p=" + b, "I made " + c + " using code. Try it at", e)
}

function shareMyHocProjectEmail(b, c, d, e) {
    e = e ? e : {};
    e.serverName = e.serverName ? e.serverName : "www.tynker.com";
    d = e.serverName;
    shareEmail(c, "\n\nI made " + c + " using code. Try it at " + (e.shareUrl ? e.shareUrl : "http://" + d + "/play?p=" + b))
}
$(document).ready(function () {
    $(".js-share-facebook").click(function () {
        var b = $(this),
            c = b.attr("data-url"),
            b = b.attr("data-options"),
            b = $.parseJSON(b);
        shareFacebook(c, b)
    });
    $(".js-share-twitter").click(function () {
        var b = $(this),
            c = b.attr("data-url"),
            d = b.attr("data-text"),
            b = b.attr("data-options"),
            b = $.parseJSON(b);
        shareTwitter(c, d, b)
    });
    $(".js-share-google-plus").click(function () {
        var b = $(this),
            c = b.attr("data-url"),
            b = b.attr("data-options"),
            b = $.parseJSON(b);
        shareGooglePlus(c, b)
    });
    $(".js-share-email").click(function () {
        var b =
            $(this),
            c = b.attr("data-subject"),
            d = b.attr("data-body"),
            b = b.attr("data-options");
        $.parseJSON(b);
        shareEmail(c, d)
    })
});
(function () {
    var b = function () {
        return this
    }(),
        c = function (b, d, e) {
            "string" != typeof b ? c.original ? c.original.apply(window, arguments) : (console.error("dropping module because define wasn't a string."), console.trace()) : (2 == arguments.length && (e = d), c.modules || (c.modules = {}, c.payloads = {}), c.payloads[b] = e, c.modules[b] = null)
        },
        d = function (b, c, e) {
            if ("[object Array]" === Object.prototype.toString.call(c)) {
                for (var k = [], l = 0, m = c.length; l < m; ++l) {
                    var n = f(b, c[l]);
                    if (!n && d.original) return d.original.apply(window, arguments);
                    k.push(n)
                }
                e && e.apply(null, k)
            } else {
                if ("string" == typeof c) return k = f(b, c), !k && d.original ? d.original.apply(window, arguments) : (e && e(), k);
                if (d.original) return d.original.apply(window, arguments)
            }
        },
        e = function (b, c) {
            if (-1 !== c.indexOf("!")) {
                var d = c.split("!");
                return e(b, d[0]) + "!" + e(b, d[1])
            }
            if ("." == c.charAt(0))
                for (c = b.split("/").slice(0, -1).join("/") + "/" + c; -1 !== c.indexOf(".") && d != c;) d = c, c = c.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
            return c
        },
        f = function (b, f) {
            var f = e(b, f),
                j = c.modules[f];
            if (!j) {
                j = c.payloads[f];
                if ("function" == typeof j) {
                    var k = {},
                        l = {
                            id: f,
                            uri: "",
                            exports: k,
                            packaged: !0
                        },
                        k = j(function (b, c) {
                            return d(f, b, c)
                        }, k, l) || l.exports;
                    c.modules[f] = k;
                    delete c.payloads[f]
                }
                j = c.modules[f] = k || j
            }
            return j
        };
    (function (e) {
        var f = function (b, c) {
            return d("", b, c)
        },
            j = b;
        e && (b[e] || (b[e] = {}), j = b[e]);
        if (!j.define || !j.define.packaged) c.original = j.define, j.define = c, j.define.packaged = !0;
        if (!j.require || !j.require.packaged) d.original = j.require, j.require = f, j.require.packaged = !0
    })("ace")
})();
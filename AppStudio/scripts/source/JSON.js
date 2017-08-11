var JSON;
JSON || (JSON = {});
(function () {
    function b(b) {
        return 10 > b ? "0" + b : b
    }

    function c(b) {
        f.lastIndex = 0;
        return f.test(b) ? '"' + b.replace(f, function (b) {
            var c = j[b];
            return "string" === typeof c ? c : "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + b + '"'
    }

    function d(b, e) {
        var f, j, p, s, r = g,
            o, t = e[b];
        t && "object" === typeof t && "function" === typeof t.toJSON && (t = t.toJSON(b));
        "function" === typeof k && (t = k.call(e, b, t));
        switch (typeof t) {
            case "string":
                return c(t);
            case "number":
                return isFinite(t) ? "" + t : "null";
            case "boolean":
            case "null":
                return "" + t;
            case "object":
                if (!t) return "null";
                g += h;
                o = [];
                if ("[object Array]" === Object.prototype.toString.apply(t)) {
                    s = t.length;
                    for (f = 0; f < s; f += 1) o[f] = d(f, t) || "null";
                    p = 0 === o.length ? "[]" : g ? "[\n" + g + o.join(",\n" + g) + "\n" + r + "]" : "[" + o.join(",") + "]";
                    g = r;
                    return p
                }
                if (k && "object" === typeof k) {
                    s = k.length;
                    for (f = 0; f < s; f += 1) "string" === typeof k[f] && (j = k[f], (p = d(j, t)) && o.push(c(j) + (g ? ": " : ":") + p))
                } else
                    for (j in t) Object.prototype.hasOwnProperty.call(t, j) && (p = d(j, t)) && o.push(c(j) + (g ? ": " : ":") + p);
                p = 0 === o.length ? "{}" : g ? "{\n" + g + o.join(",\n" +
                    g) + "\n" + r + "}" : "{" + o.join(",") + "}";
                g = r;
                return p
        }
    }
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf()
    });
    var e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        f = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        g, h, j = {
            "\u0008": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\u000c": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        k;
    "function" !== typeof JSON.stringify && (JSON.stringify = function (b, c, e) {
        var f;
        h = g = "";
        if ("number" === typeof e)
            for (f = 0; f < e; f += 1) h += " ";
        else "string" === typeof e && (h = e);
        if ((k = c) && "function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length)) throw Error("JSON.stringify");
        return d("", {
            "": b
        })
    });
    "function" !== typeof JSON.parse && (JSON.parse = function (b, c) {
        function d(b, e) {
            var f, j, g = b[e];
            if (g && "object" === typeof g)
                for (f in g) Object.prototype.hasOwnProperty.call(g, f) && (j = d(g, f), void 0 !== j ? g[f] = j : delete g[f]);
            return c.call(b, e, g)
        }
        var f, b = "" + b;
        e.lastIndex = 0;
        e.test(b) && (b = b.replace(e, function (b) {
            return "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return f = eval("(" + b + ")"), "function" === typeof c ? d({
                    "": f
                }, "") : f;
        throw new SyntaxError("JSON.parse");
    })
})();
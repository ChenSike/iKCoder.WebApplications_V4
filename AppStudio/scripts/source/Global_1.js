(function (b, c) {
    function d(b, c, e, f) {
        d._super_.call(this);
        this.reset(b, c, e, f)
    }

    function e(b, c, d, f) {
        e._super_.call(this);
        this.x = b;
        this.y = c;
        this.width = d;
        this.height = f
    }

    function f(b, c) {
        f._super_.call(this);
        this.x = b;
        this.y = c
    }

    function g(b, c, d) {
        g._super_.call(this);
        this.x = b;
        this.y = c;
        this.radius = d;
        this.angle = 0;
        this.center = {
            x: this.x,
            y: this.y
        }
    }

    function h(b, c, d, e, f) {
        h._super_.call(this);
        d - b >= 0 ? (this.x1 = b, this.y1 = c, this.x2 = d, this.y2 = e) : (this.x1 = d, this.y1 = e, this.x2 = b, this.y2 = c);
        this.dx = this.x2 - this.x1;
        this.dy = this.y2 -
            this.y1;
        this.minx = Math.min(this.x1, this.x2);
        this.miny = Math.min(this.y1, this.y2);
        this.maxx = Math.max(this.x1, this.x2);
        this.maxy = Math.max(this.y1, this.y2);
        this.dot = this.x2 * this.y1 - this.x1 * this.y2;
        this.xxyy = this.dx * this.dx + this.dy * this.dy;
        this.gradient = this.getGradient();
        this.length = this.getLength();
        this.direction = x.Util.initValue(f, ">")
    }

    function j() {
        this.vector = new x.Vector2D(0, 0);
        this.random = 0;
        this.crossType = "dead";
        this.alert = true
    }

    function k(b, c) {
        k._super_.call(this, b, c);
        (this.gl = this.element.getContext("experimental-webgl", {
            antialias: true,
            stencil: false,
            depth: false
        })) || alert("Sorry your browser do not suppest WebGL!");
        this.initVar();
        this.setMaxRadius();
        this.initShaders();
        this.initBuffers();
        this.gl.blendEquation(this.gl.FUNC_ADD);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.gl.enable(this.gl.BLEND)
    }

    function l(b, c, d) {
        l._super_.call(this, b, c);
        this.context = this.element.getContext("2d");
        this.rectangle = this.imageData = null;
        this.rectangle = d;
        this.createImageData(d)
    }

    function m(b, c) {
        m._super_.call(this,
            b, c);
        this.stroke = null;
        this.context = this.element.getContext("2d");
        this.bufferCache = {}
    }

    function n(b, c, d) {
        n._super_.call(this, b, c);
        this.stroke = d
    }

    function q(b, c) {
        q._super_.call(this, b, c);
        this.stroke = null
    }

    function p(b, c, d) {
        this.proton = b;
        this.element = c;
        this.stroke = d
    }

    function s(b, c, d) {
        this.element = d;
        this.type = x.Util.initValue(b, "canvas");
        this.proton = c;
        this.renderer = this.getRenderer()
    }

    function r(c, d, e) {
        this.mouseTarget = x.Util.initValue(c, b);
        this.ease = x.Util.initValue(d, 0.7);
        this._allowEmitting = false;
        this.initEventHandler();
        r._super_.call(this, e)
    }

    function o(b) {
        this.selfBehaviours = [];
        o._super_.call(this, b)
    }

    function t(b) {
        this.initializes = [];
        this.particles = [];
        this.behaviours = [];
        this.emitTime = 0;
        this.emitTotalTimes = -1;
        this.damping = 0.006;
        this.bindEmitter = true;
        this.rate = new x.Rate(1, 0.1);
        t._super_.call(this, b);
        this.id = "emitter_" + t.ID++
    }

    function u(b, c, d, e) {
        u._super_.call(this, d, e);
        this.distanceVec = new x.Vector2D;
        this.centerPoint = x.Util.initValue(b, new x.Vector2D);
        this.force = x.Util.initValue(this.normalizeValue(c), 100);
        this.name =
            "GravityWell"
    }

    function w(b, c, d, e) {
        w._super_.call(this, d, e);
        this.reset(b, c);
        this.name = "Color"
    }

    function z(b, c, d, e, f) {
        z._super_.call(this, e, f);
        this.reset(b, c, d);
        this.name = "Rotate"
    }

    function A(b, c, d, e) {
        A._super_.call(this, d, e);
        this.reset(b, c);
        this.name = "Scale"
    }

    function C(b, c, d, e) {
        C._super_.call(this, d, e);
        this.reset(b, c);
        this.name = "Alpha"
    }

    function G(b, c, d, e) {
        G._super_.call(this, d, e);
        this.reset(b, c);
        this.name = "CrossZone"
    }

    function H(b, c, d, e, f) {
        H._super_.call(this, e, f);
        this.reset(b, c, d);
        this.name = "Collision"
    }

    function K(b, c, d) {
        K._super_.call(this, 0, b, c, d);
        this.name = "Gravity"
    }

    function P(b, c, d, e, f) {
        P._super_.call(this, b, c, d, e, f);
        this.force = this.force * -1;
        this.name = "Repulsion"
    }

    function T(b, c, d, e, f) {
        T._super_.call(this, e, f);
        this.reset(b, c, d);
        this.time = 0;
        this.name = "RandomDrift"
    }

    function D(b, c, d, e, f) {
        D._super_.call(this, e, f);
        this.targetPosition = x.Util.initValue(b, new x.Vector2D);
        this.radius = x.Util.initValue(d, 1E3);
        this.force = x.Util.initValue(this.normalizeValue(c), 100);
        this.radiusSq = this.radius * this.radius;
        this.attractionForce =
            new x.Vector2D;
        this.lengthSq = 0;
        this.name = "Attraction"
    }

    function F(b, c, d, e) {
        F._super_.call(this, d, e);
        this.force = this.normalizeForce(new x.Vector2D(b, c));
        this.name = "Force"
    }

    function I(b, c, d) {
        I._super_.call(this);
        this.image = this.setSpanValue(b);
        this.w = x.Util.initValue(c, 20);
        this.h = x.Util.initValue(d, this.w)
    }

    function J(b, c, d) {
        J._super_.call(this);
        this.radius = x.Util.setSpanValue(b, c, d)
    }

    function N(b, c, d) {
        N._super_.call(this);
        this.massPan = x.Util.setSpanValue(b, c, d)
    }

    function U(b, c, d) {
        U._super_.call(this);
        this.rPan =
            x.Util.setSpanValue(b);
        this.thaPan = x.Util.setSpanValue(c);
        this.type = x.Util.initValue(d, "vector")
    }

    function Q(b) {
        Q._super_.call(this);
        this.zone = x.Util.initValue(b, new x.PointZone)
    }

    function B(b, c, d) {
        B._super_.call(this);
        this.lifePan = x.Util.setSpanValue(b, c, d)
    }

    function E() { }

    function Z(b, c) {
        this.numPan = x.Util.initValue(b, 1);
        this.timePan = x.Util.initValue(c, 1);
        this.numPan = x.Util.setSpanValue(this.numPan);
        this.timePan = x.Util.setSpanValue(this.timePan);
        this.nextTime = this.startTime = 0;
        this.init()
    }

    function O(b,
        c) {
        this.id = "Behaviour_" + O.id++;
        this.life = x.Util.initValue(b, Infinity);
        this.easing = x.ease.setEasingByName(c);
        this.age = 0;
        this.energy = 1;
        this.dead = false;
        this.parents = [];
        this.name = "Behaviour"
    }

    function M(b, c, d, e) {
        this.x = b;
        this.y = c;
        this.width = d;
        this.height = e;
        this.bottom = this.y + this.height;
        this.right = this.x + this.width
    }

    function X(b) {
        x.Util.isArray(b) ? this.colorArr = b : this.colorArr = [b]
    }

    function aa(b, c, d) {
        this.isArray = false;
        x.Util.isArray(b) ? (this.isArray = true, this.a = b) : (this.a = x.Util.initValue(b, 1), this.b = x.Util.initValue(c,
            this.a), this.center = x.Util.initValue(d, false))
    }

    function Y(b, c) {
        this.proParticleCount = x.Util.initValue(b, 0);
        this.releaseTime = x.Util.initValue(c, -1);
        this.poolList = [];
        for (var d = this.timeoutID = 0; d < this.proParticleCount; d++) this.add();
        this.releaseTime > 0 && (this.timeoutID = setTimeout(this.release, this.releaseTime / 1E3))
    }

    function ba(b) {
        this.id = "particle_" + ba.ID++;
        this.reset(true);
        x.Util.setPrototypeByObject(this, b)
    }

    function da() {
        this.mats = [];
        for (var b = this.size = 0; b < 20; b++) this.mats.push(x.Mat3.create([0, 0,
            0, 0, 0, 0, 0, 0, 0
        ]))
    }

    function ra() {
        this.initialize()
    }

    function x(b, c) {
        this.proParticleCount = x.Util.initValue(b, x.POOL_MAX);
        this.integrationType = x.Util.initValue(c, x.EULER);
        this.emitters = [];
        this.renderers = [];
        this.oldTime = this.time = 0;
        x.pool = new x.ParticlePool(this.proParticleCount);
        x.integrator = new x.NumericalIntegration(this.integrationType)
    }
    x.POOL_MAX = 1E3;
    x.TIME_STEP = 60;
    x.MEASURE = 100;
    x.EULER = "euler";
    x.RK2 = "runge-kutta2";
    x.RK4 = "runge-kutta4";
    x.VERLET = "verlet";
    x.PARTICLE_CREATED = "partilcleCreated";
    x.PARTICLE_UPDATE =
        "partilcleUpdate";
    x.PARTICLE_SLEEP = "particleSleep";
    x.PARTICLE_DEAD = "partilcleDead";
    x.PROTON_UPDATE = "protonUpdate";
    x.PROTON_UPDATE_AFTER = "protonUpdateAfter";
    x.EMITTER_ADDED = "emitterAdded";
    x.EMITTER_REMOVED = "emitterRemoved";
    x.amendChangeTabsBug = true;
    x.TextureBuffer = {};
    x.TextureCanvasBuffer = {};
    x.prototype = {
        addRender: function (b) {
            b.proton = this;
            this.renderers.push(b.proton)
        },
        addEmitter: function (b) {
            this.emitters.push(b);
            b.parent = this;
            this.dispatchEvent(new x.Event({
                type: x.EMITTER_ADDED,
                emitter: b
            }))
        },
        removeEmitter: function (b) {
            this.emitters.splice(this.emitters.indexOf(b),
                1);
            b.parent = null;
            this.dispatchEvent(new x.Event({
                type: x.EMITTER_REMOVED,
                emitter: b
            }))
        },
        update: function () {
            this.dispatchEvent(new x.Event({
                type: x.PROTON_UPDATE
            }));
            this.oldTime || (this.oldTime = (new Date).getTime());
            var b = (new Date).getTime();
            this.elapsed = (b - this.oldTime) / 1E3;
            x.amendChangeTabsBug && this.amendChangeTabsBug();
            this.oldTime = b;
            if (this.elapsed > 0)
                for (b = 0; b < this.emitters.length; b++) this.emitters[b].update(this.elapsed);
            this.dispatchEvent(new x.Event({
                type: x.PROTON_UPDATE_AFTER
            }))
        },
        amendChangeTabsBug: function () {
            this.elapsed >
                0.5 && (this.oldTime = (new Date).getTime(), this.elapsed = 0)
        },
        getCount: function () {
            for (var b = 0, c = this.emitters.length, d = 0; d < c; d++) b = b + this.emitters[d].particles.length;
            return b
        },
        destory: function () {
            for (var b = this.emitters.length, c = 0; c < b; c++) {
                this.emitters[c].destory();
                delete this.emitters[c]
            }
            this.emitters = [];
            this.oldTime = this.time = 0;
            x.pool.release()
        }
    };
    b.Proton = x;
    var ja = ra.prototype;
    ra.initialize = function (b) {
        b.addEventListener = ja.addEventListener;
        b.removeEventListener = ja.removeEventListener;
        b.removeAllEventListeners =
            ja.removeAllEventListeners;
        b.hasEventListener = ja.hasEventListener;
        b.dispatchEvent = ja.dispatchEvent
    };
    ja._listeners = null;
    ja.initialize = function () { };
    ja.addEventListener = function (b, c) {
        var d = this._listeners;
        d ? this.removeEventListener(b, c) : d = this._listeners = {};
        var e = d[b];
        e || (e = d[b] = []);
        e.push(c);
        return c
    };
    ja.removeEventListener = function (b, c) {
        var d = this._listeners;
        if (d) {
            var e = d[b];
            if (e)
                for (var f = 0, g = e.length; f < g; f++)
                    if (e[f] == c) {
                        g == 1 ? delete d[b] : e.splice(f, 1);
                        break
                    }
        }
    };
    ja.removeAllEventListeners = function (b) {
        b ?
            this._listeners && delete this._listeners[b] : this._listeners = null
    };
    ja.dispatchEvent = function (b) {
        var c = false,
            d = this._listeners;
        if (b && d) {
            d = d[b.type];
            if (!d) return c;
            for (var d = d.slice(), e = 0, f = d.length; e < f; e++) var g = d[e],
                c = c || g(b)
        }
        return !!c
    };
    ja.hasEventListener = function (b) {
        var c = this._listeners;
        return !!c && !!c[b]
    };
    x.EventDispatcher = ra;
    x.EventDispatcher.initialize(x.prototype);
    x.Event = function (b) {
        this.type = b.type;
        this.particle = b.particle;
        this.emitter = b.emitter
    };
    var ka = ka || {
        initValue: function (b, d) {
            return b =
                b != null && b != c ? b : d
        },
        isArray: function (b) {
            return typeof b == "object" && b.hasOwnProperty("length")
        },
        destroyArray: function (b) {
            b.length = 0
        },
        destroyObject: function (b) {
            for (var c in b) delete b[c]
        },
        getVector2D: function (b, c) {
            return typeof b == "object" ? b : new x.Vector2D(b, c)
        },
        judgeVector2D: function (b) {
            var c = "";
            if (b.hasOwnProperty("x") || b.hasOwnProperty("y") || b.hasOwnProperty("p") || b.hasOwnProperty("position")) c = c + "p";
            if (b.hasOwnProperty("vx") || b.hasOwnProperty("vx") || b.hasOwnProperty("v") || b.hasOwnProperty("velocity")) c =
                c + "v";
            if (b.hasOwnProperty("ax") || b.hasOwnProperty("ax") || b.hasOwnProperty("a") || b.hasOwnProperty("accelerate")) c = c + "a";
            return c
        },
        setVector2DByObject: function (b, c) {
            c.hasOwnProperty("x") && (b.p.x = c.x);
            c.hasOwnProperty("y") && (b.p.y = c.y);
            c.hasOwnProperty("vx") && (b.v.x = c.vx);
            c.hasOwnProperty("vy") && (b.v.y = c.vy);
            c.hasOwnProperty("ax") && (b.a.x = c.ax);
            c.hasOwnProperty("ay") && (b.a.y = c.ay);
            c.hasOwnProperty("p") && particle.p.copy(c.p);
            c.hasOwnProperty("v") && particle.v.copy(c.v);
            c.hasOwnProperty("a") && particle.a.copy(c.a);
            c.hasOwnProperty("position") && particle.p.copy(c.position);
            c.hasOwnProperty("velocity") && particle.v.copy(c.velocity);
            c.hasOwnProperty("accelerate") && particle.a.copy(c.accelerate)
        },
        addPrototypeByObject: function (b, c, d) {
            for (var e in c) d ? d.indexOf(e) < 0 && (b[e] = x.Util.getSpanValue(c[e])) : b[e] = x.Util.getSpanValue(c[e]);
            return b
        },
        setPrototypeByObject: function (b, c, d) {
            for (var e in c) b.hasOwnProperty(e) && (d ? d.indexOf(e) < 0 && (b[e] = x.Util.getSpanValue(c[e])) : b[e] = x.Util.getSpanValue(c[e]));
            return b
        },
        setSpanValue: function (b,
            c, d) {
            return b instanceof x.Span ? b : c ? d ? new x.Span(b, c, d) : new x.Span(b, c) : new x.Span(b)
        },
        getSpanValue: function (b) {
            return b instanceof x.Span ? b.getValue() : b
        },
        inherits: function (b, c) {
            b._super_ = c;
            if (Object.create) b.prototype = Object.create(c.prototype, {
                constructor: {
                    value: c
                }
            });
            else {
                var d = function () { };
                d.prototype = c.prototype;
                b.prototype = new d;
                b.prototype.constructor = b
            }
        },
        getImageData: function (b, c, d) {
            b.drawImage(c, d.x, d.y);
            c = b.getImageData(d.x, d.y, d.width, d.height);
            b.clearRect(d.x, d.y, d.width, d.height);
            return c
        },
        getImage: function (b, c, d, e) {
            typeof b == "string" ? this.loadAndSetImage(b, c, d, e) : typeof b == "object" ? this.loadAndSetImage(b.src, c, d, e) : b instanceof Image && this.loadedImage(b.src, c, d, e, b)
        },
        loadedImage: function (b, c, d, e, f) {
            c.target = f;
            c.transform.src = b;
            x.TextureBuffer[b] || (x.TextureBuffer[b] = c.target);
            if (d)
                if (x.TextureCanvasBuffer[b]) c.transform.canvas = x.TextureCanvasBuffer[b];
                else {
                    d = x.WebGLUtil.nhpot(c.target.width);
                    f = x.WebGLUtil.nhpot(c.target.height);
                    c.transform.canvas = x.DomUtil.createCanvas("canvas" + b,
                        d, f);
                    c.transform.canvas.getContext("2d").drawImage(c.target, 0, 0, c.target.width, c.target.height);
                    x.TextureCanvasBuffer[b] = c.transform.canvas
                }
            e && e(c)
        },
        loadAndSetImage: function (b, c, d, e) {
            if (x.TextureBuffer[b]) this.loadedImage(b, c, d, e, x.TextureBuffer[b]);
            else {
                var f = this,
                    g = new Image;
                g.onload = function (g) {
                    f.loadedImage(b, c, d, e, g.target)
                };
                g.src = b
            }
        },
        hexToRGB: function (b) {
            var c = b.charAt(0) == "#" ? b.substring(1, 7) : b,
                b = parseInt(c.substring(0, 2), 16),
                d = parseInt(c.substring(2, 4), 16),
                c = parseInt(c.substring(4, 6), 16);
            return {
                r: b,
                g: d,
                b: c
            }
        },
        rgbToHex: function (b) {
            return "rgb(" + b.r + ", " + b.g + ", " + b.b + ")"
        }
    };
    x.Util = ka;
    var oa = oa || {
        ipot: function (b) {
            return (b & b - 1) == 0
        },
        nhpot: function (b) {
            --b;
            for (var c = 1; c < 32; c = c << 1) b = b | b >> c;
            return b + 1
        },
        makeTranslation: function (b, c) {
            return [1, 0, 0, 0, 1, 0, b, c, 1]
        },
        makeRotation: function (b) {
            var c = Math.cos(b),
                b = Math.sin(b);
            return [c, -b, 0, b, c, 0, 0, 0, 1]
        },
        makeScale: function (b, c) {
            return [b, 0, 0, 0, c, 0, 0, 0, 1]
        },
        matrixMultiply: function (b, c) {
            var d = b[0],
                e = b[1],
                f = b[2],
                g = b[3],
                h = b[4],
                j = b[5],
                k = b[6],
                l = b[7],
                m = b[8],
                n = c[0],
                o = c[1],
                p = c[2],
                q = c[3],
                s = c[4],
                r = c[5],
                t = c[6],
                u = c[7],
                w = c[8];
            return [d * n + e * q + f * t, d * o + e * s + f * u, d * p + e * r + f * w, g * n + h * q + j * t, g * o + h * s + j * u, g * p + h * r + j * w, k * n + l * q + m * t, k * o + l * s + m * u, k * p + l * r + m * w]
        }
    };
    x.WebGLUtil = oa;
    var pa = pa || {
        createCanvas: function (b, c, d, e) {
            var f = document.createElement("canvas");
            f.id = b;
            f.width = c;
            f.height = d;
            f.style.position = e ? e : "absolute";
            f.style.opacity = 0;
            this.transformDom(f, -500, -500, 0, 0);
            return f
        },
        transformDom: function (b, c, d, e, f) {
            b.style.WebkitTransform = "translate(" + c + "px, " + d + "px) scale(" + e + ") rotate(" +
                f + "deg)";
            b.style.MozTransform = "translate(" + c + "px, " + d + "px) scale(" + e + ") rotate(" + f + "deg)";
            b.style.OTransform = "translate(" + c + "px, " + d + "px) scale(" + e + ") rotate(" + f + "deg)";
            b.style.msTransform = "translate(" + c + "px, " + d + "px) scale(" + e + ") rotate(" + f + "deg)";
            b.style.transform = "translate(" + c + "px, " + d + "px) scale(" + e + ") rotate(" + f + "deg)"
        }
    };
    x.DomUtil = pa;
    da.prototype.set = function (b, c) {
        c == 0 ? x.Mat3.set(b, this.mats[0]) : x.Mat3.multiply(this.mats[c - 1], b, this.mats[c]);
        this.size = Math.max(this.size, c + 1)
    };
    da.prototype.push =
        function (b) {
            this.size == 0 ? x.Mat3.set(b, this.mats[0]) : x.Mat3.multiply(this.mats[this.size - 1], b, this.mats[this.size]);
            this.size++
        };
    da.prototype.pop = function () {
        this.size > 0 && this.size--
    };
    da.prototype.top = function () {
        return this.mats[this.size - 1]
    };
    x.MStack = da;
    ba.ID = 0;
    ba.prototype = {
        getDirection: function () {
            return Math.atan2(this.v.x, -this.v.y) * (180 / Math.PI)
        },
        reset: function (b) {
            this.life = Infinity;
            this.age = 0;
            this.energy = 1;
            this.sleep = this.dead = false;
            this.parent = this.sprite = this.target = null;
            this.mass = 1;
            this.radius =
                10;
            this.scale = this.alpha = 1;
            this.rotation = 0;
            this.color = null;
            this.easing = x.ease.setEasingByName(x.easeLinear);
            b ? (this.transform = {}, this.p = new x.Vector2D, this.v = new x.Vector2D, this.a = new x.Vector2D, this.old = {
                p: new x.Vector2D,
                v: new x.Vector2D,
                a: new x.Vector2D
            }, this.behaviours = []) : (x.Util.destroyObject(this.transform), this.p.set(0, 0), this.v.set(0, 0), this.a.set(0, 0), this.old.p.set(0, 0), this.old.v.set(0, 0), this.old.a.set(0, 0), this.removeAllBehaviours());
            this.transform.rgb = {
                r: 255,
                g: 255,
                b: 255
            };
            return this
        },
        update: function (b, c) {
            if (!this.sleep) {
                this.age = this.age + b;
                var d = this.behaviours.length,
                    e;
                for (e = 0; e < d; e++) this.behaviours[e] && this.behaviours[e].applyBehaviour(this, b, c)
            }
            if (this.age >= this.life) this.destory();
            else {
                d = this.easing(this.age / this.life);
                this.energy = Math.max(1 - d, 0)
            }
        },
        addBehaviour: function (b) {
            this.behaviours.push(b);
            b.hasOwnProperty("parents") && b.parents.push(this);
            b.initialize(this)
        },
        addBehaviours: function (b) {
            var c = b.length,
                d;
            for (d = 0; d < c; d++) this.addBehaviour(b[d])
        },
        removeBehaviour: function (b) {
            b =
                this.behaviours.indexOf(b);
            if (b > -1) {
                b = this.behaviours.splice(b, 1);
                b.parents = null
            }
        },
        removeAllBehaviours: function () {
            x.Util.destroyArray(this.behaviours)
        },
        destory: function () {
            this.removeAllBehaviours();
            this.energy = 0;
            this.dead = true;
            this.parent = null
        }
    };
    x.Particle = ba;
    Y.prototype = {
        create: function (b) {
            return b ? new newTypeParticle : new x.Particle
        },
        getCount: function () {
            return this.poolList.length
        },
        add: function () {
            return this.poolList.push(this.create())
        },
        get: function () {
            return this.poolList.length === 0 ? this.create() :
                this.poolList.pop().reset()
        },
        set: function (b) {
            if (this.poolList.length < x.POOL_MAX) return this.poolList.push(b)
        },
        release: function () {
            for (var b = 0; b < this.poolList.length; b++) {
                this.poolList[b].destory && this.poolList[b].destory();
                delete this.poolList[b]
            }
            this.poolList = []
        }
    };
    x.ParticlePool = Y;
    var V = {
        randomAToB: function (b, c, d) {
            return d ? Math.floor(Math.random() * (c - b)) + b : b + Math.random() * (c - b)
        },
        randomFloating: function (b, c, d) {
            return V.randomAToB(b - c, b + c, d)
        },
        randomZone: function () { },
        degreeTransform: function (b) {
            return b *
                Math.PI / 180
        },
        toColor16: function (b) {
            return "#" + b.toString(16)
        },
        randomColor: function () {
            return "#" + ("00000" + (Math.random() * 16777216 << 0).toString(16)).slice(-6)
        }
    };
    x.MathUtils = V;
    ka = function (b) {
        this.type = x.Util.initValue(b, x.EULER)
    };
    ka.prototype = {
        integrate: function (b, c, d) {
            this.eulerIntegrate(b, c, d)
        },
        eulerIntegrate: function (b, c, d) {
            b.sleep || (b.old.p.copy(b.p), b.old.v.copy(b.v), b.a.multiplyScalar(1 / b.mass), b.v.add(b.a.multiplyScalar(c)), b.p.add(b.old.v.multiplyScalar(c)), d && b.v.multiplyScalar(d), b.a.clear())
        }
    };
    x.NumericalIntegration = ka;
    ka = function (b, c) {
        this.x = b || 0;
        this.y = c || 0
    };
    ka.prototype = {
        set: function (b, c) {
            this.x = b;
            this.y = c;
            return this
        },
        setX: function (b) {
            this.x = b;
            return this
        },
        setY: function (b) {
            this.y = b;
            return this
        },
        setComponent: function (b, c) {
            switch (b) {
                case 0:
                    this.x = c;
                    break;
                case 1:
                    this.y = c;
                    break;
                default:
                    throw Error("index is out of range: " + b);
            }
        },
        getGradient: function () {
            if (this.x != 0) return Math.atan2(this.y, this.x);
            if (this.y > 0) return Math.PI / 2;
            if (this.y < 0) return -Math.PI / 2
        },
        getComponent: function (b) {
            switch (b) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw Error("index is out of range: " + b);
            }
        },
        copy: function (b) {
            this.x = b.x;
            this.y = b.y;
            return this
        },
        add: function (b, d) {
            if (d !== c) return this.addVectors(b, d);
            this.x = this.x + b.x;
            this.y = this.y + b.y;
            return this
        },
        addXY: function (b, c) {
            this.x = this.x + b;
            this.y = this.y + c;
            return this
        },
        addVectors: function (b, c) {
            this.x = b.x + c.x;
            this.y = b.y + c.y;
            return this
        },
        addScalar: function (b) {
            this.x = this.x + b;
            this.y = this.y + b;
            return this
        },
        sub: function (b, d) {
            if (d !== c) return this.subVectors(b, d);
            this.x = this.x - b.x;
            this.y = this.y - b.y;
            return this
        },
        subVectors: function (b, c) {
            this.x = b.x - c.x;
            this.y = b.y - c.y;
            return this
        },
        multiplyScalar: function (b) {
            this.x = this.x * b;
            this.y = this.y * b;
            return this
        },
        divideScalar: function (b) {
            b !== 0 ? (this.x = this.x / b, this.y = this.y / b) : this.set(0, 0);
            return this
        },
        min: function (b) {
            this.x > b.x && (this.x = b.x);
            this.y > b.y && (this.y = b.y);
            return this
        },
        max: function (b) {
            this.x < b.x && (this.x = b.x);
            this.y < b.y && (this.y = b.y);
            return this
        },
        clamp: function (b, c) {
            this.x < b.x ? this.x = b.x : this.x > c.x && (this.x = c.x);
            this.y < b.y ? this.y =
                b.y : this.y > c.y && (this.y = c.y);
            return this
        },
        negate: function () {
            return this.multiplyScalar(-1)
        },
        dot: function (b) {
            return this.x * b.x + this.y * b.y
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        normalize: function () {
            return this.divideScalar(this.length())
        },
        distanceTo: function (b) {
            return Math.sqrt(this.distanceToSquared(b))
        },
        rotate: function (b) {
            var c = this.x,
                d = this.y;
            this.x = c * Math.cos(b) + d * Math.sin(b);
            this.y = -c * Math.sin(b) + d * Math.cos(b);
            return this
        },
        distanceToSquared: function (b) {
            var c = this.x - b.x,
                b = this.y - b.y;
            return c * c + b * b
        },
        setLength: function (b) {
            var c = this.length();
            c !== 0 && b !== c && this.multiplyScalar(b / c);
            return this
        },
        lerp: function (b, c) {
            this.x = this.x + (b.x - this.x) * c;
            this.y = this.y + (b.y - this.y) * c;
            return this
        },
        equals: function (b) {
            return b.x === this.x && b.y === this.y
        },
        toArray: function () {
            return [this.x, this.y]
        },
        clear: function () {
            this.y = this.x = 0;
            return this
        },
        clone: function () {
            return new x.Vector2D(this.x, this.y)
        }
    };
    x.Vector2D = ka;
    ka = function (b, c) {
        this.r =
            Math.abs(b) || 0;
        this.tha = c || 0
    };
    ka.prototype = {
        set: function (b, c) {
            this.r = b;
            this.tha = c;
            return this
        },
        setR: function (b) {
            this.r = b;
            return this
        },
        setTha: function (b) {
            this.tha = b;
            return this
        },
        copy: function (b) {
            this.r = b.r;
            this.tha = b.tha;
            return this
        },
        toVector: function () {
            return new x.Vector2D(this.getX(), this.getY())
        },
        getX: function () {
            return this.r * Math.sin(this.tha)
        },
        getY: function () {
            return -this.r * Math.cos(this.tha)
        },
        normalize: function () {
            this.r = 1;
            return this
        },
        equals: function (b) {
            return b.r === this.r && b.tha === this.tha
        },
        toArray: function () {
            return [this.r, this.tha]
        },
        clear: function () {
            this.tha = this.r = 0;
            return this
        },
        clone: function () {
            return new x.Polar2D(this.r, this.tha)
        }
    };
    x.Polar2D = ka;
    aa.prototype = {
        getValue: function (b) {
            return this.isArray ? this.a[Math.floor(this.a.length * Math.random())] : this.center ? x.MathUtils.randomFloating(this.a, this.b, b) : x.MathUtils.randomAToB(this.a, this.b, b)
        }
    };
    x.Span = aa;
    x.getSpan = function (b, c, d) {
        return new x.Span(b, c, d)
    };
    x.Util.inherits(X, x.Span);
    X.prototype.getValue = function () {
        var b = this.colorArr[Math.floor(this.colorArr.length *
            Math.random())];
        return b == "random" || b == "Random" ? x.MathUtils.randomColor() : b
    };
    x.ColorSpan = X;
    M.prototype = {
        contains: function (b, c) {
            return b <= this.right && b >= this.x && c <= this.bottom && c >= this.y ? true : false
        }
    };
    x.Rectangle = M;
    var va = va || {
        create: function (b) {
            var c = new Float32Array(9);
            b && this.set(b, c);
            return c
        },
        set: function (b, c) {
            for (var d = 0; d < 9; d++) c[d] = b[d];
            return c
        },
        multiply: function (b, c, d) {
            var e = b[0],
                f = b[1],
                g = b[2],
                h = b[3],
                j = b[4],
                k = b[6],
                b = b[7],
                l = c[0],
                m = c[1],
                n = c[2],
                o = c[3],
                p = c[4],
                q = c[6],
                c = c[7];
            d[0] = l * e + m * h;
            d[1] = l *
                f + m * j;
            d[2] = g * n;
            d[3] = o * e + p * h;
            d[4] = o * f + p * j;
            d[6] = q * e + c * h + k;
            d[7] = q * f + c * j + b;
            return d
        },
        inverse: function (b, c) {
            var d = b[0],
                e = b[1],
                f = b[3],
                g = b[4],
                h = b[6],
                j = b[7],
                k = -f,
                l;
            l = 1 / (d * g + e * k);
            c[0] = g * l;
            c[1] = -e * l;
            c[3] = k * l;
            c[4] = d * l;
            c[6] = (j * f - g * h) * l;
            c[7] = (-j * d + e * h) * l;
            return c
        },
        multiplyVec2: function (b, c, d) {
            var e = c[0],
                c = c[1];
            d[0] = e * b[0] + c * b[3] + b[6];
            d[1] = e * b[1] + c * b[4] + b[7];
            return d
        }
    };
    x.Mat3 = va;
    O.id = 0;
    O.prototype = {
        reset: function (b, c) {
            this.life = x.Util.initValue(b, Infinity);
            this.easing = x.Util.initValue(c, x.ease.setEasingByName(x.easeLinear))
        },
        normalizeForce: function (b) {
            return b.multiplyScalar(x.MEASURE)
        },
        normalizeValue: function (b) {
            return b * x.MEASURE
        },
        initialize: function () { },
        applyBehaviour: function (b, c) {
            this.age = this.age + c;
            if (this.age >= this.life || this.dead) {
                this.energy = 0;
                this.dead = true;
                this.destory()
            } else {
                var d = this.easing(b.age / b.life);
                this.energy = Math.max(1 - d, 0)
            }
        },
        destory: function () {
            var b = this.parents.length,
                c;
            for (c = 0; c < b; c++) this.parents[c].removeBehaviour(this);
            this.parents = []
        }
    };
    x.Behaviour = O;
    Z.prototype = {
        init: function () {
            this.startTime =
                0;
            this.nextTime = this.timePan.getValue()
        },
        getValue: function (b) {
            this.startTime = this.startTime + b;
            if (this.startTime >= this.nextTime) {
                this.startTime = 0;
                this.nextTime = this.timePan.getValue();
                return this.numPan.b == 1 ? this.numPan.getValue(false) > 0.5 ? 1 : 0 : this.numPan.getValue(true)
            }
            return 0
        }
    };
    x.Rate = Z;
    E.prototype.reset = function () { };
    E.prototype.init = function (b, c) {
        c ? this.initialize(c) : this.initialize(b)
    };
    E.prototype.initialize = function () { };
    x.Initialize = E;
    x.InitializeUtil = {
        initialize: function (b, c, d) {
            var e = d.length,
                f;
            for (f = 0; f < e; f++) d[f] instanceof x.Initialize ? d[f].init(b, c) : x.InitializeUtil.init(b, c, d[f]);
            x.InitializeUtil.bindEmitter(b, c)
        },
        init: function (b, c, d) {
            x.Util.setPrototypeByObject(c, d);
            x.Util.setVector2DByObject(c, d)
        },
        bindEmitter: function (b, c) {
            b.bindEmitter && (c.p.add(b.p), c.v.add(b.v), c.a.add(b.a), c.v.rotate(x.MathUtils.degreeTransform(b.rotation)))
        }
    };
    x.Util.inherits(B, x.Initialize);
    B.prototype.initialize = function (b) {
        this.lifePan.a == Infinity ? b.life = Infinity : b.life = this.lifePan.getValue()
    };
    x.Life = B;
    x.Util.inherits(Q,
        x.Initialize);
    Q.prototype.reset = function (b) {
        this.zone = x.Util.initValue(b, new x.PointZone)
    };
    Q.prototype.initialize = function (b) {
        this.zone.getPosition();
        b.p.x = this.zone.vector.x;
        b.p.y = this.zone.vector.y
    };
    x.Position = Q;
    x.P = Q;
    x.Util.inherits(U, x.Initialize);
    U.prototype.reset = function (b, c, d) {
        this.rPan = x.Util.setSpanValue(b);
        this.thaPan = x.Util.setSpanValue(c);
        this.type = x.Util.initValue(d, "vector")
    };
    U.prototype.normalizeVelocity = function (b) {
        return b * x.MEASURE
    };
    U.prototype.initialize = function (b) {
        if (this.type ==
            "p" || this.type == "P" || this.type == "polar") {
            var c = new x.Polar2D(this.normalizeVelocity(this.rPan.getValue()), this.thaPan.getValue() * Math.PI / 180);
            b.v.x = c.getX();
            b.v.y = c.getY()
        } else {
            b.v.x = this.normalizeVelocity(this.rPan.getValue());
            b.v.y = this.normalizeVelocity(this.thaPan.getValue())
        }
    };
    x.Velocity = U;
    x.V = U;
    x.Util.inherits(N, x.Initialize);
    N.prototype.initialize = function (b) {
        b.mass = this.massPan.getValue()
    };
    x.Mass = N;
    x.Util.inherits(J, x.Initialize);
    J.prototype.reset = function (b, c, d) {
        this.radius = x.Util.setSpanValue(b,
            c, d)
    };
    J.prototype.initialize = function (b) {
        b.radius = this.radius.getValue();
        b.transform.oldRadius = b.radius
    };
    x.Radius = J;
    x.Util.inherits(I, x.Initialize);
    I.prototype.initialize = function (b) {
        var c = this.image.getValue();
        typeof c == "string" ? b.target = {
            width: this.w,
            height: this.h,
            src: c
        } : b.target = c
    };
    I.prototype.setSpanValue = function (b) {
        return b instanceof x.ColorSpan ? b : new x.ColorSpan(b)
    };
    x.ImageTarget = I;
    x.Util.inherits(F, x.Behaviour);
    F.prototype.reset = function (b, c, d, e) {
        this.force = this.normalizeForce(new x.Vector2D(b,
            c));
        d && F._super_.prototype.reset.call(this, d, e)
    };
    F.prototype.applyBehaviour = function (b, c, d) {
        F._super_.prototype.applyBehaviour.call(this, b, c, d);
        b.a.add(this.force)
    };
    x.Force = F;
    x.F = F;
    x.Util.inherits(D, x.Behaviour);
    D.prototype.reset = function (b, c, d, e, f) {
        this.targetPosition = x.Util.initValue(b, new x.Vector2D);
        this.radius = x.Util.initValue(d, 1E3);
        this.force = x.Util.initValue(this.normalizeValue(c), 100);
        this.radiusSq = this.radius * this.radius;
        this.attractionForce = new x.Vector2D;
        this.lengthSq = 0;
        e && D._super_.prototype.reset.call(this,
            e, f)
    };
    D.prototype.applyBehaviour = function (b, c, d) {
        D._super_.prototype.applyBehaviour.call(this, b, c, d);
        this.attractionForce.copy(this.targetPosition);
        this.attractionForce.sub(b.p);
        this.lengthSq = this.attractionForce.lengthSq();
        this.lengthSq > 4.0E-6 && this.lengthSq < this.radiusSq && (this.attractionForce.normalize(), this.attractionForce.multiplyScalar(1 - this.lengthSq / this.radiusSq), this.attractionForce.multiplyScalar(this.force), b.a.add(this.attractionForce))
    };
    x.Attraction = D;
    x.Util.inherits(T, x.Behaviour);
    T.prototype.reset = function (b, c, d, e, f) {
        this.panFoce = new x.Vector2D(b, c);
        this.panFoce = this.normalizeForce(this.panFoce);
        this.delay = d;
        e && T._super_.prototype.reset.call(this, e, f)
    };
    T.prototype.applyBehaviour = function (b, c, d) {
        T._super_.prototype.applyBehaviour.call(this, b, c, d);
        this.time = this.time + c;
        this.time >= this.delay && (b.a.addXY(x.MathUtils.randomAToB(-this.panFoce.x, this.panFoce.x), x.MathUtils.randomAToB(-this.panFoce.y, this.panFoce.y)), this.time = 0)
    };
    x.RandomDrift = T;
    x.Util.inherits(P, x.Attraction);
    P.prototype.reset =
        function (b, c, d, e, f) {
            P._super_.prototype.reset.call(this, b, c, d, e, f);
            this.force = this.force * -1
        };
    x.Repulsion = P;
    x.Util.inherits(K, x.Force);
    K.prototype.reset = function (b, c, d) {
        K._super_.prototype.reset.call(this, 0, b, c, d)
    };
    x.Gravity = K;
    x.G = K;
    x.Util.inherits(H, x.Behaviour);
    H.prototype.reset = function (b, c, d, e, f) {
        this.emitter = x.Util.initValue(b, null);
        this.mass = x.Util.initValue(c, true);
        this.callback = x.Util.initValue(d, null);
        this.collisionPool = [];
        this.delta = new x.Vector2D;
        e && H._super_.prototype.reset.call(this, e,
            f)
    };
    H.prototype.applyBehaviour = function (b, c, d) {
        for (var c = this.emitter ? this.emitter.particles.slice(d) : this.pool.slice(d), e, f, g, h, j = c.length, k = 0; k < j; k++) {
            d = c[k];
            d !== b && (this.delta.copy(d.p), this.delta.sub(b.p), e = this.delta.lengthSq(), distance = b.radius + d.radius, e <= distance * distance && (f = distance - Math.sqrt(e), f = f + 0.5, totalMass = b.mass + d.mass, g = this.mass ? d.mass / totalMass : 0.5, h = this.mass ? b.mass / totalMass : 0.5, b.p.add(this.delta.clone().normalize().multiplyScalar(f * -g)), d.p.add(this.delta.normalize().multiplyScalar(f *
                h)), this.callback && this.callback(b, d)))
        }
    };
    x.Collision = H;
    x.Util.inherits(G, x.Behaviour);
    G.prototype.reset = function (b, c, d, e) {
        this.zone = b;
        this.zone.crossType = x.Util.initValue(c, "dead");
        d && G._super_.prototype.reset.call(this, d, e)
    };
    G.prototype.applyBehaviour = function (b, c, d) {
        G._super_.prototype.applyBehaviour.call(this, b, c, d);
        this.zone.crossing(b)
    };
    x.CrossZone = G;
    x.Util.inherits(C, x.Behaviour);
    C.prototype.reset = function (b, d, e, f) {
        d == null || d == c ? this.same = true : this.same = false;
        this.a = x.Util.setSpanValue(x.Util.initValue(b,
            1));
        this.b = x.Util.setSpanValue(d);
        e && C._super_.prototype.reset.call(this, e, f)
    };
    C.prototype.initialize = function (b) {
        b.transform.alphaA = this.a.getValue();
        this.same ? b.transform.alphaB = b.transform.alphaA : b.transform.alphaB = this.b.getValue()
    };
    C.prototype.applyBehaviour = function (b, c, d) {
        C._super_.prototype.applyBehaviour.call(this, b, c, d);
        b.alpha = b.transform.alphaB + (b.transform.alphaA - b.transform.alphaB) * this.energy;
        b.alpha < 0.001 && (b.alpha = 0)
    };
    x.Alpha = C;
    x.Util.inherits(A, x.Behaviour);
    A.prototype.reset = function (b,
        d, e, f) {
        d == null || d == c ? this.same = true : this.same = false;
        this.a = x.Util.setSpanValue(x.Util.initValue(b, 1));
        this.b = x.Util.setSpanValue(d);
        e && A._super_.prototype.reset.call(this, e, f)
    };
    A.prototype.initialize = function (b) {
        b.transform.scaleA = this.a.getValue();
        b.transform.oldRadius = b.radius;
        this.same ? b.transform.scaleB = b.transform.scaleA : b.transform.scaleB = this.b.getValue()
    };
    A.prototype.applyBehaviour = function (b, c, d) {
        A._super_.prototype.applyBehaviour.call(this, b, c, d);
        b.scale = b.transform.scaleB + (b.transform.scaleA -
            b.transform.scaleB) * this.energy;
        b.scale < 1.0E-4 && (b.scale = 0);
        b.radius = b.transform.oldRadius * b.scale
    };
    x.Scale = A;
    x.Util.inherits(z, x.Behaviour);
    z.prototype.reset = function (b, d, e, f, g) {
        d == null || d == c ? this.same = true : this.same = false;
        this.a = x.Util.setSpanValue(x.Util.initValue(b, "Velocity"));
        this.b = x.Util.setSpanValue(x.Util.initValue(d, 0));
        this.style = x.Util.initValue(e, "to");
        f && z._super_.prototype.reset.call(this, f, g)
    };
    z.prototype.initialize = function (b) {
        b.rotation = this.a.getValue();
        b.transform.rotationA = this.a.getValue();
        this.same || (b.transform.rotationB = this.b.getValue())
    };
    z.prototype.applyBehaviour = function (b, c, d) {
        z._super_.prototype.applyBehaviour.call(this, b, c, d);
        if (this.same) {
            if (this.a.a == "V" || this.a.a == "Velocity" || this.a.a == "v") b.rotation = b.getDirection()
        } else this.style == "to" || this.style == "TO" || this.style == "_" ? b.rotation = b.rotation + (b.transform.rotationB + (b.transform.rotationA - b.transform.rotationB) * this.energy) : b.rotation = b.rotation + b.transform.rotationB
    };
    x.Rotate = z;
    x.Util.inherits(w, x.Behaviour);
    w.prototype.reset =
        function (b, c, d, e) {
            this.color1 = this.setSpanValue(b);
            this.color2 = this.setSpanValue(c);
            d && w._super_.prototype.reset.call(this, d, e)
        };
    w.prototype.initialize = function (b) {
        b.color = this.color1.getValue();
        b.transform.beginRGB = x.Util.hexToRGB(b.color);
        this.color2 && (b.transform.endRGB = x.Util.hexToRGB(this.color2.getValue()))
    };
    w.prototype.applyBehaviour = function (b, c, d) {
        this.color2 ? (w._super_.prototype.applyBehaviour.call(this, b, c, d), b.transform.rgb.r = b.transform.endRGB.r + (b.transform.beginRGB.r - b.transform.endRGB.r) *
            this.energy, b.transform.rgb.g = b.transform.endRGB.g + (b.transform.beginRGB.g - b.transform.endRGB.g) * this.energy, b.transform.rgb.b = b.transform.endRGB.b + (b.transform.beginRGB.b - b.transform.endRGB.b) * this.energy, b.transform.rgb.r = parseInt(b.transform.rgb.r, 10), b.transform.rgb.g = parseInt(b.transform.rgb.g, 10), b.transform.rgb.b = parseInt(b.transform.rgb.b, 10)) : (b.transform.rgb.r = b.transform.beginRGB.r, b.transform.rgb.g = b.transform.beginRGB.g, b.transform.rgb.b = b.transform.beginRGB.b)
    };
    w.prototype.setSpanValue =
        function (b) {
            return b ? b instanceof x.ColorSpan ? b : new x.ColorSpan(b) : null
        };
    x.Color = w;
    x.Util.inherits(u, x.Behaviour);
    u.prototype.reset = function (b, c, d, e) {
        this.distanceVec = new x.Vector2D;
        this.centerPoint = x.Util.initValue(b, new x.Vector2D);
        this.force = x.Util.initValue(this.normalizeValue(c), 100);
        d && u._super_.prototype.reset.call(this, d, e)
    };
    u.prototype.initialize = function () { };
    u.prototype.applyBehaviour = function (b, c) {
        this.distanceVec.set(this.centerPoint.x - b.p.x, this.centerPoint.y - b.p.y);
        var d = this.distanceVec.lengthSq();
        if (d != 0) {
            var e = this.distanceVec.length(),
                d = this.force * c / (d * e);
            b.v.x = b.v.x + d * this.distanceVec.x;
            b.v.y = b.v.y + d * this.distanceVec.y
        }
    };
    x.GravityWell = u;
    t.ID = 0;
    x.Util.inherits(t, x.Particle);
    x.EventDispatcher.initialize(t.prototype);
    t.prototype.emit = function (b, c) {
        this.emitTime = 0;
        this.emitTotalTimes = x.Util.initValue(b, Infinity);
        c == true || c == "life" || c == "destroy" ? b == "once" ? this.life = 1 : this.life = this.emitTotalTimes : isNaN(c) || (this.life = c);
        this.rate.init()
    };
    t.prototype.stopEmit = function () {
        this.emitTotalTimes = -1;
        this.emitTime = 0
    };
    t.prototype.removeAllParticles = function () {
        for (var b = 0; b < this.particles.length; b++) this.particles[b].dead = true
    };
    t.prototype.createParticle = function (b, c) {
        var d = x.pool.get();
        this.setupParticle(d, b, c);
        this.dispatchEvent(new x.Event({
            type: x.PARTICLE_CREATED,
            particle: d
        }));
        return d
    };
    t.prototype.addSelfInitialize = function (b) {
        b.init ? b.init(this) : this.initAll()
    };
    t.prototype.addInitialize = function () {
        var b = arguments.length,
            c;
        for (c = 0; c < b; c++) this.initializes.push(arguments[c])
    };
    t.prototype.removeInitialize =
        function (b) {
            b = this.initializes.indexOf(b);
            b > -1 && this.initializes.splice(b, 1)
        };
    t.prototype.removeInitializers = function () {
        x.Util.destroyArray(this.initializes)
    };
    t.prototype.addBehaviour = function () {
        var b = arguments.length,
            c;
        for (c = 0; c < b; c++) {
            this.behaviours.push(arguments[c]);
            arguments[c].hasOwnProperty("parents") && arguments[c].parents.push(this)
        }
    };
    t.prototype.removeBehaviour = function (b) {
        b = this.behaviours.indexOf(b);
        b > -1 && this.behaviours.splice(b, 1)
    };
    t.prototype.removeAllBehaviours = function () {
        x.Util.destroyArray(this.behaviours)
    };
    t.prototype.integrate = function (b) {
        var c = 1 - this.damping;
        x.integrator.integrate(this, b, c);
        var d = this.particles.length,
            e;
        for (e = 0; e < d; e++) {
            var f = this.particles[e];
            f.update(b, e);
            x.integrator.integrate(f, b, c);
            this.dispatchEvent(new x.Event({
                type: x.PARTICLE_UPDATE,
                particle: f
            }))
        }
    };
    t.prototype.emitting = function (b) {
        if (this.emitTotalTimes == "once") {
            var b = this.rate.getValue(99999),
                c;
            for (c = 0; c < b; c++) this.createParticle();
            this.emitTotalTimes = "none"
        } else if (!isNaN(this.emitTotalTimes)) {
            this.emitTime = this.emitTime +
                b;
            if (this.emitTime < this.emitTotalTimes) {
                b = this.rate.getValue(b);
                for (c = 0; c < b; c++) this.createParticle()
            }
        }
    };
    t.prototype.update = function (b) {
        this.age = this.age + b;
        (this.age >= this.life || this.dead) && this.destroy();
        this.emitting(b);
        this.integrate(b);
        var c;
        for (c = this.particles.length - 1; c >= 0; c--) {
            b = this.particles[c];
            b.dead && (x.pool.set(b), this.particles.splice(c, 1), this.dispatchEvent(new x.Event({
                type: x.PARTICLE_DEAD,
                particle: b
            })))
        }
    };
    t.prototype.setupParticle = function (b, c, d) {
        var e = this.initializes,
            f = this.behaviours;
        c && (c instanceof Array ? e = c : e = [c]);
        d && (d instanceof Array ? f = d : f = [d]);
        x.InitializeUtil.initialize(this, b, e);
        b.addBehaviours(f);
        b.parent = this;
        this.particles.push(b)
    };
    t.prototype.destroy = function () {
        this.dead = true;
        this.emitTotalTimes = -1;
        this.particles.length == 0 && (this.removeInitializers(), this.removeAllBehaviours(), this.parent && this.parent.removeEmitter(this))
    };
    x.Emitter = t;
    x.Util.inherits(o, x.Emitter);
    o.prototype.addSelfBehaviour = function () {
        var b = arguments.length,
            c;
        for (c = 0; c < b; c++) this.selfBehaviours.push(arguments[c])
    };
    o.prototype.removeSelfBehaviour = function (b) {
        b = this.selfBehaviours.indexOf(b);
        b > -1 && this.selfBehaviours.splice(b, 1)
    };
    o.prototype.update = function (b) {
        o._super_.prototype.update.call(this, b);
        if (!this.sleep) {
            var c = this.selfBehaviours.length,
                d;
            for (d = 0; d < c; d++) this.selfBehaviours[d].applyBehaviour(this, b, d)
        }
    };
    x.BehaviourEmitter = o;
    x.Util.inherits(r, x.Emitter);
    r.prototype.initEventHandler = function () {
        var b = this;
        this.mousemoveHandler = function (c) {
            b.mousemove.call(b, c)
        };
        this.mousedownHandler = function (c) {
            b.mousedown.call(b,
                c)
        };
        this.mouseupHandler = function (c) {
            b.mouseup.call(b, c)
        };
        this.mouseTarget.addEventListener("mousemove", this.mousemoveHandler, false)
    };
    r.prototype.emit = function () {
        this._allowEmitting = true
    };
    r.prototype.stopEmit = function () {
        this._allowEmitting = false
    };
    r.prototype.mousemove = function (b) {
        if (b.layerX || b.layerX == 0) {
            this.p.x = this.p.x + (b.layerX - this.p.x) * this.ease;
            this.p.y = this.p.y + (b.layerY - this.p.y) * this.ease
        } else if (b.offsetX || b.offsetX == 0) {
            this.p.x = this.p.x + (b.offsetX - this.p.x) * this.ease;
            this.p.y = this.p.y +
                (b.offsetY - this.p.y) * this.ease
        }
        this._allowEmitting && r._super_.prototype.emit.call(this, "once")
    };
    r.prototype.destroy = function () {
        r._super_.prototype.destroy.call(this);
        this.mouseTarget.removeEventListener("mousemove", this.mousemoveHandler, false)
    };
    x.FollowEmitter = r;
    var ta = ta || {
        easeLinear: function (b) {
            return b
        },
        easeInQuad: function (b) {
            return Math.pow(b, 2)
        },
        easeOutQuad: function (b) {
            return -(Math.pow(b - 1, 2) - 1)
        },
        easeInOutQuad: function (b) {
            return (b = b / 0.5) < 1 ? 0.5 * Math.pow(b, 2) : -0.5 * ((b = b - 2) * b - 2)
        },
        easeInCubic: function (b) {
            return Math.pow(b,
                3)
        },
        easeOutCubic: function (b) {
            return Math.pow(b - 1, 3) + 1
        },
        easeInOutCubic: function (b) {
            return (b = b / 0.5) < 1 ? 0.5 * Math.pow(b, 3) : 0.5 * (Math.pow(b - 2, 3) + 2)
        },
        easeInQuart: function (b) {
            return Math.pow(b, 4)
        },
        easeOutQuart: function (b) {
            return -(Math.pow(b - 1, 4) - 1)
        },
        easeInOutQuart: function (b) {
            return (b = b / 0.5) < 1 ? 0.5 * Math.pow(b, 4) : -0.5 * ((b = b - 2) * Math.pow(b, 3) - 2)
        },
        easeInSine: function (b) {
            return -Math.cos(b * (Math.PI / 2)) + 1
        },
        easeOutSine: function (b) {
            return Math.sin(b * (Math.PI / 2))
        },
        easeInOutSine: function (b) {
            return -0.5 * (Math.cos(Math.PI *
                b) - 1)
        },
        easeInExpo: function (b) {
            return b === 0 ? 0 : Math.pow(2, 10 * (b - 1))
        },
        easeOutExpo: function (b) {
            return b === 1 ? 1 : -Math.pow(2, -10 * b) + 1
        },
        easeInOutExpo: function (b) {
            return b === 0 ? 0 : b === 1 ? 1 : (b = b / 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * --b) + 2)
        },
        easeInCirc: function (b) {
            return -(Math.sqrt(1 - b * b) - 1)
        },
        easeOutCirc: function (b) {
            return Math.sqrt(1 - Math.pow(b - 1, 2))
        },
        easeInOutCirc: function (b) {
            return (b = b / 0.5) < 1 ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b = b - 2) * b) + 1)
        },
        easeInBack: function (b) {
            return b * b * (2.70158 *
                b - 1.70158)
        },
        easeOutBack: function (b) {
            return (b = b - 1) * b * (2.70158 * b + 1.70158) + 1
        },
        easeInOutBack: function (b) {
            var c = 1.70158;
            return (b = b / 0.5) < 1 ? 0.5 * b * b * (((c = c * 1.525) + 1) * b - c) : 0.5 * ((b = b - 2) * b * (((c = c * 1.525) + 1) * b + c) + 2)
        },
        setEasingByName: function (b) {
            switch (b) {
                case "easeLinear":
                    return x.ease.easeLinear;
                case "easeInQuad":
                    return x.ease.easeInQuad;
                case "easeOutQuad":
                    return x.ease.easeOutQuad;
                case "easeInOutQuad":
                    return x.ease.easeInOutQuad;
                case "easeInCubic":
                    return x.ease.easeInCubic;
                case "easeOutCubic":
                    return x.ease.easeOutCubic;
                case "easeInOutCubic":
                    return x.ease.easeInOutCubic;
                case "easeInQuart":
                    return x.ease.easeInQuart;
                case "easeOutQuart":
                    return x.ease.easeOutQuart;
                case "easeInOutQuart":
                    return x.ease.easeInOutQuart;
                case "easeInSine":
                    return x.ease.easeInSine;
                case "easeOutSine":
                    return x.ease.easeOutSine;
                case "easeInOutSine":
                    return x.ease.easeInOutSine;
                case "easeInExpo":
                    return x.ease.easeInExpo;
                case "easeOutExpo":
                    return x.ease.easeOutExpo;
                case "easeInOutExpo":
                    return x.ease.easeInOutExpo;
                case "easeInCirc":
                    return x.ease.easeInCirc;
                case "easeOutCirc":
                    return x.ease.easeOutCirc;
                case "easeInOutCirc":
                    return x.ease.easeInOutCirc;
                case "easeInBack":
                    return x.ease.easeInBack;
                case "easeOutBack":
                    return x.ease.easeOutBack;
                case "easeInOutBack":
                    return x.ease.easeInOutBack;
                default:
                    return x.ease.easeLinear
            }
        }
    };
    x.ease = ta;
    x.easeLinear = "easeLinear";
    x.easeInQuad = "easeInQuad";
    x.easeOutQuad = "easeOutQuad";
    x.easeInOutQuad = "easeInOutQuad";
    x.easeInCubic = "easeInCubic";
    x.easeOutCubic = "easeOutCubic";
    x.easeInOutCubic = "easeInOutCubic";
    x.easeInQuart = "easeInQuart";
    x.easeOutQuart = "easeOutQuart";
    x.easeInOutQuart = "easeInOutQuart";
    x.easeInSine = "easeInSine";
    x.easeOutSine = "easeOutSine";
    x.easeInOutSine = "easeInOutSine";
    x.easeInExpo = "easeInExpo";
    x.easeOutExpo = "easeOutExpo";
    x.easeInOutExpo = "easeInOutExpo";
    x.easeInCirc = "easeInCirc";
    x.easeOutCirc = "easeOutCirc";
    x.easeInOutCirc = "easeInOutCirc";
    x.easeInBack = "easeInBack";
    x.easeOutBack = "easeOutBack";
    x.easeInOutBack = "easeInOutBack";
    s.prototype = {
        start: function () {
            this.addEventHandler();
            this.renderer.start()
        },
        stop: function () {
            this.renderer.stop()
        },
        resize: function (b, c) {
            this.renderer.resize(b, c)
        },
        setStroke: function (b, c) {
            this.renderer.hasOwnProperty("stroke") ? this.renderer.setStroke(b, c) : alert("Sorry this renderer do not suppest stroke method!")
        },
        createImageData: function (b) {
            this.renderer instanceof x.PixelRender && this.renderer.createImageData(b)
        },
        setMaxRadius: function (b) {
            this.renderer instanceof x.WebGLRender && this.renderer.setMaxRadius(b)
        },
        blendEquation: function (b) {
            this.renderer instanceof x.WebGLRender && this.renderer.blendEquation(b)
        },
        blendFunc: function (b,
            c) {
            this.renderer instanceof x.WebGLRender && this.renderer.blendFunc(b, c)
        },
        setType: function (b) {
            this.type = b;
            this.renderer = this.getRenderer()
        },
        getRenderer: function () {
            switch (this.type) {
                case "dom":
                    return new x.DomRender(this.proton, this.element);
                case "canvas":
                    return new x.CanvasRender(this.proton, this.element);
                case "webgl":
                    return new x.WebGLRender(this.proton, this.element);
                case "easel":
                    return new x.EaselRender(this.proton, this.element);
                case "easeljs":
                    return new x.EaselRender(this.proton, this.element);
                case "pixel":
                    return new x.PixelRender(this.proton,
                        this.element);
                default:
                    return new x.BaseRender(this.proton, this.element)
            }
        },
        render: function (b) {
            this.renderer.render(b)
        },
        addEventHandler: function () {
            this.onProtonUpdate && (this.renderer.onProtonUpdate = this.onProtonUpdate);
            this.onParticleCreated && (this.renderer.onParticleCreated = this.onParticleCreated);
            this.onParticleUpdate && (this.renderer.onParticleUpdate = this.onParticleUpdate);
            this.onParticleDead && (this.renderer.onParticleDead = this.onParticleDead)
        }
    };
    x.Renderer = s;
    p.prototype = {
        start: function () {
            var b = this;
            this.proton.addEventListener(x.PROTON_UPDATE, function () {
                b.onProtonUpdate.call(b)
            });
            this.proton.addEventListener(x.PROTON_UPDATE_AFTER, function () {
                b.onProtonUpdateAfter.call(b)
            });
            this.proton.addEventListener(x.EMITTER_ADDED, function (c) {
                b.onEmitterAdded.call(b, c.emitter)
            });
            this.proton.addEventListener(x.EMITTER_REMOVED, function (c) {
                b.onEmitterRemoved.call(b, c.emitter)
            });
            var c = this.proton.emitters.length,
                d;
            for (d = 0; d < c; d++) this.addEmitterListener(this.proton.emitters[d])
        },
        resize: function () { },
        addEmitterListener: function (b) {
            var c =
                this;
            b.addEventListener(x.PARTICLE_CREATED, function (b) {
                c.onParticleCreated.call(c, b.particle)
            });
            b.addEventListener(x.PARTICLE_UPDATE, function (b) {
                c.onParticleUpdate.call(c, b.particle)
            });
            b.addEventListener(x.PARTICLE_DEAD, function (b) {
                c.onParticleDead.call(c, b.particle)
            })
        },
        stop: function () {
            var b = this.proton.emitters.length,
                c;
            this.proton.removeAllEventListeners();
            for (c = 0; c < b; c++) this.proton.emitters[c].removeAllEventListeners()
        },
        onEmitterAdded: function (b) {
            this.addEmitterListener(b)
        },
        onEmitterRemoved: function (b) {
            b.removeAllEventListeners()
        },
        onProtonUpdate: function () { },
        onProtonUpdateAfter: function () { },
        onParticleCreated: function () { },
        onParticleUpdate: function () { },
        onParticleDead: function () { }
    };
    x.BaseRender = p;
    x.Util.inherits(q, x.BaseRender);
    q.prototype.start = function () {
        q._super_.prototype.start.call(this)
    };
    q.prototype.setStroke = function (b, c) {
        b = x.Util.initValue(b, "#000000");
        c = x.Util.initValue(c, 1);
        this.stroke = {
            color: b,
            thinkness: c
        }
    };
    q.prototype.onProtonUpdate = function () { };
    q.prototype.onParticleCreated = function (b) {
        if (b.target) {
            var c = this;
            x.Util.getImage(b.target,
                b, false,
                function (b) {
                    c.setImgInDIV.call(c, b)
                })
        } else {
            b.transform.canvas = x.DomUtil.createCanvas(b.id + "_canvas", b.radius + 1, b.radius + 1, "absolute");
            b.transform.bakOldRadius = b.radius;
            this.stroke ? (b.transform.canvas.width = 2 * b.radius + this.stroke.thinkness * 2, b.transform.canvas.height = 2 * b.radius + this.stroke.thinkness * 2) : (b.transform.canvas.width = 2 * b.radius + 1, b.transform.canvas.height = 2 * b.radius + 1);
            b.transform.context = b.transform.canvas.getContext("2d");
            b.transform.context.fillStyle = b.color;
            b.transform.context.beginPath();
            b.transform.context.arc(b.radius, b.radius, b.radius, 0, Math.PI * 2, true);
            this.stroke && (b.transform.context.strokeStyle = this.stroke.color, b.transform.context.lineWidth = this.stroke.thinkness, b.transform.context.stroke());
            b.transform.context.closePath();
            b.transform.context.fill();
            this.element.appendChild(b.transform.canvas)
        }
    };
    q.prototype.onParticleUpdate = function (b) {
        b.target ? b.target instanceof Image && (b.transform.canvas.style.opacity = b.alpha, x.DomUtil.transformDom(b.transform.canvas, b.p.x - b.target.width /
            2, b.p.y - b.target.height / 2, b.scale, b.rotation)) : (b.transform.canvas.style.opacity = b.alpha, b.transform.oldRadius ? x.DomUtil.transformDom(b.transform.canvas, b.p.x - b.transform.oldRadius, b.p.y - b.transform.oldRadius, b.scale, b.rotation) : x.DomUtil.transformDom(b.transform.canvas, b.p.x - b.transform.bakOldRadius, b.p.y - b.transform.bakOldRadius, b.scale, b.rotation))
    };
    q.prototype.onParticleDead = function (b) {
        b.transform.canvas && this.element.removeChild(b.transform.canvas)
    };
    q.prototype.setImgInDIV = function (b) {
        b.transform.canvas =
            x.DomUtil.createCanvas(b.id + "_canvas", b.target.width + 1, b.target.height + 1, "absolute", b.p.x - b.radius, b.p.y - b.radius);
        b.transform.context = b.transform.canvas.getContext("2d");
        b.transform.context.drawImage(b.target, 0, 0, b.target.width, b.target.height);
        this.element.appendChild(b.transform.canvas)
    };
    x.DomRender = q;
    x.Util.inherits(n, x.BaseRender);
    n.prototype.resize = function () { };
    n.prototype.start = function () {
        n._super_.prototype.start.call(this)
    };
    n.prototype.onProtonUpdate = function () { };
    n.prototype.onParticleCreated =
        function (b) {
            if (b.target) {
                b.target = b.target.clone();
                b.target.parent || (!b.target.image || (b.target.regX = b.target.image.width / 2, b.target.regY = b.target.image.height / 2), this.element.addChild(b.target))
            } else {
                var c = new createjs.Graphics;
                this.stroke && (this.stroke == true ? c.beginStroke("#000000") : this.stroke instanceof String && c.beginStroke(this.stroke));
                c.beginFill(b.color).drawCircle(0, 0, b.radius);
                c = new createjs.Shape(c);
                b.target = c;
                this.element.addChild(b.target)
            }
        };
    n.prototype.onParticleUpdate = function (b) {
        b.target &&
            (b.target.x = b.p.x, b.target.y = b.p.y, b.target.alpha = b.alpha, b.target.scaleX = b.target.scaleY = b.scale, b.target.rotation = b.rotation)
    };
    n.prototype.onParticleDead = function (b) {
        b.target && b.target.parent && b.target.parent.removeChild(b.target)
    };
    x.EaselRender = n;
    x.Util.inherits(m, x.BaseRender);
    m.prototype.resize = function (b, c) {
        this.element.width = b;
        this.element.height = c
    };
    m.prototype.start = function () {
        m._super_.prototype.start.call(this)
    };
    m.prototype.setStroke = function (b, c) {
        b = x.Util.initValue(b, "#000000");
        c = x.Util.initValue(c,
            1);
        this.stroke = {
            color: b,
            thinkness: c
        }
    };
    m.prototype.onProtonUpdate = function () {
        this.context.clearRect(0, 0, this.element.width, this.element.height)
    };
    m.prototype.onParticleCreated = function (b) {
        b.target ? x.Util.getImage(b.target, b, false) : b.color = b.color ? b.color : "#ff0000"
    };
    m.prototype.onParticleUpdate = function (b) {
        if (b.target) {
            if (b.target instanceof Image) {
                var c = b.target.width * b.scale | 0,
                    d = b.target.height * b.scale | 0,
                    e = b.p.x - c / 2,
                    f = b.p.y - d / 2;
                if (b.color) {
                    b.transform.buffer || (b.transform.buffer = this.getBuffer(b.target));
                    var g = b.transform.buffer.getContext("2d");
                    g.clearRect(0, 0, b.transform.buffer.width, b.transform.buffer.height);
                    g.globalAlpha = b.alpha;
                    g.drawImage(b.target, 0, 0);
                    g.globalCompositeOperation = "source-atop";
                    g.fillStyle = x.Util.rgbToHex(b.transform.rgb);
                    g.fillRect(0, 0, b.transform.buffer.width, b.transform.buffer.height);
                    g.globalCompositeOperation = "source-over";
                    g.globalAlpha = 1;
                    this.context.drawImage(b.transform.buffer, 0, 0, b.transform.buffer.width, b.transform.buffer.height, e, f, c, d)
                } else {
                    this.context.save();
                    this.context.globalAlpha =
                        b.alpha;
                    this.context.translate(b.p.x, b.p.y);
                    this.context.rotate(x.MathUtils.degreeTransform(b.rotation));
                    this.context.translate(-b.p.x, -b.p.y);
                    this.context.drawImage(b.target, 0, 0, b.target.width, b.target.height, e, f, c, d);
                    this.context.globalAlpha = 1;
                    this.context.restore()
                }
            }
        } else {
            b.transform.rgb ? this.context.fillStyle = "rgba(" + b.transform.rgb.r + "," + b.transform.rgb.g + "," + b.transform.rgb.b + "," + b.alpha + ")" : this.context.fillStyle = b.color;
            this.context.beginPath();
            this.context.arc(b.p.x, b.p.y, b.radius, 0, Math.PI *
                2, true);
            this.stroke && (this.context.strokeStyle = this.stroke.color, this.context.lineWidth = this.stroke.thinkness, this.context.stroke());
            this.context.closePath();
            this.context.fill()
        }
    };
    m.prototype.onParticleDead = function () { };
    m.prototype.getBuffer = function (b) {
        if (b instanceof Image) {
            var c = b.width + "_" + b.height,
                d = this.bufferCache[c];
            d || (d = document.createElement("canvas"), d.width = b.width, d.height = b.height, this.bufferCache[c] = d);
            return d
        }
    };
    x.CanvasRender = m;
    x.Util.inherits(l, x.BaseRender);
    l.prototype.resize =
        function (b, c) {
            this.element.width = b;
            this.element.height = c
        };
    l.prototype.createImageData = function (b) {
        b ? this.rectangle = b : this.rectangle = new x.Rectangle(0, 0, this.element.width, this.element.height);
        this.imageData = this.context.createImageData(this.rectangle.width, this.rectangle.height);
        this.context.putImageData(this.imageData, this.rectangle.x, this.rectangle.y)
    };
    l.prototype.start = function () {
        l._super_.prototype.start.call(this)
    };
    l.prototype.onProtonUpdate = function () {
        this.context.clearRect(this.rectangle.x,
            this.rectangle.y, this.rectangle.width, this.rectangle.height);
        this.imageData = this.context.getImageData(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height)
    };
    l.prototype.onProtonUpdateAfter = function () {
        this.context.putImageData(this.imageData, this.rectangle.x, this.rectangle.y)
    };
    l.prototype.onParticleCreated = function () { };
    l.prototype.onParticleUpdate = function (b) {
        this.imageData && this.setPixel(this.imageData, Math.floor(b.p.x - this.rectangle.x), Math.floor(b.p.y - this.rectangle.y), b)
    };
    l.prototype.setPixel = function (b, c, d, e) {
        var f = e.transform.rgb;
        if (!(c < 0 || c > this.element.width || d < 0 || d > this.elementwidth)) {
            c = ((d >> 0) * b.width + (c >> 0)) * 4;
            b.data[c] = f.r;
            b.data[c + 1] = f.g;
            b.data[c + 2] = f.b;
            b.data[c + 3] = e.alpha * 255
        }
    };
    l.prototype.onParticleDead = function () { };
    x.PixelRender = l;
    x.Util.inherits(k, x.BaseRender);
    k.prototype.resize = function (b, c) {
        this.umat[4] = -2;
        this.umat[7] = 1;
        this.smat[0] = 1 / b;
        this.smat[4] = 1 / c;
        this.mstack.set(this.umat, 0);
        this.mstack.set(this.smat, 1);
        this.gl.viewport(0, 0, b, c);
        this.element.width =
            b;
        this.element.height = c
    };
    k.prototype.setMaxRadius = function (b) {
        this.circleCanvasURL = this.createCircle(b)
    };
    k.prototype.getVertexShader = function () {
        return "uniform vec2 viewport;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat3 tMat;\nvarying vec2 vTextureCoord;\nvarying float alpha;\nvoid main() {\nvec3 v = tMat * vec3(aVertexPosition, 1.0);\ngl_Position = vec4(v.x, v.y, 0, 1);\nvTextureCoord = aTextureCoord;\nalpha = tMat[0][2];\n}"
    };
    k.prototype.getFragmentShader = function () {
        return "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying float alpha;\nuniform sampler2D uSampler;\nuniform vec4 color;\nuniform bool useTexture;\nuniform vec3 uColor;\nvoid main() {\nvec4 textureColor = texture2D(uSampler, vTextureCoord);\ngl_FragColor = textureColor * vec4(uColor, 1.0);\ngl_FragColor.w *= alpha;\n}"
    };
    k.prototype.initVar = function () {
        this.mstack = new x.MStack;
        this.umat = x.Mat3.create([2, 0, 1, 0, -2, 0, -1, 1, 1]);
        this.smat = x.Mat3.create([0.01, 0, 1, 0, 0.01, 0, 0, 0, 1]);
        this.texturebuffers = {}
    };
    k.prototype.start = function () {
        k._super_.prototype.start.call(this);
        this.resize(this.element.width, this.element.height)
    };
    k.prototype.blendEquation = function (b) {
        this.gl.blendEquation(this.gl[b])
    };
    k.prototype.blendFunc = function (b, c) {
        this.gl.blendFunc(this.gl[b], this.gl[c])
    };
    k.prototype.getShader = function (b, c, d) {
        var e;
        d ? e = b.createShader(b.FRAGMENT_SHADER) :
            e = b.createShader(b.VERTEX_SHADER);
        b.shaderSource(e, c);
        b.compileShader(e);
        if (!b.getShaderParameter(e, b.COMPILE_STATUS)) {
            alert(b.getShaderInfoLog(e));
            return null
        }
        return e
    };
    k.prototype.initShaders = function () {
        var b = this.getShader(this.gl, this.getFragmentShader(), true),
            c = this.getShader(this.gl, this.getVertexShader(), false);
        this.sprogram = this.gl.createProgram();
        this.gl.attachShader(this.sprogram, c);
        this.gl.attachShader(this.sprogram, b);
        this.gl.linkProgram(this.sprogram);
        this.gl.getProgramParameter(this.sprogram,
            this.gl.LINK_STATUS) || alert("Could not initialise shaders");
        this.gl.useProgram(this.sprogram);
        this.sprogram.vpa = this.gl.getAttribLocation(this.sprogram, "aVertexPosition");
        this.sprogram.tca = this.gl.getAttribLocation(this.sprogram, "aTextureCoord");
        this.gl.enableVertexAttribArray(this.sprogram.tca);
        this.gl.enableVertexAttribArray(this.sprogram.vpa);
        this.sprogram.tMatUniform = this.gl.getUniformLocation(this.sprogram, "tMat");
        this.sprogram.samplerUniform = this.gl.getUniformLocation(this.sprogram, "uSampler");
        this.sprogram.useTex = this.gl.getUniformLocation(this.sprogram, "useTexture");
        this.sprogram.color = this.gl.getUniformLocation(this.sprogram, "uColor");
        this.gl.uniform1i(this.sprogram.useTex, 1)
    };
    k.prototype.initBuffers = function () {
        this.unitIBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 3, 1, 0, 2, 3]), this.gl.STATIC_DRAW);
        for (var b = [], c = 0; c < 100; c++) b.push(c);
        idx = new Uint16Array(b);
        this.unitI33 =
            this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitI33);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, idx, this.gl.STATIC_DRAW);
        b = [];
        for (c = 0; c < 100; c++) b.push(c, c + 1, c + 2);
        idx = new Uint16Array(b);
        this.stripBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.stripBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, idx, this.gl.STATIC_DRAW)
    };
    k.prototype.createCircle = function (b) {
        this.circleCanvasRadius = x.WebGLUtil.nhpot(x.Util.initValue(b, 32));
        var b = x.DomUtil.createCanvas("circle_canvas", this.circleCanvasRadius * 2, this.circleCanvasRadius * 2),
            c = b.getContext("2d");
        c.beginPath();
        c.arc(this.circleCanvasRadius, this.circleCanvasRadius, this.circleCanvasRadius, 0, Math.PI * 2, true);
        c.closePath();
        c.fillStyle = "#FFF";
        c.fill();
        return b.toDataURL()
    };
    k.prototype.setImgInCanvas = function (b) {
        var c = b.target.width,
            d = b.target.height,
            e = x.WebGLUtil.nhpot(b.target.width),
            f = x.WebGLUtil.nhpot(b.target.height),
            g = b.target.width / e,
            h = b.target.height / f;
        this.texturebuffers[b.transform.src] ||
            (this.texturebuffers[b.transform.src] = [this.gl.createTexture(), this.gl.createBuffer(), this.gl.createBuffer()]);
        b.transform.texture = this.texturebuffers[b.transform.src][0];
        b.transform.vcBuffer = this.texturebuffers[b.transform.src][1];
        b.transform.tcBuffer = this.texturebuffers[b.transform.src][2];
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, b.transform.tcBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, g, 0, 0, h, h, h]), this.gl.STATIC_DRAW);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, b.transform.vcBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, c, 0, 0, d, c, d]), this.gl.STATIC_DRAW);
        e = b.transform.canvas.getContext("2d").getImageData(0, 0, e, f);
        this.gl.bindTexture(this.gl.TEXTURE_2D, b.transform.texture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, e);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_NEAREST);
        this.gl.generateMipmap(this.gl.TEXTURE_2D);
        b.transform.textureLoaded = true;
        b.transform.textureWidth = c;
        b.transform.textureHeight = d
    };
    k.prototype.setStroke = function () { };
    k.prototype.onProtonUpdate = function () { };
    k.prototype.onParticleCreated = function (b) {
        var c = this;
        b.transform.textureLoaded = false;
        b.transform.tmat = x.Mat3.create();
        b.transform.tmat[8] = 1;
        b.transform.imat = x.Mat3.create();
        b.transform.imat[8] = 1;
        b.target ? x.Util.getImage(b.target, b, true, function (b) {
            c.setImgInCanvas.call(c, b);
            b.transform.oldScale = 1
        }) : x.Util.getImage(this.circleCanvasURL, b,
            true,
            function (b) {
                c.setImgInCanvas.call(c, b);
                b.transform.oldScale = b.radius / c.circleCanvasRadius
            })
    };
    k.prototype.onParticleUpdate = function (b) {
        b.transform.textureLoaded && (this.updateMatrix(b), this.gl.uniform3f(this.sprogram.color, b.transform.rgb.r / 255, b.transform.rgb.g / 255, b.transform.rgb.b / 255), this.gl.uniformMatrix3fv(this.sprogram.tMatUniform, false, this.mstack.top()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, b.transform.vcBuffer), this.gl.vertexAttribPointer(this.sprogram.vpa, 2, this.gl.FLOAT, false, 0,
            0), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, b.transform.tcBuffer), this.gl.vertexAttribPointer(this.sprogram.tca, 2, this.gl.FLOAT, false, 0, 0), this.gl.bindTexture(this.gl.TEXTURE_2D, b.transform.texture), this.gl.uniform1i(this.sprogram.samplerUniform, 0), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer), this.gl.drawElements(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_SHORT, 0), this.mstack.pop())
    };
    k.prototype.onParticleDead = function () { };
    k.prototype.updateMatrix = function (b) {
        var c = x.WebGLUtil.makeTranslation(-b.transform.textureWidth /
                2, -b.transform.textureHeight / 2),
            d = x.WebGLUtil.makeTranslation(b.p.x, b.p.y),
            e = x.WebGLUtil.makeRotation(b.rotation * (Math.PI / 180)),
            f = b.scale * b.transform.oldScale,
            f = x.WebGLUtil.makeScale(f, f),
            c = x.WebGLUtil.matrixMultiply(c, f),
            c = x.WebGLUtil.matrixMultiply(c, e),
            c = x.WebGLUtil.matrixMultiply(c, d);
        x.Mat3.inverse(c, b.transform.imat);
        c[2] = b.alpha;
        this.mstack.push(c)
    };
    x.WebGLRender = k;
    j.prototype = {
        getPosition: function () { },
        crossing: function () { }
    };
    x.Zone = j;
    x.Util.inherits(h, x.Zone);
    h.prototype.getPosition = function () {
        this.random =
            Math.random();
        this.vector.x = this.x1 + this.random * this.length * Math.cos(this.gradient);
        this.vector.y = this.y1 + this.random * this.length * Math.sin(this.gradient);
        return this.vector
    };
    h.prototype.getDirection = function (b, c) {
        var d = -this.dx;
        return (this.dy * b + d * c + this.dot) * (d == 0 ? 1 : d) > 0 ? true : false
    };
    h.prototype.getDistance = function (b, c) {
        return (this.dy * b + -this.dx * c + this.dot) / Math.sqrt(this.xxyy)
    };
    h.prototype.getSymmetric = function (b) {
        var c = b.getGradient(),
            c = 2 * (this.getGradient() - c),
            d = b.x,
            e = b.y;
        b.x = d * Math.cos(c) - e * Math.sin(c);
        b.y = d * Math.sin(c) + e * Math.cos(c);
        return b
    };
    h.prototype.getGradient = function () {
        return Math.atan2(this.dy, this.dx)
    };
    h.prototype.getRange = function (b, c) {
        Math.abs(this.getGradient()) <= Math.PI / 4 ? b.p.x < this.maxx && b.p.x > this.minx && c() : b.p.y < this.maxy && b.p.y > this.miny && c()
    };
    h.prototype.getLength = function () {
        return Math.sqrt(this.dx * this.dx + this.dy * this.dy)
    };
    h.prototype.crossing = function (b) {
        var c = this;
        this.crossType == "dead" ? this.direction == ">" || this.direction == "R" || this.direction == "right" || this.direction == "down" ?
            this.getRange(b, function () {
                c.getDirection(b.p.x, b.p.y) && (b.dead = true)
            }) : this.getRange(b, function () {
                c.getDirection(b.p.x, b.p.y) || (b.dead = true)
            }) : this.crossType == "bound" ? this.getRange(b, function () {
                c.getDistance(b.p.x, b.p.y) <= b.radius && (c.dx == 0 ? b.v.x = b.v.x * -1 : c.dy == 0 ? b.v.y = b.v.y * -1 : c.getSymmetric(b.v))
            }) : this.crossType == "cross" && this.alert && (alert("Sorry lineZone does not support cross method"), this.alert = false)
    };
    x.LineZone = h;
    x.Util.inherits(g, x.Zone);
    g.prototype.getPosition = function () {
        this.random = Math.random();
        this.angle = Math.PI * 2 * Math.random();
        this.vector.x = this.x + this.random * this.radius * Math.cos(this.angle);
        this.vector.y = this.y + this.random * this.radius * Math.sin(this.angle);
        return this.vector
    };
    g.prototype.setCenter = function (b, c) {
        this.center.x = b;
        this.center.y = c
    };
    g.prototype.crossing = function (b) {
        var c = b.p.distanceTo(this.center);
        this.crossType == "dead" ? c - b.radius > this.radius && (b.dead = true) : this.crossType == "bound" ? c + b.radius >= this.radius && this.getSymmetric(b) : this.crossType == "cross" && this.alert && (alert("Sorry CircleZone does not support cross method"),
            this.alert = false)
    };
    g.prototype.getSymmetric = function (b) {
        var c = b.v.getGradient(),
            c = 2 * (this.getGradient(b) - c),
            d = b.v.x,
            e = b.v.y;
        b.v.x = d * Math.cos(c) - e * Math.sin(c);
        b.v.y = d * Math.sin(c) + e * Math.cos(c)
    };
    g.prototype.getGradient = function (b) {
        return -Math.PI / 2 + Math.atan2(b.p.y - this.center.y, b.p.x - this.center.x)
    };
    x.CircleZone = g;
    x.Util.inherits(f, x.Zone);
    f.prototype.getPosition = function () {
        this.vector.x = this.x;
        this.vector.y = this.y;
        return this.vector
    };
    f.prototype.crossing = function () {
        this.alert && (alert("Sorry PointZone does not support crossing method"),
            this.alert = false)
    };
    x.PointZone = f;
    x.Util.inherits(e, x.Zone);
    e.prototype.getPosition = function () {
        this.vector.x = this.x + Math.random() * this.width;
        this.vector.y = this.y + Math.random() * this.height;
        return this.vector
    };
    e.prototype.crossing = function (b) {
        this.crossType == "dead" ? (b.p.x + b.radius < this.x ? b.dead = true : b.p.x - b.radius > this.x + this.width && (b.dead = true), b.p.y + b.radius < this.y ? b.dead = true : b.p.y - b.radius > this.y + this.height && (b.dead = true)) : this.crossType == "bound" ? (b.p.x - b.radius < this.x ? (b.p.x = this.x + b.radius, b.v.x =
            b.v.x * -1) : b.p.x + b.radius > this.x + this.width && (b.p.x = this.x + this.width - b.radius, b.v.x = b.v.x * -1), b.p.y - b.radius < this.y ? (b.p.y = this.y + b.radius, b.v.y = b.v.y * -1) : b.p.y + b.radius > this.y + this.height && (b.p.y = this.y + this.height - b.radius, b.v.y = b.v.y * -1)) : this.crossType == "cross" && (b.p.x + b.radius < this.x && b.v.x <= 0 ? b.p.x = this.x + this.width + b.radius : b.p.x - b.radius > this.x + this.width && b.v.x >= 0 && (b.p.x = this.x - b.radius), b.p.y + b.radius < this.y && b.v.y <= 0 ? b.p.y = this.y + this.height + b.radius : b.p.y - b.radius > this.y + this.height &&
            b.v.y >= 0 && (b.p.y = this.y - b.radius))
    };
    x.RectZone = e;
    x.Util.inherits(d, x.Zone);
    d.prototype.reset = function (b, c, d, e) {
        this.imageData = b;
        this.x = x.Util.initValue(c, 0);
        this.y = x.Util.initValue(d, 0);
        this.d = x.Util.initValue(e, 2);
        this.vectors = [];
        this.setVectors()
    };
    d.prototype.setVectors = function () {
        var b, c, d = this.imageData.width,
            e = this.imageData.height;
        for (b = 0; b < d; b = b + this.d)
            for (c = 0; c < e; c = c + this.d) this.imageData.data[((c >> 0) * d + (b >> 0)) * 4 + 3] > 0 && this.vectors.push({
                x: b + this.x,
                y: c + this.y
            });
        return this.vector
    };
    d.prototype.getBound =
        function (b, c) {
            return this.imageData.data[((c >> 0) * this.imageData.width + (b >> 0)) * 4 + 3] > 0 ? true : false
        };
    d.prototype.getPosition = function () {
        return this.vector.copy(this.vectors[Math.floor(Math.random() * this.vectors.length)])
    };
    d.prototype.getColor = function (b, c) {
        var b = b - this.x,
            c = c - this.y,
            d = ((c >> 0) * this.imageData.width + (b >> 0)) * 4;
        return {
            r: this.imageData.data[d],
            g: this.imageData.data[d + 1],
            b: this.imageData.data[d + 2],
            a: this.imageData.data[d + 3]
        }
    };
    d.prototype.crossing = function (b) {
        this.crossType == "dead" ? this.getBound(b.p.x -
            this.x, b.p.y - this.y) ? b.dead = true : b.dead = false : this.crossType == "bound" && (this.getBound(b.p.x - this.x, b.p.y - this.y) || b.v.negate())
    };
    x.ImageZone = d;
    var sa = function () {
        if (b.console && b.console.log) {
            var c = arguments;
            if (typeof arguments[0] == "string")
                if (arguments[0].indexOf("+") == 0) {
                    var d = parseInt(arguments[0]);
                    sa.once < d && (delete c[0], console.log(c), sa.once++)
                } else console.log(c);
            else console.log(c)
        }
    };
    sa.once = 0;
    x.log = sa;
    var Da = Da || {
        addEventListener: function (b, c) {
            b.addEventListener(x.PROTON_UPDATE, function () {
                c()
            })
        },
        setStyle: function (b) {
            b = x.Util.hexToRGB(b || "#ff0000");
            return "rgba(" + b.r + "," + b.g + "," + b.b + ",0.5)"
        },
        drawZone: function (b, c, d, e) {
            var f = c.getContext("2d"),
                g = this.setStyle();
            this.addEventListener(b, function () {
                e && f.clearRect(0, 0, c.width, c.height);
                d instanceof x.PointZone ? (f.beginPath(), f.fillStyle = g, f.arc(d.x, d.y, 10, 0, Math.PI * 2, true), f.fill(), f.closePath()) : d instanceof x.LineZone ? (f.beginPath(), f.strokeStyle = g, f.moveTo(d.x1, d.y1), f.lineTo(d.x2, d.y2), f.stroke(), f.closePath()) : d instanceof x.RectZone ? (f.beginPath(),
                    f.strokeStyle = g, f.drawRect(d.x, d.y, d.width, d.height), f.stroke(), f.closePath()) : d instanceof x.CircleZone && (f.beginPath(), f.strokeStyle = g, f.arc(d.x, d.y, d.radius, 0, Math.PI * 2, true), f.stroke(), f.closePath())
            })
        },
        drawEmitter: function (b, c, d, e) {
            var f = c.getContext("2d"),
                g = this.setStyle();
            this.addEventListener(b, function () {
                e && f.clearRect(0, 0, c.width, c.height);
                f.beginPath();
                f.fillStyle = g;
                f.arc(d.p.x, d.p.y, 10, 0, Math.PI * 2, true);
                f.fill();
                f.closePath()
            })
        },
        test: {},
        setTest: function (b, c) {
            this.test[b] = c
        },
        getTest: function (b) {
            return this.test.hasOwnProperty(b) ?
                this.test[b] : false
        }
    };
    x.Debug = Da
})(window);
(function () {
    for (var b = 0, c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !window.requestAnimationFrame; ++d) {
        window.requestAnimationFrame = window[c[d] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[c[d] + "CancelAnimationFrame"] || window[c[d] + "CancelRequestAnimationFrame"]
    }
    window.requestAnimationFrame || (window.requestAnimationFrame = function (c) {
        var d = (new Date).getTime(),
            g = Math.max(0, 16 - (d - b)),
            h = window.setTimeout(function () {
                c(d + g)
            }, g);
        b = d + g;
        return h
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame =
        function (b) {
            clearTimeout(b)
        })
})();

function _log() { }

function setPreference(b, c) {
    prefs[b] = c;
    $.ajax({
        url: "api/userpref.aspx",
        type: "POST",
        data: "n=" + escape(b) + "&v=" + escape(c)
    })
}

function getPreference(b, c) {
    $.ajax({
        url: "api/userpref.aspx",
        type: "POST",
        data: "n=" + escape(b),
        success: function (b) {
            c && typeof c == "function" && c(b)
        }
    })
}

function getFileExt(b) {
    var c = b.lastIndexOf(".");
    return c > 0 && c + 1 < b.length ? b.substring(c) : ""
}

function getFilename(b) {
    var c = b.lastIndexOf("/");
    c >= 0 && c + 1 < b.length && (b = b.substring(c + 1));
    c = b.lastIndexOf(".");
    return c > 0 && c + 1 < b.length ? b.substring(0, c) : b
}

function measureText(b, c) {
    var d = $("canvas")[0].getContext();
    d.save();
    d.font = b;
    var e = d.measureText(c);
    d.restore();
    return e
}

function mergeLists(b, c, d) {
    if (typeof c == "object" && c.indexOf)
        if (d)
            for (var e = 0; e < c.length; e++) {
                for (var f = c[e], g = false, h = 0; h < b.length; h++)
                    if (d(b[h], f)) {
                        if (b[h].count !== void 0) b[h].count = b[h].count + c[e].count;
                        g = true;
                        break
                    }
                g || b.push(f)
            } else
            for (e = 0; e < c.length; e++) b.indexOf(c[e]) < 0 && b.push(c[e]);
    else if (d) {
        g = false;
        for (h = 0; h < b.length; h++)
            if (d(b[h], c)) {
                if (b[h].count !== void 0) b[h].count = b[h].count + c.count;
                g = true;
                break
            }
        g || b.push(c)
    } else b.indexOf(c) < 0 && b.push(c);
    return b
}

function findStepByFunc(b) {
    if (g_steps[b]) return g_steps[b];
    for (var c = 0; c < g_varBlocks.length; c++)
        if (g_varBlocks[c].func && g_varBlocks[c].func == b) return g_varBlocks[c];
    for (c = 0; c < g_listBlocks.length; c++)
        if (g_listBlocks[c].func && g_listBlocks[c].func == b) return g_listBlocks[c];
    return null
}

function makeBlockByName(b) {
    var c = null;
    (b = findStepByFunc(b)) && (c = b.value ? new Label(b) : new Block(b));
    return c
}

function ifArrayMakeString(b) {
    return b instanceof Array ? b.join(" ") : b instanceof Object ? JSON.stringify(b) : b
}

function coerceToNumber(b) {
    (b = parseFloat(b)) || (b = b.length == 1 ? b.charCodeAt(0) : 0);
    return b
}

function valueToNative(b) {
    if (b == "true" || b === true) return true;
    if (b == "false" || b === false) return false;
    if (b instanceof Array || b instanceof Object) return b;
    var c = "" + b,
        d = c;
    if (d.indexOf(".") >= 0) {
        if (d.indexOf("e") < 0)
            for (; d.charAt(d.length - 1) == "0";) d = d.substring(0, d.length - 1);
        else {
            for (var e = true, f = 0; f < d.length; f++) {
                var g = d.charAt(f);
                if (g != "." && g != "e" && g != "-" && g != "+" && (g < "0" || g > "9")) {
                    e = false;
                    break
                }
            }
            if (e) return parseFloat(d)
        }
        d.charAt(d.length - 1) == "." && (d = d.substring(0, d.length - 1))
    }
    b = parseFloat(b);
    return "" + b ==
        d || "" + b == "0" + d ? b : c
}

function animate(b, c, d) {
    var e = Date.now(),
        f = 0,
        f = window.setInterval(function () {
            var g = Date.now();
            if (g < e + b) c(g - e, b);
            else {
                c(b, b);
                window.clearInterval(f);
                d && d()
            }
        }, 1E3 / 30)
}

function getScrollVectors(b) {
    var c = 0,
        d = 0;
    b.originalEvent.wheelDelta && (d = b.originalEvent.wheelDelta / 120 * 120);
    b.originalEvent.axis !== void 0 && (b.originalEvent.axis === b.originalEvent.HORIZONTAL_AXIS ? c = -1 * b.originalEvent.detail / 3 * 120 : b.originalEvent.axis === b.originalEvent.VERTICAL_AXIS && (d = -1 * b.originalEvent.detail / 3 * 120));
    b.originalEvent.wheelDeltaY !== void 0 && (d = b.originalEvent.wheelDeltaY / 120 * 120);
    b.originalEvent.wheelDeltaX !== void 0 && (c = b.originalEvent.wheelDeltaX / 120 * 120);
    return {
        x: c,
        y: d
    }
}

function findPos(b) {
    return $(b).offset()
}

function parseColor(b) {
    var c = 0,
        d = 0,
        e = 0,
        f = 1;
    if (typeof b == "string" && b.substring(0, 5) == "rgba(" && b.charAt(b.length - 1) == ")") {
        d = b.indexOf(",");
        c = parseInt($.trim(b.substr(5, d - 5)));
        e = b.indexOf(",", d + 1);
        d = parseInt($.trim(b.substr(d + 1, e - d)));
        f = b.indexOf(",", e + 1);
        e = parseInt($.trim(b.substr(e + 1, f - e)));
        f = parseFloat($.trim(b.substr(f + 1, b.length - f)))
    } else if (typeof b == "string" && b.substring(0, 4) == "rgb(" && b.charAt(b.length - 1) == ")") {
        d = b.indexOf(",");
        c = parseInt($.trim(b.substr(4, d - 4)));
        e = b.indexOf(",", d + 1);
        d = parseInt($.trim(b.substr(d +
            1, e - d)));
        e = parseInt($.trim(b.substr(e + 1, b.length - e)))
    } else {
        typeof b == "string" && b.charAt(0) != "#" ? b = "#" + parseInt(b).toString(16) : typeof b == "number" && (b = "#" + b.toString(16));
        c = parseInt(b.substring(1, 3), 16);
        d = parseInt(b.substring(3, 5), 16);
        e = parseInt(b.substring(5), 16)
    }
    return {
        r: c,
        g: d,
        b: e,
        a: f
    }
}

function getColorComponents(b) {
    var b = parseColor(b),
        c = rgbToHsv(b.r, b.g, b.b),
        d = 200 * c[0],
        e = c[1],
        c = c[2],
        b = "rgba(" + b.r + "," + b.g + "," + b.b + "," + b.a + ")";
    return [b, d, c == 1 ? 50 + 50 * (1 - e) : 50 * c]
}

function rgbToHsl(b, c, d) {
    var b = b / 255,
        c = c / 255,
        d = d / 255,
        e = Math.max(b, c, d),
        f = Math.min(b, c, d),
        g, h = (e + f) / 2;
    if (e == f) g = f = 0;
    else {
        var j = e - f,
            f = h > 0.5 ? j / (2 - e - f) : j / (e + f);
        switch (e) {
            case b:
                g = (c - d) / j + (c < d ? 6 : 0);
                break;
            case c:
                g = (d - b) / j + 2;
                break;
            case d:
                g = (b - c) / j + 4
        }
        g = g / 6
    }
    return [g, f, h]
}

function hslToRgb(b, c, d) {
    if (c == 0) d = c = b = d;
    else var e = function (b, c, d) {
        d < 0 && (d = d + 1);
        d > 1 && (d = d - 1);
        return d < 1 / 6 ? b + (c - b) * 6 * d : d < 0.5 ? c : d < 2 / 3 ? b + (c - b) * (2 / 3 - d) * 6 : b
    },
        f = d < 0.5 ? d * (1 + c) : d + c - d * c,
        g = 2 * d - f,
        d = e(g, f, b + 1 / 3),
        c = e(g, f, b),
        b = e(g, f, b - 1 / 3);
    return [d * 255, c * 255, b * 255]
}

function rgbToHsv(b, c, d) {
    var b = b / 255,
        c = c / 255,
        d = d / 255,
        e = Math.max(b, c, d),
        f = Math.min(b, c, d),
        g, h = e - f;
    if (e == f) g = 0;
    else {
        switch (e) {
            case b:
                g = (c - d) / h + (c < d ? 6 : 0);
                break;
            case c:
                g = (d - b) / h + 2;
                break;
            case d:
                g = (b - c) / h + 4
        }
        g = g / 6
    }
    return [g, e == 0 ? 0 : h / e, e]
}

function hsvToRgb(b, c, d) {
    var e, f, g, h = Math.floor(b * 6),
        j = b * 6 - h,
        b = d * (1 - c),
        k = d * (1 - j * c),
        c = d * (1 - (1 - j) * c);
    switch (h % 6) {
        case 0:
            e = d;
            f = c;
            g = b;
            break;
        case 1:
            e = k;
            f = d;
            g = b;
            break;
        case 2:
            e = b;
            f = d;
            g = c;
            break;
        case 3:
            e = b;
            f = k;
            g = d;
            break;
        case 4:
            e = c;
            f = b;
            g = d;
            break;
        case 5:
            e = d;
            f = b;
            g = k
    }
    return [e * 255, f * 255, g * 255]
}
CanvasRenderingContext2D.prototype.dashedLine = function (b, c, d, e, f) {
    f || (f = 2);
    this.save();
    var g = b,
        h = c;
    this.beginPath();
    this.moveTo(b, c);
    var j = d - b,
        k = e - c,
        f = Math.floor(Math.sqrt(j * j + k * k) / f),
        j = j / f,
        k = k / f;
    this.strokeStyle = "#000";
    for (var l = 0; l++ < f;) {
        b = b + j;
        c = c + k;
        this[l % 2 == 0 ? "moveTo" : "lineTo"](b, c);
        this.lineTo(b, c)
    }
    this[l % 2 == 0 ? "moveTo" : "lineTo"](d, e);
    this.stroke();
    this.closePath();
    this.beginPath();
    this.moveTo(g, h);
    b = g;
    c = h;
    this.strokeStyle = "#fff";
    for (l = 1; l++ < f;) {
        b = b + j;
        c = c + k;
        this[l % 2 == 0 ? "moveTo" : "lineTo"](b, c);
        this.lineTo(b, c)
    }
    this[l % 2 == 0 ? "moveTo" : "lineTo"](d, e);
    this.stroke();
    this.closePath();
    this.restore()
};

function breakLines(b, c, d) {
    for (var e = 0, f = [], g = b.split("\\n"), h = 0; h < g.length; h++) {
        var b = g[h],
            j = c.measureText(b);
        if (j.width > d) {
            for (var k = "", b = b.split(/ +/), l = 0; l < b.length;) {
                j = c.measureText(k + b[l] + " ");
                if (j.width > d)
                    if (k == "") {
                        for (var m = b[l] && b[l].length > 1 ? b[l][0] : "", n = false, q = 1; q < b[l].length; q++) {
                            j = b[l][q];
                            if (c.measureText(m + j).width > d) {
                                n = true;
                                f.push(m);
                                j = c.measureText(m);
                                if (j.width > e) e = j.width;
                                b[l] = b[l].substring(q);
                                break
                            } else m = m + j
                        }
                        if (!n) {
                            f.push(m);
                            l++
                        }
                    } else {
                        f.push(k);
                        j = c.measureText(k);
                        if (j.width >
                            e) e = j.width;
                        k = ""
                    }
                else {
                    k != "" && (k = k + " ");
                    k = k + b[l];
                    l++
                }
            }
            if (k != "" || h < g.length - 1) {
                f.push(k);
                j = c.measureText(k);
                if (j.width > e) e = j.width
            }
        } else {
            f.push(b);
            j = c.measureText(b);
            if (j.width > e) e = j.width
        }
    }
    return {
        lines: f,
        textWidth: e
    }
}

function firstLetterToUpper(b) {
    return b.charAt(0).toUpperCase() + b.slice(1)
}

function firstLetterToLower(b) {
    return b.charAt(0).toLowerCase() + b.slice(1)
}

function toUCWord(b) {
    return b.replace(/\w\S*/g, function (b) {
        return b.charAt(0).toUpperCase() + b.substr(1)
    })
}

function formatText() {
    var b = arguments[0];
    if (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return b.replace(/{(\d+)}/g, function (b, e) {
            return typeof c[e] != "undefined" ? c[e] : b
        })
    }
    return ""
}

function generateImageFromUrl(b, c) {
    var d = RegExp(/avatar:\/\/([0-9a-zA-Z]+)\/([0-9a-zA-Z ]+)\/([0-9]+)/).exec(b);
    if (d && d.length == 4) Avatar.queueFrame(d[1], d[2], d[3], Avatar.totalFrames, c);
    else if (b == "avatar://spine") {
        var e = new Image;
        e.src = Sprites._blankImg;
        window.setTimeout(function () {
            c(e)
        }, 1)
    } else if (b.indexOf("spine://") == 0) {
        b = b.substring(8);
        d = JSON.parse(b);
        WinSpine.generatePreview(d.skeletonType, d.skeletonParts, function (b) {
            var d = new Image;
            d.src = b;
            c(d)
        })
    } else if (b.indexOf("block://") == 0) {
        var b = b.substring(8),
            f = b.lastIndexOf("/"),
            d = 1;
        if (f > 0) {
            d = parseFloat(b.substring(f + 1)) * 0.7;
            b = b.substring(0, f)
        }
        f = JSON.parse(b);
        f = ObjectIO.deserializeScriptStep(f);
        f.getImage(c, d)
    } else {
        if (b.indexOf(".svg") > 0) {
            e = new Image;
            e.onload = function () {
                var d = document.createElement("canvas");
                d.width = e.width;
                d.height = e.height;
                try {
                    canvg(d, b, {
                        renderCallback: function () {
                            var e = new Image;
                            if (c) {
                                e.onload = function () {
                                    c(e)
                                };
                                e.onerror = function () {
                                    e.onload = function () {
                                        c && c(e)
                                    };
                                    e.src = Sprites._blankImg
                                }
                            }
                            e.src = d.toDataURL("image/png");
                            e.origSrc = b
                        }
                    })
                } catch (f) {
                    var j =
                        new Image;
                    if (c) {
                        j.onload = function () {
                            c(j)
                        };
                        j.onerror = function () {
                            j.onload = function () {
                                c && c(j)
                            };
                            j.src = Sprites._blankImg
                        }
                    }
                    j.src = d.toDataURL("image/png");
                    j.origSrc = b
                }
            };
            e.onerror = function () {
                e.onload = function () {
                    c && c(e)
                };
                e.src = Sprites._blankImg
            }
        } else {
            e = new Image;
            if (c) {
                e.onload = function () {
                    c(e)
                };
                e.onerror = function () {
                    e.src = "ide/imgs/blank.png"
                }
            }
        }
        e.src = b
    }
}

function loadJs(b) {
    var c = document.createElement("script");
    c.setAttribute("type", "text/javascript");
    c.setAttribute("src", b);
    document.getElementsByTagName("head")[0].appendChild(c)
}

function timeDifference(b) {
    var b = b * 1E3,
        c = Date.now() - b;
    if (c < 0) {
        b = Date.now();
        c = 0
    }
    b = new Date(b);
    if (c < 36E5) {
        c = Math.round(c / 6E4);
        return c == 1 ? "1 min ago" : c + " mins ago"
    }
    if (c < 864E5) {
        c = Math.round(c / 36E5);
        return c == 1 ? "1 hour ago" : c + " hours ago"
    }
    return c < 2592E6 && Math.round(c / 864E5) == 1 ? "yesterday" : b.getMonth() + 1 + "/" + b.getDate() + "/" + b.getFullYear()
}

function cloneObj(b) {
    if (b == null || typeof b != "object") return b;
    var c = new b.constructor,
        d;
    for (d in b) c[d] = cloneObj(b[d]);
    return c
}
window.g_loc || (g_loc = {
    loctext: {}
});
g_loc.loadLocale = function (b, c, d, e, f) {
    $.ajax({
        url: b,
        success: function (b) {
            var b = JSON.parse(b),
                h = b["default"];
            if (b[c])
                for (var j in b[c]) h[j] = b[c][j];
            if (b[c + "-" + d])
                for (j in b[c + "-" + d]) h[j] = b[c + "-" + d][j];
            if (!f)
                for (j in h) g_loc.loctext[j] = h[j];
            e && e(h)
        }
    })
};
g_loc.formatText = function () {
    var b = arguments[0],
        c = Array.prototype.slice.call(arguments, 1),
        d = g_loc.loctext[b];
    return b && d ? d.replace(/{(\d+)}/g, function (b, d) {
        d = parseInt(d);
        return typeof c[d - 1] != "undefined" ? "" + c[d - 1] : b
    }) : ""
};
g_loc.formatTextDefault = function () {
    var b = arguments[0],
        c = arguments[1],
        d = Array.prototype.slice.call(arguments, 2),
        e = g_loc.loctext[b];
    return b && e ? e.replace(/{(\d+)}/g, function (b, c) {
        c = parseInt(c);
        return typeof d[c - 1] != "undefined" ? "" + d[c - 1] : b
    }) : c ? c.replace(/{(\d+)}/g, function (b, c) {
        c = parseInt(c);
        return typeof d[c - 1] != "undefined" ? "" + d[c - 1] : b
    }) : b
};
g_loc.formatDate = function () { };
g_loc.formatNumber = function () { };
g_loc.formatCurrency = function () { };
g_loc.getText = function (b, c) {
    return !g_loc.loctext[b] ? c : g_loc.loctext[b]
};

function ff_matchTolerance(b, c, d) {
    var e = c.data[d],
        f = c.data[d + 1],
        g = c.data[d + 2],
        c = c.data[d + 3];
    return e >= b[0] && (e <= b[4] && f >= b[1] && f <= b[5] && g >= b[2] && g <= b[6] && c >= b[3] && c <= b[7]) && !(e == b[8] && f == b[9] && g == b[10] && c == 255)
}

function ff_floodFill(b, c, d, e, f) {
    var b = Math.floor(b),
        c = Math.floor(c),
        g = [
            [b, c]
        ],
        h = d.canvas.width,
        j = d.canvas.height,
        k = (c * h + b) * 4,
        l = d.getImageData(0, 0, h, j);
    if (e.charAt(0) == "#") {
        e = e.substring(1, 7);
        e = [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)]
    } else if (e.substring(0, 4) == "rgb(") {
        e = e.substring(4, e.length - 1).split(",");
        e = [parseInt(e[0].trim()), parseInt(e[1].trim()), parseInt(e[2].trim())]
    } else return;
    for (f = [l.data[k] - f, l.data[k + 1] - f, l.data[k + 2] - f, l.data[k + 3] - f,
            l.data[k] + f, l.data[k + 1] + f, l.data[k + 2] + f, l.data[k + 3] + f, e[0], e[1], e[2]
    ]; g.length;) {
        c = g.pop();
        b = c[0];
        c = c[1];
        for (k = (c * h + b) * 4; c-- >= 0 && ff_matchTolerance(f, l, k) ;) k = k - h * 4;
        k = k + h * 4;
        ++c;
        for (var m = false, n = false; c++ < j - 1 && ff_matchTolerance(f, l, k) ;) {
            l.data[k] = e[0];
            l.data[k + 1] = e[1];
            l.data[k + 2] = e[2];
            l.data[k + 3] = 255;
            if (b > 0)
                if (ff_matchTolerance(f, l, k - 4)) {
                    if (!m) {
                        g.push([b - 1, c]);
                        m = true
                    }
                } else m && (m = false);
            if (b < h - 1)
                if (ff_matchTolerance(f, l, k + 4)) {
                    if (!n) {
                        g.push([b + 1, c]);
                        n = true
                    }
                } else if (ff_matchTolerance(f, l, k + 4 - h * 4)) {
                    if (!m) {
                        g.push([b +
                            1, c - 1
                        ]);
                        m = true
                    }
                } else n && (n = false);
            k = k + h * 4
        }
    }
    d.putImageData(l, 0, 0)
}

var cornerRadius = 2,
    labelRadius = 6,
    labelAnyRadius = 3,
    labelStrokeWidth = 1,
    minLabelHeight = 11,
    minLabelWidth = 80,
    labelHorzPadding = 3,
    labelVertPadding = 2,
    labelBottomPadding = 4,
    slotHeight = 6,
    slotWidth = 20,
    slotTaper = 2,
    slotBegin = 20,
    startBlockTopHeight = 7,
    startBlockTopWidth = 40,
    startBlockRadius = 18,
    emptyContainerHeight = 15,
    containerSeparator = 10,
    containerLeft = 15,
    defaultStepOutlineColor = "#fff",
    defaultStepColor = "#ccc",
    defaultStepFontColor = "#000",
    defaultFontCommentColor = "#020",
    defaultFontColor = "#fff",
    defaultInputFontColor =
    "#333333",
    defaultInputFontColorFocus = "#fff",
    defaultInputBgColor = "rgba(255,255,255,.7)",
    defaultInputBgColorFocus = "rgba(255,255,255,.9)",
    defaultInputLineColor = "rgba(255,255,255,.7)",
    defaultInputCodeFontColor = "#404040",
    defaultInputCodeFontColorFocus = "#fff",
    defaultInputCodeBgColor = "#fff",
    defaultInputCodeBgColorFocus = "#fff",
    defaultInputCodeLineColor = "rgba(0,0,0,.7)",
    defaultLabelFontWeight = "normal",
    defaultLabelFont = "Open Sans",
    defaultCodeLabelFont = "Droid Sans Mono",
    defaultLabelFontSize = 13,
    defaultLabelInputFontWeight =
    "normal",
    defaultLabelInputFont = "Open Sans",
    defaultCodeLabelInputFont = "Droid Sans Mono",
    defaultLabelInputFontSize = 13,
    defaultLabelColor = "#999",
    defaultLabelOutlineColor = "#666",
    defaultLabelLeftPadding = 4,
    slotSelectionBounds = 10,
    valueSelectionBounds = 10,
    selectionBgColor = "#E6E6FA",
    selectionStrokeColor = "#000",
    selectionTextColor = "#000",
    selectionWidth = 4,
    outlineColor = "#0f0",
    outlineWidth = 10,
    dropdownColor = "#fff",
    buttonStrokeColor = "#dc8425",
    buttonFillColor = "#fac206",
    buttonAddLabel = " + ",
    buttonRemoveLabel = " - ",
    buttonEditLabel =
    "edit",
    noteFontHeight = 12,
    noteFont = "Arial",
    notePadding = 4,
    checkboxWidth = 14,
    checkboxHeight = 14,
    checkboxPadRight = 6,
    checkboxOffset = 4,
    bubblePadding = 10,
    bubbleFontLinePadding = 4,
    buttonOffsetX = 0,
    buttonOffsetY = 14,
    buttonPadding = 4,
    buttonSidePadding = 10,
    buttonSkew = 4,
    windowPadding = 0,
    windowBorder = 4,
    resMargin = 4,
    resPadding = 4,
    resBorder = 1,
    disabledBlockAlpha = 0.2,
    disabledLabelAlpha = 0.1,
    disabledFillColor = "#555",
    disabledStrokeColor = "#ccc",
    hilightFillColor = "#0f0",
    hilightStrokeColor = "#0f0",
    hilightShadowColor = "#0f0",
    blockLabelColor =
    "#ffffff",
    blockStrokeColor = "rgba(0,0,0,.1)",
    g_defaultStepColor = ["#e85c41", "#e85c41", "rgba(0,0,0,.1)", "#fff", !1],
    g_catColor = {
        common: ["#db5800", "#db5800", "rgba(0,0,0,.1)", "#fff", !1],
        events: ["#f7990f", "#f7990f", "rgba(0,0,0,.1)", "#fff", !1],
        flow: ["#db5800", "#db5800", "rgba(0,0,0,.1)", "#fff", !1],
        library: ["#0f59ae", "#0f59ae", "rgba(0,0,0,.1)", "#fff", !1],
        motion: ["#3067e2", "#3067e2", "rgba(0,0,0,.1)", "#fff", !1],
        animation: ["#04a8a8", "#04a8a8", "rgba(0,0,0,.1)", "#fff", !1],
        looks: ["#6050a5", "#6050a5", "rgba(0,0,0,.1)",
            "#fff", !1
        ],
        looksbg: ["#6050a5", "#6050a5", "rgba(0,0,0,.1)", "#fff", !1],
        particles: ["#9d2ed3", "#9d2ed3", "rgba(0,0,0,.1)", "#fff", !1],
        sensing: ["#4e8cc4", "#4e8cc4", "rgba(0,0,0,.1)", "#fff", !1],
        sound: ["#9e49b2", "#9e49b2", "rgba(0,0,0,.1)", "#fff", !1],
        operator: ["#5fad3e", "#5fad3e", "rgba(0,0,0,.1)", "#fff", !1],
        pen: ["#2b995d", "#2b995d", "rgba(0,0,0,.1)", "#fff", !1],
        physics: ["#cc4848", "#cc4848", "rgba(0,0,0,.1)", "#fff", !1],
        "var": ["#b56684", "#b56684", "rgba(0,0,0,.1)", "#fff", !1],
        variables: ["#b56684", "#b56684", "rgba(0,0,0,.1)",
            "#fff", !1
        ],
        localvar: ["#b56684", "#b56684", "rgba(0,0,0,.1)", "#fff", !1],
        properties: ["#b56684", "#b56684", "rgba(0,0,0,.1)", "#fff", !1],
        comment: ["#ffffeb", "#ffffeb", "rgba(0,0,0,.1)", "#fff", !1],
        list: ["#cc5a5a", "#cc5a5a", "rgba(0,0,0,.1)", "#fff", !1],
        obj: ["#cc5a5a", "#cc5a5a", "rgba(0,0,0,.1)", "#fff", !1],
        functions: ["#857bc6", "#857bc6", "rgba(0,0,0,.1)", "#fff", !1],
        network: ["#db5800", "#db5800", "rgba(0,0,0,.1)", "#fff", !1],
        system: ["#db5800", "#db5800", "rgba(0,0,0,.1)", "#fff", !1],
        hardware: ["#4f8738", "#4f8738", "rgba(0,0,0,.1)",
            "#fff", !1
        ],
        mcpe: ["#af7c4f", "#af7c4f", "rgba(0,0,0,.1)", "#fff", !1],
        nop: ["#333333", "#333333", "rgba(0,0,0,.1)", "#fff", !1],
        player: ["#3bb5af", "#3bb5af", "rgba(0,0,0,.1)", "#fff", !1],
        world: ["#9d2ed3", "#9d2ed3", "rgba(0,0,0,.1)", "#fff", !1],
        block: ["#907eff", "#907eff", "rgba(0,0,0,.1)", "#fff", !1],
        drone: ["#0f59ae", "#0f59ae", "rgba(0,0,0,.1)", "#fff", !1],
        inventory: ["#ee4a4b", "#ee4a4b", "rgba(0,0,0,.1)", "#fff", !1],
        utilities: ["#0f59ae", "#0f59ae", "rgba(0,0,0,.1)", "#fff", !1]
    },
    g_blockCodeColor = ["#404969", "#404969", "rgba(0,0,0,.1)",
        "#fff", !1
    ];
embedUrl = "ide/embedded?p=";
shareUrl = "/play?p=";
var g_ord = " 1st 2nd 3rd 4th 5th 6th 7th 8th 9th 10th".split(" ");
helpHoverTimeout = 2E3;
videoUpdateInterval = 100;
undoLimit = 50;
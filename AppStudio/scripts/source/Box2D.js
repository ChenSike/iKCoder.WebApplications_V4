var Box2D = {};
(function (b, c) {
    function d() { } !(Object.prototype.defineProperty instanceof Function) && (Object.prototype.__defineGetter__ instanceof Function && Object.prototype.__defineSetter__ instanceof Function) && (Object.defineProperty = function (b, c, d) {
        d.get instanceof Function && b.__defineGetter__(c, d.get);
        d.set instanceof Function && b.__defineSetter__(c, d.set)
    });
    b.inherit = function (b, c) {
        d.prototype = c.prototype;
        b.prototype = new d;
        b.prototype.constructor = b
    };
    b.generateCallback = function (b, c) {
        return function () {
            c.apply(b,
                arguments)
        }
    };
    b.NVector = function (b) {
        b === c && (b = 0);
        for (var d = Array(b || 0), g = 0; g < b; ++g) d[g] = 0;
        return d
    };
    b.is = function (b, d) {
        return b === null ? false : d instanceof Function && b instanceof d || b.constructor.__implements != c && b.constructor.__implements[d] ? true : false
    };
    b.parseUInt = function (b) {
        return Math.abs(parseInt(b))
    }
})(Box2D);
var Vector = Array,
    Vector_a2j_Number = Box2D.NVector;
"undefined" === typeof Box2D && (Box2D = {});
"undefined" === typeof Box2D.Collision && (Box2D.Collision = {});
"undefined" === typeof Box2D.Collision.Shapes && (Box2D.Collision.Shapes = {});
"undefined" === typeof Box2D.Common && (Box2D.Common = {});
"undefined" === typeof Box2D.Common.Math && (Box2D.Common.Math = {});
"undefined" === typeof Box2D.Dynamics && (Box2D.Dynamics = {});
"undefined" === typeof Box2D.Dynamics.Contacts && (Box2D.Dynamics.Contacts = {});
"undefined" === typeof Box2D.Dynamics.Controllers && (Box2D.Dynamics.Controllers = {});
"undefined" === typeof Box2D.Dynamics.Joints && (Box2D.Dynamics.Joints = {});
(function () {
    function b() {
        b.b2AABB.apply(this, arguments)
    }

    function c() {
        c.b2Bound.apply(this, arguments)
    }

    function d() {
        d.b2BoundValues.apply(this, arguments);
        this.constructor === d && this.b2BoundValues.apply(this, arguments)
    }

    function e() {
        e.b2Collision.apply(this, arguments)
    }

    function f() {
        f.b2ContactID.apply(this, arguments);
        this.constructor === f && this.b2ContactID.apply(this, arguments)
    }

    function g() {
        g.b2ContactPoint.apply(this, arguments)
    }

    function h() {
        h.b2Distance.apply(this, arguments)
    }

    function j() {
        j.b2DistanceInput.apply(this,
            arguments)
    }

    function k() {
        k.b2DistanceOutput.apply(this, arguments)
    }

    function l() {
        l.b2DistanceProxy.apply(this, arguments)
    }

    function m() {
        m.b2DynamicTree.apply(this, arguments);
        this.constructor === m && this.b2DynamicTree.apply(this, arguments)
    }

    function n() {
        n.b2DynamicTreeBroadPhase.apply(this, arguments)
    }

    function q() {
        q.b2DynamicTreeNode.apply(this, arguments)
    }

    function p() {
        p.b2DynamicTreePair.apply(this, arguments)
    }

    function s() {
        s.b2Manifold.apply(this, arguments);
        this.constructor === s && this.b2Manifold.apply(this, arguments)
    }

    function r() {
        r.b2ManifoldPoint.apply(this, arguments);
        this.constructor === r && this.b2ManifoldPoint.apply(this, arguments)
    }

    function o() {
        o.b2Point.apply(this, arguments)
    }

    function t() {
        t.b2RayCastInput.apply(this, arguments);
        this.constructor === t && this.b2RayCastInput.apply(this, arguments)
    }

    function u() {
        u.b2RayCastOutput.apply(this, arguments)
    }

    function w() {
        w.b2Segment.apply(this, arguments)
    }

    function z() {
        z.b2SeparationFunction.apply(this, arguments)
    }

    function A() {
        A.b2Simplex.apply(this, arguments);
        this.constructor ===
            A && this.b2Simplex.apply(this, arguments)
    }

    function C() {
        C.b2SimplexCache.apply(this, arguments)
    }

    function G() {
        G.b2SimplexVertex.apply(this, arguments)
    }

    function H() {
        H.b2TimeOfImpact.apply(this, arguments)
    }

    function K() {
        K.b2TOIInput.apply(this, arguments)
    }

    function P() {
        P.b2WorldManifold.apply(this, arguments);
        this.constructor === P && this.b2WorldManifold.apply(this, arguments)
    }

    function T() {
        T.ClipVertex.apply(this, arguments)
    }

    function D() {
        D.Features.apply(this, arguments)
    }

    function F() {
        F.b2CircleShape.apply(this, arguments);
        this.constructor === F && this.b2CircleShape.apply(this, arguments)
    }

    function I() {
        I.b2EdgeChainDef.apply(this, arguments);
        this.constructor === I && this.b2EdgeChainDef.apply(this, arguments)
    }

    function J() {
        J.b2EdgeShape.apply(this, arguments);
        this.constructor === J && this.b2EdgeShape.apply(this, arguments)
    }

    function N() {
        N.b2MassData.apply(this, arguments)
    }

    function U() {
        U.b2PolygonShape.apply(this, arguments);
        this.constructor === U && this.b2PolygonShape.apply(this, arguments)
    }

    function Q() {
        Q.b2Shape.apply(this, arguments);
        this.constructor ===
            Q && this.b2Shape.apply(this, arguments)
    }

    function B() {
        B.b2Color.apply(this, arguments);
        this.constructor === B && this.b2Color.apply(this, arguments)
    }

    function E() {
        E.b2Settings.apply(this, arguments)
    }

    function Z() {
        Z.b2Mat22.apply(this, arguments);
        this.constructor === Z && this.b2Mat22.apply(this, arguments)
    }

    function O() {
        O.b2Mat33.apply(this, arguments);
        this.constructor === O && this.b2Mat33.apply(this, arguments)
    }

    function M() {
        M.b2Math.apply(this, arguments)
    }

    function X() {
        X.b2Sweep.apply(this, arguments)
    }

    function aa() {
        aa.b2Transform.apply(this,
            arguments);
        this.constructor === aa && this.b2Transform.apply(this, arguments)
    }

    function Y() {
        Y.b2Vec2.apply(this, arguments);
        this.constructor === Y && this.b2Vec2.apply(this, arguments)
    }

    function ba() {
        ba.b2Vec3.apply(this, arguments);
        this.constructor === ba && this.b2Vec3.apply(this, arguments)
    }

    function da() {
        da.b2Body.apply(this, arguments);
        this.constructor === da && this.b2Body.apply(this, arguments)
    }

    function ra() {
        ra.b2BodyDef.apply(this, arguments);
        this.constructor === ra && this.b2BodyDef.apply(this, arguments)
    }

    function x() {
        x.b2ContactFilter.apply(this,
            arguments)
    }

    function ja() {
        ja.b2ContactImpulse.apply(this, arguments)
    }

    function ka() {
        ka.b2ContactListener.apply(this, arguments)
    }

    function oa() {
        oa.b2ContactManager.apply(this, arguments);
        this.constructor === oa && this.b2ContactManager.apply(this, arguments)
    }

    function pa() {
        pa.b2DebugDraw.apply(this, arguments);
        this.constructor === pa && this.b2DebugDraw.apply(this, arguments)
    }

    function V() {
        V.b2DestructionListener.apply(this, arguments)
    }

    function va() {
        va.b2FilterData.apply(this, arguments)
    }

    function ta() {
        ta.b2Fixture.apply(this,
            arguments);
        this.constructor === ta && this.b2Fixture.apply(this, arguments)
    }

    function sa() {
        sa.b2FixtureDef.apply(this, arguments);
        this.constructor === sa && this.b2FixtureDef.apply(this, arguments)
    }

    function Da() {
        Da.b2Island.apply(this, arguments);
        this.constructor === Da && this.b2Island.apply(this, arguments)
    }

    function L() {
        L.b2TimeStep.apply(this, arguments)
    }

    function W() {
        W.b2World.apply(this, arguments);
        this.constructor === W && this.b2World.apply(this, arguments)
    }

    function fa() {
        fa.b2CircleContact.apply(this, arguments)
    }

    function R() {
        R.b2Contact.apply(this,
            arguments);
        this.constructor === R && this.b2Contact.apply(this, arguments)
    }

    function v() {
        v.b2ContactConstraint.apply(this, arguments);
        this.constructor === v && this.b2ContactConstraint.apply(this, arguments)
    }

    function Na() {
        Na.b2ContactConstraintPoint.apply(this, arguments)
    }

    function tb() {
        tb.b2ContactEdge.apply(this, arguments)
    }

    function kb() {
        kb.b2ContactFactory.apply(this, arguments);
        this.constructor === kb && this.b2ContactFactory.apply(this, arguments)
    }

    function ea() {
        ea.b2ContactRegister.apply(this, arguments)
    }

    function ma() {
        ma.b2ContactResult.apply(this,
            arguments)
    }

    function Ca() {
        Ca.b2ContactSolver.apply(this, arguments);
        this.constructor === Ca && this.b2ContactSolver.apply(this, arguments)
    }

    function ub() {
        ub.b2EdgeAndCircleContact.apply(this, arguments)
    }

    function Va() {
        Va.b2NullContact.apply(this, arguments);
        this.constructor === Va && this.b2NullContact.apply(this, arguments)
    }

    function nb() {
        nb.b2PolyAndCircleContact.apply(this, arguments)
    }

    function xb() {
        xb.b2PolyAndEdgeContact.apply(this, arguments)
    }

    function Fa() {
        Fa.b2PolygonContact.apply(this, arguments)
    }

    function Sa() {
        Sa.b2PositionSolverManifold.apply(this,
            arguments);
        this.constructor === Sa && this.b2PositionSolverManifold.apply(this, arguments)
    }

    function bb() {
        bb.b2BuoyancyController.apply(this, arguments)
    }

    function Ta() {
        Ta.b2ConstantAccelController.apply(this, arguments)
    }

    function Aa() {
        Aa.b2ConstantForceController.apply(this, arguments)
    }

    function xa() {
        xa.b2Controller.apply(this, arguments)
    }

    function Hb() {
        Hb.b2ControllerEdge.apply(this, arguments)
    }

    function Ia() {
        Ia.b2GravityController.apply(this, arguments)
    }

    function qb() {
        qb.b2TensorDampingController.apply(this, arguments)
    }

    function Ma() {
        Ma.b2DistanceJoint.apply(this, arguments);
        this.constructor === Ma && this.b2DistanceJoint.apply(this, arguments)
    }

    function cb() {
        cb.b2DistanceJointDef.apply(this, arguments);
        this.constructor === cb && this.b2DistanceJointDef.apply(this, arguments)
    }

    function gb() {
        gb.b2FrictionJoint.apply(this, arguments);
        this.constructor === gb && this.b2FrictionJoint.apply(this, arguments)
    }

    function Qa() {
        Qa.b2FrictionJointDef.apply(this, arguments);
        this.constructor === Qa && this.b2FrictionJointDef.apply(this, arguments)
    }

    function qa() {
        qa.b2GearJoint.apply(this,
            arguments);
        this.constructor === qa && this.b2GearJoint.apply(this, arguments)
    }

    function za() {
        za.b2GearJointDef.apply(this, arguments);
        this.constructor === za && this.b2GearJointDef.apply(this, arguments)
    }

    function ua() {
        ua.b2Jacobian.apply(this, arguments)
    }

    function hb() {
        hb.b2Joint.apply(this, arguments);
        this.constructor === hb && this.b2Joint.apply(this, arguments)
    }

    function Ka() {
        Ka.b2JointDef.apply(this, arguments);
        this.constructor === Ka && this.b2JointDef.apply(this, arguments)
    }

    function Pa() {
        Pa.b2JointEdge.apply(this, arguments)
    }

    function yb() {
        yb.b2LineJoint.apply(this, arguments);
        this.constructor === yb && this.b2LineJoint.apply(this, arguments)
    }

    function na() {
        na.b2LineJointDef.apply(this, arguments);
        this.constructor === na && this.b2LineJointDef.apply(this, arguments)
    }

    function Fb() {
        Fb.b2MouseJoint.apply(this, arguments);
        this.constructor === Fb && this.b2MouseJoint.apply(this, arguments)
    }

    function Ja() {
        Ja.b2MouseJointDef.apply(this, arguments);
        this.constructor === Ja && this.b2MouseJointDef.apply(this, arguments)
    }

    function db() {
        db.b2PrismaticJoint.apply(this,
            arguments);
        this.constructor === db && this.b2PrismaticJoint.apply(this, arguments)
    }

    function Ib() {
        Ib.b2PrismaticJointDef.apply(this, arguments);
        this.constructor === Ib && this.b2PrismaticJointDef.apply(this, arguments)
    }

    function Ab() {
        Ab.b2PulleyJoint.apply(this, arguments);
        this.constructor === Ab && this.b2PulleyJoint.apply(this, arguments)
    }

    function vb() {
        vb.b2PulleyJointDef.apply(this, arguments);
        this.constructor === vb && this.b2PulleyJointDef.apply(this, arguments)
    }

    function ob() {
        ob.b2RevoluteJoint.apply(this, arguments);
        this.constructor === ob && this.b2RevoluteJoint.apply(this, arguments)
    }

    function Ga() {
        Ga.b2RevoluteJointDef.apply(this, arguments);
        this.constructor === Ga && this.b2RevoluteJointDef.apply(this, arguments)
    }

    function Ha() {
        Ha.b2WeldJoint.apply(this, arguments);
        this.constructor === Ha && this.b2WeldJoint.apply(this, arguments)
    }

    function pb() {
        pb.b2WeldJointDef.apply(this, arguments);
        this.constructor === pb && this.b2WeldJointDef.apply(this, arguments)
    }
    Box2D.Collision.IBroadPhase = "Box2D.Collision.IBroadPhase";
    Box2D.Collision.b2AABB =
        b;
    Box2D.Collision.b2Bound = c;
    Box2D.Collision.b2BoundValues = d;
    Box2D.Collision.b2Collision = e;
    Box2D.Collision.b2ContactID = f;
    Box2D.Collision.b2ContactPoint = g;
    Box2D.Collision.b2Distance = h;
    Box2D.Collision.b2DistanceInput = j;
    Box2D.Collision.b2DistanceOutput = k;
    Box2D.Collision.b2DistanceProxy = l;
    Box2D.Collision.b2DynamicTree = m;
    Box2D.Collision.b2DynamicTreeBroadPhase = n;
    Box2D.Collision.b2DynamicTreeNode = q;
    Box2D.Collision.b2DynamicTreePair = p;
    Box2D.Collision.b2Manifold = s;
    Box2D.Collision.b2ManifoldPoint = r;
    Box2D.Collision.b2Point =
        o;
    Box2D.Collision.b2RayCastInput = t;
    Box2D.Collision.b2RayCastOutput = u;
    Box2D.Collision.b2Segment = w;
    Box2D.Collision.b2SeparationFunction = z;
    Box2D.Collision.b2Simplex = A;
    Box2D.Collision.b2SimplexCache = C;
    Box2D.Collision.b2SimplexVertex = G;
    Box2D.Collision.b2TimeOfImpact = H;
    Box2D.Collision.b2TOIInput = K;
    Box2D.Collision.b2WorldManifold = P;
    Box2D.Collision.ClipVertex = T;
    Box2D.Collision.Features = D;
    Box2D.Collision.Shapes.b2CircleShape = F;
    Box2D.Collision.Shapes.b2EdgeChainDef = I;
    Box2D.Collision.Shapes.b2EdgeShape = J;
    Box2D.Collision.Shapes.b2MassData =
        N;
    Box2D.Collision.Shapes.b2PolygonShape = U;
    Box2D.Collision.Shapes.b2Shape = Q;
    Box2D.Common.b2internal = "Box2D.Common.b2internal";
    Box2D.Common.b2Color = B;
    Box2D.Common.b2Settings = E;
    Box2D.Common.Math.b2Mat22 = Z;
    Box2D.Common.Math.b2Mat33 = O;
    Box2D.Common.Math.b2Math = M;
    Box2D.Common.Math.b2Sweep = X;
    Box2D.Common.Math.b2Transform = aa;
    Box2D.Common.Math.b2Vec2 = Y;
    Box2D.Common.Math.b2Vec3 = ba;
    Box2D.Dynamics.b2Body = da;
    Box2D.Dynamics.b2BodyDef = ra;
    Box2D.Dynamics.b2ContactFilter = x;
    Box2D.Dynamics.b2ContactImpulse = ja;
    Box2D.Dynamics.b2ContactListener =
        ka;
    Box2D.Dynamics.b2ContactManager = oa;
    Box2D.Dynamics.b2DebugDraw = pa;
    Box2D.Dynamics.b2DestructionListener = V;
    Box2D.Dynamics.b2FilterData = va;
    Box2D.Dynamics.b2Fixture = ta;
    Box2D.Dynamics.b2FixtureDef = sa;
    Box2D.Dynamics.b2Island = Da;
    Box2D.Dynamics.b2TimeStep = L;
    Box2D.Dynamics.b2World = W;
    Box2D.Dynamics.Contacts.b2CircleContact = fa;
    Box2D.Dynamics.Contacts.b2Contact = R;
    Box2D.Dynamics.Contacts.b2ContactConstraint = v;
    Box2D.Dynamics.Contacts.b2ContactConstraintPoint = Na;
    Box2D.Dynamics.Contacts.b2ContactEdge = tb;
    Box2D.Dynamics.Contacts.b2ContactFactory =
        kb;
    Box2D.Dynamics.Contacts.b2ContactRegister = ea;
    Box2D.Dynamics.Contacts.b2ContactResult = ma;
    Box2D.Dynamics.Contacts.b2ContactSolver = Ca;
    Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = ub;
    Box2D.Dynamics.Contacts.b2NullContact = Va;
    Box2D.Dynamics.Contacts.b2PolyAndCircleContact = nb;
    Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = xb;
    Box2D.Dynamics.Contacts.b2PolygonContact = Fa;
    Box2D.Dynamics.Contacts.b2PositionSolverManifold = Sa;
    Box2D.Dynamics.Controllers.b2BuoyancyController = bb;
    Box2D.Dynamics.Controllers.b2ConstantAccelController =
        Ta;
    Box2D.Dynamics.Controllers.b2ConstantForceController = Aa;
    Box2D.Dynamics.Controllers.b2Controller = xa;
    Box2D.Dynamics.Controllers.b2ControllerEdge = Hb;
    Box2D.Dynamics.Controllers.b2GravityController = Ia;
    Box2D.Dynamics.Controllers.b2TensorDampingController = qb;
    Box2D.Dynamics.Joints.b2DistanceJoint = Ma;
    Box2D.Dynamics.Joints.b2DistanceJointDef = cb;
    Box2D.Dynamics.Joints.b2FrictionJoint = gb;
    Box2D.Dynamics.Joints.b2FrictionJointDef = Qa;
    Box2D.Dynamics.Joints.b2GearJoint = qa;
    Box2D.Dynamics.Joints.b2GearJointDef = za;
    Box2D.Dynamics.Joints.b2Jacobian = ua;
    Box2D.Dynamics.Joints.b2Joint = hb;
    Box2D.Dynamics.Joints.b2JointDef = Ka;
    Box2D.Dynamics.Joints.b2JointEdge = Pa;
    Box2D.Dynamics.Joints.b2LineJoint = yb;
    Box2D.Dynamics.Joints.b2LineJointDef = na;
    Box2D.Dynamics.Joints.b2MouseJoint = Fb;
    Box2D.Dynamics.Joints.b2MouseJointDef = Ja;
    Box2D.Dynamics.Joints.b2PrismaticJoint = db;
    Box2D.Dynamics.Joints.b2PrismaticJointDef = Ib;
    Box2D.Dynamics.Joints.b2PulleyJoint = Ab;
    Box2D.Dynamics.Joints.b2PulleyJointDef = vb;
    Box2D.Dynamics.Joints.b2RevoluteJoint =
        ob;
    Box2D.Dynamics.Joints.b2RevoluteJointDef = Ga;
    Box2D.Dynamics.Joints.b2WeldJoint = Ha;
    Box2D.Dynamics.Joints.b2WeldJointDef = pb
})();
Box2D.postDefs = [];
(function () {
    var b = Box2D.Collision.Shapes.b2CircleShape,
        c = Box2D.Collision.Shapes.b2PolygonShape,
        d = Box2D.Collision.Shapes.b2Shape,
        e = Box2D.Common.b2Settings,
        f = Box2D.Common.Math.b2Math,
        g = Box2D.Common.Math.b2Sweep,
        h = Box2D.Common.Math.b2Transform,
        j = Box2D.Common.Math.b2Vec2,
        k = Box2D.Collision.b2AABB,
        l = Box2D.Collision.b2Bound,
        m = Box2D.Collision.b2BoundValues,
        n = Box2D.Collision.b2Collision,
        q = Box2D.Collision.b2ContactID,
        p = Box2D.Collision.b2ContactPoint,
        s = Box2D.Collision.b2Distance,
        r = Box2D.Collision.b2DistanceInput,
        o = Box2D.Collision.b2DistanceOutput,
        t = Box2D.Collision.b2DistanceProxy,
        u = Box2D.Collision.b2DynamicTree,
        w = Box2D.Collision.b2DynamicTreeBroadPhase,
        z = Box2D.Collision.b2DynamicTreeNode,
        A = Box2D.Collision.b2DynamicTreePair,
        C = Box2D.Collision.b2Manifold,
        G = Box2D.Collision.b2ManifoldPoint,
        H = Box2D.Collision.b2Point,
        K = Box2D.Collision.b2RayCastInput,
        P = Box2D.Collision.b2RayCastOutput,
        T = Box2D.Collision.b2Segment,
        D = Box2D.Collision.b2SeparationFunction,
        F = Box2D.Collision.b2Simplex,
        I = Box2D.Collision.b2SimplexCache,
        J =
        Box2D.Collision.b2SimplexVertex,
        N = Box2D.Collision.b2TimeOfImpact,
        U = Box2D.Collision.b2TOIInput,
        Q = Box2D.Collision.b2WorldManifold,
        B = Box2D.Collision.ClipVertex,
        E = Box2D.Collision.Features,
        Z = Box2D.Collision.IBroadPhase;
    k.b2AABB = function () {
        this.lowerBound = new j;
        this.upperBound = new j
    };
    k.prototype.IsValid = function () {
        var b = this.upperBound.y - this.lowerBound.y;
        return this.upperBound.x - this.lowerBound.x >= 0 && b >= 0 && this.lowerBound.IsValid() && this.upperBound.IsValid()
    };
    k.prototype.GetCenter = function () {
        return new j((this.lowerBound.x +
            this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2)
    };
    k.prototype.GetExtents = function () {
        return new j((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2)
    };
    k.prototype.Contains = function (b) {
        return this.lowerBound.x <= b.lowerBound.x && this.lowerBound.y <= b.lowerBound.y && b.upperBound.x <= this.upperBound.x && b.upperBound.y <= this.upperBound.y
    };
    k.prototype.RayCast = function (b, c) {
        var d = -Number.MAX_VALUE,
            e = Number.MAX_VALUE,
            f = c.p1.x,
            g = c.p1.y,
            h = c.p2.x - c.p1.x,
            j = c.p2.y - c.p1.y,
            k =
            Math.abs(j),
            l = b.normal,
            m = 0,
            o = 0,
            n = 0;
        if (Math.abs(h) < Number.MIN_VALUE) {
            if (f < this.lowerBound.x || this.upperBound.x < f) return false
        } else {
            m = 1 / h;
            o = (this.lowerBound.x - f) * m;
            m = (this.upperBound.x - f) * m;
            n = -1;
            if (o > m) {
                n = o;
                o = m;
                m = n;
                n = 1
            }
            if (o > d) {
                l.x = n;
                l.y = 0;
                d = o
            }
            e = Math.min(e, m);
            if (d > e) return false
        }
        if (k < Number.MIN_VALUE) {
            if (g < this.lowerBound.y || this.upperBound.y < g) return false
        } else {
            m = 1 / j;
            o = (this.lowerBound.y - g) * m;
            m = (this.upperBound.y - g) * m;
            n = -1;
            if (o > m) {
                n = o;
                o = m;
                m = n;
                n = 1
            }
            if (o > d) {
                l.y = n;
                l.x = 0;
                d = o
            }
            e = Math.min(e, m);
            if (d > e) return false
        }
        b.fraction =
            d;
        return true
    };
    k.prototype.TestOverlap = function (b) {
        var c = b.lowerBound.y - this.upperBound.y,
            d = this.lowerBound.y - b.upperBound.y;
        return b.lowerBound.x - this.upperBound.x > 0 || c > 0 || this.lowerBound.x - b.upperBound.x > 0 || d > 0 ? false : true
    };
    k.Combine = function (b, c) {
        var d = new k;
        d.Combine(b, c);
        return d
    };
    k.prototype.Combine = function (b, c) {
        this.lowerBound.x = Math.min(b.lowerBound.x, c.lowerBound.x);
        this.lowerBound.y = Math.min(b.lowerBound.y, c.lowerBound.y);
        this.upperBound.x = Math.max(b.upperBound.x, c.upperBound.x);
        this.upperBound.y =
            Math.max(b.upperBound.y, c.upperBound.y)
    };
    l.b2Bound = function () { };
    l.prototype.IsLower = function () {
        return (this.value & 1) == 0
    };
    l.prototype.IsUpper = function () {
        return (this.value & 1) == 1
    };
    l.prototype.Swap = function (b) {
        var c = this.value,
            d = this.proxy,
            e = this.stabbingCount;
        this.value = b.value;
        this.proxy = b.proxy;
        this.stabbingCount = b.stabbingCount;
        b.value = c;
        b.proxy = d;
        b.stabbingCount = e
    };
    m.b2BoundValues = function () { };
    m.prototype.b2BoundValues = function () {
        this.lowerValues = new Vector_a2j_Number;
        this.lowerValues[0] = 0;
        this.lowerValues[1] =
            0;
        this.upperValues = new Vector_a2j_Number;
        this.upperValues[0] = 0;
        this.upperValues[1] = 0
    };
    n.b2Collision = function () { };
    n.ClipSegmentToLine = function (b, c, d, e) {
        e === void 0 && (e = 0);
        var f, g = 0;
        f = c[0];
        var h = f.v;
        f = c[1];
        var j = f.v,
            k = d.x * h.x + d.y * h.y - e;
        f = d.x * j.x + d.y * j.y - e;
        k <= 0 && b[g++].Set(c[0]);
        f <= 0 && b[g++].Set(c[1]);
        if (k * f < 0) {
            d = k / (k - f);
            f = b[g];
            f = f.v;
            f.x = h.x + d * (j.x - h.x);
            f.y = h.y + d * (j.y - h.y);
            f = b[g];
            f.id = (k > 0 ? c[0] : c[1]).id;
            ++g
        }
        return g
    };
    n.EdgeSeparation = function (b, c, d, e, f) {
        d === void 0 && (d = 0);
        parseInt(b.m_vertexCount);
        var g =
            b.m_vertices,
            b = b.m_normals,
            h = parseInt(e.m_vertexCount),
            j = e.m_vertices,
            k, l;
        k = c.R;
        l = b[d];
        b = k.col1.x * l.x + k.col2.x * l.y;
        e = k.col1.y * l.x + k.col2.y * l.y;
        k = f.R;
        var m = k.col1.x * b + k.col1.y * e;
        k = k.col2.x * b + k.col2.y * e;
        for (var o = 0, n = Number.MAX_VALUE, s = 0; s < h; ++s) {
            l = j[s];
            l = l.x * m + l.y * k;
            if (l < n) {
                n = l;
                o = s
            }
        }
        l = g[d];
        k = c.R;
        d = c.position.x + (k.col1.x * l.x + k.col2.x * l.y);
        c = c.position.y + (k.col1.y * l.x + k.col2.y * l.y);
        l = j[o];
        k = f.R;
        g = f.position.x + (k.col1.x * l.x + k.col2.x * l.y);
        f = f.position.y + (k.col1.y * l.x + k.col2.y * l.y);
        return (g - d) * b + (f - c) *
            e
    };
    n.FindMaxSeparation = function (b, c, d, e, f) {
        var g = parseInt(c.m_vertexCount),
            h = c.m_normals,
            j, k;
        k = f.R;
        j = e.m_centroid;
        var l = f.position.x + (k.col1.x * j.x + k.col2.x * j.y),
            m = f.position.y + (k.col1.y * j.x + k.col2.y * j.y);
        k = d.R;
        j = c.m_centroid;
        l = l - (d.position.x + (k.col1.x * j.x + k.col2.x * j.y));
        m = m - (d.position.y + (k.col1.y * j.x + k.col2.y * j.y));
        k = l * d.R.col1.x + m * d.R.col1.y;
        for (var m = l * d.R.col2.x + m * d.R.col2.y, l = 0, o = -Number.MAX_VALUE, s = 0; s < g; ++s) {
            j = h[s];
            j = j.x * k + j.y * m;
            if (j > o) {
                o = j;
                l = s
            }
        }
        h = n.EdgeSeparation(c, d, l, e, f);
        j = parseInt(l -
            1 >= 0 ? l - 1 : g - 1);
        k = n.EdgeSeparation(c, d, j, e, f);
        var m = parseInt(l + 1 < g ? l + 1 : 0),
            o = n.EdgeSeparation(c, d, m, e, f),
            p = 0,
            q = 0;
        if (k > h && k > o) {
            q = -1;
            s = j;
            p = k
        } else if (o > h) {
            q = 1;
            s = m;
            p = o
        } else {
            b[0] = l;
            return h
        }
        for (; ;) {
            l = q == -1 ? s - 1 >= 0 ? s - 1 : g - 1 : s + 1 < g ? s + 1 : 0;
            h = n.EdgeSeparation(c, d, l, e, f);
            if (h > p) {
                s = l;
                p = h
            } else break
        }
        b[0] = s;
        return p
    };
    n.FindIncidentEdge = function (b, c, d, e, f, g) {
        e === void 0 && (e = 0);
        parseInt(c.m_vertexCount);
        var h = c.m_normals,
            j = parseInt(f.m_vertexCount),
            c = f.m_vertices,
            f = f.m_normals,
            k;
        k = d.R;
        var d = h[e],
            h = k.col1.x * d.x + k.col2.x *
            d.y,
            l = k.col1.y * d.x + k.col2.y * d.y;
        k = g.R;
        d = k.col1.x * h + k.col1.y * l;
        l = k.col2.x * h + k.col2.y * l;
        h = d;
        k = 0;
        for (var m = Number.MAX_VALUE, o = 0; o < j; ++o) {
            d = f[o];
            d = h * d.x + l * d.y;
            if (d < m) {
                m = d;
                k = o
            }
        }
        f = parseInt(k);
        h = parseInt(f + 1 < j ? f + 1 : 0);
        j = b[0];
        d = c[f];
        k = g.R;
        j.v.x = g.position.x + (k.col1.x * d.x + k.col2.x * d.y);
        j.v.y = g.position.y + (k.col1.y * d.x + k.col2.y * d.y);
        j.id.features.referenceEdge = e;
        j.id.features.incidentEdge = f;
        j.id.features.incidentVertex = 0;
        j = b[1];
        d = c[h];
        k = g.R;
        j.v.x = g.position.x + (k.col1.x * d.x + k.col2.x * d.y);
        j.v.y = g.position.y + (k.col1.y *
            d.x + k.col2.y * d.y);
        j.id.features.referenceEdge = e;
        j.id.features.incidentEdge = h;
        j.id.features.incidentVertex = 1
    };
    n.MakeClipPointVector = function () {
        var b = new Vector(2);
        b[0] = new B;
        b[1] = new B;
        return b
    };
    n.CollidePolygons = function (b, c, d, f, g) {
        var h;
        b.m_pointCount = 0;
        var j = c.m_radius + f.m_radius;
        n.s_edgeAO[0] = 0;
        var k = n.FindMaxSeparation(n.s_edgeAO, c, d, f, g);
        h = n.s_edgeAO[0];
        if (!(k > j)) {
            var l;
            n.s_edgeBO[0] = 0;
            var m = n.FindMaxSeparation(n.s_edgeBO, f, g, c, d);
            l = n.s_edgeBO[0];
            if (!(m > j)) {
                var o = 0,
                    s = 0;
                if (m > 0.98 * k + 0.001) {
                    k = f;
                    f = c;
                    c = g;
                    o = l;
                    b.m_type = C.e_faceB;
                    s = 1
                } else {
                    k = c;
                    c = d;
                    d = g;
                    o = h;
                    b.m_type = C.e_faceA;
                    s = 0
                }
                h = n.s_incidentEdge;
                n.FindIncidentEdge(h, k, c, o, f, d);
                l = parseInt(k.m_vertexCount);
                var g = k.m_vertices,
                    k = g[o],
                    p;
                p = o + 1 < l ? g[parseInt(o + 1)] : g[0];
                o = n.s_localTangent;
                o.Set(p.x - k.x, p.y - k.y);
                o.Normalize();
                g = n.s_localNormal;
                g.x = o.y;
                g.y = -o.x;
                f = n.s_planePoint;
                f.Set(0.5 * (k.x + p.x), 0.5 * (k.y + p.y));
                m = n.s_tangent;
                l = c.R;
                m.x = l.col1.x * o.x + l.col2.x * o.y;
                m.y = l.col1.y * o.x + l.col2.y * o.y;
                var q = n.s_tangent2;
                q.x = -m.x;
                q.y = -m.y;
                o = n.s_normal;
                o.x = m.y;
                o.y = -m.x;
                var t = n.s_v11,
                    u = n.s_v12;
                t.x = c.position.x + (l.col1.x * k.x + l.col2.x * k.y);
                t.y = c.position.y + (l.col1.y * k.x + l.col2.y * k.y);
                u.x = c.position.x + (l.col1.x * p.x + l.col2.x * p.y);
                u.y = c.position.y + (l.col1.y * p.x + l.col2.y * p.y);
                c = o.x * t.x + o.y * t.y;
                l = m.x * u.x + m.y * u.y + j;
                p = n.s_clipPoints1;
                k = n.s_clipPoints2;
                u = n.ClipSegmentToLine(p, h, q, -m.x * t.x - m.y * t.y + j);
                if (!(u < 2)) {
                    u = n.ClipSegmentToLine(k, p, m, l);
                    if (!(u < 2)) {
                        b.m_localPlaneNormal.SetV(g);
                        b.m_localPoint.SetV(f);
                        for (f = g = 0; f < e.b2_maxManifoldPoints; ++f) {
                            h = k[f];
                            if (o.x * h.v.x + o.y * h.v.y -
                                c <= j) {
                                m = b.m_points[g];
                                l = d.R;
                                q = h.v.x - d.position.x;
                                t = h.v.y - d.position.y;
                                m.m_localPoint.x = q * l.col1.x + t * l.col1.y;
                                m.m_localPoint.y = q * l.col2.x + t * l.col2.y;
                                m.m_id.Set(h.id);
                                m.m_id.features.flip = s;
                                ++g
                            }
                        }
                        b.m_pointCount = g
                    }
                }
            }
        }
    };
    n.CollideCircles = function (b, c, d, e, f) {
        b.m_pointCount = 0;
        var g, h;
        g = d.R;
        h = c.m_p;
        var j = d.position.x + (g.col1.x * h.x + g.col2.x * h.y),
            d = d.position.y + (g.col1.y * h.x + g.col2.y * h.y);
        g = f.R;
        h = e.m_p;
        j = f.position.x + (g.col1.x * h.x + g.col2.x * h.y) - j;
        f = f.position.y + (g.col1.y * h.x + g.col2.y * h.y) - d;
        g = c.m_radius + e.m_radius;
        if (!(j * j + f * f > g * g)) {
            b.m_type = C.e_circles;
            b.m_localPoint.SetV(c.m_p);
            b.m_localPlaneNormal.SetZero();
            b.m_pointCount = 1;
            b.m_points[0].m_localPoint.SetV(e.m_p);
            b.m_points[0].m_id.key = 0
        }
    };
    n.CollidePolygonAndCircle = function (b, c, d, e, f) {
        var g = b.m_pointCount = 0,
            h = 0,
            j, k;
        k = f.R;
        j = e.m_p;
        var l = f.position.y + (k.col1.y * j.x + k.col2.y * j.y),
            g = f.position.x + (k.col1.x * j.x + k.col2.x * j.y) - d.position.x,
            h = l - d.position.y;
        k = d.R;
        d = g * k.col1.x + h * k.col1.y;
        k = g * k.col2.x + h * k.col2.y;
        for (var m = 0, l = -Number.MAX_VALUE, f = c.m_radius + e.m_radius,
                o = parseInt(c.m_vertexCount), n = c.m_vertices, c = c.m_normals, s = 0; s < o; ++s) {
            j = n[s];
            g = d - j.x;
            h = k - j.y;
            j = c[s];
            g = j.x * g + j.y * h;
            if (g > f) return;
            if (g > l) {
                l = g;
                m = s
            }
        }
        g = parseInt(m);
        h = parseInt(g + 1 < o ? g + 1 : 0);
        j = n[g];
        n = n[h];
        if (l < Number.MIN_VALUE) {
            b.m_pointCount = 1;
            b.m_type = C.e_faceA;
            b.m_localPlaneNormal.SetV(c[m]);
            b.m_localPoint.x = 0.5 * (j.x + n.x);
            b.m_localPoint.y = 0.5 * (j.y + n.y)
        } else {
            l = (d - n.x) * (j.x - n.x) + (k - n.y) * (j.y - n.y);
            if ((d - j.x) * (n.x - j.x) + (k - j.y) * (n.y - j.y) <= 0) {
                if ((d - j.x) * (d - j.x) + (k - j.y) * (k - j.y) > f * f) return;
                b.m_pointCount = 1;
                b.m_type =
                    C.e_faceA;
                b.m_localPlaneNormal.x = d - j.x;
                b.m_localPlaneNormal.y = k - j.y;
                b.m_localPlaneNormal.Normalize();
                b.m_localPoint.SetV(j)
            } else if (l <= 0) {
                if ((d - n.x) * (d - n.x) + (k - n.y) * (k - n.y) > f * f) return;
                b.m_pointCount = 1;
                b.m_type = C.e_faceA;
                b.m_localPlaneNormal.x = d - n.x;
                b.m_localPlaneNormal.y = k - n.y;
                b.m_localPlaneNormal.Normalize();
                b.m_localPoint.SetV(n)
            } else {
                m = 0.5 * (j.x + n.x);
                j = 0.5 * (j.y + n.y);
                l = (d - m) * c[g].x + (k - j) * c[g].y;
                if (l > f) return;
                b.m_pointCount = 1;
                b.m_type = C.e_faceA;
                b.m_localPlaneNormal.x = c[g].x;
                b.m_localPlaneNormal.y =
                    c[g].y;
                b.m_localPlaneNormal.Normalize();
                b.m_localPoint.Set(m, j)
            }
        }
        b.m_points[0].m_localPoint.SetV(e.m_p);
        b.m_points[0].m_id.key = 0
    };
    n.TestOverlap = function (b, c) {
        var d = c.lowerBound,
            e = b.upperBound,
            f = d.x - e.x,
            g = d.y - e.y,
            d = b.lowerBound,
            e = c.upperBound,
            h = d.y - e.y;
        return f > 0 || g > 0 || d.x - e.x > 0 || h > 0 ? false : true
    };
    Box2D.postDefs.push(function () {
        Box2D.Collision.b2Collision.s_incidentEdge = n.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_clipPoints1 = n.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_clipPoints2 =
            n.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1);
        Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1);
        Box2D.Collision.b2Collision.s_localTangent = new j;
        Box2D.Collision.b2Collision.s_localNormal = new j;
        Box2D.Collision.b2Collision.s_planePoint = new j;
        Box2D.Collision.b2Collision.s_normal = new j;
        Box2D.Collision.b2Collision.s_tangent = new j;
        Box2D.Collision.b2Collision.s_tangent2 = new j;
        Box2D.Collision.b2Collision.s_v11 = new j;
        Box2D.Collision.b2Collision.s_v12 = new j;
        Box2D.Collision.b2Collision.b2CollidePolyTempVec = new j;
        Box2D.Collision.b2Collision.b2_nullFeature = 255
    });
    q.b2ContactID = function () {
        this.features = new E
    };
    q.prototype.b2ContactID = function () {
        this.features._m_id = this
    };
    q.prototype.Set = function (b) {
        this.key = b._key
    };
    q.prototype.Copy = function () {
        var b = new q;
        b.key = this.key;
        return b
    };
    Object.defineProperty(q.prototype, "key", {
        enumerable: false,
        configurable: true,
        get: function () {
            return this._key
        }
    });
    Object.defineProperty(q.prototype, "key", {
        enumerable: false,
        configurable: true,
        set: function (b) {
            b === void 0 && (b = 0);
            this._key = b;
            this.features._referenceEdge = this._key & 255;
            this.features._incidentEdge = (this._key & 65280) >> 8 & 255;
            this.features._incidentVertex = (this._key & 16711680) >> 16 & 255;
            this.features._flip = (this._key & 4278190080) >> 24 & 255
        }
    });
    p.b2ContactPoint = function () {
        this.position = new j;
        this.velocity = new j;
        this.normal = new j;
        this.id = new q
    };
    s.b2Distance = function () { };
    s.Distance = function (b, c, d) {
        ++s.b2_gjkCalls;
        var g = d.proxyA,
            h = d.proxyB,
            k = d.transformA,
            l = d.transformB,
            m = s.s_simplex;
        m.ReadCache(c,
            g, k, h, l);
        var o = m.m_vertices,
            n = s.s_saveA,
            p = s.s_saveB,
            q = 0;
        m.GetClosestPoint().LengthSquared();
        for (var t = 0, u, r = 0; r < 20;) {
            q = m.m_count;
            for (t = 0; t < q; t++) {
                n[t] = o[t].indexA;
                p[t] = o[t].indexB
            }
            switch (m.m_count) {
                case 1:
                    break;
                case 2:
                    m.Solve2();
                    break;
                case 3:
                    m.Solve3();
                    break;
                default:
                    e.b2Assert(false)
            }
            if (m.m_count == 3) break;
            u = m.GetClosestPoint();
            u.LengthSquared();
            t = m.GetSearchDirection();
            if (t.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
            u = o[m.m_count];
            u.indexA = g.GetSupport(f.MulTMV(k.R, t.GetNegative()));
            u.wA = f.MulX(k, g.GetVertex(u.indexA));
            u.indexB = h.GetSupport(f.MulTMV(l.R, t));
            u.wB = f.MulX(l, h.GetVertex(u.indexB));
            u.w = f.SubtractVV(u.wB, u.wA);
            ++r;
            ++s.b2_gjkIters;
            for (var B = false, t = 0; t < q; t++)
                if (u.indexA == n[t] && u.indexB == p[t]) {
                    B = true;
                    break
                }
            if (B) break;
            ++m.m_count
        }
        s.b2_gjkMaxIters = f.Max(s.b2_gjkMaxIters, r);
        m.GetWitnessPoints(b.pointA, b.pointB);
        b.distance = f.SubtractVV(b.pointA, b.pointB).Length();
        b.iterations = r;
        m.WriteCache(c);
        if (d.useRadii) {
            c = g.m_radius;
            h = h.m_radius;
            if (b.distance > c + h && b.distance > Number.MIN_VALUE) {
                b.distance =
                    b.distance - (c + h);
                d = f.SubtractVV(b.pointB, b.pointA);
                d.Normalize();
                b.pointA.x = b.pointA.x + c * d.x;
                b.pointA.y = b.pointA.y + c * d.y;
                b.pointB.x = b.pointB.x - h * d.x;
                b.pointB.y = b.pointB.y - h * d.y
            } else {
                u = new j;
                u.x = 0.5 * (b.pointA.x + b.pointB.x);
                u.y = 0.5 * (b.pointA.y + b.pointB.y);
                b.pointA.x = b.pointB.x = u.x;
                b.pointA.y = b.pointB.y = u.y;
                b.distance = 0
            }
        }
    };
    Box2D.postDefs.push(function () {
        Box2D.Collision.b2Distance.s_simplex = new F;
        Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3);
        Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3)
    });
    r.b2DistanceInput = function () { };
    o.b2DistanceOutput = function () {
        this.pointA = new j;
        this.pointB = new j
    };
    t.b2DistanceProxy = function () { };
    t.prototype.Set = function (f) {
        switch (f.GetType()) {
            case d.e_circleShape:
                f = f instanceof b ? f : null;
                this.m_vertices = new Vector(1, true);
                this.m_vertices[0] = f.m_p;
                this.m_count = 1;
                this.m_radius = f.m_radius;
                break;
            case d.e_polygonShape:
                f = f instanceof c ? f : null;
                this.m_vertices = f.m_vertices;
                this.m_count = f.m_vertexCount;
                this.m_radius = f.m_radius;
                break;
            default:
                e.b2Assert(false)
        }
    };
    t.prototype.GetSupport =
        function (b) {
            for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, e = 1; e < this.m_count; ++e) {
                var f = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
                if (f > d) {
                    c = e;
                    d = f
                }
            }
            return c
        };
    t.prototype.GetSupportVertex = function (b) {
        for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, e = 1; e < this.m_count; ++e) {
            var f = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
            if (f > d) {
                c = e;
                d = f
            }
        }
        return this.m_vertices[c]
    };
    t.prototype.GetVertexCount = function () {
        return this.m_count
    };
    t.prototype.GetVertex = function (b) {
        b ===
            void 0 && (b = 0);
        e.b2Assert(0 <= b && b < this.m_count);
        return this.m_vertices[b]
    };
    u.b2DynamicTree = function () { };
    u.prototype.b2DynamicTree = function () {
        this.m_freeList = this.m_root = null;
        this.m_insertionCount = this.m_path = 0
    };
    u.prototype.CreateProxy = function (b, c) {
        var d = this.AllocateNode(),
            f = e.b2_aabbExtension,
            g = e.b2_aabbExtension;
        d.aabb.lowerBound.x = b.lowerBound.x - f;
        d.aabb.lowerBound.y = b.lowerBound.y - g;
        d.aabb.upperBound.x = b.upperBound.x + f;
        d.aabb.upperBound.y = b.upperBound.y + g;
        d.userData = c;
        this.InsertLeaf(d);
        return d
    };
    u.prototype.DestroyProxy = function (b) {
        this.RemoveLeaf(b);
        this.FreeNode(b)
    };
    u.prototype.MoveProxy = function (b, c, d) {
        e.b2Assert(b.IsLeaf());
        if (b.aabb.Contains(c)) return false;
        this.RemoveLeaf(b);
        var f = e.b2_aabbExtension + e.b2_aabbMultiplier * (d.x > 0 ? d.x : -d.x),
            d = e.b2_aabbExtension + e.b2_aabbMultiplier * (d.y > 0 ? d.y : -d.y);
        b.aabb.lowerBound.x = c.lowerBound.x - f;
        b.aabb.lowerBound.y = c.lowerBound.y - d;
        b.aabb.upperBound.x = c.upperBound.x + f;
        b.aabb.upperBound.y = c.upperBound.y + d;
        this.InsertLeaf(b);
        return true
    };
    u.prototype.Rebalance =
        function (b) {
            b === void 0 && (b = 0);
            if (this.m_root != null)
                for (var c = 0; c < b; c++) {
                    for (var d = this.m_root, e = 0; d.IsLeaf() == false;) {
                        d = this.m_path >> e & 1 ? d.child2 : d.child1;
                        e = e + 1 & 31
                    } ++this.m_path;
                    this.RemoveLeaf(d);
                    this.InsertLeaf(d)
                }
        };
    u.prototype.GetFatAABB = function (b) {
        return b.aabb
    };
    u.prototype.GetUserData = function (b) {
        return b.userData
    };
    u.prototype.Query = function (b, c) {
        if (this.m_root != null) {
            var d = new Vector,
                e = 0;
            for (d[e++] = this.m_root; e > 0;) {
                var f = d[--e];
                if (f.aabb.TestOverlap(c))
                    if (f.IsLeaf()) {
                        if (!b(f)) break
                    } else {
                        d[e++] =
                            f.child1;
                        d[e++] = f.child2
                    }
            }
        }
    };
    u.prototype.RayCast = function (b, c) {
        if (this.m_root != null) {
            var d = c.p1,
                e = c.p2,
                g = f.SubtractVV(d, e);
            g.Normalize();
            var g = f.CrossFV(1, g),
                h = f.AbsV(g),
                j = c.maxFraction,
                l = new k,
                m = 0,
                o = 0,
                m = d.x + j * (e.x - d.x),
                o = d.y + j * (e.y - d.y);
            l.lowerBound.x = Math.min(d.x, m);
            l.lowerBound.y = Math.min(d.y, o);
            l.upperBound.x = Math.max(d.x, m);
            l.upperBound.y = Math.max(d.y, o);
            var n = new Vector,
                s = 0;
            for (n[s++] = this.m_root; s > 0;) {
                j = n[--s];
                if (j.aabb.TestOverlap(l) != false) {
                    m = j.aabb.GetCenter();
                    o = j.aabb.GetExtents();
                    if (!(Math.abs(g.x *
                            (d.x - m.x) + g.y * (d.y - m.y)) - h.x * o.x - h.y * o.y > 0))
                        if (j.IsLeaf()) {
                            m = new K;
                            m.p1 = c.p1;
                            m.p2 = c.p2;
                            m.maxFraction = c.maxFraction;
                            j = b(m, j);
                            if (j == 0) break;
                            if (j > 0) {
                                m = d.x + j * (e.x - d.x);
                                o = d.y + j * (e.y - d.y);
                                l.lowerBound.x = Math.min(d.x, m);
                                l.lowerBound.y = Math.min(d.y, o);
                                l.upperBound.x = Math.max(d.x, m);
                                l.upperBound.y = Math.max(d.y, o)
                            }
                        } else {
                            n[s++] = j.child1;
                            n[s++] = j.child2
                        }
                }
            }
        }
    };
    u.prototype.AllocateNode = function () {
        if (this.m_freeList) {
            var b = this.m_freeList;
            this.m_freeList = b.parent;
            b.parent = null;
            b.child1 = null;
            b.child2 = null;
            return b
        }
        return new z
    };
    u.prototype.FreeNode = function (b) {
        b.parent = this.m_freeList;
        this.m_freeList = b
    };
    u.prototype.InsertLeaf = function (b) {
        ++this.m_insertionCount;
        if (this.m_root == null) {
            this.m_root = b;
            this.m_root.parent = null
        } else {
            var c = b.aabb.GetCenter(),
                d = this.m_root;
            if (d.IsLeaf() == false) {
                do var e = d.child1,
                    d = d.child2,
                    d = Math.abs((e.aabb.lowerBound.x + e.aabb.upperBound.x) / 2 - c.x) + Math.abs((e.aabb.lowerBound.y + e.aabb.upperBound.y) / 2 - c.y) < Math.abs((d.aabb.lowerBound.x + d.aabb.upperBound.x) / 2 - c.x) + Math.abs((d.aabb.lowerBound.y + d.aabb.upperBound.y) /
                        2 - c.y) ? e : d; while (d.IsLeaf() == false)
            }
            c = d.parent;
            e = this.AllocateNode();
            e.parent = c;
            e.userData = null;
            e.aabb.Combine(b.aabb, d.aabb);
            if (c) {
                d.parent.child1 == d ? c.child1 = e : c.child2 = e;
                e.child1 = d;
                e.child2 = b;
                d.parent = e;
                b.parent = e;
                do {
                    if (c.aabb.Contains(e.aabb)) break;
                    c.aabb.Combine(c.child1.aabb, c.child2.aabb);
                    e = c;
                    c = c.parent
                } while (c)
            } else {
                e.child1 = d;
                e.child2 = b;
                d.parent = e;
                this.m_root = b.parent = e
            }
        }
    };
    u.prototype.RemoveLeaf = function (b) {
        if (b == this.m_root) this.m_root = null;
        else {
            var c = b.parent,
                d = c.parent,
                b = c.child1 == b ? c.child2 :
                c.child1;
            if (d) {
                d.child1 == c ? d.child1 = b : d.child2 = b;
                b.parent = d;
                for (this.FreeNode(c) ; d;) {
                    c = d.aabb;
                    d.aabb = k.Combine(d.child1.aabb, d.child2.aabb);
                    if (c.Contains(d.aabb)) break;
                    d = d.parent
                }
            } else {
                this.m_root = b;
                b.parent = null;
                this.FreeNode(c)
            }
        }
    };
    w.b2DynamicTreeBroadPhase = function () {
        this.m_tree = new u;
        this.m_moveBuffer = new Vector;
        this.m_pairBuffer = new Vector;
        this.m_pairCount = 0
    };
    w.prototype.CreateProxy = function (b, c) {
        var d = this.m_tree.CreateProxy(b, c);
        ++this.m_proxyCount;
        this.BufferMove(d);
        return d
    };
    w.prototype.DestroyProxy =
        function (b) {
            this.UnBufferMove(b);
            --this.m_proxyCount;
            this.m_tree.DestroyProxy(b)
        };
    w.prototype.MoveProxy = function (b, c, d) {
        this.m_tree.MoveProxy(b, c, d) && this.BufferMove(b)
    };
    w.prototype.TestOverlap = function (b, c) {
        var d = this.m_tree.GetFatAABB(b),
            e = this.m_tree.GetFatAABB(c);
        return d.TestOverlap(e)
    };
    w.prototype.GetUserData = function (b) {
        return this.m_tree.GetUserData(b)
    };
    w.prototype.GetFatAABB = function (b) {
        return this.m_tree.GetFatAABB(b)
    };
    w.prototype.GetProxyCount = function () {
        return this.m_proxyCount
    };
    w.prototype.UpdatePairs =
        function (b) {
            for (var c = this, d = c.m_pairCount = 0, e, d = 0; d < c.m_moveBuffer.length; ++d) {
                e = c.m_moveBuffer[d];
                var f = c.m_tree.GetFatAABB(e);
                c.m_tree.Query(function (b) {
                    if (b == e) return true;
                    c.m_pairCount == c.m_pairBuffer.length && (c.m_pairBuffer[c.m_pairCount] = new A);
                    var d = c.m_pairBuffer[c.m_pairCount];
                    d.proxyA = b < e ? b : e;
                    d.proxyB = b >= e ? b : e;
                    ++c.m_pairCount;
                    return true
                }, f)
            }
            for (d = c.m_moveBuffer.length = 0; d < c.m_pairCount;) {
                var f = c.m_pairBuffer[d],
                    g = c.m_tree.GetUserData(f.proxyA),
                    h = c.m_tree.GetUserData(f.proxyB);
                b(g, h);
                for (++d; d <
                    c.m_pairCount;) {
                    g = c.m_pairBuffer[d];
                    if (g.proxyA != f.proxyA || g.proxyB != f.proxyB) break;
                    ++d
                }
            }
        };
    w.prototype.Query = function (b, c) {
        this.m_tree.Query(b, c)
    };
    w.prototype.RayCast = function (b, c) {
        this.m_tree.RayCast(b, c)
    };
    w.prototype.Validate = function () { };
    w.prototype.Rebalance = function (b) {
        b === void 0 && (b = 0);
        this.m_tree.Rebalance(b)
    };
    w.prototype.BufferMove = function (b) {
        this.m_moveBuffer[this.m_moveBuffer.length] = b
    };
    w.prototype.UnBufferMove = function (b) {
        this.m_moveBuffer.splice(parseInt(this.m_moveBuffer.indexOf(b)),
            1)
    };
    w.prototype.ComparePairs = function () {
        return 0
    };
    w.__implements = {};
    w.__implements[Z] = true;
    z.b2DynamicTreeNode = function () {
        this.aabb = new k
    };
    z.prototype.IsLeaf = function () {
        return this.child1 == null
    };
    A.b2DynamicTreePair = function () { };
    C.b2Manifold = function () {
        this.m_pointCount = 0
    };
    C.prototype.b2Manifold = function () {
        this.m_points = new Vector(e.b2_maxManifoldPoints);
        for (var b = 0; b < e.b2_maxManifoldPoints; b++) this.m_points[b] = new G;
        this.m_localPlaneNormal = new j;
        this.m_localPoint = new j
    };
    C.prototype.Reset = function () {
        for (var b =
                0; b < e.b2_maxManifoldPoints; b++) (this.m_points[b] instanceof G ? this.m_points[b] : null).Reset();
        this.m_localPlaneNormal.SetZero();
        this.m_localPoint.SetZero();
        this.m_pointCount = this.m_type = 0
    };
    C.prototype.Set = function (b) {
        this.m_pointCount = b.m_pointCount;
        for (var c = 0; c < e.b2_maxManifoldPoints; c++) (this.m_points[c] instanceof G ? this.m_points[c] : null).Set(b.m_points[c]);
        this.m_localPlaneNormal.SetV(b.m_localPlaneNormal);
        this.m_localPoint.SetV(b.m_localPoint);
        this.m_type = b.m_type
    };
    C.prototype.Copy = function () {
        var b =
            new C;
        b.Set(this);
        return b
    };
    Box2D.postDefs.push(function () {
        Box2D.Collision.b2Manifold.e_circles = 1;
        Box2D.Collision.b2Manifold.e_faceA = 2;
        Box2D.Collision.b2Manifold.e_faceB = 4
    });
    G.b2ManifoldPoint = function () {
        this.m_localPoint = new j;
        this.m_id = new q
    };
    G.prototype.b2ManifoldPoint = function () {
        this.Reset()
    };
    G.prototype.Reset = function () {
        this.m_localPoint.SetZero();
        this.m_tangentImpulse = this.m_normalImpulse = 0;
        this.m_id.key = 0
    };
    G.prototype.Set = function (b) {
        this.m_localPoint.SetV(b.m_localPoint);
        this.m_normalImpulse =
            b.m_normalImpulse;
        this.m_tangentImpulse = b.m_tangentImpulse;
        this.m_id.Set(b.m_id)
    };
    H.b2Point = function () {
        this.p = new j
    };
    H.prototype.Support = function () {
        return this.p
    };
    H.prototype.GetFirstVertex = function () {
        return this.p
    };
    K.b2RayCastInput = function () {
        this.p1 = new j;
        this.p2 = new j
    };
    K.prototype.b2RayCastInput = function (b, c, d) {
        b === void 0 && (b = null);
        c === void 0 && (c = null);
        d === void 0 && (d = 1);
        b && this.p1.SetV(b);
        c && this.p2.SetV(c);
        this.maxFraction = d
    };
    P.b2RayCastOutput = function () {
        this.normal = new j
    };
    T.b2Segment = function () {
        this.p1 =
            new j;
        this.p2 = new j
    };
    T.prototype.TestSegment = function (b, c, d, e) {
        e === void 0 && (e = 0);
        var f = d.p1,
            g = d.p2.x - f.x,
            h = d.p2.y - f.y,
            d = this.p2.y - this.p1.y,
            j = -(this.p2.x - this.p1.x),
            k = 100 * Number.MIN_VALUE,
            l = -(g * d + h * j);
        if (l > k) {
            var m = f.x - this.p1.x,
                o = f.y - this.p1.y,
                f = m * d + o * j;
            if (0 <= f && f <= e * l) {
                e = -g * o + h * m;
                if (-k * l <= e && e <= l * (1 + k)) {
                    f = f / l;
                    e = Math.sqrt(d * d + j * j);
                    b[0] = f;
                    c.Set(d / e, j / e);
                    return true
                }
            }
        }
        return false
    };
    T.prototype.Extend = function (b) {
        this.ExtendForward(b);
        this.ExtendBackward(b)
    };
    T.prototype.ExtendForward = function (b) {
        var c =
            this.p2.x - this.p1.x,
            d = this.p2.y - this.p1.y,
            b = Math.min(c > 0 ? (b.upperBound.x - this.p1.x) / c : c < 0 ? (b.lowerBound.x - this.p1.x) / c : Number.POSITIVE_INFINITY, d > 0 ? (b.upperBound.y - this.p1.y) / d : d < 0 ? (b.lowerBound.y - this.p1.y) / d : Number.POSITIVE_INFINITY);
        this.p2.x = this.p1.x + c * b;
        this.p2.y = this.p1.y + d * b
    };
    T.prototype.ExtendBackward = function (b) {
        var c = -this.p2.x + this.p1.x,
            d = -this.p2.y + this.p1.y,
            b = Math.min(c > 0 ? (b.upperBound.x - this.p2.x) / c : c < 0 ? (b.lowerBound.x - this.p2.x) / c : Number.POSITIVE_INFINITY, d > 0 ? (b.upperBound.y - this.p2.y) /
            d : d < 0 ? (b.lowerBound.y - this.p2.y) / d : Number.POSITIVE_INFINITY);
        this.p1.x = this.p2.x + c * b;
        this.p1.y = this.p2.y + d * b
    };
    D.b2SeparationFunction = function () {
        this.m_localPoint = new j;
        this.m_axis = new j
    };
    D.prototype.Initialize = function (b, c, d, g, h) {
        this.m_proxyA = c;
        this.m_proxyB = g;
        var k = parseInt(b.count);
        e.b2Assert(0 < k && k < 3);
        var l, m, o, n, s = 0,
            p = 0;
        if (k == 1) {
            this.m_type = D.e_points;
            l = this.m_proxyA.GetVertex(b.indexA[0]);
            m = this.m_proxyB.GetVertex(b.indexB[0]);
            k = l;
            b = d.R;
            c = d.position.x + (b.col1.x * k.x + b.col2.x * k.y);
            g = d.position.y +
                (b.col1.y * k.x + b.col2.y * k.y);
            k = m;
            b = h.R;
            o = h.position.x + (b.col1.x * k.x + b.col2.x * k.y);
            n = h.position.y + (b.col1.y * k.x + b.col2.y * k.y);
            this.m_axis.x = o - c;
            this.m_axis.y = n - g;
            this.m_axis.Normalize()
        } else {
            if (b.indexB[0] == b.indexB[1]) {
                this.m_type = D.e_faceA;
                c = this.m_proxyA.GetVertex(b.indexA[0]);
                g = this.m_proxyA.GetVertex(b.indexA[1]);
                m = this.m_proxyB.GetVertex(b.indexB[0]);
                this.m_localPoint.x = 0.5 * (c.x + g.x);
                this.m_localPoint.y = 0.5 * (c.y + g.y);
                this.m_axis = f.CrossVF(f.SubtractVV(g, c), 1);
                this.m_axis.Normalize();
                k = this.m_axis;
                b = d.R;
                s = b.col1.x * k.x + b.col2.x * k.y;
                p = b.col1.y * k.x + b.col2.y * k.y;
                k = this.m_localPoint;
                b = d.R;
                c = d.position.x + (b.col1.x * k.x + b.col2.x * k.y);
                g = d.position.y + (b.col1.y * k.x + b.col2.y * k.y);
                k = m;
                b = h.R;
                o = h.position.x + (b.col1.x * k.x + b.col2.x * k.y);
                n = h.position.y + (b.col1.y * k.x + b.col2.y * k.y);
                s = (o - c) * s + (n - g) * p
            } else if (b.indexA[0] == b.indexA[0]) {
                this.m_type = D.e_faceB;
                o = this.m_proxyB.GetVertex(b.indexB[0]);
                n = this.m_proxyB.GetVertex(b.indexB[1]);
                l = this.m_proxyA.GetVertex(b.indexA[0]);
                this.m_localPoint.x = 0.5 * (o.x + n.x);
                this.m_localPoint.y =
                    0.5 * (o.y + n.y);
                this.m_axis = f.CrossVF(f.SubtractVV(n, o), 1);
                this.m_axis.Normalize();
                k = this.m_axis;
                b = h.R;
                s = b.col1.x * k.x + b.col2.x * k.y;
                p = b.col1.y * k.x + b.col2.y * k.y;
                k = this.m_localPoint;
                b = h.R;
                o = h.position.x + (b.col1.x * k.x + b.col2.x * k.y);
                n = h.position.y + (b.col1.y * k.x + b.col2.y * k.y);
                k = l;
                b = d.R;
                c = d.position.x + (b.col1.x * k.x + b.col2.x * k.y);
                g = d.position.y + (b.col1.y * k.x + b.col2.y * k.y);
                s = (c - o) * s + (g - n) * p
            } else {
                c = this.m_proxyA.GetVertex(b.indexA[0]);
                g = this.m_proxyA.GetVertex(b.indexA[1]);
                o = this.m_proxyB.GetVertex(b.indexB[0]);
                n = this.m_proxyB.GetVertex(b.indexB[1]);
                f.MulX(d, l);
                l = f.MulMV(d.R, f.SubtractVV(g, c));
                f.MulX(h, m);
                s = f.MulMV(h.R, f.SubtractVV(n, o));
                h = l.x * l.x + l.y * l.y;
                m = s.x * s.x + s.y * s.y;
                b = f.SubtractVV(s, l);
                d = l.x * b.x + l.y * b.y;
                b = s.x * b.x + s.y * b.y;
                l = l.x * s.x + l.y * s.y;
                p = h * m - l * l;
                s = 0;
                p != 0 && (s = f.Clamp((l * b - d * m) / p, 0, 1));
                (l * s + b) / m < 0 && (s = f.Clamp((l - d) / h, 0, 1));
                l = new j;
                l.x = c.x + s * (g.x - c.x);
                l.y = c.y + s * (g.y - c.y);
                m = new j;
                m.x = o.x + s * (n.x - o.x);
                m.y = o.y + s * (n.y - o.y);
                if (s == 0 || s == 1) {
                    this.m_type = D.e_faceB;
                    this.m_axis = f.CrossVF(f.SubtractVV(n, o), 1);
                    this.m_axis.Normalize();
                    this.m_localPoint = m
                } else {
                    this.m_type = D.e_faceA;
                    this.m_axis = f.CrossVF(f.SubtractVV(g, c), 1);
                    this.m_localPoint = l
                }
            }
            s < 0 && this.m_axis.NegativeSelf()
        }
    };
    D.prototype.Evaluate = function (b, c) {
        var d, g, h = 0;
        switch (this.m_type) {
            case D.e_points:
                d = f.MulTMV(b.R, this.m_axis);
                g = f.MulTMV(c.R, this.m_axis.GetNegative());
                d = this.m_proxyA.GetSupportVertex(d);
                g = this.m_proxyB.GetSupportVertex(g);
                d = f.MulX(b, d);
                g = f.MulX(c, g);
                return (g.x - d.x) * this.m_axis.x + (g.y - d.y) * this.m_axis.y;
            case D.e_faceA:
                h = f.MulMV(b.R,
                    this.m_axis);
                d = f.MulX(b, this.m_localPoint);
                g = f.MulTMV(c.R, h.GetNegative());
                g = this.m_proxyB.GetSupportVertex(g);
                g = f.MulX(c, g);
                return (g.x - d.x) * h.x + (g.y - d.y) * h.y;
            case D.e_faceB:
                h = f.MulMV(c.R, this.m_axis);
                g = f.MulX(c, this.m_localPoint);
                d = f.MulTMV(b.R, h.GetNegative());
                d = this.m_proxyA.GetSupportVertex(d);
                d = f.MulX(b, d);
                return (d.x - g.x) * h.x + (d.y - g.y) * h.y;
            default:
                e.b2Assert(false);
                return 0
        }
    };
    Box2D.postDefs.push(function () {
        Box2D.Collision.b2SeparationFunction.e_points = 1;
        Box2D.Collision.b2SeparationFunction.e_faceA =
            2;
        Box2D.Collision.b2SeparationFunction.e_faceB = 4
    });
    F.b2Simplex = function () {
        this.m_v1 = new J;
        this.m_v2 = new J;
        this.m_v3 = new J;
        this.m_vertices = new Vector(3)
    };
    F.prototype.b2Simplex = function () {
        this.m_vertices[0] = this.m_v1;
        this.m_vertices[1] = this.m_v2;
        this.m_vertices[2] = this.m_v3
    };
    F.prototype.ReadCache = function (b, c, d, g, h) {
        e.b2Assert(0 <= b.count && b.count <= 3);
        var j, k;
        this.m_count = b.count;
        for (var l = this.m_vertices, m = 0; m < this.m_count; m++) {
            var o = l[m];
            o.indexA = b.indexA[m];
            o.indexB = b.indexB[m];
            j = c.GetVertex(o.indexA);
            k = g.GetVertex(o.indexB);
            o.wA = f.MulX(d, j);
            o.wB = f.MulX(h, k);
            o.w = f.SubtractVV(o.wB, o.wA);
            o.a = 0
        }
        if (this.m_count > 1) {
            b = b.metric;
            j = this.GetMetric();
            if (j < 0.5 * b || 2 * b < j || j < Number.MIN_VALUE) this.m_count = 0
        }
        if (this.m_count == 0) {
            o = l[0];
            o.indexA = 0;
            o.indexB = 0;
            j = c.GetVertex(0);
            k = g.GetVertex(0);
            o.wA = f.MulX(d, j);
            o.wB = f.MulX(h, k);
            o.w = f.SubtractVV(o.wB, o.wA);
            this.m_count = 1
        }
    };
    F.prototype.WriteCache = function (b) {
        b.metric = this.GetMetric();
        b.count = Box2D.parseUInt(this.m_count);
        for (var c = this.m_vertices, d = 0; d < this.m_count; d++) {
            b.indexA[d] =
                Box2D.parseUInt(c[d].indexA);
            b.indexB[d] = Box2D.parseUInt(c[d].indexB)
        }
    };
    F.prototype.GetSearchDirection = function () {
        switch (this.m_count) {
            case 1:
                return this.m_v1.w.GetNegative();
            case 2:
                var b = f.SubtractVV(this.m_v2.w, this.m_v1.w);
                return f.CrossVV(b, this.m_v1.w.GetNegative()) > 0 ? f.CrossFV(1, b) : f.CrossVF(b, 1);
            default:
                e.b2Assert(false);
                return new j
        }
    };
    F.prototype.GetClosestPoint = function () {
        switch (this.m_count) {
            case 0:
                e.b2Assert(false);
                return new j;
            case 1:
                return this.m_v1.w;
            case 2:
                return new j(this.m_v1.a *
                    this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
            default:
                e.b2Assert(false);
                return new j
        }
    };
    F.prototype.GetWitnessPoints = function (b, c) {
        switch (this.m_count) {
            case 0:
                e.b2Assert(false);
                break;
            case 1:
                b.SetV(this.m_v1.wA);
                c.SetV(this.m_v1.wB);
                break;
            case 2:
                b.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
                b.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
                c.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
                c.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a *
                    this.m_v2.wB.y;
                break;
            case 3:
                c.x = b.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
                c.y = b.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
                break;
            default:
                e.b2Assert(false)
        }
    };
    F.prototype.GetMetric = function () {
        switch (this.m_count) {
            case 0:
                e.b2Assert(false);
                return 0;
            case 1:
                return 0;
            case 2:
                return f.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
            case 3:
                return f.CrossVV(f.SubtractVV(this.m_v2.w, this.m_v1.w), f.SubtractVV(this.m_v3.w, this.m_v1.w));
            default:
                e.b2Assert(false);
                return 0
        }
    };
    F.prototype.Solve2 = function () {
        var b = this.m_v1.w,
            c = this.m_v2.w,
            d = f.SubtractVV(c, b),
            b = -(b.x * d.x + b.y * d.y);
        if (b <= 0) this.m_count = this.m_v1.a = 1;
        else {
            c = c.x * d.x + c.y * d.y;
            if (c <= 0) {
                this.m_count = this.m_v2.a = 1;
                this.m_v1.Set(this.m_v2)
            } else {
                d = 1 / (c + b);
                this.m_v1.a = c * d;
                this.m_v2.a = b * d;
                this.m_count = 2
            }
        }
    };
    F.prototype.Solve3 = function () {
        var b = this.m_v1.w,
            c = this.m_v2.w,
            d = this.m_v3.w,
            e = f.SubtractVV(c, b),
            g = f.Dot(b, e),
            h = f.Dot(c, e),
            g = -g,
            j = f.SubtractVV(d, b),
            k = f.Dot(b, j),
            l = f.Dot(d, j),
            k = -k,
            m = f.SubtractVV(d, c),
            o = f.Dot(c, m),
            m = f.Dot(d, m),
            o = -o,
            j = f.CrossVV(e, j),
            e = j * f.CrossVV(c, d),
            d = j * f.CrossVV(d, b),
            b = j * f.CrossVV(b, c);
        if (g <= 0 && k <= 0) this.m_count = this.m_v1.a = 1;
        else if (h > 0 && g > 0 && b <= 0) {
            l = 1 / (h + g);
            this.m_v1.a = h * l;
            this.m_v2.a = g * l;
            this.m_count = 2
        } else if (l > 0 && k > 0 && d <= 0) {
            h = 1 / (l + k);
            this.m_v1.a = l * h;
            this.m_v3.a = k * h;
            this.m_count = 2;
            this.m_v2.Set(this.m_v3)
        } else if (h <= 0 && o <= 0) {
            this.m_count = this.m_v2.a = 1;
            this.m_v1.Set(this.m_v2)
        } else if (l <= 0 && m <= 0) {
            this.m_count = this.m_v3.a = 1;
            this.m_v1.Set(this.m_v3)
        } else if (m >
            0 && o > 0 && e <= 0) {
            h = 1 / (m + o);
            this.m_v2.a = m * h;
            this.m_v3.a = o * h;
            this.m_count = 2;
            this.m_v1.Set(this.m_v3)
        } else {
            h = 1 / (e + d + b);
            this.m_v1.a = e * h;
            this.m_v2.a = d * h;
            this.m_v3.a = b * h;
            this.m_count = 3
        }
    };
    I.b2SimplexCache = function () {
        this.indexA = new Vector_a2j_Number(3);
        this.indexB = new Vector_a2j_Number(3)
    };
    J.b2SimplexVertex = function () { };
    J.prototype.Set = function (b) {
        this.wA.SetV(b.wA);
        this.wB.SetV(b.wB);
        this.w.SetV(b.w);
        this.a = b.a;
        this.indexA = b.indexA;
        this.indexB = b.indexB
    };
    N.b2TimeOfImpact = function () { };
    N.TimeOfImpact = function (b) {
        ++N.b2_toiCalls;
        var c = b.proxyA,
            d = b.proxyB,
            g = b.sweepA,
            h = b.sweepB;
        e.b2Assert(g.t0 == h.t0);
        e.b2Assert(1 - g.t0 > Number.MIN_VALUE);
        var j = c.m_radius + d.m_radius,
            b = b.tolerance,
            k = 0,
            l = 0,
            m = 0;
        N.s_cache.count = 0;
        for (N.s_distanceInput.useRadii = false; ;) {
            g.GetTransform(N.s_xfA, k);
            h.GetTransform(N.s_xfB, k);
            N.s_distanceInput.proxyA = c;
            N.s_distanceInput.proxyB = d;
            N.s_distanceInput.transformA = N.s_xfA;
            N.s_distanceInput.transformB = N.s_xfB;
            s.Distance(N.s_distanceOutput, N.s_cache, N.s_distanceInput);
            if (N.s_distanceOutput.distance <= 0) {
                k = 1;
                break
            }
            N.s_fcn.Initialize(N.s_cache,
                c, N.s_xfA, d, N.s_xfB);
            var o = N.s_fcn.Evaluate(N.s_xfA, N.s_xfB);
            if (o <= 0) {
                k = 1;
                break
            }
            l == 0 && (m = o > j ? f.Max(j - b, 0.75 * j) : f.Max(o - b, 0.02 * j));
            if (o - m < 0.5 * b) {
                if (l == 0) {
                    k = 1;
                    break
                }
                break
            }
            var n = k,
                p = k,
                t = 1;
            g.GetTransform(N.s_xfA, t);
            h.GetTransform(N.s_xfB, t);
            var q = N.s_fcn.Evaluate(N.s_xfA, N.s_xfB);
            if (q >= m) {
                k = 1;
                break
            }
            for (var u = 0; ;) {
                var r = 0,
                    r = u & 1 ? p + (m - o) * (t - p) / (q - o) : 0.5 * (p + t);
                g.GetTransform(N.s_xfA, r);
                h.GetTransform(N.s_xfB, r);
                var B = N.s_fcn.Evaluate(N.s_xfA, N.s_xfB);
                if (f.Abs(B - m) < 0.025 * b) {
                    n = r;
                    break
                }
                if (B > m) {
                    p = r;
                    o = B
                } else {
                    t =
                        r;
                    q = B
                } ++u;
                ++N.b2_toiRootIters;
                if (u == 50) break
            }
            N.b2_toiMaxRootIters = f.Max(N.b2_toiMaxRootIters, u);
            if (n < (1 + 100 * Number.MIN_VALUE) * k) break;
            k = n;
            l++;
            ++N.b2_toiIters;
            if (l == 1E3) break
        }
        N.b2_toiMaxIters = f.Max(N.b2_toiMaxIters, l);
        return k
    };
    Box2D.postDefs.push(function () {
        Box2D.Collision.b2TimeOfImpact.b2_toiCalls = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0;
        Box2D.Collision.b2TimeOfImpact.s_cache =
            new I;
        Box2D.Collision.b2TimeOfImpact.s_distanceInput = new r;
        Box2D.Collision.b2TimeOfImpact.s_xfA = new h;
        Box2D.Collision.b2TimeOfImpact.s_xfB = new h;
        Box2D.Collision.b2TimeOfImpact.s_fcn = new D;
        Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new o
    });
    U.b2TOIInput = function () {
        this.proxyA = new t;
        this.proxyB = new t;
        this.sweepA = new g;
        this.sweepB = new g
    };
    Q.b2WorldManifold = function () {
        this.m_normal = new j
    };
    Q.prototype.b2WorldManifold = function () {
        this.m_points = new Vector(e.b2_maxManifoldPoints);
        for (var b = 0; b < e.b2_maxManifoldPoints; b++) this.m_points[b] =
            new j
    };
    Q.prototype.Initialize = function (b, c, d, e, f) {
        d === void 0 && (d = 0);
        f === void 0 && (f = 0);
        if (b.m_pointCount != 0) {
            var g = 0,
                h, j, k = 0,
                l = 0,
                m = 0,
                o = 0,
                n = 0;
            switch (b.m_type) {
                case C.e_circles:
                    j = c.R;
                    h = b.m_localPoint;
                    g = c.position.x + j.col1.x * h.x + j.col2.x * h.y;
                    c = c.position.y + j.col1.y * h.x + j.col2.y * h.y;
                    j = e.R;
                    h = b.m_points[0].m_localPoint;
                    b = e.position.x + j.col1.x * h.x + j.col2.x * h.y;
                    e = e.position.y + j.col1.y * h.x + j.col2.y * h.y;
                    h = b - g;
                    j = e - c;
                    k = h * h + j * j;
                    if (k > Number.MIN_VALUE * Number.MIN_VALUE) {
                        k = Math.sqrt(k);
                        this.m_normal.x = h / k;
                        this.m_normal.y =
                            j / k
                    } else {
                        this.m_normal.x = 1;
                        this.m_normal.y = 0
                    }
                    h = c + d * this.m_normal.y;
                    e = e - f * this.m_normal.y;
                    this.m_points[0].x = 0.5 * (g + d * this.m_normal.x + (b - f * this.m_normal.x));
                    this.m_points[0].y = 0.5 * (h + e);
                    break;
                case C.e_faceA:
                    j = c.R;
                    h = b.m_localPlaneNormal;
                    k = j.col1.x * h.x + j.col2.x * h.y;
                    l = j.col1.y * h.x + j.col2.y * h.y;
                    j = c.R;
                    h = b.m_localPoint;
                    m = c.position.x + j.col1.x * h.x + j.col2.x * h.y;
                    o = c.position.y + j.col1.y * h.x + j.col2.y * h.y;
                    this.m_normal.x = k;
                    this.m_normal.y = l;
                    for (g = 0; g < b.m_pointCount; g++) {
                        j = e.R;
                        h = b.m_points[g].m_localPoint;
                        n = e.position.x +
                            j.col1.x * h.x + j.col2.x * h.y;
                        h = e.position.y + j.col1.y * h.x + j.col2.y * h.y;
                        this.m_points[g].x = n + 0.5 * (d - (n - m) * k - (h - o) * l - f) * k;
                        this.m_points[g].y = h + 0.5 * (d - (n - m) * k - (h - o) * l - f) * l
                    }
                    break;
                case C.e_faceB:
                    j = e.R;
                    h = b.m_localPlaneNormal;
                    k = j.col1.x * h.x + j.col2.x * h.y;
                    l = j.col1.y * h.x + j.col2.y * h.y;
                    j = e.R;
                    h = b.m_localPoint;
                    m = e.position.x + j.col1.x * h.x + j.col2.x * h.y;
                    o = e.position.y + j.col1.y * h.x + j.col2.y * h.y;
                    this.m_normal.x = -k;
                    this.m_normal.y = -l;
                    for (g = 0; g < b.m_pointCount; g++) {
                        j = c.R;
                        h = b.m_points[g].m_localPoint;
                        n = c.position.x + j.col1.x *
                            h.x + j.col2.x * h.y;
                        h = c.position.y + j.col1.y * h.x + j.col2.y * h.y;
                        this.m_points[g].x = n + 0.5 * (f - (n - m) * k - (h - o) * l - d) * k;
                        this.m_points[g].y = h + 0.5 * (f - (n - m) * k - (h - o) * l - d) * l
                    }
            }
        }
    };
    B.ClipVertex = function () {
        this.v = new j;
        this.id = new q
    };
    B.prototype.Set = function (b) {
        this.v.SetV(b.v);
        this.id.Set(b.id)
    };
    E.Features = function () { };
    Object.defineProperty(E.prototype, "referenceEdge", {
        enumerable: false,
        configurable: true,
        get: function () {
            return this._referenceEdge
        }
    });
    Object.defineProperty(E.prototype, "referenceEdge", {
        enumerable: false,
        configurable: true,
        set: function (b) {
            b === void 0 && (b = 0);
            this._referenceEdge = b;
            this._m_id._key = this._m_id._key & 4294967040 | this._referenceEdge & 255
        }
    });
    Object.defineProperty(E.prototype, "incidentEdge", {
        enumerable: false,
        configurable: true,
        get: function () {
            return this._incidentEdge
        }
    });
    Object.defineProperty(E.prototype, "incidentEdge", {
        enumerable: false,
        configurable: true,
        set: function (b) {
            b === void 0 && (b = 0);
            this._incidentEdge = b;
            this._m_id._key = this._m_id._key & 4294902015 | this._incidentEdge << 8 & 65280
        }
    });
    Object.defineProperty(E.prototype,
        "incidentVertex", {
            enumerable: false,
            configurable: true,
            get: function () {
                return this._incidentVertex
            }
        });
    Object.defineProperty(E.prototype, "incidentVertex", {
        enumerable: false,
        configurable: true,
        set: function (b) {
            b === void 0 && (b = 0);
            this._incidentVertex = b;
            this._m_id._key = this._m_id._key & 4278255615 | this._incidentVertex << 16 & 16711680
        }
    });
    Object.defineProperty(E.prototype, "flip", {
        enumerable: false,
        configurable: true,
        get: function () {
            return this._flip
        }
    });
    Object.defineProperty(E.prototype, "flip", {
        enumerable: false,
        configurable: true,
        set: function (b) {
            b === void 0 && (b = 0);
            this._flip = b;
            this._m_id._key = this._m_id._key & 16777215 | this._flip << 24 & 4278190080
        }
    })
})();
(function () {
    var b = Box2D.Common.b2Settings,
        c = Box2D.Collision.Shapes.b2CircleShape,
        d = Box2D.Collision.Shapes.b2EdgeChainDef,
        e = Box2D.Collision.Shapes.b2EdgeShape,
        f = Box2D.Collision.Shapes.b2MassData,
        g = Box2D.Collision.Shapes.b2PolygonShape,
        h = Box2D.Collision.Shapes.b2Shape,
        j = Box2D.Common.Math.b2Mat22,
        k = Box2D.Common.Math.b2Math,
        l = Box2D.Common.Math.b2Transform,
        m = Box2D.Common.Math.b2Vec2,
        n = Box2D.Collision.b2Distance,
        q = Box2D.Collision.b2DistanceInput,
        p = Box2D.Collision.b2DistanceOutput,
        s = Box2D.Collision.b2DistanceProxy,
        r = Box2D.Collision.b2SimplexCache;
    Box2D.inherit(c, Box2D.Collision.Shapes.b2Shape);
    c.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    c.b2CircleShape = function () {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
        this.m_p = new m
    };
    c.prototype.Copy = function () {
        var b = new c;
        b.Set(this);
        return b
    };
    c.prototype.Set = function (b) {
        this.__super.Set.call(this, b);
        Box2D.is(b, c) && this.m_p.SetV((b instanceof c ? b : null).m_p)
    };
    c.prototype.TestPoint = function (b, c) {
        var d = b.R,
            e = b.position.x + (d.col1.x * this.m_p.x +
                d.col2.x * this.m_p.y),
            d = b.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y),
            e = c.x - e,
            d = c.y - d;
        return e * e + d * d <= this.m_radius * this.m_radius
    };
    c.prototype.RayCast = function (b, c, d) {
        var e = d.R,
            f = c.p1.x - (d.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y)),
            d = c.p1.y - (d.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y)),
            e = c.p2.x - c.p1.x,
            g = c.p2.y - c.p1.y,
            h = f * e + d * g,
            j = e * e + g * g,
            k = h * h - j * (f * f + d * d - this.m_radius * this.m_radius);
        if (k < 0 || j < Number.MIN_VALUE) return false;
        h = -(h + Math.sqrt(k));
        if (0 <= h && h <= c.maxFraction *
            j) {
            h = h / j;
            b.fraction = h;
            b.normal.x = f + h * e;
            b.normal.y = d + h * g;
            b.normal.Normalize();
            return true
        }
        return false
    };
    c.prototype.ComputeAABB = function (b, c) {
        var d = c.R,
            e = c.position.x + (d.col1.x * this.m_p.x + d.col2.x * this.m_p.y),
            d = c.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y);
        b.lowerBound.Set(e - this.m_radius, d - this.m_radius);
        b.upperBound.Set(e + this.m_radius, d + this.m_radius)
    };
    c.prototype.ComputeMass = function (c, d) {
        d === void 0 && (d = 0);
        c.mass = d * b.b2_pi * this.m_radius * this.m_radius;
        c.center.SetV(this.m_p);
        c.I = c.mass *
            (0.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y))
    };
    c.prototype.ComputeSubmergedArea = function (b, c, d, e) {
        c === void 0 && (c = 0);
        var d = k.MulX(d, this.m_p),
            f = -(k.Dot(b, d) - c);
        if (f < -this.m_radius + Number.MIN_VALUE) return 0;
        if (f > this.m_radius) {
            e.SetV(d);
            return Math.PI * this.m_radius * this.m_radius
        }
        var c = this.m_radius * this.m_radius,
            g = f * f,
            f = c * (Math.asin(f / this.m_radius) + Math.PI / 2) + f * Math.sqrt(c - g),
            c = -2 / 3 * Math.pow(c - g, 1.5) / f;
        e.x = d.x + b.x * c;
        e.y = d.y + b.y * c;
        return f
    };
    c.prototype.GetLocalPosition =
        function () {
            return this.m_p
        };
    c.prototype.SetLocalPosition = function (b) {
        this.m_p.SetV(b)
    };
    c.prototype.GetRadius = function () {
        return this.m_radius
    };
    c.prototype.SetRadius = function (b) {
        b === void 0 && (b = 0);
        this.m_radius = b
    };
    c.prototype.b2CircleShape = function (b) {
        b === void 0 && (b = 0);
        this.__super.b2Shape.call(this);
        this.m_type = h.e_circleShape;
        this.m_radius = b
    };
    d.b2EdgeChainDef = function () { };
    d.prototype.b2EdgeChainDef = function () {
        this.vertexCount = 0;
        this.isALoop = true;
        this.vertices = []
    };
    Box2D.inherit(e, Box2D.Collision.Shapes.b2Shape);
    e.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    e.b2EdgeShape = function () {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
        this.s_supportVec = new m;
        this.m_v1 = new m;
        this.m_v2 = new m;
        this.m_coreV1 = new m;
        this.m_coreV2 = new m;
        this.m_normal = new m;
        this.m_direction = new m;
        this.m_cornerDir1 = new m;
        this.m_cornerDir2 = new m
    };
    e.prototype.TestPoint = function () {
        return false
    };
    e.prototype.RayCast = function (b, c, d) {
        var e, f = c.p2.x - c.p1.x,
            g = c.p2.y - c.p1.y;
        e = d.R;
        var h = d.position.x + (e.col1.x * this.m_v1.x +
                e.col2.x * this.m_v1.y),
            j = d.position.y + (e.col1.y * this.m_v1.x + e.col2.y * this.m_v1.y),
            k = d.position.y + (e.col1.y * this.m_v2.x + e.col2.y * this.m_v2.y) - j,
            d = -(d.position.x + (e.col1.x * this.m_v2.x + e.col2.x * this.m_v2.y) - h);
        e = 100 * Number.MIN_VALUE;
        var l = -(f * k + g * d);
        if (l > e) {
            var h = c.p1.x - h,
                m = c.p1.y - j,
                j = h * k + m * d;
            if (0 <= j && j <= c.maxFraction * l) {
                c = -f * m + g * h;
                if (-e * l <= c && c <= l * (1 + e)) {
                    b.fraction = j / l;
                    c = Math.sqrt(k * k + d * d);
                    b.normal.x = k / c;
                    b.normal.y = d / c;
                    return true
                }
            }
        }
        return false
    };
    e.prototype.ComputeAABB = function (b, c) {
        var d = c.R,
            e = c.position.x +
            (d.col1.x * this.m_v1.x + d.col2.x * this.m_v1.y),
            f = c.position.y + (d.col1.y * this.m_v1.x + d.col2.y * this.m_v1.y),
            g = c.position.x + (d.col1.x * this.m_v2.x + d.col2.x * this.m_v2.y),
            d = c.position.y + (d.col1.y * this.m_v2.x + d.col2.y * this.m_v2.y);
        if (e < g) {
            b.lowerBound.x = e;
            b.upperBound.x = g
        } else {
            b.lowerBound.x = g;
            b.upperBound.x = e
        }
        if (f < d) {
            b.lowerBound.y = f;
            b.upperBound.y = d
        } else {
            b.lowerBound.y = d;
            b.upperBound.y = f
        }
    };
    e.prototype.ComputeMass = function (b) {
        b.mass = 0;
        b.center.SetV(this.m_v1);
        b.I = 0
    };
    e.prototype.ComputeSubmergedArea = function (b,
        c, d, e) {
        c === void 0 && (c = 0);
        var f = new m(b.x * c, b.y * c),
            g = k.MulX(d, this.m_v1),
            d = k.MulX(d, this.m_v2),
            h = k.Dot(b, g) - c,
            b = k.Dot(b, d) - c;
        if (h > 0) {
            if (b > 0) return 0;
            g.x = -b / (h - b) * g.x + h / (h - b) * d.x;
            g.y = -b / (h - b) * g.y + h / (h - b) * d.y
        } else if (b > 0) {
            d.x = -b / (h - b) * g.x + h / (h - b) * d.x;
            d.y = -b / (h - b) * g.y + h / (h - b) * d.y
        }
        e.x = (f.x + g.x + d.x) / 3;
        e.y = (f.y + g.y + d.y) / 3;
        return 0.5 * ((g.x - f.x) * (d.y - f.y) - (g.y - f.y) * (d.x - f.x))
    };
    e.prototype.GetLength = function () {
        return this.m_length
    };
    e.prototype.GetVertex1 = function () {
        return this.m_v1
    };
    e.prototype.GetVertex2 =
        function () {
            return this.m_v2
        };
    e.prototype.GetCoreVertex1 = function () {
        return this.m_coreV1
    };
    e.prototype.GetCoreVertex2 = function () {
        return this.m_coreV2
    };
    e.prototype.GetNormalVector = function () {
        return this.m_normal
    };
    e.prototype.GetDirectionVector = function () {
        return this.m_direction
    };
    e.prototype.GetCorner1Vector = function () {
        return this.m_cornerDir1
    };
    e.prototype.GetCorner2Vector = function () {
        return this.m_cornerDir2
    };
    e.prototype.Corner1IsConvex = function () {
        return this.m_cornerConvex1
    };
    e.prototype.Corner2IsConvex =
        function () {
            return this.m_cornerConvex2
        };
    e.prototype.GetFirstVertex = function (b) {
        var c = b.R;
        return new m(b.position.x + (c.col1.x * this.m_coreV1.x + c.col2.x * this.m_coreV1.y), b.position.y + (c.col1.y * this.m_coreV1.x + c.col2.y * this.m_coreV1.y))
    };
    e.prototype.GetNextEdge = function () {
        return this.m_nextEdge
    };
    e.prototype.GetPrevEdge = function () {
        return this.m_prevEdge
    };
    e.prototype.Support = function (b, c, d) {
        c === void 0 && (c = 0);
        d === void 0 && (d = 0);
        var e = b.R,
            f = b.position.x + (e.col1.x * this.m_coreV1.x + e.col2.x * this.m_coreV1.y),
            g = b.position.y + (e.col1.y * this.m_coreV1.x + e.col2.y * this.m_coreV1.y),
            h = b.position.x + (e.col1.x * this.m_coreV2.x + e.col2.x * this.m_coreV2.y),
            b = b.position.y + (e.col1.y * this.m_coreV2.x + e.col2.y * this.m_coreV2.y);
        if (f * c + g * d > h * c + b * d) {
            this.s_supportVec.x = f;
            this.s_supportVec.y = g
        } else {
            this.s_supportVec.x = h;
            this.s_supportVec.y = b
        }
        return this.s_supportVec
    };
    e.prototype.b2EdgeShape = function (c, d) {
        this.__super.b2Shape.call(this);
        this.m_type = h.e_edgeShape;
        this.m_nextEdge = this.m_prevEdge = null;
        this.m_v1 = c;
        this.m_v2 = d;
        this.m_direction.Set(this.m_v2.x -
            this.m_v1.x, this.m_v2.y - this.m_v1.y);
        this.m_length = this.m_direction.Normalize();
        this.m_normal.Set(this.m_direction.y, -this.m_direction.x);
        this.m_coreV1.Set(-b.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x, -b.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y);
        this.m_coreV2.Set(-b.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x, -b.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y);
        this.m_cornerDir1 = this.m_normal;
        this.m_cornerDir2.Set(-this.m_normal.x, -this.m_normal.y)
    };
    e.prototype.SetPrevEdge = function (b, c, d, e) {
        this.m_prevEdge = b;
        this.m_coreV1 = c;
        this.m_cornerDir1 = d;
        this.m_cornerConvex1 = e
    };
    e.prototype.SetNextEdge = function (b, c, d, e) {
        this.m_nextEdge = b;
        this.m_coreV2 = c;
        this.m_cornerDir2 = d;
        this.m_cornerConvex2 = e
    };
    f.b2MassData = function () {
        this.mass = 0;
        this.center = new m(0, 0);
        this.I = 0
    };
    Box2D.inherit(g, Box2D.Collision.Shapes.b2Shape);
    g.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    g.b2PolygonShape = function () {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments)
    };
    g.prototype.Copy = function () {
        var b = new g;
        b.Set(this);
        return b
    };
    g.prototype.Set = function (b) {
        this.__super.Set.call(this, b);
        if (Box2D.is(b, g)) {
            b = b instanceof g ? b : null;
            this.m_centroid.SetV(b.m_centroid);
            this.m_vertexCount = b.m_vertexCount;
            this.Reserve(this.m_vertexCount);
            for (var c = 0; c < this.m_vertexCount; c++) {
                this.m_vertices[c].SetV(b.m_vertices[c]);
                this.m_normals[c].SetV(b.m_normals[c])
            }
        }
    };
    g.prototype.SetAsArray = function (b, c) {
        c === void 0 && (c = 0);
        for (var d = new Vector, e = 0, f, e = 0; e < b.length; ++e) {
            f = b[e];
            d.push(f)
        }
        this.SetAsVector(d,
            c)
    };
    g.AsArray = function (b, c) {
        c === void 0 && (c = 0);
        var d = new g;
        d.SetAsArray(b, c);
        return d
    };
    g.prototype.SetAsVector = function (c, d) {
        d === void 0 && (d = 0);
        if (d == 0) d = c.length;
        b.b2Assert(2 <= d);
        this.m_vertexCount = d;
        this.Reserve(d);
        for (var e = 0, e = 0; e < this.m_vertexCount; e++) this.m_vertices[e].SetV(c[e]);
        for (e = 0; e < this.m_vertexCount; ++e) {
            var f = parseInt(e),
                h = parseInt(e + 1 < this.m_vertexCount ? e + 1 : 0),
                f = k.SubtractVV(this.m_vertices[h], this.m_vertices[f]);
            b.b2Assert(f.LengthSquared() > Number.MIN_VALUE);
            this.m_normals[e].SetV(k.CrossVF(f,
                1));
            this.m_normals[e].Normalize()
        }
        this.m_centroid = g.ComputeCentroid(this.m_vertices, this.m_vertexCount)
    };
    g.AsVector = function (b, c) {
        c === void 0 && (c = 0);
        var d = new g;
        d.SetAsVector(b, c);
        return d
    };
    g.prototype.SetAsBox = function (b, c) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        this.m_vertexCount = 4;
        this.Reserve(4);
        this.m_vertices[0].Set(-b, -c);
        this.m_vertices[1].Set(b, -c);
        this.m_vertices[2].Set(b, c);
        this.m_vertices[3].Set(-b, c);
        this.m_normals[0].Set(0, -1);
        this.m_normals[1].Set(1, 0);
        this.m_normals[2].Set(0, 1);
        this.m_normals[3].Set(-1,
            0);
        this.m_centroid.SetZero()
    };
    g.AsBox = function (b, c) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        var d = new g;
        d.SetAsBox(b, c);
        return d
    };
    g.prototype.SetAsOrientedBox = function (b, c, d, e) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        d === void 0 && (d = null);
        e === void 0 && (e = 0);
        this.m_vertexCount = 4;
        this.Reserve(4);
        this.m_vertices[0].Set(-b, -c);
        this.m_vertices[1].Set(b, -c);
        this.m_vertices[2].Set(b, c);
        this.m_vertices[3].Set(-b, c);
        this.m_normals[0].Set(0, -1);
        this.m_normals[1].Set(1, 0);
        this.m_normals[2].Set(0, 1);
        this.m_normals[3].Set(-1,
            0);
        this.m_centroid = d;
        b = new l;
        b.position = d;
        b.R.Set(e);
        for (d = 0; d < this.m_vertexCount; ++d) {
            this.m_vertices[d] = k.MulX(b, this.m_vertices[d]);
            this.m_normals[d] = k.MulMV(b.R, this.m_normals[d])
        }
    };
    g.AsOrientedBox = function (b, c, d, e) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        d === void 0 && (d = null);
        e === void 0 && (e = 0);
        var f = new g;
        f.SetAsOrientedBox(b, c, d, e);
        return f
    };
    g.prototype.SetAsEdge = function (b, c) {
        this.m_vertexCount = 2;
        this.Reserve(2);
        this.m_vertices[0].SetV(b);
        this.m_vertices[1].SetV(c);
        this.m_centroid.x = 0.5 * (b.x + c.x);
        this.m_centroid.y = 0.5 * (b.y + c.y);
        this.m_normals[0] = k.CrossVF(k.SubtractVV(c, b), 1);
        this.m_normals[0].Normalize();
        this.m_normals[1].x = -this.m_normals[0].x;
        this.m_normals[1].y = -this.m_normals[0].y
    };
    g.AsEdge = function (b, c) {
        var d = new g;
        d.SetAsEdge(b, c);
        return d
    };
    g.prototype.TestPoint = function (b, c) {
        var d;
        d = b.R;
        for (var e = c.x - b.position.x, f = c.y - b.position.y, g = e * d.col1.x + f * d.col1.y, h = e * d.col2.x + f * d.col2.y, j = 0; j < this.m_vertexCount; ++j) {
            d = this.m_vertices[j];
            e = g - d.x;
            f = h - d.y;
            d = this.m_normals[j];
            if (d.x * e + d.y * f > 0) return false
        }
        return true
    };
    g.prototype.RayCast = function (b, c, d) {
        var e = 0,
            f = c.maxFraction,
            g = 0,
            h = 0,
            j, k, g = c.p1.x - d.position.x,
            h = c.p1.y - d.position.y;
        j = d.R;
        var l = g * j.col1.x + h * j.col1.y,
            m = g * j.col2.x + h * j.col2.y,
            g = c.p2.x - d.position.x,
            h = c.p2.y - d.position.y;
        j = d.R;
        c = g * j.col1.x + h * j.col1.y - l;
        j = g * j.col2.x + h * j.col2.y - m;
        for (var n = -1, s = 0; s < this.m_vertexCount; ++s) {
            k = this.m_vertices[s];
            g = k.x - l;
            h = k.y - m;
            k = this.m_normals[s];
            g = k.x * g + k.y * h;
            h = k.x * c + k.y * j;
            if (h == 0) {
                if (g < 0) return false
            } else if (h < 0 && g < e * h) {
                e = g / h;
                n = s
            } else h > 0 && g < f * h && (f = g / h);
            if (f < e - Number.MIN_VALUE) return false
        }
        if (n >=
            0) {
            b.fraction = e;
            j = d.R;
            k = this.m_normals[n];
            b.normal.x = j.col1.x * k.x + j.col2.x * k.y;
            b.normal.y = j.col1.y * k.x + j.col2.y * k.y;
            return true
        }
        return false
    };
    g.prototype.ComputeAABB = function (b, c) {
        for (var d = c.R, e = this.m_vertices[0], f = c.position.x + (d.col1.x * e.x + d.col2.x * e.y), g = c.position.y + (d.col1.y * e.x + d.col2.y * e.y), h = f, j = g, k = 1; k < this.m_vertexCount; ++k) var e = this.m_vertices[k],
            l = c.position.x + (d.col1.x * e.x + d.col2.x * e.y),
            e = c.position.y + (d.col1.y * e.x + d.col2.y * e.y),
            f = f < l ? f : l,
            g = g < e ? g : e,
            h = h > l ? h : l,
            j = j > e ? j : e;
        b.lowerBound.x =
            f - this.m_radius;
        b.lowerBound.y = g - this.m_radius;
        b.upperBound.x = h + this.m_radius;
        b.upperBound.y = j + this.m_radius
    };
    g.prototype.ComputeMass = function (b, c) {
        c === void 0 && (c = 0);
        if (this.m_vertexCount == 2) {
            b.center.x = 0.5 * (this.m_vertices[0].x + this.m_vertices[1].x);
            b.center.y = 0.5 * (this.m_vertices[0].y + this.m_vertices[1].y);
            b.mass = 0;
            b.I = 0
        } else {
            for (var d = 0, e = 0, f = 0, g = 0, h = 1 / 3, j = 0; j < this.m_vertexCount; ++j) var k = this.m_vertices[j],
                l = j + 1 < this.m_vertexCount ? this.m_vertices[parseInt(j + 1)] : this.m_vertices[0],
                m = k.x - 0,
                n = k.y -
                0,
                s = l.x - 0,
                p = l.y - 0,
                q = m * p - n * s,
                r = 0.5 * q,
                f = f + r,
                d = d + r * h * (0 + k.x + l.x),
                e = e + r * h * (0 + k.y + l.y),
                k = m,
                g = g + q * (h * (0.25 * (k * k + s * k + s * s) + (0 * k + 0 * s)) + 0 + (h * (0.25 * (n * n + p * n + p * p) + (0 * n + 0 * p)) + 0));
            b.mass = c * f;
            b.center.Set(d * (1 / f), e * (1 / f));
            b.I = c * g
        }
    };
    g.prototype.ComputeSubmergedArea = function (b, c, d, e) {
        c === void 0 && (c = 0);
        for (var g = k.MulTMV(d.R, b), h = c - k.Dot(b, d.position), j = new Vector_a2j_Number, l = 0, n = -1, c = -1, s = false, b = b = 0; b < this.m_vertexCount; ++b) {
            j[b] = k.Dot(g, this.m_vertices[b]) - h;
            var p = j[b] < -Number.MIN_VALUE;
            if (b > 0)
                if (p) {
                    if (!s) {
                        n = b -
                            1;
                        l++
                    }
                } else if (s) {
                    c = b - 1;
                    l++
                }
            s = p
        }
        switch (l) {
            case 0:
                if (s) {
                    b = new f;
                    this.ComputeMass(b, 1);
                    e.SetV(k.MulX(d, b.center));
                    return b.mass
                }
                return 0;
            case 1:
                n == -1 ? n = this.m_vertexCount - 1 : c = this.m_vertexCount - 1
        }
        b = parseInt((n + 1) % this.m_vertexCount);
        g = parseInt((c + 1) % this.m_vertexCount);
        h = (0 - j[n]) / (j[b] - j[n]);
        j = (0 - j[c]) / (j[g] - j[c]);
        n = new m(this.m_vertices[n].x * (1 - h) + this.m_vertices[b].x * h, this.m_vertices[n].y * (1 - h) + this.m_vertices[b].y * h);
        c = new m(this.m_vertices[c].x * (1 - j) + this.m_vertices[g].x * j, this.m_vertices[c].y *
            (1 - j) + this.m_vertices[g].y * j);
        j = 0;
        h = new m;
        for (l = this.m_vertices[b]; b != g;) {
            b = (b + 1) % this.m_vertexCount;
            s = b == g ? c : this.m_vertices[b];
            p = 0.5 * ((l.x - n.x) * (s.y - n.y) - (l.y - n.y) * (s.x - n.x));
            j = j + p;
            h.x = h.x + p * (n.x + l.x + s.x) / 3;
            h.y = h.y + p * (n.y + l.y + s.y) / 3;
            l = s
        }
        h.Multiply(1 / j);
        e.SetV(k.MulX(d, h));
        return j
    };
    g.prototype.GetVertexCount = function () {
        return this.m_vertexCount
    };
    g.prototype.GetVertices = function () {
        return this.m_vertices
    };
    g.prototype.GetNormals = function () {
        return this.m_normals
    };
    g.prototype.GetSupport = function (b) {
        for (var c =
                0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, e = 1; e < this.m_vertexCount; ++e) {
            var f = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
            if (f > d) {
                c = e;
                d = f
            }
        }
        return c
    };
    g.prototype.GetSupportVertex = function (b) {
        for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, e = 1; e < this.m_vertexCount; ++e) {
            var f = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
            if (f > d) {
                c = e;
                d = f
            }
        }
        return this.m_vertices[c]
    };
    g.prototype.Validate = function () {
        return false
    };
    g.prototype.b2PolygonShape = function () {
        this.__super.b2Shape.call(this);
        this.m_type = h.e_polygonShape;
        this.m_centroid = new m;
        this.m_vertices = new Vector;
        this.m_normals = new Vector
    };
    g.prototype.Reserve = function (b) {
        b === void 0 && (b = 0);
        for (var c = parseInt(this.m_vertices.length) ; c < b; c++) {
            this.m_vertices[c] = new m;
            this.m_normals[c] = new m
        }
    };
    g.ComputeCentroid = function (b, c) {
        c === void 0 && (c = 0);
        for (var d = new m, e = 0, f = 1 / 3, g = 0; g < c; ++g) {
            var h = b[g],
                j = g + 1 < c ? b[parseInt(g + 1)] : b[0],
                k = 0.5 * ((h.x - 0) * (j.y - 0) - (h.y - 0) * (j.x - 0)),
                e = e + k;
            d.x = d.x + k * f * (0 + h.x + j.x);
            d.y = d.y + k * f * (0 + h.y + j.y)
        }
        d.x = d.x * (1 / e);
        d.y = d.y *
            (1 / e);
        return d
    };
    g.ComputeOBB = function (b, c, d) {
        d === void 0 && (d = 0);
        for (var e = 0, f = new Vector(d + 1), e = 0; e < d; ++e) f[e] = c[e];
        f[d] = f[0];
        c = Number.MAX_VALUE;
        for (e = 1; e <= d; ++e) {
            for (var g = f[parseInt(e - 1)], h = f[e].x - g.x, j = f[e].y - g.y, k = Math.sqrt(h * h + j * j), h = h / k, j = j / k, l = -j, m = h, n = k = Number.MAX_VALUE, s = -Number.MAX_VALUE, p = -Number.MAX_VALUE, q = 0; q < d; ++q) {
                var r = f[q].x - g.x,
                    N = f[q].y - g.y,
                    U = h * r + j * N,
                    r = l * r + m * N;
                U < k && (k = U);
                r < n && (n = r);
                U > s && (s = U);
                r > p && (p = r)
            }
            q = (s - k) * (p - n);
            if (q < 0.95 * c) {
                c = q;
                b.R.col1.x = h;
                b.R.col1.y = j;
                b.R.col2.x = l;
                b.R.col2.y =
                    m;
                h = 0.5 * (k + s);
                j = 0.5 * (n + p);
                l = b.R;
                b.center.x = g.x + (l.col1.x * h + l.col2.x * j);
                b.center.y = g.y + (l.col1.y * h + l.col2.y * j);
                b.extents.x = 0.5 * (s - k);
                b.extents.y = 0.5 * (p - n)
            }
        }
    };
    Box2D.postDefs.push(function () {
        Box2D.Collision.Shapes.b2PolygonShape.s_mat = new j
    });
    h.b2Shape = function () { };
    h.prototype.Copy = function () {
        return null
    };
    h.prototype.Set = function (b) {
        this.m_radius = b.m_radius
    };
    h.prototype.GetType = function () {
        return this.m_type
    };
    h.prototype.TestPoint = function () {
        return false
    };
    h.prototype.RayCast = function () {
        return false
    };
    h.prototype.ComputeAABB = function () { };
    h.prototype.ComputeMass = function () { };
    h.prototype.ComputeSubmergedArea = function () {
        return 0
    };
    h.TestOverlap = function (b, c, d, e) {
        var f = new q;
        f.proxyA = new s;
        f.proxyA.Set(b);
        f.proxyB = new s;
        f.proxyB.Set(d);
        f.transformA = c;
        f.transformB = e;
        f.useRadii = true;
        b = new r;
        b.count = 0;
        c = new p;
        n.Distance(c, b, f);
        return c.distance < 10 * Number.MIN_VALUE
    };
    h.prototype.b2Shape = function () {
        this.m_type = h.e_unknownShape;
        this.m_radius = b.b2_linearSlop
    };
    Box2D.postDefs.push(function () {
        Box2D.Collision.Shapes.b2Shape.e_unknownShape = -1;
        Box2D.Collision.Shapes.b2Shape.e_circleShape = 0;
        Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1;
        Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2;
        Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3;
        Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1;
        Box2D.Collision.Shapes.b2Shape.e_missCollide = 0;
        Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = -1
    })
})();
(function () {
    var b = Box2D.Common.b2Color,
        c = Box2D.Common.b2Settings,
        d = Box2D.Common.Math.b2Math;
    b.b2Color = function () {
        this._b = this._g = this._r = 0
    };
    b.prototype.b2Color = function (b, c, g) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        g === void 0 && (g = 0);
        this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
        this._g = Box2D.parseUInt(255 * d.Clamp(c, 0, 1));
        this._b = Box2D.parseUInt(255 * d.Clamp(g, 0, 1))
    };
    b.prototype.Set = function (b, c, g) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        g === void 0 && (g = 0);
        this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
        this._g =
            Box2D.parseUInt(255 * d.Clamp(c, 0, 1));
        this._b = Box2D.parseUInt(255 * d.Clamp(g, 0, 1))
    };
    Object.defineProperty(b.prototype, "r", {
        enumerable: false,
        configurable: true,
        set: function (b) {
            b === void 0 && (b = 0);
            this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1))
        }
    });
    Object.defineProperty(b.prototype, "g", {
        enumerable: false,
        configurable: true,
        set: function (b) {
            b === void 0 && (b = 0);
            this._g = Box2D.parseUInt(255 * d.Clamp(b, 0, 1))
        }
    });
    Object.defineProperty(b.prototype, "b", {
        enumerable: false,
        configurable: true,
        set: function (b) {
            b === void 0 && (b = 0);
            this._b =
                Box2D.parseUInt(255 * d.Clamp(b, 0, 1))
        }
    });
    Object.defineProperty(b.prototype, "color", {
        enumerable: false,
        configurable: true,
        get: function () {
            return this._r << 16 | this._g << 8 | this._b
        }
    });
    c.b2Settings = function () { };
    c.b2MixFriction = function (b, c) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        return Math.sqrt(b * c)
    };
    c.b2MixRestitution = function (b, c) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        return b > c ? b : c
    };
    c.b2Assert = function (b) {
        if (!b) throw "Assertion Failed";
    };
    Box2D.postDefs.push(function () {
        Box2D.Common.b2Settings.VERSION = "2.1alpha";
        Box2D.Common.b2Settings.USHRT_MAX = 65535;
        Box2D.Common.b2Settings.b2_pi = Math.PI;
        Box2D.Common.b2Settings.b2_maxManifoldPoints = 2;
        Box2D.Common.b2Settings.b2_aabbExtension = 0.1;
        Box2D.Common.b2Settings.b2_aabbMultiplier = 2;
        Box2D.Common.b2Settings.b2_polygonRadius = 2 * c.b2_linearSlop;
        Box2D.Common.b2Settings.b2_linearSlop = 0.005;
        Box2D.Common.b2Settings.b2_angularSlop = 2 / 180 * c.b2_pi;
        Box2D.Common.b2Settings.b2_toiSlop = 8 * c.b2_linearSlop;
        Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32;
        Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland =
            32;
        Box2D.Common.b2Settings.b2_velocityThreshold = 1;
        Box2D.Common.b2Settings.b2_maxLinearCorrection = 0.2;
        Box2D.Common.b2Settings.b2_maxAngularCorrection = 8 / 180 * c.b2_pi;
        Box2D.Common.b2Settings.b2_maxTranslation = 2;
        Box2D.Common.b2Settings.b2_maxTranslationSquared = c.b2_maxTranslation * c.b2_maxTranslation;
        Box2D.Common.b2Settings.b2_maxRotation = 0.5 * c.b2_pi;
        Box2D.Common.b2Settings.b2_maxRotationSquared = c.b2_maxRotation * c.b2_maxRotation;
        Box2D.Common.b2Settings.b2_contactBaumgarte = 0.2;
        Box2D.Common.b2Settings.b2_timeToSleep =
            0.5;
        Box2D.Common.b2Settings.b2_linearSleepTolerance = 0.01;
        Box2D.Common.b2Settings.b2_angularSleepTolerance = 2 / 180 * c.b2_pi
    })
})();
(function () {
    var b = Box2D.Common.Math.b2Mat22,
        c = Box2D.Common.Math.b2Mat33,
        d = Box2D.Common.Math.b2Math,
        e = Box2D.Common.Math.b2Sweep,
        f = Box2D.Common.Math.b2Transform,
        g = Box2D.Common.Math.b2Vec2,
        h = Box2D.Common.Math.b2Vec3;
    b.b2Mat22 = function () {
        this.col1 = new g;
        this.col2 = new g
    };
    b.prototype.b2Mat22 = function () {
        this.SetIdentity()
    };
    b.FromAngle = function (c) {
        c === void 0 && (c = 0);
        var d = new b;
        d.Set(c);
        return d
    };
    b.FromVV = function (c, d) {
        var e = new b;
        e.SetVV(c, d);
        return e
    };
    b.prototype.Set = function (b) {
        b === void 0 && (b = 0);
        var c =
            Math.cos(b),
            b = Math.sin(b);
        this.col1.x = c;
        this.col2.x = -b;
        this.col1.y = b;
        this.col2.y = c
    };
    b.prototype.SetVV = function (b, c) {
        this.col1.SetV(b);
        this.col2.SetV(c)
    };
    b.prototype.Copy = function () {
        var c = new b;
        c.SetM(this);
        return c
    };
    b.prototype.SetM = function (b) {
        this.col1.SetV(b.col1);
        this.col2.SetV(b.col2)
    };
    b.prototype.AddM = function (b) {
        this.col1.x = this.col1.x + b.col1.x;
        this.col1.y = this.col1.y + b.col1.y;
        this.col2.x = this.col2.x + b.col2.x;
        this.col2.y = this.col2.y + b.col2.y
    };
    b.prototype.SetIdentity = function () {
        this.col1.x =
            1;
        this.col2.x = 0;
        this.col1.y = 0;
        this.col2.y = 1
    };
    b.prototype.SetZero = function () {
        this.col1.x = 0;
        this.col2.x = 0;
        this.col1.y = 0;
        this.col2.y = 0
    };
    b.prototype.GetAngle = function () {
        return Math.atan2(this.col1.y, this.col1.x)
    };
    b.prototype.GetInverse = function (b) {
        var c = this.col1.x,
            d = this.col2.x,
            e = this.col1.y,
            f = this.col2.y,
            g = c * f - d * e;
        g != 0 && (g = 1 / g);
        b.col1.x = g * f;
        b.col2.x = -g * d;
        b.col1.y = -g * e;
        b.col2.y = g * c;
        return b
    };
    b.prototype.Solve = function (b, c, d) {
        c === void 0 && (c = 0);
        d === void 0 && (d = 0);
        var e = this.col1.x,
            f = this.col2.x,
            g = this.col1.y,
            h = this.col2.y,
            s = e * h - f * g;
        s != 0 && (s = 1 / s);
        b.x = s * (h * c - f * d);
        b.y = s * (e * d - g * c);
        return b
    };
    b.prototype.Abs = function () {
        this.col1.Abs();
        this.col2.Abs()
    };
    c.b2Mat33 = function () {
        this.col1 = new h;
        this.col2 = new h;
        this.col3 = new h
    };
    c.prototype.b2Mat33 = function (b, c, d) {
        b === void 0 && (b = null);
        c === void 0 && (c = null);
        d === void 0 && (d = null);
        if (!b && !c && !d) {
            this.col1.SetZero();
            this.col2.SetZero();
            this.col3.SetZero()
        } else {
            this.col1.SetV(b);
            this.col2.SetV(c);
            this.col3.SetV(d)
        }
    };
    c.prototype.SetVVV = function (b, c, d) {
        this.col1.SetV(b);
        this.col2.SetV(c);
        this.col3.SetV(d)
    };
    c.prototype.Copy = function () {
        return new c(this.col1, this.col2, this.col3)
    };
    c.prototype.SetM = function (b) {
        this.col1.SetV(b.col1);
        this.col2.SetV(b.col2);
        this.col3.SetV(b.col3)
    };
    c.prototype.AddM = function (b) {
        this.col1.x = this.col1.x + b.col1.x;
        this.col1.y = this.col1.y + b.col1.y;
        this.col1.z = this.col1.z + b.col1.z;
        this.col2.x = this.col2.x + b.col2.x;
        this.col2.y = this.col2.y + b.col2.y;
        this.col2.z = this.col2.z + b.col2.z;
        this.col3.x = this.col3.x + b.col3.x;
        this.col3.y = this.col3.y + b.col3.y;
        this.col3.z = this.col3.z +
            b.col3.z
    };
    c.prototype.SetIdentity = function () {
        this.col1.x = 1;
        this.col2.x = 0;
        this.col3.x = 0;
        this.col1.y = 0;
        this.col2.y = 1;
        this.col3.y = 0;
        this.col1.z = 0;
        this.col2.z = 0;
        this.col3.z = 1
    };
    c.prototype.SetZero = function () {
        this.col1.x = 0;
        this.col2.x = 0;
        this.col3.x = 0;
        this.col1.y = 0;
        this.col2.y = 0;
        this.col3.y = 0;
        this.col1.z = 0;
        this.col2.z = 0;
        this.col3.z = 0
    };
    c.prototype.Solve22 = function (b, c, d) {
        c === void 0 && (c = 0);
        d === void 0 && (d = 0);
        var e = this.col1.x,
            f = this.col2.x,
            g = this.col1.y,
            h = this.col2.y,
            s = e * h - f * g;
        s != 0 && (s = 1 / s);
        b.x = s * (h * c - f * d);
        b.y = s * (e * d - g * c);
        return b
    };
    c.prototype.Solve33 = function (b, c, d, e) {
        c === void 0 && (c = 0);
        d === void 0 && (d = 0);
        e === void 0 && (e = 0);
        var f = this.col1.x,
            g = this.col1.y,
            h = this.col1.z,
            s = this.col2.x,
            r = this.col2.y,
            o = this.col2.z,
            t = this.col3.x,
            u = this.col3.y,
            w = this.col3.z,
            z = f * (r * w - o * u) + g * (o * t - s * w) + h * (s * u - r * t);
        z != 0 && (z = 1 / z);
        b.x = z * (c * (r * w - o * u) + d * (o * t - s * w) + e * (s * u - r * t));
        b.y = z * (f * (d * w - e * u) + g * (e * t - c * w) + h * (c * u - d * t));
        b.z = z * (f * (r * e - o * d) + g * (o * c - s * e) + h * (s * d - r * c));
        return b
    };
    d.b2Math = function () { };
    d.IsValid = function (b) {
        b === void 0 && (b =
            0);
        return isFinite(b)
    };
    d.Dot = function (b, c) {
        return b.x * c.x + b.y * c.y
    };
    d.CrossVV = function (b, c) {
        return b.x * c.y - b.y * c.x
    };
    d.CrossVF = function (b, c) {
        c === void 0 && (c = 0);
        return new g(c * b.y, -c * b.x)
    };
    d.CrossFV = function (b, c) {
        b === void 0 && (b = 0);
        return new g(-b * c.y, b * c.x)
    };
    d.MulMV = function (b, c) {
        return new g(b.col1.x * c.x + b.col2.x * c.y, b.col1.y * c.x + b.col2.y * c.y)
    };
    d.MulTMV = function (b, c) {
        return new g(d.Dot(c, b.col1), d.Dot(c, b.col2))
    };
    d.MulX = function (b, c) {
        var e = d.MulMV(b.R, c);
        e.x = e.x + b.position.x;
        e.y = e.y + b.position.y;
        return e
    };
    d.MulXT = function (b, c) {
        var e = d.SubtractVV(c, b.position),
            f = e.x * b.R.col1.x + e.y * b.R.col1.y;
        e.y = e.x * b.R.col2.x + e.y * b.R.col2.y;
        e.x = f;
        return e
    };
    d.AddVV = function (b, c) {
        return new g(b.x + c.x, b.y + c.y)
    };
    d.SubtractVV = function (b, c) {
        return new g(b.x - c.x, b.y - c.y)
    };
    d.Distance = function (b, c) {
        var d = b.x - c.x,
            e = b.y - c.y;
        return Math.sqrt(d * d + e * e)
    };
    d.DistanceSquared = function (b, c) {
        var d = b.x - c.x,
            e = b.y - c.y;
        return d * d + e * e
    };
    d.MulFV = function (b, c) {
        b === void 0 && (b = 0);
        return new g(b * c.x, b * c.y)
    };
    d.AddMM = function (c, e) {
        return b.FromVV(d.AddVV(c.col1,
            e.col1), d.AddVV(c.col2, e.col2))
    };
    d.MulMM = function (c, e) {
        return b.FromVV(d.MulMV(c, e.col1), d.MulMV(c, e.col2))
    };
    d.MulTMM = function (c, e) {
        var f = new g(d.Dot(c.col1, e.col1), d.Dot(c.col2, e.col1)),
            h = new g(d.Dot(c.col1, e.col2), d.Dot(c.col2, e.col2));
        return b.FromVV(f, h)
    };
    d.Abs = function (b) {
        b === void 0 && (b = 0);
        return b > 0 ? b : -b
    };
    d.AbsV = function (b) {
        return new g(d.Abs(b.x), d.Abs(b.y))
    };
    d.AbsM = function (c) {
        return b.FromVV(d.AbsV(c.col1), d.AbsV(c.col2))
    };
    d.Min = function (b, c) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        return b <
            c ? b : c
    };
    d.MinV = function (b, c) {
        return new g(d.Min(b.x, c.x), d.Min(b.y, c.y))
    };
    d.Max = function (b, c) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        return b > c ? b : c
    };
    d.MaxV = function (b, c) {
        return new g(d.Max(b.x, c.x), d.Max(b.y, c.y))
    };
    d.Clamp = function (b, c, d) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        d === void 0 && (d = 0);
        return b < c ? c : b > d ? d : b
    };
    d.ClampV = function (b, c, e) {
        return d.MaxV(c, d.MinV(b, e))
    };
    d.Swap = function (b, c) {
        var d = b[0];
        b[0] = c[0];
        c[0] = d
    };
    d.Random = function () {
        return Math.random() * 2 - 1
    };
    d.RandomRange = function (b, c) {
        b === void 0 &&
            (b = 0);
        c === void 0 && (c = 0);
        var d = Math.random();
        return (c - b) * d + b
    };
    d.NextPowerOfTwo = function (b) {
        b === void 0 && (b = 0);
        b = b | b >> 1 & 2147483647;
        b = b | b >> 2 & 1073741823;
        b = b | b >> 4 & 268435455;
        b = b | b >> 8 & 16777215;
        return (b | b >> 16 & 65535) + 1
    };
    d.IsPowerOfTwo = function (b) {
        b === void 0 && (b = 0);
        return b > 0 && (b & b - 1) == 0
    };
    Box2D.postDefs.push(function () {
        Box2D.Common.Math.b2Math.b2Vec2_zero = new g(0, 0);
        Box2D.Common.Math.b2Math.b2Mat22_identity = b.FromVV(new g(1, 0), new g(0, 1));
        Box2D.Common.Math.b2Math.b2Transform_identity = new f(d.b2Vec2_zero, d.b2Mat22_identity)
    });
    e.b2Sweep = function () {
        this.localCenter = new g;
        this.c0 = new g;
        this.c = new g
    };
    e.prototype.Set = function (b) {
        this.localCenter.SetV(b.localCenter);
        this.c0.SetV(b.c0);
        this.c.SetV(b.c);
        this.a0 = b.a0;
        this.a = b.a;
        this.t0 = b.t0
    };
    e.prototype.Copy = function () {
        var b = new e;
        b.localCenter.SetV(this.localCenter);
        b.c0.SetV(this.c0);
        b.c.SetV(this.c);
        b.a0 = this.a0;
        b.a = this.a;
        b.t0 = this.t0;
        return b
    };
    e.prototype.GetTransform = function (b, c) {
        c === void 0 && (c = 0);
        b.position.x = (1 - c) * this.c0.x + c * this.c.x;
        b.position.y = (1 - c) * this.c0.y + c * this.c.y;
        b.R.Set((1 - c) * this.a0 + c * this.a);
        var d = b.R;
        b.position.x = b.position.x - (d.col1.x * this.localCenter.x + d.col2.x * this.localCenter.y);
        b.position.y = b.position.y - (d.col1.y * this.localCenter.x + d.col2.y * this.localCenter.y)
    };
    e.prototype.Advance = function (b) {
        b === void 0 && (b = 0);
        if (this.t0 < b && 1 - this.t0 > Number.MIN_VALUE) {
            var c = (b - this.t0) / (1 - this.t0);
            this.c0.x = (1 - c) * this.c0.x + c * this.c.x;
            this.c0.y = (1 - c) * this.c0.y + c * this.c.y;
            this.a0 = (1 - c) * this.a0 + c * this.a;
            this.t0 = b
        }
    };
    f.b2Transform = function () {
        this.position = new g;
        this.R =
            new b
    };
    f.prototype.b2Transform = function (b, c) {
        b === void 0 && (b = null);
        c === void 0 && (c = null);
        if (b) {
            this.position.SetV(b);
            this.R.SetM(c)
        }
    };
    f.prototype.Initialize = function (b, c) {
        this.position.SetV(b);
        this.R.SetM(c)
    };
    f.prototype.SetIdentity = function () {
        this.position.SetZero();
        this.R.SetIdentity()
    };
    f.prototype.Set = function (b) {
        this.position.SetV(b.position);
        this.R.SetM(b.R)
    };
    f.prototype.GetAngle = function () {
        return Math.atan2(this.R.col1.y, this.R.col1.x)
    };
    g.b2Vec2 = function () { };
    g.prototype.b2Vec2 = function (b, c) {
        b ===
            void 0 && (b = 0);
        c === void 0 && (c = 0);
        this.x = b;
        this.y = c
    };
    g.prototype.SetZero = function () {
        this.y = this.x = 0
    };
    g.prototype.Set = function (b, c) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        this.x = b;
        this.y = c
    };
    g.prototype.SetV = function (b) {
        this.x = b.x;
        this.y = b.y
    };
    g.prototype.GetNegative = function () {
        return new g(-this.x, -this.y)
    };
    g.prototype.NegativeSelf = function () {
        this.x = -this.x;
        this.y = -this.y
    };
    g.Make = function (b, c) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        return new g(b, c)
    };
    g.prototype.Copy = function () {
        return new g(this.x, this.y)
    };
    g.prototype.Add = function (b) {
        this.x = this.x + b.x;
        this.y = this.y + b.y
    };
    g.prototype.Subtract = function (b) {
        this.x = this.x - b.x;
        this.y = this.y - b.y
    };
    g.prototype.Multiply = function (b) {
        b === void 0 && (b = 0);
        this.x = this.x * b;
        this.y = this.y * b
    };
    g.prototype.MulM = function (b) {
        var c = this.x;
        this.x = b.col1.x * c + b.col2.x * this.y;
        this.y = b.col1.y * c + b.col2.y * this.y
    };
    g.prototype.MulTM = function (b) {
        var c = d.Dot(this, b.col1);
        this.y = d.Dot(this, b.col2);
        this.x = c
    };
    g.prototype.CrossVF = function (b) {
        b === void 0 && (b = 0);
        var c = this.x;
        this.x = b * this.y;
        this.y = -b * c
    };
    g.prototype.CrossFV = function (b) {
        b === void 0 && (b = 0);
        var c = this.x;
        this.x = -b * this.y;
        this.y = b * c
    };
    g.prototype.MinV = function (b) {
        this.x = this.x < b.x ? this.x : b.x;
        this.y = this.y < b.y ? this.y : b.y
    };
    g.prototype.MaxV = function (b) {
        this.x = this.x > b.x ? this.x : b.x;
        this.y = this.y > b.y ? this.y : b.y
    };
    g.prototype.Abs = function () {
        if (this.x < 0) this.x = -this.x;
        if (this.y < 0) this.y = -this.y
    };
    g.prototype.Length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    };
    g.prototype.LengthSquared = function () {
        return this.x * this.x + this.y * this.y
    };
    g.prototype.Normalize = function () {
        var b = Math.sqrt(this.x * this.x + this.y * this.y);
        if (b < Number.MIN_VALUE) return 0;
        var c = 1 / b;
        this.x = this.x * c;
        this.y = this.y * c;
        return b
    };
    g.prototype.IsValid = function () {
        return d.IsValid(this.x) && d.IsValid(this.y)
    };
    h.b2Vec3 = function () { };
    h.prototype.b2Vec3 = function (b, c, d) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        d === void 0 && (d = 0);
        this.x = b;
        this.y = c;
        this.z = d
    };
    h.prototype.SetZero = function () {
        this.x = this.y = this.z = 0
    };
    h.prototype.Set = function (b, c, d) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        d ===
            void 0 && (d = 0);
        this.x = b;
        this.y = c;
        this.z = d
    };
    h.prototype.SetV = function (b) {
        this.x = b.x;
        this.y = b.y;
        this.z = b.z
    };
    h.prototype.GetNegative = function () {
        return new h(-this.x, -this.y, -this.z)
    };
    h.prototype.NegativeSelf = function () {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z
    };
    h.prototype.Copy = function () {
        return new h(this.x, this.y, this.z)
    };
    h.prototype.Add = function (b) {
        this.x = this.x + b.x;
        this.y = this.y + b.y;
        this.z = this.z + b.z
    };
    h.prototype.Subtract = function (b) {
        this.x = this.x - b.x;
        this.y = this.y - b.y;
        this.z = this.z - b.z
    };
    h.prototype.Multiply =
        function (b) {
            b === void 0 && (b = 0);
            this.x = this.x * b;
            this.y = this.y * b;
            this.z = this.z * b
        }
})();
(function () {
    var b = Box2D.Common.Math.b2Math,
        c = Box2D.Common.Math.b2Sweep,
        d = Box2D.Common.Math.b2Transform,
        e = Box2D.Common.Math.b2Vec2,
        f = Box2D.Common.b2Color,
        g = Box2D.Common.b2Settings,
        h = Box2D.Collision.b2AABB,
        j = Box2D.Collision.b2ContactPoint,
        k = Box2D.Collision.b2DynamicTreeBroadPhase,
        l = Box2D.Collision.b2RayCastInput,
        m = Box2D.Collision.b2RayCastOutput,
        n = Box2D.Collision.Shapes.b2CircleShape,
        q = Box2D.Collision.Shapes.b2EdgeShape,
        p = Box2D.Collision.Shapes.b2MassData,
        s = Box2D.Collision.Shapes.b2PolygonShape,
        r = Box2D.Collision.Shapes.b2Shape,
        o = Box2D.Dynamics.b2Body,
        t = Box2D.Dynamics.b2BodyDef,
        u = Box2D.Dynamics.b2ContactFilter,
        w = Box2D.Dynamics.b2ContactImpulse,
        z = Box2D.Dynamics.b2ContactListener,
        A = Box2D.Dynamics.b2ContactManager,
        C = Box2D.Dynamics.b2DebugDraw,
        G = Box2D.Dynamics.b2DestructionListener,
        H = Box2D.Dynamics.b2FilterData,
        K = Box2D.Dynamics.b2Fixture,
        P = Box2D.Dynamics.b2FixtureDef,
        T = Box2D.Dynamics.b2Island,
        D = Box2D.Dynamics.b2TimeStep,
        F = Box2D.Dynamics.b2World,
        I = Box2D.Dynamics.Contacts.b2Contact,
        J = Box2D.Dynamics.Contacts.b2ContactFactory,
        N =
        Box2D.Dynamics.Contacts.b2ContactSolver,
        U = Box2D.Dynamics.Joints.b2Joint,
        Q = Box2D.Dynamics.Joints.b2PulleyJoint;
    o.b2Body = function () {
        this.m_xf = new d;
        this.m_sweep = new c;
        this.m_linearVelocity = new e;
        this.m_force = new e
    };
    o.prototype.connectEdges = function (c, d, e) {
        e === void 0 && (e = 0);
        var f = Math.atan2(d.GetDirectionVector().y, d.GetDirectionVector().x),
            e = b.MulFV(Math.tan((f - e) * 0.5), d.GetDirectionVector()),
            e = b.SubtractVV(e, d.GetNormalVector()),
            e = b.MulFV(g.b2_toiSlop, e),
            e = b.AddVV(e, d.GetVertex1()),
            h = b.AddVV(c.GetDirectionVector(),
                d.GetDirectionVector());
        h.Normalize();
        var j = b.Dot(c.GetDirectionVector(), d.GetNormalVector()) > 0;
        c.SetNextEdge(d, e, h, j);
        d.SetPrevEdge(c, e, h, j);
        return f
    };
    o.prototype.CreateFixture = function (b) {
        if (this.m_world.IsLocked() == true) return null;
        var c = new K;
        c.Create(this, this.m_xf, b);
        this.m_flags & o.e_activeFlag && c.CreateProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf);
        c.m_next = this.m_fixtureList;
        this.m_fixtureList = c;
        ++this.m_fixtureCount;
        c.m_body = this;
        c.m_density > 0 && this.ResetMassData();
        this.m_world.m_flags =
            this.m_world.m_flags | F.e_newFixture;
        return c
    };
    o.prototype.CreateFixture2 = function (b, c) {
        c === void 0 && (c = 0);
        var d = new P;
        d.shape = b;
        d.density = c;
        return this.CreateFixture(d)
    };
    o.prototype.DestroyFixture = function (b) {
        if (this.m_world.IsLocked() != true) {
            for (var c = this.m_fixtureList, d = null; c != null;) {
                if (c == b) {
                    d ? d.m_next = b.m_next : this.m_fixtureList = b.m_next;
                    break
                }
                d = c;
                c = c.m_next
            }
            for (c = this.m_contactList; c;) {
                var d = c.contact,
                    c = c.next,
                    e = d.GetFixtureA(),
                    f = d.GetFixtureB();
                (b == e || b == f) && this.m_world.m_contactManager.Destroy(d)
            }
            this.m_flags &
                o.e_activeFlag && b.DestroyProxy(this.m_world.m_contactManager.m_broadPhase);
            b.Destroy();
            b.m_body = null;
            b.m_next = null;
            --this.m_fixtureCount;
            this.ResetMassData()
        }
    };
    o.prototype.SetPositionAndAngle = function (b, c) {
        c === void 0 && (c = 0);
        var d;
        if (this.m_world.IsLocked() != true) {
            this.m_xf.R.Set(c);
            this.m_xf.position.SetV(b);
            d = this.m_xf.R;
            var e = this.m_sweep.localCenter;
            this.m_sweep.c.x = d.col1.x * e.x + d.col2.x * e.y;
            this.m_sweep.c.y = d.col1.y * e.x + d.col2.y * e.y;
            this.m_sweep.c.x = this.m_sweep.c.x + this.m_xf.position.x;
            this.m_sweep.c.y =
                this.m_sweep.c.y + this.m_xf.position.y;
            this.m_sweep.c0.SetV(this.m_sweep.c);
            this.m_sweep.a0 = this.m_sweep.a = c;
            e = this.m_world.m_contactManager.m_broadPhase;
            for (d = this.m_fixtureList; d; d = d.m_next) d.Synchronize(e, this.m_xf, this.m_xf);
            this.m_world.m_contactManager.FindNewContacts()
        }
    };
    o.prototype.SetTransform = function (b) {
        this.SetPositionAndAngle(b.position, b.GetAngle())
    };
    o.prototype.GetTransform = function () {
        return this.m_xf
    };
    o.prototype.GetPosition = function () {
        return this.m_xf.position
    };
    o.prototype.SetPosition =
        function (b) {
            this.SetPositionAndAngle(b, this.GetAngle())
        };
    o.prototype.GetAngle = function () {
        return this.m_sweep.a
    };
    o.prototype.SetAngle = function (b) {
        b === void 0 && (b = 0);
        this.SetPositionAndAngle(this.GetPosition(), b)
    };
    o.prototype.GetWorldCenter = function () {
        return this.m_sweep.c
    };
    o.prototype.GetLocalCenter = function () {
        return this.m_sweep.localCenter
    };
    o.prototype.SetLinearVelocity = function (b) {
        this.m_type != o.b2_staticBody && this.m_linearVelocity.SetV(b)
    };
    o.prototype.GetLinearVelocity = function () {
        return this.m_linearVelocity
    };
    o.prototype.SetAngularVelocity = function (b) {
        b === void 0 && (b = 0);
        if (this.m_type != o.b2_staticBody) this.m_angularVelocity = b
    };
    o.prototype.GetAngularVelocity = function () {
        return this.m_angularVelocity
    };
    o.prototype.GetDefinition = function () {
        var b = new t;
        b.type = this.GetType();
        b.allowSleep = (this.m_flags & o.e_allowSleepFlag) == o.e_allowSleepFlag;
        b.angle = this.GetAngle();
        b.angularDamping = this.m_angularDamping;
        b.angularVelocity = this.m_angularVelocity;
        b.fixedRotation = (this.m_flags & o.e_fixedRotationFlag) == o.e_fixedRotationFlag;
        b.bullet = (this.m_flags & o.e_bulletFlag) == o.e_bulletFlag;
        b.awake = (this.m_flags & o.e_awakeFlag) == o.e_awakeFlag;
        b.linearDamping = this.m_linearDamping;
        b.linearVelocity.SetV(this.GetLinearVelocity());
        b.position = this.GetPosition();
        b.userData = this.GetUserData();
        return b
    };
    o.prototype.ApplyForce = function (b, c) {
        if (this.m_type == o.b2_dynamicBody) {
            this.IsAwake() == false && this.SetAwake(true);
            this.m_force.x = this.m_force.x + b.x;
            this.m_force.y = this.m_force.y + b.y;
            this.m_torque = this.m_torque + ((c.x - this.m_sweep.c.x) * b.y - (c.y -
                this.m_sweep.c.y) * b.x)
        }
    };
    o.prototype.ApplyTorque = function (b) {
        b === void 0 && (b = 0);
        if (this.m_type == o.b2_dynamicBody) {
            this.IsAwake() == false && this.SetAwake(true);
            this.m_torque = this.m_torque + b
        }
    };
    o.prototype.ApplyImpulse = function (b, c) {
        if (this.m_type == o.b2_dynamicBody) {
            this.IsAwake() == false && this.SetAwake(true);
            this.m_linearVelocity.x = this.m_linearVelocity.x + this.m_invMass * b.x;
            this.m_linearVelocity.y = this.m_linearVelocity.y + this.m_invMass * b.y;
            this.m_angularVelocity = this.m_angularVelocity + this.m_invI * ((c.x -
                this.m_sweep.c.x) * b.y - (c.y - this.m_sweep.c.y) * b.x)
        }
    };
    o.prototype.Split = function (c) {
        for (var d = this.GetLinearVelocity().Copy(), e = this.GetAngularVelocity(), f = this.GetWorldCenter(), g = this.m_world.CreateBody(this.GetDefinition()), h, j = this.m_fixtureList; j;)
            if (c(j)) {
                var k = j.m_next;
                h ? h.m_next = k : this.m_fixtureList = k;
                this.m_fixtureCount--;
                j.m_next = g.m_fixtureList;
                g.m_fixtureList = j;
                g.m_fixtureCount++;
                j.m_body = g;
                j = k
            } else {
                h = j;
                j = j.m_next
            }
        this.ResetMassData();
        g.ResetMassData();
        h = this.GetWorldCenter();
        c = g.GetWorldCenter();
        h = b.AddVV(d, b.CrossFV(e, b.SubtractVV(h, f)));
        d = b.AddVV(d, b.CrossFV(e, b.SubtractVV(c, f)));
        this.SetLinearVelocity(h);
        g.SetLinearVelocity(d);
        this.SetAngularVelocity(e);
        g.SetAngularVelocity(e);
        this.SynchronizeFixtures();
        g.SynchronizeFixtures();
        return g
    };
    o.prototype.Merge = function (b) {
        var c;
        for (c = b.m_fixtureList; c;) {
            var d = c.m_next;
            b.m_fixtureCount--;
            c.m_next = this.m_fixtureList;
            this.m_fixtureList = c;
            this.m_fixtureCount++;
            c.m_body = f;
            c = d
        }
        e.m_fixtureCount = 0;
        var e = this,
            f = b;
        e.GetWorldCenter();
        f.GetWorldCenter();
        e.GetLinearVelocity().Copy();
        f.GetLinearVelocity().Copy();
        e.GetAngularVelocity();
        f.GetAngularVelocity();
        e.ResetMassData();
        this.SynchronizeFixtures()
    };
    o.prototype.GetMass = function () {
        return this.m_mass
    };
    o.prototype.GetInertia = function () {
        return this.m_I
    };
    o.prototype.GetMassData = function (b) {
        b.mass = this.m_mass;
        b.I = this.m_I;
        b.center.SetV(this.m_sweep.localCenter)
    };
    o.prototype.SetMassData = function (c) {
        g.b2Assert(this.m_world.IsLocked() == false);
        if (this.m_world.IsLocked() != true && this.m_type == o.b2_dynamicBody) {
            this.m_invI =
                this.m_I = this.m_invMass = 0;
            this.m_mass = c.mass;
            if (this.m_mass <= 0) this.m_mass = 1;
            this.m_invMass = 1 / this.m_mass;
            if (c.I > 0 && (this.m_flags & o.e_fixedRotationFlag) == 0) {
                this.m_I = c.I - this.m_mass * (c.center.x * c.center.x + c.center.y * c.center.y);
                this.m_invI = 1 / this.m_I
            }
            var d = this.m_sweep.c.Copy();
            this.m_sweep.localCenter.SetV(c.center);
            this.m_sweep.c0.SetV(b.MulX(this.m_xf, this.m_sweep.localCenter));
            this.m_sweep.c.SetV(this.m_sweep.c0);
            this.m_linearVelocity.x = this.m_linearVelocity.x + this.m_angularVelocity * -(this.m_sweep.c.y -
                d.y);
            this.m_linearVelocity.y = this.m_linearVelocity.y + this.m_angularVelocity * +(this.m_sweep.c.x - d.x)
        }
    };
    o.prototype.ResetMassData = function () {
        this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0;
        this.m_sweep.localCenter.SetZero();
        if (!(this.m_type == o.b2_staticBody || this.m_type == o.b2_kinematicBody)) {
            for (var c = e.Make(0, 0), d = this.m_fixtureList; d; d = d.m_next)
                if (d.m_density != 0) {
                    var f = d.GetMassData();
                    this.m_mass = this.m_mass + f.mass;
                    c.x = c.x + f.center.x * f.mass;
                    c.y = c.y + f.center.y * f.mass;
                    this.m_I = this.m_I + f.I
                }
            if (this.m_mass >
                0) {
                this.m_invMass = 1 / this.m_mass;
                c.x = c.x * this.m_invMass;
                c.y = c.y * this.m_invMass
            } else this.m_invMass = this.m_mass = 1;
            if (this.m_I > 0 && (this.m_flags & o.e_fixedRotationFlag) == 0) {
                this.m_I = this.m_I - this.m_mass * (c.x * c.x + c.y * c.y);
                this.m_I = this.m_I * this.m_inertiaScale;
                g.b2Assert(this.m_I > 0);
                this.m_invI = 1 / this.m_I
            } else this.m_invI = this.m_I = 0;
            d = this.m_sweep.c.Copy();
            this.m_sweep.localCenter.SetV(c);
            this.m_sweep.c0.SetV(b.MulX(this.m_xf, this.m_sweep.localCenter));
            this.m_sweep.c.SetV(this.m_sweep.c0);
            this.m_linearVelocity.x =
                this.m_linearVelocity.x + this.m_angularVelocity * -(this.m_sweep.c.y - d.y);
            this.m_linearVelocity.y = this.m_linearVelocity.y + this.m_angularVelocity * +(this.m_sweep.c.x - d.x)
        }
    };
    o.prototype.GetWorldPoint = function (b) {
        var c = this.m_xf.R,
            b = new e(c.col1.x * b.x + c.col2.x * b.y, c.col1.y * b.x + c.col2.y * b.y);
        b.x = b.x + this.m_xf.position.x;
        b.y = b.y + this.m_xf.position.y;
        return b
    };
    o.prototype.GetWorldVector = function (c) {
        return b.MulMV(this.m_xf.R, c)
    };
    o.prototype.GetLocalPoint = function (c) {
        return b.MulXT(this.m_xf, c)
    };
    o.prototype.GetLocalVector =
        function (c) {
            return b.MulTMV(this.m_xf.R, c)
        };
    o.prototype.GetLinearVelocityFromWorldPoint = function (b) {
        return new e(this.m_linearVelocity.x - this.m_angularVelocity * (b.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (b.x - this.m_sweep.c.x))
    };
    o.prototype.GetLinearVelocityFromLocalPoint = function (b) {
        var c = this.m_xf.R,
            b = new e(c.col1.x * b.x + c.col2.x * b.y, c.col1.y * b.x + c.col2.y * b.y);
        b.x = b.x + this.m_xf.position.x;
        b.y = b.y + this.m_xf.position.y;
        return new e(this.m_linearVelocity.x - this.m_angularVelocity *
            (b.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (b.x - this.m_sweep.c.x))
    };
    o.prototype.GetLinearDamping = function () {
        return this.m_linearDamping
    };
    o.prototype.SetLinearDamping = function (b) {
        b === void 0 && (b = 0);
        this.m_linearDamping = b
    };
    o.prototype.GetAngularDamping = function () {
        return this.m_angularDamping
    };
    o.prototype.SetAngularDamping = function (b) {
        b === void 0 && (b = 0);
        this.m_angularDamping = b
    };
    o.prototype.SetType = function (b) {
        b === void 0 && (b = 0);
        if (this.m_type != b) {
            this.m_type = b;
            this.ResetMassData();
            if (this.m_type == o.b2_staticBody) {
                this.m_linearVelocity.SetZero();
                this.m_angularVelocity = 0
            }
            this.SetAwake(true);
            this.m_force.SetZero();
            this.m_torque = 0;
            for (b = this.m_contactList; b; b = b.next) b.contact.FlagForFiltering()
        }
    };
    o.prototype.GetType = function () {
        return this.m_type
    };
    o.prototype.SetBullet = function (b) {
        this.m_flags = b ? this.m_flags | o.e_bulletFlag : this.m_flags & ~o.e_bulletFlag
    };
    o.prototype.IsBullet = function () {
        return (this.m_flags & o.e_bulletFlag) == o.e_bulletFlag
    };
    o.prototype.SetSleepingAllowed = function (b) {
        if (b) this.m_flags =
            this.m_flags | o.e_allowSleepFlag;
        else {
            this.m_flags = this.m_flags & ~o.e_allowSleepFlag;
            this.SetAwake(true)
        }
    };
    o.prototype.SetAwake = function (b) {
        if (b) {
            this.m_flags = this.m_flags | o.e_awakeFlag;
            this.m_sleepTime = 0
        } else {
            this.m_flags = this.m_flags & ~o.e_awakeFlag;
            this.m_sleepTime = 0;
            this.m_linearVelocity.SetZero();
            this.m_angularVelocity = 0;
            this.m_force.SetZero();
            this.m_torque = 0
        }
    };
    o.prototype.IsAwake = function () {
        return (this.m_flags & o.e_awakeFlag) == o.e_awakeFlag
    };
    o.prototype.SetFixedRotation = function (b) {
        this.m_flags =
            b ? this.m_flags | o.e_fixedRotationFlag : this.m_flags & ~o.e_fixedRotationFlag;
        this.ResetMassData()
    };
    o.prototype.IsFixedRotation = function () {
        return (this.m_flags & o.e_fixedRotationFlag) == o.e_fixedRotationFlag
    };
    o.prototype.SetActive = function (b) {
        if (b != this.IsActive()) {
            var c;
            if (b) {
                this.m_flags = this.m_flags | o.e_activeFlag;
                b = this.m_world.m_contactManager.m_broadPhase;
                for (c = this.m_fixtureList; c; c = c.m_next) c.CreateProxy(b, this.m_xf)
            } else {
                this.m_flags = this.m_flags & ~o.e_activeFlag;
                b = this.m_world.m_contactManager.m_broadPhase;
                for (c = this.m_fixtureList; c; c = c.m_next) c.DestroyProxy(b);
                for (b = this.m_contactList; b;) {
                    c = b;
                    b = b.next;
                    this.m_world.m_contactManager.Destroy(c.contact)
                }
                this.m_contactList = null
            }
        }
    };
    o.prototype.IsActive = function () {
        return (this.m_flags & o.e_activeFlag) == o.e_activeFlag
    };
    o.prototype.IsSleepingAllowed = function () {
        return (this.m_flags & o.e_allowSleepFlag) == o.e_allowSleepFlag
    };
    o.prototype.GetFixtureList = function () {
        return this.m_fixtureList
    };
    o.prototype.GetJointList = function () {
        return this.m_jointList
    };
    o.prototype.GetControllerList =
        function () {
            return this.m_controllerList
        };
    o.prototype.GetContactList = function () {
        return this.m_contactList
    };
    o.prototype.GetNext = function () {
        return this.m_next
    };
    o.prototype.GetUserData = function () {
        return this.m_userData
    };
    o.prototype.SetUserData = function (b) {
        this.m_userData = b
    };
    o.prototype.GetWorld = function () {
        return this.m_world
    };
    o.prototype.b2Body = function (b, c) {
        this.m_flags = 0;
        if (b.bullet) this.m_flags = this.m_flags | o.e_bulletFlag;
        if (b.fixedRotation) this.m_flags = this.m_flags | o.e_fixedRotationFlag;
        if (b.allowSleep) this.m_flags =
            this.m_flags | o.e_allowSleepFlag;
        if (b.awake) this.m_flags = this.m_flags | o.e_awakeFlag;
        if (b.active) this.m_flags = this.m_flags | o.e_activeFlag;
        this.m_world = c;
        this.m_xf.position.SetV(b.position);
        this.m_xf.R.Set(b.angle);
        this.m_sweep.localCenter.SetZero();
        this.m_sweep.t0 = 1;
        this.m_sweep.a0 = this.m_sweep.a = b.angle;
        var d = this.m_xf.R,
            e = this.m_sweep.localCenter;
        this.m_sweep.c.x = d.col1.x * e.x + d.col2.x * e.y;
        this.m_sweep.c.y = d.col1.y * e.x + d.col2.y * e.y;
        this.m_sweep.c.x = this.m_sweep.c.x + this.m_xf.position.x;
        this.m_sweep.c.y =
            this.m_sweep.c.y + this.m_xf.position.y;
        this.m_sweep.c0.SetV(this.m_sweep.c);
        this.m_contactList = this.m_controllerList = this.m_jointList = null;
        this.m_controllerCount = 0;
        this.m_next = this.m_prev = null;
        this.m_linearVelocity.SetV(b.linearVelocity);
        this.m_angularVelocity = b.angularVelocity;
        this.m_linearDamping = b.linearDamping;
        this.m_angularDamping = b.angularDamping;
        this.m_force.Set(0, 0);
        this.m_sleepTime = this.m_torque = 0;
        this.m_type = b.type;
        this.m_invMass = this.m_type == o.b2_dynamicBody ? this.m_mass = 1 : this.m_mass = 0;
        this.m_invI = this.m_I = 0;
        this.m_inertiaScale = b.inertiaScale;
        this.m_userData = b.userData;
        this.m_fixtureList = null;
        this.m_fixtureCount = 0
    };
    o.prototype.SynchronizeFixtures = function () {
        var b = o.s_xf1;
        b.R.Set(this.m_sweep.a0);
        var c = b.R,
            d = this.m_sweep.localCenter;
        b.position.x = this.m_sweep.c0.x - (c.col1.x * d.x + c.col2.x * d.y);
        b.position.y = this.m_sweep.c0.y - (c.col1.y * d.x + c.col2.y * d.y);
        d = this.m_world.m_contactManager.m_broadPhase;
        for (c = this.m_fixtureList; c; c = c.m_next) c.Synchronize(d, b, this.m_xf)
    };
    o.prototype.SynchronizeTransform =
        function () {
            this.m_xf.R.Set(this.m_sweep.a);
            var b = this.m_xf.R,
                c = this.m_sweep.localCenter;
            this.m_xf.position.x = this.m_sweep.c.x - (b.col1.x * c.x + b.col2.x * c.y);
            this.m_xf.position.y = this.m_sweep.c.y - (b.col1.y * c.x + b.col2.y * c.y)
        };
    o.prototype.ShouldCollide = function (b) {
        if (this.m_type != o.b2_dynamicBody && b.m_type != o.b2_dynamicBody) return false;
        for (var c = this.m_jointList; c; c = c.next)
            if (c.other == b && c.joint.m_collideConnected == false) return false;
        return true
    };
    o.prototype.Advance = function (b) {
        b === void 0 && (b = 0);
        this.m_sweep.Advance(b);
        this.m_sweep.c.SetV(this.m_sweep.c0);
        this.m_sweep.a = this.m_sweep.a0;
        this.SynchronizeTransform()
    };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2Body.s_xf1 = new d;
        Box2D.Dynamics.b2Body.e_islandFlag = 1;
        Box2D.Dynamics.b2Body.e_awakeFlag = 2;
        Box2D.Dynamics.b2Body.e_allowSleepFlag = 4;
        Box2D.Dynamics.b2Body.e_bulletFlag = 8;
        Box2D.Dynamics.b2Body.e_fixedRotationFlag = 16;
        Box2D.Dynamics.b2Body.e_activeFlag = 32;
        Box2D.Dynamics.b2Body.b2_staticBody = 0;
        Box2D.Dynamics.b2Body.b2_kinematicBody = 1;
        Box2D.Dynamics.b2Body.b2_dynamicBody =
            2
    });
    t.b2BodyDef = function () {
        this.position = new e;
        this.linearVelocity = new e
    };
    t.prototype.b2BodyDef = function () {
        this.userData = null;
        this.position.Set(0, 0);
        this.angle = 0;
        this.linearVelocity.Set(0, 0);
        this.angularDamping = this.linearDamping = this.angularVelocity = 0;
        this.awake = this.allowSleep = true;
        this.bullet = this.fixedRotation = false;
        this.type = o.b2_staticBody;
        this.active = true;
        this.inertiaScale = 1
    };
    u.b2ContactFilter = function () { };
    u.prototype.ShouldCollide = function (b, c) {
        var d = b.GetFilterData(),
            e = c.GetFilterData();
        return d.groupIndex == e.groupIndex && d.groupIndex != 0 ? d.groupIndex > 0 : (d.maskBits & e.categoryBits) != 0 && (d.categoryBits & e.maskBits) != 0
    };
    u.prototype.RayCollide = function (b, c) {
        return !b ? true : this.ShouldCollide(b instanceof K ? b : null, c)
    };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new u
    });
    w.b2ContactImpulse = function () {
        this.normalImpulses = new Vector_a2j_Number(g.b2_maxManifoldPoints);
        this.tangentImpulses = new Vector_a2j_Number(g.b2_maxManifoldPoints)
    };
    z.b2ContactListener = function () { };
    z.prototype.BeginContact = function () { };
    z.prototype.EndContact = function () { };
    z.prototype.PreSolve = function () { };
    z.prototype.PostSolve = function () { };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2ContactListener.b2_defaultListener = new z
    });
    A.b2ContactManager = function () { };
    A.prototype.b2ContactManager = function () {
        this.m_world = null;
        this.m_contactCount = 0;
        this.m_contactFilter = u.b2_defaultFilter;
        this.m_contactListener = z.b2_defaultListener;
        this.m_contactFactory = new J(this.m_allocator);
        this.m_broadPhase = new k
    };
    A.prototype.AddPair = function (b, c) {
        var d = b instanceof K ? b : null,
            e = c instanceof K ? c : null,
            f = d.GetBody(),
            g = e.GetBody();
        if (f != g) {
            for (var h = g.GetContactList() ; h;) {
                if (h.other == f) {
                    var j = h.contact.GetFixtureA(),
                        k = h.contact.GetFixtureB();
                    if (j == d && k == e || j == e && k == d) return
                }
                h = h.next
            }
            if (g.ShouldCollide(f) != false && this.m_contactFilter.ShouldCollide(d, e) != false) {
                h = this.m_contactFactory.Create(d, e);
                d = h.GetFixtureA();
                e = h.GetFixtureB();
                f = d.m_body;
                g = e.m_body;
                h.m_prev = null;
                h.m_next = this.m_world.m_contactList;
                if (this.m_world.m_contactList !=
                    null) this.m_world.m_contactList.m_prev = h;
                this.m_world.m_contactList = h;
                h.m_nodeA.contact = h;
                h.m_nodeA.other = g;
                h.m_nodeA.prev = null;
                h.m_nodeA.next = f.m_contactList;
                if (f.m_contactList != null) f.m_contactList.prev = h.m_nodeA;
                f.m_contactList = h.m_nodeA;
                h.m_nodeB.contact = h;
                h.m_nodeB.other = f;
                h.m_nodeB.prev = null;
                h.m_nodeB.next = g.m_contactList;
                if (g.m_contactList != null) g.m_contactList.prev = h.m_nodeB;
                g.m_contactList = h.m_nodeB;
                ++this.m_world.m_contactCount
            }
        }
    };
    A.prototype.FindNewContacts = function () {
        this.m_broadPhase.UpdatePairs(Box2D.generateCallback(this,
            this.AddPair))
    };
    A.prototype.Destroy = function (b) {
        var c = b.GetFixtureA(),
            d = b.GetFixtureB(),
            c = c.GetBody(),
            d = d.GetBody();
        b.IsTouching() && this.m_contactListener.EndContact(b);
        if (b.m_prev) b.m_prev.m_next = b.m_next;
        if (b.m_next) b.m_next.m_prev = b.m_prev;
        if (b == this.m_world.m_contactList) this.m_world.m_contactList = b.m_next;
        if (b.m_nodeA.prev) b.m_nodeA.prev.next = b.m_nodeA.next;
        if (b.m_nodeA.next) b.m_nodeA.next.prev = b.m_nodeA.prev;
        if (b.m_nodeA == c.m_contactList) c.m_contactList = b.m_nodeA.next;
        if (b.m_nodeB.prev) b.m_nodeB.prev.next =
            b.m_nodeB.next;
        if (b.m_nodeB.next) b.m_nodeB.next.prev = b.m_nodeB.prev;
        if (b.m_nodeB == d.m_contactList) d.m_contactList = b.m_nodeB.next;
        this.m_contactFactory.Destroy(b);
        --this.m_contactCount
    };
    A.prototype.Collide = function () {
        for (var b = this.m_world.m_contactList; b;) {
            var c = b.GetFixtureA(),
                d = b.GetFixtureB(),
                e = c.GetBody(),
                f = d.GetBody();
            if (e.IsAwake() == false && f.IsAwake() == false) b = b.GetNext();
            else {
                if (b.m_flags & I.e_filterFlag) {
                    if (f.ShouldCollide(e) == false) {
                        c = b;
                        b = c.GetNext();
                        this.Destroy(c);
                        continue
                    }
                    if (this.m_contactFilter.ShouldCollide(c,
                            d) == false) {
                        c = b;
                        b = c.GetNext();
                        this.Destroy(c);
                        continue
                    }
                    b.m_flags = b.m_flags & ~I.e_filterFlag
                }
                if (this.m_broadPhase.TestOverlap(c.m_proxy, d.m_proxy) == false) {
                    c = b;
                    b = c.GetNext();
                    this.Destroy(c)
                } else {
                    b.Update(this.m_contactListener);
                    b = b.GetNext()
                }
            }
        }
    };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2ContactManager.s_evalCP = new j
    });
    C.b2DebugDraw = function () { };
    C.prototype.b2DebugDraw = function () { };
    C.prototype.SetFlags = function () { };
    C.prototype.GetFlags = function () { };
    C.prototype.AppendFlags = function () { };
    C.prototype.ClearFlags =
        function () { };
    C.prototype.SetSprite = function () { };
    C.prototype.GetSprite = function () { };
    C.prototype.SetDrawScale = function () { };
    C.prototype.GetDrawScale = function () { };
    C.prototype.SetLineThickness = function () { };
    C.prototype.GetLineThickness = function () { };
    C.prototype.SetAlpha = function () { };
    C.prototype.GetAlpha = function () { };
    C.prototype.SetFillAlpha = function () { };
    C.prototype.GetFillAlpha = function () { };
    C.prototype.SetXFormScale = function () { };
    C.prototype.GetXFormScale = function () { };
    C.prototype.DrawPolygon = function () { };
    C.prototype.DrawSolidPolygon = function () { };
    C.prototype.DrawCircle = function () { };
    C.prototype.DrawSolidCircle = function () { };
    C.prototype.DrawSegment = function () { };
    C.prototype.DrawTransform = function () { };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2DebugDraw.e_shapeBit = 1;
        Box2D.Dynamics.b2DebugDraw.e_jointBit = 2;
        Box2D.Dynamics.b2DebugDraw.e_aabbBit = 4;
        Box2D.Dynamics.b2DebugDraw.e_pairBit = 8;
        Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 16;
        Box2D.Dynamics.b2DebugDraw.e_controllerBit = 32
    });
    G.b2DestructionListener =
        function () { };
    G.prototype.SayGoodbyeJoint = function () { };
    G.prototype.SayGoodbyeFixture = function () { };
    H.b2FilterData = function () {
        this.categoryBits = 1;
        this.maskBits = 65535;
        this.groupIndex = 0
    };
    H.prototype.Copy = function () {
        var b = new H;
        b.categoryBits = this.categoryBits;
        b.maskBits = this.maskBits;
        b.groupIndex = this.groupIndex;
        return b
    };
    K.b2Fixture = function () {
        this.m_filter = new H
    };
    K.prototype.GetType = function () {
        return this.m_shape.GetType()
    };
    K.prototype.GetShape = function () {
        return this.m_shape
    };
    K.prototype.SetSensor = function (b) {
        if (this.m_isSensor !=
            b) {
            this.m_isSensor = b;
            if (this.m_body != null)
                for (b = this.m_body.GetContactList() ; b;) {
                    var c = b.contact,
                        d = c.GetFixtureA(),
                        e = c.GetFixtureB();
                    if (d == this || e == this) c.SetSensor(d.IsSensor() || e.IsSensor());
                    b = b.next
                }
        }
    };
    K.prototype.IsSensor = function () {
        return this.m_isSensor
    };
    K.prototype.SetFilterData = function (b) {
        this.m_filter = b.Copy();
        if (!this.m_body)
            for (b = this.m_body.GetContactList() ; b;) {
                var c = b.contact,
                    d = c.GetFixtureA(),
                    e = c.GetFixtureB();
                (d == this || e == this) && c.FlagForFiltering();
                b = b.next
            }
    };
    K.prototype.GetFilterData =
        function () {
            return this.m_filter.Copy()
        };
    K.prototype.GetBody = function () {
        return this.m_body
    };
    K.prototype.GetNext = function () {
        return this.m_next
    };
    K.prototype.GetUserData = function () {
        return this.m_userData
    };
    K.prototype.SetUserData = function (b) {
        this.m_userData = b
    };
    K.prototype.TestPoint = function (b) {
        return this.m_shape.TestPoint(this.m_body.GetTransform(), b)
    };
    K.prototype.RayCast = function (b, c) {
        return this.m_shape.RayCast(b, c, this.m_body.GetTransform())
    };
    K.prototype.GetMassData = function (b) {
        b === void 0 && (b = null);
        b == null && (b = new p);
        this.m_shape.ComputeMass(b, this.m_density);
        return b
    };
    K.prototype.SetDensity = function (b) {
        b === void 0 && (b = 0);
        this.m_density = b
    };
    K.prototype.GetDensity = function () {
        return this.m_density
    };
    K.prototype.GetFriction = function () {
        return this.m_friction
    };
    K.prototype.SetFriction = function (b) {
        b === void 0 && (b = 0);
        this.m_friction = b
    };
    K.prototype.GetRestitution = function () {
        return this.m_restitution
    };
    K.prototype.SetRestitution = function (b) {
        b === void 0 && (b = 0);
        this.m_restitution = b
    };
    K.prototype.GetAABB = function () {
        return this.m_aabb
    };
    K.prototype.b2Fixture = function () {
        this.m_aabb = new h;
        this.m_shape = this.m_next = this.m_body = this.m_userData = null;
        this.m_restitution = this.m_friction = this.m_density = 0
    };
    K.prototype.Create = function (b, c, d) {
        this.m_userData = d.userData;
        this.m_friction = d.friction;
        this.m_restitution = d.restitution;
        this.m_body = b;
        this.m_next = null;
        this.m_filter = d.filter.Copy();
        this.m_isSensor = d.isSensor;
        this.m_shape = d.shape.Copy();
        this.m_density = d.density
    };
    K.prototype.Destroy = function () {
        this.m_shape = null
    };
    K.prototype.CreateProxy = function (b,
        c) {
        this.m_shape.ComputeAABB(this.m_aabb, c);
        this.m_proxy = b.CreateProxy(this.m_aabb, this)
    };
    K.prototype.DestroyProxy = function (b) {
        if (this.m_proxy != null) {
            b.DestroyProxy(this.m_proxy);
            this.m_proxy = null
        }
    };
    K.prototype.Synchronize = function (c, d, e) {
        if (this.m_proxy) {
            var f = new h,
                g = new h;
            this.m_shape.ComputeAABB(f, d);
            this.m_shape.ComputeAABB(g, e);
            this.m_aabb.Combine(f, g);
            d = b.SubtractVV(e.position, d.position);
            c.MoveProxy(this.m_proxy, this.m_aabb, d)
        }
    };
    P.b2FixtureDef = function () {
        this.filter = new H
    };
    P.prototype.b2FixtureDef =
        function () {
            this.userData = this.shape = null;
            this.friction = 0.2;
            this.density = this.restitution = 0;
            this.filter.categoryBits = 1;
            this.filter.maskBits = 65535;
            this.filter.groupIndex = 0;
            this.isSensor = false
        };
    T.b2Island = function () { };
    T.prototype.b2Island = function () {
        this.m_bodies = new Vector;
        this.m_contacts = new Vector;
        this.m_joints = new Vector
    };
    T.prototype.Initialize = function (b, c, d, e, f, g) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        d === void 0 && (d = 0);
        var h = 0;
        this.m_bodyCapacity = b;
        this.m_contactCapacity = c;
        this.m_jointCapacity = d;
        this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
        this.m_allocator = e;
        this.m_listener = f;
        this.m_contactSolver = g;
        for (h = this.m_bodies.length; h < b; h++) this.m_bodies[h] = null;
        for (h = this.m_contacts.length; h < c; h++) this.m_contacts[h] = null;
        for (h = this.m_joints.length; h < d; h++) this.m_joints[h] = null
    };
    T.prototype.Clear = function () {
        this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0
    };
    T.prototype.Solve = function (c, d, e) {
        for (var f = 0, h = 0, j, f = 0; f < this.m_bodyCount; ++f) {
            h = this.m_bodies[f];
            if (h.GetType() == o.b2_dynamicBody) {
                h.m_linearVelocity.x =
                    h.m_linearVelocity.x + c.dt * (d.x + h.m_invMass * h.m_force.x);
                h.m_linearVelocity.y = h.m_linearVelocity.y + c.dt * (d.y + h.m_invMass * h.m_force.y);
                h.m_angularVelocity = h.m_angularVelocity + c.dt * h.m_invI * h.m_torque;
                h.m_linearVelocity.Multiply(b.Clamp(1 - c.dt * h.m_linearDamping, 0, 1));
                h.m_angularVelocity = h.m_angularVelocity * b.Clamp(1 - c.dt * h.m_angularDamping, 0, 1)
            }
        }
        this.m_contactSolver.Initialize(c, this.m_contacts, this.m_contactCount, this.m_allocator);
        d = this.m_contactSolver;
        d.InitVelocityConstraints(c);
        for (f = 0; f < this.m_jointCount; ++f) {
            j =
                this.m_joints[f];
            j.InitVelocityConstraints(c)
        }
        for (f = 0; f < c.velocityIterations; ++f) {
            for (h = 0; h < this.m_jointCount; ++h) {
                j = this.m_joints[h];
                j.SolveVelocityConstraints(c)
            }
            d.SolveVelocityConstraints()
        }
        for (f = 0; f < this.m_jointCount; ++f) {
            j = this.m_joints[f];
            j.FinalizeVelocityConstraints()
        }
        d.FinalizeVelocityConstraints();
        for (f = 0; f < this.m_bodyCount; ++f) {
            h = this.m_bodies[f];
            if (h.GetType() != o.b2_staticBody) {
                var k = c.dt * h.m_linearVelocity.x,
                    l = c.dt * h.m_linearVelocity.y;
                if (k * k + l * l > g.b2_maxTranslationSquared) {
                    h.m_linearVelocity.Normalize();
                    h.m_linearVelocity.x = h.m_linearVelocity.x * g.b2_maxTranslation * c.inv_dt;
                    h.m_linearVelocity.y = h.m_linearVelocity.y * g.b2_maxTranslation * c.inv_dt
                }
                k = c.dt * h.m_angularVelocity;
                if (k * k > g.b2_maxRotationSquared) h.m_angularVelocity = h.m_angularVelocity < 0 ? -g.b2_maxRotation * c.inv_dt : g.b2_maxRotation * c.inv_dt;
                h.m_sweep.c0.SetV(h.m_sweep.c);
                h.m_sweep.a0 = h.m_sweep.a;
                h.m_sweep.c.x = h.m_sweep.c.x + c.dt * h.m_linearVelocity.x;
                h.m_sweep.c.y = h.m_sweep.c.y + c.dt * h.m_linearVelocity.y;
                h.m_sweep.a = h.m_sweep.a + c.dt * h.m_angularVelocity;
                h.SynchronizeTransform()
            }
        }
        for (f = 0; f < c.positionIterations; ++f) {
            k = d.SolvePositionConstraints(g.b2_contactBaumgarte);
            l = true;
            for (h = 0; h < this.m_jointCount; ++h) {
                j = this.m_joints[h];
                j = j.SolvePositionConstraints(g.b2_contactBaumgarte);
                l = l && j
            }
            if (k && l) break
        }
        this.Report(d.m_constraints);
        if (e) {
            e = Number.MAX_VALUE;
            d = g.b2_linearSleepTolerance * g.b2_linearSleepTolerance;
            k = g.b2_angularSleepTolerance * g.b2_angularSleepTolerance;
            for (f = 0; f < this.m_bodyCount; ++f) {
                h = this.m_bodies[f];
                if (h.GetType() != o.b2_staticBody) {
                    if ((h.m_flags &
                            o.e_allowSleepFlag) == 0) e = h.m_sleepTime = 0;
                    if ((h.m_flags & o.e_allowSleepFlag) == 0 || h.m_angularVelocity * h.m_angularVelocity > k || b.Dot(h.m_linearVelocity, h.m_linearVelocity) > d) e = h.m_sleepTime = 0;
                    else {
                        h.m_sleepTime = h.m_sleepTime + c.dt;
                        e = b.Min(e, h.m_sleepTime)
                    }
                }
            }
            if (e >= g.b2_timeToSleep)
                for (f = 0; f < this.m_bodyCount; ++f) {
                    h = this.m_bodies[f];
                    h.SetAwake(false)
                }
        }
    };
    T.prototype.SolveTOI = function (b) {
        var c = 0,
            d = 0;
        this.m_contactSolver.Initialize(b, this.m_contacts, this.m_contactCount, this.m_allocator);
        for (var e = this.m_contactSolver,
                c = 0; c < this.m_jointCount; ++c) this.m_joints[c].InitVelocityConstraints(b);
        for (c = 0; c < b.velocityIterations; ++c) {
            e.SolveVelocityConstraints();
            for (d = 0; d < this.m_jointCount; ++d) this.m_joints[d].SolveVelocityConstraints(b)
        }
        for (c = 0; c < this.m_bodyCount; ++c) {
            d = this.m_bodies[c];
            if (d.GetType() != o.b2_staticBody) {
                var f = b.dt * d.m_linearVelocity.x,
                    h = b.dt * d.m_linearVelocity.y;
                if (f * f + h * h > g.b2_maxTranslationSquared) {
                    d.m_linearVelocity.Normalize();
                    d.m_linearVelocity.x = d.m_linearVelocity.x * g.b2_maxTranslation * b.inv_dt;
                    d.m_linearVelocity.y =
                        d.m_linearVelocity.y * g.b2_maxTranslation * b.inv_dt
                }
                f = b.dt * d.m_angularVelocity;
                if (f * f > g.b2_maxRotationSquared) d.m_angularVelocity = d.m_angularVelocity < 0 ? -g.b2_maxRotation * b.inv_dt : g.b2_maxRotation * b.inv_dt;
                d.m_sweep.c0.SetV(d.m_sweep.c);
                d.m_sweep.a0 = d.m_sweep.a;
                d.m_sweep.c.x = d.m_sweep.c.x + b.dt * d.m_linearVelocity.x;
                d.m_sweep.c.y = d.m_sweep.c.y + b.dt * d.m_linearVelocity.y;
                d.m_sweep.a = d.m_sweep.a + b.dt * d.m_angularVelocity;
                d.SynchronizeTransform()
            }
        }
        for (c = 0; c < b.positionIterations; ++c) {
            f = e.SolvePositionConstraints(0.75);
            h = true;
            for (d = 0; d < this.m_jointCount; ++d) var j = this.m_joints[d].SolvePositionConstraints(g.b2_contactBaumgarte),
                h = h && j;
            if (f && h) break
        }
        this.Report(e.m_constraints)
    };
    T.prototype.Report = function (b) {
        if (this.m_listener != null)
            for (var c = 0; c < this.m_contactCount; ++c) {
                for (var d = this.m_contacts[c], e = b[c], f = 0; f < e.pointCount; ++f) {
                    T.s_impulse.normalImpulses[f] = e.points[f].normalImpulse;
                    T.s_impulse.tangentImpulses[f] = e.points[f].tangentImpulse
                }
                this.m_listener.PostSolve(d, T.s_impulse)
            }
    };
    T.prototype.AddBody = function (b) {
        b.m_islandIndex =
            this.m_bodyCount;
        this.m_bodies[this.m_bodyCount++] = b
    };
    T.prototype.AddContact = function (b) {
        this.m_contacts[this.m_contactCount++] = b
    };
    T.prototype.AddJoint = function (b) {
        this.m_joints[this.m_jointCount++] = b
    };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2Island.s_impulse = new w
    });
    D.b2TimeStep = function () { };
    D.prototype.Set = function (b) {
        this.dt = b.dt;
        this.inv_dt = b.inv_dt;
        this.positionIterations = b.positionIterations;
        this.velocityIterations = b.velocityIterations;
        this.warmStarting = b.warmStarting
    };
    F.b2World = function () {
        this.s_stack =
            new Vector;
        this.m_contactManager = new A;
        this.m_contactSolver = new N;
        this.m_island = new T
    };
    F.prototype.b2World = function (b, c) {
        this.m_controllerList = this.m_jointList = this.m_contactList = this.m_bodyList = this.m_debugDraw = this.m_destructionListener = null;
        this.m_controllerCount = this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
        F.m_warmStarting = true;
        F.m_continuousPhysics = true;
        this.m_allowSleep = c;
        this.m_gravity = b;
        this.m_inv_dt0 = 0;
        this.m_contactManager.m_world = this;
        this.m_groundBody = this.CreateBody(new t)
    };
    F.prototype.SetDestructionListener = function (b) {
        this.m_destructionListener = b
    };
    F.prototype.SetContactFilter = function (b) {
        this.m_contactManager.m_contactFilter = b
    };
    F.prototype.SetContactListener = function (b) {
        this.m_contactManager.m_contactListener = b
    };
    F.prototype.SetDebugDraw = function (b) {
        this.m_debugDraw = b
    };
    F.prototype.SetBroadPhase = function (b) {
        var c = this.m_contactManager.m_broadPhase;
        this.m_contactManager.m_broadPhase = b;
        for (var d = this.m_bodyList; d; d = d.m_next)
            for (var e = d.m_fixtureList; e; e = e.m_next) e.m_proxy =
                b.CreateProxy(c.GetFatAABB(e.m_proxy), e)
    };
    F.prototype.Validate = function () {
        this.m_contactManager.m_broadPhase.Validate()
    };
    F.prototype.GetProxyCount = function () {
        return this.m_contactManager.m_broadPhase.GetProxyCount()
    };
    F.prototype.CreateBody = function (b) {
        if (this.IsLocked() == true) return null;
        b = new o(b, this);
        b.m_prev = null;
        if (b.m_next = this.m_bodyList) this.m_bodyList.m_prev = b;
        this.m_bodyList = b;
        ++this.m_bodyCount;
        return b
    };
    F.prototype.DestroyBody = function (b) {
        if (this.IsLocked() != true) {
            for (var c = b.m_jointList; c;) {
                var d =
                    c,
                    c = c.next;
                this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(d.joint);
                this.DestroyJoint(d.joint)
            }
            for (c = b.m_controllerList; c;) {
                d = c;
                c = c.nextController;
                d.controller.RemoveBody(b)
            }
            for (c = b.m_contactList; c;) {
                d = c;
                c = c.next;
                this.m_contactManager.Destroy(d.contact)
            }
            b.m_contactList = null;
            for (c = b.m_fixtureList; c;) {
                d = c;
                c = c.m_next;
                this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(d);
                d.DestroyProxy(this.m_contactManager.m_broadPhase);
                d.Destroy()
            }
            b.m_fixtureList = null;
            b.m_fixtureCount =
                0;
            if (b.m_prev) b.m_prev.m_next = b.m_next;
            if (b.m_next) b.m_next.m_prev = b.m_prev;
            if (b == this.m_bodyList) this.m_bodyList = b.m_next;
            --this.m_bodyCount
        }
    };
    F.prototype.CreateJoint = function (b) {
        var c = U.Create(b, null);
        c.m_prev = null;
        if (c.m_next = this.m_jointList) this.m_jointList.m_prev = c;
        this.m_jointList = c;
        ++this.m_jointCount;
        c.m_edgeA.joint = c;
        c.m_edgeA.other = c.m_bodyB;
        c.m_edgeA.prev = null;
        if (c.m_edgeA.next = c.m_bodyA.m_jointList) c.m_bodyA.m_jointList.prev = c.m_edgeA;
        c.m_bodyA.m_jointList = c.m_edgeA;
        c.m_edgeB.joint = c;
        c.m_edgeB.other = c.m_bodyA;
        c.m_edgeB.prev = null;
        if (c.m_edgeB.next = c.m_bodyB.m_jointList) c.m_bodyB.m_jointList.prev = c.m_edgeB;
        c.m_bodyB.m_jointList = c.m_edgeB;
        var d = b.bodyA,
            e = b.bodyB;
        if (b.collideConnected == false)
            for (b = e.GetContactList() ; b;) {
                b.other == d && b.contact.FlagForFiltering();
                b = b.next
            }
        return c
    };
    F.prototype.DestroyJoint = function (b) {
        var c = b.m_collideConnected;
        if (b.m_prev) b.m_prev.m_next = b.m_next;
        if (b.m_next) b.m_next.m_prev = b.m_prev;
        if (b == this.m_jointList) this.m_jointList = b.m_next;
        var d = b.m_bodyA,
            e =
            b.m_bodyB;
        d.SetAwake(true);
        e.SetAwake(true);
        if (b.m_edgeA.prev) b.m_edgeA.prev.next = b.m_edgeA.next;
        if (b.m_edgeA.next) b.m_edgeA.next.prev = b.m_edgeA.prev;
        if (b.m_edgeA == d.m_jointList) d.m_jointList = b.m_edgeA.next;
        b.m_edgeA.prev = null;
        b.m_edgeA.next = null;
        if (b.m_edgeB.prev) b.m_edgeB.prev.next = b.m_edgeB.next;
        if (b.m_edgeB.next) b.m_edgeB.next.prev = b.m_edgeB.prev;
        if (b.m_edgeB == e.m_jointList) e.m_jointList = b.m_edgeB.next;
        b.m_edgeB.prev = null;
        b.m_edgeB.next = null;
        U.Destroy(b, null);
        --this.m_jointCount;
        if (c == false)
            for (b =
                e.GetContactList() ; b;) {
                b.other == d && b.contact.FlagForFiltering();
                b = b.next
            }
    };
    F.prototype.AddController = function (b) {
        b.m_next = this.m_controllerList;
        b.m_prev = null;
        this.m_controllerList = b;
        b.m_world = this;
        this.m_controllerCount++;
        return b
    };
    F.prototype.RemoveController = function (b) {
        if (b.m_prev) b.m_prev.m_next = b.m_next;
        if (b.m_next) b.m_next.m_prev = b.m_prev;
        if (this.m_controllerList == b) this.m_controllerList = b.m_next;
        this.m_controllerCount--
    };
    F.prototype.CreateController = function (b) {
        if (b.m_world != this) throw Error("Controller can only be a member of one world");
        b.m_next = this.m_controllerList;
        b.m_prev = null;
        if (this.m_controllerList) this.m_controllerList.m_prev = b;
        this.m_controllerList = b;
        ++this.m_controllerCount;
        b.m_world = this;
        return b
    };
    F.prototype.DestroyController = function (b) {
        b.Clear();
        if (b.m_next) b.m_next.m_prev = b.m_prev;
        if (b.m_prev) b.m_prev.m_next = b.m_next;
        if (b == this.m_controllerList) this.m_controllerList = b.m_next;
        --this.m_controllerCount
    };
    F.prototype.SetWarmStarting = function (b) {
        F.m_warmStarting = b
    };
    F.prototype.SetContinuousPhysics = function (b) {
        F.m_continuousPhysics =
            b
    };
    F.prototype.GetBodyCount = function () {
        return this.m_bodyCount
    };
    F.prototype.GetJointCount = function () {
        return this.m_jointCount
    };
    F.prototype.GetContactCount = function () {
        return this.m_contactCount
    };
    F.prototype.SetGravity = function (b) {
        this.m_gravity = b
    };
    F.prototype.GetGravity = function () {
        return this.m_gravity
    };
    F.prototype.GetGroundBody = function () {
        return this.m_groundBody
    };
    F.prototype.Step = function (b, c, d) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        d === void 0 && (d = 0);
        if (this.m_flags & F.e_newFixture) {
            this.m_contactManager.FindNewContacts();
            this.m_flags = this.m_flags & ~F.e_newFixture
        }
        this.m_flags = this.m_flags | F.e_locked;
        var e = F.s_timestep2;
        e.dt = b;
        e.velocityIterations = c;
        e.positionIterations = d;
        e.inv_dt = b > 0 ? 1 / b : 0;
        e.dtRatio = this.m_inv_dt0 * b;
        e.warmStarting = F.m_warmStarting;
        this.m_contactManager.Collide();
        e.dt > 0 && this.Solve(e);
        F.m_continuousPhysics && e.dt > 0 && this.SolveTOI(e);
        if (e.dt > 0) this.m_inv_dt0 = e.inv_dt;
        this.m_flags = this.m_flags & ~F.e_locked
    };
    F.prototype.ClearForces = function () {
        for (var b = this.m_bodyList; b; b = b.m_next) {
            b.m_force.SetZero();
            b.m_torque =
                0
        }
    };
    F.prototype.DrawDebugData = function () {
        if (this.m_debugDraw != null) {
            this.m_debugDraw.m_sprite.graphics.clear();
            var b = this.m_debugDraw.GetFlags(),
                c, d, g;
            new e;
            new e;
            new e;
            var j;
            new h;
            new h;
            new e;
            new e;
            new e;
            new e;
            var k = new f(0, 0, 0);
            if (b & C.e_shapeBit)
                for (c = this.m_bodyList; c; c = c.m_next) {
                    j = c.m_xf;
                    for (d = c.GetFixtureList() ; d; d = d.m_next) {
                        g = d.GetShape();
                        c.IsActive() == false ? k.Set(0.5, 0.5, 0.3) : c.GetType() == o.b2_staticBody ? k.Set(0.5, 0.9, 0.5) : c.GetType() == o.b2_kinematicBody ? k.Set(0.5, 0.5, 0.9) : c.IsAwake() == false ?
                            k.Set(0.6, 0.6, 0.6) : k.Set(0.9, 0.7, 0.7);
                        this.DrawShape(g, j, k)
                    }
                }
            if (b & C.e_jointBit)
                for (c = this.m_jointList; c; c = c.m_next) this.DrawJoint(c);
            if (b & C.e_controllerBit)
                for (c = this.m_controllerList; c; c = c.m_next) c.Draw(this.m_debugDraw);
            if (b & C.e_pairBit) {
                k.Set(0.3, 0.9, 0.9);
                for (c = this.m_contactManager.m_contactList; c; c = c.GetNext()) {
                    g = c.GetFixtureA();
                    d = c.GetFixtureB();
                    g = g.GetAABB().GetCenter();
                    d = d.GetAABB().GetCenter();
                    this.m_debugDraw.DrawSegment(g, d, k)
                }
            }
            if (b & C.e_aabbBit) {
                g = this.m_contactManager.m_broadPhase;
                j = [new e,
                    new e, new e, new e
                ];
                for (c = this.m_bodyList; c; c = c.GetNext())
                    if (c.IsActive() != false)
                        for (d = c.GetFixtureList() ; d; d = d.GetNext()) {
                            var l = g.GetFatAABB(d.m_proxy);
                            j[0].Set(l.lowerBound.x, l.lowerBound.y);
                            j[1].Set(l.upperBound.x, l.lowerBound.y);
                            j[2].Set(l.upperBound.x, l.upperBound.y);
                            j[3].Set(l.lowerBound.x, l.upperBound.y);
                            this.m_debugDraw.DrawPolygon(j, 4, k)
                        }
            }
            if (b & C.e_centerOfMassBit)
                for (c = this.m_bodyList; c; c = c.m_next) {
                    j = F.s_xf;
                    j.R = c.m_xf.R;
                    j.position = c.GetWorldCenter();
                    this.m_debugDraw.DrawTransform(j)
                }
        }
    };
    F.prototype.QueryAABB =
        function (b, c) {
            var d = this.m_contactManager.m_broadPhase;
            d.Query(function (c) {
                return b(d.GetUserData(c))
            }, c)
        };
    F.prototype.QueryShape = function (b, c, e) {
        e === void 0 && (e = null);
        if (e == null) {
            e = new d;
            e.SetIdentity()
        }
        var f = this.m_contactManager.m_broadPhase,
            g = new h;
        c.ComputeAABB(g, e);
        f.Query(function (d) {
            d = f.GetUserData(d) instanceof K ? f.GetUserData(d) : null;
            return r.TestOverlap(c, e, d.GetShape(), d.GetBody().GetTransform()) ? b(d) : true
        }, g)
    };
    F.prototype.QueryPoint = function (b, c) {
        var d = this.m_contactManager.m_broadPhase,
            e = new h;
        e.lowerBound.Set(c.x - g.b2_linearSlop, c.y - g.b2_linearSlop);
        e.upperBound.Set(c.x + g.b2_linearSlop, c.y + g.b2_linearSlop);
        d.Query(function (e) {
            e = d.GetUserData(e) instanceof K ? d.GetUserData(e) : null;
            return e.TestPoint(c) ? b(e) : true
        }, e)
    };
    F.prototype.RayCast = function (b, c, d) {
        var f = this.m_contactManager.m_broadPhase,
            g = new m,
            h = new l(c, d);
        f.RayCast(function (h, j) {
            var k = f.GetUserData(j),
                k = k instanceof K ? k : null;
            if (k.RayCast(g, h)) {
                var l = g.fraction,
                    m = new e((1 - l) * c.x + l * d.x, (1 - l) * c.y + l * d.y);
                return b(k, m, g.normal,
                    l)
            }
            return h.maxFraction
        }, h)
    };
    F.prototype.RayCastOne = function (b, c) {
        var d;
        this.RayCast(function (b, c, e, f) {
            f === void 0 && (f = 0);
            d = b;
            return f
        }, b, c);
        return d
    };
    F.prototype.RayCastAll = function (b, c) {
        var d = new Vector;
        this.RayCast(function (b) {
            d[d.length] = b;
            return 1
        }, b, c);
        return d
    };
    F.prototype.GetBodyList = function () {
        return this.m_bodyList
    };
    F.prototype.GetJointList = function () {
        return this.m_jointList
    };
    F.prototype.GetContactList = function () {
        return this.m_contactList
    };
    F.prototype.IsLocked = function () {
        return (this.m_flags &
            F.e_locked) > 0
    };
    F.prototype.Solve = function (b) {
        for (var c, d = this.m_controllerList; d; d = d.m_next) d.Step(b);
        d = this.m_island;
        d.Initialize(this.m_bodyCount, this.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
        for (c = this.m_bodyList; c; c = c.m_next) c.m_flags = c.m_flags & ~o.e_islandFlag;
        for (var e = this.m_contactList; e; e = e.m_next) e.m_flags = e.m_flags & ~I.e_islandFlag;
        for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = false;
        parseInt(this.m_bodyCount);
        for (var e = this.s_stack,
                f = this.m_bodyList; f; f = f.m_next)
            if (!(f.m_flags & o.e_islandFlag) && !(f.IsAwake() == false || f.IsActive() == false) && f.GetType() != o.b2_staticBody) {
                d.Clear();
                var g = 0;
                e[g++] = f;
                for (f.m_flags = f.m_flags | o.e_islandFlag; g > 0;) {
                    c = e[--g];
                    d.AddBody(c);
                    c.IsAwake() == false && c.SetAwake(true);
                    if (c.GetType() != o.b2_staticBody) {
                        for (var h, j = c.m_contactList; j; j = j.next)
                            if (!(j.contact.m_flags & I.e_islandFlag) && !(j.contact.IsSensor() == true || j.contact.IsEnabled() == false || j.contact.IsTouching() == false)) {
                                d.AddContact(j.contact);
                                j.contact.m_flags =
                                    j.contact.m_flags | I.e_islandFlag;
                                h = j.other;
                                if (!(h.m_flags & o.e_islandFlag)) {
                                    e[g++] = h;
                                    h.m_flags = h.m_flags | o.e_islandFlag
                                }
                            }
                        for (c = c.m_jointList; c; c = c.next)
                            if (c.joint.m_islandFlag != true) {
                                h = c.other;
                                if (h.IsActive() != false) {
                                    d.AddJoint(c.joint);
                                    c.joint.m_islandFlag = true;
                                    if (!(h.m_flags & o.e_islandFlag)) {
                                        e[g++] = h;
                                        h.m_flags = h.m_flags | o.e_islandFlag
                                    }
                                }
                            }
                    }
                }
                d.Solve(b, this.m_gravity, this.m_allowSleep);
                for (g = 0; g < d.m_bodyCount; ++g) {
                    c = d.m_bodies[g];
                    if (c.GetType() == o.b2_staticBody) c.m_flags = c.m_flags & ~o.e_islandFlag
                }
            }
        for (g =
            0; g < e.length; ++g) {
            if (!e[g]) break;
            e[g] = null
        }
        for (c = this.m_bodyList; c; c = c.m_next) c.IsAwake() == false || c.IsActive() == false || c.GetType() != o.b2_staticBody && c.SynchronizeFixtures();
        this.m_contactManager.FindNewContacts()
    };
    F.prototype.SolveTOI = function (b) {
        var c, d, e, f = this.m_island;
        f.Initialize(this.m_bodyCount, g.b2_maxTOIContactsPerIsland, g.b2_maxTOIJointsPerIsland, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
        var h = F.s_queue;
        for (c = this.m_bodyList; c; c = c.m_next) {
            c.m_flags = c.m_flags & ~o.e_islandFlag;
            c.m_sweep.t0 = 0
        }
        for (e = this.m_contactList; e; e = e.m_next) e.m_flags = e.m_flags & ~(I.e_toiFlag | I.e_islandFlag);
        for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = false;
        for (; ;) {
            var j = null,
                k = 1;
            for (e = this.m_contactList; e; e = e.m_next)
                if (!(e.IsSensor() == true || e.IsEnabled() == false || e.IsContinuous() == false)) {
                    if (e.m_flags & I.e_toiFlag) c = e.m_toi;
                    else {
                        c = e.m_fixtureA;
                        d = e.m_fixtureB;
                        c = c.m_body;
                        d = d.m_body;
                        if ((c.GetType() != o.b2_dynamicBody || c.IsAwake() == false) && (d.GetType() != o.b2_dynamicBody || d.IsAwake() == false)) continue;
                        var l = c.m_sweep.t0;
                        if (c.m_sweep.t0 < d.m_sweep.t0) {
                            l = d.m_sweep.t0;
                            c.m_sweep.Advance(l)
                        } else if (d.m_sweep.t0 < c.m_sweep.t0) {
                            l = c.m_sweep.t0;
                            d.m_sweep.Advance(l)
                        }
                        c = e.ComputeTOI(c.m_sweep, d.m_sweep);
                        g.b2Assert(0 <= c && c <= 1);
                        if (c > 0 && c < 1) {
                            c = (1 - c) * l + c;
                            c > 1 && (c = 1)
                        }
                        e.m_toi = c;
                        e.m_flags = e.m_flags | I.e_toiFlag
                    }
                    if (Number.MIN_VALUE < c && c < k) {
                        j = e;
                        k = c
                    }
                }
            if (j == null || 1 - 100 * Number.MIN_VALUE < k) break;
            c = j.m_fixtureA;
            d = j.m_fixtureB;
            c = c.m_body;
            d = d.m_body;
            F.s_backupA.Set(c.m_sweep);
            F.s_backupB.Set(d.m_sweep);
            c.Advance(k);
            d.Advance(k);
            j.Update(this.m_contactManager.m_contactListener);
            j.m_flags = j.m_flags & ~I.e_toiFlag;
            if (j.IsSensor() == true || j.IsEnabled() == false) {
                c.m_sweep.Set(F.s_backupA);
                d.m_sweep.Set(F.s_backupB);
                c.SynchronizeTransform();
                d.SynchronizeTransform()
            } else if (j.IsTouching() != false) {
                c.GetType() != o.b2_dynamicBody && (c = d);
                f.Clear();
                j = e = 0;
                h[e + j++] = c;
                for (c.m_flags = c.m_flags | o.e_islandFlag; j > 0;) {
                    c = h[e++];
                    --j;
                    f.AddBody(c);
                    c.IsAwake() == false && c.SetAwake(true);
                    if (c.GetType() == o.b2_dynamicBody) {
                        for (d = c.m_contactList; d; d = d.next) {
                            if (f.m_contactCount ==
                                f.m_contactCapacity) break;
                            if (!(d.contact.m_flags & I.e_islandFlag) && !(d.contact.IsSensor() == true || d.contact.IsEnabled() == false || d.contact.IsTouching() == false)) {
                                f.AddContact(d.contact);
                                d.contact.m_flags = d.contact.m_flags | I.e_islandFlag;
                                l = d.other;
                                if (!(l.m_flags & o.e_islandFlag)) {
                                    if (l.GetType() != o.b2_staticBody) {
                                        l.Advance(k);
                                        l.SetAwake(true)
                                    }
                                    h[e + j] = l;
                                    ++j;
                                    l.m_flags = l.m_flags | o.e_islandFlag
                                }
                            }
                        }
                        for (c = c.m_jointList; c; c = c.next)
                            if (f.m_jointCount != f.m_jointCapacity && c.joint.m_islandFlag != true) {
                                l = c.other;
                                if (l.IsActive() !=
                                    false) {
                                    f.AddJoint(c.joint);
                                    c.joint.m_islandFlag = true;
                                    if (!(l.m_flags & o.e_islandFlag)) {
                                        if (l.GetType() != o.b2_staticBody) {
                                            l.Advance(k);
                                            l.SetAwake(true)
                                        }
                                        h[e + j] = l;
                                        ++j;
                                        l.m_flags = l.m_flags | o.e_islandFlag
                                    }
                                }
                            }
                    }
                }
                e = F.s_timestep;
                e.warmStarting = false;
                e.dt = (1 - k) * b.dt;
                e.inv_dt = 1 / e.dt;
                e.dtRatio = 0;
                e.velocityIterations = b.velocityIterations;
                e.positionIterations = b.positionIterations;
                f.SolveTOI(e);
                for (k = k = 0; k < f.m_bodyCount; ++k) {
                    c = f.m_bodies[k];
                    c.m_flags = c.m_flags & ~o.e_islandFlag;
                    if (c.IsAwake() != false && c.GetType() == o.b2_dynamicBody) {
                        c.SynchronizeFixtures();
                        for (d = c.m_contactList; d; d = d.next) d.contact.m_flags = d.contact.m_flags & ~I.e_toiFlag
                    }
                }
                for (k = 0; k < f.m_contactCount; ++k) {
                    e = f.m_contacts[k];
                    e.m_flags = e.m_flags & ~(I.e_toiFlag | I.e_islandFlag)
                }
                for (k = 0; k < f.m_jointCount; ++k) {
                    e = f.m_joints[k];
                    e.m_islandFlag = false
                }
                this.m_contactManager.FindNewContacts()
            }
        }
    };
    F.prototype.DrawJoint = function (b) {
        var c = b.GetBodyA(),
            d = b.GetBodyB(),
            e = c.m_xf.position,
            f = d.m_xf.position,
            g = b.GetAnchorA(),
            h = b.GetAnchorB(),
            j = F.s_jointColor;
        switch (b.m_type) {
            case U.e_distanceJoint:
                this.m_debugDraw.DrawSegment(g,
                    h, j);
                break;
            case U.e_pulleyJoint:
                c = b instanceof Q ? b : null;
                b = c.GetGroundAnchorA();
                c = c.GetGroundAnchorB();
                this.m_debugDraw.DrawSegment(b, g, j);
                this.m_debugDraw.DrawSegment(c, h, j);
                this.m_debugDraw.DrawSegment(b, c, j);
                break;
            case U.e_mouseJoint:
                this.m_debugDraw.DrawSegment(g, h, j);
                break;
            default:
                c != this.m_groundBody && this.m_debugDraw.DrawSegment(e, g, j);
                this.m_debugDraw.DrawSegment(g, h, j);
                d != this.m_groundBody && this.m_debugDraw.DrawSegment(f, h, j)
        }
    };
    F.prototype.DrawShape = function (c, d, e) {
        switch (c.m_type) {
            case r.e_circleShape:
                var f =
                    c instanceof n ? c : null;
                this.m_debugDraw.DrawSolidCircle(b.MulX(d, f.m_p), f.m_radius, d.R.col1, e);
                break;
            case r.e_polygonShape:
                for (var f = c instanceof s ? c : null, c = parseInt(f.GetVertexCount()), g = f.GetVertices(), h = new Vector(c), f = 0; f < c; ++f) h[f] = b.MulX(d, g[f]);
                this.m_debugDraw.DrawSolidPolygon(h, c, e);
                break;
            case r.e_edgeShape:
                f = c instanceof q ? c : null;
                this.m_debugDraw.DrawSegment(b.MulX(d, f.GetVertex1()), b.MulX(d, f.GetVertex2()), e)
        }
    };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.b2World.s_timestep2 = new D;
        Box2D.Dynamics.b2World.s_xf =
            new d;
        Box2D.Dynamics.b2World.s_backupA = new c;
        Box2D.Dynamics.b2World.s_backupB = new c;
        Box2D.Dynamics.b2World.s_timestep = new D;
        Box2D.Dynamics.b2World.s_queue = new Vector;
        Box2D.Dynamics.b2World.s_jointColor = new f(0.5, 0.8, 0.8);
        Box2D.Dynamics.b2World.e_newFixture = 1;
        Box2D.Dynamics.b2World.e_locked = 2
    })
})();
(function () {
    var b = Box2D.Collision.Shapes.b2CircleShape,
        c = Box2D.Collision.Shapes.b2EdgeShape,
        d = Box2D.Collision.Shapes.b2PolygonShape,
        e = Box2D.Collision.Shapes.b2Shape,
        f = Box2D.Dynamics.Contacts.b2CircleContact,
        g = Box2D.Dynamics.Contacts.b2Contact,
        h = Box2D.Dynamics.Contacts.b2ContactConstraint,
        j = Box2D.Dynamics.Contacts.b2ContactConstraintPoint,
        k = Box2D.Dynamics.Contacts.b2ContactEdge,
        l = Box2D.Dynamics.Contacts.b2ContactFactory,
        m = Box2D.Dynamics.Contacts.b2ContactRegister,
        n = Box2D.Dynamics.Contacts.b2ContactResult,
        q = Box2D.Dynamics.Contacts.b2ContactSolver,
        p = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact,
        s = Box2D.Dynamics.Contacts.b2NullContact,
        r = Box2D.Dynamics.Contacts.b2PolyAndCircleContact,
        o = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact,
        t = Box2D.Dynamics.Contacts.b2PolygonContact,
        u = Box2D.Dynamics.Contacts.b2PositionSolverManifold,
        w = Box2D.Dynamics.b2Body,
        z = Box2D.Dynamics.b2TimeStep,
        A = Box2D.Common.b2Settings,
        C = Box2D.Common.Math.b2Mat22,
        G = Box2D.Common.Math.b2Math,
        H = Box2D.Common.Math.b2Vec2,
        K = Box2D.Collision.b2Collision,
        P = Box2D.Collision.b2ContactID,
        T = Box2D.Collision.b2Manifold,
        D = Box2D.Collision.b2TimeOfImpact,
        F = Box2D.Collision.b2TOIInput,
        I = Box2D.Collision.b2WorldManifold;
    Box2D.inherit(f, Box2D.Dynamics.Contacts.b2Contact);
    f.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    f.b2CircleContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    f.Create = function () {
        return new f
    };
    f.Destroy = function () { };
    f.prototype.Reset = function (b, c) {
        this.__super.Reset.call(this, b, c)
    };
    f.prototype.Evaluate =
        function () {
            var c = this.m_fixtureA.GetBody(),
                d = this.m_fixtureB.GetBody();
            K.CollideCircles(this.m_manifold, this.m_fixtureA.GetShape() instanceof b ? this.m_fixtureA.GetShape() : null, c.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, d.m_xf)
        };
    g.b2Contact = function () {
        this.m_nodeA = new k;
        this.m_nodeB = new k;
        this.m_manifold = new T;
        this.m_oldManifold = new T
    };
    g.prototype.GetManifold = function () {
        return this.m_manifold
    };
    g.prototype.GetWorldManifold = function (b) {
        var c = this.m_fixtureA.GetBody(),
            d = this.m_fixtureB.GetBody(),
            e = this.m_fixtureA.GetShape(),
            f = this.m_fixtureB.GetShape();
        b.Initialize(this.m_manifold, c.GetTransform(), e.m_radius, d.GetTransform(), f.m_radius)
    };
    g.prototype.IsTouching = function () {
        return (this.m_flags & g.e_touchingFlag) == g.e_touchingFlag
    };
    g.prototype.IsContinuous = function () {
        return (this.m_flags & g.e_continuousFlag) == g.e_continuousFlag
    };
    g.prototype.SetSensor = function (b) {
        this.m_flags = b ? this.m_flags | g.e_sensorFlag : this.m_flags & ~g.e_sensorFlag
    };
    g.prototype.IsSensor = function () {
        return (this.m_flags &
            g.e_sensorFlag) == g.e_sensorFlag
    };
    g.prototype.SetEnabled = function (b) {
        this.m_flags = b ? this.m_flags | g.e_enabledFlag : this.m_flags & ~g.e_enabledFlag
    };
    g.prototype.IsEnabled = function () {
        return (this.m_flags & g.e_enabledFlag) == g.e_enabledFlag
    };
    g.prototype.GetNext = function () {
        return this.m_next
    };
    g.prototype.GetFixtureA = function () {
        return this.m_fixtureA
    };
    g.prototype.GetFixtureB = function () {
        return this.m_fixtureB
    };
    g.prototype.FlagForFiltering = function () {
        this.m_flags = this.m_flags | g.e_filterFlag
    };
    g.prototype.b2Contact =
        function () { };
    g.prototype.Reset = function (b, c) {
        b === void 0 && (b = null);
        c === void 0 && (c = null);
        this.m_flags = g.e_enabledFlag;
        if (!b || !c) this.m_fixtureB = this.m_fixtureA = null;
        else {
            if (b.IsSensor() || c.IsSensor()) this.m_flags = this.m_flags | g.e_sensorFlag;
            var d = b.GetBody(),
                e = c.GetBody();
            if (d.GetType() != w.b2_dynamicBody || d.IsBullet() || e.GetType() != w.b2_dynamicBody || e.IsBullet()) this.m_flags = this.m_flags | g.e_continuousFlag;
            this.m_fixtureA = b;
            this.m_fixtureB = c;
            this.m_manifold.m_pointCount = 0;
            this.m_next = this.m_prev = null;
            this.m_nodeA.contact = null;
            this.m_nodeA.prev = null;
            this.m_nodeA.next = null;
            this.m_nodeA.other = null;
            this.m_nodeB.contact = null;
            this.m_nodeB.prev = null;
            this.m_nodeB.next = null;
            this.m_nodeB.other = null
        }
    };
    g.prototype.Update = function (b) {
        var c = this.m_oldManifold;
        this.m_oldManifold = this.m_manifold;
        this.m_manifold = c;
        this.m_flags = this.m_flags | g.e_enabledFlag;
        var d = false,
            c = (this.m_flags & g.e_touchingFlag) == g.e_touchingFlag,
            f = this.m_fixtureA.m_body,
            h = this.m_fixtureB.m_body,
            j = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
        if (this.m_flags & g.e_sensorFlag) {
            if (j) {
                d = this.m_fixtureA.GetShape();
                j = this.m_fixtureB.GetShape();
                f = f.GetTransform();
                h = h.GetTransform();
                d = e.TestOverlap(d, f, j, h)
            }
            this.m_manifold.m_pointCount = 0
        } else {
            this.m_flags = f.GetType() != w.b2_dynamicBody || f.IsBullet() || h.GetType() != w.b2_dynamicBody || h.IsBullet() ? this.m_flags | g.e_continuousFlag : this.m_flags & ~g.e_continuousFlag;
            if (j) {
                this.Evaluate();
                d = this.m_manifold.m_pointCount > 0;
                for (j = 0; j < this.m_manifold.m_pointCount; ++j) {
                    var k = this.m_manifold.m_points[j];
                    k.m_normalImpulse =
                        0;
                    k.m_tangentImpulse = 0;
                    for (var l = k.m_id, m = 0; m < this.m_oldManifold.m_pointCount; ++m) {
                        var o = this.m_oldManifold.m_points[m];
                        if (o.m_id.key == l.key) {
                            k.m_normalImpulse = o.m_normalImpulse;
                            k.m_tangentImpulse = o.m_tangentImpulse;
                            break
                        }
                    }
                }
            } else this.m_manifold.m_pointCount = 0;
            if (d != c) {
                f.SetAwake(true);
                h.SetAwake(true)
            }
        }
        this.m_flags = d ? this.m_flags | g.e_touchingFlag : this.m_flags & ~g.e_touchingFlag;
        c == false && d == true && b.BeginContact(this);
        c == true && d == false && b.EndContact(this);
        (this.m_flags & g.e_sensorFlag) == 0 && b.PreSolve(this,
            this.m_oldManifold)
    };
    g.prototype.Evaluate = function () { };
    g.prototype.ComputeTOI = function (b, c) {
        g.s_input.proxyA.Set(this.m_fixtureA.GetShape());
        g.s_input.proxyB.Set(this.m_fixtureB.GetShape());
        g.s_input.sweepA = b;
        g.s_input.sweepB = c;
        g.s_input.tolerance = A.b2_linearSlop;
        return D.TimeOfImpact(g.s_input)
    };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 1;
        Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 2;
        Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 4;
        Box2D.Dynamics.Contacts.b2Contact.e_toiFlag =
            8;
        Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 16;
        Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 32;
        Box2D.Dynamics.Contacts.b2Contact.e_filterFlag = 64;
        Box2D.Dynamics.Contacts.b2Contact.s_input = new F
    });
    h.b2ContactConstraint = function () {
        this.localPlaneNormal = new H;
        this.localPoint = new H;
        this.normal = new H;
        this.normalMass = new C;
        this.K = new C
    };
    h.prototype.b2ContactConstraint = function () {
        this.points = new Vector(A.b2_maxManifoldPoints);
        for (var b = 0; b < A.b2_maxManifoldPoints; b++) this.points[b] = new j
    };
    j.b2ContactConstraintPoint =
        function () {
            this.localPoint = new H;
            this.rA = new H;
            this.rB = new H
        };
    k.b2ContactEdge = function () { };
    l.b2ContactFactory = function () { };
    l.prototype.b2ContactFactory = function (b) {
        this.m_allocator = b;
        this.InitializeRegisters()
    };
    l.prototype.AddType = function (b, c, d, e) {
        d === void 0 && (d = 0);
        e === void 0 && (e = 0);
        this.m_registers[d][e].createFcn = b;
        this.m_registers[d][e].destroyFcn = c;
        this.m_registers[d][e].primary = true;
        if (d != e) {
            this.m_registers[e][d].createFcn = b;
            this.m_registers[e][d].destroyFcn = c;
            this.m_registers[e][d].primary =
                false
        }
    };
    l.prototype.InitializeRegisters = function () {
        this.m_registers = new Vector(e.e_shapeTypeCount);
        for (var b = 0; b < e.e_shapeTypeCount; b++) {
            this.m_registers[b] = new Vector(e.e_shapeTypeCount);
            for (var c = 0; c < e.e_shapeTypeCount; c++) this.m_registers[b][c] = new m
        }
        this.AddType(f.Create, f.Destroy, e.e_circleShape, e.e_circleShape);
        this.AddType(r.Create, r.Destroy, e.e_polygonShape, e.e_circleShape);
        this.AddType(t.Create, t.Destroy, e.e_polygonShape, e.e_polygonShape);
        this.AddType(p.Create, p.Destroy, e.e_edgeShape, e.e_circleShape);
        this.AddType(o.Create, o.Destroy, e.e_polygonShape, e.e_edgeShape)
    };
    l.prototype.Create = function (b, c) {
        var d = parseInt(b.GetType()),
            e = parseInt(c.GetType()),
            d = this.m_registers[d][e];
        if (d.pool) {
            e = d.pool;
            d.pool = e.m_next;
            d.poolCount--;
            e.Reset(b, c);
            return e
        }
        e = d.createFcn;
        if (e != null) {
            if (d.primary) {
                e = e(this.m_allocator);
                e.Reset(b, c)
            } else {
                e = e(this.m_allocator);
                e.Reset(c, b)
            }
            return e
        }
        return null
    };
    l.prototype.Destroy = function (b) {
        if (b.m_manifold.m_pointCount > 0) {
            b.m_fixtureA.m_body.SetAwake(true);
            b.m_fixtureB.m_body.SetAwake(true)
        }
        var c =
            parseInt(b.m_fixtureA.GetType()),
            d = parseInt(b.m_fixtureB.GetType()),
            c = this.m_registers[c][d];
        c.poolCount++;
        b.m_next = c.pool;
        c.pool = b;
        c = c.destroyFcn;
        c(b, this.m_allocator)
    };
    m.b2ContactRegister = function () { };
    n.b2ContactResult = function () {
        this.position = new H;
        this.normal = new H;
        this.id = new P
    };
    q.b2ContactSolver = function () {
        this.m_step = new z;
        this.m_constraints = new Vector
    };
    q.prototype.b2ContactSolver = function () { };
    q.prototype.Initialize = function (b, c, d, e) {
        d === void 0 && (d = 0);
        var f;
        this.m_step.Set(b);
        this.m_allocator =
            e;
        for (this.m_constraintCount = d; this.m_constraints.length < this.m_constraintCount;) this.m_constraints[this.m_constraints.length] = new h;
        for (b = 0; b < d; ++b) {
            f = c[b];
            var e = f.m_fixtureA,
                g = f.m_fixtureB,
                j = e.m_shape.m_radius,
                k = g.m_shape.m_radius,
                l = e.m_body,
                m = g.m_body,
                o = f.GetManifold(),
                n = A.b2MixFriction(e.GetFriction(), g.GetFriction()),
                s = A.b2MixRestitution(e.GetRestitution(), g.GetRestitution()),
                p = l.m_linearVelocity.x,
                t = l.m_linearVelocity.y,
                r = m.m_linearVelocity.x,
                u = m.m_linearVelocity.y,
                D = l.m_angularVelocity,
                w = m.m_angularVelocity;
            A.b2Assert(o.m_pointCount > 0);
            q.s_worldManifold.Initialize(o, l.m_xf, j, m.m_xf, k);
            g = q.s_worldManifold.m_normal.x;
            f = q.s_worldManifold.m_normal.y;
            e = this.m_constraints[b];
            e.bodyA = l;
            e.bodyB = m;
            e.manifold = o;
            e.normal.x = g;
            e.normal.y = f;
            e.pointCount = o.m_pointCount;
            e.friction = n;
            e.restitution = s;
            e.localPlaneNormal.x = o.m_localPlaneNormal.x;
            e.localPlaneNormal.y = o.m_localPlaneNormal.y;
            e.localPoint.x = o.m_localPoint.x;
            e.localPoint.y = o.m_localPoint.y;
            e.radius = j + k;
            e.type = o.m_type;
            for (j = 0; j < e.pointCount; ++j) {
                n = o.m_points[j];
                k = e.points[j];
                k.normalImpulse = n.m_normalImpulse;
                k.tangentImpulse = n.m_tangentImpulse;
                k.localPoint.SetV(n.m_localPoint);
                var n = k.rA.x = q.s_worldManifold.m_points[j].x - l.m_sweep.c.x,
                    s = k.rA.y = q.s_worldManifold.m_points[j].y - l.m_sweep.c.y,
                    F = k.rB.x = q.s_worldManifold.m_points[j].x - m.m_sweep.c.x,
                    z = k.rB.y = q.s_worldManifold.m_points[j].y - m.m_sweep.c.y,
                    I = n * f - s * g,
                    C = F * f - z * g,
                    I = I * I,
                    C = C * C;
                k.normalMass = 1 / (l.m_invMass + m.m_invMass + l.m_invI * I + m.m_invI * C);
                var G = l.m_mass * l.m_invMass + m.m_mass * m.m_invMass,
                    G = G + (l.m_mass * l.m_invI *
                        I + m.m_mass * m.m_invI * C);
                k.equalizedMass = 1 / G;
                C = f;
                G = -g;
                I = n * G - s * C;
                C = F * G - z * C;
                I = I * I;
                C = C * C;
                k.tangentMass = 1 / (l.m_invMass + m.m_invMass + l.m_invI * I + m.m_invI * C);
                k.velocityBias = 0;
                n = e.normal.x * (r + -w * z - p - -D * s) + e.normal.y * (u + w * F - t - D * n);
                if (n < -A.b2_velocityThreshold) k.velocityBias = k.velocityBias + -e.restitution * n
            }
            if (e.pointCount == 2) {
                u = e.points[0];
                r = e.points[1];
                o = l.m_invMass;
                l = l.m_invI;
                p = m.m_invMass;
                m = m.m_invI;
                t = u.rA.x * f - u.rA.y * g;
                u = u.rB.x * f - u.rB.y * g;
                D = r.rA.x * f - r.rA.y * g;
                r = r.rB.x * f - r.rB.y * g;
                g = o + p + l * t * t + m * u * u;
                f = o + p + l * D *
                    D + m * r * r;
                m = o + p + l * t * D + m * u * r;
                if (g * g < 100 * (g * f - m * m)) {
                    e.K.col1.Set(g, m);
                    e.K.col2.Set(m, f);
                    e.K.GetInverse(e.normalMass)
                } else e.pointCount = 1
            }
        }
    };
    q.prototype.InitVelocityConstraints = function (b) {
        for (var c = 0; c < this.m_constraintCount; ++c) {
            var d = this.m_constraints[c],
                e = d.bodyA,
                f = d.bodyB,
                g = e.m_invMass,
                h = e.m_invI,
                j = f.m_invMass,
                k = f.m_invI,
                l = d.normal.x,
                m = d.normal.y,
                o = m,
                n = -l,
                s = 0,
                p = 0;
            if (b.warmStarting) {
                p = d.pointCount;
                for (s = 0; s < p; ++s) {
                    var q = d.points[s];
                    q.normalImpulse = q.normalImpulse * b.dtRatio;
                    q.tangentImpulse = q.tangentImpulse *
                        b.dtRatio;
                    var t = q.normalImpulse * l + q.tangentImpulse * o,
                        r = q.normalImpulse * m + q.tangentImpulse * n;
                    e.m_angularVelocity = e.m_angularVelocity - h * (q.rA.x * r - q.rA.y * t);
                    e.m_linearVelocity.x = e.m_linearVelocity.x - g * t;
                    e.m_linearVelocity.y = e.m_linearVelocity.y - g * r;
                    f.m_angularVelocity = f.m_angularVelocity + k * (q.rB.x * r - q.rB.y * t);
                    f.m_linearVelocity.x = f.m_linearVelocity.x + j * t;
                    f.m_linearVelocity.y = f.m_linearVelocity.y + j * r
                }
            } else {
                p = d.pointCount;
                for (s = 0; s < p; ++s) {
                    e = d.points[s];
                    e.normalImpulse = 0;
                    e.tangentImpulse = 0
                }
            }
        }
    };
    q.prototype.SolveVelocityConstraints =
        function () {
            for (var b = 0, c, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l, m = 0; m < this.m_constraintCount; ++m) {
                var f = this.m_constraints[m],
                    o = f.bodyA,
                    n = f.bodyB,
                    s = o.m_angularVelocity,
                    p = n.m_angularVelocity,
                    q = o.m_linearVelocity,
                    t = n.m_linearVelocity,
                    r = o.m_invMass,
                    u = o.m_invI,
                    D = n.m_invMass,
                    w = n.m_invI,
                    j = f.normal.x,
                    F = k = f.normal.y;
                l = -j;
                h = f.friction;
                for (b = 0; b < f.pointCount; b++) {
                    c = f.points[b];
                    d = t.x - p * c.rB.y - q.x + s * c.rA.y;
                    e = t.y + p * c.rB.x - q.y - s * c.rA.x;
                    d = d * F + e * l;
                    d = c.tangentMass * -d;
                    e = h * c.normalImpulse;
                    e = G.Clamp(c.tangentImpulse + d, -e, e);
                    d = e - c.tangentImpulse;
                    g = d * F;
                    d = d * l;
                    q.x = q.x - r * g;
                    q.y = q.y - r * d;
                    s = s - u * (c.rA.x * d - c.rA.y * g);
                    t.x = t.x + D * g;
                    t.y = t.y + D * d;
                    p = p + w * (c.rB.x * d - c.rB.y * g);
                    c.tangentImpulse = e
                }
                parseInt(f.pointCount);
                if (f.pointCount == 1) {
                    c = f.points[0];
                    d = t.x + -p * c.rB.y - q.x - -s * c.rA.y;
                    e = t.y + p * c.rB.x - q.y - s * c.rA.x;
                    f = d * j + e * k;
                    d = -c.normalMass * (f - c.velocityBias);
                    e = c.normalImpulse + d;
                    e = e > 0 ? e : 0;
                    d = e - c.normalImpulse;
                    g = d * j;
                    d = d * k;
                    q.x = q.x - r * g;
                    q.y = q.y - r * d;
                    s = s - u * (c.rA.x * d - c.rA.y * g);
                    t.x = t.x + D * g;
                    t.y = t.y + D * d;
                    p = p + w * (c.rB.x * d - c.rB.y * g);
                    c.normalImpulse = e
                } else {
                    c = f.points[0];
                    var b = f.points[1],
                        d = c.normalImpulse,
                        h = b.normalImpulse,
                        A = (t.x - p * c.rB.y - q.x + s * c.rA.y) * j + (t.y + p * c.rB.x - q.y - s * c.rA.x) * k,
                        z = (t.x - p * b.rB.y - q.x + s * b.rA.y) * j + (t.y + p * b.rB.x - q.y - s * b.rA.x) * k,
                        e = A - c.velocityBias,
                        g = z - b.velocityBias;
                    l = f.K;
                    e = e - (l.col1.x * d + l.col2.x * h);
                    for (g = g - (l.col1.y * d + l.col2.y * h) ; ;) {
                        l = f.normalMass;
                        F = -(l.col1.x * e + l.col2.x * g);
                        l = -(l.col1.y * e + l.col2.y * g);
                        if (F >= 0 && l >= 0) {
                            d = F - d;
                            h = l - h;
                            f = d * j;
                            d = d * k;
                            j = h * j;
                            k = h * k;
                            q.x = q.x - r * (f + j);
                            q.y = q.y - r * (d + k);
                            s = s - u * (c.rA.x * d - c.rA.y * f + b.rA.x * k - b.rA.y * j);
                            t.x = t.x + D * (f + j);
                            t.y =
                                t.y + D * (d + k);
                            p = p + w * (c.rB.x * d - c.rB.y * f + b.rB.x * k - b.rB.y * j);
                            c.normalImpulse = F;
                            b.normalImpulse = l;
                            break
                        }
                        F = -c.normalMass * e;
                        l = 0;
                        z = f.K.col1.y * F + g;
                        if (F >= 0 && z >= 0) {
                            d = F - d;
                            h = l - h;
                            f = d * j;
                            d = d * k;
                            j = h * j;
                            k = h * k;
                            q.x = q.x - r * (f + j);
                            q.y = q.y - r * (d + k);
                            s = s - u * (c.rA.x * d - c.rA.y * f + b.rA.x * k - b.rA.y * j);
                            t.x = t.x + D * (f + j);
                            t.y = t.y + D * (d + k);
                            p = p + w * (c.rB.x * d - c.rB.y * f + b.rB.x * k - b.rB.y * j);
                            c.normalImpulse = F;
                            b.normalImpulse = l;
                            break
                        }
                        F = 0;
                        l = -b.normalMass * g;
                        A = f.K.col2.x * l + e;
                        if (l >= 0 && A >= 0) {
                            d = F - d;
                            h = l - h;
                            f = d * j;
                            d = d * k;
                            j = h * j;
                            k = h * k;
                            q.x = q.x - r * (f + j);
                            q.y = q.y - r * (d +
                                k);
                            s = s - u * (c.rA.x * d - c.rA.y * f + b.rA.x * k - b.rA.y * j);
                            t.x = t.x + D * (f + j);
                            t.y = t.y + D * (d + k);
                            p = p + w * (c.rB.x * d - c.rB.y * f + b.rB.x * k - b.rB.y * j);
                            c.normalImpulse = F;
                            b.normalImpulse = l;
                            break
                        }
                        l = F = 0;
                        A = e;
                        z = g;
                        if (A >= 0 && z >= 0) {
                            d = F - d;
                            h = l - h;
                            f = d * j;
                            d = d * k;
                            j = h * j;
                            k = h * k;
                            q.x = q.x - r * (f + j);
                            q.y = q.y - r * (d + k);
                            s = s - u * (c.rA.x * d - c.rA.y * f + b.rA.x * k - b.rA.y * j);
                            t.x = t.x + D * (f + j);
                            t.y = t.y + D * (d + k);
                            p = p + w * (c.rB.x * d - c.rB.y * f + b.rB.x * k - b.rB.y * j);
                            c.normalImpulse = F;
                            b.normalImpulse = l;
                            break
                        }
                        break
                    }
                }
                o.m_angularVelocity = s;
                n.m_angularVelocity = p
            }
        };
    q.prototype.FinalizeVelocityConstraints =
        function () {
            for (var b = 0; b < this.m_constraintCount; ++b)
                for (var c = this.m_constraints[b], d = c.manifold, e = 0; e < c.pointCount; ++e) {
                    var f = d.m_points[e],
                        g = c.points[e];
                    f.m_normalImpulse = g.normalImpulse;
                    f.m_tangentImpulse = g.tangentImpulse
                }
        };
    q.prototype.SolvePositionConstraints = function (b) {
        b === void 0 && (b = 0);
        for (var c = 0, d = 0; d < this.m_constraintCount; d++) {
            var e = this.m_constraints[d],
                f = e.bodyA,
                g = e.bodyB,
                h = f.m_mass * f.m_invMass,
                j = f.m_mass * f.m_invI,
                k = g.m_mass * g.m_invMass,
                l = g.m_mass * g.m_invI;
            q.s_psm.Initialize(e);
            for (var m =
                    q.s_psm.m_normal, o = 0; o < e.pointCount; o++) {
                var n = e.points[o],
                    s = q.s_psm.m_points[o],
                    p = q.s_psm.m_separations[o],
                    t = s.x - f.m_sweep.c.x,
                    r = s.y - f.m_sweep.c.y,
                    u = s.x - g.m_sweep.c.x,
                    s = s.y - g.m_sweep.c.y,
                    c = c < p ? c : p,
                    p = G.Clamp(b * (p + A.b2_linearSlop), -A.b2_maxLinearCorrection, 0),
                    p = -n.equalizedMass * p,
                    n = p * m.x,
                    p = p * m.y;
                f.m_sweep.c.x = f.m_sweep.c.x - h * n;
                f.m_sweep.c.y = f.m_sweep.c.y - h * p;
                f.m_sweep.a = f.m_sweep.a - j * (t * p - r * n);
                f.SynchronizeTransform();
                g.m_sweep.c.x = g.m_sweep.c.x + k * n;
                g.m_sweep.c.y = g.m_sweep.c.y + k * p;
                g.m_sweep.a = g.m_sweep.a +
                    l * (u * p - s * n);
                g.SynchronizeTransform()
            }
        }
        return c > -1.5 * A.b2_linearSlop
    };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new I;
        Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new u
    });
    Box2D.inherit(p, Box2D.Dynamics.Contacts.b2Contact);
    p.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    p.b2EdgeAndCircleContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    p.Create = function () {
        return new p
    };
    p.Destroy = function () { };
    p.prototype.Reset =
        function (b, c) {
            this.__super.Reset.call(this, b, c)
        };
    p.prototype.Evaluate = function () {
        var d = this.m_fixtureA.GetBody(),
            e = this.m_fixtureB.GetBody();
        this.b2CollideEdgeAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof c ? this.m_fixtureA.GetShape() : null, d.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, e.m_xf)
    };
    p.prototype.b2CollideEdgeAndCircle = function () { };
    Box2D.inherit(s, Box2D.Dynamics.Contacts.b2Contact);
    s.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    s.b2NullContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    s.prototype.b2NullContact = function () {
        this.__super.b2Contact.call(this)
    };
    s.prototype.Evaluate = function () { };
    Box2D.inherit(r, Box2D.Dynamics.Contacts.b2Contact);
    r.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    r.b2PolyAndCircleContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    r.Create = function () {
        return new r
    };
    r.Destroy = function () { };
    r.prototype.Reset = function (b,
        c) {
        this.__super.Reset.call(this, b, c);
        A.b2Assert(b.GetType() == e.e_polygonShape);
        A.b2Assert(c.GetType() == e.e_circleShape)
    };
    r.prototype.Evaluate = function () {
        var c = this.m_fixtureA.m_body,
            e = this.m_fixtureB.m_body;
        K.CollidePolygonAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() : null, c.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, e.m_xf)
    };
    Box2D.inherit(o, Box2D.Dynamics.Contacts.b2Contact);
    o.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    o.b2PolyAndEdgeContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    o.Create = function () {
        return new o
    };
    o.Destroy = function () { };
    o.prototype.Reset = function (b, c) {
        this.__super.Reset.call(this, b, c);
        A.b2Assert(b.GetType() == e.e_polygonShape);
        A.b2Assert(c.GetType() == e.e_edgeShape)
    };
    o.prototype.Evaluate = function () {
        var b = this.m_fixtureA.GetBody(),
            e = this.m_fixtureB.GetBody();
        this.b2CollidePolyAndEdge(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() :
            null, b.m_xf, this.m_fixtureB.GetShape() instanceof c ? this.m_fixtureB.GetShape() : null, e.m_xf)
    };
    o.prototype.b2CollidePolyAndEdge = function () { };
    Box2D.inherit(t, Box2D.Dynamics.Contacts.b2Contact);
    t.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    t.b2PolygonContact = function () {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    t.Create = function () {
        return new t
    };
    t.Destroy = function () { };
    t.prototype.Reset = function (b, c) {
        this.__super.Reset.call(this, b, c)
    };
    t.prototype.Evaluate = function () {
        var b =
            this.m_fixtureA.GetBody(),
            c = this.m_fixtureB.GetBody();
        K.CollidePolygons(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() : null, b.m_xf, this.m_fixtureB.GetShape() instanceof d ? this.m_fixtureB.GetShape() : null, c.m_xf)
    };
    u.b2PositionSolverManifold = function () { };
    u.prototype.b2PositionSolverManifold = function () {
        this.m_normal = new H;
        this.m_separations = new Vector_a2j_Number(A.b2_maxManifoldPoints);
        this.m_points = new Vector(A.b2_maxManifoldPoints);
        for (var b = 0; b < A.b2_maxManifoldPoints; b++) this.m_points[b] =
            new H
    };
    u.prototype.Initialize = function (b) {
        A.b2Assert(b.pointCount > 0);
        var c = 0,
            d = 0,
            e = 0,
            f, g = 0,
            h = 0;
        switch (b.type) {
            case T.e_circles:
                f = b.bodyA.m_xf.R;
                e = b.localPoint;
                c = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
                d = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
                f = b.bodyB.m_xf.R;
                e = b.points[0].localPoint;
                g = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
                f = b.bodyB.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
                var e = g - c,
                    h = f - d,
                    j = e * e + h * h;
                if (j > Number.MIN_VALUE * Number.MIN_VALUE) {
                    j = Math.sqrt(j);
                    this.m_normal.x =
                        e / j;
                    this.m_normal.y = h / j
                } else {
                    this.m_normal.x = 1;
                    this.m_normal.y = 0
                }
                this.m_points[0].x = 0.5 * (c + g);
                this.m_points[0].y = 0.5 * (d + f);
                this.m_separations[0] = e * this.m_normal.x + h * this.m_normal.y - b.radius;
                break;
            case T.e_faceA:
                f = b.bodyA.m_xf.R;
                e = b.localPlaneNormal;
                this.m_normal.x = f.col1.x * e.x + f.col2.x * e.y;
                this.m_normal.y = f.col1.y * e.x + f.col2.y * e.y;
                f = b.bodyA.m_xf.R;
                e = b.localPoint;
                g = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
                h = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
                f = b.bodyB.m_xf.R;
                for (c = 0; c < b.pointCount; ++c) {
                    e =
                        b.points[c].localPoint;
                    d = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
                    e = b.bodyB.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
                    this.m_separations[c] = (d - g) * this.m_normal.x + (e - h) * this.m_normal.y - b.radius;
                    this.m_points[c].x = d;
                    this.m_points[c].y = e
                }
                break;
            case T.e_faceB:
                f = b.bodyB.m_xf.R;
                e = b.localPlaneNormal;
                this.m_normal.x = f.col1.x * e.x + f.col2.x * e.y;
                this.m_normal.y = f.col1.y * e.x + f.col2.y * e.y;
                f = b.bodyB.m_xf.R;
                e = b.localPoint;
                g = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
                h = b.bodyB.m_xf.position.y +
                    (f.col1.y * e.x + f.col2.y * e.y);
                f = b.bodyA.m_xf.R;
                for (c = 0; c < b.pointCount; ++c) {
                    e = b.points[c].localPoint;
                    d = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
                    e = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
                    this.m_separations[c] = (d - g) * this.m_normal.x + (e - h) * this.m_normal.y - b.radius;
                    this.m_points[c].Set(d, e)
                }
                this.m_normal.x = this.m_normal.x * -1;
                this.m_normal.y = this.m_normal.y * -1
        }
    };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new H;
        Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB =
            new H
    })
})();
(function () {
    var b = Box2D.Common.Math.b2Mat22,
        c = Box2D.Common.Math.b2Math,
        d = Box2D.Common.Math.b2Vec2,
        e = Box2D.Common.b2Color,
        f = Box2D.Dynamics.Controllers.b2BuoyancyController,
        g = Box2D.Dynamics.Controllers.b2ConstantAccelController,
        h = Box2D.Dynamics.Controllers.b2ConstantForceController,
        j = Box2D.Dynamics.Controllers.b2Controller,
        k = Box2D.Dynamics.Controllers.b2ControllerEdge,
        l = Box2D.Dynamics.Controllers.b2GravityController,
        m = Box2D.Dynamics.Controllers.b2TensorDampingController;
    Box2D.inherit(f, Box2D.Dynamics.Controllers.b2Controller);
    f.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    f.b2BuoyancyController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.normal = new d(0, -1);
        this.density = this.offset = 0;
        this.velocity = new d(0, 0);
        this.linearDrag = 2;
        this.angularDrag = 1;
        this.useDensity = false;
        this.useWorldGravity = true;
        this.gravity = null
    };
    f.prototype.Step = function () {
        if (this.m_bodyList) {
            if (this.useWorldGravity) this.gravity = this.GetWorld().GetGravity().Copy();
            for (var b = this.m_bodyList; b; b =
                b.nextBody) {
                var c = b.body;
                if (c.IsAwake() != false) {
                    for (var e = new d, f = new d, g = 0, h = 0, j = c.GetFixtureList() ; j; j = j.GetNext()) {
                        var k = new d,
                            l = j.GetShape().ComputeSubmergedArea(this.normal, this.offset, c.GetTransform(), k),
                            g = g + l;
                        e.x = e.x + l * k.x;
                        e.y = e.y + l * k.y;
                        var m = 0,
                            m = 1,
                            h = h + l * m;
                        f.x = f.x + l * k.x * m;
                        f.y = f.y + l * k.y * m
                    }
                    e.x = e.x / g;
                    e.y = e.y / g;
                    f.x = f.x / h;
                    f.y = f.y / h;
                    if (!(g < Number.MIN_VALUE)) {
                        h = this.gravity.GetNegative();
                        h.Multiply(this.density * g);
                        c.ApplyForce(h, f);
                        f = c.GetLinearVelocityFromWorldPoint(e);
                        f.Subtract(this.velocity);
                        f.Multiply(-this.linearDrag * g);
                        c.ApplyForce(f, e);
                        c.ApplyTorque(-c.GetInertia() / c.GetMass() * g * c.GetAngularVelocity() * this.angularDrag)
                    }
                }
            }
        }
    };
    f.prototype.Draw = function (b) {
        var c = new d,
            f = new d;
        c.x = this.normal.x * this.offset + this.normal.y * 1E3;
        c.y = this.normal.y * this.offset - this.normal.x * 1E3;
        f.x = this.normal.x * this.offset - this.normal.y * 1E3;
        f.y = this.normal.y * this.offset + this.normal.x * 1E3;
        var g = new e(0, 0, 1);
        b.DrawSegment(c, f, g)
    };
    Box2D.inherit(g, Box2D.Dynamics.Controllers.b2Controller);
    g.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    g.b2ConstantAccelController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.A = new d(0, 0)
    };
    g.prototype.Step = function (b) {
        for (var b = new d(this.A.x * b.dt, this.A.y * b.dt), c = this.m_bodyList; c; c = c.nextBody) {
            var e = c.body;
            e.IsAwake() && e.SetLinearVelocity(new d(e.GetLinearVelocity().x + b.x, e.GetLinearVelocity().y + b.y))
        }
    };
    Box2D.inherit(h, Box2D.Dynamics.Controllers.b2Controller);
    h.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    h.b2ConstantForceController =
        function () {
            Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
            this.F = new d(0, 0)
        };
    h.prototype.Step = function () {
        for (var b = this.m_bodyList; b; b = b.nextBody) {
            var c = b.body;
            c.IsAwake() && c.ApplyForce(this.F, c.GetWorldCenter())
        }
    };
    j.b2Controller = function () { };
    j.prototype.Step = function () { };
    j.prototype.Draw = function () { };
    j.prototype.AddBody = function (b) {
        var c = new k;
        c.controller = this;
        c.body = b;
        c.nextBody = this.m_bodyList;
        c.prevBody = null;
        this.m_bodyList = c;
        if (c.nextBody) c.nextBody.prevBody = c;
        this.m_bodyCount++;
        c.nextController = b.m_controllerList;
        c.prevController = null;
        b.m_controllerList = c;
        if (c.nextController) c.nextController.prevController = c;
        b.m_controllerCount++
    };
    j.prototype.RemoveBody = function (b) {
        for (var c = b.m_controllerList; c && c.controller != this;) c = c.nextController;
        if (c.prevBody) c.prevBody.nextBody = c.nextBody;
        if (c.nextBody) c.nextBody.prevBody = c.prevBody;
        if (c.nextController) c.nextController.prevController = c.prevController;
        if (c.prevController) c.prevController.nextController = c.nextController;
        if (this.m_bodyList ==
            c) this.m_bodyList = c.nextBody;
        if (b.m_controllerList == c) b.m_controllerList = c.nextController;
        b.m_controllerCount--;
        this.m_bodyCount--
    };
    j.prototype.Clear = function () {
        for (; this.m_bodyList;) this.RemoveBody(this.m_bodyList.body)
    };
    j.prototype.GetNext = function () {
        return this.m_next
    };
    j.prototype.GetWorld = function () {
        return this.m_world
    };
    j.prototype.GetBodyList = function () {
        return this.m_bodyList
    };
    k.b2ControllerEdge = function () { };
    Box2D.inherit(l, Box2D.Dynamics.Controllers.b2Controller);
    l.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    l.b2GravityController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.G = 1;
        this.invSqr = true
    };
    l.prototype.Step = function () {
        var b = null,
            c = null,
            e = null,
            f = 0,
            g = null,
            h = null,
            j = null,
            k = 0,
            l = 0,
            m = 0;
        if (this.invSqr)
            for (b = this.m_bodyList; b; b = b.nextBody) {
                c = b.body;
                e = c.GetWorldCenter();
                f = c.GetMass();
                for (g = this.m_bodyList; g != b; g = g.nextBody) {
                    h = g.body;
                    j = h.GetWorldCenter();
                    k = j.x - e.x;
                    l = j.y - e.y;
                    m = k * k + l * l;
                    if (!(m < Number.MIN_VALUE)) {
                        k = new d(k, l);
                        k.Multiply(this.G / m / Math.sqrt(m) * f * h.GetMass());
                        c.IsAwake() && c.ApplyForce(k, e);
                        k.Multiply(-1);
                        h.IsAwake() && h.ApplyForce(k, j)
                    }
                }
            } else
            for (b = this.m_bodyList; b; b = b.nextBody) {
                c = b.body;
                e = c.GetWorldCenter();
                f = c.GetMass();
                for (g = this.m_bodyList; g != b; g = g.nextBody) {
                    h = g.body;
                    j = h.GetWorldCenter();
                    k = j.x - e.x;
                    l = j.y - e.y;
                    m = k * k + l * l;
                    if (!(m < Number.MIN_VALUE)) {
                        k = new d(k, l);
                        k.Multiply(this.G / m * f * h.GetMass());
                        c.IsAwake() && c.ApplyForce(k, e);
                        k.Multiply(-1);
                        h.IsAwake() && h.ApplyForce(k, j)
                    }
                }
            }
    };
    Box2D.inherit(m, Box2D.Dynamics.Controllers.b2Controller);
    m.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    m.b2TensorDampingController = function () {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.T = new b;
        this.maxTimestep = 0
    };
    m.prototype.SetAxisAligned = function (b, c) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        this.T.col1.x = -b;
        this.T.col1.y = 0;
        this.T.col2.x = 0;
        this.T.col2.y = -c;
        this.maxTimestep = b > 0 || c > 0 ? 1 / Math.max(b, c) : 0
    };
    m.prototype.Step = function (b) {
        b = b.dt;
        if (!(b <= Number.MIN_VALUE)) {
            if (b > this.maxTimestep && this.maxTimestep > 0) b = this.maxTimestep;
            for (var e = this.m_bodyList; e; e = e.nextBody) {
                var f =
                    e.body;
                if (f.IsAwake()) {
                    var g = f.GetWorldVector(c.MulMV(this.T, f.GetLocalVector(f.GetLinearVelocity())));
                    f.SetLinearVelocity(new d(f.GetLinearVelocity().x + g.x * b, f.GetLinearVelocity().y + g.y * b))
                }
            }
        }
    }
})();
(function () {
    var b = Box2D.Common.b2Settings,
        c = Box2D.Common.Math.b2Mat22,
        d = Box2D.Common.Math.b2Mat33,
        e = Box2D.Common.Math.b2Math,
        f = Box2D.Common.Math.b2Vec2,
        g = Box2D.Common.Math.b2Vec3,
        h = Box2D.Dynamics.Joints.b2DistanceJoint,
        j = Box2D.Dynamics.Joints.b2DistanceJointDef,
        k = Box2D.Dynamics.Joints.b2FrictionJoint,
        l = Box2D.Dynamics.Joints.b2FrictionJointDef,
        m = Box2D.Dynamics.Joints.b2GearJoint,
        n = Box2D.Dynamics.Joints.b2GearJointDef,
        q = Box2D.Dynamics.Joints.b2Jacobian,
        p = Box2D.Dynamics.Joints.b2Joint,
        s = Box2D.Dynamics.Joints.b2JointDef,
        r = Box2D.Dynamics.Joints.b2JointEdge,
        o = Box2D.Dynamics.Joints.b2LineJoint,
        t = Box2D.Dynamics.Joints.b2LineJointDef,
        u = Box2D.Dynamics.Joints.b2MouseJoint,
        w = Box2D.Dynamics.Joints.b2MouseJointDef,
        z = Box2D.Dynamics.Joints.b2PrismaticJoint,
        A = Box2D.Dynamics.Joints.b2PrismaticJointDef,
        C = Box2D.Dynamics.Joints.b2PulleyJoint,
        G = Box2D.Dynamics.Joints.b2PulleyJointDef,
        H = Box2D.Dynamics.Joints.b2RevoluteJoint,
        K = Box2D.Dynamics.Joints.b2RevoluteJointDef,
        P = Box2D.Dynamics.Joints.b2WeldJoint,
        T = Box2D.Dynamics.Joints.b2WeldJointDef;
    Box2D.inherit(h, Box2D.Dynamics.Joints.b2Joint);
    h.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    h.b2DistanceJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_u = new f
    };
    h.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    h.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    h.prototype.GetReactionForce = function (b) {
        b === void 0 && (b = 0);
        return new f(b * this.m_impulse * this.m_u.x, b * this.m_impulse * this.m_u.y)
    };
    h.prototype.GetReactionTorque = function () {
        return 0
    };
    h.prototype.GetLength = function () {
        return this.m_length
    };
    h.prototype.SetLength = function (b) {
        b === void 0 && (b = 0);
        this.m_length = b
    };
    h.prototype.GetFrequency = function () {
        return this.m_frequencyHz
    };
    h.prototype.SetFrequency = function (b) {
        b === void 0 && (b = 0);
        this.m_frequencyHz = b
    };
    h.prototype.GetDampingRatio = function () {
        return this.m_dampingRatio
    };
    h.prototype.SetDampingRatio = function (b) {
        b === void 0 &&
            (b = 0);
        this.m_dampingRatio = b
    };
    h.prototype.b2DistanceJoint = function (b) {
        this.__super.b2Joint.call(this, b);
        this.m_localAnchor1.SetV(b.localAnchorA);
        this.m_localAnchor2.SetV(b.localAnchorB);
        this.m_length = b.length;
        this.m_frequencyHz = b.frequencyHz;
        this.m_dampingRatio = b.dampingRatio;
        this.m_bias = this.m_gamma = this.m_impulse = 0
    };
    h.prototype.InitVelocityConstraints = function (c) {
        var d, e = 0,
            f = this.m_bodyA,
            g = this.m_bodyB;
        d = f.m_xf.R;
        var h = this.m_localAnchor1.x - f.m_sweep.localCenter.x,
            j = this.m_localAnchor1.y - f.m_sweep.localCenter.y,
            e = d.col1.x * h + d.col2.x * j,
            j = d.col1.y * h + d.col2.y * j,
            h = e;
        d = g.m_xf.R;
        var k = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
            l = this.m_localAnchor2.y - g.m_sweep.localCenter.y,
            e = d.col1.x * k + d.col2.x * l,
            l = d.col1.y * k + d.col2.y * l,
            k = e;
        this.m_u.x = g.m_sweep.c.x + k - f.m_sweep.c.x - h;
        this.m_u.y = g.m_sweep.c.y + l - f.m_sweep.c.y - j;
        e = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
        e > b.b2_linearSlop ? this.m_u.Multiply(1 / e) : this.m_u.SetZero();
        d = h * this.m_u.y - j * this.m_u.x;
        var m = k * this.m_u.y - l * this.m_u.x;
        d = f.m_invMass + f.m_invI *
            d * d + g.m_invMass + g.m_invI * m * m;
        this.m_mass = d != 0 ? 1 / d : 0;
        if (this.m_frequencyHz > 0) {
            var e = e - this.m_length,
                m = 2 * Math.PI * this.m_frequencyHz,
                o = this.m_mass * m * m;
            this.m_gamma = c.dt * (2 * this.m_mass * this.m_dampingRatio * m + c.dt * o);
            this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0;
            this.m_bias = e * c.dt * o * this.m_gamma;
            this.m_mass = d + this.m_gamma;
            this.m_mass = this.m_mass != 0 ? 1 / this.m_mass : 0
        }
        if (c.warmStarting) {
            this.m_impulse = this.m_impulse * c.dtRatio;
            c = this.m_impulse * this.m_u.x;
            d = this.m_impulse * this.m_u.y;
            f.m_linearVelocity.x = f.m_linearVelocity.x -
                f.m_invMass * c;
            f.m_linearVelocity.y = f.m_linearVelocity.y - f.m_invMass * d;
            f.m_angularVelocity = f.m_angularVelocity - f.m_invI * (h * d - j * c);
            g.m_linearVelocity.x = g.m_linearVelocity.x + g.m_invMass * c;
            g.m_linearVelocity.y = g.m_linearVelocity.y + g.m_invMass * d;
            g.m_angularVelocity = g.m_angularVelocity + g.m_invI * (k * d - l * c)
        } else this.m_impulse = 0
    };
    h.prototype.SolveVelocityConstraints = function () {
        var b, c = this.m_bodyA,
            d = this.m_bodyB;
        b = c.m_xf.R;
        var e = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
            f = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
            g = b.col1.x * e + b.col2.x * f,
            f = b.col1.y * e + b.col2.y * f,
            e = g;
        b = d.m_xf.R;
        var h = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
            j = this.m_localAnchor2.y - d.m_sweep.localCenter.y,
            g = b.col1.x * h + b.col2.x * j,
            j = b.col1.y * h + b.col2.y * j,
            h = g,
            g = -this.m_mass * (this.m_u.x * (d.m_linearVelocity.x + -d.m_angularVelocity * j - (c.m_linearVelocity.x + -c.m_angularVelocity * f)) + this.m_u.y * (d.m_linearVelocity.y + d.m_angularVelocity * h - (c.m_linearVelocity.y + c.m_angularVelocity * e)) + this.m_bias + this.m_gamma * this.m_impulse);
        this.m_impulse = this.m_impulse +
            g;
        b = g * this.m_u.x;
        g = g * this.m_u.y;
        c.m_linearVelocity.x = c.m_linearVelocity.x - c.m_invMass * b;
        c.m_linearVelocity.y = c.m_linearVelocity.y - c.m_invMass * g;
        c.m_angularVelocity = c.m_angularVelocity - c.m_invI * (e * g - f * b);
        d.m_linearVelocity.x = d.m_linearVelocity.x + d.m_invMass * b;
        d.m_linearVelocity.y = d.m_linearVelocity.y + d.m_invMass * g;
        d.m_angularVelocity = d.m_angularVelocity + d.m_invI * (h * g - j * b)
    };
    h.prototype.SolvePositionConstraints = function () {
        var c;
        if (this.m_frequencyHz > 0) return true;
        var d = this.m_bodyA,
            f = this.m_bodyB;
        c =
            d.m_xf.R;
        var g = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
            h = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
            j = c.col1.x * g + c.col2.x * h,
            h = c.col1.y * g + c.col2.y * h,
            g = j;
        c = f.m_xf.R;
        var k = this.m_localAnchor2.x - f.m_sweep.localCenter.x,
            l = this.m_localAnchor2.y - f.m_sweep.localCenter.y,
            j = c.col1.x * k + c.col2.x * l,
            l = c.col1.y * k + c.col2.y * l,
            k = j,
            j = f.m_sweep.c.x + k - d.m_sweep.c.x - g,
            m = f.m_sweep.c.y + l - d.m_sweep.c.y - h;
        c = Math.sqrt(j * j + m * m);
        j = j / c;
        m = m / c;
        c = c - this.m_length;
        c = e.Clamp(c, -b.b2_maxLinearCorrection, b.b2_maxLinearCorrection);
        var o = -this.m_mass * c;
        this.m_u.Set(j, m);
        j = o * this.m_u.x;
        m = o * this.m_u.y;
        d.m_sweep.c.x = d.m_sweep.c.x - d.m_invMass * j;
        d.m_sweep.c.y = d.m_sweep.c.y - d.m_invMass * m;
        d.m_sweep.a = d.m_sweep.a - d.m_invI * (g * m - h * j);
        f.m_sweep.c.x = f.m_sweep.c.x + f.m_invMass * j;
        f.m_sweep.c.y = f.m_sweep.c.y + f.m_invMass * m;
        f.m_sweep.a = f.m_sweep.a + f.m_invI * (k * m - l * j);
        d.SynchronizeTransform();
        f.SynchronizeTransform();
        return e.Abs(c) < b.b2_linearSlop
    };
    Box2D.inherit(j, Box2D.Dynamics.Joints.b2JointDef);
    j.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    j.b2DistanceJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    j.prototype.b2DistanceJointDef = function () {
        this.__super.b2JointDef.call(this);
        this.type = p.e_distanceJoint;
        this.length = 1;
        this.dampingRatio = this.frequencyHz = 0
    };
    j.prototype.Initialize = function (b, c, d, e) {
        this.bodyA = b;
        this.bodyB = c;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(e));
        b = e.x - d.x;
        d = e.y - d.y;
        this.length =
            Math.sqrt(b * b + d * d);
        this.dampingRatio = this.frequencyHz = 0
    };
    Box2D.inherit(k, Box2D.Dynamics.Joints.b2Joint);
    k.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    k.b2FrictionJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchorA = new f;
        this.m_localAnchorB = new f;
        this.m_linearMass = new c;
        this.m_linearImpulse = new f
    };
    k.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
    };
    k.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
    };
    k.prototype.GetReactionForce = function (b) {
        b === void 0 && (b = 0);
        return new f(b * this.m_linearImpulse.x, b * this.m_linearImpulse.y)
    };
    k.prototype.GetReactionTorque = function (b) {
        b === void 0 && (b = 0);
        return b * this.m_angularImpulse
    };
    k.prototype.SetMaxForce = function (b) {
        b === void 0 && (b = 0);
        this.m_maxForce = b
    };
    k.prototype.GetMaxForce = function () {
        return this.m_maxForce
    };
    k.prototype.SetMaxTorque = function (b) {
        b === void 0 && (b = 0);
        this.m_maxTorque = b
    };
    k.prototype.GetMaxTorque = function () {
        return this.m_maxTorque
    };
    k.prototype.b2FrictionJoint =
        function (b) {
            this.__super.b2Joint.call(this, b);
            this.m_localAnchorA.SetV(b.localAnchorA);
            this.m_localAnchorB.SetV(b.localAnchorB);
            this.m_linearMass.SetZero();
            this.m_angularMass = 0;
            this.m_linearImpulse.SetZero();
            this.m_angularImpulse = 0;
            this.m_maxForce = b.maxForce;
            this.m_maxTorque = b.maxTorque
        };
    k.prototype.InitVelocityConstraints = function (b) {
        var d, e = 0,
            f = this.m_bodyA,
            g = this.m_bodyB;
        d = f.m_xf.R;
        var h = this.m_localAnchorA.x - f.m_sweep.localCenter.x,
            j = this.m_localAnchorA.y - f.m_sweep.localCenter.y,
            e = d.col1.x * h +
            d.col2.x * j,
            j = d.col1.y * h + d.col2.y * j,
            h = e;
        d = g.m_xf.R;
        var k = this.m_localAnchorB.x - g.m_sweep.localCenter.x,
            l = this.m_localAnchorB.y - g.m_sweep.localCenter.y,
            e = d.col1.x * k + d.col2.x * l,
            l = d.col1.y * k + d.col2.y * l,
            k = e;
        d = f.m_invMass;
        var e = g.m_invMass,
            m = f.m_invI,
            o = g.m_invI,
            n = new c;
        n.col1.x = d + e;
        n.col2.x = 0;
        n.col1.y = 0;
        n.col2.y = d + e;
        n.col1.x = n.col1.x + m * j * j;
        n.col2.x = n.col2.x + -m * h * j;
        n.col1.y = n.col1.y + -m * h * j;
        n.col2.y = n.col2.y + m * h * h;
        n.col1.x = n.col1.x + o * l * l;
        n.col2.x = n.col2.x + -o * k * l;
        n.col1.y = n.col1.y + -o * k * l;
        n.col2.y = n.col2.y +
            o * k * k;
        n.GetInverse(this.m_linearMass);
        this.m_angularMass = m + o;
        if (this.m_angularMass > 0) this.m_angularMass = 1 / this.m_angularMass;
        if (b.warmStarting) {
            this.m_linearImpulse.x = this.m_linearImpulse.x * b.dtRatio;
            this.m_linearImpulse.y = this.m_linearImpulse.y * b.dtRatio;
            this.m_angularImpulse = this.m_angularImpulse * b.dtRatio;
            b = this.m_linearImpulse;
            f.m_linearVelocity.x = f.m_linearVelocity.x - d * b.x;
            f.m_linearVelocity.y = f.m_linearVelocity.y - d * b.y;
            f.m_angularVelocity = f.m_angularVelocity - m * (h * b.y - j * b.x + this.m_angularImpulse);
            g.m_linearVelocity.x = g.m_linearVelocity.x + e * b.x;
            g.m_linearVelocity.y = g.m_linearVelocity.y + e * b.y;
            g.m_angularVelocity = g.m_angularVelocity + o * (k * b.y - l * b.x + this.m_angularImpulse)
        } else {
            this.m_linearImpulse.SetZero();
            this.m_angularImpulse = 0
        }
    };
    k.prototype.SolveVelocityConstraints = function (b) {
        var c, d = 0,
            g = this.m_bodyA,
            h = this.m_bodyB,
            j = g.m_linearVelocity,
            k = g.m_angularVelocity,
            l = h.m_linearVelocity,
            m = h.m_angularVelocity,
            o = g.m_invMass,
            n = h.m_invMass,
            s = g.m_invI,
            p = h.m_invI;
        c = g.m_xf.R;
        var q = this.m_localAnchorA.x - g.m_sweep.localCenter.x,
            t = this.m_localAnchorA.y - g.m_sweep.localCenter.y,
            d = c.col1.x * q + c.col2.x * t,
            t = c.col1.y * q + c.col2.y * t,
            q = d;
        c = h.m_xf.R;
        var r = this.m_localAnchorB.x - h.m_sweep.localCenter.x,
            u = this.m_localAnchorB.y - h.m_sweep.localCenter.y,
            d = c.col1.x * r + c.col2.x * u,
            u = c.col1.y * r + c.col2.y * u,
            r = d,
            d = -this.m_angularMass * (m - k),
            w = this.m_angularImpulse;
        c = b.dt * this.m_maxTorque;
        this.m_angularImpulse = e.Clamp(this.m_angularImpulse + d, -c, c);
        d = this.m_angularImpulse - w;
        k = k - s * d;
        m = m + p * d;
        c = e.MulMV(this.m_linearMass, new f(-(l.x - m * u - j.x + k * t), -(l.y + m *
            r - j.y - k * q)));
        d = this.m_linearImpulse.Copy();
        this.m_linearImpulse.Add(c);
        c = b.dt * this.m_maxForce;
        if (this.m_linearImpulse.LengthSquared() > c * c) {
            this.m_linearImpulse.Normalize();
            this.m_linearImpulse.Multiply(c)
        }
        c = e.SubtractVV(this.m_linearImpulse, d);
        j.x = j.x - o * c.x;
        j.y = j.y - o * c.y;
        k = k - s * (q * c.y - t * c.x);
        l.x = l.x + n * c.x;
        l.y = l.y + n * c.y;
        m = m + p * (r * c.y - u * c.x);
        g.m_angularVelocity = k;
        h.m_angularVelocity = m
    };
    k.prototype.SolvePositionConstraints = function () {
        return true
    };
    Box2D.inherit(l, Box2D.Dynamics.Joints.b2JointDef);
    l.prototype.__super =
        Box2D.Dynamics.Joints.b2JointDef.prototype;
    l.b2FrictionJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    l.prototype.b2FrictionJointDef = function () {
        this.__super.b2JointDef.call(this);
        this.type = p.e_frictionJoint;
        this.maxTorque = this.maxForce = 0
    };
    l.prototype.Initialize = function (b, c, d) {
        this.bodyA = b;
        this.bodyB = c;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d))
    };
    Box2D.inherit(m,
        Box2D.Dynamics.Joints.b2Joint);
    m.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    m.b2GearJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_groundAnchor1 = new f;
        this.m_groundAnchor2 = new f;
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_J = new q
    };
    m.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    m.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    m.prototype.GetReactionForce =
        function (b) {
            b === void 0 && (b = 0);
            return new f(b * this.m_impulse * this.m_J.linearB.x, b * this.m_impulse * this.m_J.linearB.y)
        };
    m.prototype.GetReactionTorque = function (b) {
        b === void 0 && (b = 0);
        var c = this.m_bodyB.m_xf.R,
            d = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x,
            e = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y,
            f = c.col1.x * d + c.col2.x * e,
            e = c.col1.y * d + c.col2.y * e;
        return b * (this.m_impulse * this.m_J.angularB - f * this.m_impulse * this.m_J.linearB.y + e * this.m_impulse * this.m_J.linearB.x)
    };
    m.prototype.GetRatio =
        function () {
            return this.m_ratio
        };
    m.prototype.SetRatio = function (b) {
        b === void 0 && (b = 0);
        this.m_ratio = b
    };
    m.prototype.b2GearJoint = function (b) {
        this.__super.b2Joint.call(this, b);
        var c = parseInt(b.joint1.m_type),
            d = parseInt(b.joint2.m_type);
        this.m_prismatic2 = this.m_revolute2 = this.m_prismatic1 = this.m_revolute1 = null;
        var e = 0,
            f = 0;
        this.m_ground1 = b.joint1.GetBodyA();
        this.m_bodyA = b.joint1.GetBodyB();
        if (c == p.e_revoluteJoint) {
            this.m_revolute1 = b.joint1 instanceof H ? b.joint1 : null;
            this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1);
            this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2);
            e = this.m_revolute1.GetJointAngle()
        } else {
            this.m_prismatic1 = b.joint1 instanceof z ? b.joint1 : null;
            this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1);
            this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2);
            e = this.m_prismatic1.GetJointTranslation()
        }
        this.m_ground2 = b.joint2.GetBodyA();
        this.m_bodyB = b.joint2.GetBodyB();
        if (d == p.e_revoluteJoint) {
            this.m_revolute2 = b.joint2 instanceof H ? b.joint2 : null;
            this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1);
            this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2);
            f = this.m_revolute2.GetJointAngle()
        } else {
            this.m_prismatic2 = b.joint2 instanceof z ? b.joint2 : null;
            this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1);
            this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2);
            f = this.m_prismatic2.GetJointTranslation()
        }
        this.m_ratio = b.ratio;
        this.m_constant = e + this.m_ratio * f;
        this.m_impulse = 0
    };
    m.prototype.InitVelocityConstraints = function (b) {
        var c = this.m_ground1,
            d = this.m_ground2,
            e = this.m_bodyA,
            f = this.m_bodyB,
            g = 0,
            h = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0;
        this.m_J.SetZero();
        if (this.m_revolute1) {
            this.m_J.angularA = -1;
            m = m + e.m_invI
        } else {
            c = c.m_xf.R;
            h = this.m_prismatic1.m_localXAxis1;
            g = c.col1.x * h.x + c.col2.x * h.y;
            h = c.col1.y * h.x + c.col2.y * h.y;
            c = e.m_xf.R;
            j = this.m_localAnchor1.x - e.m_sweep.localCenter.x;
            k = this.m_localAnchor1.y - e.m_sweep.localCenter.y;
            l = c.col1.x * j + c.col2.x * k;
            k = c.col1.y * j + c.col2.y * k;
            j = l * h - k * g;
            this.m_J.linearA.Set(-g, -h);
            this.m_J.angularA = -j;
            m = m + (e.m_invMass + e.m_invI * j * j)
        }
        if (this.m_revolute2) {
            this.m_J.angularB = -this.m_ratio;
            m = m + this.m_ratio * this.m_ratio * f.m_invI
        } else {
            c = d.m_xf.R;
            h = this.m_prismatic2.m_localXAxis1;
            g = c.col1.x * h.x + c.col2.x * h.y;
            h = c.col1.y * h.x + c.col2.y * h.y;
            c = f.m_xf.R;
            j = this.m_localAnchor2.x - f.m_sweep.localCenter.x;
            k = this.m_localAnchor2.y - f.m_sweep.localCenter.y;
            l = c.col1.x * j + c.col2.x * k;
            k = c.col1.y * j + c.col2.y * k;
            j = l * h - k * g;
            this.m_J.linearB.Set(-this.m_ratio * g, -this.m_ratio * h);
            this.m_J.angularB = -this.m_ratio * j;
            m = m + this.m_ratio * this.m_ratio * (f.m_invMass + f.m_invI * j * j)
        }
        this.m_mass = m > 0 ? 1 / m : 0;
        if (b.warmStarting) {
            e.m_linearVelocity.x =
                e.m_linearVelocity.x + e.m_invMass * this.m_impulse * this.m_J.linearA.x;
            e.m_linearVelocity.y = e.m_linearVelocity.y + e.m_invMass * this.m_impulse * this.m_J.linearA.y;
            e.m_angularVelocity = e.m_angularVelocity + e.m_invI * this.m_impulse * this.m_J.angularA;
            f.m_linearVelocity.x = f.m_linearVelocity.x + f.m_invMass * this.m_impulse * this.m_J.linearB.x;
            f.m_linearVelocity.y = f.m_linearVelocity.y + f.m_invMass * this.m_impulse * this.m_J.linearB.y;
            f.m_angularVelocity = f.m_angularVelocity + f.m_invI * this.m_impulse * this.m_J.angularB
        } else this.m_impulse =
            0
    };
    m.prototype.SolveVelocityConstraints = function () {
        var b = this.m_bodyA,
            c = this.m_bodyB,
            d = -this.m_mass * this.m_J.Compute(b.m_linearVelocity, b.m_angularVelocity, c.m_linearVelocity, c.m_angularVelocity);
        this.m_impulse = this.m_impulse + d;
        b.m_linearVelocity.x = b.m_linearVelocity.x + b.m_invMass * d * this.m_J.linearA.x;
        b.m_linearVelocity.y = b.m_linearVelocity.y + b.m_invMass * d * this.m_J.linearA.y;
        b.m_angularVelocity = b.m_angularVelocity + b.m_invI * d * this.m_J.angularA;
        c.m_linearVelocity.x = c.m_linearVelocity.x + c.m_invMass *
            d * this.m_J.linearB.x;
        c.m_linearVelocity.y = c.m_linearVelocity.y + c.m_invMass * d * this.m_J.linearB.y;
        c.m_angularVelocity = c.m_angularVelocity + c.m_invI * d * this.m_J.angularB
    };
    m.prototype.SolvePositionConstraints = function () {
        var c = this.m_bodyA,
            d = this.m_bodyB,
            e = 0,
            f = 0,
            e = this.m_revolute1 ? this.m_revolute1.GetJointAngle() : this.m_prismatic1.GetJointTranslation(),
            f = this.m_revolute2 ? this.m_revolute2.GetJointAngle() : this.m_prismatic2.GetJointTranslation(),
            e = -this.m_mass * (this.m_constant - (e + this.m_ratio * f));
        c.m_sweep.c.x =
            c.m_sweep.c.x + c.m_invMass * e * this.m_J.linearA.x;
        c.m_sweep.c.y = c.m_sweep.c.y + c.m_invMass * e * this.m_J.linearA.y;
        c.m_sweep.a = c.m_sweep.a + c.m_invI * e * this.m_J.angularA;
        d.m_sweep.c.x = d.m_sweep.c.x + d.m_invMass * e * this.m_J.linearB.x;
        d.m_sweep.c.y = d.m_sweep.c.y + d.m_invMass * e * this.m_J.linearB.y;
        d.m_sweep.a = d.m_sweep.a + d.m_invI * e * this.m_J.angularB;
        c.SynchronizeTransform();
        d.SynchronizeTransform();
        return 0 < b.b2_linearSlop
    };
    Box2D.inherit(n, Box2D.Dynamics.Joints.b2JointDef);
    n.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    n.b2GearJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments)
    };
    n.prototype.b2GearJointDef = function () {
        this.__super.b2JointDef.call(this);
        this.type = p.e_gearJoint;
        this.joint2 = this.joint1 = null;
        this.ratio = 1
    };
    q.b2Jacobian = function () {
        this.linearA = new f;
        this.linearB = new f
    };
    q.prototype.SetZero = function () {
        this.linearA.SetZero();
        this.angularA = 0;
        this.linearB.SetZero();
        this.angularB = 0
    };
    q.prototype.Set = function (b, c, d, e) {
        c === void 0 && (c = 0);
        e === void 0 && (e = 0);
        this.linearA.SetV(b);
        this.angularA =
            c;
        this.linearB.SetV(d);
        this.angularB = e
    };
    q.prototype.Compute = function (b, c, d, e) {
        c === void 0 && (c = 0);
        e === void 0 && (e = 0);
        return this.linearA.x * b.x + this.linearA.y * b.y + this.angularA * c + (this.linearB.x * d.x + this.linearB.y * d.y) + this.angularB * e
    };
    p.b2Joint = function () {
        this.m_edgeA = new r;
        this.m_edgeB = new r;
        this.m_localCenterA = new f;
        this.m_localCenterB = new f
    };
    p.prototype.GetType = function () {
        return this.m_type
    };
    p.prototype.GetAnchorA = function () {
        return null
    };
    p.prototype.GetAnchorB = function () {
        return null
    };
    p.prototype.GetReactionForce =
        function () {
            return null
        };
    p.prototype.GetReactionTorque = function () {
        return 0
    };
    p.prototype.GetBodyA = function () {
        return this.m_bodyA
    };
    p.prototype.GetBodyB = function () {
        return this.m_bodyB
    };
    p.prototype.GetNext = function () {
        return this.m_next
    };
    p.prototype.GetUserData = function () {
        return this.m_userData
    };
    p.prototype.SetUserData = function (b) {
        this.m_userData = b
    };
    p.prototype.IsActive = function () {
        return this.m_bodyA.IsActive() && this.m_bodyB.IsActive()
    };
    p.Create = function (b) {
        var c = null;
        switch (b.type) {
            case p.e_distanceJoint:
                c =
                    new h(b instanceof j ? b : null);
                break;
            case p.e_mouseJoint:
                c = new u(b instanceof w ? b : null);
                break;
            case p.e_prismaticJoint:
                c = new z(b instanceof A ? b : null);
                break;
            case p.e_revoluteJoint:
                c = new H(b instanceof K ? b : null);
                break;
            case p.e_pulleyJoint:
                c = new C(b instanceof G ? b : null);
                break;
            case p.e_gearJoint:
                c = new m(b instanceof n ? b : null);
                break;
            case p.e_lineJoint:
                c = new o(b instanceof t ? b : null);
                break;
            case p.e_weldJoint:
                c = new P(b instanceof T ? b : null);
                break;
            case p.e_frictionJoint:
                c = new k(b instanceof l ? b : null)
        }
        return c
    };
    p.Destroy = function () { };
    p.prototype.b2Joint = function (c) {
        b.b2Assert(c.bodyA != c.bodyB);
        this.m_type = c.type;
        this.m_next = this.m_prev = null;
        this.m_bodyA = c.bodyA;
        this.m_bodyB = c.bodyB;
        this.m_collideConnected = c.collideConnected;
        this.m_islandFlag = false;
        this.m_userData = c.userData
    };
    p.prototype.InitVelocityConstraints = function () { };
    p.prototype.SolveVelocityConstraints = function () { };
    p.prototype.FinalizeVelocityConstraints = function () { };
    p.prototype.SolvePositionConstraints = function () {
        return false
    };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.Joints.b2Joint.e_unknownJoint =
            0;
        Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
        Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
        Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
        Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
        Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
        Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
        Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
        Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
        Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
        Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
        Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit =
            1;
        Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
        Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3
    });
    s.b2JointDef = function () { };
    s.prototype.b2JointDef = function () {
        this.type = p.e_unknownJoint;
        this.bodyB = this.bodyA = this.userData = null;
        this.collideConnected = false
    };
    r.b2JointEdge = function () { };
    Box2D.inherit(o, Box2D.Dynamics.Joints.b2Joint);
    o.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    o.b2LineJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 =
            new f;
        this.m_localXAxis1 = new f;
        this.m_localYAxis1 = new f;
        this.m_axis = new f;
        this.m_perp = new f;
        this.m_K = new c;
        this.m_impulse = new f
    };
    o.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    o.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    o.prototype.GetReactionForce = function (b) {
        b === void 0 && (b = 0);
        return new f(b * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x), b * (this.m_impulse.x * this.m_perp.y +
            (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y))
    };
    o.prototype.GetReactionTorque = function (b) {
        b === void 0 && (b = 0);
        return b * this.m_impulse.y
    };
    o.prototype.GetJointTranslation = function () {
        var b = this.m_bodyA,
            c = this.m_bodyB,
            d = b.GetWorldPoint(this.m_localAnchor1),
            e = c.GetWorldPoint(this.m_localAnchor2),
            c = e.x - d.x,
            d = e.y - d.y,
            b = b.GetWorldVector(this.m_localXAxis1);
        return b.x * c + b.y * d
    };
    o.prototype.GetJointSpeed = function () {
        var b = this.m_bodyA,
            c = this.m_bodyB,
            d;
        d = b.m_xf.R;
        var e = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
            f = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
            g = d.col1.x * e + d.col2.x * f,
            f = d.col1.y * e + d.col2.y * f,
            e = g;
        d = c.m_xf.R;
        var h = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
            j = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
            g = d.col1.x * h + d.col2.x * j,
            j = d.col1.y * h + d.col2.y * j,
            h = g;
        d = c.m_sweep.c.x + h - (b.m_sweep.c.x + e);
        var g = c.m_sweep.c.y + j - (b.m_sweep.c.y + f),
            k = b.GetWorldVector(this.m_localXAxis1),
            l = b.m_linearVelocity,
            m = c.m_linearVelocity,
            b = b.m_angularVelocity,
            c = c.m_angularVelocity;
        return d * -b * k.y + g * b * k.x + (k.x * (m.x + -c *
            j - l.x - -b * f) + k.y * (m.y + c * h - l.y - b * e))
    };
    o.prototype.IsLimitEnabled = function () {
        return this.m_enableLimit
    };
    o.prototype.EnableLimit = function (b) {
        this.m_bodyA.SetAwake(true);
        this.m_bodyB.SetAwake(true);
        this.m_enableLimit = b
    };
    o.prototype.GetLowerLimit = function () {
        return this.m_lowerTranslation
    };
    o.prototype.GetUpperLimit = function () {
        return this.m_upperTranslation
    };
    o.prototype.SetLimits = function (b, c) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        this.m_bodyA.SetAwake(true);
        this.m_bodyB.SetAwake(true);
        this.m_lowerTranslation =
            b;
        this.m_upperTranslation = c
    };
    o.prototype.IsMotorEnabled = function () {
        return this.m_enableMotor
    };
    o.prototype.EnableMotor = function (b) {
        this.m_bodyA.SetAwake(true);
        this.m_bodyB.SetAwake(true);
        this.m_enableMotor = b
    };
    o.prototype.SetMotorSpeed = function (b) {
        b === void 0 && (b = 0);
        this.m_bodyA.SetAwake(true);
        this.m_bodyB.SetAwake(true);
        this.m_motorSpeed = b
    };
    o.prototype.GetMotorSpeed = function () {
        return this.m_motorSpeed
    };
    o.prototype.SetMaxMotorForce = function (b) {
        b === void 0 && (b = 0);
        this.m_bodyA.SetAwake(true);
        this.m_bodyB.SetAwake(true);
        this.m_maxMotorForce = b
    };
    o.prototype.GetMaxMotorForce = function () {
        return this.m_maxMotorForce
    };
    o.prototype.GetMotorForce = function () {
        return this.m_motorImpulse
    };
    o.prototype.b2LineJoint = function (b) {
        this.__super.b2Joint.call(this, b);
        this.m_localAnchor1.SetV(b.localAnchorA);
        this.m_localAnchor2.SetV(b.localAnchorB);
        this.m_localXAxis1.SetV(b.localAxisA);
        this.m_localYAxis1.x = -this.m_localXAxis1.y;
        this.m_localYAxis1.y = this.m_localXAxis1.x;
        this.m_impulse.SetZero();
        this.m_motorImpulse = this.m_motorMass = 0;
        this.m_lowerTranslation =
            b.lowerTranslation;
        this.m_upperTranslation = b.upperTranslation;
        this.m_maxMotorForce = b.maxMotorForce;
        this.m_motorSpeed = b.motorSpeed;
        this.m_enableLimit = b.enableLimit;
        this.m_enableMotor = b.enableMotor;
        this.m_limitState = p.e_inactiveLimit;
        this.m_axis.SetZero();
        this.m_perp.SetZero()
    };
    o.prototype.InitVelocityConstraints = function (c) {
        var d = this.m_bodyA,
            f = this.m_bodyB,
            g, h = 0;
        this.m_localCenterA.SetV(d.GetLocalCenter());
        this.m_localCenterB.SetV(f.GetLocalCenter());
        var j = d.GetTransform();
        f.GetTransform();
        g = d.m_xf.R;
        var k = this.m_localAnchor1.x - this.m_localCenterA.x,
            l = this.m_localAnchor1.y - this.m_localCenterA.y,
            h = g.col1.x * k + g.col2.x * l,
            l = g.col1.y * k + g.col2.y * l,
            k = h;
        g = f.m_xf.R;
        var m = this.m_localAnchor2.x - this.m_localCenterB.x,
            o = this.m_localAnchor2.y - this.m_localCenterB.y,
            h = g.col1.x * m + g.col2.x * o,
            o = g.col1.y * m + g.col2.y * o,
            m = h;
        g = f.m_sweep.c.x + m - d.m_sweep.c.x - k;
        h = f.m_sweep.c.y + o - d.m_sweep.c.y - l;
        this.m_invMassA = d.m_invMass;
        this.m_invMassB = f.m_invMass;
        this.m_invIA = d.m_invI;
        this.m_invIB = f.m_invI;
        this.m_axis.SetV(e.MulMV(j.R,
            this.m_localXAxis1));
        this.m_a1 = (g + k) * this.m_axis.y - (h + l) * this.m_axis.x;
        this.m_a2 = m * this.m_axis.y - o * this.m_axis.x;
        this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
        this.m_motorMass = this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass : 0;
        this.m_perp.SetV(e.MulMV(j.R, this.m_localYAxis1));
        this.m_s1 = (g + k) * this.m_perp.y - (h + l) * this.m_perp.x;
        this.m_s2 = m * this.m_perp.y - o * this.m_perp.x;
        j = this.m_invMassA;
        k = this.m_invMassB;
        l = this.m_invIA;
        m = this.m_invIB;
        this.m_K.col1.x = j + k + l * this.m_s1 * this.m_s1 + m * this.m_s2 * this.m_s2;
        this.m_K.col1.y = l * this.m_s1 * this.m_a1 + m * this.m_s2 * this.m_a2;
        this.m_K.col2.x = this.m_K.col1.y;
        this.m_K.col2.y = j + k + l * this.m_a1 * this.m_a1 + m * this.m_a2 * this.m_a2;
        if (this.m_enableLimit) {
            g = this.m_axis.x * g + this.m_axis.y * h;
            if (e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop) this.m_limitState = p.e_equalLimits;
            else if (g <= this.m_lowerTranslation) {
                if (this.m_limitState != p.e_atLowerLimit) {
                    this.m_limitState = p.e_atLowerLimit;
                    this.m_impulse.y =
                        0
                }
            } else if (g >= this.m_upperTranslation) {
                if (this.m_limitState != p.e_atUpperLimit) {
                    this.m_limitState = p.e_atUpperLimit;
                    this.m_impulse.y = 0
                }
            } else {
                this.m_limitState = p.e_inactiveLimit;
                this.m_impulse.y = 0
            }
        } else this.m_limitState = p.e_inactiveLimit;
        if (this.m_enableMotor == false) this.m_motorImpulse = 0;
        if (c.warmStarting) {
            this.m_impulse.x = this.m_impulse.x * c.dtRatio;
            this.m_impulse.y = this.m_impulse.y * c.dtRatio;
            this.m_motorImpulse = this.m_motorImpulse * c.dtRatio;
            c = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) *
                this.m_axis.x;
            g = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y;
            h = this.m_impulse.x * this.m_s1 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a1;
            j = this.m_impulse.x * this.m_s2 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a2;
            d.m_linearVelocity.x = d.m_linearVelocity.x - this.m_invMassA * c;
            d.m_linearVelocity.y = d.m_linearVelocity.y - this.m_invMassA * g;
            d.m_angularVelocity = d.m_angularVelocity - this.m_invIA * h;
            f.m_linearVelocity.x = f.m_linearVelocity.x + this.m_invMassB * c;
            f.m_linearVelocity.y =
                f.m_linearVelocity.y + this.m_invMassB * g;
            f.m_angularVelocity = f.m_angularVelocity + this.m_invIB * j
        } else {
            this.m_impulse.SetZero();
            this.m_motorImpulse = 0
        }
    };
    o.prototype.SolveVelocityConstraints = function (b) {
        var c = this.m_bodyA,
            d = this.m_bodyB,
            g = c.m_linearVelocity,
            h = c.m_angularVelocity,
            j = d.m_linearVelocity,
            k = d.m_angularVelocity,
            l = 0,
            m = 0,
            o = 0,
            n = 0;
        if (this.m_enableMotor && this.m_limitState != p.e_equalLimits) {
            n = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (j.x - g.x) + this.m_axis.y * (j.y - g.y) + this.m_a2 * k - this.m_a1 *
                h));
            l = this.m_motorImpulse;
            m = b.dt * this.m_maxMotorForce;
            this.m_motorImpulse = e.Clamp(this.m_motorImpulse + n, -m, m);
            n = this.m_motorImpulse - l;
            l = n * this.m_axis.x;
            m = n * this.m_axis.y;
            o = n * this.m_a1;
            n = n * this.m_a2;
            g.x = g.x - this.m_invMassA * l;
            g.y = g.y - this.m_invMassA * m;
            h = h - this.m_invIA * o;
            j.x = j.x + this.m_invMassB * l;
            j.y = j.y + this.m_invMassB * m;
            k = k + this.m_invIB * n
        }
        m = this.m_perp.x * (j.x - g.x) + this.m_perp.y * (j.y - g.y) + this.m_s2 * k - this.m_s1 * h;
        if (this.m_enableLimit && this.m_limitState != p.e_inactiveLimit) {
            o = this.m_axis.x * (j.x - g.x) +
                this.m_axis.y * (j.y - g.y) + this.m_a2 * k - this.m_a1 * h;
            l = this.m_impulse.Copy();
            b = this.m_K.Solve(new f, -m, -o);
            this.m_impulse.Add(b);
            if (this.m_limitState == p.e_atLowerLimit) this.m_impulse.y = e.Max(this.m_impulse.y, 0);
            else if (this.m_limitState == p.e_atUpperLimit) this.m_impulse.y = e.Min(this.m_impulse.y, 0);
            m = -m - (this.m_impulse.y - l.y) * this.m_K.col2.x;
            o = this.m_K.col1.x != 0 ? m / this.m_K.col1.x + l.x : l.x;
            this.m_impulse.x = o;
            b.x = this.m_impulse.x - l.x;
            b.y = this.m_impulse.y - l.y;
            l = b.x * this.m_perp.x + b.y * this.m_axis.x;
            m = b.x * this.m_perp.y +
                b.y * this.m_axis.y;
            o = b.x * this.m_s1 + b.y * this.m_a1;
            n = b.x * this.m_s2 + b.y * this.m_a2
        } else {
            b = this.m_K.col1.x != 0 ? -m / this.m_K.col1.x : 0;
            this.m_impulse.x = this.m_impulse.x + b;
            l = b * this.m_perp.x;
            m = b * this.m_perp.y;
            o = b * this.m_s1;
            n = b * this.m_s2
        }
        g.x = g.x - this.m_invMassA * l;
        g.y = g.y - this.m_invMassA * m;
        h = h - this.m_invIA * o;
        j.x = j.x + this.m_invMassB * l;
        j.y = j.y + this.m_invMassB * m;
        k = k + this.m_invIB * n;
        c.m_linearVelocity.SetV(g);
        c.m_angularVelocity = h;
        d.m_linearVelocity.SetV(j);
        d.m_angularVelocity = k
    };
    o.prototype.SolvePositionConstraints =
        function () {
            var d = this.m_bodyA,
                g = this.m_bodyB,
                h = d.m_sweep.c,
                j = d.m_sweep.a,
                k = g.m_sweep.c,
                l = g.m_sweep.a,
                m, o = 0,
                n = 0,
                s = 0,
                p = 0,
                q = 0,
                t = 0,
                n = false,
                r = 0,
                u = c.FromAngle(j),
                s = c.FromAngle(l);
            m = u;
            var t = this.m_localAnchor1.x - this.m_localCenterA.x,
                w = this.m_localAnchor1.y - this.m_localCenterA.y,
                o = m.col1.x * t + m.col2.x * w,
                w = m.col1.y * t + m.col2.y * w,
                t = o;
            m = s;
            s = this.m_localAnchor2.x - this.m_localCenterB.x;
            p = this.m_localAnchor2.y - this.m_localCenterB.y;
            o = m.col1.x * s + m.col2.x * p;
            p = m.col1.y * s + m.col2.y * p;
            s = o;
            m = k.x + s - h.x - t;
            o = k.y + p - h.y - w;
            if (this.m_enableLimit) {
                this.m_axis = e.MulMV(u, this.m_localXAxis1);
                this.m_a1 = (m + t) * this.m_axis.y - (o + w) * this.m_axis.x;
                this.m_a2 = s * this.m_axis.y - p * this.m_axis.x;
                var A = this.m_axis.x * m + this.m_axis.y * o;
                if (e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop) {
                    r = e.Clamp(A, -b.b2_maxLinearCorrection, b.b2_maxLinearCorrection);
                    q = e.Abs(A);
                    n = true
                } else if (A <= this.m_lowerTranslation) {
                    r = e.Clamp(A - this.m_lowerTranslation + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0);
                    q = this.m_lowerTranslation - A;
                    n =
                        true
                } else if (A >= this.m_upperTranslation) {
                    r = e.Clamp(A - this.m_upperTranslation + b.b2_linearSlop, 0, b.b2_maxLinearCorrection);
                    q = A - this.m_upperTranslation;
                    n = true
                }
            }
            this.m_perp = e.MulMV(u, this.m_localYAxis1);
            this.m_s1 = (m + t) * this.m_perp.y - (o + w) * this.m_perp.x;
            this.m_s2 = s * this.m_perp.y - p * this.m_perp.x;
            u = new f;
            w = this.m_perp.x * m + this.m_perp.y * o;
            q = e.Max(q, e.Abs(w));
            t = 0;
            if (n) {
                n = this.m_invMassA;
                s = this.m_invMassB;
                p = this.m_invIA;
                m = this.m_invIB;
                this.m_K.col1.x = n + s + p * this.m_s1 * this.m_s1 + m * this.m_s2 * this.m_s2;
                this.m_K.col1.y =
                    p * this.m_s1 * this.m_a1 + m * this.m_s2 * this.m_a2;
                this.m_K.col2.x = this.m_K.col1.y;
                this.m_K.col2.y = n + s + p * this.m_a1 * this.m_a1 + m * this.m_a2 * this.m_a2;
                this.m_K.Solve(u, -w, -r)
            } else {
                n = this.m_invMassA;
                s = this.m_invMassB;
                p = this.m_invIA;
                m = this.m_invIB;
                r = n + s + p * this.m_s1 * this.m_s1 + m * this.m_s2 * this.m_s2;
                u.x = r != 0 ? -w / r : 0;
                u.y = 0
            }
            r = u.x * this.m_perp.x + u.y * this.m_axis.x;
            n = u.x * this.m_perp.y + u.y * this.m_axis.y;
            w = u.x * this.m_s1 + u.y * this.m_a1;
            u = u.x * this.m_s2 + u.y * this.m_a2;
            h.x = h.x - this.m_invMassA * r;
            h.y = h.y - this.m_invMassA * n;
            j = j - this.m_invIA *
                w;
            k.x = k.x + this.m_invMassB * r;
            k.y = k.y + this.m_invMassB * n;
            l = l + this.m_invIB * u;
            d.m_sweep.a = j;
            g.m_sweep.a = l;
            d.SynchronizeTransform();
            g.SynchronizeTransform();
            return q <= b.b2_linearSlop && t <= b.b2_angularSlop
        };
    Box2D.inherit(t, Box2D.Dynamics.Joints.b2JointDef);
    t.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    t.b2LineJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f;
        this.localAxisA = new f
    };
    t.prototype.b2LineJointDef =
        function () {
            this.__super.b2JointDef.call(this);
            this.type = p.e_lineJoint;
            this.localAxisA.Set(1, 0);
            this.enableLimit = false;
            this.upperTranslation = this.lowerTranslation = 0;
            this.enableMotor = false;
            this.motorSpeed = this.maxMotorForce = 0
        };
    t.prototype.Initialize = function (b, c, d, e) {
        this.bodyA = b;
        this.bodyB = c;
        this.localAnchorA = this.bodyA.GetLocalPoint(d);
        this.localAnchorB = this.bodyB.GetLocalPoint(d);
        this.localAxisA = this.bodyA.GetLocalVector(e)
    };
    Box2D.inherit(u, Box2D.Dynamics.Joints.b2Joint);
    u.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    u.b2MouseJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.K = new c;
        this.K1 = new c;
        this.K2 = new c;
        this.m_localAnchor = new f;
        this.m_target = new f;
        this.m_impulse = new f;
        this.m_mass = new c;
        this.m_C = new f
    };
    u.prototype.GetAnchorA = function () {
        return this.m_target
    };
    u.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor)
    };
    u.prototype.GetReactionForce = function (b) {
        b === void 0 && (b = 0);
        return new f(b * this.m_impulse.x, b * this.m_impulse.y)
    };
    u.prototype.GetReactionTorque =
        function () {
            return 0
        };
    u.prototype.GetTarget = function () {
        return this.m_target
    };
    u.prototype.SetTarget = function (b) {
        this.m_bodyB.IsAwake() == false && this.m_bodyB.SetAwake(true);
        this.m_target = b
    };
    u.prototype.GetMaxForce = function () {
        return this.m_maxForce
    };
    u.prototype.SetMaxForce = function (b) {
        b === void 0 && (b = 0);
        this.m_maxForce = b
    };
    u.prototype.GetFrequency = function () {
        return this.m_frequencyHz
    };
    u.prototype.SetFrequency = function (b) {
        b === void 0 && (b = 0);
        this.m_frequencyHz = b
    };
    u.prototype.GetDampingRatio = function () {
        return this.m_dampingRatio
    };
    u.prototype.SetDampingRatio = function (b) {
        b === void 0 && (b = 0);
        this.m_dampingRatio = b
    };
    u.prototype.b2MouseJoint = function (b) {
        this.__super.b2Joint.call(this, b);
        this.m_target.SetV(b.target);
        var c = this.m_target.x - this.m_bodyB.m_xf.position.x,
            d = this.m_target.y - this.m_bodyB.m_xf.position.y,
            e = this.m_bodyB.m_xf.R;
        this.m_localAnchor.x = c * e.col1.x + d * e.col1.y;
        this.m_localAnchor.y = c * e.col2.x + d * e.col2.y;
        this.m_maxForce = b.maxForce;
        this.m_impulse.SetZero();
        this.m_frequencyHz = b.frequencyHz;
        this.m_dampingRatio = b.dampingRatio;
        this.m_gamma = this.m_beta = 0
    };
    u.prototype.InitVelocityConstraints = function (b) {
        var c = this.m_bodyB,
            d = c.GetMass(),
            e = 2 * Math.PI * this.m_frequencyHz,
            f = d * e * e;
        this.m_gamma = b.dt * (2 * d * this.m_dampingRatio * e + b.dt * f);
        this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0;
        this.m_beta = b.dt * f * this.m_gamma;
        var f = c.m_xf.R,
            d = this.m_localAnchor.x - c.m_sweep.localCenter.x,
            e = this.m_localAnchor.y - c.m_sweep.localCenter.y,
            g = f.col1.x * d + f.col2.x * e,
            e = f.col1.y * d + f.col2.y * e,
            d = g,
            f = c.m_invMass,
            g = c.m_invI;
        this.K1.col1.x = f;
        this.K1.col2.x = 0;
        this.K1.col1.y =
            0;
        this.K1.col2.y = f;
        this.K2.col1.x = g * e * e;
        this.K2.col2.x = -g * d * e;
        this.K2.col1.y = -g * d * e;
        this.K2.col2.y = g * d * d;
        this.K.SetM(this.K1);
        this.K.AddM(this.K2);
        this.K.col1.x = this.K.col1.x + this.m_gamma;
        this.K.col2.y = this.K.col2.y + this.m_gamma;
        this.K.GetInverse(this.m_mass);
        this.m_C.x = c.m_sweep.c.x + d - this.m_target.x;
        this.m_C.y = c.m_sweep.c.y + e - this.m_target.y;
        c.m_angularVelocity = c.m_angularVelocity * 0.98;
        this.m_impulse.x = this.m_impulse.x * b.dtRatio;
        this.m_impulse.y = this.m_impulse.y * b.dtRatio;
        c.m_linearVelocity.x = c.m_linearVelocity.x +
            f * this.m_impulse.x;
        c.m_linearVelocity.y = c.m_linearVelocity.y + f * this.m_impulse.y;
        c.m_angularVelocity = c.m_angularVelocity + g * (d * this.m_impulse.y - e * this.m_impulse.x)
    };
    u.prototype.SolveVelocityConstraints = function (b) {
        var c = this.m_bodyB,
            d, e = 0,
            f = 0;
        d = c.m_xf.R;
        var g = this.m_localAnchor.x - c.m_sweep.localCenter.x,
            h = this.m_localAnchor.y - c.m_sweep.localCenter.y,
            e = d.col1.x * g + d.col2.x * h,
            h = d.col1.y * g + d.col2.y * h,
            g = e,
            e = c.m_linearVelocity.x + -c.m_angularVelocity * h,
            j = c.m_linearVelocity.y + c.m_angularVelocity * g;
        d = this.m_mass;
        e = e + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
        f = j + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
        j = -(d.col1.x * e + d.col2.x * f);
        f = -(d.col1.y * e + d.col2.y * f);
        d = this.m_impulse.x;
        e = this.m_impulse.y;
        this.m_impulse.x = this.m_impulse.x + j;
        this.m_impulse.y = this.m_impulse.y + f;
        b = b.dt * this.m_maxForce;
        this.m_impulse.LengthSquared() > b * b && this.m_impulse.Multiply(b / this.m_impulse.Length());
        j = this.m_impulse.x - d;
        f = this.m_impulse.y - e;
        c.m_linearVelocity.x = c.m_linearVelocity.x + c.m_invMass * j;
        c.m_linearVelocity.y =
            c.m_linearVelocity.y + c.m_invMass * f;
        c.m_angularVelocity = c.m_angularVelocity + c.m_invI * (g * f - h * j)
    };
    u.prototype.SolvePositionConstraints = function () {
        return true
    };
    Box2D.inherit(w, Box2D.Dynamics.Joints.b2JointDef);
    w.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    w.b2MouseJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.target = new f
    };
    w.prototype.b2MouseJointDef = function () {
        this.__super.b2JointDef.call(this);
        this.type = p.e_mouseJoint;
        this.maxForce = 0;
        this.frequencyHz =
            5;
        this.dampingRatio = 0.7
    };
    Box2D.inherit(z, Box2D.Dynamics.Joints.b2Joint);
    z.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    z.b2PrismaticJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_localXAxis1 = new f;
        this.m_localYAxis1 = new f;
        this.m_axis = new f;
        this.m_perp = new f;
        this.m_K = new d;
        this.m_impulse = new g
    };
    z.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    z.prototype.GetAnchorB =
        function () {
            return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
        };
    z.prototype.GetReactionForce = function (b) {
        b === void 0 && (b = 0);
        return new f(b * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), b * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y))
    };
    z.prototype.GetReactionTorque = function (b) {
        b === void 0 && (b = 0);
        return b * this.m_impulse.y
    };
    z.prototype.GetJointTranslation = function () {
        var b = this.m_bodyA,
            c = this.m_bodyB,
            d = b.GetWorldPoint(this.m_localAnchor1),
            e = c.GetWorldPoint(this.m_localAnchor2),
            c = e.x - d.x,
            d = e.y - d.y,
            b = b.GetWorldVector(this.m_localXAxis1);
        return b.x * c + b.y * d
    };
    z.prototype.GetJointSpeed = function () {
        var b = this.m_bodyA,
            c = this.m_bodyB,
            d;
        d = b.m_xf.R;
        var e = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
            f = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
            g = d.col1.x * e + d.col2.x * f,
            f = d.col1.y * e + d.col2.y * f,
            e = g;
        d = c.m_xf.R;
        var h = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
            j = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
            g = d.col1.x * h + d.col2.x * j,
            j = d.col1.y * h +
            d.col2.y * j,
            h = g;
        d = c.m_sweep.c.x + h - (b.m_sweep.c.x + e);
        var g = c.m_sweep.c.y + j - (b.m_sweep.c.y + f),
            k = b.GetWorldVector(this.m_localXAxis1),
            l = b.m_linearVelocity,
            m = c.m_linearVelocity,
            b = b.m_angularVelocity,
            c = c.m_angularVelocity;
        return d * -b * k.y + g * b * k.x + (k.x * (m.x + -c * j - l.x - -b * f) + k.y * (m.y + c * h - l.y - b * e))
    };
    z.prototype.IsLimitEnabled = function () {
        return this.m_enableLimit
    };
    z.prototype.EnableLimit = function (b) {
        this.m_bodyA.SetAwake(true);
        this.m_bodyB.SetAwake(true);
        this.m_enableLimit = b
    };
    z.prototype.GetLowerLimit = function () {
        return this.m_lowerTranslation
    };
    z.prototype.GetUpperLimit = function () {
        return this.m_upperTranslation
    };
    z.prototype.SetLimits = function (b, c) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        this.m_bodyA.SetAwake(true);
        this.m_bodyB.SetAwake(true);
        this.m_lowerTranslation = b;
        this.m_upperTranslation = c
    };
    z.prototype.IsMotorEnabled = function () {
        return this.m_enableMotor
    };
    z.prototype.EnableMotor = function (b) {
        this.m_bodyA.SetAwake(true);
        this.m_bodyB.SetAwake(true);
        this.m_enableMotor = b
    };
    z.prototype.SetMotorSpeed = function (b) {
        b === void 0 && (b = 0);
        this.m_bodyA.SetAwake(true);
        this.m_bodyB.SetAwake(true);
        this.m_motorSpeed = b
    };
    z.prototype.GetMotorSpeed = function () {
        return this.m_motorSpeed
    };
    z.prototype.SetMaxMotorForce = function (b) {
        b === void 0 && (b = 0);
        this.m_bodyA.SetAwake(true);
        this.m_bodyB.SetAwake(true);
        this.m_maxMotorForce = b
    };
    z.prototype.GetMotorForce = function () {
        return this.m_motorImpulse
    };
    z.prototype.b2PrismaticJoint = function (b) {
        this.__super.b2Joint.call(this, b);
        this.m_localAnchor1.SetV(b.localAnchorA);
        this.m_localAnchor2.SetV(b.localAnchorB);
        this.m_localXAxis1.SetV(b.localAxisA);
        this.m_localYAxis1.x = -this.m_localXAxis1.y;
        this.m_localYAxis1.y = this.m_localXAxis1.x;
        this.m_refAngle = b.referenceAngle;
        this.m_impulse.SetZero();
        this.m_motorImpulse = this.m_motorMass = 0;
        this.m_lowerTranslation = b.lowerTranslation;
        this.m_upperTranslation = b.upperTranslation;
        this.m_maxMotorForce = b.maxMotorForce;
        this.m_motorSpeed = b.motorSpeed;
        this.m_enableLimit = b.enableLimit;
        this.m_enableMotor = b.enableMotor;
        this.m_limitState = p.e_inactiveLimit;
        this.m_axis.SetZero();
        this.m_perp.SetZero()
    };
    z.prototype.InitVelocityConstraints =
        function (c) {
            var d = this.m_bodyA,
                f = this.m_bodyB,
                g, h = 0;
            this.m_localCenterA.SetV(d.GetLocalCenter());
            this.m_localCenterB.SetV(f.GetLocalCenter());
            var j = d.GetTransform();
            f.GetTransform();
            g = d.m_xf.R;
            var k = this.m_localAnchor1.x - this.m_localCenterA.x,
                l = this.m_localAnchor1.y - this.m_localCenterA.y,
                h = g.col1.x * k + g.col2.x * l,
                l = g.col1.y * k + g.col2.y * l,
                k = h;
            g = f.m_xf.R;
            var m = this.m_localAnchor2.x - this.m_localCenterB.x,
                o = this.m_localAnchor2.y - this.m_localCenterB.y,
                h = g.col1.x * m + g.col2.x * o,
                o = g.col1.y * m + g.col2.y * o,
                m = h;
            g =
                f.m_sweep.c.x + m - d.m_sweep.c.x - k;
            h = f.m_sweep.c.y + o - d.m_sweep.c.y - l;
            this.m_invMassA = d.m_invMass;
            this.m_invMassB = f.m_invMass;
            this.m_invIA = d.m_invI;
            this.m_invIB = f.m_invI;
            this.m_axis.SetV(e.MulMV(j.R, this.m_localXAxis1));
            this.m_a1 = (g + k) * this.m_axis.y - (h + l) * this.m_axis.x;
            this.m_a2 = m * this.m_axis.y - o * this.m_axis.x;
            this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
            if (this.m_motorMass > Number.MIN_VALUE) this.m_motorMass = 1 / this.m_motorMass;
            this.m_perp.SetV(e.MulMV(j.R,
                this.m_localYAxis1));
            this.m_s1 = (g + k) * this.m_perp.y - (h + l) * this.m_perp.x;
            this.m_s2 = m * this.m_perp.y - o * this.m_perp.x;
            j = this.m_invMassA;
            k = this.m_invMassB;
            l = this.m_invIA;
            m = this.m_invIB;
            this.m_K.col1.x = j + k + l * this.m_s1 * this.m_s1 + m * this.m_s2 * this.m_s2;
            this.m_K.col1.y = l * this.m_s1 + m * this.m_s2;
            this.m_K.col1.z = l * this.m_s1 * this.m_a1 + m * this.m_s2 * this.m_a2;
            this.m_K.col2.x = this.m_K.col1.y;
            this.m_K.col2.y = l + m;
            this.m_K.col2.z = l * this.m_a1 + m * this.m_a2;
            this.m_K.col3.x = this.m_K.col1.z;
            this.m_K.col3.y = this.m_K.col2.z;
            this.m_K.col3.z =
                j + k + l * this.m_a1 * this.m_a1 + m * this.m_a2 * this.m_a2;
            if (this.m_enableLimit) {
                g = this.m_axis.x * g + this.m_axis.y * h;
                if (e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop) this.m_limitState = p.e_equalLimits;
                else if (g <= this.m_lowerTranslation) {
                    if (this.m_limitState != p.e_atLowerLimit) {
                        this.m_limitState = p.e_atLowerLimit;
                        this.m_impulse.z = 0
                    }
                } else if (g >= this.m_upperTranslation) {
                    if (this.m_limitState != p.e_atUpperLimit) {
                        this.m_limitState = p.e_atUpperLimit;
                        this.m_impulse.z = 0
                    }
                } else {
                    this.m_limitState = p.e_inactiveLimit;
                    this.m_impulse.z = 0
                }
            } else this.m_limitState = p.e_inactiveLimit;
            if (this.m_enableMotor == false) this.m_motorImpulse = 0;
            if (c.warmStarting) {
                this.m_impulse.x = this.m_impulse.x * c.dtRatio;
                this.m_impulse.y = this.m_impulse.y * c.dtRatio;
                this.m_motorImpulse = this.m_motorImpulse * c.dtRatio;
                c = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x;
                g = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y;
                h = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse +
                    this.m_impulse.z) * this.m_a1;
                j = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
                d.m_linearVelocity.x = d.m_linearVelocity.x - this.m_invMassA * c;
                d.m_linearVelocity.y = d.m_linearVelocity.y - this.m_invMassA * g;
                d.m_angularVelocity = d.m_angularVelocity - this.m_invIA * h;
                f.m_linearVelocity.x = f.m_linearVelocity.x + this.m_invMassB * c;
                f.m_linearVelocity.y = f.m_linearVelocity.y + this.m_invMassB * g;
                f.m_angularVelocity = f.m_angularVelocity + this.m_invIB * j
            } else {
                this.m_impulse.SetZero();
                this.m_motorImpulse = 0
            }
        };
    z.prototype.SolveVelocityConstraints = function (b) {
        var c = this.m_bodyA,
            d = this.m_bodyB,
            h = c.m_linearVelocity,
            j = c.m_angularVelocity,
            k = d.m_linearVelocity,
            l = d.m_angularVelocity,
            m = 0,
            o = 0,
            n = 0,
            s = 0;
        if (this.m_enableMotor && this.m_limitState != p.e_equalLimits) {
            s = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (k.x - h.x) + this.m_axis.y * (k.y - h.y) + this.m_a2 * l - this.m_a1 * j));
            m = this.m_motorImpulse;
            b = b.dt * this.m_maxMotorForce;
            this.m_motorImpulse = e.Clamp(this.m_motorImpulse + s, -b, b);
            s = this.m_motorImpulse -
                m;
            m = s * this.m_axis.x;
            o = s * this.m_axis.y;
            n = s * this.m_a1;
            s = s * this.m_a2;
            h.x = h.x - this.m_invMassA * m;
            h.y = h.y - this.m_invMassA * o;
            j = j - this.m_invIA * n;
            k.x = k.x + this.m_invMassB * m;
            k.y = k.y + this.m_invMassB * o;
            l = l + this.m_invIB * s
        }
        n = this.m_perp.x * (k.x - h.x) + this.m_perp.y * (k.y - h.y) + this.m_s2 * l - this.m_s1 * j;
        o = l - j;
        if (this.m_enableLimit && this.m_limitState != p.e_inactiveLimit) {
            b = this.m_axis.x * (k.x - h.x) + this.m_axis.y * (k.y - h.y) + this.m_a2 * l - this.m_a1 * j;
            m = this.m_impulse.Copy();
            b = this.m_K.Solve33(new g, -n, -o, -b);
            this.m_impulse.Add(b);
            if (this.m_limitState == p.e_atLowerLimit) this.m_impulse.z = e.Max(this.m_impulse.z, 0);
            else if (this.m_limitState == p.e_atUpperLimit) this.m_impulse.z = e.Min(this.m_impulse.z, 0);
            n = -n - (this.m_impulse.z - m.z) * this.m_K.col3.x;
            o = -o - (this.m_impulse.z - m.z) * this.m_K.col3.y;
            o = this.m_K.Solve22(new f, n, o);
            o.x = o.x + m.x;
            o.y = o.y + m.y;
            this.m_impulse.x = o.x;
            this.m_impulse.y = o.y;
            b.x = this.m_impulse.x - m.x;
            b.y = this.m_impulse.y - m.y;
            b.z = this.m_impulse.z - m.z;
            m = b.x * this.m_perp.x + b.z * this.m_axis.x;
            o = b.x * this.m_perp.y + b.z * this.m_axis.y;
            n = b.x * this.m_s1 + b.y + b.z * this.m_a1;
            s = b.x * this.m_s2 + b.y + b.z * this.m_a2
        } else {
            b = this.m_K.Solve22(new f, -n, -o);
            this.m_impulse.x = this.m_impulse.x + b.x;
            this.m_impulse.y = this.m_impulse.y + b.y;
            m = b.x * this.m_perp.x;
            o = b.x * this.m_perp.y;
            n = b.x * this.m_s1 + b.y;
            s = b.x * this.m_s2 + b.y
        }
        h.x = h.x - this.m_invMassA * m;
        h.y = h.y - this.m_invMassA * o;
        j = j - this.m_invIA * n;
        k.x = k.x + this.m_invMassB * m;
        k.y = k.y + this.m_invMassB * o;
        l = l + this.m_invIB * s;
        c.m_linearVelocity.SetV(h);
        c.m_angularVelocity = j;
        d.m_linearVelocity.SetV(k);
        d.m_angularVelocity = l
    };
    z.prototype.SolvePositionConstraints = function () {
        var d = this.m_bodyA,
            h = this.m_bodyB,
            j = d.m_sweep.c,
            k = d.m_sweep.a,
            l = h.m_sweep.c,
            m = h.m_sweep.a,
            o, n = 0,
            s = 0,
            p = 0,
            q = 0,
            t = 0,
            s = false,
            r = 0,
            u = c.FromAngle(k),
            w = c.FromAngle(m);
        o = u;
        var t = this.m_localAnchor1.x - this.m_localCenterA.x,
            A = this.m_localAnchor1.y - this.m_localCenterA.y,
            n = o.col1.x * t + o.col2.x * A,
            A = o.col1.y * t + o.col2.y * A,
            t = n;
        o = w;
        w = this.m_localAnchor2.x - this.m_localCenterB.x;
        p = this.m_localAnchor2.y - this.m_localCenterB.y;
        n = o.col1.x * w + o.col2.x * p;
        p = o.col1.y * w + o.col2.y * p;
        w = n;
        o = l.x + w - j.x - t;
        n = l.y + p - j.y - A;
        if (this.m_enableLimit) {
            this.m_axis = e.MulMV(u, this.m_localXAxis1);
            this.m_a1 = (o + t) * this.m_axis.y - (n + A) * this.m_axis.x;
            this.m_a2 = w * this.m_axis.y - p * this.m_axis.x;
            var z = this.m_axis.x * o + this.m_axis.y * n;
            if (e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop) {
                r = e.Clamp(z, -b.b2_maxLinearCorrection, b.b2_maxLinearCorrection);
                q = e.Abs(z);
                s = true
            } else if (z <= this.m_lowerTranslation) {
                r = e.Clamp(z - this.m_lowerTranslation + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0);
                q = this.m_lowerTranslation - z;
                s = true
            } else if (z >= this.m_upperTranslation) {
                r = e.Clamp(z - this.m_upperTranslation + b.b2_linearSlop, 0, b.b2_maxLinearCorrection);
                q = z - this.m_upperTranslation;
                s = true
            }
        }
        this.m_perp = e.MulMV(u, this.m_localYAxis1);
        this.m_s1 = (o + t) * this.m_perp.y - (n + A) * this.m_perp.x;
        this.m_s2 = w * this.m_perp.y - p * this.m_perp.x;
        u = new g;
        A = this.m_perp.x * o + this.m_perp.y * n;
        w = m - k - this.m_refAngle;
        q = e.Max(q, e.Abs(A));
        t = e.Abs(w);
        if (s) {
            s = this.m_invMassA;
            p = this.m_invMassB;
            o = this.m_invIA;
            n = this.m_invIB;
            this.m_K.col1.x =
                s + p + o * this.m_s1 * this.m_s1 + n * this.m_s2 * this.m_s2;
            this.m_K.col1.y = o * this.m_s1 + n * this.m_s2;
            this.m_K.col1.z = o * this.m_s1 * this.m_a1 + n * this.m_s2 * this.m_a2;
            this.m_K.col2.x = this.m_K.col1.y;
            this.m_K.col2.y = o + n;
            this.m_K.col2.z = o * this.m_a1 + n * this.m_a2;
            this.m_K.col3.x = this.m_K.col1.z;
            this.m_K.col3.y = this.m_K.col2.z;
            this.m_K.col3.z = s + p + o * this.m_a1 * this.m_a1 + n * this.m_a2 * this.m_a2;
            this.m_K.Solve33(u, -A, -w, -r)
        } else {
            s = this.m_invMassA;
            p = this.m_invMassB;
            o = this.m_invIA;
            n = this.m_invIB;
            r = o * this.m_s1 + n * this.m_s2;
            z = o + n;
            this.m_K.col1.Set(s +
                p + o * this.m_s1 * this.m_s1 + n * this.m_s2 * this.m_s2, r, 0);
            this.m_K.col2.Set(r, z, 0);
            r = this.m_K.Solve22(new f, -A, -w);
            u.x = r.x;
            u.y = r.y;
            u.z = 0
        }
        r = u.x * this.m_perp.x + u.z * this.m_axis.x;
        s = u.x * this.m_perp.y + u.z * this.m_axis.y;
        A = u.x * this.m_s1 + u.y + u.z * this.m_a1;
        u = u.x * this.m_s2 + u.y + u.z * this.m_a2;
        j.x = j.x - this.m_invMassA * r;
        j.y = j.y - this.m_invMassA * s;
        k = k - this.m_invIA * A;
        l.x = l.x + this.m_invMassB * r;
        l.y = l.y + this.m_invMassB * s;
        m = m + this.m_invIB * u;
        d.m_sweep.a = k;
        h.m_sweep.a = m;
        d.SynchronizeTransform();
        h.SynchronizeTransform();
        return q <=
            b.b2_linearSlop && t <= b.b2_angularSlop
    };
    Box2D.inherit(A, Box2D.Dynamics.Joints.b2JointDef);
    A.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    A.b2PrismaticJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f;
        this.localAxisA = new f
    };
    A.prototype.b2PrismaticJointDef = function () {
        this.__super.b2JointDef.call(this);
        this.type = p.e_prismaticJoint;
        this.localAxisA.Set(1, 0);
        this.referenceAngle = 0;
        this.enableLimit = false;
        this.upperTranslation =
            this.lowerTranslation = 0;
        this.enableMotor = false;
        this.motorSpeed = this.maxMotorForce = 0
    };
    A.prototype.Initialize = function (b, c, d, e) {
        this.bodyA = b;
        this.bodyB = c;
        this.localAnchorA = this.bodyA.GetLocalPoint(d);
        this.localAnchorB = this.bodyB.GetLocalPoint(d);
        this.localAxisA = this.bodyA.GetLocalVector(e);
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    };
    Box2D.inherit(C, Box2D.Dynamics.Joints.b2Joint);
    C.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    C.b2PulleyJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this,
            arguments);
        this.m_groundAnchor1 = new f;
        this.m_groundAnchor2 = new f;
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_u1 = new f;
        this.m_u2 = new f
    };
    C.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    C.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    C.prototype.GetReactionForce = function (b) {
        b === void 0 && (b = 0);
        return new f(b * this.m_impulse * this.m_u2.x, b * this.m_impulse * this.m_u2.y)
    };
    C.prototype.GetReactionTorque = function () {
        return 0
    };
    C.prototype.GetGroundAnchorA = function () {
        var b = this.m_ground.m_xf.position.Copy();
        b.Add(this.m_groundAnchor1);
        return b
    };
    C.prototype.GetGroundAnchorB = function () {
        var b = this.m_ground.m_xf.position.Copy();
        b.Add(this.m_groundAnchor2);
        return b
    };
    C.prototype.GetLength1 = function () {
        var b = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
            c = b.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x),
            b = b.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
        return Math.sqrt(c * c + b * b)
    };
    C.prototype.GetLength2 = function () {
        var b =
            this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
            c = b.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x),
            b = b.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
        return Math.sqrt(c * c + b * b)
    };
    C.prototype.GetRatio = function () {
        return this.m_ratio
    };
    C.prototype.b2PulleyJoint = function (b) {
        this.__super.b2Joint.call(this, b);
        this.m_ground = this.m_bodyA.m_world.m_groundBody;
        this.m_groundAnchor1.x = b.groundAnchorA.x - this.m_ground.m_xf.position.x;
        this.m_groundAnchor1.y = b.groundAnchorA.y - this.m_ground.m_xf.position.y;
        this.m_groundAnchor2.x = b.groundAnchorB.x - this.m_ground.m_xf.position.x;
        this.m_groundAnchor2.y = b.groundAnchorB.y - this.m_ground.m_xf.position.y;
        this.m_localAnchor1.SetV(b.localAnchorA);
        this.m_localAnchor2.SetV(b.localAnchorB);
        this.m_ratio = b.ratio;
        this.m_constant = b.lengthA + this.m_ratio * b.lengthB;
        this.m_maxLength1 = e.Min(b.maxLengthA, this.m_constant - this.m_ratio * C.b2_minPulleyLength);
        this.m_maxLength2 = e.Min(b.maxLengthB, (this.m_constant - C.b2_minPulleyLength) / this.m_ratio);
        this.m_limitImpulse2 = this.m_limitImpulse1 =
            this.m_impulse = 0
    };
    C.prototype.InitVelocityConstraints = function (c) {
        var d = this.m_bodyA,
            e = this.m_bodyB,
            f;
        f = d.m_xf.R;
        var g = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
            h = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
            j = f.col1.x * g + f.col2.x * h,
            h = f.col1.y * g + f.col2.y * h,
            g = j;
        f = e.m_xf.R;
        var k = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
            l = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
            j = f.col1.x * k + f.col2.x * l,
            l = f.col1.y * k + f.col2.y * l,
            k = j;
        f = e.m_sweep.c.x + k;
        var j = e.m_sweep.c.y + l,
            m = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
            o = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
        this.m_u1.Set(d.m_sweep.c.x + g - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x), d.m_sweep.c.y + h - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y));
        this.m_u2.Set(f - m, j - o);
        f = this.m_u1.Length();
        j = this.m_u2.Length();
        f > b.b2_linearSlop ? this.m_u1.Multiply(1 / f) : this.m_u1.SetZero();
        j > b.b2_linearSlop ? this.m_u2.Multiply(1 / j) : this.m_u2.SetZero();
        if (this.m_constant - f - this.m_ratio * j > 0) {
            this.m_state = p.e_inactiveLimit;
            this.m_impulse = 0
        } else this.m_state =
            p.e_atUpperLimit;
        if (f < this.m_maxLength1) {
            this.m_limitState1 = p.e_inactiveLimit;
            this.m_limitImpulse1 = 0
        } else this.m_limitState1 = p.e_atUpperLimit;
        if (j < this.m_maxLength2) {
            this.m_limitState2 = p.e_inactiveLimit;
            this.m_limitImpulse2 = 0
        } else this.m_limitState2 = p.e_atUpperLimit;
        f = g * this.m_u1.y - h * this.m_u1.x;
        j = k * this.m_u2.y - l * this.m_u2.x;
        this.m_limitMass1 = d.m_invMass + d.m_invI * f * f;
        this.m_limitMass2 = e.m_invMass + e.m_invI * j * j;
        this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
        this.m_limitMass1 =
            1 / this.m_limitMass1;
        this.m_limitMass2 = 1 / this.m_limitMass2;
        this.m_pulleyMass = 1 / this.m_pulleyMass;
        if (c.warmStarting) {
            this.m_impulse = this.m_impulse * c.dtRatio;
            this.m_limitImpulse1 = this.m_limitImpulse1 * c.dtRatio;
            this.m_limitImpulse2 = this.m_limitImpulse2 * c.dtRatio;
            c = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x;
            f = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y;
            j = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x;
            m = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.y;
            d.m_linearVelocity.x =
                d.m_linearVelocity.x + d.m_invMass * c;
            d.m_linearVelocity.y = d.m_linearVelocity.y + d.m_invMass * f;
            d.m_angularVelocity = d.m_angularVelocity + d.m_invI * (g * f - h * c);
            e.m_linearVelocity.x = e.m_linearVelocity.x + e.m_invMass * j;
            e.m_linearVelocity.y = e.m_linearVelocity.y + e.m_invMass * m;
            e.m_angularVelocity = e.m_angularVelocity + e.m_invI * (k * m - l * j)
        } else this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
    };
    C.prototype.SolveVelocityConstraints = function () {
        var b = this.m_bodyA,
            c = this.m_bodyB,
            d;
        d = b.m_xf.R;
        var f = this.m_localAnchor1.x -
            b.m_sweep.localCenter.x,
            g = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
            h = d.col1.x * f + d.col2.x * g,
            g = d.col1.y * f + d.col2.y * g,
            f = h;
        d = c.m_xf.R;
        var j = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
            k = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
            h = d.col1.x * j + d.col2.x * k,
            k = d.col1.y * j + d.col2.y * k,
            j = h,
            l = 0,
            m = 0;
        if (this.m_state == p.e_atUpperLimit) {
            d = b.m_linearVelocity.x + -b.m_angularVelocity * g;
            h = b.m_linearVelocity.y + b.m_angularVelocity * f;
            l = c.m_linearVelocity.x + -c.m_angularVelocity * k;
            m = c.m_linearVelocity.y + c.m_angularVelocity *
                j;
            d = -(this.m_u1.x * d + this.m_u1.y * h) - this.m_ratio * (this.m_u2.x * l + this.m_u2.y * m);
            m = this.m_pulleyMass * -d;
            d = this.m_impulse;
            this.m_impulse = e.Max(0, this.m_impulse + m);
            m = this.m_impulse - d;
            d = -m * this.m_u1.x;
            h = -m * this.m_u1.y;
            l = -this.m_ratio * m * this.m_u2.x;
            m = -this.m_ratio * m * this.m_u2.y;
            b.m_linearVelocity.x = b.m_linearVelocity.x + b.m_invMass * d;
            b.m_linearVelocity.y = b.m_linearVelocity.y + b.m_invMass * h;
            b.m_angularVelocity = b.m_angularVelocity + b.m_invI * (f * h - g * d);
            c.m_linearVelocity.x = c.m_linearVelocity.x + c.m_invMass * l;
            c.m_linearVelocity.y =
                c.m_linearVelocity.y + c.m_invMass * m;
            c.m_angularVelocity = c.m_angularVelocity + c.m_invI * (j * m - k * l)
        }
        if (this.m_limitState1 == p.e_atUpperLimit) {
            d = b.m_linearVelocity.x + -b.m_angularVelocity * g;
            h = b.m_linearVelocity.y + b.m_angularVelocity * f;
            d = -(this.m_u1.x * d + this.m_u1.y * h);
            m = -this.m_limitMass1 * d;
            d = this.m_limitImpulse1;
            this.m_limitImpulse1 = e.Max(0, this.m_limitImpulse1 + m);
            m = this.m_limitImpulse1 - d;
            d = -m * this.m_u1.x;
            h = -m * this.m_u1.y;
            b.m_linearVelocity.x = b.m_linearVelocity.x + b.m_invMass * d;
            b.m_linearVelocity.y = b.m_linearVelocity.y +
                b.m_invMass * h;
            b.m_angularVelocity = b.m_angularVelocity + b.m_invI * (f * h - g * d)
        }
        if (this.m_limitState2 == p.e_atUpperLimit) {
            l = c.m_linearVelocity.x + -c.m_angularVelocity * k;
            m = c.m_linearVelocity.y + c.m_angularVelocity * j;
            d = -(this.m_u2.x * l + this.m_u2.y * m);
            m = -this.m_limitMass2 * d;
            d = this.m_limitImpulse2;
            this.m_limitImpulse2 = e.Max(0, this.m_limitImpulse2 + m);
            m = this.m_limitImpulse2 - d;
            l = -m * this.m_u2.x;
            m = -m * this.m_u2.y;
            c.m_linearVelocity.x = c.m_linearVelocity.x + c.m_invMass * l;
            c.m_linearVelocity.y = c.m_linearVelocity.y + c.m_invMass *
                m;
            c.m_angularVelocity = c.m_angularVelocity + c.m_invI * (j * m - k * l)
        }
    };
    C.prototype.SolvePositionConstraints = function () {
        var c = this.m_bodyA,
            d = this.m_bodyB,
            f, g = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
            h = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
            j = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
            k = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
            l = 0,
            m = 0,
            o = 0,
            n = 0,
            s = 0,
            q = 0,
            t = 0,
            r = 0;
        if (this.m_state == p.e_atUpperLimit) {
            f = c.m_xf.R;
            l = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
            m = this.m_localAnchor1.y -
                c.m_sweep.localCenter.y;
            s = f.col1.x * l + f.col2.x * m;
            m = f.col1.y * l + f.col2.y * m;
            l = s;
            f = d.m_xf.R;
            o = this.m_localAnchor2.x - d.m_sweep.localCenter.x;
            n = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
            s = f.col1.x * o + f.col2.x * n;
            n = f.col1.y * o + f.col2.y * n;
            o = s;
            f = c.m_sweep.c.x + l;
            s = c.m_sweep.c.y + m;
            q = d.m_sweep.c.x + o;
            t = d.m_sweep.c.y + n;
            this.m_u1.Set(f - g, s - h);
            this.m_u2.Set(q - j, t - k);
            f = this.m_u1.Length();
            s = this.m_u2.Length();
            f > b.b2_linearSlop ? this.m_u1.Multiply(1 / f) : this.m_u1.SetZero();
            s > b.b2_linearSlop ? this.m_u2.Multiply(1 / s) : this.m_u2.SetZero();
            f = this.m_constant - f - this.m_ratio * s;
            r = e.Max(r, -f);
            f = e.Clamp(f + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0);
            t = -this.m_pulleyMass * f;
            f = -t * this.m_u1.x;
            s = -t * this.m_u1.y;
            q = -this.m_ratio * t * this.m_u2.x;
            t = -this.m_ratio * t * this.m_u2.y;
            c.m_sweep.c.x = c.m_sweep.c.x + c.m_invMass * f;
            c.m_sweep.c.y = c.m_sweep.c.y + c.m_invMass * s;
            c.m_sweep.a = c.m_sweep.a + c.m_invI * (l * s - m * f);
            d.m_sweep.c.x = d.m_sweep.c.x + d.m_invMass * q;
            d.m_sweep.c.y = d.m_sweep.c.y + d.m_invMass * t;
            d.m_sweep.a = d.m_sweep.a + d.m_invI * (o * t - n * q);
            c.SynchronizeTransform();
            d.SynchronizeTransform()
        }
        if (this.m_limitState1 == p.e_atUpperLimit) {
            f = c.m_xf.R;
            l = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
            m = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
            s = f.col1.x * l + f.col2.x * m;
            m = f.col1.y * l + f.col2.y * m;
            l = s;
            f = c.m_sweep.c.x + l;
            s = c.m_sweep.c.y + m;
            this.m_u1.Set(f - g, s - h);
            f = this.m_u1.Length();
            if (f > b.b2_linearSlop) {
                this.m_u1.x = this.m_u1.x * (1 / f);
                this.m_u1.y = this.m_u1.y * (1 / f)
            } else this.m_u1.SetZero();
            f = this.m_maxLength1 - f;
            r = e.Max(r, -f);
            f = e.Clamp(f + b.b2_linearSlop, -b.b2_maxLinearCorrection,
                0);
            t = -this.m_limitMass1 * f;
            f = -t * this.m_u1.x;
            s = -t * this.m_u1.y;
            c.m_sweep.c.x = c.m_sweep.c.x + c.m_invMass * f;
            c.m_sweep.c.y = c.m_sweep.c.y + c.m_invMass * s;
            c.m_sweep.a = c.m_sweep.a + c.m_invI * (l * s - m * f);
            c.SynchronizeTransform()
        }
        if (this.m_limitState2 == p.e_atUpperLimit) {
            f = d.m_xf.R;
            o = this.m_localAnchor2.x - d.m_sweep.localCenter.x;
            n = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
            s = f.col1.x * o + f.col2.x * n;
            n = f.col1.y * o + f.col2.y * n;
            o = s;
            q = d.m_sweep.c.x + o;
            t = d.m_sweep.c.y + n;
            this.m_u2.Set(q - j, t - k);
            s = this.m_u2.Length();
            if (s > b.b2_linearSlop) {
                this.m_u2.x =
                    this.m_u2.x * (1 / s);
                this.m_u2.y = this.m_u2.y * (1 / s)
            } else this.m_u2.SetZero();
            f = this.m_maxLength2 - s;
            r = e.Max(r, -f);
            f = e.Clamp(f + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0);
            t = -this.m_limitMass2 * f;
            q = -t * this.m_u2.x;
            t = -t * this.m_u2.y;
            d.m_sweep.c.x = d.m_sweep.c.x + d.m_invMass * q;
            d.m_sweep.c.y = d.m_sweep.c.y + d.m_invMass * t;
            d.m_sweep.a = d.m_sweep.a + d.m_invI * (o * t - n * q);
            d.SynchronizeTransform()
        }
        return r < b.b2_linearSlop
    };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 2
    });
    Box2D.inherit(G,
        Box2D.Dynamics.Joints.b2JointDef);
    G.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    G.b2PulleyJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.groundAnchorA = new f;
        this.groundAnchorB = new f;
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    G.prototype.b2PulleyJointDef = function () {
        this.__super.b2JointDef.call(this);
        this.type = p.e_pulleyJoint;
        this.groundAnchorA.Set(-1, 1);
        this.groundAnchorB.Set(1, 1);
        this.localAnchorA.Set(-1, 0);
        this.localAnchorB.Set(1,
            0);
        this.maxLengthB = this.lengthB = this.maxLengthA = this.lengthA = 0;
        this.ratio = 1;
        this.collideConnected = true
    };
    G.prototype.Initialize = function (b, c, d, e, f, g, h) {
        h === void 0 && (h = 0);
        this.bodyA = b;
        this.bodyB = c;
        this.groundAnchorA.SetV(d);
        this.groundAnchorB.SetV(e);
        this.localAnchorA = this.bodyA.GetLocalPoint(f);
        this.localAnchorB = this.bodyB.GetLocalPoint(g);
        b = f.x - d.x;
        d = f.y - d.y;
        this.lengthA = Math.sqrt(b * b + d * d);
        d = g.x - e.x;
        e = g.y - e.y;
        this.lengthB = Math.sqrt(d * d + e * e);
        this.ratio = h;
        h = this.lengthA + this.ratio * this.lengthB;
        this.maxLengthA =
            h - this.ratio * C.b2_minPulleyLength;
        this.maxLengthB = (h - C.b2_minPulleyLength) / this.ratio
    };
    Box2D.inherit(H, Box2D.Dynamics.Joints.b2Joint);
    H.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    H.b2RevoluteJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.K = new c;
        this.K1 = new c;
        this.K2 = new c;
        this.K3 = new c;
        this.impulse3 = new g;
        this.impulse2 = new f;
        this.reduced = new f;
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_impulse = new g;
        this.m_mass = new d
    };
    H.prototype.GetAnchorA =
        function () {
            return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
        };
    H.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    H.prototype.GetReactionForce = function (b) {
        b === void 0 && (b = 0);
        return new f(b * this.m_impulse.x, b * this.m_impulse.y)
    };
    H.prototype.GetReactionTorque = function (b) {
        b === void 0 && (b = 0);
        return b * this.m_impulse.z
    };
    H.prototype.GetJointAngle = function () {
        return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle
    };
    H.prototype.GetJointSpeed = function () {
        return this.m_bodyB.m_angularVelocity -
            this.m_bodyA.m_angularVelocity
    };
    H.prototype.IsLimitEnabled = function () {
        return this.m_enableLimit
    };
    H.prototype.EnableLimit = function (b) {
        this.m_enableLimit = b
    };
    H.prototype.GetLowerLimit = function () {
        return this.m_lowerAngle
    };
    H.prototype.GetUpperLimit = function () {
        return this.m_upperAngle
    };
    H.prototype.SetLimits = function (b, c) {
        b === void 0 && (b = 0);
        c === void 0 && (c = 0);
        this.m_lowerAngle = b;
        this.m_upperAngle = c
    };
    H.prototype.IsMotorEnabled = function () {
        this.m_bodyA.SetAwake(true);
        this.m_bodyB.SetAwake(true);
        return this.m_enableMotor
    };
    H.prototype.EnableMotor = function (b) {
        this.m_enableMotor = b
    };
    H.prototype.SetMotorSpeed = function (b) {
        b === void 0 && (b = 0);
        this.m_bodyA.SetAwake(true);
        this.m_bodyB.SetAwake(true);
        this.m_motorSpeed = b
    };
    H.prototype.GetMotorSpeed = function () {
        return this.m_motorSpeed
    };
    H.prototype.SetMaxMotorTorque = function (b) {
        b === void 0 && (b = 0);
        this.m_maxMotorTorque = b
    };
    H.prototype.GetMotorTorque = function () {
        return this.m_maxMotorTorque
    };
    H.prototype.b2RevoluteJoint = function (b) {
        this.__super.b2Joint.call(this, b);
        this.m_localAnchor1.SetV(b.localAnchorA);
        this.m_localAnchor2.SetV(b.localAnchorB);
        this.m_referenceAngle = b.referenceAngle;
        this.m_impulse.SetZero();
        this.m_motorImpulse = 0;
        this.m_lowerAngle = b.lowerAngle;
        this.m_upperAngle = b.upperAngle;
        this.m_maxMotorTorque = b.maxMotorTorque;
        this.m_motorSpeed = b.motorSpeed;
        this.m_enableLimit = b.enableLimit;
        this.m_enableMotor = b.enableMotor;
        this.m_limitState = p.e_inactiveLimit
    };
    H.prototype.InitVelocityConstraints = function (c) {
        var d = this.m_bodyA,
            f = this.m_bodyB,
            g, h = 0;
        g = d.m_xf.R;
        var j = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
            k = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
            h = g.col1.x * j + g.col2.x * k,
            k = g.col1.y * j + g.col2.y * k,
            j = h;
        g = f.m_xf.R;
        var l = this.m_localAnchor2.x - f.m_sweep.localCenter.x,
            m = this.m_localAnchor2.y - f.m_sweep.localCenter.y,
            h = g.col1.x * l + g.col2.x * m,
            m = g.col1.y * l + g.col2.y * m,
            l = h;
        g = d.m_invMass;
        var h = f.m_invMass,
            o = d.m_invI,
            n = f.m_invI;
        this.m_mass.col1.x = g + h + k * k * o + m * m * n;
        this.m_mass.col2.x = -k * j * o - m * l * n;
        this.m_mass.col3.x = -k * o - m * n;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = g + h + j * j * o + l * l * n;
        this.m_mass.col3.y =
            j * o + l * n;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = o + n;
        this.m_motorMass = 1 / (o + n);
        if (this.m_enableMotor == false) this.m_motorImpulse = 0;
        if (this.m_enableLimit) {
            var s = f.m_sweep.a - d.m_sweep.a - this.m_referenceAngle;
            if (e.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * b.b2_angularSlop) this.m_limitState = p.e_equalLimits;
            else if (s <= this.m_lowerAngle) {
                if (this.m_limitState != p.e_atLowerLimit) this.m_impulse.z = 0;
                this.m_limitState = p.e_atLowerLimit
            } else if (s >= this.m_upperAngle) {
                if (this.m_limitState !=
                    p.e_atUpperLimit) this.m_impulse.z = 0;
                this.m_limitState = p.e_atUpperLimit
            } else {
                this.m_limitState = p.e_inactiveLimit;
                this.m_impulse.z = 0
            }
        } else this.m_limitState = p.e_inactiveLimit;
        if (c.warmStarting) {
            this.m_impulse.x = this.m_impulse.x * c.dtRatio;
            this.m_impulse.y = this.m_impulse.y * c.dtRatio;
            this.m_motorImpulse = this.m_motorImpulse * c.dtRatio;
            c = this.m_impulse.x;
            s = this.m_impulse.y;
            d.m_linearVelocity.x = d.m_linearVelocity.x - g * c;
            d.m_linearVelocity.y = d.m_linearVelocity.y - g * s;
            d.m_angularVelocity = d.m_angularVelocity - o *
                (j * s - k * c + this.m_motorImpulse + this.m_impulse.z);
            f.m_linearVelocity.x = f.m_linearVelocity.x + h * c;
            f.m_linearVelocity.y = f.m_linearVelocity.y + h * s;
            f.m_angularVelocity = f.m_angularVelocity + n * (l * s - m * c + this.m_motorImpulse + this.m_impulse.z)
        } else {
            this.m_impulse.SetZero();
            this.m_motorImpulse = 0
        }
    };
    H.prototype.SolveVelocityConstraints = function (b) {
        var c = this.m_bodyA,
            d = this.m_bodyB,
            f = 0,
            g = 0,
            h = 0,
            j = 0,
            k = 0,
            l = c.m_linearVelocity,
            m = c.m_angularVelocity,
            o = d.m_linearVelocity,
            n = d.m_angularVelocity,
            s = c.m_invMass,
            q = d.m_invMass,
            t =
            c.m_invI,
            r = d.m_invI;
        if (this.m_enableMotor && this.m_limitState != p.e_equalLimits) {
            g = this.m_motorMass * -(n - m - this.m_motorSpeed);
            h = this.m_motorImpulse;
            j = b.dt * this.m_maxMotorTorque;
            this.m_motorImpulse = e.Clamp(this.m_motorImpulse + g, -j, j);
            g = this.m_motorImpulse - h;
            m = m - t * g;
            n = n + r * g
        }
        if (this.m_enableLimit && this.m_limitState != p.e_inactiveLimit) {
            var b = c.m_xf.R,
                g = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
                h = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
                f = b.col1.x * g + b.col2.x * h,
                h = b.col1.y * g + b.col2.y * h,
                g = f,
                b = d.m_xf.R,
                j = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
                k = this.m_localAnchor2.y - d.m_sweep.localCenter.y,
                f = b.col1.x * j + b.col2.x * k,
                k = b.col1.y * j + b.col2.y * k,
                j = f,
                b = o.x + -n * k - l.x - -m * h,
                u = o.y + n * j - l.y - m * g;
            this.m_mass.Solve33(this.impulse3, -b, -u, -(n - m));
            if (this.m_limitState == p.e_equalLimits) this.m_impulse.Add(this.impulse3);
            else if (this.m_limitState == p.e_atLowerLimit) {
                f = this.m_impulse.z + this.impulse3.z;
                if (f < 0) {
                    this.m_mass.Solve22(this.reduced, -b, -u);
                    this.impulse3.x = this.reduced.x;
                    this.impulse3.y = this.reduced.y;
                    this.impulse3.z = -this.m_impulse.z;
                    this.m_impulse.x = this.m_impulse.x + this.reduced.x;
                    this.m_impulse.y = this.m_impulse.y + this.reduced.y;
                    this.m_impulse.z = 0
                }
            } else if (this.m_limitState == p.e_atUpperLimit) {
                f = this.m_impulse.z + this.impulse3.z;
                if (f > 0) {
                    this.m_mass.Solve22(this.reduced, -b, -u);
                    this.impulse3.x = this.reduced.x;
                    this.impulse3.y = this.reduced.y;
                    this.impulse3.z = -this.m_impulse.z;
                    this.m_impulse.x = this.m_impulse.x + this.reduced.x;
                    this.m_impulse.y = this.m_impulse.y + this.reduced.y;
                    this.m_impulse.z = 0
                }
            }
            l.x = l.x - s * this.impulse3.x;
            l.y = l.y - s * this.impulse3.y;
            m = m - t * (g * this.impulse3.y - h * this.impulse3.x + this.impulse3.z);
            o.x = o.x + q * this.impulse3.x;
            o.y = o.y + q * this.impulse3.y;
            n = n + r * (j * this.impulse3.y - k * this.impulse3.x + this.impulse3.z)
        } else {
            b = c.m_xf.R;
            g = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
            h = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
            f = b.col1.x * g + b.col2.x * h;
            h = b.col1.y * g + b.col2.y * h;
            g = f;
            b = d.m_xf.R;
            j = this.m_localAnchor2.x - d.m_sweep.localCenter.x;
            k = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
            f = b.col1.x * j + b.col2.x * k;
            k = b.col1.y *
                j + b.col2.y * k;
            j = f;
            this.m_mass.Solve22(this.impulse2, -(o.x + -n * k - l.x - -m * h), -(o.y + n * j - l.y - m * g));
            this.m_impulse.x = this.m_impulse.x + this.impulse2.x;
            this.m_impulse.y = this.m_impulse.y + this.impulse2.y;
            l.x = l.x - s * this.impulse2.x;
            l.y = l.y - s * this.impulse2.y;
            m = m - t * (g * this.impulse2.y - h * this.impulse2.x);
            o.x = o.x + q * this.impulse2.x;
            o.y = o.y + q * this.impulse2.y;
            n = n + r * (j * this.impulse2.y - k * this.impulse2.x)
        }
        c.m_linearVelocity.SetV(l);
        c.m_angularVelocity = m;
        d.m_linearVelocity.SetV(o);
        d.m_angularVelocity = n
    };
    H.prototype.SolvePositionConstraints =
        function () {
            var c = 0,
                d, f = this.m_bodyA,
                g = this.m_bodyB,
                h = 0,
                j = 0,
                k = 0,
                l = 0;
            if (this.m_enableLimit && this.m_limitState != p.e_inactiveLimit) {
                var c = g.m_sweep.a - f.m_sweep.a - this.m_referenceAngle,
                    m = 0;
                if (this.m_limitState == p.e_equalLimits) {
                    c = e.Clamp(c - this.m_lowerAngle, -b.b2_maxAngularCorrection, b.b2_maxAngularCorrection);
                    m = -this.m_motorMass * c;
                    h = e.Abs(c)
                } else if (this.m_limitState == p.e_atLowerLimit) {
                    c = c - this.m_lowerAngle;
                    h = -c;
                    c = e.Clamp(c + b.b2_angularSlop, -b.b2_maxAngularCorrection, 0);
                    m = -this.m_motorMass * c
                } else if (this.m_limitState ==
                    p.e_atUpperLimit) {
                    h = c = c - this.m_upperAngle;
                    c = e.Clamp(c - b.b2_angularSlop, 0, b.b2_maxAngularCorrection);
                    m = -this.m_motorMass * c
                }
                f.m_sweep.a = f.m_sweep.a - f.m_invI * m;
                g.m_sweep.a = g.m_sweep.a + g.m_invI * m;
                f.SynchronizeTransform();
                g.SynchronizeTransform()
            }
            d = f.m_xf.R;
            m = this.m_localAnchor1.x - f.m_sweep.localCenter.x;
            c = this.m_localAnchor1.y - f.m_sweep.localCenter.y;
            j = d.col1.x * m + d.col2.x * c;
            c = d.col1.y * m + d.col2.y * c;
            m = j;
            d = g.m_xf.R;
            var o = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
                n = this.m_localAnchor2.y - g.m_sweep.localCenter.y,
                j = d.col1.x * o + d.col2.x * n,
                n = d.col1.y * o + d.col2.y * n,
                o = j,
                k = g.m_sweep.c.x + o - f.m_sweep.c.x - m,
                l = g.m_sweep.c.y + n - f.m_sweep.c.y - c,
                s = k * k + l * l;
            d = Math.sqrt(s);
            var j = f.m_invMass,
                q = g.m_invMass,
                t = f.m_invI,
                r = g.m_invI,
                u = 10 * b.b2_linearSlop;
            if (s > u * u) {
                s = 1 / (j + q);
                k = s * -k;
                l = s * -l;
                f.m_sweep.c.x = f.m_sweep.c.x - 0.5 * j * k;
                f.m_sweep.c.y = f.m_sweep.c.y - 0.5 * j * l;
                g.m_sweep.c.x = g.m_sweep.c.x + 0.5 * q * k;
                g.m_sweep.c.y = g.m_sweep.c.y + 0.5 * q * l;
                k = g.m_sweep.c.x + o - f.m_sweep.c.x - m;
                l = g.m_sweep.c.y + n - f.m_sweep.c.y - c
            }
            this.K1.col1.x = j + q;
            this.K1.col2.x = 0;
            this.K1.col1.y = 0;
            this.K1.col2.y = j + q;
            this.K2.col1.x = t * c * c;
            this.K2.col2.x = -t * m * c;
            this.K2.col1.y = -t * m * c;
            this.K2.col2.y = t * m * m;
            this.K3.col1.x = r * n * n;
            this.K3.col2.x = -r * o * n;
            this.K3.col1.y = -r * o * n;
            this.K3.col2.y = r * o * o;
            this.K.SetM(this.K1);
            this.K.AddM(this.K2);
            this.K.AddM(this.K3);
            this.K.Solve(H.tImpulse, -k, -l);
            k = H.tImpulse.x;
            l = H.tImpulse.y;
            f.m_sweep.c.x = f.m_sweep.c.x - f.m_invMass * k;
            f.m_sweep.c.y = f.m_sweep.c.y - f.m_invMass * l;
            f.m_sweep.a = f.m_sweep.a - f.m_invI * (m * l - c * k);
            g.m_sweep.c.x = g.m_sweep.c.x + g.m_invMass * k;
            g.m_sweep.c.y = g.m_sweep.c.y + g.m_invMass * l;
            g.m_sweep.a = g.m_sweep.a + g.m_invI * (o * l - n * k);
            f.SynchronizeTransform();
            g.SynchronizeTransform();
            return d <= b.b2_linearSlop && h <= b.b2_angularSlop
        };
    Box2D.postDefs.push(function () {
        Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new f
    });
    Box2D.inherit(K, Box2D.Dynamics.Joints.b2JointDef);
    K.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    K.b2RevoluteJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    K.prototype.b2RevoluteJointDef = function () {
        this.__super.b2JointDef.call(this);
        this.type = p.e_revoluteJoint;
        this.localAnchorA.Set(0, 0);
        this.localAnchorB.Set(0, 0);
        this.motorSpeed = this.maxMotorTorque = this.upperAngle = this.lowerAngle = this.referenceAngle = 0;
        this.enableMotor = this.enableLimit = false
    };
    K.prototype.Initialize = function (b, c, d) {
        this.bodyA = b;
        this.bodyB = c;
        this.localAnchorA = this.bodyA.GetLocalPoint(d);
        this.localAnchorB = this.bodyB.GetLocalPoint(d);
        this.referenceAngle = this.bodyB.GetAngle() -
            this.bodyA.GetAngle()
    };
    Box2D.inherit(P, Box2D.Dynamics.Joints.b2Joint);
    P.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    P.b2WeldJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchorA = new f;
        this.m_localAnchorB = new f;
        this.m_impulse = new g;
        this.m_mass = new d
    };
    P.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
    };
    P.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
    };
    P.prototype.GetReactionForce =
        function (b) {
            b === void 0 && (b = 0);
            return new f(b * this.m_impulse.x, b * this.m_impulse.y)
        };
    P.prototype.GetReactionTorque = function (b) {
        b === void 0 && (b = 0);
        return b * this.m_impulse.z
    };
    P.prototype.b2WeldJoint = function (b) {
        this.__super.b2Joint.call(this, b);
        this.m_localAnchorA.SetV(b.localAnchorA);
        this.m_localAnchorB.SetV(b.localAnchorB);
        this.m_referenceAngle = b.referenceAngle;
        this.m_impulse.SetZero();
        this.m_mass = new d
    };
    P.prototype.InitVelocityConstraints = function (b) {
        var c, d = 0,
            e = this.m_bodyA,
            f = this.m_bodyB;
        c = e.m_xf.R;
        var g = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
            h = this.m_localAnchorA.y - e.m_sweep.localCenter.y,
            d = c.col1.x * g + c.col2.x * h,
            h = c.col1.y * g + c.col2.y * h,
            g = d;
        c = f.m_xf.R;
        var j = this.m_localAnchorB.x - f.m_sweep.localCenter.x,
            k = this.m_localAnchorB.y - f.m_sweep.localCenter.y,
            d = c.col1.x * j + c.col2.x * k,
            k = c.col1.y * j + c.col2.y * k,
            j = d;
        c = e.m_invMass;
        var d = f.m_invMass,
            l = e.m_invI,
            m = f.m_invI;
        this.m_mass.col1.x = c + d + h * h * l + k * k * m;
        this.m_mass.col2.x = -h * g * l - k * j * m;
        this.m_mass.col3.x = -h * l - k * m;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = c + d + g * g * l + j * j * m;
        this.m_mass.col3.y = g * l + j * m;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = l + m;
        if (b.warmStarting) {
            this.m_impulse.x = this.m_impulse.x * b.dtRatio;
            this.m_impulse.y = this.m_impulse.y * b.dtRatio;
            this.m_impulse.z = this.m_impulse.z * b.dtRatio;
            e.m_linearVelocity.x = e.m_linearVelocity.x - c * this.m_impulse.x;
            e.m_linearVelocity.y = e.m_linearVelocity.y - c * this.m_impulse.y;
            e.m_angularVelocity = e.m_angularVelocity - l * (g * this.m_impulse.y - h * this.m_impulse.x +
                this.m_impulse.z);
            f.m_linearVelocity.x = f.m_linearVelocity.x + d * this.m_impulse.x;
            f.m_linearVelocity.y = f.m_linearVelocity.y + d * this.m_impulse.y;
            f.m_angularVelocity = f.m_angularVelocity + m * (j * this.m_impulse.y - k * this.m_impulse.x + this.m_impulse.z)
        } else this.m_impulse.SetZero()
    };
    P.prototype.SolveVelocityConstraints = function () {
        var b, c = 0,
            d = this.m_bodyA,
            e = this.m_bodyB,
            f = d.m_linearVelocity,
            h = d.m_angularVelocity,
            j = e.m_linearVelocity,
            k = e.m_angularVelocity,
            l = d.m_invMass,
            m = e.m_invMass,
            o = d.m_invI,
            n = e.m_invI;
        b = d.m_xf.R;
        var s = this.m_localAnchorA.x - d.m_sweep.localCenter.x,
            p = this.m_localAnchorA.y - d.m_sweep.localCenter.y,
            c = b.col1.x * s + b.col2.x * p,
            p = b.col1.y * s + b.col2.y * p,
            s = c;
        b = e.m_xf.R;
        var q = this.m_localAnchorB.x - e.m_sweep.localCenter.x,
            t = this.m_localAnchorB.y - e.m_sweep.localCenter.y,
            c = b.col1.x * q + b.col2.x * t,
            t = b.col1.y * q + b.col2.y * t,
            q = c;
        b = j.x - k * t - f.x + h * p;
        var c = j.y + k * q - f.y - h * s,
            r = k - h,
            u = new g;
        this.m_mass.Solve33(u, -b, -c, -r);
        this.m_impulse.Add(u);
        f.x = f.x - l * u.x;
        f.y = f.y - l * u.y;
        h = h - o * (s * u.y - p * u.x + u.z);
        j.x = j.x + m * u.x;
        j.y = j.y + m * u.y;
        k = k + n * (q * u.y - t * u.x + u.z);
        d.m_angularVelocity = h;
        e.m_angularVelocity = k
    };
    P.prototype.SolvePositionConstraints = function () {
        var c, d = 0,
            f = this.m_bodyA,
            h = this.m_bodyB;
        c = f.m_xf.R;
        var j = this.m_localAnchorA.x - f.m_sweep.localCenter.x,
            k = this.m_localAnchorA.y - f.m_sweep.localCenter.y,
            d = c.col1.x * j + c.col2.x * k,
            k = c.col1.y * j + c.col2.y * k,
            j = d;
        c = h.m_xf.R;
        var l = this.m_localAnchorB.x - h.m_sweep.localCenter.x,
            m = this.m_localAnchorB.y - h.m_sweep.localCenter.y,
            d = c.col1.x * l + c.col2.x * m,
            m = c.col1.y * l + c.col2.y * m,
            l = d;
        c = f.m_invMass;
        var d =
            h.m_invMass,
            o = f.m_invI,
            n = h.m_invI,
            s = h.m_sweep.c.x + l - f.m_sweep.c.x - j,
            p = h.m_sweep.c.y + m - f.m_sweep.c.y - k,
            q = h.m_sweep.a - f.m_sweep.a - this.m_referenceAngle,
            t = 10 * b.b2_linearSlop,
            r = Math.sqrt(s * s + p * p),
            u = e.Abs(q);
        if (r > t) {
            o = o * 1;
            n = n * 1
        }
        this.m_mass.col1.x = c + d + k * k * o + m * m * n;
        this.m_mass.col2.x = -k * j * o - m * l * n;
        this.m_mass.col3.x = -k * o - m * n;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = c + d + j * j * o + l * l * n;
        this.m_mass.col3.y = j * o + l * n;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z =
            o + n;
        t = new g;
        this.m_mass.Solve33(t, -s, -p, -q);
        f.m_sweep.c.x = f.m_sweep.c.x - c * t.x;
        f.m_sweep.c.y = f.m_sweep.c.y - c * t.y;
        f.m_sweep.a = f.m_sweep.a - o * (j * t.y - k * t.x + t.z);
        h.m_sweep.c.x = h.m_sweep.c.x + d * t.x;
        h.m_sweep.c.y = h.m_sweep.c.y + d * t.y;
        h.m_sweep.a = h.m_sweep.a + n * (l * t.y - m * t.x + t.z);
        f.SynchronizeTransform();
        h.SynchronizeTransform();
        return r <= b.b2_linearSlop && u <= b.b2_angularSlop
    };
    Box2D.inherit(T, Box2D.Dynamics.Joints.b2JointDef);
    T.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    T.b2WeldJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,
            arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    T.prototype.b2WeldJointDef = function () {
        this.__super.b2JointDef.call(this);
        this.type = p.e_weldJoint;
        this.referenceAngle = 0
    };
    T.prototype.Initialize = function (b, c, d) {
        this.bodyA = b;
        this.bodyB = c;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d));
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    }
})();
(function () {
    var b = Box2D.Dynamics.b2DebugDraw;
    b.b2DebugDraw = function () {
        this.m_xformScale = this.m_fillAlpha = this.m_alpha = this.m_lineThickness = this.m_drawScale = 1;
        var b = this;
        this.m_sprite = {
            graphics: {
                clear: function () {
                    b.m_ctx.clearRect(0, 0, b.m_ctx.canvas.width, b.m_ctx.canvas.height)
                }
            }
        }
    };
    b.prototype._color = function (b, d) {
        return "rgba(" + ((b & 16711680) >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + d + ")"
    };
    b.prototype.b2DebugDraw = function () {
        this.m_drawFlags = 0
    };
    b.prototype.SetFlags = function (b) {
        b === void 0 && (b = 0);
        this.m_drawFlags =
            b
    };
    b.prototype.GetFlags = function () {
        return this.m_drawFlags
    };
    b.prototype.AppendFlags = function (b) {
        b === void 0 && (b = 0);
        this.m_drawFlags = this.m_drawFlags | b
    };
    b.prototype.ClearFlags = function (b) {
        b === void 0 && (b = 0);
        this.m_drawFlags = this.m_drawFlags & ~b
    };
    b.prototype.SetSprite = function (b) {
        this.m_ctx = b
    };
    b.prototype.GetSprite = function () {
        return this.m_ctx
    };
    b.prototype.SetDrawScale = function (b) {
        b === void 0 && (b = 0);
        this.m_drawScale = b
    };
    b.prototype.GetDrawScale = function () {
        return this.m_drawScale
    };
    b.prototype.SetLineThickness =
        function (b) {
            b === void 0 && (b = 0);
            this.m_lineThickness = b;
            this.m_ctx.strokeWidth = b
        };
    b.prototype.GetLineThickness = function () {
        return this.m_lineThickness
    };
    b.prototype.SetAlpha = function (b) {
        b === void 0 && (b = 0);
        this.m_alpha = b
    };
    b.prototype.GetAlpha = function () {
        return this.m_alpha
    };
    b.prototype.SetFillAlpha = function (b) {
        b === void 0 && (b = 0);
        this.m_fillAlpha = b
    };
    b.prototype.GetFillAlpha = function () {
        return this.m_fillAlpha
    };
    b.prototype.SetXFormScale = function (b) {
        b === void 0 && (b = 0);
        this.m_xformScale = b
    };
    b.prototype.GetXFormScale =
        function () {
            return this.m_xformScale
        };
    b.prototype.DrawPolygon = function (b, d, e) {
        if (d) {
            var f = this.m_ctx,
                g = this.m_drawScale;
            f.beginPath();
            f.strokeStyle = this._color(e.color, this.m_alpha);
            f.moveTo(b[0].x * g, b[0].y * g);
            for (e = 1; e < d; e++) f.lineTo(b[e].x * g, b[e].y * g);
            f.lineTo(b[0].x * g, b[0].y * g);
            f.closePath();
            f.stroke()
        }
    };
    b.prototype.DrawSolidPolygon = function (b, d, e) {
        if (d) {
            var f = this.m_ctx,
                g = this.m_drawScale;
            f.beginPath();
            f.strokeStyle = this._color(e.color, this.m_alpha);
            f.fillStyle = this._color(e.color, this.m_fillAlpha);
            f.moveTo(b[0].x * g, b[0].y * g);
            for (e = 1; e < d; e++) f.lineTo(b[e].x * g, b[e].y * g);
            f.lineTo(b[0].x * g, b[0].y * g);
            f.closePath();
            f.fill();
            f.stroke()
        }
    };
    b.prototype.DrawCircle = function (b, d, e) {
        if (d) {
            var f = this.m_ctx,
                g = this.m_drawScale;
            f.beginPath();
            f.strokeStyle = this._color(e.color, this.m_alpha);
            f.arc(b.x * g, b.y * g, d * g, 0, Math.PI * 2, true);
            f.closePath();
            f.stroke()
        }
    };
    b.prototype.DrawSolidCircle = function (b, d, e, f) {
        if (d) {
            var g = this.m_ctx,
                h = this.m_drawScale,
                j = b.x * h,
                k = b.y * h;
            g.moveTo(0, 0);
            g.beginPath();
            g.strokeStyle = this._color(f.color,
                this.m_alpha);
            g.fillStyle = this._color(f.color, this.m_fillAlpha);
            g.arc(j, k, d * h, 0, Math.PI * 2, true);
            g.moveTo(j, k);
            g.lineTo((b.x + e.x * d) * h, (b.y + e.y * d) * h);
            g.closePath();
            g.fill();
            g.stroke()
        }
    };
    b.prototype.DrawSegment = function (b, d, e) {
        var f = this.m_ctx,
            g = this.m_drawScale;
        f.strokeStyle = this._color(e.color, this.m_alpha);
        f.beginPath();
        f.moveTo(b.x * g, b.y * g);
        f.lineTo(d.x * g, d.y * g);
        f.closePath();
        f.stroke()
    };
    b.prototype.DrawTransform = function (b) {
        var d = this.m_ctx,
            e = this.m_drawScale;
        d.beginPath();
        d.strokeStyle = this._color(16711680,
            this.m_alpha);
        d.moveTo(b.position.x * e, b.position.y * e);
        d.lineTo((b.position.x + this.m_xformScale * b.R.col1.x) * e, (b.position.y + this.m_xformScale * b.R.col1.y) * e);
        d.strokeStyle = this._color(65280, this.m_alpha);
        d.moveTo(b.position.x * e, b.position.y * e);
        d.lineTo((b.position.x + this.m_xformScale * b.R.col2.x) * e, (b.position.y + this.m_xformScale * b.R.col2.y) * e);
        d.closePath();
        d.stroke()
    }
})();
var i;
for (i = 0; i < Box2D.postDefs.length; ++i) Box2D.postDefs[i]();
delete Box2D.postDefs;
(function (b, c) {
    function d(d, e) {
        function h(b) {
            return l.preferFlash && Ka && !l.ignoreFlash && l.flash[b] !== c && l.flash[b]
        }

        function j(b) {
            return function (c) {
                var d = this._s;
                d && d._a ? c = b.call(this, c) : (d && d.id ? l._wD(d.id + ": Ignoring " + c.type) : l._wD("HTML5::Ignoring " + c.type), c = null);
                return c
            }
        }
        this.setupOptions = {
            url: d || null,
            flashVersion: 8,
            debugMode: true,
            debugFlash: false,
            useConsole: true,
            consoleOnly: true,
            waitForWindowLoad: false,
            bgColor: "#ffffff",
            useHighPerformance: false,
            flashPollingInterval: null,
            html5PollingInterval: null,
            flashLoadTimeout: 1E3,
            wmode: null,
            allowScriptAccess: "always",
            useFlashBlock: false,
            useHTML5Audio: true,
            forceUseGlobalHTML5Audio: false,
            ignoreMobileRestrictions: false,
            html5Test: /^(probably|maybe)$/i,
            preferFlash: false,
            noSWFCache: false,
            idPrefix: "sound"
        };
        this.defaultOptions = {
            autoLoad: false,
            autoPlay: false,
            from: null,
            loops: 1,
            onid3: null,
            onload: null,
            whileloading: null,
            onplay: null,
            onpause: null,
            onresume: null,
            whileplaying: null,
            onposition: null,
            onstop: null,
            onfailure: null,
            onfinish: null,
            multiShot: true,
            multiShotEvents: false,
            position: null,
            pan: 0,
            stream: true,
            to: null,
            type: null,
            usePolicyFile: false,
            volume: 100
        };
        this.flash9Options = {
            isMovieStar: null,
            usePeakData: false,
            useWaveformData: false,
            useEQData: false,
            onbufferchange: null,
            ondataerror: null
        };
        this.movieStarOptions = {
            bufferTime: 3,
            serverURL: null,
            onconnect: null,
            duration: null
        };
        this.audioFormats = {
            mp3: {
                type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                required: true
            },
            mp4: {
                related: ["aac", "m4a", "m4b"],
                type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac",
                    "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"
                ],
                required: false
            },
            ogg: {
                type: ["audio/ogg; codecs=vorbis"],
                required: false
            },
            opus: {
                type: ["audio/ogg; codecs=opus", "audio/opus"],
                required: false
            },
            wav: {
                type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                required: false
            }
        };
        this.movieID = "sm2-container";
        this.id = e || "sm2movie";
        this.debugID = "soundmanager-debug";
        this.debugURLParam = /([#?&])debug=1/i;
        this.versionNumber = "V2.97a.20150601";
        this.altURL = this.movieURL = this.version = null;
        this.enabled =
            this.swfLoaded = false;
        this.oMC = null;
        this.sounds = {};
        this.soundIDs = [];
        this.didFlashBlock = this.muted = false;
        this.filePattern = null;
        this.filePatterns = {
            flash8: /\.mp3(\?.*)?$/i,
            flash9: /\.mp3(\?.*)?$/i
        };
        this.features = {
            buffering: false,
            peakData: false,
            waveformData: false,
            eqData: false,
            movieStar: false
        };
        this.sandbox = {
            type: null,
            types: {
                remote: "remote (domain-based) rules",
                localWithFile: "local with file access (no internet access)",
                localWithNetwork: "local with network (internet access only, no local access)",
                localTrusted: "local, trusted (local+internet access)"
            },
            description: null,
            noRemote: null,
            noLocal: null
        };
        this.html5 = {
            usingFlash: null
        };
        this.flash = {};
        this.ignoreFlash = this.html5Only = false;
        var k, l = this,
            m = null,
            n = null,
            q, p = navigator.userAgent,
            s = b.location.href.toString(),
            r = document,
            o, t, u, w, z = [],
            A = true,
            C, G = false,
            H = false,
            K = false,
            P = false,
            T = false,
            D, F = 0,
            I, J, N, U, Q, B, E, Z, O, M, X, aa, Y, ba, da, ra, x, ja, ka, oa, pa, V, va = ["log", "info", "warn", "error"],
            ta, sa, Da, L = null,
            W = null,
            fa, R, v, Na, tb, kb, ea, ma, Ca = false,
            ub = false,
            Va, nb, xb, Fa = 0,
            Sa = null,
            bb, Ta = [],
            Aa, xa = null,
            Hb, Ia, qb, Ma, cb, gb, Qa, qa, za =
            Array.prototype.slice,
            ua = false,
            hb, Ka, Pa, yb, na, Fb, Ja, db, Ib = 0,
            Ab, vb = p.match(/(ipad|iphone|ipod)/i),
            ob = p.match(/android/i),
            Ga = p.match(/msie/i),
            Ha = p.match(/webkit/i),
            pb = p.match(/safari/i) && !p.match(/chrome/i),
            Rb = p.match(/opera/i),
            Mb = p.match(/(mobile|pre\/|xoom)/i) || vb || ob,
            $b = !s.match(/usehtml5audio/i) && !s.match(/sm2\-ignorebadua/i) && pb && !p.match(/silk/i) && p.match(/OS X 10_6_([3-7])/i),
            ac = b.console !== c && console.log !== c,
            Nb = r.hasFocus !== c ? r.hasFocus() : null,
            Ya = pb && (r.hasFocus === c || !r.hasFocus()),
            bc = !Ya,
            gc =
            /(mp3|mp4|mpa|m4a|m4b)/i,
            Za = r.location ? r.location.protocol.match(/http/i) : null,
            Sb = Za ? "" : "http://",
            Tb = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
            jb = ["mpeg4", "aac", "flv", "mov", "mp4", "m4v", "f4v", "m4a", "m4b", "mp4v", "3gp", "3g2"],
            sb = RegExp("\\.(" + jb.join("|") + ")(\\?.*)?$", "i");
        this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;
        this.useAltURL = !Za;
        var hc;
        try {
            hc = Audio !== c && (Rb && opera !== c && 10 > opera.version() ? new Audio(null) : new Audio).canPlayType !== c
        } catch (nc) {
            hc =
                false
        }
        this.hasHTML5 = hc;
        this.setup = function (b) {
            var d = !l.url;
            b !== c && K && xa && l.ok() && (b.flashVersion !== c || b.url !== c || b.html5Test !== c) && ea(fa("setupLate"));
            N(b);
            if (!ua)
                if (Mb) {
                    if (!l.setupOptions.ignoreMobileRestrictions || l.setupOptions.forceUseGlobalHTML5Audio) {
                        Ta.push(Y.globalHTML5);
                        ua = true
                    }
                } else l.setupOptions.forceUseGlobalHTML5Audio && (Ta.push(Y.globalHTML5), ua = true);
            if (!Ab && Mb)
                if (l.setupOptions.ignoreMobileRestrictions) Ta.push(Y.ignoreMobile);
                else if (l.setupOptions.useHTML5Audio && !l.setupOptions.preferFlash ||
                l._wD(Y.mobileUA), l.setupOptions.useHTML5Audio = true, l.setupOptions.preferFlash = false, vb) l.ignoreFlash = true;
                else if (ob && !p.match(/android\s2\.3/i) || !ob) {
                    l._wD(Y.globalHTML5);
                    ua = true
                }
            b && (d && x && b.url !== c && l.beginDelayedInit(), x || b.url === c || "complete" !== r.readyState || setTimeout(da, 1));
            Ab = true;
            return l
        };
        this.supported = this.ok = function () {
            return xa ? K && !P : l.useHTML5Audio && l.hasHTML5
        };
        this.getMovie = function (c) {
            return q(c) || r[c] || b[c]
        };
        this.createSound = function (b, d) {
            function e() {
                g = tb(g);
                l.sounds[g.id] = new k(g);
                l.soundIDs.push(g.id);
                return l.sounds[g.id]
            }
            var f, g;
            f = null;
            f = "soundManager.createSound(): " + fa(K ? "notOK" : "notReady");
            if (!K || !l.ok()) return ea(f), false;
            d !== c && (b = {
                id: b,
                url: d
            });
            g = J(b);
            g.url = bb(g.url);
            g.id === c && (g.id = l.setupOptions.idPrefix + Ib++);
            g.id.toString().charAt(0).match(/^[0-9]$/) && l._wD("soundManager.createSound(): " + fa("badID", g.id), 2);
            l._wD("soundManager.createSound(): " + g.id + (g.url ? " (" + g.url + ")" : ""), 1);
            if (ma(g.id, true)) return l._wD("soundManager.createSound(): " + g.id + " exists", 1), l.sounds[g.id];
            if (Ia(g)) {
                f = e();
                l.html5Only || l._wD(g.id + ": Using HTML5");
                f._setup_html5(g)
            } else {
                if (l.html5Only) return l._wD(g.id + ": No HTML5 support for this sound, and no Flash. Exiting."), e();
                if (l.html5.usingFlash && g.url && g.url.match(/data\:/i)) return l._wD(g.id + ": data: URIs not supported via Flash. Exiting."), e();
                8 < w && (null === g.isMovieStar && (g.isMovieStar = !(!g.serverURL && !(g.type && g.type.match(Tb) || g.url && g.url.match(sb)))), g.isMovieStar && (l._wD("soundManager.createSound(): using MovieStar handling"), 1 < g.loops &&
                    D("noNSLoop")));
                g = kb(g, "soundManager.createSound(): ");
                f = e();
                8 === w ? n._createSound(g.id, g.loops || 1, g.usePolicyFile) : (n._createSound(g.id, g.url, g.usePeakData, g.useWaveformData, g.useEQData, g.isMovieStar, g.isMovieStar ? g.bufferTime : false, g.loops || 1, g.serverURL, g.duration || null, g.autoPlay, true, g.autoLoad, g.usePolicyFile), g.serverURL || (f.connected = true, g.onconnect && g.onconnect.apply(f)));
                g.serverURL || !g.autoLoad && !g.autoPlay || f.load(g)
            } !g.serverURL && g.autoPlay && f.play();
            return f
        };
        this.destroySound = function (b,
            c) {
            if (!ma(b)) return false;
            var d = l.sounds[b],
                e;
            d.stop();
            d._iO = {};
            d.unload();
            for (e = 0; e < l.soundIDs.length; e++)
                if (l.soundIDs[e] === b) {
                    l.soundIDs.splice(e, 1);
                    break
                }
            c || d.destruct(true);
            delete l.sounds[b];
            return true
        };
        this.load = function (b, c) {
            return ma(b) ? l.sounds[b].load(c) : false
        };
        this.unload = function (b) {
            return ma(b) ? l.sounds[b].unload() : false
        };
        this.onposition = this.onPosition = function (b, c, d, e) {
            return ma(b) ? l.sounds[b].onposition(c, d, e) : false
        };
        this.clearOnPosition = function (b, c, d) {
            return ma(b) ? l.sounds[b].clearOnPosition(c,
                d) : false
        };
        this.start = this.play = function (b, c) {
            var d = null,
                e = c && !(c instanceof Object);
            if (!K || !l.ok()) return ea("soundManager.play(): " + fa(K ? "notOK" : "notReady")), false;
            if (ma(b, e)) e && (c = {
                url: c
            });
            else {
                if (!e) return false;
                e && (c = {
                    url: c
                });
                c && c.url && (l._wD('soundManager.play(): Attempting to create "' + b + '"', 1), c.id = b, d = l.createSound(c).play())
            }
            null === d && (d = l.sounds[b].play(c));
            return d
        };
        this.setPosition = function (b, c) {
            return ma(b) ? l.sounds[b].setPosition(c) : false
        };
        this.stop = function (b) {
            if (!ma(b)) return false;
            l._wD("soundManager.stop(" + b + ")", 1);
            return l.sounds[b].stop()
        };
        this.stopAll = function () {
            var b;
            l._wD("soundManager.stopAll()", 1);
            for (b in l.sounds) l.sounds.hasOwnProperty(b) && l.sounds[b].stop()
        };
        this.pause = function (b) {
            return ma(b) ? l.sounds[b].pause() : false
        };
        this.pauseAll = function () {
            var b;
            for (b = l.soundIDs.length - 1; 0 <= b; b--) l.sounds[l.soundIDs[b]].pause()
        };
        this.resume = function (b) {
            return ma(b) ? l.sounds[b].resume() : false
        };
        this.resumeAll = function () {
            var b;
            for (b = l.soundIDs.length - 1; 0 <= b; b--) l.sounds[l.soundIDs[b]].resume()
        };
        this.togglePause = function (b) {
            return ma(b) ? l.sounds[b].togglePause() : false
        };
        this.setPan = function (b, c) {
            return ma(b) ? l.sounds[b].setPan(c) : false
        };
        this.setVolume = function (b, d) {
            var e, f;
            if (b === c || isNaN(b) || d !== c) return ma(b) ? l.sounds[b].setVolume(d) : false;
            e = 0;
            for (f = l.soundIDs.length; e < f; e++) l.sounds[l.soundIDs[e]].setVolume(b)
        };
        this.mute = function (b) {
            var c = 0;
            b instanceof String && (b = null);
            if (b) {
                if (!ma(b)) return false;
                l._wD('soundManager.mute(): Muting "' + b + '"');
                return l.sounds[b].mute()
            }
            l._wD("soundManager.mute(): Muting all sounds");
            for (c = l.soundIDs.length - 1; 0 <= c; c--) l.sounds[l.soundIDs[c]].mute();
            return l.muted = true
        };
        this.muteAll = function () {
            l.mute()
        };
        this.unmute = function (b) {
            b instanceof String && (b = null);
            if (b) {
                if (!ma(b)) return false;
                l._wD('soundManager.unmute(): Unmuting "' + b + '"');
                return l.sounds[b].unmute()
            }
            l._wD("soundManager.unmute(): Unmuting all sounds");
            for (b = l.soundIDs.length - 1; 0 <= b; b--) l.sounds[l.soundIDs[b]].unmute();
            l.muted = false;
            return true
        };
        this.unmuteAll = function () {
            l.unmute()
        };
        this.toggleMute = function (b) {
            return ma(b) ?
                l.sounds[b].toggleMute() : false
        };
        this.getMemoryUse = function () {
            var b = 0;
            n && 8 !== w && (b = parseInt(n._getMemoryUse(), 10));
            return b
        };
        this.disable = function (d) {
            var e;
            d === c && (d = false);
            if (P) return false;
            P = true;
            D("shutdown", 1);
            for (e = l.soundIDs.length - 1; 0 <= e; e--) ta(l.sounds[l.soundIDs[e]]);
            I(d);
            qa.remove(b, "load", E);
            return true
        };
        this.canPlayMIME = function (b) {
            var c;
            l.hasHTML5 && (c = qb({
                type: b
            }));
            !c && xa && (c = b && l.ok() ? !!(8 < w && b.match(Tb) || b.match(l.mimePattern)) : null);
            return c
        };
        this.canPlayURL = function (b) {
            var c;
            l.hasHTML5 &&
                (c = qb({
                    url: b
                }));
            !c && xa && (c = b && l.ok() ? !!b.match(l.filePattern) : null);
            return c
        };
        this.canPlayLink = function (b) {
            return b.type !== c && b.type && l.canPlayMIME(b.type) ? true : l.canPlayURL(b.href)
        };
        this.getSoundById = function (b, c) {
            if (!b) return null;
            var d = l.sounds[b];
            d || c || l._wD('soundManager.getSoundById(): Sound "' + b + '" not found.', 2);
            return d
        };
        this.onready = function (c, d) {
            if ("function" === typeof c) {
                K && l._wD(fa("queue", "onready"));
                d || (d = b);
                Q("onready", c, d);
                B()
            } else throw fa("needFunction", "onready");
            return true
        };
        this.ontimeout =
            function (c, d) {
                if ("function" === typeof c) {
                    K && l._wD(fa("queue", "ontimeout"));
                    d || (d = b);
                    Q("ontimeout", c, d);
                    B({
                        type: "ontimeout"
                    })
                } else throw fa("needFunction", "ontimeout");
                return true
            };
        this._writeDebug = function (b, d) {
            var e, f;
            if (!l.setupOptions.debugMode) return false;
            if (ac && l.useConsole) {
                if (d && "object" === typeof d) console.log(b, d);
                else if (va[d] !== c) console[va[d]](b);
                else console.log(b);
                if (l.consoleOnly) return true
            }
            e = q("soundmanager-debug");
            if (!e) return false;
            f = r.createElement("div");
            0 === ++F % 2 && (f.className =
                "sm2-alt");
            d = d === c ? 0 : parseInt(d, 10);
            f.appendChild(r.createTextNode(b));
            d && (2 <= d && (f.style.fontWeight = "bold"), 3 === d && (f.style.color = "#ff3333"));
            e.insertBefore(f, e.firstChild);
            return true
        }; -1 !== s.indexOf("sm2-debug=alert") && (this._writeDebug = function (c) {
            b.alert(c)
        });
        this._wD = this._writeDebug;
        this._debug = function () {
            var b, c;
            D("currentObj", 1);
            b = 0;
            for (c = l.soundIDs.length; b < c; b++) l.sounds[l.soundIDs[b]]._debug()
        };
        this.reboot = function (c, d) {
            l.soundIDs.length && l._wD("Destroying " + l.soundIDs.length + " SMSound object" +
                (1 !== l.soundIDs.length ? "s" : "") + "...");
            var e, f, g;
            for (e = l.soundIDs.length - 1; 0 <= e; e--) l.sounds[l.soundIDs[e]].destruct();
            if (n) try {
                Ga && (W = n.innerHTML);
                L = n.parentNode.removeChild(n)
            } catch (h) {
                D("badRemove", 2)
            }
            W = L = xa = n = null;
            l.enabled = x = K = Ca = ub = G = H = P = ua = l.swfLoaded = false;
            l.soundIDs = [];
            l.sounds = {};
            Ib = 0;
            Ab = false;
            if (c) z = [];
            else
                for (e in z)
                    if (z.hasOwnProperty(e)) {
                        f = 0;
                        for (g = z[e].length; f < g; f++) z[e][f].fired = false
                    }
            d || l._wD("soundManager: Rebooting...");
            l.html5 = {
                usingFlash: null
            };
            l.flash = {};
            l.html5Only = false;
            l.ignoreFlash =
                false;
            b.setTimeout(function () {
                d || l.beginDelayedInit()
            }, 20);
            return l
        };
        this.reset = function () {
            D("reset");
            return l.reboot(true, true)
        };
        this.getMoviePercent = function () {
            return n && "PercentLoaded" in n ? n.PercentLoaded() : null
        };
        this.beginDelayedInit = function () {
            T = true;
            da();
            setTimeout(function () {
                if (ub) return false;
                ka();
                ba();
                return ub = true
            }, 20);
            Z()
        };
        this.destruct = function () {
            l._wD("soundManager.destruct()");
            l.disable(true)
        };
        k = function (b) {
            var d, e, f = this,
                g, h, j, k, o, s, p = false,
                q = [],
                t = 0,
                L, r, u = null,
                v;
            e = d = null;
            this.sID =
                this.id = b.id;
            this.url = b.url;
            this._iO = this.instanceOptions = this.options = J(b);
            this.pan = this.options.pan;
            this.volume = this.options.volume;
            this.isHTML5 = false;
            this._a = null;
            v = this.url ? false : true;
            this.id3 = {};
            this._debug = function () {
                l._wD(f.id + ": Merged options:", f.options)
            };
            this.load = function (b) {
                var d = null,
                    e;
                b !== c ? f._iO = J(b, f.options) : (b = f.options, f._iO = b, u && u !== f.url && (D("manURL"), f._iO.url = f.url, f.url = null));
                f._iO.url || (f._iO.url = f.url);
                f._iO.url = bb(f._iO.url);
                e = f.instanceOptions = f._iO;
                l._wD(f.id + ": load (" +
                    e.url + ")");
                if (!e.url && !f.url) return l._wD(f.id + ": load(): url is unassigned. Exiting.", 2), f;
                f.isHTML5 || 8 !== w || f.url || e.autoPlay || l._wD(f.id + ": Flash 8 load() limitation: Wait for onload() before calling play().", 1);
                if (e.url === f.url && 0 !== f.readyState && 2 !== f.readyState) return D("onURL", 1), 3 === f.readyState && e.onload && db(f, function () {
                    e.onload.apply(f, [!!f.duration])
                }), f;
                f.loaded = false;
                f.readyState = 1;
                f.playState = 0;
                f.id3 = {};
                if (Ia(e)) {
                    d = f._setup_html5(e);
                    d._called_load ? l._wD(f.id + ": Ignoring request to load again") :
                        (f._html5_canplay = false, f.url !== e.url && (l._wD(D("manURL") + ": " + e.url), f._a.src = e.url, f.setPosition(0)), f._a.autobuffer = "auto", f._a.preload = "auto", f._a._called_load = true)
                } else {
                    if (l.html5Only) return l._wD(f.id + ": No flash support. Exiting."), f;
                    if (f._iO.url && f._iO.url.match(/data\:/i)) return l._wD(f.id + ": data: URIs not supported via Flash. Exiting."), f;
                    try {
                        f.isHTML5 = false;
                        f._iO = kb(tb(e));
                        f._iO.autoPlay && (f._iO.position || f._iO.from) && (l._wD(f.id + ": Disabling autoPlay because of non-zero offset case"),
                            f._iO.autoPlay = false);
                        e = f._iO;
                        8 === w ? n._load(f.id, e.url, e.stream, e.autoPlay, e.usePolicyFile) : n._load(f.id, e.url, !!e.stream, !!e.autoPlay, e.loops || 1, !!e.autoLoad, e.usePolicyFile)
                    } catch (g) {
                        D("smError", 2);
                        C("onload", false);
                        oa({
                            type: "SMSOUND_LOAD_JS_EXCEPTION",
                            fatal: true
                        })
                    }
                }
                f.url = e.url;
                return f
            };
            this.unload = function () {
                0 !== f.readyState && (l._wD(f.id + ": unload()"), f.isHTML5 ? (k(), f._a && (f._a.pause(), u = cb(f._a))) : 8 === w ? n._unload(f.id, "about:blank") : n._unload(f.id), g());
                return f
            };
            this.destruct = function (b) {
                l._wD(f.id +
                    ": Destruct");
                f.isHTML5 ? (k(), f._a && (f._a.pause(), cb(f._a), ua || j(), f._a._s = null, f._a = null)) : (f._iO.onfailure = null, n._destroySound(f.id));
                b || l.destroySound(f.id, true)
            };
            this.start = this.play = function (b, d) {
                var e, g, h, j, k, m = true,
                    m = null;
                e = f.id + ": play(): ";
                d = d === c ? true : d;
                b || (b = {});
                f.url && (f._iO.url = f.url);
                f._iO = J(f._iO, f.options);
                f._iO = J(b, f._iO);
                f._iO.url = bb(f._iO.url);
                f.instanceOptions = f._iO;
                if (!f.isHTML5 && f._iO.serverURL && !f.connected) return f.getAutoPlay() || (l._wD(e + " Netstream not connected yet - setting autoPlay"),
                    f.setAutoPlay(true)), f;
                Ia(f._iO) && (f._setup_html5(f._iO), o());
                1 !== f.playState || f.paused || ((g = f._iO.multiShot) ? l._wD(e + "Already playing (multi-shot)", 1) : (l._wD(e + "Already playing (one-shot)", 1), f.isHTML5 && f.setPosition(f._iO.position), m = f));
                if (null !== m) return m;
                b.url && b.url !== f.url && (f.readyState || f.isHTML5 || 8 !== w || !v ? f.load(f._iO) : v = false);
                f.loaded ? l._wD(e.substr(0, e.lastIndexOf(":"))) : 0 === f.readyState ? (l._wD(e + "Attempting to load"), f.isHTML5 || l.html5Only ? f.isHTML5 ? f.load(f._iO) : (l._wD(e + "Unsupported type. Exiting."),
                    m = f) : (f._iO.autoPlay = true, f.load(f._iO)), f.instanceOptions = f._iO) : 2 === f.readyState ? (l._wD(e + "Could not load - exiting", 2), m = f) : l._wD(e + "Loading - attempting to play...");
                if (null !== m) return m;
                !f.isHTML5 && 9 === w && 0 < f.position && f.position === f.duration && (l._wD(e + "Sound at end, resetting to position: 0"), b.position = 0);
                if (f.paused && 0 <= f.position && (!f._iO.serverURL || 0 < f.position)) {
                    l._wD(e + "Resuming from paused state", 1);
                    f.resume()
                } else {
                    f._iO = J(b, f._iO);
                    if ((!f.isHTML5 && null !== f._iO.position && 0 < f._iO.position ||
                            null !== f._iO.from && 0 < f._iO.from || null !== f._iO.to) && 0 === f.instanceCount && 0 === f.playState && !f._iO.serverURL) {
                        g = function () {
                            f._iO = J(b, f._iO);
                            f.play(f._iO)
                        };
                        f.isHTML5 && !f._html5_canplay ? (l._wD(e + "Beginning load for non-zero offset case"), f.load({
                            _oncanplay: g
                        }), m = false) : f.isHTML5 || f.loaded || f.readyState && 2 === f.readyState || (l._wD(e + "Preloading for non-zero offset case"), f.load({
                            onload: g
                        }), m = false);
                        if (null !== m) return m;
                        f._iO = r()
                    } (!f.instanceCount || f._iO.multiShotEvents || f.isHTML5 && f._iO.multiShot && !ua || !f.isHTML5 &&
                        8 < w && !f.getAutoPlay()) && f.instanceCount++;
                    f._iO.onposition && 0 === f.playState && s(f);
                    f.playState = 1;
                    f.paused = false;
                    f.position = f._iO.position === c || isNaN(f._iO.position) ? 0 : f._iO.position;
                    f.isHTML5 || (f._iO = kb(tb(f._iO)));
                    f._iO.onplay && d && (f._iO.onplay.apply(f), p = true);
                    f.setVolume(f._iO.volume, true);
                    f.setPan(f._iO.pan, true);
                    f.isHTML5 ? 2 > f.instanceCount ? (o(), e = f._setup_html5(), f.setPosition(f._iO.position), e.play()) : (l._wD(f.id + ": Cloning Audio() for instance #" + f.instanceCount + "..."), h = new Audio(f._iO.url),
                        j = function () {
                            qa.remove(h, "ended", j);
                            f._onfinish(f);
                            cb(h);
                            h = null
                        }, k = function () {
                            qa.remove(h, "canplay", k);
                            try {
                                h.currentTime = f._iO.position / 1E3
                            } catch (b) {
                                ea(f.id + ": multiShot play() failed to apply position of " + f._iO.position / 1E3)
                            }
                            h.play()
                        }, qa.add(h, "ended", j), f._iO.volume !== c && (h.volume = Math.max(0, Math.min(1, f._iO.volume / 100))), f.muted && (h.muted = true), f._iO.position ? qa.add(h, "canplay", k) : h.play()) : (m = n._start(f.id, f._iO.loops || 1, 9 === w ? f.position : f.position / 1E3, f._iO.multiShot || false), 9 !== w || m || (l._wD(e +
                        "No sound hardware, or 32-sound ceiling hit", 2), f._iO.onplayerror && f._iO.onplayerror.apply(f)))
                }
                return f
            };
            this.stop = function (b) {
                var c = f._iO;
                1 === f.playState && (l._wD(f.id + ": stop()"), f._onbufferchange(0), f._resetOnPosition(0), f.paused = false, f.isHTML5 || (f.playState = 0), L(), c.to && f.clearOnPosition(c.to), f.isHTML5 ? f._a && (b = f.position, f.setPosition(0), f.position = b, f._a.pause(), f.playState = 0, f._onTimer(), k()) : (n._stop(f.id, b), c.serverURL && f.unload()), f.instanceCount = 0, f._iO = {}, c.onstop && c.onstop.apply(f));
                return f
            };
            this.setAutoPlay = function (b) {
                l._wD(f.id + ": Autoplay turned " + (b ? "on" : "off"));
                f._iO.autoPlay = b;
                f.isHTML5 || (n._setAutoPlay(f.id, b), b && !f.instanceCount && 1 === f.readyState && (f.instanceCount++, l._wD(f.id + ": Incremented instance count to " + f.instanceCount)))
            };
            this.getAutoPlay = function () {
                return f._iO.autoPlay
            };
            this.setPosition = function (b) {
                b === c && (b = 0);
                var d = f.isHTML5 ? Math.max(b, 0) : Math.min(f.duration || f._iO.duration, Math.max(b, 0));
                f.position = d;
                b = f.position / 1E3;
                f._resetOnPosition(f.position);
                f._iO.position =
                    d;
                if (f.isHTML5) {
                    if (f._a) {
                        if (f._html5_canplay) {
                            if (f._a.currentTime !== b) {
                                l._wD(f.id + ": setPosition(" + b + ")");
                                try {
                                    f._a.currentTime = b;
                                    (0 === f.playState || f.paused) && f._a.pause()
                                } catch (e) {
                                    l._wD(f.id + ": setPosition(" + b + ") failed: " + e.message, 2)
                                }
                            }
                        } else if (b) return l._wD(f.id + ": setPosition(" + b + "): Cannot seek yet, sound not ready", 2), f;
                        f.paused && f._onTimer(true)
                    }
                } else {
                    b = 9 === w ? f.position : b;
                    f.readyState && 2 !== f.readyState && n._setPosition(f.id, b, f.paused || !f.playState, f._iO.multiShot)
                }
                return f
            };
            this.pause = function (b) {
                if (f.paused ||
                    0 === f.playState && 1 !== f.readyState) return f;
                l._wD(f.id + ": pause()");
                f.paused = true;
                f.isHTML5 ? (f._setup_html5().pause(), k()) : (b || b === c) && n._pause(f.id, f._iO.multiShot);
                f._iO.onpause && f._iO.onpause.apply(f);
                return f
            };
            this.resume = function () {
                var b = f._iO;
                if (!f.paused) return f;
                l._wD(f.id + ": resume()");
                f.paused = false;
                f.playState = 1;
                f.isHTML5 ? (f._setup_html5().play(), o()) : (b.isMovieStar && !b.serverURL && f.setPosition(f.position), n._pause(f.id, b.multiShot));
                !p && b.onplay ? (b.onplay.apply(f), p = true) : b.onresume && b.onresume.apply(f);
                return f
            };
            this.togglePause = function () {
                l._wD(f.id + ": togglePause()");
                if (0 === f.playState) return f.play({
                    position: 9 !== w || f.isHTML5 ? f.position / 1E3 : f.position
                }), f;
                f.paused ? f.resume() : f.pause();
                return f
            };
            this.setPan = function (b, d) {
                b === c && (b = 0);
                d === c && (d = false);
                f.isHTML5 || n._setPan(f.id, b);
                f._iO.pan = b;
                d || (f.pan = b, f.options.pan = b);
                return f
            };
            this.setVolume = function (b, d) {
                b === c && (b = 100);
                d === c && (d = false);
                f.isHTML5 ? f._a && (l.muted && !f.muted && (f.muted = true, f._a.muted = true), f._a.volume = Math.max(0, Math.min(1, b / 100))) :
                    n._setVolume(f.id, l.muted && !f.muted || f.muted ? 0 : b);
                f._iO.volume = b;
                d || (f.volume = b, f.options.volume = b);
                return f
            };
            this.mute = function () {
                f.muted = true;
                f.isHTML5 ? f._a && (f._a.muted = true) : n._setVolume(f.id, 0);
                return f
            };
            this.unmute = function () {
                f.muted = false;
                var b = f._iO.volume !== c;
                f.isHTML5 ? f._a && (f._a.muted = false) : n._setVolume(f.id, b ? f._iO.volume : f.options.volume);
                return f
            };
            this.toggleMute = function () {
                return f.muted ? f.unmute() : f.mute()
            };
            this.onposition = this.onPosition = function (b, d, e) {
                q.push({
                    position: parseInt(b,
                        10),
                    method: d,
                    scope: e !== c ? e : f,
                    fired: false
                });
                return f
            };
            this.clearOnPosition = function (b, c) {
                var d, b = parseInt(b, 10);
                if (isNaN(b)) return false;
                for (d = 0; d < q.length; d++) b !== q[d].position || c && c !== q[d].method || (q[d].fired && t--, q.splice(d, 1))
            };
            this._processOnPosition = function () {
                var b, c;
                b = q.length;
                if (!b || !f.playState || t >= b) return false;
                for (--b; 0 <= b; b--) {
                    c = q[b];
                    !c.fired && f.position >= c.position && (c.fired = true, t++, c.method.apply(c.scope, [c.position]))
                }
                return true
            };
            this._resetOnPosition = function (b) {
                var c, d;
                c = q.length;
                if (!c) return false;
                for (--c; 0 <= c; c--) {
                    d = q[c];
                    d.fired && b <= d.position && (d.fired = false, t--)
                }
                return true
            };
            r = function () {
                var b = f._iO,
                    c = b.from,
                    d = b.to,
                    e, g;
                g = function () {
                    l._wD(f.id + ': "To" time of ' + d + " reached.");
                    f.clearOnPosition(d, g);
                    f.stop()
                };
                e = function () {
                    l._wD(f.id + ': Playing "from" ' + c);
                    if (null !== d && !isNaN(d)) f.onPosition(d, g)
                };
                null === c || isNaN(c) || (b.position = c, b.multiShot = false, e());
                return b
            };
            s = function () {
                var b, c = f._iO.onposition;
                if (c)
                    for (b in c)
                        if (c.hasOwnProperty(b)) f.onPosition(parseInt(b, 10), c[b])
            };
            L = function () {
                var b, c = f._iO.onposition;
                if (c)
                    for (b in c) c.hasOwnProperty(b) && f.clearOnPosition(parseInt(b, 10))
            };
            o = function () {
                f.isHTML5 && Va(f)
            };
            k = function () {
                f.isHTML5 && nb(f)
            };
            g = function (b) {
                b || (q = [], t = 0);
                p = false;
                f._hasTimer = null;
                f._a = null;
                f._html5_canplay = false;
                f.bytesLoaded = null;
                f.bytesTotal = null;
                f.duration = f._iO && f._iO.duration ? f._iO.duration : null;
                f.durationEstimate = null;
                f.buffered = [];
                f.eqData = [];
                f.eqData.left = [];
                f.eqData.right = [];
                f.failures = 0;
                f.isBuffering = false;
                f.instanceOptions = {};
                f.instanceCount =
                    0;
                f.loaded = false;
                f.metadata = {};
                f.readyState = 0;
                f.muted = false;
                f.paused = false;
                f.peakData = {
                    left: 0,
                    right: 0
                };
                f.waveformData = {
                    left: [],
                    right: []
                };
                f.playState = 0;
                f.position = null;
                f.id3 = {}
            };
            g();
            this._onTimer = function (b) {
                var c, g = false,
                    h = {};
                if (f._hasTimer || b) return f._a && (b || (0 < f.playState || 1 === f.readyState) && !f.paused) && (c = f._get_html5_duration(), c !== d && (d = c, f.duration = c, g = true), f.durationEstimate = f.duration, c = 1E3 * f._a.currentTime || 0, c !== e && (e = c, g = true), (g || b) && f._whileplaying(c, h, h, h, h)), g
            };
            this._get_html5_duration =
                function () {
                    var b = f._iO;
                    return (b = f._a && f._a.duration ? 1E3 * f._a.duration : b && b.duration ? b.duration : null) && !isNaN(b) && Infinity !== b ? b : null
                };
            this._apply_loop = function (b, c) {
                !b.loop && 1 < c && l._wD("Note: Native HTML5 looping is infinite.", 1);
                b.loop = 1 < c ? "loop" : ""
            };
            this._setup_html5 = function (b) {
                var b = J(f._iO, b),
                    c = ua ? m : f._a,
                    d = decodeURI(b.url),
                    e;
                ua ? d === decodeURI(hb) && (e = true) : d === decodeURI(u) && (e = true);
                if (c) {
                    if (c._s)
                        if (ua) c._s && c._s.playState && !e && c._s.stop();
                        else if (!ua && d === decodeURI(u)) return f._apply_loop(c,
                        b.loops), c;
                    e || (u && g(false), c.src = b.url, hb = u = f.url = b.url, c._called_load = false)
                } else {
                    b.autoLoad || b.autoPlay ? (f._a = new Audio(b.url), f._a.load()) : f._a = Rb && 10 > opera.version() ? new Audio(null) : new Audio;
                    c = f._a;
                    c._called_load = false;
                    ua && (m = c)
                }
                f.isHTML5 = true;
                f._a = c;
                c._s = f;
                h();
                f._apply_loop(c, b.loops);
                b.autoLoad || b.autoPlay ? f.load() : (c.autobuffer = false, c.preload = "auto");
                return c
            };
            h = function () {
                if (f._a._added_events) return false;
                var b;
                f._a._added_events = true;
                for (b in na) na.hasOwnProperty(b) && f._a && f._a.addEventListener(b,
                    na[b], false);
                return true
            };
            j = function () {
                var b;
                l._wD(f.id + ": Removing event listeners");
                f._a._added_events = false;
                for (b in na) na.hasOwnProperty(b) && f._a && f._a.removeEventListener(b, na[b], false)
            };
            this._onload = function (b) {
                var c = !!b || !f.isHTML5 && 8 === w && f.duration,
                    b = f.id + ": ";
                l._wD(b + (c ? "onload()" : "Failed to load / invalid sound?" + (f.duration ? " -" : " Zero-length duration reported.") + " (" + f.url + ")"), c ? 1 : 2);
                c || f.isHTML5 || (true === l.sandbox.noRemote && l._wD(b + fa("noNet"), 1), true === l.sandbox.noLocal && l._wD(b + fa("noLocal"),
                    1));
                f.loaded = c;
                f.readyState = c ? 3 : 2;
                f._onbufferchange(0);
                f._iO.onload && db(f, function () {
                    f._iO.onload.apply(f, [c])
                });
                return true
            };
            this._onbufferchange = function (b) {
                if (0 === f.playState || b && f.isBuffering || !b && !f.isBuffering) return false;
                f.isBuffering = 1 === b;
                f._iO.onbufferchange && (l._wD(f.id + ": Buffer state change: " + b), f._iO.onbufferchange.apply(f, [b]));
                return true
            };
            this._onsuspend = function () {
                f._iO.onsuspend && (l._wD(f.id + ": Playback suspended"), f._iO.onsuspend.apply(f));
                return true
            };
            this._onfailure = function (b,
                c, d) {
                f.failures++;
                l._wD(f.id + ": Failure (" + f.failures + "): " + b);
                if (f._iO.onfailure && 1 === f.failures) f._iO.onfailure(b, c, d);
                else l._wD(f.id + ": Ignoring failure")
            };
            this._onwarning = function (b, c, d) {
                if (f._iO.onwarning) f._iO.onwarning(b, c, d)
            };
            this._onfinish = function () {
                var b = f._iO.onfinish;
                f._onbufferchange(0);
                f._resetOnPosition(0);
                f.instanceCount && (f.instanceCount--, f.instanceCount || (L(), f.playState = 0, f.paused = false, f.instanceCount = 0, f.instanceOptions = {}, f._iO = {}, k(), f.isHTML5 && (f.position = 0)), f.instanceCount &&
                    !f._iO.multiShotEvents || !b || (l._wD(f.id + ": onfinish()"), db(f, function () {
                        b.apply(f)
                    })))
            };
            this._whileloading = function (b, c, d, e) {
                var g = f._iO;
                f.bytesLoaded = b;
                f.bytesTotal = c;
                f.duration = Math.floor(d);
                f.bufferLength = e;
                f.durationEstimate = f.isHTML5 || g.isMovieStar ? f.duration : g.duration ? f.duration > g.duration ? f.duration : g.duration : parseInt(f.bytesTotal / f.bytesLoaded * f.duration, 10);
                f.isHTML5 || (f.buffered = [{
                    start: 0,
                    end: f.duration
                }]);
                (3 !== f.readyState || f.isHTML5) && g.whileloading && g.whileloading.apply(f)
            };
            this._whileplaying =
                function (b, d, e, g, h) {
                    var j = f._iO;
                    if (isNaN(b) || null === b) return false;
                    f.position = Math.max(0, b);
                    f._processOnPosition();
                    !f.isHTML5 && 8 < w && (j.usePeakData && d !== c && d && (f.peakData = {
                        left: d.leftPeak,
                        right: d.rightPeak
                    }), j.useWaveformData && e !== c && e && (f.waveformData = {
                        left: e.split(","),
                        right: g.split(",")
                    }), j.useEQData && h !== c && h && h.leftEQ && (b = h.leftEQ.split(","), f.eqData = b, f.eqData.left = b, h.rightEQ !== c && h.rightEQ && (f.eqData.right = h.rightEQ.split(","))));
                    1 === f.playState && (f.isHTML5 || 8 !== w || f.position || !f.isBuffering ||
                        f._onbufferchange(0), j.whileplaying && j.whileplaying.apply(f));
                    return true
                };
            this._oncaptiondata = function (b) {
                l._wD(f.id + ": Caption data received.");
                f.captiondata = b;
                f._iO.oncaptiondata && f._iO.oncaptiondata.apply(f, [b])
            };
            this._onmetadata = function (b, c) {
                l._wD(f.id + ": Metadata received.");
                var d = {},
                    e, g;
                e = 0;
                for (g = b.length; e < g; e++) d[b[e]] = c[e];
                f.metadata = d;
                f._iO.onmetadata && f._iO.onmetadata.call(f, f.metadata)
            };
            this._onid3 = function (b, c) {
                l._wD(f.id + ": ID3 data received.");
                var d = [],
                    e, g;
                e = 0;
                for (g = b.length; e < g; e++) d[b[e]] =
                    c[e];
                f.id3 = J(f.id3, d);
                f._iO.onid3 && f._iO.onid3.apply(f)
            };
            this._onconnect = function (b) {
                b = 1 === b;
                l._wD(f.id + ": " + (b ? "Connected." : "Failed to connect? - " + f.url), b ? 1 : 2);
                if (f.connected = b) {
                    f.failures = 0;
                    ma(f.id) && (f.getAutoPlay() ? f.play(c, f.getAutoPlay()) : f._iO.autoLoad && f.load());
                    f._iO.onconnect && f._iO.onconnect.apply(f, [b])
                }
            };
            this._ondataerror = function (b) {
                0 < f.playState && (l._wD(f.id + ": Data error: " + b), f._iO.ondataerror && f._iO.ondataerror.apply(f))
            };
            this._debug()
        };
        ja = function () {
            return r.body || r.getElementsByTagName("div")[0]
        };
        q = function (b) {
            return r.getElementById(b)
        };
        J = function (b, d) {
            var e = b || {},
                f, g;
            f = d === c ? l.defaultOptions : d;
            for (g in f) f.hasOwnProperty(g) && e[g] === c && (e[g] = "object" !== typeof f[g] || null === f[g] ? f[g] : J(e[g], f[g]));
            return e
        };
        db = function (c, d) {
            c.isHTML5 || 8 !== w ? d() : b.setTimeout(d, 0)
        };
        U = {
            onready: 1,
            ontimeout: 1,
            defaultOptions: 1,
            flash9Options: 1,
            movieStarOptions: 1
        };
        N = function (b, d) {
            var e, f = true,
                g = d !== c,
                h = l.setupOptions;
            if (b === c) {
                f = [];
                for (e in h) h.hasOwnProperty(e) && f.push(e);
                for (e in U) U.hasOwnProperty(e) && ("object" ===
                    typeof l[e] ? f.push(e + ": {...}") : l[e] instanceof Function ? f.push(e + ": function() {...}") : f.push(e));
                l._wD(fa("setup", f.join(", ")));
                return false
            }
            for (e in b)
                if (b.hasOwnProperty(e))
                    if ("object" !== typeof b[e] || null === b[e] || b[e] instanceof Array || b[e] instanceof RegExp) g && U[d] !== c ? l[d][e] = b[e] : h[e] !== c ? (l.setupOptions[e] = b[e], l[e] = b[e]) : U[e] === c ? (ea(fa(l[e] === c ? "setupUndef" : "setupError", e), 2), f = false) : l[e] instanceof Function ? l[e].apply(l, b[e] instanceof Array ? b[e] : [b[e]]) : l[e] = b[e];
                    else if (U[e] === c) {
                        ea(fa(l[e] ===
                            c ? "setupUndef" : "setupError", e), 2);
                        f = false
                    } else return N(b[e], e);
            return f
        };
        qa = function () {
            function c(b) {
                var b = za.call(b),
                    d = b.length;
                e ? (b[1] = "on" + b[1], 3 < d && b.pop()) : 3 === d && b.push(false);
                return b
            }

            function d(b, c) {
                var g = b.shift(),
                    h = [f[c]];
                if (e) g[h](b[0], b[1]);
                else g[h].apply(g, b)
            }
            var e = b.attachEvent,
                f = {
                    add: e ? "attachEvent" : "addEventListener",
                    remove: e ? "detachEvent" : "removeEventListener"
                };
            return {
                add: function () {
                    d(c(arguments), "add")
                },
                remove: function () {
                    d(c(arguments), "remove")
                }
            }
        }();
        na = {
            abort: j(function () {
                l._wD(this._s.id +
                    ": abort")
            }),
            canplay: j(function () {
                var b = this._s,
                    d;
                if (b._html5_canplay) return true;
                b._html5_canplay = true;
                l._wD(b.id + ": canplay");
                b._onbufferchange(0);
                d = b._iO.position === c || isNaN(b._iO.position) ? null : b._iO.position / 1E3;
                if (this.currentTime !== d) {
                    l._wD(b.id + ": canplay: Setting position to " + d);
                    try {
                        this.currentTime = d
                    } catch (e) {
                        l._wD(b.id + ": canplay: Setting position of " + d + " failed: " + e.message, 2)
                    }
                }
                b._iO._oncanplay && b._iO._oncanplay()
            }),
            canplaythrough: j(function () {
                var b = this._s;
                b.loaded || (b._onbufferchange(0),
                    b._whileloading(b.bytesLoaded, b.bytesTotal, b._get_html5_duration()), b._onload(true))
            }),
            durationchange: j(function () {
                var b = this._s,
                    c;
                c = b._get_html5_duration();
                isNaN(c) || c === b.duration || (l._wD(this._s.id + ": durationchange (" + c + ")" + (b.duration ? ", previously " + b.duration : "")), b.durationEstimate = b.duration = c)
            }),
            ended: j(function () {
                var b = this._s;
                l._wD(b.id + ": ended");
                b._onfinish()
            }),
            error: j(function () {
                l._wD(this._s.id + ": HTML5 error, code " + this.error.code);
                this._s._onload(false)
            }),
            loadeddata: j(function () {
                var b =
                    this._s;
                l._wD(b.id + ": loadeddata");
                b._loaded || pb || (b.duration = b._get_html5_duration())
            }),
            loadedmetadata: j(function () {
                l._wD(this._s.id + ": loadedmetadata")
            }),
            loadstart: j(function () {
                l._wD(this._s.id + ": loadstart");
                this._s._onbufferchange(1)
            }),
            play: j(function () {
                this._s._onbufferchange(0)
            }),
            playing: j(function () {
                l._wD(this._s.id + ": playing " + String.fromCharCode(9835));
                this._s._onbufferchange(0)
            }),
            progress: j(function (b) {
                var c = this._s,
                    d, e, f, g = "progress" === b.type,
                    h = b.target.buffered,
                    j = b.loaded || 0,
                    k = b.total ||
                    1;
                c.buffered = [];
                if (h && h.length) {
                    d = 0;
                    for (e = h.length; d < e; d++) c.buffered.push({
                        start: 1E3 * h.start(d),
                        end: 1E3 * h.end(d)
                    });
                    d = 1E3 * (h.end(0) - h.start(0));
                    j = Math.min(1, d / (1E3 * b.target.duration));
                    if (g && 1 < h.length) {
                        f = [];
                        e = h.length;
                        for (d = 0; d < e; d++) f.push(1E3 * b.target.buffered.start(d) + "-" + 1E3 * b.target.buffered.end(d));
                        l._wD(this._s.id + ": progress, timeRanges: " + f.join(", "))
                    }
                    g && !isNaN(j) && l._wD(this._s.id + ": progress, " + Math.floor(100 * j) + "% loaded")
                }
                isNaN(j) || (c._whileloading(j, k, c._get_html5_duration()), j && k &&
                    j === k && na.canplaythrough.call(this, b))
            }),
            ratechange: j(function () {
                l._wD(this._s.id + ": ratechange")
            }),
            suspend: j(function (b) {
                var c = this._s;
                l._wD(this._s.id + ": suspend");
                na.progress.call(this, b);
                c._onsuspend()
            }),
            stalled: j(function () {
                l._wD(this._s.id + ": stalled")
            }),
            timeupdate: j(function () {
                this._s._onTimer()
            }),
            waiting: j(function () {
                var b = this._s;
                l._wD(this._s.id + ": waiting");
                b._onbufferchange(1)
            })
        };
        Ia = function (b) {
            return b && (b.type || b.url || b.serverURL) ? b.serverURL || b.type && h(b.type) ? false : b.type ? qb({
                type: b.type
            }) :
                qb({
                    url: b.url
                }) || l.html5Only || b.url.match(/data\:/i) : false
        };
        cb = function (b) {
            var d;
            b && (d = pb ? "about:blank" : l.html5.canPlayType("audio/wav") ? "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==" : "about:blank", b.src = d, b._called_unload !== c && (b._called_load = false));
            ua && (hb = null);
            return d
        };
        qb = function (b) {
            if (!l.useHTML5Audio || !l.hasHTML5) return false;
            var d = b.url || null,
                b = b.type || null,
                e = l.audioFormats,
                f;
            if (b && l.html5[b] !== c) return l.html5[b] && !h(b);
            if (!Ma) {
                Ma = [];
                for (f in e) e.hasOwnProperty(f) &&
                    (Ma.push(f), e[f].related && (Ma = Ma.concat(e[f].related)));
                Ma = RegExp("\\.(" + Ma.join("|") + ")(\\?.*)?$", "i")
            } (f = d ? d.toLowerCase().match(Ma) : null) && f.length ? f = f[1] : b && (d = b.indexOf(";"), f = (-1 !== d ? b.substr(0, d) : b).substr(6));
            f && l.html5[f] !== c ? d = l.html5[f] && !h(f) : (b = "audio/" + f, d = l.html5.canPlayType({
                type: b
            }), d = (l.html5[f] = d) && l.html5[b] && !h(b));
            return d
        };
        Qa = function () {
            function b(c) {
                var e, f = e = false;
                if (!d || "function" !== typeof d.canPlayType) return e;
                if (c instanceof Array) {
                    j = 0;
                    for (e = c.length; j < e; j++)
                        if (l.html5[c[j]] ||
                            d.canPlayType(c[j]).match(l.html5Test)) {
                            f = true;
                            l.html5[c[j]] = true;
                            l.flash[c[j]] = !!c[j].match(gc)
                        }
                    e = f
                } else {
                    c = d && "function" === typeof d.canPlayType ? d.canPlayType(c) : false;
                    e = !(!c || !c.match(l.html5Test))
                }
                return e
            }
            if (!l.useHTML5Audio || !l.hasHTML5) return xa = l.html5.usingFlash = true, false;
            var d = Audio !== c ? Rb && 10 > opera.version() ? new Audio(null) : new Audio : null,
                e, f, g = {},
                h, j;
            h = l.audioFormats;
            for (e in h)
                if (h.hasOwnProperty(e) && (f = "audio/" + e, g[e] = b(h[e].type), g[f] = g[e], e.match(gc) ? (l.flash[e] = true, l.flash[f] = true) :
                        (l.flash[e] = false, l.flash[f] = false), h[e] && h[e].related))
                    for (j = h[e].related.length - 1; 0 <= j; j--) {
                        g["audio/" + h[e].related[j]] = g[e];
                        l.html5[h[e].related[j]] = g[e];
                        l.flash[h[e].related[j]] = g[e]
                    }
            g.canPlayType = d ? b : null;
            l.html5 = J(l.html5, g);
            l.html5.usingFlash = Hb();
            xa = l.html5.usingFlash;
            return true
        };
        Y = {
            notReady: "Unavailable - wait until onready() has fired.",
            notOK: "Audio support is not available.",
            domError: "soundManagerexception caught while appending SWF to DOM.",
            spcWmode: "Removing wmode, preventing known SWF loading issue(s)",
            swf404: "soundManager: Verify that %s is a valid path.",
            tryDebug: "Try soundManager.debugFlash = true for more security details (output goes to SWF.)",
            checkSWF: "See SWF output for more debug info.",
            localFail: "soundManager: Non-HTTP page (" + r.location.protocol + " URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",
            waitFocus: "soundManager: Special case: Waiting for SWF to load with window focus...",
            waitForever: "soundManager: Waiting indefinitely for Flash (will recover if unblocked)...",
            waitSWF: "soundManager: Waiting for 100% SWF load...",
            needFunction: "soundManager: Function object expected for %s",
            badID: 'Sound ID "%s" should be a string, starting with a non-numeric character',
            currentObj: "soundManager: _debug(): Current sound objects",
            waitOnload: "soundManager: Waiting for window.onload()",
            docLoaded: "soundManager: Document already loaded",
            onload: "soundManager: initComplete(): calling soundManager.onload()",
            onloadOK: "soundManager.onload() complete",
            didInit: "soundManager: init(): Already called?",
            secNote: "Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
            badRemove: "soundManager: Failed to remove Flash node.",
            shutdown: "soundManager.disable(): Shutting down",
            queue: "soundManager: Queueing %s handler",
            smError: "SMSound.load(): Exception: JS-Flash communication failed, or JS error.",
            fbTimeout: "No flash response, applying .swf_timedout CSS...",
            fbLoaded: "Flash loaded",
            fbHandler: "soundManager: flashBlockHandler()",
            manURL: "SMSound.load(): Using manually-assigned URL",
            onURL: "soundManager.load(): current URL already assigned.",
            badFV: 'soundManager.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
            as2loop: "Note: Setting stream:false so looping can work (flash 8 limitation)",
            noNSLoop: "Note: Looping not implemented for MovieStar formats",
            needfl9: "Note: Switching to flash 9, required for MP4 formats.",
            mfTimeout: "Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",
            needFlash: "soundManager: Fatal error: Flash is needed to play some required formats, but is not available.",
            gotFocus: "soundManager: Got window focus.",
            policy: "Enabling usePolicyFile for data access",
            setup: "soundManager.setup(): allowed parameters: %s",
            setupError: 'soundManager.setup(): "%s" cannot be assigned with this method.',
            setupUndef: 'soundManager.setup(): Could not find option "%s"',
            setupLate: "soundManager.setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",
            noURL: "soundManager: Flash URL required. Call soundManager.setup({url:...}) to get started.",
            sm2Loaded: "SoundManager 2: Ready. " + String.fromCharCode(10003),
            reset: "soundManager.reset(): Removing event callbacks",
            mobileUA: "Mobile UA detected, preferring HTML5 by default.",
            globalHTML5: "Using singleton HTML5 Audio() pattern for this device.",
            ignoreMobile: "Ignoring mobile restrictions for this device."
        };
        fa = function () {
            var b, c, d, e;
            b = za.call(arguments);
            c = b.shift();
            if ((e = Y && Y[c] ? Y[c] : "") && b && b.length) {
                c = 0;
                for (d = b.length; c < d; c++) e = e.replace("%s", b[c])
            }
            return e
        };
        tb = function (b) {
            8 === w && 1 < b.loops && b.stream && (D("as2loop"), b.stream = false);
            return b
        };
        kb = function (b, c) {
            b && !b.usePolicyFile && (b.onid3 || b.usePeakData || b.useWaveformData || b.useEQData) && (l._wD((c || "") + fa("policy")), b.usePolicyFile = true);
            return b
        };
        ea = function (b) {
            ac && console.warn !== c ? console.warn(b) : l._wD(b)
        };
        o = function () {
            return false
        };
        ta = function (b) {
            for (var c in b) b.hasOwnProperty(c) && "function" === typeof b[c] && (b[c] = o)
        };
        sa = function (b) {
            b === c && (b = false);
            (P || b) && l.disable(b)
        };
        Da = function (b) {
            if (b)
                if (b.match(/\.swf(\?.*)?$/i)) {
                    if (b.substr(b.toLowerCase().lastIndexOf(".swf?") + 4)) return b
                } else b.lastIndexOf("/") !== b.length - 1 && (b = b + "/");
            b = (b && -1 !== b.lastIndexOf("/") ? b.substr(0, b.lastIndexOf("/") + 1) : "./") + l.movieURL;
            l.noSWFCache && (b = b + ("?ts=" + (new Date).getTime()));
            return b
        };
        X = function () {
            w = parseInt(l.flashVersion, 10);
            8 !== w && 9 !== w && (l._wD(fa("badFV", w, 8)), l.flashVersion = w = 8);
            var b = l.debugMode || l.debugFlash ? "_debug.swf" : ".swf";
            l.useHTML5Audio && !l.html5Only &&
                l.audioFormats.mp4.required && 9 > w && (l._wD(fa("needfl9")), l.flashVersion = w = 9);
            l.version = l.versionNumber + (l.html5Only ? " (HTML5-only mode)" : 9 === w ? " (AS3/Flash 9)" : " (AS2/Flash 8)");
            8 < w ? (l.defaultOptions = J(l.defaultOptions, l.flash9Options), l.features.buffering = true, l.defaultOptions = J(l.defaultOptions, l.movieStarOptions), l.filePatterns.flash9 = RegExp("\\.(mp3|" + jb.join("|") + ")(\\?.*)?$", "i"), l.features.movieStar = true) : l.features.movieStar = false;
            l.filePattern = l.filePatterns[8 !== w ? "flash9" : "flash8"];
            l.movieURL =
                (8 === w ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", b);
            l.features.peakData = l.features.waveformData = l.features.eqData = 8 < w
        };
        pa = function (b, c) {
            if (!n) return false;
            n._setPolling(b, c)
        };
        V = function () {
            l.debugURLParam.test(s) && (l.setupOptions.debugMode = l.debugMode = true);
            if (q(l.debugID)) return false;
            var b, c, d, e;
            if (l.debugMode && !(q(l.debugID) || ac && l.useConsole && l.consoleOnly)) {
                b = r.createElement("div");
                b.id = l.debugID + "-toggle";
                c = {
                    position: "fixed",
                    bottom: "0px",
                    right: "0px",
                    width: "1.2em",
                    height: "1.2em",
                    lineHeight: "1.2em",
                    margin: "2px",
                    textAlign: "center",
                    border: "1px solid #999",
                    cursor: "pointer",
                    background: "#fff",
                    color: "#333",
                    zIndex: 10001
                };
                b.appendChild(r.createTextNode("-"));
                b.onclick = Na;
                b.title = "Toggle SM2 debug console";
                p.match(/msie 6/i) && (b.style.position = "absolute", b.style.cursor = "hand");
                for (e in c) c.hasOwnProperty(e) && (b.style[e] = c[e]);
                c = r.createElement("div");
                c.id = l.debugID;
                c.style.display = l.debugMode ? "block" : "none";
                if (l.debugMode && !q(b.id)) {
                    try {
                        d = ja();
                        d.appendChild(b)
                    } catch (f) {
                        throw Error(fa("domError") +
                            " \n" + f.toString());
                    }
                    d.appendChild(c)
                }
            }
        };
        ma = this.getSoundById;
        D = function (b, c) {
            return b ? l._wD(fa(b), c) : ""
        };
        Na = function () {
            var b = q(l.debugID),
                c = q(l.debugID + "-toggle");
            if (!b) return false;
            A ? (c.innerHTML = "+", b.style.display = "none") : (c.innerHTML = "-", b.style.display = "block");
            A = !A
        };
        C = function (d, e, f) {
            if (b.sm2Debugger !== c) try {
                sm2Debugger.handleEvent(d, e, f)
            } catch (g) {
                return false
            }
            return true
        };
        v = function () {
            var b = [];
            l.debugMode && b.push("sm2_debug");
            l.debugFlash && b.push("flash_debug");
            l.useHighPerformance && b.push("high_performance");
            return b.join(" ")
        };
        R = function () {
            var b = fa("fbHandler"),
                c = l.getMoviePercent(),
                d = {
                    type: "FLASHBLOCK"
                };
            if (l.html5Only) return false;
            l.ok() ? (l.didFlashBlock && l._wD(b + ": Unblocked"), l.oMC && (l.oMC.className = [v(), "movieContainer", "swf_loaded" + (l.didFlashBlock ? " swf_unblocked" : "")].join(" "))) : (xa && (l.oMC.className = v() + " movieContainer " + (null === c ? "swf_timedout" : "swf_error"), l._wD(b + ": " + fa("fbTimeout") + (c ? " (" + fa("fbLoaded") + ")" : ""))), l.didFlashBlock = true, B({
                type: "ontimeout",
                ignoreInit: true,
                error: d
            }), oa(d))
        };
        Q = function (b, d, e) {
            z[b] === c && (z[b] = []);
            z[b].push({
                method: d,
                scope: e || null,
                fired: false
            })
        };
        B = function (b) {
            b || (b = {
                type: l.ok() ? "onready" : "ontimeout"
            });
            if (!K && b && !b.ignoreInit || "ontimeout" === b.type && (l.ok() || P && !b.ignoreInit)) return false;
            var c = {
                success: b && b.ignoreInit ? l.ok() : !P
            },
                d = b && b.type ? z[b.type] || [] : [],
                e = [],
                f, c = [c],
                g = xa && !l.ok();
            b.error && (c[0].error = b.error);
            b = 0;
            for (f = d.length; b < f; b++) true !== d[b].fired && e.push(d[b]);
            if (e.length) {
                b = 0;
                for (f = e.length; b < f; b++) {
                    e[b].scope ? e[b].method.apply(e[b].scope, c) :
                        e[b].method.apply(this, c);
                    g || (e[b].fired = true)
                }
            }
            return true
        };
        E = function () {
            b.setTimeout(function () {
                l.useFlashBlock && R();
                B();
                "function" === typeof l.onload && (D("onload", 1), l.onload.apply(b), D("onloadOK", 1));
                l.waitForWindowLoad && qa.add(b, "load", E)
            }, 1)
        };
        Pa = function () {
            if (Ka !== c) return Ka;
            var d = false,
                e = navigator,
                f = e.plugins,
                g, h = b.ActiveXObject;
            if (f && f.length) (e = e.mimeTypes) && e["application/x-shockwave-flash"] && e["application/x-shockwave-flash"].enabledPlugin && e["application/x-shockwave-flash"].enabledPlugin.description &&
                (d = true);
            else if (h !== c && !p.match(/MSAppHost/i)) {
                try {
                    g = new h("ShockwaveFlash.ShockwaveFlash")
                } catch (j) {
                    g = null
                }
                d = !!g
            }
            return Ka = d
        };
        Hb = function () {
            var b, c, d = l.audioFormats;
            vb && p.match(/os (1|2|3_0|3_1)\s/i) ? (l.hasHTML5 = false, l.html5Only = true, l.oMC && (l.oMC.style.display = "none")) : l.useHTML5Audio && (l.html5 && l.html5.canPlayType || (l._wD("SoundManager: No HTML5 Audio() support detected."), l.hasHTML5 = false), $b && l._wD("soundManager: Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - " +
                (Ka ? "will use flash fallback for MP3/MP4, if available" : " would use flash fallback for MP3/MP4, but none detected."), 1));
            if (l.useHTML5Audio && l.hasHTML5)
                for (c in Aa = true, d) d.hasOwnProperty(c) && d[c].required && (l.html5.canPlayType(d[c].type) ? l.preferFlash && (l.flash[c] || l.flash[d[c].type]) && (b = true) : (Aa = false, b = true));
            l.ignoreFlash && (b = false, Aa = true);
            l.html5Only = l.hasHTML5 && l.useHTML5Audio && !b;
            return !l.html5Only
        };
        bb = function (b) {
            var c, d, e = 0;
            if (b instanceof Array) {
                c = 0;
                for (d = b.length; c < d; c++)
                    if (b[c] instanceof Object) {
                        if (l.canPlayMIME(b[c].type)) {
                            e = c;
                            break
                        }
                    } else if (l.canPlayURL(b[c])) {
                        e = c;
                        break
                    }
                b[e].url && (b[e] = b[e].url);
                b = b[e]
            }
            return b
        };
        Va = function (b) {
            b._hasTimer || (b._hasTimer = true, !Mb && l.html5PollingInterval && (null === Sa && 0 === Fa && (Sa = setInterval(xb, l.html5PollingInterval)), Fa++))
        };
        nb = function (b) {
            b._hasTimer && (b._hasTimer = false, !Mb && l.html5PollingInterval && Fa--)
        };
        xb = function () {
            var b;
            if (null !== Sa && !Fa) return clearInterval(Sa), Sa = null, false;
            for (b = l.soundIDs.length - 1; 0 <= b; b--) l.sounds[l.soundIDs[b]].isHTML5 &&
                l.sounds[l.soundIDs[b]]._hasTimer && l.sounds[l.soundIDs[b]]._onTimer()
        };
        oa = function (d) {
            d = d !== c ? d : {};
            "function" === typeof l.onerror && l.onerror.apply(b, [{
                type: d.type !== c ? d.type : null
            }]);
            d.fatal !== c && d.fatal && l.disable()
        };
        yb = function () {
            if (!$b || !Pa()) return false;
            var b = l.audioFormats,
                c, d;
            for (d in b)
                if (b.hasOwnProperty(d) && ("mp3" === d || "mp4" === d) && (l._wD("soundManager: Using flash fallback for " + d + " format"), l.html5[d] = false, b[d] && b[d].related))
                    for (c = b[d].related.length - 1; 0 <= c; c--) l.html5[b[d].related[c]] =
                        false
        };
        this._setSandboxType = function (b) {
            var d = l.sandbox;
            d.type = b;
            d.description = d.types[d.types[b] !== c ? b : "unknown"];
            "localWithFile" === d.type ? (d.noRemote = true, d.noLocal = false, D("secNote", 2)) : "localWithNetwork" === d.type ? (d.noRemote = false, d.noLocal = true) : "localTrusted" === d.type && (d.noRemote = false, d.noLocal = false)
        };
        this._externalInterfaceOK = function (b) {
            if (l.swfLoaded) return false;
            var c;
            C("swf", true);
            C("flashtojs", true);
            l.swfLoaded = true;
            Ya = false;
            $b && yb();
            if (!b || b.replace(/\+dev/i, "") !== l.versionNumber.replace(/\+dev/i,
                    "")) return c = 'soundManager: Fatal: JavaScript file build "' + l.versionNumber + '" does not match Flash SWF build "' + b + '" at ' + l.url + ". Ensure both are up-to-date.", setTimeout(function () {
                        throw Error(c);
                    }, 0), false;
            setTimeout(u, Ga ? 100 : 1)
        };
        ka = function (b, d) {
            function e() {
                var b = [],
                    c, d = [];
                c = "SoundManager " + l.version + (!l.html5Only && l.useHTML5Audio ? l.hasHTML5 ? " + HTML5 audio" : ", no HTML5 audio support" : "");
                l.html5Only ? l.html5PollingInterval && b.push("html5PollingInterval (" + l.html5PollingInterval + "ms)") : (l.preferFlash &&
                    b.push("preferFlash"), l.useHighPerformance && b.push("useHighPerformance"), l.flashPollingInterval && b.push("flashPollingInterval (" + l.flashPollingInterval + "ms)"), l.html5PollingInterval && b.push("html5PollingInterval (" + l.html5PollingInterval + "ms)"), l.wmode && b.push("wmode (" + l.wmode + ")"), l.debugFlash && b.push("debugFlash"), l.useFlashBlock && b.push("flashBlock"));
                b.length && (d = d.concat([b.join(" + ")]));
                l._wD(c + (d.length ? " + " + d.join(", ") : ""), 1);
                Fb()
            }

            function f(b, c) {
                return '<param name="' + b + '" value="' + c +
                    '" />'
            }
            if (G && H) return false;
            if (l.html5Only) return X(), e(), l.oMC = q(l.movieID), u(), H = G = true, false;
            var g = d || l.url,
                h = l.altURL || g,
                j = ja(),
                k = v(),
                m = null,
                m = r.getElementsByTagName("html")[0],
                o, n, s, m = m && m.dir && m.dir.match(/rtl/i),
                b = b === c ? l.id : b;
            X();
            l.url = Da(Za ? g : h);
            d = l.url;
            l.wmode = !l.wmode && l.useHighPerformance ? "transparent" : l.wmode;
            null !== l.wmode && (p.match(/msie 8/i) || !Ga && !l.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (Ta.push(Y.spcWmode), l.wmode = null);
            j = {
                name: b,
                id: b,
                src: d,
                quality: "high",
                allowScriptAccess: l.allowScriptAccess,
                bgcolor: l.bgColor,
                pluginspage: Sb + "www.macromedia.com/go/getflashplayer",
                title: "JS/Flash audio component (SoundManager 2)",
                type: "application/x-shockwave-flash",
                wmode: l.wmode,
                hasPriority: "true"
            };
            l.debugFlash && (j.FlashVars = "debug=1");
            l.wmode || delete j.wmode;
            if (Ga) {
                g = r.createElement("div");
                n = ['<object id="' + b + '" data="' + d + '" type="' + j.type + '" title="' + j.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',
                    f("movie", d), f("AllowScriptAccess", l.allowScriptAccess), f("quality", j.quality), l.wmode ? f("wmode", l.wmode) : "", f("bgcolor", l.bgColor), f("hasPriority", "true"), l.debugFlash ? f("FlashVars", j.FlashVars) : "", "</object>"
                ].join("")
            } else
                for (o in g = r.createElement("embed"), j) j.hasOwnProperty(o) && g.setAttribute(o, j[o]);
            V();
            k = v();
            if (j = ja())
                if (l.oMC = q(l.movieID) || r.createElement("div"), l.oMC.id) {
                    s = l.oMC.className;
                    l.oMC.className = (s ? s + " " : "movieContainer") + (k ? " " + k : "");
                    l.oMC.appendChild(g);
                    Ga && (o = l.oMC.appendChild(r.createElement("div")),
                        o.className = "sm2-object-box", o.innerHTML = n);
                    H = true
                } else {
                    l.oMC.id = l.movieID;
                    l.oMC.className = "movieContainer " + k;
                    o = k = null;
                    l.useFlashBlock || (l.useHighPerformance ? k = {
                        position: "fixed",
                        width: "8px",
                        height: "8px",
                        bottom: "0px",
                        left: "0px",
                        overflow: "hidden"
                    } : (k = {
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        top: "-9999px",
                        left: "-9999px"
                    }, m && (k.left = Math.abs(parseInt(k.left, 10)) + "px")));
                    Ha && (l.oMC.style.zIndex = 1E4);
                    if (!l.debugFlash)
                        for (s in k) k.hasOwnProperty(s) && (l.oMC.style[s] = k[s]);
                    try {
                        Ga || l.oMC.appendChild(g);
                        j.appendChild(l.oMC);
                        Ga && (o = l.oMC.appendChild(r.createElement("div")), o.className = "sm2-object-box", o.innerHTML = n);
                        H = true
                    } catch (t) {
                        throw Error(fa("domError") + " \n" + t.toString());
                    }
                }
            G = true;
            e();
            return true
        };
        ba = function () {
            if (l.html5Only) return ka(), false;
            if (n) return false;
            if (!l.url) return D("noURL"), false;
            (n = l.getMovie(l.id)) || (L ? (Ga ? l.oMC.innerHTML = W : l.oMC.appendChild(L), L = null, G = true) : ka(l.id, l.url), n = l.getMovie(l.id));
            "function" === typeof l.oninitmovie && setTimeout(l.oninitmovie, 1);
            Ja();
            return true
        };
        Z = function () {
            setTimeout(O, 1E3)
        };
        M = function () {
            b.setTimeout(function () {
                ea("soundManager: useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false...");
                l.setup({
                    preferFlash: false
                }).reboot();
                l.didFlashBlock = true;
                l.beginDelayedInit()
            }, 1)
        };
        O = function () {
            var c, d = false;
            if (!l.url || Ca) return false;
            Ca = true;
            qa.remove(b, "load", Z);
            if (Ka && Ya && !Nb) return D("waitFocus"), false;
            K || (c = l.getMoviePercent(), 0 < c && 100 > c && (d = true));
            setTimeout(function () {
                c = l.getMoviePercent();
                if (d) return Ca = false,
                    l._wD(fa("waitSWF")), b.setTimeout(Z, 1), false;
                K || (l._wD("soundManager: No Flash response within expected time. Likely causes: " + (0 === c ? "SWF load failed, " : "") + "Flash blocked or JS-Flash security error." + (l.debugFlash ? " " + fa("checkSWF") : ""), 2), !Za && c && (D("localFail", 2), l.debugFlash || D("tryDebug", 2)), 0 === c && l._wD(fa("swf404", l.url), 1), C("flashtojs", false, ": Timed out" + (Za ? " (Check flash security or flash blockers)" : " (No plugin/missing SWF?)")));
                !K && bc && (null === c ? l.useFlashBlock || 0 === l.flashLoadTimeout ?
                    (l.useFlashBlock && R(), D("waitForever")) : !l.useFlashBlock && Aa ? M() : (D("waitForever"), B({
                        type: "ontimeout",
                        ignoreInit: true,
                        error: {
                            type: "INIT_FLASHBLOCK"
                        }
                    })) : 0 === l.flashLoadTimeout ? D("waitForever") : !l.useFlashBlock && Aa ? M() : sa(true))
            }, l.flashLoadTimeout)
        };
        aa = function () {
            if (Nb || !Ya) return qa.remove(b, "focus", aa), true;
            Nb = bc = true;
            D("gotFocus");
            Ca = false;
            Z();
            qa.remove(b, "focus", aa);
            return true
        };
        Ja = function () {
            Ta.length && (l._wD("SoundManager 2: " + Ta.join(" "), 1), Ta = [])
        };
        Fb = function () {
            Ja();
            var b, c = [];
            if (l.useHTML5Audio &&
                l.hasHTML5) {
                for (b in l.audioFormats) l.audioFormats.hasOwnProperty(b) && c.push(b + " = " + l.html5[b] + (!l.html5[b] && xa && l.flash[b] ? " (using flash)" : l.preferFlash && l.flash[b] && xa ? " (preferring flash)" : l.html5[b] ? "" : " (" + (l.audioFormats[b].required ? "required, " : "") + "and no flash support)"));
                l._wD("SoundManager 2 HTML5 support: " + c.join(", "), 1)
            }
        };
        I = function (c) {
            if (K) return false;
            if (l.html5Only) return D("sm2Loaded", 1), K = true, E(), C("onload", true), true;
            var d = true,
                e;
            l.useFlashBlock && l.flashLoadTimeout && !l.getMoviePercent() ||
                (K = true);
            e = {
                type: !Ka && xa ? "NO_FLASH" : "INIT_TIMEOUT"
            };
            l._wD("SoundManager 2 " + (P ? "failed to load" : "loaded") + " (" + (P ? "Flash security/load error" : "OK") + ") " + String.fromCharCode(P ? 10006 : 10003), P ? 2 : 1);
            P || c ? (l.useFlashBlock && l.oMC && (l.oMC.className = v() + " " + (null === l.getMoviePercent() ? "swf_timedout" : "swf_error")), B({
                type: "ontimeout",
                error: e,
                ignoreInit: true
            }), C("onload", false), oa(e), d = false) : C("onload", true);
            P || (l.waitForWindowLoad && !T ? (D("waitOnload"), qa.add(b, "load", E)) : (l.waitForWindowLoad && T && D("docLoaded"),
                E()));
            return d
        };
        t = function () {
            var b, d = l.setupOptions;
            for (b in d) d.hasOwnProperty(b) && (l[b] === c ? l[b] = d[b] : l[b] !== d[b] && (l.setupOptions[b] = l[b]))
        };
        u = function () {
            if (K) return D("didInit"), false;
            if (l.html5Only) return K || (qa.remove(b, "load", l.beginDelayedInit), l.enabled = true, I()), true;
            ba();
            try {
                n._externalInterfaceTest(false);
                pa(true, l.flashPollingInterval || (l.useHighPerformance ? 10 : 50));
                l.debugMode || n._disableDebug();
                l.enabled = true;
                C("jstoflash", true);
                l.html5Only || qa.add(b, "unload", o)
            } catch (c) {
                return l._wD("js/flash exception: " +
                    c.toString()), C("jstoflash", false), oa({
                        type: "JS_TO_FLASH_EXCEPTION",
                        fatal: true
                    }), sa(true), I(), false
            }
            I();
            qa.remove(b, "load", l.beginDelayedInit);
            return true
        };
        da = function () {
            if (x) return false;
            x = true;
            t();
            V();
            !Ka && l.hasHTML5 && (l._wD("SoundManager 2: No Flash detected" + (l.useHTML5Audio ? ". Trying HTML5-only mode." : ", enabling HTML5."), 1), l.setup({
                useHTML5Audio: true,
                preferFlash: false
            }));
            Qa();
            !Ka && xa && (Ta.push(Y.needFlash), l.setup({
                flashLoadTimeout: 1
            }));
            r.removeEventListener && r.removeEventListener("DOMContentLoaded",
                da, false);
            ba();
            return true
        };
        gb = function () {
            "complete" === r.readyState && (da(), r.detachEvent("onreadystatechange", gb));
            return true
        };
        ra = function () {
            T = true;
            da();
            qa.remove(b, "load", ra)
        };
        Pa();
        qa.add(b, "focus", aa);
        qa.add(b, "load", Z);
        qa.add(b, "load", ra);
        r.addEventListener ? r.addEventListener("DOMContentLoaded", da, false) : r.attachEvent ? r.attachEvent("onreadystatechange", gb) : (C("onload", false), oa({
            type: "NO_DOM2_EVENTS",
            fatal: true
        }))
    }
    if (!b || !b.document) throw Error("SoundManager requires a browser with window and document objects.");
    var e = null;
    b.SM2_DEFER !== c && SM2_DEFER || (e = new d);
    "object" === typeof module && module && "object" === typeof module.exports ? (module.exports.SoundManager = d, module.exports.soundManager = e) : "function" === typeof define && define.amd && define(function () {
        return {
            constructor: d,
            getInstance: function (c) {
                !b.soundManager && c instanceof Function && (c = c(d), c instanceof d && (b.soundManager = c));
                return b.soundManager
            }
        }
    });
    b.SoundManager = d;
    b.soundManager = e
})(window);

function FilterUtils() {
    this.HSVtoRGB = function (b, c, f) {
        var g, h, j, k = Math.floor(b * 6),
            l = b * 6 - k,
            b = f * (1 - c),
            m = f * (1 - l * c),
            c = f * (1 - (1 - l) * c);
        switch (k % 6) {
            case 0:
                g = f;
                h = c;
                j = b;
                break;
            case 1:
                g = m;
                h = f;
                j = b;
                break;
            case 2:
                g = b;
                h = f;
                j = c;
                break;
            case 3:
                g = b;
                h = m;
                j = f;
                break;
            case 4:
                g = c;
                h = b;
                j = f;
                break;
            case 5:
                g = f;
                h = b;
                j = m
        }
        return [g * 255, h * 255, j * 255]
    };
    this.RGBtoHSV = function (b, c, f) {
        var b = b / 255,
            c = c / 255,
            f = f / 255,
            g = Math.max(b, c, f),
            h = Math.min(b, c, f),
            j, k = g - h;
        if (g === h) j = 0;
        else {
            switch (g) {
                case b:
                    j = (c - f) / k + (c < f ? 6 : 0);
                    break;
                case c:
                    j = (f - b) / k + 2;
                    break;
                case f:
                    j =
                        (b - c) / k + 4
            }
            j = j / 6
        }
        return [j, g === 0 ? 0 : k / g, g]
    };
    this.getPixel = function (b, c, f, g, h) {
        var j = (f * g + c) * 4;
        return c < 0 || c >= g || f < 0 || f >= h ? [b[(this.clampPixel(f, 0, h - 1) * g + this.clampPixel(c, 0, g - 1)) * 4], b[(this.clampPixel(f, 0, h - 1) * g + this.clampPixel(c, 0, g - 1)) * 4 + 1], b[(this.clampPixel(f, 0, h - 1) * g + this.clampPixel(c, 0, g - 1)) * 4 + 2], b[(this.clampPixel(f, 0, h - 1) * g + this.clampPixel(c, 0, g - 1)) * 4 + 3]] : [b[j], b[j + 1], b[j + 2], b[j + 3]]
    };
    var b = false,
        c;
    this.gaussianRandom = function () {
        if (b) return b = false, c;
        var d, e, f;
        do {
            d = 2 * Math.random() - 1;
            e = 2 * Math.random() -
                1;
            f = d * d + e * e
        } while (f >= 1 || f === 0);
        f = Math.sqrt(-2 * Math.log(f) / f);
        c = e * f;
        b = true;
        return d * f
    };
    this.clampPixel = function (b, c, f) {
        return b < c ? c : b > f ? f : b
    };
    this.triangle = function (b) {
        b = this.mod(b, 1);
        return 2 * (b < 0.5 ? b : 1 - b)
    };
    this.mod = function (b, c) {
        var f = parseInt(b / c, 10),
            b = b - f * c;
        return b < 0 ? b + c : b
    };
    this.mixColors = function (b, c, f) {
        var g = this.linearInterpolate(b, c[0], f[0]),
            h = this.linearInterpolate(b, c[1], f[1]),
            j = this.linearInterpolate(b, c[2], f[2]),
            b = this.linearInterpolate(b, c[3], f[3]);
        return [g, h, j, b]
    };
    this.linearInterpolate =
        function (b, c, f) {
            return c + b * (f - c)
        };
    this.bilinearInterpolate = function (b, c, f, g, h, j) {
        var k = f[0],
            l = f[1],
            m = f[2],
            n = g[0],
            q = g[1],
            p = g[2],
            s = h[0],
            r = h[1],
            o = h[2],
            t = h[3],
            u = j[0],
            w = j[1],
            h = j[2],
            z = j[3],
            j = 1 - b,
            A = 1 - c,
            f = j * f[3] + b * g[3];
        return [A * (j * k + b * n) + c * (j * s + b * u), A * (j * l + b * q) + c * (j * r + b * w), A * (j * m + b * p) + c * (j * o + b * h), A * f + c * (j * t + b * z)]
    };
    this.tableFilter = function (b, c, f, g) {
        for (var h = 0; h < g; h++)
            for (var j = 0; j < f; j++)
                for (var k = (h * f + j) * 4, l = 0; l < 3; l++) b[k + l] = c[b[k + l]]
    };
    this.convolveFilter = function (b, c, f, g) {
        var h = [],
            j, k;
        j = k = Math.sqrt(c.length);
        j = parseInt(j / 2, 10);
        for (var l = parseInt(k / 2, 10), m = 0; m < g; m++)
            for (var n = 0; n < f; n++) {
                for (var q = (m * f + n) * 4, p = 0, s = 0, r = 0, o = -j; o <= j; o++)
                    for (var t = m + o, t = 0 <= t && t < g ? t * f : m * f, u = k * (o + j) + l, w = -l; w <= l; w++) {
                        var z = c[u + w];
                        if (z !== 0) {
                            var A = n + w;
                            0 <= A && A < f || (A = n);
                            A = (t + A) * 4;
                            p = p + z * b[A];
                            s = s + z * b[A + 1];
                            r = r + z * b[A + 2]
                        }
                    }
                h[q] = parseInt(p + 0.5, 10);
                h[q + 1] = parseInt(s + 0.5, 10);
                h[q + 2] = parseInt(r + 0.5, 10);
                h[q + 3] = b[q + 3]
            }
        for (c = 0; c < h.length; c++) b[c] = h[c]
    };
    this.transformFilter = function (b, c, f, g) {
        for (var h = [], j = [], k = 0; k < b.length; k++) j[k] = b[k];
        for (k = 0; k <
            g; k++)
            for (var l = 0; l < f; l++) {
                var m = (k * f + l) * 4;
                c.apply(this, [l, k, h]);
                var n = Math.floor(h[0]),
                    q = Math.floor(h[1]),
                    p = h[0] - n,
                    s = h[1] - q,
                    r, o, t;
                n >= 0 && n < f - 1 && q >= 0 && q < g - 1 ? (n = (f * q + n) * 4, r = [b[n], b[n + 1], b[n + 2], b[n + 3]], o = [b[n + 4], b[n + 5], b[n + 6], b[n + 7]], t = [b[n + f * 4], b[n + f * 4 + 1], b[n + f * 4 + 2], b[n + f * 4 + 3]], n = [b[n + (f + 1) * 4], b[n + (f + 1) * 4 + 1], b[n + (f + 1) * 4 + 2], b[n + (f + 1) * 4 + 3]]) : (r = this.getPixel(b, n, q, f, g), o = this.getPixel(b, n + 1, q, f, g), t = this.getPixel(b, n, q + 1, f, g), n = this.getPixel(b, n + 1, q + 1, f, g));
                p = this.bilinearInterpolate(p, s, r, o, t, n);
                j[m] =
                    p[0];
                j[m + 1] = p[1];
                j[m + 2] = p[2];
                j[m + 3] = p[3]
            }
        for (c = 0; c < j.length; c++) b[c] = j[c]
    }
}

function BlurFilter() {
    this.name = "Blur";
    this.isDirAnimatable = false;
    this.defaultValues = {
        amount: 3
    };
    this.valueRanges = {
        amount: {
            min: 0,
            max: 10
        }
    };
    this.filter = function (b, c) {
        var d = b.width,
            e = d << 2,
            f = b.height,
            g = b.data,
            h;
        h = c.amount;
        h < 0 && (h = 0);
        h = h >= 2.5 ? 0.98711 * h - 0.9633 : h >= 0.5 ? 3.97156 - 4.14554 * Math.sqrt(1 - 0.26891 * h) : 2 * h * (3.97156 - 4.14554 * Math.sqrt(0.865545));
        var j = h * h,
            k = j * h,
            l = 1.57825 + 2.44413 * h + 1.4281 * j + 0.422205 * k;
        h = (2.44413 * h + 2.85619 * j + 1.26661 * k) / l;
        for (var j = -(1.4281 * j + 1.26661 * k) / l, k = 0.422205 * k / l, l = 1 - (h + j + k), m = 0, n,
                q, p, s, r, o, m = 0; m < 3; m++)
            for (var t = 0; t < f; t++) {
                n = t * e + m;
                q = t * e + (d - 1 << 2) + m;
                for (o = r = s = g[n]; n <= q; n = n + 4) {
                    p = l * g[n] + h * s + j * r + k * o;
                    g[n] = p;
                    o = r;
                    r = s;
                    s = p
                }
                n = t * e + (d - 1 << 2) + m;
                q = t * e + m;
                for (o = r = s = g[n]; n >= q; n = n - 4) {
                    p = l * g[n] + h * s + j * r + k * o;
                    g[n] = p;
                    o = r;
                    r = s;
                    s = p
                }
            }
        for (m = 0; m < 3; m++)
            for (t = 0; t < d; t++) {
                n = (t << 2) + m;
                q = (f - 1) * e + (t << 2) + m;
                for (o = r = s = g[n]; n <= q; n = n + e) {
                    p = l * g[n] + h * s + j * r + k * o;
                    g[n] = p;
                    o = r;
                    r = s;
                    s = p
                }
                n = (f - 1) * e + (t << 2) + m;
                q = (t << 2) + m;
                for (o = r = s = g[n]; n >= q; n = n - e) {
                    p = l * g[n] + h * s + j * r + k * o;
                    g[n] = p;
                    o = r;
                    r = s;
                    s = p
                }
            }
    }
}

function BrightnessFilter() {
    this.name = "Brightness";
    this.isDirAnimatable = true;
    this.defaultValues = {
        amount: 0
    };
    this.valueRanges = {
        amount: {
            min: -1,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        for (var h = d.amount === void 0 ? this.defaultValues.amount : d.amount, j = 0; j < f; j++)
            for (var k = 0; k < e; k++) {
                var l = (j * e + k) * 4,
                    m = b.RGBtoHSV(g[l], g[l + 1], g[l + 2]);
                m[2] = m[2] + h;
                m[2] < 0 ? m[2] = 0 : m[2] > 1 && (m[2] = 1);
                for (var m = b.HSVtoRGB(m[0], m[1], m[2]), n = 0; n < 3; n++) g[l +
                    n] = m[n]
            }
    }
}

function BumpFilter() {
    this.name = "Bump";
    this.isDirAnimatable = true;
    this.defaultValues = {};
    this.valueRanges = {};
    var b = new FilterUtils;
    this.filter = function (c) {
        b.convolveFilter(c.data, [-1, -1, 0, -1, 1, 1, 0, 1, 1], c.width, c.height)
    }
}

function CircleSmearFilter() {
    this.name = "Circle Smear";
    this.isDirAnimatable = false;
    this.defaultValues = {
        size: 4,
        density: 0.5,
        mix: 0.5
    };
    this.valueRanges = {
        size: {
            min: 1,
            max: 10
        },
        density: {
            min: 0,
            max: 1
        },
        mix: {
            min: 0,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        for (var e = c.width, f = c.height, g = c.data, h = [], j = 0; j < g.length; j++) h[j] = g[j];
        if (d === void 0) d = this.defaultValues;
        var k = d.size === void 0 ? this.defaultValues.size : d.size;
        k < 1 && (k = 1);
        for (var k = parseInt(k, 10), j = d.mix === void 0 ? this.defaultValues.mix : d.mix, k = k +
                1, l = k * k, m = parseInt(2 * (d.density === void 0 ? this.defaultValues.density : d.density) / 30 * e * f / 2, 10), n = 0; n < m; n++)
            for (var q = (Math.random() * Math.pow(2, 32) & 2147483647) % e, p = (Math.random() * Math.pow(2, 32) & 2147483647) % f, s = [g[(p * e + q) * 4], g[(p * e + q) * 4 + 1], g[(p * e + q) * 4 + 2], g[(p * e + q) * 4 + 3]], r = q - k; r < q + k + 1; r++)
                for (var o = p - k; o < p + k + 1; o++) {
                    var t = (r - q) * (r - q) + (o - p) * (o - p);
                    if (r >= 0 && r < e && o >= 0 && o < f && t <= l)
                        for (var t = b.mixColors(j, [h[(o * e + r) * 4], h[(o * e + r) * 4 + 1], h[(o * e + r) * 4 + 2], h[(o * e + r) * 4 + 3]], s), u = 0; u < 3; u++) h[(o * e + r) * 4 + u] = t[u]
                }
        for (e = 0; e < h.length; e++) g[e] =
            h[e]
    }
}

function ContrastFilter() {
    this.name = "Contrast";
    this.isDirAnimatable = true;
    this.defaultValues = {
        amount: 1
    };
    this.valueRanges = {
        amount: {
            min: 0,
            max: 2
        }
    };
    if (FilterUtils) {
        var b = new FilterUtils;
        this.filter = function (c, d) {
            var e = c.width,
                f = c.height,
                g = c.data;
            if (d === void 0) d = this.defaultValues;
            var h = d.amount === void 0 ? this.defaultValues.amount : d.amount;
            h < 0 && (h = 0);
            for (var j = [], k = 0; k < 256; k++) j[k] = parseInt(255 * ((k / 255 - 0.5) * h + 0.5), 10);
            b.tableFilter(g, j, e, f)
        }
    } else console && console.error("Unable to find filterutils.js, please include this file! (Required by " + this.name +
        " filter)")
}

function CrossSmearFilter() {
    this.name = "Cross Smear";
    this.isDirAnimatable = false;
    this.defaultValues = {
        distance: 8,
        density: 0.5,
        mix: 0.5
    };
    this.valueRanges = {
        distance: {
            min: 0,
            max: 30
        },
        density: {
            min: 0,
            max: 1
        },
        mix: {
            min: 0,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        for (var e = c.width, f = c.height, g = c.data, h = [], j = 0; j < g.length; j++) h[j] = g[j];
        if (d === void 0) d = this.defaultValues;
        j = d.distance === void 0 ? this.defaultValues.distance : d.distance;
        j < 0 && (j = 0);
        for (var j = parseInt(j, 10), k = d.mix === void 0 ? this.defaultValues.mix : d.mix,
                l = parseInt(2 * (d.density === void 0 ? this.defaultValues.density : d.density) * e * f / (j + 1), 10), m = 0; m < l; m++) {
            for (var n = (Math.random() * Math.pow(2, 32) & 2147483647) % e, q = (Math.random() * Math.pow(2, 32) & 2147483647) % f, p = Math.random() * Math.pow(2, 32) % j + 1, s = [g[(q * e + n) * 4], g[(q * e + n) * 4 + 1], g[(q * e + n) * 4 + 2], g[(q * e + n) * 4 + 3]], r, o, t = n - p; t < n + p + 1; t++)
                if (t >= 0 && t < e) {
                    r = [h[(q * e + t) * 4], h[(q * e + t) * 4 + 1], h[(q * e + t) * 4 + 2], h[(q * e + t) * 4 + 3]];
                    r = b.mixColors(k, r, s);
                    for (o = 0; o < 3; o++) h[(q * e + t) * 4 + o] = r[o]
                }
            for (t = q - p; t < q + p + 1; t++)
                if (t >= 0 && t < f) {
                    r = [h[(t * e + n) * 4],
                        h[(t * e + n) * 4 + 1], h[(t * e + n) * 4 + 2], h[(t * e + n) * 4 + 3]
                    ];
                    r = b.mixColors(k, r, s);
                    for (o = 0; o < 3; o++) h[(t * e + n) * 4 + o] = r[o]
                }
        }
        for (e = 0; e < h.length; e++) g[e] = h[e]
    }
}

function DiffusionFilter() {
    this.name = "Diffusion";
    this.isDirAnimatable = false;
    this.defaultValues = {
        scale: 4
    };
    this.valueRanges = {
        scale: {
            min: 1,
            max: 100
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        for (var h = d.scale === void 0 ? this.defaultValues.scale : d.scale, j = [], k = [], l = 0; l < 256; l++) {
            var m = Math.PI * 2 * l / 256;
            j[l] = h * Math.sin(m);
            k[l] = h * Math.cos(m)
        }
        transInverse = function (b, c, d) {
            var e = parseInt(Math.random() * 255, 10),
                f = Math.random();
            d[0] = b + f * j[e];
            d[1] = c + f * k[e]
        };
        b.transformFilter(g, transInverse, e, f)
    }
}

function DitherFilter() {
    this.name = "Dither";
    this.isDirAnimatable = false;
    this.defaultValues = {
        levels: 3,
        color: true
    };
    this.valueRanges = {
        levels: {
            min: 2,
            max: 30
        },
        color: {
            min: false,
            max: true
        }
    };
    new FilterUtils;
    this.filter = function (b, c) {
        var d = b.width,
            e = b.height,
            f = b.data,
            g = [],
            h, j;
        for (j = 0; j < f.length; j++) g[j] = 0;
        if (c === void 0) c = this.defaultValues;
        var k = c.levels === void 0 ? this.defaultValues.levels : c.levels,
            l = c.color === void 0 ? this.defaultValues.color : c.color;
        k <= 1 && (k = 1);
        var m = [0, 0, 0, 0, 0, 7, 3, 5, 1],
            n = 0,
            q = [];
        for (h = 0; h < k; h++) q[h] =
            parseInt(255 * h / (k - 1), 10);
        var p = [];
        for (h = 0; h < 256; h++) p[h] = parseInt(k * h / 256, 10);
        for (k = 0; k < e; k++) {
            var s = (k & 1) == 1,
                r;
            s ? (n = (k * d + d - 1) * 4, r = -1) : (n = k * d * 4, r = 1);
            for (var o = 0; o < d; o++) {
                var t = f[n],
                    u = f[n + 1],
                    w = f[n + 2];
                l || (t = u = w = parseInt((t + u + w) / 3, 10));
                var z = q[p[t]],
                    A = q[p[u]];
                h = q[p[w]];
                g[n] = z;
                g[n + 1] = A;
                g[n + 2] = h;
                g[n + 3] = f[n + 3];
                var z = t - z,
                    A = u - A,
                    C = w - h;
                for (h = -1; h <= 1; h++)
                    if (t = h + k, 0 <= t && t < e)
                        for (j = -1; j <= 1; j++)
                            if (t = j + o, 0 <= t && t < d) {
                                var G;
                                G = s ? m[(h + 1) * 3 - j + 1] : m[(h + 1) * 3 + j + 1];
                                if (G !== 0) {
                                    var H = s ? n - j * 4 : n + j * 4,
                                        t = f[H],
                                        u = f[H + 1],
                                        w = f[H + 2];
                                    G = G /
                                        16;
                                    t = t + z * G;
                                    u = u + A * G;
                                    w = w + C * G;
                                    f[H] = t;
                                    f[H + 1] = u;
                                    f[H + 2] = w
                                }
                            }
                n = n + r * 4
            }
        }
        for (j = 0; j < g.length; j++) f[j] = g[j]
    }
}

function EdgeFilter() {
    this.name = "Edge Detection";
    this.isDirAnimatable = true;
    this.defaultValues = {};
    this.valueRanges = {};
    var b = [-1, -2, -1, 0, 0, 0, 1, 2, 1],
        c = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
    this.filter = function (d) {
        for (var e = d.width, f = d.height, d = d.data, g = [], h = 0; h < f; h++)
            for (var j = 0; j < e; j++) {
                var k = (h * e + j) * 4,
                    l = 0,
                    m = bh = gh = 0;
                bv = gv = 0;
                for (var n = -1; n <= 1; n++)
                    for (var q = h + n, q = q >= 0 && q < f ? q * e * 4 : h * e * 4, p = 3 * (n + 1) + 1, s = -1; s <= 1; s++) {
                        var r = j + s;
                        r >= 0 && r < e || (r = j);
                        var r = r * 4,
                            o = d[q + r],
                            t = d[q + r + 1],
                            r = d[q + r + 2],
                            u = b[p + s],
                            w = c[p + s],
                            l = l + parseInt(u * o, 10);
                        bh = bh + parseInt(u * t, 10);
                        gh = gh + parseInt(u * r, 10);
                        m = m + parseInt(w * o, 10);
                        gv = gv + parseInt(w * t, 10);
                        bv = bv + parseInt(w * r, 10)
                    }
                o = parseInt(Math.sqrt(l * l + m * m) / 1.8, 10);
                t = parseInt(Math.sqrt(gh * gh + gv * gv) / 1.8, 10);
                r = parseInt(Math.sqrt(bh * bh + bv * bv) / 1.8, 10);
                g[k] = o;
                g[k + 1] = t;
                g[k + 2] = r;
                g[k + 3] = d[k + 3]
            }
        for (e = 0; e < g.length; e++) d[e] = g[e]
    }
}

function EmbossFilter() {
    this.name = "Emboss";
    this.isDirAnimatable = false;
    this.defaultValues = {
        height: 1,
        angle: 135,
        elevation: 30
    };
    this.valueRanges = {
        height: {
            min: 1,
            max: 10
        },
        angle: {
            min: 0,
            max: 360
        },
        elevation: {
            min: 0,
            max: 180
        }
    };
    this.filter = function (b, c) {
        var d = b.width,
            e = b.height,
            f = b.data;
        if (c === void 0) c = this.defaultValues;
        for (var g = c.height === void 0 ? this.defaultValues.height : c.height, h = c.angle === void 0 ? this.defaultValues.angle : c.angle, j = c.elevation === void 0 ? this.defaultValues.elevation : c.elevation, h = h / 180 * Math.PI,
                j = j / 180 * Math.PI, k = 3 * g, g = [], l = 0; l < f.length; l = l + 4) g[l / 4] = (f[l] + f[l + 1] + f[l + 2]) / 3;
        var m, n, q, p, l = parseInt(Math.cos(h) * Math.cos(j) * 255.9, 10),
            h = parseInt(Math.sin(h) * Math.cos(j) * 255.9, 10),
            j = parseInt(Math.sin(j) * 255.9, 10);
        q = parseInt(1530 / k, 10);
        k = q * q;
        q = q * j;
        for (var s = 0, r = 0; r < e; r++, s = s + d)
            for (var o = s, t = o + d, u = t + d, w = 0; w < d; w++, o++, t++, u++) {
                var z = (r * d + w) * 4;
                r !== 0 && r < e - 2 && w !== 0 && w < d - 2 ? (m = g[o - 1] + g[t - 1] + g[u - 1] - g[o + 1] - g[t + 1] - g[u + 1], n = g[u - 1] + g[u] + g[u + 1] - g[o - 1] - g[o] - g[o + 1], m = m === 0 && n === 0 ? j : (p = m * l + n * h + q) < 0 ? 0 : parseInt(p / Math.sqrt(m *
                    m + n * n + k), 10)) : m = j;
                f[z] = f[z + 1] = f[z + 2] = m
            }
    }
}

function ExposureFilter() {
    this.name = "Exposure";
    this.isDirAnimatable = true;
    this.defaultValues = {
        exposure: 1
    };
    this.valueRanges = {
        exposure: {
            min: 0,
            max: 5
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        for (var h = d.exposure === void 0 ? this.defaultValues.exposure : d.exposure, j = [], k = 0; k < 256; k++) j[k] = parseInt(255 * (1 - Math.exp(-(k / 255) * h)), 10);
        b.tableFilter(g, j, e, f)
    }
}

function GainFilter() {
    this.name = "Gain/Bias";
    this.isDirAnimatable = true;
    this.defaultValues = {
        gain: 0.5,
        bias: 0.5
    };
    this.valueRanges = {
        gain: {
            min: 0,
            max: 1
        },
        bias: {
            min: 0,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        for (var h = d.gain === void 0 ? this.defaultValues.gain : d.gain, j = d.bias === void 0 ? this.defaultValues.bias : d.bias, k = [], l = 0; l < 256; l++) {
            var m = l / 255,
                n = (1 / h - 2) * (1 - 2 * m),
                m = m < 0.5 ? m / (n + 1) : (n - m) / (n - 1),
                m = m / ((1 / j - 2) * (1 - m) + 1);
            k[l] = parseInt(255 *
                m, 10)
        }
        b.tableFilter(g, k, e, f)
    }
}

function GammaFilter() {
    this.name = "Gamma";
    this.isDirAnimatable = true;
    this.defaultValues = {
        amount: 1
    };
    this.valueRanges = {
        amount: {
            min: 0,
            max: 2
        }
    };
    this.filter = function (b, c) {
        var d = b.width,
            e = b.height,
            f = b.data;
        if (c === void 0) c = this.defaultValues;
        var g = c.amount === void 0 ? this.defaultValues.amount : c.amount;
        g < 0 && (g = 0);
        if (FilterUtils) {
            for (var h = new FilterUtils, j = [], k = 0; k < 256; k++) j[k] = 255 * Math.pow(k / 255, 1 / g) + 0.5;
            h.tableFilter(f, j, d, e)
        } else console && console.error("Unable to find filterutils.js, please include this file! (Required by " + this.name +
            " filter)")
    }
}

function GrayscaleFilter() {
    this.name = "Grayscale";
    this.isDirAnimatable = true;
    this.defaultValues = {};
    this.valueRanges = {};
    this.filter = function (b) {
        for (var c = b.width, d = b.height, b = b.data, e = 0; e < d; e++)
            for (var f = 0; f < c; f++) {
                var g = (e * c + f) * 4;
                b[g] = b[g + 1] = b[g + 2] = b[g] * 0.3 + b[g + 1] * 0.59 + b[g + 2] * 0.11
            }
    }
}

function HueFilter() {
    this.name = "Hue";
    this.isDirAnimatable = true;
    this.defaultValues = {
        amount: 0
    };
    this.valueRanges = {
        amount: {
            min: -1,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        for (var h = d.amount === void 0 ? this.defaultValues.amount : d.amount, j = 0; j < f; j++)
            for (var k = 0; k < e; k++) {
                var l = (j * e + k) * 4,
                    m = b.RGBtoHSV(g[l], g[l + 1], g[l + 2]);
                for (m[0] = m[0] + h; m[0] < 0;) m[0] = m[0] + 360;
                for (var m = b.HSVtoRGB(m[0], m[1], m[2]), n = 0; n < 3; n++) g[l + n] = m[n]
            }
    }
}

function InvertFilter() {
    this.name = "Invert";
    this.isDirAnimatable = true;
    this.defaultValues = {};
    this.valueRanges = {};
    this.filter = function (b) {
        for (var c = b.width, d = b.height, b = b.data, e = 0; e < d; e++)
            for (var f = 0; f < c; f++)
                for (var g = (e * c + f) * 4, h = 0; h < 3; h++) b[g + h] = 255 - b[g + h]
    }
}

function KaleidoscopeFilter() {
    this.name = "Kaleidoscope";
    this.isDirAnimatable = false;
    this.defaultValues = {
        angle: 0,
        rotation: 0,
        sides: 3,
        centerX: 0.5,
        centerY: 0.5
    };
    this.valueRanges = {
        angle: {
            min: 0,
            max: 360
        },
        rotation: {
            min: 0,
            max: 360
        },
        sides: {
            min: 1,
            max: 30
        },
        centerX: {
            min: 0,
            max: 1
        },
        centerY: {
            min: 0,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        var h = d.angle === void 0 ? this.defaultValues.angle : d.angle,
            j = d.rotation === void 0 ? this.defaultValues.rotation :
            d.rotation,
            k = d.sides === void 0 ? this.defaultValues.sides : d.sides,
            l = e * (d.centerX === void 0 ? this.defaultValues.centerX : d.centerX),
            m = f * (d.centerY === void 0 ? this.defaultValues.centerY : d.centerY),
            h = h / 180 * Math.PI,
            j = j / 180 * Math.PI;
        b.transformFilter(g, function (c, d, e) {
            var c = c - l,
                f = d - m,
                d = Math.sqrt(c * c + f * f),
                c = Math.atan2(f, c) - h - j,
                c = b.triangle(c / Math.PI * k * 0.5),
                c = c + h;
            e[0] = l + d * Math.cos(c);
            e[1] = m + d * Math.sin(c)
        }, e, f)
    }
}

function LensDistortionFilter() {
    this.name = "Lens Distortion";
    this.isDirAnimatable = false;
    this.defaultValues = {
        refraction: 1.5,
        radius: 50,
        centerX: 0.5,
        centerY: 0.5
    };
    this.valueRanges = {
        refraction: {
            min: 1,
            max: 10
        },
        radius: {
            min: 1,
            max: 200
        },
        centerX: {
            min: 0,
            max: 1
        },
        centerY: {
            min: 0,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        var h = d.refraction === void 0 ? this.defaultValues.refraction : d.refraction,
            j = d.radius === void 0 ? this.defaultValues.radius :
            d.radius,
            k = j * j,
            l = e * (d.centerX === void 0 ? this.defaultValues.centerX : d.centerX),
            m = f * (d.centerY === void 0 ? this.defaultValues.centerY : d.centerY);
        b.transformFilter(g, function (b, c, d) {
            var e = b - l,
                f = c - m,
                g = e * e,
                j = f * f;
            if (j >= k - k * g / k) {
                d[0] = b;
                d[1] = c
            } else {
                var u = 1 / h,
                    w = Math.sqrt((1 - g / k - j / k) * k),
                    z = w * w,
                    e = Math.acos(e / Math.sqrt(g + z)),
                    g = Math.PI / 2 - e,
                    g = Math.asin(Math.sin(g) * u),
                    g = Math.PI / 2 - e - g;
                d[0] = b - Math.tan(g) * w;
                b = Math.acos(f / Math.sqrt(j + z));
                g = Math.PI / 2 - b;
                g = Math.asin(Math.sin(g) * u);
                g = Math.PI / 2 - b - g;
                d[1] = c - Math.tan(g) * w
            }
        }, e, f)
    }
}

function LineSmearFilter() {
    this.name = "Line Smear";
    this.isDirAnimatable = false;
    this.defaultValues = {
        distance: 8,
        density: 0.5,
        angle: 0,
        mix: 0.5
    };
    this.valueRanges = {
        distance: {
            min: 1,
            max: 30
        },
        density: {
            min: 0,
            max: 1
        },
        angle: {
            min: 0,
            max: 360
        },
        mix: {
            min: 0,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data,
            h = [],
            j;
        for (j = 0; j < g.length; j++) h[j] = g[j];
        if (d === void 0) d = this.defaultValues;
        var k = d.distance === void 0 ? this.defaultValues.distance : d.distance;
        k < 1 && (k = 1);
        for (var k = parseInt(k, 10), l =
                d.density === void 0 ? this.defaultValues.density : d.density, m = d.angle === void 0 ? this.defaultValues.angle : d.angle, n = d.mix === void 0 ? this.defaultValues.mix : d.mix, m = m / 180 * Math.PI, q = Math.sin(m), m = Math.cos(m), l = parseInt(2 * l * e * f / 2, 10), p = 0; p < l; p++) {
            var s = (Math.random() * Math.pow(2, 32) & 2147483647) % e,
                r = (Math.random() * Math.pow(2, 32) & 2147483647) % f,
                o = (Math.random() * Math.pow(2, 32) & 2147483647) % k + 1,
                t = [g[(r * e + s) * 4], g[(r * e + s) * 4 + 1], g[(r * e + s) * 4 + 2], g[(r * e + s) * 4 + 3]],
                u = parseInt(o * m, 10),
                o = parseInt(o * q, 10),
                w = s - u,
                z = r - o,
                s = s + u,
                r = r +
                o,
                A, C, G, H;
            G = s < w ? -1 : 1;
            H = r < z ? -1 : 1;
            var u = s - w,
                o = r - z,
                u = Math.abs(u),
                o = Math.abs(o),
                K;
            if (w < e && w >= 0 && z < f && z >= 0) {
                j = [h[(z * e + w) * 4], h[(z * e + w) * 4 + 1], h[(z * e + w) * 4 + 2], h[(z * e + w) * 4 + 3]];
                K = b.mixColors(n, j, t);
                for (j = 0; j < 3; j++) h[(z * e + w) * 4 + j] = K[j]
            }
            if (Math.abs(u) > Math.abs(o)) {
                A = 2 * o - u;
                C = 2 * o;
                for (u = 2 * (o - u) ; w != s;)
                    if (A <= 0 ? A = A + C : (A = A + u, z = z + H), w = w + G, w < e && w >= 0 && z < f && z >= 0) {
                        j = [h[(z * e + w) * 4], h[(z * e + w) * 4 + 1], h[(z * e + w) * 4 + 2], h[(z * e + w) * 4 + 3]];
                        K = b.mixColors(n, j, t);
                        for (j = 0; j < 3; j++) h[(z * e + w) * 4 + j] = K[j]
                    }
            } else {
                A = 2 * u - o;
                C = 2 * u;
                for (u = 2 * (u - o) ; z != r;)
                    if (A <=
                        0 ? A = A + C : (A = A + u, w = w + G), z = z + H, w < e && w >= 0 && z < f && z >= 0) {
                        j = [h[(z * e + w) * 4], h[(z * e + w) * 4 + 1], h[(z * e + w) * 4 + 2], h[(z * e + w) * 4 + 3]];
                        K = b.mixColors(n, j, t);
                        for (j = 0; j < 3; j++) h[(z * e + w) * 4 + j] = K[j]
                    }
            }
        }
        for (j = 0; j < h.length; j++) g[j] = h[j]
    }
}

function MaximumFilter() {
    this.name = "Maximum";
    this.isDirAnimatable = true;
    this.defaultValues = {};
    this.valueRanges = {};
    this.filter = function (b) {
        for (var c = b.width, d = b.height, b = b.data, e = [], f = 0; f < d; f++)
            for (var g = 0; g < c; g++) {
                for (var h = (f * c + g) * 4, j = 0, k = 0, l = 0, m = -1; m <= 1; m++) {
                    var n = f + m;
                    if (n >= 0 && n < d)
                        for (var q = -1; q <= 1; q++) {
                            var p = g + q;
                            p >= 0 && p < c && (p = (n * c + p) * 4, j = Math.max(j, b[p]), k = Math.max(k, b[p + 1]), l = Math.max(l, b[p + 2]))
                        }
                }
                e[h] = j;
                e[h + 1] = k;
                e[h + 2] = l;
                e[h + 3] = b[h + 3]
            }
        for (c = 0; c < e.length; c++) b[c] = e[c]
    }
}

function MedianFilter() {
    this.name = "Median";
    this.isDirAnimatable = false;
    this.defaultValues = {};
    this.valueRanges = {};
    this.filter = function (b) {
        for (var c = b.width, d = b.height, b = b.data, e = [], f = 0; f < d; f++)
            for (var g = 0; g < c; g++) {
                for (var h = (f * c + g) * 4, j = [], k = [], l = [], m = -1; m <= 1; m++) {
                    var n = f + m;
                    if (n >= 0 && n < d)
                        for (var q = -1; q <= 1; q++) {
                            var p = g + q;
                            p >= 0 && p < c && (p = (n * c + p) * 4, j.push(b[p]), k.push(b[p + 1]), l.push(b[p + 2]))
                        }
                }
                m = function (b, c) {
                    return b - c
                };
                j.sort(m);
                k.sort(m);
                l.sort(m);
                e[h] = j[4];
                e[h + 1] = k[4];
                e[h + 2] = l[4];
                e[h + 3] = b[h + 3]
            }
        for (c = 0; c <
            e.length; c++) b[c] = e[c]
    }
}

function MinimumFilter() {
    this.name = "Minimum";
    this.isDirAnimatable = true;
    this.defaultValues = {};
    this.valueRanges = {};
    this.filter = function (b) {
        for (var c = b.width, d = b.height, b = b.data, e = [], f = 0; f < d; f++)
            for (var g = 0; g < c; g++) {
                for (var h = (f * c + g) * 4, j = 255, k = 255, l = 255, m = -1; m <= 1; m++) {
                    var n = f + m;
                    if (n >= 0 && n < d)
                        for (var q = -1; q <= 1; q++) {
                            var p = g + q;
                            p >= 0 && p < c && (p = (n * c + p) * 4, j = Math.min(j, b[p]), k = Math.min(k, b[p + 1]), l = Math.min(l, b[p + 2]))
                        }
                }
                e[h] = j;
                e[h + 1] = k;
                e[h + 2] = l;
                e[h + 3] = b[h + 3]
            }
        for (c = 0; c < e.length; c++) b[c] = e[c]
    }
}

function NoiseFilter() {
    this.name = "Noise";
    this.isDirAnimatable = true;
    this.defaultValues = {
        amount: 25,
        density: 1,
        monochrome: true
    };
    this.valueRanges = {
        amount: {
            min: 0,
            max: 100
        },
        density: {
            min: 0,
            max: 1
        },
        monochrome: {
            min: false,
            max: true
        }
    };
    this.filter = function (b, c) {
        var d = b.width,
            e = b.height,
            f = b.data;
        if (c === void 0) c = this.defaultValues;
        for (var g = c.amount === void 0 ? this.defaultValues.amount : c.amount, h = c.density === void 0 ? this.defaultValues.density : c.density, j = c.monochrome === void 0 ? this.defaultValues.monochrome : c.monochrome,
                k = 0; k < e; k++)
            for (var l = 0; l < d; l++) {
                var m = (k * d + l) * 4;
                if (Math.random() <= h) {
                    var n;
                    if (j) {
                        n = parseInt((2 * Math.random() - 1) * g, 10);
                        f[m] = f[m] + n;
                        f[m + 1] = f[m + 1] + n;
                        f[m + 2] = f[m + 2] + n
                    } else
                        for (var q = 0; q < 3; q++) {
                            n = parseInt((2 * Math.random() - 1) * g, 10);
                            f[m + q] = f[m + q] + n
                        }
                }
            }
    }
}

function OilFilter() {
    this.name = "Oil Painting";
    this.isDirAnimatable = false;
    this.defaultValues = {
        range: 3
    };
    this.valueRanges = {
        range: {
            min: 0,
            max: 5
        }
    };
    this.filter = function (b, c) {
        var d = b.width,
            e = b.height,
            f = b.data,
            g = [];
        if (c === void 0) c = this.defaultValues;
        for (var h = c.range === void 0 ? this.defaultValues.range : c.range, h = parseInt(h, 10), j = [], k = [], l = [], m = [], n = [], q = [], p = 0; p < e; p++)
            for (var s = 0; s < d; s++) {
                for (var r = (p * d + s) * 4, o = 0; o < 256; o++) j[o] = k[o] = l[o] = m[o] = n[o] = q[o] = 0;
                for (o = -h; o <= h; o++) {
                    var t = p + o;
                    if (0 <= t && t < e)
                        for (var t = t *
                                d, u = -h; u <= h; u++) {
                            var w = s + u;
                            if (0 <= w && w < d) {
                                var z = f[(t + w) * 4],
                                    A = f[(t + w) * 4 + 1],
                                    w = f[(t + w) * 4 + 2],
                                    C = z * 256 / 256,
                                    G = A * 256 / 256,
                                    H = w * 256 / 256;
                                m[C] = m[C] + z;
                                n[G] = n[G] + A;
                                q[H] = q[H] + w;
                                j[C]++;
                                k[G]++;
                                l[H]++
                            }
                        }
                }
                u = t = o = 0;
                for (z = 1; z < 256; z++) {
                    j[z] > j[o] && (o = z);
                    k[z] > k[t] && (t = z);
                    l[z] > l[u] && (u = z)
                }
                o = m[o] / j[o];
                t = n[t] / k[t];
                u = q[u] / l[u];
                g[r] = o;
                g[r + 1] = t;
                g[r + 2] = u;
                g[r + 3] = f[r + 3]
            }
        for (d = 0; d < g.length; d++) f[d] = g[d]
    }
}

function OpacityFilter() {
    this.name = "Opacity";
    this.isDirAnimatable = true;
    this.defaultValues = {
        amount: 1
    };
    this.valueRanges = {
        amount: {
            min: 0,
            max: 1
        }
    };
    this.filter = function (b, c) {
        var d = b.width,
            e = b.height,
            f = b.data;
        if (c === void 0) c = this.defaultValues;
        for (var g = c.amount === void 0 ? this.defaultValues.amount : c.amount, h = 0; h < e; h++)
            for (var j = 0; j < d; j++) f[(h * d + j) * 4 + 3] = 255 * g
    }
}

function PinchFilter() {
    this.name = "Pinch/Whirl";
    this.isDirAnimatable = false;
    this.defaultValues = {
        amount: 0.5,
        radius: 100,
        angle: 0,
        centerX: 0.5,
        centerY: 0.5
    };
    this.valueRanges = {
        amount: {
            min: -1,
            max: 1
        },
        radius: {
            min: 1,
            max: 200
        },
        angle: {
            min: 0,
            max: 360
        },
        centerX: {
            min: 0,
            max: 1
        },
        centerY: {
            min: 0,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        var h = d.amount === void 0 ? this.defaultValues.amount : d.amount,
            j = d.angle === void 0 ? this.defaultValues.angle : d.angle,
            k = d.centerX === void 0 ? this.defaultValues.centerX : d.centerX,
            l = d.centerY === void 0 ? this.defaultValues.centerY : d.centerY,
            m = d.radius === void 0 ? this.defaultValues.radius : d.radius,
            n = m * m,
            j = j / 180 * Math.PI,
            q = e * k,
            p = f * l;
        b.transformFilter(g, function (b, c, d) {
            var e = b - q,
                f = c - p,
                g = e * e + f * f;
            g > n || g === 0 ? (d[0] = b, d[1] = c) : (b = Math.sqrt(g / n), c = Math.pow(Math.sin(Math.PI * 0.5 * b), -h), e = e * c, f = f * c, b = 1 - b, c = j * b * b, b = Math.sin(c), c = Math.cos(c), d[0] = q + c * e - b * f, d[1] = p + b * e + c * f)
        }, e, f)
    }
}

function PixelationFilter() {
    this.name = "Pixelation";
    this.isDirAnimatable = false;
    this.defaultValues = {
        size: 5
    };
    this.valueRanges = {
        size: {
            min: 1,
            max: 50
        }
    };
    this.filter = function (b, c) {
        var d = b.width,
            e = b.height,
            f = b.data;
        if (c === void 0) c = this.defaultValues;
        for (var g = c.size === void 0 ? this.defaultValues.size : c.size, g = parseInt(g, 10), h, j, k, l = 0; l < e; l = l + g)
            for (var m = 0; m < d; m = m + g) {
                var n = Math.min(g, d - m),
                    q = Math.min(g, e - l),
                    p = n * q,
                    s = 0,
                    r = 0,
                    o = 0;
                for (h = l; h < l + q; h++)
                    for (j = m; j < m + n; j++) {
                        k = (h * d + j) * 4;
                        s = s + f[k];
                        r = r + f[k + 1];
                        o = o + f[k + 2]
                    }
                for (h =
                    l; h < l + q; h++)
                    for (j = m; j < m + n; j++) {
                        k = (h * d + j) * 4;
                        f[k] = s / p;
                        f[k + 1] = r / p;
                        f[k + 2] = o / p
                    }
            }
    }
}

function PosterizeFilter() {
    this.name = "Posterize";
    this.isDirAnimatable = false;
    this.defaultValues = {
        levels: 6
    };
    this.valueRanges = {
        levels: {
            min: 2,
            max: 30
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        var h = d.levels === void 0 ? this.defaultValues.levels : parseInt(d.levels, 10);
        if (!(h <= 1)) {
            for (var j = [], k = 0; k < 256; k++) j[k] = parseInt(255 * parseInt(k * h / 256, 10) / (h - 1), 10);
            b.tableFilter(g, j, e, f)
        }
    }
}

function RGBAdjustFilter() {
    this.name = "RGBAdjust";
    this.isDirAnimatable = true;
    this.defaultValues = {
        red: 1,
        green: 1,
        blue: 1
    };
    this.valueRanges = {
        red: {
            min: 0,
            max: 2
        },
        green: {
            min: 0,
            max: 2
        },
        blue: {
            min: 0,
            max: 2
        }
    };
    this.filter = function (b, c) {
        var d = b.width,
            e = b.height,
            f = b.data;
        if (c === void 0) c = this.defaultValues;
        var g = c.red === void 0 ? this.defaultValues.red : c.red,
            h = c.green === void 0 ? this.defaultValues.green : c.green,
            j = c.blue === void 0 ? this.defaultValues.blue : c.blue;
        g < 0 && (g = 0);
        h < 0 && (h = 0);
        j < 0 && (j = 0);
        for (var k = 0; k < e; k++)
            for (var l =
                    0; l < d; l++) {
                var m = (k * d + l) * 4;
                f[m] = f[m] * g;
                f[m + 1] = f[m + 1] * h;
                f[m + 2] = f[m + 2] * j
            }
    }
}

function SaturationFilter() {
    this.name = "Saturation";
    this.isDirAnimatable = true;
    this.defaultValues = {
        amount: 1
    };
    this.valueRanges = {
        amount: {
            min: 0,
            max: 2
        }
    };
    this.filter = function (b, c) {
        var d = b.width,
            e = b.height,
            f = b.data;
        if (c === void 0) c = this.defaultValues;
        for (var g = c.amount === void 0 ? this.defaultValues.amount : c.amount, h = (1 - g) * 0.3 + g, j = (1 - g) * 0.3, k = (1 - g) * 0.3, l = (1 - g) * 0.59, m = (1 - g) * 0.59 + g, n = (1 - g) * 0.59, q = (1 - g) * 0.11, p = (1 - g) * 0.11, g = (1 - g) * 0.11 + g, s = 0; s < e; s++)
            for (var r = 0; r < d; r++) {
                var o = (s * d + r) * 4,
                    t = f[o],
                    u = f[o + 1],
                    w = f[o + 2];
                f[o] =
                    h * t + l * u + q * w;
                f[o + 1] = j * t + m * u + p * w;
                f[o + 2] = k * t + n * u + g * w
            }
    }
}

function SawtoothRippleFilter() {
    this.name = "Sawtooth Ripples";
    this.isDirAnimatable = false;
    this.defaultValues = {
        xAmplitude: 5,
        yAmplitude: 5,
        xWavelength: 16,
        yWavelength: 16
    };
    this.valueRanges = {
        xAmplitude: {
            min: 0,
            max: 30
        },
        yAmplitude: {
            min: 0,
            max: 30
        },
        xWavelength: {
            min: 1,
            max: 50
        },
        yWavelength: {
            min: 1,
            max: 50
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        var h = d.xAmplitude === void 0 ? this.defaultValues.xAmplitude : d.xAmplitude,
            j = d.yAmplitude === void 0 ?
            this.defaultValues.yAmplitude : d.yAmplitude,
            k = d.xWavelength === void 0 ? this.defaultValues.xWavelength : d.xWavelength,
            l = d.yWavelength === void 0 ? this.defaultValues.yWavelength : d.yWavelength;
        b.transformFilter(g, function (c, d, e) {
            var f = c / l,
                g = b.mod(d / k, 1),
                f = b.mod(f, 1);
            e[0] = c + h * g;
            e[1] = d + j * f
        }, e, f)
    }
}

function SepiaFilter() {
    this.name = "Sepia";
    this.isDirAnimatable = true;
    this.defaultValues = {
        amount: 10
    };
    this.valueRanges = {
        amount: {
            min: 0,
            max: 30
        }
    };
    new FilterUtils;
    this.filter = function (b, c) {
        var d = b.width,
            e = b.height,
            f = b.data;
        if (c === void 0) c = this.defaultValues;
        for (var g = c.amount === void 0 ? this.defaultValues.amount : c.amount, g = g * 2.55, h = 0; h < e; h++)
            for (var j = 0; j < d; j++) {
                var k = (h * d + j) * 4,
                    l, m, n;
                l = m = n = f[k] * 0.3 + f[k + 1] * 0.59 + f[k + 2] * 0.11;
                l = l + 40;
                m = m + 20;
                n = n - g;
                f[k] = l;
                f[k + 1] = m;
                f[k + 2] = n
            }
    }
}

function SharpenFilter() {
    this.name = "Sharpen";
    this.isDirAnimatable = true;
    this.defaultValues = {};
    this.valueRanges = {};
    var b = new FilterUtils;
    this.filter = function (c) {
        b.convolveFilter(c.data, [0, -0.2, 0, -0.2, 1.8, -0.2, 0, -0.2, 0], c.width, c.height)
    }
}

function SineRippleFilter() {
    this.name = "Sine Ripples";
    this.isDirAnimatable = false;
    this.defaultValues = {
        xAmplitude: 5,
        yAmplitude: 5,
        xWavelength: 16,
        yWavelength: 16
    };
    this.valueRanges = {
        xAmplitude: {
            min: 0,
            max: 30
        },
        yAmplitude: {
            min: 0,
            max: 30
        },
        xWavelength: {
            min: 1,
            max: 50
        },
        yWavelength: {
            min: 1,
            max: 50
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        var h = d.xAmplitude === void 0 ? this.defaultValues.xAmplitude : d.xAmplitude,
            j = d.yAmplitude === void 0 ? this.defaultValues.yAmplitude :
            d.yAmplitude,
            k = d.xWavelength === void 0 ? this.defaultValues.xWavelength : d.xWavelength,
            l = d.yWavelength === void 0 ? this.defaultValues.yWavelength : d.yWavelength;
        b.transformFilter(g, function (b, c, d) {
            var e = Math.sin(b / l);
            d[0] = b + h * Math.sin(c / k);
            d[1] = c + j * e
        }, e, f)
    }
}

function SolarizeFilter() {
    this.name = "Solarize";
    this.isDirAnimatable = true;
    this.defaultValues = {};
    this.valueRanges = {};
    var b = new FilterUtils;
    this.filter = function (c) {
        for (var d = c.width, e = c.height, c = c.data, f = [], g = 0; g < 256; g++) f[g] = parseInt(255 * (g / 255 > 0.5 ? 2 * (g / 255 - 0.5) : 2 * (0.5 - g / 255)), 10);
        b.tableFilter(c, f, d, e)
    }
}

function SparkleFilter() {
    this.name = "Sparkle";
    this.isDirAnimatable = false;
    this.defaultValues = {
        rays: 50,
        size: 25,
        amount: 50,
        randomness: 25,
        centerX: 0.5,
        centerY: 0.5
    };
    this.valueRanges = {
        rays: {
            min: 1,
            max: 100
        },
        size: {
            min: 1,
            max: 200
        },
        amount: {
            min: 0,
            max: 100
        },
        randomness: {
            min: 0,
            max: 50
        },
        centerX: {
            min: 0,
            max: 1
        },
        centerY: {
            min: 0,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        for (var h = d.rays === void 0 ? this.defaultValues.rays : d.rays, h = parseInt(h, 10),
                j = d.size === void 0 ? this.defaultValues.size : d.size, k = d.amount === void 0 ? this.defaultValues.amount : d.amount, l = d.randomness === void 0 ? this.defaultValues.randomness : d.randomness, m = (d.centerX === void 0 ? this.defaultValues.centerX : d.centerX) * e, n = (d.centerY === void 0 ? this.defaultValues.centerY : d.centerY) * f, q = [], p = 0; p < h; p++) q[p] = j + l / 100 * j * b.gaussianRandom();
        for (l = 0; l < f; l++)
            for (p = 0; p < e; p++) {
                var s = (l * e + p) * 4,
                    r = p - m,
                    o = l - n,
                    t = r * r + o * o,
                    r = (Math.atan2(o, r) + Math.PI) / (Math.PI * 2) * h,
                    o = parseInt(r, 10),
                    r = r - o;
                j !== 0 && (o = b.linearInterpolate(r,
                    q[o % h], q[(o + 1) % h]), t = o * o / (t + 1.0E-4), t = Math.pow(t, (100 - k) / 50), r = r - 0.5, r = 1 - r * r, r = r * t);
                r = b.clampPixel(r, 0, 1);
                t = b.mixColors(r, [g[s], g[s + 1], g[s + 2], g[s + 3]], [255, 255, 255, 255]);
                for (r = 0; r < 3; r++) g[s + r] = t[r]
            }
    }
}

function SquareSmearFilter() {
    this.name = "Square Smear";
    this.isDirAnimatable = false;
    this.defaultValues = {
        size: 4,
        density: 0.5,
        mix: 0.5
    };
    this.valueRanges = {
        size: {
            min: 1,
            max: 10
        },
        density: {
            min: 0,
            max: 1
        },
        mix: {
            min: 0,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data,
            h = [],
            j;
        for (j = 0; j < g.length; j++) h[j] = g[j];
        if (d === void 0) d = this.defaultValues;
        j = d.size === void 0 ? this.defaultValues.size : d.size;
        j < 1 && (j = 1);
        j = parseInt(j, 10);
        for (var k = d.mix === void 0 ? this.defaultValues.mix : d.mix, l = j + 1,
                m = parseInt(2 * (d.density === void 0 ? this.defaultValues.density : d.density) / 30 * e * f / 2, 10), n = 0; n < m; n++)
            for (var q = (Math.random() * Math.pow(2, 32) & 2147483647) % e, p = (Math.random() * Math.pow(2, 32) & 2147483647) % f, s = [g[(p * e + q) * 4], g[(p * e + q) * 4 + 1], g[(p * e + q) * 4 + 2], g[(p * e + q) * 4 + 3]], r = q - l; r < q + l + 1; r++)
                for (var o = p - l; o < p + l + 1; o++)
                    if (r >= 0 && r < e && o >= 0 && o < f) {
                        var t = b.mixColors(k, [h[(o * e + r) * 4], h[(o * e + r) * 4 + 1], h[(o * e + r) * 4 + 2], h[(o * e + r) * 4 + 3]], s);
                        for (j = 0; j < 3; j++) h[(o * e + r) * 4 + j] = t[j]
                    }
        for (j = 0; j < h.length; j++) g[j] = h[j]
    }
}

function ThresholdFilter() {
    this.name = "Black & White";
    this.isDirAnimatable = true;
    this.defaultValues = {
        threshold: 127
    };
    this.valueRanges = {
        threshold: {
            min: 0,
            max: 255
        }
    };
    this.filter = function (b, c) {
        var d = b.width,
            e = b.height,
            f = b.data;
        if (c === void 0) c = this.defaultValues;
        for (var g = c.threshold === void 0 ? this.defaultValues.threshold : c.threshold, h = 0; h < e; h++)
            for (var j = 0; j < d; j++) {
                var k = (h * d + j) * 4,
                    l = 0;
                (f[k] + f[k + 1] + f[k + 2]) / 3 > g && (l = 255);
                f[k] = f[k + 1] = f[k + 2] = l
            }
    }
}

function TriangleRippleFilter() {
    this.name = "Triangle Ripples";
    this.isDirAnimatable = false;
    this.defaultValues = {
        xAmplitude: 5,
        yAmplitude: 5,
        xWavelength: 16,
        yWavelength: 16
    };
    this.valueRanges = {
        xAmplitude: {
            min: 0,
            max: 30
        },
        yAmplitude: {
            min: 0,
            max: 30
        },
        xWavelength: {
            min: 1,
            max: 50
        },
        yWavelength: {
            min: 1,
            max: 50
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        var h = d.xAmplitude === void 0 ? this.defaultValues.xAmplitude : d.xAmplitude,
            j = d.yAmplitude === void 0 ?
            this.defaultValues.yAmplitude : d.yAmplitude,
            k = d.xWavelength === void 0 ? this.defaultValues.xWavelength : d.xWavelength,
            l = d.yWavelength === void 0 ? this.defaultValues.yWavelength : d.yWavelength;
        b.transformFilter(g, function (c, d, e) {
            var f = c / l,
                g = b.triangle(d / k, 1),
                f = b.triangle(f, 1);
            e[0] = c + h * g;
            e[1] = d + j * f
        }, e, f)
    }
}

function TwirlFilter() {
    this.name = "Twirl";
    this.isDirAnimatable = false;
    this.defaultValues = {
        radius: 100,
        angle: 180,
        centerX: 0.5,
        centerY: 0.5
    };
    this.valueRanges = {
        radius: {
            min: 1,
            max: 200
        },
        angle: {
            min: 0,
            max: 360
        },
        centerX: {
            min: 0,
            max: 1
        },
        centerY: {
            min: 0,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        var h = d.angle === void 0 ? this.defaultValues.angle : d.angle,
            j = d.centerX === void 0 ? this.defaultValues.centerX : d.centerX,
            k = d.centerY === void 0 ? this.defaultValues.centerY :
            d.centerY,
            l = d.radius === void 0 ? this.defaultValues.radius : d.radius,
            m = l * l,
            h = h / 180 * Math.PI,
            n = e * j,
            q = f * k;
        b.transformFilter(g, function (b, c, d) {
            var e = b - n,
                f = c - q,
                g = e * e + f * f;
            g > m ? (d[0] = b, d[1] = c) : (g = Math.sqrt(g), b = Math.atan2(f, e) + h * (l - g) / l, d[0] = n + g * Math.cos(b), d[1] = q + g * Math.sin(b))
        }, e, f)
    }
}

function VignetteFilter() {
    this.name = "Vignette";
    this.isDirAnimatable = false;
    this.defaultValues = {
        amount: 0.3
    };
    this.valueRanges = {
        amount: {
            min: 0,
            max: 1
        }
    };
    this.filter = function (b, c) {
        var d = b.width,
            e = b.height,
            f = b.data,
            g = [];
        if (c === void 0) c = this.defaultValues;
        var g = c.amount === void 0 ? this.defaultValues.amount : c.amount,
            h = document.createElement("canvas");
        h.width = d;
        h.height = e;
        var h = h.getContext("2d"),
            j;
        j = Math.sqrt(Math.pow(d / 2, 2) + Math.pow(e / 2, 2));
        h.putImageData(b, 0, 0);
        h.globalCompositeOperation = "source-over";
        j = h.createRadialGradient(d /
            2, e / 2, 0, d / 2, e / 2, j);
        j.addColorStop(0, "rgba(0,0,0,0)");
        j.addColorStop(0.5, "rgba(0,0,0,0)");
        j.addColorStop(1, "rgba(0,0,0," + g + ")");
        h.fillStyle = j;
        h.fillRect(0, 0, d, e);
        g = h.getImageData(0, 0, d, e).data;
        for (d = 0; d < g.length; d++) f[d] = g[d]
    }
}

function WaterRippleFilter() {
    this.name = "Water Ripples";
    this.isDirAnimatable = false;
    this.defaultValues = {
        phase: 0,
        radius: 50,
        wavelength: 16,
        amplitude: 10,
        centerX: 0.5,
        centerY: 0.5
    };
    this.valueRanges = {
        phase: {
            min: 0,
            max: 100
        },
        radius: {
            min: 1,
            max: 200
        },
        wavelength: {
            min: 1,
            max: 100
        },
        amplitude: {
            min: 1,
            max: 100
        },
        centerX: {
            min: 0,
            max: 1
        },
        centerY: {
            min: 0,
            max: 1
        }
    };
    var b = new FilterUtils;
    this.filter = function (c, d) {
        var e = c.width,
            f = c.height,
            g = c.data;
        if (d === void 0) d = this.defaultValues;
        var h = d.wavelength === void 0 ? this.defaultValues.wavelength :
            d.wavelength,
            j = d.amplitude === void 0 ? this.defaultValues.amplitude : d.amplitude,
            k = d.phase === void 0 ? this.defaultValues.phase : d.phase,
            l = d.radius === void 0 ? this.defaultValues.radius : d.radius,
            m = l * l,
            n = e * (d.centerX === void 0 ? this.defaultValues.centerX : d.centerX),
            q = f * (d.centerY === void 0 ? this.defaultValues.centerY : d.centerY);
        b.transformFilter(g, function (b, c, d) {
            var e = b - n,
                f = c - q,
                g = e * e + f * f;
            if (g > m) {
                d[0] = b;
                d[1] = c
            } else {
                var g = Math.sqrt(g),
                    w = j * Math.sin(g / h * Math.PI * 2 - k),
                    w = w * ((l - g) / l);
                g !== 0 && (w = w * (h / g));
                d[0] = b + e * w;
                d[1] =
                    c + f * w
            }
        }, e, f)
    }
}
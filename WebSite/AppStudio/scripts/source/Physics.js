var Physics = {
    world: null,
    scale: 30
},
    b2Vec2 = Box2D.Common.Math.b2Vec2,
    b2AABB = Box2D.Collision.b2AABB,
    b2BodyDef = Box2D.Dynamics.b2BodyDef,
    b2Body = Box2D.Dynamics.b2Body,
    b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
    b2Fixture = Box2D.Dynamics.b2Fixture,
    b2World = Box2D.Dynamics.b2World,
    b2WorldManifold = Box2D.Collision.b2WorldManifold,
    b2MassData = Box2D.Collision.Shapes.b2MassData,
    b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
    b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
    b2DebugDraw = Box2D.Dynamics.b2DebugDraw,
    b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef;
Physics.initPhysics = function (b) {
    var c = {
        gravityX: 0,
        gravityY: 10
    };
    $.extend(c, b);
    this.world = new b2World(new b2Vec2(c.gravityX, c.gravityY), true);
    Runtime.stage.tileLayer.setup();
    this.rightBody = this.leftBody = this.topBody = this.bottomBody = null;
    Physics.updateWorld();
    this.world.SetContactListener(this);
    this.world.SetContactFilter(this)
};
Physics.setDebug = function (b) {
    if (b) {
        this.debugDraw = new b2DebugDraw;
        this.debugDraw.SetSprite(Runtime.stage.penLayer.context);
        this.debugDraw.SetDrawScale(Physics.scale);
        this.debugDraw.SetFillAlpha(0.3);
        this.debugDraw.SetLineThickness(1);
        this.debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
        this.world.SetDebugDraw(this.debugDraw)
    } else {
        this.debugDraw = null;
        this.world.SetDebugDraw(null);
        Runtime.stage.penLayer.clear()
    }
};
Physics.updateWorld = function () {
    var b = Runtime.stage.getWidth(),
        c = Runtime.stage.getHeight();
    if (Runtime.stage.tileLayer.enabled && Runtime.stage.tileLayer.map && Runtime.stage.tileLayer.map.length > 0) {
        b = Runtime.stage.tileLayer.mapWidth * Runtime.stage.tileLayer.tileSize;
        c = Runtime.stage.tileLayer.mapHeight * Runtime.stage.tileLayer.tileSize
    }
    var d = new b2FixtureDef;
    d.density = 1;
    d.friction = 0.5;
    d.restitution = 0.2;
    var e = true;
    if (this.bottomBody) {
        e = this.bottomBody.GetFixtureList();
        d.density = e.GetDensity();
        d.friction = e.GetFriction();
        d.restitution = e.GetRestitution();
        e = this.bottomBody.IsActive();
        this.removeBody(this.bottomBody)
    }
    this.topBody && this.removeBody(this.topBody);
    this.leftBody && this.removeBody(this.leftBody);
    this.rightBody && this.removeBody(this.rightBody);
    var f = new b2BodyDef;
    f.type = b2Body.b2_staticBody;
    d.shape = new b2PolygonShape;
    d.shape.SetAsBox(b / this.scale, 1);
    f.position.Set(b / this.scale / 2, c / this.scale + 0.9);
    this.bottomBody = this.world.CreateBody(f);
    this.bottomBody.CreateFixture(d);
    this.bottomBody.SetActive(e);
    f.position.Set(b /
        this.scale / 2, -0.9);
    this.topBody = this.world.CreateBody(f);
    this.topBody.CreateFixture(d);
    this.topBody.SetActive(e);
    d.shape.SetAsBox(1, c / this.scale);
    f.position.Set(-0.9, c / this.scale / 2);
    this.leftBody = this.world.CreateBody(f);
    this.leftBody.CreateFixture(d);
    this.leftBody.SetActive(e);
    f.position.Set(b / this.scale + 0.9, c / this.scale / 2);
    this.rightBody = this.world.CreateBody(f);
    this.rightBody.CreateFixture(d);
    this.rightBody.SetActive(e);
    return this.world
};
Physics.isBodyTouching = function (b, c) {
    for (var d = this.world.GetContactList() ; d;) {
        var e = d.GetFixtureA().GetBody(),
            f = d.GetFixtureB().GetBody();
        if (e == b && f == c || f == b && e == c) return true;
        d = d.GetNext()
    }
    return false
};
Physics.BeginContact = function (b) {
    var c = b.GetFixtureA().GetBody(),
        d = b.GetFixtureB().GetBody(),
        e = new b2WorldManifold;
    b.GetWorldManifold(e);
    var f = b = "";
    if (c == Physics.leftBody) b = "left edge";
    else if (c == Physics.rightBody) b = "right edge";
    else if (c == Physics.topBody) b = "top edge";
    else if (c == Physics.bottomBody) b = "bottom edge";
    else {
        var g = c.GetUserData();
        if (typeof g == "number" || typeof g == "string") b = Runtime.stage.tileLayer._tileSetRevMap[g] + " tiles";
        else if (g) f = b = g.sprite.label
    }
    var h = "",
        j = "";
    if (d == Physics.leftBody) h =
        "left edge";
    else if (d == Physics.rightBody) h = "right edge";
    else if (d == Physics.topBody) h = "top edge";
    else if (d == Physics.bottomBody) h = "bottom edge";
    else {
        g = d.GetUserData();
        if (typeof g == "number" || typeof g == "string") h = Runtime.stage.tileLayer._tileSetRevMap[g] + " tiles";
        else if (g) j = h = g.sprite.label
    }
    if (c.GetUserData() && typeof c.GetUserData() == "object") {
        g = c.GetUserData().sprite;
        g.lastCollisionName = h;
        g.lastCollisionNormal = {
            x: e.m_normal.x,
            y: e.m_normal.y
        };
        if (j) {
            g.lastActorCollisionName = j;
            g.lastActorCollisionNormal = {
                x: e.m_normal.x,
                y: e.m_normal.y
            }
        }
    }
    if (d.GetUserData() && typeof d.GetUserData() == "object") {
        g = d.GetUserData().sprite;
        g.lastCollisionName = b;
        g.lastCollisionNormal = {
            x: e.m_normal.x,
            y: e.m_normal.y
        };
        if (f) {
            g.lastActorCollisionName = f;
            g.lastActorCollisionNormal = {
                x: e.m_normal.x,
                y: e.m_normal.y
            }
        }
    }
    for (e = 0; e < Runtime.collisionTriggers.length; e++) {
        b = Runtime.collisionTriggers[e];
        f = b.sprite.spriteObj.physicsBody;
        (f == c || f == d) && Runtime.scheduleToRun(b)
    }
    return false
};
Physics.EndContact = function () { };
Physics.PostSolve = function () { };
Physics.PreSolve = function () { };
Physics.ShouldCollide = function (b, c) {
    for (var d = b.GetBody(), e = c.GetBody(), f = 0; f < Runtime.sprites.length; f++) {
        var g = Runtime.sprites[f],
            h = new Script({
                sprite: g,
                origSprite: g,
                scriptBlock: new Block(g_steps.nop)
            }),
            j = h.running = true,
            j = "";
        if (g.spriteObj.physicsBody == d) {
            var j = e.GetUserData(),
                j = typeof j == "number" || typeof j == "string" ? Runtime.stage.tileLayer._tileSetRevMap[j] + " tiles" : j ? j.sprite.label : "edge",
                k = h._findFunction(g, "ShouldCollide");
            if (k) {
                j = h._valueControlCall(g, k, [j]);
                if (!h.error) return j
            }
        } else if (g.spriteObj.physicsBody == e) {
            j =
                d.GetUserData();
            j = typeof j == "number" || typeof j == "string" ? Runtime.stage.tileLayer._tileSetRevMap[j] + " tiles" : j ? j.sprite.label : "edge";
            if (k = h._findFunction(g, "ShouldCollide")) {
                j = h._valueControlCall(g, k, [j]);
                if (!h.error) return j
            }
        }
    }
    return true
};
Physics.findBody = function (b) {
    for (var c = this.world.GetBodyList() ; c;) {
        if (c.GetUserData() == b) return c;
        c = c.GetNext()
    }
    return null
};
Physics.removeBody = function (b) {
    this.world.DestroyBody(b);
    for (var c = this.world.GetBodyList() ; c;) {
        if (c == b) {
            this.world.DestroyBody(b);
            break
        }
        c = c.GetNext()
    }
};
Physics.addBody = function (b, c) {
    var d = {
        staticBody: false,
        fixedRotation: false,
        x: 0,
        y: 0,
        width: 1,
        height: 1,
        rotation: c.rotation * Math.PI / 180,
        density: 1,
        friction: 0.5,
        restitution: 0.2,
        isActive: true,
        geometry: "rectangular"
    };
    if (c) {
        d.fixedRotation = c.rotateLock != 0;
        d.x = c.x / this.scale;
        d.y = c.y / this.scale;
        if (c.drawWidth && c.drawHeight) {
            d.width = c.drawWidth * c.scale.x / this.scale;
            d.height = c.drawHeight * c.scale.x / this.scale
        } else {
            d.width = c.width * c.scale.x / this.scale;
            d.height = c.height * c.scale.x / this.scale
        }
    }
    $.extend(d, b);
    var e = new b2BodyDef;
    e.type = d.staticBody ? b2Body.b2_staticBody : b2Body.b2_dynamicBody;
    e.fixedRotation = d.fixedRotation ? true : false;
    e.position.x = d.x;
    e.position.y = d.y;
    e.angle = d.rotation;
    var f = new b2FixtureDef;
    f.density = d.density;
    f.friction = d.friction;
    f.restitution = d.restitution;
    if (d.geometry == "circular") f.shape = d.width > d.height ? new b2CircleShape(d.width / 2) : new b2CircleShape(d.height / 2);
    else {
        f.shape = new b2PolygonShape;
        f.shape.SetAsBox(d.width / 2, d.height / 2)
    }
    if (c) {
        c.geometry = d.geometry;
        e.userData = c
    }
    e = this.world.CreateBody(e);
    e.CreateFixture(f);
    e.SetActive(d.isActive);
    return c.physicsBody = e
};
Physics.resetBody = function (b) {
    var c = b.physicsBody;
    if (c) {
        var d = c.GetFixtureList(),
            e = c.IsActive(),
            f, g;
        if (b.drawWidth && b.drawHeight) {
            f = b.drawWidth * b.scale.x / this.scale;
            g = b.drawHeight * b.scale.x / this.scale
        } else {
            f = b.width * b.scale.x / this.scale;
            g = b.height * b.scale.x / this.scale
        }
        this.world.DestroyBody(c);
        var h = new b2BodyDef;
        h.type = c.GetType();
        h.fixedRotation = b.rotateLock != 0;
        h.position.x = b.x / this.scale;
        h.position.y = b.y / this.scale;
        h.angle = b.rotation * Math.PI / 180;
        h.userData = b;
        var j = new b2FixtureDef;
        j.density = d.GetDensity();
        j.friction = d.GetFriction();
        j.restitution = d.GetRestitution();
        if (b.geometry == "circular") j.shape = f > g ? new b2CircleShape(f / 2) : new b2CircleShape(g / 2);
        else {
            j.shape = new b2PolygonShape;
            j.shape.SetAsBox(f / 2, g / 2)
        }
        c = this.world.CreateBody(h);
        c.CreateFixture(j);
        c.SetActive(e);
        b.physicsBody = c
    }
};
Physics.updateFixture = function (b, c, d, e) {
    var f = b.physicsBody.GetFixtureList();
    if (f) {
        f.SetDensity(c);
        f.SetFriction(d);
        f.SetRestitution(e);
        b.physicsBody.ResetMassData()
    }
};
Physics.updateType = function (b, c) {
    b.physicsBody.SetType(c)
};
Physics.updateBody = function (b, c) {
    var d = b.physicsBody;
    if (d) {
        var e = {
            isStatic: d.GetType() == b2Body.b2_staticBody,
            isActive: d.IsActive(),
            rotation: d.GetAngle(),
            geometry: b.geometry
        },
            f = d.GetFixtureList();
        if (f) {
            e.density = f.GetDensity();
            e.friction = f.GetFriction();
            e.restitution = f.GetRestitution()
        }
        $.extend(e, c);
        var f = d.GetAngle(),
            g = d.GetAngularDamping(),
            h = d.GetAngularVelocity(),
            j = d.GetLinearDamping(),
            k = d.GetLinearVelocity();
        this.world.DestroyBody(d);
        d = this.addBody(e, b);
        d.SetType(e.isStatic ? b2Body.b2_staticBody :
            b2Body.b2_dynamicBody);
        d.SetActive(e.isActive);
        d.SetAngle(f);
        d.SetAngularDamping(g);
        d.SetAngularVelocity(h);
        d.SetLinearDamping(j);
        d.SetLinearVelocity(k)
    }
};
Physics.getSpriteProperties = function (b) {
    var c = b.physicsBody;
    if (!c) return {
        isStatic: false,
        isActive: true,
        x: b.x,
        y: b.y,
        angle: b.angle,
        geometry: 0,
        density: 0,
        friction: 0,
        restitution: 0
    };
    var d = c.GetFixtureList();
    return {
        isStatic: c.GetType() == b2Body.b2_staticBody,
        isActive: c.IsActive(),
        x: c.GetPosition().x,
        y: c.GetPosition().y,
        angle: c.GetAngle(),
        geometry: b.geometry,
        density: d.GetDensity(),
        friction: d.GetFriction(),
        restitution: d.GetRestitution()
    }
};
Physics.getWorld = function () {
    return this.world
};
Physics.updateGravity = function (b, c) {
    this.world.SetGravity(new b2Vec2(b, c))
};
Physics.getGravity = function () {
    var b = this.world.GetGravity();
    return {
        x: b.x,
        y: b.y
    }
};
Physics.setStageActive = function (b) {
    this.bottomBody.SetActive(b);
    this.topBody.SetActive(b);
    this.leftBody.SetActive(b);
    this.rightBody.SetActive(b)
};
Physics.setStageDensity = function (b) {
    var c = this.bottomBody.GetFixtureList();
    if (c) {
        c.SetDensity(b);
        this.bottomBody.ResetMassData()
    }
    if (c = this.topBody.GetFixtureList()) {
        c.SetDensity(b);
        this.topBody.ResetMassData()
    }
    if (c = this.leftBody.GetFixtureList()) {
        c.SetDensity(b);
        this.leftBody.ResetMassData()
    }
    if (c = this.rightBody.GetFixtureList()) {
        c.SetDensity(b);
        this.rightBody.ResetMassData()
    }
};
Physics.setStageFriction = function (b) {
    var c = this.bottomBody.GetFixtureList();
    c && c.SetFriction(b);
    (c = this.topBody.GetFixtureList()) && c.SetFriction(b);
    (c = this.leftBody.GetFixtureList()) && c.SetFriction(b);
    (c = this.rightBody.GetFixtureList()) && c.SetFriction(b)
};
Physics.setStageRestitution = function (b) {
    var c = this.bottomBody.GetFixtureList();
    c && c.SetRestitution(b);
    (c = this.topBody.GetFixtureList()) && c.SetRestitution(b);
    (c = this.leftBody.GetFixtureList()) && c.SetRestitution(b);
    (c = this.rightBody.GetFixtureList()) && c.SetRestitution(b)
};
Physics.getStageDensity = function () {
    var b = this.bottomBody.GetFixtureList();
    return b ? b.GetDensity() : 1
};
Physics.getStageFriction = function () {
    var b = this.bottomBody.GetFixtureList();
    return b ? b.GetFriction() : 0.5
};
Physics.getStageRestitution = function () {
    var b = this.bottomBody.GetFixtureList();
    return b ? b.GetRestitution() : 0.2
};
Physics.isStageActive = function () {
    return this.bottomBody.IsActive()
};
Physics.updateSimulation = function () {
    var b = Date.now();
    this.world.Step((b - this.timestamp) / 1E3, 10, 10);
    this.timestamp = b;
    this.world.ClearForces();
    for (b = 0; b < Runtime.sprites.length; b++) {
        var c = Runtime.sprites[b],
            d = c.spriteObj,
            e = d.physicsBody;
        if (e) {
            var f = d.x,
                g = d.y,
                h = e.GetPosition(),
                j = h.x * this.scale,
                h = h.y * this.scale;
            if (c.penDown) {
                var k = Runtime.stage.penLayer.context;
                k.save();
                k.beginPath();
                k.strokeStyle = c.penColor;
                k.lineWidth = c.penWidth;
                k.lineCap = "round";
                k.moveTo(f, g);
                k.lineTo(j, h);
                k.stroke();
                k.closePath();
                k.restore()
            }
            d.setPosition2(j, h);
            c = e.GetAngle();
            d.rotateLock != 0 ? c > Math.PI / 2 && c < Math.PI * 3 / 2 ? (c < Math.PI - 0.001 || c > Math.PI + 0.001) && e.SetTransform({
                position: e.GetPosition(),
                GetAngle: function () {
                    return Math.PI
                }
            }) : c != 0 && e.SetTransform({
                position: e.GetPosition(),
                GetAngle: function () {
                    return 0
                }
            }) : d.setRotation2(e.GetAngle() / Math.PI * 180)
        }
    }
    if (this.debugDraw) {
        k = Runtime.stage.penLayer.context;
        k.save();
        k.setTransform(1, 0, 0, 1, 0, 0);
        k.clearRect(0, 0, k.canvas.width, k.canvas.height);
        k.restore();
        this.world.DrawDebugData()
    }
    Runtime.stage.draw()
};
Physics.runSimulation = function () {
    if (!this.simulationId) {
        this.simulationId = 1;
        this.updateWorld();
        this.timestamp = Date.now()
    }
};
Physics.stopSimulation = function () {
    if (this.simulationId) {
        this.simulationId = void 0;
        if (this.debugDraw) {
            var b = Runtime.stage.penLayer.context;
            b.save();
            b.setTransform(1, 0, 0, 1, 0, 0);
            b.clearRect(0, 0, b.canvas.width, b.canvas.height);
            b.restore()
        }
    }
};
Physics.isSimulationRunning = function () {
    return this.simulationId >= 0
};
'use strict';

function Floor(isForest) {
    Module.call(this);
    this.state = Engine._stateRun;
    this.isForest = isForest;
    this.type = (this.isForest ? 'forest' : 'grass');
    this.rotation = 0;
    this.init();
};

Floor.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Floor
});

Floor.prototype.init = function () {
    var shadowGeometry = new THREE.SphereGeometry(Engine.params.floorRadius, 50, 50);
    var shadowMaterial = new THREE.MeshPhongMaterial({ color: '#7abf8e', specular: '#000000', shininess: 1, transparent: true, opacity: .5 });
    this.shadow = new THREE.Mesh(shadowGeometry, shadowMaterial);
    this.shadow.receiveShadow = true;

    var grassGeometry = new THREE.SphereGeometry(Engine.params.floorRadius - 0.5, 50, 50);
    var grassMaterial = new THREE.MeshBasicMaterial({ color: '#7abf8e' });
    this.grass = new THREE.Mesh(grassGeometry, grassMaterial);
    this.grass.receiveShadow = false;

    this.mesh.add(this.shadow);
    this.mesh.add(this.grass);

    if (this.isForest) {
        var tmpConst = (Math.PI * 2) / Engine.params.treeCount;
        var treePos = Math.PI / 2;
        var treeVector, tmpPosConst;
        var truncHeight, topRadius, bottomRadius;
        var treeMaterials = [blackMat_100707, brownMat_b44b39, pinkMat_dc5f45, whiteMat_a49789, greenMat_7abf8e, lightBrownMat_e07a57, pinkMat_dc5f45];
        var truncMaterial = blackMat_100707;
        var nhSegments = 3;
        var nvSegments = 3;
        var truncNoise, truncVertices, fruitSize, fruitMaterial;
        var branchHeight, thickness, branchVector3;
        for (var i = 0; i < Engine.params.treeCount; i++) {
            treePos += (Math.random() > 0.05) ? .25 + Math.random() * 0.3 : -0.35 - Math.random() * 0.1;
            var newTree = { idx: i, mesh: null };
            newTree.mesh = new THREE.Object3D();
            truncHeight = 50 + Math.random() * 150;
            topRadius = 1 + Math.random() * 5;
            bottomRadius = 5 + Math.random() * 5;
            var truncGeometry = new THREE.CylinderGeometry(topRadius, bottomRadius, truncHeight, nhSegments, nvSegments);
            truncGeometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, truncHeight / 2, 0));
            var truncMesh = new THREE.Mesh(truncGeometry, truncMaterial);
            for (var j = 0; j < truncGeometry.vertices.length; j++) {
                truncNoise = Math.random();
                truncVertices = truncGeometry.vertices[j];
                truncVertices.x += -truncNoise + Math.random() * truncNoise * 2;
                truncVertices.y += -truncNoise + Math.random() * truncNoise * 2;
                truncVertices.z += -truncNoise + Math.random() * truncNoise * 2;
                truncGeometry.computeVertexNormals();
                /*add fruit on tree*/
                if (Math.random() > 0.7) {
                    fruitSize = Math.random() * 3;
                    var fruitGeometry = new THREE.CubeGeometry(fruitSize, fruitSize, fruitSize, 1);
                    fruitMaterial = treeMaterials[Math.floor(Math.random() * treeMaterials.length)];
                    var fruit = new THREE.Mesh(fruitGeometry, fruitMaterial);
                    fruit.position.x = truncVertices.x;
                    fruit.position.y = truncVertices.y + 3;
                    fruit.position.z = truncVertices.z;
                    fruit.rotation.x = Math.random() * Math.PI;
                    fruit.rotation.y = Math.random() * Math.PI;
                    truncMesh.add(fruit);
                }
                /*add branch on tree*/
                if (Math.random() > 0.5 && truncVertices.y > 10 && truncVertices.y < truncHeight - 10) {
                    branchHeight = 3 + Math.random() * 5;
                    thickness = 0.2 + Math.random();
                    var branchGeometry = new THREE.CylinderGeometry(thickness / 2, thickness, branchHeight, 3, 1);
                    branchGeometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, branchHeight / 2, 0));
                    var branch = new THREE.Mesh(branchGeometry, truncMaterial);
                    branch.position.x = truncVertices.x;
                    branch.position.y = truncVertices.y;
                    branch.position.z = truncVertices.z;
                    branchVector3 = new THREE.Vector3(truncVertices.x, 2, truncVertices.z);
                    var branchAxis = new THREE.Vector3(0, 1, 0);
                    branch.quaternion.setFromUnitVectors(branchAxis, branchVector3.clone().normalize());
                    truncMesh.add(branch);
                }
            }

            truncMesh.castShadow = true;
            newTree.trunc = truncMesh;
            newTree.mesh.add(newTree.trunc);
            tmpPosConst = i * tmpConst;
            newTree.mesh.position.x = Math.sin(treePos) * Math.cos(tmpPosConst) * Engine.params.floorRadius;
            newTree.mesh.position.y = Math.sin(treePos) * Math.sin(tmpPosConst) * (Engine.params.floorRadius - 10);
            newTree.mesh.position.z = Math.cos(treePos) * Engine.params.floorRadius;
            treeVector = newTree.mesh.position.clone();
            var treeAxis = new THREE.Vector3(0, 1, 0);
            newTree.mesh.quaternion.setFromUnitVectors(treeAxis, treeVector.clone().normalize());
            this.mesh.add(newTree.mesh);
        }
    }

    this.mesh.position.y = -Engine.params.floorRadius;
};

Floor.prototype.updatePosition = function () {
    if (this.visible && this.state == Engine._stateRun) {
        this.rotation += Engine._delta * 0.03 * (Engine.getPlayer() ? Engine.getPlayer().speed : Engine.params.speed.player.min);
        this.rotation = this.rotation % (Math.PI * 2);
        this.mesh.rotation.z = this.rotation;
    }
};

function BonusParticles(isForest) {
    Module.call(this);
    this.state = Engine._stateRun;
    this.type = 'bonus';
    this.visible = false;
    this.init();
};

BonusParticles.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: BonusParticles
});

BonusParticles.prototype.init = function () {
    this.mesh = new THREE.Group();
    var bigParticleGeom = new THREE.CubeGeometry(10, 10, 10, 1);
    var smallParticleGeom = new THREE.CubeGeometry(5, 5, 5, 1);
    this.parts = [];
    for (var i = 0; i < 10; i++) {
        var partPink = new THREE.Mesh(bigParticleGeom, pinkMat_dc5f45);
        var partGreen = new THREE.Mesh(smallParticleGeom, greenMat_7abf8e);
        partGreen.scale.set(.5, .5, .5);
        this.parts.push(partPink);
        this.parts.push(partGreen);
        this.mesh.add(partPink);
        this.mesh.add(partGreen);
    }

    this.mesh.visible = false;
};

BonusParticles.prototype.explose = function () {
    this.mesh.visible = true;
    var _this = this;
    var explosionSpeed = 0.5;
    for (var i = 0; i < this.parts.length; i++) {
        var tx = -50 + Math.random() * 100;
        var ty = -50 + Math.random() * 100;
        var tz = -50 + Math.random() * 100;
        var p = this.parts[i];
        p.position.set(0, 0, 0);
        p.scale.set(1, 1, 1);
        p.visible = true;
        var s = explosionSpeed + Math.random() * 0.5;
        TweenMax.to(p.position, s, { x: tx, y: ty, z: tz, ease: Power4.easeOut });
        TweenMax.to(p.scale, s, { x: 0.01, y: 0.01, z: 0.01, ease: Power4.easeOut, onComplete: function (p) { p.visible = false; }, onCompleteParams: [p] });
    }
};

function Rabbit(role) {
    Module.call(this);
    this.state = Engine._statePrepare;
    this.type = 'rabbit';
    this.role = role;
    this.poseType = Engine._statePrepare;
    this.runningCycle = 0;
    var mainMaterial = new THREE.MeshPhongMaterial({ color: Engine.params.modules.rabbit.color, shading: THREE.FlatShading });
    this.params = {
        torso: { c: mainMaterial, w: 7, h: 7, d: 10 },
        pants: { c: whiteMat_a49789, w: 9, h: 9, d: 5 },
        tail: { c: lightBrownMat_e07a57, w: 3, h: 3, d: 3 },
        head: { c: mainMaterial, w: 10, h: 10, d: 13 },
        cheek: { c: pinkMat_dc5f45, w: 1, h: 4, d: 4 },
        nose: { c: lightBrownMat_e07a57, w: 6, h: 6, d: 3 },
        mouth: { c: mainMaterial, w: 4, h: 2, d: 4 },
        pawF: { c: lightBrownMat_e07a57, w: 3, h: 3, d: 3 },
        pawB: { c: lightBrownMat_e07a57, w: 3, h: 3, d: 6 },
        ear: { c: mainMaterial, w: 7, h: 18, d: 2 },
        iris: { c: blackMat_100707, w: 0.6, h: 2, d: 2 },
        eye: { c: whiteMat_a49789, w: 2, h: 4, d: 4 }
    };

    this.init();
};

Rabbit.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Rabbit
});

Rabbit.prototype.init = function () {
    this.body = new THREE.Group();
    var torsoGeom = new THREE.CubeGeometry(this.params.torso.w, this.params.torso.h, this.params.torso.d, 1);
    this.torso = new THREE.Mesh(torsoGeom, this.params.torso.c);
    this.torso.position.y = 7;
    this.torso.castShadow = true;

    var pantsGeom = new THREE.CubeGeometry(this.params.pants.w, this.params.pants.h, this.params.pants.d, 1);
    this.pants = new THREE.Mesh(pantsGeom, this.params.pants.c);
    this.pants.position.z = -3;
    this.pants.castShadow = true;
    this.torso.add(this.pants);

    var tailGeom = new THREE.CubeGeometry(this.params.tail.w, this.params.tail.h, this.params.tail.d, 1);
    tailGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, -2));
    this.tail = new THREE.Mesh(tailGeom, this.params.tail.c);
    this.tail.position.z = -4;
    this.tail.position.y = 5;
    this.torso.rotation.x = -Math.PI / 8;
    this.tail.castShadow = true;
    this.torso.add(this.tail);
    this.body.add(this.torso);

    var headGeom = new THREE.CubeGeometry(this.params.head.w, this.params.head.h, this.params.head.d, 1);
    headGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 7.5));
    this.head = new THREE.Mesh(headGeom, this.params.head.c);
    this.head.position.z = 2;
    this.head.position.y = 11;
    this.head.castShadow = true;

    var cheekGeom = new THREE.CubeGeometry(this.params.cheek.w, this.params.cheek.h, this.params.cheek.d, 1);
    this.cheekR = new THREE.Mesh(cheekGeom, this.params.cheek.c);
    this.cheekR.position.x = -5;
    this.cheekR.position.z = 7;
    this.cheekR.position.y = -2.5;
    this.cheekR.castShadow = true;
    this.cheekL = this.cheekR.clone();
    this.cheekL.position.x = -this.cheekR.position.x;
    this.head.add(this.cheekL);
    this.head.add(this.cheekR);

    var noseGeom = new THREE.CubeGeometry(this.params.nose.w, this.params.nose.h, this.params.nose.d, 1);
    this.nose = new THREE.Mesh(noseGeom, this.params.nose.c);
    this.nose.position.z = 13.5;
    this.nose.position.y = 2.6;
    this.nose.castShadow = true;
    this.head.add(this.nose);

    var mouthGeom = new THREE.CubeGeometry(this.params.mouth.w, this.params.mouth.h, this.params.mouth.d, 1);
    mouthGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 3));
    mouthGeom.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 12));
    this.mouth = new THREE.Mesh(mouthGeom, this.params.mouth.c);
    this.mouth.position.z = 8;
    this.mouth.position.y = -4;
    this.mouth.castShadow = true;
    this.head.add(this.mouth);

    var earGeom = new THREE.CubeGeometry(this.params.ear.w, this.params.ear.h, this.params.ear.d, 1);
    earGeom.vertices[6].x += 2;
    earGeom.vertices[6].z += 0.5;
    earGeom.vertices[7].x += 2;
    earGeom.vertices[7].z -= 0.5;
    earGeom.vertices[2].x -= 2;
    earGeom.vertices[2].z -= 0.5;
    earGeom.vertices[3].x -= 2;
    earGeom.vertices[3].z += 0.5;
    earGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 9, 0));
    this.earL = new THREE.Mesh(earGeom, this.params.ear.c);
    this.earL.position.x = 2;
    this.earL.position.z = 2.5;
    this.earL.position.y = 5;
    this.earL.rotation.z = -Math.PI / 12;
    this.earL.castShadow = true;
    this.earR = this.earL.clone();
    this.earR.position.x = -this.earL.position.x;
    this.earR.rotation.z = -this.earL.rotation.z;
    this.earR.castShadow = true;
    this.head.add(this.earL);
    this.head.add(this.earR);

    var irisGeom = new THREE.CubeGeometry(this.params.iris.w, this.params.iris.h, this.params.iris.d);
    this.irisL = new THREE.Mesh(irisGeom, this.params.iris.c);
    this.irisL.position.x = 1.2;
    this.irisL.position.y = 1;
    this.irisL.position.z = 1;
    this.irisR = this.irisL.clone();
    this.irisR.position.x = -this.irisL.position.x;
    var eyeGeom = new THREE.CubeGeometry(this.params.eye.w, this.params.eye.h, this.params.eye.d);
    this.eyeL = new THREE.Mesh(eyeGeom, this.params.eye.c);
    this.eyeL.position.x = 5;
    this.eyeL.position.z = 5.5;
    this.eyeL.position.y = 2.9;
    this.eyeL.castShadow = true;
    this.eyeR = this.eyeL.clone();
    this.eyeR.position.x = -this.eyeL.position.x;
    this.eyeL.add(this.irisL);
    this.eyeR.add(this.irisR);
    this.head.add(this.eyeL);
    this.head.add(this.eyeR);
    this.body.add(this.head);

    var pawFGeom = new THREE.CubeGeometry(this.params.pawF.w, this.params.pawF.h, this.params.pawF.d, 1);
    this.pawFR = new THREE.Mesh(pawFGeom, this.params.pawF.c);
    this.pawFR.position.x = -2;
    this.pawFR.position.z = 6;
    this.pawFR.position.y = 1.5;
    this.pawFR.castShadow = true;
    this.pawFL = this.pawFR.clone();
    this.pawFL.position.x = -this.pawFR.position.x;
    this.pawFL.castShadow = true;
    this.body.add(this.pawFR);
    this.body.add(this.pawFL);

    var pawBGeom = new THREE.CubeGeometry(this.params.pawB.w, this.params.pawB.h, this.params.pawB.d, 1);
    this.pawBL = new THREE.Mesh(pawBGeom, this.params.pawB.c);
    this.pawBL.position.y = 1.5;
    this.pawBL.position.z = 0;
    this.pawBL.position.x = 5;
    this.pawBL.castShadow = true;
    this.pawBR = this.pawBL.clone();
    this.pawBR.position.x = -this.pawBL.position.x;
    this.pawBR.castShadow = true;
    this.body.add(this.pawBL);
    this.body.add(this.pawBR);

    this.mesh.add(this.body);
    this.body.traverse(function (object) {
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });

    this.earL.scale.set(Engine.params.modules.rabbit.ear, Engine.params.modules.rabbit.ear, Engine.params.modules.rabbit.ear);
    this.earR.scale.set(Engine.params.modules.rabbit.ear, Engine.params.modules.rabbit.ear, Engine.params.modules.rabbit.ear);
    this.body.scale.set(Engine.params.modules.rabbit.body, Engine.params.modules.rabbit.body, Engine.params.modules.rabbit.body);
    this.head.scale.set(Engine.params.modules.rabbit.head, Engine.params.modules.rabbit.head, Engine.params.modules.rabbit.head);
    this.mesh.rotation.y = Math.PI / 2;
};

Rabbit.prototype.run = function () {
    if (this.state == Engine._stateRun) {
        var speed = Math.min(this.speed, Engine.params.speed.player.max);
        this.runningCycle += Engine._delta * speed * 0.7;
        this.runningCycle = this.runningCycle % (Math.PI * 2);
        var tmpCycle = this.runningCycle;
        var amp = 4;
        var disp = 0.2;
        // BODY
        this.body.position.y = 6 + Math.sin(tmpCycle - Math.PI / 2) * amp;
        this.body.rotation.x = 0.2 + Math.sin(tmpCycle - Math.PI / 2) * amp * .1;
        this.torso.position.y = 7 + Math.sin(tmpCycle - Math.PI / 2) * amp * 0.5;
        this.torso.rotation.x = Math.sin(tmpCycle - Math.PI / 2) * amp * 0.1;
        // MOUTH
        this.mouth.rotation.x = Math.PI / 16 + Math.cos(tmpCycle) * amp * 0.05;
        // HEAD
        this.head.position.z = 2 + Math.sin(tmpCycle - Math.PI / 2) * amp * 0.5;
        this.head.position.y = 8 + Math.cos(tmpCycle - Math.PI / 2) * amp * 0.7;
        this.head.rotation.x = -0.2 + Math.sin(tmpCycle + Math.PI) * amp * 0.1;
        // EARS
        this.earL.rotation.x = Math.cos(-Math.PI / 2 + tmpCycle) * (amp * 0.2);
        this.earR.rotation.x = Math.cos(-Math.PI / 2 + 0.2 + tmpCycle) * (amp * 0.3);
        // EYES
        this.eyeR.scale.y = this.eyeL.scale.y = 0.7 + Math.abs(Math.cos(-Math.PI / 4 + tmpCycle * 0.5)) * 0.6;
        // TAIL
        this.tail.rotation.x = Math.cos(Math.PI / 2 + tmpCycle) * amp * 0.3;
        // FRONT RIGHT PAW
        this.pawFR.position.y = 1.5 + Math.sin(tmpCycle) * amp;
        this.pawFR.rotation.x = Math.cos(tmpCycle) * Math.PI / 4;
        this.pawFR.position.z = 6 - Math.cos(tmpCycle) * amp * 2;
        // FRONT LEFT PAW
        this.pawFL.position.y = 1.5 + Math.sin(disp + tmpCycle) * amp;
        this.pawFL.rotation.x = Math.cos(tmpCycle) * Math.PI / 4;
        this.pawFL.position.z = 6 - Math.cos(disp + tmpCycle) * amp * 2;
        // BACK RIGHT PAW
        this.pawBR.position.y = 1.5 + Math.sin(Math.PI + tmpCycle) * amp;
        this.pawBR.rotation.x = Math.cos(tmpCycle + Math.PI * 1.5) * Math.PI / 3;
        this.pawBR.position.z = -Math.cos(Math.PI + tmpCycle) * amp;
        // BACK LEFT PAW
        this.pawBL.position.y = 1.5 + Math.sin(Math.PI + tmpCycle) * amp;
        this.pawBL.rotation.x = Math.cos(tmpCycle + Math.PI * 1.5) * Math.PI / 3;
        this.pawBL.position.z = -Math.cos(Math.PI + tmpCycle) * amp;
    }
};

Rabbit.prototype.nod = function () {
    var _this = this;
    var random = 0.5 + Math.random();
    // HEAD
    var tmpRotation = -Math.PI / 6 + Math.random() * Math.PI / 3;
    TweenMax.to(this.head.rotation, random, { y: tmpRotation, ease: Power4.easeInOut, onComplete: function () { _this.nod() } });
    // EARS
    tmpRotation = Math.PI / 4 + Math.random() * Math.PI / 6;
    TweenMax.to(this.earL.rotation, random, { x: tmpRotation, ease: Power4.easeInOut });
    tmpRotation = Math.PI / 4 + Math.random() * Math.PI / 6;
    TweenMax.to(this.earR.rotation, random, { x: tmpRotation, ease: Power4.easeInOut });
    // PAWS BACK LEFT
    tmpRotation = Math.random() * Math.PI / 2;
    var tmpPositionY = -4 + Math.random() * 8;
    TweenMax.to(this.pawBL.rotation, random / 2, { x: tmpRotation, ease: Power1.easeInOut, yoyo: true, repeat: 2 });
    TweenMax.to(this.pawBL.position, random / 2, { y: tmpPositionY, ease: Power1.easeInOut, yoyo: true, repeat: 2 });
    // PAWS BACK RIGHT
    tmpRotation = Math.random() * Math.PI / 2;
    tmpPositionY = -4 + Math.random() * 8;
    TweenMax.to(this.pawBR.rotation, random / 2, { x: tmpRotation, ease: Power1.easeInOut, yoyo: true, repeat: 2 });
    TweenMax.to(this.pawBR.position, random / 2, { y: tmpPositionY, ease: Power1.easeInOut, yoyo: true, repeat: 2 });
    // PAWS FRONT LEFT
    tmpRotation = Math.random() * Math.PI / 2;
    tmpPositionY = -4 + Math.random() * 8;
    TweenMax.to(this.pawFL.rotation, random / 2, { x: tmpRotation, ease: Power1.easeInOut, yoyo: true, repeat: 2 });
    TweenMax.to(this.pawFL.position, random / 2, { y: tmpPositionY, ease: Power1.easeInOut, yoyo: true, repeat: 2 });
    // PAWS FRONT RIGHT
    tmpRotation = Math.random() * Math.PI / 2;
    tmpPositionY = -4 + Math.random() * 8;
    TweenMax.to(this.pawFR.rotation, random / 2, { x: tmpRotation, ease: Power1.easeInOut, yoyo: true, repeat: 2 });
    TweenMax.to(this.pawFR.position, random / 2, { y: tmpPositionY, ease: Power1.easeInOut, yoyo: true, repeat: 2 });
    // MOUTH
    tmpRotation = Math.random() * Math.PI / 8;
    TweenMax.to(this.mouth.rotation, random, { x: tmpRotation, ease: Power1.easeInOut });
    // IRIS
    tmpPositionY = -1 + Math.random() * 2;
    var tmpPositionZ = -1 + Math.random() * 2;
    TweenMax.to([this.irisL.position, this.irisR.position], random, { y: tmpPositionY, z: tmpPositionZ, ease: Power1.easeInOut });
    //EYES
    if (this.role == 'player' || this.role == 'monster') {
        if (Math.random() > 0.2) {
            TweenMax.to([this.eyeR.scale, this.eyeL.scale], random / 8, { y: 0, ease: Power1.easeInOut, yoyo: true, repeat: 1 });
        }
    }
};

Rabbit.prototype.jump = function () {
    if (this.poseType == Engine._stateJump) {
        return;
    }

    var _this = this;
    var totalSpeed = 10 / this.speed;
    var jumpHeight = Engine.params.playerJumpHeight;
    //EAR
    TweenMax.to(this.earL.rotation, totalSpeed, { x: "+=.3", ease: Back.easeOut });
    TweenMax.to(this.earR.rotation, totalSpeed, { x: "-=.3", ease: Back.easeOut });
    //PAW
    TweenMax.to(this.pawFL.rotation, totalSpeed, { x: "+=.7", ease: Back.easeOut });
    TweenMax.to(this.pawFR.rotation, totalSpeed, { x: "-=.7", ease: Back.easeOut });
    TweenMax.to(this.pawBL.rotation, totalSpeed, { x: "+=.7", ease: Back.easeOut });
    TweenMax.to(this.pawBR.rotation, totalSpeed, { x: "-=.7", ease: Back.easeOut });
    //TAIL
    TweenMax.to(this.tail.rotation, totalSpeed, { x: "+=1", ease: Back.easeOut });
    //MOUTH
    TweenMax.to(this.mouth.rotation, totalSpeed, { x: .5, ease: Back.easeOut });
    //MESH
    TweenMax.to(this.mesh.position, totalSpeed / 2, { y: jumpHeight, ease: Power2.easeOut });
    TweenMax.to(this.mesh.position, totalSpeed / 2, {
        y: 0, ease: Power4.easeIn, delay: totalSpeed / 2, onComplete: function () {
            _this.state = Engine._stateRun;
        }
    });
};

Rabbit.prototype.hang = function () {
    var _this = this;
    var speed = 1;
    var ease = Power4.easeOut;
    TweenMax.killTweensOf(this.eyeL.scale);
    TweenMax.killTweensOf(this.eyeR.scale);
    this.body.position.y = 0;
    this.body.rotation.x = 0;
    this.torso.position.y = 7;
    this.torso.rotation.x = 0;
    TweenMax.to(this.mesh.rotation, speed, { y: 0, ease: ease });
    TweenMax.to(this.mesh.position, speed, { y: -7, z: 6, ease: ease });
    TweenMax.to(this.head.rotation, speed, { x: Math.PI / 6, ease: ease, onComplete: function () { _this.nod(); } });
    TweenMax.to(this.earL.rotation, speed, { x: Math.PI / 3, ease: ease });
    TweenMax.to(this.earR.rotation, speed, { x: Math.PI / 3, ease: ease });
    TweenMax.to(this.pawFL.position, speed, { y: -1, z: 3, ease: ease });
    TweenMax.to(this.pawFR.position, speed, { y: -1, z: 3, ease: ease });
    TweenMax.to(this.pawBL.position, speed, { y: -2, z: -3, ease: ease });
    TweenMax.to(this.pawBR.position, speed, { y: -2, z: -3, ease: ease });
    TweenMax.to(this.eyeL.scale, speed, { y: 1, ease: ease });
    TweenMax.to(this.eyeR.scale, speed, { y: 1, ease: ease });
};

Rabbit.prototype.sit = function () {
    var speed = 1.2;
    var ease = Power4.easeOut;
    var _this = this;
    TweenMax.to(this.body.rotation, speed, { x: -Math.PI / 4, ease: ease });
    TweenMax.to(this.mesh.position, speed, {
        y: 3, ease: ease, onComplete: function () {
            _this.nod();
        }
    });

    TweenMax.to(this.head.rotation, speed, { x: Math.PI / 6, ease: ease });
    TweenMax.to(this.tail.position, speed, { x: 7, y: 0, z: 0, ease: ease });
    TweenMax.to(this.pawBL.rotation, speed, { x: Math.PI / 4, ease: ease });
    TweenMax.to(this.pawBR.rotation, speed, { x: Math.PI / 4, ease: ease });
    TweenMax.to(this.eyeL.scale, speed, { y: 1, ease: ease });
    TweenMax.to(this.eyeR.scale, speed, { y: 1, ease: ease });
};

Rabbit.prototype.prepareForRole = function (role) {
    if (role == 'monster') {
        this.mesh.scale.set(2, 2, 2);
    } else if (role == 'obstacle') {
        this.mesh.scale.set(0.5, 0.5, 0.5);
        this.mesh.rotation.y = -Math.PI / 2;
    } else if (role == 'prop') {
        this.mesh.scale.set(0.6, 0.6, 0.6);
        this.mesh.rotation.y = 0;
    } else if (role == 'player') {
        this.mesh.scale.set(1, 1, 1);
        this.mesh.position.y = 0;
        this.mesh.position.x = 0;
        this.mesh.position.z = 0;
    }
};

function Wolf(role) {
    Module.call(this);
    this.state = Engine._statePrepare;
    this.type = 'wolf';
    this.role = role;
    this.positionType = '';
    this.poseType = Engine._statePrepare;
    this.runningCycle = 0;
    var mainMaterial = new THREE.MeshPhongMaterial({ color: Engine.params.modules.wolf.color, shading: THREE.FlatShading });
    this.params = {
        torso: { c: mainMaterial, w: 15, h: 15, d: 20 },
        head: { c: mainMaterial, w: 20, h: 20, d: 40 },
        mouth: { c: mainMaterial, w: 10, h: 4, d: 20 },
        tooth: { c: whiteMat_a49789, w: 2, h: 2, d: 1 },
        tongue: { c: pinkMat_dc5f45, w: 6, h: 1, d: 14 },
        nose: { c: pinkMat_dc5f45, w: 4, h: 4, d: 4 },
        eye: { c: whiteMat_a49789, w: 2, h: 3, d: 3 },
        iris: { c: mainMaterial, w: 0.6, h: 1, d: 1 },
        ear: { c: mainMaterial, w: 8, h: 6, d: 2 },
        tail: { c: mainMaterial, w: 0, h: 20, d: 0, rt: 5, rb: 2, rs: 4, hs: 1 },
        paw: { c: mainMaterial, w: 0, h: 10, d: 0, rt: 1.5, rb: 0, rs: 1, hs: 1 }
    };

    this.init();
};

Wolf.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Wolf
});

Wolf.prototype.init = function () {
    this.runningCycle = 0;
    var mouthGeom = new THREE.CubeGeometry(this.params.mouth.w, this.params.mouth.h, this.params.mouth.d, 1);
    mouthGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, -2, 10));
    this.mouth = new THREE.Mesh(mouthGeom, this.params.mouth.c);
    this.mouth.position.y = -8;
    this.mouth.rotation.x = .4;
    this.mouth.position.z = 4;

    this.heroHolder = new THREE.Group();
    this.heroHolder.position.z = 20;
    this.mouth.add(this.heroHolder);

    var toothGeom = new THREE.CubeGeometry(this.params.tooth.w, this.params.tooth.h, this.params.tooth.d);
    toothGeom.vertices[1].x -= 1;
    toothGeom.vertices[4].x += 1;
    toothGeom.vertices[5].x += 1;
    toothGeom.vertices[0].x -= 1;
    for (var i = 0; i < 3; i++) {
        var toothf = new THREE.Mesh(toothGeom, this.params.tooth.c);
        toothf.position.x = -2.8 + i * 2.5;
        toothf.position.y = 1;
        toothf.position.z = 19;
        var toothl = new THREE.Mesh(toothGeom, this.params.tooth.c);
        toothl.rotation.y = Math.PI / 2;
        toothl.position.z = 12 + i * 2.5;
        toothl.position.y = 1;
        toothl.position.x = 4;
        var toothr = toothl.clone();
        toothl.position.x = -4;
        this.mouth.add(toothf);
        this.mouth.add(toothl);
        this.mouth.add(toothr);
    }

    var tongueGeometry = new THREE.CubeGeometry(this.params.tongue.w, this.params.tongue.h, this.params.tongue.d);
    tongueGeometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 7));
    this.tongue = new THREE.Mesh(tongueGeometry, this.params.tongue.c);
    this.tongue.position.z = 2;
    this.tongue.rotation.x = -.2;
    this.mouth.add(this.tongue);

    var headGeom = new THREE.CubeGeometry(this.params.head.w, this.params.head.h, this.params.head.d, 1);
    headGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 20));
    this.head = new THREE.Mesh(headGeom, this.params.head.c);
    this.head.position.z = 12;
    this.head.position.y = 2;

    var noseGeom = new THREE.CubeGeometry(this.params.nose.w, this.params.nose.h, this.params.nose.d);
    this.nose = new THREE.Mesh(noseGeom, this.params.nose.c);
    this.nose.position.z = 39.5;
    this.nose.position.y = 9;
    this.head.add(this.nose);
    this.head.add(this.mouth);

    var irisGeom = new THREE.CubeGeometry(this.params.iris.w, this.params.iris.h, this.params.iris.d);
    this.irisL = new THREE.Mesh(irisGeom, this.params.iris.c);
    this.irisL.position.x = 1.2;
    this.irisL.position.y = -1;
    this.irisL.position.z = 1;
    this.irisR = this.irisL.clone();
    this.irisR.position.x = -this.irisL.position.x;
    var eyeGeom = new THREE.CubeGeometry(this.params.eye.w, this.params.eye.h, this.params.eye.d);
    this.eyeL = new THREE.Mesh(eyeGeom, this.params.eye.c);
    this.eyeL.position.x = 10;
    this.eyeL.position.z = 5;
    this.eyeL.position.y = 5;
    this.eyeL.castShadow = true;
    this.eyeR = this.eyeL.clone();
    this.eyeR.position.x = -this.eyeL.position.x;
    this.eyeL.add(this.irisL);
    this.eyeR.add(this.irisR);
    this.head.add(this.eyeL);
    this.head.add(this.eyeR);

    var earGeom = new THREE.CubeGeometry(this.params.ear.w, this.params.ear.h, this.params.ear.d, 1);
    earGeom.vertices[1].x -= 4;
    earGeom.vertices[4].x += 4;
    earGeom.vertices[5].x += 4;
    earGeom.vertices[5].z -= 2;
    earGeom.vertices[0].x -= 4;
    earGeom.vertices[0].z -= 2;
    earGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 3, 0));
    this.earL = new THREE.Mesh(earGeom, this.params.ear.c);
    this.earL.position.x = 6;
    this.earL.position.z = 1;
    this.earL.position.y = 10;
    this.earL.castShadow = true;
    this.earR = this.earL.clone();
    this.earR.position.x = -this.earL.position.x;
    this.earR.rotation.z = -this.earL.rotation.z;
    this.head.add(this.earL);
    this.head.add(this.earR);

    var torsoGeom = new THREE.CubeGeometry(this.params.torso.w, this.params.torso.h, this.params.torso.d, 1);
    this.torso = new THREE.Mesh(torsoGeom, this.params.torso.c);

    var tailGeom = new THREE.CylinderGeometry(this.params.tail.rt, this.params.tail.rb, this.params.tail.h, this.params.tail.rs, 1);
    tailGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 10, 0));
    tailGeom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    tailGeom.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / 4));
    this.tail = new THREE.Mesh(tailGeom, this.params.tail.c);
    this.tail.position.z = -10;
    this.tail.position.y = 4;
    this.torso.add(this.tail);

    var pawGeom = new THREE.CylinderGeometry(this.params.paw.rt, this.params.paw.rb, this.params.paw.h);
    pawGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, -5, 0));
    this.pawFL = new THREE.Mesh(pawGeom, this.params.paw.c);
    this.pawFL.position.y = -7.5;
    this.pawFL.position.z = 8.5;
    this.pawFL.position.x = 5.5;
    this.pawFR = this.pawFL.clone();
    this.pawFR.position.x = -this.pawFL.position.x;
    this.pawBR = this.pawFR.clone();
    this.pawBR.position.z = -this.pawFL.position.z;
    this.pawBL = this.pawBR.clone();
    this.pawBL.position.x = this.pawFL.position.x;
    this.torso.add(this.pawFL);
    this.torso.add(this.pawFR);
    this.torso.add(this.pawBR);
    this.torso.add(this.pawBL);
    this.torso.add(this.head);

    this.body = new THREE.Group();
    this.mesh = new THREE.Group();
    this.body.add(this.torso);
    this.mesh.add(this.body);

    this.torso.castShadow = true;
    this.head.castShadow = true;
    this.pawFL.castShadow = true;
    this.pawFR.castShadow = true;
    this.pawBL.castShadow = true;
    this.pawBR.castShadow = true;

    this.earL.scale.set(Engine.params.modules.wolf.ear, Engine.params.modules.wolf.ear, Engine.params.modules.wolf.ear);
    this.earR.scale.set(Engine.params.modules.wolf.ear, Engine.params.modules.wolf.ear, Engine.params.modules.wolf.ear);
    this.body.scale.set(Engine.params.modules.wolf.body, Engine.params.modules.wolf.body, Engine.params.modules.wolf.body);
    this.head.scale.set(Engine.params.modules.wolf.head, Engine.params.modules.wolf.head, Engine.params.modules.wolf.head);

    //this.body.rotation.y = Math.PI / 2;
    this.mesh.rotation.y = Math.PI / 2;
};

Wolf.prototype.run = function () {
    if (this.state == Engine._stateRun) {
        var speed = Math.min(this.speed, Engine.params.speed.player.max);
        this.runningCycle += Engine._delta * speed * 0.7;
        this.runningCycle = this.runningCycle % (Math.PI * 2);
    }

    var tmpCycle = this.runningCycle;
    //PAW
    this.pawFR.rotation.x = Math.sin(tmpCycle) * Math.PI / 4;
    this.pawFR.position.y = -5.5 - Math.sin(tmpCycle);
    this.pawFR.position.z = 7.5 + Math.cos(tmpCycle);
    this.pawFL.rotation.x = Math.sin(tmpCycle + .4) * Math.PI / 4;
    this.pawFL.position.y = -5.5 - Math.sin(tmpCycle + .4);
    this.pawFL.position.z = 7.5 + Math.cos(tmpCycle + .4);
    this.pawBL.rotation.x = Math.sin(tmpCycle + 2) * Math.PI / 4;
    this.pawBL.position.y = -5.5 - Math.sin(tmpCycle + 3.8);
    this.pawBL.position.z = -7.5 + Math.cos(tmpCycle + 3.8);
    this.pawBR.rotation.x = Math.sin(tmpCycle + 2.4) * Math.PI / 4;
    this.pawBR.position.y = -5.5 - Math.sin(tmpCycle + 3.4);
    this.pawBR.position.z = -7.5 + Math.cos(tmpCycle + 3.4);
    //TORSO
    this.torso.rotation.x = Math.sin(tmpCycle) * Math.PI / 8;
    this.torso.position.y = 3 - Math.sin(tmpCycle + Math.PI / 2) * 3;
    //HEAD
    this.head.rotation.x = -0.1 + Math.sin(-tmpCycle - 1) * 0.4;
    //MOUTH
    this.mouth.rotation.x = 0.2 + Math.sin(tmpCycle + Math.PI + 0.3) * 0.4;
    //TAIL
    this.tail.rotation.x = 0.2 + Math.sin(tmpCycle - Math.PI / 2);
    //EYE
    if (this.role == 'player' || this.role == 'monster') {
        this.eyeR.scale.y = 0.5 + Math.sin(tmpCycle + Math.PI) * 0.5;
        this.eyeL.scale.y = 0.5 + Math.sin(tmpCycle + Math.PI) * 0.5;
    }
};

Wolf.prototype.nod = function () {
    var _this = this;
    var random = 1 + Math.random() * 2;
    // HEAD
    var rotationY = -Math.PI / 3 + Math.random() * 0.5;
    var rotationX = Math.PI / 3 - 0.2 + Math.random() * 0.4;
    TweenMax.to(this.head.rotation, random, { x: rotationX, y: rotationY, ease: Power4.easeInOut, onComplete: function () { _this.nod() } });
    // TAIL
    rotationY = -Math.PI / 4;
    TweenMax.to(this.tail.rotation, random / 8, { y: rotationY, ease: Power1.easeInOut, yoyo: true, repeat: 8 });
    // EYES
    if (this.role == 'player' || this.role == 'monster') {
        TweenMax.to([this.eyeR.scale, this.eyeL.scale], random / 20, { y: 0, ease: Power1.easeInOut, yoyo: true, repeat: 1 });
    }
};

Wolf.prototype.jump = function () {
    if (this.poseType == Engine._stateJump) {
        return;
    }

    var _this = this;
    this.poseType = Engine._stateJump;
    var totalSpeed = 10 / this.speed;
    var jumpHeight = Engine.params.playerJumpHeight;
    //EAR
    TweenMax.to(this.earL.rotation, totalSpeed, { x: "+=.3", ease: Back.easeOut });
    TweenMax.to(this.earR.rotation, totalSpeed, { x: "-=.3", ease: Back.easeOut });
    //PAW
    TweenMax.to(this.pawFL.rotation, totalSpeed, { x: "+=.7", ease: Back.easeOut });
    TweenMax.to(this.pawFR.rotation, totalSpeed, { x: "-=.7", ease: Back.easeOut });
    TweenMax.to(this.pawBL.rotation, totalSpeed, { x: "+=.7", ease: Back.easeOut });
    TweenMax.to(this.pawBR.rotation, totalSpeed, { x: "-=.7", ease: Back.easeOut });
    //TAIL
    TweenMax.to(this.tail.rotation, totalSpeed, { x: "+=1", ease: Back.easeOut });
    //MOUTH
    TweenMax.to(this.mouth.rotation, totalSpeed, { x: .5, ease: Back.easeOut });
    //MESH
    TweenMax.to(
        this.mesh.position,
        totalSpeed / 2,
        {
            y: jumpHeight,
            ease: Power2.easeOut,
            onComplete: function () {
                TweenMax.to(
                    _this.mesh.position,
                    totalSpeed / 2,
                    {
                        y: 12,
                        ease: Power4.easeIn,
                        delay: totalSpeed / 2,
                        onComplete: function () {
                            _this.state = Engine._stateRun;
                            _this.poseType = Engine._stateRun;
                        }
                    }
               );
            }
        }
    );
};

Wolf.prototype.hang = function () {
    var _this = this;
    var speed = 1;
    var ease = Power4.easeOut;
    TweenMax.killTweensOf(this.eyeL.scale);
    TweenMax.killTweensOf(this.eyeR.scale);
    this.body.position.y = 0;
    this.body.rotation.x = 0;
    this.torso.position.y = 7;
    this.torso.rotation.x = 0;
    TweenMax.to(this.mesh.rotation, speed, { y: 0, ease: ease });
    TweenMax.to(this.mesh.position, speed, { y: -7, z: 6, ease: ease });
    TweenMax.to(this.head.rotation, speed, { x: Math.PI / 6, ease: ease, onComplete: function () { _this.nod(); } });
    TweenMax.to(this.earL.rotation, speed, { x: Math.PI / 3, ease: ease });
    TweenMax.to(this.earR.rotation, speed, { x: Math.PI / 3, ease: ease });
    TweenMax.to(this.pawFL.position, speed, { y: -1, z: 3, ease: ease });
    TweenMax.to(this.pawFR.position, speed, { y: -1, z: 3, ease: ease });
    TweenMax.to(this.pawBL.position, speed, { y: -2, z: -3, ease: ease });
    TweenMax.to(this.pawBR.position, speed, { y: -2, z: -3, ease: ease });
    if (this.role == 'player' || this.role == 'monster') {
        TweenMax.to(this.eyeL.scale, speed, { y: 1, ease: ease });
        TweenMax.to(this.eyeR.scale, speed, { y: 1, ease: ease });
    }
};

Wolf.prototype.sit = function () {
    var tmpConst = 1.2;
    this.state = Engine._stateSit;
    var ease = Power4.easeOut;
    var _this = this;
    TweenMax.to(this.torso.rotation, tmpConst, { x: -1.3, ease: ease });
    TweenMax.to(this.torso.position, tmpConst, {
        y: -5, ease: ease, onComplete: function () {
            _this.nod();
            Engine.state = Engine._statePrepare;
        }
    });
    TweenMax.to(this.head.rotation, tmpConst, { x: Math.PI / 3, y: -Math.PI / 3, ease: ease });
    TweenMax.to(this.tail.rotation, tmpConst, { x: 2, y: Math.PI / 4, ease: ease });
    TweenMax.to(this.pawBL.rotation, tmpConst, { x: -0.1, ease: ease });
    TweenMax.to(this.pawBR.rotation, tmpConst, { x: -0.1, ease: ease });
    TweenMax.to(this.pawFL.rotation, tmpConst, { x: 1, ease: ease });
    TweenMax.to(this.pawFR.rotation, tmpConst, { x: 1, ease: ease });
    TweenMax.to(this.mouth.rotation, tmpConst, { x: 0.3, ease: ease });
    TweenMax.to(this.eyeL.scale, tmpConst, { y: 1, ease: ease });
    TweenMax.to(this.eyeR.scale, tmpConst, { y: 1, ease: ease });
};

Wolf.prototype.prepareForRole = function (role) {
    if (role == 'player') {
        this.mesh.scale.set(0.5, 0.5, 0.5);
        this.mesh.position.y = 10;
        this.mesh.position.x = 0;
        this.mesh.position.z = 0;
    } else if (role == 'obstacle') {
        this.irisL.visible = false;
        this.irisR.visible = false;
        this.mesh.scale.set(0.3, 0.3, 0.3);
        this.mesh.rotation.y = -Math.PI / 2;
    } else if (role == 'prop') {
        this.mesh.scale.set(0.4, 0.4, 0.4);
        this.mesh.rotation.y = 0.2;
    } else if (role == 'monster') {
        this.mesh.scale.set(1, 1, 1);
        this.body.rotation.x = -20 * Math.PI / 180;
    }
};

function Carrot(role) {
    Module.call(this);
    this.state = Engine._statePrepare;
    this.type = 'carrot';
    this.role = role;
    this.poseType = Engine._statePrepare;
    this.runningCycle = 0;
    this.params = {
        body: { c: pinkMat_dc5f45, w: 0, h: 10, d: 0, rt: 5, rb: 3, rs: 4, hs: 1 },
        leaf: { c: greenMat_7abf8e, w: 5, h: 10, d: 1 }
    };

    this.init();
};

Carrot.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Carrot
});

Carrot.prototype.init = function () {
    this.angle = 0;
    this.mesh = new THREE.Group();
    var bodyGeom = new THREE.CylinderGeometry(this.params.body.rt, this.params.body.rb, this.params.body.h, this.params.body.rs, this.params.body.hs);
    bodyGeom.vertices[8].y += 2;
    bodyGeom.vertices[9].y -= 3;
    this.body = new THREE.Mesh(bodyGeom, this.params.body.c);

    var leafGeom = new THREE.CubeGeometry(this.params.leaf.w, this.params.leaf.h, this.params.leaf.d, 1);
    leafGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 5, 0));
    leafGeom.vertices[2].x -= 1;
    leafGeom.vertices[3].x -= 1;
    leafGeom.vertices[6].x += 1;
    leafGeom.vertices[7].x += 1;
    this.leaf1 = new THREE.Mesh(leafGeom, this.params.leaf.c);
    this.leaf1.position.y = 7;
    this.leaf1.rotation.z = .3;
    this.leaf1.rotation.x = .2;

    this.leaf2 = this.leaf1.clone();
    this.leaf2.scale.set(1, 1.3, 1);
    this.leaf2.position.y = 7;
    this.leaf2.rotation.z = -.3;
    this.leaf2.rotation.x = -.2;

    this.mesh.add(this.body);
    this.mesh.add(this.leaf1);
    this.mesh.add(this.leaf2);

    this.body.traverse(function (object) {
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });
};

Carrot.prototype.run = function () {
    if (this.state == Engine._stateRun) {
        var speed = Math.min(this.speed, Engine.params.speed.player.max);
        this.runningCycle += Engine._delta * speed * 0.7;
        this.runningCycle = this.runningCycle % (Math.PI * 2);
        var tmpCycle = this.runningCycle;
        var amp = 4;
        var disp = 0.2;
        this.leaf1.rotation.x = Math.cos(-Math.PI / 2 + tmpCycle) * (amp * 0.2);
        this.leaf2.rotation.x = Math.cos(-Math.PI / 2 + 0.2 + tmpCycle) * (amp * 0.3);
        this.mesh.position.y = 6 + Math.sin(tmpCycle - Math.PI / 2) * amp;
        this.mesh.rotation.z = 0.2 + Math.sin(tmpCycle - Math.PI / 2) * amp * .1;
    };
}

Carrot.prototype.nod = function () {

};

Carrot.prototype.jump = function () {

};

Carrot.prototype.hang = function () {

};

Carrot.prototype.sit = function () {

};

Carrot.prototype.prepareForRole = function (role) {
    if (role == 'player') {
        this.mesh.scale.set(1.5, 1.5, 1.5);
        this.mesh.rotation.y = Math.PI / 2;
        //this.mesh.position.y = 10;
    } else if (role == 'obstacle') {
        //this.mesh.scale.set(1.5, 1.5, 1.5);
    } else if (role == 'prop') {
        //this.mesh.scale.set(0.4, 0.4, 0.4);
    } else if (role == 'monster') {
        this.mesh.scale.set(3, 3, 3);
        this.mesh.rotation.y = Math.PI / 2;
        this.body.rotation.x = -20 * Math.PI / 180;
    }
};

function Hedgehog(role) {
    Module.call(this);
    this.state = Engine._statePrepare;
    this.type = 'hedgehog';
    this.role = role;
    this.poseType = Engine._statePrepare;
    this.runningCycle = 0;
    this.angle = 0;
    this.params = {
        body: { c: blackMat_100707, w: 6, h: 6, d: 6 },
        head: { c: lightBrownMat_e07a57, w: 5, h: 5, d: 7 },
        nose: { c: blackMat_100707, w: 1.5, h: 1.5, d: 1.5 },
        eye: { c: whiteMat_a49789, w: 1, h: 3, d: 3 },
        iris: { c: blackMat_100707, w: 0.5, h: 1, d: 1 },
        spike: { c: blackMat_100707, w: 0.5, h: 2, d: 0.5 },
        ear: { c: lightBrownMat_e07a57, w: 2, h: 2, d: 0.5 },
        mouth: { c: blackMat_100707, w: 1, h: 1, d: 0.5 }
    };

    this.init();
};

Hedgehog.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Hedgehog
});

Hedgehog.prototype.init = function () {
    this.angle = 0;
    this.mesh = new THREE.Group();
    var bodyGeom = new THREE.CubeGeometry(this.params.body.w, this.params.body.h, this.params.body.d, 1);
    this.body = new THREE.Mesh(bodyGeom, this.params.body.c);

    var headGeom = new THREE.CubeGeometry(this.params.head.w, this.params.head.h, this.params.head.d, 1);
    this.head = new THREE.Mesh(headGeom, this.params.head.c);
    this.head.position.z = 6;
    this.head.position.y = -.5;

    var noseGeom = new THREE.CubeGeometry(this.params.nose.w, this.params.nose.h, this.params.nose.d, 1);
    this.nose = new THREE.Mesh(noseGeom, this.params.nose.c);
    this.nose.position.z = 4;
    this.nose.position.y = 2;

    var eyeGeom = new THREE.CubeGeometry(this.params.eye.w, this.params.eye.h, this.params.eye.d);
    this.eyeL = new THREE.Mesh(eyeGeom, this.params.eye.c);
    this.eyeL.position.x = 2.2;
    this.eyeL.position.z = -.5;
    this.eyeL.position.y = .8;
    this.eyeL.castShadow = true;
    this.head.add(this.eyeL);
    var irisGeom = new THREE.CubeGeometry(this.params.iris.w, this.params.iris.h, this.params.iris.d);
    this.iris = new THREE.Mesh(irisGeom, this.params.iris.c);
    this.iris.position.x = .5;
    this.iris.position.y = .8;
    this.iris.position.z = .8;
    this.eyeL.add(this.iris);
    this.eyeR = this.eyeL.clone();
    this.eyeR.children[0].position.x = -this.iris.position.x;
    this.eyeR.position.x = -this.eyeL.position.x;

    var spikeGeom = new THREE.CubeGeometry(this.params.spike.w, this.params.spike.h, this.params.spike.d, 1);
    spikeGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 1, 0));

    for (var i = 0; i < 9; i++) {
        var row = (i % 3);
        var col = Math.floor(i / 3);
        var sb = new THREE.Mesh(spikeGeom, this.params.spike.c);
        sb.rotation.x = -Math.PI / 2 + (Math.PI / 12 * row) - .5 + Math.random();
        sb.position.z = -3;
        sb.position.y = -2 + row * 2;
        sb.position.x = -2 + col * 2;
        this.body.add(sb);
        var st = new THREE.Mesh(spikeGeom, this.params.spike.c);
        st.position.y = 3;
        st.position.x = -2 + row * 2;
        st.position.z = -2 + col * 2;
        st.rotation.z = Math.PI / 6 - (Math.PI / 6 * row) - .5 + Math.random();
        this.body.add(st);

        var sr = new THREE.Mesh(spikeGeom, this.params.spike.c);
        sr.position.x = 3;
        sr.position.y = -2 + row * 2;
        sr.position.z = -2 + col * 2;
        sr.rotation.z = -Math.PI / 2 + (Math.PI / 12 * row) - .5 + Math.random();
        this.body.add(sr);

        var sl = new THREE.Mesh(spikeGeom, this.params.spike.c);
        sl.position.x = -3;
        sl.position.y = -2 + row * 2;
        sl.position.z = -2 + col * 2;
        sl.rotation.z = Math.PI / 2 - (Math.PI / 12 * row) - .5 + Math.random();;
        this.body.add(sl);
    }

    this.head.add(this.eyeR);
    var earGeom = new THREE.CubeGeometry(this.params.ear.w, this.params.ear.h, this.params.ear.d, 1);
    this.earL = new THREE.Mesh(earGeom, this.params.ear.c);
    this.earL.position.x = 2.5;
    this.earL.position.z = -2.5;
    this.earL.position.y = 2.5;
    this.earL.rotation.z = -Math.PI / 12;
    this.earL.castShadow = true;
    this.head.add(this.earL);

    this.earR = this.earL.clone();
    this.earR.position.x = -this.earL.position.x;
    this.earR.rotation.z = -this.earL.rotation.z;
    this.earR.castShadow = true;
    this.head.add(this.earR);

    var mouthGeom = new THREE.CubeGeometry(this.params.mouth.w, this.params.mouth.h, this.params.mouth.d, 1);
    this.mouth = new THREE.Mesh(mouthGeom, this.params.mouth.c);
    this.mouth.position.z = 3.5;
    this.mouth.position.y = -1.5;
    this.head.add(this.mouth);


    this.mesh.add(this.body);
    this.body.add(this.head);
    this.head.add(this.nose);

    this.mesh.traverse(function (object) {
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });
};

Hedgehog.prototype.run = function () {
    if (this.state == Engine._stateRun) {
        var speed = Math.min(this.speed, Engine.params.speed.player.max);
        this.runningCycle += Engine._delta * speed * 0.7;
        this.runningCycle = this.runningCycle % (Math.PI * 2);
        var tmpCycle = this.runningCycle;
        var amp = 4;
        var disp = 0.2;
        this.mesh.position.y = 6 + Math.sin(tmpCycle - Math.PI / 2) * amp;
        this.mesh.rotation.z = 0.2 + Math.sin(tmpCycle - Math.PI / 2) * amp * .1;
    };
};

Hedgehog.prototype.jump = function () {

};

Hedgehog.prototype.nod = function () {
    var _this = this;
    var speed = .1 + Math.random() * .5;
    var angle = -Math.PI / 4 + Math.random() * Math.PI / 2;
    TweenMax.to(this.head.rotation, speed, {
        y: angle, onComplete: function () {
            _this.nod();
        }
    });
};

Hedgehog.prototype.hang = function () {

};

Hedgehog.prototype.sit = function () {

};

Hedgehog.prototype.prepareForRole = function (role) {
    if (role == 'player') {
        this.mesh.scale.set(2, 2, 2);
        this.mesh.rotation.y = Math.PI / 2;
        //this.mesh.position.y = 10;
    } else if (role == 'obstacle') {
        this.body.rotation.y = -Math.PI / 2;
        this.mesh.scale.set(1.1, 1.1, 1.1);
        this.mesh.position.y = 4;
    } else if (role == 'prop') {
        //this.mesh.scale.set(0.4, 0.4, 0.4);
    } else if (role == 'monster') {
        this.mesh.scale.set(3.5, 3.5, 3.5);
        this.mesh.rotation.y = Math.PI / 2;
        this.body.rotation.x = -20 * Math.PI / 180;
    }
};
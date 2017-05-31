'use strict';
// Materials

var BonusParticles = function () {
    this.mesh = new THREE.Group();
    var bigParticleGeom = new THREE.CubeGeometry(10, 10, 10, 1);
    var smallParticleGeom = new THREE.CubeGeometry(5, 5, 5, 1);
    this.parts = [];
    for (var i = 0; i < 10; i++) {
        var partPink = new THREE.Mesh(bigParticleGeom, pinkMat);
        var partGreen = new THREE.Mesh(smallParticleGeom, greenMat);
        partGreen.scale.set(.5, .5, .5);
        this.parts.push(partPink);
        this.parts.push(partGreen);
        this.mesh.add(partPink);
        this.mesh.add(partGreen);
    }
}

BonusParticles.prototype.explose = function () {
    var _this = this;
    var explosionSpeed = .5;
    for (var i = 0; i < this.parts.length; i++) {
        var tx = -50 + Math.random() * 100;
        var ty = -50 + Math.random() * 100;
        var tz = -50 + Math.random() * 100;
        var p = this.parts[i];
        p.position.set(0, 0, 0);
        p.scale.set(1, 1, 1);
        p.visible = true;
        var s = explosionSpeed + Math.random() * .5;
        TweenMax.to(p.position, s, { x: tx, y: ty, z: tz, ease: Power4.easeOut });
        TweenMax.to(p.scale, s, { x: .01, y: .01, z: .01, ease: Power4.easeOut, onComplete: removeParticle, onCompleteParams: [p] });
    }
}

var heroConst = {
    torso: { c: brownMat, w: 7, h: 7, d: 10 },
    pants: { c: whiteMat, w: 9, h: 9, d: 5 },
    tail: { c: lightBrownMat, w: 3, h: 3, d: 3 },
    head: { c: brownMat, w: 10, h: 10, d: 13 },
    cheek: { c: pinkMat, w: 1, h: 4, d: 4 },
    nose: { c: lightBrownMat, w: 6, h: 6, d: 3 },
    mouth: { c: brownMat, w: 4, h: 2, d: 4 },
    pawF: { c: lightBrownMat, w: 3, h: 3, d: 3 },
    pawB: { c: lightBrownMat, w: 3, h: 3, d: 6 },
    ear: { c: brownMat, w: 7, h: 18, d: 2 },
    iris: { c: blackMat, w: 0.6, h: 2, d: 2 },
    eye: { c: whiteMat, w: 2, h: 4, d: 4 }
};

var monsterConst = {
    torso: { c: blackMat, w: 15, h: 15, d: 20 },
    head: { c: blackMat, w: 20, h: 20, d: 40 },
    mouth: { c: blackMat, w: 10, h: 4, d: 20 },
    tooth: { c: whiteMat, w: 2, h: 2, d: 1 },
    tongue: { c: pinkMat, w: 6, h: 1, d: 14 },
    nose: { c: pinkMat, w: 4, h: 4, d: 4 },
    eye: { c: whiteMat, w: 2, h: 3, d: 3 },
    iris: { c: blackMat, w: 0.6, h: 1, d: 1 },
    ear: { c: blackMat, w: 8, h: 6, d: 2 },
    tail: { c: blackMat, w: 0, h: 20, d: 0, rt: 5, rb: 2, rs: 4, hs: 1 },
    paw: { c: blackMat, w: 0, h: 10, d: 0, rt: 1.5, rb: 0, rs: 1, hs: 1 }
}

var obstacleConst = {
    body: { c: blackMat, w: 6, h: 6, d: 6 },
    head: { c: lightBrownMat, w: 5, h: 5, d: 7 },
    nose: { c: blackMat, w: 1.5, h: 1.5, d: 1.5 },
    eye: { c: whiteMat, w: 1, h: 3, d: 3 },
    iris: { c: blackMat, w: 0.5, h: 1, d: 1 },
    spike: { c: blackMat, w: 0.5, h: 2, d: 0.5 },
    ear: { c: lightBrownMat, w: 2, h: 2, d: 0.5 },
    mouth: { c: blackMat, w: 1, h: 1, d: 0.5 }
}

var propConst = {
    body: { c: pinkMat, w: 0, h: 10, d: 0, rt: 5, rb: 3, rs: 4, hs: 1 },
    leaf: { c: greenMat, w: 5, h: 10, d: 1 }
}

var heroDefault = {
    torso: { c: brownMat, w: 7, h: 7, d: 10 },
    pants: { c: whiteMat, w: 9, h: 9, d: 5 },
    tail: { c: lightBrownMat, w: 3, h: 3, d: 3 },
    head: { c: brownMat, w: 10, h: 10, d: 13 },
    cheek: { c: pinkMat, w: 1, h: 4, d: 4 },
    nose: { c: lightBrownMat, w: 6, h: 6, d: 3 },
    mouth: { c: brownMat, w: 4, h: 2, d: 4 },
    pawF: { c: lightBrownMat, w: 3, h: 3, d: 3 },
    pawB: { c: lightBrownMat, w: 3, h: 3, d: 6 },
    ear: { c: brownMat, w: 7, h: 18, d: 2 },
    iris: { c: blackMat, w: 0.6, h: 2, d: 2 },
    eye: { c: whiteMat, w: 2, h: 4, d: 4 }
};

var monsterDefault = {
    torso: { c: blackMat, w: 15, h: 15, d: 20 },
    head: { c: blackMat, w: 20, h: 20, d: 40 },
    mouth: { c: blackMat, w: 10, h: 4, d: 20 },
    tooth: { c: whiteMat, w: 2, h: 2, d: 1 },
    tongue: { c: pinkMat, w: 6, h: 1, d: 14 },
    nose: { c: pinkMat, w: 4, h: 4, d: 4 },
    eye: { c: whiteMat, w: 2, h: 3, d: 3 },
    iris: { c: blackMat, w: 0.6, h: 1, d: 1 },
    ear: { c: blackMat, w: 8, h: 6, d: 2 },
    tail: { c: blackMat, w: 0, h: 20, d: 0, rt: 5, rb: 2, rs: 4, hs: 1 },
    paw: { c: blackMat, w: 0, h: 10, d: 0, rt: 1.5, rb: 0, rs: 1, hs: 1 }
}

var obstacleDefault = {
    body: { c: blackMat, w: 6, h: 6, d: 6 },
    head: { c: lightBrownMat, w: 5, h: 5, d: 7 },
    nose: { c: blackMat, w: 1.5, h: 1.5, d: 1.5 },
    eye: { c: whiteMat, w: 1, h: 3, d: 3 },
    iris: { c: blackMat, w: 0.5, h: 1, d: 1 },
    spike: { c: blackMat, w: 0.5, h: 2, d: 0.5 },
    ear: { c: lightBrownMat, w: 2, h: 2, d: 0.5 },
    mouth: { c: blackMat, w: 1, h: 1, d: 0.5 }
}

var mouseDefault = {
    body: { c: blackMat, w: 6, h: 6, d: 10 },
    head: { c: lightBrownMat, w: 5, h: 5, d: 7 },
    nose: { c: blackMat, w: 1.5, h: 1.5, d: 1.5 },
    eye: { c: whiteMat, w: 1, h: 3, d: 3 },
    iris: { c: blackMat, w: 0.5, h: 1, d: 1 },
    spike: { c: blackMat, w: 0.5, h: 2, d: 0.5 },
    ear: { c: lightBrownMat, w: 2, h: 2, d: 0.5 },
    mouth: { c: blackMat, w: 1, h: 1, d: 0.5 }
}

var propDefault = {
    body: { c: pinkMat, w: 0, h: 10, d: 0, rt: 5, rb: 3, rs: 4, hs: 1 },
    leaf: { c: greenMat, w: 5, h: 10, d: 1 }
}

/*Cat*/
var Cat = function () {
    this.threeGroup = new THREE.Group();
    this.handHeight = 10;
    this.bodyHeight = 80;
    this.armHeight = ((this.bodyHeight * 3 / 5) - this.handHeight) / 2;
    this.faceHeight = 30;
    this.shouldersPosition = new THREE.Vector3(0, this.armHeight * 2 + this.handHeight, 0);
    this.isAttacking = false;
    this.isFootReplacing = false;
    this.isBlinking = false;
    this.footUsed = "left";
    this.transferPower = { x: 0, y: 0 };


    // body
    this.body = new THREE.Group();
    this.mesh = this.body;
    // torso

    var torsoGeom = new THREE.CylinderGeometry(0, 26, this.bodyHeight, 3, 1);
    this.torso = new THREE.Mesh(torsoGeom, brownMat_cat);
    this.torso.geometry.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 3));
    this.torso.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, -this.bodyHeight / 2, 0));

    // chest

    var chestGeom = new THREE.CylinderGeometry(6, 0, 17, 3);
    chestGeom.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 3));
    chestGeom.applyMatrix(new THREE.Matrix4().makeScale(1, 1, .3));
    this.chest = new THREE.Mesh(chestGeom, whiteMat_cat);
    this.chest.position.set(0, -30, 1);

    // head
    this.head = new THREE.Group();

    var faceGeom = new THREE.BoxGeometry(30, this.faceHeight, 30);
    this.face = new THREE.Mesh(faceGeom, brownMat_cat);
    this.face.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, this.faceHeight / 2, 0));
    this.face.geometry.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 4));


    // scarf
    var scarfGeom = new THREE.CylinderGeometry(10, 9, 9, 10, 1);
    this.scarf1 = new THREE.Mesh(scarfGeom, redMat_cat);
    this.scarf1.material.side = THREE.DoubleSide;
    this.scarf1.position.y = -2;
    this.scarf1.position.z = 0;
    this.scarf1.rotation.z = .4;
    this.scarf1.rotation.y = Math.PI / 3;

    this.scarf2 = this.scarf1.clone();
    this.scarf2.scale.set(.9, .7, .9);
    this.scarf2.position.y = -17;
    this.scarf2.rotation.z = -.2;

    var scarfGeom2 = new THREE.BoxGeometry(50, 2, 10);
    this.scarf3 = new THREE.Mesh(scarfGeom2, redMat_cat);
    this.scarf3.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(25, 0, 0));
    this.scarf3.position.set(3, -15, 2);
    this.scarf3.rotation.y = 1.2;
    this.scarf3.rotation.z = -1;


    this.head.add(this.scarf1);
    this.torso.add(this.scarf2);
    this.torso.add(this.scarf3);
    this.torso.add(this.chest);


    var skewMatrixBody = new THREE.Matrix4();
    skewMatrixBody.set(1, 0, 0, 0,
                          0, 1, 0, 0,
                          0, 0.20, 1, 0,
                          0, 0, 0, 1);


    this.torso.geometry.applyMatrix(skewMatrixBody);
    this.chest.geometry.applyMatrix(skewMatrixBody);


    this.body.add(this.torso);
    //this.body.position.y = this.bodyHeight;
    this.body.position.y = 65;
    this.body.rotation.x = 1.1;
    // Whiskers
    var whiskerGeom = new THREE.BoxGeometry(16, .2, .2);
    this.whisker1 = new THREE.Mesh(whiskerGeom, lightBrownMat_cat);
    this.whisker1.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-7, 0, 0));
    this.whisker1.position.set(-6, 8, 18);
    this.whisker1.rotation.z = Math.PI / 12;

    this.whisker2 = this.whisker1.clone();
    this.whisker2.position.y = 6;

    this.whisker3 = this.whisker1.clone();
    this.whisker3.position.y = 4;

    this.whisker4 = this.whisker1.clone();
    this.whisker4.rotation.z = Math.PI - Math.PI / 12;
    this.whisker4.position.x = -this.whisker1.position.x;

    this.whisker5 = this.whisker4.clone();
    this.whisker5.position.y = this.whisker2.position.y;

    this.whisker6 = this.whisker4.clone();
    this.whisker6.position.y = this.whisker3.position.y;

    this.head.add(this.whisker1);
    this.head.add(this.whisker2);
    this.head.add(this.whisker3);
    this.head.add(this.whisker4);
    this.head.add(this.whisker5);
    this.head.add(this.whisker6);

    // ears
    var rightEarGeom = new THREE.CylinderGeometry(0, 8, 8, 3, 1);
    rightEarGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 4, 0));
    var leftEarGeom = rightEarGeom.clone();

    rightEarGeom.applyMatrix(new THREE.Matrix4().makeRotationY(1));
    rightEarGeom.applyMatrix(new THREE.Matrix4().makeScale(1, 1, .7));

    leftEarGeom.applyMatrix(new THREE.Matrix4().makeRotationY(-1));
    leftEarGeom.applyMatrix(new THREE.Matrix4().makeScale(1, 1, .7));

    var skewMatrixRightEar = new THREE.Matrix4().set(1, 0.0, 0.0, 0,
                                                        0, 1, 0, 0,
                                                        -0.5, 0.0, 1, 0,
                                                        0, 0, 0, 1);


    var skewMatrixLeftEar = new THREE.Matrix4().set(1, -.5, 0, 0,
                                                        0, 1, 0, 0,
                                                        0, 0.0, 1, 0,
                                                        0, 0, 0, 1);

    this.rightEar = new THREE.Mesh(rightEarGeom, brownMat_cat);
    this.rightEar.position.y = this.faceHeight;
    this.rightEar.position.x = -14;
    this.rightEar.position.z = -1.7;

    this.leftEar = new THREE.Mesh(leftEarGeom, brownMat_cat);
    this.leftEar.position.x = -this.rightEar.position.x;
    this.leftEar.position.z = this.rightEar.position.z;
    this.leftEar.position.y = this.rightEar.position.y;


    var rightEarInsideGeom = rightEarGeom.clone();
    rightEarInsideGeom.applyMatrix(new THREE.Matrix4().makeScale(.5, .5, .5));
    this.rightEarInside = new THREE.Mesh(rightEarInsideGeom, pinkMat_cat);
    this.rightEarInside.position.y = .5;
    this.rightEarInside.position.x = 1;
    this.rightEarInside.position.z = 2;

    this.rightEar.add(this.rightEarInside);

    var LeftEarInsideGeom = leftEarGeom.clone();
    LeftEarInsideGeom.applyMatrix(new THREE.Matrix4().makeScale(.5, .5, .5));
    this.leftEarInside = new THREE.Mesh(LeftEarInsideGeom, pinkMat_cat);
    this.leftEarInside.position.y = .5;
    this.leftEarInside.position.x = -1;
    this.leftEarInside.position.z = 2;

    this.leftEar.add(this.leftEarInside);

    // Eyes
    var eyeGeom = new THREE.BoxGeometry(12, 12, 1);
    this.rightEye = new THREE.Mesh(eyeGeom, whiteMat_cat);
    this.rightEye.position.set(-12, 20, 10);
    this.rightEye.rotation.y = -Math.PI / 4;

    this.leftEye = this.rightEye.clone();
    this.leftEye.position.x = -this.rightEye.position.x;
    this.leftEye.rotation.y = Math.PI / 4;

    // Iris
    var irisGeom = new THREE.BoxGeometry(4, 4, 2);
    this.rightIris = new THREE.Mesh(irisGeom, brownMat_cat);
    this.rightIris.position.x = 2;
    this.rightIris.position.y = -2;
    this.rightIris.position.z = .5;

    this.leftIris = this.rightIris.clone();
    this.leftIris.position.x = -this.rightIris.position.x;

    this.rightEye.add(this.rightIris);
    this.leftEye.add(this.leftIris);

    // nose
    var noseGeom = new THREE.CylinderGeometry(3, 0, 4, 4)
    noseGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, -2, -4));

    var skewMatrixNose = new THREE.Matrix4().set(1, 0, 0, 0,
                                                    0, 1, 0, 0,
                                                    0, -.7, 1, 1.4,
                                                    0, 0, 0, 1);

    noseGeom.applyMatrix(skewMatrixNose);
    this.nose = new THREE.Mesh(noseGeom, pinkMat_cat);
    this.nose.position.z = 24;
    this.nose.position.y = 14.1;


    // cheeks
    var cheeksGeom = new THREE.CylinderGeometry(8, 8, 14, 4);
    cheeksGeom.applyMatrix(new THREE.Matrix4().makeScale(1, 1, 1.4));
    this.cheeks = new THREE.Mesh(cheeksGeom, brownMat_cat);
    this.cheeks.position.set(0, 7, 13);

    // mouth
    var mouthGeom = cheeksGeom.clone();//new THREE.BoxGeometry(4,2,4);
    mouthGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, -4, 0));
    mouthGeom.applyMatrix(new THREE.Matrix4().makeScale(.5, .2, .5));
    this.mouth = new THREE.Mesh(mouthGeom, brownMat_cat);


    // tongue
    var tongueGeom = mouthGeom.clone();
    tongueGeom.applyMatrix(new THREE.Matrix4().makeScale(.8, 1, .8));
    this.tongue = new THREE.Mesh(tongueGeom, pinkMat_cat);
    this.tongue.position.set(0, .5, 0);
    this.mouth.add(this.tongue);

    this.mouth.rotation.x = Math.PI / 4;
    this.mouth.position.set(0, 1.5, 18);


    this.head.add(this.face);
    this.head.add(this.rightEar);
    this.head.add(this.leftEar);
    this.head.add(this.rightEye);
    this.head.add(this.leftEye);
    this.head.add(this.nose);
    this.head.add(this.cheeks);
    this.head.add(this.mouth);

    //this.head.position.y = this.bodyHeight - 15;
    this.head.position.y = 55;
    this.head.position.z = 10;
    this.head.rotation.x = 0.2;


    // shoulders
    this.rightShoulder = new THREE.Group();
    this.leftShoulder = new THREE.Group();

    this.rightShoulder.position.set(-6, this.shouldersPosition.y, 0);
    this.leftShoulder.position.set(6, this.shouldersPosition.y, 0);
    this.rightShoulder.position.z = -10;
    this.rightShoulder.rotation.x = -0.1;
    this.leftShoulder.position.z = -10;
    this.leftShoulder.rotation.x = -0.3;


    // arms
    var armGeom = new THREE.CylinderGeometry(4, 6, this.armHeight + 5, 4);
    armGeom.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 4));
    armGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, -this.armHeight / 2, 0));

    this.rightArm = new THREE.Mesh(armGeom, brownMat_cat);
    this.rightShoulder.add(this.rightArm);

    this.leftArm = this.rightArm.clone();
    this.leftShoulder.add(this.leftArm);
    // forearms

    var foreArmGeom = new THREE.CylinderGeometry(6, 7, this.armHeight, 4);
    foreArmGeom.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 4));
    foreArmGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, -this.armHeight / 2, 0));


    this.rightForeArm = new THREE.Mesh(foreArmGeom, brownMat_cat);
    this.rightForeArm.position.y = -this.armHeight;
    this.rightArm.add(this.rightForeArm);

    this.leftForeArm = this.rightForeArm.clone();
    this.leftArm.add(this.leftForeArm);

    // foot = front foot
    var footGeom = new THREE.BoxGeometry(10, 10, 10);
    this.rightFoot = new THREE.Mesh(footGeom, whiteMat_cat);
    this.rightFoot.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
    this.rightFoot.position.set(0, -this.armHeight - 5, 0);
    this.rightForeArm.add(this.rightFoot);
    this.leftFoot = this.rightFoot.clone();
    this.leftForeArm.add(this.leftFoot);

    //footPad
    var footPadGeom = new THREE.BoxGeometry(8, 2, 8);
    this.rightFootPad = new THREE.Mesh(footPadGeom, pinkMat_cat);
    this.rightFootPad.position.y = -4.5;
    this.rightFoot.add(this.rightFootPad)

    this.leftFootPad = this.rightFootPad.clone();
    this.leftFoot.add(this.leftFootPad)

    // knees
    var kneeGeom = new THREE.BoxGeometry(8, 30, 30);
    kneeGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 15, 0));

    this.rightKnee = new THREE.Mesh(kneeGeom, brownMat_cat);
    this.rightKnee.rotation.y = -Math.PI / 6;
    this.rightKnee.rotation.x = 0.5;
    this.rightKnee.position.x = -18;
    this.rightKnee.position.y = 15;
    this.rightKnee.position.z = -80;

    this.leftKnee = this.rightKnee.clone();
    this.leftKnee.rotation.x = 0.7;
    this.leftKnee.rotation.y = -this.rightKnee.rotation.y;
    this.leftKnee.position.x = -this.rightKnee.position.x;


    // legs = back legs
    var legGeom = new THREE.BoxGeometry(12, 6, 4);
    this.rightLeg = new THREE.Mesh(legGeom, whiteMat_cat);
    this.rightLeg.position.set(0, 3, 17);
    this.rightKnee.add(this.rightLeg);

    this.leftLeg = this.rightLeg.clone();
    this.leftKnee.add(this.leftLeg);

    // tail

    this.tail = new THREE.Group();
    this.tail.position.z = -75;
    this.tail.position.y = 50;

    var p = this.tail;
    var currentY = 0;
    var curentRot = 0;
    var segHeight = 8;
    var recScale = 1.15;

    this.tailNSegs = 8;
    this.tailSegements = [];

    var tailSegGeom = new THREE.CylinderGeometry(5, 4, segHeight, 4);
    tailSegGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, segHeight / 2, 0));


    for (var i = 0; i < this.tailNSegs ; i++) {
        var mat = (i < this.tailNSegs - 1) ? brownMat_cat : whiteMat_cat;
        var tg = tailSegGeom.clone();
        var s = Math.pow(recScale, i);
        tg.applyMatrix(new THREE.Matrix4().makeScale(s, s, s));
        var t = new THREE.Mesh(tg, mat);
        var currentRot = (i == 0) ? -Math.PI / 2 : currentRot / (i * i * i);
        t.position.y = currentY;
        t.rotation.x = currentRot;
        p.add(t);
        p = t;
        currentY = (segHeight - 2) * s;
        currentRot =
        this.tailSegements.push(t);
    }

    // stripes Head

    var stripeGeom = new THREE.CylinderGeometry(2, 0, 15, 4);
    var stripe0 = new THREE.Mesh(stripeGeom, lightBrownMat_cat);
    stripe0.rotation.y = -Math.PI / 4;
    stripe0.position.x = -1.5;
    stripe0.position.y = 22;
    stripe0.position.z = 18.5;

    var stripe1 = stripe0.clone();
    stripe1.position.x = -stripe0.position.x;
    stripe1.rotation.y = -stripe0.rotation.y;



    var stripeGeom2 = new THREE.BoxGeometry(8, 2, 10);
    var stripe2 = new THREE.Mesh(stripeGeom2, lightBrownMat_cat);
    stripe2.rotation.y = Math.PI / 4;
    stripe2.position.x = 15.6;
    stripe2.position.y = 8;
    stripe2.position.z = -1;

    var stripe3 = stripe2.clone();
    stripe3.position.y = 4;

    var stripe4 = stripe2.clone();
    stripe4.rotation.y = -Math.PI / 4;
    stripe4.position.x = -stripe2.position.x;

    var stripe5 = stripe4.clone();
    stripe5.position.y = stripe3.position.y;


    var stripeGeom3 = new THREE.BoxGeometry(1.6, 1, 10);
    var stripe6 = new THREE.Mesh(stripeGeom3, lightBrownMat_cat);
    stripe6.position.x = -2.1;
    stripe6.position.z = 15;
    stripe6.position.y = 30;

    var stripe7 = stripe6.clone();
    stripe7.position.x = -stripe6.position.x;


    this.head.add(stripe0);
    this.head.add(stripe1);
    this.head.add(stripe2);
    this.head.add(stripe3);
    this.head.add(stripe4);
    this.head.add(stripe5);
    this.head.add(stripe6);
    this.head.add(stripe7);


    // stripes Knee

    var stripe9 = stripe2.clone();
    //stripe9.scale.y = 2;
    stripe9.rotation.y = 0;
    stripe9.position.y = 16;
    stripe9.position.x = -1;
    stripe9.position.z = 11;

    var stripe10 = stripe9.clone();
    stripe10.position.y = 22;
    stripe10.position.x = 1;

    var stripe11 = stripe9.clone();
    stripe11.position.y = 28;

    this.rightKnee.add(stripe9);
    this.rightKnee.add(stripe10);
    this.rightKnee.add(stripe11);

    var stripe12 = stripe9.clone();
    stripe12.position.x = -1;

    var stripe13 = stripe12.clone();
    stripe13.position.y = stripe10.position.y;
    stripe13.position.x = 1;

    var stripe14 = stripe12.clone();
    stripe14.position.y = stripe11.position.y;

    this.leftKnee.add(stripe12);
    this.leftKnee.add(stripe13);
    this.leftKnee.add(stripe14);

    this.threeGroup.add(this.body);
    this.threeGroup.add(this.head);
    this.threeGroup.add(this.rightShoulder);
    this.threeGroup.add(this.leftShoulder);

    this.threeGroup.add(this.rightKnee);
    this.threeGroup.add(this.leftKnee);
    this.threeGroup.add(this.tail);


    this.threeGroup.traverse(function (object) {
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });

    this.mesh = this.threeGroup;
    this.mesh.scale.setX(1 / 3);
    this.mesh.scale.setY(1 / 3);
    this.mesh.scale.setZ(1 / 3);
    this.mesh.rotation.y = Math.PI / 2;
}

Cat.prototype.updateTail = function (t) {

    for (var i = 0; i < this.tailNSegs; i++) {
        var angleStep = -i * .5;
        var angleAmp = Math.PI / (30 / (i + 1));

        var rotZ = Math.sin(t + angleStep) * angleAmp;
        var st = this.tailSegements[i];
        st.rotation.z = rotZ;//(rotY * i);
    }
}

Cat.prototype.interactWithBall = function (ballPos) {
    var bDir = ballPos.clone().sub(this.shouldersPosition.clone());
    var isInDistance = bDir.length() < (this.armHeight * 2 + this.handHeight + 8) * 1.3;

    this.lookAt(ballPos);

    this.transferPower.x *= .8;
    this.transferPower.y *= .8;

    if (!this.isAttacking) {
        if (!isInDistance) {
            if (!this.isFootReplacing) {
                this.isFootReplacing = true;
                this.replaceFoot(this.footUsed);
            }
        } else {
            this.lookAt(ballPos);
            if (Math.random() > .96) {
                this.isAttacking = true;
                this.isFootReplacing = false;
                this.attack(this.footUsed, ballPos, bDir);
            } else {
                this.isFootReplacing = false;
                var middleVector = this.shouldersPosition.clone().add(bDir.clone().multiplyScalar(.4));
                this.prepareAttack(this.footUsed, middleVector);
            }
        }
    }


    if (!this.isBlinking && Math.random() > .99) {
        this.isBlinking = true;
        this.blink();
    }

    if (!this.mouthMoving && Math.random() > .99) {
        this.mouthMoving = true;
        this.moveMouth();
    }
}

Cat.prototype.lookAt = function (v) {
    if (!this.oldTargetLookPos) this.oldTargetLookPos = new THREE.Vector3();
    this.newTargetLookPos = v.clone();
    this.lookPos = this.oldTargetLookPos.clone().add(this.newTargetLookPos.sub(this.oldTargetLookPos).multiplyScalar(.15));
    this.head.lookAt(this.lookPos);
    this.oldTargetLookPos = this.lookPos;
}

Cat.prototype.prepareAttack = function (side, v) {

    var angles = getAngles(v, this.rightShoulder.position, this.armHeight);
    this.updateArm(side, angles, 1, Back.easeOut, null);
}

Cat.prototype.attack = function (side, v, direction) {
    _this = this;
    var shoulder = (side == "right") ? this.rightShoulder : this.leftShoulder;
    var angles = getAngles(v, shoulder.position, this.armHeight);
    this.updateArm(side, angles, .15, Back.easeOut, function () {
        var isInDistance = direction.length() < (_this.armHeight * 2 + _this.handHeight + 20);
        if (isInDistance) _this.transferPower = { x: -direction.x * (Math.random() * .5) - .1 + Math.random() * .2, y: -direction.y * Math.random() * .5 };
        _this.isAttacking = false;
        //console.log("attackComplete");
    });
}

Cat.prototype.replaceFoot = function (side) {
    _this = this;
    var angles = { theta: 0, alpha: 0, beta: 0 };
    this.updateArm(side, angles, 2, Strong.easeInOut, function () {
        _this.isFootReplacing = false;
        _this.footUsed = (_this.footUsed == "right") ? "left" : "right";
        //console.log("replaceComplete");
    });
}

Cat.prototype.updateArm = function (side, angles, speed, ease, callBack) {
    var shoulder, arm, foreArm, foot;
    if (side == "right") {
        shoulder = this.rightShoulder;
        arm = this.rightArm;
        foreArm = this.rightForeArm;
        foot = this.rightFoot;
    } else {
        shoulder = this.leftShoulder;
        arm = this.leftArm;
        foreArm = this.leftForeArm;
        foot = this.leftFoot;
    }
    var ease = ease || Back.easeOut;

    var tFootAngle = Math.min(-angles.beta, Math.PI * 1.5);

    TweenMax.to(shoulder.rotation, speed, { y: angles.theta, ease: ease });
    TweenMax.to(arm.rotation, speed, { x: angles.alpha, ease: ease });
    TweenMax.to(foreArm.rotation, speed, { x: angles.beta, ease: ease, onComplete: callBack });
    TweenMax.to(foot.rotation, speed, { x: tFootAngle, ease: ease });
}

Cat.prototype.blink = function () {
    _this = this;
    TweenMax.to(this.rightEye.scale, .07, { y: 0, yoyo: true, repeat: 1 });
    TweenMax.to(this.leftEye.scale, .07, {
        y: 0, yoyo: true, repeat: 1, onComplete: function () {
            _this.isBlinking = false;
        }
    });
}

Cat.prototype.moveMouth = function () {
    _this = this;
    TweenMax.to(this.mouth.rotation, .2, {
        x: Math.PI / 6, yoyo: true, repeat: 1, onComplete: function () {
            _this.mouthMoving = false;
        }
    });
}

function getAngles(targetPos, shoulderPos, segmentLength) {
    var ah = segmentLength;
    var alpha0, alpha1, alpha2;
    var beta0, beta1;
    var bDir = targetPos.clone().sub(shoulderPos);
    var bDirNorm = bDir.clone().normalize();

    var dist = bDir.length() - 15;

    var bTargetDir = bDirNorm.clone().multiplyScalar(dist);
    var bDirMin = (dist < ah * 2) ? bTargetDir.clone() : bDirNorm.clone().multiplyScalar(ah * 2);


    // IK calculations
    var theta = Math.atan2(bDirMin.x, bDirMin.z); // shoulder orientation on Y axis
    theta = (theta < -Math.PI / 2 || theta > Math.PI / 2) ? 0 : theta;
    var x2 = Math.sqrt(bDirMin.x * bDirMin.x + bDirMin.z * bDirMin.z); // distance projected to x axis => used to find alpha2
    alpha2 = Math.PI / 2 - Math.atan(bDirMin.y / x2);

    // cosine rule =>       C^2 = A^2 + B^2 - 2*A*B*cosC
    // =>                   cosC = (A^2 + B^2 - C^2) / 2*A*B

    var cosAlpha1 = dist / (2 * ah); // in this case A^2 = C^2 = segementLength^2, then we can simplify this formula
    cosAlpha1 = (cosAlpha1 > 1) ? 1 : (cosAlpha1 < -1) ? -1 : cosAlpha1;

    alpha1 = Math.acos(cosAlpha1);
    alpha0 = (Math.PI) - (alpha1 + alpha2);
    alpha0 = Math.max(0, alpha0);


    cosBeta1 = (ah * ah + ah * ah - dist * dist) / (2 * ah * ah);
    cosBeta1 = (cosBeta1 < -1) ? -1 : (cosBeta1 > 1) ? 1 : cosBeta1;
    beta1 = Math.acos(cosBeta1);
    beta0 = Math.PI - beta1;
    beta0 = Math.min(beta0, Math.PI * 2 / 3);

    return { theta: theta, alpha: -alpha0, beta: -beta0 };
}

Cat.prototype.run = function () {

}

Cat.prototype.jump = function () {

}

Cat.prototype.nod = function () {

}

Cat.prototype.hang = function () {

}

Cat.prototype.sit = function () {

}

Cat.prototype.pause = function () {

}

Cat.prototype.resetOrgPosition = function () {
    var angle = Math.PI * monsterPos;
    //monster.mesh.position.y = -floorRadius + Math.sin(angle) * (floorRadius + 12);
    //monster.mesh.position.x = Math.cos(angle) * (floorRadius + 15);
    //monster.mesh.rotation.z = -Math.PI / 2 + angle;
    monster.mesh.position.x = -40;
};

/*Lion*/
var Lion = function () {
    this.windTime = 0;
    this.bodyInitPositions = [];
    this.maneParts = [];
    this.threegroup = new THREE.Group();

    var bodyGeom = new THREE.CylinderGeometry(40, 80, 160, 4);
    var maneGeom = new THREE.BoxGeometry(40, 40, 60);
    var faceGeom = new THREE.BoxGeometry(80, 80, 80);
    var spotGeom = new THREE.BoxGeometry(4, 4, 4);
    var mustacheGeom = new THREE.BoxGeometry(30, 2, 1);
    mustacheGeom.applyMatrix(new THREE.Matrix4().makeTranslation(15, 0, 0));

    var earGeom = new THREE.BoxGeometry(20, 20, 20);
    var noseGeom = new THREE.BoxGeometry(40, 40, 20);
    var eyeGeom = new THREE.BoxGeometry(5, 30, 30);
    var irisGeom = new THREE.BoxGeometry(4, 10, 10);
    var mouthGeom = new THREE.BoxGeometry(20, 20, 10);
    var smileGeom = new THREE.TorusGeometry(12, 4, 2, 10, Math.PI);
    var lipsGeom = new THREE.BoxGeometry(40, 15, 20);
    var kneeGeom = new THREE.BoxGeometry(25, 80, 80);
    kneeGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 50, 0));
    var footGeom = new THREE.BoxGeometry(40, 20, 20);

    // body
    this.torso = new THREE.Mesh(bodyGeom, yellowMat_lion);
    this.torso.position.z = -60;
    this.torso.position.y = -30;
    this.torso.rotation.x = Math.PI / 2
    //this.bodyVertices = [0, 1, 2, 3, 4, 10];

    //for (var i = 0; i < this.bodyVertices.length; i++) {
    //    var tv = this.body.geometry.vertices[this.bodyVertices[i]];
    //    if (typeof tv != 'undefined' && tv) {
    //        tv.z = 70;
    //        //tv.x = 0;
    //        this.bodyInitPositions.push({ x: tv.x, y: tv.y, z: tv.z });
    //    }
    //}

    this.tail = new THREE.Group();
    this.tail.position.z = -140;
    this.tail.position.y = 20;
    var tailGeom = new THREE.Geometry();
    tailGeom.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 60, -40),
      new THREE.Vector3(0, 30, -80),
      new THREE.Vector3(0, 90, -120)
    );

    this.tailLine = new THREE.Line(tailGeom, tailMat);
    // pike
    var pikeGeom = new THREE.CylinderGeometry(0, 15, 15, 4, 1);
    pikeGeom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    this.tailPike = new THREE.Mesh(pikeGeom, greyMat_lion);
    this.tailPike.position.z = -120;
    this.tailPike.position.y = 90;
    this.tailPike.rotation.x = .9;

    this.tail.add(this.tailLine);
    this.tail.add(this.tailPike);
    this.body = new THREE.Group();
    this.body.add(this.tail);
    this.body.add(this.torso);

    // knee
    this.leftKnee = new THREE.Mesh(kneeGeom, yellowMat_lion);
    this.leftKnee.position.x = 65;
    this.leftKnee.position.z = -110;
    this.leftKnee.position.y = -110;
    this.leftKnee.rotation.z = -.3;
    this.leftKnee.rotation.x = -.3;

    this.rightKnee = new THREE.Mesh(kneeGeom, yellowMat_lion);
    this.rightKnee.position.x = -65;
    this.rightKnee.position.z = -110;
    this.rightKnee.position.y = -110;
    this.rightKnee.rotation.z = .3;
    this.rightKnee.rotation.x = -0.3;


    // feet
    this.backLeftFoot = new THREE.Mesh(footGeom, yellowMat_lion);
    this.backLeftFoot.position.x = -80;
    this.backLeftFoot.position.y = -115;
    this.backLeftFoot.position.z = -90;

    this.backRightFoot = new THREE.Mesh(footGeom, yellowMat_lion);
    this.backRightFoot.position.x = 80;
    this.backRightFoot.position.y = -115;
    this.backRightFoot.position.z = -90;

    this.backLeftPaw = new THREE.Group();
    this.backLeftPaw.add(this.leftKnee);
    this.backLeftPaw.add(this.backLeftFoot);
    this.backRightPaw = new THREE.Group();
    this.backRightPaw.add(this.rightKnee);
    this.backRightPaw.add(this.backRightFoot);


    var frontFootGeom = new THREE.BoxGeometry(20, 80, 20);
    this.frontRightFoot = new THREE.Mesh(frontFootGeom, yellowMat_lion);
    this.frontRightFoot.position.x = -60;
    this.frontRightFoot.position.y = -90;
    this.frontRightFoot.position.z = -10;
    this.frontRightFoot.rotation.x = -0.3;

    this.frontLeftFoot = new THREE.Mesh(frontFootGeom, yellowMat_lion);
    this.frontLeftFoot.position.x = 60;
    this.frontLeftFoot.position.y = -90;
    this.frontLeftFoot.position.z = -10;
    this.frontLeftFoot.rotation.x = -0.3;

    // mane
    this.mane = new THREE.Group();

    for (var j = 0; j < 4; j++) {
        for (var k = 0; k < 4; k++) {
            var manePart = new THREE.Mesh(maneGeom, redMat_lion);
            manePart.position.x = (j * 40) - 60;
            manePart.position.y = (k * 40) - 60;

            var amp;
            var zOffset;
            var periodOffset = Math.random() * Math.PI * 2;
            var angleOffsetY, angleOffsetX;
            var angleAmpY, angleAmpX;
            var xInit, yInit;


            if ((j == 0 && k == 0) || (j == 0 && k == 3) || (j == 3 && k == 0) || (j == 3 && k == 3)) {
                amp = -10 - Math.floor(Math.random() * 5);
                zOffset = -5;
            } else if (j == 0 || k == 0 || j == 3 || k == 3) {
                amp = -5 - Math.floor(Math.random() * 5);
                zOffset = 0;
            } else {
                amp = 0;
                zOffset = 0;
            }

            this.maneParts.push({ mesh: manePart, amp: amp, zOffset: zOffset, periodOffset: periodOffset, xInit: manePart.position.x, yInit: manePart.position.y });
            this.mane.add(manePart);
        }
    }

    this.mane.position.y = -10;
    this.mane.position.z = 60;
    //this.mane.position.x = -20;
    //this.mane.rotation.z = Math.PI/4;

    // face
    this.face = new THREE.Mesh(faceGeom, yellowMat_lion);
    this.face.position.z = 135;

    // Mustaches

    this.mustaches = [];

    this.mustache1 = new THREE.Mesh(mustacheGeom, greyMat_lion);
    this.mustache1.position.x = 30;
    this.mustache1.position.y = -5;
    this.mustache1.position.z = 175;
    this.mustache2 = this.mustache1.clone();
    this.mustache2.position.x = 35;
    this.mustache2.position.y = -12;
    this.mustache3 = this.mustache1.clone();
    this.mustache3.position.y = -19;
    this.mustache3.position.x = 30;
    this.mustache4 = this.mustache1.clone();
    this.mustache4.rotation.z = Math.PI;
    this.mustache4.position.x = -30;
    this.mustache5 = new THREE.Mesh(mustacheGeom, blackMat_lion);
    this.mustache5 = this.mustache2.clone();
    this.mustache5.rotation.z = Math.PI;
    this.mustache5.position.x = -35;
    this.mustache6 = new THREE.Mesh(mustacheGeom, blackMat_lion);
    this.mustache6 = this.mustache3.clone();
    this.mustache6.rotation.z = Math.PI;
    this.mustache6.position.x = -30;

    this.mustaches.push(this.mustache1);
    this.mustaches.push(this.mustache2);
    this.mustaches.push(this.mustache3);
    this.mustaches.push(this.mustache4);
    this.mustaches.push(this.mustache5);
    this.mustaches.push(this.mustache6);

    // spots
    this.spot1 = new THREE.Mesh(spotGeom, redMat_lion);
    this.spot1.position.x = 39;
    this.spot1.position.z = 150;

    this.spot2 = this.spot1.clone();
    this.spot2.position.z = 160;
    this.spot2.position.y = -10;

    this.spot3 = this.spot1.clone();
    this.spot3.position.z = 140;
    this.spot3.position.y = -15;

    this.spot4 = this.spot1.clone();
    this.spot4.position.z = 150;
    this.spot4.position.y = -20;

    this.spot5 = this.spot1.clone();
    this.spot5.position.x = -39;
    this.spot6 = this.spot2.clone();
    this.spot6.position.x = -39;
    this.spot7 = this.spot3.clone();
    this.spot7.position.x = -39;
    this.spot8 = this.spot4.clone();
    this.spot8.position.x = -39;

    // eyes
    this.leftEye = new THREE.Mesh(eyeGeom, whiteMat_lion);
    this.leftEye.position.x = 40;
    this.leftEye.position.z = 120;
    this.leftEye.position.y = 25;

    this.rightEye = new THREE.Mesh(eyeGeom, whiteMat_lion);
    this.rightEye.position.x = -40;
    this.rightEye.position.z = 120;
    this.rightEye.position.y = 25;

    // iris
    this.leftIris = new THREE.Mesh(irisGeom, purpleMat_lion);
    this.leftIris.position.x = 42;
    this.leftIris.position.z = 120;
    this.leftIris.position.y = 25;

    this.rightIris = new THREE.Mesh(irisGeom, purpleMat_lion);
    this.rightIris.position.x = -42;
    this.rightIris.position.z = 120;
    this.rightIris.position.y = 25;

    // mouth
    this.mouth = new THREE.Mesh(mouthGeom, blackMat_lion);
    this.mouth.position.z = 171;
    this.mouth.position.y = -30;
    this.mouth.scale.set(.5, .5, 1);

    // smile
    this.smile = new THREE.Mesh(smileGeom, greyMat_lion);
    this.smile.position.z = 173;
    this.smile.position.y = -15;
    this.smile.rotation.z = -Math.PI;

    // lips
    this.lips = new THREE.Mesh(lipsGeom, yellowMat_lion);
    this.lips.position.z = 165;
    this.lips.position.y = -45;


    // ear
    this.rightEar = new THREE.Mesh(earGeom, yellowMat_lion);
    this.rightEar.position.x = -50;
    this.rightEar.position.y = 50;
    this.rightEar.position.z = 105;

    this.leftEar = new THREE.Mesh(earGeom, yellowMat_lion);
    this.leftEar.position.x = 50;
    this.leftEar.position.y = 50;
    this.leftEar.position.z = 105;

    // nose
    this.nose = new THREE.Mesh(noseGeom, greyMat_lion);
    this.nose.position.z = 170;
    this.nose.position.y = 25;

    // head
    this.head = new THREE.Group();
    this.head.add(this.face);
    this.head.add(this.mane);
    this.head.add(this.rightEar);
    this.head.add(this.leftEar);
    this.head.add(this.nose);
    this.head.add(this.leftEye);
    this.head.add(this.rightEye);
    this.head.add(this.leftIris);
    this.head.add(this.rightIris);
    this.head.add(this.mouth);
    this.head.add(this.smile);
    this.head.add(this.lips);
    this.head.add(this.spot1);
    this.head.add(this.spot2);
    this.head.add(this.spot3);
    this.head.add(this.spot4);
    this.head.add(this.spot5);
    this.head.add(this.spot6);
    this.head.add(this.spot7);
    this.head.add(this.spot8);
    this.head.add(this.mustache1);
    this.head.add(this.mustache2);
    this.head.add(this.mustache3);
    this.head.add(this.mustache4);
    this.head.add(this.mustache5);
    this.head.add(this.mustache6);
    this.head.position.y = 60;

    this.threegroup.add(this.body);
    this.threegroup.add(this.head);
    this.threegroup.add(this.leftKnee);
    this.threegroup.add(this.rightKnee);
    this.threegroup.add(this.backRightPaw);
    this.threegroup.add(this.backLeftPaw);
    this.threegroup.add(this.frontRightFoot);
    this.threegroup.add(this.frontLeftFoot);

    this.threegroup.traverse(function (object) {
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });

    this.mesh = this.threegroup;
    this.mesh.scale.setX(1 / 4);
    this.mesh.scale.setY(1 / 4);
    this.mesh.scale.setZ(1 / 4);
    this.mesh.rotation.y = Math.PI/2;
}

Lion.prototype.updateBody = function (speed) {

    this.head.rotation.y += (this.tHeagRotY - this.head.rotation.y) / speed;
    this.head.rotation.x += (this.tHeadRotX - this.head.rotation.x) / speed;
    this.head.position.x += (this.tHeadPosX - this.head.position.x) / speed;
    this.head.position.y += (this.tHeadPosY - this.head.position.y) / speed;
    this.head.position.z += (this.tHeadPosZ - this.head.position.z) / speed;

    this.leftEye.scale.y += (this.tEyeScale - this.leftEye.scale.y) / (speed * 2);
    this.rightEye.scale.y = this.leftEye.scale.y;

    this.leftIris.scale.y += (this.tIrisYScale - this.leftIris.scale.y) / (speed * 2);
    this.rightIris.scale.y = this.leftIris.scale.y;

    this.leftIris.scale.z += (this.tIrisZScale - this.leftIris.scale.z) / (speed * 2);
    this.rightIris.scale.z = this.leftIris.scale.z;

    this.leftIris.position.y += (this.tIrisPosY - this.leftIris.position.y) / speed;
    this.rightIris.position.y = this.leftIris.position.y;
    this.leftIris.position.z += (this.tLeftIrisPosZ - this.leftIris.position.z) / speed;
    this.rightIris.position.z += (this.tRightIrisPosZ - this.rightIris.position.z) / speed;

    this.rightKnee.rotation.z += (this.tRightKneeRotZ - this.rightKnee.rotation.z) / speed;
    this.leftKnee.rotation.z += (this.tLeftKneeRotZ - this.leftKnee.rotation.z) / speed;

    this.lips.position.x += (this.tLipsPosX - this.lips.position.x) / speed;
    this.lips.position.y += (this.tLipsPosY - this.lips.position.y) / speed;
    this.smile.position.x += (this.tSmilePosX - this.smile.position.x) / speed;
    this.mouth.position.z += (this.tMouthPosZ - this.mouth.position.z) / speed;
    this.smile.position.z += (this.tSmilePosZ - this.smile.position.z) / speed;
    this.smile.position.y += (this.tSmilePosY - this.smile.position.y) / speed;
    this.smile.rotation.z += (this.tSmileRotZ - this.smile.rotation.z) / speed;
}

Lion.prototype.look = function (xTarget, yTarget) {
    this.tHeagRotY = rule3(xTarget, -200, 200, -Math.PI / 4, Math.PI / 4);
    this.tHeadRotX = rule3(yTarget, -200, 200, -Math.PI / 4, Math.PI / 4);
    this.tHeadPosX = rule3(xTarget, -200, 200, 70, -70);
    this.tHeadPosY = rule3(yTarget, -140, 260, 20, 100);
    this.tHeadPosZ = 0;


    this.tEyeScale = 1;
    this.tIrisYScale = 1;
    this.tIrisZScale = 1;
    this.tIrisPosY = rule3(yTarget, -200, 200, 35, 15);
    this.tLeftIrisPosZ = rule3(xTarget, -200, 200, 130, 110);
    this.tRightIrisPosZ = rule3(xTarget, -200, 200, 110, 130);

    this.tLipsPosX = 0;
    this.tLipsPosY = -45;

    this.tSmilePosX = 0;
    this.tMouthPosZ = 174;
    this.tSmilePosZ = 173;
    this.tSmilePosY = -15;
    this.tSmileRotZ = -Math.PI;

    this.tRightKneeRotZ = rule3(xTarget, -200, 200, .3 - Math.PI / 8, .3 + Math.PI / 8);
    this.tLeftKneeRotZ = rule3(xTarget, -200, 200, -.3 - Math.PI / 8, -.3 + Math.PI / 8)


    this.updateBody(10);

    this.mane.rotation.y = 0;
    this.mane.rotation.x = 0;

    for (var i = 0; i < this.maneParts.length; i++) {
        var m = this.maneParts[i].mesh;
        m.position.z = 0;
        m.rotation.y = 0;
    }

    for (var i = 0; i < this.mustaches.length; i++) {
        var m = this.mustaches[i];
        m.rotation.y = 0;
    }


    for (var i = 0; i < this.bodyVertices.length; i++) {
        var tvInit = this.bodyInitPositions[i];
        var tv = this.body.geometry.vertices[this.bodyVertices[i]];
        tv.x = tvInit.x + this.head.position.x;
    }
    this.body.geometry.verticesNeedUpdate = true;
}

Lion.prototype.cool = function (xTarget, yTarget) {
    this.tHeagRotY = rule3(xTarget, -200, 200, Math.PI / 4, -Math.PI / 4);
    this.tHeadRotX = rule3(yTarget, -200, 200, Math.PI / 4, -Math.PI / 4);
    this.tHeadPosX = rule3(xTarget, -200, 200, -70, 70);
    this.tHeadPosY = rule3(yTarget, -140, 260, 100, 20);
    this.tHeadPosZ = 100;

    this.tEyeScale = 0.1;
    this.tIrisYScale = 0.1;
    this.tIrisZScale = 3;

    this.tIrisPosY = 20;
    this.tLeftIrisPosZ = 120;
    this.tRightIrisPosZ = 120;

    this.tLipsPosX = rule3(xTarget, -200, 200, -15, 15);
    this.tLipsPosY = rule3(yTarget, -200, 200, -45, -40);

    this.tMouthPosZ = 168;
    this.tSmilePosX = rule3(xTarget, -200, 200, -15, 15);
    this.tSmilePosY = rule3(yTarget, -200, 200, -20, -8);
    this.tSmilePosZ = 176;
    this.tSmileRotZ = rule3(xTarget, -200, 200, -Math.PI - .3, -Math.PI + .3);

    this.tRightKneeRotZ = rule3(xTarget, -200, 200, .3 + Math.PI / 8, .3 - Math.PI / 8);
    this.tLeftKneeRotZ = rule3(xTarget, -200, 200, -.3 + Math.PI / 8, -.3 - Math.PI / 8);

    this.updateBody(10);

    this.mane.rotation.y = -.8 * this.head.rotation.y;
    this.mane.rotation.x = -.8 * this.head.rotation.x;

    var dt = 20000 / (xTarget * xTarget + yTarget * yTarget);
    dt = Math.max(Math.min(dt, 1), .5);
    this.windTime += dt;

    for (var i = 0; i < this.maneParts.length; i++) {
        var m = this.maneParts[i].mesh;
        var amp = this.maneParts[i].amp;
        var zOffset = this.maneParts[i].zOffset;
        var periodOffset = this.maneParts[i].periodOffset;

        m.position.z = zOffset + Math.cos(this.windTime + periodOffset) * amp * dt * 2;
    }

    this.leftEar.rotation.x = Math.cos(this.windTime) * Math.PI / 16 * dt;
    this.rightEar.rotation.x = -Math.cos(this.windTime) * Math.PI / 16 * dt;


    for (var i = 0; i < this.mustaches.length; i++) {
        var m = this.mustaches[i];
        var amp = (i < 3) ? -Math.PI / 8 : Math.PI / 8;
        m.rotation.y = amp + Math.cos(this.windTime + i) * dt * amp;
    };

    for (var i = 0; i < this.bodyVertices.length; i++) {
        var tvInit = this.bodyInitPositions[i];
        var tv = this.body.geometry.vertices[this.bodyVertices[i]];
        tv.x = tvInit.x + this.head.position.x;
    }
    this.body.geometry.verticesNeedUpdate = true;
}

Lion.prototype.run = function () {

}

Lion.prototype.jump = function () {

}

Lion.prototype.nod = function () {

}

Lion.prototype.hang = function () {

}

Lion.prototype.sit = function () {

}

Lion.prototype.pause = function () {

}

Lion.prototype.resetOrgPosition = function () {
    this.mesh.scale.setX(0.3);
    this.mesh.scale.setY(0.3);
    this.mesh.scale.setZ(0.3);
    this.mesh.rotation.y = Math.PI / 2;
    this.mesh.position.y = 50;
    this.mesh.position.x = -50;
}

/*Dragon*/
var Dragon = function () {
    this.tailAmplitude = 3;
    this.tailAngle = 0;
    this.tailSpeed = .07;

    this.wingAmplitude = Math.PI / 8;
    this.wingAngle = 0;
    this.wingSpeed = 0.1
    this.isSneezing = false;

    this.mesh = new THREE.Group(); // this is a sort of container that will hold all the meshes and will be added to the scene;
    // body
    this.body = new THREE.Group();
    this.belly = makeCube(greenMat_1, 30, 30, 40, 0, 0, 0, 0, 0, Math.PI / 4);

    // Wings
    this.wingL = makeCube(yellowMat, 5, 30, 20, 15, 15, 0, -Math.PI / 4, 0, -Math.PI / 4);
    this.wingL.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 15, 10));
    this.wingR = this.wingL.clone();
    this.wingR.position.x = -this.wingL.position.x;
    this.wingR.rotation.z = -this.wingL.rotation.z;

    // pike body
    var pikeBodyGeom = new THREE.CylinderGeometry(0, 10, 10, 4, 1);
    this.pikeBody1 = new THREE.Mesh(pikeBodyGeom, greenMat_1);
    this.pikeBody1.scale.set(.2, 1, 1);
    this.pikeBody1.position.z = 10;
    this.pikeBody1.position.y = 26;

    this.pikeBody2 = this.pikeBody1.clone();
    this.pikeBody2.position.z = 0
    this.pikeBody3 = this.pikeBody1.clone();
    this.pikeBody3.position.z = -10;

    // tail
    this.tail = new THREE.Group();
    this.tail.position.z = -20;
    this.tail.position.y = 10;

    var tailGeom = new THREE.Geometry();
    tailGeom.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 5, -10),
      new THREE.Vector3(0, -5, -20),
      new THREE.Vector3(0, 0, -30)
    );

    this.tailLine = new THREE.Line(tailGeom, tailMat);

    // pike
    var pikeGeom = new THREE.CylinderGeometry(0, 10, 10, 4, 1);
    pikeGeom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    this.tailPike = new THREE.Mesh(pikeGeom, yellowMat);
    this.tailPike.scale.set(.2, 1, 1);
    this.tailPike.position.z = -35;
    this.tailPike.position.y = 0;

    this.tail.add(this.tailLine);
    this.tail.add(this.tailPike);

    this.body.add(this.belly);
    this.body.add(this.wingL);
    this.body.add(this.wingR);
    this.body.add(this.tail);
    this.body.add(this.pikeBody1);
    this.body.add(this.pikeBody2);
    this.body.add(this.pikeBody3);

    // head
    this.head = new THREE.Group();

    // head face
    this.face = makeCube(greenMat, 60, 50, 80, 0, 25, 40, 0, 0, 0);

    // head horn
    var hornGeom = new THREE.CylinderGeometry(0, 6, 10, 4, 1);
    this.hornL = new THREE.Mesh(hornGeom, yellowMat);
    this.hornL.position.y = 55;
    this.hornL.position.z = 10;
    this.hornL.position.x = 10;

    this.hornR = this.hornL.clone();
    this.hornR.position.x = -10;

    // head ears
    this.earL = makeCube(greenMat, 5, 10, 20, 32, 42, 2, 0, 0, 0);
    this.earL.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 5, -10));
    this.earL.geometry.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 4));
    this.earL.geometry.applyMatrix(new THREE.Matrix4().makeRotationY(-Math.PI / 4));

    this.earR = makeCube(greenMat, 5, 10, 20, -32, 42, 2, 0, 0, 0);
    this.earR.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 5, -10));
    this.earR.geometry.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 4));
    this.earR.geometry.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 4));

    // head mouth
    this.mouth = new THREE.Group();
    this.mouth.position.z = 50;
    this.mouth.position.y = 3;
    this.mouth.rotation.x = 0//Math.PI / 8;

    // head mouth jaw
    this.jaw = makeCube(greenMat, 30, 10, 30, 0, -5, 15, 0, 0, 0);
    this.mouth.add(this.jaw);

    // head mouth tongue
    this.tongue = makeCube(redMat, 20, 10, 20, 0, -3, 15, 0, 0, 0);
    this.mouth.add(this.tongue);

    // head smile
    var smileGeom = new THREE.TorusGeometry(6, 2, 2, 10, Math.PI);
    this.smile = new THREE.Mesh(smileGeom, blackMat_1);
    this.smile.position.z = 82;
    this.smile.position.y = 5;
    this.smile.rotation.z = -Math.PI;


    // head cheek
    this.cheekL = makeCube(lightGreenMat, 4, 20, 20, 30, 18, 55, 0, 0, 0);
    this.cheekR = this.cheekL.clone();
    this.cheekR.position.x = -this.cheekL.position.x;

    //head spots
    this.spot1 = makeCube(lightGreenMat, 2, 2, 2, 20, 16, 80, 0, 0, 0);

    this.spot2 = this.spot1.clone();
    this.spot2.position.x = 15;
    this.spot2.position.y = 14;

    this.spot3 = this.spot1.clone();
    this.spot3.position.x = 16;
    this.spot3.position.y = 20;

    this.spot4 = this.spot1.clone();
    this.spot4.position.x = 12;
    this.spot4.position.y = 18;


    this.spot5 = this.spot1.clone();
    this.spot5.position.x = -15;
    this.spot5.position.y = 14;

    this.spot6 = this.spot1.clone();
    this.spot6.position.x = -14;
    this.spot6.position.y = 20;

    this.spot7 = this.spot1.clone();
    this.spot7.position.x = -19;
    this.spot7.position.y = 17;

    this.spot8 = this.spot1.clone();
    this.spot8.position.x = -11;
    this.spot8.position.y = 17;


    // head eye
    this.eyeL = makeCube(whiteMat, 10, 22, 22, 27, 34, 18, 0, 0, 0);
    this.eyeR = this.eyeL.clone();
    this.eyeR.position.x = -27;

    // head iris
    this.irisL = makeCube(brownMat, 10, 12, 12, 28, 30, 24, 0, 0, 0);
    this.irisR = this.irisL.clone();
    this.irisR.position.x = -this.irisL.position.x;

    // head nose
    this.noseL = makeCube(blackMat_1, 5, 5, 8, 5, 40, 77, 0, 0, 0);
    this.noseR = this.noseL.clone();
    this.noseR.position.x = -this.noseL.position.x;

    this.head.position.z = 30;
    this.head.add(this.face);
    this.head.add(this.hornL);
    this.head.add(this.hornR);
    this.head.add(this.earL);
    this.head.add(this.earR);
    this.head.add(this.mouth);
    this.head.add(this.eyeL);
    this.head.add(this.eyeR);
    this.head.add(this.irisL);
    this.head.add(this.irisR);
    this.head.add(this.noseL);
    this.head.add(this.noseR);
    this.head.add(this.cheekL);
    this.head.add(this.cheekR);
    this.head.add(this.smile);
    /*
    this.head.add(this.spot1);
    this.head.add(this.spot2);
    this.head.add(this.spot3);
    this.head.add(this.spot4);
    this.head.add(this.spot5);
    this.head.add(this.spot6);
    this.head.add(this.spot7);
    this.head.add(this.spot8);
    */
    // legs
    this.legFL = makeCube(greenMat_1, 20, 10, 20, 20, -30, 15, 0, 0, 0);
    this.legFR = this.legFL.clone();
    this.legFR.position.x = -30;
    this.legBL = this.legFL.clone();
    this.legBL.position.z = -15;
    this.legBR = this.legBL.clone();
    this.legBR.position.x = -30;

    this.mesh.add(this.body);
    this.mesh.add(this.head);
    this.mesh.add(this.legFL);
    this.mesh.add(this.legFR);
    this.mesh.add(this.legBL);
    this.mesh.add(this.legBR);
    //this.threegroup.add(this.pike);

    this.mesh.traverse(function (object) {
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });

    this.mesh.scale.setX(1 / 3);
    this.mesh.scale.setY(1 / 3);
    this.mesh.scale.setZ(1 / 3);
    this.mesh.rotation.y = Math.PI / 2;
}

Dragon.prototype.update = function () {

    this.tailAngle += this.tailSpeed / globalSpeedRate;
    this.wingAngle += this.wingSpeed / globalSpeedRate;
    for (var i = 0; i < this.tailLine.geometry.vertices.length; i++) {
        var v = this.tailLine.geometry.vertices[i];
        v.y = Math.sin(this.tailAngle - (Math.PI / 3) * i) * this.tailAmplitude * i * i;
        v.x = Math.cos(this.tailAngle / 2 + (Math.PI / 10) * i) * this.tailAmplitude * i * i;
        if (i == this.tailLine.geometry.vertices.length - 1) {
            this.tailPike.position.x = v.x;
            this.tailPike.position.y = v.y;
            this.tailPike.rotation.x = (v.y / 30);
        }
    }
    this.tailLine.geometry.verticesNeedUpdate = true;

    this.wingL.rotation.z = -Math.PI / 4 + Math.cos(this.wingAngle) * this.wingAmplitude;
    this.wingR.rotation.z = Math.PI / 4 - Math.cos(this.wingAngle) * this.wingAmplitude;
}

Dragon.prototype.prepareToSneeze = function (s) {
    var _this = this;
    var speed = .7 * globalSpeedRate;
    TweenLite.to(this.head.rotation, speed, {
        x: -s * .12,
        ease: Back.easeOut
    });
    TweenLite.to(this.head.position, speed, {
        z: 30 - s * 2.2,
        y: s * 2.2,
        ease: Back.easeOut
    });
    TweenLite.to(this.mouth.rotation, speed, {
        x: s * .18,
        ease: Back.easeOut
    });

    TweenLite.to(this.smile.position, speed / 2, {
        z: 75,
        y: 10,
        ease: Back.easeOut
    });
    TweenLite.to(this.smile.scale, speed / 2, {
        x: 0, y: 0,
        ease: Back.easeOut
    });

    TweenMax.to(this.noseL.scale, speed, {
        x: 1 + s * .1,
        y: 1 + s * .1,
        ease: Back.easeOut
    });
    TweenMax.to(this.noseR.scale, speed, {
        x: 1 + s * .1,
        y: 1 + s * .1,
        ease: Back.easeOut
    });
    TweenMax.to(this.eyeL.scale, speed, {
        y: 1 + s * .01,
        ease: Back.easeOut
    });
    TweenMax.to(this.eyeR.scale, speed, {
        y: 1 + s * .01,
        ease: Back.easeOut
    });
    TweenMax.to(this.irisL.scale, speed, {
        y: 1 + s * .05,
        z: 1 + s * .05,
        ease: Back.easeOut
    });
    TweenMax.to(this.irisR.scale, speed, {
        y: 1 + s * .05,
        z: 1 + s * .05,
        ease: Back.easeOut
    });
    TweenMax.to(this.irisL.position, speed, {
        y: 30 + s * .8,
        z: 24 - s * .4,
        ease: Back.easeOut
    });
    TweenMax.to(this.irisR.position, speed, {
        y: 30 + s * .8,
        z: 24 - s * .4,
        ease: Back.easeOut
    });
    TweenMax.to(this.earL.rotation, speed, {
        x: -s * .1,
        y: -s * .1,
        ease: Back.easeOut
    });
    TweenMax.to(this.earR.rotation, speed, {
        x: -s * .1,
        y: s * .1,
        ease: Back.easeOut
    });
    TweenMax.to(this.wingL.rotation, speed, {
        z: -Math.PI / 4 - s * .1,
        ease: Back.easeOut
    });
    TweenMax.to(this.wingR.rotation, speed, {
        z: Math.PI / 4 + s * .1,
        ease: Back.easeOut
    });
    TweenMax.to(this.body.rotation, speed, {
        x: -s * .05,
        ease: Back.easeOut
    });
    TweenMax.to(this.body.scale, speed, {
        y: 1 + s * .01,
        ease: Back.easeOut
    });
    TweenMax.to(this.body.position, speed, {
        z: -s * 2,
        ease: Back.easeOut
    });

    TweenMax.to(this.tail.rotation, speed, {
        x: s * 0.1,
        ease: Back.easeOut
    });

}

Dragon.prototype.sneeze = function (s) {
    var _this = this;
    var sneezeEffect = 1 - (s / maxSneezingRate);
    var speed = .1 * globalSpeedRate;
    timeFire = Math.round(s * 10);

    TweenLite.to(this.head.rotation, speed, {
        x: s * .05,
        ease: Back.easeOut
    });
    TweenLite.to(this.head.position, speed, {
        z: 30 + s * 2.4,
        y: -s * .4,
        ease: Back.easeOut
    });

    TweenLite.to(this.mouth.rotation, speed, {
        x: 0,
        ease: Strong.easeOut
    });

    TweenLite.to(this.smile.position, speed * 2, {
        z: 82,
        y: 5,
        ease: Strong.easeIn
    });

    TweenLite.to(this.smile.scale, speed * 2, {
        x: 1,
        y: 1,
        ease: Strong.easeIn
    });


    TweenMax.to(this.noseL.scale, speed, {
        y: sneezeEffect,
        ease: Strong.easeOut
    });
    TweenMax.to(this.noseR.scale, speed, {
        y: sneezeEffect,
        ease: Strong.easeOut
    });
    TweenMax.to(this.noseL.position, speed, {
        y: 40, // - (sneezeEffect * 5),
        ease: Strong.easeOut
    });
    TweenMax.to(this.noseR.position, speed, {
        y: 40, // - (sneezeEffect * 5),
        ease: Strong.easeOut
    });
    TweenMax.to(this.irisL.scale, speed, {
        y: sneezeEffect / 2,
        z: 1,
        ease: Strong.easeOut
    });
    TweenMax.to(this.irisR.scale, speed, {
        y: sneezeEffect / 2,
        z: 1,
        ease: Strong.easeOut
    });
    TweenMax.to(this.eyeL.scale, speed, {
        y: sneezeEffect / 2,
        ease: Back.easeOut
    });
    TweenMax.to(this.eyeR.scale, speed, {
        y: sneezeEffect / 2,
        ease: Back.easeOut
    });

    TweenMax.to(this.wingL.rotation, speed, {
        z: -Math.PI / 4 + s * .15,
        ease: Back.easeOut
    });
    TweenMax.to(this.wingR.rotation, speed, {
        z: Math.PI / 4 - s * .15,
        ease: Back.easeOut
    });

    TweenMax.to(this.body.rotation, speed, {
        x: s * 0.02,
        ease: Back.easeOut
    });
    TweenMax.to(this.body.scale, speed, {
        y: 1 - s * .03,
        ease: Back.easeOut
    });
    TweenMax.to(this.body.position, speed, {
        z: s * 2,
        ease: Back.easeOut
    });

    TweenMax.to(this.irisL.position, speed * 7, {
        y: 35,
        ease: Back.easeOut
    });
    TweenMax.to(this.irisR.position, speed * 7, {
        y: 35,
        ease: Back.easeOut
    });
    TweenMax.to(this.earR.rotation, speed * 3, {
        x: s * .20,
        y: s * .20,
        ease: Back.easeOut
    });
    TweenMax.to(this.earL.rotation, speed * 3, {
        x: s * .20,
        y: -s * .20,
        ease: Back.easeOut,
        onComplete: function () {
            _this.backToNormal(s);
            fireRate = s;
            console.log(fireRate);
        }
    });

    TweenMax.to(this.tail.rotation, speed * 3, {
        x: -s * 0.1,
        ease: Back.easeOut
    });

}

Dragon.prototype.backToNormal = function (s) {
    var _this = this;
    var speed = 1 * globalSpeedRate;
    TweenLite.to(this.head.rotation, speed, {
        x: 0,
        ease: Strong.easeInOut
    });
    TweenLite.to(this.head.position, speed, {
        z: 30,
        y: 0,
        ease: Back.easeOut
    });
    TweenMax.to(this.noseL.scale, speed, {
        x: 1,
        y: 1,
        ease: Strong.easeInOut
    });
    TweenMax.to(this.noseR.scale, speed, {
        x: 1,
        y: 1,
        ease: Strong.easeInOut
    });
    TweenMax.to(this.noseL.position, speed, {
        y: 40,
        ease: Strong.easeInOut
    });
    TweenMax.to(this.noseR.position, speed, {
        y: 40,
        ease: Strong.easeInOut
    });
    TweenMax.to(this.irisL.scale, speed, {
        y: 1,
        z: 1,
        ease: Back.easeOut
    });
    TweenMax.to(this.irisR.scale, speed, {
        y: 1,
        z: 1,
        ease: Back.easeOut
    });
    TweenMax.to(this.irisL.position, speed * .7, {
        y: 30,
        ease: Back.easeOut
    });
    TweenMax.to(this.irisR.position, speed * .7, {
        y: 30,
        ease: Back.easeOut
    });
    TweenMax.to(this.eyeL.scale, speed, {
        y: 1,
        ease: Strong.easeOut
    });
    TweenMax.to(this.eyeR.scale, speed, {
        y: 1,
        ease: Strong.easeOut
    });
    TweenMax.to(this.body.rotation, speed, {
        x: 0,
        ease: Back.easeOut
    });
    TweenMax.to(this.body.scale, speed, {
        y: 1,
        ease: Back.easeOut
    });
    TweenMax.to(this.body.position, speed, {
        z: 0,
        ease: Back.easeOut
    });

    TweenMax.to(this.wingL.rotation, speed * 1.3, {
        z: -Math.PI / 4,
        ease: Back.easeInOut
    });
    TweenMax.to(this.wingR.rotation, speed * 1.3, {
        z: Math.PI / 4,
        ease: Back.easeInOut
    });

    TweenMax.to(this.earL.rotation, speed * 1.3, {
        x: 0,
        y: 0,
        ease: Back.easeInOut
    });
    TweenMax.to(this.earR.rotation, speed * 1.3, {
        x: 0,
        y: 0,
        ease: Back.easeInOut,
        onComplete: function () {
            _this.isSneezing = false;
            timeSmoke = Math.round(s * 5);
        }
    });

    TweenMax.to(this.tail.rotation, speed * 1.3, {
        x: 0,
        ease: Back.easeOut
    });

}

Dragon.prototype.run = function () {

}

Dragon.prototype.jump = function () {

}

Dragon.prototype.nod = function () {

}

Dragon.prototype.hang = function () {

}

Dragon.prototype.sit = function () {

}

Dragon.prototype.pause = function () {

}

Dragon.prototype.resetOrgPosition = function () {
    this.mesh.position.y = 100
    this.mesh.rotation.y = Math.PI / 2
    this.mesh.position.x = -50
    this.mesh.scale.setY(0.6);
    this.mesh.scale.setX(0.6);
    this.mesh.scale.setZ(0.6);
}

function makeCube(mat, w, h, d, posX, posY, posZ, rotX, rotY, rotZ) {
    var geom = new THREE.BoxGeometry(w, h, d);
    var mesh = new THREE.Mesh(geom, mat);
    mesh.position.x = posX;
    mesh.position.y = posY;
    mesh.position.z = posZ;
    mesh.rotation.x = rotX;
    mesh.rotation.y = rotY;
    mesh.rotation.z = rotZ;
    return mesh;
}

/*Bird*/
var Bird = function () {
    this.rSegments = 4;
    this.hSegments = 3;
    this.cylRay = 120;
    this.bodyBirdInitPositions = [];
    this.vAngle = this.hAngle = 0;
    this.normalSkin = { r: 255 / 255, g: 222 / 255, b: 121 / 255 };
    this.shySkin = { r: 255 / 255, g: 157 / 255, b: 101 / 255 };
    this.color = { r: this.normalSkin.r, g: this.normalSkin.g, b: this.normalSkin.b };
    this.side = "left";

    this.shyAngles = { h: 0, v: 0 };
    this.behaviourInterval;
    this.intervalRunning = false;

    this.threegroup = new THREE.Group();
    //WINGS

    this.wingLeftGroup = new THREE.Group();
    this.wingRightGroup = new THREE.Group();

    var wingGeom = new THREE.BoxGeometry(60, 60, 5);
    var wingLeft = new THREE.Mesh(wingGeom, yellowMat_bird);
    this.wingLeftGroup.add(wingLeft);
    this.wingLeftGroup.position.x = 70;
    this.wingLeftGroup.position.z = 0;
    this.wingLeftGroup.rotation.y = Math.PI / 2;
    wingLeft.rotation.x = -Math.PI / 4;
    var wingRight = new THREE.Mesh(wingGeom, yellowMat_bird);
    this.wingRightGroup.add(wingRight);
    this.wingRightGroup.position.x = -70;
    this.wingRightGroup.position.z = 0;
    this.wingRightGroup.rotation.y = -Math.PI / 2;
    wingRight.rotation.x = -Math.PI / 4;

    //BODY

    var bodyGeom = new THREE.CylinderGeometry(40, 70, 200, this.rSegments, this.hSegments);
    this.bodyBird = new THREE.Mesh(bodyGeom, yellowMat_bird);
    this.bodyBird.position.y = 70;

    this.bodyVerticesLength = (this.rSegments + 1) * (this.hSegments);
    for (var i = 0; i < this.bodyVerticesLength; i++) {
        var tv = this.bodyBird.geometry.vertices[i];
        this.bodyBirdInitPositions.push({ x: tv.x, y: tv.y, z: tv.z });
    }

    this.threegroup.add(this.bodyBird);
    this.threegroup.add(this.wingLeftGroup);
    this.threegroup.add(this.wingRightGroup);


    // EYES

    this.face = new THREE.Group();
    var eyeGeom = new THREE.BoxGeometry(60, 60, 10);
    var irisGeom = new THREE.BoxGeometry(10, 10, 10);

    this.leftEye = new THREE.Mesh(eyeGeom, whiteMat_bird);
    this.leftEye.position.x = -30;
    this.leftEye.position.y = 120;
    this.leftEye.position.z = 35;
    this.leftEye.rotation.y = -Math.PI / 4;

    this.leftIris = new THREE.Mesh(irisGeom, blackMat_bird);
    this.leftIris.position.x = -30;
    this.leftIris.position.y = 120;
    this.leftIris.position.z = 40;
    this.leftIris.rotation.y = -Math.PI / 4;


    this.rightEye = new THREE.Mesh(eyeGeom, whiteMat_bird);
    this.rightEye.position.x = 30;
    this.rightEye.position.y = 120;
    this.rightEye.position.z = 35;
    this.rightEye.rotation.y = Math.PI / 4;

    this.rightIris = new THREE.Mesh(irisGeom, blackMat_bird);
    this.rightIris.position.x = 30;
    this.rightIris.position.y = 120;
    this.rightIris.position.z = 40;
    this.rightIris.rotation.y = Math.PI / 4;

    // BEAK

    var beakGeom = new THREE.CylinderGeometry(0, 20, 20, 4, 1);
    this.beak = new THREE.Mesh(beakGeom, orangeMat_bird);
    this.beak.position.z = 65;
    this.beak.position.y = 70;
    this.beak.rotation.x = Math.PI / 2;

    this.face.add(this.rightEye);
    this.face.add(this.rightIris);
    this.face.add(this.leftEye);
    this.face.add(this.leftIris);
    this.face.add(this.beak);

    //FEATHERS

    var featherGeom = new THREE.BoxGeometry(10, 20, 5);
    this.feather1 = new THREE.Mesh(featherGeom, yellowMat_bird);
    this.feather1.position.z = 55;
    this.feather1.position.y = 185;
    this.feather1.rotation.x = Math.PI / 4;
    this.feather1.scale.set(1.5, 1.5, 1);

    this.feather2 = new THREE.Mesh(featherGeom, yellowMat_bird);
    this.feather2.position.z = 50;
    this.feather2.position.y = 180;
    this.feather2.position.x = 20;
    this.feather2.rotation.x = Math.PI / 4;
    this.feather2.rotation.z = -Math.PI / 8;

    this.feather3 = new THREE.Mesh(featherGeom, yellowMat_bird);
    this.feather3.position.z = 50;
    this.feather3.position.y = 180;
    this.feather3.position.x = -20;
    this.feather3.rotation.x = Math.PI / 4;
    this.feather3.rotation.z = Math.PI / 8;

    this.face.add(this.feather1);
    this.face.add(this.feather2);
    this.face.add(this.feather3);
    this.threegroup.add(this.face);

    this.threegroup.traverse(function (object) {
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });
    this.mesh = this.threegroup;
    this.mesh.scale.setX(1 / 6);
    this.mesh.scale.setY(1 / 6);
    this.mesh.scale.setZ(1 / 6);
    this.mesh.rotation.y = Math.PI / 2;
}

Bird.prototype.look = function (hAngle, vAngle) {
    this.hAngle = hAngle;
    this.vAngle = vAngle;

    this.leftIris.position.y = 120 - this.vAngle * 30;
    this.leftIris.position.x = -30 + this.hAngle * 10;
    this.leftIris.position.z = 40 + this.hAngle * 10;

    this.rightIris.position.y = 120 - this.vAngle * 30;
    this.rightIris.position.x = 30 + this.hAngle * 10;
    this.rightIris.position.z = 40 - this.hAngle * 10;

    this.leftEye.position.y = this.rightEye.position.y = 120 - this.vAngle * 10;

    this.beak.position.y = 70 - this.vAngle * 20;
    this.beak.rotation.x = Math.PI / 2 + this.vAngle / 3;

    this.feather1.rotation.x = (Math.PI / 4) + (this.vAngle / 2);
    this.feather1.position.y = 185 - this.vAngle * 10;
    this.feather1.position.z = 55 + this.vAngle * 10;

    this.feather2.rotation.x = (Math.PI / 4) + (this.vAngle / 2);
    this.feather2.position.y = 180 - this.vAngle * 10;
    this.feather2.position.z = 50 + this.vAngle * 10;

    this.feather3.rotation.x = (Math.PI / 4) + (this.vAngle / 2);
    this.feather3.position.y = 180 - this.vAngle * 10;
    this.feather3.position.z = 50 + this.vAngle * 10;


    for (var i = 0; i < this.bodyVerticesLength; i++) {
        var line = Math.floor(i / (this.rSegments + 1));
        var tv = this.bodyBird.geometry.vertices[i];
        var tvInitPos = this.bodyBirdInitPositions[i];
        var a, dy;
        if (line >= this.hSegments - 1) {
            a = 0;
        } else {
            a = this.hAngle / (line + 1);
        }
        var tx = tvInitPos.x * Math.cos(a) + tvInitPos.z * Math.sin(a);
        var tz = -tvInitPos.x * Math.sin(a) + tvInitPos.z * Math.cos(a);
        tv.x = tx;
        tv.z = tz;
    }
    this.face.rotation.y = this.hAngle;
    this.bodyBird.geometry.verticesNeedUpdate = true;

}

Bird.prototype.lookAway = function (fastMove) {
    var speed = fastMove ? .4 : 2;
    var ease = fastMove ? Strong.easeOut : Strong.easeInOut;
    var delay = fastMove ? .2 : 0;
    var col = fastMove ? this.shySkin : this.normalSkin;
    var tv = (-1 + Math.random() * 2) * Math.PI / 3;
    var beakScaleX = .75 + Math.random() * .25;
    var beakScaleZ = .5 + Math.random() * .5;

    if (this.side == "right") {
        var th = (-1 + Math.random()) * Math.PI / 4;
    } else {
        var th = Math.random() * Math.PI / 4;
    }
    _this = this;
    TweenMax.killTweensOf(this.shyAngles);
    TweenMax.to(this.shyAngles, speed, { v: tv, h: th, ease: ease, delay: delay });
    TweenMax.to(this.color, speed, { r: col.r, g: col.g, b: col.b, ease: ease, delay: delay });
    TweenMax.to(this.beak.scale, speed, { z: beakScaleZ, x: beakScaleX, ease: ease, delay: delay });

}

Bird.prototype.stare = function () {
    _this = this;
    var col = this.normalSkin;
    if (this.side == "right") {
        var th = Math.PI / 3;
    } else {
        var th = -Math.PI / 3;
    }
    TweenMax.to(this.shyAngles, 2, { v: -.5, h: th, ease: Strong.easeInOut });
    TweenMax.to(this.color, 2, { r: col.r, g: col.g, b: col.b, ease: Strong.easeInOut });
    TweenMax.to(this.beak.scale, 2, { z: .8, x: 1.5, ease: Strong.easeInOut });

}

Bird.prototype.run = function () {

}

Bird.prototype.jump = function () {

}

Bird.prototype.nod = function () {

}

Bird.prototype.hang = function () {

}

Bird.prototype.sit = function () {

}

Bird.prototype.pause = function () {

}

Bird.prototype.resetOrgPosition = function () {
    this.mesh.position.y = 0
    this.mesh.rotation.y = Math.PI / 2
    this.mesh.position.x = -70
    this.mesh.scale.setY(0.4);
    this.mesh.scale.setX(0.4);
    this.mesh.scale.setZ(0.4);

}

/*Mouse*/
var Mouse = function () {
    this.angle = 0;
    this.status = "ready";
    this.mesh = new THREE.Group();
    var bodyGeom = new THREE.CubeGeometry(mouseDefault.body.w, mouseDefault.body.h, mouseDefault.body.d, 1);
    this.body = new THREE.Mesh(bodyGeom, mouseDefault.body.c);

    var headGeom = new THREE.CubeGeometry(mouseDefault.head.w, mouseDefault.head.h, mouseDefault.head.d, 1);
    this.head = new THREE.Mesh(headGeom, mouseDefault.head.c);
    this.head.position.z = 8;
    this.head.position.y = -.5;

    var noseGeom = new THREE.CubeGeometry(mouseDefault.nose.w, mouseDefault.nose.h, mouseDefault.nose.d, 1);
    this.nose = new THREE.Mesh(noseGeom, mouseDefault.nose.c);
    this.nose.position.z = 4;
    this.nose.position.y = 2;

    var eyeGeom = new THREE.CubeGeometry(mouseDefault.eye.w, mouseDefault.eye.h, mouseDefault.eye.d);

    this.eyeL = new THREE.Mesh(eyeGeom, mouseDefault.eye.c);
    this.eyeL.position.x = 2.2;
    this.eyeL.position.z = -.5;
    this.eyeL.position.y = .8;
    this.eyeL.castShadow = true;
    this.head.add(this.eyeL);

    var irisGeom = new THREE.CubeGeometry(mouseDefault.iris.w, mouseDefault.iris.h, mouseDefault.iris.d);

    this.iris = new THREE.Mesh(irisGeom, mouseDefault.iris.c);
    this.iris.position.x = .5;
    this.iris.position.y = .8;
    this.iris.position.z = .8;
    this.eyeL.add(this.iris);

    this.eyeR = this.eyeL.clone();
    this.eyeR.children[0].position.x = -this.iris.position.x;
    this.eyeR.position.x = -this.eyeL.position.x;

    //var spikeGeom = new THREE.CubeGeometry(obstacleDefault.spike.w, obstacleDefault.spike.h, obstacleDefault.spike.d, 1);
    //spikeGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 1, 0));

    //for (var i = 0; i < 9; i++) {
    //    var row = (i % 3);
    //    var col = Math.floor(i / 3);
    //    var sb = new THREE.Mesh(spikeGeom, obstacleDefault.spike.c);
    //    sb.rotation.x = -Math.PI / 2 + (Math.PI / 12 * row) - .5 + Math.random();
    //    sb.position.z = -3;
    //    sb.position.y = -2 + row * 2;
    //    sb.position.x = -2 + col * 2;
    //    this.body.add(sb);
    //    var st = new THREE.Mesh(spikeGeom, obstacleDefault.spike.c);
    //    st.position.y = 3;
    //    st.position.x = -2 + row * 2;
    //    st.position.z = -2 + col * 2;
    //    st.rotation.z = Math.PI / 6 - (Math.PI / 6 * row) - .5 + Math.random();
    //    this.body.add(st);

    //    var sr = new THREE.Mesh(spikeGeom, obstacleDefault.spike.c);
    //    sr.position.x = 3;
    //    sr.position.y = -2 + row * 2;
    //    sr.position.z = -2 + col * 2;
    //    sr.rotation.z = -Math.PI / 2 + (Math.PI / 12 * row) - .5 + Math.random();
    //    this.body.add(sr);

    //    var sl = new THREE.Mesh(spikeGeom, obstacleDefault.spike.c);
    //    sl.position.x = -3;
    //    sl.position.y = -2 + row * 2;
    //    sl.position.z = -2 + col * 2;
    //    sl.rotation.z = Math.PI / 2 - (Math.PI / 12 * row) - .5 + Math.random();;
    //    this.body.add(sl);
    //}

    this.head.add(this.eyeR);
    var earGeom = new THREE.CubeGeometry(mouseDefault.ear.w, mouseDefault.ear.h, mouseDefault.ear.d, 1);
    this.earL = new THREE.Mesh(earGeom, mouseDefault.ear.c);
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

    var mouthGeom = new THREE.CubeGeometry(mouseDefault.mouth.w, mouseDefault.mouth.h, mouseDefault.mouth.d, 1);
    this.mouth = new THREE.Mesh(mouthGeom, mouseDefault.mouth.c);
    this.mouth.position.z = 3.5;
    this.mouth.position.y = -1.5;
    this.head.add(this.mouth);

    var tailGeom = new THREE.CylinderGeometry(0, 1, 10, 4, 1);
    tailGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 10, 0));
    tailGeom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    tailGeom.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / 4));

    this.tail = new THREE.Mesh(tailGeom, monsterDefault.tail.c);
    this.tail.position.z = -2;
    this.tail.position.y = -1;
    this.tail.rotation.x = 0.9;
    this.body.add(this.tail);

    this.mesh.add(this.body);
    this.body.add(this.head);
    this.head.add(this.nose);


    this.mesh.traverse(function (object) {
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });
    this.mesh.rotation.y = Math.PI / 2;
}

Mouse.prototype.run = function () {

}

Mouse.prototype.jump = function () {

}

Mouse.prototype.nod = function () {
    var _this = this;
    var speed = .1 + Math.random() * .5;
    var angle = -Math.PI / 4 + Math.random() * Math.PI / 2;
    TweenMax.to(this.head.rotation, speed, {
        y: angle, onComplete: function () {
            _this.nod();
        }
    });
}

Mouse.prototype.hang = function () {

}

Mouse.prototype.sit = function () {

}

Mouse.prototype.pause = function () {

}

Mouse.prototype.resetOrgPosition = function () {
    this.mesh.position.y = 0
    this.mesh.rotation.y = Math.PI / 2
    this.mesh.position.x = -70
    this.mesh.scale.setY(2.4);
    this.mesh.scale.setX(2.4);
    this.mesh.scale.setZ(2.4);
}

/*Rabbit*/
var Hero = function () {
    this.status = "running";
    this.runningCycle = 0;
    this.mesh = new THREE.Group();
    this.body = new THREE.Group();
    this.mesh.add(this.body);
    var torsoGeom = new THREE.CubeGeometry(heroDefault.torso.w, heroDefault.torso.h, heroDefault.torso.d, 1);
    this.torso = new THREE.Mesh(torsoGeom, heroDefault.torso.c);
    this.torso.position.z = 0;
    this.torso.position.y = 7;
    this.torso.castShadow = true;
    this.body.add(this.torso);

    var pantsGeom = new THREE.CubeGeometry(heroDefault.pants.w, heroDefault.pants.h, heroDefault.pants.d, 1);
    this.pants = new THREE.Mesh(pantsGeom, heroDefault.pants.c);
    this.pants.position.z = -3;
    this.pants.position.y = 0;
    this.pants.castShadow = true;
    this.torso.add(this.pants);

    var tailGeom = new THREE.CubeGeometry(heroDefault.tail.w, heroDefault.tail.h, heroDefault.tail.d, 1);
    tailGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, -2));
    this.tail = new THREE.Mesh(tailGeom, heroDefault.tail.c);
    this.tail.position.z = -4;
    this.tail.position.y = 5;
    this.tail.castShadow = true;
    this.torso.add(this.tail);

    this.torso.rotation.x = -Math.PI / 8;

    var headGeom = new THREE.CubeGeometry(heroDefault.head.w, heroDefault.head.h, heroDefault.head.d, 1);

    headGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 7.5));
    this.head = new THREE.Mesh(headGeom, heroDefault.head.c);
    this.head.position.z = 2;
    this.head.position.y = 11;
    this.head.castShadow = true;
    this.body.add(this.head);

    var cheekGeom = new THREE.CubeGeometry(heroDefault.cheek.w, heroDefault.cheek.h, heroDefault.cheek.d, 1);
    this.cheekR = new THREE.Mesh(cheekGeom, heroDefault.cheek.c);
    this.cheekR.position.x = -5;
    this.cheekR.position.z = 7;
    this.cheekR.position.y = -2.5;
    this.cheekR.castShadow = true;
    this.head.add(this.cheekR);

    this.cheekL = this.cheekR.clone();
    this.cheekL.position.x = -this.cheekR.position.x;
    this.head.add(this.cheekL);


    var noseGeom = new THREE.CubeGeometry(heroDefault.nose.w, heroDefault.nose.h, heroDefault.nose.d, 1);
    this.nose = new THREE.Mesh(noseGeom, heroDefault.nose.c);
    this.nose.position.z = 13.5;
    this.nose.position.y = 2.6;
    this.nose.castShadow = true;
    this.head.add(this.nose);

    var mouthGeom = new THREE.CubeGeometry(heroDefault.mouth.w, heroDefault.mouth.h, heroDefault.mouth.d, 1);
    mouthGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 3));
    mouthGeom.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 12));
    this.mouth = new THREE.Mesh(mouthGeom, heroDefault.mouth.c);
    this.mouth.position.z = 8;
    this.mouth.position.y = -4;
    this.mouth.castShadow = true;
    this.head.add(this.mouth);


    var pawFGeom = new THREE.CubeGeometry(heroDefault.pawF.w, heroDefault.pawF.h, heroDefault.pawF.d, 1);
    this.pawFR = new THREE.Mesh(pawFGeom, heroDefault.pawF.c);
    this.pawFR.position.x = -2;
    this.pawFR.position.z = 6;
    this.pawFR.position.y = 1.5;
    this.pawFR.castShadow = true;
    this.body.add(this.pawFR);

    this.pawFL = this.pawFR.clone();
    this.pawFL.position.x = -this.pawFR.position.x;
    this.pawFL.castShadow = true;
    this.body.add(this.pawFL);

    var pawBGeom = new THREE.CubeGeometry(heroDefault.pawB.w, heroDefault.pawB.h, heroDefault.pawB.d, 1);
    this.pawBL = new THREE.Mesh(pawBGeom, heroDefault.pawB.c);
    this.pawBL.position.y = 1.5;
    this.pawBL.position.z = 0;
    this.pawBL.position.x = 5;
    this.pawBL.castShadow = true;
    this.body.add(this.pawBL);

    this.pawBR = this.pawBL.clone();
    this.pawBR.position.x = -this.pawBL.position.x;
    this.pawBR.castShadow = true;
    this.body.add(this.pawBR);

    var earGeom = new THREE.CubeGeometry(heroDefault.ear.w, heroDefault.ear.h, heroDefault.ear.d, 1);
    //var earGeom = new THREE.CubeGeometry(20, 88, 2, 1);
    earGeom.vertices[6].x += 2;
    earGeom.vertices[6].z += .5;

    earGeom.vertices[7].x += 2;
    earGeom.vertices[7].z -= .5;

    earGeom.vertices[2].x -= 2;
    earGeom.vertices[2].z -= .5;

    earGeom.vertices[3].x -= 2;
    earGeom.vertices[3].z += .5;
    earGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 9, 0));

    this.earL = new THREE.Mesh(earGeom, heroDefault.ear.c);
    this.earL.position.x = 2;
    this.earL.position.z = 2.5;
    this.earL.position.y = 5;
    this.earL.rotation.z = -Math.PI / 12;
    this.earL.castShadow = true;
    this.head.add(this.earL);

    this.earR = this.earL.clone();
    this.earR.position.x = -this.earL.position.x;
    this.earR.rotation.z = -this.earL.rotation.z;
    this.earR.castShadow = true;
    this.head.add(this.earR);

    var eyeGeom = new THREE.CubeGeometry(heroDefault.eye.w, heroDefault.eye.h, heroDefault.eye.d);

    this.eyeL = new THREE.Mesh(eyeGeom, heroDefault.eye.c);
    this.eyeL.position.x = 5;
    this.eyeL.position.z = 5.5;
    this.eyeL.position.y = 2.9;
    this.eyeL.castShadow = true;
    this.head.add(this.eyeL);

    var irisGeom = new THREE.CubeGeometry(heroDefault.iris.w, heroDefault.iris.h, heroDefault.iris.d);

    this.iris = new THREE.Mesh(irisGeom, heroDefault.iris.c);
    this.iris.position.x = 1.2;
    this.iris.position.y = 1;
    this.iris.position.z = 1;
    this.eyeL.add(this.iris);

    this.eyeR = this.eyeL.clone();
    this.eyeR.children[0].position.x = -this.iris.position.x;


    this.eyeR.position.x = -this.eyeL.position.x;
    this.head.add(this.eyeR);

    this.body.traverse(function (object) {
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });
}

Hero.prototype.run = function () {
    if (gameStatus == "play" && hero.status != "pause" && hero.status != "hidden") {
        this.status = "running";
        var s = Math.min(speed, maxSpeed);
        this.runningCycle += delta * s * .7;
        this.runningCycle = this.runningCycle % (Math.PI * 2);
        var t = this.runningCycle;
        var amp = 4;
        var disp = .2;
        // BODY
        this.body.position.y = 6 + Math.sin(t - Math.PI / 2) * amp;
        this.body.rotation.x = .2 + Math.sin(t - Math.PI / 2) * amp * .1;
        this.torso.rotation.x = Math.sin(t - Math.PI / 2) * amp * .1;
        this.torso.position.y = 7 + Math.sin(t - Math.PI / 2) * amp * .5;
        // MOUTH
        this.mouth.rotation.x = Math.PI / 16 + Math.cos(t) * amp * .05;
        // HEAD
        this.head.position.z = 2 + Math.sin(t - Math.PI / 2) * amp * .5;
        this.head.position.y = 8 + Math.cos(t - Math.PI / 2) * amp * .7;
        this.head.rotation.x = -.2 + Math.sin(t + Math.PI) * amp * .1;
        // EARS
        this.earL.rotation.x = Math.cos(-Math.PI / 2 + t) * (amp * .2);
        this.earR.rotation.x = Math.cos(-Math.PI / 2 + .2 + t) * (amp * .3);
        // EYES
        this.eyeR.scale.y = this.eyeL.scale.y = .7 + Math.abs(Math.cos(-Math.PI / 4 + t * .5)) * .6;
        // TAIL
        this.tail.rotation.x = Math.cos(Math.PI / 2 + t) * amp * .3;
        // FRONT RIGHT PAW
        this.pawFR.position.y = 1.5 + Math.sin(t) * amp;
        this.pawFR.rotation.x = Math.cos(t) * Math.PI / 4;
        this.pawFR.position.z = 6 - Math.cos(t) * amp * 2;
        // FRONT LEFT PAW
        this.pawFL.position.y = 1.5 + Math.sin(disp + t) * amp;
        this.pawFL.rotation.x = Math.cos(t) * Math.PI / 4;
        this.pawFL.position.z = 6 - Math.cos(disp + t) * amp * 2;
        // BACK RIGHT PAW
        this.pawBR.position.y = 1.5 + Math.sin(Math.PI + t) * amp;
        this.pawBR.rotation.x = Math.cos(t + Math.PI * 1.5) * Math.PI / 3;
        this.pawBR.position.z = -Math.cos(Math.PI + t) * amp;
        // BACK LEFT PAW
        this.pawBL.position.y = 1.5 + Math.sin(Math.PI + t) * amp;
        this.pawBL.rotation.x = Math.cos(t + Math.PI * 1.5) * Math.PI / 3;
        this.pawBL.position.z = -Math.cos(Math.PI + t) * amp;
    }
}

Hero.prototype.jump = function () {
    if (this.status == "jumping") return;
    this.status = "jumping";
    var _this = this;
    var totalSpeed = 10 / speed;
    var jumpHeight = 45;

    TweenMax.to(this.earL.rotation, totalSpeed, { x: "+=.3", ease: Back.easeOut });
    TweenMax.to(this.earR.rotation, totalSpeed, { x: "-=.3", ease: Back.easeOut });

    TweenMax.to(this.pawFL.rotation, totalSpeed, { x: "+=.7", ease: Back.easeOut });
    TweenMax.to(this.pawFR.rotation, totalSpeed, { x: "-=.7", ease: Back.easeOut });
    TweenMax.to(this.pawBL.rotation, totalSpeed, { x: "+=.7", ease: Back.easeOut });
    TweenMax.to(this.pawBR.rotation, totalSpeed, { x: "-=.7", ease: Back.easeOut });

    TweenMax.to(this.tail.rotation, totalSpeed, { x: "+=1", ease: Back.easeOut });

    TweenMax.to(this.mouth.rotation, totalSpeed, { x: .5, ease: Back.easeOut });

    TweenMax.to(this.mesh.position, totalSpeed / 2, { y: jumpHeight, ease: Power2.easeOut });
    TweenMax.to(this.mesh.position, totalSpeed / 2, {
        y: 0, ease: Power4.easeIn, delay: totalSpeed / 2, onComplete: function () {
            //t = 0;
            _this.status = "running";
        }
    });

}

Hero.prototype.nod = function () {
    var _this = this;
    var sp = .5 + Math.random();

    // HEAD
    var tHeadRotY = -Math.PI / 6 + Math.random() * Math.PI / 3;
    TweenMax.to(this.head.rotation, sp, { y: tHeadRotY, ease: Power4.easeInOut, onComplete: function () { _this.nod() } });

    // EARS
    var tEarLRotX = Math.PI / 4 + Math.random() * Math.PI / 6;
    var tEarRRotX = Math.PI / 4 + Math.random() * Math.PI / 6;

    TweenMax.to(this.earL.rotation, sp, { x: tEarLRotX, ease: Power4.easeInOut });
    TweenMax.to(this.earR.rotation, sp, { x: tEarRRotX, ease: Power4.easeInOut });


    // PAWS BACK LEFT

    var tPawBLRot = Math.random() * Math.PI / 2;
    var tPawBLY = -4 + Math.random() * 8;

    TweenMax.to(this.pawBL.rotation, sp / 2, { x: tPawBLRot, ease: Power1.easeInOut, yoyo: true, repeat: 2 });
    TweenMax.to(this.pawBL.position, sp / 2, { y: tPawBLY, ease: Power1.easeInOut, yoyo: true, repeat: 2 });


    // PAWS BACK RIGHT

    var tPawBRRot = Math.random() * Math.PI / 2;
    var tPawBRY = -4 + Math.random() * 8;
    TweenMax.to(this.pawBR.rotation, sp / 2, { x: tPawBRRot, ease: Power1.easeInOut, yoyo: true, repeat: 2 });
    TweenMax.to(this.pawBR.position, sp / 2, { y: tPawBRY, ease: Power1.easeInOut, yoyo: true, repeat: 2 });

    // PAWS FRONT LEFT

    var tPawFLRot = Math.random() * Math.PI / 2;
    var tPawFLY = -4 + Math.random() * 8;

    TweenMax.to(this.pawFL.rotation, sp / 2, { x: tPawFLRot, ease: Power1.easeInOut, yoyo: true, repeat: 2 });

    TweenMax.to(this.pawFL.position, sp / 2, { y: tPawFLY, ease: Power1.easeInOut, yoyo: true, repeat: 2 });

    // PAWS FRONT RIGHT

    var tPawFRRot = Math.random() * Math.PI / 2;
    var tPawFRY = -4 + Math.random() * 8;

    TweenMax.to(this.pawFR.rotation, sp / 2, { x: tPawFRRot, ease: Power1.easeInOut, yoyo: true, repeat: 2 });

    TweenMax.to(this.pawFR.position, sp / 2, { y: tPawFRY, ease: Power1.easeInOut, yoyo: true, repeat: 2 });

    // MOUTH
    var tMouthRot = Math.random() * Math.PI / 8;
    TweenMax.to(this.mouth.rotation, sp, { x: tMouthRot, ease: Power1.easeInOut });
    // IRIS
    var tIrisY = -1 + Math.random() * 2;
    var tIrisZ = -1 + Math.random() * 2;
    var iris1 = this.iris;
    var iris2 = this.eyeR.children[0];
    TweenMax.to([iris1.position, iris2.position], sp, { y: tIrisY, z: tIrisZ, ease: Power1.easeInOut });

    //EYES
    if (Math.random() > .2) TweenMax.to([this.eyeR.scale, this.eyeL.scale], sp / 8, { y: 0, ease: Power1.easeInOut, yoyo: true, repeat: 1 });

}

Hero.prototype.hang = function () {
    var _this = this;
    var sp = 1;
    var ease = Power4.easeOut;

    TweenMax.killTweensOf(this.eyeL.scale);
    TweenMax.killTweensOf(this.eyeR.scale);

    this.body.rotation.x = 0;
    this.torso.rotation.x = 0;
    this.body.position.y = 0;
    this.torso.position.y = 7;

    TweenMax.to(this.mesh.rotation, sp, { y: 0, ease: ease });
    TweenMax.to(this.mesh.position, sp, { y: -7, z: 6, ease: ease });
    TweenMax.to(this.head.rotation, sp, { x: Math.PI / 6, ease: ease, onComplete: function () { _this.nod(); } });

    TweenMax.to(this.earL.rotation, sp, { x: Math.PI / 3, ease: ease });
    TweenMax.to(this.earR.rotation, sp, { x: Math.PI / 3, ease: ease });

    TweenMax.to(this.pawFL.position, sp, { y: -1, z: 3, ease: ease });
    TweenMax.to(this.pawFR.position, sp, { y: -1, z: 3, ease: ease });
    TweenMax.to(this.pawBL.position, sp, { y: -2, z: -3, ease: ease });
    TweenMax.to(this.pawBR.position, sp, { y: -2, z: -3, ease: ease });

    TweenMax.to(this.eyeL.scale, sp, { y: 1, ease: ease });
    TweenMax.to(this.eyeR.scale, sp, { y: 1, ease: ease });
}

Hero.prototype.sit = function () {

}

Hero.prototype.pause = function () {
    var _params_HeroStatus = "pause";
    this.nod();
};

Hero.prototype.resetOrgPosition = function () {

}

/*Wolf*/
var Monster = function () {
    this.status = "running";
    this.runningCycle = 0;

    this.mesh = new THREE.Group();
    this.body = new THREE.Group();

    var torsoGeom = new THREE.CubeGeometry(monsterDefault.torso.w, monsterDefault.torso.h, monsterDefault.torso.d, 1);
    this.torso = new THREE.Mesh(torsoGeom, monsterDefault.torso.c);

    var headGeom = new THREE.CubeGeometry(monsterDefault.head.w, monsterDefault.head.h, monsterDefault.head.d, 1);
    headGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 20));
    this.head = new THREE.Mesh(headGeom, monsterDefault.head.c);
    this.head.position.z = 12;
    this.head.position.y = 2;

    var mouthGeom = new THREE.CubeGeometry(monsterDefault.mouth.w, monsterDefault.mouth.h, monsterDefault.mouth.d, 1);
    mouthGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, -2, 10));
    this.mouth = new THREE.Mesh(mouthGeom, monsterDefault.mouth.c);
    this.mouth.position.y = -8;
    this.mouth.rotation.x = .4;
    this.mouth.position.z = 4;

    this.heroHolder = new THREE.Group();
    this.heroHolder.position.z = 20;
    this.mouth.add(this.heroHolder);

    var toothGeom = new THREE.CubeGeometry(monsterDefault.tooth.w, monsterDefault.tooth.h, monsterDefault.tooth.d);

    toothGeom.vertices[1].x -= 1;
    toothGeom.vertices[4].x += 1;
    toothGeom.vertices[5].x += 1;
    toothGeom.vertices[0].x -= 1;

    for (var i = 0; i < 3; i++) {
        var toothf = new THREE.Mesh(toothGeom, monsterDefault.tooth.c);
        toothf.position.x = -2.8 + i * 2.5;
        toothf.position.y = 1;
        toothf.position.z = 19;

        var toothl = new THREE.Mesh(toothGeom, monsterDefault.tooth.c);
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

    var tongueGeometry = new THREE.CubeGeometry(monsterDefault.tongue.w, monsterDefault.tongue.h, monsterDefault.tongue.d);
    tongueGeometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 7));

    this.tongue = new THREE.Mesh(tongueGeometry, monsterDefault.tongue.c);
    this.tongue.position.z = 2;
    this.tongue.rotation.x = -.2;
    this.mouth.add(this.tongue);

    var noseGeom = new THREE.CubeGeometry(monsterDefault.nose.w, monsterDefault.nose.h, monsterDefault.nose.d);
    this.nose = new THREE.Mesh(noseGeom, monsterDefault.nose.c);
    this.nose.position.z = 39.5;
    this.nose.position.y = 9;
    this.head.add(this.nose);

    this.head.add(this.mouth);

    var eyeGeom = new THREE.CubeGeometry(monsterDefault.eye.w, monsterDefault.eye.h, monsterDefault.eye.d);

    this.eyeL = new THREE.Mesh(eyeGeom, monsterDefault.eye.c);
    this.eyeL.position.x = 10;
    this.eyeL.position.z = 5;
    this.eyeL.position.y = 5;
    this.eyeL.castShadow = true;
    this.head.add(this.eyeL);

    var irisGeom = new THREE.CubeGeometry(monsterDefault.iris.w, monsterDefault.iris.h, monsterDefault.iris.d);

    this.iris = new THREE.Mesh(irisGeom, monsterDefault.iris.c);
    this.iris.position.x = 1.2;
    this.iris.position.y = -1;
    this.iris.position.z = 1;
    this.eyeL.add(this.iris);

    this.eyeR = this.eyeL.clone();
    this.eyeR.children[0].position.x = -this.iris.position.x;
    this.eyeR.position.x = -this.eyeL.position.x;
    this.head.add(this.eyeR);


    var earGeom = new THREE.CubeGeometry(monsterDefault.ear.w, monsterDefault.ear.h, monsterDefault.ear.d, 1);
    earGeom.vertices[1].x -= 4;
    earGeom.vertices[4].x += 4;
    earGeom.vertices[5].x += 4;
    earGeom.vertices[5].z -= 2;
    earGeom.vertices[0].x -= 4;
    earGeom.vertices[0].z -= 2;


    earGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 3, 0));

    this.earL = new THREE.Mesh(earGeom, monsterDefault.ear.c);
    this.earL.position.x = 6;
    this.earL.position.z = 1;
    this.earL.position.y = 10;
    this.earL.castShadow = true;
    this.head.add(this.earL);

    this.earR = this.earL.clone();
    this.earR.position.x = -this.earL.position.x;
    this.earR.rotation.z = -this.earL.rotation.z;
    this.head.add(this.earR);

    var eyeGeom = new THREE.CubeGeometry(monsterDefault.eye.w, monsterDefault.eye.h + 1, monsterDefault.eye.d + 1);

    var tailGeom = new THREE.CylinderGeometry(monsterDefault.tail.rt, monsterDefault.tail.rb, monsterDefault.tail.h, monsterDefault.tail.rs, 1);
    tailGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 10, 0));
    tailGeom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    tailGeom.applyMatrix(new THREE.Matrix4().makeRotationZ(Math.PI / 4));

    this.tail = new THREE.Mesh(tailGeom, monsterDefault.tail.c);
    this.tail.position.z = -10;
    this.tail.position.y = 4;
    this.torso.add(this.tail);


    var pawGeom = new THREE.CylinderGeometry(monsterDefault.paw.rt, monsterDefault.paw.rb, monsterDefault.paw.h);
    pawGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, -5, 0));
    this.pawFL = new THREE.Mesh(pawGeom, monsterDefault.paw.c);
    this.pawFL.position.y = -7.5;
    this.pawFL.position.z = 8.5;
    this.pawFL.position.x = 5.5;
    this.torso.add(this.pawFL);

    this.pawFR = this.pawFL.clone();
    this.pawFR.position.x = -this.pawFL.position.x;
    this.torso.add(this.pawFR);

    this.pawBR = this.pawFR.clone();
    this.pawBR.position.z = -this.pawFL.position.z;
    this.torso.add(this.pawBR);

    this.pawBL = this.pawBR.clone();
    this.pawBL.position.x = this.pawFL.position.x;
    this.torso.add(this.pawBL);

    this.mesh.add(this.body);
    this.torso.add(this.head);
    this.body.add(this.torso);

    this.torso.castShadow = true;
    this.head.castShadow = true;
    this.pawFL.castShadow = true;
    this.pawFR.castShadow = true;
    this.pawBL.castShadow = true;
    this.pawBR.castShadow = true;

    this.body.rotation.y = Math.PI / 2;
}

Monster.prototype.run = function () {
    var s = Math.min(speed, maxSpeed);
    if (this.status == 'running') {
        this.runningCycle += delta * s * .7;
    }

    this.runningCycle = this.runningCycle % (Math.PI * 2);
    var t = this.runningCycle;

    this.pawFR.rotation.x = Math.sin(t) * Math.PI / 4;
    this.pawFR.position.y = -5.5 - Math.sin(t);
    this.pawFR.position.z = 7.5 + Math.cos(t);

    this.pawFL.rotation.x = Math.sin(t + .4) * Math.PI / 4;
    this.pawFL.position.y = -5.5 - Math.sin(t + .4);
    this.pawFL.position.z = 7.5 + Math.cos(t + .4);

    this.pawBL.rotation.x = Math.sin(t + 2) * Math.PI / 4;
    this.pawBL.position.y = -5.5 - Math.sin(t + 3.8);
    this.pawBL.position.z = -7.5 + Math.cos(t + 3.8);

    this.pawBR.rotation.x = Math.sin(t + 2.4) * Math.PI / 4;
    this.pawBR.position.y = -5.5 - Math.sin(t + 3.4);
    this.pawBR.position.z = -7.5 + Math.cos(t + 3.4);

    this.torso.rotation.x = Math.sin(t) * Math.PI / 8;
    this.torso.position.y = 3 - Math.sin(t + Math.PI / 2) * 3;

    //this.head.position.y = 5-Math.sin(t+Math.PI/2)*2;
    this.head.rotation.x = -.1 + Math.sin(-t - 1) * .4;
    this.mouth.rotation.x = .2 + Math.sin(t + Math.PI + .3) * .4;

    this.tail.rotation.x = .2 + Math.sin(t - Math.PI / 2);

    this.eyeR.scale.y = .5 + Math.sin(t + Math.PI) * .5;
}

Monster.prototype.hump = function () {

}

Monster.prototype.nod = function () {
    var _this = this;
    var sp = 1 + Math.random() * 2;

    // HEAD
    var tHeadRotY = -Math.PI / 3 + Math.random() * .5;
    var tHeadRotX = Math.PI / 3 - .2 + Math.random() * .4;
    TweenMax.to(this.head.rotation, sp, { x: tHeadRotX, y: tHeadRotY, ease: Power4.easeInOut, onComplete: function () { _this.nod() } });

    // TAIL

    var tTailRotY = -Math.PI / 4;
    TweenMax.to(this.tail.rotation, sp / 8, { y: tTailRotY, ease: Power1.easeInOut, yoyo: true, repeat: 8 });

    // EYES

    TweenMax.to([this.eyeR.scale, this.eyeL.scale], sp / 20, { y: 0, ease: Power1.easeInOut, yoyo: true, repeat: 1 });
}

Monster.prototype.hang = function () {

}

Monster.prototype.sit = function () {
    var sp = 1.2;
    var ease = Power4.easeOut;
    var _this = this;
    TweenMax.to(this.torso.rotation, sp, { x: -1.3, ease: ease });
    TweenMax.to(this.torso.position, sp, {
        y: -5, ease: ease, onComplete: function () {
            _this.nod();
            gameStatus = "readyToReplay";
        }
    });

    TweenMax.to(this.head.rotation, sp, { x: Math.PI / 3, y: -Math.PI / 3, ease: ease });
    TweenMax.to(this.tail.rotation, sp, { x: 2, y: Math.PI / 4, ease: ease });
    TweenMax.to(this.pawBL.rotation, sp, { x: -.1, ease: ease });
    TweenMax.to(this.pawBR.rotation, sp, { x: -.1, ease: ease });
    TweenMax.to(this.pawFL.rotation, sp, { x: 1, ease: ease });
    TweenMax.to(this.pawFR.rotation, sp, { x: 1, ease: ease });
    TweenMax.to(this.mouth.rotation, sp, { x: .3, ease: ease });
    TweenMax.to(this.eyeL.scale, sp, { y: 1, ease: ease });
    TweenMax.to(this.eyeR.scale, sp, { y: 1, ease: ease });

    //TweenMax.to(this.body.rotation, sp, {y:Math.PI/4});

}

Monster.prototype.pause = function () {
    var _params_MonsterStatus = "pause";
    this.resetOrgPosition();
    this.sit();
};

Monster.prototype.resetOrgPosition = function () {
    var angle = Math.PI * monsterPos;
    monster.mesh.position.y = -floorRadius + Math.sin(angle) * (floorRadius + 12);
    monster.mesh.position.x = Math.cos(angle) * (floorRadius + 15);
    monster.mesh.rotation.z = -Math.PI / 2 + angle;
};

/*Carrot*/
var Carrot = function () {
    this.status = 'show';
    this.angle = 0;
    this.mesh = new THREE.Group();

    var bodyGeom = new THREE.CylinderGeometry(propDefault.body.rt, propDefault.body.rb, propDefault.body.h, propDefault.body.rs, propDefault.body.hs);
    bodyGeom.vertices[8].y += 2;
    bodyGeom.vertices[9].y -= 3;

    this.body = new THREE.Mesh(bodyGeom, propDefault.body.c);

    var leafGeom = new THREE.CubeGeometry(propDefault.leaf.w, propDefault.leaf.h, propDefault.leaf.d, 1);
    leafGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 5, 0));
    leafGeom.vertices[2].x -= 1;
    leafGeom.vertices[3].x -= 1;
    leafGeom.vertices[6].x += 1;
    leafGeom.vertices[7].x += 1;

    this.leaf1 = new THREE.Mesh(leafGeom, propDefault.leaf.c);
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
}

Carrot.prototype.run = function () {

}

Carrot.prototype.jump = function () {

}

Carrot.prototype.nod = function () {

}

Carrot.prototype.hang = function () {

}

Carrot.prototype.sit = function () {

}

Carrot.prototype.pause = function () {

}

Carrot.prototype.resetOrgPosition = function () {

}

/*Hedgehog*/
var Hedgehog = function () {
    this.angle = 0;
    this.status = "ready";
    this.mesh = new THREE.Group();
    var bodyGeom = new THREE.CubeGeometry(obstacleDefault.body.w, obstacleDefault.body.h, obstacleDefault.body.d, 1);
    this.body = new THREE.Mesh(bodyGeom, obstacleDefault.body.c);

    var headGeom = new THREE.CubeGeometry(obstacleDefault.head.w, obstacleDefault.head.h, obstacleDefault.head.d, 1);
    this.head = new THREE.Mesh(headGeom, obstacleDefault.head.c);
    this.head.position.z = 6;
    this.head.position.y = -.5;

    var noseGeom = new THREE.CubeGeometry(obstacleDefault.nose.w, obstacleDefault.nose.h, obstacleDefault.nose.d, 1);
    this.nose = new THREE.Mesh(noseGeom, obstacleDefault.nose.c);
    this.nose.position.z = 4;
    this.nose.position.y = 2;

    var eyeGeom = new THREE.CubeGeometry(obstacleDefault.eye.w, obstacleDefault.eye.h, obstacleDefault.eye.d);

    this.eyeL = new THREE.Mesh(eyeGeom, obstacleDefault.eye.c);
    this.eyeL.position.x = 2.2;
    this.eyeL.position.z = -.5;
    this.eyeL.position.y = .8;
    this.eyeL.castShadow = true;
    this.head.add(this.eyeL);

    var irisGeom = new THREE.CubeGeometry(obstacleDefault.iris.w, obstacleDefault.iris.h, obstacleDefault.iris.d);

    this.iris = new THREE.Mesh(irisGeom, obstacleDefault.iris.c);
    this.iris.position.x = .5;
    this.iris.position.y = .8;
    this.iris.position.z = .8;
    this.eyeL.add(this.iris);

    this.eyeR = this.eyeL.clone();
    this.eyeR.children[0].position.x = -this.iris.position.x;
    this.eyeR.position.x = -this.eyeL.position.x;

    var spikeGeom = new THREE.CubeGeometry(obstacleDefault.spike.w, obstacleDefault.spike.h, obstacleDefault.spike.d, 1);
    spikeGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 1, 0));

    for (var i = 0; i < 9; i++) {
        var row = (i % 3);
        var col = Math.floor(i / 3);
        var sb = new THREE.Mesh(spikeGeom, obstacleDefault.spike.c);
        sb.rotation.x = -Math.PI / 2 + (Math.PI / 12 * row) - .5 + Math.random();
        sb.position.z = -3;
        sb.position.y = -2 + row * 2;
        sb.position.x = -2 + col * 2;
        this.body.add(sb);
        var st = new THREE.Mesh(spikeGeom, obstacleDefault.spike.c);
        st.position.y = 3;
        st.position.x = -2 + row * 2;
        st.position.z = -2 + col * 2;
        st.rotation.z = Math.PI / 6 - (Math.PI / 6 * row) - .5 + Math.random();
        this.body.add(st);

        var sr = new THREE.Mesh(spikeGeom, obstacleDefault.spike.c);
        sr.position.x = 3;
        sr.position.y = -2 + row * 2;
        sr.position.z = -2 + col * 2;
        sr.rotation.z = -Math.PI / 2 + (Math.PI / 12 * row) - .5 + Math.random();
        this.body.add(sr);

        var sl = new THREE.Mesh(spikeGeom, obstacleDefault.spike.c);
        sl.position.x = -3;
        sl.position.y = -2 + row * 2;
        sl.position.z = -2 + col * 2;
        sl.rotation.z = Math.PI / 2 - (Math.PI / 12 * row) - .5 + Math.random();;
        this.body.add(sl);
    }

    this.head.add(this.eyeR);
    var earGeom = new THREE.CubeGeometry(obstacleDefault.ear.w, obstacleDefault.ear.h, obstacleDefault.ear.d, 1);
    this.earL = new THREE.Mesh(earGeom, obstacleDefault.ear.c);
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

    var mouthGeom = new THREE.CubeGeometry(obstacleDefault.mouth.w, obstacleDefault.mouth.h, obstacleDefault.mouth.d, 1);
    this.mouth = new THREE.Mesh(mouthGeom, obstacleDefault.mouth.c);
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
}

Hedgehog.prototype.run = function () {

}

Hedgehog.prototype.jump = function () {

}

Hedgehog.prototype.nod = function () {
    var _this = this;
    var speed = .1 + Math.random() * .5;
    var angle = -Math.PI / 4 + Math.random() * Math.PI / 2;
    TweenMax.to(this.head.rotation, speed, {
        y: angle, onComplete: function () {
            _this.nod();
        }
    });
}

Hedgehog.prototype.hang = function () {

}

Hedgehog.prototype.sit = function () {

}

Hedgehog.prototype.pause = function () {

}

Hedgehog.prototype.resetOrgPosition = function () {

}

var Tree = function () {
    this.mesh = new THREE.Object3D();
    this.trunc = new Trunc();
    this.mesh.add(this.trunc.mesh);
}

var Trunc = function () {
    var truncHeight = 50 + Math.random() * 150;
    var topRadius = 1 + Math.random() * 5;
    var bottomRadius = 5 + Math.random() * 5;
    var mats = [blackMat, brownMat, pinkMat, whiteMat, greenMat, lightBrownMat, pinkMat];
    var matTrunc = blackMat;//mats[Math.floor(Math.random()*mats.length)];
    var nhSegments = 3;//Math.ceil(2 + Math.random()*6);
    var nvSegments = 3;//Math.ceil(2 + Math.random()*6);
    var geom = new THREE.CylinderGeometry(topRadius, bottomRadius, truncHeight, nhSegments, nvSegments);
    geom.applyMatrix(new THREE.Matrix4().makeTranslation(0, truncHeight / 2, 0));

    this.mesh = new THREE.Mesh(geom, matTrunc);

    for (var i = 0; i < geom.vertices.length; i++) {
        var noise = Math.random();
        var v = geom.vertices[i];
        v.x += -noise + Math.random() * noise * 2;
        v.y += -noise + Math.random() * noise * 2;
        v.z += -noise + Math.random() * noise * 2;

        geom.computeVertexNormals();

        // FRUITS

        if (Math.random() > .7) {
            var size = Math.random() * 3;
            var fruitGeometry = new THREE.CubeGeometry(size, size, size, 1);
            var matFruit = mats[Math.floor(Math.random() * mats.length)];
            var fruit = new THREE.Mesh(fruitGeometry, matFruit);
            fruit.position.x = v.x;
            fruit.position.y = v.y + 3;
            fruit.position.z = v.z;
            fruit.rotation.x = Math.random() * Math.PI;
            fruit.rotation.y = Math.random() * Math.PI;

            this.mesh.add(fruit);
        }

        // BRANCHES

        if (Math.random() > .5 && v.y > 10 && v.y < truncHeight - 10) {
            var h = 3 + Math.random() * 5;
            var thickness = .2 + Math.random();

            var branchGeometry = new THREE.CylinderGeometry(thickness / 2, thickness, h, 3, 1);
            branchGeometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, h / 2, 0));
            var branch = new THREE.Mesh(branchGeometry, matTrunc);
            branch.position.x = v.x;
            branch.position.y = v.y;
            branch.position.z = v.z;

            var vec = new THREE.Vector3(v.x, 2, v.z);
            var axis = new THREE.Vector3(0, 1, 0);
            branch.quaternion.setFromUnitVectors(axis, vec.clone().normalize());


            this.mesh.add(branch);
        }

    }


    this.mesh.castShadow = true;
}
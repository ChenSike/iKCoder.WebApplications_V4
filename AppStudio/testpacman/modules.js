'use strict';

function Floor() {
    Module.call(this);
    this.type = 'floor';
    this.init();
}

Floor.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Floor
});

Floor.prototype.init = function () {
    var width = 500;
    var depth = 500;
    var height = 10;
    this.fenceTL = this.createFence(width, height, depth, 200, 200, 'tl');
    this.mesh.add(this.fenceTL);


    //this.plane = new THREE.Mesh(new THREE.BoxGeometry(200, 1, 200), new THREE.MeshPhongMaterial({ color: '#ffffff', shading: THREE.GouraudShading }));
    //this.plane.geometry.receiveShadow = true;
    //this.mesh.add(this.plane);

    //var wallB = new Wall(200, 20, 5);
    //wallB.mesh.position.z = 97.5;
    //wallB.mesh.position.x = 0;
    //wallB.mesh.position.y = 10;
    //this.mesh.add(wallB.mesh);
    //var wallT = new Wall(200, 20, 5);
    //wallT.mesh.position.z = -97.5;
    //wallT.mesh.position.x = 0;
    //wallT.mesh.position.y = 10;
    //this.mesh.add(wallT.mesh);
    //var wallL = new Wall(5, 20, 190);
    //wallL.mesh.position.z = 0;
    //wallL.mesh.position.x = -97.5;
    //wallL.mesh.position.y = 10;
    //this.mesh.add(wallL.mesh);
    //var wallR = new Wall(5, 20, 190);
    //wallR.mesh.position.z = 0;
    //wallR.mesh.position.x = 97.5;
    //wallR.mesh.position.y = 10;
    //this.mesh.add(wallR.mesh);
    //var ball = new PACMan();
    //ball.mesh.position.y = 20;
    //this.mesh.add(ball.mesh);
    // this.mesh.position.y = 100;
};

Floor.prototype.createFence = function (w, h, d, c, sw, sd, type) {
    var options = {
        amount: h,
        bevelThickness: -2,
        bevelSegments: 10,
        bevelSize: 5,
        steps: 1
    };

    var fenceShape = new THREE.Shape();
    fenceShape.moveTo(-sw / 2, 0);
    fenceShape.lineTo(-w, 0);
    fenceShape.lineTo(-w, d);
    fenceShape.lineTo(0, d);
    fenceShape.lineTo(0, sd / 2);
    fenceShape.lineTo(-sw / 2, sd / 2);
    fenceShape.lineTo(-sw / 2, 0);
    var fence = new THREE.Mesh(new THREE.ExtrudeGeometry(fenceShape, options), new THREE.MeshPhongMaterial({ color: c, shading: THREE.GouraudShading }));
    fence.rotation.x = -Math.PI / 2;
    return fence;
}

function Wall(w, h, d) {
    Module.call(this);
    this.type = 'wall';
    this.init(w, h, d);
}

Wall.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Wall
});

Wall.prototype.init = function (w, h, d) {
    this.mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshPhongMaterial({ color: '#00ffdd', shading: THREE.GouraudShading }));
}


function PACMan() {
    Module.call(this);
    this.type = 'pacman';
    this.init();
}

PACMan.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: PACMan
});

PACMan.prototype.init = function () {
    /*
    //SphereGeometry 三维球体
    //radius：半径，默认50. 
    //widthSegments：指定竖直方向上的分段数。默认是8，最小是3. 
    //heightSegments：指定水平方向上的分段数。默认是6，最小是2. 
    //phiStart：指定从x轴什么地方开始绘制。取值范围是：0-2*PI。默认是0。 
    //phiLength：指定从phiStart开始画多少。2*PI是整个球。 
    //thetaStart：指定从y轴什么地方开始绘制。取值范围：0-PI。默认为0. 
    //thetaLength：指定从thetaStart开始画多少。PI是整个球。0.5*PI只会画上半球。    
    */
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(10, 50, 50), new THREE.MeshPhongMaterial({ color: '#FFD700', shading: THREE.FlatShading }));
    this.mesh.geometry.verticesNeedUpdate = true;
    this.mesh.geometry.normalsNeedUpdate = true;
    this.mesh.geometry.castShadow = true;
}
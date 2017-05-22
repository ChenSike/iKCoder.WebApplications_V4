'use strict';

function Floor() {
    Module.call(this);
    this.type = 'floor';
}

Floor.prototype = Object.assign(Object.create(Module.prototype), {
    constructor: Floor,
});







floorShadow = new THREE.Mesh(new THREE.SphereGeometry(floorRadius, 50, 50), new THREE.MeshPhongMaterial({
    color: 0x7abf8e,
    specular: 0x000000,
    shininess: 1,
    transparent: true,
    opacity: .5
}));
//floorShadow.rotation.x = -Math.PI / 2;
floorShadow.receiveShadow = true;

floorGrass = new THREE.Mesh(new THREE.SphereGeometry(floorRadius - .5, 50, 50), new THREE.MeshBasicMaterial({
    color: 0x7abf8e
}));
//floor.rotation.x = -Math.PI / 2;
floorGrass.receiveShadow = false;

floor = new THREE.Group();
floor.position.y = -floorRadius;

floor.add(floorShadow);
floor.add(floorGrass);
scene.add(floor);
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight , 0.1, 1000 ); //0.1: closest distance, 1000: farthest distance

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.background = new THREE.TextureLoader().load("/kks.png");

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xFFFF8F } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(5, 0, 0);
scene.add( cube );

const conegeometry = new THREE.ConeGeometry( 1, 2, 8 ); 
const conematerial = new THREE.MeshBasicMaterial( {color: 0x7DF9FF} );
const cone = new THREE.Mesh(conegeometry, conematerial );
scene.add( cone );


const dodegeometry = new THREE.DodecahedronGeometry( 1, 0 ); 
const dodematerial = new THREE.MeshBasicMaterial( { color: 0xE5E4E2 } ); 
const dode = new THREE.Mesh( dodegeometry, dodematerial );
dode.position.set(-5, 0, 0)
scene.add( dode );

camera.position.z = 7;

function animate() {
	requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    cone.rotation.x += 0.02;
	cone.rotation.y += 0.01;

	dode.rotation.x += 0.01;
	dode.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();
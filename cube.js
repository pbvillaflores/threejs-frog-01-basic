/*
 * cube.js 
 * A simple Three.js program which draws a cube
 */
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 
camera.position.z = 2;
//var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x404040, 1);
document.body.appendChild(renderer.domElement); 
var geometry = new THREE.BoxGeometry(1, 1, 1); 
var material = new THREE.MeshBasicMaterial({color: 0xffff00}); 
var cube = new THREE.Mesh(geometry, material); 
scene.add(cube); 
renderer.render(scene, camera); 
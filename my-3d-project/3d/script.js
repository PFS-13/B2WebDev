// Inisialisasi scene, kamera, dan renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Tambahkan model 3D
const loader = new THREE.GLTFLoader();
loader.load('models/iphone_model.glb', (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.scale.set(1, 1, 1);
}, undefined, (error) => {
    console.error(error);
});

// Tambahkan kontrol
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// Posisi kamera
camera.position.z = 5;

// Fungsi animasi
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Update kontrol setiap frame
    renderer.render(scene, camera);
}
animate();

// Respon ukuran jendela
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

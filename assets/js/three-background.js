let scene, camera, renderer, particleSystem;
let mouseX = 0, mouseY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

function initThree() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 500;

    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    createParticles();
    createWaves();
    animate();

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onDocumentMouseMove);
}

function createParticles() {
    const particleCount = 800;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const colorOptions = [new THREE.Color(0x00d4ff), new THREE.Color(0x0066ff), new THREE.Color(0x6366f1)];

    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = Math.random() * 2000 - 1000;
        positions[i + 1] = Math.random() * 2000 - 1000;
        positions[i + 2] = Math.random() * 2000 - 1000;

        const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        colors.set([color.r, color.g, color.b], i);
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 3,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);
}

function createWaves() {
    const geometry = new THREE.PlaneGeometry(2000, 2000, 32, 32);
    const material = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.1
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -200;
    scene.add(plane);

    const vertices = plane.geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
        vertices[i + 2] = Math.sin(vertices[i] / 50) * 20 + Math.cos(vertices[i + 1] / 50) * 20;
    }

    plane.userData.update = function (time) {
        const geom = plane.geometry;
        if (!geom || !geom.attributes || !geom.attributes.position) return;

        const positions = geom.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i];
            const y = positions[i + 1];
            positions[i + 2] = Math.sin(x / 50 + time) * 15 + Math.cos(y / 50 + time) * 15;
        }
        geom.attributes.position.needsUpdate = true;
    };

    scene.userData.plane = plane;
}

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.0005;

    if (particleSystem) {
        particleSystem.rotation.y += 0.0005;
        const positions = particleSystem.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(time + positions[i]) * 0.1;
            if (positions[i + 1] > 1000) positions[i + 1] = -1000;
            if (positions[i + 1] < -1000) positions[i + 1] = 1000;
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;
    }

    if (scene.userData.plane) {
        scene.userData.plane.userData.update(time);
    }

    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / 10;
    mouseY = (event.clientY - windowHalfY) / 10;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThree);
} else {
    initThree();
}
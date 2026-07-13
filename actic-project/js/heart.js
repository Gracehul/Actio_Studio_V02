import * as THREE from "three";

/* ==========================================================================
   PROJECT RIBBON CORE
   Three.js interaction for #mini-interactive-core.
========================================================================== */

const container = document.querySelector("#mini-interactive-core");

if (container) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.set(10, 0, 25);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const colors = [0x8e44ad, 0x3498db, 0xf1c40f, 0xbdc3c7, 0x27ae60];
  const ribbons = [];

  colors.forEach((colorValue) => {
    const points = [];

    for (let i = 0; i < 12; i++) {
      points.push(
        new THREE.Vector3(
          i * 4.5 - 5,
          (Math.random() - 0.5) * 12,
          -15 + i * 3.5
        )
      );
    }

    const curve = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(curve, 100, 0.12, 8, false);

    const material = new THREE.MeshBasicMaterial({
      color: colorValue,
      transparent: true,
      opacity: 0.8,
    });

    const ribbon = new THREE.Mesh(geometry, material);
    scene.add(ribbon);
    ribbons.push(ribbon);
  });

  const pointer = {
    x: 0,
    y: 0,
  };

  function updatePointer(event) {
    const rect = container.getBoundingClientRect();

    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function resizeRenderer() {
    const width = container.clientWidth;
    const height = container.clientHeight;

    if (width === 0 || height === 0) return;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height, false);
  }

  function animate() {
    requestAnimationFrame(animate);

    const time = performance.now() * 0.001;

    ribbons.forEach((ribbon, index) => {
      ribbon.rotation.z = Math.sin(time * 0.1 + index) * 0.1;
      ribbon.position.y = Math.sin(time * 0.3 + index) * 0.5;
    });

    const targetX = pointer.x * 15 + 12;
    const targetY = pointer.y * 10;

    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.position.z = 25;
    camera.lookAt(12, 0, 0);

    renderer.render(scene, camera);
  }

  resizeRenderer();

  container.addEventListener("mousemove", updatePointer);
  window.addEventListener("resize", resizeRenderer);

  animate();
}
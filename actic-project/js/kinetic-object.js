import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

/* ==========================================================================
   HERO KINETIC CANVAS
   Three.js background system for index page hero.
========================================================================== */

const canvas = document.querySelector(".hero-kinetic-canvas");

if (canvas) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 1, 7);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const instanceCount = 2500;
  const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);

  const material = new THREE.MeshBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
  });

  const mesh = new THREE.InstancedMesh(geometry, material, instanceCount);
  scene.add(mesh);

  const colorBlue = new THREE.Color(0x0044ff);
  const colorOrange = new THREE.Color(0xff6600);

  const basePositions = [];
  const baseRotations = [];
  const baseScales = [];

  const matrix = new THREE.Matrix4();
  const color = new THREE.Color();

  for (let i = 0; i < instanceCount; i++) {
    let x;
    let y;
    let z;

    const scale = 0.3 + Math.random() * 2.2;

    if (i < 800) {
      x = (Math.random() - 0.5) * 1.8;
      y = (Math.random() - 0.5) * 2.8 - 0.5;
      z = (Math.random() - 0.5) * 0.5;

      color.copy(colorBlue).lerp(colorOrange, 0.2);
    } else if (i < 1700) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.2 + Math.random() * 1.8;

      x = radius * Math.sin(phi) * Math.cos(theta) + 0.5;
      y = radius * Math.sin(phi) * Math.sin(theta) + 1.0;
      z = radius * Math.cos(phi) - 0.5;

      const progress = Math.min(radius / 3.0, 1);
      color.copy(colorOrange).lerp(colorBlue, progress);
    } else {
      x = (Math.random() - 0.5) * 6.0;
      y = (Math.random() - 0.5) * 0.5 - 2.0;
      z = (Math.random() - 0.5) * 2.0;

      color.copy(colorBlue).lerp(colorOrange, Math.random());
    }

    const position = new THREE.Vector3(x, y, z);
    const rotation = new THREE.Euler(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      0
    );
    const quaternion = new THREE.Quaternion().setFromEuler(rotation);
    const scaleVector = new THREE.Vector3(scale, scale, scale);

    basePositions.push(position);
    baseRotations.push(quaternion);
    baseScales.push(scaleVector);

    matrix.compose(position, quaternion, scaleVector);
    mesh.setMatrixAt(i, matrix);
    mesh.setColorAt(i, color);
  }

  const clock = new THREE.Clock();

  function resizeRenderer() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (width === 0 || height === 0) return;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height, false);
  }

  function animate() {
    const time = clock.getElapsedTime();

    for (let i = 0; i < instanceCount; i++) {
      const base = basePositions[i];

      const offsetX = Math.sin(time * 0.3 + base.y) * 0.04;
      const offsetY = Math.cos(time * 0.2 + base.x) * 0.04;

      const animatedPosition = new THREE.Vector3(
        base.x + offsetX,
        base.y + offsetY,
        base.z
      );

      matrix.compose(animatedPosition, baseRotations[i], baseScales[i]);
      mesh.setMatrixAt(i, matrix);
    }

    mesh.rotation.y = time * 0.05;
    mesh.instanceMatrix.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  resizeRenderer();
  window.addEventListener("resize", resizeRenderer);
  animate();
}
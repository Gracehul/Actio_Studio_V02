import * as THREE from "https://unpkg.com/three/build/three.module.js";

const canvas = document.querySelector(".hero-kinetic-canvas");

if (canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 1, 7);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  const instances = 2500;
  const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
  
  // Material mit AdditiveBlending für besseres Einblenden in den Hintergrund
  const material = new THREE.MeshBasicMaterial({ 
    vertexColors: true, 
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending 
  });
  
  const mesh = new THREE.InstancedMesh(geometry, material, instances);
  scene.add(mesh);

  // Lebendige Farbpalette
  const colorBlue = new THREE.Color(0x0044FF); // Kräftiges Blau
  const colorOrange = new THREE.Color(0xFF6600); // Leuchtendes Orange

  const tempMatrix = new THREE.Matrix4();
  const tempColor = new THREE.Color();

  for (let i = 0; i < instances; i++) {
    let x, y, z;
    // Varianz in der Größe: von klein (0.3) bis groß (2.5)
    let scale = 0.3 + Math.random() * 2.2; 

    // --- Bereiche und Farbverlauf ---
    if (i < 800) { // Bereich 1: Blau-lastig
      x = (Math.random() - 0.5) * 1.8;
      y = (Math.random() - 0.5) * 2.8 - 0.5;
      z = (Math.random() - 0.5) * 0.5;
      tempColor.copy(colorBlue).lerp(colorOrange, 0.2); 
    } else if (i < 1700) { // Bereich 2: Sonne (Orange-lastig)
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.2 + Math.random() * 1.8;
      x = radius * Math.sin(phi) * Math.cos(theta) + 0.5;
      y = radius * Math.sin(phi) * Math.sin(theta) + 1.0;
      z = radius * Math.cos(phi) - 0.5;
      
      const progress = Math.min(radius / 3.0, 1);
      tempColor.copy(colorOrange).lerp(colorBlue, progress);
    } else { // Bereich 3: Sonstige
      x = (Math.random() - 0.5) * 6.0;
      y = (Math.random() - 0.5) * 0.5 - 2.0;
      z = (Math.random() - 0.5) * 2.0;
      tempColor.copy(colorBlue).lerp(colorOrange, Math.random());
    }

    // Matrix mit Position, Rotation und variabler Skalierung
    tempMatrix.compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, 0)),
      new THREE.Vector3(scale, scale, scale)
    );
    
    mesh.setMatrixAt(i, tempMatrix);
    mesh.setColorAt(i, tempColor);
  }

  const clock = new THREE.Clock();

  function animate() {
    const time = clock.getElapsedTime();

    for (let i = 0; i < instances; i++) {
      const matrix = new THREE.Matrix4();
      mesh.getMatrixAt(i, matrix);
      const pos = new THREE.Vector3().setFromMatrixPosition(matrix);
      
      // Sanfte Bewegung
      const offsetX = Math.sin(time * 0.3 + pos.y) * 0.003;
      const offsetY = Math.cos(time * 0.2 + pos.x) * 0.003;

      matrix.setPosition(pos.x + offsetX, pos.y + offsetY, pos.z);
      mesh.setMatrixAt(i, matrix);
    }

    mesh.rotation.y = time * 0.05;
    mesh.instanceMatrix.needsUpdate = true;
    mesh.instanceColor.needsUpdate = true;
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}
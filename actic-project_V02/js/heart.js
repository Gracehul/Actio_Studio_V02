import * as THREE from 'three';

const container = document.querySelector('#mini-interactive-core');

if (container) {
    const scene = new THREE.Scene();
    
    // Kamera: Wir setzen sie etwas nach rechts (x=10), damit wir den Schweif der Linien sehen
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(10, 0, 25); 

    const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true 
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // WICHTIG: Wenn die Box gesprengt werden soll, muss die 0 am Ende stehen (transparent)
    renderer.setClearColor(0x000000, 0); 
    container.appendChild(renderer.domElement);

    const colors = [0x8e44ad, 0x3498db, 0xf1c40f, 0xbdc3c7, 0x27ae60];
    const ribbons = [];

    colors.forEach((color, index) => {
        const points = [];
        // EXPLOSIONS-LOGIK: 12 Punkte wandern von Links nach Rechts
        for (let i = 0; i < 12; i++) {
            points.push(new THREE.Vector3(
                (i * 4.5) - 5,                 // Startet links (-10) und geht nach rechts
                (Math.random() - 0.5) * 12,  // Streuung in der Höhe
                -15 + (i * 3.5)               // Kommt dem User entgegen (Tiefe)
            ));
        }

        const curve = new THREE.CatmullRomCurve3(points);
        // Mehr Segmente (128) für glattere Kurven bei der Länge
        const geometry = new THREE.TubeGeometry(curve, 100, 0.12, 8, false)
        const material = new THREE.MeshBasicMaterial({ 
            color: color, 
            transparent: true, 
            opacity: 0.8 
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        ribbons.push(mesh);
    });

    let mouseX = 0, mouseY = 0;
    // Maus-Logik bleibt gleich
    window.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
        mouseY = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;
    });

    function animate() {
        requestAnimationFrame(animate);
        const time = performance.now() * 0.001;

        ribbons.forEach((ribbon, i) => {
            // Sanfte Wellenbewegung
            ribbon.rotation.z = Math.sin(time * 0.1 + i) * 0.1;
            ribbon.position.y = Math.sin(time * 0.3 + i) * 0.5;
        });

        // 1. Zielpositionen basierend auf der Maus berechnen
        // Die +12 sorgt dafür, dass der Standardfokus leicht rechts liegt
        const targetX = (mouseX * 15) + 12; 
        const targetY = (mouseY * 10);

        // 2. Kamera sanft an die Zielposition heranführen (Lerp)
        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (targetY - camera.position.y) * 0.05;
        camera.position.z = 25; // Z-Abstand bleibt konstant bei 25

        // 3. Die Kamera schaut immer auf den leicht nach rechts versetzten Mittelpunkt
        camera.lookAt(12, 0, 0); 

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}
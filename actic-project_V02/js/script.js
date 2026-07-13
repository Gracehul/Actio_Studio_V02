function switchProcessStep(id) {
    console.log("Suche Element mit ID:", id); // Zeigt dir in der Konsole, wonach JS sucht

    const elements = document.querySelectorAll('.stage-media');
    elements.forEach(el => {
        el.classList.remove('active');
        if (el.tagName === 'VIDEO') el.pause();
    });

    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
        
        if (target.tagName === 'VIDEO') {
            target.muted = true;
            target.load(); // Zwingt den Browser, das Video frisch zu laden/starten
            target.play().catch(e => console.error("Fehler beim Abspielen:", e));
        }
    } else {
        console.error("Element mit ID " + id + " wurde nicht gefunden!");
    }
}

// WICHTIG: Falls du type="module" im Script-Tag hast, füge das hier hinzu:
window.switchProcessStep = switchProcessStep;

// Pointcloud Hover Effekt
const aboutImage = document.querySelector('.about-section__image');

if (aboutImage) {
    aboutImage.addEventListener('mousemove', (e) => {
        const rect = aboutImage.getBoundingClientRect();
        // Berechne Mausposition relativ zum Bildcontainer
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Setze CSS Variablen für die Maske
        aboutImage.style.setProperty('--x', `${x}px`);
        aboutImage.style.setProperty('--y', `${y}px`);
    });
}
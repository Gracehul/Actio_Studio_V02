# ACTIC — Choreographing Systems
**Portfolio & Research Interface | Foundations of Interactive Media (2026)**  
**Developer & Researcher:** Duc Bao Bui (`bui@th-brandenburg.de`)

---

## 1. Conceptual Framework & Design Intent
ACTIC is an interactive portfolio and research showcase exploring the intersection of human movement and digital system behaviors ("Embodied Interaction"). Based on the core thesis **"Movement as input. Systems as response,"** the project acts as a bridge between Research-through-Design (RtD) and high-fidelity front-end engineering. 

Instead of deploying static grids or pre-made commercial themes (which are strictly avoided to ensure academic integrity), the interface itself embodies the research topic: it reacts dynamically to user viewport behaviors and interaction states, creating a direct feedback loop between the human operator and the media artifact.

---

## 2. Technical Architecture & Layer Separation
The application is built entirely on a lightweight, modular **Vanilla Tech-Stack** to maximize performance, guarantee long-term archiving capabilities, and maintain complete control over the Document Object Model (DOM).

### Core Structure:
*   `index.html` (Landing Page): Features a structured layout containing a semantic navigation bar, a multi-section content pipeline (Hero, Selected Work, About), a dynamic intersection observer, and an integrated SVG filter grid.
*   `project.html` (Detail Page): Documents the specific research project *"Movement as Data Practice"* using a flexible split-layout system, structural meta-data tables, and an isolated 3D graphics container (`#mini-interactive-core`).
*   `css/style.css`: Contains the entire layout logic and custom animation profiles. It uses a clean BEM (Block-Element-Modifier) naming convention (e.g., `.work-section__title`, `.site-header__logo`) to ensure industrial-grade maintainability.

### Interaction & 3D Scripting:
*   `js/kinetic-object.js`: Controls the main interactive background element on the landing page. It operates as an asynchronous ES6 module (`type="module"`), separating algorithmic interaction from document structure.
*   `js/heart.js`: Powered by **Three.js (WebGL Framework v160)** via modern browser import maps. This script renders the hardware-accelerated 3D interaction layer inside the detail view, functioning as the primary proof-of-concept for data-driven motion systems.
*   `js/script.js`: Handles global UI animations, state management, and fallback mechanisms.

---

## 3. Academic Integrity & AI-Assistance Disclosure
In strict compliance with the examination regulations of the *Technical University of Brandenburg*, this project enforces total transparency regarding external dependencies and development tools:

*   **No Pre-made Themes:** Tools like WordPress Elementor, Webflow templates, or pre-built Bootstrap themes were completely excluded. Every element and style block was coded manually end-to-end.
*   **Third-Party Libraries:** The 3D graphics pipeline utilizes `three.module.js` (v0.160.0), pulled dynamically from verified open-source CDNs (`unpkg.com`) via a strict import map. Typography relies on Google Fonts (`Inter`).
*   **AI Sparring Strategy:** Advanced generative AI models (ChatGPT/Claude) were utilized exclusively as a conversational engineering partner. AI assistance was restricted to generating deterministic mathematical matrices for the 3D vertex math, optimizing the JavaScript `IntersectionObserver` logic, and code debugging. All structural ideas, UI/UX flows, asset choices, and research alignments are 100% proprietary work by the author.

---

## 4. Architectural Guardrails & Compliance Notes
For future deployments and scalability (e.g., upcoming HRI/EU audits), the project implements several native optimization patterns:

1.  **Graceful Degradation:** Advanced visual effects (like the complex `#turbulenceFilter` embedded via native inline SVG) are treated as progressive enhancements. If a client device lacks GPU capabilities, the interface falls back to a clean, high-contrast typography matrix without breaking semantic accessibility.
2.  **Privacy by Design:** The interface runs completely client-side. No user behavior, cursor telemetry, or interaction vectors are stored or transmitted to external servers, adhering fully to data minimization guidelines.

# ACTIC — Choreographing Systems
**Portfolio & Research Interface | Foundations of Interactive Media (2026)**  
**Developer & Researcher:** Duc Bao Bui (`bui@th-brandenburg.de`)

---

## 1. Conceptual Framework & Design Intent
ACTIC is an interactive portfolio and research showcase exploring the intersection of human movement and digital system behaviors ("Embodied Interaction"). Based on the core thesis **"Movement as input. Systems as response,"** the project acts as a bridge between Research-through-Design (RtD) and high-fidelity front-end engineering. 

Instead of deploying static grids or pre-made commercial themes (which are avoided to ensure academic integrity), the interface itself embodies the research topic: it reacts dynamically to user viewport behaviors, kinetic canvas states, and mouse positions, creating an analogue interface simulation.

---

## 2. Technical Architecture & Tech-Stack
The application is built entirely on a lightweight, modular **Vanilla Tech-Stack** to maximize performance, guarantee long-term archiving capabilities, and maintain complete control over the Document Object Model (DOM).

### Core Layout & System Tension Block (CSS):
*   **System Tension Block (`:root`):** The styling enforces a highly structural, dark-on-light look using custom CSS variables (e.g., `--system-ink`, `--system-panel`). This creates an explicit operational environment rather than a basic decorative aesthetic.
*   **Generative Field Background (`body::before`):** Leverages a sophisticated mixture of multi-layered radial gradients combined with a CSS animation (`kinetic-background`). This produces an autonomous, slow-moving morph effect that visualizes kinetic data flow over time.
*   **Responsive Multi-Column Work Grid:** The project showcase utilizes an asymmetrical 3-column CSS Grid layout (`1.35fr 1fr 0.8fr`) that gracefully degrades into a unified single-column stream on smaller viewports.

### Interaction Layer & 3D Scripting:
*   `js/kinetic-object.js`: Renders the landing page background using an isolated, performance-optimized `<canvas class="hero-kinetic-canvas">` element.
*   `js/heart.js`: Powered by **Three.js (WebGL Framework v160)**. This script handles the hardware-accelerated 3D core interaction layer inside the isolated `#mini-interactive-core` viewport on the detail page.
*   `js/script.js`: Manages standard global UI states, tracking vectors, and mouse tracking modifiers.

---

## 3. Academic Integrity & AI-Assistance Disclosure
In strict compliance with the examination regulations of the *Technical University of Brandenburg*, this project enforces total transparency regarding external dependencies and development tools:

*   **No Pre-made Themes:** Software suites like WordPress Elementor, Webflow templates, or pre-built layouts were completely excluded. Every element, animation keyframe, and layout block was coded manually end-to-end.
*   **Third-Party Libraries:** The 3D graphics pipeline utilizes `three.module.js` (v0.160.0), pulled dynamically from verified open-source CDNs (`unpkg.com`) via a strict import map. Typography relies on Google Fonts (`Inter`).
*   **AI Sparring Strategy:** Advanced generative AI models were utilized exclusively as a conversational engineering partner. AI assistance was restricted to generating deterministic mathematical matrices for the 3D vertex math, optimizing the JavaScript `IntersectionObserver` logic, and code debugging. All structural ideas, UI/UX flows, aesthetic balancing, asset choices, and research alignments are 100% proprietary work by the author.

---

## 4. Architectural Guardrails & Compliance Notes
*   **Graceful Degradation / Accessibility:** Advanced visual effects (like the complex `#turbulenceFilter` applied to the pointcloud overlay via custom inline SVG) are treated as progressive enhancements. If a client device lacks GPU capabilities or explicitly requests reduced motion (`@media (prefers-reduced-motion: reduce)`), all continuous keyframe animations and structural transforms auto-terminate immediately to ensure accessibility compliance.
*   **Privacy by Design:** The interface runs entirely client-side. No user behavior, cursor telemetry, or interaction vectors are stored or transmitted to external servers, adhering fully to data minimization guidelines.



1. Das "System Tension Block"-Konzept (Deine :root Variablen)Die Prof fragt: „Ihr Farbschema wirkt sehr technisch, fast wie eine Laborkonsole. Warum?“Deine Antwort: „Das CSS basiert auf einem System Tension Block. Statt reiner Deko-Farben nutze ich Variablen wie --system-ink, --system-panel und Farbakzente wie --system-cyan und --system-magenta. Das Ziel war es, dem User visuell das Gefühl zu geben, kein klassisches Design-Portfolio zu betrachten, sondern ein interaktives Forschungs-Interface (Research-Interface) zu bedienen.“  2. Das biomechanische Hover-Verhalten im About-BereichDie Prof fragt: „Was passiert im CSS beim Hover über Ihr Porträt?“Deine Antwort: „Das Porträt schaltet von einem gedimmten Graustufen-Modus um und aktiviert ein Pointcloud-Overlay (.pointcloud-overlay). Über CSS-Maskierung (mask-image: radial-gradient...) und den SVG-Filter url('#turbulenceFilter') wird das Bild nur im direkten Umkreis des Mauszeigers 'gescannt'. Zusätzlich triggere ich über @keyframes jitter eine feine, unruhige Störung, um das ununterbrochene Rauschen digitaler Sensor- und Bewegungserfassungssysteme (wie Rokoko oder MediaPipe) gestalterisch zu simulieren.“  3. Der "Reduced Motion" Guardrail (Wichtig für Bestnoten!)Die Prof fragt: „Haben Sie bei den ganzen Animationen auch an Barrierefreiheit gedacht?“Deine Antwort: „Absolut. Ganz unten im Stylesheet ist ein Media-Query für @media (prefers-reduced-motion: reduce) integriert. Wenn ein Nutzer in seinen Betriebssystem-Einstellungen Animationen deaktiviert hat, schalten sich die kompletten Hintergrund-Transformationen und CSS-Morphen-Effekte sofort ab. Die Seite bleibt voll funktionsfähig, schont aber die kognitiven Ressourcen des Nutzers.“  


### Interactive & 3D Scripting Pipeline:
*   `js/kinetic-object.js` (Landing Page): Verwendet ein hochperformantes `THREE.InstancedMesh` mit 2.500 Box-Instanzen, um CPU-Overhead zu vermeiden. Es teilt die Partikel algorithmisch in drei mathematische Räume (Vektor-Räume, Sphären-Räume via Kugelkoordinaten) auf und interpoliert die Farben über `.lerp()`. Die Animation greift auf eine Echtzeit-Verschiebung über mathematische Sinus-/Kosinus-Wellen zurück.
*   `js/heart.js` (Detail-Ansicht): Generiert eine dreidimensionale Explosions-Logik basierend auf einer `THREE.CatmullRomCurve3`-Interpolation. Fünf Spline-Tubes wandern dynamisch im Raum und reagieren über einen linearen Interpolator (Lerp) organisch, aber gedämpft auf die Mauskoordinaten (`mouseX` / `mouseY`), indem die Kamera-Matrix sanft nachgeführt wird.
*   `js/script.js` (UI-Logik): Steuert das Umschalten von Prozessschritten (`switchProcessStep`) durch DOM-Manipulation, steuert die Video-Wiedergabe-Pipelines (inklusive programmatischem Stummschalten/Neuladen zur Bandbreitenschonung) und berechnet die relativen Mauskoordinaten via `getBoundingClientRect()` für das mathematische SVG-Pointcloud-Tracking im About-Bereich.

✈️ Dein JS-Prüfungs-Spickzettel: So brillierst du im AuditDie Professorin wird bei diesem JavaScript-Code ganz genau hinschauen. Bereite dich auf diese drei Kernfragen vor:1. Die Performance-Frage: „Warum nutzen Sie InstancedMesh auf der Landing Page?“ (js/kinetic-object.js)Hintergrund: Wenn man 2.500 einzelne THREE.Mesh-Objekte in Three.js erstellt, muss die CPU für jedes einzelne Objekt einen "Draw Call" an die GPU schicken. Das bringt jeden Browser zum Ruckeln.Deine Antwort: „Um die Performance zu optimieren, nutze ich THREE.InstancedMesh. Dadurch rendert die GPU alle 2.500 Boxen in einem einzigen Draw Call. Die Positionen, Rotationen und Skalierungen werden über eine mathematische Transformations-Matrix (Matrix4) direkt im Speicher abgelegt. In der animate()-Schleife verändere ich nur die Positionsvektoren über Sinus- und Kosinus-Wellen, was extrem CPU-schonend ist.“  2. Die Mathe-Frage: „Wie funktioniert die Punkte-Generierung im Hintergrund?“Hintergrund: Du nutzt im Code zwei völlig unterschiedliche mathematische Ansätze.Deine Antwort: „Auf der Landing Page teile ich die Partikel in drei Räume[cite: 3]. Bereich 1 ist ein strukturierter linearer Vektor-Raum[cite: 3]. Bereich 2 nutzt Kugelkoordinaten (via Cosinus/Sinus und den Winkeln Theta/Phi), um eine organische Sphäre zu formen[cite: 3]. Im Projekt-Bereich (js/heart.js) nutze ich stattdessen CatmullRomCurve3, um aus 12 zufällig generierten Kontrollpunkten eine glatte, fließende 3D-Röhre (TubeGeometry) zu interpolieren.“  3. Die Interaktions-Frage: „Wie funktioniert das Kamera-Tracking und das Pointcloud-Auge?“Hintergrund: Du nutzt im Code "Lerp" (Linear Interpolation) für die Kamera und relatives Tracking im CSS.Deine Antwort: „Für die Kameraführung nutze ich einen Lerp-Algorithmus (camera.position.x += (targetX - camera.position.x) * 0.05)[cite: 2]. Die Kamera springt dadurch nicht hart zum Mauszeiger, sondern nähert sich ihm in jedem Frame um 5 % an, was die Bewegung organisch dämpft[cite: 2]. Beim About-Bild lese ich die Maus ab, berechne über getBoundingClientRect() die exakte relative Position im Container und übergebe sie als CSS-Variablen (--x, --y) ans Stylesheet[cite: 4]. Das steuert dort den radialen Sichtbarkeitsradius der Pointcloud.“  
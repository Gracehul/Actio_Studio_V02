# ACTIC — Choreographing Systems

ACTIC is a small portfolio prototype for a design research practice working with movement, digital systems, and embodied interaction.

The project presents a visual and interactive web identity around the idea:

> Movement as input.  
> Systems as response.

The website consists of a landing page and one project detail page. It uses semantic HTML, one structured CSS file, and JavaScript-based interactions, including small Three.js systems.

---

## Project Goal

The goal of this project is to create a web-based portfolio prototype that communicates a design research direction rather than only presenting finished visual works.

The site explores how movement, system behavior, and visual feedback can become part of a personal portfolio language.

The focus is on:

- semantic HTML structure
- a consistent visual system
- responsive layout behavior
- interactive motion-based effects
- atmospheric visual design
- small real-time system reactions through JavaScript and Three.js

---

## Concept

ACTIC is built around the idea of choreographing systems.

The visual language combines:

- clean portfolio structure
- dark interface-like panels
- motion-based visual fragments
- soft atmospheric backgrounds
- resonance, echo, and cursor traces
- a balance between research identity and visual experimentation

The page is intentionally positioned between a portfolio, a research sketch, and an interactive prototype.

---

## Pages

### `index.html`

The landing page contains:

- a global header and navigation
- a hero section with the main statement
- a kinetic Three.js canvas background
- a selected work section
- an about section with portrait and pointcloud hover interaction
- a footer with contact information

### `project.html`

The project page contains:

- a project hero
- a project description
- a main project image
- an approach section
- project facts
- a process gallery
- an interactive Three.js ribbon element

---

## Design System

The CSS is organized as a single central stylesheet with a clear internal structure.

The `:root` section works as a small design-token system. It defines:

- brand colors
- moodboard colors
- semantic interface colors
- hero-specific component tokens
- layout values
- typography values
- spacing values
- border radius values
- motion and shadow values

This makes the website easier to adjust and helps prevent repeated hard-coded values.

### Main Mood Colors

```css
--mood-teal: #062633;
--mood-mauve: #a79ea3;
--mood-sage: #adc1b0;
--mood-ochre: #a88b3d;
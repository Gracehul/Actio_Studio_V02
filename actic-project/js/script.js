/* ==========================================================================
   SITE INTERACTIONS
   Small DOM-based interactions shared across pages.
========================================================================== */

function initWorkReveal() {
  const workSection = document.querySelector(".work-section");

  if (!workSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(workSection);
}

function initPointcloudHover() {
  const aboutImage = document.querySelector(".about-section__image");

  if (!aboutImage) return;

  aboutImage.addEventListener("mousemove", (event) => {
    const rect = aboutImage.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    aboutImage.style.setProperty("--x", `${x}px`);
    aboutImage.style.setProperty("--y", `${y}px`);
  });

  aboutImage.addEventListener("mouseleave", () => {
    aboutImage.style.setProperty("--x", "50%");
    aboutImage.style.setProperty("--y", "50%");
  });
}

function initCursorTrace() {
  const layer = document.createElement("div");
  layer.className = "cursor-trace-layer";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  let lastX = window.innerWidth / 2;
  let lastY = window.innerHeight / 2;
  let lastTime = performance.now();
  let lastSpawn = 0;
  let lastRipple = 0;

  window.addEventListener("mousemove", (event) => {
    const now = performance.now();
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    const dt = Math.max(now - lastTime, 16);
    const velocity = Math.sqrt(dx * dx + dy * dy) / dt;

    lastX = event.clientX;
    lastY = event.clientY;
    lastTime = now;

    if (now - lastSpawn < 34) return;
    lastSpawn = now;

    const rotation = Math.atan2(dy, dx) * (180 / Math.PI);

    const bloomWidth = Math.min(7 + velocity * 8, 15);
    const bloomHeight = Math.min(2.8 + velocity * 2.2, 6.2);

    const traceWidth = Math.min(8 + velocity * 10, 18);
    const traceHeight = Math.min(2.4 + velocity * 1.6, 5.6);

    /* WHITE + SPECTRAL IMPULSE */
    const bloom = document.createElement("span");
    bloom.className = "cursor-bloom";
    bloom.style.setProperty("--trace-x", `${event.clientX}px`);
    bloom.style.setProperty("--trace-y", `${event.clientY}px`);
    bloom.style.setProperty("--trace-rotation", `${rotation}deg`);
    bloom.style.setProperty("--trace-w", `${bloomWidth}rem`);
    bloom.style.setProperty("--trace-h", `${bloomHeight}rem`);
    layer.appendChild(bloom);

    bloom.addEventListener("animationend", () => {
      bloom.remove();
    });

    /* DARK AFTERIMAGE */
    const trace = document.createElement("span");
    trace.className = "cursor-trace";
    trace.style.setProperty("--trace-x", `${event.clientX - dx * 0.12}px`);
    trace.style.setProperty("--trace-y", `${event.clientY - dy * 0.12}px`);
    trace.style.setProperty("--trace-rotation", `${rotation}deg`);
    trace.style.setProperty("--trace-trail-w", `${traceWidth}rem`);
    trace.style.setProperty("--trace-trail-h", `${traceHeight}rem`);
    layer.appendChild(trace);

    trace.addEventListener("animationend", () => {
      trace.remove();
    });

    /* EXTRA RIPPLES FOR FAST MOTION */
    if (velocity > 0.8 && now - lastRipple > 120) {
      lastRipple = now;

      const ripple = document.createElement("span");
      ripple.className = "cursor-ripple";
      ripple.style.setProperty("--trace-x", `${event.clientX}px`);
      ripple.style.setProperty("--trace-y", `${event.clientY}px`);
      ripple.style.setProperty("--ripple-size", `${Math.min(5 + velocity * 5, 11)}rem`);
      layer.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    }
  });
}

function switchProcessStep(id) {
  const elements = document.querySelectorAll(".stage-media");
  const target = document.getElementById(id);

  elements.forEach((element) => {
    element.classList.remove("active");

    if (element.tagName === "VIDEO") {
      element.pause();
    }
  });

  if (!target) return;

  target.classList.add("active");

  if (target.tagName === "VIDEO") {
    target.muted = true;
    target.play().catch((error) => {
      console.error("Video playback failed:", error);
    });
  }
}

window.switchProcessStep = switchProcessStep;

document.addEventListener("DOMContentLoaded", () => {
  initWorkReveal();
  initPointcloudHover();
  initCursorTrace();
});


document.addEventListener("DOMContentLoaded", () => {
    // 1. Set the dynamic footer year
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 2. High-performance Intersection Observer for elegant scroll animations
    const animatedElements = document.querySelectorAll('.fade-in');
    
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve once animation plays to conserve background thread processes
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport bounds
        threshold: 0.1, // trigger when 10% of element is on screen
        rootMargin: "0px 0px -50px 0px" // early offset trigger padding
    });

    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });

    // 3. Hidden Developer Easter Egg log inside DevTools console
    console.log(
        "%c🔧 Welcome Engineer/Architect! Inspecting my pipeline?", 
        "color: #38bdf8; font-size: 14px; font-weight: bold;"
    );
    console.log(
        "Pillars Map: Cloud Economics | Supply Chain DevSecOps | AI Innovation"
    );
});

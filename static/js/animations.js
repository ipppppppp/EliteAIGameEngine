class Animations {
    constructor() {
        this.initGSAP();
        this.setupScrollAnimations();
    }

    initGSAP() {
        gsap.config({
            nullTargetWarn: false
        });
    }

    setupScrollAnimations() {
        // Hero section animation
        gsap.from('.hero-content h1', {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: "power3.out",
            delay: 0.5
        });

        gsap.from('.hero-content p', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out",
            delay: 0.8
        });

        // Feature cards animation
        gsap.utils.toArray('.feature-card').forEach((card, i) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                animation: gsap.from(card, {
                    duration: 1,
                    y: 100,
                    opacity: 0,
                    scale: 0.8,
                    ease: "power3.out",
                    delay: i * 0.2
                }),
                toggleActions: "play none none reverse"
            });
        });

        // Demo section animation
        ScrollTrigger.create({
            trigger: ".interactive-demo",
            start: "top 60%",
            animation: gsap.from(".interactive-demo", {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power3.out"
            }),
            toggleActions: "play none none reverse"
        });

        // Contact form animation
        ScrollTrigger.create({
            trigger: ".contact-form",
            start: "top 80%",
            animation: gsap.from(".contact-form", {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: "power3.out"
            }),
            toggleActions: "play none none reverse"
        });
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    new Animations();
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Handle loader
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            onComplete: () => loader.style.display = 'none'
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation for sections
    const animateElements = () => {
        const elements = document.querySelectorAll('.feature-card, h2, .demo-container');
        
        elements.forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        });
    };

    animateElements();
});

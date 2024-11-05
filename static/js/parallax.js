class Parallax {
    constructor() {
        this.cards = document.querySelectorAll('.feature-card');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleParallax());
    }

    handleParallax() {
        this.cards.forEach(card => {
            const speed = card.dataset.speed;
            const rect = card.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            
            const yPos = -(scrolled * speed);
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                gsap.to(card, {
                    y: yPos,
                    duration: 0.5,
                    ease: "power1.out"
                });
            }
        });
    }
}

// Initialize parallax
document.addEventListener('DOMContentLoaded', () => {
    new Parallax();
});

class Animations {
    constructor() {
        this.initGSAP();
        this.setupScrollAnimations();
        this.setupFAQHandlers();
        this.setupTestimonialSlider();
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

        // Pricing cards animation
        gsap.utils.toArray('.pricing-card').forEach((card, i) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top 80%",
                animation: gsap.from(card, {
                    duration: 1,
                    y: 50,
                    opacity: 0,
                    scale: 0.9,
                    ease: "power3.out",
                    delay: i * 0.2
                }),
                toggleActions: "play none none reverse"
            });
        });

        // Tech stack animation
        gsap.utils.toArray('.tech-category').forEach((category, i) => {
            ScrollTrigger.create({
                trigger: category,
                start: "top 80%",
                animation: gsap.from(category, {
                    duration: 1,
                    x: i % 2 === 0 ? -50 : 50,
                    opacity: 0,
                    ease: "power3.out",
                    delay: i * 0.2
                }),
                toggleActions: "play none none reverse"
            });
        });

        // Benefits animation
        gsap.utils.toArray('.benefit-item').forEach((item) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 70%",
                animation: gsap.from(item, {
                    duration: 1,
                    y: 50,
                    opacity: 0,
                    ease: "power3.out"
                }),
                toggleActions: "play none none reverse"
            });
        });

        // FAQ animation
        gsap.utils.toArray('.faq-item').forEach((item, i) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 85%",
                animation: gsap.from(item, {
                    duration: 0.8,
                    y: 30,
                    opacity: 0,
                    ease: "power3.out",
                    delay: i * 0.1
                }),
                toggleActions: "play none none reverse"
            });
        });
    }

    setupFAQHandlers() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const currentActive = document.querySelector('.faq-item.active');
                if (currentActive && currentActive !== item) {
                    currentActive.classList.remove('active');
                }
                item.classList.toggle('active');
            });
        });
    }

    setupTestimonialSlider() {
        const slider = document.querySelector('.testimonials-slider');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });

        // Auto-scroll testimonials
        let scrollInterval = setInterval(() => {
            if (!document.hidden) {
                slider.scrollLeft += 1;
                if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                    slider.scrollLeft = 0;
                }
            }
        }, 30);
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    new Animations();
});

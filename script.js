// Animação de números (estatísticas)
function animateNumbers() {
    document.querySelectorAll('.number').forEach(el => {
        const target = +el.getAttribute('data-count');
        let count = 0;
        const increment = target / 100;
        const update = () => {
            count += increment;
            if (count < target) {
                el.textContent = Math.floor(count);
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
            }
        };
        update();
    });
}

// Scroll reveal para seções
function revealOnScroll() {
    const reveals = document.querySelectorAll('section, .service-card, .testimonial');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        } else {
            el.style.opacity = 0;
            el.style.transform = 'translateY(40px)';
        }
    });
}

// Slider de depoimentos
function testimonialsSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    let current = 0;
    function showTestimonial(idx) {
        testimonials.forEach((el, i) => {
            el.classList.toggle('active', i === idx);
        });
    }
    document.querySelector('.slider-controls .prev').onclick = () => {
        current = (current - 1 + testimonials.length) % testimonials.length;
        showTestimonial(current);
    };
    document.querySelector('.slider-controls .next').onclick = () => {
        current = (current + 1) % testimonials.length;
        showTestimonial(current);
    };
    showTestimonial(current);
}

// Menu mobile
function mobileMenu() {
    const menu = document.querySelector('nav ul');
    document.querySelector('.mobile-menu').onclick = () => {
        menu.classList.toggle('show');
    };
}

window.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
    revealOnScroll();
    testimonialsSlider();
    mobileMenu();
    window.addEventListener('scroll', revealOnScroll);
});
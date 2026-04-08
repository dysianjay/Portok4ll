// Main JavaScript - Animasi dan Interaktivitas Umum

// Animasi Fade-In saat page load
document.addEventListener('DOMContentLoaded', () => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Fade-in untuk semua elemen dengan class 'fade-in'
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.6s ease-in-out';
        
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });

    // Animasi entrance untuk teks
    const textElements = document.querySelectorAll('.text-entrance');
    textElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 150);
    });
});

// Hover effect pada tombol - Scale dan glow effect
document.querySelectorAll('[class*="button"]').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 4px 12px rgba(212, 64, 0, 0.4)';
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });

    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// Smooth scroll untuk link navigasi
document.querySelectorAll('a[href^="../"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.includes('.html')) {
            // Fade out effect sebelum berpindah halaman
            document.body.style.transition = 'opacity 0.3s ease-out';
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });
});

// Observer untuk animasi saat elemen masuk viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

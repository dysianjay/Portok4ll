// Home Page Animations

document.addEventListener('DOMContentLoaded', () => {
    // Animasi untuk title dan nama
    const titleEl = document.querySelector('.title');
    const nameEl = document.querySelector('.name');
    const aboutTitleEl = document.querySelector('.about-title');
    const photoEl = document.querySelector('.photo');
    const aboutTextEl = document.querySelector('.about-text');

    // Stagger animation untuk header elements
    if (titleEl) {
        titleEl.style.opacity = '0';
        titleEl.style.transform = 'translateY(-20px)';
        titleEl.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        setTimeout(() => {
            titleEl.style.opacity = '1';
            titleEl.style.transform = 'translateY(0)';
        }, 200);
    }

    if (nameEl) {
        nameEl.style.opacity = '0';
        nameEl.style.transform = 'translateY(-20px)';
        nameEl.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        setTimeout(() => {
            nameEl.style.opacity = '1';
            nameEl.style.transform = 'translateY(0)';
        }, 400);
    }

    if (aboutTitleEl) {
        aboutTitleEl.style.opacity = '0';
        aboutTitleEl.style.transform = 'translateX(-20px)';
        aboutTitleEl.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        setTimeout(() => {
            aboutTitleEl.style.opacity = '1';
            aboutTitleEl.style.transform = 'translateX(0)';
        }, 600);
    }

    if (photoEl) {
        photoEl.style.opacity = '0';
        photoEl.style.transform = 'scale(0.8)';
        photoEl.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        setTimeout(() => {
            photoEl.style.opacity = '1';
            photoEl.style.transform = 'scale(1)';
        }, 800);
    }

    if (aboutTextEl) {
        aboutTextEl.style.opacity = '0';
        aboutTextEl.style.transform = 'translateX(20px)';
        aboutTextEl.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        setTimeout(() => {
            aboutTextEl.style.opacity = '1';
            aboutTextEl.style.transform = 'translateX(0)';
        }, 1000);
    }

    // Hover effect untuk navigation buttons
    const buttons = document.querySelectorAll('[class*="button-"]');
    buttons.forEach(button => {
        button.style.cursor = 'pointer';
        
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08)';
            this.style.boxShadow = '0 6px 16px rgba(212, 64, 0, 0.5)';
            this.style.transition = 'all 0.3s ease';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
});

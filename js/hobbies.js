// Hobbies Page Animations

document.addEventListener('DOMContentLoaded', () => {
    // Animasi hobby cards
    const hobbyCards = document.querySelectorAll('[class*="hobby"]:not([class*="text"])');
    const hobbyTexts = document.querySelectorAll('[class*="hobby-text"]');

    // Animasi hobby cards dengan stagger
    hobbyCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, index * 200);
    });

    // Animasi hobby text
    hobbyTexts.forEach((text, index) => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(10px)';
        text.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 300 + index * 200);
    });

    // Interactive hover effects untuk hobby cards
    hobbyCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 8px 24px rgba(212, 64, 0, 0.3)';
            this.style.transition = 'all 0.3s ease';
            
            // Highlight text saat card di-hover
            hobbyTexts[index].style.fontWeight = '900';
            hobbyTexts[index].style.transform = 'scale(1.1)';
            hobbyTexts[index].style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
            
            hobbyTexts[index].style.fontWeight = '700';
            hobbyTexts[index].style.transform = 'scale(1)';
        });

        // Click animation
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-15px) scale(1.08)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1.05)';
            }, 150);
        });
    });

    // Staggered entrance animation
    const allElements = document.querySelectorAll('[class*="hobby"], [class*="button"]');
    allElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// Timeline Page Animations

document.addEventListener('DOMContentLoaded', () => {
    // Animasi timeline elements
    const circles = document.querySelectorAll('[class*="circle"]');
    const lines = document.querySelectorAll('[class*="line"]');
    const texts = document.querySelectorAll('[class*="text"]');

    // Animasi circles dengan stagger
    circles.forEach((circle, index) => {
        circle.style.opacity = '0';
        circle.style.transform = 'scale(0)';
        circle.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        setTimeout(() => {
            circle.style.opacity = '1';
            circle.style.transform = 'scale(1)';
        }, index * 200);
    });

    // Animasi lines dengan draw effect
    lines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transition = 'opacity 0.8s ease-out';
        
        setTimeout(() => {
            line.style.opacity = '1';
        }, 300 + index * 150);
    });

    // Animasi teks dengan slide-in
    texts.forEach((text, index) => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(20px)';
        text.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 600 + index * 200);
    });

    // Hover effects untuk timeline circles
    circles.forEach(circle => {
        circle.style.cursor = 'pointer';
        
        circle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.boxShadow = '0 0 20px rgba(212, 64, 0, 0.6)';
            this.style.transition = 'all 0.3s ease';
        });

        circle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Interactive timeline - highlight text on circle hover
    circles.forEach((circle, index) => {
        circle.addEventListener('mouseenter', function() {
            texts.forEach((text, textIndex) => {
                if (textIndex === index) {
                    text.style.fontWeight = '700';
                    text.style.transform = 'scale(1.05)';
                } else {
                    text.style.opacity = '0.5';
                }
            });
        });

        circle.addEventListener('mouseleave', function() {
            texts.forEach(text => {
                text.style.fontWeight = '400';
                text.style.opacity = '1';
                text.style.transform = 'scale(1)';
            });
        });
    });
});

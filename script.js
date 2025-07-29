// Simple, elegant animations with a fun twist
document.addEventListener('DOMContentLoaded', function() {
    // Dramatic typing effect for warning title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                // Add some drama with variable speed
                const delay = text.charAt(i) === '⚠' ? 300 : 100;
                setTimeout(typeWriter, delay);
            }
        }
        
        setTimeout(typeWriter, 800);
    }

    // Smooth fade-in for content after title finishes
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        mainContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 2500);
    }

    // Add warning flash effect
    const warningHeader = document.querySelector('.warning-header');
    if (warningHeader) {
        setTimeout(() => {
            warningHeader.style.animation = 'warningFlash 2s ease-in-out';
        }, 3000);
    }
});

// Add CSS for warning flash animation
const style = document.createElement('style');
style.textContent = `
    @keyframes warningFlash {
        0%, 100% {
            box-shadow: 0 5px 20px rgba(255, 107, 107, 0.3);
        }
        50% {
            box-shadow: 0 5px 30px rgba(255, 107, 107, 0.8);
            transform: scale(1.02);
        }
    }
`;
document.head.appendChild(style);

// Simple, elegant animations
document.addEventListener('DOMContentLoaded', function() {
    // Smooth fade-in for content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        setTimeout(() => {
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(30px)';
            mainContent.style.transition = 'opacity 1s ease, transform 1s ease';
            
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
            }, 500);
        }, 1500);
    }

    // Subtle typing effect for main title (optional)
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
});

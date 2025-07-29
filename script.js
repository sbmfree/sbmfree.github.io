// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all message cards and reason items
    const messageCards = document.querySelectorAll('.message-card');
    const reasonItems = document.querySelectorAll('.reason-item');
    
    messageCards.forEach(card => observer.observe(card));
    reasonItems.forEach(item => observer.observe(item));

    // Smooth scrolling for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const firstSection = document.querySelector('.love-messages');
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Add sparkle effect on mouse move
    document.addEventListener('mousemove', createSparkle);
    
    function createSparkle(e) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        
        // Random sparkle character
        const sparkles = ['✨', '⭐', '💫', '🌟'];
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        
        document.body.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }

    // Heart click effect
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.addEventListener('click', function() {
            this.style.transform = 'scale(1.5)';
            this.style.transition = 'transform 0.3s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    });

    // Add typing effect to main title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }

    // Add pulse effect to reason numbers
    const reasonNumbers = document.querySelectorAll('.reason-number');
    reasonNumbers.forEach((number, index) => {
        setTimeout(() => {
            number.style.animation = 'pulse 2s infinite';
        }, index * 200);
    });

    // Create floating particles
    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        const particles = ['💖', '💕', '💗', '💓', '💝'];
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 5000);
    }

    // Create particles periodically
    setInterval(createFloatingParticle, 3000);
});

// Add CSS for sparkles and particles dynamically
const style = document.createElement('style');
style.textContent = `
    .sparkle {
        position: fixed;
        pointer-events: none;
        font-size: 1rem;
        animation: sparkleAnim 1s ease-out forwards;
        z-index: 1000;
    }
    
    @keyframes sparkleAnim {
        0% {
            opacity: 1;
            transform: translateY(0) scale(0);
        }
        50% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-40px) scale(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
    
    .floating-particle {
        position: fixed;
        font-size: 1.5rem;
        animation: floatUp 5s linear forwards;
        pointer-events: none;
        z-index: 1;
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10%, 90% {
            opacity: 0.7;
        }
        100% {
            transform: translateY(-10vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

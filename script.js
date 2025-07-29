// Meme website animations
document.addEventListener('DOMContentLoaded', function() {
    // Simple fade-in animation for all meme sections
    const memeContent = document.querySelector('.meme-content');
    const drakeSection = document.querySelector('.meme-header');
    
    if (drakeSection) {
        drakeSection.style.opacity = '0';
        drakeSection.style.transform = 'translateY(30px)';
        drakeSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            drakeSection.style.opacity = '1';
            drakeSection.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (memeContent) {
        memeContent.style.opacity = '0';
        memeContent.style.transform = 'translateY(20px)';
        memeContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            memeContent.style.opacity = '1';
            memeContent.style.transform = 'translateY(0)';
        }, 800);
    }

    // Add hover effects to meme boxes
    const memeBoxes = document.querySelectorAll('.distracted-boyfriend, .galaxy-brain, .this-is-fine, .expanding-brain-section, .wojak-section, .final-meme');
    memeBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click effects to emojis
    const emojis = document.querySelectorAll('.drake-face, .brain-img, .fire-dog, .meme-emoji, .wojak, .stonks');
    emojis.forEach(emoji => {
        emoji.addEventListener('click', function() {
            this.style.transform = 'scale(1.3)';
            this.style.transition = 'transform 0.2s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});

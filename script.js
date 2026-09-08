// Simple typing animation
document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.typing');
    const strings = [' Designer', ' Developer', ' Creator'];
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentString = strings[stringIndex];
        const displayText = currentString.substring(0, charIndex);
        element.textContent = displayText;
        
        if (!isDeleting && charIndex < currentString.length) {
            charIndex++;
            setTimeout(type, 200); // typeSpeed
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 150); // backSpeed
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                stringIndex = (stringIndex + 1) % strings.length;
            }
            setTimeout(type, 1600); // backDelay
        }
    }
    
    type();

    // Responsive nav toggle
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu-links');
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            menu.classList.toggle('active');
        });

        // Close menu when any link is clicked (useful on mobile)
        menu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
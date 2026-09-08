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

/* ===== LIGHTBOX MODAL FUNCTIONS ===== */

// Open lightbox modal with zoomed image and info
function openModal(galleryItem) {
    const modal = document.getElementById('lightboxModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    // Get image from gallery item
    const image = galleryItem.querySelector('img');
    const artInfo = galleryItem.querySelector('.art-info');
    
    // Populate modal with data
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalTitle.textContent = artInfo.getAttribute('data-title');
    modalDescription.textContent = artInfo.getAttribute('data-description');
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Close lightbox modal
function closeModal() {
    const modal = document.getElementById('lightboxModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
});
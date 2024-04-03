//Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navigationLinks = document.querySelectorAll('.navigation a');

    navigationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            const headerHeight = document.querySelector('.header').offsetHeight;

            if (target) {
                const targetPosition = target.getBoundingClientRect().top;
                const offsetPosition = targetPosition - headerHeight;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Form submission with alert message
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);

            // Replace the following line with your preferred method of form submission (e.g., AJAX request to a server)
            // For this example, we'll simply show an alert message with the form data
            let formValues = '';
            for (let pair of formData.entries()) {
                formValues += `${pair[0]}: ${pair[1]}\n`;
            }

            alert(`Thank you for your message!\n\nForm Data:\n${formValues}`);
            contactForm.reset();
        });
    }
});


function openGallery() {
    const gallery = document.getElementById('gallery');
    gallery.style.display = 'flex';
}

function closeGallery() {
    const gallery = document.getElementById('gallery');
    gallery.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const src = this.getAttribute('src');
            lightboxImage.setAttribute('src', src);
            lightbox.style.display = 'flex';
        });
    });
});
document.addEventListener('keydown', function(e) {
    if (lightbox.style.display === 'flex') {
        if (e.keyCode === 37) { // Left arrow key
            prevSlide();
        } else if (e.keyCode === 39) { // Right arrow key
            nextSlide();
        }
    }
});
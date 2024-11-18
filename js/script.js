document.querySelectorAll('#gallery img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease-in-out";
    });

    img.addEventListener('mouseleave', function() {
        this.style.transform = "scale(1)";
    });
});

// Open lightbox on image click
document.querySelectorAll('#gallery img').forEach(img => {
    img.addEventListener('click', function() {
        const imageUrl = this.src;
        document.getElementById('lightboxImage').src = imageUrl;
        const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
        modal.show();
    });
});




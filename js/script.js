document.querySelectorAll('#gallery img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease-in-out";
    });

    img.addEventListener('mouseleave', function() {
        this.style.transform = "scale(1)";
    });
});


window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const headings = document.querySelectorAll('h2, .card-title');
    
    console.log("Scrolling..."); // Перевірка, чи працює подія скролу

    cards.forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight) {
            card.classList.add('visible');
        }
    });

    headings.forEach(heading => {
        if (heading.getBoundingClientRect().top < window.innerHeight) {
            heading.classList.add('visible');
        }
    });
});

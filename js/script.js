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


// Set the target date for the countdown
const targetDate = new Date("Dec 25, 2024 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is finished
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Promotion Ended";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the timer right away
updateCountdown();


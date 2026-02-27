// Function to update the countdown timer
function updateCountdown() {
    const targetDate = new Date("March 27, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "The time has arrived!";
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Add scroll event to reveal sections
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');

    const inView = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const onScroll = () => {
        sections.forEach(section => {
            if (inView(section)) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();  // Check on initial load
});
 // Function to update the countdown
    function updateCountdown() {
        // Target date (March 27, 2026)
        const targetDate = new Date("March 27, 2026 00:00:00").getTime();

        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the difference between the target date and the current date
        const distance = targetDate - now;

        // Calculate days, hours, minutes, and seconds remaining
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById("countdown").innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown reaches zero, display a message
        if (distance < 0) {
            clearInterval(countdownInterval); // Stop the countdown
            document.getElementById("countdown").innerHTML = "The time has arrived!";
        }
    }

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
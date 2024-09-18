// Set the date for the event (Year, Month (0-11), Day, Hour, Minute, Second)
let eventDate = new Date("Sep 18, 2024 13:15:00").getTime();

// Function to update the countdown every second
let countdownTimer = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').textContent = "- REGISTRATION HAS ENDED - { You can no longer register }";
    } else {
        // Calculate days, hours, minutes, and seconds
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById('countdown').textContent = 
            days + "d " + 
            (hours < 10 ? "0" + hours : hours) + "h " +
            (minutes < 10 ? "0" + minutes : minutes) + "m " +
            (seconds < 10 ? "0" + seconds : seconds) + "s ";
    }
}, 1000);

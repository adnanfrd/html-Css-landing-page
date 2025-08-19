document.addEventListener('DOMContentLoaded', function () {
    // Countdown Timer
    let timerElement = document.getElementById("timer");
    let minutes = 4;
    let seconds = 59;

    function updateTimer() {
        if (seconds === 0) {
            if (minutes === 0) return;
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;
    }
    setInterval(updateTimer, 1000)});

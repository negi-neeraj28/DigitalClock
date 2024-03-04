function updateClock() {
    let now = new Date();
    // convert hour into string and use padstart so that atlease it has 2 digit 
    let hours = String(now.getHours()).padStart(2, '0'); // means hours ,min or seconds each will have atlease 2 digit
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
 
    // nth child means which number sibling is this in the span tag
    let hoursSpan = document.querySelector('.clock span:nth-child(1)');
    let minutesSpan = document.querySelector('.clock span:nth-child(3)');
    let secondsSpan = document.querySelector('.clock span:nth-child(5)');

    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
}

//calling update clock
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

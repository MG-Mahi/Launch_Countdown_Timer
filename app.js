// DOM Elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Count Down Function
function countDown() {
    const now = new Date();
    const eventDate = new Date("Sunday Aug 1 2021 00:59:59");
    let diff = eventDate - now;
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    // Calculation
    let countDays = Math.round(diff / days);
    let countHours = Math.round((diff % days) / hours);
    let countMinutes = Math.round((diff % hours) / minutes);
    let countSeconds = Math.round((diff % minutes) / seconds);

    // return `${countDays < 10 ? "0" + countDays : countDays}: ${countHours < 10 ? "0" + (countHours) : (countHours)} : ${countMinutes < 10 ? "0" + (countMinutes) : (countMinutes)} : ${countSeconds < 10 ? "0" + countSeconds : countSeconds}`;

    daysEl.innerHTML = `${countDays < 10 ? "0" + countDays : countDays}`;
    hoursEl.innerHTML = `${countHours < 10 ? "0" + (countHours) : (countHours)}`;
    minutesEl.innerHTML = `${countMinutes < 10 ? "0" + (countMinutes) : (countMinutes)}`;
    secondsEl.innerHTML = `${countSeconds < 10 ? "0" + countSeconds : countSeconds}`;
}

// console.log(countDown())
setInterval(countDown, 1000);
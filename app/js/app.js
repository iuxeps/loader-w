
const preloader = document.querySelector('#preloader');
let weekDay = document.querySelector('.calendar-week');
let calendarLogo = document.querySelector('.calendar-logo');
let calendarDay = document.querySelector('.calendar-day');
// let loadingText = document.querySelector('.loading');
let secWrap = document.querySelector('.numbers');
let secspan = document.querySelector('.numbers span');
let secspans = document.querySelectorAll('.num');


let sec = 1;
const secspanHeight = secspan.clientHeight;

secspans.forEach((el, i) => {
    setTimeout(() => {

        el.classList.add('active');
        secWrap.style.transform = `translateY(-${secspanHeight * i}px)`;

    }, (i + 1) * 1000)
})



setTimeout(calendarLogo.classList.add('active'), 1000);

// Get Time
const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
const d = new Date();
let day = weekday[d.getDay()];
weekDay.innerHTML = day;

let currentDay = d.getDate();

if (currentDay <= 9) {
    let exactDay = '0' + currentDay
    calendarDay.innerHTML = exactDay;
} else {
    calendarDay.innerHTML = currentDay;
}

function digitalClock() {
    var timeHTML = document.getElementById('time-js');

    var d = new Date();
    var date = d.getDate();
    date = addZero(date);
    var hours = d.getHours();
    hours = addZero(hours);
    var minutes = d.getMinutes();
    minutes = addZero(minutes);
    var seconds = d.getSeconds();
    seconds = addZero(seconds);
    // timeHTML.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
    timeHTML.innerHTML = hours + ' : ' + minutes;
}

function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

// setInterval(digitalClock, 1000); //каждый 1 сек
setInterval(digitalClock, 10000); //каждый 10 сек

// End Time






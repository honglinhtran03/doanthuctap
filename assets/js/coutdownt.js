let endDate = new Date("07/12/2023 20:03:12").getTime();
let check = setInterval(function() {
    let now = new Date().getTime();
    let distance = endDate - now;
    let day = Math.floor(distance / (24 * 60 * 60 * 1000));
    let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((distance % (60 * 1000)) / 1000);
    if (minute < 10) {
        minute = "0" + minute

    }
    if (seconds < 10) {

        seconds = "0" + seconds
    }
    document.getElementById('day').innerText = day;
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('seconds').innerText = seconds;
    if (distance <= 0) {
        clearInterval(check);
    }
}, 1000);
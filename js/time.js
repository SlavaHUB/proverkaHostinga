function currentTime() {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    // console.log(hour, minute, second);
    hour = plustZero(hour);
    minute = plustZero(minute);
    second = plustZero(second);
    document.getElementById('time').innerHTML = hour + ':' + minute + ':' + second;
    setTimeout(currentTime, 1000);
}

function plustZero(number) {
    if (number < 10) {
        return '0' + number;
    }
    else return number;
}

currentTime();
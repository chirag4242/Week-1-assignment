function getCurrentTime(callback) {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = String(hours % 12 || 12).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    const fullTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    callback(fullTime);
}

function displayTimeEverySecond() {
    setInterval(() => {
        getCurrentTime((currentTime) => {
            console.clear();
            console.log(currentTime);
        })
    }, 1000)
}

displayTimeEverySecond();

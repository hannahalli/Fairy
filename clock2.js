let isSecondHandHidden = false;

setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

    if (min % 10 === 0 && sec === 45) {
            second.style.display = 'none';
            setTimeout(() => {
                second.style.display = 'block';
            }, 60000);
        }
    }, 1000);
function timePlus15Minutes(hours, minutes) {

    let totalMinutes = hours * 60 + minutes + 15;
    let newHours = Math.floor(totalMinutes / 60) % 24;
    let newMinutes = totalMinutes % 60;

    if (newMinutes < 10) {

        console.log(`${newHours}:0${newMinutes}`);

    } else {

        console.log(`${newHours}:${newMinutes}`);

    }
}
timePlus15Minutes(1, 46);
timePlus15Minutes(0, 1);
timePlus15Minutes(23, 59);
timePlus15Minutes(11, 8);
timePlus15Minutes(12, 49);
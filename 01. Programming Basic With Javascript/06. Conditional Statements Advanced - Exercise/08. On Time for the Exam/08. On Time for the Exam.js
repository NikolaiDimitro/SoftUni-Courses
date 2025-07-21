function onTimeForTheExam(hourToExam, minutesToExam, hourToArrival, minutesToArrival) {

    let totalTimeToExam = hourToExam * 60 + minutesToExam;
    let totalTimeToArrival = hourToArrival * 60 + minutesToArrival;
    let different = Math.abs(totalTimeToExam - totalTimeToArrival);
    let hourToDifferent = Math.floor(different / 60);
    let minutesToDifferent = different % 60;

    if (totalTimeToExam === totalTimeToArrival) {

        console.log('On time');

    } else if (totalTimeToArrival > totalTimeToExam) {

        console.log('Late');

        if (different < 60) {

            console.log(`${different} minutes after the start`);

        } else {

            if (minutesToDifferent < 10) {

                console.log(`${hourToDifferent}:0${minutesToDifferent} hours after the start`);

            } else {

                console.log(`${hourToDifferent}:${minutesToDifferent} hours after the start`);

            }

        }

    } else if (totalTimeToExam > totalTimeToArrival) {

        if (different <= 30) {

            console.log('On time');
            console.log(`${minutesToDifferent} minutes before the start`);

        } else {

            console.log('Early');

            if (different < 60) {

                console.log(`${minutesToDifferent} minutes before the start`);

            } else {

                if (minutesToDifferent < 10) {

                    console.log(`${hourToDifferent}:0${minutesToDifferent} hours before the start`);

                } else {

                    console.log(`${hourToDifferent}:${minutesToDifferent} hours before the start`);

                }
            }
        }
    }
}
onTimeForTheExam(9, 30, 9, 50);
onTimeForTheExam(9, 0, 10, 30);
onTimeForTheExam(10, 0, 10, 0);
onTimeForTheExam(9, 0, 8, 30);
onTimeForTheExam(14, 0, 13, 55);
onTimeForTheExam(11, 30, 10, 55);
onTimeForTheExam(16, 0, 15, 0);
onTimeForTheExam(11, 30, 8, 12);
onTimeForTheExam(11, 30, 12, 29);
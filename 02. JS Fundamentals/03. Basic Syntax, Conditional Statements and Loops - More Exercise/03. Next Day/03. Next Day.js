function nextDay(year, month, day) {

    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

}
nextDay(2016, 9, 30);
nextDay(2020, 3, 24);



// function nextDay(year, month, day) {
//     if (month === 1) {
//         day += 1;
//         if (day > 31) {
//             day = 1;
//             month += 1;
//         }
//     } else if (month === 2) {
//         day += 1
//         if (day > 29) {
//             day = 1;
//             month += 1;
//         }
//     } else if (month === 3) {
//         day += 1
//         if (day > 31) {
//             day = 1;
//             month += 1;
//         }
//     } else if (month === 4) {
//         day += 1
//         if (day > 30) {
//             day = 1;
//             month += 1;
//         }
//     } else if (month === 5) {
//         day += 1
//         if (day > 31) {
//             day = 1;
//             month += 1;
//         }
//     } else if (month === 6) {
//         day += 1
//         if (day > 30) {
//             day = 1;
//             month += 1;
//         }
//     } else if (month === 7) {
//         day += 1
//         if (day > 31) {
//             day = 1;
//             month += 1;
//         }
//     } else if (month === 8) {
//         day += 1
//         if (day > 31) {
//             day = 1;
//             month += 1;
//         }
//     } else if (month === 9) {
//         day += 1
//         if (day > 30) {
//             day = 1;
//             month += 1;
//         }
//     } else if (month === 10) {
//         day += 1
//         if (day > 31) {
//             day = 1;
//             month += 1;
//         }
//     } else if (month === 11) {
//         day += 1
//         if (day > 30) {
//             day = 1;
//             month += 1;
//         }
//     } else if (month === 12) {
//         day += 1
//         if (day > 31) {
//             day = 1;
//             month = 1;
//             year += 1;
//         }
//     }
//     if (year === 1){
//         year += 1900;
//     }
//     console.log(`${year}-${month}-${day}`);
// }
// nextDay(2016, 9, 30);
// nextDay(2020, 3, 24);
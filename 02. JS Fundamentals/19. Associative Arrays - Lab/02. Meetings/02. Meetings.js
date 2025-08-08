function meetings(arr) {

    let obj = {};

    for (let i of arr) {

        let [dayOfWeek, name] = i.split(' ');

        if (!obj.hasOwnProperty(dayOfWeek)) {

            obj[dayOfWeek] = name;
            console.log(`Scheduled for ${dayOfWeek}`);

        } else {

            console.log(`Conflict on ${dayOfWeek}!`);

        }
    }

    let entries = Object.entries(obj);

    for (let i in entries) {

        let [key, value] = entries[i];
        console.log(`${key} -> ${value}`);

    }
}
meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
meetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']);
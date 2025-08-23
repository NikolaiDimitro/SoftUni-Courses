function worldTour(arr) {
    
    let stops = arr[0];
    let index = 1;

    while (arr[index] !== 'Travel') {

        let current = arr[index];

        if (current.includes('Add Stop')) {

            let [command, idx, string] = current.split(':');
            idx = Number(idx);

            if (idx >= 0 && idx <= stops.length) {

                let first = stops.substring(0, idx);
                let second = stops.substring(idx);
                stops = first + string + second;

            }

            console.log(stops);

        } else if (current.includes('Remove Stop')) {

            let [command, startIndex, endIndex] = current.split(':');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);

            if (startIndex >= 0 && endIndex < stops.length && startIndex <= endIndex) {

                let first = stops.substring(0, startIndex);
                let second = stops.substring(endIndex + 1);
                stops = first + second;
            }

            console.log(stops);

        } else if (current.includes('Switch')) {

            let [command, oldString, newString] = current.split(':');

            if (stops.includes(oldString)) {

                stops = stops.split(oldString).join(newString);

            }

            console.log(stops);

        }

        index++;

    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);

}
// worldTour(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"]);
worldTour(["Albania:Bulgaria:Cyprus:Deuchland", "Add Stop:3:Nigeria", "Remove Stop:4:8", "Switch:Albania: Azərbaycan", "Travel"]);
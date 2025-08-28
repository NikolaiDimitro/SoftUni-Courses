function inventory(arr) {

    let collection = arr.shift().split(', ');
    let index = 0;

    while (arr[index] !== 'Craft!') {

        let current = arr[index];

        if (current.includes('Collect')) {

            let [command, item] = current.split(' - ');

            if (!collection.includes(item)) {

                collection.push(item);

            }

        } else if (current.includes('Drop')) {

            let [command, item] = current.split(' - ');

            if (collection.includes(item)) {

                let itemIndex = collection.indexOf(item);
                collection.splice(itemIndex, 1);

            }

        } else if (current.includes('Combine Items')) {

            let [command, items] = current.split(' - ');
            let [oldItem, newItem] = items.split(':')

            if (collection.includes(oldItem)) {

                let itemIndex = collection.indexOf(oldItem);
                collection.splice(itemIndex + 1, 0, newItem);

            }

        } else {

            let [command, item] = current.split(' - ');

            if (collection.includes(item)) {

                let itemIndex = collection.indexOf(item);
                collection.splice(itemIndex, 1);
                collection.push(item);

            }
        }

        index++;

    }

    console.log(collection.join(', '));

}
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);
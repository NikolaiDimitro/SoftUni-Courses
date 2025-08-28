function shoppingList(arr) {

    let shoppingList = arr.shift().split('!');
    let index = 0;

    while (arr[index] !== 'Go Shopping!') {

        let current = arr[index];

        if (current.includes('Urgent')) {

            let [command, item] = current.split(' ');

            if (!shoppingList.includes(item)) {

                shoppingList.unshift(item);

            }

        } else if (current.includes('Unnecessary')) {

            let [command, item] = current.split(' ');

            if (shoppingList.includes(item)) {

                let itemIndex = shoppingList.indexOf(item);
                shoppingList.splice(itemIndex, 1);

            }

        } else if (current.includes('Correct')) {

            let [command, oldItem, newItem] = current.split(' ');

            if (shoppingList.includes(oldItem)) {

                let oldItemIndex = shoppingList.indexOf(oldItem);
                shoppingList[oldItemIndex] = newItem;

            }

        } else if (current.includes('Rearrange')) {

            let [command, item] = current.split(' ');

            if (shoppingList.includes(item)) {

                let itemIndex = shoppingList.indexOf(item);
                shoppingList.splice(itemIndex, 1);
                shoppingList.push(item);

            }
        }

        index++

    }

    console.log(shoppingList.join(', '));

}
shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]);
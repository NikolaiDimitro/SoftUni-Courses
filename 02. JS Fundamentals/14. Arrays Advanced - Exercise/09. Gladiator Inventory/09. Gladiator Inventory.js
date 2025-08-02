function gladiatorInventory(arr) {

    let equipments = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i].split(' ');
        let command = current[0];
        let equipment = current[1];

        if (command === 'Buy') {

            if (!equipments.includes(equipment)) {

                equipments.push(equipment);

            }

        } else if (command === 'Trash') {

            if (equipments.includes(equipment)) {

                let index = equipments.indexOf(equipment);
                equipments.splice(index, 1);

            }

        } else if (command === 'Repair') {

            if (equipments.includes(equipment)) {

                let index = equipments.indexOf(equipment);
                let repairEquipment = equipments.splice(index, 1).join('');
                equipments.push(repairEquipment);

            }

        } else {

            let splitEquipmnent = equipment.split('-');
            let upgrade = splitEquipmnent[1];

            if (equipments.includes(splitEquipmnent[0])) {

                let index = equipments.indexOf(splitEquipmnent[0]);
                equipments.splice(index + 1, 0, `${splitEquipmnent[0]}:${upgrade}`);

            }
        }
    }

    console.log(equipments.join(' '));

}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);
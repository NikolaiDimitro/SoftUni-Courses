function legendaryFarming(str) {

    let arr = str.split(` `);
    let keyMaterialsQtys = { shards: 0, fragments: 0, motes: 0 };
    let jungMaterialQtys = {};
    let legentaries = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' };

    for (let i = 0; i < arr.length; i += 2) {

        let qty = Number(arr[i]);
        let material = arr[i + 1].toLowerCase();

        if (material in keyMaterialsQtys) {

            keyMaterialsQtys[material] += qty;

            if (keyMaterialsQtys[material] >= 250) {

                let legendary = legentaries[material];
                console.log(`${legendary} obtained!`);
                keyMaterialsQtys[material] -= 250;
                break;

            }

        } else {

            if (material in jungMaterialQtys) {

                jungMaterialQtys[material] += qty;

            } else {

                jungMaterialQtys[material] = qty;

            }
        }
    }

    let keyMaterialEntries = Object.entries(keyMaterialsQtys).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let jungMaterialEntries = Object.entries(jungMaterialQtys).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [keyMaterial, qty] of keyMaterialEntries) {

        console.log(`${keyMaterial}: ${qty}`);

    }

    for (let [junkMaterial, qty] of jungMaterialEntries) {

        console.log(`${junkMaterial}: ${qty}`);

    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
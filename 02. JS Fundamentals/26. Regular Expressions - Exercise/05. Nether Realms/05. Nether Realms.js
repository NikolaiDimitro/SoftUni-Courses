function netherRealms(input) {

    let demons = input.split(/,\s*/).map(el => el.trim());
    let object = {};

    for (let demon of demons) {

        if (demon.length === 0) continue;

        let health = 0;
        let healthChars = demon.match(/[^0-9+\-*/.]/g);

        if (healthChars) {

            healthChars.forEach(char => { health += char.charCodeAt(0); });

        }

        let damage = 0;
        let damageNumbers = demon.match(/[+-]?\d+(\.\d+)?/g);

        if (damageNumbers) {

            damageNumbers.forEach(num => { damage += Number(num); });

        }

        let actions = demon.match(/[*\/]/g);

        if (actions) {

            actions.forEach(symbol => {
                if (symbol === '*') {

                    damage *= 2;

                } else {

                    damage /= 2;

                }
            });

        }

        object[demon] = { health: health, damage: damage };

    }

    let sorted = Object.entries(object).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, stats] of sorted) {

        console.log(`${name} - ${stats.health} health, ${stats.damage.toFixed(2)} damage`);

    }
}
netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
netherRealms('Gos/ho');
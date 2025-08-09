function arenaTier(arr) {

    let gladiators = new Map();

    for (let line of arr) {

        if (line === "Ave Cesar") {

            break;

        }

        if (line.includes("->")) {

            let [gladiator, technique, skill] = line.split(" -> ").map(x => x.trim());
            skill = Number(skill);

            if (!gladiators.has(gladiator)) {

                gladiators.set(gladiator, new Map());

            }

            let techniques = gladiators.get(gladiator);

            if (!techniques.has(technique) || techniques.get(technique) < skill) {

                techniques.set(technique, skill);

            }

        } else if (line.includes("vs")) {

            let [gladiator1, gladiator2] = line.split(" vs ").map(x => x.trim());

            if (gladiators.has(gladiator1) && gladiators.has(gladiator2)) {

                let techniques1 = gladiators.get(gladiator1);
                let techniques2 = gladiators.get(gladiator2);

                let commonTechniques = [...techniques1.keys()].filter(t => techniques2.has(t));

                if (commonTechniques.length > 0) {

                    let total1 = 0;
                    let total2 = 0;

                    for (let t of commonTechniques) {

                        total1 += techniques1.get(t);
                        total2 += techniques2.get(t);

                    }


                    if (total1 > total2) {

                        gladiators.delete(gladiator2);

                    } else if (total2 > total1) {

                        gladiators.delete(gladiator1);

                    }

                }
            }
        }
    }

    let sortedGladiators = Array.from(gladiators.entries()).sort((a, b) => {

        let totalA = Array.from(a[1].values()).reduce((x, y) => x + y, 0);
        let totalB = Array.from(b[1].values()).reduce((x, y) => x + y, 0);

        if (totalB !== totalA) {

            return totalB - totalA;

        }

        return a[0].localeCompare(b[0]);

    });

    for (let [gladiator, techniques] of sortedGladiators) {

        let totalSkill = Array.from(techniques.values()).reduce((x, y) => x + y, 0);
        console.log(`${gladiator}: ${totalSkill} skill`);

        let sortedTechniques = Array.from(techniques.entries()).sort((a, b) => {

            if (b[1] !== a[1]) {

                return b[1] - a[1];

            }

            return a[0].localeCompare(b[0]);

        });

        for (let [tech, skill] of sortedTechniques) {

            console.log(`- ${tech} <!> ${skill}`);

        }
    }
}
arenaTier(['Peter -> BattleCry -> 400', 'Alex -> PowerPunch -> 300', 'Stefan -> Duck -> 200', 'Stefan -> Tiger -> 250', 'Ave Cesar']);
arenaTier(['Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar']);
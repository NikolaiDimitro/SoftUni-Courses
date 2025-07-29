function radioCrystals(arr) {

    let thickness = arr[0];
    let countCut = 0;
    let countLap = 0;
    let countGrind = 0;
    let countEtch = 0;
    let countXRay = 0;

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i];

        while (current !== thickness) {

            while (current / 4 >= thickness) {

                if (current / 4 >= thickness) {

                    current = cut(current);
                    countCut++;

                }
            }

            if (countCut > 0) {

                current = transportingAndwashing(current);

            }

            while (current * 0.8 >= thickness) {

                if (current * 0.8 >= thickness) {

                    current = lap(current);
                    countLap++;

                }
            }

            if (countLap > 0) {

                current = transportingAndwashing(current);

            }

            while (current - 20 >= thickness) {

                if (current - 20 >= thickness) {

                    current = grind(current);
                    countGrind++;

                }
            }

            if (countGrind > 0) {

                current = transportingAndwashing(current);

            }

            while (current - 2 >= thickness) {

                if (current - 2 >= thickness) {

                    current = etch(current);
                    countEtch++;

                }
            }

            if (countEtch > 0) {

                current = transportingAndwashing(current);

            }

            if (current < thickness && current + 1 === thickness) {

                current = xRay(current);
                countXRay++;

            }
        }

        if (countXRay > 0) {

            current = transportingAndwashing(current);

        }

        console.log(`Processing chunk ${arr[i]} microns`);

        if (countCut > 0) {

            console.log(`Cut x${countCut}`);
            console.log('Transporting and washing');

        }

        if (countLap > 0) {

            console.log(`Lap x${countLap}`);
            console.log('Transporting and washing');

        }

        if (countGrind > 0) {

            console.log(`Grind x${countGrind}`);
            console.log('Transporting and washing');

        }

        if (countEtch > 0) {

            console.log(`Etch x${countEtch}`);
            console.log('Transporting and washing');

        }

        if (countXRay > 0) {

            console.log('X-ray x1');

        }

        console.log(`Finished crystal ${current} microns`);
        countCut = 0;
        countLap = 0;
        countGrind = 0;
        countEtch = 0
        countXRay = 0;

    }

    function cut(fragment) {

        return fragment /= 4;

    }

    function lap(fragment) {

        return fragment *= 0.8;

    }

    function grind(fragment) {

        return fragment -= 20;

    }

    function etch(fragment) {

        return fragment -= 2;

    }

    function xRay(fragment) {

        return fragment += 1;

    }

    function transportingAndwashing(fragment) {

        return fragment = Math.floor(fragment);

    }
}
radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);
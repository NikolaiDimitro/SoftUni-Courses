function summerOutfit(degrees, partOfDay) {

    let outFit = '';
    let shoes = '';

    switch (partOfDay) {

        case 'Morning':

            if (degrees >= 10 && degrees <= 18) {

                outFit = 'Sweatshirt';
                shoes = 'Sneakers';
                console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);

            } else if (degrees > 18 && degrees <= 24) {

                outFit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);

            } else if (degrees >= 25) {

                outFit = 'T-Shirt';
                shoes = 'Sandals';
                console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);

            }

            break;

        case 'Afternoon':

            if (degrees >= 10 && degrees <= 18) {

                outFit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);

            } else if (degrees > 18 && degrees <= 24) {

                outFit = 'T-Shirt';
                shoes = 'Sandals';
                console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);

            } else if (degrees >= 25) {

                outFit = 'Swim Suit';
                shoes = 'Barefoot';
                console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);

            }

            break;

        case 'Evening':

            if (degrees >= 10 && degrees <= 18) {

                outFit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);

            } else if (degrees > 18 && degrees <= 24) {

                outFit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);

            } else if (degrees >= 25) {

                outFit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);

            }

            break;

    }
}
summerOutfit(16, "Morning");
summerOutfit(22, "Afternoon");
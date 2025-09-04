function cookingByNumbers(numb, first, second, third, fourth, fifth) {

    numb = Number(numb);
    let arr = [first, second, third, fourth, fifth];

    for (let action of arr) {

        if (action === 'chop') {

            numb /= 2;

        } else if (action === 'dice') {

            numb = Math.sqrt(numb);

        } else if (action === 'spice') {

            numb += 1;

        } else if (action === 'bake') {

            numb *= 3;

        } else if (action === 'fillet') {

            numb = numb * 0.8;
            numb = Math.round(numb * 100) / 100;

        }

        console.log(numb);

    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
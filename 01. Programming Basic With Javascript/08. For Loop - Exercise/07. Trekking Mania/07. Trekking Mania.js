function trekkingMania(arr) {

    let totalPeople = 0;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let i = 1; i <= arr.length - 1; i++) {

        let numb = Number(arr[i]);
        totalPeople += numb;

        if (numb <= 5) {

            count1 += numb

        } else if (numb <= 12) {

            count2 += numb;

        } else if (numb <= 25) {

            count3 += numb;

        } else if (numb <= 40) {

            count4 += numb;

        } else if (numb > 40) {

            count5 += numb;

        }
    }

    console.log(`${((count1 / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((count2 / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((count3 / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((count4 / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((count5 / totalPeople) * 100).toFixed(2)}%`);

}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);
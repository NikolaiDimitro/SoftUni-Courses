function histogram(arr) {

    let numb = 0;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let i = 1; i <= arr.length - 1; i++) {

        numb = arr[0];

        if (arr[i] < 200) {

            count1 += 1;

        } else if (arr[i] < 400) {

            count2 += 1;

        } else if (arr[i] < 600) {

            count3 += 1;

        } else if (arr[i] < 800) {

            count4 += 1;

        } else {

            count5 += 1;

        }
    }

    console.log(`${((count1 / numb) * 100).toFixed(2)}%`);
    console.log(`${((count2 / numb) * 100).toFixed(2)}%`);
    console.log(`${((count3 / numb) * 100).toFixed(2)}%`);
    console.log(`${((count4 / numb) * 100).toFixed(2)}%`);
    console.log(`${((count5 / numb) * 100).toFixed(2)}%`);

}
histogram([3, 1, 2, 999]);
histogram([7, 800, 801, 250, 199, 399, 599, 799]);
histogram([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);
histogram(([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]));
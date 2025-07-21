function twoKPlus1(n) {

    let total = 1;
    let index = 0;

    while (total <= n) {

        console.log(total);
        total = total * 2 + 1;

        index++;

    }
}
twoKPlus1(3);
twoKPlus1(8);
twoKPlus1(17);
twoKPlus1(31);
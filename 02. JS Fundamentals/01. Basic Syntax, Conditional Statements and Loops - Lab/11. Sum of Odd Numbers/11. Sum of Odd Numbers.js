function sumOfOddNumbers(numb) {

    let index = 1;
    let count = 0;
    let sum = 0;

    while (index < 100) {

        if (index % 2 === 1) {

            count++;
            sum += index;
            console.log(index);

        }

        if (count === numb) {

            console.log(`Sum: ${sum}`);
            break;

        }

        index++;

    }
}
sumOfOddNumbers(5);
sumOfOddNumbers(3);
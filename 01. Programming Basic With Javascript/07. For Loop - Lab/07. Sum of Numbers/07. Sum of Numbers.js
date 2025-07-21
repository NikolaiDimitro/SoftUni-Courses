function sumOfNumbers(numb) {

    let result = 0;

    for (let i = 0; i < numb.length; i++) {

        result += Number(numb[i]);

    }

    console.log(`The sum of the digits is:${result}`);

}
sumOfNumbers("1234");
sumOfNumbers("564891");
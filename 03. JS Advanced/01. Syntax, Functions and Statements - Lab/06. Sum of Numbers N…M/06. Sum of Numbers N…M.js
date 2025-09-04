function sumOfNtoM(first, second) {

    let result = 0;

    for (let i = Number(first); i <= second; i++) {

        result += i;

    }

    return result;

}
sumOfNtoM('1', '5');
sumOfNtoM('-8', '20');
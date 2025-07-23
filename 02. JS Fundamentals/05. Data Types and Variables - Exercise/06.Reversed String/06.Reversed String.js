function reversedString(str) {

    let print = '';

    for (let i = str.length - 1; i >= 0; i--) {

        print += str[i];

    }

    console.log(print);

}
reversedString('Information');
reversedString('star');
reversedString('racecar');
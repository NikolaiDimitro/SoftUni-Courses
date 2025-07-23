function reverseString(str) {

    let print = '';

    for (let i = str.length - 1; i >= 0; i--) {

        print += str[i];

    }

    console.log(print);

}
reverseString('Hello');
reverseString('SoftUni');
reverseString('1234');
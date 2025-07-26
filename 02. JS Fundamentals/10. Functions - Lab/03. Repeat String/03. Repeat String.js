function repeatString(str, numb) {

    let print = '';

    for (let i = 1; i <= numb; i++) {

        print += str;

    }

    console.log(print);


}
repeatString("abc", 3);
repeatString("String", 2);



// function repeatString(str, numb) {

//     console.log(str.repeat(numb));

// }
// repeatString("abc", 3);
// repeatString("String", 2);
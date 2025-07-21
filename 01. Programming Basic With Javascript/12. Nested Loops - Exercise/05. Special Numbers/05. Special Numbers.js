function specialNumbers(n) {

    let print = '';
    let result = '';

    for (let i = 1111; i <= 9999; i++) {

        let isDivide = true;
        print += i;

        for (let j = 0; j < print.length; j++) {

            let numb = Number(print[j]);

            if (n % numb !== 0) {

                isDivide = false;
                break;

            } else {

                continue;

            }
        }
        
        print = '';

        if (isDivide) {

            result += i + ' ';
            print = '';
            
        }
    }

    console.log(result);

}
specialNumbers(3);
// specialNumbers(11);
// specialNumbers(16);
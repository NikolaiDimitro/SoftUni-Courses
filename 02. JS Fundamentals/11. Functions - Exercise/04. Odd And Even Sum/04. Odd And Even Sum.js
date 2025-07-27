function oddAndEvenSum(n) {

    let numb = n.toString();

    addNumberInArr(numb);

    function addNumberInArr(numb) {

        let arr = [];

        for (let i = 0; i < numb.length; i++) {

            let current = numb[i];
            arr.push(current);

        }

        sumEventAndOddNumbers(arr);

    }

    function sumEventAndOddNumbers(arr) {

        let sumEvent = 0
        let sumOod = 0;

        for (let i = 0; i < arr.length; i++) {

            let current = Number(arr[i]);

            if (current % 2 === 0) {

                sumEvent += current;

            } else {

                sumOod += current;

            }
        }

        console.log(`Odd sum = ${sumOod}, Even sum = ${sumEvent}`);

    }
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
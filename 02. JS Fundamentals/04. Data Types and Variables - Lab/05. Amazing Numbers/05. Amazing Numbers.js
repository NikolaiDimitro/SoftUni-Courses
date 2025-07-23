function amazingNumbers(numb) {

    numb = numb.toString();
    let sum = 0;

    for (let i = 0; i < numb.length; i++) {

        sum += Number(numb[i]);

    }

    let result = sum.toString().includes('9');
    console.log(result ? `${numb} Amazing? True` : `${numb} Amazing? False`);

}
amazingNumbers(1233);
amazingNumbers(999);
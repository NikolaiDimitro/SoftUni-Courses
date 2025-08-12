function cutAndReverse(str) {

    let length = str.length;
    let arr = [];

    for (let i = 0; i < length / 2; i++) {

        let curreent = str[i];
        arr.push(curreent);

    }

    arr = arr.reverse().join('');
    console.log(arr);
    arr = [];

    for (let i = length / 2; i < str.length; i++) {

        let curreent = str[i];
        arr.push(curreent);

    }

    arr = arr.reverse().join('');
    console.log(arr);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
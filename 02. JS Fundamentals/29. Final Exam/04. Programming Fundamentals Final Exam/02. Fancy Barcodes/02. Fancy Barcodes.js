function fancyBarcode(arr) {

    let n = Number(arr.shift());
    let pattern = /@([#]+)(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    let patternFormNumber = /[0-9]/;

    for (let i = 0; i < n; i++) {

        let current = arr[i];
        let exec = pattern.exec(current);

        if (exec !== null) {

            let sum = '';

            for (let letter of exec.groups.product) {

                if (letter.match(patternFormNumber)) {

                    sum += letter.match(patternFormNumber)[0];

                }
            }

            if (sum === '') {

                sum = '00';

            }

            console.log(`Product group: ${sum}`);

        } else {

            console.log('Invalid barcode');

        }
    }
}
fancyBarcode(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
fancyBarcode(["6", "@###Val1d1teM@###", "@#ValidIteM@#", "##InvaliDiteM##", "@InvalidIteM@", "@#Invalid_IteM@#", "@#ValiditeM@#"]);
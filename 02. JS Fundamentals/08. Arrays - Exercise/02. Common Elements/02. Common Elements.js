function commonElements(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {

        let current = arr1[i];

        for (let j = 0; j < arr2.length; j++) {

            let currentFromArr2 = arr2[j];

            if (current === currentFromArr2) {

                console.log(current);

            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);
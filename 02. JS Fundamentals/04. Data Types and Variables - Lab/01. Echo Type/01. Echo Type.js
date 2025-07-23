function echoType(typeData) {

    if (typeof typeData === 'string') {

        console.log(typeof typeData);
        console.log(typeData);

    } else if (typeof typeData === 'number') {

        console.log(typeof typeData);
        console.log(typeData);

    } else {

        console.log(typeof typeData);
        console.log('Parameter is not suitable for printing');

    }
}
echoType('Hello, JavaScript!');
echoType(18);
echoType(null);
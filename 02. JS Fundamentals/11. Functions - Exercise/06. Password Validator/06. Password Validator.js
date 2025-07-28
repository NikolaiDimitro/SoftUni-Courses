function passwordValidator(str) {

    let isLengthValid = checkLength(str);
    let isLettersAndDigits = checkLettersAndDigits(str);
    let hasEnoughDigits = checkDigitsCount(str);

    if (isLengthValid && isLettersAndDigits && hasEnoughDigits) {

        console.log('Password is valid');

    }

    function checkLength(str) {

        if (str.length < 6 || str.length > 10) {

            console.log('Password must be between 6 and 10 characters');
            return false;

        }

        return true;

    }

    function checkLettersAndDigits(str) {

        for (let char of str) {

            let code = char.charCodeAt();
            let isDigit = code >= 48 && code <= 57;
            let isUpper = code >= 65 && code <= 90;
            let isLower = code >= 97 && code <= 122;

            if (!isDigit && !isUpper && !isLower) {

                console.log('Password must consist only of letters and digits');
                return false;

            }
        }

        return true;

    }

    function checkDigitsCount(str) {

        let count = 0;

        for (let char of str) {

            let code = char.charCodeAt();

            if (code >= 48 && code <= 57) {

                count++;

            }
        }

        if (count < 2) {

            console.log('Password must have at least 2 digits');
            return false;

        }

        return true;

    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
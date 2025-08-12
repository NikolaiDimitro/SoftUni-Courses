function modernTimesOfHshTag(str) {

    let text = str.split(' ');
    
    for (let word of text) {
        
        let isValud = true;
        let result = '';

        if (word.startsWith('#') && word.length > 1) {

            for (let letter of word) {

                if (letter === '#') {

                    continue;

                }

                if (letter >= 'A' && letter <= 'Z' || letter >= 'a' && letter <= 'z') {

                    result += letter;

                } else {

                    isValud = false;
                    break;

                }
            }

            if (isValud) {

                console.log(result);
                result = '';

            }
        }
    }
}
modernTimesOfHshTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHshTag('The symbol # is known #variously in English-speaking #regions as the #number sign');
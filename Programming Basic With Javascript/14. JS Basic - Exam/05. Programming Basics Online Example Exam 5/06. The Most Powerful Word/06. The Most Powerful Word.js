function mostPowerfulWord(arr) {

    let index = 0;
    let sum = 0;
    let maxNumber = 0;
    let winner = '';
    let isVowel = false;
    let formatedSum = 0;

    while (arr[index] !== 'End of words') {

        let current = arr[index];
        let lengthOfCurrentWord = current.length;

        for (let i = 0; i < lengthOfCurrentWord; i++) {

            let currentLetter = current[i];
            let numberOfLetter = currentLetter.charCodeAt();

            if (i === 0) {

                if (numberOfLetter === 65 || numberOfLetter === 69 || numberOfLetter === 73 || numberOfLetter === 85 || numberOfLetter === 89 || numberOfLetter === 97 || numberOfLetter === 101 || numberOfLetter === 105 || numberOfLetter === 111 || numberOfLetter === 117 || numberOfLetter === 121) {

                    isVowel = true;

                }

            }

            sum += numberOfLetter;

        }

        if (isVowel) {

            formatedSum = Math.floor(sum * lengthOfCurrentWord);
            isVowel = false;

        } else {

            formatedSum = Math.floor(sum / lengthOfCurrentWord);
            isVowel = false;

        }

        if (maxNumber < formatedSum) {

            maxNumber = formatedSum;
            winner = current;

        }

        sum = 0;
        index++;

    }

    console.log(`The most powerful word is ${winner} - ${maxNumber}`);

}
mostPowerfulWord(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"]);
mostPowerfulWord(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);
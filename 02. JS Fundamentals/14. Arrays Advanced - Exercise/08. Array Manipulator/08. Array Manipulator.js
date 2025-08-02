function arrayManipulator(arrNumber, arrCommand) {

    let index = 0;

    while (arrCommand[index] !== 'print') {

        let currentCommand = arrCommand[index].split(' ');
        let command = currentCommand[0];

        if (command === 'add') {

            let currentCommandIndex = Number(currentCommand[1]);
            let currentCommandElement = Number(currentCommand[2]);
            arrNumber.splice(currentCommandIndex, 0, currentCommandElement);

        } else if (command === 'addMany') {

            let count = 0;

            for (let i = 2; i < currentCommand.length; i++) {

                let currentCommandIndex = Number(currentCommand[1]);
                let currentCommandElement = Number(currentCommand[i]);
                arrNumber.splice(currentCommandIndex + count, 0, currentCommandElement);
                count++;

            }

        } else if (command === 'contains') {

            let currentCommandElement = Number(currentCommand[1]);
            console.log(arrNumber.indexOf(currentCommandElement));

        } else if (command === 'remove') {

            let currentCommandIndex = Number(currentCommand[1]);
            arrNumber.splice(currentCommandIndex, 1);

        } else if (command === 'shift') {

            let currentPossition = Number(currentCommand[1]);

            for (let i = 0; i < currentPossition; i++) {

                let firstPossition = arrNumber.shift();
                arrNumber.push(firstPossition);

            }

        } else if (command === 'sumPairs') {

            let index = 0;
            let newArray = [];

            while (arrNumber.length !== 0) {

                let firstNumber = arrNumber.shift();
                let sum = 0;

                if (arrNumber[0]) {

                    let secondNumber = arrNumber.shift();
                    sum = firstNumber + secondNumber;
                    newArray.push(sum);

                } else {

                    newArray.push(firstNumber);

                }
            }

            arrNumber = newArray;

        }

        index++;

    }

    console.log(`[ ${arrNumber.join(', ')} ]`);

}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
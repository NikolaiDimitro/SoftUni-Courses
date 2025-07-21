function pipesInPool(volume, debitOfFirstPipe, debitOfSecondPipe, hours) {

    let totalDebitForFistPipe = debitOfFirstPipe * hours;
    let totalDebitForSecondPipe = debitOfSecondPipe * hours;
    let totalDebit = totalDebitForFistPipe + totalDebitForSecondPipe;

    if (totalDebit <= volume) {

        let p1 = ((totalDebitForFistPipe / totalDebit) * 100).toFixed(2);
        let p2 = ((totalDebitForSecondPipe / totalDebit) * 100).toFixed(2);
        console.log(`The pool is ${(((totalDebit / volume)) * 100).toFixed(2)}% full. Pipe 1: ${p1}%. Pipe 2: ${p2}%.`);

    } else {

        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${totalDebit - volume} liters.`);

    }
}
pipesInPool(1000, 100, 120, 3);
pipesInPool(100, 100, 100, 2.5);
function reportSystem(arr) {
    let index = 0;
    let moneysWithCash = 0;
    let moneysWithCard = 0;
    let totalMoney = 0;
    let peoplesWithCash = 0;
    let peoplesWithCard = 0;
    let needMoney = Number(arr[index]);
    index++;

    let transactionCount = 0;

    while (arr[index] !== 'End') {

        if (index >= arr.length) {

            break;

        }

        let payment = Number(arr[index]);

        if (transactionCount % 2 === 0) {

            if (payment <= 100) {

                console.log('Product sold!');
                totalMoney += payment;
                moneysWithCash += payment;
                peoplesWithCash++;

            } else {

                console.log('Error in transaction!');

            }
        } else {

            if (payment >= 10) {

                console.log('Product sold!');
                totalMoney += payment;
                moneysWithCard += payment;
                peoplesWithCard++;

            } else {

                console.log('Error in transaction!');

            }
        }

        if (totalMoney >= needMoney) {

            break;

        }

        transactionCount++;
        index++;

    }

    if (totalMoney >= needMoney) {

        console.log(`Average CS: ${(moneysWithCash / peoplesWithCash).toFixed(2)}`);
        console.log(`Average CC: ${(moneysWithCard / peoplesWithCard).toFixed(2)}`);

    } else {

        console.log('Failed to collect required money for charity.');

    }
}
reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
reportSystem(["600", "86", "150", "98", "227", "End"]);
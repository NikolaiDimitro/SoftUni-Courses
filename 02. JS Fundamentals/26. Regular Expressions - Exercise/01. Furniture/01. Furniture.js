function furniture(arr) {

    let index = 0;
    let pattern = />>(?<product>[A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d{1,})/
    let sum = 0;

    console.log('Bought furniture:');

    while (arr[index] !== 'Purchase') {

        let current = arr[index];
        let exec = pattern.exec(current);

        if (exec !== null) {

            console.log(exec.groups.product);
            sum += Number(exec.groups.price) * Number(exec.groups.quantity);

        }

        index++;

    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
furniture(['>>Laptop<<312.2323!3', '>>TV<<300.21314!5', '>Invalid<<!5', '>>TV<<300.21314!20', '>>Invalid<!5', '>>TV<<30.21314!5', '>>Invalid<<!!5', 'Purchase']);
furniture(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase']);
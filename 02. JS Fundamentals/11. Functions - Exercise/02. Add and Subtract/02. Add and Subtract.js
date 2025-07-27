function addAndSubtact(first, second, third) {

    sum(first, second, third);

    function sum(first, second, third) {

        subtract(first + second, third);

    }

    function subtract(result, z) {

        console.log(result - z);

    }
}
addAndSubtact(23, 6, 10);
addAndSubtact(1, 17, 30);
addAndSubtact(42, 58, 100);
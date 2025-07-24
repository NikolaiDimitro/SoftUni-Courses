function biggerOf3Numbers(first, second, third) {

    let bigger = Number.MIN_SAFE_INTEGER;

    if (first >= second && first >= third) {

        bigger = first;

    }

    if (second > first && second >= third) {

        bigger = second;

    }

    if (third > first && third > second) {

        bigger = third;

    }

    console.log(bigger);

}
biggerOf3Numbers(-2, 7, 3);
biggerOf3Numbers(130, 5, 99);
biggerOf3Numbers(43, 43.2, 43.1);
biggerOf3Numbers(2, 2, 2);
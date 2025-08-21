function destinationMapper(arr) {

    let str = arr.shift();
    let pattern = /([=\/])(?<city>[A-Z][A-Za-z]{2,})\1/g;
    let exec = pattern.exec(str);
    let newArr = [];
    let sum = 0;

    while (exec !== null) {

        newArr.push(exec.groups.city);
        sum += exec.groups.city.length;
        exec = pattern.exec(str);

    }

    console.log(`Destinations: ${newArr.join(', ')}`);
    console.log(`Travel Points: ${sum}`);

}
destinationMapper(['=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=']);
destinationMapper(['ThisIs some InvalidInput']);
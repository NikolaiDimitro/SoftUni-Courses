function destinationMapper(str) {

    let pattern = /([=\/])(?<city>[A-Z][A-Za-z]{2,})\1/g;
    let exec = pattern.exec(str);
    let sum = 0;
    let arr = [];

    while (exec !== null) {

        sum += exec.groups.city.length;
        arr.push(exec.groups.city);
        exec = pattern.exec(str);

    }

    console.log(`Destinations: ${arr.join(', ')}`);
    console.log(`Travel Points: ${sum}`);

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");
function adAstra(arr) {

    let str = arr.shift();
    let pattern = /([\|#])(?<product>[A-Za-z\s]+)\1(?<date>(?<day>[\d]{2})\/(?<month>\d{2})\/(?<year>\d{2}))\1(?<calories>\d{1,5})\1/g;
    let sum = 0;
    let exec = pattern.exec(str);
    let items = [];

    while (exec !== null) {

        sum += Number(exec.groups.calories);
        items.push(exec.groups);
        exec = pattern.exec(str);

    }

    console.log(`You have food to last you for: ${Math.floor(sum / 2000)} days!`);

    for (let item of items) {

        console.log(`Item: ${item.product}, Best before: ${item.date}, Nutrition: ${item.calories}`);

    }
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
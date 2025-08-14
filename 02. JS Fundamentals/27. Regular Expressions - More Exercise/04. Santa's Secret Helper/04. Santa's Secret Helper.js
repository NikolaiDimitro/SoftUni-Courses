function santaSecretHelper(data) {

    let key = data.shift();
    let decryptArr = [];
    let template = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<behavior>[G|N])!/;

    for (let i of data) {
        let strAfterDecrypt = '';

        if (i !== 'end') {

            for (let j of i) {

                let checkLetter = j.charCodeAt() - key;
                let decryptLetter = String.fromCharCode(checkLetter);
                strAfterDecrypt += decryptLetter;

            }

            decryptArr.push(strAfterDecrypt);

        }
    }

    let printArr = [];

    for (let element of decryptArr) {

        let info = element.match(template);

        if (info === null) continue;

        let name = info.groups.name;
        let behavior = info.groups.behavior;

        if (behavior === 'G') {

            printArr.push(name);

        }
    }

    console.log(printArr.join('\n'));

}
santaSecretHelper(['3', 'CNdwhamigyenumje$J$','CEreelh-nmguuejnW$J$','CVwdq&gnmjkvng$Q$', 'end']);
santaSecretHelper(['3', 'N}eideidmk$\'(mnyenmCNlpamnin$J$', 'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge', 'ppqmkkkmnolmnnCEhq/vkievk$Q$', 'yyegiivoguCYdohqwlqh/kguimhk$J$', 'end']);
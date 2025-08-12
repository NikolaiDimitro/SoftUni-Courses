function passwordGenerator(arr) {

    let concanitatedStr = arr[0] + arr[1];
    let replacementStr = arr[2];
    let vowels = ["a", "e", "i", "o", "u"];
    let index = 0;

    for (let letter of concanitatedStr) {

        if (vowels.includes(letter)) {

            concanitatedStr = concanitatedStr.replace(letter, replacementStr[index].toUpperCase());
            index++;

        }

        if (index >= replacementStr.length) {

            index = 0;

        }
    }

    let password = concanitatedStr.split(``).reverse().join('');
    console.log(`Your generated password is ${password}`);

}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);
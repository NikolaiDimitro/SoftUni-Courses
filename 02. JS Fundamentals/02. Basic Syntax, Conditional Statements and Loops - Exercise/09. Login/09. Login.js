function login(arr) {

    let username = arr[0];
    let password = username.split('').reverse().join('');
    let count = 0;

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i];

        if (current === password) {

            console.log(`User ${username} logged in.`);

        } else {

            count++;

            if (count === 4) {

                console.log(`User ${username} blocked!`);
                return;


            }

            console.log(`Incorrect password. Try again.`);

        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
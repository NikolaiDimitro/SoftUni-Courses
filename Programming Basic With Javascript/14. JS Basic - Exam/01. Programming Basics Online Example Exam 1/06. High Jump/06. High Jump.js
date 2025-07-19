function highJump(arr) {
    
    let targetHeight = Number(arr[0]);
    let currentHeight = targetHeight - 30;
    let jumpCount = 0;
    let failCount = 0;

    for (let i = 1; i < arr.length; i++) {

        let jump = Number(arr[i]);
        jumpCount++;

        if (jump > currentHeight) {

            currentHeight += 5;
            failCount = 0;

            if (currentHeight > targetHeight) {

                console.log(`Tihomir succeeded, he jumped over ${targetHeight}cm after ${jumpCount} jumps.`);
                return;

            }

        } else {

            failCount++;

            if (failCount === 3) {
                console.log(`Tihomir failed at ${currentHeight}cm after ${jumpCount} jumps.`);
                return;

            }
        }
    }
}
highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);
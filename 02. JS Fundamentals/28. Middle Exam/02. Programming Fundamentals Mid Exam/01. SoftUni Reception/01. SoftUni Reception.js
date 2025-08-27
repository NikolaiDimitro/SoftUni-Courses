function softUniReception(arr) {

    let totalStudentForHour = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
    let totalStudent = Number(arr[3]);
    let totalTime = 0;

    while (totalStudent > 0) {

        totalTime++;

        if (totalTime % 4 === 0) {

            continue;

        }

        totalStudent -= totalStudentForHour;

    }

    console.log(`Time needed: ${totalTime}h.`);

}
softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);
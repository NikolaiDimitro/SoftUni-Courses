function hospital(arr) {

    let doctors = 7;
    let examinedPatients = 0;
    let unexaminedPatients = 0;
    let totalExaminedPatients = 0;
    let totalUnexaminedPatients = 0;

    for (let i = 1; i < arr.length; i++) {

        let patients = Number(arr[i]);

        if (i % 3 === 0) {

            if (totalUnexaminedPatients > totalExaminedPatients) {

                doctors++;

            }
        }

        if (patients > doctors) {

            totalExaminedPatients += doctors;
            totalUnexaminedPatients += patients - doctors;

        } else {

            totalExaminedPatients += patients;

        }
    }

    console.log(`Treated patients: ${totalExaminedPatients}.`);
    console.log(`Untreated patients: ${totalUnexaminedPatients}.`);

}
hospital((["4", "7", "27", "9", "1"]));
hospital((["6", "25", "25", "25", "25", "25", "2"]));
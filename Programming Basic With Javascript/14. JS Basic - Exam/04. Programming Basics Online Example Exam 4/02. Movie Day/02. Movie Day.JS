function movieDay(timeToPictures, countScenes, durationOfScene) {

    let prepareToterrain = timeToPictures * 0.15;
    let totalTimeForPictures = prepareToterrain + (countScenes * durationOfScene);

    if (timeToPictures >= totalTimeForPictures) {

        console.log(`You managed to finish the movie on time! You have ${Math.round(timeToPictures - totalTimeForPictures)} minutes left!`);

    } else {

        console.log(`Time is up! To complete the movie you need ${Math.round(totalTimeForPictures - timeToPictures)} minutes.`);

    }
}
movieDay(120, 10, 11);
movieDay(60, 15, 3);
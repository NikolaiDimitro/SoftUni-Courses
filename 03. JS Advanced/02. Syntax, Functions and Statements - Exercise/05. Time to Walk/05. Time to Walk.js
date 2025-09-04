function timeToWalk(steps, footprint, speed) {

    let distance = steps * footprint;
    let speedMetersPerSec = speed / 3.6;
    let time = distance / speedMetersPerSec;
    let rests = Math.floor(distance / 500);
    time += rests * 60;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.round(time % 60);
    let result = `${hours.toString().padStart(2, '0')}:` + `${minutes.toString().padStart(2, '0')}:` + `${seconds.toString().padStart(2, '0')}`;
    console.log(result);

}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
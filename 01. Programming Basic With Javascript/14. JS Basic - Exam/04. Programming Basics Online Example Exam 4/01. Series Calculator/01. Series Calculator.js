function seriesCalculator(nameOfSeries, countSeason, countEpisods, durationOfEpisods) {

    console.log(`Total time needed to watch the ${nameOfSeries} series is ${(countSeason * countEpisods * durationOfEpisods) + ((countSeason * countEpisods * durationOfEpisods) * 0.2) + countSeason * 10} minutes.`);

}
seriesCalculator('Lucifer', 3, 18, 55);
seriesCalculator('Game of Thrones', 7, 10, 50);
seriesCalculator('Riverdale', 3, 21, 45);
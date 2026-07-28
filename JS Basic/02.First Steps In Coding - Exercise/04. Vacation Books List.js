function vacationBookList(countPages, pages, countDays) {

    let totalTime = countPages / pages;
    let timePerDay = totalTime / countDays;
    console.log(timePerDay);

}
vacationBookList(212, 20, 2);
vacationBookList(432, 15, 4);
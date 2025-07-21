function shopping (budget, countVideoCards, countProcessors, countRamMemmlory) {

let priceVideoCard = countVideoCards * 250;
let priceProcessor = priceVideoCard * 0.35 * countProcessors;
let pricRamMemory = priceVideoCard * 0.1 * countRamMemmlory;

let totalPrice = priceVideoCard + priceProcessor + pricRamMemory;

if(countVideoCards > countProcessors) {

totalPrice *= 0.85;

}

if (budget >= totalPrice) {

console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);

}else {

console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);

}
}
shopping(900, 2, 1, 3);
shopping(920.45, 3, 1, 1);
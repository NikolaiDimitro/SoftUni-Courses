function flowerShop(countMagnolias, countHyacinths, countRoses, countCacti, priceToGift) {

let price = (countMagnolias * 3.25 + countHyacinths * 4 + countRoses * 3.5 + countCacti * 8) * 0.95;

console.log(price >= priceToGift ? `She is left with ${Math.floor(price - priceToGift)} leva.` : `She will have to borrow ${Math.ceil(priceToGift - price)} leva.`);

}
flowerShop(2, 3, 5, 1, 50);
flowerShop(15, 7, 5, 10, 100);
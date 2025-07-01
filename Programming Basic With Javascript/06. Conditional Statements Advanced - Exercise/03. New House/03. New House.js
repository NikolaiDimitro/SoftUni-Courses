function newHouse (flowers, count, budget) {

let price = 0;

if(flowers === 'Roses'){

price =  count * 5;

if(count > 80){

price *= 0.9;

}

}else if (flowers === 'Dahlias') {

price = count * 3.8;

if(count > 90){

price *= 0.85;

}

}else if (flowers === 'Tulips'){

price = count * 2.8;

if(count > 80){

price *= 0.85;

}

}else if(flowers === 'Narcissus'){

price = count * 3;

if(count < 120){

price *= 1.15;

}

}else if(flowers === 'Gladiolus'){

price = count * 2.5;

if(count < 80){

price *= 1.20;

}
}

if(budget >= price){

    console.log(`Hey, you have a great garden with ${count} ${flowers} and ${(budget - price).toFixed(2)} leva left.`);

}else {

    console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);

}
}
newHouse ("Roses",55, 250);
newHouse ("Tulips",88, 260);
newHouse ("Narcissus", 119, 360);
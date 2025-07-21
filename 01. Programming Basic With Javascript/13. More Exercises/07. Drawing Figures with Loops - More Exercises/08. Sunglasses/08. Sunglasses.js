function sunglasses (n) {

let firstRow = '';
let smallRow = '';
let intervals = '';
let stars = '';
let slash = '';
let pipe  = '';
let biggestRow = '';
let whoIsBiggest = 2 * n - 2;
let whoRow = Math.floor((n - 1) / 2 - 1) ;

for(let i = 1; i <= 2 * n; i ++) {

stars += '*';

}

for(let i = 1; i <= n; i ++) {

    intervals += ' ';

}

for(let i = 1; i <= whoIsBiggest; i++) {

slash += '/';

}

for(let i = 1; i <= n; i++) {

pipe += '|';

}

firstRow += stars;
firstRow += intervals;
firstRow += stars;
console.log(firstRow);
biggestRow += '*';
biggestRow += slash;
biggestRow += '*';
biggestRow += pipe;
biggestRow += '*';
biggestRow += slash;
biggestRow += '*';
smallRow += '*';
smallRow += slash;
smallRow += '*';
smallRow += intervals;
smallRow += '*';
smallRow += slash;
smallRow += '*';

for(let i = 0; i < n - 2; i++) {

if(i === whoRow) {

console.log(biggestRow);

}else {

console.log(smallRow);

}
}

console.log(firstRow);

}
sunglasses(3);
sunglasses(4);
sunglasses(5);
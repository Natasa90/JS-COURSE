let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100];
let evenNum = [];
let oddNum = [];

num.forEach((num) => num % 2 === 0 && evenNum.push(num));
num.forEach((num) => num % 2 !== 0 && oddNum.push(num));
console.log(evenNum);
console.log(oddNum);
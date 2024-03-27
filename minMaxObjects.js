let arrayNum = [1, 5, 77, 8676, 23, 21, 444];
let minNum = 0; 
let maxNum = 0;
let minMaxObject = {};

for (let i = 0; i <= arrayNum.length; i++){ 
    minNum = Math.min(...arrayNum);
    maxNum = Math.max(...arrayNum);
} 

minMaxObject.minNumber = minNum;
minMaxObject.maxNumber = maxNum;
console.log(minMaxObject);




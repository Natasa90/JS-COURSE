let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100];
let evenNum = [];
let oddNum = [];

for (let i = 0; i < num.length; i++){
    if (num[i] % 2 === 0)
        evenNum.push (num[i]);
    else
        oddNum.push (num[i]);   
}
console.log(evenNum);
console.log(oddNum);









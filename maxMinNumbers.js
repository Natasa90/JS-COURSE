const listNumb = [2, 4, 6, 8, 10];
let minimum = Infinity; 
let maximum = -Infinity; 
for (let number of listNumb){
    if (number < minimum) 
        minimum = number; 
    if (number > maximum)
        maximum = number;
}
console.log ("Max number is: " + maximum)
console.log ("Min number is: " + minimum)

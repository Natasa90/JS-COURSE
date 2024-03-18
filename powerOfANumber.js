let number = 3; 
let exponent = 2; 
let powerOfANumber = 1;
if (exponent === 0){ 
    console.log ("The power of a number is:" + number);
}
else if (number === 0){
    console.log ("Base number cannot be 0.");
} 
else{ 
    for (let i = 1; i <= exponent; i++){
        powerOfANumber *= number
    }
}
console.log ("The power of a number is: " + powerOfANumber);
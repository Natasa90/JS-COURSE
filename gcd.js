 let firstNumber = 6; 
 let secondNumber = 24; 
 let gcd = 1; 

 for (let i = 0; i <= firstNumber; i++){ 
    if (firstNumber % i === 0 && secondNumber % i === 0){
        gcd = i;
    }
}
console.log (("The GCD of " + firstNumber + " and " + secondNumber + " is " + gcd + "."));


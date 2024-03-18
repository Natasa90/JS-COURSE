let number = 7;
function isPrime(number){ 
    if ( number <= 1){
        return false; 
        console.log ("")
    }
    for ( let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return false;
        }
    }
    return true; 
}
console.log

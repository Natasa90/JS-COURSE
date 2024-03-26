let person = {name: "Natasa", age: 34}; 
switch (true){ 
    case person.age > 0 && person.age <= 12: 
        console.log("Natasa's age is 13.");
        break;
    case person.age >= 13 && person.age <= 19: 
        person.age = person.age + 1;
        console.log("Natasa's age is " + person.age);
        break;
    case person.age > 19: 
        console.log("Natasa's age is 21.");
        break;
    default:
        console.log("Your input is not valid.");
}


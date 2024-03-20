// Switch example 1: 

let fruit = "Mango";
switch (fruit){
    case "Apple":
        console.log ("Apples are 0.61$ a pound.");
        break;
    case "Cherries":
        console.log ("Cherries are 1.92$ a pound.");
        break;
    case "Mango": 
        console.log ("Mangos are 0.92$ a pound.");
        break;
    default:
        console.log ('Sorry, we are out of ${fruit}');
} 

// Switch example 2: 

let num = 7; 
switch (num){
    case (num = 3):
        console.log ("Value of the number is too small."); 
        break;
    case (num = 7):
        console.log("Value of the number is correct."); 
        break;
    default: 
        console.log ("Please enter the correct number.")
}

// Fall-through example:

let color = "blue";
switch (color){
    case "pink":
        console.log ("Your chosen color is pink.");
        break;
    case "blue":
        console.log ("Your chosen color is blue."); //we left out the break; statement, so switch will continue to execute the rest of the statements, until it again reaches "break' or comes to an end; 
    case "red": 
        console.log ("Your chosen color is red.");
        break;
    case "green": 
        console.log ("Your chosen color is green.");
        break;
    default:
        console.log ('Sorry, you cannot choose ${color}.');
} 

// Example of when fall-through can be usefull tool: 

let animal = "Elephant";
switch (animal){
    case "Lion":
    case "Tiger":
    case "Elephant":
    case "Giraffe":
        console.log ("This is a wild animal."); // if any of the given cases matches the expression value "Elephant", the statement will be executed. 
        break;
    case "Cat":
    default: 
        console.log ("This is a domestic animal.");
}
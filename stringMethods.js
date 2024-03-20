let text = "String methods"

//CALCULATING THE LENGTH OF A STRING 

let length = text.length 
console.log (length);

//METHODS FOR EXTRACTING STRING CHARACTERS

let char1 = text.charAt(1); // Method 1 - "charAt()"
console.log(char1);

let char2 = text.charCodeAt(1); // Method 2  - this method returns a UTF-16 code (an integer between 0 and 65535) - "charCodeAt()"//
console.log(char2); 

let char3 = text.at(3);
console.log(char3); // Method 3 - "at()"; it allows use of negative indexes, unlike "charAt()"

console.log(text[0]); // Method 4 - Property Access "[]"

//METHODS FOR EXTRACTING STRING PARTS

let slice = text.slice (0,6); // This method takes two parameters: start position and end position (end is not included) - "slice(start,end)"
console.log(slice)

 let sliceStart = text.slice (6); // It will make a new string from start position
 console.log(sliceStart);

 let sliceEnd = text.slice (-7); // If a parameter is negative, the position is counted from the end of the string
 console.log(sliceEnd);
 
 let subtext = text.substring(-8); // Cannot take negative indexes, anything less than 0 is seen as 0 
 console.log(subtext);

 /*let subtext2 = text.substr(4,2); 
 console.log(subtext2); - First parameter is for the start , second is for the length of a substracted string*/

 


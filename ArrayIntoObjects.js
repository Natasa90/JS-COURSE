const arrayOfObjects = [{Natasa: "Grade F"},{Milutin: "Grade B"},{Valentina: "Grade A"}];
let object1 = {};
let object2 = {};
let object3 = {}; 

for (let i = 0; i <= arrayOfObjects.length; i++){ 
    object1 = arrayOfObjects[0];
    object2 = arrayOfObjects[1];
    object3 = arrayOfObjects[2];
}

const newObject = Object.assign (object1, object2, object3);
console.log(newObject);


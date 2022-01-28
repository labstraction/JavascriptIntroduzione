// let stud1 = {name:"pippo", age:12, gender: "m"};

// let stud2 = {name:"pluto", age:18 , gender: "m"};

// let stud3 = {name:"topolina", age:18, gender: "f"};

// let stud4 = {name:"paperina", age:18, gender: "f"};

// let students = [stud1, stud2, stud3, stud4];

// function filterByAge(arrayToFilter, age) {
//     let tempArray = [];
//     for (const element of arrayToFilter) {
//         if (element.age === age) {
//             tempArray.push(element)
//         }
//     }
//     return tempArray;
// }


// console.log(filterByAge(students, 18)) //=>  [{name:"pippo", age:12}]


// function filter(arrayToFilter, propertyName, value){
//     let tempArray = [];
//     for (const element of arrayToFilter) {
//         if (element[propertyName] === value) {
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }


// console.log(filter(students, "age", 12)); //=>  [{name:"pippo", age:12}]
// console.log(filter(students, "name", "pluto")); //=>  [{name:"pluto", age:18}]


// let numberArray = [12, 5, 29 ,13];

// function addCorrectTypeToArray(array, elementToAdd){
//     if (typeof elementToAdd === typeof array[0]) {
//         array.push(elementToAdd);
//         return array;
//     }
//     return "ERRORE";
// }

// console.log(addCorrectTypeToArray(numberArray, 6));
// console.log(addCorrectTypeToArray(numberArray, "ERRORE"));


// let trashArray = [12, false, "pippo", true, "pluto", 29 ,13];


// function cleanArray(arrayToClean, permittedType) {
//     let tempArray = [];
//     for (const element of arrayToClean) {
//         if (typeof element === permittedType ) {
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }

// console.log(cleanArray(trashArray, "string"));


let myArray = [100, 101, 9, 1000, 12, -3];


function filterToRemoveGreaterThan100(arrayToFilter){
    let tempArray = [];
    for (const element of arrayToFilter) {
        if (element <= 100) {
            tempArray.push(element);
        }
    }
    return tempArray;
}

console.log(filterToRemoveGreaterThan100(myArray));



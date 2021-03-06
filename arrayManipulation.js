
let myArray = [3, 5, -8, 67, 10003, 456789, -123];

function greaterThan30(element) {
    // if (element > 30) {
    //     return true;
    // } else {
    //     return false;
    // }

    return (element > 30)
}


function isEven(element) {
    // if (element % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return (element % 2 === 0);
}


function filter(arrayToFilter, filterFunction) {
    let tempArray = [];
    for (const element of arrayToFilter) {
        if (filterFunction(element)) {
            tempArray.push(element);
        }
    }
    return tempArray;
}


console.log(filter(myArray, greaterThan30));
console.log("mia filter", filter(myArray, isEven));

console.log("javascript filter", myArray.filter(isEven));


function isPositive(element) {
    return (element > 0);
}

console.log("isPositive filter", myArray.filter(isPositive));


// function isNegative(element) {
//     if (element < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let isNegative2 = function(element) {
//     if (element < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let isNegative3 = (element) => {
//     if (element < 0) {
//         return true;
//     } else {
//         return false;
//     }
// };



function isNegative(element, index) {
    return element < 0;
}

let isNegative2 = function (element, index) {
    return element < 0;
}

let isNegative3 = (element, index) => element < 0;


console.log(myArray.filter(isNegative));


console.log(myArray.filter(function (element) {
    return element < 0;
}));

console.log(myArray.filter((element) => element < 0))


///////////////

function hasEvenPosition(element, index) {
    if (index % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(myArray.filter(hasEvenPosition));

console.log(myArray.filter(function (element, index) {
    return index % 2 === 0;
}));

console.log(myArray.filter((e, i) => i % 2 === 0))


/////


function addOneToArray(arrayToModify) {
    let tempArray = [];
    for (const element of arrayToModify) {
        let modifiedElement = element + 1;
        tempArray.push(modifiedElement);
    }
    return tempArray
}

console.log(addOneToArray(myArray));


function map(arrayToModify, alterationFunction) {
    let tempArray = [];
    for (const element of arrayToModify) {
        let modifiedElement = alterationFunction(element);
        tempArray.push(modifiedElement);
    }
    return tempArray
}

function addOne(element) {
    return element + 1
}

console.log(map(myArray, addOne));

console.log(myArray.map(addOne));

console.log(myArray.map(function (element) {
    return element + 1;
}));

console.log(myArray.map((element) => element + 1));



function elementIndexProduct(element, index) {
    return element * index;
}

console.log(myArray.map(elementIndexProduct));

console.log(myArray.map(function (element, index) {
    return element * index;
}))

console.log(myArray.map((e, i) => e * i));


console.log(myArray.map(elementIndexProduct)
    .filter(isNegative));




let testArray1 = [12, 57, 1001, -67, -12, 5, 27, 48, -6000]

let testArray2 = ["pippo", "pluto", "paperino", "topolino", "paperone", "paperoga"];

let filteredArray1 = testArray1.filter((e) => e % 3 === 0)
console.log("filtered 1", filteredArray1);
/// teniamo i numeri divisibili per 3;

let filteredArray2 = testArray2.filter((e) => e.length > 6)
console.log("filtered 2", filteredArray2);
/// teniamo le stringhe che sono pi?? lunghe di 6 caratteri;

let mappedArray1 = testArray1.map((e) => e * 0.9)
console.log("mapped 1", mappedArray1);
/// tutti i numeri dovranno essere ridotti del 10%

let mappedArray2 = testArray2.map((e) => e.toUpperCase())
console.log("mapped 2", mappedArray2);
/// tutte le strighe dovranno essere Maiuscole

let modifiedArray1 = testArray1.map((e) => Math.abs(e)).filter(e => e <= 100);
console.log("modified 1", modifiedArray1);
/// tutti i numeri andranno trasformati in positivi 
/// e andranno eliminati i numeri maggiori di 100

let modifiedArray2 = testArray2.map((e) => e[0].toUpperCase() + e.slice(1)).filter((e) => e.toLowerCase().includes("r"))
console.log("modified 1", modifiedArray2);
/// tutte le stringhe dovranno avere la prima lettere maiuscola
/// e andranno eliminate le stringhe che non contengono la lettera r


function sumAllArray(arrayToSum) {
    let result = 0;
    for (const element of arrayToSum) {
        result = result + element;
    }
    return result;
}

console.log(sumAllArray(testArray1));


function sum(first, second) {
    return first + second;
}

function product(previus, current, index) {
    return previus * current;
}

function sumEvenIndex(previous, current, index) {
    if (index % 2 === 0) {
        return previous + current;
    } else {
        return previous;
    }
}


function reduce(arrayToAggregate, aggregationFunction, startingElement) {
    let result;
    let startingIndex;
    if (startingElement) {
        result = startingElement;
        startingIndex = 0;
    } else {
        result = arrayToAggregate[0]
        startingIndex = 1;
    }
    for (let i = startingIndex; i < arrayToAggregate.length; i++) {
        const element = arrayToAggregate[i];
        result = aggregationFunction(result, element, i, arrayToAggregate);
    }
    return result;
}

console.log(reduce(testArray1, sum));
console.log(reduce(testArray1, product));
console.log(reduce(testArray1, sum));
console.log(reduce(testArray1, sumEvenIndex));

console.log(testArray1.reduce((previous, current, index, array) => previous + current))

console.log(testArray2.reduce(dividiStringhe, []))

console.log(testArray1.reduce(sumBySign, {}))

function dividiStringhe(previous, current) {
    // if (current[0] === "p") {
    //     if (previous[0]) {
    //         previous[0].push(current);
    //     } else {
    //         previous[0] = [];
    //         previous[0].push(current);
    //     }
    // } else {
    //     if (previous[1]) {
    //         previous[1].push(current);
    //     } else {
    //         previous[1] = [];
    //         previous[1].push(current);
    //     }
    // }
    if (current[0] === "p") {
        if (!previous[0]) {
            previous[0] = [];
        }
        previous[0].push(current);
    } else {
        if (!previous[1]) {
            previous[1] = [];
        }
        previous[1].push(current);
    }
    return previous
}


function sumBySign(previous, current) {
    // if (current >= 0) {
    //     if(previous.sumOfPositive){
    //         previous.sumOfPositive = previous.sumOfPositive + current
    //     } else {
    //         previous.sumOfPositive = 0;
    //         previous.sumOfPositive = previous.sumOfPositive + current
    //     }
    // } else {
    //     if(previous.sumOfNegatives){
    //         previous.sumOfNegatives = previous.sumOfNegatives + current
    //     } else {
    //         previous.sumOfNegatives = 0;
    //         previous.sumOfNegatives = previous.sumOfNegatives + current
    //     }
    // }

    if (current >= 0) {
        if (!previous.sumOfPositive) {
            previous.sumOfPositive = 0
        }
        previous.sumOfPositive += current

    } else {
        if (!previous.sumOfNegatives) {
            previous.sumOfNegatives = 0
        }
        previous.sumOfNegatives += current

    }
    return previous;
}


let testArray3 = ["la", "vergogna", "casa", "dannazione", "ha", "pippo", "preso", "secchio", "fuoco"];

console.log(testArray3.reduce((p, c, i) => i % 2 !== 0 ? p : p + " " + c));

function removeOddAndConcatenate(previous, current, index) {


    // let tempString = previous;
    // if (index % 2 !== 0) {
    //     return tempString;
    // } else {
    //     tempString = tempString + current;
    //     return tempString;
    // }


    if (index % 2 !== 0) {
        return previous;
    } else {
        return previous + " " + current;
    }


}


console.log(testArray3.reduce(removeOddAndConcatenate, ""));


let array = [12, 345, -1234, 1, 0, 23456, -2, 2, 3];


console.log(array.reduce((p, c) => c > p ? c : p));

function max(previous, current) {
    if (current > previous) {
        return current;
    } else {
        return previous;
    }
}

console.log(array.reduce(max));

console.log(array.reduce((p, c) => Math.max(p, c)));

console.log(Math.max(...array));

////////////////////////////////////////////////////////

function sumIfEven(previous, current) {
    if (current % 2 === 0) {
        return previous + current;
    } else {
        return previous;
    }
}


console.log(array.reduce(sumIfEven));

console.log(array.reduce((p, c) => c % 2 === 0 ? p + c : p, 0));

///////////////////////////////////////////////////

function lowestOfNegatives(previous, current) {
    // if (previous) {
    //     if (current < 0) {
    //         if (current < previous) {
    //             return current;
    //         } else {
    //             return previous;
    //         }
    //     } else {
    //         return previous;
    //     }
    // } else {
    //     if (current < 0) {
    //         return current;
    //     } else {
    //         return previous;
    //     }
    // }

    if (previous) {
        if (current < previous) {
            return current;
        } else {
            return previous;
        }
    } else {
        if (current < 0) {
            return current;
        } else {
            return previous;
        }
    }
}




console.log(array.reduce(lowestOfNegatives));


console.log(array.filter((v) => v < 0 ).reduce((p, c) => c < p ? c : p))


console.log(array.reduce((p, c) => c < 0 ? [...p, c] : p, []).reduce((p, c) => c < p ? c : p));



let array1 = ["Pippo", "Paperone", "Gambadilegno", "Basettoni", "Clarabella", "Osvaldo"];


let string = "pippo";


function checkIfStringContainsAVowel(string) {
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char === "a") {
            return true;
        }
        if (char === "e") {
            return true;
        }
        if (char === "i") {
            return true;
        }
        if (char === "o") {
            return true;
        }
        if (char === "u") {
            return true;
        }
    }
    return false;
}

function checkIfStringContainsAVowel2(string) {

    let vowels = ["a", "e", "i", "o", "u"]

    for (let i = 0; i < vowels.length; i++) {
        const vowel = vowels[i];
        if (string.includes(vowel)) {
            return true;
        }
    }
    return false;
}

// array.some()

// array.every()


function checkIfStringNotContainsAVowel3(string) {

    // let vowels = ["a", "e", "i", "o", "u"];
    // return !vowels.some((v) => string.includes(v));
    return !["a", "e", "i", "o", "u"].some((v) => string.includes(v));
}


function checkIfStringContainsAVowel3(string) {

    // let vowels = ["a", "e", "i", "o", "u"];
    // return !vowels.some((v) => string.includes(v));
    return ["a", "e", "i", "o", "u"].some((v) => string.includes(v));
}


// let numberArray = [2, 6, 8, 12]

// console.log("controllo pari", numberArray.every((v) => v % 2 === 0))

console.log(checkIfStringContainsAVowel2(string));



function arrayOfVowels(string){
    let arrayFromString = [...string];
    let vowelsArray = arrayFromString.filter(checkIfStringContainsAVowel2)
    return vowelsArray;
}

function arrayOfConsonants(string){
    let arrayFromString = [...string];
    let vowelsArray = arrayFromString.filter(checkIfStringNotContainsAVowel3)
    return vowelsArray;
}


console.log(arrayOfVowels(string));

let arrayOfCon = arrayOfConsonants(string);

let setOfConsonats = new Set(arrayOfCon);

let stringOfCon = [...setOfConsonats].join("");

console.log(stringOfCon);


console.log([...new Set(arrayOfConsonants(string))].join(""))


function fromStringToVowelArray(string){
    return [...string].filter(c => ["a", "e", "i", "o", "u"].some(v => v === c.toLowerCase()))
}

console.log(array1.reduce((p, c) => [...p, ...fromStringToVowelArray(c)], []));


function fromStringToConsonantsString(string){
    let consonantsArray = [...string.toLowerCase()].filter(c => !["a", "e", "i", "o", "u"].some(v => v === c.toLowerCase()));
    return consonantsArray.join("");
}

console.log(array1.reduce((p, c) => [...new Set([...(p + fromStringToConsonantsString(c))])].join(""), ""));



array1.forEach((e) => console.log(e));


for (const string of array1) {
    console.log(string.toUpperCase());
}


array1.forEach((e) => console.log(e.toUpperCase()));


console.log(array.sort());

console.log(array1.sort());


let stud1 = {name:"pippo", age:12, gender: "m"};

let stud2 = {name:"pluto", age:18 , gender: "m"};

let stud3 = {name:"topolina", age:13, gender: "f"};

let stud4 = {name:"paperina", age:18, gender: "f"};

let students = [stud1, stud2, stud3, stud4];


console.log(students.sort(compareStudents3));


function compareStudents(st1, st2){
    if (st1.age > st2.age) {
        return 1;
    }

    if (st1.age < st2.age) {
        return -1;
    }

    if (st1.age === st2.age) {
        return 0;
    }
}


function compareStudents2(st1, st2){
    return st1.gender.localeCompare(st2.gender);
}

function compareStudents3(st1, st2) {
    return st2.age - st1.age
}



let athlete1 = {name: "giovanni", surname:"landi", position: 2}
let athlete2 = {name: "lorena", surname:"landi", position: 2}
let athlete3 = {name: "pippo", surname:"barbigli", position: 1}
let athlete4 = {name: "simona", surname:"perri", position: 3}
let athlete5 = {name: "elmo", surname:"recalcati", position: 2}

let athletes = [athlete1, athlete2, athlete3, athlete4, athlete5];



console.log([...athletes]);


athletes.sort((s1, s2)=> s1.position - s2.position)



function compareBySurname(stud1, stud2) {
    return stud1.surname.localeCompare(stud2.surname);
}

function compareByPosition(stud1, stud2) {
    return stud1.position - stud2.position;
}

function compareByPositionPlus(stud1, stud2) {
    if (stud1.position === stud2.position) {
        if (stud1.surname === stud2.surname) {
            return stud1.name.localeCompare(stud2.name);
        } else{
            return stud1.surname.localeCompare(stud2.surname)
        }
    } else {
        return stud1.position - stud2.position;
    }
}


function switchCase(string) {

    const firstChar = string[0];
    const firstCharLower = firstChar.toLowerCase()

    const remainingString = string.substring(1);
    const remainingStringUpper = remainingString.toUpperCase();

    return firstCharLower + remainingStringUpper;

}


console.log(array1.map(switchCase));


console.log(array1.map((s) => s[0].toLowerCase() + s.substring(1).toUpperCase()));


console.log(array1.reduce((p, c)=>[...p, switchCase(c)], []));

// p [] c Pippo => [pIPPO]

// p [pIPPO] c Pluto => [pIPPO, pLUTO]

// p [pIPPO, pLUTO] c Paperino => [pIPPO, pLUTO, pAPERINO]


function checkIfContainsR(string){
    return string.toLowerCase().includes("r")
}


function checkIfContainsString(string, stringTocheck){
    return string.toLowerCase().includes(stringTocheck)
}


function checkIfContainsString2(stringTocheck){
    return (string) => string.toLowerCase().includes(stringTocheck)
}


const checkR = checkIfContainsString2("r");

console.log(checkR("pippo"));


const checkP = checkIfContainsString2("p");

console.log(checkP("pippo"));


console.log(array1.filter(checkIfContainsString2("p")));

console.log("generico",array1.filter((s) => checkIfContainsString(s, "p")));

console.log(array1.reduce((p, c) => checkIfContainsR(c) ? [...p, c] : p, []))
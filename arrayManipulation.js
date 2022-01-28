
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
console.log("mia filter" ,filter(myArray, isEven));

console.log("javascript filter", myArray.filter(isEven));


function isPositive(element){
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

let isNegative2 = function(element, index) {
    return element < 0;
}

let isNegative3 = (element, index) => element < 0;


console.log(myArray.filter(isNegative));


console.log(myArray.filter(function(element){
    return element < 0;
}));

console.log(myArray.filter((element) => element < 0))


///////////////

function hasEvenPosition(element, index){
    if (index % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(myArray.filter(hasEvenPosition));

console.log(myArray.filter(function(element, index){
    return index % 2 === 0;
}));

console.log(myArray.filter((e, i) => i % 2 === 0))


/////


function addOneToArray(arrayToModify){
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

console.log(myArray.map(function(element){
    return element + 1;
}));

console.log(myArray.map((element) => element + 1));



function elementIndexProduct(element, index){
    return element * index;
}

console.log(myArray.map(elementIndexProduct));

console.log(myArray.map(function(element, index){
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
/// teniamo le stringhe che sono più lunghe di 6 caratteri;

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


function sumAllArray(arrayToSum){
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

function product(previus, current, index){
    return previus * current;
}

function sumEvenIndex(previous, current, index) {
    if(index % 2 === 0){
        return previous + current;
    } else {
        return previous;
    }
}


function reduce(arrayToAggregate, aggregationFunction, startingElement){
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

console.log(testArray2.reduce(dividiStringhe,[]))

console.log(testArray1.reduce(sumBySign,{}))

function dividiStringhe(previous, current){
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
        if(!previous.sumOfPositive){
            previous.sumOfPositive = 0
        } 
        previous.sumOfPositive += current
        
    } else {
        if(!previous.sumOfNegatives){
            previous.sumOfNegatives = 0
        } 
        previous.sumOfNegatives += current
        
    }
    return previous;
}


let testArray3 = ["la", "vergogna", "casa", "dannazione", "ha", "pippo", "preso", "secchio", "fuoco"];


console.log(testArray3.reduce((p, c, i) => i % 2 !== 0 ? p : p + " " + c));
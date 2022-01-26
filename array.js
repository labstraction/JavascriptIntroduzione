

// let firstArray = [1, true, "pippo"];

// console.log(firstArray);

// let secondArray = ["pippo", "pluto", "paperino"];

// console.log(secondArray.length);

// for (let i = 0; i < secondArray.length; i++) {
//     const element = secondArray[i];
//     console.log(element);
// }

// for (const element of secondArray) {
//     console.log(element);
// }


// secondArray.push("topolino");




// let ultimoElemento = secondArray.pop()

// console.log(secondArray);
// console.log(ultimoElemento);


// let primoElemento = secondArray.shift()

// console.log(secondArray);

// console.log(primoElemento);

// secondArray.unshift("paperone");

// console.log(secondArray);


// console.log(secondArray[1])

// secondArray[1] = "paperina"


// console.log(secondArray);


// let thirdArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let subArray = thirdArray.slice(2, 5);

// // console.log(subArray);

// // console.log(thirdArray);


// // let subArray2 = thirdArray.splice(2, 3, 12, 13 ,14);


// // console.log(subArray2);

// // console.log(thirdArray);


// let numeroPiuGrande = Math.max(5, 10, 2);

// console.log(numeroPiuGrande);

// let numeroPiuGrandeDellArray = Math.max(...thirdArray); //Math.max(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log("numero più grande dell'array", numeroPiuGrandeDellArray);


// function stringPiuLunga(...stringhe) {
//     let str = ""
//     for (let i = 0; i < stringhe.length; i++) {
//         const element = stringhe[i];
//         if (str.length < element.length) {
//             str = element;
//         }
//     }
//     return str;
// }

// console.log(stringPiuLunga("pippo", "topolino", "pluto"));


// function max(...numbers) {
//     // let n = -Infinity;
//     let n = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (n < element) {
//             n = element;
//         }
//     }
//     return n;
// }

// console.log(max(-100, -12, -3, -1001)); //=> 1001 


// function min(...numbers) {
//     let n = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (n > element) {
//             n = element;
//         }
//     }
//     return n;

// }

// console.log("min", min(-100, -12, 3, -1001)); //=> -1001 


// function range(max, min = 0, step = 1) {
//     let array1 = [];

//     let start = step > 0 ? min : max;

//     let end;

//     if (step > 0) {
//         end = max;
//     } else {
//         end = min;
//     }

//     for (let i = start; i <= max; i += step) {
//         array1.push(i)
//     }
//     return array1;
// }

// console.log(range(100, 10, 2)); //=> [0, 1, 2, 3, 4, 5]

// // function startingChar(stringArray) {
// //     let array1 = [];
// //     // for (let i = 0; i < stringArray.length; i++) {
// //     //     const element = stringArray[i];
// //     //     if (element !== "") {
// //     //         array1.push(element[0]);
// //     //     }
// //     // }
// //     for (const element of stringArray) {
// //         if (element !== "") {
// //             array1.push(element[0]);
// //         }
// //     }

// //     return array1;
// // }

// // let strings = ["Cosenza", "Genova", "Alessandria", ""]
// // console.log(startingChar(strings)); //=> ["C", "G", "A"]


// function sum(...numbers){

//     console.log("numbers", numbers)

//     let result = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {
//         // const element = number[i];
//         result += numbers[i];
//     }
//     return result;
// }

// console.log(sum(...range(5)))

// // console.log(sum(...[0, 1, 2, 3, 4, 5]))

// // console.log(sum(0, 1, 2, 3, 4, 5))

// // console.log(15)


// let array = [1, 2, 3, 4, 5, 6]


// function reverse(array) {

//     let reversed = [];
    
//     // for (let i = array.length - 1; i >= 0 ; i--) {
//     //     const element = array[i];
//     //     reversed.push(element);
//     // }

//     for (const number of array) {
//         reversed.unshift(number)
//     }

//     return reversed
// }



// let reversedArray = reverse(array);

// console.log(reversedArray);

// console.log("before in place", array)

// function reverseInPlace(arr) {
//     // let rev = reverse(arr);
//     // arr.length = 0;
//     // arr.push(...rev);
//     for (let i = 0; i < arr.length / 2; i++) {
//         // const headElem = arr[i];
//         // const tailElem = arr[arr.length-1-i];
//         // let temp = headElem;
//         // headElem = tailElem
//         // tailElem = temp;
//         let temp = arr[i];
//         arr[i] = arr[arr.length-1-i]
//         arr[arr.length-1-i] = temp;
//     }

// }

// reverseInPlace(array)

// console.log("in place", array)

//=>[6, 5, 4, 3, 2, 1]



let array5 = [7, 4, 100, 12];


function doubleFirstElement(array){

    // let tempArray = [];

    // for (let i = 0; i < array.length; i++) {
    //     tempArray.push(array[i]);
    // }

    let tempArray = [...array];

    tempArray[0] = tempArray[0] * 2;
    return tempArray
}


let newArray = doubleFirstElement(array5);

console.log(array5);
console.log(newArray);


let finalArray = [23, 13, 5, 12]


// function  sumFirst4ElementsOfArray(array) {
//     return array[0] + array[1] + array[2] + array[3];
// }

function  sumFirst4ElementsOfArray([el0, el1, el2, el3]) {
    return el0 + el1 + el2 + el3;
}

let lastElement = {value: 3, nextElement: null }

let secondElement = {value: 7, nextElement: lastElement}

let fistElement = {value: 5, nextElement: secondElement}

console.log(fistElement.value, fistElement.nextElement.value, fistElement.nextElement.nextElement.value)
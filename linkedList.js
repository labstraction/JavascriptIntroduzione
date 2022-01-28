

let firstElement = {value: 5, nextElement: null, previousElement:null}


let secondElement = {value: 9, nextElement: null, previousElement: firstElement}

firstElement.nextElement = secondElement;


let thirdElement = {value: 8, nextElement: null, previousElement: secondElement}

secondElement.nextElement = thirdElement;


let fourthElement = {value: 2, nextElement: null, previousElement: thirdElement}

thirdElement.nextElement = fourthElement;


let node = firstElement;

// while(true){
//     console.log(node.value);
//     if (node.nextElement !== null) {
//         node = node.nextElement;
//     } else {
//         break;
//     }
// }

while(node !== null){
    console.log(node.value);
    node = node.nextElement;
}

for (let node = firstElement; node !== null; node = node.nextElement) {
    console.log(node);
}


let node2 = fourthElement

while(node2 !== null){
    console.log(node2.value);
    node2 = node2.previousElement;
}



/////////////////////////////////////////////////////////////////////////////////////


let el1 = {value: "pippo", rest: null}

let el2 = {value: "pluto", rest: el1}

let el3 = {value: "paperino", rest: el2}

// console.log(el3);

let ela =  {value: "paperone", rest: el3};

let elb =  {value: "paperoga", rest: el3};

let elc = prepend("topolino", elb);


console.log("ela", ela);

console.log("elb", elb);


let myArray = [7, 8, 12, 5]

function arrayToLinkedList(array){

    let firstNode = null;

    for (let i = array.length-1; i >= 0; i--) {
        // let rest;
        // if (firstNode === null) {
        //     rest = null;
        // } else {
        //     rest = firstNode;
        // }
        // let node = {value: array[i], rest: firstNode};
        // firstNode = node;


        firstNode = prepend(array[i], firstNode);
    }
    return firstNode;
}

function prepend(value, listNode){
    let node = {value: value, rest: listNode};
    return node
}



console.log(arrayToLinkedList(myArray))




function linkedListToArray(listNode){
    let node = listNode;
    let array = [];
    while(node != null){
        array.push(node.value);
        node = node.rest;
    }
    return array;
}

console.log(linkedListToArray(elb)) 


function nth(listNode, index) {
    let node = listNode;
    let actualIndex = 0
    while(node != null){
        if(actualIndex === index){
            return node.value;
        }
        node = node.rest;
        actualIndex++;
    }
    return undefined;
}

function nth2(listNode, index, startIndex) {
    if (listNode === null) {
        return undefined;
    }
    
    if (startIndex === index) {
        return listNode.value;
    }

    let node = listNode.rest;

    startIndex++;

    return nth2(node, index, startIndex);
}

function nth3 (listNode, index){
    if(listNode === null){
        return undefined;
    }
    if(index === 0){
        return listNode.value;
    }
    
    return nth3(listNode.rest, index-1);
}

console.log(linkedListToArray(elc));
console.log(nth(elc, 12));
console.log(nth3(elc, 3, 0));





// let node = firstElement;


// let myfirstNode = {};

// function addElementToLinkedList(firstNode, value) {
//     if (firstNode.value === undefined) {
//         firstNode.value = value;
//         firstNode.nextElement = null;
//         firstNode.previousElement = null;
//     } else{

//         let lastNode = firstNode;

//         while(lastNode.nextElement !== null){
//             lastNode = lastNode.nextElement
//         }
        
//         let node = {value: value, previousElement: lastNode, nextElement: null}

//         lastNode.nextElement = node;
//     }
// }


// addElementToLinkedList(myfirstNode, 6)

// console.log(myfirstNode);


// addElementToLinkedList(myfirstNode, 16)

// console.log(myfirstNode);

// addElementToLinkedList(myfirstNode, 116)

// console.log(myfirstNode);
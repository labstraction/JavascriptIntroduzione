

let firstElement = {value: 5, nextElement: null, previousElement:null}

let secondElement = {value: 9, nextElement: null, previousElement: firstElement}

firstElement.nextElement = secondElement;

let thirdElement = {value: 8, nextElement: null, previousElement: secondElement}

secondElement.nextElement = thirdElement;

let fourthElement = {value: 2, nextElement: null, previousElement: thirdElement}

thirdElement.nextElement = fourthElement;


let node = firstElement;


let myfirstNode = {};

function addElementToLinkedList(firstNode, value) {
    if (firstNode.value === undefined) {
        firstNode.value = value;
        firstNode.nextElement = null;
        firstNode.previousElement = null;
    } else{

        let lastNode = firstNode;

        while(lastNode.nextElement !== null){
            lastNode = lastNode.nextElement
        }
        
        let node = {value: value, previousElement: lastNode, nextElement: null}

        lastNode.nextElement = node;
    }
}


addElementToLinkedList(myfirstNode, 6)

console.log(myfirstNode);


addElementToLinkedList(myfirstNode, 16)

console.log(myfirstNode);

addElementToLinkedList(myfirstNode, 116)

console.log(myfirstNode);

// while(true){
//     console.log(node.value);
//     if (node.nextElement !== null) 
//         node = node.nextElement;
//     } else {
//         break;
//     }
// }


// while(node !== null){
//     console.log(node.value);
//     node = node.nextElement;
// }


// let node2 = fourthElement

// while(node2 !== null){
//     console.log(node2.value);
//     node2 = node2.previousElement;
// }


// function linkedListToArray(linkedList){

// }

// console.log(linkedListToArray(firstElement)) //=> [5, 9, 8, 2]:


// let array = [7, 8, 12, 5]

// function arrayToLinkedList(linkedList){

// }

// console.log(arrayToLinkedList(array))
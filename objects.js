// let point = {x: 2, y:3};

// let student = {name: "Simone", surname: "Aloia", yob: 1997, married: false};

// let student1 = {name: "Alessandro", surname: "Capogreco", yob: 2002, married: false};

// let classe = {name: "Programmatore Frontend", students: [student, student1]}

// let andrea = {name: "Andrea", surname: "Asioli", "classe di cui è docente": classe};

// console.log(andrea["surname"]);

// let nomeStudente1 = student1.name;

// console.log(nomeStudente1);

// student1.name = "pippo";

// console.log(student1);


// console.log(student1.titoloDiStudio);

// student1.titoloDiStudio = "Diploma di Maturità";

// console.log(student1);


// for (const key in student1) {
//     if (Object.hasOwnProperty.call(student1, key)) {
//         const element = student1[key];
//         console.log(key + ": " + element);
//     }
// }


// console.log(JSON.stringify(andrea));


// let oggettoInStringa = '{"name":"Andrea","surname":"Asioli","classe di cui è docente":{"name":"Programmatore Frontend","students":[{"name":"Simone","surname":"Aloia","yob":1997,"married":false},{"name":"pippo","surname":"Capogreco","yob":2002,"married":false,"titoloDiStudio":"Diploma di Maturità"}]}}';


// let AndreaCopy = JSON.parse(oggettoInStringa);

// console.log(AndreaCopy);


// function CalcolaTriangoloRettangolo(catetoMaggiore, catetoMinore, ipotenusa){

//     let per = catetoMaggiore + catetoMinore + ipotenusa;

//     let ar = (catetoMaggiore * catetoMinore)/2

//     return {perimetro: per, area: ar}
// }

// let dimensioniTriangolo = CalcolaTriangoloRettangolo(4, 3, 5);

// console.log("il triangolo ha il perimetro di: " + dimensioniTriangolo.perimetro + " e l'area: " + dimensioniTriangolo.area);



// let firstNumber = 5

// function addOne(){
//     firstNumber = firstNumber + 1;
//     return firstNumber;
// }

// let secondNumber = addOne();


// console.log(firstNumber);
// console.log(secondNumber);



// let myAccount = {name: "Andrea Asioli", balance: 100}


// function addMoney(moneyToAdd, account) {
//     // let tempAccount = {};
//     // tempAccount = Object.assign(tempAccount, account);
//     let tempAccount = {...account};

//     tempAccount.balance = tempAccount.balance + moneyToAdd;
//     return tempAccount;
// }

// let updatedAccount = addMoney(50, myAccount)

// console.log(myAccount);
// console.log(updatedAccount);

// let userAndrea = {name: "Andrea Asioli", age: 43}

// let myAccount = {user: userAndrea, balance: 100}

// // console.log(myAccount);


// function changeAge(newAge, account) {
//     // let tempAccount = {};
//     // tempAccount = Object.assign(tempAccount, account);
//     let tempAccount = JSON.parse(JSON.stringify(account));

//     tempAccount.user.age = newAge;
//     return tempAccount;
// }

// let updatedAccount = changeAge(50, myAccount)

// console.log(myAccount);
// console.log(updatedAccount);

// let userAndrea = {name: "Andrea Asioli", age: 43}

// let myAccount = {user: userAndrea, balance: 100}



// function changeAge(newAge, account) {
//     account.user.age = newAge;
// }

// changeAge(50, myAccount);

// console.log(myAccount.user.age)


let student = {name: "simone", surname: "aloia", age:24};

console.log(Object.keys(student));

for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}

for (const key of Object.keys(student)) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}

for (let i = 0; i < Object.keys(student).length; i++) {
    const key = Object.keys(student)[i];
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}


let pippo = {name: "pippo", city: "topolinia"};

let pippo1 = pippo;

let pippo2 = {name: "pippo", city: "topolinia"};



console.log(pippo === pippo2);


const age = 5;

const name1 = "osvaldo"


let baby = {age, name: name1};

console.log(baby)



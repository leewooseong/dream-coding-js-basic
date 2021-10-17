'use strict';
//Function
// - funcdamental building block in the progberam
// - subprogram can used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
// ※ JS에선 타입이 없기 때문에 무엇을 전달하고자 하는지 알기가 어렵다.

function printHello() {
    console.log('Hello');
}

printHello();
function log (message) {
    console.log(message);
}
log('Hello!');
log(123523523);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name ='coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
// input이 없을 경우 default value 지정
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage(`Hi!`);

// 4. Rest parameters (added in ES6)
// 인자가 배열형태로 전달되게 되고 순서대로 출력됨
function printAll(...args) {
    // 1. for문을 통한 배열인자 출력
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // 2. for of 구문을 통한 배열인자 출력
    // args의 인자들이 하나하나씩 arg에 대입
    for (const arg of args) {
        console.log(arg);  
    }
    // 3. forEach
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);   // local variable
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a,b){
    return a + b;
    // return이 없는 것 , 생략가능
    // return undefined;
}
const result = sum(1,2);    //3
console.log(`sum: ${sum(1,2)}`);


// 7. Early return, ealry exit
// bad 
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

function upgradeUser2(user) {
    if (user.point <= 10) {
        return;
    }
    // 필요없는 조건은 빨리 리턴시키고 중요한 것은 뒤로 빼서 필요한 경우만 실행될 수 있도록    
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function
// 즉 함수가 변수처럼 기능

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it. 
const print = function () {  // anonymous function_이름이 없음
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3)); 

// 2. Callback function using function expression
// 조건에 맞게 인자로 넘어온 함수를 실행
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    //print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint1 = function () {
    console.log('simplePrint!');
};
const simplePrint2 = () => console.log('simplePrint!'); 
const add = (a, b) => a + b;
// 길게 써주기 위해서 {}을 사용한다. 이 때는 return을 이용하여 값을 반환하여 줘야한다.
const simpleMultiply = (a,b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수 선언 없이 바로 실행!
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time ♥
// function calculate (command, a, b)
// command: add, substract, divide, multiply, remainder

const addc = (a,b) => a + b;
const substractc = (a,b) => a + b;
const dividec = (a,b) => a - b;
const multiplyc = (a,b) => a * b;
const remainderc = (a,b) => a % b;
function calculate (command, a, b)
{
    switch(command) {
        case addc:
            return addc(a,b);
        default:
            console.log('command incorrect');
            break;
    }
    /*
    if (command === addc){
        return add(a, b);
    }*/
}
console.log(`Answer : ${calculate(addc, 4, 2)}`);
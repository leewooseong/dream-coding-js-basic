'use strict';
// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substraction
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// - 도 동일

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators:(w||(or), &&(and), !(not))
const value1 = false;
const value2 = 4 < 2;

// 변수 선언 안에 여러 개를 선언가능 ㄷㄷ.. 

// || (or)
// *** true를 만나면 앞에서 멈춘다! 뒤에 것을 실행하지 않음
// 가장 무거운 것(함수)! 은 가장 마지막으로!!!!
console.log(`or: ${value1 || value2 || check()}`);

// && (and)
// *** false를 만나면 앞에서 멈춘다! 뒤에 것을 실행하지 않음
// 가장 무거운 것(함수)! 은 가장 마지막으로!!!!
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something_nullableObject가 null이 아닐 때만 something을 받아올 수 있다.

// ! (not)
console.log(!value1); 


function check() {
    for (let i = 0; i < 10; i++) {
        //waisting time
        console.log("＠.＠");
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion_ 타입을 변경해서 검사함
console.log(stringFive == numberFive);
console.log(stringFive != numberFive); 
// === strict equality, no type conversion_ 타입이 다르면 다른 것!
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // f 
console.log(ellie1 === ellie2); // f
console.log(ellie1 === ellie3); // t

// equality - puzzler 
console.log(0 == false);    // t
console.log(0 === false);   // f 
console.log('' == false);   // t
console.log('' === false);  // f
console.log(null == undefined); // t
console.log(null === undefined);    // f

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ? 
// condition? value1 : value2;
// 간단할 때만 사용 -> 어려울 때 굳이 이것을 사용하면 가독성이 떨어지고 지저분해 진다.
console.log(name === 'ellie' ? 'yes' : 'no'); 

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser) {
    case 'IE':
        console.log('go away!');
        break;
    // 내용이 같다면 연달아 쓰기 가능!
    case 'Chrome':
    case 'Friefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11.Loops
// 11-1. while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// 11-2. do while loop, body code is executed first,
// them check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// 11-3. for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops -> O(n**2)이 되기 때문에 사용 ↓
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print onlu even numbers(use continue)
for(let i = 0; i < 10; i++)
{
    if(0 !== (i % 2))
        continue;

    console.log(`number : ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i < 10; i++)
{
    if(i === 9)
        break;
    console.log(`number : ${i}`);
}
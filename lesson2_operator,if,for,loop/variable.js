// 1. Use strict
// added in ES 5
// use this for Vanila JavaScript
'use strict';

//2. Variable, rw(read/write)
//let (added in ES6) declare variation vs var(before ES6)
//전역(globe), 지역(local)

// 전역
let globalName = 'globalName';
{
    // 지역
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
//console.log(name);
console.log(globalName);

// var(don't ever user this!) : 값을 선언하기전에 출력이나 사용도 가능하다..
// - var hoisting (move declaration from botton to top)_끌어올려주기
// - has no block scope
{
    age = 4;
}
var age;
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable
// no change value! Don't touch me!
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types: premitive types, frozen objects (i.e. object.freeze()) -> 변경은 가능해도 데이터 자체를 변경하는 것은 불가
//Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons;
// - security -> 해커의 코드 삽입
// - thread safety -> 다양한 쓰레드들의 값 변경 불가
// - reduce human mistakes

// Mutable(let) , Immutable(const)

// 4. Variable types
// primitivie, single item: number, string, boolean, null, undefined, symbol 원초적인 타입!
// object, box container: single item을 묶어서 관리
// function, first-class fuction: function도 변수에 넣을 수 있고 인자 리턴도 가능한 것

// number : 모든 숫자 타입! 크기를 생각할 필요가 없다!
const count = 17;   // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, - infinity, NaN
// 결과 값이 valid한 값인지 확인하고 수행하는 것이 좋다!
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// binInt(fairly new, don't use it yet)
// default : -2**53 ~ 2**53
// bigInt : over (-2**53 ~ 2**53) _ use n!, only in chrome & safari
const bigInt = 121345123498571928341234n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string : 모든 글자 타입! char이든 뭐든
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let anything = null;
console.log(`value: ${anything}, type: ${typeof anything}`);

//undefined
//declaration but not valid
let x;  // or let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects???
// https://poiemaweb.com/es6-symbol
//const symbos1 = Symbol

//object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
//const but Mutable-> reference가 저장되고 reference를 통해 value를 저장하기 때문에
ellie.name="woosoeng";
console.log(ellie.name);


//5. Dynamic typing: dynamically typed language
//동작할 때 할당된 값에 따라 타입이 변경된다.
//프로토 타입에 유용 but 다수 작업 시 불편 
let text = 'hello';
console.log(text.charAt(0));    //h 
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // string
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';   // number
console.log(`value: ${text}, type: ${typeof text}`);

//console.log(text.charAt(0));    // error! -> make typeScript    
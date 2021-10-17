'use strict';
// JS = dynamically time language

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object = {key : value};
const name = 'ellie';
const age = 4;

// 1. Literals and properties
// Create Object
const obj1 = {};    // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax _ Object class의 constructor가 호출됨

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
//             key:  value,   key: value
const ellie = {name: 'ellie', age: 4};
print(ellie);

// with JavaScript mangic (dynamically typed language)
// can add properties later
ellie.hasJob = true; // object의 원소를 뒤늦게 추가가 가능;
console.log(ellie.hasJob);
// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties_ 계산된 properties
// key should be always string
// object['key']
console.log(ellie.name);
console.log(ellie['name']); // *** ellie[name] 즉 string type이 아니면 undefined가 나옴!
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// . , [''] 어떤 때에 어떤 것을 써야 하는가
// . : 코딩할 때 그냥 사용하면 됨.
// [''] : runtime에서 결정될 때
function printValue(obj, key) {
    //console.log(obj.key); -> obj에 key라는 property가 있니?라고 묻는 것 = undefined
    console.log(obj[key]);  // key에 해당하는 property를 출력하기 위해선 ['']을 써야한다.
}
printValue(ellie, "name");
printValue(ellie, "age");

const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
//const person4 = { name: ''};
// const person4 = makePerson('ellie', 30);
const person4 = new Person('ellie', 20)
console.log(person4);

// 값을 받아서 object를 리턴해주는 것
// object를 만드는 함수는 대문자로 시작한다.
function Person(name, age) {
    // 3. Property value shorthand
    // key와 value의 이름이 똑같다면 이를 생략이 가능하다
    // return {
    //     name: name,
    //     age: age,
    // };
    // return {
    //     name,
    //     age,
    // }

    // Constructor function 
    // this 선언이 없어도 자동으로 처리해준다.
    // this = {};
    this.name = name;
    this.age = age;
    // return this
}

// 5. in operator: property existence check (key in obj)
// 해당 키가 있는 지 확인하는 것
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);     // undefined
console.log(ellie.random);
console.log(ellie.name);
console.log(ellie.age);


//  6. for..in vs for..of
// 이걸 쓰기 위해선 변수 앞에 let을 붙여줘야한다.
// for (key in obj)
//console.clear();
const ellie2 = {name: "우성", age: 26};
console.log("왜 오류나지..");
for(let key in ellie2) {
    console.log(ellie[key])
}

// for (value of interable)
const array = [1, 2, 3, 4];
for (let value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
} 
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
// 동일한 프로퍼티라면 뒤에 있는 값이 반영
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
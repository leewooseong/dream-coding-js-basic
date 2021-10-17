"use strict";

//Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

//3. Looping over an array
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. foreach
//
// fruits.forEach(function(fruit, index, array){
//     console.log(fruit, index, array);
// })

fruits.forEach((fruit, index) => console.log(fruit, index));

// d. Addtion, deletion, copy
// push: add an item to the end
fruits.push("🍓", "🍑");

// pop: remove an item from the end
fruits.pop();
fruits.pop();

// unshift: add an item to the benginning
fruits.unshift("🍓", "🍋");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop, push: 마지막 원소들만 처리해주면 된다, 나머지 원소를 건드릴 필요가 없음
// shift, unshift: 첫 번째 원소를 처리하기 위해선 나머지 원소들에 대한 처리도 필요하다.

// splice: remove an item by index position
// splice(start,deleteacount): start부터 deleteacount 개수만큼 지운다, deleteacount가 없을 시 마지막까지 모두 삭제
// splice 한국어 뜻: 꼬아서 잇다, 즉 뒤에 추가로 원소를 더 붙여줄 수 있다
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
// fruits.splice(1);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "🍏", "🍉");
console.log(fruits);

// concat: combine two arrays
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
console.clear();
console.log(fruits);

// indexOf: find the index
//   return index
console.log(fruits.indexOf("🍏"));
console.log(fruits.indexOf("🍉"));
//   return -1
console.log(fruits.indexOf("🥥"));

// includes
//   return True or False
console.log(fruits.includes("🍉"));
console.log(fruits.includes("🥥"));

// lastIndexOf: 같은 원소가 여러 개라면? 마지막 원소의 index를 가져오겠다!
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🍎"));

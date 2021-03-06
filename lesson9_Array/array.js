"use strict";

//Array π

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["π", "π"];
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
fruits.push("π", "π");

// pop: remove an item from the end
fruits.pop();
fruits.pop();

// unshift: add an item to the benginning
fruits.unshift("π", "π");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop, push: λ§μ§λ§ μμλ€λ§ μ²λ¦¬ν΄μ£Όλ©΄ λλ€, λλ¨Έμ§ μμλ₯Ό κ±΄λλ¦΄ νμκ° μμ
// shift, unshift: μ²« λ²μ§Έ μμλ₯Ό μ²λ¦¬νκΈ° μν΄μ  λλ¨Έμ§ μμλ€μ λν μ²λ¦¬λ νμνλ€.

// splice: remove an item by index position
// splice(start,deleteacount): startλΆν° deleteacount κ°μλ§νΌ μ§μ΄λ€, deleteacountκ° μμ μ λ§μ§λ§κΉμ§ λͺ¨λ μ­μ 
// splice νκ΅­μ΄ λ»: κΌ¬μμ μλ€, μ¦ λ€μ μΆκ°λ‘ μμλ₯Ό λ λΆμ¬μ€ μ μλ€
fruits.push("π", "π", "π");
console.log(fruits);
// fruits.splice(1);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "π", "π");
console.log(fruits);

// concat: combine two arrays
const fruits2 = ["π", "π₯₯"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
console.clear();
console.log(fruits);

// indexOf: find the index
//   return index
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π"));
//   return -1
console.log(fruits.indexOf("π₯₯"));

// includes
//   return True or False
console.log(fruits.includes("π"));
console.log(fruits.includes("π₯₯"));

// lastIndexOf: κ°μ μμκ° μ¬λ¬ κ°λΌλ©΄? λ§μ§λ§ μμμ indexλ₯Ό κ°μ Έμ€κ² λ€!
console.clear();
fruits.push("π");
console.log(fruits);
console.log(fruits.indexOf("π"));
console.log(fruits.lastIndexOf("π"));

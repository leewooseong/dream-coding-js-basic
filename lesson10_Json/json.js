// JSON
// JavaScript Object Notation
// callback 함수를 이용해서 반환하는 결과를 조정할 수 있다(reviver, replacer)

// 1. Object to JSON
// stringify(obj), replacer
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
// rabbit을 출력하지만 함수 jump는 출력되지 않는다. -> 데이터만 출력하게 된다.
console.log(json);

// replacer 사용 1
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

// replacer 사용 2
// 이 경우 모든 key와 value들이 전달된다.(제일 처음은 Object 자체가 전달된다.)
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value; // value 값에 대한 코드를 추가하므로 인해서 출력되는 값을 조정할 수 있다.
});
console.log(json);

// 2. JSON to Object
// parse(json), reviver
json2 = JSON.stringify(rabbit);
const obj = JSON.parse(json);
// stringify 시 jump 함수가 누락되어 있으므로 다시 parse한 obj에도 jump는 포함되지 않는다.
console.log(obj);

rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
// obj.birthDate.getDate();
console.log(obj.birthDate); // 다시 데이터로 변환하기 위해서 callback 함수(reviver)를 사용할 수 있다.

// reviver 사용
const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date() : value;
});

console.log(obj2.birthDate.getDate());

"use strict";

// Promise
// JS에서 제공하는 비동기를 간편하게 처리할 수 있게 만들어주는 object
// 정해진 장시간 기능을 수행하고나서 정상수행되었다면 성공메세지 + 결과값 전달
// 수행 중 예상치 못한 문제 발생한다면 에러처리

// Promise is a JavaScript object for asynchronous operation
// 비동기적인 것을 수행할 때 call back 함수 대신 유용하게 사용 가능

// 아래의 전체적인 흐름
// 1. Promise Object를 만들 때 비동기적으로 수행하고 싶은 코드를 Promise 안에 작성
// 1.2 성공했다면 resolve 호출
// 1.3 실패했따면 reject 호출
// 2. Promise object에 then과 catch를 이용해서 성공한 값, 실패한 에러를 받아와서 원하는 방식으로 처리해주면 된다.
//

// 잡아야할 point! 2가지
// 1. State
// 2. Producer vs Consumer

//  State:
//  - 프로세스가 무거운 operation을 수행하고 있는지 기능 수행을 다 완료해서 성공했는지 실패했는지 상태에 대한 이해가 필요
//  - State: pending -> fulfilled or rejected
//  - ※ pending: state가 만들어져서 지정한 operation을 수행 중인 상태
//       fulfilled: operation을 성공적으로 끝낸 상태
//       rejected: 파일을 못찾거나 네트워크에 문제가 생긴 상태

// 2. Producer vs Consumer
//  - 정보를 제공하는 Producer와 정보를 소비하는 Consumer의 다른 견해를 이해하는 것이 중요하다.

// 2.1. Producer
// ***when new Promise is created, the executor runs automaticallty

// Promise object 생성방법: class에 해당되기 때문에 class 선언
// Promise(executor(resolve,reject))
// Promise생성자에는 executor라는 callback함수를 넘겨줘야한다.
// executor의 resolve: 기능을 정상적으로 수행해서 마지막에 최종데이터를 전달하는 callback 함수
// executor의 reject: 기능을 수행하다가 문제가 생기면 호출하게되는 callback 함수
//                    Error object를 통해서 값을 전달, Error = 무언가 문제가 발생했다는 걸 나타내는 JS object

// promise를 만드는 순간 executor가 실행됨을 확인할 수 있다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  // ※ heav한 작업을 synchronous로 처리하게 되면 다른 일을 못하기 때문에 asynchorous로 처리
  console.log("doing something...");
  // 성공적으로 기능을 잘 수행했다면 resolve라는 callback 함수 호출
  // 네트워크에서 받은 또는 파일에서 읽어온 그리고 그것들을 가공한 데이터를 resolve callback 함수를 통해 전달
  setTimeout(() => {
    // resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2.2 Consumers: then catch, finally를 통해 값을 받아오는 것

// promise 값이 정상적으로 수행이된다면(then) 값을 받아와서 원하는 callback 함수에 전달
// then: promise가 정상적으로 잘 수행이 되어서 최종적으로 resolve로 최종적으로 전달한 값이 parameter로 전돨되어져서 들어오는 것을 확인 가능
promise
  .then((value) => {
    console.log(value);
  })
  // then의 return으로 똑같은 promise를 return 하기 때문에 뒤에 .catch를 수행할 수 있는 것 = chaining
  // return 된 promise에 then을 등록하는 것
  .catch((error) => {
    console.log(error);
  })
  // finally: 성공 실패 여부를 떠나 마지막에 무조건 호출되는 것
  .finally(() => {
    console.log("finalluy");
  });

// 3. Promise chaining_then과 다른 비동기적인 아이들을 묶어서 함께 사용 가능
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

// num으로 1이 전달됨
fetchNumber
  .then((num) => num * 2) // 2
  .then((num) => num * 3) // 6
  //   *** then에서는 값을 바로 전달해도 되고 또 다른 비동기인 Promise를 전달해도 된다.
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling_오류 잘 처리하기
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)));
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

// callback 함수를 전달할 때 받아오는 value를 다른함수로 바로 하나를 호출하는 경우에는 매개변수들을 생략이 가능하다
// then에서 받아오는 value를 바로 getEgg에 암묵적으로 전달에서 호출해준다.
// 한가지만 받아서 그대로 전달하는 경우엔 생략 가능
// 주석을 넣어주면 prettier의 한 줄 정리를 막아줄 수 있다.
getHen() //
  .then(getEgg) //
  // 계란을 받아오는 곳에서 에러가 났지만 error처리를 해주었기 때문에 promise chain이 실패하지 않고 마지막 요리까지 완성
  // 이 부분을 처리해주지 않으면 뒤에 부분의 처리가 제대로 완수되지 못한다.
  .catch((error) => {
    return "🥖";
  })
  .then(cook) //
  .then(console.log);

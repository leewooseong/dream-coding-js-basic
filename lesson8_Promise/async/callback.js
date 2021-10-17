"use strict";

// JavaScript is synchronous._JS = 동기적 Excute the code block by orger after
// hoisting._호이스팅 처리된 코드 순서대로 실행되는 것 hoisting: var, function declaration 들이
// 자동적으로 제일 위로 올라가는 것 정해진 순서대로 코드가 실행되는 것 아래의 코드 실행 순서
// 1. 1을 콘솔에 출력
// 2. setTimeout요청(1초 뒤 실행)을 브라우저에게 알림
// 3. 응답을 기다리지 않고 3을 콘솔에 출력
// 4. 1초 후 브라우저에서 callback함수 실행하라고 알려줌

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// setTimeout browser에서 제공되는 api 정해진 시간이 지나면 전달한 콜백함수를 호출하는 것 callback function?
// - call the function that we passed. kind of callback_
// 1. Synchronous callback,
// 2. Asynchoronous callback

// 1. Synchronous callback  시나리오
//  - callback함수를 받아서 실행시키는 함수 작성
//  - hoisting의 결과로 함수 선언부는 함수 제일 위로 올라가게됨
//  - 그 다음부턴 동기적으로 수행
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// 2. Asynchoronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback HEll example 🔥

// 1. back-end에서 data 가져오기
class UserStorage {
  // onSuccess: 로그인 성공 call back onError: 로그인 실패 및 문제 call back
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  // 사용자의 데이터를 받아서 사용자의 역할을 서버로부터 받아옴
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

// prompt = browser api
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// Call back 지옥의 문제점
// 1. 읽기가 너무 거북하다
// 2. 디버깅할 때도 힘들다 + 유지보수도 힘들다
//

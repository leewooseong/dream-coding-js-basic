"use strict";
// Callback HEll example 🔥 to Promise 🌊

// 1. back-end에서 data 가져오기
class UserStorage {
  loginUser = (id, password, onSuccess, onError) => {
    log;
  };
}

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

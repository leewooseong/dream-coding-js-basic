"use strict";
// Callback HEll example ๐ฅ to Promise ๐

// 1. back-end์์ data ๊ฐ์ ธ์ค๊ธฐ
class UserStorage {
  loginUser = (id, password, onSuccess, onError) => {
    log;
  };
}

// 1. back-end์์ data ๊ฐ์ ธ์ค๊ธฐ
class UserStorage {
  // onSuccess: ๋ก๊ทธ์ธ ์ฑ๊ณต call back onError: ๋ก๊ทธ์ธ ์คํจ ๋ฐ ๋ฌธ์  call back
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
  // ์ฌ์ฉ์์ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ ์ฌ์ฉ์์ ์ญํ ์ ์๋ฒ๋ก๋ถํฐ ๋ฐ์์ด
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

// Call back ์ง์ฅ์ ๋ฌธ์ ์ 
// 1. ์ฝ๊ธฐ๊ฐ ๋๋ฌด ๊ฑฐ๋ถํ๋ค
// 2. ๋๋ฒ๊นํ  ๋๋ ํ๋ค๋ค + ์ ์ง๋ณด์๋ ํ๋ค๋ค
//

import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../../constant.js";
import { validation } from "./validation.js";

const inputWithIconList = queryAllElement(".input-with-icon");
const form = queryElement(".form");
const inputList = form.querySelectorAll(".input input");
const signUpBtn = form.querySelector(".btn--sign");

inputWithIconList.forEach((inputWithIcon) => {
  const eyeIcon = inputWithIcon.querySelector(".fa-eye");
  const eyeSlashIcon = inputWithIcon.querySelector(".fa-eye-slash");
  const inputPassword = inputWithIcon.querySelector("input");
  inputWithIcon.addEventListener("click", (e) => {
    if (e.target.className.includes("hide-password")) {
      eyeIcon.classList.remove("hidden");
      eyeSlashIcon.classList.add("hidden");
      inputPassword.type = "text";
    }

    if (e.target.className.includes("show-password")) {
      inputWithIcon.querySelector(".hidden").classList.remove("hidden");
      e.target.classList.add("hidden");
      inputPassword.type = "password";
    }
  });
});

inputList.forEach((input) => {
  input.addEventListener("change", () => validation(input));
  input.addEventListener("blur", () => validation(input));
});

function handleSignUp() {
  let isError = false;
  inputList.forEach((input) => {
    if (validation(input)) isError = true;
  });

  if (isError) {
    window.alert("username or password is invalid!!!");
    return;
  }
  const userList = getLocalStorage("userList");
  const cartList = getLocalStorage("cartList");

  const userSignUp = {
    id: Date.now(),
    username: form.querySelector("#username").value,
    password: form.querySelector("#password").value,
    isAdmin: false,
  };

  const userIdx = userList.findIndex((user) => user.id === userSignUp.id);

  if (userIdx === -1) {
    userList.push({
      ...userSignUp,
      cartList,
    });
    setLocalStorage("userList", userList);
    setLocalStorage("cartList", []);
    setLocalStorage("isLogin", true);
    setLocalStorage("isAdmin", userSignUp.isAdmin);
    window.location.assign(window.location.origin);
  } else {
    window.alert("account is already exists.");
  }
}

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleSignUp();
});

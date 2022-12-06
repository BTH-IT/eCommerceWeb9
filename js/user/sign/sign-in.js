import {
  getLocalStorage,
  queryElement,
  setLocalStorage,
} from "../../constant.js";
import { toast } from "../../toast.js";
import { validation } from "./validation.js";

const inputWithIcon = queryElement(".input-with-icon");
const eyeIcon = inputWithIcon.querySelector(".fa-eye");
const eyeSlashIcon = inputWithIcon.querySelector(".fa-eye-slash");
const inputPassword = inputWithIcon.querySelector("#password");
const form = queryElement(".form");
const inputList = form.querySelectorAll(".input input");
const signInBtn = form.querySelector(".btn--sign");

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

inputList.forEach((input) => {
  input.addEventListener("change", () => validation(input));
  input.addEventListener("blur", () => validation(input));
});

function handleSignIn() {
  let isError = false;
  inputList.forEach((input) => {
    if (validation(input)) isError = true;
  });

  if (isError) {
    return;
  }
  const userList = getLocalStorage("userList");

  const userIdx = userList.findIndex(
    (user) =>
      user.username === form.querySelector("#username").value &&
      user.password === form.querySelector("#password").value
  );

  if (userIdx !== -1) {
    const cartList = getLocalStorage("cartList");
    setLocalStorage("currentUser", userList[userIdx]);
    setLocalStorage("cartList", [...cartList, ...userList[userIdx].cartList]);

    toast({
      title: "Successfully!",
      message: "Wellcome back!!!!",
      type: "success",
      duration: 1000,
    });

    setTimeout(() => {
      if (userList[userIdx].isAdmin) {
        window.location.href = "/admin-dashboard.html";
      } else {
        window.location.href = "/";
      }
    }, 1200);
  } else {
    toast({
      title: "Error!",
      message: "username or password is invalid!!!",
      type: "error",
      duration: 1000,
    });
  }
}

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleSignIn();
});

import {
  getLocalStorage,
  queryElement,
  setLocalStorage,
} from "../../constant.js";

const auth = queryElement(".header__auth");
const signIn = auth.querySelector(".sign-in");
const signUp = auth.querySelector(".sign-up");
const signOut = auth.querySelector(".sign-out");

const isLogin = getLocalStorage("isLogin");

if (isLogin) {
  signOut.classList.remove("hidden");
  signIn.classList.add("hidden");
  signUp.classList.add("hidden");
} else {
  signOut.classList.add("hidden");
  signIn.classList.remove("hidden");
  signUp.classList.remove("hidden");
}

signOut.addEventListener("click", () => {
  setLocalStorage("isLogin", false);
  setLocalStorage("isAdmin", false);
  window.location.assign(window.location.origin);
});

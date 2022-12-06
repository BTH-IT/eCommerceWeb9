import {
  getLocalStorage,
  queryElement,
  setLocalStorage,
} from "../../constant.js";

const auth = queryElement(".header__auth");
const signIn = auth.querySelector(".sign-in");
const signUp = auth.querySelector(".sign-up");
const signOut = auth.querySelector(".sign-out");
const history = auth.querySelector(".header__history-icon");
const goToAdminDashboard = auth.querySelector(".go-admin-dashboard");

const currentUser = getLocalStorage("currentUser");
if (!!currentUser) {
  signOut.classList.remove("hidden");
  history.classList.remove("hidden");
  signIn.classList.add("hidden");
  signUp.classList.add("hidden");
  if (currentUser.isAdmin) {
    goToAdminDashboard.classList.remove("hidden");
  } else {
    goToAdminDashboard.classList.add("hidden");
  }
} else {
  history.classList.add("hidden");
  signOut.classList.add("hidden");
  goToAdminDashboard.classList.add("hidden");
  signIn.classList.remove("hidden");
  signUp.classList.remove("hidden");
}

signOut.addEventListener("click", () => {
  setLocalStorage("currentUser", null);
  setLocalStorage("cartList", []);
  window.location.href = "/";
});

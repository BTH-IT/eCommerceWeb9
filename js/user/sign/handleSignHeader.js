import {
  getLocalStorage,
  queryElement,
  setLocalStorage,
} from "../../constant.js";

const auth = queryElement(".header__auth");
const signIn = auth.querySelector(".sign-in");
const signUp = auth.querySelector(".sign-up");
const signOut = auth.querySelector(".sign-out");
const goToAdminDashboard = auth.querySelector(".go-admin-dashboard");

const currentUser = getLocalStorage("currentUser");
if (currentUser?.isAdmin) {
  signOut.classList.remove("hidden");
  goToAdminDashboard.classList.remove("hidden");
  signIn.classList.add("hidden");
  signUp.classList.add("hidden");
} else {
  signOut.classList.add("hidden");
  goToAdminDashboard.classList.add("hidden");
  signIn.classList.remove("hidden");
  signUp.classList.remove("hidden");
}

signOut.addEventListener("click", () => {
  setLocalStorage("currentUser", null);
  window.location.assign(window.location.origin);
});

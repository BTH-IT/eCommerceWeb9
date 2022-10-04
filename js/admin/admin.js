import { getLocalStorage, queryElement, setLocalStorage } from "../constant.js";
import { renderProductsManage } from "./productManage.js";

if (getLocalStorage("isAdmin") && getLocalStorage("isLogin")) {
  const usersManage = queryElement(".users");
  const productsManage = queryElement(".products");
  const statsManage = queryElement(".stats");
  const productsForm = queryElement(".products-form");

  const usersControl = queryElement(".users-control");
  const productsControl = queryElement(".products-control");
  const statsControl = queryElement(".stats-control");

  const createProductBtn = queryElement(".products .products__btn");
  const backProductManageBtn = queryElement(".products-form .products__btn");

  const createBtn = queryElement(".create");
  const updateBtn = queryElement(".update");
  const signOut = queryElement(".sign-out");

  usersControl.addEventListener("click", () => {
    if (usersControl.className.includes("active")) {
      return;
    }

    usersControl.classList.add("active");
    productsControl.classList.remove("active");
    statsControl.classList.remove("active");

    usersManage.classList.remove("hidden");
    productsManage.classList.add("hidden");
    statsManage.classList.add("hidden");
    productsForm.classList.add("hidden");
  });

  productsControl.addEventListener("click", () => {
    if (productsControl.className.includes("active")) {
      return;
    }

    productsControl.classList.add("active");
    usersControl.classList.remove("active");
    statsControl.classList.remove("active");

    productsManage.classList.remove("hidden");
    usersManage.classList.add("hidden");
    statsManage.classList.add("hidden");
    productsForm.classList.add("hidden");
  });

  statsControl.addEventListener("click", () => {
    if (statsControl.className.includes("active")) {
      return;
    }

    statsControl.classList.add("active");
    productsControl.classList.remove("active");
    usersControl.classList.remove("active");

    statsManage.classList.remove("hidden");
    usersManage.classList.add("hidden");
    productsManage.classList.add("hidden");
    productsForm.classList.add("hidden");
  });

  createProductBtn.addEventListener("click", () => {
    createBtn.classList.remove("hidden");
    updateBtn.classList.add("hidden");
    productsForm.classList.remove("hidden");
    productsManage.classList.add("hidden");
  });

  backProductManageBtn.addEventListener("click", () => {
    productsForm.classList.add("hidden");
    productsManage.classList.remove("hidden");
    renderProductsManage();
  });

  signOut.addEventListener("click", () => {
    setLocalStorage("isLogin", false);
    setLocalStorage("isAdmin", false);
    window.location.assign(window.location.origin);
  });
} else {
  window.location.assign(window.location.origin);
}

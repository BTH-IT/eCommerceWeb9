import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../constant.js";
import { reset } from "./handleFormProduct.js";
import { renderProductsManage } from "./productManage.js";

const currentUser = getLocalStorage("currentUser");

if (currentUser && currentUser?.isAdmin) {
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

  const desc = queryElement("#desc");

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
    reset();
  });

  backProductManageBtn.addEventListener("click", () => {
    productsForm.classList.add("hidden");
    productsManage.classList.remove("hidden");
    const errorList = queryAllElement(".error");
    errorList.forEach((error) => {
      error.innerText = "";
    });
    renderProductsManage();
  });

  signOut.addEventListener("click", () => {
    setLocalStorage("currentUser", null);
    window.location.assign(window.location.origin);
  });

  console.dir(desc);
  setInterval(() => {
    desc.style.height = "48px";
    desc.style.height = desc.scrollHeight + "px";
  }, 100);
} else window.location.assign(window.location.origin);

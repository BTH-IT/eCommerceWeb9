import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../constant.js";
import { reset } from "./handleFormProduct.js";
import { renderProductsManage } from "./productManage.js";

const searchName = queryElement(".products__filter-user input");
const currentUser = getLocalStorage("currentUser");

if (currentUser && currentUser?.isAdmin) {
  const usersManage = queryElement(".users");
  const productsManage = queryElement(".products");
  const statsManage = queryElement(".stats");
  const productsForm = queryElement(".products-form");
  const ordersManage = queryElement(".orders");
  const overlay = queryElement(".side-bar-overlay");
  const sideBarMobile = queryElement(".side-bar-mobile");
  const sideBarMobileClose = queryElement(".side-bar-close");
  const sideBarMobileIcon = queryElement(".side-bar__item.mobile");

  const usersControl = queryElement(".side-bar__item.users-control");
  const productsControl = queryElement(".side-bar__item.products-control");
  const statsControl = queryElement(".side-bar__item.stats-control");
  const ordersControl = queryElement(".side-bar__item.orders-control");

  const usersMobileControl = queryElement(
    ".side-bar-mobile__item.users-control"
  );
  const productsMobileControl = queryElement(
    ".side-bar-mobile__item.products-control"
  );
  const statsMobileControl = queryElement(
    ".side-bar-mobile__item.stats-control"
  );
  const ordersMobileControl = queryElement(
    ".side-bar-mobile__item.orders-control"
  );

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

    usersMobileControl.classList.add("active");
    usersControl.classList.add("active");
    productsControl.classList.remove("active");
    statsControl.classList.remove("active");
    ordersControl.classList.remove("active");
    productsMobileControl.classList.remove("active");
    statsMobileControl.classList.remove("active");
    ordersMobileControl.classList.remove("active");

    usersManage.classList.remove("hidden");
    productsManage.classList.add("hidden");
    statsManage.classList.add("hidden");
    ordersManage.classList.add("hidden");
    productsForm.classList.add("hidden");
  });

  usersMobileControl.addEventListener("click", () => {
    if (usersControl.className.includes("active")) {
      return;
    }

    usersMobileControl.classList.add("active");
    usersControl.classList.add("active");
    productsControl.classList.remove("active");
    statsControl.classList.remove("active");
    ordersControl.classList.remove("active");
    productsMobileControl.classList.remove("active");
    statsMobileControl.classList.remove("active");
    ordersMobileControl.classList.remove("active");

    usersManage.classList.remove("hidden");
    productsManage.classList.add("hidden");
    statsManage.classList.add("hidden");
    ordersManage.classList.add("hidden");
    productsForm.classList.add("hidden");

    overlay.style.display = "none";
    sideBarMobile.style.display = "none";
  });

  productsControl.addEventListener("click", () => {
    if (productsControl.className.includes("active")) {
      return;
    }

    productsMobileControl.classList.add("active");
    productsControl.classList.add("active");
    usersControl.classList.remove("active");
    statsControl.classList.remove("active");
    ordersControl.classList.remove("active");
    usersMobileControl.classList.remove("active");
    statsMobileControl.classList.remove("active");
    ordersMobileControl.classList.remove("active");

    productsManage.classList.remove("hidden");
    usersManage.classList.add("hidden");
    statsManage.classList.add("hidden");
    ordersManage.classList.add("hidden");
    productsForm.classList.add("hidden");
  });

  productsMobileControl.addEventListener("click", () => {
    if (productsControl.className.includes("active")) {
      return;
    }

    productsMobileControl.classList.add("active");
    productsControl.classList.add("active");
    usersControl.classList.remove("active");
    statsControl.classList.remove("active");
    ordersControl.classList.remove("active");
    usersMobileControl.classList.remove("active");
    statsMobileControl.classList.remove("active");
    ordersMobileControl.classList.remove("active");

    productsManage.classList.remove("hidden");
    usersManage.classList.add("hidden");
    statsManage.classList.add("hidden");
    ordersManage.classList.add("hidden");
    productsForm.classList.add("hidden");

    overlay.style.display = "none";
    sideBarMobile.style.display = "none";
  });

  ordersControl.addEventListener("click", () => {
    if (ordersControl.className.includes("active")) {
      return;
    }

    ordersMobileControl.classList.add("active");
    ordersControl.classList.add("active");
    productsControl.classList.remove("active");
    usersControl.classList.remove("active");
    statsControl.classList.remove("active");
    usersMobileControl.classList.remove("active");
    statsMobileControl.classList.remove("active");
    productsMobileControl.classList.remove("active");

    ordersManage.classList.remove("hidden");
    usersManage.classList.add("hidden");
    productsManage.classList.add("hidden");
    productsForm.classList.add("hidden");
    statsManage.classList.add("hidden");
  });

  ordersMobileControl.addEventListener("click", () => {
    if (ordersControl.className.includes("active")) {
      return;
    }

    ordersMobileControl.classList.add("active");
    ordersControl.classList.add("active");
    productsControl.classList.remove("active");
    usersControl.classList.remove("active");
    statsControl.classList.remove("active");
    usersMobileControl.classList.remove("active");
    statsMobileControl.classList.remove("active");
    productsMobileControl.classList.remove("active");

    ordersManage.classList.remove("hidden");
    usersManage.classList.add("hidden");
    productsManage.classList.add("hidden");
    productsForm.classList.add("hidden");
    statsManage.classList.add("hidden");

    overlay.style.display = "none";
    sideBarMobile.style.display = "none";
  });

  statsControl.addEventListener("click", () => {
    if (statsControl.className.includes("active")) {
      return;
    }

    statsMobileControl.classList.add("active");
    statsControl.classList.add("active");
    productsControl.classList.remove("active");
    usersControl.classList.remove("active");
    ordersControl.classList.remove("active");
    productsMobileControl.classList.remove("active");
    usersMobileControl.classList.remove("active");
    ordersMobileControl.classList.remove("active");

    statsManage.classList.remove("hidden");
    usersManage.classList.add("hidden");
    productsManage.classList.add("hidden");
    productsForm.classList.add("hidden");
    ordersManage.classList.add("hidden");
  });

  statsMobileControl.addEventListener("click", () => {
    if (statsControl.className.includes("active")) {
      return;
    }

    statsMobileControl.classList.add("active");
    statsControl.classList.add("active");
    productsControl.classList.remove("active");
    usersControl.classList.remove("active");
    ordersControl.classList.remove("active");
    productsMobileControl.classList.remove("active");
    usersMobileControl.classList.remove("active");
    ordersMobileControl.classList.remove("active");

    statsManage.classList.remove("hidden");
    usersManage.classList.add("hidden");
    productsManage.classList.add("hidden");
    productsForm.classList.add("hidden");
    ordersManage.classList.add("hidden");

    overlay.style.display = "none";
    sideBarMobile.style.display = "none";
  });

  createProductBtn.addEventListener("click", () => {
    createBtn.classList.remove("hidden");
    updateBtn.classList.add("hidden");
    productsForm.classList.remove("hidden");
    productsManage.classList.add("hidden");
    searchName.value = "";
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
    window.location.href = "/";
  });

  sideBarMobileIcon.addEventListener("click", () => {
    overlay.style.display = "block";
    sideBarMobile.style.display = "block";
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    sideBarMobile.style.display = "none";
  });

  sideBarMobileClose.addEventListener("click", () => {
    overlay.style.display = "none";
    sideBarMobile.style.display = "none";
  });

  setInterval(() => {
    desc.style.height = "48px";
    desc.style.height = desc.scrollHeight + "px";
  }, 500);
} else window.location.href = "/";

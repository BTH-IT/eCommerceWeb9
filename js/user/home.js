import { queryAllElement, queryElement } from "../constant.js";

const changeViewEle = queryElement(".products__change-view");
const productListEle = queryElement(".products__item-list");
const sortSelect = queryElement(".products__sort-input");
const dropdownSort = sortSelect.querySelector(".products__sort-dropdown");
const productContainer = queryElement(".products__container");
const filterBtn = productContainer.querySelector(".btn__filter");
const fillerProductEle = productContainer.querySelector(".products__filter");
const searchIcon = queryElement(".header__search-icon");
const searchInputMobile = queryElement(".header__input-mobile");
const searchInputPC = queryElement(".header__input");

changeViewEle.addEventListener("click", (e) => {
  if (e.target.localName !== "i" || e.target.className.includes("active"))
    return;

  const iconActive = changeViewEle.querySelector(".active");
  iconActive.classList.remove("active");
  e.target.classList.add("active");

  if (e.target.className.includes("fa-table-cells")) {
    productListEle.classList.remove("table-list");
    productListEle.classList.add("table-cell");
  } else {
    productListEle.classList.add("table-list");
    productListEle.classList.remove("table-cell");
  }
});

filterBtn.addEventListener("click", () => {
  filterBtn.classList.toggle("active");
  fillerProductEle.classList.toggle("hidden");
});

searchIcon.addEventListener("click", () => {
  searchInputMobile.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!sortSelect.contains(e.target)) {
    dropdownSort.classList.add("hidden");
  }

  if (!fillerProductEle.contains(e.target) && !filterBtn.contains(e.target)) {
    fillerProductEle.classList.add("hidden");
    filterBtn.classList.remove("active");
  }

  if (!searchInputMobile.contains(e.target) && !searchIcon.contains(e.target)) {
    searchInputMobile.classList.add("hidden");
  }

  if (!searchInputPC.contains(e.target)) {
    searchInputPC
      .querySelector(".header__input-suggest")
      .classList.add("hidden");
  }

  if (!searchInputMobile.contains(e.target)) {
    searchInputMobile
      .querySelector(".header__input-suggest")
      .classList.add("hidden");
  }
});

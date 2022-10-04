import { queryElement } from "../../constant.js";
import { productList } from "../../data.js";
import { renderProducts } from "../renderProducts.js";

let searchValue;

const searchPC = queryElement(".header__input");
const searchInputPC = searchPC.querySelector("input");
const searchIconPC = searchPC.querySelector(".header__input-icon");
const suggestPC = searchPC.querySelector(".header__input-suggest");

const searchMobile = queryElement(".header__input-mobile");
const searchInputMobile = searchMobile.querySelector("input");
const suggestMobile = searchMobile.querySelector(".header__input-suggest");

function handleSearch(value, element) {
  const suggestEle = element.querySelector(".header__input-suggest");
  if (value) {
    const suggestList = productList.filter((product) => {
      const name = product.name.trim().toLowerCase();
      return name.includes(value.trim().toLowerCase());
    });

    const suggestListHTML = suggestList
      .map((suggest) => `<li>${suggest.name.toLowerCase()}</li>`)
      .join("");
    suggestEle.innerHTML = suggestListHTML;
  } else {
    suggestEle.innerHTML = "";
  }
}

searchInputPC.addEventListener("keyup", (e) => {
  handleSearch(e.target.value, searchPC);
  if (e.code === "Enter") {
    searchValue = e.target.value;
    renderProducts();
    suggestPC.classList.add("hidden");
  }
});

searchIconPC.addEventListener("click", () => {
  searchValue = searchInputPC.value;
  renderProducts();
});

searchInputPC.onfocus = () => {
  suggestPC.classList.remove("hidden");
};

suggestPC.addEventListener("click", (e) => {
  if (e.target.localName !== "li") return;
  searchInputPC.value = e.target.innerText;
  searchValue = searchInputPC.value;
  handleSearch(searchInputPC.value, searchPC);
  suggestPC.classList.add("hidden");
  renderProducts();
});

searchInputMobile.addEventListener("keyup", (e) => {
  handleSearch(e.target.value, searchMobile);
  if (e.code === "Enter") {
    searchValue = e.target.value;
    suggestMobile.classList.add("hidden");
    renderProducts();
  }
});

suggestMobile.addEventListener("click", (e) => {
  if (e.target.localName !== "li") return;
  searchInputMobile.value = e.target.innerText;
  searchValue = searchInputMobile.value;
  handleSearch(searchInputMobile.value, searchMobile);
  suggestMobile.classList.add("hidden");
  renderProducts();
});

searchInputMobile.onfocus = () => {
  suggestMobile.classList.remove("hidden");
};

export { searchValue };

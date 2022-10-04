import { queryElement } from "../../constant.js";
import { renderProducts } from "../renderProducts.js";

const typeListEle = document.querySelector(".products__type-list");
const filterBtn = queryElement(".btn--filter");
const inputFrom = queryElement("#input-from");
const inputTo = queryElement("#input-to");

let filterType;
const filterPrice = {
  from: 0,
  to: 0,
};

typeListEle.addEventListener("click", (e) => {
  if (e.target.localName !== "li") return;

  if (e.target.className.includes("active")) {
    e.target.classList.remove("active");
    filterType = "";
    renderProducts();
  } else {
    typeListEle.querySelector(".active")?.classList.remove("active");
    e.target.classList.add("active");
    filterType = e.target.innerText;
    renderProducts();
  }
});

filterBtn.addEventListener("click", () => {
  filterPrice.from = inputFrom.value;
  filterPrice.to = inputTo.value;
  renderProducts();
});

export { filterType, filterPrice };

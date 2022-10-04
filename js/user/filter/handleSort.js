import { queryElement } from "../../constant.js";
import { renderProducts } from "../renderProducts.js";

const sortSelect = queryElement(".products__sort-input");
const dropdownSort = sortSelect.querySelector(".products__sort-dropdown");

let sortValue;

sortSelect.addEventListener("click", (e) => {
  dropdownSort.classList.toggle("hidden");
  if (e.target.localName === "li") {
    const textSortSelect = sortSelect.querySelector("span");
    textSortSelect.innerText =
      e.target.dataset.value.length > 7
        ? e.target.dataset.value.slice(0, 7) + "…"
        : e.target.dataset.value;
    sortValue = e.target.dataset.value.toLowerCase();
    renderProducts();
  }
});

export { sortValue };

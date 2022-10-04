import { queryElement } from "../../constant.js";
import { typeProductList } from "../../data.js";

const typeProductListEle = queryElement(".products__type-list");

const typeProductListHTML = typeProductList
  .map((typeProduct) => {
    return `
      <li>${typeProduct}</li>
  `;
  })
  .join("");

typeProductListEle.innerHTML = typeProductListHTML;

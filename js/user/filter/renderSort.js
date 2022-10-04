import { queryElement } from "../../constant.js";
import { sortList } from "../../data.js";

const sortListEle = queryElement(".products__sort-dropdown");

const sortListEleHTML = sortList
  .map((sortName) => {
    return `
      <li data-value="${sortName}">${sortName}</li>
  `;
  })
  .join("");

sortListEle.innerHTML = sortListEleHTML;

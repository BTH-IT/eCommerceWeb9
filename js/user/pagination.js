import { queryElement } from "../constant.js";
import { renderProductPage } from "./renderProducts.js";

const limitProductPage = 8;
const limitPagination = 3;
let currentPage = 1;
let totalPages;

const paginationELe = queryElement(".pagination");
const paginationListEle = queryElement(".pagination__list");
const paginationLeft = queryElement(".pagination__left");
const paginationRight = queryElement(".pagination__right");

function handleSlicePagination(productHandledList) {
  totalPages = Math.ceil(productHandledList.length / limitProductPage);

  const slicePagination = [];
  for (let i = 1; i <= totalPages; i++) {
    slicePagination.push(productHandledList.splice(0, 8));
  }
  renderPagination();
  return slicePagination;
}

function renderPagination(idx = 1, pages = limitPagination) {
  const paginationList = [];
  if (totalPages === 1) {
    paginationELe.classList.add("hidden");
    return;
  }
  paginationELe.classList.remove("hidden");

  if (totalPages <= limitPagination) pages = totalPages;

  for (idx; idx <= pages; idx++) {
    paginationList.push(
      `<li class="pagination__item ${
        idx === 1 ? "active" : ""
      }" data-page=${idx}>${idx}</li>`
    );
  }
  paginationListEle.innerHTML = paginationList.join("");

  paginationListEle.addEventListener("click", (e) => {
    if (e.target.localName !== "li") return;
    handleMovingPage(e.target);
  });

  if (paginationList.length === 1) paginationRight.classList.add("disable");
  else paginationRight.classList.remove("disable");

  const activeElement = paginationListEle.querySelector(".active");
  if (Number(activeElement?.dataset.page) === 1) {
    paginationLeft.classList.add("disable");
  }
}

function addAndRemoveActive(item) {
  const activeElement = paginationListEle.querySelector(".active");
  activeElement?.classList.remove("active");
  item?.classList.add("active");
}

function handleMovingPage(liElement) {
  if (liElement.className.includes("active")) return;
  currentPage = Number(liElement.dataset.page);

  if (currentPage <= 1) paginationLeft.classList.add("disable");
  else paginationLeft.classList.remove("disable");

  if (currentPage >= totalPages) paginationRight.classList.add("disable");
  else paginationRight.classList.remove("disable");

  addAndRemoveActive(liElement);
  renderProductPage(currentPage);
  window.scrollTo(0, 0);
}

function handlePreviousPage() {
  if (currentPage <= 1) return;
  paginationRight?.classList.remove("disable");

  currentPage--;
  if (currentPage === 1) paginationLeft?.classList.add("disable");
  else paginationLeft?.classList.remove("disable");

  if (currentPage % limitPagination === 0) {
    renderPagination(currentPage - limitPagination + 1, currentPage);
  }

  const activeEle = paginationListEle.querySelector(
    `[data-page='${currentPage}']`
  );
  addAndRemoveActive(activeEle);
  renderProductPage(currentPage);
  window.scrollTo(0, 0);
}

function handleNextPage() {
  if (currentPage >= totalPages) {
    paginationRight?.classList.add("disable");
    return;
  }

  currentPage++;
  if (currentPage === totalPages) paginationRight?.classList.add("disable");
  else paginationRight?.classList.remove("disable");
  paginationLeft?.classList.remove("disable");

  if ((currentPage - 1) % limitPagination === 0) {
    if (totalPages - currentPage < limitPagination)
      renderPagination(currentPage, totalPages);
    else renderPagination(currentPage - 1, currentPage + limitPagination);
  }

  const activeEle = paginationListEle.querySelector(
    `[data-page='${currentPage}']`
  );
  addAndRemoveActive(activeEle);
  renderProductPage(currentPage);
  window.scrollTo(0, 0);
}

paginationLeft.addEventListener("click", handlePreviousPage);
paginationRight.addEventListener("click", handleNextPage);

export { handleSlicePagination };

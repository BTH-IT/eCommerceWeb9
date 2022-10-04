import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../constant.js";
import { renderProductForm } from "./handleFormProduct.js";

const modal = queryElement(".modal");
const modalListBtn = queryAllElement(".btn__modal");
const products = queryElement(".products");
const productsManage = products.querySelector(".products-manage");
const productsForm = queryElement(".products-form");

function renderProductsManage() {
  const productList = getLocalStorage("productList");
  const productsHTML = productList
    .map((product) => {
      return `
        <div class="products-manage__item">
          <div class="products-manage__info">
            <div class="products-manage__image">
              <img
                src=${product.imagePrimary}
                alt="" class="products-manage__img">
            </div>
            <div class="products-manage__content">
              <h2 class="products-manage__title">${product.name}</h2>
              <div class="products-manage__price">
                $${product.salePercent ? product.salePrice : product.prePrice}
              </div>
            </div>
          </div>
          <div class="products-manage__method" data-id=${product.id}>
            <button class="btn btn--update">Update</button>
            <button class="btn btn--delete">
              Delete
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  productsManage.innerHTML = productsHTML;

  const deleteProductListBtn = productsManage.querySelectorAll(".btn--delete");
  const updateProductListBtn = productsManage.querySelectorAll(".btn--update");

  deleteProductListBtn.forEach((deleteProductBtn) => {
    deleteProductBtn.addEventListener("click", () => {
      modal.dataset.idProduct = deleteProductBtn.parentElement.dataset.id;
      modal.classList.remove("hidden");
    });
  });

  updateProductListBtn.forEach((updateProductBtn) => {
    updateProductBtn.addEventListener("click", () => {
      const id = Number(updateProductBtn.parentElement.dataset.id);
      productsForm.dataset.idProduct = id;
      products.classList.add("hidden");
      productsForm.classList.remove("hidden");
      renderProductForm(id);
    });
  });
}

modalListBtn.forEach((modalBtn) => {
  modalBtn.addEventListener("click", () => {
    if (modalBtn.innerText.toLowerCase() === "yes") {
      const id = Number(modal.dataset.idProduct);
      const productList = getLocalStorage("productList");
      const newProductList = productList.filter((product) => product.id !== id);
      setLocalStorage("productList", newProductList);
      renderProductsManage();
    }
    modal.classList.add("hidden");
  });
});

renderProductsManage();

export { renderProductsManage };

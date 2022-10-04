import { queryAllElement, queryElement } from "../../constant.js";
import { productList } from "../../data.js";
import { cartList, renderCartList } from "./renderCart.js";

const modalSizeEle = queryElement(".modal");
const modalBtn = queryElement(".btn__modal");
const addCartIconEleList = queryAllElement(".products__item-cart");

addCartIconEleList.forEach((addCartIconEle) => {
  addCartIconEle.addEventListener("click", () => {
    modalSizeEle.dataset.id = addCartIconEle.dataset.id;
    modalSizeEle.classList.remove("hidden");
  });
});

modalBtn?.addEventListener("click", () => {
  const chooseSize = modalSizeEle.querySelector("input:checked");
  let chooseProduct = productList.find(
    (product) => product.id === Number(modalSizeEle.dataset.id)
  );

  const isHasInCartList = cartList.findIndex(
    (cart) => cart.id === chooseProduct.id && cart.size === chooseSize.value
  );

  if (isHasInCartList !== -1) {
    cartList[isHasInCartList].count++;
  } else {
    chooseProduct = {
      ...chooseProduct,
      size: chooseSize.value,
      count: 1,
    };
    cartList.push(chooseProduct);
  }

  renderCartList();
  modalSizeEle.classList.add("hidden");
});

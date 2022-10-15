import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../../constant.js";
import { updateCartList } from "./handleCart.js";

const table = queryElement(".cart-list");
const totalPrice = queryElement(".cart-list__total-price");
const clearBtn = queryElement(".clear");
const buyBtn = queryElement(".buy");
const cartList = getLocalStorage("cartList");

function renderCartList() {
  if (cartList.length <= 0) {
    table.innerHTML = "<h1 class='cart-empty'>Cart is empty!!!</h1>";
    totalPrice.innerText = "$0";
    setLocalStorage("cartList", cartList);
    updateCartList(cartList);
    return;
  }

  const cartListHTML = cartList
    .map(
      (cart) => `
        <tr class="cart-list__row">
          <td class="cart-list__image">
            <img src=${cart.imagePrimary} alt=""
              class="cart-list__img">
          </td>
          <td class="cart-list__product-name">${cart.name}</td>
          <td class="cart-list__product-size">${cart.size}</td>
          <td class="cart-list__unit-price">
            <span>$${cart.salePercent ? cart.salePrice : cart.prePrice}</span>
          </td>
          <td>
            <div  
                class="cart-list__quantity"
                data-id="${cart.id}"
                data-size="${cart.size}"
            >
              <span class="cart-list__btn-quantity minus">-</span>
              <input
                type="number"
                min="1"
                value="${cart.count}"
                class="cart-list__input-quantity"
              >
              <span class="cart-list__btn-quantity plus">+</span>
            </div>
          </td>
          <td class="cart-list__delete-icon">
            <span data-id="${cart.id}" data-size="${cart.size}">
              <i class="fa-solid fa-trash"></i>
            </span>
          </td>
        </tr>
      `
    )
    .join("");

  const total = cartList.reduce((pre, curr) => {
    const price = curr.salePercent ? curr.salePrice : curr.prePrice;
    return pre + price * curr.count;
  }, 0);

  table.innerHTML = `
    <table class="cart-list__table">
      <thead>
        <tr class="cart-list__heading">
          <th>image</th>
          <th>product name</th>
          <th>size</th>
          <th>unit price</th>
          <th>Quantity</th>
          <th>edit</th>
        </tr>
      </thead>
      <tbody>
        ${cartListHTML}
      </tbody>
    </table>
  `;

  totalPrice.innerText = `$${total.toFixed(2)}`;
  const minusBtn = queryAllElement(".minus");
  const plusBtn = queryAllElement(".plus");
  const deleteBtn = queryAllElement(".cart-list__delete-icon span");
  const inputQuantity = queryAllElement(".cart-list__input-quantity");

  minusBtn.forEach((minus) => {
    minus.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      const size = e.target.parentElement.dataset.size;
      const cartIdx = cartList.findIndex(
        (cart) => cart.id === Number(id) && cart.size === size
      );

      if (cartList[cartIdx].count === 1) {
        cartList.splice(cartIdx, 1);
      } else {
        cartList[cartIdx].count--;
      }
      renderCartList();
    });
  });

  plusBtn.forEach((plus) => {
    plus.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      const size = e.target.parentElement.dataset.size;
      const cartIdx = cartList.findIndex(
        (cart) => cart.id === Number(id) && cart.size === size
      );

      cartList[cartIdx].count++;
      renderCartList();
    });
  });

  deleteBtn.forEach((delBtn) => {
    delBtn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const size = e.target.dataset.size;
      const cartIdx = cartList.findIndex(
        (cart) => cart.id === Number(id) && cart.size === size
      );

      cartList.splice(cartIdx, 1);
      renderCartList();
    });
  });

  inputQuantity.forEach((input) => {
    input.addEventListener("change", (e) => {
      const id = e.target.parentElement.dataset.id;
      const size = e.target.parentElement.dataset.size;
      const cartIdx = cartList.findIndex(
        (cart) => cart.id === Number(id) && cart.size === size
      );

      cartList[cartIdx].count = Number(e.target.value);
      renderCartList();
    });
  });
  setLocalStorage("cartList", cartList);
  updateCartList(cartList);
}

clearBtn.addEventListener("click", () => {
  cartList.splice(0, cartList.length);
  setLocalStorage("cartList", cartList);
  updateCartList(cartList);
  renderCartList();
});

buyBtn.addEventListener("click", () => {
  const currentUser = getLocalStorage("currentUser");
  if (currentUser) {
    const orderList = getLocalStorage("orderList");

    cartList.forEach((cart) => {
      const orderIdx = orderList.findIndex(
        (order) => order.id === cart.id && order.size === cart.size
      );

      if (orderIdx !== -1) {
        orderList[orderIdx].count += cart.count;
      } else {
        orderList.push(cart);
      }
    });

    cartList.splice(0, cartList.length);
    setLocalStorage("cartList", cartList);
    setLocalStorage("orderList", orderList);
    updateCartList(cartList);
    renderCartList();
  } else window.location.assign(window.location.origin + "/sign-in.html");
});

renderCartList();

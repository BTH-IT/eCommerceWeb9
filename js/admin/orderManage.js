import {
  getLocalStorage,
  queryElement,
  setLocalStorage,
} from "../constant.js";
import { renderStatsManage } from "./statsManage.js";

const orders = queryElement(".orders");
const ordersManage = orders.querySelector(".orders-manage");

function renderOrdersManage() {
  window.scroll(0, 0);
  const orderList = getLocalStorage("orderList");
  const ordersHTML = orderList
    .map((order, idx) => {
      return `
        <div class="orders-manage__item">
          <div class="orders-manage__info">
            <div class="orders-manage__image">
              <img
                src=${order.imagePrimary}
                alt="" class="orders-manage__img">
            </div>
            <div class="orders-manage__content">
              <h2 class="orders-manage__title">${order.name}</h2>
              <div class="orders-manage__price">
                $${order.salePercent ? order.salePrice : order.prePrice}
              </div>
              <div class="orders-manage__size">Size: <span>${order.size}</span></div>
              <div class="orders-manage__amount">Amount: ${order.count}</div>
              <div class="orders-manage__date">Purchase Date: ${order.createdAt}</div>
              <div class="orders-manage__username">Customer: ${order.owner}</div>
              <div class="orders-manage__id">Customer Id: ${order.ownerId}</div>
            </div>
          </div>
          <div class="order-manage__method">
            <select class="orders-manage__select" data-idx=${idx}>
              <option value="not-delivery" ${order.statusDelivery === 'not-delivery' ? "selected" : ""}>Not delivery</option>
              <option value="delivering" ${order.statusDelivery === 'delivering' ? "selected" : ""}>Delivering</option>
            </select>
            <div class="orders-manage__btn-container">
              <button class="orders-manage__btn done" type="button" data-idx=${idx}>Done</button>
              <button class="orders-manage__btn delete" type="button" data-idx=${idx}>Delete</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  ordersManage.innerHTML = ordersHTML;

  const selectOrderList = ordersManage.querySelectorAll(".orders-manage__select");
  const btnDeleteOrderList = ordersManage.querySelectorAll(".orders-manage__btn.delete");
  const btnDoneOrderList = ordersManage.querySelectorAll(".orders-manage__btn.done");

  selectOrderList.forEach((select) => {
    select.addEventListener("change", () => {
      const orderIdx = Number(select.dataset.idx);
      orderList[orderIdx].statusDelivery = select.value;

      setLocalStorage("orderList", orderList);
    })
  });

  btnDoneOrderList.forEach((btn) => {
    btn.addEventListener("click", () => {
      const orderIdx = Number(btn.dataset.idx);
      if (orderList[orderIdx].statusDelivery !== 'delivering') {
        window.alert("Status isn't delivering!!!");
        return;
      }

      const statsList = getLocalStorage("statsList");
      statsList.push(orderList[orderIdx]);
      orderList.splice(orderIdx, 1);

      setLocalStorage("orderList", orderList);
      setLocalStorage("statsList", statsList);
      renderStatsManage();
      renderOrdersManage();
    })
  });

  btnDeleteOrderList.forEach((btn) => {
    btn.addEventListener("click", () => {
      const orderIdx = Number(btn.dataset.idx);
      orderList.splice(orderIdx, 1);

      setLocalStorage("orderList", orderList);
      renderOrdersManage();
    })
  });
}

renderOrdersManage();

export { renderOrdersManage };

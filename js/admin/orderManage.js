import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../constant.js";

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
              <div class="orders-manage__size">Size: ${order.size}</div>
              <div class="orders-manage__date">Purchase Date: ${order.createdAt}</div>
              <div class="orders-manage__username">Customer: ${order.owner}</div>
              <div class="orders-manage__id">Customer Id: ${order.ownerId}</div>
            </div>
          </div>
          <select class="orders-manage__select" data-idx=${idx}>
            <option value="not-delivery" ${order.statusDelivery === 'not-delivery' ? "selected" : ""}>Not delivery</option>
            <option value="delivered" ${order.statusDelivery === 'delivered' ? "selected" : ""}>Delivered</option>
          </select>
        </div>
      `;
    })
    .join("");

  ordersManage.innerHTML = ordersHTML;

  const selectOrderList = ordersManage.querySelectorAll(".orders-manage__select");

  selectOrderList.forEach((select) => {
    select.addEventListener("change", () => {
      const orderIdx = Number(select.dataset.idx);
      orderList[orderIdx].statusDelivery = select.value;

      setLocalStorage("orderList", orderList);
    })
  });
}

renderOrdersManage();

export { renderOrdersManage };

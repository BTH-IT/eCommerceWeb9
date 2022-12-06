import {
  getLocalStorage,
  queryElement,
  setLocalStorage,
} from "../constant.js";
import { typeProductList } from "../data.js";
import { renderStatsManage } from "./statsManage.js";

const orders = queryElement(".orders");
const ordersManage = orders.querySelector(".orders-manage");
const dateFrom = orders.querySelector("#dateFrom");
const dateTo = orders.querySelector("#dateTo");
const selectType = orders.querySelector(".orders__filter-type select");
const searchId = orders.querySelector(".orders__filter-user input");

const typeList = ['All', ...typeProductList];

selectType.innerHTML = typeList.map((type, idx) =>
  `<option value="${type}" ${idx === 0 ? 'selected' : ''}>${type}</option>`
)

function renderOrdersManage(orderList = getLocalStorage("orderList")) {
  window.scroll(0, 0);
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
              <div class="orders-manage__type"><b>Type:</b> <span>${order.type}</span></div>
              <div class="orders-manage__size"><b>Size:</b> <span>${order.size}</span></div>
              <div class="orders-manage__amount"><b>Amount:</b> ${order.count}</div>
              <div class="orders-manage__date"><b>Purchase Date:</b> ${order.createdAt}</div>
              <div class="orders-manage__username"><b>Customer:</b> ${order.owner}</div>
              <div class="orders-manage__id"><b>Customer Id:</b> ${order.ownerId}</div>
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

function formatDate(date) {
  const dateArr = date.split("-");
  return Number(dateArr[1]) + "/" + Number(dateArr[2]) + "/" + dateArr[0];
}

function filterDate(date, from, to) {
  if (!from && !to) return true;
  if (from && !to) return date >= formatDate(from);
  if (!from && to) return date <= formatDate(to);
  return date >= formatDate(from) && date <= formatDate(to);
}

function filterOrdersManage() {
  const orderList = getLocalStorage("orderList");
  let filterOrder = orderList.filter((order) => filterDate(order.createdAt, dateFrom.value, dateTo.value));
  if (selectType.value !== 'All') {
    filterOrder = filterOrder.filter((order) => order.type === selectType.value);
  }

  if (searchId.value && Number(searchId.value) !== 'NaN') {
    const id = Number(searchId.value);
    filterOrder = filterOrder.filter((order) => order.ownerId === id);
  }

  renderOrdersManage(filterOrder);
}

dateFrom.addEventListener("change", filterOrdersManage)

dateTo.addEventListener("change", filterOrdersManage)

selectType.addEventListener("change", filterOrdersManage)

searchId.addEventListener("keyup", filterOrdersManage)

renderOrdersManage();

export { renderOrdersManage };

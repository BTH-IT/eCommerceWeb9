import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../constant.js";
import { typeProductList } from "../data.js";
import { toast } from "../toast.js";
import { renderStatsManage } from "./statsManage.js";

const orders = queryElement(".orders");
const ordersManage = orders.querySelector(".orders-manage");
const dateFrom = orders.querySelector("#dateFrom");
const dateTo = orders.querySelector("#dateTo");
const selectType = orders.querySelector(".orders__filter-type select");
const searchId = orders.querySelector(".orders__filter-user input");
const modalListBtn = queryAllElement(".btn__modal");
const modal = queryElement(".modal");

const typeList = ["All", ...typeProductList];

selectType.innerHTML = typeList.map(
  (type, idx) =>
    `<option value="${type}" ${idx === 0 ? "selected" : ""}>${type}</option>`
);

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
              <div class="orders-manage__type"><b>Type:</b> <span>${
                order.type
              }</span></div>
              <div class="orders-manage__size"><b>Size:</b> <span>${
                order.size
              }</span></div>
              <div class="orders-manage__amount"><b>Amount:</b> ${
                order.count
              }</div>
              <div class="orders-manage__date"><b>Purchase Date:</b> ${
                order.createdAt
              }</div>
              <div class="orders-manage__id"><b>Customer Id:</b> ${
                order.userId
              }</div>
              <div class="orders-manage__username"><b>Fullname:</b> ${
                order.receiver
              }</div>
              <div class="orders-manage__phone"><b>Phone number:</b> ${
                order.phone
              }</div>
              <div class="orders-manage__address"><b>Address:</b> ${
                order.address
              }</div>
              <div class="orders-manage__note"><b>Note:</b> ${
                !order.note ? "nothing" : order.note
              }</div>
            </div>
          </div>
          <div class="order-manage__method">
            <select class="orders-manage__select" data-idx=${idx}>
              <option value="non-delivery" ${
                order.statusDelivery === "non-delivery" ? "selected" : ""
              }>Non-delivery</option>
              <option value="delivering" ${
                order.statusDelivery === "delivering" ? "selected" : ""
              }>Delivering</option>
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

  ordersManage.innerHTML =
    ordersHTML || "<div class='empty'>There're no orders</div>";

  const selectOrderList = ordersManage.querySelectorAll(
    ".orders-manage__select"
  );
  const btnDeleteOrderList = ordersManage.querySelectorAll(
    ".orders-manage__btn.delete"
  );
  const btnDoneOrderList = ordersManage.querySelectorAll(
    ".orders-manage__btn.done"
  );

  selectOrderList.forEach((select) => {
    select.addEventListener("change", () => {
      const orderIdx = Number(select.dataset.idx);
      orderList[orderIdx].statusDelivery = select.value;

      setLocalStorage("orderList", orderList);
    });
  });

  btnDoneOrderList.forEach((btn) => {
    btn.addEventListener("click", () => {
      const orderIdx = Number(btn.dataset.idx);
      if (orderList[orderIdx].statusDelivery !== "delivering") {
        toast({
          title: "Oops!!!",
          message: "The status of the order is currently non-delivery",
          type: "error",
          duration: 3000,
        });
        return;
      }

      const statsList = getLocalStorage("statsList");
      statsList.push(orderList[orderIdx]);
      orderList.splice(orderIdx, 1);

      setLocalStorage("orderList", orderList);
      setLocalStorage("statsList", statsList);
      renderStatsManage();
      renderOrdersManage();

      toast({
        title: "Successfully!!!",
        message: "Done",
        type: "success",
        duration: 1000,
      });
    });
  });

  btnDeleteOrderList.forEach((btn) => {
    btn.addEventListener("click", () => {
      const orderIdx = Number(btn.dataset.idx);
      modal.dataset.idx = orderIdx;
      modal.classList.remove("hidden");
    });
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
  let filterOrder = orderList.filter((order) =>
    filterDate(order.createdAt, dateFrom.value, dateTo.value)
  );
  if (selectType.value !== "All") {
    filterOrder = filterOrder.filter(
      (order) => order.type === selectType.value
    );
  }

  if (searchId.value && Number(searchId.value) !== "NaN") {
    const id = Number(searchId.value);
    filterOrder = filterOrder.filter((order) =>
      String(order.userId).includes(String(id))
    );
  }

  renderOrdersManage(filterOrder);
}

modalListBtn.forEach((modalBtn) => {
  modalBtn.addEventListener("click", () => {
    if (modalBtn.innerText.toLowerCase() === "yes") {
      const orderIdx = Number(modal.dataset.idx);
      const orderList = getLocalStorage("orderList");
      orderList.splice(orderIdx, 1);

      setLocalStorage("orderList", orderList);
      renderOrdersManage();
    }
    modal.classList.add("hidden");
  });
});

dateFrom.addEventListener("change", filterOrdersManage);

dateTo.addEventListener("change", filterOrdersManage);

selectType.addEventListener("change", filterOrdersManage);

searchId.addEventListener("keyup", filterOrdersManage);

renderOrdersManage();

export { renderOrdersManage };

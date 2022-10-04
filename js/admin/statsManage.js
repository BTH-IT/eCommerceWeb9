import { getLocalStorage, queryElement } from "../constant.js";
import { typeProductList } from "../data.js";

const statsManage = queryElement(".stats__list");
const statTotal = queryElement(".stats-all-total span");

const orderList = getLocalStorage("orderList");
const stats = [];

if (orderList) {
  typeProductList.forEach((type) => {
    const typeList = orderList.filter((order) => order.type === type);
    let count = 0;
    const total = typeList.reduce((pre, curr) => {
      const price = curr.salePercent ? curr.salePrice : curr.prePrice;
      count += curr.count;
      return pre + price * curr.count;
    }, 0);

    stats.push({
      total: total.toFixed(2),
      type,
      count,
    });
  });

  const statsHTML = stats
    .map((stat) => {
      return `
        <div class="stats__item">
          <div class="stats__info">
            <h3 class="stats__title">${stat.type}</h3>
            <div class="stats__quantity">
              Quantity: <span>${stat.count}</span>
            </div>
          </div>
          <div class="stats__total">
            Total: <span>${stat.total}$</span>
          </div>
        </div>
      `;
    })
    .join("");

  statsManage.innerHTML = statsHTML;

  statTotal.innerText = stats.reduce(
    (pre, curr) => pre + Number(curr.total),
    0
  );
}

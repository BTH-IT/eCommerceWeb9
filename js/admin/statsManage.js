import { getLocalStorage, queryElement } from "../constant.js";
import { typeProductList } from "../data.js";
import { filterDate } from "./orderManage.js";

const statsManage = queryElement(".stats__list");
const statTotal = queryElement(".stats-all-total span");
const dateFrom = queryElement(".stats__filter-date #dateFrom");
const dateTo = queryElement(".stats__filter-date #dateTo");

function renderStatsManage() {
  const statsList = getLocalStorage("statsList");
  const stats = [];
  const statsFilter = statsList.filter((order) =>
    filterDate(order.createdAt, dateFrom.value, dateTo.value)
  );

  if (statsList) {
    typeProductList.forEach((type) => {
      const typeList = statsFilter.filter(
        (order) => order.type.toLowerCase() === type.toLowerCase()
      );
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

    statTotal.innerText = `${stats
      .reduce((pre, curr) => pre + Number(curr.total), 0)
      .toFixed(2)}$`;
  }
}

renderStatsManage();

dateFrom.addEventListener("change", renderStatsManage);

dateTo.addEventListener("change", renderStatsManage);

export { renderStatsManage };

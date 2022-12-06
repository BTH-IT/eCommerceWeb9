import { getLocalStorage, queryElement, setLocalStorage } from "../constant.js";
import { toast } from "../toast.js";

const table = queryElement(".history");
const clearBtn = queryElement(".clear");
const currentUser = getLocalStorage("currentUser");
const yesBtn = queryElement("button[data-value='yes']");
const noBtn = queryElement("button[data-value='no']");
const modal = queryElement(".modal");

function renderHistory() {
  if (!currentUser) {
    window.location.href = "/sign-in.html";
    return;
  }

  const history = currentUser.history;
  if (history.length <= 0) {
    table.innerHTML = "<h1 class='history-empty'>History is empty!!!</h1>";
    return;
  }

  const historyHTML = history
    .map(
      (history) => `
        <tr class="history__row">
          <td class="history__image">
            <img src=${history.imagePrimary} alt=""
              class="history__img">
          </td>
          <td class="history__product-name">${history.name}</td>
          <td class="history__product-size">${history.size}</td>
          <td class="history__unit-price">
            <span>$${
              history.salePercent ? history.salePrice : history.prePrice
            }</span>
          </td>
          <td>
            <span class="history__product-count">${history.count}</span>
          </td>
          <td>
            <span class="history__product-date">${history.createdAt}</span>
          </td>
        </tr>
      `
    )
    .join("");

  table.innerHTML = `
    <table class="history__table">
      <thead>
        <tr class="history__heading">
          <th>image</th>
          <th>product name</th>
          <th>size</th>
          <th>price</th>
          <th>Quantity</th>
          <th>purchase date</th>
        </tr>
      </thead>
      <tbody>
        ${historyHTML}
      </tbody>
    </table>
  `;
}

clearBtn.addEventListener("click", () => {
  if (currentUser && currentUser.history.length <= 0) {
    toast({
      title: "Oops!!!",
      message: "History is empty...",
      type: "warning",
      duration: 2000,
    });
    return;
  }

  modal.classList.remove("hidden");
});

yesBtn.addEventListener("click", () => {
  toast({
    title: "Successfully!!!",
    message: "Done",
    type: "success",
    duration: 2000,
  });

  currentUser.history.splice(0, currentUser.history.length);
  const userList = getLocalStorage("userList");
  const userIdx = userList.findIndex((user) => user.id === currentUser.id);

  userList[userIdx] = currentUser;

  setLocalStorage("currentUser", currentUser);
  setLocalStorage("userList", userList);
  renderHistory();
  modal.classList.add("hidden");
});

noBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

renderHistory();

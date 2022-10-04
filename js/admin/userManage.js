import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../constant.js";

const modalListBtn = queryAllElement(".btn__modal");
const usersManage = queryElement(".users-manage");
const modal = queryElement(".modal");

function renderUserList() {
  const userList = getLocalStorage("userList");

  const userListHTML = userList
    .map((user) => {
      if (user.isAdmin) return;
      return `
    <div class="users-manage__item" data-id="${user.id}">
      <h2 class="username">${user.username}</h2>
      <button class="btn btn--delete" data-id="${user.id}">
        Delete
      </button>
    </div>
  `;
    })
    .join("");

  usersManage.innerHTML = userListHTML;

  const deleteUserListBtn = usersManage.querySelectorAll(".btn--delete");

  deleteUserListBtn.forEach((deleteUserBtn) => {
    deleteUserBtn.addEventListener("click", () => {
      modal.dataset.idUser = deleteUserBtn.dataset.id;
      modal.classList.remove("hidden");
    });
  });
}

renderUserList();

modalListBtn.forEach((modalBtn) => {
  modalBtn.addEventListener("click", () => {
    if (modalBtn.innerText.toLowerCase() === "yes") {
      const id = Number(modal.dataset.idUser);
      const userList = getLocalStorage("userList");
      const newUserList = userList.filter((user) => user.id !== id);
      setLocalStorage("userList", newUserList);
      renderUserList();
    }
    modal.classList.add("hidden");
  });
});

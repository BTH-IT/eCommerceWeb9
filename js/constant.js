function queryElement(query) {
  return document.querySelector(query);
}

function queryAllElement(query) {
  return document.querySelectorAll(query);
}

const setLocalStorage = (name, value) => {
  window.localStorage.setItem(name, JSON.stringify(value));
};

const getLocalStorage = (name) => {
  return JSON.parse(window.localStorage.getItem(name));
};

function updateCartList(newCartList) {
  const currentUser = getLocalStorage("currentUser");
  if (!currentUser) return;
  currentUser.cartList = newCartList;

  let userList = getLocalStorage("userList");
  userList = userList.map((user) => {
    if (user.id === currentUser.id) {
      return {
        ...user,
        cartList: newCartList,
      };
    }
    return user;
  });
  setLocalStorage("currentUser", currentUser);
  setLocalStorage("userList", userList);
}

export {
  setLocalStorage,
  getLocalStorage,
  queryAllElement,
  queryElement,
  updateCartList,
};

import { getLocalStorage, setLocalStorage } from "./constant.js";
import { productList } from "./data.js";

if (!getLocalStorage("productList"))
  setLocalStorage("productList", productList);

if (!getLocalStorage("cartList")) setLocalStorage("cartList", []);

if (!getLocalStorage("orderList")) setLocalStorage("orderList", []);
if (!getLocalStorage("statsList")) setLocalStorage("statsList", []);

if (!getLocalStorage("userList")) {
  setLocalStorage("userList", [
    {
      id: 1,
      username: "bth3103",
      password: "3103",
      isAdmin: true,
      cartList: [],
      history: [],
    },
  ]);
}

if (!getLocalStorage("currentUser")) {
  setLocalStorage("currentUser", null);
}

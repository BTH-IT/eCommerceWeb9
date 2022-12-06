import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../../constant.js";
import { toast } from "../../toast.js";
import { validation } from "../sign/validation.js";
import { updateCartList } from "./handleCart.js";

const totalPrice = queryElement(".cart-list__total-price");
const table = queryElement(".cart-list");
const clearBtn = queryElement(".clear");
const buyBtn = queryElement(".buy");
const cartList = getLocalStorage("cartList");
const modal = queryElement(".modal");
const modalContent = queryElement(".modal__content");

function renderCartList() {
  if (cartList.length <= 0) {
    table.innerHTML = "<h1 class='cart-empty'>Cart is empty!!!</h1>";
    totalPrice.innerText = "$0";
    setLocalStorage("cartList", cartList);
    updateCartList(cartList);
    return;
  }

  const cartListHTML = cartList
    .map(
      (cart) => `
        <tr class="cart-list__row">
          <td class="cart-list__image">
            <img src=${cart.imagePrimary} alt=""
              class="cart-list__img">
          </td>
          <td class="cart-list__product-name">${cart.name}</td>
          <td class="cart-list__product-size">${cart.size}</td>
          <td class="cart-list__unit-price">
            <span>$${cart.salePercent ? cart.salePrice : cart.prePrice}</span>
          </td>
          <td>
            <div  
                class="cart-list__quantity"
                data-id="${cart.id}"
                data-size="${cart.size}"
            >
              <span class="cart-list__btn-quantity minus">-</span>
              <input
                type="number"
                min="1"
                value="${cart.count}"
                class="cart-list__input-quantity"
              >
              <span class="cart-list__btn-quantity plus">+</span>
            </div>
          </td>
          <td class="cart-list__delete-icon">
            <span data-id="${cart.id}" data-size="${cart.size}">
              <i class="fa-solid fa-trash"></i>
            </span>
          </td>
        </tr>
      `
    )
    .join("");

  const total = cartList.reduce((pre, curr) => {
    const price = curr.salePercent ? curr.salePrice : curr.prePrice;
    return pre + price * curr.count;
  }, 0);

  table.innerHTML = `
    <table class="cart-list__table">
      <thead>
        <tr class="cart-list__heading">
          <th>image</th>
          <th>product name</th>
          <th>size</th>
          <th>unit price</th>
          <th>Quantity</th>
          <th>edit</th>
        </tr>
      </thead>
      <tbody>
        ${cartListHTML}
      </tbody>
    </table>
  `;

  totalPrice.innerText = `$${total.toFixed(2)}`;
  const minusBtn = queryAllElement(".minus");
  const plusBtn = queryAllElement(".plus");
  const deleteBtn = queryAllElement(".cart-list__delete-icon span");
  const inputQuantity = queryAllElement(".cart-list__input-quantity");

  minusBtn.forEach((minus) => {
    minus.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      const size = e.target.parentElement.dataset.size;
      const cartIdx = cartList.findIndex(
        (cart) => cart.id === Number(id) && cart.size === size
      );

      if (cartList[cartIdx].count === 1) {
        cartList.splice(cartIdx, 1);
      } else {
        cartList[cartIdx].count--;
      }
      renderCartList();
    });
  });

  plusBtn.forEach((plus) => {
    plus.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      const size = e.target.parentElement.dataset.size;
      const cartIdx = cartList.findIndex(
        (cart) => cart.id === Number(id) && cart.size === size
      );

      cartList[cartIdx].count++;
      renderCartList();
    });
  });

  deleteBtn.forEach((delBtn) => {
    delBtn.addEventListener("click", (e) => {
      const id = delBtn.dataset.id;
      const size = delBtn.dataset.size;
      const cartIdx = cartList.findIndex(
        (cart) => cart.id === Number(id) && cart.size === size
      );

      cartList.splice(cartIdx, 1);
      renderCartList();
    });
  });

  inputQuantity.forEach((input) => {
    input.addEventListener("change", (e) => {
      const id = e.target.parentElement.dataset.id;
      const size = e.target.parentElement.dataset.size;
      const cartIdx = cartList.findIndex(
        (cart) => cart.id === Number(id) && cart.size === size
      );

      cartList[cartIdx].count = Number(e.target.value);
      renderCartList();
    });
  });
  setLocalStorage("cartList", cartList);
  updateCartList(cartList);
}

clearBtn.addEventListener("click", () => {
  if (cartList.length <= 0) {
    toast({
      title: "Please add to cart!!!",
      message: "Cart is empty...",
      type: "info",
      duration: 1000,
    });
    setTimeout(() => {
      window.location.href = "/index.html";
    }, 1200);
    return;
  }

  modalContent.innerHTML = `
      <h1 class="modal__size-heading">Are you sure???</h1>
      <div class="modal__confirm">
        <button class="btn btn--filter btn__modal" data-value="yes">Yes</button>
        <button class="btn btn--filter btn__modal" data-value="no">No</button>
      </div>
  `;

  modal.classList.remove("hidden");

  const yesBtn = queryElement("button[data-value='yes']");
  const noBtn = queryElement("button[data-value='no']");

  yesBtn.addEventListener("click", () => {
    toast({
      title: "Successfully!!!",
      message: "Done",
      type: "success",
      duration: 2000,
    });
    cartList.splice(0, cartList.length);
    setLocalStorage("cartList", cartList);
    updateCartList(cartList);
    renderCartList();
    modal.classList.add("hidden");
  });

  noBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});

buyBtn.addEventListener("click", () => {
  const currentUser = getLocalStorage("currentUser");
  if (currentUser) {
    if (cartList.length > 0) {
      modalContent.innerHTML = `
          <h1 class="modal__size-heading">Order Information</h1>
          <div class="input">
            <label for="name" class="label">Fullname</label>
            <input type="text" id="name" placeholder="Enter your name..." rules="require">
            <span class="error"></span>
          </div>
          <div class="input">
            <label for="phone" class="label">Phone Number</label>
            <input type="text" id="phone" placeholder="Enter your phone..." rules="require|phone">
            <span class="error"></span>
          </div>
          <div class="input">
            <label for="address" class="label">Address</label>
            <input type="text" id="address" placeholder="Enter your address..." rules="require">
            <span class="error"></span>
          </div>
          <div class="input">
            <label for="note" class="label">Note</label>
            <textarea placeholder="Enter note..." id="note" rules="max-100"></textarea>
            <span class="error"></span>
          </div>
          <button class="btn btn--filter btn__buy">Submit</button>
      `;

      modal.classList.remove("hidden");

      const note = queryElement("#note");
      const name = queryElement("#name");
      const address = queryElement("#address");
      const phone = queryElement("#phone");
      const submit = queryElement(".btn__buy");

      setInterval(() => {
        note.style.height = "48px";
        note.style.height = note.scrollHeight + "px";
      }, 500);

      name.addEventListener("change", () => validation(name));
      name.addEventListener("blur", () => validation(name));

      address.addEventListener("change", () => validation(address));
      address.addEventListener("blur", () => validation(address));

      phone.addEventListener("change", () => validation(phone));
      phone.addEventListener("blur", () => validation(phone));

      note.addEventListener("change", () => validation(note));
      note.addEventListener("blur", () => validation(note));

      submit.addEventListener("click", () => {
        const formValidation = [];
        formValidation.push(name, note, phone, address);
        let isError = false;
        formValidation.forEach((validate) => {
          if (validation(validate)) isError = true;
        });

        if (isError) return;

        const currentUser = getLocalStorage("currentUser");
        const userList = getLocalStorage("userList");
        const orderList = getLocalStorage("orderList");

        const createdAt = Date.now();

        const cartUserList = cartList.map((cart) => {
          return {
            ...cart,
            createdAt: new Date(createdAt).toLocaleDateString(),
            receiver: name.value,
            userId: currentUser.id,
            statusDelivery: "non-delivery",
            address: address.value,
            phone: phone.value,
            note: note.value,
          };
        });

        toast({
          title: "Successfully!",
          message: "Thank you for your purchase.",
          type: "success",
          duration: 3000,
        });

        orderList.push(...cartUserList);
        currentUser.history.push(...cartUserList);
        const userIdx = userList.findIndex(
          (user) => user.id === currentUser.id
        );

        userList[userIdx] = currentUser;

        cartList.splice(0, cartList.length);
        setLocalStorage("cartList", cartList);
        setLocalStorage("orderList", orderList);
        setLocalStorage("currentUser", currentUser);
        setLocalStorage("userList", userList);
        updateCartList(cartList);
        modal.classList.add("hidden");
        renderCartList();
        name.value = "";
        phone.value = "";
        note.value = "";
        address.value = "";
      });
    } else {
      toast({
        title: "Please add to cart!!!",
        message: "Cart is empty...",
        type: "info",
        duration: 1000,
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1200);
    }
  } else {
    toast({
      title: "Oops!!!",
      message: "Please login to purchase...",
      type: "info",
      duration: 1000,
    });
    setTimeout(() => {
      window.location.href = "/sign-in.html";
    }, 1500);
  }
});

renderCartList();

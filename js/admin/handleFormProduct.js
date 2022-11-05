import {
  getLocalStorage,
  queryAllElement,
  queryElement,
  setLocalStorage,
} from "../constant.js";
import { typeProductList } from "../data.js";
import { validation } from "../user/sign/validation.js";

const name = queryElement("#name");
const imagePrimary = queryElement("#image-primary");
const imageSecondary = queryElement("#image-secondary");
const desc = queryElement("#desc");
const price = queryElement("#price");
const salePercent = queryElement("#sale-percent");
const select = queryElement("select");
const createBtn = queryElement(".create");
const updateBtn = queryElement(".update");
const labelPrimary = queryElement("label[for='image-primary']");
const labelSecondary = queryElement("label[for='image-secondary']");
const typeSelectList = ["-- Type of product --", ...typeProductList];

select.innerHTML = typeSelectList
  .map((typeProduct, index) => {
    if (index === 0) {
      return `<option hidden value="">${typeProduct}</option>`;
    } else {
      return `<option value="${typeProduct}">${typeProduct}</option>`;
    }
  })
  .join("");

function renderProductForm(id) {
  updateBtn.classList.remove("hidden");
  createBtn.classList.add("hidden");

  const productList = getLocalStorage("productList");
  const productIdx = productList.findIndex((product) => product.id === id);

  name.value = productList[productIdx].name;
  price.value = productList[productIdx].prePrice;
  desc.value = productList[productIdx].desc;
  select.value = productList[productIdx].type;
  salePercent.value = productList[productIdx].salePercent || "";
  labelPrimary.innerHTML = `
    <img src=${productList[productIdx].imagePrimary}>
  `;
  labelSecondary.innerHTML = `
    <img src=${productList[productIdx].imageSecondary}>
  `;

  function handleUpdate() {
    const formValidation = [];
    formValidation.push(name, price, desc, select);
    let isError = false;
    formValidation.forEach((validate) => {
      if (validation(validate)) isError = true;
    });

    if (isError) return;

    productList[productIdx].name = name.value;
    productList[productIdx].prePrice = Number(price.value);
    productList[productIdx].type = select.value;
    productList[productIdx].desc = desc.value;

    if (salePercent.value) {
      productList[productIdx]["salePercent"] = Number(salePercent.value);
      productList[productIdx].salePrice =
        Number(price.value) -
        (Number(price.value) * Number(salePercent.value)) / 100;
    }

    setLocalStorage("productList", productList);

    const { files: filesPrimary } = imagePrimary;
    const { files: filesSecondary } = imageSecondary;

    if (filesPrimary[0]) {
      const readerPrimary = new FileReader(imagePrimary);
      readerPrimary.addEventListener("load", () => {
        productList[productIdx]["imagePrimary"] = readerPrimary.result;
        setLocalStorage("productList", productList);
      });
      readerPrimary.readAsDataURL(imagePrimary.files[0]);
    }

    if (filesSecondary[0]) {
      const readerSecondary = new FileReader(imageSecondary);
      readerSecondary.addEventListener("load", () => {
        productList[productIdx]["imageSecondary"] = readerSecondary.result;
        setLocalStorage("productList", productList);
      });
      readerSecondary.readAsDataURL(imageSecondary.files[0]);
    }
  }

  updateBtn.addEventListener("click", handleUpdate);
}

function reset() {
  name.value = "";
  price.value = "";
  salePercent.value = "";
  select.value = "";
  desc.value = "";
  labelPrimary.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
      stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  `;
  labelSecondary.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
      stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  `;
  imagePrimary.value = "";
  imageSecondary.value = "";
}

function handleCreate() {
  const formValidation = [];
  formValidation.push(name, price, desc, imagePrimary, imageSecondary, select);
  let isError = false;
  formValidation.forEach((validate) => {
    if (validation(validate)) isError = true;
  });

  if (isError) return;

  const productList = getLocalStorage("productList");
  const readerPrimary = new FileReader(imagePrimary);
  const readerSecondary = new FileReader(imageSecondary);
  const newProduct = {
    id: Date.now(),
    name: name.value,
    prePrice: Number(price.value),
    type: select.value,
    desc: desc.value,
  };

  if (salePercent.value) {
    newProduct["salePercent"] = Number(salePercent.value);
  }

  productList.push(newProduct);
  setLocalStorage("productList", productList);

  const productIdx = productList.length - 1;

  readerPrimary.addEventListener("load", () => {
    productList[productIdx]["imagePrimary"] = readerPrimary.result;
    setLocalStorage("productList", productList);
  });

  readerSecondary.addEventListener("load", () => {
    productList[productIdx]["imageSecondary"] = readerSecondary.result;
    setLocalStorage("productList", productList);
  });

  readerPrimary.readAsDataURL(imagePrimary.files[0]);
  readerSecondary.readAsDataURL(imageSecondary.files[0]);
  reset();
}

name.addEventListener("change", () => validation(name));
name.addEventListener("blur", () => validation(name));

price.addEventListener("change", () => validation(price));
price.addEventListener("blur", () => validation(price));

desc.addEventListener("change", () => validation(desc));
desc.addEventListener("blur", () => validation(desc));

imagePrimary.addEventListener("click", () => validation(imagePrimary));
imagePrimary.addEventListener("change", () => {
  if (!validation(imagePrimary)) {
    const { files } = imagePrimary;
    const label = queryElement("label[for='image-primary']");
    label.innerHTML = `
      <img src=${URL.createObjectURL(files[0])}>
    `;
  }
});

imageSecondary.addEventListener("click", () => validation(imageSecondary));
imageSecondary.addEventListener("change", () => {
  if (!validation(imageSecondary)) {
    const { files } = imageSecondary;
    const label = queryElement("label[for='image-secondary']");
    label.innerHTML = `
      <img src=${URL.createObjectURL(files[0])}>
    `;
  }
});

select.addEventListener("click", () => validation(select));

createBtn.addEventListener("click", handleCreate);

export { renderProductForm, reset };

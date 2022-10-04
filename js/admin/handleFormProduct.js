import { getLocalStorage, queryElement, setLocalStorage } from "../constant.js";
import { validation } from "../users/sign/validation.js";

const name = queryElement("#name");
const imagePrimary = queryElement("#image-primary");
const imageSecondary = queryElement("#image-secondary");
const price = queryElement("#price");
const salePercent = queryElement("#sale-percent");
const select = queryElement("select");
const createBtn = queryElement(".create");
const updateBtn = queryElement(".update");

function renderProductForm(id) {
  updateBtn.classList.remove("hidden");
  createBtn.classList.add("hidden");

  const productList = getLocalStorage("productList");
  const productIdx = productList.findIndex((product) => product.id === id);
  const labelPrimary = queryElement("label[for='image-primary']");
  const labelSecondary = queryElement("label[for='image-secondary']");

  name.value = productList[productIdx].name;
  price.value = productList[productIdx].prePrice;
  salePercent.value = productList[productIdx].salePercent || "";
  select.value = productList[productIdx].type.toLowerCase();
  labelPrimary.innerHTML = `
    <img src=${productList[productIdx].imagePrimary}>
  `;
  labelSecondary.innerHTML = `
    <img src=${productList[productIdx].imageSecondary}>
  `;

  function handleUpdate() {
    const formValidation = [];
    formValidation.push(name, price, select);
    let isError = false;
    formValidation.forEach((validate) => {
      if (validation(validate)) isError = true;
    });

    if (isError) return;

    productList[productIdx].name = name.value;
    productList[productIdx].prePrice = price.value;
    productList[productIdx].type = select.value;

    if (salePercent.value) {
      newProduct["salePercent"] = Number(salePercent.value);
    }

    setLocalStorage("productList", productList);

    const { filesPrimary } = imagePrimary;
    const { filesSecondary } = imageSecondary;

    if (filesPrimary) {
      const readerPrimary = new FileReader(imagePrimary);
      readerPrimary.addEventListener("load", () => {
        productList[productIdx]["imagePrimary"] = readerPrimary.result;
        setLocalStorage("productList", productList);
      });
      readerPrimary.readAsDataURL(imagePrimary.files[0]);
    }

    if (filesSecondary) {
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

function handleCreate() {
  const formValidation = [];
  formValidation.push(name, price, imagePrimary, imageSecondary, select);
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
}

name.addEventListener("change", () => validation(name));
name.addEventListener("blur", () => validation(name));

price.addEventListener("change", () => validation(price));
price.addEventListener("blur", () => validation(price));

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

export { renderProductForm };

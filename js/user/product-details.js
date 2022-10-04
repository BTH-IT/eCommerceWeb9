import { queryElement } from "../constant.js";
import { productList } from "../data.js";
import { cartList, renderCartList } from "./cart/renderCart.js";

const relatedProductListEle = queryElement(".related-products__list");
const productDetailsEle = queryElement(".product-details");

const url = new URL(document.location);
const id = Number(url.searchParams.get("id"));
const productDetails = productList.find((product) => product.id === id);

const relatedProductList = productList.filter(
  (product) => product.type === productDetails.type && product.id !== id
);

productDetailsEle.innerHTML = `
  <div class="product-details__item">
    <div class="product-details__image">
      ${
        productDetails.salePercent
          ? `
              <span class="product-details__hot-sale sale">Sale</span>
              <span class="product-details__hot-sale sale-percent">-${productDetails.salePercent}%</span>
            `
          : ""
      }
      <div class="product-details__link">
        <img src=${productDetails.imagePrimary} alt=""
          class="product-details__img primary">
        <img src=${productDetails.imageSecondary} alt=""
          class="product-details__img secondary">
      </div>
    </div>
    <div class="product-details__item-info">
      <h1 class="product-details__item-title">
        ${productDetails.name}
      </h1>
      <div class="product-details__item-price">
        <span class="sale-price">$${
          productDetails.salePercent
            ? productDetails.salePrice
            : productDetails.prePrice
        }</span>
        ${
          productDetails.salePercent
            ? `<span class="pre-price">$${productDetails.prePrice}</span>`
            : ""
        }
      </div>
      <p class="product-details__item-desc">
        ${productDetails.desc}
      </p>
      <div class="product-details__select-size">
        <h1 class="product-details__size-heading">Size</h1>
        <input type="radio" name="size" id="xs" value="xs" hidden checked>
        <label for="xs" class="product-details__size-label">xs</label>

        <input type="radio" name="size" id="s" value="s" hidden>
        <label for="s" class="product-details__size-label">s</label>

        <input type="radio" name="size" id="m" value="m" hidden>
        <label for="m" class="product-details__size-label">m</label>

        <input type="radio" name="size" id="l" value="l" hidden>
        <label for="l" class="product-details__size-label">l</label>

        <input type="radio" name="size" id="xl" value="xl" hidden>
        <label for="xl" class="product-details__size-label">xl</label>

        <input type="radio" name="size" id="2xl" value="2xl" hidden>
        <label for="2xl" class="product-details__size-label">2xl</label>

        <input type="radio" name="size" id="3xl" value="3xl" hidden>
        <label for="3xl" class="product-details__size-label">3xl</label>

        <input type="radio" name="size" id="4xl" value="4xl" hidden>
        <label for="4xl" class="product-details__size-label">4xl</label>

        <input type="radio" name="size" id="5xl" value="5xl" hidden>
        <label for="5xl" class="product-details__size-label">5xl</label>
      </div>
      <div class="product-details__add-cart">
        <div class="product-details__quantity">
          <span class="product-details__btn-quantity minus">-</span>
          <input type="number" min="1" value="1" class="product-details__input-quantity">
          <span class="product-details__btn-quantity plus">+</span>
        </div>
        <button class="btn btn--details">Add to cart</button>
      </div>
    </div>
  </div>
`;

const relatedProductListHTML = relatedProductList
  .map((relatedProduct) => {
    return `
    <div class="related-products__item">
      <div class="related-products__image-hover">
        ${
          relatedProduct.salePercent
            ? `
                <span class="product-details__hot-sale sale">Sale</span>
                <span class="product-details__hot-sale sale-percent">-${relatedProduct.salePercent}%</span>
              `
            : ""
        }
        <a href="/product-details.html?id=${
          relatedProduct.id
        }" class="related-products__link">
          <img src=${relatedProduct.imagePrimary} alt=""
            class="related-products__img primary">
          <img src=${relatedProduct.imageSecondary} alt=""
            class="related-products__img secondary">
        </a>
        <div class="related-products__image-hovered">
          <span class="related-products__item-cart products__item-cart" data-id="${
            relatedProduct.id
          }">
            <i class="fa-solid fa-cart-plus"></i>
          </span>
        </div>
      </div>
      <div class="related-products__item-info">
        <a href="/product-details.html?id=${
          relatedProduct.id
        }" class="related-products__item-title">
          ${relatedProduct.name}
        </a>
        <div class="related-products__item-price">
          ${
            relatedProduct.salePercent
              ? `
                <span class="sale-price">$${relatedProduct.salePrice}</span>
                <span class="pre-price">$${relatedProduct.prePrice}</span>
              `
              : `<span class="pre-price">$${relatedProduct.prePrice}</span>`
          }
        </div>
      </div>
    </div>
  `;
  })
  .splice(0, 4)
  .join("");

relatedProductListEle.innerHTML = relatedProductListHTML;

const minus = queryElement(".minus");
const plus = queryElement(".plus");
const inputQuantity = queryElement(".product-details__input-quantity");
const detailBtn = queryElement(".btn--details");

minus.addEventListener("click", () => {
  if (inputQuantity.value == 1) return;
  inputQuantity.value = Number(inputQuantity.value) - 1;
});

plus.addEventListener("click", () => {
  inputQuantity.value = Number(inputQuantity.value) + 1;
});

detailBtn.addEventListener("click", () => {
  const size = queryElement(".product-details input:checked").value;

  const cartIdx = cartList.findIndex(
    (cart) => cart.id === Number(id) && cart.size === size
  );

  if (cartIdx === -1) {
    cartList.push({
      ...productDetails,
      count: Number(inputQuantity.value),
      size,
    });
  } else cartList[cartIdx].count++;

  renderCartList();
});

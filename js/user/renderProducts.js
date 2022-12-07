import { getLocalStorage, queryAllElement, queryElement } from "../constant.js";
import { sortValue } from "./filter/handleSort.js";
import { searchValue } from "./search/handleSearch.js";
import { filterType, filterPrice } from "./filter/handleFilter.js";
import { handleSlicePagination } from "./pagination.js";

const productList = getLocalStorage("productList");
const productListEle = queryElement(".products__item-list");
const paginationELe = queryElement(".pagination");
let slicePaginationList;

function handleFilterAndSort() {
  let productHandleList = searchValue
    ? productList.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : productList;

  productHandleList = filterType
    ? productHandleList.filter((product) =>
        product.type.toLowerCase().includes(filterType.toLowerCase())
      )
    : productHandleList;

  if (filterPrice.to > 0) {
    productHandleList = productHandleList.filter((product) => {
      const price = product.salePercent ? product.salePrice : product.prePrice;
      return price >= filterPrice.from && price <= filterPrice.to;
    });
  }

  switch (sortValue) {
    case "price, low to high":
      productHandleList.sort((a, b) => {
        const priceA = a.salePercent ? a.salePrice : a.prePrice;
        const priceB = b.salePercent ? b.salePrice : b.prePrice;
        return priceA - priceB;
      });
      break;
    case "price, high to low":
      productHandleList.sort((a, b) => {
        const priceA = a.salePercent ? a.salePrice : a.prePrice;
        const priceB = b.salePercent ? b.salePrice : b.prePrice;
        return priceB - priceA;
      });
      break;
    default:
      break;
  }

  filterPrice.from = 0;
  filterPrice.to = 0;
  return [...productHandleList];
}

function renderProductPage(countPage = 1) {
  const productListHTML = slicePaginationList[countPage - 1]
    .map((product) => {
      return `
        <div class="products__item">
          <div class="products__image-hover">
            ${
              product.salePercent
                ? `
                <span class="products__hot-sale sale">Sale</span>
                <span class="products__hot-sale sale-percent">
                  -${product.salePercent}%
                </span>
              `
                : ""
            }
            <a
              href="/product-details.html?id=${product.id}"
              class="products__link"
            >
              <img src=${product.imagePrimary} alt=""
                class="products__img primary">
              <img src=${product.imageSecondary} alt=""
                class="products__img secondary">
            </a>
            <div class="products__image-hovered">
              <span class="products__item-cart" data-id="${product.id}">
                <i class="fa-solid fa-cart-plus"></i>
              </span>
            </div>
          </div>
          <div class="products__item-info">
            <a
              href="/product-details.html?id=${product.id}"
              class="products__item-title"
            >
              ${product.name}
            </a>
            <div class="products__item-price">
              ${
                product.salePercent
                  ? `
                      <span class="sale-price">$${product.salePrice}</span>
                      <span class="pre-price">$${product.prePrice}</span>
                    `
                  : `<span class="sale-price">$${product.prePrice}</span>`
              }
            </div>
            <p class="products__item-desc">
              ${product.desc}
            </p>
          </div>
        </div>
      `;
    })
    .join("");

  productListEle.innerHTML = productListHTML;

  const modalSizeEle = queryElement(".modal");
  const addCartIconEleList = queryAllElement(".products__item-cart");

  addCartIconEleList.forEach((addCartIconEle) => {
    addCartIconEle.addEventListener("click", () => {
      modalSizeEle.dataset.id = addCartIconEle.dataset.id;
      modalSizeEle.classList.remove("hidden");
    });
  });
}

function renderProducts() {
  const productHandledList = handleFilterAndSort();

  if (productHandledList.length <= 0) {
    productListEle.innerHTML = "<div class='empty'>There're no products</div>";
    productListEle.style.display = "block";
    paginationELe.classList.add("hidden");
    return;
  } else productListEle.style.display = "grid";

  slicePaginationList = handleSlicePagination(productHandledList);

  renderProductPage();
}

renderProducts();

export { renderProducts, renderProductPage };

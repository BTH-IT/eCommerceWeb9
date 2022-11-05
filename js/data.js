const productList = [
  {
    id: 1,
    name: "Áo hoodie 1",
    prePrice: 10,
    salePercent: 13,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Jacket & Hoodie",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Ao-hoodie-2-Blue-1-ZiZoou-Store.jpg?v=1640878739",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Ao-hoodie-2-3-5-Xanh-duong-ZiZoou-Store.jpg?v=1664183413",
  },
  {
    id: 2,
    name: "Áo Hoodie 2",
    prePrice: 10,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Jacket & Hoodie",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Ao-hoodie-1-Blue-1-ZiZoou-Store.jpg?v=1640771136",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Size-Ao-hoodie-xanh-tron-basic-ZiZoou-Store.jpg?v=1663147608",
  },
  {
    id: 3,
    name: "Áo Khoác 1",
    prePrice: 10,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Jacket & Hoodie",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Ao-khoac-jacket-form-rong-oversize-NCC4-Trang-Be-Vang-Khaki-1-ZiZoou-Store.jpg?v=1658291953",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Size-NCC2-Jacket-2-1-White-Beige-ZiZoou-Store_2.jpg?v=1658291953",
  },
  {
    id: 4,
    name: "Áo Khoác 2",
    prePrice: 15,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Jacket & Hoodie",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Ao-khoac-jacket-form-rong-oversize-NCC2-Grey-1-3-2-ZiZoou-Store_c16bd3b6-0da5-4f7a-bb48-638fff426ab1.jpg?v=1651668575",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Size-NCC2-Jacket-2-Grey-ZiZoou-Store_2.jpg?v=1653381672",
  },
  {
    id: 5,
    name: "Áo Khoác 3",
    prePrice: 15,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Jacket & Hoodie",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Ao-khoac-jacket-form-rong-oversize-NCC2-Black-1-3-1-ZiZoou-Store.jpg?v=1651668323",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Size-NCC2-Jacket-2-Black-ZiZoou-Store_2.jpg?v=1653381640",
  },
  {
    id: 6,
    name: "Áo Hoodie 3",
    prePrice: 12,
    salePercent: 17,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Jacket & Hoodie",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Ao-hoodie-1-Black-5-1-ZiZoou-Store.jpg?v=1640769876",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Size-Ao-hoodie-den-tron-basic-ZiZoou-Store.jpg?v=1663147569",
  },
  {
    id: 7,
    name: "Áo Hoodie 4",
    prePrice: 8,
    salePercent: 13,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Jacket & Hoodie",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Ao-hoodie-2-White-1-ZiZoou-Store.jpg?v=1640879077",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Ao-hoodie-2-3-5-Trang-nga-ZiZoou-Store.jpg?v=1664183392",
  },
  {
    id: 8,
    name: "ÁO Khoác 4",
    prePrice: 9,
    salePercent: 13,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Jacket & Hoodie",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Ao-khoac-jacket-form-rong-oversize-NCC4-Xanh-4-ZiZoou-Store.jpg?v=1660797083",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Size-NCC2-Jacket-2-1-Blue-ZiZoou-Store_2.jpg?v=1660797125",
  },
  {
    id: 9,
    name: "ÁO THUN IN HÌNH ĐẸP 1",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/FNI689-DenHammer.jpg?v=1663924339",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/FNI689-TrangHammer.jpg?v=1663924339",
  },
  {
    id: 10,
    name: "ÁO THUN IN HÌNH ĐẸP 2",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/FNI688-den-hammerplus.jpg?v=1663923643",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/FNI688-denback.jpg?v=1663923642",
  },
  {
    id: 11,
    name: "ÁO THUN IN HÌNH ĐẸP 3",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/HAM004.jpg?v=1663300157",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/HAM004-Back.jpg?v=1663300157",
  },
  {
    id: 12,
    name: "ÁO THUN IN HÌNH ĐẸP 4",
    prePrice: 11,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/HAM002-White.jpg?v=1663297917",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/HAM002-Black.jpg?v=1663297917",
  },
  {
    id: 13,
    name: "ÁO THUN IN HÌNH ĐẸP 5",
    prePrice: 11,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/HAM004.jpg?v=1663300157",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/HAM004-Back.jpg?v=1663300157",
  },
  {
    id: 14,
    name: "ÁO THUN IN HÌNH ĐẸP 6",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/928den.jpg?v=1662371692",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/928sproyal.jpg?v=1662371692",
  },
  {
    id: 15,
    name: "ÁO THUN IN HÌNH ĐẸP 7",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/HAM004.jpg?v=1663300157",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/HAM004-Back.jpg?v=1663300157",
  },
  {
    id: 16,
    name: "ÁO THUN IN HÌNH ĐẸP 8",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/LNI031ForestGreen.jpg?v=1661487085",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/LNI031ForestGreenBack.jpg?v=1661487085",
  },
  {
    id: 17,
    name: "ÁO THUN IN HÌNH ĐẸP 9",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/Black-sau.jpg?v=1660403404",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/Black_b0558088-67c6-4069-b00a-de1febec1106.jpg?v=1660403438",
  },
  {
    id: 18,
    name: "ÁO THUN IN HÌNH ĐẸP 10",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/SportRoyal.jpg?v=1658586824",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/SportRoyal-back.jpg?v=1658586824",
  },
  {
    id: 19,
    name: "ÁO THUN IN HÌNH ĐẸP 11",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/FNI_686-densau.jpg?v=1657696416",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/FNI_686-dentruoc.jpg?v=1657696417",
  },
  {
    id: 20,
    name: "ÁO THUN IN HÌNH ĐẸP 12",
    prePrice: 4,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/FNI_668-den.jpg?v=1653409798",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/FNI_668-den-back.jpg?v=1653409798",
  },
  {
    id: 21,
    name: "ÁO THUN IN HÌNH ĐẸP 13",
    prePrice: 4,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "T-shirt",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/12.jpg?v=1654238952",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/13.jpg?v=1654238952",
  },
  {
    id: 22,
    name: "QUẦN JEANS ỐNG RỘNG ĐẸP 1",
    prePrice: 20,
    salePercent: 20,

    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Pant",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-Baggy-Jean-nam-nu-LightGrey-1-7-ZiZoou-Store.jpg?v=1664185659",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-Baggy-Jean-nam-nu-LightGrey-1-6-ZiZoou-Store.jpg?v=1664185659",
  },
  {
    id: 23,
    name: "Quần Baggy Kaki 1",
    prePrice: 18,
    salePercent: 20,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Pant",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-Baggy-Jean-nam-nu-2-Grey-1-ZiZoou-Store.jpg?v=1657713439",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-Baggy-Jean-nam-nu-2-Grey-10-ZiZoou-Store.jpg?v=1664185808",
  },
  {
    id: 24,
    name: "Quần Baggy Kaki 2",
    prePrice: 16,
    salePercent: 20,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Pant",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-Baggy-Kaki-nam-nu-1-Black-6-ZiZoou-Store.jpg?v=1647708674",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-Baggy-Kaki-nam-nu-1-Black-7-ZiZoou-Store.jpg?v=1655714824",
  },
  {
    id: 25,
    name: "QUẦN Jogger 1",
    prePrice: 20,
    salePercent: 19,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Pant",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-4-armygreen-5-ZiZoou-Store.jpg?v=1646667133",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-4-armygreen-3-ZiZoou-Store.jpg?v=1655717478",
  },
  {
    id: 26,
    name: "QUẦN Jogger 2",
    prePrice: 20,
    salePercent: 15,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Pant",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-4-khaki-5-ZiZoou-Store.jpg?v=1646666717",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-4-khaki-3-ZiZoou-Store.jpg?v=1655717582",
  },
  {
    id: 27,
    name: "QUẦN Jogger 3",
    prePrice: 20,
    salePercent: 15,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Pant",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-4-black-3-ZiZoou-Store.jpg?v=1646665216",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-4-black-5-ZiZoou-Store.jpg?v=1655717541",
  },
  {
    id: 28,
    name: "QUẦN Jpgger 4",
    prePrice: 25,
    salePercent: 15,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Pant",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-1b-Grey-3-ZiZoou-Store.jpg?v=1646581637",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-1b-Grey-8-2-ZiZoou-Store.jpg?v=1655718262",
  },
  {
    id: 29,
    name: "QUẦN Jogger 4",
    prePrice: 20,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Pant",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-1b-Black-1-2-ZiZoou-Store.jpg?v=1646580538",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-1b-Black-1-1-ZiZoou-Store.jpg?v=1655718321",
  },
  {
    id: 30,
    name: "QUẦN Jogger 5",
    prePrice: 21,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Pant",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-5-black-35-ZiZoou-Store.jpg?v=1646560068",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-5-black-38-ZiZoou-Store.jpg?v=1655717831",
  },
  {
    id: 31,
    name: "QUẦN Jogger 6",
    prePrice: 13,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Pant",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-2-LightGrey-3-ZiZoou-Store.jpg?v=1646578646",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-2-LightGrey-4-2-ZiZoou-Store.jpg?v=1655716607",
  },
  {
    id: 32,
    name: "QUẦN Jogger 7",
    prePrice: 14,
    salePercent: 20,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Pant",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-2-DarkGrey-8-ZiZoou-Store.jpg?v=1646577925",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-2-DarkGrey-12-ZiZoou-Store.jpg?v=1655716580",
  },
];

productList.forEach((product) => {
  if (product.salePercent) {
    product["salePrice"] =
      product.prePrice - (product.prePrice * product.salePercent) / 100;
  }
});

const typeProductList = ["Jacket & Hoodie", "T-shirt", "Pant"];

const sortList = ["Default", "Price, low to high", "Price, high to low"];

export { productList, typeProductList, sortList };

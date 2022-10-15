const productList = [
  {
    id: 1,
    name: "Áo Halloween 1",
    prePrice: 10,
    salePercent: 13,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "balo",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/63284b7683c5f.jpg?v=1663585151",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/632849b5b7d99.jpg?v=1663585151",
  },
  {
    id: 2,
    name: "Áo Halloween 2",
    prePrice: 10,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "balo",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/6326a2baaccd2.jpg?v=1663497876",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/6326a3010f7d3.jpg?v=1663497876",
  },
  {
    id: 3,
    name: "Áo Halloween 3",
    prePrice: 10,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "balo",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/632849b01fa37.jpg?v=1663584692",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/632849b10cd22.jpg?v=1663584692",
  },
  {
    id: 4,
    name: "Áo Halloween 4",
    prePrice: 15,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "balo",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/632849acd1954.jpg?v=1663584689",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/632849ae11c05.jpg?v=1663584689",
  },
  {
    id: 5,
    name: "Áo Halloween 5",
    prePrice: 15,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "balo",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/632849a935c81.jpg?v=1663584685",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/632849aaaf050.jpg?v=1663584685",
  },
  {
    id: 6,
    name: "Áo Halloween 6",
    prePrice: 12,
    salePercent: 17,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "balo",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/632849a5572a3.jpg?v=1663584681",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/632849a69037c.jpg?v=1663584681",
  },
  {
    id: 7,
    name: "Áo Halloween 7",
    prePrice: 8,
    salePercent: 13,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "balo",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/6326fb28cee93.jpg?v=1663499246",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/6326fbe2f37a1.jpg?v=1663499246",
  },
  {
    id: 8,
    name: "ÁO THUN IN HÌNH ĐẸP 0",
    prePrice: 9,
    salePercent: 13,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "balo",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/e13118c4e120e7ad49def276e0f591cb.jpg?v=1651839486",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0566/1795/9593/products/ae6f62472e2855264b180cb3ec68734c.jpg?v=1651839486",
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
    type: "pant",
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
    type: "pant",
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
    type: "pant",
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
    type: "pant",
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
    type: "pant",
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
    type: "pant",
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
    type: "pant",
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
    type: "pant",
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
    type: "pant",
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
    type: "pant",
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
    type: "pant",
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

const typeProductList = ["balo", "T-shirt", "pant"];

const sortList = ["Default", "Price, low to high", "Price, high to low"];

export { productList, typeProductList, sortList };

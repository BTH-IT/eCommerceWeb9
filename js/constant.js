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

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

export {
  setLocalStorage,
  getLocalStorage,
  queryAllElement,
  queryElement,
  getBase64Image,
};

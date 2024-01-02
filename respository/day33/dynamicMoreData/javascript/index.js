var productInfo = [
  {
    productName: "hp",
    productActualPrice: 1000,
    discountPercentage: 10,
    productManufacturer: "Sony",
    productImgUrl:
      "https://m.media-amazon.com/images/I/81lK9ePIMtL._SX522_.jpg",
  },
  {
    productName: "hp",
    productActualPrice: 1000,
    discountPercentage: 10,
    productManufacturer: "Sony",
    productImgUrl:
      "https://m.media-amazon.com/images/I/81lK9ePIMtL._SX522_.jpg",
  },
  {
    productName: "hp",
    productActualPrice: 1000,
    discountPercentage: 10,
    productManufacturer: "Sony",
    productImgUrl:
      "https://m.media-amazon.com/images/I/81lK9ePIMtL._SX522_.jpg",
  },
];

var displayData = (productInfo) => {
  var superParent = document.querySelector(".mainContainer");

  var parentUL = document.createElement("ul");
  parentUL.setAttribute("class", "listContainer");

  var li1 = document.createElement("li");
  li1.innerHTML = "Product Name:" + " " + productInfo.productName;
  parentUL.appendChild(li1);

  var li2 = document.createElement("li");
  li2.innerHTML = "Price: ";

  var spanOriginal1 = document.createElement("span");
  spanOriginal1.setAttribute("class", "originalPrice");
  spanOriginal1.innerHTML = "$" + productInfo.productActualPrice;
  li2.appendChild(spanOriginal1);

  var spanDiscount2 = document.createElement("span");
  spanDiscount2.setAttribute("class", "discountPrice");
  spanDiscount2.innerHTML =
    " $" +
    (productInfo.productActualPrice -
      (productInfo.productActualPrice * productInfo.discountPercentage) / 100);
  li2.appendChild(spanDiscount2);
  parentUL.appendChild(li2);

  var li3 = document.createElement("li");
  li3.innerHTML = "Manufacturer: " + productInfo.productManufacturer;
  parentUL.appendChild(li3);

  var li4 = document.createElement("li");
  li4.setAttribute("class", "imgData");
  var imgData = document.createElement("img");
  imgData.setAttribute("src", productInfo.productImgUrl);
  imgData.setAttribute("alt", "img not found");
  console.log(imgData);

  li4.appendChild(imgData);

  parentUL.appendChild(li4);
  superParent.appendChild(parentUL);
};

for (var i = 0; i < productInfo.length; i++) {
  displayData(productInfo[i]);
  console.log(productInfo[i]);
}
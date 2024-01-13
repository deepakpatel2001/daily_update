var productInfo = {
  productName: "hp",
  productActualPrice: 1000,
  discountPercentage: 10,
  productManufacturer: "Sony",
  productImgUrl: "https://m.media-amazon.com/images/I/81lK9ePIMtL._SX522_.jpg",
};

var displayData = () => {
  var superParent = $(".mainContainer");

  var parentUL = $("<ul></ul>").attr("class", "listContainer");

  var li1 = $("<li></li>").html("Product Name:" + " " + productInfo.productName)
  parentUL.append(li1);

  var li2 = $("<li></li>").html("Price: ");

  var spanOriginal1 = $("<span></span>").attr("class", "originalPrice").html("$" + productInfo.productActualPrice)
  li2.append(spanOriginal1);

  var spanDiscount2 = $("<span></span>").attr("class", "discountPrice").html(" $" +
    (productInfo.productActualPrice -
      (productInfo.productActualPrice * productInfo.discountPercentage) / 100))
  li2.append(spanDiscount2);
  parentUL.append(li2);

  var li3 = $("<li></li>").html("Manufacturer: " + productInfo.productManufacturer)
  parentUL.append(li3);

  var li4 = $("<li></li>").attr("class", "imgData")
  var imgData = $("<img />").attr("src", productInfo.productImgUrl).attr("alt", "img not found");

  li4.append(imgData);

  parentUL.append(li4);
  superParent.append(parentUL);
};

displayData();
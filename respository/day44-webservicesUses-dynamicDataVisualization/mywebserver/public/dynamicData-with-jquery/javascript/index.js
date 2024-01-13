var productDetails = [];

$.ajax({
  url: "http://localhost:8082/dynamicData-with-jquery/productData.json",
  dataType : "JSON",
  method : "GET",
  data : {},
  success : (response) =>{
    console.log(response)
    productDetails = response.productInfo
    for(var i=0; i<productDetails.length; i++){
      displayData(productDetails[i])
    }
  },
  error : () =>{
    console.log(error)
  }
});

var displayData = (productDetails) => {
  var superParent = $(".mainContainer");

  var parentUL = $("<ul></ul>").attr("class", "listContainer");

  var li1 = $("<li></li>").html(
    "Product Name: " + productDetails.productName
  );
  parentUL.append(li1);

  var li2 = $("<li></li>").html("Price: ");

  var spanOriginal1 = $("<span></span>")
    .attr("class", "originalPrice")
    .html("$" + productDetails.productActualPrice);
  li2.append(spanOriginal1);

  var spanDiscount2 = $("<span></span>")
    .attr("class", "discountPrice")
    .html(
      " $" +
        (productDetails.productActualPrice -
          (productDetails.productActualPrice *
            productDetails.discountPercentage) /
            100)
    );
  li2.append(spanDiscount2);
  parentUL.append(li2);

  var li3 = $("<li></li>").html(
    "Manufacturer: " + productDetails.productManufacturer
  );
  parentUL.append(li3);

  var li4 = $("<li></li>").attr("class", "imgData");
  var imgData = $("<img />")
    .attr("src", productDetails.productImgUrl)
    .attr("alt", "img not found");

  li4.append(imgData);

  parentUL.append(li4);
  superParent.append(parentUL);
};

displayData();
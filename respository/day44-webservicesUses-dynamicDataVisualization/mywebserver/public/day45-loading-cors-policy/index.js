var mainInputData = [];

$.ajax({
  url: "http://localhost:8082/emp", // this is the routing of the webserives 
  dataType: "JSON",
  method: "GET",
  data: {},
  success: (response) => {
    $(".loadingImg").hide()
    mainInputData = response.empInfo;
    console.log(response);
    for (var i = 0; i < mainInputData.length; i++) {
      superContentData(mainInputData[i]);
    }
  },
  error: (error) => {
    $(".loadingImg").hide();
    $(".errorContainer").show();
    console.log(error);
  },
});

var superContentData = (mainInputData) => {
  var parentContainer = $(".parentContainer");
  var creatingUlTag = $("<ul></ul>").attr("class", "ulTagData");

  var heading = $("<h3></h3>").html("Employee Details").attr("class", "userInformationTitle")
  creatingUlTag.append(heading)

  var creatingNameList = $("<li></li>")
    .attr("class", "list")
    .html("Employee Name: " + mainInputData.name);
  creatingUlTag.append(creatingNameList);

  var creatingImgList = $("<li></li>")
    .attr("class", "list")
    .html("Employee Image: ");

  var img = $("<img></img>")
    .attr("src", mainInputData.img)
    .attr("class", "imageDetails");

  creatingImgList.append(img);
  creatingUlTag.append(creatingImgList);

  var creatingAgeList = $("<li></li>")
    .attr("class", "list")
    .html("Employee Age: " + mainInputData.age);
  creatingUlTag.append(creatingAgeList);

  var creatingGenderList = $("<li></li>")
    .attr("class", "list")
    .html("Employee gender: " + mainInputData.gender);
  creatingUlTag.append(creatingGenderList);

  var creatingContactList = $("<li></li>")
    .attr("class", "list")
    .html("Employee Contact: " + mainInputData.contact);
  creatingUlTag.append(creatingContactList);

  var creatingBasicList = $("<li></li>")
    .attr("class", "list")
    .html("Employee basicSallery: " + mainInputData.basicSallery);
  creatingUlTag.append(creatingBasicList);

  var mainSallery = mainInputData.basicSallery * 12;

  var creatingHRAList = $("<li></li>")
    .attr("class", "list")
    .html("Employee HRA: " + (mainSallery * 50) / 100);
  creatingUlTag.append(creatingHRAList);

  var empTax;

  var taxData = () => {
    if (mainSallery <= 250000) {
      empTax = "Don't need to pay any tax ";
    } else if (mainSallery <= 500000) {
      empTax = "You need to pay tax " + 0.05 * (mainSallery - 250000);
    } else if (mainSallery <= 1000000) {
      empTax =
        "You need to pay tax " + (0.05 * 250000 + 0.2 * (mainSallery - 500000));
    } else {
      empTax =
        "You need to pay tax " +
        (0.05 * 250000 + 0.2 * 500000 + 0.3 * (mainSallery - 1000000));
    }
  };

  taxData();

  var creatingTaxList = $("<li></li>")
    .attr("class", "list")
    .html("Employee TAX: " + empTax);
  creatingUlTag.append(creatingTaxList);

  parentContainer.append(creatingUlTag);
};
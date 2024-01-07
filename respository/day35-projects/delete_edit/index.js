var mainContainer = document.querySelector(".formInformation");

// Name ul
var nameUl = document.createElement("ul");
var nameLabel = document.createElement("li");
nameLabel.innerHTML = "Name: ";
var nameInputList = document.createElement("input");
nameInputList.setAttribute("id", "studentName");

nameUl.appendChild(nameLabel);
nameUl.appendChild(nameInputList);
mainContainer.appendChild(nameUl);

// Age Ul
var ageUl = document.createElement("ul");
var ageLabel = document.createElement("li");
ageLabel.innerHTML = "Age: ";
var ageInputList = document.createElement("input");
ageInputList.setAttribute("id", "sAge");
ageInputList.setAttribute("placeholder", "29");

nameUl.appendChild(ageLabel);
nameUl.appendChild(ageInputList);
mainContainer.appendChild(nameUl);

// Gender Selection
var genderUl = document.createElement("ul");
var genderLabel = document.createElement("li");
genderLabel.innerHTML = "Gender: ";

var genderList = document.createElement("li");
var maleLabel = document.createElement("span");
maleLabel.innerHTML = "Male: ";
var radioBtn1 = document.createElement("input");
radioBtn1.setAttribute("type", "radio");
radioBtn1.setAttribute("name", "gender");
radioBtn1.setAttribute("value", "male");

var feMaleLabel = document.createElement("span");
feMaleLabel.innerHTML = "Female: ";
var radioBtn2 = document.createElement("input");
radioBtn2.setAttribute("type", "radio");
radioBtn2.setAttribute("name", "gender");
radioBtn2.setAttribute("value", "female");

genderList.appendChild(maleLabel);
genderList.appendChild(radioBtn1);
genderList.appendChild(feMaleLabel);
genderList.appendChild(radioBtn2);
genderUl.appendChild(genderLabel);
genderUl.appendChild(genderList);

mainContainer.appendChild(genderUl);

// Country Selection
var countryUl = document.createElement("ul");
var countryLabel = document.createElement("li");
countryLabel.innerHTML = "Country: ";

var countryDropDownList = document.createElement("li");

var dropDown = document.createElement("Select");
dropDown.setAttribute("class", "drowDwnDta");

var countryArray = ["India", "Japan", "America", "Africa", "Canada"];

var idStuOptions;
for (var i = 0; i < countryArray.length; i++) {
  var dropDownOptions = document.createElement("option");
  idStuOptions = "#option" + (i + 1);
  dropDownOptions.setAttribute("id", idStuOptions);
  dropDownOptions.innerHTML = countryArray[i];

  dropDown.appendChild(dropDownOptions);
}

countryDropDownList.appendChild(dropDown);
countryUl.appendChild(countryLabel);
countryUl.appendChild(countryDropDownList);
mainContainer.appendChild(countryUl);

// button

var sbtBtnUl = document.createElement("ul");
var buttonList = document.createElement("li");

var submitButton = document.createElement("button");
submitButton.innerHTML = "Add Details";

buttonList.appendChild(submitButton);
sbtBtnUl.appendChild(buttonList);
mainContainer.appendChild(sbtBtnUl);

// Table information

var mainTable = document.querySelector(".formTable");

var creatingTable = document.createElement("table");
creatingTable.setAttribute("border", "true");
creatingTable.setAttribute("cellSpacing", "10");
creatingTable.setAttribute("width", "100%");
creatingTable.style.fontSize="22px"
creatingTable.style.textAlign="center"


var tableHeader = document.createElement("thead");

var tableRow = document.createElement("tr");

var tableHeading = document.createElement("th");
tableHeading.innerHTML = "Sr. No.";
var tableHeading2 = document.createElement("th");
tableHeading2.innerHTML = "Student Name";
var tableHeading3 = document.createElement("th");
tableHeading3.innerHTML = "Gender";
var tableHeading4 = document.createElement("th");
tableHeading4.innerHTML = "Country";
var tableHeading5 = document.createElement("th");
tableHeading5.innerHTML = "Age";
var tableHeading6 = document.createElement("th");
tableHeading6.innerHTML = "Operations";

tableRow.appendChild(tableHeading);
tableRow.appendChild(tableHeading2);
tableRow.appendChild(tableHeading3);
tableRow.appendChild(tableHeading4);
tableRow.appendChild(tableHeading5);
tableRow.appendChild(tableHeading6);

var tableBody = document.createElement("tbody");
tableBody.setAttribute("id", "tableBodyId");

var scholarCounter = "0" + 1;
var rowsID;

submitButton.addEventListener("click", () => {
  var sName = document.getElementById("studentName").value.toUpperCase();
  var sAge = document.getElementById("sAge").value;
  var gender = document.querySelector("input[name=gender]:checked").value;
  var sCountry = document.querySelector("select").value;

  var tableRowBody = document.createElement("tr");
  rowsID = "#row" + scholarCounter;
  tableRowBody.setAttribute("id", rowsID);

  var tableData1 = document.createElement("td");
  tableData1.innerHTML = scholarCounter;
  var tableData2 = document.createElement("td");
  tableData2.innerHTML = sName;
  var tableData3 = document.createElement("td");
  tableData3.innerHTML = gender;
  var tableData4 = document.createElement("td");
  tableData4.innerHTML = sCountry;
  var tableData5 = document.createElement("td");
  tableData5.innerHTML = sAge;
  var tableData6 = document.createElement("td");
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", () => {

  });
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", () => {
    tableRowBody.remove(tableData6);
    scholarCounter--;
  });
  scholarCounter++;

  tableData6.appendChild(editButton);
  tableData6.appendChild(deleteButton);

  tableRowBody.appendChild(tableData1);
  tableRowBody.appendChild(tableData2);
  tableRowBody.appendChild(tableData3);
  tableRowBody.appendChild(tableData4);
  tableRowBody.appendChild(tableData5);
  tableRowBody.appendChild(tableData6);
  tableBody.appendChild(tableRowBody);
});

tableHeader.appendChild(tableRow);
creatingTable.appendChild(tableBody);
creatingTable.appendChild(tableHeader);
mainTable.appendChild(creatingTable);

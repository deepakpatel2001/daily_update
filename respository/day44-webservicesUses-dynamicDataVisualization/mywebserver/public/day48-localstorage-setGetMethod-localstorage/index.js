var userName;

var showDisplayData = () => {
  $("#mainData").show(3000);
};

var showData = (userName) => {
  nameVal = document.getElementById("mainName").innerHTML = userName;
  showDisplayData();
};

if((localStorage.getItem("userName")) != null){
  showData(localStorage.getItem("userName"));
}

var saveData = document.getElementById("saveData");
saveData.addEventListener("click", () => {
    userName = document.getElementById("inputData").value
    localStorage.setItem("userName", userName)
    showData(userName);
})

var nameVal;

var userName;

var showDisplayData = () => {
  $("#mainData").show(3000);
};

var nameVal;
var showData = (userName) => {
  nameVal = document.getElementById("mainName").innerHTML = userName;
  showDisplayData();
};

if((localStorage.getItem("userName")) != null){
  showData(localStorage.getItem("userName"));
}

var setTheme = (theme) => {
  $("body").css("background", theme);
  localStorage.setItem("themeColor", theme);
};

if (localStorage.getItem("themeColor") != null) {
  setTheme(localStorage.getItem("themeColor"));
}

var saveData = document.getElementById("saveData");
saveData.addEventListener("click", () => {
    userName = document.getElementById("inputData").value
    localStorage.setItem("userName", userName)
    showData(userName);
})

var theme
document.getElementById("themeData").addEventListener("click", () => {
  theme = document.getElementById("themeData").value;
  setTheme(theme)
});


var formData = document.querySelector("#sveDta");
formData.addEventListener("click", (event) => {
  event.preventDefault();
  nameData();
  ageData();
  genderData();
  dobData();
  passwordData();
  confirmPasswordData();
});

if(localStorage.getItem("uName") != null){
    document.querySelector("#uName").value = localStorage.getItem("uName");
}

if (localStorage.getItem("uAge") != null) {
  document.querySelector("#uAge").value = localStorage.getItem("uAge");
}

if (localStorage.getItem("birthday") != null) {
  document.querySelector("#calender").value = localStorage.getItem("birthday");
}

if (localStorage.getItem("pswds") != null) {
  document.querySelector("#pswd").value = localStorage.getItem("pswds");
  console.log("Hello");
}

if (localStorage.getItem("cnfmPswd") != null) {
  document.querySelector("#cnfmPswd").value = localStorage.getItem("cnfmPswd");
}

var uName;
checkingString = (event) => {
  var regex = /^[A-Za-z ]/;
  uName = event.key;
  if (regex.test(uName)) {
    return true;
  } else {
    return false;
  }
};
var nameData = () => {
  uName = document.querySelector("#uName").value;
  localStorage.setItem("uName", uName);
};

var uAge;
checkingAge = (event) => {
  var regex = /^[0-9]/;
  uName = event.key;
  if (regex.test(uName)) {
    return true;
  } else {
    return false;
  }
};
var ageData = () => {
  uAge = document.querySelector("#uAge").value;
  localStorage.setItem("uAge", uAge);
};

var uGender;
var genderData = () => {
  uGender = document.querySelector("input[type=radio]:checked").value;
  localStorage.setItem("uGender", uGender);
};

var Dob;
var dobData = () => {
  Dob = document.querySelector("#calender").value;
  localStorage.setItem("birthday", Dob);
};

var pswd;
var passwordData = () => {
  pswd = document.querySelector("#pswd").value;
  localStorage.setItem("pswds", pswd);
};

var result;
checkingPassword = () => {
  result = document.querySelector("#cnfmPswd").value;
  console.log(result);
  if (result !== document.querySelector("#pswd").value) {
    document.querySelector(".misMatched").style.display = "block";
  }else{
    document.querySelector(".misMatched").style.display = "none";
  }
};

var confirmPassword;
var confirmPasswordData = () => {
  confirmPassword = document.querySelector("#cnfmPswd").value;
  localStorage.setItem("cnfmPswd", confirmPassword);
};

var mainController = document.querySelector("#fgtPswd");
mainController.addEventListener("click", (event) => {
  event.preventDefault();
  uName = localStorage.getItem("uName");
  uAge = localStorage.getItem("uAge");
  uGender = localStorage.getItem("uGender");
  Dob = localStorage.getItem("birthday");
  pswd = localStorage.getItem("pswds");
  confirmPassword = localStorage.getItem("cnfmPswd");

  document.querySelector("#uName").value = uName;
  document.querySelector("#uAge").value = uAge;

  var radioButtons = document.querySelectorAll('input[name="gender"]');
  radioButtons.forEach((radio) => {
    if (radio.value === uGender) {
      radio.checked = true;
    } else {
      radio.checked = false;
    }
  });

  document.querySelector("#calender").value = Dob;
  document.querySelector("#pswd").value = pswd;
  document.querySelector("#cnfmPswd").value = confirmPassword;
});
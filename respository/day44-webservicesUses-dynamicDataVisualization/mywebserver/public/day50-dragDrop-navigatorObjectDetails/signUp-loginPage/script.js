var formData = document.querySelector('#sveDta');
formData.addEventListener("click", (event) => {
    event.preventDefault()
    nameData()
    ageData()
    genderData()
    dobData()
    passwordData()
    confirmPasswordData()
})

var uName
var nameData = () => {
    uName = document.querySelector("#uName").value
    localStorage.setItem("uName", uName)
}

var uAge;
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
}

var confirmPassword;
var confirmPasswordData = () => {
    confirmPassword = document.querySelector("#cnfmPswd").value;
    if(confirmPassword === pswd){
        localStorage.setItem("cnfmPswd", confirmPassword);
    }
}

var mainController = document.querySelector("#fgtPswd");
mainController.addEventListener("click", (event) => {
    event.preventDefault()
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
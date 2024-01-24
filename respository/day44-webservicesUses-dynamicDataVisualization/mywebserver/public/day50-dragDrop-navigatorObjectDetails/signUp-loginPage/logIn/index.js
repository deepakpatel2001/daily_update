if(localStorage.getItem("username") != null){
    document.getElementById("nameField").value =
      localStorage.getItem("username");
}
if (localStorage.getItem("password") != null) {
  document.getElementById("passField").value = localStorage.getItem("password");
}
if (localStorage.getItem("cnfPassword") != null) {
  document.getElementById("cPassField").value = localStorage.getItem("cnfPassword");
}

var button = document.getElementById("saveBtn");
button.addEventListener("click", () => {
    nameGatter()
    passwordGater()
    cnfrmPswrd()
})

var uName
var nameGatter = () =>{
    uName = document.getElementById("nameField").value;
    localStorage.setItem("username", uName)
}

var uPassword
var passwordGater = () => {
    uPassword = document.getElementById("passField").value;
    localStorage.setItem("password", uPassword)
}

var uCnfrmPass
var cnfrmPswrd = () => {
    uCnfrmPass = document.getElementById("cPassField").value;
    localStorage.setItem("cnfPassword", uCnfrmPass);
}

var recoverData = document.querySelector(".valueData")
recoverData.addEventListener("click", () => {
    document.getElementById("nameField").value = localStorage.getItem("username")
    document.getElementById("passField").value = localStorage.getItem("password")
    document.getElementById("cPassField").value = localStorage.getItem("cnfPassword")
})

var stringCheck = (event) => {
    var regex = /^[a-zA-Z ]/
    var result = event.key;
    if(regex.test(result)){
        return true;
    }else{
        return false
    }
}

// password check

var match = document.getElementById("cPassField")
match.addEventListener("focusout", () => {
    if(document.getElementById("cPassField").value != document.getElementById("passField").value){
        document.querySelector(".error").style.display = "block"
    }else{
        document.querySelector(".error").style.display = "none";
    }
})
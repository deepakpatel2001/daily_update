function callingDataFunction() {
  var emp = {};

  emp.employeeName = document.querySelector("#employeeName").value;
  if (emp.employeeName == "") {
    document.querySelector(".nameErr").style.display = "block";
    return;
  } else {
    document.querySelector(".nameErr").style.display = "none";
  }

  emp.employeeGender = document.querySelector(
    "input[name=empGender]:checked"
  ).value;

  emp.employeeAge = document.querySelector("#empAge").value;
  if (emp.employeeAge == "") {
    document.querySelector(".nameErr1").style.display = "block";
    return;
  } else {
    document.querySelector(".nameErr1").style.display = "none";
  }

  emp.employeeContact = document.querySelector("#contactInformation").value;
  if (emp.employeeContact == "") {
    document.querySelector(".nameErr2").style.display = "block";
    return;
  } else {
    document.querySelector(".nameErr2").style.display = "none";
  }
  emp.employeeAddress = document.querySelector("#addressInfo").value;
  if (emp.employeeAddress == "") {
    document.querySelector(".nameErr3").style.display = "block";
    return;
  } else {
    document.querySelector(".nameErr3").style.display = "none";
  }
  emp.employeeDept = document.querySelector("#empDept").value;
  emp.employeeID = document.querySelector("#empId").value;
  if (emp.employeeDept == "") {
    document.querySelector(".nameErr4").style.display = "block";
    return;
  } else {
    document.querySelector(".nameErr4").style.display = "none";
  }
  emp.employeeBasicSallery = document.querySelector("#basicSallery").value;
  if (emp.employeeBasicSallery == "") {
    document.querySelector(".nameErr5").style.display = "block";
    return;
  } else {
    document.querySelector(".nameErr5").style.display = "none";
  }

  emp.employeeHRAandPF = function () {
    emp.employeeAnnualSallery = 12 * this.employeeBasicSallery;
    emp.employeeHRA = (this.employeeAnnualSallery * 50) / 100;
    emp.employeePF = (this.employeeAnnualSallery * 24) / 100;
    emp.totalSavedMoney = this.employeeHRA + this.employeePF;
    emp.employeeTax = 0;
    this.employeeTAX();
  };

  emp.employeeTAX = function () {
    if (emp.employeeAnnualSallery <= 250000) {
      this.employeeTax = "Don't need to pay any ₹ as tax ";
    } else if (emp.employeeAnnualSallery <= 500000) {
      this.employeeTax =
        "You need to pay ₹ " + 0.05 * (emp.employeeAnnualSallery - 250000) + " as tax";
    } else if (emp.employeeAnnualSallery <= 1000000) {
      this.employeeTax =
        "You need to pay ₹ " +
        (0.05 * 250000 + 0.2 * (emp.employeeAnnualSallery - 500000)) +
        " as tax";
    } else {
      this.employeeTax =
        "You need to pay ₹ " +
        (0.05 * 250000 +
          0.2 * 500000 +
          0.3 * (this.employeeAnnualSallery - 1000000)) +
        " as tax";
    }
  };

  emp.displayData = function () {
    this.employeeHRAandPF();
    document.querySelector("#nameSpan").innerHTML = this.employeeName;
    document.querySelector("#genderSpan").innerHTML = this.employeeGender;
    document.querySelector("#ageSpan").innerHTML = this.employeeAge;
    document.querySelector("#contactSpan").innerHTML = this.employeeContact;
    document.querySelector("#addressSpan").innerHTML = this.employeeAddress;
    document.querySelector("#departmentSpan").innerHTML = this.employeeDept;
    document.querySelector("#basicSallerySpan").innerHTML =
      this.employeeBasicSallery;
    document.querySelector("#totalSallerySpan").innerHTML =
      this.employeeAnnualSallery;
    document.querySelector("#hraSpan").innerHTML = this.employeeHRA;
    document.querySelector("#pfSpan").innerHTML = this.employeePF;
    document.querySelector("#savedSpan").innerHTML = this.totalSavedMoney;
    document.querySelector("#taxSpan").innerHTML = this.employeeTax;
  };
  document.querySelector(".answerListA").style.display = "block";

  emp.displayData();
}

function callingDataFunction() {

  class EmpInformationDetails {
    constructor(emp) {
      this.empName = emp.employeeName;
      this.empGender = emp.employeeGender;
      this.empAge = emp.employeeAge;
      this.empContactInfo = emp.employeeContact;
      this.empAddressInfo = emp.employeeAddress;
      this.empDept = emp.employeeDept;
      this.empBasic = emp.employeeBasicSallery;
    }

    empTAX() {
      if (this.empAnnualSallery <= 250000) {
        this.empTax = "Don't need to pay any ₹ as tax ";
      } else if (this.empAnnualSallery <= 500000) {
        this.empTax =
          "You need to pay ₹ " + 0.05 * (this.empAnnualSallery - 250000) + " as tax";
      } else if (this.empAnnualSallery <= 1000000) {
        this.empTax =
          "You need to pay ₹ " +
          (0.05 * 250000 + 0.2 * (this.empAnnualSallery - 500000)) +
          " as tax";
      } else {
        this.empTax =
          "You need to pay ₹ " +
          (0.05 * 250000 +
            0.2 * 500000 +
            0.3 * (this.empAnnualSallery - 1000000)) +
          " as tax";
      }
    };

    empHRAandPF() {
      this.empAnnualSallery = 12 * this.empBasic;
      this.empHRA = (this.empAnnualSallery * 50) / 100;
      this.empPF = (this.empAnnualSallery * 24) / 100;
      this.totalSavedMoney = this.empHRA + this.empPF;
      this.empTax = 0;
      this.empTAX();
    };

    displayData() {
      this.empHRAandPF();
      document.querySelector("#nameSpan").innerHTML = this.empName;
      document.querySelector("#genderSpan").innerHTML = this.empGender;
      document.querySelector("#ageSpan").innerHTML = this.empAge;
      document.querySelector("#contactSpan").innerHTML = this.empContactInfo;
      document.querySelector("#addressSpan").innerHTML = this.empAddressInfo;
      document.querySelector("#departmentSpan").innerHTML = this.empDept;
      document.querySelector("#basicSallerySpan").innerHTML =
        this.empBasic;
      document.querySelector("#totalSallerySpan").innerHTML =
        this.empAnnualSallery;
      document.querySelector("#hraSpan").innerHTML = this.empHRA;
      document.querySelector("#pfSpan").innerHTML = this.empPF;
      document.querySelector("#savedSpan").innerHTML = this.totalSavedMoney;
      document.querySelector("#taxSpan").innerHTML = this.empTax;
    };
  }
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
  document.querySelector(".answerListA").style.display = "block";

  var emp1 = new EmpInformationDetails(emp)
  console.log(emp1.displayData());
}

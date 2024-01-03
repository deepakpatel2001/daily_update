function callingDataFunction() {
  var emp = {};

  emp.employeeName = document.querySelector("#employeeName").value;
  emp.employeeGender = document.querySelector(
    "input[name=empGender]:checked"
  ).value;
  emp.employeeAge = document.querySelector("#empAge").value
  emp.employeeContact = document.querySelector("#contactInformation").value;
  emp.employeeAddress = document.querySelector("#addressInfo").value;
  emp.employeeDept = document.querySelector("#empDept").value;
  emp.employeeID = document.querySelector("#empId").value;
  emp.employeeBasicSallery = document.querySelector("#basicSallery").value;  

  emp.employeeHRAandPF = function(){
    emp.employeeAnnualSallery = 12 * this.employeeBasicSallery;
    emp.employeeHRA = (this.employeeAnnualSallery*50)/100;
    emp.employeePF = (this.employeeAnnualSallery * 24) / 100;
    emp.totalSavedMoney = this.employeeHRA + this.employeePF;
    emp.employeeTax = 0;
    this.employeeTAX()
  }

  emp.employeeTAX = function(){
    if (emp.employeeAnnualSallery <= 250000) {
      this.employeeTax = "Don't need to pay any tax "
    } else if (emp.employeeAnnualSallery <= 500000) {
      this.employeeTax =  "You need to pay tax " + 0.05 * (emp.employeeAnnualSallery - 250000);
    } else if (emp.employeeAnnualSallery <= 1000000) {
      this.employeeTax = "You need to pay tax " + (0.05 * 250000 + 0.2 * (emp.employeeAnnualSallery - 500000));
    } else {
      this.employeeTax =
        "You need to pay tax " +
        (0.05 * 250000 +
          0.2 * 500000 +
          0.3 * (this.employeeAnnualSallery - 1000000));
    }
  }

  emp.displayData = function () {
    this.employeeHRAandPF()
    document.querySelector("#nameSpan").innerHTML = this.employeeName;
    document.querySelector("#genderSpan").innerHTML = this.employeeGender;
    document.querySelector("#ageSpan").innerHTML = this.employeeAge;
    document.querySelector("#contactSpan").innerHTML = this.employeeContact;
    document.querySelector("#addressSpan").innerHTML = this.employeeAddress;
    document.querySelector("#departmentSpan").innerHTML = this.employeeDept;
    document.querySelector("#basicSallerySpan").innerHTML =this.employeeBasicSallery;
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

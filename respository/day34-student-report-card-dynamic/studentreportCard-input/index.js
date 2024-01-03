// callingDataFunction();
function callingDataFunction() {


  var sData = {};
  sData.studentName = document.querySelector("#stuName").value;

  sData.studentGender = document.querySelector(
    "input[name=sGender]:checked"
  ).value;

  sData.studentClass = document.querySelector("#stuID").value;

  sData.studentMarks = [];

  var id;
  for (var i = 0; i < 5; i++) {
    id = "#m" + (i + 1);
    sData.studentMarks[i] = document.querySelector(id).value;
    sData.studentMarks[i] = parseInt(sData.studentMarks[i]);
  }

  sData.totalAndAverage = function () {
    sData.total = 0;
    for (var j = 0; j < sData.studentMarks.length; j++) {
      this.total += sData.studentMarks[j];
      console.log(sData.studentMarks[j]);
    }
    this.average = sData.total / sData.studentMarks.length;

    console.log(this.total);
    this.grade();
  };

  sData.grade = function () {
    if (this.grade >= 40) {
      this.grade = "You got passed the exam with good grade";
    } else {
      this.grade = "Yes i have you a surprise";
    }
  };

  sData.displayData = function () {
    this.totalAndAverage();
    document.querySelector("#nameSpan").innerHTML = this.studentName;

    document.querySelector("#genderSpan").innerHTML = this.studentGender;

    document.querySelector("#classSpan").innerHTML = this.studentClass;

    document.querySelector("#totalSpan").innerHTML = this.total;

    document.querySelector("#avgSpan").innerHTML = this.average;
  };

  document.querySelector(".answerListA").style.display = "block";
  
  sData.displayData();
}

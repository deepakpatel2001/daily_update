var doOperation = (type) =>{
    var firstVal = document.getElementById("firstValue").value;
    var secondVal = document.getElementById("secondValue").value;
    var result;
    var answerList = document.querySelector(".answerList");

    switch (type) {
      case "addition":
        result = operationData.addition(firstVal, secondVal);
        answerList.style.display = "block"
        break;

      case "subtraction":
        result = operationData.subtraction(firstVal, secondVal);
        answerList.style.display = "block";
        break;

      case "multiplication":
        result = operationData.multiplication(firstVal, secondVal);
        answerList.style.display = "block";
        break;

      case "division":
        result = operationData.division(firstVal, secondVal);
        answerList.style.display = "block";
        break;
    }

    var msg = "The pressed " + type + " and the result is " + result

    answerList.innerHTML = msg
}
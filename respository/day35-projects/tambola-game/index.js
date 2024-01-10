var button = document.getElementById("inputSubmitBtn");

button.addEventListener("click", () => {
  document.getElementById("parentDiv").style.display = "block"
  var result = document.getElementById("inputId").value;
  var ids = 1
  var emptyArray = [];
  for (var i = 0; i < result; i++) {
    var currentIds = "#idValue" + (ids + i);
    var smlElem = document.createElement("div");
    smlElem.setAttribute("id", currentIds);
    smlElem.setAttribute("class", "commonCircle");
    smlElem.innerHTML = (i + 1);
    document.getElementById("leftDiv").appendChild(smlElem);

    emptyArray.push(currentIds);
  }

  for (var i = 0; i < emptyArray.length; i++) {
    console.log(i + ids);
  }

  var randomButton = document.getElementById("randomButton");
  var counter = 0;
  randomButton.addEventListener("click", () => {
    var randomNumber = Math.ceil(Math.random() * emptyArray.length);

    var resultDiv = document.querySelector(".showNumber");
    resultDiv.innerHTML = randomNumber;
    var matchedId = "idValue" + randomNumber;

    if (emptyArray.includes("#" + matchedId)) {

      var matchedDiv = document.getElementById("#" + matchedId);      
      matchedDiv.style.backgroundColor = "yellow";
      matchedDiv.style.color = "black";
      counter++;

      if (counter == emptyArray.length) {
        var winShow = document.getElementById("winShow");
        winShow.style.display = "block";
      }
    }

  });
})
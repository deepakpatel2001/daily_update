var button = document.getElementById("inputSubmitBtn");

button.addEventListener("click", () => {
    var result = document.getElementById("inputId").value;
    var ids = 1
    for (var i = 0; i < result; i++) {
        var currentIds = "#idValue" + (ids + i);
        var smlElem = document.createElement("div");
        smlElem.setAttribute("id", currentIds);
        smlElem.setAttribute("class", "commonCircle");
        smlElem.innerHTML = (i+1);
        document.getElementById("leftDiv").appendChild(smlElem);
    }

    

})

console.log(button);

var ids = 1


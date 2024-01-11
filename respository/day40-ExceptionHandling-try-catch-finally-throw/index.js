var empName;


var empSaveData = () =>{
    empName = document.querySelector("#inputFieldValue").value
}


var outerDiv = document.querySelector(".taskConsumer");

var taskButton = () =>{
    var taskBucket = document.createElement("div")
    taskBucket.setAttribute("id", "taskList");
    outerDiv.appendChild(taskBucket);

    outerDiv.style.display = "block"
}


var showData = () =>{
    try {
        document.querySelector("#taskList").innerHTML =
          "Mr. " +
          empName.toUpperCase() +
          " You have to do work of drag and drop functionality.";
    } catch (error) {
        console.log(error.name);
    }finally {
        setTimeout(() => {
          document.querySelector("#greeting").style.display = "block";
        }, 3000);
    }
}
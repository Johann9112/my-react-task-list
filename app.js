function addTask() {


    var task = document.getElementById("task").value;
    var li = document.createElement("li");
    li.textContent = task;
    document.getElementById("tasks").appendChild(li);
    
  }
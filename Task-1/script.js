document.querySelector("#add").onclick = function () {
  if (document.querySelector("#addtask input").value.length == 0) {
    alert("Task is Empty!!!");
  } else {
    document.querySelector(
      "#showtask"
    ).innerHTML += `<div class="task"><span id="taskname">
    ${
      document.querySelector("#addtask input").value
    }</span><button style="background:blue; color:pink; padding:5px" class="delete">Delete</button></div>`;

    var cu = document.querySelectorAll(".delete");
    for (var i = 0; i < cu.length; i++) {
      cu[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    var showtask = document.querySelectorAll("#taskname");
    for (var i = 0; i < showtask.length; i++) {
      showtask[i].onclick = function () {
        this.classList.toggle("Completed");
      };
    }
    document.querySelector("#addtask input").value = "";
  }
};

var list = "";
function buttonClick() {
 var todoInput = document.getElementById("addTodo").value; 
  var todoArray = []; 
todoArray.push(todoInput);
for (var i = 0; i < todoArray.length; i++) {
  //create
  var items = document.createElement("div");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var deleteButton = document.createElement("button");
  var br = document.createElement("br");
  //define
  label.contentEditable="true";
  checkBox.className = "check";
  checkBox.type = "checkbox";
  checkBox.value = todoArray[i];
  deleteButton.style="margin-left:15%;";
  checkBox.onclick= function () {
   if(checkBox.checked == true){
    this.parentNode.parentNode.removeChild(this.parentNode);
    document.getElementById("completed").appendChild(this.parentNode)
    document.getElementById("completed").style.textDecoration="line-through";
  }
    if(checkBox.checked == false){
      document.getElementById("completed").removeChild(this.parentNode);
      document.getElementById("tocomplete").appendChild(this.parentNode);
   }

  }
  deleteButton.onclick= function () {
  this.parentNode.parentNode.removeChild(this.parentNode)

  }
  //append
  items.appendChild(checkBox);
  items.appendChild(label);
  items.appendChild(deleteButton);
 items.appendChild(br);
  label.appendChild(document.createTextNode(todoArray[i]));
  deleteButton.appendChild(document.createTextNode("Delete"));
  document.getElementById("tocomplete").appendChild(items)
  }
}


function refresh() {
  document.getElementById("tocomplete").innerHTML="";
  document.getElementById("completed").innerHTML="";
}


//put complete back
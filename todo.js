
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var i= document.createElement("i")
  span.className = "deletebtn";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var deletebtn = document.getElementsByClassName("deletebtn");
var i;
for (i = 0; i < deletebtn.length; i++) {
  deletebtn[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

function addItem() {

var li = document.createElement("li");
var checkbox=document.createElement("input");
checkbox.setAttribute("type","checkbox");
checkbox.setAttribute("id","check");
li.appendChild(checkbox);
var inputValue = document.getElementById("input").value;
var text=document.createTextNode(inputValue);
var label=document.createElement("label");
label.setAttribute("class","strikeThis");
label.setAttribute("for","packersOff");
li.appendChild(label);
label.appendChild(text);

  li.appendChild(label);
  if (inputValue === '') {
    alert("You must write something!");
  } 
  
  else {
    document.getElementById("mytodolt").appendChild(li);
  }
  document.getElementById("input").value = "";

  var button = document.createElement("button");
  var i= document.createElement("i")
  i.classList="fa-regular fa-trash-can";
  button.appendChild(i);
  button.className = "deletebtn";
  li.appendChild(button);

  for (i = 0; i < deletebtn.length; i++) {
    deletebtn[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  var p = document.getElementById("para");
    if (p.style.display === "none") {
        p.style.display == "block";
    } 
    else {
        p.style.display = "none";
    }
}


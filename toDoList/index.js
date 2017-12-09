
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i=0; i<myNodelist.length; i++){
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName == "LI") {
    ev.target.classList.toggle("checked");
  }
}, false);


function newElement(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue == ""){
    alert("なんか書けや");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  //[li⇨span_1⇨image_1],[li⇨span_2⇨image_2]っていうツリー構造
  var span_1 = document.createElement("SPAN");
  var span_2 = document.createElement("SPAN");
  var image_1 = document.createElement("img");
  var image_2 = document.createElement("img");
  image_1.src="ecalic009_029.png";
  image_2.src = "ecalic009_010.png";
  span_1.className="close";
  span_2.className="check";
  span_1.appendChild(image_1);
  span_2.appendChild(image_2);
  li.appendChild(span_1);
  li.appendChild(span_2);

  var close = document.getElementsByClassName("close");
  var i;
  for (i=0; i<close.length; i++){
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  var check = document.getElementsByClassName("check");
  var j;
  for (j=0; j<check.length; j++){
    check[j].onclick = function() {
      var image_3 = document.createElement("img");
      image_2.src = "ecalic009_007.png";

    }
  }

}

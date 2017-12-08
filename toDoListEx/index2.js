
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i=0; i<myNodelist.length; i++){
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i=0; i<close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName == "LI") {
    ev.target.classList.toggle("checked");
  }
}, false);


function newElement(){

// 場所部分
  var li = document.createElement("li");
  var placeValue = document.getElementById("place").value;
  var tp = document.createTextNode(placeValue + " ");
  li.appendChild(tp);
  if (placeValue == ""){
    alert("場所書いて！");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
    document.getElementById("place").value = "";

// 消去ボタン
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i=0; i<close.length; i++){
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

// 改行
  var tb = document.createElement('br');
  li.appendChild(tb);


// コメント部分
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue == ""){
    alert("コメント書いて！");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";


}

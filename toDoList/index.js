/*
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
*/

//追加ボタンで追加
function newElement(){
  var inputValue = document.getElementById("myInput").value;
  if (inputValue == ""){
    alert("なんか書けや");
  } else {
  var main =   document.getElementById("main");
  var coment = main.rows[0].cells[0];
  coment.innerHTML = inputValue;

  var boxes = document.getElementById("myUL");
  var clone = boxes.firstElementChild.cloneNode(true);


    boxes.appendChild(clone);
    coment.innerHTML="ex.バイト先に電話";
    document.getElementById("myInput").value = "";
  }
}

//削除ボタン
function deleteElement(obj) {
  var contents = obj.parentElement;
  var main = contents.parentElement;
    main.parentElement.remove();
}

//チェックボタン
function checkedElement(obj){
  var img = new Array();
  img[0]= new Image();
  img[0].src ="ecalic009_007.png";
  img[1]= new Image();
  img[1].src ="ecalic009_010.png";
  if (obj.src == img[0].src){
    obj.src= img[1].src;
  }else{
    obj.src = img[0].src;
  }
}

//おまけ
function openfile(){
  window.open("../ToDoListEx/index.html");
}

/*
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
  */

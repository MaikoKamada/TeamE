
function newElement() {

  //入力された場所の読み込み
  var placeValue = document.getElementById("place").value;
  document.getElementById("postedplase").textContent=placeValue;

  //入力されたコメントの読み込み
  var inputValue = document.getElementById("myInput").value;
  document.getElementById("myUL").textContent=inputValue;

  //コンテンツのクローン
  var boxes = document.getElementById("main");
  var clone = boxes.firstElementChild.cloneNode(true);
  if (inputValue == ""){
    alert("コメント書いて！");
  } else if(placeValue == ""){
    alert("場所書いて！");
  }else {
  boxes.appendChild(clone);
  document.getElementById("myUL").textContent="(例)  早く抜け出したい！＊ここの×ボタン、♡ボタンは押しちゃダメ！";
  document.getElementById("postedplase").textContent="(例)  駒場キャンパス";
  document.getElementById("myInput").value = "";
  document.getElementById("place").value = "";
  }
}

  function ineElement(obj){
    var iine = obj.parentElement;
    var count = parseInt(iine.children[1].innerHTML);
    iine.children[1].innerHTML = count + 1;
  }

  function deleteElement(obj) {
    var contents = obj.parentElement;
      contents.parentNode.removeChild(contents);
  }

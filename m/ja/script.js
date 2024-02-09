

window.addEventListener("load", () => {
    getDirection();
   });

window.addEventListener("resize", () => {
    // 処理呼び出し
    getDirection();
   });

function getDirection() {
    // 端末の傾きを取得する
    var directionX = Math.abs(window.innerWidth);
    var directionY = Math.abs(window.innerHeight);
    var viewblock = document.getElementById("viewblock");
    var body = document.getElementById("loot");
    var html = document.getElementById("mobile");
    if(directionX > directionY) {
        // 横向きの処理
        reloadElement("mobile", "./index.html");
        viewblock.style.display = "block";
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";
    } 
    if(directionX < directionY) {
        // 縦向きの処理
        reloadElement("mobile", "./index.html");
        viewblock.style.display = "none";
        body.style.overflow = "scroll";
        html.style.overflow = "scroll";
    }
}

function reloadElement(elementId, url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById(elementId).innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }


function createLines() {
    let line = document.createElement("div");
    line.setAttribute("class","line");
    document.body.appendChild(line);

    line.style.left = Math.random() * innerWidth + "px";
    line.style.animationDuration = 6 + Math.random() * 24 + "s";
    line.style.width = Math.random() * 12 + "px";
    line.style.height = Math.random() * 12 + "px";

    setTimeout(function () {
        document.body.removeChild(line);
    }, 24000)
}

setInterval(function(){
    createLines();

}, 100)

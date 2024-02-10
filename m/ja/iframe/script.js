

window.addEventListener("load", () => {
    resizeElement()
   });

window.addEventListener("resize", () => {
    // 処理呼び出し
    resizeElement()
   });

function resizeElement() {
    // サイズを取得する
    var directionX = Math.abs(window.innerWidth);
    var directionY = Math.abs(window.innerHeight);
    //var fream = document.getElementsByClassName("fream");
    //fream.style.width = directionX + "px";
    //fream.style.height = directionY + "px";
    
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
    }, 10000)
}

setInterval(function(){
    var directionX = Math.abs(window.innerWidth);
    var directionY = Math.abs(window.innerHeight);
    if(directionX < directionY) {
        createLines();
    }

}, 100)

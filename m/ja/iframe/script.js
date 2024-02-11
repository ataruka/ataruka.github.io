

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
    var body = document.body; 
    var layout = document.getElementById("layout"); 
    var html = document.getElementById("html"); 
    var width_height = document.getElementsByClassName("width_height"); 
    var frame= document.getElementById("frame"); 

    body.style.width = directionX + "px";
    body.style.height = directionY + "px";
    layout.style.width = directionX + "px";
    layout.style.height = directionY + "px";
    frame.style.height = directionY + "px";
    html.style.fontSize = directionX / 7.5 + "px";
    for (var i=0;i<width_height.length;i+=1){   
        width_height[i].style.width = directionX + "px";
        width_height[i].style.height = directionY + "px";
    }

    
    
}

function createLines() {
    let line = document.createElement("div");
    let lineset = document.getElementById("lineset");
    line.setAttribute("class","line");
    lineset.appendChild(line);

    line.style.left = Math.random() * innerWidth + "px";
    line.style.animationDuration = 6 + Math.random() * 24 + "s";
    line.style.width = Math.random() * 0.16 + "rem";
    line.style.height = Math.random() * 0.16 + "rem";

    setTimeout(function () {
        lineset.removeChild(line);
    }, 10000)
}

setInterval(function(){
    var directionX = Math.abs(window.innerWidth);
    var directionY = Math.abs(window.innerHeight);
    if(directionX < directionY) {
        createLines();
    }

}, 500)

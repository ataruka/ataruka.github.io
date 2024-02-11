

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
    var width_height = document.getElementsByClassName("width_height"); 
    var frame= document.getElementById("frame"); 

    body.style.width = directionX + "px";
    body.style.height = directionY + "px";
    layout.style.width = directionX + "px";
    layout.style.height = directionY + "px";
    frame.style.height = directionY + "px";
    for (var i=0;i<width_height.length;i+=1){   
        width_height[i].style.width = directionX + "px";
        width_height[i].style.height = directionY + "px";
    }
    
    
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

}, 500)

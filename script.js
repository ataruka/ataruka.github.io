function createLines() {
    let line = document.createElement("div");
    line.setAttribute("class","line");
    document.body.appendChild(line);

    line.style.left = Math.random() * innerWidth + "px";
    line.style.animationDuration = 3 + Math.random() * 12 + "s";
    line.style.width = Math.random() * 12 + "px";
    line.style.height = Math.random() * 12 + "px";

    setTimeout(function () {
        document.body.removeChild(line);
    }, 12000)
}

setInterval(function(){
    createLines();

}, 500)

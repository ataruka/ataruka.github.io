

window.addEventListener("load", () => {
    getDirection();
    resizeElement();
});

window.addEventListener("resize", () => {
    // 処理呼び出し
    getDirection();
    resizeElement();
});

function getDirection() {
    // 端末の傾きを取得する
    var directionX = Math.abs(window.innerWidth);
    var directionY = Math.abs(window.innerHeight);
    if (directionX > directionY) {
        var viewblock = document.getElementsByClassName("landscape");
        var html = document.getElementById("html");

        // 横向きの処理
        html.className = html.className.replace('mobile landscape', 'mobile portrait');
        //reloadElement("mobile", "./index.html");
        for (var i = 0; i < viewblock.length; i += 1) {
            viewblock[i].style.display = "block";
        }
        html.style.display = "block";
    }
    if (directionX < directionY) {
        var viewblock = document.getElementsByClassName("landscape");
        var html = document.getElementById("html");

        // 縦向きの処理
        html.className = html.className.replace('mobile portrait', 'mobile landscape');
        //reloadElement("mobile", "./index.html");
        for (var i = 0; i < viewblock.length; i += 1) {
            viewblock[i].style.display = "none";
        }
        html.style.display = "block";
    }
}

function resizeElement() {
    // サイズを取得する
    var directionX = Math.abs(window.innerWidth);
    var directionY = Math.abs(window.innerHeight);
    var frame = document.getElementsByClassName("frame");
    var html = document.getElementById("html");

    for (var i = 0; i < frame.length; i += 1) {
        frame[i].style.width = directionX + "px";
        frame[i].style.height = directionY + "px";
    }

}

function reloadElement(elementId, url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(elementId).innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
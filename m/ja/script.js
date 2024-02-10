

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
    var viewblock = document.getElementsByClassName("landscape");
    if(directionX > directionY) {
        // 横向きの処理
        //reloadElement("mobile", "./index.html");
        for (var i=0;i<viewblock.length;i+=1){   
            viewblock[i].style.display = "block";
          }
    } 
    if(directionX < directionY) {
        // 縦向きの処理
        //reloadElement("mobile", "./index.html");
        for (var i=0;i<viewblock.length;i+=1){   
            viewblock[i].style.display = "none";
          }
    }
}

function resizeElement() {
    // サイズを取得する
    var directionX = Math.abs(window.innerWidth);
    var directionY = Math.abs(window.innerHeight);
    var frame = document.getElementsByClassName("frame");
    var main_iframe = document.getElementsByClassName("main_iframe");

    for (var i=0;i<frame.length;i+=1){   
        frame[i].style.width = directionX + "px";
        frame[i].style.height = directionY + "px";
    }
    for (var i=0;i<main_iframe.length;i+=1){   
        main_iframe[i].style.width = directionX + "px";
        main_iframe[i].style.height = directionY + "px";
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
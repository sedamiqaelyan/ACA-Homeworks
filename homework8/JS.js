/**
 * Created by Toshiba on 25.05.2016.
 */
function numbers() {
    var x = document.getElementById("number").value;
    var count = 0;
    if (x == 3) {
        document.getElementById('img').setAttribute("src", "images/logo.png");
    }
    if (x == 4) {
        document.getElementById('img').setAttribute("src", "images/VictorViza.png");
    }
    if (x == 5) {
        document.getElementById('img').setAttribute("src", "images/download.png");
    }
    if (x == 6) {
        document.getElementById('img').setAttribute("src", "images/Discover.png");
    }
    
}
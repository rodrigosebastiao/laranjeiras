var next = document.getElementsByClassName("next")[0];
var prev = document.getElementsByClassName("prev")[0];
var carrossel = document.getElementsByClassName("carrossel")[0];
var limit = document.getElementsByClassName("slide");

    var space = -1366;
    var qtd = 0;
next.onclick = function next(){
    if (qtd < limit.length-1){
        carrossel.style.left = "" + (space)+"px";
        space-=1366;
    qtd++;
    }
}

prev.onclick = function next() {
    if (qtd >= 0) {
        space += 1366;
        carrossel.style.left = "" + space + "px";
    qtd--;
    }
}



var item1;
var item2;
var item3;
var item4;
var item5;
var item6;
document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("enter first thing");
    item2 = prompt("enter second thing");
    item3 = prompt("enter third thing");
    item4 = prompt("enter forth thing");
    item5 = prompt("enter fifth thing");
    item6 = prompt("enter sixth thing");
    updateList();
}

function updateList() {
    document.getElementById("o").innerHTML = item1;
    document.getElementById("d").innerHTML = item2;
    document.getElementById("g").innerHTML = item3;
    document.getElementById("b").innerHTML = item4;
    document.getElementById("a").innerHTML = item5;
    document.getElementById("c").innerHTML = item6;
}
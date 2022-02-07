let num = 0;
function changeCount(button){
    num += button;
    document.getElementById("count").innerHTML = num;
}
function reset(){
    num = 0;
    document.getElementById("count").innerHTML = num;
}
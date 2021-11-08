let btn = document.getElementById("btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
}

let bloodoptions = document.querySelector(".blood-options-list")
function showblood(){
    bloodoptions.classList.toggle("activeblood");
}

function showblood1(){
    bloodoptions.classList.toggle("activeblood");
    document.querySelector(".SelectBloodLine").innerHTML= "PureBlood";
}
function showblood2(){
    bloodoptions.classList.toggle("activeblood");
    document.querySelector(".SelectBloodLine").innerHTML= "Halfblood";
}
function showblood3(){
    bloodoptions.classList.toggle("activeblood");
    document.querySelector(".SelectBloodLine").innerHTML= "MuggleBorn";
}

let btn = document.getElementById("btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let people = document.querySelector(".people");
btn.onclick = function(){
    sidebar.classList.toggle("active");
    people.classList.toggle("activepeople");
}

searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
    people.classList.toggle("activepeople");
}




let bloodoptions = document.querySelector(".blood-options-list")

let houseoptions = document.querySelector(".house-options-list")
function showblood(){
        houseoptions.classList.remove("activehouse");
        bloodoptions.classList.toggle("activeblood");
}
function showblood1(){
    bloodoptions.classList.toggle("activeblood");
    document.querySelector(".SelectBloodLine-text").innerHTML= "PureBlood";
}
function showblood2(){
    bloodoptions.classList.toggle("activeblood");
    document.querySelector(".SelectBloodLine-text").innerHTML= "Halfblood";
}
function showblood3(){
    bloodoptions.classList.toggle("activeblood");
    document.querySelector(".SelectBloodLine-text").innerHTML= "MuggleBorn";
}


function showhouse(){
    houseoptions.classList.toggle("activehouse");
}

function showhouse1(){
    houseoptions.classList.toggle("activehouse");
    document.querySelector(".SelectHouse-text").innerHTML= "Gryffindor";
}
function showhouse2(){
    houseoptions.classList.toggle("activehouse");
    document.querySelector(".SelectHouse-text").innerHTML= "Hufflepuff";
}
function showhouse3(){
    houseoptions.classList.toggle("activehouse");
    document.querySelector(".SelectHouse-text").innerHTML= "Ravenclaw";
}
function showhouse4(){
    houseoptions.classList.toggle("activehouse");
    document.querySelector(".SelectHouse-text").innerHTML="Slytherin";
}





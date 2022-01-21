let divDisplay = document.querySelector(".box_contentv1")
let divDisplay2 = document.querySelector(".box_contentv2")
let divDisplay1 = document.querySelector(".glava")
let divDisplay3 = document.querySelector(".chelik")
let divDisplay4 = document.querySelector(".chelik1")
let divDisplay5 = document.querySelector(".chelik2")
let divDisplay6 = document.querySelector(".chelik3")
let divDisplay7 = document.querySelector(".content_text_6")
let divDisplay8 = document.querySelector(".content_text_2")
let divDisplay9 = document.querySelector(".content_5")
let divDisplay10 = document.querySelector(".content_text_3")
let divDisplay11 = document.querySelector(".content_text_4")
let divDisplay12 = document.querySelector(".row")
let divDisplay13 = document.querySelector(".row1")
let divDisplay14 = document.querySelector(".chelik")
let divDisplay15 = document.querySelector(".chelik1")
let divDisplay16 = document.querySelector(".chelik2")
let divDisplay17 = document.querySelector(".chelik3")
let buttonCreated1 = document.getElementById("button1")
let buttonCreated2 = document.getElementById("button2")
let buttonCreated3 = document.getElementById("button3")
function Created(){
    divDisplay1.style.display = "block"
    divDisplay1.style.display = "flex"
}
function Created_color(){
    divDisplay.style.backgroundColor = "#f80"
    divDisplay1.style.backgroundColor = "gray"
    divDisplay2.style.backgroundColor = "gray"
}
function Created_bg(){
    divDisplay7.style.color = "white"
    divDisplay8.style.color = "white"
    divDisplay9.style.color = "white"
    divDisplay10.style.color = "white"
    divDisplay11.style.color = "white"
    divDisplay12.style.color = "white"
    divDisplay13.style.color = "white"
    divDisplay14.style.color = "#f80"
    divDisplay15.style.color = "#f80"
    divDisplay16.style.color = "#f80"
    divDisplay17.style.color = "#f80"
}
buttonCreated1.addEventListener("click", Created)
buttonCreated2.addEventListener("click", Created_color)
buttonCreated3.addEventListener("click", Created_bg)
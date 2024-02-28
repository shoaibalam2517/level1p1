var box = document.querySelectorAll(".box")
var btn = document.querySelector("button")
var card1 = document.querySelectorAll(".card1")
var playground = document.querySelector(".playground")

btn.addEventListener("click",function(){

    console.log("AMIT")
    box[1].style.transform = "translatey(-100%)"
})
card1.forEach(function(x){


    x.addEventListener("click",function(){
        var selected = x.childNodes[3].getAttribute("src")
        // console.log(selected)
        var newimg = document.createElement("img")
        newimg.setAttribute("src",selected)


        var a = Math.floor(Math.random()*100)
        var b = Math.floor(Math.random()*100)
        var c = Math.floor(Math.random())*360
        console.log(a)
        newimg.style.left = a +"%"
        newimg.style.top = b +"%"
        newimg.style.rotate = c +"deg"

        playground.appendChild(newimg)
        // console.log(newimg)
        box[2].style.transform = "translatey(-200%)"


    })
})
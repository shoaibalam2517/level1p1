var menu = document.querySelector("#nav i")
var close = document.querySelector("#float i")

var tl = gsap.timeline()

tl.to("#float",{
    right:0,
    duration:0.5,
})
tl.from("#float h5",{
    x:-100,
    y:100,
    opacity:0,
    duration:0.5,
    stagger:0.5,
    rotate:20,
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})
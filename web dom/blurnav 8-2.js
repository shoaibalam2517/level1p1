var menu = document.querySelector("#nav i")
var close= document.querySelector("#float i")

var tl = gsap.timeline()

tl.to("#float",{
    right:0,
    duration:0.5,
    
})
tl.from("#float h4",{
    x:100,
    duration:1,
    opacity:0,
    stagger:0.3,
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})

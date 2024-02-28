var tl = gsap.timeline({
    scrollTrigger: {
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -40%",
        scrub:1,
        pin:true,
    }
    
})


tl.from("#left",{
    x:-1500,
    duration:1,
    // delay:1,
    rotate:120,
    opacity:0,
},"e")  
tl.from("#right",{
    x:1500,
    duration:1,
    // delay:1,
    rotate:-120,
    opacity:0,
},"e")

tl.to("#circle",{
    scale:11,
    duration:1,
    opacity:1
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        end:"top 10%",
        scrub:1,
        // pin:true,
    }
})

tl.from("#firstbox",{
    x:-1000,
    duration:1,
    opacity:0,
    rotation:-180,


})

tl.to("#secondbox",{
    y:-100,
    scale:0.9,
    duration:1,
    opacity:1,
    
})

tl.from("#thirdbox",{
    x:1000,
    duration:1,
    opacity:0,
    rotation:180,
})

// tl.from("#page3 h1",{
//    y:-500,
//    duration:1, 



// })
gsap.to("#page3 h1",{
    x:-900,
    // delay:1,
    duration:1,
    opacity:1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top 20%",
        end:"top 10%",
        scrub:1,
    
        // scrub:1,
    }
})
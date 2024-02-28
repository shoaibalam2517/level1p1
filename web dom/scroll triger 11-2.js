gsap.from("#page1 img",{
    y:100,
    rotate:360,
    duration:1,
    opacity:0,
    scale:0,

})
gsap.from("#page2 img",{
    y:100,
    rotate:360,
    // duration:1,
    opacity:0,
    scale:0.2,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:true,  
        ping: 
    }

})

gsap.from("#page3 img",{
    y:100,
    rotate:360,
    duration:1,
    opacity:0,
    scale:0.2,
    scrollTrigger:{
        trigger:"#page3 img",
        scroller:"body",
        // markers:true,
        // start:"top 90%",
        end:"top 80%",
        scrub:true,   
    }

})


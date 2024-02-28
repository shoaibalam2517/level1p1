var tl = gsap.timeline()

tl.from("#nav h4",{
    y:-100,
    duration:1,
    stagger:0.2,

})
tl.from("#nav h5",{
    y:-100,
    duration:1,
    stagger:0.2,

})
tl.to("#footer h3",{
    y:-20,
    duration:1,
    opacity:1,
    stagger:0.2,
})

tl.from("h1",{
    x:-700,
    y:-200,
    scale:0.3,
    opacity:0,
})


tl.to(".boxes",{
    rotate:0,
    duration:1,

})



tl.to("#b1",{
    x:300,
    y:200,
})

tl.to("#b2",{
    x:-300,
    y:200,
})

tl.to("#text3",{
    x:-100,
    y:50,
    scale:0,

})
tl.to('#text4',{
    x:100,
    y:50,
    opacity:1
})

// setTimeout(function (#text4) {
        
        
// }, 3000)





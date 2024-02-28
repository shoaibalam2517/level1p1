var tl = gsap.timeline()

tl.from("i",
{
    y:-4,
    // y:100,
    // delay:0,
    duration:1, 
    opacity:0,
    scale:0.1,
    rotate:150,
})

tl.from("h5",
{
    y:-4,
    // y:100,
    // delay:1,
    duration:1, 
    opacity:0,
    scale:0.1,
})

tl.from("button",
{
    y:-5,
    // y:100,
    // delay:1,
    duration:1, 
    opacity:0,
    scale:0.3,
})

tl.from("h1",
{
    // x:1500,
    y:-10,
    // delay:1,
    duration:1, 
    opacity:0,
    scale:0.1,
})

tl.from("img",{
    y:-1000,
    delay:0,
    duration:1,
    opacity:2,
    rotate:360,
    // scale:.2,
})

tl.from("p",{
    y:500,
    delay:0,
    duration:1,
    opacity:1,
    scale:0.1,
    // rotate:360,


})

// var btn = document.querySelector("button")

// btn.addEventListener("click",function{
    
// })
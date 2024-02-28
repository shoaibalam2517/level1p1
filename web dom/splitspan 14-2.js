var h1text = document.querySelector("h1").textContent

var splittedText = h1text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

document.querySelector("h1").innerHTML = clutter
// console.log(clutter)

gsap.from("h1 span",{
    y:100,
    opacity:0,
    // durtion:1,
    delay:1,
    stagger:0.3,

})


// var a = 0;

// setInterval(function()
// {
//     a++;
//     console.log("helllloooo")
// },1000)


var btn = document.querySelector("button")
var growth = document.querySelector("#growth")
var perc = document.querySelector("h1")

var grow = 0

btn.addEventListener("click",function()
{
   var increase = setInterval(function(){
   if(grow <= 100){
    
    var increase = grow++
    growth.style.width = `${increase}%`
    // console.log(grow)
    perc.innerHTML = increase+"%"
   }
    }, 50);
    setTimeout(function(){
        btn.innerHTML = "Downloaded"
        btn.style.backgroundColor = "rgba(52, 212, 52, 0.878)"
        clearInterval(increase)
    },5050);
})
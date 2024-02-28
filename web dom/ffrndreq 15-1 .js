// var box = document.querySelector("#box")

// box.addEventListener("dblclick",function(){
//     console.log("event performed")
// })

// setTimeout(function(){
//     console.log("hello")
// },4000)

var btn = document.querySelector("button");
var istatus = document.querySelector("h2");

var flag = 0;

btn.addEventListener("click",function()
{
    var a = Math.floor(Math.random()*5000);
    if(flag == 0)
    {

        istatus.innerHTML = "Request Sending...";
        istatus.style.color = "rgba(176, 110, 11, 0.947)";
        btn.innerHTML = "Sending...";

    setTimeout(function()
    {
        istatus.innerHTML = "Friends";  
        istatus.style.color = "rgba(11, 238, 162, 0.927)9";
        btn.innerHTML = "Remove Friend";
        
    }, a); 
    flag = 1;
    }
   else
   
   {
        istatus.innerHTML = "Stranger";  
        istatus.style.color = " white";
        btn.innerHTML = "Add Friend";
        flag = 0;
    }
    
})


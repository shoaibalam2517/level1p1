var cursor = document.querySelector("#cursor1")
// var cursor2 = document.querySelector("#cursor2")
// var cursor3 = document.querySelector("#cursor3")


document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px"; 
    

})
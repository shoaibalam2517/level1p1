

var a = Number(prompt("enter the 1st side"))
var b = Number(prompt("enter the 2nd side "))
var c = Number( prompt("enter the 3rd side"))

if(a === b && b  === c)
{
    console.log("It is equilateral triangle")
}
 else if(a === b || b === c || c === a  )
 {
    console.log("It is isoceles triangle")
 }
 else {
    console.log("It is scalene ")
 }
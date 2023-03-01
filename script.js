function calculate(){
let p = document.getElementById("principalAmount").value
console.log(p)
let r = document.getElementById("rate").value
console.log(r)
let t = document.getElementById("time").value
console.log(t)
let simpleInterest  =  p*r*t/100
document.getElementById("output").value = simpleInterest
}
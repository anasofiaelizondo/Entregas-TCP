/*const myName = "Ana Sofia"
let myAge = 16
let x = "frutas"
let y = "verduras"
var likesMusic = true

console.log(typeof myName)
console.log(typeof myAge)
console.log(typeof x)
console.log(typeof y)
console.log(typeof likesMusic)


myName = "Elizondo"*/

let x = 3
let y = 4
let z
z = x+y
console.log(z)
z = x-y
console.log(z)
z = x*y
console.log(z)
z = x/y
console.log(z)  

let compraRealizada = true
let pisoBarrido = true
let dinero;

if(compraRealizada == true || pisoBarrido ==  true){
  dinero = 10
}else{
  dinero = 5
}

/*
option + shift + a
if (compraRealizada == true &&  pisoBarrido == true) {
  dinero = 20;
} else {
  dinero = 1
} */

let YOB = 1999;
const d = new Date();
// CY = Current Year
let CY = d.getFullYear();

for (let year = YOB; year <= CY; year++) {
  if (year == YOB) {
    console.log('En ' + year + ' yo nací');
  }
  else if(year-YOB==1){
    console.log('En ' + year + ' yo tenía ' + (year - YOB) + ' año');
  }
   else if (year == CY) {
    console.log('En el ' + year + ' yo tendré ' + (year - YOB) + ' años');
  } else {
    console.log('En ' + year + ' yo tenía ' + (year - YOB) + ' años');
  }
}

let year = YOB;
while(year<=CY){
    let age = year-YOB;
    if (year == YOB) {
        console.log('En ' + year + ' yo nací');
      }
      else if(age==1){
        console.log('En ' + year + ' yo tenía ' + age + ' año');
      }
       else if (year == CY) {
        console.log('En el ' + year + ' yo tendré ' + age + ' años');
      } else {
        console.log('En ' + year + ' yo tenía ' + age + ' años');
      }
      year++;
} 
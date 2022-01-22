function toggleClass(){
    const body= document.querySelector('body');
    body.classList.toggle('light');
}

const deg= 6;
const hr= document.querySelector('#hr');
const mn= document.querySelector('#mn');
const s= document.querySelector('#s');

setInterval(()=>{
    let day= new Date();

//for hour hand...
//12 hours= 360
//1 hours= 30
//60 min= 30
//1 min= 0.5
//for h hours and m minute hours hands move
// (h*30) + (m*0.5)

let hh= (day.getHours()*30) + (day.getMinutes()*0.5);

//for minute hand...
//60 min= 360
//1 min= 6
//for m minites minute hand move
// m*6

let mm= day.getMinutes()*deg;

//for second hand...
//60 sec= 360
//1 sec= 6
//for s second second hand move
//s*6

let ss= day.getSeconds()*deg;

hr.style.transform= `rotateZ(${hh}deg)`;
mn.style.transform= `rotateZ(${mm}deg)`;
s.style.transform= `rotateZ(${ss}deg)`;
// console.log("Dhirendra");
},1000);


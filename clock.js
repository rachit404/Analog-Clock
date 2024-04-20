const numbers = document.querySelector(".numbers");
const barSec = document.querySelector(".bar-sec");

const num = [];
const bar = [];
//create hour numbers
for(let i = 1; i<=12 ; i++)
{
    num.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    );
    // console.log(num);
}
numbers.insertAdjacentHTML("afterbegin", num.join(""));

//create bar seconds
for(let i = 1; i<=60 ; i++)
{
    bar.push(
        `<span style="--index:${i}"><p></p></span>`
    );
    // console.log(num);
}
barSec.insertAdjacentHTML("afterbegin", bar.join(""));

const handhr = document.querySelector(".hand.hr");
const handmin = document.querySelector(".hand.min");
const handsec = document.querySelector(".hand.sec");


// function TickClock() {
//     let date = new Date();
//     const hr = date.getHours();
//     const min = date.getMinutes();
//     const sec = date.getSeconds();

//     handhr.style.transform = `rotate(${hr*30 + min/2}deg)`;
//     handmin.style.transform = `rotate(${min*6}deg)`;
//     handsec.style.transform = `rotate(${sec*6}deg)`;
// }
// TickClock();
// setInterval(TickClock, 1000);


function SmoothClock() { 
    // 1s = 1000ms
    // 1min = 60s = 60 x 1000ms
    // 1hr = 60min = 60 x 60s = 60 x 60 x 1000ms  
    var date = new Date();
    var deg;
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const ms = date.getMilliseconds();

    deg = (sec + ms/1000)*6;
    handsec.style.transform = "rotate("+deg+"deg)";
    
    deg = (min + sec/60 + ms/60000)*6;
    handmin.style.transform = "rotate("+deg+"deg)";

    deg = hr>12 ? hr-12 : hr;
    deg = (deg*30 + min/2 + sec/120 + ms/120000);
    handhr.style.transform = "rotate("+deg+"deg)";
    // 60mins is 30deg of hour hand, hr=min/2
    // 3,600s is 30deg of hour hand, hr=sec/120
    // 3,600,000ms is 30deg of hour hand, hr=ms/120,000
    requestAnimationFrame(SmoothClock);
}
SmoothClock();

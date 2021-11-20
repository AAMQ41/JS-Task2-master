//Variables
let time=0;
let isTimerOff=true;
let timer=0;

//Elements in a variable
const start=document.getElementById("start");
const reset=document.getElementById("reset");
const stop=document.getElementById("stop");
const displayTime=document.getElementById("time-display");


//use this function to start the timer
const startTimer=()=>{
    isTimerOff=false;
    timer= setInterval(()=>{
        time++;
        updateTimer();
    },1000)
}

//this function update the timer values

const updateTimer=()=>{

    const min=Math.floor(time/60);
    const sec=time%60;

    if(sec<10){
        displayTime.innerHTML= `${min}:0${sec}`
    }
    else{
        displayTime.innerHTML=`${min}:${sec}`
    }
}

// Start the timer
start.addEventListener("click",()=>{
    if(isTimerOff){
        startTimer();
    }
});
// stop and clear the timer
reset.addEventListener("click",()=>{
    clearInterval(timer);
    isTimerOff=true;
    time=0;
    updateTimer();//
});



stop.addEventListener("click",()=>{
    clearInterval(timer);
    isTimerOff=true;
});

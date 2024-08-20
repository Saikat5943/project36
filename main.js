const timer=document.getElementById("stopwatch");
var hr=0;
var min=0;
var sec=0;
var milli=0;
var stoptime=true;
function startTimer(){
    if(stoptime==true){
        stoptime=false;
        timerCycle();
    }
}
function stopTimer(){
    if(stoptime==false){
        stoptime=true;
    }
}
function timerCycle(){
    if(stoptime==false){
        milli=parseInt(milli);
        sec=parseInt(sec);
        min=parseInt(min);
        hr=parseInt(hr);
        milli=milli+1;
        if(milli==100){
            sec=sec+1;
            milli=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
            milli=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
            milli=0;
        }
        if(milli<10){
            milli="0"+milli;
        }
        if(sec<10){
            sec="0"+sec;
        }
        if(min<10){
            min="0"+min;
        }
        if(hr<10){ 
            hr="0"+hr;
        }
        timer.innerHTML=hr + ":" + min + ":" + sec + ":" + milli;
        setTimeout("timerCycle()",9.999);
    }
}
function resetTimer(){
    timer.innerHTML="00:00:00:00";
    stoptime=true;
    hr=0;
    min=0;
    sec=0;
    milli=0;
}
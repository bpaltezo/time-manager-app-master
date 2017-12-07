

////////////////////////////////////// functions ////////////////////////////

//CLOCK

function DisplayCurrentTime() {
    
    var date = new Date();
    var _date = date.toDateString();
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    if(hours === "00"){
        hours = "12";
    }
    var time = hours + ":" + minutes + ":" + seconds;
    var ampm = am_pm;
    var date = _date;
    clockLoop = setTimeout(DisplayCurrentTime,1000);
	drawCanvas(time,ampm,date);
}
function drawCanvas(time,ampm,date) {
    var canvas = document.getElementById("canvas-clock");
    var ctx = canvas.getContext('2d');
    canvas.width = 360;
    canvas.height = 480;
    //background
    gradient = ctx.createRadialGradient(250,250,3,150,250,250);
    gradient.addColorStop(0,'#09303a');
    gradient.addColorStop(1,'black'); 
    ctx.fillStyle = gradient;
    //ctx.fillStyle = "#333333";      
    ctx.fillRect(0,0,500,550);

    ctx.lineWidth = 22;
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0,50,255,0.6)";
    ctx.arc(canvas.width/2,canvas.height/2,155,90,180);
    ctx.stroke();
    ctx.lineWidth = 17;
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0,50,255,0.4)";
    ctx.arc(canvas.width/2,canvas.height/2,135,90,180);
    ctx.stroke();
    ctx.font = "50px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(time,canvas.width/2-110,canvas.height/2);
    ctx.font = "22px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(ampm,canvas.width/2+88,canvas.height/2-10);
    ctx.font = "25px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(date,canvas.width/2-95,canvas.height/2+30);
}
///////////////////////////////////////////////////////////////////////////////////////
//TIMER


var seconds = 60;
var arcSec = seconds/6+0.8;
var minutes;
var arcMins = 11;
var hours = 0;
var arcHr = hours/6+0.8;
var runClock;

function Timer() {
    var canvas = document.getElementById('canvas-timer');
    document.getElementById('timercon').appendChild(canvas);
    var ctx = canvas.getContext('2d');
    canvas.width = 360;
    canvas.height = 440;
    //for seconds
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0,0,255,0.3)";
    ctx.arc(canvas.width/2,canvas.height/2-60,135,0,90);
    ctx.stroke();
    //for minutes
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255,0,0,0.3)";
    ctx.arc(canvas.width/2,canvas.height/2-60,115,0,90);
    ctx.stroke();
    //for hours
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255,0,255,0.3)";
    ctx.arc(canvas.width/2,canvas.height/2-60,95,0,90);
    ctx.stroke();
    
    ctx.font = "40px arial";
    ctx.fillStyle = "rgba(22,33,44,0.7)";
    ctx.fillText("00:00:00",canvas.width/2-78,canvas.height/2-50);
}

var state = "false";
var stateCount = 0;

function startTimer(){
    var canvas = document.getElementById('canvas-timer');
    ctx = canvas.getContext('2d');
  
    var btn = document.getElementById('timer-btn-start');
    btn.innerText = "Stop";
    minutes = Math.floor(document.getElementById('set-time-field').value);
    document.getElementById('set-time-field').value = minutes+" minutes";
    ctx.font = "35px arial";
    ctx.fillStyle = "rgba(22,33,44,0.7)";
    ctx.fillText("00:0"+minutes+":00",canvas.width/2-78,canvas.height/2-50);
    
    if(minutes === 30){
        arcMins = 14.15;
    }else{
        for (var x = 0; x < minutes-1;x++){
            arcMins += 0.1;
    }
    initTimer();
    minutes -= 1;
}

var ended = "false";

function initTimer(){
    if(state === "false"){
        document.getElementById('set-time-field').placeholder = minutes + " minutes";
    }else{
        //alert("Timer can not be Stopped");
    }
    if(document.getElementById('set-time-field').value === "" || minutes < 0 || minutes > 60){
        alert('Invalid Time. Please enter MINUTES');
    }else{
    var canvas = document.getElementById('canvas-timer');
    var ctx = canvas.getContext('2d');

    canvas.width = 360;
    canvas.height = 440;

    //12 am/pm = 11
    //runs the clock
    
    if(seconds === 0){
        seconds = 60;
        arcSec = 10.8;
        minutes -= 1;
        arcMins -= 0.1;
    }
    if(seconds === 15 && minutes === 0){
        process.timerSound();
        console.log('music plays');
    }
    if(minutes === 60){
        hours += 1;
    }
    
    arcSec -= 0.1;
    console.log(seconds,minutes,arcSec,arcMins);
    ctx.lineCap = "round";
    
    //for seconds
    if(seconds === 0 || minutes === -1){
      ctx.lineWidth = 20;
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0,0,255,0.3)";
      ctx.arc(canvas.width/2,canvas.height/2-60,135,0,90);
      ctx.stroke();
    }else{
      ctx.lineWidth = 20;
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0,0,255,0.3)";
      ctx.arc(canvas.width/2,canvas.height/2-60,135,0,90);
      ctx.stroke();
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0,0,255,0.3)";
      ctx.arc(canvas.width/2,canvas.height/2-60,135,11,arcSec);
      ctx.stroke();
    }
    
    //for minutes
    if(minutes === 0 || minutes === -1){
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,0,0,0.3)";
        ctx.arc(canvas.width/2,canvas.height/2-60,115,0,90);
        ctx.stroke();  
    }else{
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,0,0,0.3)";
        ctx.arc(canvas.width/2,canvas.height/2-60,115,0,90);
        ctx.stroke();
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,0,0,0.5)";
        ctx.arc(canvas.width/2,canvas.height/2-60,115,11,arcMins);
        ctx.stroke(); 
    }
    
    //for hours
    if(hours === 0){
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,0,255,0.3)";
        ctx.arc(canvas.width/2,canvas.height/2-60,95,0,90);
        ctx.stroke(); 
    }else{
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,0,255,0.3)";
        ctx.arc(canvas.width/2,canvas.height/2-60,95,0,90);
        ctx.stroke();
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,0,255,0.5)";
        ctx.arc(canvas.width/2,canvas.height/2-60,95,11,11.1);
        ctx.stroke();
    } 
    //texts
    if(seconds > 0 && minutes > -1){
    //text for hours
      ctx.font = "35px arial";
      ctx.fillStyle = "rgba(255,0,255,0.7)";
      ctx.fillText("0"+hours+":",canvas.width/2-65,canvas.height/2-60);
    //text for minutes
      ctx.font = "35px arial";
      ctx.fillStyle = "rgba(255,0,0,0.7)";
      if(minutes < 10){
        ctx.fillText("0"+minutes+":",canvas.width/2-15,canvas.height/2-60);    
      }else{
          ctx.fillText(minutes+":",canvas.width/2-15,canvas.height/2-60);
      }
    //text for seconds
      ctx.font = "35px arial";
      ctx.fillStyle = "rgba(0,0,255,0.7)";
      if(seconds < 10){
          ctx.fillText("0"+seconds,canvas.width/2+35,canvas.height/2-60);
      }else if(seconds === 60){
        ctx.fillText("00",canvas.width/2+35,canvas.height/2-60);
      }
      else{
          ctx.fillText(seconds,canvas.width/2+35,canvas.height/2-60);
      }
    }
    seconds -= 1;
    if(minutes === -1 && seconds === 59){
        clearTimeout(runClock);
        ended = "true";
        ctx.font = "25px arial";
        ctx.fillStyle = "rgba(255,0,0,0.8)";
        ctx.fillText("TIME IS UP",canvas.width/3,canvas.height/2-60);
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(0,0,255,0.3)";
        ctx.arc(canvas.width/2,canvas.height/2-60,135,0,90);
        ctx.stroke();
        seconds = 0;
        minutes = 0;
        hours = 0;
        console.log('time up');
        document.getElementById('set-time-field').value = "";
        document.getElementById('set-time-field').placeholder = "Set Time";
        document.getElementById('timer-btn-start').innerText = "Restart";
        return;
    }
    runClock = setTimeout(initTimer,1000);
    }
    state = "true";
}
}


///////////////////////////////////////////////////////////////////////////////////
//Stopwatch
    
// global variables
var millis = 0;
var sec = 0;
var mins = 0;
var hr = 0;
var nano = 0;
//var counter;
var divMillis;
var divSeconds;
var divMinutes;
var divHour;
var started = false;
var laprecord;
var lapCounter = 0;

function initStop() {
  divMillis =document.getElementById('stop-millis');
  divSeconds =document.getElementById('stop-seconds');
  divMinutes =document.getElementById('stop-minutes');
  divHour =document.getElementById('stop-hour');
  if(started === false){
      generateMillis();   
      return; 
  }else if(started === true){
    lapRecord();
    return;
  }
}

var laps = 0;

function generateMillis() {
  laps = Math.floor(prompt("Enter number of Laps "));
  console.log(laps);
  started = true;
  generateNano();
  document.getElementById('lap-btn').innerText = "Record";
}
var looper;


function generateNano(){
  nano += 1;
  if(nano === 9){
    nano = 0;
    millis += 1;
  }
  if(millis === 10){
    millis = 0;
    sec += 1;
  }
  if(sec === 60){
    mins +=1;
    sec = 0;
  }
  if(mins === 60){
    hr += 1;
    mins = 0;
  }
    divMillis.innerText = millis+""+nano+"ms";
  if (sec < 10){
    divSeconds.innerText = "0"+sec+"s:";  
  }else{
    divSeconds.innerText = sec+"s:";  
  }
  if(mins < 10){
  divMinutes.innerText = "0"+mins+"m:";  
  }else{
  divMinutes.innerText = mins+"m:";  
  }
  if(hr < 10){
    divHour.innerText = "0" + hr+"h:";
  }else{
    divHour.innerText = hr;
  }
  looper = setTimeout(generateNano,10);
}


function regenerateNano(){   
  nano += 1;   
  if(nano === 9){     
    nano = 0;
    millis += 1;   
  }   
  if(millis === 9){     
    millis = 0;     
    sec += 1;   
  }
  if(sec === 60){     
    mins +=1;     
    sec = 0;   
  }   
  if(mins === 60){     
    hr += 1;
    mins = 0;   
  }     
  divMillis.innerText = millis+nano+"ms";
  if (sec < 10){
  divSeconds.innerText = "0"+sec+"s:";     }
  else{
    divSeconds.innerText =
    sec+"s: ";     
  }   
  if(mins < 10){   
    divMinutes.innerText = "0"+mins+"m:";
  }else{   
    divMinutes.innerText = mins+"m:";     
  }if(hr < 10){
    divHour.innerText = "0" + hr+"h:";   
  }else{     
    divHour.innerText = hr;   }
  setTimeout(regenerateNano,10);
}


function lapRecord() {
  if(laps == lapCounter){
      clearTimeout(looper);
      document.getElementById('lap-btn').innerText = "Start";
      divHour.innerText = "00h:";
      divMinutes.innerText = "00m:";
      divSeconds.innerText = "00s:";
      divMillis.innerText = "00ms";
      var millis = 0;
      var sec = 0;
      var mins = 0;
      var hr = 0;
      var nano = 0;
      lapCounter = 0;
      started = false;
  }else{
   lapCounter += 1;
   var recordedmillis = document.getElementById('stop-millis').innerText;
   var recordedsec = document.getElementById('stop-seconds').innerText;
   var recordedmins = document.getElementById('stop-minutes').innerText;
   var recordedhr = document.getElementById('stop-hour').innerText;
   laprecord = "lap" +lapCounter+":    "+ recordedhr + recordedmins + recordedsec + recordedmillis;
   console.log(laprecord);
   var list = document.createElement('li');
   list.innerText = laprecord;
   var parent = document.getElementById('lap-list');
   parent.appendChild(list); 
  }
  
  //regenerateMillis();

}

function regenerateMillis(){
  regenerateNano();
}
//////////////////////////////////////////////////////////////////////////////////////////////
// alarm
var alarmState = "false";
var stateCount = 0; 
var alarmArray = [
    time = [],
    cap = [],
    sno = [],
    rep = [],
    s = []
];

function enableAlarm(){
    console.log('alarm enabled');
}

function submitNewAlarm(header){
    alarmState = "true";
    var alertTime = Math.floor(document.getElementById('alarm-input-time').value);
    var caption = document.getElementById('alarm-input-caption').value;   
    var sound = document.getElementById('alarm-input-sound').value;
    var snooze = document.getElementById('alarm-input-snooze').value;
    var repeat = document.getElementById('alarm-input-repeat').value;
    var thrownTime;
    var _ampm;
    var mainThrow;
    //console.log(alertTime,caption,sound,snooze,repeat);
    thrownTime = alertTime;
    
    if(alertTime > 12){
        thrownTime - 12;
        _ampm = "PM";
    }else{
        _ampm = "AM";
    }
    mainThrow = thrownTime+" "+_ampm;
    return header = alertTime;
}

/////////////////////////////////////////////////////////////////////////


function loadURL(){
  alert("No internet connection.Wala kang load");
}

function SignIn(){
  if(document.getElementById('account').innerText == "Not signed in"){
    var user = prompt('Enter your Account Name to register');
    document.getElementById('account').innerText = "Signed in as " + user;
  }else{
    alert('already signed in');
  }
}
function loadSettings() {
  alert('Settings has not working. Reinstalling the app may fix the problem. Charrrrrr!');
}
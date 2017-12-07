
//clock page variables
var clockLoop;
var backbtn = "<  ";

let process = {
	menu:function(){
		let content =
    <div>
   <div class = "panel-overlay"></div>
      <div class = "panel panel-right panel-cover">
         <div class = "content-block">
          <p><a href = "#" class = "panel-close" onClick={closePanel}>
                <i class="icon icon-back color-blue"></i>Time Manager</a>
                <div class="content-block-title">Created by Bryan Paulo</div></p>
            <div class="list-block">
            <ul>
              <li>
                <button class="button color-red" onClick={process.menu}>Go to HOME</button>
              </li>
              <li class="item-content">
                <div class="item-inner">
                  <div class="item-title" id="account">Not signed in</div>
                </div>
              </li>
              <li class="item-divider"><a class="link" onClick={SignIn}><span>My Account</span></a></li>
              <li class="item-content">
                <div class="item-inner">
                  <div class="item-title">Know more about Me</div>
                </div>
              </li>
              <li class="item-divider"><a class="link" onClick={loadURL}><span>About Us</span></a></li>
              <li class="item-content">
                <div class="item-inner">
                  <div class="item-title">App configuration</div>
                </div>
              </li>
              <li class="item-divider"><a class="link" onClick={loadSettings}><span>Settings</span></a></li>
              <li class="item-content">
                <div class="item-inner">
                  <div class="item-title">Rate this App</div>
                </div>
              </li><li class="item-divider"><a class="link"><span onClick={loadURL}>Support</span></a></li>
              <li><p></p></li><p></p><li><p></p></li><li><p></p></li>
              <li class="item-footer color-orange"><span class="center">BackSpace 2017</span></li>
            </ul>
            </div>
         </div>
      </div>     
		<div className="views">
			<div className="view view-main">
				<div>
					<div className="navbar navbar-fixed">
                		<div className="navbar-inner">
                        <div className="left"></div> 
                  			<div className="center">Time Manager App</div>
                  			<div className="right">
                  				<a class ="open-right-panel" href="#" data-panel="right" onClick={openPanel}>
                  					<i className="icon-bars icon"></i>
                  				</a>
                  			</div>
              			</div>
        			</div>
        		</div>
        		<div>
       			<div className="toolbar tabbar tabbar-labels">
  					<div className="toolbar-inner">
    					<a href="#" class="tab-link" data-tab="#tab1" onClick={process.alarm}>
      							<span class="tabbar-label">Alarm</span>
    					</a>
    					<a href="#" class="tab-link" data-tab="#tab1" onClick={process.timer}>
      							<span class="tabbar-label">Timer</span>
    					</a>
    					<a href="#" class="tab-link" data-tab="#tab1" onClick={process.stop}>
      							<span class="tabbar-label">StopWatch</span>
    					</a>
  					</div>
				</div>
     			</div>
     			<div id="page-content" className="page-content">
				</div>
        	</div>
        </div>
        </div>;
		ReactDOM.render(content,document.getElementById('root'));
    process.clock();
	},
	clock:function(){
		let content = <div>
			<canvas id="canvas-clock"></canvas>
		</div>;
		ReactDOM.render(content,document.getElementById('page-content'));
		DisplayCurrentTime();
	},
  
  alarmSounds:function(soundIndex){
    let def = <audio autoPlay loop id="alarm-sound"><source type="audio/mpeg" id="alarm-sound-source" src="audio/alarm.mp3"></source></audio>;
    let C = <audio autoPlay loop id="alarm-sound"><source type="audio/mpeg" id="alarm-sound-source" src="audio/C.mp3"></source></audio>;
    let aui = <audio autoPlay loop id="alarm-sound"><source type="audio/mpeg" id="alarm-sound-source" src="audio/aui.mp3"></source></audio>;
    let rapper = <audio autoPlay loop id="alarm-sound"><source type="audio/mpeg" id="alarm-sound-source" src="audio/rapper.mp3"></source></audio>;   
    let wake_up = <audio autoPlay loop id="alarm-sound"><source type="audio/mpeg" id="alarm-sound-source" src="audio/wake_up.mp3"></source></audio>;
    
    if(soundIndex == "1"){
      ReactDOM.render(def,document.getElementById('soundDIV'));
      console.log('gumana');
    }else if (soundIndex == "2"){
      ReactDOM.render(C,document.getElementById('soundDIV'));
    }else if (soundIndex == "3"){
      ReactDOM.render(aui,document.getElementById('soundDIV'));
    }else if(soundIndex == "4"){
      ReactDOM.render(rapper,document.getElementById('soundDIV'));  
    }else if(soundIndex == "5"){
      ReactDOM.render(wake_up,document.getElementById('soundDIV'));
    }
  },
  stopalarm:function(){
    let content = <div></div>
    ReactDOM.render(content,document.getElementById('soundDIV'));
  },
  alarming:function(){
    let content = 
    <div>
      <br /><br /> 
      <div id="animation"></div>
      <div>
        <div className="button" onClick={snooze}>Snooze</div>
      <div id="soundDIV"></div>
      </div>
    </div>;
      ReactDOM.render(content,document.getElementById('alarmDIV'));   
  },

	alarm:function(){
		clearTimeout(clockLoop);
		let content = 
			<div>   
				<div className="alarm-container" id="alarm-container">
					<div class="list-block">
  						<ul id="alarm-list">
    						<li class="item-content">
      							<div class="item-inner">
        							<div class="item-title" onClick={setnewAlarm}>Add new alarm</div>
        								<div class="item-after">
          									<a><i className="color-blue">+</i></a>
        								</div>
      							</div>
    						</li>
    						<li class="item-divider"><span onClick={hehe}>Display your alarms</span></li>		
  						</ul>	
					</div>
				</div>
        <div id="alarmDIV"></div>
			</div>;
		ReactDOM.render(content,document.getElementById('page-content'));
	},
	timer:function(){
		clearTimeout(clockLoop);
		let content = 
			<div>
				<div className="timer-container" id="timercon">
					<canvas id="canvas-timer"></canvas>
					<input type='text' placeholder="Set Timer" id="set-time-field" className="set-time-field" />
					<button id="timer-btn-start" onClick={startTimer}>Start</button>
        </div>
			 <div id="timerDIV"></div>
      </div>;
			ReactDOM.render(content,document.getElementById('page-content'));
			setTimeout(Timer,100);
	},
  timerSound:function(){
    let sound = 
      <audio id="timer-audio" autoPlay><source type="audio/mpeg" src="audio/xxx.mp3"></source></audio>;
      ReactDOM.render(sound,document.getElementById('timerDIV'));
  },
	stop:function(){
		clearTimeout(clockLoop);
		let content = 
			<div>
				<div className="stopwatch-container">
					<h1 id="stop-hour" className="stop-time">00h:</h1><h1 id="stop-minutes" className="stop-time">00m:</h1><h1 id="stop-seconds" className="stop-time">00s:</h1><h1 id="stop-millis" className="stop-time">00ms</h1>
					<button id="lap-btn" onClick={initStop}>Start</button>
					<div className="lap-result">
						<ul id="lap-list"></ul>
					</div>
				</div>		
			</div>;
			ReactDOM.render(content,document.getElementById('page-content'));
	},
	loading:function(){
		let content = <div>
					Loading...
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
  
}

function setnewAlarm() {
	let content = 
	<div>
		<form class="list-block">
  			<ul>
    			<li>
      				<div class="item-content">
        				<div class="item-inner">
          					<div class="item-title label">Time</div>
          					<div class="item-input">
            				<input type="time" placeholder="Time" id="alarm-input-time" /></div>
        				</div>
      				</div>
    			</li>
    		<li>
      			<div class="item-content">
        			<div class="item-inner">
          				<div class="item-title label">Caption</div>
          				<div class="item-input">
            				<input type="text" placeholder="Caption" id="alarm-input-caption"/></div>
        			</div>
      			</div>
    		</li>
    		<li>
      			<div class="item-content">
        			<div class="item-inner">
          				<div class="item-title label">Repeat</div>
          				<div class="item-input">
            				<select type="select" id="alarm-input-repeat">
              					<option value="1">Daily</option>
              					<option value="1">Weekly</option>
              					<option value="1">Weekends</option>
            				</select>
          				</div>
        			</div>
      			</div>
    		</li>
    		<li>
      			<div class="item-content">
        			<div class="item-inner">
          				<div class="item-title label">Snooze</div>
          					<div class="item-input">
            					<label class="label-switch">
              						<input type="checkbox" value="" id="alarm-input-snooze"/>
              						<div class="checkbox"></div>
            					</label>
          					</div>
        			</div>
      			</div>
    		</li>
    		<li>
      			<div class="item-content">
        			<div class="item-inner">
          				<div class="item-title label">Alarm Volume</div>
          					<div class="item-input">
            				<div class="range-slider">
              					<input type="range" max="100" min="0" step="1" id="alarm-input-vol" /></div>
          					</div>
        			</div>
      			</div>
    		</li>
    		<li>
      			<div class="item-content">
        			<div class="item-inner">
          				<div class="item-title label">Alarm Sound</div>
          				<div class="item-input">
            				<select type="select" id="alarm-input-sound">
              					<option value="1">Default Sound</option>
                        <option value="2">Good Morning Alarm</option>
              					<option value="3">SoundTrip!</option>
              					<option value="4">Best Rapper</option>
              					<option value="5">Wake UP!</option>
            				</select>
          				</div>
        			</div>
      			</div>
    		</li>
    		<li class="item-content">
      			<div class="item-inner">
        			<div class="item-title"></div>
        				<div class="item-after">
          					<a class="button" onClick={submitAlarm}>Done</a>
        				</div>
      			</div>
    		</li>
  		</ul>
	</form>
	</div>;
	ReactDOM.render(content,document.getElementById('page-content'));
}
process.menu();

var header;
var listCount = 1;
var sound;
var audioSource;
var audioLoopX = 0;
var audioLooper;
var alarmlist;
var caption;
var RT;
var tobeAlarmed;
var audioLoopCount = 0;
var sound;
var realTimeCounter;

function RealTime(exp){
    console.log(sound);
    var date = new Date();
    var hours = date.getHours();
    var am_pm = date.getHours();
    var minutes = date.getMinutes();
    if(minutes < 10){
      minutes = "0" +minutes;
    }
    if(hours < 10){
      hours = "0" + hours;
    }
    RT = hours +":"+minutes;
    console.log(tobeAlarmed,RT,audioLoopCount);
  if(tobeAlarmed === RT){
      process.alarming();  
      ainmateAlarm();
      audioLoopCount += 1;
      //if(audioLoopCount === 1){alert("Hey, wake up! This is your task: "+caption);}
      if(sound == "1" ){ 
          loopSound(1);
        }else if (sound == "2"){
          loopSound(2);
        }else if (sound == "3"){
          loopSound(3);
        }else if(sound == "4"){
          loopSound(4);
        }else if (sound == "5"){
          loopSound(5);
        }  
      }else{
        console.log('not yet');
      }
  realTimeCounter = setTimeout(RealTime,1000);
}

function snooze() {
  tobeAlarmed = "";
  clearTimeout(realTimeCounter);
  clearTimeout(animator);
  process.alarm();
  document.getElementById('alarmDIV').style.display = "none";
  document.getElementById('alarm-container').style.display = "block";
  process.stopalarm();
  //document.getElementById('alarmDIV').removeChild(document.getElementById('alarm-sound'));
}
var alarmingCount = ".";
var isRed = "false";
var animator;
var submittedAlarms = 0;

function ainmateAlarm(){
  document.getElementById('alarm-container').style.display = "none";
  animator = setInterval(animateAlarm,1500);
}

function animateAlarm() { 
        document.getElementById('animation').innerText = "    ALARMING...";  
          if(isRed === "true"){
            document.getElementById('animation').style.color = "#223345";
            isRed = "false";
          }else{
            document.getElementById('animation').style.color = "red";
            isRed = "true";
          }
}

function submitAlarm() {
  tobeAlarmed = document.getElementById('alarm-input-time').value;
  RealTime();
  caption = document.getElementById('alarm-input-caption').value;
	sound = document.getElementById('alarm-input-sound').value;
  alert('New alarm added');
  process.alarm();
  console.log(tobeAlarmed);
  localStorage.setItem('time',tobeAlarmed);
  localStorage.setItem('caption',caption);
  localStorage.setItem('sound',sound);
  localStorage.setItem('id',submittedAlarms);
  submittedAlarms += 1;
}

function loopSound(index) {
    process.alarmSounds(index);
}
 
function hehe() {
  alarmlist = document.getElementById('alarm-list');

  if(localStorage.getItem("time").value != undefined){
    alert("contains");
    for(var x = 0; x < submittedAlarms;x++){
    var alarms = document.createElement('li');
    alarms.setAttribute('class','item-content');
    let div1 = document.createElement('div');
    div1.setAttribute('class','item-inner');
    let div2 = document.createElement('div');
    div2.setAttribute('class','item-title');
    div2.innerText = caption + "         " + RT;
    let div3 = document.createElement('div');
    div3.setAttribute('class','item-after');
    let a = document.createElement('a');
    a.setAttribute('onclick','enableAlarm()');
    let span = document.createElement('span');
    span.setAttribute('class','badge bg-green');
    span.innerText = "Details";
    a.appendChild(span);
    div3.appendChild(a);
    div2.appendChild(div3);
    div1.appendChild(div2);
    alarms.appendChild(div1);
  }
  //console.log(alarmlist);  
  alarmlist.appendChild(alarms);    

  }else{
      for(var x = 0; x < submittedAlarms;x++){
    var alarms = document.createElement('li');
    alarms.setAttribute('class','item-content');
    let div1 = document.createElement('div');
    div1.setAttribute('class','item-inner');
    let div2 = document.createElement('div');
    div2.setAttribute('class','item-title');
    div2.innerText = caption + "         " + tobeAlarmed;
    let div3 = document.createElement('div');
    div3.setAttribute('class','item-after');
    let a = document.createElement('a');
    a.setAttribute('onclick','enableAlarm()');
    let span = document.createElement('span');
    span.setAttribute('class','badge bg-green');
    span.innerText = "Details";
    a.appendChild(span);
    div3.appendChild(a);
    div2.appendChild(div3);
    div1.appendChild(div2);
    alarms.appendChild(div1);
  }
  //console.log(alarmlist);  
  alarmlist.appendChild(alarms);    

  }
	}

var myApp = new Framework7();

         var $$ = Dom7;

         function openPanel(){
            // 'left' position to open Left panel
            myApp.openPanel('right');
         };
         function closePanel() {
            myApp.closePanel();
         };
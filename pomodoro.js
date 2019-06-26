function pomodoro() {
		var project3 = _('project3');
		project3.className = "project3_study";
		var pomodoro = _('mypomodoro');
		var pstudy = (_('study').value)*60;
		var minutes = (_('study').value)-1;
		var pbreak = (_('break').value)*60;
		//var minutes;
		var seconds = 61;
		function countDownStudy() {
		//minutes = Math.floor(pstudy/60);
		if (seconds == 0) {
			seconds = 60;
			minutes--;
		}
		seconds --;
		project3.innerHTML = "<h1 class = 'study'>study for</br></br>"+minutes+"min : "+seconds+"seconds</h1>";
		//pomodoro.innerHTML += "<h6></br>study sec:"+pstudy+"</h6>";
		if(pstudy < 1) {
			clearTimeout(timer);
			pomodoro.innerHTML = '<h2>Countdown Complete!</h2>';
			pomodoro.innerHTML += '<a href="#">Click here now</a>';
		}
			pstudy--;
			//seconds --;
			var timer = setTimeout(countDownStudy,1000);
		}
		countDownStudy();
	}

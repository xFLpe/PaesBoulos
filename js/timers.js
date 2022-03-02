





function startTimer() {


  if (document.getElementById('desc').innerHTML == 5) {


    document.getElementById('btnTimer').innerHTML = "";





    document.getElementById('desc').innerHTML =
      document.getElementById('desc').innerHTML + ":" + 00;
  }

  var presentTime = document.getElementById('desc').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if (s == 59) { m = m - 1 }
  if (m < 0) {
    return

  }

  document.getElementById('desc').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);


}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
  if (sec < 0) { sec = "59" };
  checkFinish();
  return sec;
}

function checkFinish() {

  if (document.getElementById('desc').innerHTML == "0:00") {    

    var beep = new Audio('/snd/beep.mp3');
    beep.play();

    document.getElementById('btnTimer').innerHTML = '<img width="15"  src="./img/timer.png" alt="timer" onclick="startTimer()">';
    document.getElementById('desc').innerHTML = 5;
    document.getElementById('check7').checked = true;

  }

}



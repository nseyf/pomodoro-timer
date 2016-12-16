$(document).ready(function(){
  $('#resetTime').hide();
  var time = parseInt($('#time').html());
  var breakTime = parseInt($('#breakTime').html());

// Counter
$('#startClock').on('click', function(){
  var counter = setInterval(timer, 1000);
 time *= 60;
 breakTime *= 60;
  function timer(){

$("#breakTime, #startClock, #subTime, #addTime, #subBreakTime, #addBreakTime, #sessionHeading").hide();

    time -= 1;
    if(time === 0){
      alert("Time's up!");
      clearInterval(counter);
      $('#time').hide();
      $('#breakTime').show();
      var startBreak = setInterval(breakTimer, 1000)
    }
if (time % 60>=10){
  $('#time').html(Math.floor(time / 60) + ":" + time % 60);
} else {
  $('#time').html(Math.floor(time / 60) + ":" + "0" + time % 60);
}

    function breakTimer(){
      breakTime -= 1
      if(breakTime === 0){
        clearInterval(startBreak);
        alert("Break's Over!");
        $('#resetTime').show();
      }
      if (breakTime % 60>=10){
        $('#breakTime').html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
      } else {
        $('#breakTime').html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
      }
    }
}
});


// Controls

$('#resetTime').on('click', function(){
time = 25;
breakTime = 5;
$('#time').html(time);
$('#breakTime').html(breakTime);
$('#startClock, #time, #subTime, #addTime, #subBreakTime, #addBreakTime, #sessionHeading').show();
$('#resetTime').hide();
});

  $('#subTime').on('click', function(){
   if(time>5){
    time -= 5;
$('#time').html(time);
   }
  });
    $('#addTime').on('click', function(){
      time += 5;
$('#time').html(time);
  });

  $('#addBreakTime').on('click', function(){
    breakTime += 5;
    $('#breakTime').html(breakTime);
  })

$('#subBreakTime').on('click', function(){
if(breakTime > 0){
  breakTime -= 5;
  $('#breakTime').html(breakTime);
};
})
});

$(document).ready(function(){
  $('#resetTime').hide();
  var time = parseInt($('#time').html());
  var breakTime = parseInt($('#breakTime').html());

  // Controls

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
  breakTime -= 5;
  $('#breakTime').html(breakTime);
})
});

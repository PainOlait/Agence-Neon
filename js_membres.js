
$(document).ready(function()
{

  var light = 0;

  $('#N').click(function(){
    if (light == 0) {
      lightOn();
      light = 1;
    }
    else {
      lightOff();
      light = 0;
    }

  });

  function lightOn(){
    $('#corp').addClass('active');
    $('body').css('background', 'white');
    $('#corp .member').css('width', 'calc(100%/14)');
    $('.cls-1').css('fill', '#4ec2f0');
  }

  function lightOff(){
    $('#corp').removeClass('active');
    $('body').css('background', '#2B2E31');
    $('.cls-1').css('fill', '#ffffff');
  }

  $('#corp .member').click(function(){

    console.log("world");
  })

});

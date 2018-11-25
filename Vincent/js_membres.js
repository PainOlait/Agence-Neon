
$(document).ready(function()
{

  var light = 0;

  $('#N svg').click(function(){
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
    console.log("bonjour");
    $('#corp').addClass('active');
    $('body').css('background', 'white');
    $('#corp .member').css('width', 'calc(100%/14)');
    $('#N .cls-1').css('fill', '#4ec2f0');
  }

  function lightOff(){
    $('#corp').removeClass('active');
    $('body').css('background', '#2B2E31');
    $('#N .cls-1').css('fill', '#ffffff');
  }

  $('#corp .member').click(function(){

    console.log("world");
  });

  $('#corp .member .noir').hover(function(){
      if (light == 1) {
        $(this).css('transform', 'scale(1.5) rotate(17deg)');
        $(this).parent().css('margin', '0 30px');
        $(this).parent().find('.jaune').css({'transform':'translateX(-25px) scale(1.5) rotate(16.5deg)', 'opacity': '1'});
      }
    }, function(){
      if (light == 1) {
        $(this).css('transform', 'scale(1) rotate(17deg)');
        $(this).parent().css('margin', '0 0');
        $(this).parent().find('.jaune').css({'transform' :'translateX(20px) translateY(10px) scale(1)', 'opacity':'0'});
      }
    });
});

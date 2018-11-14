
$(document).ready(function()
{

  $('#N').click(function(){
    $('#corp').addClass('active');
    console.log("hello");
    $('body').css('background', 'white');
    $('#corp .member').css('width', 'calc(100%/14)');
  });

  $('#corp .member').click(function(){

    console.log("world");
  })

});

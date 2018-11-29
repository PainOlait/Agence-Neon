$(document).ready(function() {
  var light = 0;

  function lightOn() {
    $('#corp').addClass('active');
    $('body').css('background', 'white');
    $('#corp .member').css('width', 'calc(100%/14)');
    $('#N .st0').css('fill', '#4ec2f0');
  }

  function lightOff() {
    $('#corp').removeClass('active');
    $('body').css('background', '#2B2E31');
    $('#N .st0').css('fill', '#ffffff');
  }

  $("#N svg").draggable({
    axis: 'y',
    containment: 'header',
    revert: true,
    revertDuration: 500,
    scroll: false,
    stop: function() {
      if (light == 0) {
        lightOn();
        light = 1;
      } else {
        lightOff();
        light = 0;
      }
    }
  });




  // $('#N svg').click(function(){
  //   if (light == 0) {
  //     lightOn();
  //     light = 1;
  //   }
  //   else {
  //     lightOff();
  //     light = 0;
  //   }
  //
  // });




  $('#corp .member .noir').hover(function() {
    if (light == 1) {
      $(this).css('transform', 'scale(1.5) rotate(17deg)');
      $(this).parent().css('margin', '0 30px');
      $(this).parent().find('.jaune').css({
        'transform': 'translateX(-25px) scale(1.5) rotate(16.5deg)',
        'opacity': '1'
      });
    }
  }, function() {
    if (light == 1) {
      $(this).css('transform', 'scale(1) rotate(17deg)');
      $(this).parent().css('margin', '0 0');
      $(this).parent().find('.jaune').css({
        'transform': 'translateX(20px) translateY(10px) scale(1)',
        'opacity': '0'
      });
    }
  });


  $('#corp .member .noir').click(function() {
    if (light == 1) {
      var theId = $(this).parent().attr('id');
      console.log(theId);
      $('#focus .'+theId).css('display', 'flex');
      $('#photos').html("<img src='photos/grand/"+theId+".jpg'>");
      $('.content_all').addClass('active');
      $('#wrap_a').addClass('remove');
      $('#focus').addClass('active');
      $('#focus .left').addClass('active');
      $('#focus .right').addClass('active');
      setTimeout(function () {
        lightOff();
      }, 300);
      setTimeout(function () {
        progressBar();
      }, 1500);
    }
  });

  // Barres de niveau
  function progressBar (){
    var elem = $(".progress div");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++;
        elem.css('width', width+'%');
      }
    }
  }

});

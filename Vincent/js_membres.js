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

  //drag and drop
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

  //hover sur un membre
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

  //click sur un membre
  $('#corp .member .noir').click(function() {
    if (light == 1) {
      var theId = $(this).parent().attr('id');
      $('#focus .' + theId).css('display', 'flex');
      $('#photos').html("<img src='photos/grand/" + theId + ".jpg'>");
      $('.content_all').addClass('active');
      $('#wrap_a').addClass('remove');
      $('#focus').addClass('active');
      $('#focus .left').addClass('active');
      $('#focus .right').addClass('active');
      setTimeout(function() {
        lightOff();
      }, 300);
      setTimeout(function(){
        progressBar(theId);
      },1500);
    }
  });

  // Barres de niveau
  function progressBar(member) {
    var locate = member;
    var max1 = $('.'+locate+' .skill_1').attr('data-number');
    var max2 = $('.'+locate+' .skill_2').attr('data-number');
    var max3 = $('.'+locate+' .skill_spec').attr('data-number');
    var width = 1;
    var grow1 = setInterval(frame1, 10);
    var grow2 = setInterval(frame2, 12);
    var grow_spec = setInterval(frame3, 15);
    function frame1() {
      if (width >=  max1) {
        clearInterval(grow1);
      } else {
        width++;
        $('.'+locate+' .skill_1').css('width', width + '%');
      }
    }
    function frame2() {
      if (width >=  max2) {
        clearInterval(grow2);
      } else {
        width++;
        $('.'+locate+' .skill_2').css('width', width + '%');
      }
    }
      function frame3() {
        if (width >=  max3) {
          clearInterval(grow_spec);
        } else {
          width++;
          $('.'+locate+' .skill_spec').css('width', width + '%');
        }
      }
  }

});

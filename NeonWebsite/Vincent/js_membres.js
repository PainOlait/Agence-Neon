$(document).ready(function() {

  var light = 0;
  function lightOn() {
    $('#corp').addClass('active');
    $('#globalwrap').css('background', 'white');
    $('#corp .member').css('width', 'calc(100%/14)');
    $('#N .st0').css('fill', '#4ec2f0');
    $('#corp .default').css('opacity', '0');
    $('#corp .membre .noir').css('cursor', 'default');
    $('#tuto').html('Éteignez Neon');
    $('#tuto').css('color', 'black');
    $('#Capa_1 path').css('fill', 'black');
    $('#agence_img').css('opacity', '0.3');

  }

  function lightOff() {
    $('#corp').removeClass('active');
    $('#globalwrap').css('background', '#2B2E31');
    $('#N .st0').css('fill', '#ffffff');
    $('#corp .default').css('opacity', '1');
    $('#corp .membre .noir').css('cursor', 'pointer-events');
    $('#tuto').html('Faites briller Neon');
    $('#tuto').css('color', 'white');
    $('#Capa_1 path').css('fill', 'white');
    $('#agence_img').css('opacity', '0.5');
  }

  //drag and drop
  $("#Calque_1").draggable({
    axis: 'y',
    containment: 'header',
    revert: true,
    revertDuration: 500,
    scroll: false,
    stop: function() {
      if (light == 0) {
        lightOn();
        light = 1;
        //INCREMENT COMPTEUR ALLUMAGE
      } else {
        lightOff();
        light = 0;
      }
    }
  });

  $('#N #Capa_1').click(function(){
    if (light == 0) {
      lightOn();
      light = 1;
      //INCREMENT COMPTEUR ALLUMAGE
    } else {
      lightOff();
      light = 0;
    }
  })

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
      // $(this).parent().find('.jaune').css({'z-index': '300', 'opacity': '1', 'width': '100px', 'position': 'absolute', 'height': '200px'})
      $('#focus .' + theId).css('display', 'flex');
      $('#photos').html("<img src='Vincent/photos/grand/" + theId + ".jpg'>");
      $('.content_all').addClass('active');
      $('#wrap_a').addClass('remove');
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

  //Fermer focus sur un membre
  $('.cross').click(function(){
    setTimeout(function() {
      lightOn();
    }, 400);
    $(this).parent().parent().css('display', 'none');
    setTimeout(function(){
      $('#photos').html(" ");
    }, 1500);
    $('.content_all').removeClass('active');
    $('#wrap_a').removeClass('remove');
    $('#focus .left').removeClass('active');
    $('#focus .right').removeClass('active');
  })

});

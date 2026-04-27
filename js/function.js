$(function(){

  $(window).scroll(function(){

    var windowOffY = $(window).scrollTop();
    var windowHeight = $(window).height();

    $('.sessao').each(function(){

      var elOffY = $(this).offset().top;

      if(elOffY + 30 < (windowOffY + windowHeight) &&
         elOffY + 30 + $(this).height() > windowOffY){

        // Remove destaque de todos
        $('nav a').css('border-bottom', '0');

        // Pega o target da seção
        var target = $(this).attr('target');

        // Aplica destaque no menu correspondente
        $('.' + target).css('border-bottom', '2px solid #333');

        return;
      }

    });

  });

});

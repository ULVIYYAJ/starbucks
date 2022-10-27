$(document).ready(function(){
    $("#navi").click(function(){
      $("#navi .fa-caret-down").toggleClass("rotate180");
      $("#navigation").stop().slideToggle(500);
    });
    $("#navi2").click(function(){
        $("#navi .fa-caret-down").toggleClass("rotate180");
        $("#navigation2").stop().slideToggle(500);
      });
      $("#navi3").click(function(){
        $("#navi .fa-caret-down").toggleClass("rotate180");
        $("#navigation3").stop().slideToggle(500);
      });
      $("#navi4").click(function(){
        $("#navi .fa-caret-down").toggleClass("rotate180");
        $("#navigation4").stop().slideToggle(500);
      });
      $("#navi5").click(function(){
        $("#navi .fa-caret-down").toggleClass("rotate180");
        $("#navigation5").stop().slideToggle(500);
      });
      $(".mainmenu").click(function(){
        $(".menu").css('left', '0px');
        $(".downnext").css('margin-top', '100px');
        // $(".menu").css('transition', 'all 3s ease;');
        // $("#navigation3").stop().slideToggle(500);
      });
      // $(".mainmenu").load(function(){
      //   $(".downnext").close();
      // })
      $('.downnext').css('display', 'none');
      $('.downnext-toggle').click(function(){
        $('.downnext').css('display', 'none'); //New code
        $(this).next('.downnext').toggle();
      });
      
  });
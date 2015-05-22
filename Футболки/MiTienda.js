$(document).ready(function(){
    var total=0;
    var suma=0;
    $('#corz').hide();
    $('.op').hide();
    $('.col-md-4 img').click(function(){
        $("input[type=button]").remove();
       var camiseta =$(this);
       camiseta.after('<input type="button" value="compro" class="my_button" />');
        $("input[type=button]").on('click', function () {
          $('#corz').slideDown(1000);
              suma++;
           $('#suma').text(suma);
            total+=Number(camiseta.attr('data-cuesta'));
            $('#total').text(total);
          var newcomiseta = camiseta.clone();
           $('#result').append(newcomiseta);
        });

    });
    $('#clara').click( function(){
    $('#result img').remove();
        suma=0;
        total=0;
        $('#total').text(total);
        $('#suma').text(suma);
    });
    $('#up').click(function(){
        $('#corz').slideUp(1000);
    });
    $('.col-md-4 img').hover(function(){
        var info="\t  "+$(this).attr('alt')+"\n Precio: "+$(this).attr('data-cuesta')+"€" ;
         $(this).after("<div class='op'></div>");
        $('.op').text(info).fadeIn(1000);
       $(this).attr('title',info);
        $(this).css('border','5px solid rgba(0, 8, 55, 0.5)')
    },function(){
         $('.op').fadeOut(100).remove();
        $(this).css('border','5px solid rgba(0, 8, 55, 0.08)')

    });


    });

// Acaba ready
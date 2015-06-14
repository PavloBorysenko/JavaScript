$(document).ready(function(){
    var sotr1=["Алексей З/п 800$","Александр З/п 1000$","Дмитрий З/п 900$","Света З/п 1300$","Леонид З/п 700$"] ;
    var sotr2=["Евгений З/п 850$","Юлия З/п 1000$","Наталья З/п 780$","Николай З/п 1500$","Захар З/п 900$"];
    $('#clear').droppable({
        drop: function(event,ui){
          var rem= $(ui.draggable);
            rem.slideUp(300,function(){
                $(this).remove();
            });
        }
    });
    $('#list1').droppable({
        drop : function(event,ui){
          var cop=$(ui.draggable);
            cop.slideUp(300,function(){
                $(this).appendTo('#list1').slideDown(500);
            });
    }
    });
    $('#list2').droppable({
        drop : function(event,ui){
            var cop=$(ui.draggable);
            cop.slideUp(300,function(){
                $(this).appendTo('#list2').slideDown(500);
            });
        }
    });
    $('#zagr2').click(function(){
       for(var i=0;i<5;i++){
           $('#list2').append('<div class="sotr">'+sotr1[i]+'</div>');

           $('.sotr').hover(function(){
               $(this).css('border','3px solid rgba(132, 161, 255, 0.38)');
           },function(){
               $(this).css('border','3px solid rgba(41, 127, 128, 0.43)');});
       } $('.sotr').draggable({
            containment:'#con',
            revert: 'invalid',
            helper: 'clone',
            cursor:'move'
        });
    });
    $('#zagr1').click(function(){
        for(var i=0;i<5;i++){
            $('#list1').append('<div class="sotr">'+sotr2[i]+'</div>');
            $('.sotr').hover(function(){
                $(this).css('border','3px solid rgba(132, 161, 255, 0.38)');
            },function(){
                $(this).css('border','3px solid rgba(41, 127, 128, 0.43)');});
        }     $('.sotr').draggable({
            containment:'#con',
            revert: 'invalid',
            helper: 'clone',
            cursor:'move'
        });


    });
    $('#list1').hide();
    $('#rask1').click(function(){
        $('#list1').toggle('explode');
    });
    $('#list2').hide();
    $('#rask2').click(function(){
        $('#list2').toggle('explode');
    });




});

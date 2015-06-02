$(document).ready(function(){
    var NumImg=1;
    var temp=4;
    var mas=["Меркурий","Венера","Земля","Марс","Юпитер","Сатурн","Уран","Нептун","Плутон"];
      for(var i=1;i<5;i++){
          $('#'+i).html("<img class='photo' title="+mas[i-1]+" src='"+i+".jpg'>");
      }
    //*******************слайдер *********************************
    $('#next').click(function(){
        NumImg--;
        if(NumImg<1){
            NumImg=9;
        }
        for(var ind=1;ind<5;ind++){
            var r=NumImg+ind-1;
        if(r>9){
            r=NumImg+ind-10;}
         $('#'+ind).html("<img class='photo' title="+mas[r-1]+" src='"+r+".jpg'>");
        }
    });
    $('#prev').click(function(){
        NumImg++;
        if(NumImg>9){
            NumImg=1
        }
        for(var ind=1;ind<5;ind++) {
           var r=NumImg+ind-1;
            if(r>9){
                 r=NumImg+ind-10;
            }
            $('#'+ind).html("<img class='photo' title="+mas[r-1]+" src='"+r+".jpg'>");
        }
    });
     //*******************конец слайдера*******************************
        $('.test').dblclick(function(){
          var plan= $(this).find('img').attr('src');
          var inf=  $(this).find('img').attr('title');
           $('.imgCont').append("<div data-title='"+inf+"'  class='planet'><img src='"+plan+"'></div>");
           $('.imgCont  .planet ').click(function() {
               $("input[type=button]").remove();
           var AddBut =$(this).append('<input type="button" value="Отметить" class="my_button" />');
             //  $("input[type=button]").hide().slideDown(1000);
               $("input[type=button]").on('click', function () {
                   AddBut.append('<i class="glyphicon glyphicon-eye-open"></i>');
                     $('.planet i').fadeIn(600);
               });
               AddBut.append('<input type="button" value="Удалить" class="my_button2" />')
              // $(".my_button2").hide().slideDown(1000);
               $(".my_button2").on('click', function () {
                     AddBut.remove();
               });
         }) ;
    });
    $('#imgSlid > div').hover(function(){
        $(this).css('border','3px solid rgba(132, 161, 255, 0.38)');
    },function(){
        $(this).css('border','3px solid #000000');
    });
});
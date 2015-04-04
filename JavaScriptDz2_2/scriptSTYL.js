/**
 * Created by Джони on 03.04.15.
 */


var COLOR=["red","green","yellow","black","blue","violet","navy","olive","brown","tomato","aquamarine"]
var button = document.getElementsByClassName("b");

console.log(document.body.clientWidth);
var left=0;
var down=0;
var c=10;
var sec=0
var skrin=430 ;
 setInterval(  function(){
        if(sec>=2000){
            button[0].style.background=COLOR[Math.round(Math.random()*10)];
            sec=0;
        }
       if(left>=document.body.clientWidth-40&&down<=skrin){
             button[0].style.marginTop = down+'px';
            down+=2;
         }
    else if(down>=skrin&&left>=0)
     {
            button[0].style.marginLeft = left+'px';
            left-=2 ;
       }
     else if (left<=0&&down>=0){
            button[0].style.marginTop = down+'px';
            down-=2;
       }
    else if (down<=0&&left<=document.body.clientWidth-40)
        {
           button[0].style.marginLeft = left+'px';
          left+=2 ;
      }
       sec+=c;
 },c);

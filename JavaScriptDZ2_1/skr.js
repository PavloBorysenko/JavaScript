/**
 * Created by Джони on 02.04.15.
 */
var COLOR=["red","green","yellow","black","blue","violet","navy","olive","brown","tomato","aquamarine"]
var chenMen=document.body.children[0].children;   //просто 3 способа найти элементы
var ch=document.getElementsByTagName('li');
var elements = document.querySelectorAll('ul > li');
console.log(chenMen);
console.log(ch);
console.log(elements) ;


var i= 0;

setInterval(function(){
    if(i==10){
        i=0;
    }
    elements[i].style.background=COLOR[i] ;
    for(var j=0;j<elements.length;j++){
        if(i==j){
            continue;
        }

        else
            elements[j].style.background=COLOR[10]


    }
    i++;

},500);
/**
 * Created by Джони on 04.04.15.
 */
    var mas=[{r:3,c:2},{r:1,c:1},{r:5,c:7},{r:2,c:9},{r:7,c:1}]
var table = document.body.children[0];
var Time=prompt('Введите врямя интерации в млс',1000)

console.log(table.rows[1].cells[1].innerHTML );
setInterval(function(){
        for(var i=0;i<mas.length;i++)  {
var ZN= table.rows[mas[i].r].cells[mas[i].c].innerHTML;
var newZN=Math.round(Math.random()*50);
if(newZN>ZN){
    table.rows[mas[i].r].cells[mas[i].c].style.background='green';
}
else if(newZN<ZN){
    table.rows[mas[i].r].cells[mas[i].c].style.background='red';
}
else if(newZN==ZN){
    table.rows[mas[i].r].cells[mas[i].c].style.background='grey';
}
 table.rows[mas[i].r].cells[mas[i].c].innerHTML=newZN
        }
    }
,Time);
/**
 * Created by Джони on 15.04.15.
 */
 var text1=document.getElementById('list1') ;
 var text2=document.getElementById('list2') ;
var buttDob=document.getElementById('dob') ;
var buttPok=document.getElementById('pok') ;
var smel=document.getElementById('smel') ;
var umn1=document.getElementById('umn') ;
var siln=document.getElementById('siln') ;
var dobr=document.getElementById('dobr') ;
var buttIsk=document.getElementById('isk') ;
var text3=document.getElementById('list3');
var textIm=document.getElementById("textIm");
var out=document.getElementById("rezul");
text1.value="";    // Это я сделал по тому что в firefox после
text2.value="";  //обновления содержание форм не обновлялась
text3.value="";  // глюк ли это я не знаю, но костыль работает
var spis=["кот","лот","рак","кот","пак","зак","red","flex","123","кот","рак"];
for(var j=0;j<spis.length;j++){
   text3.value+=spis[j]+'\n';
};
var n1= 1,n2=201;
 var str='';
    for(var i=0;i<5;i++){
         text1.value+=n1+'\n';
         text2.value+=n2+'\n';
        n1++;  n2++;
    }

text1.onfocus=function(){
      buttDob.onclick=function(){
          text1.value+=n1+'\n';
          n1++;
        text1.focus();
      };

}
text2.onfocus=function(){
    buttDob.onclick=function(){
        text2.value+=n2+'\n';
        n2++;
        text2.focus();
    };

};



 buttPok.onclick=function(){
     if(umn1.checked==true){
         str+="умный ";
     }
      if(smel.checked==true){
         str+="смелый ";
     }
      if(dobr.checked==true){
         str+="добрый ";
     }
      if(siln.checked==true){
         str+="сильный ";
     }
     if(str==""){
         str="Ничего не выбрано!";
     }
     alert(str);
      str="";
 };
buttIsk.onclick=function(){

      //************* 3 задание получилось коротенькое*****************
 var rez=text3.value.match(new RegExp("^"+textIm.value+"$","gim"));


     out.innerHTML=((rez==""||rez==null)?'0':rez.length);

}
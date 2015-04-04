/*alert("Hello");*/
//console.log("Hello");

/*var  message;
message = "Hello";
console.log(message);
message = 12;
console.log(message);*/

/*
var CONSTVAR =  128;*/
/*
var i = 12;
var b = 12.5;*/
//console.log(12 / 0);
//console.log("fg" *  23);
/*
var str = 'sdfs';
console.log(str);
 var check = true;
console.log(check);

var age = null;
console.log(age);*/

/*
var t;
console.log(t);*/

/*var i = 2;

i = i * 2 + 5;
console.log(i);*/


/*var a = "hello" + " world";
console.log(a);*/

//console.log("1" +  2);

//console.log('10' - 2);
//console.log(+(1-2));

/*
var a = '2';
var b = '5';

console.log(a + b);
console.log(+a + b);
console.log(+a + +b);

a = b = 0;
console.log(a, b);

a = (5, 6);
console.log(a);*/
//==========================================
/*var a = 15 + 2;
alert(a);*/

/*
var year = prompt("Age?");
alert(year);
*/

/*var is = confirm("?");
alert(is);*/
//===========================================

/*
var access;
var age = prompt("Your age?", '');

if(age > 16)
    access = true;
else
    access = false;

access = age > 16 ? true : false;

alert(access);*/

/*var a = 5, b = 45, c = 4;

if(a > b || c < b)
 alert("");*/

/*for(var i = 0; i < 3; i++)
    console.log(i);*/


/*
var t = +'1';
switch (t) {
    case 1:
        break;
    case 2:
        break;
    case 3:case 4:
        break;
}*/

/*var temp = 15;
for(var i = 0; i < 5; i++)
    show(i, i+1);

function show(i , value) {
    console.log("i: "+ i+ "value: "+ value);
}*/

/*function show(i , value) {
    if(value == undefined) value = 5;
    console.log("i: "+ i+ "  value: "+ value);
    return i + value;
}

var rez = show(5);
console.log(rez);*/
/*var str = "Hello world try me llo elo";
var search = 'lo';*/
//console.log("Hello world".length);
//console.log("Hello world".toUpperCase());
//console.log("Hello world".charAt(4));
//console.log(str[13]);

//console.log("Hello world".charAt(3).toUpperCase());

/*var pos = 0;
while(true)
{
    var found = str.indexOf(search, pos);
    if(found == -1) break;

    console.log(found);
    pos = found + 1;
}*/

/*console.log(str.substring(2, 5));
console.log(str.substr(2, 5));
console.log(str.slice(2, 5));*/

/*var i = 12.45678;
console.log(i.toFixed(1));*/

/*console.log(parseInt("12px"));
console.log(parseFloat("12.556"));*/

//var t = 3.6;
//console.log( t.toString(16));

/*console.log(Math.floor(t));
console.log(Math.ceil(t));
console.log(Math.round(t));*/

//obj = new Object();
/*var person = {
    name: "Vasya",
    age: 12,
    'my string': "sdfdsf sdfs",
    obj: {
        x: 1,
        y: 1
    }
};*/
/*
person.name = "Vasya";
person.age = 12;*/

/*console.log("Name "+ person.name + "||Age "+ person.age);

//delete person.name;
if("name" in person)
    alert("yes");
console.log("Name "+ person.name + "||Age "+ person.age);

console.log(person['my string']);*/

//console.log(person.obj.x);

/*for(var key in person) {
    console.log("key:" + key + " value:" + person[key]);
}*/


/*var sec = person;

sec.name = "DDD";

console.log("Name "+ person.name + "||Age "+ person.age);*/
/*

var user = {
    name: "fsdfs",
    sayHi: function () {
        alert("Hello" + this.name);
    },
    Name: function () {
        return this.name;
    }
};

//user.sayHi();
var V = new user();
alert(V.Name);
//alert(user.Name());


function User(){
    var t = "fsd";
    this.Up  = function () {
        
    };
    this.say = function () {
        
    }
}

var P = new User();
P.t;*/

var car = ["Mazda", 'Honad', "Lada", "BWM", "Opel"];
//console.log(car[2]);

//car[404] = "Ford";

//car.length = 3;

//car.color = 123;

//console.log(car.color);
//console.log(car.length);

//var obj = [ 1, "Car", {name: "Prrr"}, false];

//var arr = new Array(1,2,6);
//alert(arr);
//console.log(arr);
//console.log(arr.length);

/*var cube = [
    [ 1, 2, 3],
    [ 4, 5, 6],
    [ 7, 8, 9]
];*/

//console.log(obj[2].name);

//var del = car.pop();
//console.log(del);
//console.log(car[4]);
//car.push("Zaz");

/*var person ={
    name: "sdfsdf",
    age: 12

};*/

var keys = [];

/*for(var key in person)
    keys.push(key);*/

var str = "AAA,BBB,CCC,DDD";
keys = str.split(",");

//var newStr = keys.join("|");
//delete keys[2];

//var delArr = keys.splice(0, 2, "TTTT", "RRR", "LLLL");

//keys.splice(-1, 0, "TTT", "LLL");

var delArr = car.slice(1,3);

function sort(a, b) {
/*    if(a > b) return 1;
    if(a < b) return -1;*/
    return a - b;
}

var arr = [1, 22, 12, 2, 45, 4];
arr.sort(sort);

arr.reverse();

var nArray = arr.concat([4,5,6,7],"sdfs", "d");

//console.log(arr);
//console.log(nArray);
//console.log(nArray.indexOf(4));
/*
console.log(keys);
console.log(delArr);*/
var age = 20;
var sayHello;

if( age >= 18){
    //function sayHello() {console.log("Yes");}
    sayHello = function(){console.log("Yes");}
}
else {
    //function sayHello() {console.log("No");}
    sayHello = function(){console.log("No");}
}

//sayHello();

/*
var f = function(){
    alert("");
};

f();*/
//console.log(s);

/*
(function () {
    var age = 12;
}
)();*/


/*
 function say(person) {
 var msg = makeMsg(person);
 alert(msg);

 function getHello(age) {
 return age >=18 ? "Hello" : "Hi";
 }

 function makeMsg(person){
 return getHello(person.age) + ", "+ person.name;
 }
 }

 say({
 name: "RRR",
 age: 34
 });*/

/*function Counter() {
    var curCount = 0;

    return {
        getNext: function(){
            return ++curCount;
        },
        set: function(value) {
            curCount = value;
        }
    }
}

Counter.set(12);
Counter.getNext();*/


/*var User ={
    name: "Valerchik",
    sayHi: function () {
        alert("Hello" + this.name);
    },
    Name: function () {
        return this.name;
    }
};

var u1 = new User();
u1.Name();*/
//User.sayHi();
//alert(User.Name());

/*
function f(){
    console.log("Hello");
}

setTimeout(f, 3000);*/

/*var setId = setTimeout(function () {
    ...
}, 1000);
 clearTimeout(setId);*/


/*var i =0;

var intId = setInterval(function () {
    console.log(i++);
    if(i > 10)
    clearInterval(intId);
}, 1000);*/


/*console.log(screen.width);
document.body.style.background = "blue";*/

/*var child = document.body.childNodes;

for(var i = 0; i<child.length; i++){
    console.log(child[i]);
}

child[1].style.background = "blue";*/

/*var child = document.body.children;

for(var i = 0; i<child.length; i++){
    console.log(child[i]);
}*/

//var table = document.body.children[2];
//
//console.log(table.rows[1].cells[1].innerHTML);

//console.log(document.body.children[2].tagName);
/*

var table = document.body.children[2];

console.log(table.rows[1].cells[1].innerHTML = "FRTF");*/


/*document.body.innerHTML += '<h1 style="color:red; font-size:45px;">Hello</h1>';*/

/*
var li = '<li style="color:#3167ff;">LI1 from script</li>';

var node = document.body.children[1];
node.innerHTML= li;

var text = document.getElementById("inId");
text.id =  "newId";*/


/*var text = document.getElementById("inId");
text.setAttribute("id", "ktrue");*/

/*
var button = document.getElementsByTagName("button");
button[0].style.color = "Blue";*/

/*var button = document.getElementsByName("p");
button[0].style.color = "Blue";*/

var button = document.getElementsByClassName("b");
button[1].style.color = "Blue";
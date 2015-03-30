/**
 * Created by Джони on 27.03.15.
 */
  var point={
    x:0,
    y:0
};

var figur={

    constructor: function(xA,yA,xB,yB,xC,yC,xD,yD){
        this.A=Object.create(point);
        this.B=Object.create(point);
        this.C=Object.create(point);
        this.D=Object.create(point);
        this.A.x=xA;
        this.A.y=yA;
        this.B.x=xB;
        this.B.y=yB;
        this.C.x=xC;
        this.C.y=yC;
        this.D.x=xD;
        this.D.y=yD;
        this.mas=[this.A,this.B,this.C,this.D];
    },
    show: function(){
        var i=0;
        for(i=0;i<4;i++){
        console.log("Точка "+ (i+1)+" X:"+this.mas[i].x+
        " Y:"+this.mas[i].y);
        }
    },
    chench: function(pos,X,Y){

        if(pos<1||pos>4) {
            console.log("Invalid pos");
            return 0 ;
        }

        else{
            this.mas[pos-1].x=X;
            this.mas[pos-1].y=Y;
        };
    }
};
var figurABCD  ;
figurABCD=Object.create(figur);
figurABCD.constructor(1,2,3,4,-3,7,9,0);
figurABCD.show();
figurABCD.chench(2,8,8);
console.log("");
figurABCD.show();


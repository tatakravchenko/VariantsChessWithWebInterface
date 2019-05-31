function Variants(id){
        var strLetters="ABCDEFGH";
        var let=id[0];
        var num=Number(id[1]);
        indStr = strLetters.indexOf(let)+1;

        var arrX=[];
        var arrY=[];
//--расчет точек, куда пойдет конь (общий случай)
        arrX[0]=num+2;
        arrY[0]=indStr+1;

        arrX[1]=num+1;
        arrY[1]=indStr+2;

        arrX[2]=num-1;
        arrY[2]=indStr+2;

        arrX[3]=num-2;
        arrY[3]=indStr+1;

        arrX[4]=num-2;
        arrY[4]=indStr-1;

        arrX[5]=num-1;
        arrY[5]=indStr-2;

        arrX[6]=num+1;
        arrY[6]=indStr-2;

        arrX[7]=num+2;
        arrY[7]=indStr-1;

        //--окраска исходного поля в синий
         document.getElementById(id).style.background="blue";

        //--проверка, какие точки существуют на доске
 
        //запоминаем id нужных полей, и закрашиваем их
        var S="";
        

        for(i=0;i<8;i++)
        {
           
            if(arrX[i]>=1 && arrX[i]<=8 && arrY[i]>=1 && arrY[i]<=8)
            {
                   S=strLetters[arrY[i]-1]+arrX[i];
                   document.getElementById(S).style.background="green";
            }
        }
    }

    $(document).ready(function () {
      //--функция, запоминающая id блока, на который мы нажали  
       var divs = document.getElementsByClassName("col");


        
        for (var i = 0; i < divs.length; i++) 
          divs[i].addEventListener("click", myFunction);
         

        function myFunction() {
        idDiv = this.id;

        //первоначальная закраска доски
        var SA="ABCDEFGH";
        for(i=1;i<=8;i++)
            for(j=1;j<=8;j++)
            {
                S=SA[i-1]+Number(j);
                if((i+j)%2==0)
                    document.getElementById(S).style.background="black";
                else
                    document.getElementById(S).style.background="white"
            }

        //вызов функции отрисовки полей для коня
        Variants(idDiv);
        }
    });

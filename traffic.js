let btn1=document.querySelector("#lightbtn1");
let btn2=document.querySelector("#lightbtn2");
let btn3=document.querySelector("#lightbtn3");
let time=document.querySelector("#timer");
let no=20;
let Second=no;
let count=2;
let msg1=document.querySelector("#msg1");
let msg2=document.querySelector("#msg2");
let msg3=document.querySelector("#msg3");




    let stop=setInterval(()=>{
        
        if(Second===0){
            Second=no;
            time.textContent=`00:${Second}`;
            count--;
            if(count===0){
                count=2;
            }
            
        }
        if(count===2){
            btn1.style.backgroundColor="rgba(245,0,0,1)";
            btn2.style.backgroundColor="rgba(255,255,0,0.1)";
            btn3.style.backgroundColor="rgba(0,245,0,0.1)";
            msg1.textContent="STOP";
            msg3.textContent="";
            if(Second<16){
        
                btn1.style.backgroundColor="rgba(245,0,0,0.1)";
                btn2.style.backgroundColor="rgba(255,255,0,1)";
                btn3.style.backgroundColor="rgba(0,245,0,0.1)";
                msg2.textContent="READY";
                msg1.textContent="";
        }
                    }
                    
                    else if(count===1){
                        btn1.style.backgroundColor="rgba(245,0,0,0.1)";
                        btn2.style.backgroundColor="rgba(255,255,0,0.1)";
                        btn3.style.backgroundColor="rgba(0,245,0,1)";
                            msg3.textContent="GO" 
                            msg1.textContent="";
                            msg2.textContent="";  
                    }
                    
                      
         if(Second>9){
            time.textContent=`00:${Second}`;
        }
        else{
            time.textContent=`00:0${Second}` 
        }
        Second--;
    },1000);



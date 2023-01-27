 
//var rp=("vamp"+rn);


document.getElementById("startbutton").addEventListener("click",changeurl);

var count=0;
function changeurl()
{
    
    var rn=Math.floor(Math.random() * 6 +1);  
    document.getElementById("hole"+rn).style.backgroundImage="url('vamp1.png')";
    document.getElementById("hole"+rn).addEventListener("click",playscream);
    document.getElementById("hole"+rn).onclick=function(){
        this.style.backgroundImage="url('186745.png')";
        
        changeurl();
    }
    count++;
    document.querySelector("#score").innerHTML=count-1;
    
    function settime() {
        setTimeout(setAlert, 10000);
        setTimeout(disablemouse, 10000);
    }
    function setAlert() {
        
        document.querySelector("#time").innerHTML="oops!"+('<br>')+"time's up!!";
        document.querySelector("body").className="overlay" ;
      
    }
    function playscream(url){
        new Audio('male-scream-in-fear-123079.mp3').play();
    }

   
    settime();

}
document.getElementById("startbutton").addEventListener("click",changeurl);



 

 
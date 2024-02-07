var Timer=60;
var score=0;
var hitrn=0;
function bubblegenrate(){
var clutter="";
for(var i=1;i<=168;i++){
var rn =Math.floor(Math.random()*10);
clutter+=`<div class="bubble">${rn}</div>`;//always new bubble add in pbtn with new random number
}
document.querySelector("#pbtm").innerHTML=clutter;
}
//for timer

function runTimer(){
    var timerint=setInterval(function(){
        if(Timer>0){
        Timer--;
        document.querySelector("#timer").textContent=Timer;
        }
        else{
          clearInterval(timerint);
          document.querySelector("#pbtm").textContent=`Game Over`;
        }
    },1000)

}
function getNewhit(){
   hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitInt").textContent=hitrn;
}
function scorecount(){
 score+=10;
 document.querySelector("#scorenum").textContent=score;
}

  document.querySelector("#pbtm").addEventListener("click",function(detail){
    var checked = Number(detail.target.textContent);
    if(checked == hitrn){
      scorecount();
      bubblegenrate();
      getNewhit();
    }
  })


bubblegenrate();
runTimer();
getNewhit();


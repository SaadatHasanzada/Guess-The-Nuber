let result=document.getElementById("result");
let input=document.getElementById("input");
let par=document.querySelector(".par");
let check=document.querySelector(".check");
let reply=document.querySelector(".reply");
let live=document.querySelector(".live");
let round=document.querySelector(".round");

par.innerHTML="Start guessing..."
function random(min,max){
   let random=Math.floor(Math.random()*(max-min))+min;
   return random;
}

check.addEventListener("click",checkGuess);
reply.addEventListener("click",replyGame);

let guess=random(1,20);
let count=5;
let lives=5;
let r=0;
function checkGuess(){
   console.log(guess);
 if(input.value==guess){
result.textContent=guess;
par.innerHTML=`<img src="https://i.pinimg.com/originals/74/b8/84/74b8843b325fb448f0942336c4e71d1d.png" alt="congrats"> Correct Number!`;
document.body.style.backgroundColor = "rgb(79, 191, 79)";
check.style.backgroundColor="rgb(8, 34, 64)";
reply.style.backgroundColor="rgb(8, 34, 64)";
r++;
round.textContent=r;
}
   
   else if(input.value<guess){ 
     
      par.innerHTML=`<i class="fa-solid fa-arrow-down"></i>  Too Low`;
      lives--;
      live.textContent=lives;
       count--;
   }
   else if(input.value>guess){
      
      par.innerHTML=`<i class="fa-solid fa-arrow-up"></i>  Too High`;
      lives--;
      live.textContent=lives;
      count--;
   }
  
   if(count==0){
      par.innerHTML=`<i class="fa-solid fa-skull"></i> <b>Game Over!</b> `;
      check.style.backgroundColor="rgb(8, 34, 64)";
      reply.style.backgroundColor="rgb(8, 34, 64)";
      check.disabled=true;
      document.body.style.backgroundColor = "rgb(223, 67, 67)";
      live.textContent=lives;  
   }  
  }

function replyGame(){
   par.innerHTML="Start guessing...";
   input.value="";
   result.innerText="?";
   check.disabled=false;
  guess=random(1,20);
  count=5;
  document.body.style.backgroundColor = "rgb(8, 34, 64)";
  lives=5;
  live.textContent="5";
}
   

   





 


let userscores=0;
let compscores=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userscore=document.querySelector(".userscore")
const compscore=document.querySelector(".compscore")
computerchoice =()=>{
    let a=["rock","scissor","paper"];
    const randch= Math.floor(Math.random()*3);
    return a[randch];


}
draw=()=>{
    
      msg.innerText="Game Draw play again !"
      msg.style.backgroundColor="black"
}
 show_winner=(winner)=>{
  
     if(winner){
        userscores++;
        userscore.innerText=userscores;

        console.log("won")
        msg.innerText="You Win !";
        msg.style.backgroundColor="green";
     }
     else{
        compscores++;
        compscore.innerText=compscores;
console.log("Lose")
msg.innerText="You Lose !";
 msg.style.backgroundColor="red";
     }

 }

 playgame = (userchoice) =>{
     console.log("user choice",userchoice)
     
let win=true;
     const cc=computerchoice();
     console.log ("computer's choice",(cc));
     if(userchoice===cc){
        console.log("draw");
        
      draw();

     }
     else{
        
        if(userchoice==="rock"){
              win=  cc==="scissor"? true:false;
       
     }
     else if(userchoice==="scissor"){
        win=  cc==="paper"?true:false;
     }
        else if (userchoice==="paper"){
            win=  cc==="rock"?true:false;

        }
         show_winner(win);
}
   
 }


choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        console.log("choice was clicked");
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})
let userscore=0;
let compscore=0;

const userScorePara=document.getElementById("user_score");
const compScorePara=document.getElementById("computer_score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const gencompchoice= () =>{
    const option=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return option[randomidx];
}
const drawgame= () =>{
    console.log("Game was Draw");
    msg.innerText="Game Draw";
    msg.style.backgroundColor="black";
}
const showWinner= (userwin,compChoice,userChoice) =>{
    if(userwin)
    {
        userscore++;
        userScorePara.innerText=userscore;
        console.log("you win");
        
        msg.innerText=`you won your ${userChoice} bets ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compscore++;
        compScorePara.innerText=compscore;
        console.log("you loss");
        msg.innerText=`you lose ${compChoice} bets yours ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}

const playgame= (userChoice) =>{
    console.log("user choice=",userChoice);
    const compChoice=gencompchoice();
    console.log("computer choice=",compChoice);
    if(userChoice===compChoice)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock")
        {
            userwin=compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper")
        {
            userwin=compChoice==="rock" ? true : false;
        }
        else
        {
            userwin=compChoice==="rock" ? false : true; 
        }
        showWinner(userwin,compChoice,userChoice);
    }
};

choices.forEach((choice) =>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        
        playgame(userChoice);

    });
});
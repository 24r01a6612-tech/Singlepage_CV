let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");


const msg=document.querySelector("#msg");


const userScorePara=document.querySelector("#user_score");


const compScorePara=document.querySelector("#comp_score");


const genCompChoice=()=>
{
    const options=["rock","paper","scissors"];
    const randIndx= Math.floor(Math.random()*3);
    return options[randIndx];
}


const drawGame=(userChoice,compChoice)=>
{
    
    msg.innerText=`game was draw both chose ${userChoice}`;
    msg.style.backgroundColor="orange";
}


const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win!! Your ${userChoice} beates ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lost . ${compChoice} beates ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


const playGame=(userChoice)=>
{
    console.log("user choice :",userChoice)

    const compChoice=genCompChoice();
    console.log("comp choice :",compChoice)

    if(userChoice===compChoice)
    {
        drawGame(userChoice,compChoice);
    }

    else{
        let userWin=true;
        if(userChoice==="rock")     //sciss,paper
        {
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")  //rock,scissor
        {
            userWin=compChoice==="scissors"?false:true;
        }
        else{//rock,paper
            userWin=compChoice==="rock"?false:true
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
//genertae comp choice-->modular

choices.forEach((choice) => {
    console.log(choice);

    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        console.log("choice is clicked",userChoice);
        playGame(userChoice)
    });
});
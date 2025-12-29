let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const user_ScorePara= document.querySelector("#user-score");
const comp_ScorePara= document.querySelector("#Comp-score");

const genCompChoice = () => {
    const options = ["rock", "palm", "v-hand"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    /// rock,paper,scissors
}
const drawGame=() =>{
//   console.log("game was draw.");
   msg.innerText="Game was Draw , play again !" ;
    msg.style.backgroundColor="black";
}

const showWinner=(userWin , userchoice,compChoice) =>{
    if (userWin) {
        userScore++;
        user_ScorePara.innerText=userScore
        // console.log("you win !");
        msg.innerText=`you win !  your ${userchoice} beats ${compChoice}` ;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        comp_ScorePara.innerText=compScore;
        // console.log("you lose !");
         msg.innerText=`you lose ! ${compChoice} beats  your ${userchoice}`  ;
           msg.style.backgroundColor="red";
    }
}

const playGme = (userchoice) => {
    // console.log("user choice=", userchoice);

    
    // Generate computer choice ---> modular

    const compChoice=genCompChoice();
    //  console.log("comp choice=", compChoice);

     if(userchoice===compChoice){
        ///Draw game
        drawGame();
     } else{
        let userWin= true;
        if(userchoice==="rock"){
            /// s,p
            userWin= compChoice==="palm" ? false : true;
        } else if(userchoice==="palm") {
            /// s,r
           userWin=  compChoice==="v-hand" ? false: true;

        } else{
            // r,p
            userWin= compChoice === "rock" ? false: true;
        }
        showWinner(userWin ,userchoice,compChoice);
     }
};
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked", userchoice);
        playGme(userchoice);
    });
});
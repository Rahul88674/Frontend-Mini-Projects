let userScore = 0;
let compScore = 0;

//
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//random choice by computer 
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//if the game was draw 
const drawGame = () => {
    msg.innerText = "Game was draw, Try again!"
    msg.style.backgroundColor = "gray"
}

//To display the score and message 
const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!" + userScore + "beats" + compScore;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "Yoy lose!" + compScore + "beats" + userScore;
        msg.style.backgroundColor = "red";
    }
};

//compare the user and computer choice 
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);


    if (userChoice === compChoice) {
        drawGame();
    }
    else {
            let userWin = true;
            if(userChoice === "rock") {                         //if user choose rock
                userWin = compChoice === "scissors" ? true : false; 
            }
            else if(userChoice === "paper") {                   //if user choose paper
                userWin = compChoice === "rock" ? true : false;
            }
            else {                                              //if user choose scissors
                userWin = compChoice === "paper" ? true : false;
            }
            showWinner(userWin)
        }
}    

//user choice
choices.forEach((choice) => {   
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

//Mode toggle button 
let btn1 = document.querySelector("#mode-toggle");

let current_mode = "light";

btn1.addEventListener("click", () => {
    if (current_mode === "light") {
        current_mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector(".score-board").style.color = "white";  // Fixed
        
    } else {
        current_mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector(".score-board").style.color = "black";  // Ensure visibility
    }
    console.log(current_mode);
});

/*let btn1 = document.querySelector("#mode-toggle");

let current_mode = "light";


btn1.addEventListener("click", () => {
    if(current_mode === "light") {
        current_mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("#user-score").style.Color = "white";
        document.querySelector("#comp-score").style.Color = "white";
    }
    else {
        current_mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(current_mode);
})*/



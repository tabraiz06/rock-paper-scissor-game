let noInput = document.getElementById('noInput')

let play = document.getElementById('play')
let reset = document.getElementById('reset')
let roundsLeft = document.getElementById('roundsLeft')

let roundResult = document.getElementById('round-result')
let computerPoint = document.getElementById('computerPoint')
let userPoint = document.getElementById('userPoint')
let ComputerChoice = document.getElementById('ComputerChoice')
let gameResult = document.getElementById('gameResult')


let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissor');


roundsLeft.innerText = noInput.value;

let letplay = false
play.addEventListener('click', function () {
    letplay = true
    roundsLeft.innerText = noInput.value;
})

reset.addEventListener('click', function () {
    location.reload()
})

let computerScore = 0;
let userScore = 0;

console.log(letplay)


function pressed() {
    let userChoice = event.target.innerText
    let turnsLeft = noInput.value;

    if (!letplay && noInput.value==='' ) {
        alert('Please inter valid input then press on play button')
    }
    else {


        let choice = ['Rock', 'Paper', 'Scissor']

        let computerChoice = document.getElementById('ComputerChoice').innerText = choice[Math.floor(Math.random() * 3)];
        if (userChoice === computerChoice) {
            roundResult.innerText = "Round result: TIE";
            userPoint.innerText = userScore
            turnsLeft = roundsLeft.innerText
            turnsLeft--
            roundsLeft.innerText = turnsLeft
            if (turnsLeft <= 0) {
                endGame();
            }
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissor") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissor" && computerChoice === "Paper")
        ) {
            roundResult.innerText = "Round result: WON";
            userScore++;
            userPoint.innerText = userScore
            turnsLeft = roundsLeft.innerText
            turnsLeft--

            roundsLeft.innerText = turnsLeft
            if (turnsLeft <= 0) {
                endGame();
            }

        } else {
            roundResult.innerText = "Round result: LOST";
            computerScore++;
            computerPoint.innerText = computerScore
            turnsLeft = roundsLeft.innerText
            turnsLeft--
            roundsLeft.innerText = turnsLeft
            if (turnsLeft <= 0) {
                endGame();
            }
        }




    }

}

function endGame() {
    disableButtons()
    if (userScore === computerScore) {
        gameResult.innerText = "Game result: TIE";
    } else if (userScore > computerScore) {
        gameResult.innerText = "Game result: WON";
    } else {
        gameResult.innerText = "Game result: LOST";
    }
    roundsLeft.innerText = "0"
    roundResult.innerText = ""
    


}
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}



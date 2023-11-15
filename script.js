let sqr1 = document.getElementById("1")
let sqr2 = document.getElementById("2")
let sqr3 = document.getElementById("3")
let sqr4 = document.getElementById("4")
let sqr5 = document.getElementById("5")
let sqr6 = document.getElementById("6")
let sqr7 = document.getElementById("7")
let sqr8 = document.getElementById("8")
let sqr9 = document.getElementById("9")

let sqrs = [sqr1, sqr2, sqr3, sqr4, sqr5, sqr6, sqr7, sqr8, sqr9]

let selectedSquares = []
let formSect = document.querySelector(".form-sect")
let gameboard = document.querySelector(".game-board")
let formEl = document.querySelector("form")
let displayInfo = document.querySelector(".display-info")

let playerNumber = 'player1'
let turn = 1

const changeTurn = () => {
    if (playerNumber === 'player1') {
        playerNumber = 'player2';
    } else {
        playerNumber = 'player1';
    }
}

const checkForWinner = () => {
    let winningCombos = [
        [sqr1, sqr2, sqr3],
        [sqr4, sqr5, sqr6],
        [sqr7, sqr8, sqr9],
        [sqr1, sqr4, sqr7],
        [sqr2, sqr5, sqr8],
        [sqr3, sqr6, sqr9],
        [sqr1, sqr5, sqr9],
        [sqr3, sqr5, sqr7]
    ]
    for (let i = 0; i < winningCombos.length; i++) {
        let combo = winningCombos[i];
        if (combo[0]?.innerHTML === combo[1]?.innerHTML && combo[1]?.innerHTML === combo[2]?.innerHTML && combo[0]?.innerHTML !== "") {
            return combo[0]?.innerHTML;
        }
    }
    return null;
}

const gameData = () => {
    sqrs.forEach((sqr) => {
        if (!sqr) return
        sqr.addEventListener("click", () => {
            // Play the turn
            sqr.classList.add('selected')
            if (playerNumber === 'player1') {
                sqr.innerHTML = "X"
            } else {
                sqr.innerHTML = "O"
            }
            turn++
            let winner = checkForWinner()
            if (winner === 'X' || winner === 'O') {
                displayInfo.style.display = "block"
                gameboard.style.display = "none"
                displayInfo.innerHTML = `${winner} wins!`
                return
            }
            if (turn === 10) {
                displayInfo.style.display = "block"
                gameboard.style.display = "none"
                displayInfo.innerHTML = `It's a tie!`
                return
            }
            changeTurn()
        })
    })
}

gameData()
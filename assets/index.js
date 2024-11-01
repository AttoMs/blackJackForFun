// 11 - 2 é o intervalo, + 1 é pra acrescentar o limite 11, e o +2 no final é devido ao número começar entre o 2.

cards = []
let sum = 0
let blackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// object é separado por '{}'
let player = {
    name: "Lucas",
    chips: 100
}

let playerEl = document.getElementById("player-el")
playerEl.innerText = player.name + ": $" + player.chips
let sumChips = player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 // 1 - 13
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    sumChips -= 10
    playerEl.innerText = player.name + ": $" + sumChips

    renderGame()
}

function renderGame() {
    cardsEl.innerText = "Cards: "

    for (i = 0; i < cards.length; i += 1) {
        cardsEl.innerText += " " + cards[i]
    }

    sumEl.innerText = "Sum: " + sum

    if (sum < 21) {
        message = "Pick a new card or another round for $10 ? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got blackjack and gain $50! 🥳"
        blackjack = true
        sumChips += 50
        playerEl.innerText = player.name + ": $" + sumChips

    } else if (sum > 21) {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.innerText = message

    if (sumChips == 0) {
        startOver()
    }
}

function newCard() {

    if (isAlive === true && blackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
    }
    renderGame()
}

function stop() {
    if (isAlive === true) {
        isAlive = false
    }
}

function startOver() {
    message = "You lost all of your chips, you're out! 😭"
    messageEl.innerText = message

    sumChips = 100
    playerEl.innerText = player.name + ": $" + sumChips

    cards = []
    cardsEl.innerText = "Cards: "

    sum = 0
    sumEl.innerText = "Sum: " + sum
}  
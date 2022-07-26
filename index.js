let player = {
    nome: "Jogador",
    fichas: 150,
    sayHello: function(){
        console.log("Olá!")
    }
}

let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messagEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.nome + ": $" + player.fichas


function getRandomCard() {
    let randomNum = Math.floor( Math.random() * 13) + 1
    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10){
        return 10
    } else {
        return randomNum
    }
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let sum = firstCard + secondCard
    let cards = [firstCard, secondCard]
    renderGame()
}


function renderGame(){
    cardEl.textContent = "Cartas: "
    for (let i=0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Soma: " + sum
    if (sum <= 20) {
        message = ("Você quer mais uma carta?🃏")
    } else if (sum === 21) {
        message = ("♠Blackjack!♠")
        hasBlackJack = true
    } else {
        message = ("Você perdeu!💀")
        isAlive = false
    }
    messagEl.textContent = message
}


function newCard() {
    console.log("Puxar uma carta nova")
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}

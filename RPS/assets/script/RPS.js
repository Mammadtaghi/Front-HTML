// HTML stuff
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const rockBtn = document.getElementById('rockBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const paperBtn = document.getElementById('paperBtn')
const playBtn = document.getElementById('playBtn')

// Moves

const Moves = {
    rock:"./assets/images/Rock.jpg",
    scissors:"./assets/images/Scissors.jpg",
    paper:"./assets/images/Paper.jpg",
}

const rock = "./assets/images/Rock.jpg"
const scissors = "./assets/images/Scissors.jpg"
const paper = "./assets/images/Paper.jpg"

// First Player moves
rockBtn.addEventListener('click',(e)=>{
    e.preventDefault()

    player1.src = rock

})

scissorsBtn.addEventListener('click',(e)=>{
    e.preventDefault()

    player1.src = scissors

})

paperBtn.addEventListener('click',(e)=>{
    e.preventDefault()

    player1.src = paper

})

// Second Player moves
playBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    let botMove = Math.floor(Math.random() * 10)
    if (botMove <= 3) {
        player2.src = Moves.rock
    }
    else if(botMove <= 6 && botMove >= 4){
        player2.src = Moves.scissors
    }
    else{
        player2.src = Moves.paper
    }

    if (player2.src.includes('Paper') && player1.src.includes('Scissors')) {
        console.log('Palyer1 Won!')
    }
    if (player2.src.includes('Paper') && player1.src.includes('Rock')) {
        console.log('Palyer2 Won!')
    }
    if (player2.src.includes('Rock') && player1.src.includes('Scissors')) {
        console.log('Palyer2 Won!')
    }
    if (player2.src.includes('Rock') && player1.src.includes('Paper')) {
        console.log('Palyer1 Won!')
    }
    if (player2.src.includes('Scissors') && player1.src.includes('Rock')) {
        console.log('Palyer1 Won!')
    }
    if (player2.src.includes('Scissors') && player1.src.includes('Paper')) {
        console.log('Palyer2 Won!')
    }
    if (player1.src === player2.src) {
        console.log('Draw')
    }

})



// console.log(Math.floor(Math.random() * 10))

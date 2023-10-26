// Getting player
const player = document.querySelector("div")

// Adding movement ability
let playerX = 0
let playerY = 0


player.style.position = "absolute"
player.style.top = playerY+"px"
player.style.left = playerX+'px'


document.body.addEventListener('keypress', (e) => {
    switch (e.code) {
        case 'KeyW':
            console.log("W");
            playerY -= 5
            break
        case 'KeyA':
            console.log("A ");
            playerX -= 5

            break
        case 'KeyS':
            console.log("S");
            playerY += 5

            break
        case 'KeyD':
            console.log("D");
            playerX += 5

            break
        default:
    }
})



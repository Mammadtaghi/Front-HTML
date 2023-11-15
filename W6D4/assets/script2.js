// Getting player
const player = document.querySelector("div")

// Adding movement ability
let playerX = 5
let playerY = 5

// Start position
player.style.position = "absolute"
player.style.bottom = "0px"
player.style.right = '0'
// Step
let step = 20

// Movement
document.body.addEventListener('keypress', (e) => {
    switch (e.code) {
        case 'KeyW':
            console.log("W");
            player.style.bottom = (+player.style.bottom.replace("px","") + step)+ "px"

            break;
        case 'KeyA':
            console.log("A ");
            player.style.right = (+player.style.right.replace("px","") + step)+ "px"

            break
        case 'KeyS':
            console.log("S");
            player.style.bottom = (+player.style.bottom.replace("px","") - step)+ "px"

            break
        case 'KeyD':
            console.log("D");
            player.style.right = (+player.style.right.replace("px","") - step)+ "px"

            break
        default:
    }
})



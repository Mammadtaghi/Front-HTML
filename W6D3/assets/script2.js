// Creating Variable
document.documentElement.style.setProperty('--lengthFace','200px')
document.documentElement.style.setProperty('--lengthEye','50px')

// Getting Elements from HTML
const mainBox = document.getElementById('mainBox')
const addBtn = document.getElementById('addBtn')

// Button Click Event
addBtn.addEventListener("click", (event) => {
    event.preventDefault()

    let blackBox = document.createElement('div')
    blackBox.style.width = "var(--lengthFace)"
    blackBox.style.height = "var(--lengthFace)"
    blackBox.style.backgroundColor = 'black'
    blackBox.style.margin = "10px"
    blackBox.style.display = "inline-block"
    blackBox.style.borderRadius = "50%"
    blackBox.style.position = 'relative'

    let leftEye = document.createElement('div')
    leftEye.style.width = "var(--lengthEye)"
    leftEye.style.height = "var(--lengthEye)"
    leftEye.style.backgroundColor = 'red'
    leftEye.style.position = 'absolute'
    leftEye.style.top = '30px'
    leftEye.style.left = '30px'
    leftEye.style.zIndex = '2'
    leftEye.style.borderRadius = "50%"


    let rightEye = document.createElement('div')
    rightEye.style.width = "var(--lengthEye)"
    rightEye.style.height = "var(--lengthEye)"
    rightEye.style.backgroundColor = 'red'
    rightEye.style.position = 'absolute'
    rightEye.style.top = '30px'
    rightEye.style.right = '30px'
    rightEye.style.zIndex = '2'
    rightEye.style.borderRadius = "50%"

    mainBox.append(blackBox)
    blackBox.append(rightEye, leftEye)
})


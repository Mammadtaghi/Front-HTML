const form = document.getElementById("form")
const input = document.getElementById("text")
const addBtn = document.getElementById("add")
const list = document.getElementById("list")
const box = document.getElementById("container")

// console.log(input.id); // 1

// input.addEventListener("keypress", ()=> console.log(input.value)) // 2

// 3
// addBtn.addEventListener("click", (event)=>{
//     event.preventDefault()
//     console.log(text.value);
// })


// 4

addBtn.addEventListener("click", (event)=>{
    event.preventDefault()

    if (!(input.value === "")) {
        let box1 = document.createElement('div')
        box1.style.width = "fit-content"
        box1.style.height = "fit-content"
        box1.style.backgroundColor = "cyan"
        box1.style.margin = "5px"
        box1.style.display = 'flex'
        document.body.append(box1)

        let inputText = document.createElement('span')
        inputText.textContent = input.value

        let textBox = document.createElement('div')
        textBox.style.width = "50px"
        textBox.style.height = "50px"
        textBox.style.backgroundColor = "salmon"
        textBox.style.margin = "5px"
        textBox.style.display = 'inline-block'
        textBox.textContent = input.value
        box1.append(textBox)

        textBox.addEventListener('click', (event)=>{
            event.preventDefault()
            inputText.style.textDecoration = 'line-through'
        })
        
        let editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        let editInput = document.createElement('input')
        editInput.value = input.value

        let editBox = document.createElement('div')
        editBox.style.width = "50px"
        editBox.style.height = "50px"
        editBox.style.backgroundColor = "salmon"
        editBox.style.margin = "5px"
        editBox.style.display = 'inline-block'
        editBox.append(editBtn)
        box1.append(editBox)

        editBtn.addEventListener('click', (event)=>{
            event.preventDefault()
            editBox.append(editInput)
            editInput.addEventListener('change', (event)=>{
                event.preventDefault()
                textBox.textContent = editInput.value
                editInput.remove()
            })

        })

        let xButton = document.createElement('button')
        xButton.textContent = "X"
        let quitBox = document.createElement('div')
        quitBox.style.width = "50px"
        quitBox.style.height = "50px"
        quitBox.style.backgroundColor = "salmon"
        quitBox.style.margin = "5px"
        quitBox.style.display = 'inline-block'
        quitBox.append(xButton)
        box1.append(quitBox)
    
        xButton.addEventListener('click',(event)=>{
            event.preventDefault()
            box1.remove()
        })
    }else{
        alert('Please write something')
    }

    input.value = ''
})

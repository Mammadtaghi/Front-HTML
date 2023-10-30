// HTML stuff
const input = document.getElementById('input')
const addBtn = document.getElementById('addBtn')
const toDoDiv = document.getElementById('toDoDiv')

// An Array to store text coming from input
const data = []

// addBtn clicking Event
addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value === '') {
        alert('Add Something')
        return
    }

    createToDo(input.value, null)

    // Adding text to localStorage
    localStorage.setItem('ToDo', JSON.stringify(data))
})

// Getting our list back if it is stored in localStorage
const list = JSON.parse(localStorage.getItem('ToDo'))
console.log(list);
if (list) {
    for (const x of list) {
        createToDo(x['name'], x['checked'])
    }
}

function createToDo(i, isChecked) {
    // Creating span, checkBox, and a div to store them
    let box = document.createElement('div')
    let span = document.createElement('span')
    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    if (isChecked) {
        checkBox.checked = true
        span.style.textDecoration = 'line-through'
        box.style.backgroundColor = 'rgba(200, 100, 100, 0.4)'
    }

    // For later use
    const save = {}

    // Giving style to div
    box.style.display = 'flex'
    box.style.justifyContent = 'space-between'
    box.style.minWidth = '220px'
    box.style.borderTop = '1px solid black'
    box.style.borderBottom = '1px solid black'
    box.style.margin = '5px 0px'
    box.style.backgroundColor = 'rgba(100, 200, 100, 0.4)'

    // Giving style to span
    span.style.fontFamily = 'Arial,sans'
    span.style.fontSize = '20px'

    // Getting input value to span
    span.innerHTML = i

    // Getting items in place
    box.append(span, checkBox)
    toDoDiv.append(box)
    
    // In motion
    checkBox.addEventListener('change', (e) => {
        e.preventDefault()

        // line through if checked
        if (checkBox.checked) {
            span.style.textDecoration = 'line-through'
            box.style.backgroundColor = 'rgba(200, 100, 100, 0.4)'
            save.checked = true

        }
        // clear when not checked
        else {
            span.style.textDecoration = 'none'
            box.style.backgroundColor = 'rgba(100, 200, 100, 0.4)'
            save.checked = false

        }
        console.log(save);

    })

    // save data in temporary array
    save.name = i

    // Set all data to array
    data.push(save)

}
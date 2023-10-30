// HTML stuff
const username = document.getElementById('username')
const password = document.getElementById('password')
const saveBtn = document.getElementById('saveBtn')
const dataBtn = document.getElementById('dataBtn')

// Getting data back if there is in LocalStorage
if (JSON.parse(localStorage.getItem('user'))) {
    
    let user = JSON.parse(localStorage.getItem('user'))

    username.value = user.username
    password.value = user.password
}

// an array to store all users
const Persons = []

// Clicking event of saveBtn
saveBtn.addEventListener('click', (e) => {
    e.preventDefault()

    // An object to store data coming from inputs
    const Person = {}

    // Getting data to object
    Person.username = username.value
    Person.password = password.value

    // Saving data from Person to Persons array
    Persons.push(Person)

    // Taking data from object to localStorage
    localStorage.setItem('user', JSON.stringify(Person))


})

// dataBtn.addEventListener('click', (e) => {
//     e.preventDefault()

//     // Saving data from storage to a variable
//     let user = JSON.parse(localStorage.getItem('user'))

//     username.value = user.username
//     password.value = user.password
// })

// window.addEventListener('change', (e) => {
//     e.preventDefault()

    // // Saving data from storage to a variable
    // let user = JSON.parse(localStorage.getItem('user'))

    // username.value = user.username
    // password.value = user.password
// })

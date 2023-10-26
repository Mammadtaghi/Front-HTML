// HTML stuff
const tbody = document.getElementById('tbody')

let user = document.getElementById('user')
let email = document.getElementById('email')
let pass = document.getElementById('pass')
let passConfirm = document.getElementById('passConfirm')
let submit = document.getElementById('submit')

const Users = [];


submit.addEventListener('click', (e) => {
    e.preventDefault()
    
    // Creating Temporary User
    let User = {
        name: "",
        email: "",
        password: "",
    }

    let isPassGood = true

    if (pass.value !== passConfirm.value) {
        alert('Password Confirm duzgun daxil edilmeyib')
        isPassGood = false
    }
    else {

        let tr = document.createElement('tr')

        User.name = user.value.trim()
        User.email = email.value.trim()
        User.password = isPassGood ? pass.value.trim() : null

        if (Users.includes(User)) {
            alert('This user has been signed in before')
        }
        if (User.name && User.email && User.password) {
            for (const key in User) {
                if (key !== 'password') {

                    let td = document.createElement('td')
                    td.append(User[key])
                    tr.append(td)
                    tbody.append(tr)
                    
                    
                }
            }
            // After all exceptions adding User to Users
            Users.unshift(User)
        }
        else {
            alert('Formu tam doldurun')
        }
    }
    console.log(Users.includes(User), '\n', User);
})


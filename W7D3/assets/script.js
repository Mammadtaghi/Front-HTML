const tbody = document.getElementById('tbody')
const p1 = fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json()).then(data=>{
    data.forEach(e => {
        let tr = document.createElement('tr')
        const namE = document.createElement('td')
        const username = document.createElement('td')
        const email = document.createElement('td')
        const phoneNumber = document.createElement('td')

        namE.textContent = e.name
        username.textContent = e.username
        email.textContent = e.email
        phoneNumber.textContent = e.phone

        tr.append(namE,username,email,phoneNumber)
        tbody.append(tr)

    })
        console.log(data);
        return data;
})



// name username email phone number
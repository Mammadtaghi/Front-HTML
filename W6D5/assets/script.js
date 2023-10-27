// HTML stuff
// Movie Form stuff
const movieImg = document.getElementById('movieImg')
const movieName = document.getElementById('movieName')
const movieImdb = document.getElementById('movieImdb')
const movieCategory = document.getElementById('movieCategory')
const movieDirector = document.getElementById('movieDirector')
const submit = document.getElementById('submit')

// Search Form stuff
const search = document.getElementById('search')
const select = document.getElementById('select')

// Table stuff
const tbody = document.getElementById('tbody')

// Adding This items to an Array for Later Use
const Inputs = [movieImg, movieName, movieImdb, movieCategory, movieDirector]

// An Array To Store Every Movie
const Movies = []

// When Submit Clicked
submit.addEventListener('click', (e) => {
    e.preventDefault()

    // Creating Empty Object To Store Movie Data
    let Movie = {}

    // if every Input has filled
    if (movieCategory.value && movieDirector.value && movieImdb.value && movieImg.value && movieName.value) {
        // Getting Movie Data From Inputs
        Movie.img = movieImg.value.trim()
        Movie.name = movieName.value.trim()
        Movie.imdb = movieImdb.value.trim()
        Movie.category = movieCategory.value.trim()
        Movie.director = movieDirector.value.trim()

        //Adding Movie to Movies Array if That Movie hasn't been added yet
        !Movies.includes(Movie) ? Movies.push(Movie) : console.log("This movie added before");

        // Creating "Table Row" for Movie Data
        let tr = document.createElement('tr')

        // Taking Movie Stuff to Table
        for (const key in Movie) {
            let td = document.createElement('td') // Creating "Table Data" To Add Movie Data

            // Adding Data to td
            td.textContent = Movie[key]
            // Adding "Table Data" To Table Tow
            tr.append(td)
        }
        // Creating Buttons
        let editBtn = document.createElement('button')
        let deleteBtn = document.createElement('button')

        // Adding Button Text
        editBtn.textContent = "Edit"
        deleteBtn.textContent = "Delete"

        // Creating Data to Store Buttons
        let td = document.createElement('td')
        td.append(editBtn, deleteBtn)

        // Before Adding Row to Table Edit and Delete Buttons added to it
        tr.append(td)

        // Adding Table Row to Table Body
        tbody.append(tr)

        // Adding Functionality to Edit button
        editBtn.addEventListener('click', (e) => {
            e.preventDefault()

            // Inputs length
            const len = Inputs.length

            // Get Every Movie Data To Every Input
            let i = 0
            while (i < len) {
                for (let x of tr.children) {
                    if (!x.innerHTML.includes("<button>")) {
                        Inputs[i].value = x.innerHTML
                        i++
                    }
                }
            }

            // Change Submit Button Text to Edit
            submit.value = "Edit"

            submit.addEventListener('click', (e) => {
                e.preventDefault()

                // Remove old row
                tr.remove()

                // Also delete that Movie from Movies array
                Movies.splice(Movies.indexOf(Movie), 1)

                // At the end of editing change Edit text back to Submit
                submit.value = 'Submit'
            })

        })

        // Adding Functionality to Delete button
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault()

            // When pressed delete that row
            tr.remove()

            // Also delete that Movie from Movies array
            Movies.splice(Movies.indexOf(Movie), 1)

        })

        // Clearing inputs
        movieImg.value = ""
        movieName.value = ""
        movieImdb.value = ""
        movieCategory.value = ""
        movieDirector.value = ""
    }
    else {
        alert("You haven't Complete The Form Yet!")
    }

})

search.addEventListener('input', (e) => {
    e.preventDefault()

    // Taking length of Rows
    let len = tbody.children.length

    for (let i = 0; i < len; i++) {
        if (!tbody.children[i].children[1].textContent.toLocaleLowerCase().includes(search.value.trim()) || !tbody.children[i].children[1].textContent.toLocaleUpperCase().includes(search.value.trim()) ) {
            tbody.children[i].style.display = 'none'
        }
        else if(search.value === ""){
            tbody.children[i].style.display = 'table-row'
        }
    }

})



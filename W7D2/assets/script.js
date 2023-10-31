// HTML stuff
const bigImage = document.getElementById('bigImage')
const images = document.querySelectorAll('.box')

// Save img in bigImage to LocalStorage
bigImage.setAttribute('src' ,localStorage.getItem('img'))
 
images.forEach(x => x.onclick = ()=> {
    bigImage.src = x.src 
    localStorage.setItem('img', bigImage.src)
})

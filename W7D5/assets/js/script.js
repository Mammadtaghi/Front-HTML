// Nav animation
// all subNavs
const navItems = document.querySelectorAll('.navItem')
const subNavs = document.querySelectorAll('.subNav')

navItems.forEach(element => {
    element.addEventListener('click', (e)=>{
        e.preventDefault()

        try {
            element.children[1].classList.toggle('display')
            // element.children[1].style.display = 'inline-block'
        } catch (error) {
            console.log(error);
        }

    })
});

// sideNav Animation
const sideNav = document.getElementById('sideNav')
const toggleIcon = document.querySelector('.fa-bars')
const xIcon = document.querySelector('.fa-xmark')
toggleIcon.addEventListener('click',(e)=>{
    e.preventDefault()

    sideNav.style.left = '0px'

})

xIcon.addEventListener('click', (e)=>{
    e.preventDefault()

    sideNav.style.left = '-350px'

})

// User Icon Dropdown
const users = document.querySelector('.sideUsers')
const usersListDiv = document.querySelector('.usersListDiv')
users.addEventListener('click', (e)=>{
    e.preventDefault()

    usersListDiv.classList.toggle('display')

})

// Dropdown Animate
const dropdownsTitle = document.querySelectorAll('.dropdownTitle')
const dropdownsMenu = document.querySelectorAll('.dropdownMenu')


for (const key in dropdownsTitle) {
    dropdownsTitle[key].addEventListener('click', (e)=>{
        e.preventDefault()

        dropdownsMenu[key].classList.toggle('maxHeight')
        console.log(dropdownsMenu[key].nextSibling);

    })
}

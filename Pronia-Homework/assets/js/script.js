// Search Icon Function
// HTML Stuff
const magnifyingGlass = document.querySelector('.fa-magnifying-glass')
const modalCloseBtn = document.querySelector('.modalCloseBtn')
const searchModal = document.querySelector('.searchModal')
magnifyingGlass.addEventListener('click', (e) => {
    e.preventDefault()

    // Open Modal
    // searchModal.style.animation = 'modal 0.5s ease-in-out 0s forwards'
    searchModal.style.opacity = '1'
    searchModal.style.top = '0'
    searchModal.style.zIndex = '2'


})


modalCloseBtn.addEventListener('click', (e) => {
    e.preventDefault()

    // Close Modal
    // searchModal.style.animation = 'modal 0.5s ease-in-out 0s reverse backwards'
    searchModal.style.opacity = '0'
    searchModal.style.top = '-20%'
    searchModal.style.zIndex = '-1'

})

// Nav animation
// all subNavs
const navItems = document.querySelectorAll('.navItem')
const subNavs = document.querySelectorAll('.subNav')

navItems.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()

        try {
            element.children[1].classList.toggle('display')
        } catch (error) {
            console.log(error);
        }

    })
});

// sideNav Animation
const sideNav = document.getElementById('sideNav')
const toggleIcon = document.querySelector('.fa-bars')
const xIcon = document.querySelector('.sideNavCloseIcon')
toggleIcon.addEventListener('click', (e) => {
    e.preventDefault()

    sideNav.style.left = '0px'

})

xIcon.addEventListener('click', (e) => {
    e.preventDefault()

    sideNav.style.left = '-350px'

})

// User Icon Dropdown
const users = document.querySelector('.sideUsers')
const usersListDiv = document.querySelector('.usersListDiv')
users.addEventListener('click', (e) => {
    e.preventDefault()

    usersListDiv.classList.toggle('display')

})

// Dropdown Animation
const dropdownsTitle = document.querySelectorAll('.dropdownTitle')
const dropdownsMenu = document.querySelectorAll('.dropdownMenu')

try {
    // Clicking event for every element
    for (const key in dropdownsTitle) {
        dropdownsTitle[key].addEventListener('click', (e) => {
            e.preventDefault()

            dropdownsMenu[key].classList.toggle('maxHeight')
            let dropdowns = []
            Object.values(dropdownsMenu[key].parentElement.parentElement.children).forEach(element => {
                if (element.classList.contains('sideDropdown')) {
                    dropdowns.push(element)
                }
            })

            for (const x in dropdowns) {
                if (x !== key) {
                    const element = dropdowns[x].children[1];
                    element.classList.remove('maxHeight')
                }
            }

        })
    }
} catch (error) {
    console.log('');
}

// Inner Dropdown Animation (better than Dropdown Animation)
// HTML stuff
const innerMenus = document.querySelectorAll('.innerMenu');
const innerMenusArr = Object.values(innerMenus)
const innerMenuTitles = document.querySelectorAll('.innerMenuTitle')
const innerMenuDropdowns = document.querySelectorAll('.innerDropdownMenu')

// Clicking event for every element
for (const key in innerMenuTitles) {
    try {
        innerMenuTitles[key].addEventListener('click', (e) => {
            e.preventDefault()

            innerMenuDropdowns[key].classList.toggle('maxHeight')

            for (const x in innerMenusArr) {
                if (x !== key) {
                    innerMenus[x].children[1].classList.remove('maxHeight')

                }
            }

        })
    } catch (error) {
        console.log('');
    }
}

// Whishlist Animation
// HTML stuff
const basketBtn = document.querySelector('.fa-basket-shopping')
const wishlistCloseBtn = document.querySelector('.wishlistCloseBtn')
const wishlistMenu = document.querySelector('.wishlist')

// Opening
basketBtn.onclick = () => wishlistMenu.style.right = '0px'

// Closing
wishlistCloseBtn.onclick = () => wishlistMenu.style.right = '-450px'

// Discover Section
const sliderImages = ['assets/images/Plant1.png', 'assets/images/Plant2.png']

// Discover Plant Image Slider
const discoverLeftArrow = document.querySelector('.discoverLeftArrow')
const discoverRightArrow = document.querySelector('.discoverRightArrow')
const discoverSlider = document.querySelector('.discoverSlider')

// Set default image
let index = 1
let lenSlider = sliderImages.length - 1
discoverSlider.setAttribute('src', sliderImages[index])

function changeImgLeft() {
    if (!(index <= 0)) {
        index--
        discoverSlider.setAttribute('src', sliderImages[index])
    }
    else {
        index = lenSlider
        discoverSlider.setAttribute('src', sliderImages[index])

    }
}

function changeImgRight() {
    if (!(index >= lenSlider)) {
        index++
        discoverSlider.setAttribute('src', sliderImages[index])
    }
    else {
        index = 0
        discoverSlider.setAttribute('src', sliderImages[index])

    }
}

// Slide With Interval
function changeImgInTime() {
    let test = setInterval(() => {
        if (!(index >= lenSlider)) {
            index++
            discoverSlider.setAttribute('src', sliderImages[index])

        }
        else {
            index = 0
            discoverSlider.setAttribute('src', sliderImages[index])

        }
    }, 7000)

}

changeImgInTime()

// Wishlist
let Data = []

// All Data
const Products = [{
    id: 1,
    name: 'American Marigold',
    img: 'assets/images/Plant9.jpg',
    price: 24.50,
    count:0

},
{
    id: 2,
    name: 'Black Eyed Susan',
    img: 'assets/images/Plant10.jpg',
    price: 40.00,
    count:0

},

{
    id: 3,
    name: 'Bleeding Heart',
    img: 'assets/images/Plant3.jpg',
    price: 20.45,
    count:0

},

{
    id: 4,
    name: 'Bloody Cranesbill',
    img: 'assets/images/Plant4.jpg',
    price: 35.75,
    count:0

},

{
    id: 5,
    name: 'Butterfly Weed',
    img: 'assets/images/Plant5.jpg',
    price: 38.25,
    count:0

},

{
    id: 6,
    name: 'Common Yarrow',
    img: 'assets/images/Plant6.jpg',
    price: 45.50,
    count:0

},

{
    id: 7,
    name: 'Doublefile Viburnum',
    img: 'assets/images/Plant7.jpg',
    price: 35.50,
    count:0

},

{
    id: 8,
    name: 'Feather Reed Grass',
    img: 'assets/images/Plant8.jpg',
    price: 29.75,
    count:0

}]

// All Products

const productItemsDiv = document.querySelector('.productItemsDiv')

function SetProductInPlace(obj) {
    let product = document.createElement('div')
    product.classList.add('product')
    product.innerHTML = `<div class="productImgDiv">
        <img src=${obj.img} alt="" class="productImg">
    </div>
    <h3 class="productName">${obj.name}</h3>
    <span class="productPrice">$${obj.price}</span>`
    
    productItemsDiv.append(product)
}

Products.forEach(element => {
    SetProductInPlace(element)
});


`<div class="wishlistProduct">
    <img src="${obj.img}" alt="" class="productImg">
    <div class="wishlistProductTextBox">
        <div class="headLine">
            <h3>${obj.name}</h3>
            <i class="fa-solid fa-xmark closeBtn"></i>
        </div>
        <span class="">${obj.count} x ${obj.price}</span>
    </div>

</div>`





// LocalJSON
// function CreateLocalJSON() {
    //     for (const key in products) {
        //         if (key === 'entries') {
            //             return
            //         }
            
            //         const product = {}

            //         product.id = id
//         product.img = productsImg[key].getAttribute('src')
//         product.name = productsName[key].textContent
//         product.price = +productsPrice[key].textContent.replace('$', '')
//         product.count = 0

//         id++

//         Data.push(product)
//     }
// }

// // CreateLocalJSON()

// const wishlist = []

// // Wishlist Container
// const wishlistProductContainer = document.querySelector('.wishlistProductContainer')

// // Add to wishlist onclick event
// function AddToWishlist(imgSource, name, price) {

//     let Product = {
//         'imgSource': imgSource,
//         'name': name,
//         'price': price,
//     }



//     let wishlistProduct = document.createElement('div')
//     wishlistProduct.classList.add('wishlistProduct')

//     let itemImg = document.createElement('img')
//     itemImg.classList.add('wishlistProductImg')
//     itemImg.setAttribute('src', imgSource)

//     let textBox = document.createElement('div')
//     textBox.classList.add('wishlistProductTextBox')

//     let headLine = document.createElement('div')
//     headLine.classList.add('headLine')

//     let itemName = document.createElement('h3')
//     itemName.classList.add('wishlistProductName')
//     itemName.innerText = name

//     let closeBtn = document.createElement('span')
//     closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
//     closeBtn.classList.add('closeBtn')
//     closeBtn.setAttribute('onclick', 'RemoveItem(this.parentElement.parentElement.parentElement)')

//     let priceBox = document.createElement('span')
//     priceBox.innerText = `${count} x ${price}`

//     // Get everything in place
//     headLine.append(itemName, closeBtn)
//     textBox.append(headLine, priceBox)
//     wishlistProduct.append(itemImg, textBox)
//     wishlistProductContainer.append(wishlistProduct)

//     wishlist.push(wishlistProduct.parentElement.innerHTML)
//     // Store selected product to localStorage
//     localStorage.setItem('Item', JSON.stringify(wishlist))
// }

// Getting data back after refreshing site
function getWishlistBack() {
    try {
        // Get Products from localStorage
        let items = JSON.parse(localStorage.getItem('Item'))

        // Add every element has choosen before
        for (const key in items) {
            wishlistProductContainer.innerHTML = ''
            wishlistProductContainer.innerHTML += items[key]
        }

    } catch (error) {
        console.log('error');
    }
}
// getWishlistBack()


// // whislist Close Button function
// function RemoveItem(e) {
//     console.log(e);
//     e.remove()
// }



// this.children[0].children[0].src, this.children[1].textContent, this.children[2].innerText
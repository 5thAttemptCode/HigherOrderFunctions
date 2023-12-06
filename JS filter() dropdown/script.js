const originalOrder = [
    {
        id: 1,
        name: "Adidas Swift Run",
        price: 99.95,
        color: "blue",
        image: "https://images.pexels.com/photos/9546366/pexels-photo-9546366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 2,
        name: "Nike Air Jordan 1",
        price: 124.95,
        color: "red",
        image: "https://images.pexels.com/photos/16304371/pexels-photo-16304371/free-photo-of-nike-off-white-jordan-1-university-blue.jpeg"
    },

    {
        id: 3,
        name: "Nike Orea Edt",
        price: 154.95,
        color: "blue",
        image: "https://images.pexels.com/photos/13691727/pexels-photo-13691727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 4,
        name: "Reebok Classics",
        price: 109.95,
        color: "red",
        image: "https://images.pexels.com/photos/8310728/pexels-photo-8310728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 5,
        name: "Adidas Track",
        price: 89.95,
        color: "blue",
        image: "https://images.pexels.com/photos/10112911/pexels-photo-10112911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 6,
        name: "Nike AllStar 23",
        price: 199.95,
        color: "red",
        image: "https://images.pexels.com/photos/16685591/pexels-photo-16685591/free-photo-of-close-up-of-a-man-wearing-jordan-sneakers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]

let products = [...originalOrder]


// Dropdown variables
const dropdown = document.querySelector(".dropdown")
const select = dropdown.querySelector(".select")
const menu = dropdown.querySelector(".menu")
const options = menu.querySelectorAll("li")
const selected = dropdown.querySelector(".selected")

// Actions binded to the dropdown options
const actions = {
    resetButton: resetProducts,
    buttonHigh: sortHighToLow,
    buttonLow: sortLowToHigh,
}

// Bind events
select.addEventListener("click", toggleDropdown)
options.forEach(option => option.addEventListener("click", optionClick))

function toggleDropdown() {
    select.classList.toggle("select-clicked")
    menu.classList.toggle("menu-open")
}

function optionClick() {
    selected.innerText = this.innerText
    select.classList.remove("select-clicked")
    menu.classList.remove("menu-open")
    options.forEach(option => option.classList.remove("active"))
    this.classList.add("active")

    const action = actions[this.id]
    if (action) action()
}

function resetProducts() {
    products = [...originalOrder]
    updateProductDisplay()
}
  
function sortHighToLow() {
    products = originalOrder.filter(product => product.color === "blue")
    updateProductDisplay()
}
  
function sortLowToHigh() {
    products = originalOrder.filter(product => product.color === "red")
    updateProductDisplay()
}

function updateProductDisplay() {
    const productContainer = document.querySelector(".product-container")
    productContainer.innerHTML = products
        .map(({ name, price, color, image }) => `
            <div class="product-card">
                <h2>${name}</h2>
                <div class="product-info">
                    <p>Price: $${price}</p>
                    <p>Color: ${color}</p>
                </div>
                <img src="${image}" alt="${name}">
            </div>`)
        .join('')
}

updateProductDisplay()
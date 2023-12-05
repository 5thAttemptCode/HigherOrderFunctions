const products = [
    {
        id: 1,
        name: "Adidas Swift Run",
        price: 99.95,
        image: "https://images.pexels.com/photos/9546366/pexels-photo-9546366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 2,
        name: "Nike Air Jordan 1",
        price: 124.95,
        image: "https://images.pexels.com/photos/16304371/pexels-photo-16304371/free-photo-of-nike-off-white-jordan-1-university-blue.jpeg"
    },

    {
        id: 3,
        name: "Nike Orea Edt",
        price: 154.95,
        image: "https://images.pexels.com/photos/13691727/pexels-photo-13691727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 4,
        name: "Reebok Classics",
        price: 109.95,
        image: "https://images.pexels.com/photos/8310728/pexels-photo-8310728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 5,
        name: "Adidas Track",
        price: 89.95,
        image: "https://images.pexels.com/photos/10112911/pexels-photo-10112911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 6,
        name: "Nike AllStar 23",
        price: 199.95,
        image: "https://images.pexels.com/photos/16685591/pexels-photo-16685591/free-photo-of-close-up-of-a-man-wearing-jordan-sneakers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]

const productContainer = document.querySelector(".product-container")

products.map(product => {
    const productCard = document.createElement("div")
    const productName = document.createElement("h2")
    const productPrice = document.createElement("p")
    const productImage = document.createElement("img")

    productCard.className = "product-card"
    productName.textContent = product.name
    productPrice.textContent = "Price: $" + product.price
    productImage.src =  product.image

    productCard.append(productName, productPrice, productImage)
    productContainer.appendChild(productCard)
})
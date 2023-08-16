const products = [
    {name: "Hoody", color: "blue", type: "male", size:"L", price: 100},
    {name: "Hoody", color: "red", type: "female", size:"S", price: 80},
    {name: "Crewneck", color: "blue", type: "male", size:"XL", price: 90},
    {name: "Crewneck", color: "yellow", type: "female", size:"L", price: 70},
    {name: "Shorts", color: "black", type: "male", size:"M", price: 40},
    {name: "Leggins", color: "blue", type: "female", size:"M", price: 50},
    {name: "Hoody", color: "green", type: "male", size:"L", price: 100},
    {name: "Leggins", color: "green", type: "female", size:"S", price: 50}
]

//forEach

products.forEach((product) => {
    console.log(product);
})

products.forEach((product) => {
    console.log(product.name); //to get only the product-name
})


//_____________________________________________________________
//filter

const colorProduct = products.filter((product) => 
    product.color === "blue" 
)

const colorProductSize = products.filter((product) => 
    product.color === "blue" && product.size === "L"
)
console.log(colorProductSize);

const gender = products.filter((product) => 
    product.type === "male"
)
console.log(gender);


//_____________________________________________________________
//map

// Create array of product name
const productNames = products.map((product) => 
    product.name
)
console.log(productNames);

const one = products.map((product) => 
    `${product.name} [${product.type} + ${product.size}]`
)
console.log(one);



//_____________________________________________________________
//sort

//sorts price from high to low
const priceSortingHtL = products.sort((a, b) => (a.price > b.price ? -1 : 1))

//sorts price from low to high
const priceSortingLtH = products.sort((a, b) => (a.price > b.price ? 1 : -1))

console.log(priceSortingHtL);
console.log(priceSortingLtH);


//_____________________________________________________________
//reduce
//the 0 at the end is to start at 0
const text = document.getElementById("text")
const priceSum = products.reduce((total, product) => total + product.price, 0)

text.innerHTML = priceSum
console.log(priceSum);
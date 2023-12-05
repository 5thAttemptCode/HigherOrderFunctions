const userContainer = document.querySelector(".card-container")

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        data.map(user => {
            const card = document.createElement("div")
            card.className = "card"
            const header = document.createElement("p")
            const body = document.createElement("p")
            header.textContent = user.name
            body.textContent = user.email
            card.append(header, body) //Add the header to the card
            userContainer.append(card) //Add the card to the userContainer
            return { name: user.name, email: user.email, element: card}
        })
    }) 
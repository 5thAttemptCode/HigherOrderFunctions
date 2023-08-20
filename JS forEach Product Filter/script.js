const listBtns = document.querySelectorAll("li")
const products = document.querySelectorAll(".container .product")

listBtns.forEach((listBtn) => {
    listBtn.addEventListener('click', () =>{
        //Click on listBtn to add the class active, while removing it from the others
        listBtns.forEach((listBtn) => {
            listBtn.classList.remove("active")
        })
        listBtn.classList.add("active")
    

        //the assigned data-type from listBtn and the corresponding from products are set to display none.
        //However if the active listBtn data-type is equal to the data-tape of products OR is "all", they are set to display grid
        const dataAttr = listBtn.getAttribute("data-type")
        products.forEach((listBtn) => {
            listBtn.style.display = "none";
            if(listBtn.getAttribute("data-type") == dataAttr || dataAttr == "all"){
                listBtn.style.display="grid"
            }
        })
    })
})



const btns = document.querySelectorAll(".box");

btns.forEach(button => {
  button.addEventListener("mouseover", open);
  button.addEventListener("mouseleave", close);
});

function open(){
  this.classList.add("active");
}

function close(){
  this.classList.remove("active");
}

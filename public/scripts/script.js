let card = document.getElementsByClassName("card")

card.addEventListener("click", flipCard);

function flipCard() {
    card.classList.toggle("flipCard");
}

console.log('hello world')
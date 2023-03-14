// **BONUS 1**
// Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

// Inserisco tutte le immagini dinamicamente servendomi di un array con le immagini e un ciclo for che concatena un template literal.
// Array con immagini
const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
// Contenitore delle immagini dello slider
const sliderItems = document.querySelector(".slider-items");
console.log(sliderItems);
// Ciclo for per inserire dinamicamente gli item (immagini)
for (let i = 0; i < images.length; i++ ) {
    sliderItems.innerHTML += `
    <div class="item">
        <img src="${images[i]}" alt="Landscape">
    </div>`                            
}

// Stato iniziale
// Prendo gli elementi con classe "item"
const items = document.querySelectorAll(".item");
console.log(items);
// Prendo i bottoni dello slider
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
// Indice dell'item Visibile
let activeItemIndex = 0;
items[activeItemIndex].classList.add("active-item");
// Aggiungo l'event listener ai bottoni
// SE siamo al primo elemento il bottone scompare
if (activeItemIndex === 0) {
    previousButton.classList.add("hidden");
}
// Bottone "precedente"
previousButton.addEventListener("click", function () {
    // Quando clicco su questo bottone, tolgo active all'elemento corrente
    items[activeItemIndex].classList.remove("active-item");
    // Diminusico l'indice
    activeItemIndex--;
    // E assegno active all'elemento successivo
    items[activeItemIndex].classList.add("active-item");
    // SE siamo al primo elemento il bottone scompare
    if (activeItemIndex === 0) {
        previousButton.classList.add("hidden");
    }
    // Tolgo hidden al bottone "successivo" (nel caso in cui lo abbia, ossia all'ultimo elemento)
    nextButton.classList.remove("hidden");
})
// Bottone "successivo"
nextButton.addEventListener("click", function () {
    // Quando clicco su questo bottone, tolgo active all'elemento corrente
    items[activeItemIndex].classList.remove("active-item");
    // Aumento l'indice
    activeItemIndex++;
    // E assegno active all'elemento successivo
    items[activeItemIndex].classList.add("active-item");
    // SE siamo all'ultimo elemento scompare il bottone
    if (activeItemIndex === items.length - 1) {
        nextButton.classList.add("hidden");
    }
    // Tolgo hidden al bottone "precedente" (nel caso in cui lo abbia, ossia al primo elemento)
    previousButton.classList.remove("hidden");
})
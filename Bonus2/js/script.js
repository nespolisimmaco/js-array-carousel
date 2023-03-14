// **BONUS 2:**
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

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
// Bottone "precedente"
previousButton.addEventListener("click", function () {
    // SE siamo al primo elemento
    //  dobbiamo andare all'ultimo elemento
    // ALTRIMENTI
    //  si scende a partire dall'elemento corrente
    if (activeItemIndex === 0) {
        items[activeItemIndex].classList.remove("active-item");
        activeItemIndex = items.length - 1;
        console.log(activeItemIndex);
        items[activeItemIndex].classList.add("active-item");
    } else {
        // Quando clicco su questo bottone, tolgo active all'elemento corrente
        items[activeItemIndex].classList.remove("active-item");
        // Diminusico l'indice
        activeItemIndex--;
        console.log(activeItemIndex);
        // E assegno active all'elemento successivo
        items[activeItemIndex].classList.add("active-item");
    }
})
// Bottone "successivo"
nextButton.addEventListener("click", function () {
    // SE siamo all'ultimo elemento
    //  dobbiamo andare al primo elemento
    // ALTRIMENTI
    //  si sale a partire dall'elemento corrente
    if (activeItemIndex === items.length - 1) {
        items[activeItemIndex].classList.remove("active-item");
        activeItemIndex = 0;
        console.log(activeItemIndex);
        items[activeItemIndex].classList.add("active-item");
    } else {
        // Quando clicco su questo bottone, tolgo active all'elemento corrente
        items[activeItemIndex].classList.remove("active-item");
        // Aumento l'indice
        activeItemIndex++;
        console.log(activeItemIndex);
        // E assegno active all'elemento successivo
        items[activeItemIndex].classList.add("active-item");
    }
})
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
// Item visibile
let activeItemIndex = 0;
items[activeItemIndex].classList.add("active-item");
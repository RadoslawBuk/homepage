console.log("Hello!");

let button = document.querySelector(".js-button");
let photo = document.querySelector(".js-image");

button.addEventListener("click", () => {
    photo.classList.toggle("hiddenImage");
    button.innerText = photo.classList.contains("hiddenImage") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";
});
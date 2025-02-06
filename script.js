const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");
const container = document.querySelector(".container");

// Obtener dimensiones del contenedor y del botón
function getSafePosition() {
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - noButton.offsetWidth - 10;
    const maxY = containerRect.height - noButton.offsetHeight - 10;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    return { x, y };
}

// Hacer que el botón "No" se mueva sin salirse del contenedor
noButton.addEventListener("mouseover", function() {
    const { x, y } = getSafePosition();
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Mostrar el modal al hacer clic en "Sí"
yesButton.addEventListener("click", function() {
    modal.style.display = "flex";
    generateBalloons(); // Llamar la función para crear globos
});

// Cerrar el modal
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
    location.reload();
});

// Función para generar globos flotando
function generateBalloons() {
    for (let i = 0; i < 15; i++) {
        let balloon = document.createElement("div");
        balloon.innerHTML = "❤️";
        balloon.classList.add("balloon");
        document.body.appendChild(balloon);

        let randomX = Math.random() * window.innerWidth;
        let randomDuration = Math.random() * 3 + 2; // Entre 2s y 5s

        balloon.style.left = `${randomX}px`;
        balloon.style.animationDuration = `${randomDuration}s`;

        setTimeout(() => {
            balloon.remove();
        }, randomDuration * 10000);
    }
}

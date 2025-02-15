document.addEventListener("DOMContentLoaded", () => {
    const words = ["Negocio", "Resort", "Hotel", "Profesión", "Restaurante", "Bar"];
    const wordElement = document.getElementById("dynamic-word");
    let index = 0;

    function changeWord() {
        // Primera animación: la palabra actual se desliza hacia la izquierda
        wordElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
        wordElement.style.transform = "translateX(-50%)";
        wordElement.style.opacity = "0";

        setTimeout(() => {
            // Cambia la palabra y la coloca fuera de pantalla a la derecha
            index = (index + 1) % words.length;
            wordElement.textContent = words[index];
            wordElement.style.transition = "none"; // Quita transición para reposicionar instantáneamente
            wordElement.style.transform = "translateX(50%)";

            setTimeout(() => {
                // Segunda animación: la nueva palabra entra desde la derecha
                wordElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
                wordElement.style.transform = "translateX(0)";
                wordElement.style.opacity = "1";
            }, 50); // Pequeña pausa para que la transición se vea fluida
        }, 500); // Espera a que la primera animación termine
    }

    setInterval(changeWord, 3000); // Cambia la palabra cada 3 segundos
});

function adjustPresentationText() {
    const presentationText = document.getElementById('presentationtext');
    if (window.innerWidth < 768) {
        presentationText.innerHTML = 'Hacemos un<br>sitio web<br>para tu<br><span id="dynamic-word">Negocio</span>';
    } else {
        presentationText.innerHTML = 'Hacemos un sitio web<br>para tu <span id="dynamic-word">Negocio</span>';
    }
    // Actualiza la referencia a wordElement
    wordElement = document.getElementById("dynamic-word");
}
// Ajusta el texto al cargar la página
adjustPresentationText();
// Ajusta el texto al redimensionar la ventana
window.addEventListener('resize', adjustPresentationText);

document.addEventListener("DOMContentLoaded", () => {
    const words = ["Negocio", "Resort", "Hotel", "Profesión", "Restaurante", "Bar"];
    let wordElement = document.getElementById("dynamic-word");
    let index = 0;

    function changeWord() {
        // Actualiza la referencia a wordElement
        wordElement = document.getElementById("dynamic-word");

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


document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".portfolio__article");

    const showOnScroll = () => {
        articles.forEach(article => {
            const rect = article.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                article.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Ejecutar al cargar para mostrar los que ya están en pantalla
});

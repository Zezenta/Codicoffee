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


document.addEventListener("DOMContentLoaded", () => {
    const cellphoneImages = [
        "https://zezenta.shop/placeholders/SHARE/phoneone.png",
        "https://zezenta.shop/placeholders/SHARE/phonetwo.png",
        "https://zezenta.shop/placeholders/SHARE/phonethree.png",
        "https://zezenta.shop/placeholders/SHARE/phonefour.png"
        // Añade más URLs de imágenes aquí
    ];
    const laptopImages = [
        "https://zezenta.shop/placeholders/SHARE/laptopone.png",
        "https://zezenta.shop/placeholders/SHARE/laptoptwo.png",
        "https://zezenta.shop/placeholders/SHARE/laptopthree.png",
        "https://zezenta.shop/placeholders/SHARE/laptopfour.png"
        // Añade más URLs de imágenes aquí
    ];
    let currentCellphoneIndex = 0;
    let currentLaptopIndex = 0;
    const currentCellphoneImage = document.getElementById("current-cellphone-image");
    const currentLaptopImage = document.getElementById("current-laptop-image");

    function changeCellphoneImage() {
        // Configura la nueva imagen
        currentCellphoneImage.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
        currentCellphoneImage.style.transform = "translateX(-50%)";
        currentCellphoneImage.style.opacity = "0";

        setTimeout(() => {
            currentCellphoneIndex = (currentCellphoneIndex + 1) % cellphoneImages.length;
            // Cambia la imagen actual por la nueva imagen
            currentCellphoneImage.href.baseVal = cellphoneImages[currentCellphoneIndex];
            currentCellphoneImage.style.transition = "none"; // Quita transición para reposicionar instantáneamente
            currentCellphoneImage.style.transform = "translateX(50%)";

            setTimeout(() => {
                // Segunda animación: la nueva palabra entra desde la derecha
                currentCellphoneImage.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
                currentCellphoneImage.style.transform = "translateX(0)";
                currentCellphoneImage.style.opacity = "1";
            }, 50); // Pequeña pausa para que la transición se vea fluida
        }, 500); // Duración de la animación
    }

    function changeLaptopImage() {
        // Configura la nueva imagen
        currentLaptopImage.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
        currentLaptopImage.style.transform = "translateX(-50%)";
        currentLaptopImage.style.opacity = "0";

        setTimeout(() => {
            currentLaptopIndex = (currentLaptopIndex + 1) % laptopImages.length;
            // Cambia la imagen actual por la nueva imagen
            currentLaptopImage.href.baseVal = laptopImages[currentLaptopIndex];
            currentLaptopImage.style.transition = "none"; // Quita transición para reposicionar instantáneamente
            currentLaptopImage.style.transform = "translateX(50%)";

            setTimeout(() => {
                // Segunda animación: la nueva palabra entra desde la derecha
                currentLaptopImage.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
                currentLaptopImage.style.transform = "translateX(0)";
                currentLaptopImage.style.opacity = "1";
            }, 50); // Pequeña pausa para que la transición se vea fluida
        }, 500); // Duración de la animación
    }

    setInterval(changeCellphoneImage, 3000); // Cambia la imagen del celular cada 3 segundos
    setInterval(changeLaptopImage, 3000); // Cambia la imagen de la laptop cada 3 segundos
});
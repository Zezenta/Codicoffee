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

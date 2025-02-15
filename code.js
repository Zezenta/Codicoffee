function adjustPresentationText() {
    const presentationText = document.getElementById('presentationtext');
    if (window.innerWidth < 768) {
        presentationText.innerHTML = 'Hacemos un<br>sitio web<br>para tu<br><span id="dynamic-word">Negocio</span>';
    } else {
        presentationText.innerHTML = 'Hacemos un sitio web<br>para tu <span id="dynamic-word">Negocio</span>';
    }
    wordElement = document.getElementById("dynamic-word"); //update reference
}

adjustPresentationText(); //adjust text on load

window.addEventListener('resize', adjustPresentationText); //adjust text on resize

document.addEventListener("DOMContentLoaded", () => {
    const words = ["Restaurante", "Bar", "Hotel", "Profesión"];
    let wordElement = document.getElementById("dynamic-word");
    let index = 0;

    function changeWord() {
        //update reference
        wordElement = document.getElementById("dynamic-word");

        wordElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s"; //transition
        wordElement.style.transform = "translateX(-50%)"; //move to the left
        wordElement.style.opacity = "0"; //disappear word

        setTimeout(() => {
            //change word and reposition
            index = (index + 1) % words.length;
            wordElement.textContent = words[index];
            wordElement.style.transition = "none"; //deletes transition to reposition instantly
            wordElement.style.transform = "translateX(50%)";

            setTimeout(() => {
                //second transition to reappear
                wordElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
                wordElement.style.transform = "translateX(0)";
                wordElement.style.opacity = "1";
            }, 50); //small delay to ensure the repositioning
        }, 500); //waits for the word to disappear
    }

    setInterval(changeWord, 3000); //change word every 3 seconds
});

//PORTFOLIO CARDS ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".portfolio__article"); //select all articles

    const showOnScroll = () => {
        articles.forEach(article => {
            const rect = article.getBoundingClientRect(); //get position of article
            if (rect.top < window.innerHeight * 0.85) { //if article is visible
                article.classList.add("visible"); //add visible class
            }
        });
    };

    window.addEventListener("scroll", showOnScroll); //execute on scroll
    showOnScroll(); //execute on load
});


document.addEventListener("DOMContentLoaded", () => { //LAPTOP & CELLPHONE SLIDESHOW
    //IMAGE SOURCES
    const cellphoneImages = [
        "https://zezenta.shop/placeholders/SHARE/phoneone.png",
        "https://zezenta.shop/placeholders/SHARE/phonetwo.png",
        "https://zezenta.shop/placeholders/SHARE/phonethree.png",
        "https://zezenta.shop/placeholders/SHARE/phonefour.png"
    ];
    const laptopImages = [
        "https://zezenta.shop/placeholders/SHARE/laptopone.png",
        "https://zezenta.shop/placeholders/SHARE/laptoptwo.png",
        "https://zezenta.shop/placeholders/SHARE/laptopthree.png",
        "https://zezenta.shop/placeholders/SHARE/laptopfour.png"
    ];

    //FOR CYCLING
    let currentCellphoneIndex = 0;
    let currentLaptopIndex = 0;

    const currentCellphoneImage = document.getElementById("current-cellphone-image");
    const currentLaptopImage = document.getElementById("current-laptop-image");

    //PRE LOAD THE IMAGES IN MEMORY
    const cellphoneCache = cellphoneImages.map((src) => {
        const img = new Image();
        img.src = src;
        return img;
    });
    const laptopCache = laptopImages.map((src) => {
        const img = new Image();
        img.src = src;
        return img;
    });

    function changeCellphoneImage() {
        currentCellphoneImage.style.transition = "transform 0.5s ease-in-out, opacity 0.5s"; //transition effect
        currentCellphoneImage.style.transform = "translateX(-50%)"; //move to the left
        currentCellphoneImage.style.opacity = "0"; //disappear image

        setTimeout(() => {
            currentCellphoneIndex = (currentCellphoneIndex + 1) % cellphoneImages.length; //INDEX CYCLING
            currentCellphoneImage.href.baseVal = cellphoneCache[currentCellphoneIndex].src; //USE PRE LOADED VERSIONS
            currentCellphoneImage.style.transition = "none"; //remove transition to reposition instantly
            currentCellphoneImage.style.transform = "translateX(50%)"; //move instantly to the right

            setTimeout(() => {
                currentCellphoneImage.style.transition = "transform 0.5s ease-in-out, opacity 0.5s"; //transition effect
                currentCellphoneImage.style.transform = "translateX(0)"; //move to the center smoothly
                currentCellphoneImage.style.opacity = "1"; //appear image
            }, 50);
        }, 500);
    }

    function changeLaptopImage() {
        currentLaptopImage.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
        currentLaptopImage.style.transform = "translateX(-50%)";
        currentLaptopImage.style.opacity = "0";

        setTimeout(() => {
            currentLaptopIndex = (currentLaptopIndex + 1) % laptopImages.length;
            currentLaptopImage.href.baseVal = laptopCache[currentLaptopIndex].src;
            currentLaptopImage.style.transition = "none";
            currentLaptopImage.style.transform = "translateX(50%)";

            setTimeout(() => {
                currentLaptopImage.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
                currentLaptopImage.style.transform = "translateX(0)";
                currentLaptopImage.style.opacity = "1";
            }, 50);
        }, 500);
    }

    setInterval(changeCellphoneImage, 3000); //cycle every 3 seconds
    setInterval(changeLaptopImage, 3000);
});
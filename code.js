//#NAVBAR CODE
//BURGER MENU
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle"); //Select the menu toggle button
    const menu = document.querySelector(".header__links-container"); //Select the menu container

    //Open/close menu when clicking the button
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); //Avoids the event from propagating to the document (closing the menu)
        menu.classList.toggle("active"); //Toggle the active class
    });

    //Close the menu when clicking a link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active"); //Remove the active class
        });
    });

    //Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) { //If the click is outside the menu and the button
            menu.classList.remove("active"); //Remove the active class from the menu
        }
    });
});

//NAVBAR LINKS ILLUMINATION
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
const observer = new IntersectionObserver(entries => { //create observer
    entries.forEach(entry => {
        const link = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`); //select the link with the same data-section attribute
        if (entry.isIntersecting) { //if the section is visible
            navLinks.forEach(link => link.classList.remove("active")); //remove active class from all links
            link.classList.add("active"); //add active class to the current link
        }
    });
}, {
    root: null, //Use the viewport
    threshold: 0.6 //60% of the section must be visible
});
sections.forEach(section => observer.observe(section));
//NAVBAR LINKS SCROLLING
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        const offset = 70; // Adjust this value to match the height of your navbar
        const sectionTop = section.offsetTop - offset;

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    });
});


//#PRESENTATION CODE
//CHANGE PRESENTATION TEXT DEPENDING ON WHETHER THE SCREEN IS SMALL OR LARGE
const brushStrokeSVG = `<span class="TextShape-node">
    <svg viewBox="0 0 300 60" width="100%" height="100%">
        <path id="brush-stroke" d="M 0,56.43 c 31.625,-1.5675000000000026 63.25,-4.845000000000006 126.5,-6.269999999999996 c 63.25,-1.4249999999999972 96.14000000000001,7.105427357601002e-15 126.5,0.5700000000000003 c 6.072000000000003,0.11399999999999721 -4.807000000000016,1.6244999999999976 -5.060000000000002,1.7100000000000009"></path>
    </svg>
</span>`;
function adjustPresentationText() {
    const presentationText = document.getElementById('presentationtext');
    if (window.innerWidth < 768) { //if the screen is small
        presentationText.innerHTML = 'Hacemos un <span style="display: block;">sitio web <span style="display: block;">para tu <span style="display: block;"><span style="display: block;"><span class="presentation__text__container"><span id="dynamic-word">Negocio</span>' + brushStrokeSVG + '</span></span>';
    } else {
        presentationText.innerHTML = 'Hacemos un sitio web <span style="display: block;">para tu <span class="presentation__text__container"><span id="dynamic-word">Negocio</span>' + brushStrokeSVG + '</span></span>';
    }
    wordElement = document.getElementById("dynamic-word"); //update reference
}
adjustPresentationText(); //adjust text on load
window.addEventListener('resize', adjustPresentationText); //adjust text on resize

//CHANGING WORDS DYNAMICALLY
document.addEventListener("DOMContentLoaded", () => {
    const words = ["Clínica", "Profesión", "Hotel", "Taller"];
    let wordElement = document.getElementById("dynamic-word"); //select the word element
    let brushElement = document.querySelector(".TextShape-node"); //select the brush element
    let brushPath = document.querySelector(".TextShape-node svg path"); //select the path element
    let index = 0;

    function changeWord() {
        //UPDATE REFERENCES
        wordElement = document.getElementById("dynamic-word");
        brushElement = document.querySelector(".TextShape-node"); //select the brush element
        brushPath = document.querySelector(".TextShape-node svg path"); //select the path element

        wordElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s"; //transition
        wordElement.style.transform = "translateX(-50%)"; //move to the left
        wordElement.style.opacity = "0"; //disappear word

        brushPath.style.transition = "stroke-dashoffset 0.5s ease-in-out"; //add transition for stroke dash offset
        brushPath.style.strokeDashoffset = "300"; //reset the stroke dash offset to animate it again

        setTimeout(() => {
            //change word and reposition
            index = (index + 1) % words.length;
            wordElement.innerHTML = words[index]; //to include HTML tags and new word
            wordElement.style.transition = "none"; //deletes transition to reposition instantly
            wordElement.style.transform = "translateX(50%)";

            setTimeout(() => {
                //second transition to reappear
                wordElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
                wordElement.style.transform = "translateX(0)";
                wordElement.style.opacity = "1";

                brushPath.style.transition = "stroke-dashoffset 0.5s ease-in-out"; //add transition for stroke dash offset
                brushPath.style.strokeDashoffset = "0"; //animate the stroke dash offset
            }, 50); //small delay to ensure the repositioning
        }, 500); //waits for the word to disappear
    }

    setInterval(changeWord, 3000); //change word every 3 seconds
});

//LAPTOP & CELLPHONE SLIDESHOW
document.addEventListener("DOMContentLoaded", () => { //execute when the page is loaded
    //IMAGE SOURCES
    const cellphoneImages = [
        "clinicaphone.png",
        "abogadosphone.png",
        "hotelphone.png",
        "automotrizphone.png"
    ];
    const laptopImages = [
        "clinicalaptop.png",
        "abogadoslaptop.png",
        "hotellaptop.png",
        "automotrizlaptop.png"
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


// SERVICES ANIMATION
document.addEventListener('DOMContentLoaded', function () {
    const servicesSection = document.getElementById('services');
    const serviceHeadings = document.querySelectorAll('.service__card h3');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adding class to each h3
                serviceHeadings.forEach(heading => {
                    heading.classList.add('underline-active');
                });

                observer.disconnect();
            }
        });
    }, {
        threshold: 0.5 // Activate when service is 30% visible
    });

    observer.observe(servicesSection);
});


//#PORTFOLIO CODE
//PORTFOLIO CARDS ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".portfolio__article");

    const showOnScroll = () => {
        let newDelay = 0; 

        articles.forEach(article => {
            const rect = article.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85 && !article.classList.contains("visible")) {
                setTimeout(() => {
                    article.classList.add("visible");
                }, newDelay);
                newDelay += 170; // Increase the delay for each article
            }
        });
    };

    //DEBOUNCE FUNCTION TO IMPROVE PERFORMANCE
    const debounce = (func, wait) => { // Debounce function to limit the rate at which a function can fire
        let timeout; // Variable to store the timeout ID
        return function(...args) { // Return a new function that takes any number of arguments
            clearTimeout(timeout); // Clear the previous timeout
            timeout = setTimeout(() => func.apply(this, args), wait); // Set a new timeout to call the function after the specified wait time
        };
    };

    window.addEventListener("scroll", debounce(showOnScroll, 10));
    showOnScroll(); // executes when the page is loaded
});

//DYNAMIC PLACEHOLDER IMAGES
const articles = document.querySelectorAll(".portfolio__article");
const placeholders = Array.from( document.querySelectorAll('.portfolio__placeholder') );
const imgs = Array.from( document.querySelectorAll('.portfolio__img') );

articles.forEach((_, index) => {
    placeholders[index].style.backgroundImage = `url('${imgs[index].src}')`;
    placeholders[index].style.backgroundPosition = "center";
    placeholders[index].style.backgroundRepeat = "no-repeat";
});


// ABOUT ARTICLES ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector('.about');
    const aboutMembers = document.querySelectorAll('.about__members');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutMembers.forEach((member, index) => {
                    // Animation for articles
                    member.classList.add('visible');

                    // Underline animation
                    setTimeout(() => {
                        const h3 = member.querySelector('h3');
                        h3.classList.add('underline-active');

                        // Animation for li
                        const lis = member.querySelectorAll('li');
                        lis.forEach((li, liIndex) => {
                            setTimeout(() => {
                                li.classList.add('visible');
                            }, 600 + liIndex * 300); // li delay
                        });
                    }, 600 + index); // underline delay
                });

                observer.unobserve(aboutSection); // Stop observing after first time
            }
        });
    }, {
        threshold: 0.3 // Activate when section is 30% visible
    });

    observer.observe(aboutSection);
});

// QUESTION ANIMATION
document.addEventListener('DOMContentLoaded', () => {
    const questionsSection = document.querySelector('.questions');
    const detailsItems = document.querySelectorAll('.questions__item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 300); 
            }
        });
    }, {
        threshold: 0.5
    });

    detailsItems.forEach(item => {
        observer.observe(item);
    });
});

// DETAIL ANIMATION
document.querySelectorAll(".questions__item").forEach((details) => {
    const content = details.querySelector(".questions__answer");
    const triangle = details.querySelector(".questions__triangle"); // Triangle icon

    details.addEventListener("click", (e) => {
        e.preventDefault();

        if (details.hasAttribute("open")) {
            //CLOSE ANIMATION
            content.style.height = `${content.scrollHeight}px`; // Set current height
            setTimeout(() => {  // Animation delay
                content.style.height = "0";
                content.style.opacity = "0";
                content.style.marginBottom = "0";
            }, 10);
            triangle.classList.remove("active"); // Reset to original rotatin
            setTimeout(() => details.removeAttribute("open"), 300); // Esperar animación y cerrar
        } else {
            // OPEN ANIMATION
            details.setAttribute("open", "true");
            content.style.height = "0"; // Reset to animate from 0
            triangle.classList.add("active"); // Rotate triangle
            setTimeout(() => { // Animation delay
                content.style.height = `${content.scrollHeight}px`;
                content.style.opacity = "1";
                content.style.marginBottom = "15px";
            }, 10);
        }
    });
});

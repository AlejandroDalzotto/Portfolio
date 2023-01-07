/**
 * Habilitar y desabilitar la navbar
 */

const btn = document.getElementById('btn')
const navbar = document.getElementById('nav')

btn.addEventListener('click', displaceNavbar)
navbar.addEventListener('touchend', displaceNavbar)

function displaceNavbar() {
    navbar.classList.toggle('active')
}

/**
 * Segruimiento del menu con el scroll
 */

const articles = document.querySelectorAll('article');
const navLinks = document.querySelectorAll('nav a');

const scrollActive = () => {
    const scrollPos = window.scrollY + navbar.offsetHeight;

    articles.forEach((section, index) => {
        if (scrollPos > section.offsetTop -50) {
            navLinks.forEach(link =>
                link.classList.remove('active-link')
            );
            navLinks[index].classList.add('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

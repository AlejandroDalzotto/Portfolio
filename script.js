
const btn = document.getElementById('btn')
const nav = document.getElementById('nav')

btn.addEventListener('click', displaceNavbar)
nav.addEventListener('touchend', displaceNavbar)

function displaceNavbar() {
    nav.classList.toggle('active')
}


const navbar = document.getElementById('nav');
const logo = document.getElementById('logo');
const anchor = document.querySelectorAll('#anchor');

document.addEventListener('scroll', () => {
        navbar.classList.toggle('nav-active', window.scrollY > 0);
        logo.classList.toggle('logo-active', window.scrollY > 0);
        anchor.forEach(anchors => anchors.classList.toggle('anchor-active', window.scrollY > 0))
    
})
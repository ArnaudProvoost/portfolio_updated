const navbar = document.querySelector('.navbar-right');
window.onscroll = () => {
    if (Math.round(window.scrollY / 10) > 100) {
        navbar.classList.add('navbar-active');
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-white');
    } else {
        navbar.classList.remove('navbar-active');
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-white');
    }
};

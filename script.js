window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

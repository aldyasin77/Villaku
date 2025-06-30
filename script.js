const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', (e) =>{
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navlinks.classList.toggle('active');
});
document.addEventListener('click', (e) =>{
    if (!navlinks.contains(e.target) && !hamburger.contains(e.target)){
        hamburger.classList.remove('active');
        navlinks.classList.remove('active');
    }
});
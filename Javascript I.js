window.addEventListener('scroll', function() {
    if(window.scrollY > 0){
        button.style.display = 'block',
    } else {
        button.style.display = 'none';
    }
})

document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


window.addEventListener('DOMContentLoaded', () => {

    const nav = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 50 ) {
            nav.classList.add('active')
        } else {
            nav.classList.remove('active')
        }
    })
});
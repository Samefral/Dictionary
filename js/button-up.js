let buttonUp = document.querySelector('.button-up');

window.onscroll = () => {
    if (pageYOffset > 2000) buttonUp.classList.remove('hidden');
    else buttonUp.classList.add('hidden');
}

buttonUp.addEventListener('click', () => {
    window.scrollTo(0, 0)
})
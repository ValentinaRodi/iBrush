import '../images/angle-arrow-up.png';

const form = document.querySelector('.form');
const popupBtn = form.querySelector('.form__select');
const popup = form.querySelector('.form__popup');
const popupText = form.querySelector('.select-text');
const arrow = form.querySelector('.btn__arrow');
let displayNone = true;

popupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(displayNone === true) {
        popup.classList.remove('display-none');
        popup.classList.add('display-block');
        displayNone = false;
        arrow.src = "images/angle-arrow-up.png";
    }  else {
        popup.classList.remove('display-block');
        popup.classList.add('display-none');
        displayNone = true;
        arrow.src = "images/angle-arrow-down.png";
    }
});

popup.addEventListener('click', (event) => {
    popupText.innerHTML = event.target.id;
    popupBtn.classList.add('popup__book_text');
});


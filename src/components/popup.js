const form = document.querySelector('.form');
const popupBtn = form.querySelector('.info__input_btn');
const popup = form.querySelector('.form__popup');
const arrow = form.querySelector('.btn__arrow');
let displayNone = true;

popupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(displayNone === true) {
        popup.classList.remove('display-none');
        popup.classList.add('display-block');
        displayNone = false;
        arrow.src = "./images/angle-arrow-up.png";
    }  else {
        popup.classList.remove('display-block');
        popup.classList.add('display-none');
        displayNone = true;
        arrow.src = "./images/angle-arrow-down.png";
    }
});

popup.addEventListener('click', (event) => {
    console.log(popupBtn.data)
    popupBtn.innerHTML = event.target.id;
    popupBtn.classList.add('popup__book_text');
});


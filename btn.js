const checkbox = document.getElementById('checkbox');
const emailInput = document.getElementById('email-input');
const button = document.querySelector('.mailing__list__btn');

function toggleButtonState() {
    // proverim dac este pusa galacica sii scris emailu
    button.disabled = !(checkbox.checked && emailInput.value.trim() !== '');
}
toggleButtonState();//iznacialina facem butonu neactivat

checkbox.addEventListener('change', toggleButtonState);
emailInput.addEventListener('input', toggleButtonState);
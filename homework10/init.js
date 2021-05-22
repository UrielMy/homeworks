const LOGIN_CHAR_SET = 'admin';
const PASS_CHAR_SET = 'password123'

let loginEl = document.querySelector('.login-input');
let passwordEl = document.querySelector('.password-input');
let loginBtnEl = document.querySelector('.login-btn');
let loginResultEl = document.querySelector('.login-result');
let loginFormEl = document.querySelector('.login-form');

const inputBlur = () => {
	if(loginEl.value != '' && passwordEl.value != '') {
		loginBtnEl.removeAttribute('disabled');
	}
	else {
		loginBtnEl.setAttribute('disabled', true);
	}
}
const loginClick = (evt) => {
	evt.preventDefault();
	if(loginEl.value == LOGIN_CHAR_SET && passwordEl.value == PASS_CHAR_SET) {
		loginFormEl.style.display = 'none';
		loginResultEl.innerText = 'Вы ввели правильно! Ура';

	}
	else {
		loginResultEl.innerText = 'Вы ввели не правильно!';
		loginBtnEl.setAttribute('disabled', true);
		loginEl.value = '';
		passwordEl.value = '';
	}
}
loginEl.addEventListener('blur', inputBlur); // место blur тестировал input и он позволяет разблокировать кнопку сразу
passwordEl.addEventListener('blur', inputBlur);
loginBtnEl.addEventListener('click', loginClick);
let loginEl = document.querySelector(".login-input");
let passwordEl = document.querySelector(".password-input");
let loginBtnEl = document.querySelector(".login-btn");
let loginResultEl = document.querySelector(".login-result");
let loginFormEl = document.querySelector(".login-form");

const inputBlur = () => {
  if (loginEl.value != "" && passwordEl.value != "") {
    loginBtnEl.removeAttribute("disabled");
  } else {
    loginBtnEl.setAttribute("disabled", true);
  }
};
const loginClick = (evt) => {
  evt.preventDefault();
  authCheck(loginEl, passwordEl, loginFormEl, loginResultEl, loginBtnEl);
};
function authCheck(emailEl, passwordEl, formEl, resultEl, loginBtnEl) {
  let loginValues = {
    email: emailEl.value,
    password: passwordEl.value
  };
  loginValues = JSON.stringify(loginValues);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://reqres.in/api/login", true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    if (xhr.status == 200) {
      formEl.remove();
      resultEl.innerText = "Вы ввели правильно! Ура";
    } else {
      resultEl.innerText = "Вы ввели не правильно!";
      loginBtnEl.setAttribute("disabled", true);
      emailEl.value = "";
      passwordEl.value = "";
    }
  };
  xhr.send(loginValues);
}
loginEl.addEventListener("blur", inputBlur);
passwordEl.addEventListener("blur", inputBlur);
loginBtnEl.addEventListener("click", loginClick);

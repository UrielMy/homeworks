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
  authCheck(loginEl.value, passwordEl.value, function() {
    loginFormEl.remove();
    loginResultEl.innerText = "Вы ввели правильно! Ура";
  }, function() {
    loginResultEl.innerText = "Вы ввели не правильно!";
    loginBtnEl.setAttribute("disabled", true);
    loginEl.value = "";
    passwordEl.value = "";
  });
};
function authCheck(email, password, onSuccess, onFail) {
  let loginValues = {
    email: email,
    password: password,
  };
  loginValues = JSON.stringify(loginValues);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://reqres.in/api/login", true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    if (xhr.status == 200) {
      onSuccess();
    } else {
      onFail();
    }
  };
  xhr.send(loginValues);
}
loginEl.addEventListener("blur", inputBlur);
passwordEl.addEventListener("blur", inputBlur);
loginBtnEl.addEventListener("click", loginClick);

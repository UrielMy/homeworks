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
  authCheck(
    loginEl.value,
    passwordEl.value,
    function () {
      loginFormEl.remove();
      getUsersInfo(function (e) {
        const response = JSON.parse(e.target.response);
        response.data.forEach((element) => {
          let divEl = document.createElement("div");
          let divTemplate = document.querySelector("#new-div").innerHTML;
          divEl.innerHTML = divTemplate
            .replace("{{avatar}}", element.avatar)
            .replace("{{first_name}}", element.first_name)
            .replace("{{last_name}}", element.last_name);
          loginResultEl.append(divEl);
        });
      });
    },
    function () {
      loginResultEl.innerText = "Вы ввели не правильно!";
      loginBtnEl.setAttribute("disabled", true);
      loginEl.value = "";
      passwordEl.value = "";
    }
  );
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
function getUsersInfo(receipt) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users?page=1", true);
  xhr.send();
  xhr.onload = function (e) {
    receipt(e);
  };
}
loginEl.addEventListener("blur", inputBlur);
passwordEl.addEventListener("blur", inputBlur);
loginBtnEl.addEventListener("click", loginClick);

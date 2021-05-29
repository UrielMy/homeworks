let btnEl = document.querySelector('.todo-btn');
let inputEl = document.querySelector('.todo-input');
let ulEl = document.querySelector('.todo-list');

btnEl.onclick = function() {
  let liEl = document.createElement('li');
  liEl.innerText = inputEl.value;
  ulEl.append(liEl);
  inputEl.value = '';
}
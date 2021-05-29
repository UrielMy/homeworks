let btnEl = document.querySelector('.todo-btn');
let inputEl = document.querySelector('.todo-input');
let ulEl = document.querySelector('.todo-list');

function deleteBtn(evt) {
  evt.target.parentNode.remove();
}
function checkBoxBtn(evt) {
  if(evt.target.checked) {
    evt.target.parentNode.style.textDecoration = 'line-through';
  }
  else {
    evt.target.parentNode.style.textDecoration = 'none';
  }
}
function normalTime() {
  let date = new Date();
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  currentHours = ('0' + currentHours).slice(-2);
  currentMinutes = ('0' + currentMinutes).slice(-2);
  return `${currentHours}:${currentMinutes} `;
}
function cloneBtn(evt) {
  let cloneLiEl = evt.target.parentNode.cloneNode(true);
  cloneLiEl.querySelector('span').innerHTML = normalTime();
  ulEl.append(cloneLiEl);
  let clonePack = cloneLiEl.querySelectorAll('.clone-btn');
  for(let i = 0; i < clonePack.length; i++){
    clonePack[i].addEventListener('click', cloneBtn);
  }
  clonePack = cloneLiEl.querySelectorAll('.delete-btn');
  for(let i = 0; i < clonePack.length; i++){
    clonePack[i].addEventListener('click', deleteBtn);
  }
  clonePack = cloneLiEl.querySelectorAll('.checkbox-btn');
  for(let i = 0; i < clonePack.length; i++){
    clonePack[i].addEventListener('click', checkBoxBtn);
  }
}

const onClickBtn = () => {
  let checkBoxEl = document.createElement('input');
  let deleteBtnEl = document.createElement('button');
  let cloneBtnEl = document.createElement('button');
  cloneBtnEl.innerText = 'Clone';
  cloneBtnEl.classList.add('clone-btn');
  cloneBtnEl.addEventListener('click', cloneBtn);
  deleteBtnEl.innerText = 'Delete';
  deleteBtnEl.classList.add('delete-btn');
  deleteBtnEl.addEventListener('click', deleteBtn);
  checkBoxEl.setAttribute('type', 'checkbox');
  checkBoxEl.classList.add('checkbox-btn');
  checkBoxEl.addEventListener('click', checkBoxBtn);
  let timeEl = document.createElement('span');
  let liEl = document.createElement('li');
  timeEl.innerHTML = normalTime();
  liEl.innerText = inputEl.value;
  liEl.prepend(timeEl);
  liEl.append(checkBoxEl);
  liEl.append(deleteBtnEl);
  liEl.append(cloneBtnEl);
  ulEl.append(liEl);
  inputEl.value = '';
}
btnEl.addEventListener('click', onClickBtn);
function Accordion(element) {
  this.element = element;
  this.toggle = toggle;
  this.addBlock = addBlock;
  this.getOpenIndexes = getOpenIndexes;
  this.openAll = openAll;
  this.closeAll = closeAll;
}
const mainAccordion = new Accordion(document.getElementById("accordion"));
let openAllBtnEl = document.querySelector(".open-all-btn");
let closeAllBtnEl = document.querySelector(".close-all-btn");
openAllBtnEl.addEventListener("click", openAll.bind(mainAccordion));
closeAllBtnEl.addEventListener("click", closeAll.bind(mainAccordion));
addEventForTitles();
const addBlockBtn = document.querySelector(".add-block-btn");
addBlockBtn.addEventListener("click", addBlockFunction);
//functions
function addBlockFunction() {
  const titleElValue = document.querySelector(".title-value").value;
  const descElValue = document.querySelector(".description-value").value;
  mainAccordion.addBlock(titleElValue, descElValue);
}
function addEventForTitles() {
  document.querySelectorAll(".title").forEach((e) => {
    e.addEventListener("click", onClickToggle);
  });
}
function onClickToggle() {
  this.parentNode.querySelector(".content").classList.toggle("active");
}
function toggle(index) {
  this.element.querySelectorAll(".content")[index].classList.toggle("active");
}
function addBlock(title, description) {
  let blockEl = document.createElement("div");
  let blockTemplate = document.querySelector("#newBlock").innerHTML;
  blockEl.innerHTML = blockTemplate
    .replace("{{title}}", title)
    .replace("{{content}}", description);
  this.element.append(blockEl);
  addEventForTitles();
}
function openAll() {
  this.element.querySelectorAll(".content").forEach((e) => {
    e.classList.add("active");
  });
}
function closeAll() {
  this.element.querySelectorAll(".content").forEach((e) => {
    e.classList.remove("active");
  });
}
function getOpenIndexes() {
  let activeElement = this.element.querySelectorAll(".content");
  let activeElArray = [];
  for (let i = 0; i < activeElement.length; i++) {
    if (activeElement[i].classList.contains("active")) {
      activeElArray.push(i);
    }
  }
  return activeElArray;
}

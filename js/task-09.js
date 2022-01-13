



const btnChangeColorRef = document.querySelector('button.change-color');
const btnChangeColorClick = btnChangeColorRef.addEventListener('click', onTargetButtonClick);
const bodyRef = document.querySelector('body');

function onTargetButtonClick() {
  const backgroundColorBody = bodyRef.style.backgroundColor = getRandomHexColor();
  document.querySelector('span.color').textContent = backgroundColorBody;
}
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
}
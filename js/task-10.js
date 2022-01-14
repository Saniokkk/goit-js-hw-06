function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateRef = document.querySelector('button[data-create]')
const btnDestroyRef = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('div#boxes')

btnCreateRef.addEventListener('click',createBoxes)
btnDestroyRef.addEventListener('click', destroyBoxes)

function createBoxes() {
  let sizeBox = 20;
  const boxesArr = [];
  const amount = document.querySelector("#controls input").value;
  
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div'); 
    
    sizeBox += 10;
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArr.push(box);
  }
  return boxes.append(...boxesArr);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}


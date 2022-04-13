const inputEl = document.querySelector(`input`)
const buttonElCreate = document.querySelector(`button[data-create]`)
const buttonElDestroy = document.querySelector(`button[data-destroy]`)
const divEl = document.querySelector(`#boxes`)
let amount = 0
let counter = 30

inputEl.addEventListener(`input`, (event) => {
  amount = Number(event.currentTarget.value)
})

function createBoxes() {
  const boxes = []
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement(`div`)
    box.style.width = `${counter}px`
    box.style.height = `${counter}px`
    box.style.background = getRandomHexColor()
    counter += 10
    boxes.push(box)
  }
  divEl.append(...boxes)
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
buttonElCreate.addEventListener(`click`, createBoxes)
function destroyBoxes() {
  divEl.innerHTML = ''
}

buttonElDestroy.addEventListener(`click`, destroyBoxes)

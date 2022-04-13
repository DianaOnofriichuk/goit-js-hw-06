const buttonEL = document.querySelector(`.change-color`)
const spanEl = document.querySelector(`.color`)
const bodyEl = document.querySelector(`body`)
buttonEL.addEventListener(`click`, () => {
  bodyEl.style.background = getRandomHexColor()
  spanEl.textContent = getRandomHexColor()
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

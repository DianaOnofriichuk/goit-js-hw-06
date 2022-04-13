let counterValue = 0
const buttonDec = document.querySelector(`button[data-action="decrement"]`)
const buttonInc = document.querySelector(`button[data-action="increment"]`)
const value = document.querySelector(`#value`)
buttonInc.addEventListener('click', () => {
  counterValue += 1
  value.innerHTML = counterValue
})
buttonDec.addEventListener('click', () => {
  counterValue -= 1
  value.innerHTML = counterValue
})

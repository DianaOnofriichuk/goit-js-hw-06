const inputEl = document.querySelector(`#name-input`)
const spanEl = document.querySelector(`#name-output`)

inputEl.addEventListener(`input`, (event) => {
  console.log(event)
  spanEl.textContent = event.currentTarget.value
})

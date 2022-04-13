const formEl = document.querySelector(`.login-form`)
formEl.addEventListener(`submit`, onFormSubmit)
function onFormSubmit(event) {
  event.preventDefault()
  const emailName = event.currentTarget.elements.email
  const passwordName = event.currentTarget.elements.password
  if (emailName.value.length < 1 || passwordName.value.length < 1) {
    window.alert(`Заповніть, будь ласка, всі поля`)
  } else {
    class Values {
      constructor(email, password) {
        this.email = email
        this.password = password
      }
    }
    const value = new Values(emailName.value, passwordName.value)
    console.log(value)
  }
  event.currentTarget.reset()
}

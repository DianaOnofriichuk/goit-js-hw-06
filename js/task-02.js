const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const list = document.querySelector('#ingredients')

const createList = ingredients.map((item) => {
  const itemEl = document.createElement('li')
  itemEl.textContent = item
  itemEl.classList.add(`item`)
  return itemEl
})

list.append(...createList)

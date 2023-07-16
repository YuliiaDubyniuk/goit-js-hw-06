const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const createdList = ingredients.map(item => {
  const liEl = document.createElement("li");
  liEl.textContent = item;
  liEl.classList.add("item");

  return liEl;
});

listEl.append(...createdList);
console.log(listEl);

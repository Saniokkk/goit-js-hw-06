const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

  const itemsIngredients = ingredients.map(item => {
    const itemList = document.createElement('li');

    itemList.textContent = item;
    itemList.classList.add('item');
    return itemList;
});

listIngredients.append(...itemsIngredients);


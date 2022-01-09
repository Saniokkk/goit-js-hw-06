const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const listIngredients = document.querySelector('#ingredients')
  const itemsIngredients = [];

  for (let i = 0; i < ingredients.length; i += 1) {
    const itemList = document.createElement('li');
    
    itemList.textContent = ingredients[i];
    itemList.classList.add('item');
    itemsIngredients.push(itemList);

  }

listIngredients.append(...itemsIngredients);



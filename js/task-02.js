const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector("#ingredients")
const listEl = [];
ingredients.forEach(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
  listEl.push(item);
});

list.append(...listEl);
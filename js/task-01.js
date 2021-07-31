//ВАРИАНТ 1

// const categoriesEl = document.querySelectorAll('#categories');
// console.log(`В списке ${categoriesEl.children.length} категории:`);
// const titleEl = document.querySelectorAll('h2');
// titleEl.forEach(name => {
//   console.log(`Категория: ${name.textContent}`);
//   console.log(
//     `Количество элементов: ${name.parentNode.querySelectorAll('li').length}`
//   );
// });

//ВАРИАНТ 2

const categoriesEl = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesEl.length} категории:`);
categoriesEl.forEach(item =>{
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`)
}
);
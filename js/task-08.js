const refs = {
    buttonCreate: document.querySelector('[data-action="render"]'),
    buttonRefresh: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
    boxesQuantity: document.querySelector('#controls input'),
  };
  
  function colorRandomizer() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
  }
  
  function createBoxes(amount) {
    const boxesList = [];
    console.log(boxesList);
    let size = 0;
    for (let i = 0; i <= amount; i += 1) {
      boxesList[i] = document.createElement('div');
      boxesList[i].style.height = size + 'px';
      boxesList[i].style.width = size + 'px';
      boxesList[i].style.backgroundColor = colorRandomizer();
      size += 30;
    }
    refs.boxes.append(...boxesList);
  }
    const boxesDiv = document.createElement('div')
    boxesDiv.classList.add('boxes__div')
 

  refs.buttonCreate.addEventListener('click', event =>
    createBoxes(refs.boxesQuantity.value)
  );
  
  refs.buttonRefresh.addEventListener(
    'click',
    event => (refs.boxes.innerHTML = '',
    refs.boxesQuantity.value=' ')
  );
const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

const onInputChange = (event) => {
    nameLabel.textContent = event.currentTarget.value.trim() || 'незнакомец';

}

input.addEventListener('input', onInputChange);
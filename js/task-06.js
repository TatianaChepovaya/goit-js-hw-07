
const input = document.querySelector('#validation-input');

const onInputBlur = (event) => {

    if (event.currentTarget.value.length !== Number(input.dataset.length)) {
        input.classList.add('invalid')
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid')
    }
 }
input.addEventListener('blur', onInputBlur)
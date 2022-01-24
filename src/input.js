const $input = document.querySelector('.form__input');
console.log($input);

$input.addEventListener('keyup', (e) => {
  const key = e.keyCode || e.which;

  if ((key >= 48 && key <= 57) || key === 46) {
    return true;
  } else {
    return false;
  }

})
// Set the input event listener "keypress"
const setInputListener = () => {
  console.log("Show one time Input");
  const $input = document.querySelector('.form__input');
  
  $input.addEventListener('keypress', (e) => {
    const key = e.keyCode || e.which;
    
    if (!((key >= 48 && key <= 57) || key === 46)) {
      e.preventDefault();
      return;
    } 
  })
}

// Set the form event listener "submit"
const setSubmitListener = () => {
  console.log("Show one time Submit");
  const $form = document.querySelector('.form');
  
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.location.value);
  })
}

export { setInputListener, setSubmitListener };
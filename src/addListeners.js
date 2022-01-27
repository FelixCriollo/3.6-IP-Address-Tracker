import printData from "./printData.js";

// Set the input event listener "keypress"
const setInputListener = () => {
  console.log("Show one time Input");
  const $input = document.querySelector('.form__input');
  
  // Values if the key value of the input field is a number or dot
  $input.addEventListener('keypress', (e) => {
    const key = e.keyCode || e.which;
    
    if (!((key >= 48 && key <= 57) || key === 46)) {
      e.preventDefault();
      return;
    } 
  })
}

// Set the form event listener "submit"
const setSubmitListener = (mapInfo) => {
  console.log("Show one time Submit");
  const $form = document.querySelector('.form');

  // Change the map data in the DOOM and the map view
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    e.target.location.value === "" 
    ? printData("8.8.8.8", mapInfo)
    : printData(e.target.location.value, mapInfo)    
  })
}

export { setInputListener, setSubmitListener };
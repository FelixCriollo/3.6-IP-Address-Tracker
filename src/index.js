import { setInputListener, setSubmitListener } from "./addListeners.js";
import printData from "./printData.js";
import addMap from "./addMap.js";

// Declaring map variables
let mapInfo = addMap();

// Print coordinate data on page reload the page
printData("8.8.8.8");

// Set event listeners
setInputListener();
setSubmitListener(mapInfo);
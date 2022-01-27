import getData from "./services/request.js";

const printData = async (input = "8.8.8.8", myMapData) => {
  console.log("change site");

  // Desestructuring data from myMapData
  const {myMap, myIcon, layerG} = myMapData;

  // Obtains the data from the input
  const data = await getData(input);
  
  // Almacening the DOM elements
  const $ip = document.getElementById("ip");
  const $location = document.getElementById("location");
  const $timezone = document.getElementById("timezone");
  const $isp = document.getElementById("isp");

  // Setting the values of the DOM elements
  $ip.innerHTML = data.ip;
  $location.innerHTML = `${data.location.city}, ${data.location.region}`;
  $timezone.innerHTML = `UTC ${data.location.timezone}`; 
  $isp.innerHTML = data.isp;

  // Keep the locations in data
  const latitude = data.location.lat;
  const longitude = data.location.lng;
  console.log(latitude, longitude);

  // Change map view
  layerG.clearLayers();  
  myMap.panTo([latitude, longitude], 14);
  L.marker([latitude, longitude], {icon: myIcon}).addTo(layerG)
    .bindPopup(data.location.city)
    .openPopup();
}

export default printData;
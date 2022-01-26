import getData from "./services/request.js";

const printData = async (input = "8.8.8.8") => {
  const data = await getData(input);
  console.log(data);
  
  const $ip = document.getElementById("ip");
  const $location = document.getElementById("location");
  const $timezone = document.getElementById("timezone");
  const $isp = document.getElementById("isp");

  $ip.innerHTML = data.ip;
  $location.innerHTML = `${data.location.city}, ${data.location.region}`;
  $timezone.innerHTML = `UTC ${data.location.timezone}`; 
  $isp.innerHTML = data.isp;

//   var myMap = L.map('myMap').setView([data.location.lat, data.location.lng], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);
}

export default printData;
let myMap = L.map('myMap').setView([51.505, -0.09], 13);

console.log("hola");

L.tileLayer('https://tile.openstreetmap.org/${z}/${x}/${y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 12,
}).addTo(myMap);

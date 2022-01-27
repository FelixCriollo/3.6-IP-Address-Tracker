const addMap = () => {
  let myMap = L.map('myMap').setView([37.38605, -122.08385], 12);
  const myIcon = L.icon({
      iconUrl: '../images/icon-location.svg',
      iconSize: [40, 50],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
  });
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  let layerG = L.layerGroup().addTo(myMap);
  layerG.clearLayers();  
  L.marker([37.38605, -122.08385], {icon: myIcon}).addTo(layerG)
    .bindPopup("Mountain View")
    .openPopup();
    
  return {myMap, myIcon, layerG};
}

export default addMap;
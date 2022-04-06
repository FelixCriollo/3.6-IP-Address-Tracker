const getData = async (input = "8.8.8.8") => {
  try {
    const getData = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${env.API}&ipAddress=${input}`)
    const data = await getData.json();
  
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getData;

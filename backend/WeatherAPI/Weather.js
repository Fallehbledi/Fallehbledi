// const WeatherMSN = require('msn-weather-api');

// module.exports={
//     getWeather: async (req,res) => {
//         const weather = new WeatherMSN('en', 'c');
//         const current = await weather.getCurrentData('sousse');
//         const forecast= await weather.getForecastData('sousse', 1)
//         const forecast1= await weather.getForecastData('sousse', 2)
//         const forecast2= await weather.getForecastData('sousse', 3)
//         const forecast3 = await weather.getForecastData('sousse', 4)
//         const forecast4 = await weather.getForecastData('sousse', 5)
//         current.weather; // Cloudy
//         forecast.weather;
//         forecast1.weather;
//         forecast2.weather;
//         forecast3.weather;
//         forecast4.weather;
//         res.send([current,forecast,forecast1,forecast2,forecast3,forecast4])
//     }
// }

// fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sousse%20Tunisia?unitGroup=metric&include=days%2Ccurrent%2Calerts&key=9PBBQHHUNP77LD88TPFGWX7L5&contentType=json", {
//     "method": "GET",
//     "headers": {
//     }
//     })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.error(err);
//   });
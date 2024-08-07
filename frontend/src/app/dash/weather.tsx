import { error } from "console";

async function getData() {
    const res = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sousse%20Tunisia?unitGroup=metric&include=days%2Ccurrent%2Calerts&key=9PBBQHHUNP77LD88TPFGWX7L5&contentType=json",
      {
        method: "GET",
        headers: {},
      }
    )
    if (!res.ok) {
      console.log(error)
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  
  export default async function Page() {
    const data = await getData(); 
    const current = data.currentConditions; 
    console.log(data)
    return (
      <div className='flex flex-col gap-y-3 mb-5 p-4 bg-blue-950 bg-opacity-20 rounded-lg border border-white border-opacity-40'>
            <div>
              <p>{current.conditions}</p>
              <p>{current.datetime}</p>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-3'>
              <img
                src={require(`../../../../public/image/WeatherIcons/${current.icon}.svg`)}
                alt='Weather Icon'
                width='50'
                className='w-16 h-16 md:w-20 md:h-20'
              />
              <h3 className='text-3xl'>{current.temp}°</h3>
              <div>
                <p>{current.conditions}</p>
                <p>Feels like {current.feelslike}°</p>
              </div>
            </div>
            <p>The skies will be mostly clear. The low will be {current.tempmin}°.</p>
            <div className='flex flex-wrap gap-5'>
              <div>
                <p>Wind</p>
                <p>{current.windspeed} km/h</p>
              </div>
              <div>
                <p>Humidity</p>
                <p>{current.humidity}%</p>
              </div>
              <div>
                <p>Visibility</p>
                <p>{current.visibility} km</p>
              </div>
              <div>
                <p>Pressure</p>
                <p>{current.pressure} hPa</p>
              </div>
              <div>
                <p>Dew point</p>
                <p>{current.dew}</p>
              </div>
            </div>
          </div>
  )}
import React from 'react'
import weatherIcon from '../../../public/image/SunnyDayV3.svg'
import Image from 'next/image'
const WeatherCard = async  () => {
  const getWeather = async()=>{
    const weather = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sousse%20Tunisia?unitGroup=metric&include=days%2Ccurrent%2Calerts&key=9PBBQHHUNP77LD88TPFGWX7L5&contentType=json", {
      method: "GET",
      headers: {}
    })
    return weather.json()
  }
  const weather = await getWeather()
  return (
    <>
    <div className="bg-gradient-to-br  flex items-center justify-center">
  <div className="bg-white p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-md">
    <div>
    <Image src={weatherIcon}></Image>
    <p className="text-center text-gray-500 mt-2 text-sm">{weather.currentConditions.conditions}</p>
      </div>
    <div>
      <p className="text-5xl font-bold text-right text-gray-900">{weather.currentConditions.temp}°</p>
      <p className="text-gray-500 text-sm">{weather.address}</p>
    </div>
  </div>

  <div className="absolute bottom-2 text-white opacity-50 text-sm">
   <img src={weatherIcon}></img>
  </div>
</div>
</>
  )
}

export default WeatherCard
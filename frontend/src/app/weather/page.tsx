"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import logo from '../../../../public/image/WeatherIcons/clear-day.svg'
import moment from 'moment'
import { FaPenToSquare } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import weatherIcon from '../../../public/image/SunnyDayV3.svg'

import getUser from '@/helpers/getUser';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Page () {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [Adress, setAdress] = useState('');
  const [show,setShow]= useState(false)
  const [refetech, setRefetch] = useState(false);
  useEffect(() => {

    const GetUser=async()=>{
      const user:any = await getUser()
setAdress(user.address)    
}
    GetUser()
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${Adress}%20Tunisia?unitGroup=metric&include=days%2Ccurrent%2Calerts&key=9PBBQHHUNP77LD88TPFGWX7L5&contentType=json`, {
      method: "GET",
      headers: {}
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(data => setData(data))
    .catch(error => setError(error.message));
  
  }, [refetech]);
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const current = data.currentConditions;
  console.log(current);
  
  const forecast = data.days.slice(1, 7); // Get the next 7 days forecast
  const chartData = {
    labels: forecast.map((day: any) => day.datetime),
    datasets: [
      {
        label: 'High Temperature',
        data: forecast.map((day: any) => day.tempmax),
        borderColor: 'rgba(255, 99, 132, 1)', // bright red
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // light red
        fill: true,
      },
      {
        label: 'Low Temperature',
        data: forecast.map((day: any) => day.tempmin),
        borderColor: 'rgba(54, 162, 235, 1)', // bright blue
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // light blue
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'black', // black labels for better visibility
        },
      },
      title: {
        display: true,
        text: 'Temperature Trends',
        color: 'black', // black title for better visibility
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'black', // black labels for better visibility
        },
      },
      y: {
        ticks: {
          color: 'black', // black labels for better visibility
        },
      },
    },
  };

  return (
    <div className=" py-32  mx-auto p-32   ">
            <div className=" rounded-xl p-6 text-gray-900 text-center">
              <div className="flex items-center justify-center">
                <input type="text" onChange={(e)=>setAdress(e.target.value)} placeholder='Your Address' className={show ? "border rounded text-sm w-32 h-10 mr-3 p-2 ":"bg-gray-200 hidden w-32 h-10"}/>
                <h2 className={show?"text-2xl hidden font-bold ":"text-2xl font-bold  "}>{Adress}, </h2>
                <h2 className="text-2xl font-bold">Tunisia</h2>
                <FaCheckCircle onClick={()=>setRefetch(!refetech)} className={show? 'ml-4 cursor-pointer text-[#058f1a]' :'hidden'}/>
                <FaPenToSquare onClick={()=>setShow(!show)} className={show?'hidden':'ml-4 cursor-pointer text-[#058f1a]'}/> 
              </div>

                <p className="text-sm ">{moment().calendar()}</p>
                <div className="mt-4 flex items-center justify-center space-x-4">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center">
                    <Image src={weatherIcon} alt=''></Image>
                  </div>
                    <div className="text-6xl font-bold">{current.temp}°</div>
                </div>
                <p className="text-lg mt-2 ">{current.conditions}</p>
                <div className="mt-4 flex justify-center space-x-20 text-gray-900">
                    <div>
                        <p className="text-sm">Wind Speed</p>
                        <p>{current.windspeed} mph</p>
                    </div>
                    <div>
                        <p className="text-sm">Sunset</p>
                        <p>{current.sunset}</p>
                    </div>
                    <div>
                        <p className="text-sm">Sunrise</p>
                        <p>{current.sunrise}</p>
                    </div>
                    <div>
                        <p className="text-sm">Rain</p>
                        <p>{current.dew} %</p>
                    </div>
                    <div>
                        <p className="text-sm">Humidity</p>
                        <p>{current.humidity}</p>
                    </div>
                </div>
            </div>

            <div className="text-gray-900 mt-8">
                <h3 className="text-lg font-semibold ">Today's Weather</h3>
                <div className="mt-4 flex justify-between text-center text-gray-900">
                    {["3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"].map((time, idx) => (
                        <div key={idx} className="flex flex-col items-center bg-black bg-opacity-5 rounded-xl p-4 w-32 ">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <div>
                                <Image src={weatherIcon} alt=''></Image>
                                </div>
                            </div>
                            <p className="mt-2">{time}</p>
                            <p className="text-sm">{idx * 2 + 28}°</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-semibold">Next 5 Days</h3>
                <div className="mt-4 space-y-4 text-gray-700">
                    {["Sun 17/08", "Sat 18/08", "Mond 19/08"].map((day, idx) => (
                        <div key={idx} className="flex justify-between  items-center">
                                <div className="w-10 h-10 border rounded-full flex items-center justify-center">
                                    <div>☀️</div>
                                </div>
                                <div>
                                    <p>{day}</p>
                                    <p className="text-sm text-gray-500">{33 - idx}° Low / {35 + idx * 3}° High</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm">Wind</p>
                                    <p>{12 - idx * 5}mph</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm">Sunset</p>
                                    <p>{current.sunset} </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm">Sunrise</p>
                                    <p>{current.sunrise}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm">Rain</p>
                                    <p>0%</p>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  );
}

export default Page;










 {/*<div className='py-6 md:max-w-5xl mx-auto mb-4 w-full px-4'>
      <div className='flex-1 p-3 text-gray-900'>
        <div className='max-w-sm w-full lg:max-w-full shadow px-6 py-6 rounded-lg mb-6 mt-20 bg-green-300 mx-auto'>
          <div className='flex flex-col gap-y-3 mb-5 p-4 bg-blue-950 bg-opacity-20 rounded-lg border border-gray-900 border-opacity-40'>
            <div>
              <p>{current.conditions}</p>
              <p>{current.datetime}</p>
            </div>
            <div className='flex items-center gap-3'>
              <Image
                src={require(`../../../public/image/WeatherIcons/${current.icon}.svg`)}
                alt='Weather Icon'
                width='50'
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
          <div>
            <h2 className='text-lg font-bold'>7 days forecast</h2>
            <div className='flex flex-wrap gap-2 w-full'>
              <div className='flex-1 p-2 bg-blue-950 bg-opacity-20 rounded-lg border border-white border-opacity-40'>
                <p>Today</p>
                <div className='flex justify-between'>
                  <div>
                    <p>⛅</p>
                    <p>{current.temp}°</p>
                  </div>
                  <div className='flex flex-col items-end'>
                    <p>{current.conditions}</p>
                    <p>{current.precipprob}%</p>
                  </div>
                </div>
              </div>
              {forecast.map((day: any, idx: any) => (
                <div
                  className='flex-1 p-2 bg-blue-950 bg-opacity-20 rounded-lg border border-white border-opacity-40'
                >
                  <p>{day.datetime}</p>
                  <div className='flex gap-3 justify-center items-center'>
                    <Image src ={require(`../../../public/image/WeatherIcons/${day.icon}.svg`)} alt='' width='50'/>
                    <div>
                      <p>{day.tempmax}°</p>
                      <p>{day.tempmin}°</p>
                      <p>{day.precipprob}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-6 bg-gray-200 rounded-xl'>
          <h2 className='text-lg font-bold text-green-800 ml-8'>Temperature Trends</h2>
          <div className='overflow-auto'>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>*/}
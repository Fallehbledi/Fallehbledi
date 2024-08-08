"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import logo from '../../../../public/image/WeatherIcons/clear-day.svg'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Page() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sousse%20Tunisia?unitGroup=metric&include=days%2Ccurrent%2Calerts&key=9PBBQHHUNP77LD88TPFGWX7L5&contentType=json", {
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
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const current = data.currentConditions;
  const forecast = data.days.slice(1, 7); // Get the next 7 days forecast
  console.log([current,forecast])
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
    <div className='py-6 md:max-w-5xl mx-auto mb-4 w-full px-4'>
      <div className='flex-1 p-3 text-white'>
        <div className='max-w-sm w-full lg:max-w-full shadow px-6 py-6 rounded-lg mb-6 mt-20 bg-green-300 mx-auto'>
          <div className='flex flex-col gap-y-3 mb-5 p-4 bg-blue-950 bg-opacity-20 rounded-lg border border-white border-opacity-40'>
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
    </div>
  );
}

export default Page;
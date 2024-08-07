"use client";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = ({ chartData, chartOptions }: { chartData: any; chartOptions: any }) => {
  return (
    <div className='mt-6 bg-gray-200 rounded-xl'>
      <h2 className='text-lg font-bold text-green-800 ml-8'>Temperature Trends</h2>
      <div className='overflow-auto'>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ChartComponent;
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PriceChart = ({ data }) => {
  if (!data || !data.prices) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: data.prices.map(item => item.title),
    datasets: [
      {
        label: 'Price (TND)',
        data: data.prices.map(item => parseFloat(item.price.replace(',', '.').replace(' TND', ''))),
        backgroundColor: data.prices.map(item => (item.status === 'up' ? 'rgba(75, 192, 192, 0.2)' : 'rgba(255, 99, 132, 0.2)')),
        borderColor: data.prices.map(item => (item.status === 'up' ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)')),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product Prices',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default PriceChart;
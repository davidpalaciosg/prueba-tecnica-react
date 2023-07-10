import React from 'react';
import { SingleTramo } from '../../services/backend/backendTypes';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export default function BarChartTramo({ tramo }: { tramo: SingleTramo }) {
  const dataBar = {
    labels: ['Consumo', 'Costo', 'Perdidas'],
    datasets: [
      {
        label: 'Tramo',
        data: [tramo.consumo, tramo.costo, tramo.perdidas],
        backgroundColor: ['blue', 'yellow', 'red'],
        borderColor: ['black', 'black', 'black'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'black', // Label text color
        },
      },
      title: {
        display: true,
        text: tramo.Linea,
        color: 'black', // Title text color
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: 'black',
        bodyColor: 'black',
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.1)', // Grid line color
          },
          ticks: {
            color: 'black', // Y-axis label color
          },
        },
        x: {
          grid: {
            display: false, // Hide the x-axis grid lines
          },
          ticks: {
            color: 'black', // X-axis label color
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Bar data={dataBar} options={options} />;
}

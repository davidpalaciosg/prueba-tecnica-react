import React from 'react';
import { SingleCliente } from '../../../services/backend/backendTypes';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { capitalize } from '../../../utils/String';

interface BarChartClienteProps {
  clientes: SingleCliente[];
  business: string;
  expenseType: string;
}

export default function LineChartCliente({ clientes, business, expenseType }: BarChartClienteProps) {

  const title = capitalize(expenseType)+" "+capitalize(business);

  const getData = () => {
    const field = `${expenseType}_${business}`;
    return clientes.map(cliente => cliente[field]); 
  };


const dataBar = {
    labels: clientes.map(cliente => cliente.Linea),
    datasets: [
      {
        label: title,
        data: getData(),
        backgroundColor: ['gray'],
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
        text: title,
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

  return <Line data={dataBar} options={options} />;
}

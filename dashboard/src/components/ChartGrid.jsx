// src/components/ChartGrid.jsx
import React, { useState } from 'react';
import './ChartGrid.css'; 
import { useDrop } from 'react-dnd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import styles for resizable

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend);

const ChartGrid = () => {
  const [charts, setCharts] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'chart',
    drop: (item) => addChart(item.type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addChart = (type) => {
    setCharts((prevCharts) => [...prevCharts, type]);
  };

  const getChartComponent = (type) => {
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: `${type} Chart`,
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      }],
    };

    if (type === 'Bar') return <Bar data={data} />;
    if (type === 'Line') return <Line data={data} />;
    if (type === 'Pie') return <Pie data={data} />;
    return null;
  };

  return (
    <div
      ref={drop}
      className={`flex-grow p-4 grid grid-cols-2 gap-4 ${isOver ? 'bg-gray-200' : ''}`}
    >
      {charts.map((chart, index) => (
        <ResizableBox
          key={index}
          width={300}
          height={300}
          minConstraints={[100, 100]}
          maxConstraints={[600, 600]}
          className="p-4 border rounded bg-white shadow"
          handle={<span className="resizable-handle" />}
        >
          {getChartComponent(chart)}
        </ResizableBox>
      ))}
    </div>
  );
};

export default ChartGrid;

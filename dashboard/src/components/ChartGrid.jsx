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
import { FaTimes } from 'react-icons/fa'; // Import the icon for the close button

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
    setCharts((prevCharts) => [...prevCharts, { id: Date.now(), type, width: 300, height: 300 }]);
  };

  const deleteChart = (id) => {
    setCharts(charts.filter(chart => chart.id !== id));
  };

  const getChartComponent = (chart) => {
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: `${chart.type} Chart`,
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

    if (chart.type === 'Bar') return <Bar data={data} />;
    if (chart.type === 'Line') return <Line data={data} />;
    if (chart.type === 'Pie') return <Pie data={data} />;
    return null;
  };

  const handleMouseDown = (e, chartId) => {
    const chart = charts.find(c => c.id === chartId);
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = chart.width;
    const startHeight = chart.height;

    const onMouseMove = (e) => {
      const newWidth = Math.max(100, startWidth + (e.clientX - startX));
      const newHeight = Math.max(100, startHeight + (e.clientY - startY));
      setCharts(charts.map(c => c.id === chartId ? { ...c, width: newWidth, height: newHeight } : c));
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div
      ref={drop}
      className={`flex-grow p-4 grid grid-cols-2 gap-4 ${isOver ? 'bg-gray-200' : ''}`}
    >
      {charts.map((chart) => (
        <div
          key={chart.id}
          className="chart-container relative p-4 border rounded bg-white shadow"
          style={{ width: chart.width, height: chart.height }}
          onMouseDown={(e) => handleMouseDown(e, chart.id)}
        >
          {/* Close button */}
          <button
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            onClick={() => deleteChart(chart.id)}
            aria-label="Delete Chart"
          >
            <FaTimes size={20} />
          </button>
          {getChartComponent(chart)}
        </div>
      ))}
    </div>
  );
};

export default ChartGrid;

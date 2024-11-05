// src/Dashboard.js
import React, { useState } from 'react';
import { Bar, Line, Pie, Doughnut, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Register required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [chartDataList, setChartDataList] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [chartType, setChartType] = useState("");
  const [dataSelected, setDataSelected] = useState(false);

  // Define dataset functions
  const getDataOne = () => [
    { label: 'Jan', value: 120 },
    { label: 'Feb', value: 200 },
    { label: 'Mar', value: 150 },
    { label: 'Apr', value: 80 },
    { label: 'May', value: 220 }
  ];

  const getDataTwo = () => [
    { label: 'Mon', value: 300 },
    { label: 'Tue', value: 250 },
    { label: 'Wed', value: 400 },
    { label: 'Thu', value: 150 },
    { label: 'Fri', value: 330 }
  ];

  const getDataThree = () => [
    { label: 'Product A', value: 500 },
    { label: 'Product B', value: 700 },
    { label: 'Product C', value: 300 },
    { label: 'Product D', value: 400 }
  ];

  const getDataFour = () => [
    { label: 'Q1', value: 800 },
    { label: 'Q2', value: 950 },
    { label: 'Q3', value: 700 },
    { label: 'Q4', value: 850 }
  ];

  const getDataFive = () => [
    { label: 'North', value: 600 },
    { label: 'South', value: 450 },
    { label: 'East', value: 700 },
    { label: 'West', value: 500 }
  ];

  // Define color options for charts
  const colorOptions = [
    'rgba(75,192,192,0.4)',
    'rgba(255,99,132,0.4)',
    'rgba(54,162,235,0.4)',
    'rgba(255,206,86,0.4)',
    'rgba(153,102,255,0.4)',
  ];

  // Handle dataset selection
  const handleDatasetChange = (event) => {
    const selectedOption = event.target.value;

    switch (selectedOption) {
      case 'dataOne':
        setSelectedData(getDataOne());
        setDataSelected(true);
        break;
      case 'dataTwo':
        setSelectedData(getDataTwo());
        setDataSelected(true);
        break;
      case 'dataThree':
        setSelectedData(getDataThree());
        setDataSelected(true);
        break;
      case 'dataFour':
        setSelectedData(getDataFour());
        setDataSelected(true);
        break;
      case 'dataFive':
        setSelectedData(getDataFive());
        setDataSelected(true);
        break;
      default:
        setSelectedData([]);
        setDataSelected(false);
    }
  };

  // Handle chart type selection and display the chart
  const handleChartTypeChange = (event) => {
    const selectedChartType = event.target.value;

    const labels = selectedData.map(item => item.label);
    const values = selectedData.map(item => item.value);

    const data = {
      labels,
      datasets: [
        {
          label: 'Dataset',
          data: values,
          backgroundColor: colorOptions[0], // Default color
          borderColor: colorOptions[0].replace(/0.4/, '1'), // Solid color for border
          borderWidth: 1
        }
      ]
    };

    // Add new chart to the list
    setChartDataList([...chartDataList, { type: selectedChartType, data, color: colorOptions[0] }]);

    // Reset selections
    setSelectedData([]);
    setChartType("");
    setDataSelected(false);
  };

  // Handle changing chart type or color of an existing chart
  const changeChartTypeOrColor = (index, newType, newColor) => {
    const updatedChartList = chartDataList.map((chart, i) =>
      i === index ? { ...chart, type: newType, color: newColor, data: { ...chart.data, datasets: [{ ...chart.data.datasets[0], backgroundColor: newColor, borderColor: newColor.replace(/0.4/, '1') }] } } : chart
    );
    setChartDataList(updatedChartList);
  };

  // Render chart based on type
  const renderChart = (chart) => {
    switch (chart.type) {
      case 'Bar':
        return <Bar data={chart.data} />;
      case 'Line':
        return <Line data={chart.data} />;
      case 'Pie':
        return <Pie data={chart.data} />;
      case 'Doughnut':
        return <Doughnut data={chart.data} />;
      case 'Radar':
        return <Radar data={chart.data} />;
      default:
        return null;
    }
  };

  // Delete chart from the list
  const deleteChart = (index) => {
    const updatedCharts = chartDataList.filter((_, i) => i !== index);
    setChartDataList(updatedCharts);
  };

  return (
    <div>
      <h1>Dynamic Dashboard</h1>

      {/* Dataset Dropdown */}
      <label htmlFor="datasetSelect">Choose Dataset:</label>
      <select
        id="datasetSelect"
        onChange={handleDatasetChange}
        value={dataSelected ? selectedData : ""}
      >
        <option value="">Select Dataset</option>
        <option value="dataOne">Monthly Data</option>
        <option value="dataTwo">Weekly Data</option>
        <option value="dataThree">Product Sales</option>
        <option value="dataFour">Quarterly Data</option>
        <option value="dataFive">Regional Sales</option>
      </select>

      {/* Conditionally render Chart Type Dropdown */}
      {dataSelected && (
        <>
          <label htmlFor="chartTypeSelect">Choose Chart Type:</label>
          <select
            id="chartTypeSelect"
            onChange={handleChartTypeChange}
            value={chartType}
          >
            <option value="">Select Chart Type</option>
            <option value="Bar">Bar Chart</option>
            <option value="Line">Line Chart</option>
            <option value="Pie">Pie Chart</option>
            <option value="Doughnut">Doughnut Chart</option>
            <option value="Radar">Radar Chart</option>
          </select>
        </>
      )}

      {/* Render all selected charts */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {chartDataList.map((chart, index) => (
          <div key={index} style={{ position: 'relative', width: '400px', height: '400px' }}>
            {/* Cancel icon */}
            <FontAwesomeIcon
              icon={faTimes}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
                color: 'red',
                zIndex: 1
              }}
              onClick={() => deleteChart(index)}
            />

            {/* Chart type dropdown for each chart */}
            <select
              style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}
              value={chart.type}
              onChange={(e) => changeChartTypeOrColor(index, e.target.value, chart.color)}
            >
              <option value="Bar">Bar Chart</option>
              <option value="Line">Line Chart</option>
              <option value="Pie">Pie Chart</option>
              <option value="Doughnut">Doughnut Chart</option>
              <option value="Radar">Radar Chart</option>
            </select>

            {/* Color dropdown for each chart */}
            <select
              style={{ position: 'absolute', top: '10px', left: '150px', zIndex: 1 }}
              value={chart.color}
              onChange={(e) => changeChartTypeOrColor(index, chart.type, e.target.value)}
            >
              {colorOptions.map((color, colorIndex) => (
                <option key={colorIndex} value={color}>{`Color ${colorIndex + 1}`}</option>
              ))}
            </select>

            {/* Render the chart */}
            {renderChart(chart)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

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
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1
        }
      ]
    };

    // Add new chart to the list
    setChartDataList([...chartDataList, { type: selectedChartType, data }]);

    // Reset selections
    setSelectedData([]);
    setChartType("");
    setDataSelected(false);
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
          <div key={index} style={{ width: '400px', height: '400px' }}>
            {renderChart(chart)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

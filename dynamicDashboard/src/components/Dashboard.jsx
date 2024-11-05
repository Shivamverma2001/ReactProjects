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
  Legend,
} from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

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
  const [chartType, setChartType] = useState('');
  const [dataSelected, setDataSelected] = useState(false);

  // Define dataset functions
  const getDataOne = () => ({
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [30, 20, 50, 40, 70],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  });

  const getDataTwo = () => ({
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Weekly Sales',
        data: [20, 35, 60, 45],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  const getDataThree = () => ({
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Product Sales',
        data: [120, 150, 80],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  });

  const getDataFour = () => ({
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Quarterly Performance',
        data: [200, 300, 400, 500],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  });

  const getDataFive = () => ({
    labels: ['Region 1', 'Region 2', 'Region 3'],
    datasets: [
      {
        label: 'Regional Sales',
        data: [50, 75, 100],
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  });

  // Define color options with names
  const colorOptions = [
    { name: 'Red', value: 'rgba(255, 99, 132, 0.6)' },
    { name: 'Blue', value: 'rgba(54, 162, 235, 0.6)' },
    { name: 'Yellow', value: 'rgba(255, 206, 86, 0.6)' },
    { name: 'Green', value: 'rgba(75, 192, 192, 0.6)' },
    { name: 'Purple', value: 'rgba(153, 102, 255, 0.6)' },
    { name: 'Orange', value: 'rgba(255, 159, 64, 0.6)' },
  ];

  const handleDatasetChange = (event) => {
    const selectedOption = event.target.value;
    setDataSelected(true);
    switch (selectedOption) {
      case 'dataOne':
        setSelectedData(getDataOne());
        break;
      case 'dataTwo':
        setSelectedData(getDataTwo());
        break;
      case 'dataThree':
        setSelectedData(getDataThree());
        break;
      case 'dataFour':
        setSelectedData(getDataFour());
        break;
      case 'dataFive':
        setSelectedData(getDataFive());
        break;
      default:
        break;
    }
  };

  const handleChartTypeChange = (event) => {
    const selectedChartType = event.target.value;
    setChartType(selectedChartType);
    if (selectedChartType) {
      setChartDataList((prev) => [
        ...prev,
        { type: selectedChartType, data: selectedData, backgroundColor: selectedData.datasets[0].backgroundColor },
      ]);
      setDataSelected(false);
    }
  };

  const changeChartTypeOrColor = (index, newType) => {
    const updatedCharts = [...chartDataList];
    updatedCharts[index].type = newType;
    setChartDataList(updatedCharts);
  };

  const changeChartColor = (index, newColor) => {
    const updatedCharts = [...chartDataList];
    updatedCharts[index].data.datasets[0].backgroundColor = newColor;
    setChartDataList(updatedCharts);
  };

  const renderChart = (chart, width, height) => {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    switch (chart.type) {
      case 'Bar':
        return <Bar data={chart.data} options={options} />;
      case 'Line':
        return <Line data={chart.data} options={options} />;
      case 'Pie':
        return <Pie data={chart.data} options={options} />;
      case 'Doughnut':
        return <Doughnut data={chart.data} options={options} />;
      case 'Radar':
        return <Radar data={chart.data} options={options} />;
      default:
        return null;
    }
  };

  const deleteChart = (index) => {
    const updatedCharts = chartDataList.filter((_, i) => i !== index);
    setChartDataList(updatedCharts);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dynamic Dashboard</h1>

      <label htmlFor="datasetSelect" className="block mb-2">
        Choose Dataset:
      </label>
      <select
        id="datasetSelect"
        onChange={handleDatasetChange}
        className="mb-4 p-2 border rounded"
      >
        <option value="">Select Dataset</option>
        <option value="dataOne">Monthly Data</option>
        <option value="dataTwo">Weekly Data</option>
        <option value="dataThree">Product Sales</option>
        <option value="dataFour">Quarterly Data</option>
        <option value="dataFive">Regional Sales</option>
      </select>

      {dataSelected && (
        <>
          <label htmlFor="chartTypeSelect" className="block mb-2">
            Choose Chart Type:
          </label>
          <select
            id="chartTypeSelect"
            onChange={handleChartTypeChange}
            className="mb-4 p-2 border rounded"
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

      <div className="flex flex-wrap gap-4">
        {chartDataList.map((chart, index) => (
          <ResizableBox
            key={index}
            width={400}
            height={400}
            minConstraints={[200, 200]}
            maxConstraints={[600, 600]}
            resizeHandles={['se']} // Bottom right corner for resizing
            className="bg-white shadow-lg border rounded relative"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="absolute top-2 right-2 cursor-pointer text-red-500"
              onClick={() => deleteChart(index)}
            />

            <select
              value={chart.type}
              onChange={(e) => changeChartTypeOrColor(index, e.target.value)}
              className="absolute top-2 left-2 z-10 bg-white border rounded"
            >
              <option value="Bar">Bar Chart</option>
              <option value="Line">Line Chart</option>
              <option value="Pie">Pie Chart</option>
              <option value="Doughnut">Doughnut Chart</option>
              <option value="Radar">Radar Chart</option>
            </select>

            <select
              value={chart.data.datasets[0].backgroundColor}
              onChange={(e) => changeChartColor(index, e.target.value)}
              className="absolute top-2 left-40 z-10 bg-white border rounded"
            >
              {colorOptions.map((color, colorIndex) => (
                <option key={colorIndex} value={color.value}>
                  {color.name}
                </option>
              ))}
            </select>

            <div style={{ width: '100%', height: '100%' }}>
              {renderChart(chart, 400, 400)}
            </div>
          </ResizableBox>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea, Bubble, Scatter } from 'react-chartjs-2';
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
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-resizable/css/styles.css';
import 'react-grid-layout/css/styles.css';

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

const ResponsiveGridLayout = WidthProvider(Responsive);

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
        { id: `chart-${Date.now()}`, type: selectedChartType, data: selectedData, backgroundColor: selectedData.datasets[0].backgroundColor },
      ]);
      setDataSelected(false);
    }
  };

  const changeChartTypeOrColor = (id, newType) => {
    const updatedCharts = chartDataList.map(chart => chart.id === id ? { ...chart, type: newType } : chart);
    setChartDataList(updatedCharts);
  };

  const changeChartColor = (id, newColor) => {
    const updatedCharts = chartDataList.map(chart => chart.id === id ? {
      ...chart,
      data: {
        ...chart.data,
        datasets: chart.data.datasets.map(ds => ({ ...ds, backgroundColor: newColor })),
      },
    } : chart);
    setChartDataList(updatedCharts);
  };

  const deleteChart = (id) => {
    const updatedCharts = chartDataList.filter(chart => chart.id !== id);
    setChartDataList(updatedCharts);
  };

  const renderChart = (chart) => {
    const options = { responsive: true, maintainAspectRatio: false };
    switch (chart.type) {
      case 'Bar': return <Bar data={chart.data} options={options} />;
      case 'Line': return <Line data={chart.data} options={options} />;
      case 'Pie': return <Pie data={chart.data} options={options} />;
      case 'Doughnut': return <Doughnut data={chart.data} options={options} />;
      case 'Radar': return <Radar data={chart.data} options={options} />;
      case 'PolarArea': return <PolarArea data={chart.data} options={options} />;
      case 'Bubble': return <Bubble data={chart.data} options={options} />;
      case 'Scatter': return <Scatter data={chart.data} options={options} />;
      default: return null;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dynamic Dashboard</h1>
      <label htmlFor="datasetSelect" className="block mb-2">Choose Dataset:</label>
      <select id="datasetSelect" onChange={handleDatasetChange} className="mb-4 p-2 border rounded">
        <option value="">Select Dataset</option>
        <option value="dataOne">Monthly Data</option>
        <option value="dataTwo">Weekly Data</option>
        <option value="dataThree">Product Sales</option>
        <option value="dataFour">Quarterly Data</option>
        <option value="dataFive">Regional Sales</option>
      </select>
      {dataSelected && (
        <>
          <label htmlFor="chartTypeSelect" className="block mb-2">Choose Chart Type:</label>
          <select id="chartTypeSelect" onChange={handleChartTypeChange} className="mb-4 p-2 border rounded">
            <option value="">Chart Type</option>
            <option value="Bar">Bar Chart</option>
            <option value="Line">Line Chart</option>
            <option value="Pie">Pie Chart</option>
            <option value="Doughnut">Doughnut Chart</option>
            <option value="Radar">Radar Chart</option>
            <option value="PolarArea">Polar Area</option>
            <option value="Bubble">Bubble Chart</option>
            <option value="Scatter">Scatter Chart</option>
          </select>
        </>
      )}
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: chartDataList.map((chart, index) => ({ i: chart.id, x: index % 3, y: Math.floor(index / 3), w: 1, h: 2 })) }}
        cols={{ lg: 3 }}
        rowHeight={200}
        width={1200}
      >
        {chartDataList.map((chart) => (
          
          <div key={chart.id} className="bg-white shadow-lg border rounded relative p-2">
            <select onChange={(e) => changeChartTypeOrColor(chart.id, e.target.value)} className="mt-2">
              <option value="">Change Chart Type</option>
              <option value="Bar">Bar</option>
              <option value="Line">Line</option>
              <option value="Pie">Pie</option>
              <option value="Doughnut">Doughnut</option>
              <option value="Radar">Radar</option>
              <option value="PolarArea">PolarArea</option>
              <option value="Bubble">Bubble</option>
              <option value="Scatter">Scatter</option>
            </select>
            <select onChange={(e) => changeChartColor(chart.id, e.target.value)} className="mt-2">
              <option value="">Change Chart Color</option>
              {colorOptions.map(color => <option key={color.value} value={color.value}>{color.name}</option>)}
            </select>
            <FontAwesomeIcon icon={faTimes} className="absolute top-2 right-2 cursor-pointer" onClick={() => deleteChart(chart.id)} />
            {renderChart(chart)}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;

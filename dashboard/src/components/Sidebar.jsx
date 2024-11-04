// src/components/Sidebar.jsx
import React from 'react';
import ChartItem from './ChartItem';
import { chartTypes } from './ChartTypes';

const Sidebar = () => {
  return (
    <div className="w-1/4 p-4 bg-gray-200">
      <h2 className="text-xl font-bold mb-4">Chart Options</h2>
      {chartTypes.map((chart) => (
        <ChartItem key={chart.id} type={chart.type} />
      ))}
    </div>
  );
};

export default Sidebar;

// src/components/ChartItem.jsx
import React from 'react';
import { useDrag } from 'react-dnd';

const ChartItem = ({ type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'chart',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 bg-blue-500 text-white rounded mb-2 ${isDragging ? 'opacity-50' : ''}`}
    >
      {type} Chart
    </div>
  );
};

export default ChartItem;

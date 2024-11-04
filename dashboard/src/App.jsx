// src/App.jsx
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import ChartGrid from './components/ChartGrid';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen">
        <Sidebar />
        <ChartGrid />
      </div>
    </DndProvider>
  );
};

export default App;

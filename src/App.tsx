import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';

import './index.css';

const App: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <MainContent />
    </div>
  );
};

export default App;


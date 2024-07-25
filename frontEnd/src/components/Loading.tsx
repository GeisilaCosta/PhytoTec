import React from 'react';
import '../App.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="loading-dot" />
        <div className="loading-dot" />
        <div className="loading-dot" />
      </div>
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
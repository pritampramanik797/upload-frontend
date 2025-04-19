import React from 'react';
import UploadBox from './components/UploadBox';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="heading-section">
        <h1>Upload Document Here</h1>
        <p>Here you can uploaad company related document in PDF format.</p>
      </div>
      <UploadBox />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter } from '@react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.hydrate(
  <React.StrictMode>
    <BrowserRouter.StrictMode>
      <App />
    </BrowserRouter.StrictMode>
  </React.StrictMode>
);



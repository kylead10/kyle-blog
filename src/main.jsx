import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter></BrowserRouter>
  </React.StrictMode>
);

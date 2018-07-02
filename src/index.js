import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.css';
import employee from './employees'

ReactDOM.render(
  <App employees={employee}/>,
  document.getElementById('root')
);

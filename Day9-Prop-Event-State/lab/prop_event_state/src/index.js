import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example2 from './Example2';
import Lab2main from './Lab2main';
import Lab3 from './lab3eventCom';
import EventFunc from './lab4eventFunc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventFunc />
    <Lab3 />
    <Lab2main />
    <App />
    <Example2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

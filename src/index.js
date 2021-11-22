import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContext from './context/ThemeContext';

ReactDOM.render(
  <ThemeContext.Provider value='red'>
    <React.StrictMode>
      <App />,
    </React.StrictMode>
  </ThemeContext.Provider>,
  document.getElementById('root')
);

reportWebVitals();

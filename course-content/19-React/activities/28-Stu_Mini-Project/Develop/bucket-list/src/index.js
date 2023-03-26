import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// StrictMode is a tool for highlighting potential problems in an application. 
// Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

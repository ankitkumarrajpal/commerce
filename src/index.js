import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

 import {positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store} >
    <AlertProvider template={AlertTemplate} {...options} >
    <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import store from './store';
// import { Provider } from 'react-redux';


// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
//   transitions
//   : transitions.SCALE
// }

// ReactDOM.render(
//   <Provider store={store} >
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

/* <AlertProvider template={AlertTemplate} {...options} >
</ AlertProvider > */



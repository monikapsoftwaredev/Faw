import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import './index.css';
import App from './App';
import  './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import reportWebVitals from './reportWebVitals';

import{ theme} from './Theme';


ReactDOM.render(
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
  </BrowserRouter>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



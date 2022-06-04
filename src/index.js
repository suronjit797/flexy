import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';


const theme = createTheme({
  palette: {
    light: {
      main: 'rgb(250, 251, 251)',
      contrastText: 'rgb(148, 157, 178)',
    },
    third: {
      main: 'rgb(3, 201, 215)',
      contrastText: '#fff',
    },
    fourth: {
      main: 'rgb(251, 150, 120)',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'DM Sans, sans-serif',
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

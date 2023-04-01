import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import ProductProvider from './store/contextProduct';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ProductProvider>
      <App /> 
    </ProductProvider>
  </StyledEngineProvider>,
  document.getElementById('root')
);

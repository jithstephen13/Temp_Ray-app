import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ColorModeScript ,ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import LogibContextProvider from './Context/LogibContext';
import CatgortContexProvider, { CatgortContex } from './Context/CatgortContex';
import CartContexProvider from './Context/CartContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
     <ColorModeScript initialColorMode="light" ></ColorModeScript>
     <LogibContextProvider>
      <CatgortContexProvider>
        <CartContexProvider>
    <BrowserRouter>
    <App />
 </BrowserRouter>
 </CartContexProvider>
 </CatgortContexProvider>
    </LogibContextProvider>
  </ChakraProvider>
);



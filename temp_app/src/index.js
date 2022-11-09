import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ColorModeScript ,ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
     <ColorModeScript initialColorMode="light" ></ColorModeScript>
    <BrowserRouter>
    <App />
 </BrowserRouter>
    
  </ChakraProvider>
);



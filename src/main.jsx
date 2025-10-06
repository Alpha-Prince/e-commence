import React from 'react';
import ReactDom from 'react-dom/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Import HashRouter
import './index.css';
import App from './App.jsx';
import ShopContextProvider from './Context/ShopContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Use HashRouter to wrap your entire application */}
    <HashRouter>
      <ShopContextProvider>
        <App/>
      </ShopContextProvider>
    </HashRouter>
  </StrictMode>,
);

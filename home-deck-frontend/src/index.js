import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';

import './index.css';
import Home from './Components/Home';

const ScreenStyle = styled.div`   
  width: 100vw;
  height: 100vh;

`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ScreenStyle>
      <Home />
    </ScreenStyle>

  </React.StrictMode>
);


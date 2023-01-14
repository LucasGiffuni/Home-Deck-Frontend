import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

import './index.css';
import Home from './Components/Home';
import { app } from './Components/Services/firebase-config';
import { FirebaseAppProvider } from 'reactfire'


const ScreenStyle = styled.div`   
  width: 100vw;
  height: 100vh;

`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ScreenStyle>
    <FirebaseAppProvider firebaseApp={app} >
      <Home />
    </FirebaseAppProvider>
  </ScreenStyle>

);


import React, { useState } from 'react'
import styled from 'styled-components';





const OnOff = styled.p`   
    text-align: left;
    color: white;
    margin: auto;
    margin-left: -20%;

     text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #d8640a,
      0 0 80px #d8640a,
      0 0 90px #d8640a,
      0 0 100px #d8640a,
      0 0 150px #d8640a;
`;


const TemperatureBody = styled.div`   
    height: 100%;
`;
const TemperatureHighIndicator = styled.div`  
    margin-left: 10%;
    margin-top: 10%;
    width: 10px;
    height: 70px;
    border-radius: 15px;

    background-color: red;
    box-shadow: 0px 0px 12px 8px rgba(179, 15, 64, 0.48); 
`;
const TemperatureMediumIndicator = styled.div`  
    margin-left: 10%;
    margin-top: 10%;
    width: 10px;
    height: 70px;
    border-radius: 15px;

    background-color: #e4e518;
    box-shadow: 0px 0px 12px 8px rgba(228, 229, 24, 0.48); 
`;
const TemperatureLowIndicator = styled.div`  
    margin-left: 10%;
    margin-top: 10%;
    width: 10px;
    height: 70px;
    border-radius: 15px;

    background-color: #00d944;
    box-shadow: 0px 0px 12px 8px rgba(0, 217, 68, 0.48); 
`;

const TemperatureNumber = styled.h1`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 2.5rem;
    margin-top: -45%;
    margin-left: 10%;
`;
const TemperatureDesc = styled.h1`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: .7rem;
    margin-left: 10%;
    margin-top: -3%;

`;
function SwitchExample(props) {



    return (

        <TemperatureBody id='TemperatureBody'>
            <TemperatureLowIndicator />
            <TemperatureNumber>15&#176; C</TemperatureNumber>
            <TemperatureDesc>Temperature</TemperatureDesc>

        </TemperatureBody>
    );
}

export default SwitchExample;
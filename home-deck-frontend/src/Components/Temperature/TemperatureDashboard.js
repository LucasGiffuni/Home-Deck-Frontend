/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';

import TemperatureDeviceComponent from './TemperatureDeviceComponent';





const TemperatureContainer = styled.div`   
    width: fit-content;
    display: grid;
    grid-template-columns: min-content min-content;
    grid-template-rows: min-content min-content;

`;
const Light1 = styled.div`   
    grid-area: 1 / 1 / 2 / 2;
  
 
    background: ${props => (props.checked ? "radial-gradient(circle at 50% 51%, rgba(245, 128, 37, 1) 50%, rgba(246, 135, 51, 1) 93%)" : "#292C33")};
    height: 100px;
    width: 150px;

    margin-right: 20px;
    margin-top: 10px;

    border-radius: 20px;
    
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgba(249,177,122,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 
`;

const Light2 = styled.div`   
    grid-area: 1 / 2 / 2 / 3;
  
    background: ${props => (props.checked ? "radial-gradient(circle at 50% 51%, rgba(245, 128, 37, 1) 50%, rgba(246, 135, 51, 1) 93%)" : "#292C33")};
    height: 100px;
    width: 150px;
    margin-top: 10px;


    border-radius: 20px;
    
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgba(249,177,122,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 

`;





export default class TemperatureDashboard extends Component {


    state = {
        b1State: true,
        b2State: true,
        b3State: true,
        b4State: true
    };


    render() {

        return (
            <TemperatureContainer id='TemperatureContainer'>
                <Light1>
                    <TemperatureDeviceComponent />

                </Light1>

                <Light2>
                    <TemperatureDeviceComponent />

                </Light2>


            </TemperatureContainer>
        )
    }

}
import React, { Component } from 'react'
import styled from 'styled-components';

import LightDeviceComponent from './LightDeviceComponent'





const LightDevicesContainer = styled.div`   
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin: 20px;

`;
const Light1 = styled.div`   
    grid-area: 1 / 1 / 2 / 2;
    text-align: right;
    background-color: #494549;
    background-image: linear-gradient(0deg, #0F2027 0%, #2C5364 100%);

    height: 200px;
    width: 30%;
    background-color: #fff;
    position: relative;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

    font-family: 'Poppins', sans-serif;
    border-radius: 10px;
    padding: 20px;

`;
const Light2 = styled.div`   
    grid-area: 1 / 2 / 2 / 3;
    text-align: right;
   
    height: 200px;
    width: 30%;
    background-color: #fff;
    position: relative;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
    border-radius: 10px;
    padding: 20px;
`;

const Light3 = styled.div`   
    grid-area: 2 / 1 / 3 / 2;
    text-align: right;
   
    height: 200px;
    width: 30%;
    background-color: #fff;
    position: relative;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
    border-radius: 10px;
    padding: 20px;
`;
const Light4 = styled.div`   
    grid-area: 2 / 2 / 3 / 3;
    text-align: right;
   
    height: 200px;
    width: 30%;
    background-color: #fff;
    position: relative;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
    border-radius: 10px;
    padding: 20px;
`;



export default class DevicesComponent extends Component {



    render() {


        return (
            <LightDevicesContainer>
                <Light1>
                    <LightDeviceComponent />

                </Light1>
                <Light2>
                    <LightDeviceComponent />

                </Light2>
                <Light3>
                    <LightDeviceComponent />

                </Light3>
                <Light4>
                    <LightDeviceComponent />

                </Light4>
            </LightDevicesContainer>
        )
    }

}
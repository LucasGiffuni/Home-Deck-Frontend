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
  

    background: ${props=>(props.checked ?"radial-gradient(circle at 50% 51%, rgba(245, 128, 37, 1) 50%, rgba(246, 135, 51, 1) 93%)" : "#292C33")};
    height: 200px;
    width: 30%;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    margin-bottom: 20px;
    
    box-shadow: ${props=>(props.checked ? "0px 0px 9px 4px rgba(249,177,122,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 

`;
const Light2 = styled.div`   
    grid-area: 1 / 2 / 2 / 3;
    background-color: #292C33;

    height: 200px;
    width: 30%;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 9px 4px rgba(0,0,0,0.48);

`;

const Light3 = styled.div`   
    grid-area: 2 / 1 / 3 / 2;
    text-align: right;
    background-color: #292C33;

    height: 200px;
    width: 30%;
    position: relative;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 9px 4px rgba(0,0,0,0.48);

`;
const Light4 = styled.div`   
    grid-area: 2 / 2 / 3 / 3;
    text-align: right;
    background-color: #292C33;

    height: 200px;
    width: 30%;
    position: relative;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 9px 4px rgba(0,0,0,0.48);

`;



export default class DevicesComponent extends Component {


    state = {
        b1State: true,
        b2State: "",
        b3State: "",
        b4State: ""


    };


    render() {
        const eventhandler = data => {
            console.log(data.target.checked)
            this.setState({
                b1State: data.target.checked
            });
        }

        return (
            <LightDevicesContainer>
                <Light1 checked={this.state.b1State} onChange={eventhandler}>
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
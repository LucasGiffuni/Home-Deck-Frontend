/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';

import LightDeviceComponent from './LightDeviceComponent'





const LightDevicesContainer = styled.div`   
    width: fit-content;
    display: grid;
    grid-template-columns: min-content min-content;
    grid-template-rows: min-content min-content;

`;
const Light1 = styled.div`   
    grid-area: 1 / 1 / 2 / 2;
  

    background: ${props => (props.checked ? "radial-gradient(circle at 50% 51%, rgba(245, 128, 37, 1) 50%, rgba(246, 135, 51, 1) 93%)" : "#292C33")};
    height: 150px;
    width: 150px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
     box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgba(249,177,122,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 

    margin-right: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
`;
const Light2 = styled.div`   
    grid-area: 1 / 2 / 2 / 3;
  
    background: ${props => (props.checked ? "radial-gradient(circle at 50% 51%, rgba(245, 128, 37, 1) 50%, rgba(246, 135, 51, 1) 93%)" : "#292C33")};
    height: 150px;
    width: 150px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgba(249,177,122,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 
    margin-top: 20px;

`;

const Light3 = styled.div`   
    grid-area: 2 / 1 / 3 / 2;

    background: ${props => (props.checked ? "radial-gradient(circle at 50% 51%, rgba(245, 128, 37, 1) 50%, rgba(246, 135, 51, 1) 93%)" : "#292C33")};
    height: 150px;
    width: 150px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgba(249,177,122,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 
`;
const Light4 = styled.div`   

    grid-area: 2 / 2 / 3 / 3;
  
    background: ${props => (props.checked ? "radial-gradient(circle at 50% 51%, rgba(245, 128, 37, 1) 50%, rgba(246, 135, 51, 1) 93%)" : "#292C33")};
    height: 150px;
    width: 150px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgba(249,177,122,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 

`;



export default class LightsDashboard extends Component {


    state = {
        b1State: true,
        b2State: true,
        b3State: true,
        b4State: true
    };


    render() {
        const eventhandler1 = data => {
            console.log(data.target.checked)
            this.setState({
                b1State: data.target.checked
            });
        }

        const eventhandler2 = data => {
            console.log(data.target.checked)
            this.setState({
                b2State: data.target.checked
            });
        }

        const eventhandler3 = data => {
            console.log(data.target.checked)
            this.setState({
                b3State: data.target.checked
            });
        }

        const eventhandler4 = data => {
            console.log(data.target.checked)
            this.setState({
                b4State: data.target.checked
            });
        }



        return (
            <LightDevicesContainer id='LightDevicesContainer'>


                <Light1 checked={this.state.b1State} onChange={eventhandler1} id='Light1'>

                    <LightDeviceComponent text={"Light 1"} />

                </Light1>
                
                <Light2 checked={this.state.b2State} onChange={eventhandler2} id='Light2'>

                    <LightDeviceComponent text={"Light 2"} />

                </Light2>

                <Light3 checked={this.state.b3State} onChange={eventhandler3} id='Light3'>

                    <LightDeviceComponent text={"Light 3"} />

                </Light3>

                <Light4 checked={this.state.b4State} onChange={eventhandler4} id='Light4'>

                    <LightDeviceComponent text={"Light 4"} />

                </Light4>
            </LightDevicesContainer>
        )
    }

}
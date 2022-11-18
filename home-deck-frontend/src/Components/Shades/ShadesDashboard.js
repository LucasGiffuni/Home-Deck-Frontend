/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';

import ShadeDeviceComponent from './ShadeDeviceComponent'





const ShadeDevicesContainer = styled.div`   
    width: fit-content;
    display: grid;
    grid-template-columns: min-content min-content;
    grid-template-rows: min-content min-content;

`;
const Shade1 = styled.div`   
    grid-area: 1 / 1 / 2 / 2;
  

    background: ${props => (props.checked ? "radial-gradient(circle at 50% 51%, #1a9ebd 50%, #2BBFE2 93%)" : "#292C33")};
    height: 150px;
    width: 150px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgb(43, 191, 226,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 

    margin-right: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
`;
const Shade2 = styled.div`   
    grid-area: 1 / 2 / 2 / 3;
  
    background: ${props => (props.checked ? "radial-gradient(circle at 50% 51%, #1a9ebd 50%, #2BBFE2 93%)" : "#292C33")};
    height: 150px;
    width: 150px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgb(43, 191, 226,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 
    margin-top: 20px;

`;

const Shade3 = styled.div`   
    grid-area: 2 / 1 / 3 / 2;

    background: ${props => (props.checked ? "radial-gradient(circle at 50% 51%, #1a9ebd 50%, #2BBFE2 93%)" : "#292C33")};
    height: 150px;
    width: 150px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgb(43, 191, 226,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 
`;
const Shade4 = styled.div`   

    grid-area: 2 / 2 / 3 / 3;
  
    background: ${props => (props.checked ? "radial-gradient(circle at 50% 51%, #1a9ebd 50%, #2BBFE2 93%)" : "#292C33")};
    height: 150px;
    width: 150px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgb(43, 191, 226,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 

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
            <ShadeDevicesContainer id='LightDevicesContainer'>


                <Shade1 checked={this.state.b1State} onChange={eventhandler1} id='Shade1'>

                    <ShadeDeviceComponent text={"Shade 1"} />

                </Shade1>
                
                <Shade2 checked={this.state.b2State} onChange={eventhandler2} id='Shade2'>

                    <ShadeDeviceComponent text={"Shade 2"} />

                </Shade2>

                <Shade3 checked={this.state.b3State} onChange={eventhandler3} id='Shade3'>

                    <ShadeDeviceComponent text={"Shade 3"} />

                </Shade3>

                <Shade4 checked={this.state.b4State} onChange={eventhandler4} id='Shade4'>

                    <ShadeDeviceComponent text={"Shade 4"} />

                </Shade4>
            </ShadeDevicesContainer>
        )
    }

}
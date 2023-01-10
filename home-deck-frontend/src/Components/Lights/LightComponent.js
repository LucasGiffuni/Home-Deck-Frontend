/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';
import LightComponent from '../Lights/LightDeviceComponent'

const LightComponentStyle = styled.div`   


    background-color: ${props => (props.checked ? "rgba(245, 128, 37, 1)" : "#2e2e2e")}; 
    height: 115px;
    width: 145px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgba(245, 128, 37, .48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 


    margin-bottom: 10px;
    margin-top: 10px;
    display: inline-block;

    margin-right: 2%;
    margin-left: 2%;

`;

export default class LightDashboard extends Component {


    state = {
        ShadeComponentState: this.props.deviceState
    };


    render() {
        const eventhandler = data => {
            this.setState({
                ShadeComponentState: !this.state.ShadeComponentState
            });
        }



        const { gridValue, componentName, token, id, deviceState, type } = this.props;
        return (

            <LightComponentStyle checked={this.state.ShadeComponentState} gridArea={gridValue} onClick={eventhandler} id={componentName}>
                <LightComponent text={componentName} id={id} token={token} deviceState={deviceState} mod={this.props.mod} type={type} />
            </LightComponentStyle>
        )
    }

}
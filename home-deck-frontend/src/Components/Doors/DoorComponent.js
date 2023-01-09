/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';
import DoorComponent from '../Doors/DoorDeviceComponent'

const DoorComponentStyle = styled.div`   


    background-color: ${props => (props.checked ? "rgb(43,191,226,1);" : "#2e2e2e")}; 
    height: 150px;
    width: 150px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgba(43, 191, 226,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 


    margin-bottom: 10px;
    margin-top: 10px;
    display: inline-block;

    margin-right: 2%;
    margin-left: 2%;

`;

export default class ShadeDashboard extends Component {


    state = {
        ShadeComponentState: this.props.deviceState
    };


    render() {
        const eventhandler = data => {
            this.setState({
                ShadeComponentState: !this.state.ShadeComponentState
            });
        }



        const { gridValue, componentName, token, id, deviceState } = this.props;
        return (

            <DoorComponentStyle checked={this.state.ShadeComponentState} gridArea={gridValue} onClick={eventhandler} id={componentName}>
                <DoorComponent text={componentName} id={id} token={token} deviceState={deviceState} mod={this.props.mod} />
            </DoorComponentStyle>
        )
    }

}
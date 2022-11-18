/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';
import LightDeviceComponent from './LightDeviceComponent'

const LightComponent = styled.div`   

    grid-area: ${props => (props.gridArea)};

    background: ${props => (props.checked ? "radial-gradient(circle at 50% 51%, rgba(245, 128, 37, 1) 50%, rgba(246, 135, 51, 1) 93%)" : "#292C33")};
    height: 150px;
    width: 150px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgba(249,177,122,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 

    margin-right: 10px;
    margin-left: 10px;

    margin-bottom: 10px;
    margin-top: 10px;

`;

export default class LightsDashboard extends Component {


    state = {
        LightComponentState: true

    };


    render() {
        const eventhandler = data => {
            console.log(data.target.checked)
            this.setState({
                LightComponentState: data.target.checked
            });
        }



        const { gridValue,componentName } = this.props;


        return (
            <LightComponent checked={this.state.LightComponentState} gridArea={gridValue} onChange={eventhandler} id='Light1'>
                <LightDeviceComponent text={componentName} />
            </LightComponent>
        )
    }

}
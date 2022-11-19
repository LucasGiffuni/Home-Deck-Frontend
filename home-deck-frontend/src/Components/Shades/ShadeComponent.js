/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';
import ShadeDeviceComponent from './ShadeDeviceComponent'

const ShadeComponent = styled.div`   

    grid-area: ${props => (props.gridArea)};

    background-color: ${props => (props.checked ? " rgb(43, 191, 226, 1)" : "#2e2e2e")}; 
    height: 150px;
    width: 150px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgba(43, 191, 226,0.48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 

    margin-right: 10px;
    margin-left: 10px;

    margin-bottom: 10px;
    margin-top: 10px;
 
`;

export default class ShadeDashboard extends Component {


    state = {
       ShadeComponentState: true
    };


    render() {
        const eventhandler = data => {
            console.log(data.target.checked)
            this.setState({
                ShadeComponentState: data.target.checked
            });
        }



        const { gridValue, componentName } = this.props;

        return (
            <ShadeComponent checked={this.state.ShadeComponentState} gridArea={gridValue} onChange={eventhandler} id='Shade1'>
                <ShadeDeviceComponent text={componentName} />
            </ShadeComponent>
        )
    }

}
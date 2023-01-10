/* eslint-disable */

import React, { Component } from 'react'
import '../Styles/DoorDeviceComponent.css'
import styled from 'styled-components';




const Button = styled.div`   
    border-radius: 30px;
    height: 50px;
    width: 50px;
    background-color: ${props => (props.checkedValue ? " rgba(245, 128, 37, 1)" : "#2e2e2e")}; 

    box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.2),
                15px 15px 15px rgba(0,0,0,0.1),
                inset -50px -50px 50px rgba(255, 255, 255, 0.2),
                inset 50px 50px 50px rgba(0,0,0,0.1);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

`;
const ButtonBody = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 100%;
    width: 100%;

`;

export default class ShadeRoundedImage extends Component {


    renderLightItem = () => {
        const { checked, state } = this.props;


        return (
            <ButtonBody id='imageBody'>
                <Button checkedValue={checked || state} id='image'>
                    <div className='Light-image'></div>
                </Button>
            </ButtonBody>
        )
    }

    renderLampItem = () => {
        const { checked, state } = this.props;


        return (
            <ButtonBody id='imageBody'>
                <Button checkedValue={checked || state} id='image'>
                    <div className='Lamp-image'></div>
                </Button>
            </ButtonBody>
        )
    }
    render() {
        const { checked, state, type } = this.props;


        if (type == "Light") {
            return this.renderLightItem()
        } else if (type == "Lamp") {
            return this.renderLampItem()
        }
        
    }

}
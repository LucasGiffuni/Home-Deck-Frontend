/* eslint-disable */
import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components';


import '../Styles/RoomPlaneItem.css'

// lindo verde  rgba(2, 135, 51, 1)

const ButtonBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  

`;
const Button = styled.div`   
    border-radius: 40px;
    min-height: 40px;
    max-height: 40px;
    min-width: 40px;
    max-width: 40px;

    background-color: ${props => (props.checkedValue ? "rgba(246, 135, 51, 1)" : "#2e2e2e")}; 
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
const DoorButton = styled.div`   
    border-radius: 40px;
    min-height: 40px;
    max-height: 40px;
    min-width: 40px;
    max-width: 40px;

    background-color: ${props => (props.checkedValue ? "rgb(43,191,226,1)" : "#2e2e2e")}; 
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

const WindowButton = styled.div`   
    border-radius: 40px;
    min-height: 40px;
    max-height: 40px;
    min-width: 40px;
    max-width: 40px;

    background-color: ${props => (props.checkedValue ? "rgb(43,191,226,1)" : "#2e2e2e")}; 
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

class RoomPlaneItem extends Component {

    renderLightItem = () => {
        const { checked, itemType } = this.props;

        return (
            <ButtonBody id='imageBody'>
                <Button checkedValue={checked} type={itemType} id='image'>
                    <div className='light-item-image'></div>
                </Button>
            </ButtonBody>
        )
    }

    renderLampItem = () => {
        const { checked } = this.props;

        return (
            <ButtonBody id='imageBody'>
                <Button checkedValue={checked} id='image'>
                    <div className='lamp-item-image'></div>
                </Button>
            </ButtonBody>
        )
    }

    renderWindowItem = () => {
        const { checked } = this.props;

        return (
            <ButtonBody id='imageBody'>
                <WindowButton checkedValue={checked} id='image'>
                    <div className='window-item-image'></div>
                </WindowButton>
            </ButtonBody>
        )
    }

    renderDoorItem = () => {
        const { checked } = this.props;

        return (
            <ButtonBody id='imageBody'>
                <DoorButton checkedValue={checked} id='image'>
                    <div className='door-item-image'></div>
                </DoorButton>
            </ButtonBody>
        )
    }



    render() {
        const { type } = this.props;

        if (type == "door") {
            return this.renderDoorItem()
        } else if (type == "light") {
            return this.renderLightItem()
        } else if (type == "lamp") {
            return this.renderLampItem()
        } else if (type == "window") {
            return this.renderWindowItem()
        }
    }
}
export default RoomPlaneItem;


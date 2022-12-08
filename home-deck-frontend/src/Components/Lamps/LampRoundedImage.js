/* eslint-disable */

import React, { Component } from 'react'
import '../Styles/LightBulbRoundedImage.css'
import styled from 'styled-components';



const ButtonBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 100%;
    width: 100%;

`;
const Button = styled.div`   
    border-radius: 30px;
    height: 35px;
    width: 35px;
    background-color: ${props => (props.checkedValue ? " rgba(246, 135, 51, 1)" : "#2e2e2e")}; 

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


export default class LampsRoundedImage extends Component {


    render() {
        const { checked } = this.props;
        return (
            <ButtonBody id='imageBody'>
                <Button checkedValue={checked} id='image'>
                    <div className='lamp-image'></div>
                </Button>
            </ButtonBody>
        )
    }

}
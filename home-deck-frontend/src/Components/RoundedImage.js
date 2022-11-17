import React, { Component } from 'react'
import './Styles/RoundedImage.css'
import styled from 'styled-components';




const Button = styled.div`   
    border-radius: 75px;
    height: 75px;
    width: 75px;
    background-color: ${props => (props.checkedValue ? " rgba(246, 135, 51, 1)" : "#2e2e2e")}; 

    margin: 10%;
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

    text-align: left;
    color: white;
    margin: auto;
    margin-left: 23%;

`;

export default class RoundedImage extends Component {


    render() {
        const { checked } = this.props;
        return (
            <ButtonBody id='imageBody'>
                <Button checkedValue={checked} id='image'>
                    <div className='img'></div>
                </Button>
            </ButtonBody>
        )
    }

}
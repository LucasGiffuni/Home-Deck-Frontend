/* eslint-disable */

import React, { Component } from 'react'
import styled from 'styled-components';

import '../Styles/NavBarButton.css'


const ButtonContainer = styled.div`   

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;    
    grid-area: ${props => (props.gridArea)};
    display:block;
    width:45px;
    height: 45px;
    border:2px solid #646c7d; 
    align-items: center;
    border-radius: 50%;
    color:#FFF;
    box-shadow: 0 0 3px #505664;
    cursor: pointer;

    :hover {
        background-color: #323449;
    }
`;



export default class NavBarButton extends Component {



    render() {
        const { gridSite } = this.props;


        return (

            <ButtonContainer  gridArea={gridSite}>


            </ButtonContainer>

        )
    }

}
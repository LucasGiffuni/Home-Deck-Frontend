/* eslint-disable */

import React, { Component } from 'react'
import styled from 'styled-components';
import NavBarButton from './NavBarButton';

import '../Styles/NavBarButton.css'

const NavBarContainer = styled.div`   
    border:2px solid #29966c; 

    width: 100%;
    height: 100%;

    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;


export default class NavBar extends Component {



    render() {


        return (
            <NavBarContainer>

                <NavBarButton gridSite={"1 / 1 / 2 / 2"} id={"DashboardButton"} />
                <NavBarButton gridSite={"12 / 1 / 13 / 2"} id={"SettingsButton"} />
                <NavBarButton gridSite={"11 / 1 / 12 / 2"} id={"LogoutButton"} />



            </NavBarContainer>
        )
    }

}
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

    constructor(props) {
        super(props);
    }



 

    render() {

        const nose = (Button) => {
            this.props.handleButton(Button)
        }


        return (
            <NavBarContainer>

                <NavBarButton gridSite={"1 / 1 / 2 / 2"} id={"DashboardButton"} type={"DashboardButton"} aux={nose} />
                <NavBarButton gridSite={"2 / 1 / 3 / 2"} id={"RoomButton"} type={"RoomButton"} aux={nose} />
                <NavBarButton gridSite={"12 / 1 / 13 / 2"} id={"SettingsButton"} type={"SettingsButton"} aux={nose} />
                <NavBarButton gridSite={"11 / 1 / 12 / 2"} id={"LogoutButton"} type={"LogoutButton"} aux={nose} />



            </NavBarContainer>
        )
    }

}
/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';
import './Styles/Home.css'

import Alert from 'react-bootstrap/Alert';
import LoginScreen from './LoginScreen';
import WeatherComponent from './Weather/WeatherComponent';
import LightsDashboard from './Lights/LightsDashboard'
import ShadesDashboard from './Shades/ShadesDashboard'
import TemperatureDashboard from './Temperature/TemperatureDashboard';
import NavBar from './NavBar/NavBar';
import OverviewDashboard from './Overview/OverviewDashboard';
import Room from './Room/Room.js';


class Home extends Component {


    state = {
        logged: false,
        jwtToken: "",
        roomButton: false,
        dashboardButton: true

    };

    renderLogin = () => {
        const eventhandler = data => {
            this.setState({
                logged: data.logged,
                jwtToken: data.jwtToken
            });
        }

        return (
            <div className='LoginStyle'>
                <LoginScreen onChange={eventhandler} />
            </div>
        );
    }


    renderRoom = () => {

        return (
            <div className='RoomStyle'>
                <Room token={this.state.jwtToken} />
                
            </div>
        );
    }

    handleNavBarButton = (Button) => {
        console.log(Button)
        console.log(this.state)

        if (Button === "LogoutButton") {
            this.setState({
                logged: false
            });
        } else if (Button === "RoomButton") {
            this.setState({
                roomButton: true,
                dashboardButton: false,

            });
        } else if (Button === "DashboardButton") {
            this.setState({
                dashboardButton: true,
                roomButton: false,

            });
        } else {
            this.setState({
                roomButton: false,
                dashboardButton: true

            });
        }
    }




    renderDashboard = () => {

        function ThrowInvalidLoginAlert() {
            let setVisible = true;

            const setVisibleFalse = () => {
                setVisible = false;
            };
            if (setVisible) {
                return (
                    <Alert className="alert" variant="warning" onClose={() => setVisibleFalse()} dismissible>
                        <Alert.Heading>Welcome</Alert.Heading>
                        <p>

                        </p>
                    </Alert>
                );
            }
        }


        return (
            <div className='ScreenStyle'>

                <div className='OverviewDashboard'>
                    <OverviewDashboard />
                </div>

                <div className='ShadesContainer' id='ShadesContainer'>
                    <p className='ShadesDevicesTitle deviceTitlePulsate'>Shades Devices</p>
                    <ShadesDashboard />
                </div>

                <div className='TemperatureContainer' id='TemperatureContainer'>

                    <TemperatureDashboard />

                </div>


                <div className='LightsContainer' id='LightsContainer'>
                    <p className='LightsDevicesTitle deviceTitlePulsate'>Lights Devices</p>

                    <LightsDashboard />
                </div>




            </div>
        )
    }
    /*
    <div className='NavBarContainer' id='NavBarContainer'>
                        <NavBar handleButton={this.handleNavBarButton} />
                    </div>
    */

    render() {
        if (this.state.logged) {
            if (this.state.roomButton) {
                return this.renderRoom()
            } else if (this.state.dashboardButton) {
                return this.renderRoom()
            }
        } else {
            return this.renderLogin()
        }

    }
}

export default Home;
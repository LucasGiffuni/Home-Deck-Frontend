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



class Home extends Component {


    state = {
        logged: false,
        jwtToken: "",
        loginNotification: true

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
                <div className='NavBarContainer' id='NavBarContainer'>
                    <NavBar />
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



    render() {

        return this.state.logged ? this.renderDashboard() : this.renderLogin();
    }
}

export default Home;
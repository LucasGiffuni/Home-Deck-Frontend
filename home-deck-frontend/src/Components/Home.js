/* eslint-disable */
import React, { Component } from 'react'
import styled from 'styled-components';
import './Styles/Home.css'

import Alert from 'react-bootstrap/Alert';
import LoginScreen from './LoginScreen';
import WeatherComponent from './WeatherComponent';
import LightsDashboard from './LightsDashboard'
import ShadesDashboard from './ShadesDashboard'

import RoundedImage from './RoundedImage';

const ScreenStyle = styled.div`   
   height: 100vh;
   display: flex;   
   align-items: center;
   justify-content: center;
   display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
`;

const WeatherContainer = styled.div`   
  width: 25.5%;
  height: 50%;
  grid-area: 1 / 1 / 3 / 2;
`;

const LightsContainer = styled.div` 
    position: fixed; 
    bottom:0%;
    right:0%;

    width: fit-content;
    background-color: #212329;
    padding-top: .5%;
    padding-left: 1.2%;
    padding-right: 1.2%;
    padding-bottom: 1.2%;
    border-radius: 30px;
    grid-area: 1 / 2 / 2 / 3;
   

`;
const ShadesContainer = styled.div` 
    grid-area: 1 / 2 / 2 / 3;
    position: fixed; 
    right:0%;
    top: 0%;
    width: fit-content;
    background-color: #212329;
    padding-top: .5%;
    padding-left: 1.2%;
    padding-right: 1.2%;
    padding-bottom: 1.2%;
    border-radius: 30px;
   

`;

const DevicesTitle = styled.p` 
    text-align: left;
    color: white;
    margin: auto;
    font-size: 1.5rem;
     text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #d8640a,
      0 0 80px #d8640a,
      0 0 90px #d8640a,
      0 0 100px #d8640a,
      0 0 150px #d8640a;

`;

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

            <ScreenStyle>
                <LoginScreen onChange={eventhandler} />
            </ScreenStyle>
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
            <ScreenStyle>

                <ShadesContainer id='ShadesContainer'>
                    <DevicesTitle className='deviceTitlePulsate'>Shades Devices</DevicesTitle>
                    <ShadesDashboard />
                </ShadesContainer>


                <LightsContainer id='LightsContainer'>
                    <DevicesTitle className='deviceTitlePulsate'>Lights Devices</DevicesTitle>

                    <LightsDashboard />
                </LightsContainer>
            </ScreenStyle>
        )
    }



    render() {

        return this.state.logged ? this.renderDashboard() : this.renderDashboard();
    }
}

export default Home;
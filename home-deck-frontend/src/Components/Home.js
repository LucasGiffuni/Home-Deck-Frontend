import React, { Component } from 'react'
import styled from 'styled-components';
import './Styles/Home.css'

import Alert from 'react-bootstrap/Alert';
import LoginScreen from './LoginScreen';
import WeatherComponent from './WeatherComponent';
import DevicesComponent from './DevicesComponent'
import RoundedImage from './RoundedImage';

const ScreenStyle = styled.div`   
   height: 100vh;
   display: flex;   
   align-items: center;
   justify-content: center;
`;

const WeatherContainer = styled.div`   
  width: 25.5%;
  height: 50%;

`;

const LightsContainer = styled.div` 
    width: fit-content;
    background-color: #212329;
    padding-top: .5%;
    padding-left: 1.2%;
    padding-right: 1.2%;
    padding-bottom: 1.2%;
    border-radius: 30px;

    margin: 20%;
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

        console.log("Rendering Login");
        return (

            <ScreenStyle>
                <LoginScreen onChange={eventhandler} />
            </ScreenStyle>
        );
    }



    renderDashboard = () => {
        console.log("Rendering Dasboard");
        console.log("Estado: " + this.state.logged)






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
            <div>
                <LightsContainer id='LightsContainer'>
                    <DevicesTitle className='deviceTitlePulsate'>Lights Devices</DevicesTitle>

                    <DevicesComponent />
                </LightsContainer>
            </div>
        )
    }



    render() {

        return this.state.logged ? this.renderDashboard() : this.renderDashboard();
    }
}

export default Home;
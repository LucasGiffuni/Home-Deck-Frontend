import React, { Component } from 'react'
import styled from 'styled-components';
import './Styles/Home.css'

import Alert from 'react-bootstrap/Alert';
import LoginScreen from './LoginScreen';
import WeatherComponent from './WeatherComponent';
import DevicesComponent from './DevicesComponent'

const ScreenStyle = styled.div`   
   height: 100vh;
   display: flex;   
   align-items: center;
   justify-content: center;
`;

const WeatherContainer = styled.div`   
  
  
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
                <WeatherContainer>
                    <DevicesComponent />

                </WeatherContainer>
            </div>
        )
    }



    render() {

        return this.state.logged ? this.renderDashboard() : this.renderDashboard();
    }
}

export default Home;
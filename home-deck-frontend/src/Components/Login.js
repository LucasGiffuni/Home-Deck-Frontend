
import React, { Component } from 'react';
import styled from 'styled-components';
import UserLoginTextBox from './LoginScreen';


const ScreenStyle = styled.div`   
   height: 100vh;
   display: flex;   
   align-items: center;
   justify-content: center;
`;



export default class Login extends Component {



    render() {

        return (
            <ScreenStyle>
                <UserLoginTextBox />
            </ScreenStyle>
        );
    }
}

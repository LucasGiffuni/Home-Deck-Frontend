import React, { useState } from "react";
import styled from 'styled-components';
import { validateUser } from './Services/UserService';

import './LoginScreen.css'

const LoginTitle = styled.h2`   
   font-size: 50px;
   font-weight: bold;

`;


function LoginScreen() {



    const [inputtext, setinputtext] = useState({
        user: "",
        password: ""
    });

    const [warneuser, setwarneuser] = useState(false);
    const [warnpassword, setwarnpassword] = useState(false);

    const [eye, seteye] = useState(true);
    const [password, setpassword] = useState("password");
    const [type, settype] = useState(false);

    const inputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setinputtext((lastValue) => {
            return {
                ...lastValue,
                [name]: value
            }
        });

    }

    const handleSubmitClick = (e) => {
        console.log(inputtext.user);
        console.log(inputtext.password);
        validateUser(inputtext.user, inputtext.password)

    }

    
    const Eye = () => {
        if (password === "password") {
            setpassword("text");
            seteye(false);
            settype(true);
        }
        else {
            setpassword("password");
            seteye(true);
            settype(false);
        }
    }


    return (
        <div className="card">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <div className="text">
                <LoginTitle>Home Deck</LoginTitle>
                <p>Enter your credentials to access your account.</p>
            </div>
            <div className="input-text">
                <input type="text" className={` ${warneuser ? "warning" : ""}`} placeholder="Enter your user" value={inputtext.user} onChange={inputEvent} name="user" />
                <i className="fa fa-user"></i>
            </div>
            <div className="input-text">
                <input type={password} className={` ${warnpassword ? "warning" : ""} ${type ? "type_password" : ""}`} placeholder="Enter your password" value={inputtext.password} onChange={inputEvent} name="password" />
                <i className="fa fa-lock"></i>
                <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
            </div>
            <div className="buttons">
                <button onClick={handleSubmitClick}>Sign in</button>
            </div>


        </div>


    )

}
export default LoginScreen;
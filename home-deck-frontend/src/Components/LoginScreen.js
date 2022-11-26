/* eslint-disable */
import React, { useState } from "react";
import './Styles/LoginScreen.css';

import styled from 'styled-components';
import { getWeather, validateUser  } from './Services/UserService';
import Alert from 'react-bootstrap/Alert';




function LoginScreen(props) {



    const [values, setValidLogin] = useState({
        validLogin: true,
        logged: false,
        jwtToken: ""
    });

    const [inputtext, setinputtext] = useState({
        user: "",
        password: ""
    });

    React.useEffect(() => {
        if (props.onChange) {
            props.onChange(values)
        }
    }, [values.validLogin, values.logged])

    const [eye, seteye] = useState(true);
    const [password, setpassword] = useState("password");
    const [type, settype] = useState(false);
    const [invalidLogin, showInvalidLogin] = useState(false);

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
        const validateUserResponse = validateUser(inputtext.user, inputtext.password).then(data => {
            console.log(data[1])
            if (data[1] === 403) {
                setValidLogin({
                    validLogin: false,
                    logged: false
                });
                showInvalidLogin(true);
            } else {
                console.log(data[1].jwtToken)
                setValidLogin({
                    validLogin: true,
                    logged: true,
                    jwtToken: data[1].jwtToken
                })
            }
        })
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

    function ThrowInvalidLoginAlert() {
        if (invalidLogin) {
            return (
                <Alert className="alert" variant="warning" onClose={() => showInvalidLogin(false)} dismissible>
                    <Alert.Heading>Invalid Login</Alert.Heading>
                    <p>
                        Verify your credentials
                    </p>
                </Alert>
            );
        }
    }




    return (

        <div className="LoginContainer">
            <div className="box" />

            <div className="Login">
                <p className="LoginTitle"> Home Deck</p>

                <div className="Inputs">

                    <div className="input-text">
                        <input type="text" className={` ${values.validLogin === true ? "" : "warning"}`} placeholder="Enter your user" value={inputtext.user} onChange={inputEvent} name="user" />
                        <i className="fa fa-user"></i>
                    </div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                    <div className="input-text">
                        <input type={password} className={` ${values.validLogin === true ? "" : "warning"} ${type ? "type_password" : ""}`} placeholder="Enter your password" value={inputtext.password} onChange={inputEvent} name="password" />
                        <i className="fa fa-lock"></i>
                        <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </div>
                </div>

                <div className="buttons">
                    <button onClick={handleSubmitClick}>Sign in</button>
                </div>
                <ThrowInvalidLoginAlert />

            </div>

        </div>

    )

}
export default LoginScreen;
/* eslint-disable */

import React, { useState } from 'react'
import styled from 'styled-components';
import '../Styles/DoorDeviceComponent.css'
import { modifyOpenDevice } from '../Services/DevicesService';

import RoundedImage from './DoorRoundedImage';

//https://react-bootstrap.netlify.app/forms/checks-radios/#switches



const Button = styled.div`   
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin-top:5%;
    margin-left:20%;
`;

const OnOff = styled.p`   
    text-align: left;
    color: white;
    margin: auto;
    margin-left: -20%;

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


const DoorBody = styled.div`   
  width: 100%;
  height: 100%;
`;

function SwitchExample(props) {

  const [isToggled, setIsToggled] = useState(props.deviceState);

  const onToggle = () => {

    setIsToggled(!isToggled)

    const response = modifyOpenDevice(props.token, props.id, "state", !isToggled).then(data => {

      console.log(data)
    })



  };


  React.useEffect(() => {
    if (props.onChange) {
      props.onChange(isToggled)
    }
    props.mod(isToggled);

  }, [isToggled])


  return (

    <DoorBody id='LightBody'>
      <Button>

        <OnOff>{isToggled ? "OPENED" : "CLOSED"}</OnOff>
        <label className="toggle-switch">
          <input type="checkbox" checked={isToggled} onChange={onToggle} />
          <span className="switch" />
        </label>
      </Button>

      <RoundedImage checked={isToggled} />
      <h1 className="neonShadeText ShadePulsate">{props.text}</h1>
    </DoorBody>
  );
}

export default SwitchExample;
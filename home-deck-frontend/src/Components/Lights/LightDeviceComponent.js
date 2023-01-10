/* eslint-disable */

import React, { useState } from 'react'
import styled from 'styled-components';
import '../Styles/DoorDeviceComponent.css'
import { modifyLightDevice, apagarLuz, prenderLuz } from '../Services/DevicesService';

import RoundedImage from './LightRoundedImage';

//https://react-bootstrap.netlify.app/forms/checks-radios/#switches




const RoundedImageBody = styled.div`
    text-align: left;
    color: white;
    margin: auto;
    margin-top: 10%;

`;

const OnOff = styled.p`   
    text-align: left;
    color: white;
    margin: auto;
    margin-left: 42%;

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
    const modifyLight = modifyLightDevice(props.token, props.id, "state", !isToggled).then(data => {

      console.log(data)
    })

    if (!isToggled) {
      const prenderLuzResponse = prenderLuz(props.token, "device/led/" + props.text).then(data => {

        console.log(data)
      })

    } else {
      const apagarLuzResponse = apagarLuz(props.token, "device/led/" + props.text).then(data => {

        console.log(data)
      })
    }
  };


  React.useEffect(() => {
    if (props.onChange) {
      props.onChange(isToggled)
    }
    props.mod(isToggled);


  }, [isToggled])


  return (

    <DoorBody id='LightBody' onClick={onToggle}>

      <OnOff>{isToggled ? "ON" : "OFF"}</OnOff>

      <RoundedImageBody>
        <RoundedImage checked={isToggled} type={props.type} />
      </RoundedImageBody>

      <h1 className="neonShadeText ShadePulsate">{props.text}</h1>
    </DoorBody>
  );
}

export default SwitchExample;
/* eslint-disable */

import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import '../Styles/DoorDeviceComponent.css'

import RoundedImage from './LightRoundedImage';


import {prenderLuz, apagarLuz} from '../Services/DevicesService'

import { getDatabase, ref, set } from "firebase/database";





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

function LightDeviceComponent(props) {

  const [isToggled, setIsToggled] = useState(props.deviceState);



  const onToggle = () => {
    console.log("Modificando")

    setIsToggled(!isToggled)

  

    
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




  useEffect(() => {

    setIsToggled(props.deviceState)

    const db = getDatabase();
    
    set(ref(db, '/Devices/' + props.deviceID), {
      ID: props.deviceID,
      Name: props.text,
      RoomID: props.RoomID,
      Type: props.type,
      state: isToggled
    });
  }, [props.deviceState])




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

export default LightDeviceComponent;
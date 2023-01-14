/* eslint-disable */
import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components';
import LightDeviceComponent from '../Lights/LightDeviceComponent'

const LightComponentStyle = styled.div`   


    background-color: ${props => (props.checked ? "rgba(245, 128, 37, 1)" : "#2e2e2e")}; 
    height: 115px;
    width: 145px;

    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
    box-shadow: ${props => (props.checked ? "0px 0px 9px 4px rgba(245, 128, 37, .48)" : "0px 0px 9px 4px rgba(0,0,0,0.48)")}; 


    margin-bottom: 10px;
    margin-top: 10px;
    display: inline-block;

    margin-right: 2%;
    margin-left: 2%;

`;

function LightComponent(props) {
    const [lightComponentState, setLightComponentState] = useState(props.deviceState);





    function changeState() {
        setLightComponentState(!lightComponentState)
    }

    useEffect(() => {

        setLightComponentState(props.deviceState)

    }, [props.deviceState])



    return (

        <LightComponentStyle checked={lightComponentState} gridArea={props.gridValue} onClick={changeState} id={props.componentName}>
            <LightDeviceComponent text={props.componentName} id={props.id} deviceID={props.deviceID} token={props.token} deviceState={lightComponentState} mod={props.mod} type={props.type}  RoomID={props.RoomID}/>
        </LightComponentStyle>
    )


}

export default LightComponent;
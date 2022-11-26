/* eslint-disable */

import React, { useState } from 'react'
import styled from 'styled-components';
import '../Styles/RoomDevices.css'
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';
import { modifyValue } from '../Services/DevicesService';


//https://react-bootstrap.netlify.app/forms/checks-radios/#switches


const LightBody = styled.div`   
  width: 100%;
  height: 50px;
  
`;
const Button = styled.div`   
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 50px;
`;

const DeviceName = styled.p`   
    grid-area: 1 / 1 / 2 / 2;

    text-align: left;
    align-items: left;
    color: white;
    margin-top: 12%;
    margin-left:10%;
`;




const Switch = styled.label`
`;


function Device(props) {

    const [isToggled, setIsToggled] = useState(props.deviceState);
    const [value, setValue] = useState(props.value);

    React.useEffect(() => {

        if (props.onChange) {
            props.onChange(isToggled)
        }
        props.mod(isToggled);

    }, [isToggled])


    const onToggle = () => {

        setIsToggled(!isToggled)

        const response = modifyValue(props.token, props.id, "state", !isToggled).then(data => {

            console.log(data)
        })



    };






    return (

        <LightBody >
            <Button id='DeviceBody'>

                <DeviceName>{props.text}</DeviceName>
                <Switch className="toggle-switch">
                    <input type="checkbox" checked={isToggled} onChange={onToggle} />
                    <span className="switch" />

                </Switch>

                <RangeSlider
                    disabled={!isToggled}
                    value={value}
                    onChange={changeEvent => setValue(changeEvent.target.value)}
                />
            </Button>


        </LightBody>
    );
}

export default Device;
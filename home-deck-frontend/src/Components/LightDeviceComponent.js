import React, { Component } from 'react'
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import './Styles/LightDeviceComponent.css'


//https://react-bootstrap.netlify.app/forms/checks-radios/#switches


const LightBulbImage = styled.div`   
    background-image: url('./Styles/Resources/LightBulb.png');
    background-size: 100%;
    background-position: center center;
    background-size: 100% 100%;
    width: 35%;
    height: 23%;
    display: block;
    margin: auto;
`;
const Button = styled.div`   
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;
const OnOff = styled.p`   
    text-align: left;
    color: white;
`;

function SwitchExample() {
  return (
    <div>


      <Button>

        <OnOff>On</OnOff>
        <Form.Switch
          id="custom-switch"
        />


<div class="light-image" />

      </Button>

    </div>
  );
}

export default SwitchExample;
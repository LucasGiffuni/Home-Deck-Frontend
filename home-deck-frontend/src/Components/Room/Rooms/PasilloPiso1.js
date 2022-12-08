/* eslint-disable */
import React, { Component, useState, useEffect } from 'react'


import LightBulbRoundedImage from '../../Lights/LightBulbRoundedImage'
import DoorRoundedImage from '../../Doors/DoorRoundedImage'
import { getLightDevices } from '../../Services/DevicesService';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import styled from 'styled-components';
import '../Rooms/PasilloPiso1.css'





function PasilloPiso1(props) {


    return (
        <div className='PasilloPiso1Body'>
            <div className='EntradaPuertaPasillo'>
                <div className='ImagenPuertaPasillo'>
                    <DoorRoundedImage state={true} />
                </div>
            </div>



        </div>
    )


}
export default PasilloPiso1;